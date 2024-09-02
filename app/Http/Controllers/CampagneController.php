<?php

namespace App\Http\Controllers;

use App\Http\Resources\SupplierResource;
use App\Models\Campagnes;
use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Models\Critere;
use App\Models\ResultatsEvaluation;
use Carbon\Carbon;

class CampagneController extends Controller
{
    public function index()
    {
        $campagnes = Campagnes::with('suppliers')->paginate(10);

        $suppliers = Supplier::all();

        return inertia('Campagnes/Index', [
            'campagnes' => $campagnes,
            'suppliers' => SupplierResource::collection($suppliers),
        ]);
    }


    public function create()
    {
        $suppliers = Supplier::all();
        return inertia('Campagnes/Create', compact('suppliers'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
            'selectedSuppliers' => 'array',
        ]);

        $campaign = Campagnes::create([
            'nom' => $validated['nom'],
            'description' => $validated['description'],
            'date_debut' => $validated['date_debut'],
            'date_fin' => $validated['date_fin'],
        ]);

        $campaign->suppliers()->sync($validated['selectedSuppliers']);

        return redirect()->route('campagnes.index')->with('success', 'Campagne créée avec succès.');
    }

    public function show(Campagnes $campagne)
    {
        $this->checkStatus($campagne); // Assurez-vous que le statut est mis à jour avant l'affichage.
        $campagne->load('suppliers');
        return inertia('Campagnes/Show', compact('campagne'));
    }

    public function edit(Campagnes $campagne)
    {
        $suppliers = Supplier::all();
        $campagne->load('suppliers'); // Charger les fournisseurs associés à la campagne
        return inertia('Campagnes/Edit', compact('campagne', 'suppliers'));
    }

    public function update(Request $request, Campagnes $campagne)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
        ]);

        $campagne->update($validated);
        $this->checkStatus($campagne);

        if ($request->has('suppliers')) {
            $campagne->suppliers()->sync($request->suppliers);
        }

        return redirect()->route('campagnes.index')->with('success', 'Campagne mise à jour avec succès.');
    }

    public function destroy(Campagnes $campagne)
    {
        $campagne->delete();
        return redirect()->route('campagnes.index')->with('success', 'Campagne supprimée avec succès.');
    }

    private function checkStatus(Campagnes $campagne)
    {
        $now = now(); 
    
        if ($now->lt($campagne->date_debut)) {
            $campagne->statut = 'Planifiée';
        } elseif ($now->between($campagne->date_debut, $campagne->date_fin)) {
            $campagne->statut = 'En cours';
        } elseif ($now->gt($campagne->date_fin)) {
            $campagne->statut = 'Terminée';
        }
    
        $campagne->save();
    }
    

    public function evaluate(Campagnes $campagne)
    {
        $suppliers = Supplier::all();

        // Charger les fournisseurs et les critères associés à la campagne
        $campagne->load('suppliers');
        $criteres = Critere::all();

        return inertia('Campagnes/Evaluate', [
            'campagne' => $campagne,
            'criteres' => $criteres,
            'suppliers' => $campagne->suppliers,
        ]);
    }

    public function storeEvaluation(Request $request, Campagnes $campagne)
    {
        $validated = $request->validate([
            'evaluations' => 'required|array',
            'evaluations.*.supplier_id' => 'required|exists:suppliers,id',
            'evaluations.*.notes' => 'required|array',
            'evaluations.*.notes.*.critere_id' => 'required|exists:critere,id',
            'evaluations.*.notes.*.note' => 'required|numeric|min:0|max:10',
            'evaluations.*.notes.*.commentaire' => 'nullable|string',
        ]);

        foreach ($validated['evaluations'] as $evaluationData) {
            foreach ($evaluationData['notes'] as $noteData) {
                ResultatsEvaluation::updateOrCreate([
                    'campagne_id' => $campagne->id,
                    'supplier_id' => $evaluationData['supplier_id'],
                    'critere_id' => $noteData['critere_id'],
                    'note' => $noteData['note'],
                    'commentaire' => $noteData['commentaire'] ?? null,
                    'evaluation_date' => Carbon::now(), 
                ]);
            }
        }

        return redirect()->route('campagnes.stats', $campagne->id)->with('success', 'Évaluations enregistrées avec succès.');
    }

    public function stats(Campagnes $campagne)
    {
        // Load evaluation results with related suppliers and criteria
        $campagne->load('resultatsEvaluation.supplier', 'resultatsEvaluation.critere');
        
        $resultats = $campagne->resultatsEvaluation->groupBy('supplier_id')->map(function ($group) {
            return $group->first();
        })->values();
    
        // Calculate global score and qualification
        $calculation = $this->calculateGlobalScoreAndQualification($resultats);
        
        return inertia('Campagnes/Stats', [
            'campagne' => $campagne,
            'resultats' => $resultats,
            'globalScore' => $calculation['globalScore'],
            'qualification' => $calculation['qualification'],
        ]);
    }
    
    

private function calculateGlobalScoreAndQualification($resultats)
{
    if ($resultats->isEmpty()) return ['globalScore' => 0, 'qualification' => 'Faible'];

    // Calculate total score and count
    $totalScore = $resultats->sum('note');
    $count = $resultats->count();

    // Calculate the average score
    $globalScore = $count > 0 ? $totalScore / $count : 0;

    // Determine the qualification
    $qualification = $this->getQualification($globalScore);

    return ['globalScore' => $globalScore, 'qualification' => $qualification];
}


// Method to determine qualification based on the score
private function getQualification($score)
{
    if ($score >= 7) { 
        return 'Excellent';
    } elseif ($score >= 4) {
        return 'Moyen';
    } else {
        return 'Faible';
    }
}
    
}

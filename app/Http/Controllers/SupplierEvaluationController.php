<?php
namespace App\Http\Controllers;

use App\Models\Campagnes;
use App\Models\Critere;
use App\Models\ResultatEvaluation;
use App\Models\ResultatsEvaluation;
use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierEvaluationController extends Controller
{
    public function index(Campagnes $campagne)
    {
        $evaluations = $campagne->resultats()->with('supplier', 'critere')->get();
        return inertia('Evaluations/Index', compact('evaluations', 'campagne'));
    }

    public function create(Campagnes $campagne, Supplier $supplier)
    {
        $criteres = Critere::all();
        return inertia('Evaluations/Create', compact('campagne', 'supplier', 'criteres'));
    }

    public function store(Request $request, Campagnes $campagne, Supplier $supplier)
    {
        // Validation des données
        $validated = $request->validate([
            'notes' => 'required|array',
            'notes.*' => 'integer|min:0|max:100',
            'commentaires' => 'nullable|array',
            'commentaires.*' => 'string|nullable',
        ]);

        // Sauvegarde des résultats d'évaluation pour chaque critère
        foreach ($request->notes as $critere_id => $note) {
            ResultatsEvaluation::create([
                'campagne_id' => $campagne->id,
                'supplier_id' => $supplier->id,
                'critere_id' => $critere_id,
                'note' => $note,
                'commentaire' => $request->commentaires[$critere_id] ?? null,
            ]);
        }

        return redirect()->route('campagnes.show', $campagne)->with('success', 'Évaluation enregistrée avec succès.');
    }
}

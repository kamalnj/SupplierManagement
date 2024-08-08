<?php

namespace App\Http\Controllers;

use App\Models\SupplierEvaluation;
use App\Http\Requests\StoreSupplierEvaluationRequest;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierEvaluationRequest;
use App\Models\Critere;
use App\Models\Supplier;
use Illuminate\Support\Facades\Log;

class SupplierEvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

  
    public function create(Supplier $supplier)
    {
        $suppliers = Supplier::all();

        $critere = Critere::all();

        return inertia("Evaluation/Create", [
            'suppliers' => $suppliers,
            'critere' => $critere,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierEvaluationRequest $request)
    {
    
        // Validate the request data
        $validated = $request->validated();
        
        // Retrieve the supplier
        $supplier = Supplier::findOrFail($validated['supplier_id']);

        $currentDate = now();

    
        // Process each evaluation
        foreach ($validated['evaluations'] as $evaluation) {
            SupplierEvaluation::updateOrCreate(
                [
                    'supplier_id' => $supplier->id,
                    'critere_id' => $evaluation['critere_id'],
                ],
                [
                    'score' => $evaluation['score'],
                    'evaluation_date' => $currentDate, // Set evaluation_date to the current date and time
                    ]
            );
        }
    
        // Calculate total score
        $totalScore = $supplier->evaluations()->sum('score');
    
        // Determine qualification
        $qualification = $this->getQualification($totalScore);
    
        // Update supplier qualification
        $supplier->update(['qualification' => $qualification]);
    
        // Redirect with success message
        return redirect()->route('supplierEvaluation.create')->with('success', 'Evaluation submitted successfully.');
    }
    

    /**
     * Déterminer la qualification basée sur le score total.
     *
     * @param int $totalScore
     * @return string
     */
    private function getQualification($totalScore)
    {
        if ($totalScore <= 10) {
            return 'Faible';
        } elseif ($totalScore <= 20) {
            return 'Moyen';
        } elseif ($totalScore <= 30) {
            return 'Excellent';
        } else {
            return 'Non classifié'; // Pour les scores au-delà de 30
        }
    }
    
    

    /**
     * Display the specified resource.
     */
    public function show(SupplierEvaluation $supplierEvaluation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SupplierEvaluation $supplierEvaluation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierEvaluationRequest $request, SupplierEvaluation $supplierEvaluation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SupplierEvaluation $supplierEvaluation)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;
use App\Http\Resources\ContractResource;
use App\Models\Supplier;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use Inertia\Inertia;

class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contracts = Contract::paginate(10)->onEachSide(1);

        $contracts = Contract::with('supplier')->get();
        return Inertia::render('Contract/Index', [
            'contracts' => ContractResource::collection($contracts),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $suppliers = Supplier::all();
        return inertia('Contract/Create', compact('suppliers'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContractRequest $request)
    {
        // Validate the data
        $validated = $request->validated();

        // Create the contract
        $contract = Contract::create($validated);

        // Generate the PDF
        $pdf = Pdf::loadView('contrat.pdf', ['contract' => $contract]);

        // Ensure the storage directory exists
        $directory = 'public/contrats';
        if (!Storage::exists($directory)) {
            Storage::makeDirectory($directory);
        }

        $pdfPath = $directory . '/' . $contract->id . '.pdf';
        Storage::put($pdfPath, $pdf->output());

        return redirect()->route('contract.index')->with('success', 'Contract created successfully and PDF generated.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contract $contract)
    {
        $contract->load('supplier');
        return inertia('Contract/Show', compact('contract'));
    }
    public function showPdf(Contract $contract)
    {
        $contract->load('supplier');
    
        // Generate the PDF
        $pdf = Pdf::loadView('contrat.pdf', ['contract' => $contract]);
    
        // Create the filename with contract ID
        $filename = 'contract_' . $contract->nom_fournisseur. '.pdf';
    
        // Download the PDF with the generated filename
        return $pdf->download($filename);
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contract $contract)
    {
        $suppliers = Supplier::all();
        return inertia('Contract/Edit', compact('contract', 'suppliers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContractRequest $request, Contract $contract)
    {
        // Validate the data
        $validated = $request->validated();
    
        // Update the contract
        $contract->update($validated);
    
        // Regenerate the PDF
        $pdf = Pdf::loadView('Contrat.pdf', ['contract' => $contract]);
    
        // Ensure the directory exists
        $directory = 'public/contrats';
        if (!Storage::exists($directory)) {
            Storage::makeDirectory($directory);
        }
    
        $pdfPath = $directory . '/' . $contract->id . '.pdf';
        Storage::put($pdfPath, $pdf->output());
    
        return redirect()->route('contract.index')->with('success', 'Contract updated successfully and PDF regenerated.');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        // Delete the contract PDF if it exists
        $pdfPath = 'public/contracts/' . $contract->id . '.pdf';
        if (Storage::exists($pdfPath)) {
            Storage::delete($pdfPath);
        }

        // Delete the contract
        $contract->delete();

        return redirect()->route('contract.index')->with('success', 'Contract deleted successfully.');
    }
}

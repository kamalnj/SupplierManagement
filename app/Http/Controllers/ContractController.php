<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;
use App\Http\Resources\ContractResource;
use App\Models\Supplier;
use Illuminate\Http\Request; // Import the Request class
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use Inertia\Inertia;
use App\Events\ContractCreated; // Import the event class
use App\Events\ContractDeleted;
use Illuminate\Support\Facades\Log;




class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contracts = Contract::with('supplier')->paginate(10);

        return Inertia::render('Contract/Index', [
            'contracts' => ContractResource::collection($contracts),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        // Fetch all suppliers
        $suppliers = Supplier::all();
        
        // Optionally fetch specific supplier details if fournisseur_id is provided
        $fournisseurId = $request->query('fournisseur_id');
        $fournisseur = $fournisseurId ? Supplier::find($fournisseurId) : null;

        return inertia('Contract/Create', [
            'suppliers' => $suppliers,
            'fournisseur' => $fournisseur,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContractRequest $request)
    {

        // Validate and create the contract
        $validated = $request->validated();

        $validated['statut'] = 'Inactive';


        $contract = Contract::create($validated);

        $contract->load('supplier');


        // Generate and store the PDF
        $pdf = Pdf::loadView('contrat.pdf', ['contract' => $contract]);
        $directory = 'contrats/';
      
        $pdfPath = $directory . '/' . $contract->nom_fournisseur . '.pdf';
        Storage::put($pdfPath, $pdf->output());

        event(new ContractCreated($contract));


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
        $filename = 'contract_' . $contract->nom_fournisseur . '.pdf';
    
        // Define the folder path
        $folderPath = 'contrats/'; // Path relative to public/storage
    
        // Store the PDF in the defined folder
        $pdfPath = $folderPath . $filename;
        Storage::disk('public')->put($pdfPath, $pdf->output());
    
        // Return the PDF as a download response
        return response()->download(storage_path('app/public/' . $pdfPath));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contract $contract)
    {
        // Load suppliers and pass contract details
        $suppliers = Supplier::all();
        return inertia('Contract/Edit', [
            'contract' => $contract,
            'suppliers' => $suppliers,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContractRequest $request, Contract $contract)
    {
        // Validate and update the contract
        $validated = $request->validated();
        $contract->update($validated);
    
        // Regenerate the PDF
        $pdf = Pdf::loadView('contrat.pdf', ['contract' => $contract]);
        $directory = 'contrats/';
       
        $pdfPath = $directory . 'Modifiée_' . $contract->nom_fournisseur . '.pdf';
    
        // Store the PDF
        Storage::disk('public')->put($pdfPath, $pdf->output());
    
        // Provide the path to the stored file for downloading
        return response()->download(storage_path('app/public/' . $pdfPath));
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        $pdfPath = 'public/contrats/' . $contract->id . '.pdf';
        if (Storage::exists($pdfPath)) {
            Storage::delete($pdfPath);
        }
    
        // Supprimer le contrat
        $contract->delete();
    
        // Mettre à jour le statut du fournisseur si nécessaire
        $supplier = $contract->supplier;
    
        if ($supplier) {
            // Vérifier si le fournisseur a encore d'autres contrats
            $hasContracts = Contract::where('fournisseur_id', $supplier->id)->exists();
    
            if (!$hasContracts) {
                $supplier->contrat = 'non';
                $supplier->save();
            }
        }
    
        return redirect()->route('contract.index')->with('success', 'Contract deleted successfully.');
    }
    
}

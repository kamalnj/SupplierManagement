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
use App\Models\InfoGenerales;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContractReady;




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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fournisseur_id' => 'required|exists:suppliers,id',
            'nom_fournisseur' => 'required|string|max:255',
        ]);
    
        // Create the CGA
        $cga = Contract::create($validated);
    
        // Fetch supplier and infoGenerales data
        $supplier = Supplier::find($validated['fournisseur_id']);
        $infoGenerales = InfoGenerales::where('supplier_id', $validated['fournisseur_id'])->first();
    
        // Generate the PDF
        $pdf = Pdf::loadView('Contrat.pdf', [
            'supplier' => $supplier,
            'infoGenerales' => $infoGenerales,
            'nom_fournisseur' => $validated['nom_fournisseur']
        ]);
    
        // Generate a file name based on the contract ID
        $fileName = 'contrat_' . $cga->nom_fournisseur . '.pdf';
    
        // Save the PDF to storage
        Storage::disk('local')->put('contrats/' . $fileName, $pdf->output());
    
        // Update the CGA record with the PDF path
        $cga->update(['pdf_path' => 'contrats/' . $fileName]);
    
        // Send an email to the supplier
        Mail::to($supplier->email)->send(new ContractReady($supplier, $fileName));
    
        return redirect()->back()->with('success', 'CGA créé, PDF généré, et email envoyé avec succès!');
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

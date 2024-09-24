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
    public function index(Request $request)
    {
        // Start the query
        $query = Contract::with('supplier');
    
        // If there's a search term, filter the results
        if ($request->has('searchTerm') && $request->input('searchTerm') !== '') {
            $query->where('nom_fournisseur', 'like', '%' . $request->input('searchTerm') . '%');
        }
    
        // Get the paginated results
        $contracts = $query->paginate(10);
    
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
        
        $currentDate = date('d/m/y'); // Format: jj/mm/aa

        // Generate the PDF
        $pdf = Pdf::loadView('Contrat.pdf', [
            'supplier' => $supplier,
            'infoGenerales' => $infoGenerales,
            'nom_fournisseur' => $validated['nom_fournisseur'],
            'currentDate' => $currentDate, // Pass the current date to the view

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

     public function viewContract($path)
     {
         $filePath = storage_path('app/contrats/' . $path);
     
         if (file_exists($filePath)) {
             return response()->file($filePath, [
                 'Content-Type' => 'application/pdf',
                 'Content-Disposition' => 'inline; filename="' . basename($filePath) . '"',
             ]);}
         return redirect()->back()->with('error', 'Contrat non trouvé.');
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

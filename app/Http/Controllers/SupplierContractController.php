<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Storage;
use Barryvdh\DomPDF\Facade\Pdf;
use Symfony\Component\HttpFoundation\Response; // Ensure this import is correct


class SupplierContractController extends Controller
{
    use AuthorizesRequests;
    public function index()
    {
        $user = Auth::user();
        $supplier = $user->supplier;
        $contracts = Contract::where('fournisseur_id', $supplier->id)->get();

        return Inertia::render('Fournisseur/Contracts/Index', [
            'contracts' => $contracts,
        ]);
    }

    public function download($id)
    {
        $user = Auth::user();
        $supplier = $user->supplier;
    
        // Find the contract
        $contract = Contract::where('fournisseur_id', $supplier->id)->where('id', $id)->firstOrFail();
    
        // Get the path of the PDF from the database
        $pdfPath = $contract->pdf_path;
    
        // Check if file exists
        if (Storage::disk('local')->exists($pdfPath)) {
            // Return the file as a response
            return response()->file(storage_path('app/' . $pdfPath));
        }
    
        return response()->json(['error' => 'File not found'], Response::HTTP_NOT_FOUND);
    }
    public function upload(Request $request)
    {
        // Validate the request
        $request->validate([
            'contract_id' => 'required|exists:contracts,id',
            'signed_contract' => 'required|file|mimes:pdf|max:2048',
        ]);
    
        // Find the contract
        $contract = Contract::find($request->input('contract_id'));
    
        // Handle the uploaded file
        $file = $request->file('signed_contract');
    
        // Store the file in storage/app/signed_contracts
        $filePath = $file->store('signed_contracts', 'local'); // Use 'local' disk
    
        // Update the contract with the file path
        $contract->signed_contract_path = $filePath;
        $contract->save();
    
        return response()->json(['message' => 'Contract uploaded successfully.']);
    }
    

   



    
}


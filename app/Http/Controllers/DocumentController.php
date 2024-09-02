<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Documents_name;
use App\Models\NameDoc;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch suppliers with their associated documents and document names
        $suppliers = Supplier::with('documents.documentName')->get();
    
        // Fetch all document names, indexed by their ID
        $documentNames = Documents_name::all()->keyBy('id');
    
        // Fetch documents with their associated document names
        $documents = Document::with('documentName')->get();
    
        return Inertia::render('Documents/Index', [
            'suppliers' => $suppliers,
            'documentNames' => $documentNames,
            'documents' => $documents
        ]);
    }
    

    public function Documentsindex()
    {
        $user = Auth::user();
        $supplier = $user->supplier;
    
        $documentNames = Documents_name::all();
        $uploadedDocuments = Document::where('fournisseur_id', $supplier->id)->get()->keyBy('document_name_id');

    
        $documents = $documentNames->map(function ($documentName) use ($uploadedDocuments) {
            return [
                'id' => $documentName->id,
                'name' => $documentName->nom,
                'path' => $uploadedDocuments->get($documentName->id)->path ?? null,
            ];
        });
    
        return Inertia::render('Fournisseur/Document/Index', [
            'supplier' => $supplier,
            'documents' => $documents,
        ]);
    }
    
    
   
    


    public function upload(Request $request)
{
    // Validate incoming data
    $request->validate([
        'document' => 'required|file|mimes:pdf,doc,docx,jpg,png|max:2048',
        'id_nom_document' => 'required|exists:documents_name,id',
    ]);

    // Fetch the document name model using id_nom_document
    $documentName = Documents_name::findOrFail($request->input('id_nom_document'));

    // Get the authenticated supplier's information
    $user = Auth::user();
    $supplier = $user->supplier;
    $supplierFolderName = $supplier->nom;

    // Define the base path for storing documents
    $basePath = storage_path('app/Documents'); // Absolute path to the Documents folder

    // Define the path for the specific supplier's folder
    $supplierPath = "{$basePath}/{$supplierFolderName}";

    // Ensure the supplier's directory exists
    if (!file_exists($supplierPath)) {
        mkdir($supplierPath, 0755, true); // Create the directory with proper permissions
    }

    // Store the document in the supplier-specific folder
    $file = $request->file('document');
    $fileName = time() . '_' . $file->getClientOriginalName(); // Unique file name
    $file->move($supplierPath, $fileName); // Move the file to the supplier's folder

    // Save the document information in the database
    Document::create([
        'fournisseur_id' => $supplier->id,
        'id_nom_document' => $documentName->id,
        'fichier' => "Documents/{$supplierFolderName}/{$fileName}", // Relative path to the stored file
        'date_telechargement' => now(),
    ]);

    // Redirect back with a success message
    return redirect()->back()->with('success', 'Document uploaded successfully!');
}

    

    
     

     public function destroy(Document $document)
    {
        //
    }
}

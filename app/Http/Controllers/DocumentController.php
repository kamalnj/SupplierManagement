<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Http\Requests\UpdateDocumentRequest;
use App\Mail\DocumentUploaded;
use App\Models\Documents_name;
use App\Models\NameDoc;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;
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
        // Define base validation rules
        $rules = [
            'document' => 'required|file|mimes:pdf,jpg,jpeg',
            'id_nom_document' => 'required|exists:documents_name,id',
        ];
    
        // Custom error messages
        $messages = [
            'document.mimes' => 'Le fichier doit être au format PDF, JPG ou JPEG.',
            'id_nom_document.exists' => 'Le type de document sélectionné est invalide.',
        ];
    
        // Validate the document and type
        $request->validate($rules, $messages);
    
        // Fetch the document name model using id_nom_document
        $documentName = Documents_name::findOrFail($request->input('id_nom_document'));
    
        // Get the authenticated supplier's information
        $user = Auth::user();
        $supplier = $user->supplier;
        $supplierFolderName = $supplier->nom;
    
        // Define file size limits based on document type
        $maxFileSize = 2048; // Default to 2 MB
    
        // Set custom size limits for specific document types
        if (in_array($documentName->nom, ['Bilan des 3 dernières années', 'CGA'])) {
            $maxFileSize = 20480; // 20 MB
        }
    
        // Perform file size check manually
        $file = $request->file('document');
        if ($file->getSize() > $maxFileSize * 1024) {
            return Inertia::render('Fournisseur/Document/Index', [
                'supplier' => $supplier,
                'flash' => ['error' => 'Le fichier ne doit pas dépasser ' . ($maxFileSize / 1024) . ' Mo pour ce type de document.']
            ]);
        }
    
        // Check for existing document
        $existingDocument = Document::where('fournisseur_id', $supplier->id)
            ->where('id_nom_document', $documentName->id)
            ->first();
    
        if ($existingDocument) {
            $documentNames = Documents_name::all();
            $uploadedDocuments = Document::where('fournisseur_id', $supplier->id)->get()->keyBy('id_nom_document');
    
            $documents = $documentNames->map(function ($docName) use ($uploadedDocuments) {
                return [
                    'id' => $docName->id,
                    'name' => $docName->nom,
                    'path' => $uploadedDocuments->get($docName->id)?->fichier ?? null,
                ];
            });
    
            return Inertia::render('Fournisseur/Document/Index', [
                'supplier' => $supplier,
                'documents' => $documents,
                'flash' => ['error' => 'Ce document a déjà été téléchargé.']
            ]);
        }
    
        // Define the base path for storing documents
        $basePath = storage_path('app/Documents'); // Absolute path to the Documents folder
    
        // Define the path for the specific supplier's folder
        $supplierPath = "{$basePath}/{$supplierFolderName}";
    
        // Ensure the supplier's directory exists
        if (!file_exists($supplierPath)) {
            mkdir($supplierPath, 0755, true); // Create the directory with proper permissions
        }
    
        
        // Store the document in the supplier-specific folder
        $fileName = time() . '_' . $file->getClientOriginalName(); // Unique file name
        $filePath = $supplierPath . '/' . $fileName; // Full path to save the file

        $file->move($supplierPath, $fileName); // Move the file to the supplier's folder
        
        chmod($filePath, 0644); // Allow read/write for owner, and read-only for others

        // Save the document information in the database
        Document::create([
            'fournisseur_id' => $supplier->id,
            'id_nom_document' => $documentName->id,
            'fichier' => "{$supplierFolderName}/{$fileName}",
            'date_telechargement' => now(),
        ]);

        Mail::to('admin@example.com')->send(new DocumentUploaded($documentName->nom, $supplier->nom));

    
        // Redirect back with a success message
        $documentNames = Documents_name::all();
        $uploadedDocuments = Document::where('fournisseur_id', $supplier->id)->get()->keyBy('id_nom_document');
    
        $documents = $documentNames->map(function ($docName) use ($uploadedDocuments) {
            return [
                'id' => $docName->id,
                'name' => $docName->nom,
                'path' => $uploadedDocuments->get($docName->id)?->fichier ?? null,
            ];
        });
    
        return Inertia::render('Fournisseur/Document/Index', [
            'supplier' => $supplier,
            'documents' => $documents,
            'flash' => ['success' => 'Document téléchargé avec succès.']
        ]);
    }
    

    public function view($path)
    {
        $filePath = storage_path('app/Documents/' . $path);
    
        if (file_exists($filePath)) {
            return response()->file($filePath, [
                'Content-Type' => 'application/pdf',
                'Content-Disposition' => 'inline; filename="' . basename($filePath) . '"',
            ]);
        }
    
        return redirect()->back()->with('error', 'Document non trouvé.');
    }
    

public function destroy(Document $document)
{
    // Get the supplier ID from the document
    $supplierId = $document->fournisseur_id; // Assuming the Document model has a supplier_id field

    // Delete the document
    $document->delete();

    // Redirect to the supplier's information page with a success message
    return redirect()->route('supplier.indexinfo', ['id' => $supplierId]);
}

}

<?php 

namespace App\Http\Controllers;

use App\Models\Supplier;
use App\Models\InfoGenerales;
use App\Models\SupplierContact;
use App\Models\InformationsFinancieresLegales;
use App\Models\ReferencesClients;
use App\Models\CommentairesRemarques;
use App\Models\Contract;
use App\Models\Document;
use App\Models\Documents_name;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
use App\Notifications\InformationSubmitted;
use Illuminate\Support\Facades\Log;

class SupplierInformations extends Controller
{

    private function getAdmin()
{
    return User::where('usertype', 'admin')->get();
}

    private function getAuthenticatedSupplier()
    {
        return Supplier::where('user_id', Auth::id())->first();
    }

    public function indexinfoGenerales()
    {
        $supplier = $this->getAuthenticatedSupplier();
        $infoGenerales = InfoGenerales::where('supplier_id', $supplier->id)->first();
    
        return Inertia::render('Fournisseur/InformationsGenerales/Index', [
            'supplierName' => [
                'id' => $supplier->id,
                'nom' => $supplier->nom,
            ],
            'initialData' => [
                'infoGenerales' => $infoGenerales ? $infoGenerales->attributesToArray() : [], // Ensure this structure
            ],
        ]);
    }
    
    

    public function indexinformationsFinancieresLegales()
    {
        $supplier = $this->getAuthenticatedSupplier();
        $informationsFinancieresLegales = InformationsFinancieresLegales::where('supplier_id', $supplier->id)->first();
    
        return Inertia::render('Fournisseur/InformationsFinancieresLegales/Index', [
            'supplierName' => [
                'id' => $supplier->id,
                'nom' => $supplier->nom,
            ],
            'initialData' =>[
                'informationsFinancieresLegales' => $informationsFinancieresLegales ? $informationsFinancieresLegales->attributesToArray() : [],

            ]
        ]);
    }
    
    

    public function indexInformationsContact()
    {
        $supplier = $this->getAuthenticatedSupplier();

        return Inertia::render('Fournisseur/InformationsContacts/Index', [
            'supplierName' => [
                'id' => $supplier->id,
                'nom' => $supplier->nom,
            ],
            'supplierContacts' => SupplierContact::where('supplier_id', $supplier->id)->get(),
        ]);
    }

    public function destroyContact(SupplierContact $supplierContact)
    {
        $supplierContact->delete();
        return redirect()->back()->with('success', 'Contact supprimé avec succès!');
    }
    

    public function indexRéférenceClients()
    {
        $supplier = $this->getAuthenticatedSupplier();

        return Inertia::render('Fournisseur/InformationsRéférenceClients/Index', [
            'supplierName' => [
                'id' => $supplier->id,
                'nom' => $supplier->nom,
            ],
            'referencesClients' => ReferencesClients::where('supplier_id', $supplier->id)->get(),
        ]);
    }

    public function indexCommentairesRemarques()
    {
        $supplier = $this->getAuthenticatedSupplier();

        return Inertia::render('Fournisseur/InformationsCommentairesRemarques/Index', [
            'supplierName' => [
                'id' => $supplier->id,
                'nom' => $supplier->nom,
            ],
            'commentairesRemarques' => CommentairesRemarques::where('supplier_id', $supplier->id)->get(),
        ]);
    }

    public function storeInfoGenerales(Request $request)
{
    // Get the authenticated supplier
    $supplier = $this->getAuthenticatedSupplier();



    // Proceed with validation
    $validatedData = $request->validate([
        'infoGenerales.date_creation' => ['required', 'date'],
        'infoGenerales.effectif' => ['required', 'integer'],
        'infoGenerales.forme_juridique' => ['required', 'string'],
        'infoGenerales.capital_social' => ['required', 'string'],
        'infoGenerales.adresse_siege_social' => ['required', 'string'],
        'infoGenerales.numero_rc' => ['required', 'integer'],
        'infoGenerales.lieu_immatriculation' => ['required', 'string'],
        'infoGenerales.numero_if' => ['required', 'integer'],
        'infoGenerales.numero_patente' => ['required', 'integer'],
        'infoGenerales.numero_ice' => ['required', 'integer'],
        'infoGenerales.telephone' => ['required', 'string'],
        'infoGenerales.site_web' => ['nullable', 'string'],
        'infoGenerales.nom_representant' => ['required', 'string'],
        'infoGenerales.fonction_representant' => ['required', 'string'],
    ]);

    // Add supplier_id to validated data
    $validatedData['infoGenerales']['supplier_id'] = $supplier->id;

    // Create the record
    InfoGenerales::updateOrCreate(
        ['supplier_id' => $supplier->id], 
        $validatedData['infoGenerales']   
    );
    // $admin = $this->getAdmin();
    // Notification::send($admin, new InformationSubmitted('Info Generales'));

    return redirect()->route('supplier.infofinancelegale.index')->with('success', 'Informations enregistrées avec succès!');
}

public function storeInformationsFinancieresLegales(Request $request)
{
    // Get the authenticated supplier
    $supplier = $this->getAuthenticatedSupplier();

    // Check if InformationsFinancieresLegales for this supplier already exists
    // $existingInformationsFinancieresLegales = InformationsFinancieresLegales::where('supplier_id', $supplier->id)->first();

    // if ($existingInformationsFinancieresLegales) {
    //     return redirect()->back()->withErrors(['error' => 'Les informations financières et légales ont déjà été soumises.']);
    // }

    // Proceed with validation
    $validatedData = $request->validate([
        'informationsFinancieresLegales.chiffre_affaire_annee1' => ['required', 'numeric'],
        'informationsFinancieresLegales.chiffre_affaire_annee2' => ['required', 'numeric'],
        'informationsFinancieresLegales.chiffre_affaire_annee3' => ['required', 'numeric'],
        'informationsFinancieresLegales.conditions_paiement' => ['required', 'string'],
        'informationsFinancieresLegales.modalites_facturation' => ['nullable', 'string'],
        'informationsFinancieresLegales.principaux_actionnaires' => ['required', 'string'],
        'informationsFinancieresLegales.representant_legal' => ['required', 'string'],
        'informationsFinancieresLegales.qualite_representant_legal' => ['required', 'string'],
        'informationsFinancieresLegales.maison_mere_filiales' => ['nullable', 'string'],
        'informationsFinancieresLegales.certifications_qualite' => ['nullable', 'string'],
        'informationsFinancieresLegales.licences_autorisations' => ['nullable', 'string'],
        'informationsFinancieresLegales.polices_assurance' => ['nullable', 'string'],
        'informationsFinancieresLegales.plan_continuite_crise' => ['nullable', 'boolean'],
        'informationsFinancieresLegales.politique_rse' => ['nullable', 'boolean'],
        'informationsFinancieresLegales.pratiques_ethiques' => ['nullable', 'boolean'],
    ]);

    // Add supplier_id to validated data
    $validatedData['informationsFinancieresLegales']['supplier_id'] = $supplier->id;

    // Create the record
    InformationsFinancieresLegales::updateOrCreate(
        ['supplier_id' => $supplier->id], 
        $validatedData['informationsFinancieresLegales']);

    // $admin = $this->getAdmin();
    // Notification::send($admin, new InformationSubmitted('Informations Financières et Légales'));


    return redirect()->route('supplier.infocantact.index')->with('success', 'Informations enregistrées avec succès!');
}

public function storeInformationsContact(Request $request)
{
    $supplier = $this->getAuthenticatedSupplier();

    // Validate the supplier_id always
    $validatedData = $request->validate([
        'supplier_id' => 'required|exists:suppliers,id',
    ]);

    // Always validate supplierContacts fields
    $validatedContacts = $request->validate([
        'supplierContacts.nom_prenom' => 'required|string',
        'supplierContacts.fonction' => 'required|string',
        'supplierContacts.telephone' => 'required|string',
        'supplierContacts.email' => 'required|email',
    ]);

    // Create the contact
    SupplierContact::create([
        'supplier_id' => $validatedData['supplier_id'],
        'nom_prenom' => $validatedContacts['supplierContacts']['nom_prenom'],
        'fonction' => $validatedContacts['supplierContacts']['fonction'],
        'telephone' => $validatedContacts['supplierContacts']['telephone'],
        'email' => $validatedContacts['supplierContacts']['email'],
    ]);

    // Notify the admin
    // $admin = $this->getAdmin();
    // Notification::send($admin, new InformationSubmitted('Informations Contact'));

    return redirect()->route('supplier.inforeferenceclient.index')->with('success', 'Contact ajouté avec succès!');
}




public function storeRéférenceClients(Request $request) 
{
    $validatedData = $request->validate([
        'supplier_id' => 'required|exists:suppliers,id',
        'referencesClients.principaux_clients' => ['nullable', 'string'],
        'referencesClients.projets_realises' => ['nullable', 'string'],
    ]);

    // Check if both fields are null
    if (empty($validatedData['referencesClients']['principaux_clients']) && empty($validatedData['referencesClients']['projets_realises'])) {
        return redirect()->route('supplier.infocomments.index')->with('info', 'Aucune information à enregistrer. Veuillez remplir au moins un champ.');
    }

    // Create a new record
    ReferencesClients::create([
        'supplier_id' => $validatedData['supplier_id'],
        'principaux_clients' => $validatedData['referencesClients']['principaux_clients'] ?? null,
        'projets_realises' => $validatedData['referencesClients']['projets_realises'] ?? null,
    ]);

    // $admin = $this->getAdmin();
    // Notification::send($admin, new InformationSubmitted('Référence Clients'));

    return redirect()->route('supplier.infocomments.index')->with('success', 'Informations enregistrées avec succès!');
}

public function storeCommentairesRemarques(Request $request)
{
    // Récupérez l'admin avant la validation
    $admin = $this->getAdmin();

    // Valider les données
    $validatedData = $request->validate([
        'supplier_id' => 'required|exists:suppliers,id',
        'commentairesRemarques.commentaire' => ['nullable', 'string'],
        'commentairesRemarques.remarques' => ['nullable', 'string'],
    ]);

    // Envoyer la notification, peu importe le contenu du formulaire
    Notification::send($admin, new InformationSubmitted('Commentaires et Remarques'));

    // Vérifiez si les deux champs sont vides
    if (empty($validatedData['commentairesRemarques']['commentaire']) && empty($validatedData['commentairesRemarques']['remarques'])) {
        return redirect()->back()->with('info', 'Aucune information à enregistrer. Veuillez remplir au moins un champ.');
    }

    // Créer un nouvel enregistrement
    CommentairesRemarques::create([
        'supplier_id' => $validatedData['supplier_id'],
        'commentaire' => $validatedData['commentairesRemarques']['commentaire'] ?? null,
        'remarques' => $validatedData['commentairesRemarques']['remarques'] ?? null,
    ]);

    return redirect()->back()->with('success', 'Informations enregistrées avec succès!');
}


private function countFilledFields($data, $obligatoryFields)
{
    $filledCount = 0;
    foreach ($obligatoryFields as $field) {
        if (isset($data->$field) && !empty($data->$field)) {
            $filledCount++;
        }
    }
    return $filledCount;
}


public function getFilledObligatoryFields()
{
    // $supplier = $this->getAuthenticatedSupplier();

    // if (!$supplier) {
    //     return [
    //         'totalFilled' => 0,
    //         'totalObligatory' => 0,
    //         'ratio' => 0
    //     ];
    // }

    // $infoGeneralesObligatoryFields = [
    //     'date_creation', 'effectif', 'forme_juridique', 'capital_social', 'adresse_siege_social', 'numero_rc',
    //     'lieu_immatriculation', 'numero_if', 'numero_patente', 'numero_ice', 'telephone', 'nom_representant', 'fonction_representant'
    // ];

    // $supplierContactObligatoryFields = ['nom_prenom', 'fonction', 'telephone', 'email'];

    // $informationsFinancieresLegalesObligatoryFields = [
    //     'chiffre_affaire_annee1', 'chiffre_affaire_annee2', 'chiffre_affaire_annee3', 'conditions_paiement',
    //     'principaux_actionnaires', 'representant_legal', 'qualite_representant_legal'
    // ];

    // Fetch the records for the supplier
    // $infoGenerales = InfoGenerales::where('supplier_id', $supplier->id)->first();
    // $supplierContact = SupplierContact::where('supplier_id', $supplier->id)->first();
    // $informationsFinancieresLegales = InformationsFinancieresLegales::where('supplier_id', $supplier->id)->first();

    // // Count filled fields
    // $filledInfoGenerales = $infoGenerales ? $this->countFilledFields($infoGenerales, $infoGeneralesObligatoryFields) : 0;
    // $filledSupplierContact = $supplierContact ? $this->countFilledFields($supplierContact, $supplierContactObligatoryFields) : 0;
    // $filledInformationsFinancieresLegales = $informationsFinancieresLegales ? $this->countFilledFields($informationsFinancieresLegales, $informationsFinancieresLegalesObligatoryFields) : 0;

    // Total filled and total obligatory fields
    $totalFilled = 22;
    $totalObligatory = 24;



    Inertia::render('Supplier/IndexInfo', [      
        'totalFilled' => $totalFilled,
        'totalObligatory' => $totalObligatory,
    ]);
}
public function indexinfos($id)
{
    // Get the supplier by ID or fail
    $supplier = Supplier::findOrFail($id);

    // Fetch related information for the supplier
    $infoGenerales = InfoGenerales::where('supplier_id', $id)->first();
    $informationsFinancieres = InformationsFinancieresLegales::where('supplier_id', $id)->first();
    $referencesClients = ReferencesClients::where('supplier_id', $id)->get();
    $commentairesRemarques = CommentairesRemarques::where('supplier_id', $id)->get();
    $supplierContacts = SupplierContact::where('supplier_id', $id)->get();

    $existingInformations = $infoGenerales !== null && 
    $informationsFinancieres !== null && 
    $supplierContacts->isNotEmpty();
    // Fetch documents associated with the specific supplier
    $documents = Document::where('fournisseur_id', $id)->with('documentName')->get();

    // Fetch all document names, indexed by their ID
    $documentNames = Documents_name::all()->keyBy('id');

    // Fetch all suppliers to possibly display related suppliers or other purposes
    $suppliers = Supplier::with('documents.documentName')->get();

  
    $contracts = Contract::where('fournisseur_id', $id)->get();

    // Check if there's an existing contract
    $existingContract = $contracts->isNotEmpty();




    // Pass data to Inertia view
    return Inertia::render('Supplier/IndexInfo', [
        'supplier' => $supplier,
        'infoGenerales' => $infoGenerales,
        'informationsFinancieres' => $informationsFinancieres,
        'referencesClients' => $referencesClients,
        'supplierContacts' => $supplierContacts,
        'commentairesRemarques' => $commentairesRemarques,
        'documentNames' => $documentNames,
        'suppliers' => $suppliers,
        'documents' => $documents,
        'existingContract' => $existingContract, 
        'existingInformations' => $existingInformations, 


    ]);
}



// public function indexinfoGenerales()
// {
//     $supplier = $this->getAuthenticatedSupplier();
//     $fieldsInfo = $this->getFilledObligatoryFields();

//     return Inertia::render('Fournisseur/InformationsGenerales/Index', [
//         'supplierName' => [
//             'id' => $supplier->id,
//             'nom' => $supplier->nom,
//         ],
//         'infoGenerales' => InfoGenerales::where('supplier_id', $supplier->id)->get(),
//         'fieldsInfo' => $fieldsInfo 
//     ]);
// }






}



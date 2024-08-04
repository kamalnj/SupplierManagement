<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = [
        'fournisseur_id ', // This is the foreign key for the supplier
        'date_debut', // Start date of the contract
        'date_fin', // End date of the contract
        'conditions', // Terms of the contract
        'statut', // Status of the contract
        'nom_entreprise', // Company Name
        'adresse_entreprise', // Company Address
        'nom_representant', // Representative Name
        'fonction_representant', // Representative Position
        'nom_fournisseur', // Supplier Name
        'adresse_fournisseur', // Supplier Address
        'nom_representant_fournisseur', // Supplier Representative Name
        'fonction_representant_fournisseur', // Supplier Representative Position
        'description_produit_service', // Product/Service Description
        'duree_contrat', // Contract Duration
        'prix_annexe', // Annex Price
        'conditions_paiement', // Payment Terms
        'penalite_retard', // Late Penalty
        'date_signature', // Signature Date
        'lieu_signature', // Signature Place
        'signature_entreprise', // Company Signature
        'signature_fournisseur', // Supplier Signature
    ];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}

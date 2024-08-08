<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = [
        'fournisseur_id',
        'date_debut',
        'date_fin',
        'conditions',
        'statut',
        'nom_entreprise',
        'adresse_entreprise',
        'nom_representant',
        'fonction_representant',
        'nom_fournisseur',
        'adresse_fournisseur',
        'nom_representant_fournisseur',
        'fonction_representant_fournisseur',
        'description_produit_service',
        'duree_contrat',
        'prix_annexe',
        'conditions_paiement',
        'penalite_retard',
        'date_signature',
        'lieu_signature',
        'signature_entreprise',
        'signature_fournisseur'
    ];


    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'fournisseur_id');
    }
}

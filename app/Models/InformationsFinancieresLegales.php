<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InformationsFinancieresLegales extends Model
{
    use HasFactory;
    public $timestamps = false;


    // Nom de la table associée au modèle
    protected $table = 'informations_financieres_legales';
    
    // Clé primaire de la table
    protected $primaryKey = 'id';

    // Les colonnes qui peuvent être remplies via des requêtes de type "mass assignment"
    protected $fillable = [
        'supplier_id',
        'chiffre_affaire_annee1',
        'chiffre_affaire_annee2',
        'chiffre_affaire_annee3',
        'conditions_paiement',
        'modalites_facturation',
        'principaux_actionnaires',
        'representant_legal',
        'qualite_representant_legal',
        'maison_mere_filiales',
        'certifications_qualite',
        'licences_autorisations',
        'polices_assurance',
        'plan_continuite_crise',
        'politique_rse',
        'pratiques_ethiques'
    ];

    // Relation avec le modèle Supplier
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}

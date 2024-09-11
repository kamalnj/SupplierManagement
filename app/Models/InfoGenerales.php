<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoGenerales extends Model
{
    use HasFactory;
    public $timestamps = false;

    
    // Nom de la table associée au modèle
    protected $table = 'informations_generales';
    
    // Clé primaire de la table
    protected $primaryKey = 'id';
    
    // Les colonnes qui peuvent être remplies via des requêtes de type "mass assignment"
    protected $fillable = [
        'supplier_id',
        'forme_juridique',
        'capital_social',
        'adresse_siege_social',
        'numero_rc',
        'lieu_immatriculation',
        'numero_if',
        'numero_patente',
        'numero_ice',
        'telephone',
        'site_web',
        'date_creation',
        'effectif',
        'nom_representant',
        'fonction_representant',

    ];

    // Relation avec le modèle Supplier
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}

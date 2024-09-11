<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupplierContact extends Model
{
    use HasFactory;
    public $timestamps = false;

    // Nom de la table associée au modèle
    protected $table = 'supplier_contacts';
    
    // Clé primaire de la table
    protected $primaryKey = 'id';

    // Les colonnes qui peuvent être remplies via des requêtes de type "mass assignment"
    protected $fillable = [
        'supplier_id',
        'nom_prenom',
        'fonction',
        'telephone',
        'email'
    ];

    // Relation avec le modèle Supplier
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}

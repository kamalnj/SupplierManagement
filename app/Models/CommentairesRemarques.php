<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentairesRemarques extends Model
{
    use HasFactory;

    public $timestamps = false;

    // Nom de la table associée au modèle
    protected $table = 'commentaires_remarques';
    
    // Clé primaire de la table
    protected $primaryKey = 'id';

    // Les colonnes qui peuvent être remplies via des requêtes de type "mass assignment"
    protected $fillable = [
        'supplier_id',
        'commentaire',
        'remarques'
    ];

    // Relation avec le modèle Supplier
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}

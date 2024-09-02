<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campagnes extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'description', 'date_debut', 'date_fin', 'statut',
    ];

    public function suppliers()
    {
        return $this->belongsToMany(Supplier::class, 'fournisseurs_campagnes', 'campagne_id', 'supplier_id');
    }

    public function resultatsEvaluation()
    {
        return $this->hasMany(ResultatsEvaluation::class, 'campagne_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;
    public $timestamps = false;


    protected $fillable = [
        'fournisseur_id',
        'nom_fournisseur',
        'statut',
        'pdf_path',
    ];


    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'fournisseur_id');
    }
    public function infoGenerales()
    {
        return $this->hasOne(InfoGenerales::class, 'supplier_id', 'fournisseur_id');
    }

 
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    

    protected $fillable = ['fournisseur_id', 'id_nom_document', 'fichier', 'date_telechargement','uploaded'];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'fournisseur_id');
    }
    public function documentName()
    {
        return $this->belongsTo(Documents_name::class, 'id_nom_document');
    }
}

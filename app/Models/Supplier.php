<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'nom',  'email', 'categorie', 'contrat', 'password', 'qualification',
    ];

    const CONTRAT_OUI = 'Oui';
    const CONTRAT_NON = 'Non';

    public static function getContratOptions()
    {
        return [
            self::CONTRAT_OUI,
            self::CONTRAT_NON,
        ];
    }

    protected $attributes = [
        'contrat' => self::CONTRAT_NON,
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function contracts()
    {
        return $this->hasMany(Contract::class, 'fournisseur_id');
    }

    public function evaluations()
    {
        return $this->hasMany(ResultatsEvaluation::class);
    }


    public function documents()
    {
        return $this->hasMany(Document::class, 'fournisseur_id');
    }
    public function infoGenerales()
    {
        return $this->hasOne(InfoGenerales::class, 'supplier_id');
    }
    public function InformationsFinancieresLegales()
    {
        return $this->hasOne(InformationsFinancieresLegales::class, 'supplier_id');
    }
    public function InformationsContact()
    {
        return $this->Many(SupplierContact::class, 'supplier_id');
    }
    public function ReferencesClients()
    {
        return $this->Many(ReferencesClients::class, 'supplier_id');
    }
    public function CommentairesRemarque()
    {
        return $this->Many(CommentairesRemarques::class, 'supplier_id');
    }
    
}

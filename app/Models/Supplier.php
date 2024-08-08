<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    // Specify the fillable fields
    protected $fillable = [
        'nom', 'adresse', 'contact', 'email', 'categorie', 'contrat', 'password','qualification',
    ];

    // Define the possible values for contrat
    const CONTRAT_OUI = 'Oui';
    const CONTRAT_NON = 'Non';

    // Optionally, you can create a helper method to get the available options
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

    /**
     * Get the contracts for the supplier.
     */
    public function contracts()
    {
        return $this->hasMany(Contract::class, 'fournisseur_id');
    }
    public function evaluations()
{
    return $this->hasMany(SupplierEvaluation::class);
}

}

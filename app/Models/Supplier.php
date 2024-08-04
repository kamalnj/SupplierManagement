<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    // Specify the fillable fields
    protected $fillable = [
        'nom', 'adresse', 'contact', 'email','categorie', 'password',
    ];

    /**
     * Get the contracts for the supplier.
     */
    public function contracts()
    {
        return $this->hasMany(Contract::class);
    }
}

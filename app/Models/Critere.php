<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Critere extends Model
{
    use HasFactory;

    protected $table = 'critere';

    protected $fillable = ['name', 'description'];

    // Example relationship: If Critere has many SupplierEvaluations
    public function supplierEvaluations()
    {
        return $this->hasMany(SupplierEvaluation::class, 'critere_id');
    }
}

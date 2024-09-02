<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Critere extends Model
{
    use HasFactory;

    protected $table = 'critere';

    protected $fillable = ['name', 'description'];

    public function supplierEvaluations()
    {
        return $this->hasMany(ResultatsEvaluation::class, 'critere_id');
    }
}

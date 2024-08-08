<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupplierEvaluation extends Model
{
    use HasFactory;

    protected $fillable = ['supplier_id', 'critere_id', 'score', 'evaluation_date'];

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function critere()
    {
        return $this->belongsTo(Critere::class);
    }
}

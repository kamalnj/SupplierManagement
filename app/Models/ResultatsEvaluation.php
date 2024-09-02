<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultatsEvaluation  extends Model
{
    use HasFactory;
    protected $table = 'resultats_evaluation'; // Specify the correct table name


    protected $fillable = [
        'campagne_id',
        'supplier_id',
        'critere_id',
        'note',
        'commentaire',
        'evaluation_date',

    ];

    public function campagne()
    {
        return $this->belongsTo(Campagnes::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function critere()
    {
        return $this->belongsTo(Critere::class);
    }
}

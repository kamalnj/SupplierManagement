<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documents_name extends Model
{
    protected $table = 'documents_name';
    use HasFactory;
    

    protected $fillable = ['id','nom'];
}

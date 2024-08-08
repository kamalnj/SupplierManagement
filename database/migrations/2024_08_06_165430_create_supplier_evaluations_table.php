<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupplierEvaluationsTable extends Migration
{
    public function up()
    {
        Schema::create('supplier_evaluations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fournisseur_id')->constrained()->onDelete('cascade');
            $table->foreignId('critere_id')->constrained()->onDelete('cascade');
            $table->integer('score')->unsigned();
            $table->date('evaluation_date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('supplier_evaluations');
    }
}

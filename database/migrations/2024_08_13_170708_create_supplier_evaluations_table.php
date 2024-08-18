<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('supplier_evaluations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fournisseur_id'); // Explicitly define type
            $table->unsignedBigInteger('critere_id'); // Explicitly define type
            $table->integer('score')->unsigned();
            $table->date('evaluation_date');
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('fournisseur_id')->references('id')->on('suppliers')->onDelete('cascade');
            $table->foreign('critere_id')->references('id')->on('critere')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('supplier_evaluations');
    }
};

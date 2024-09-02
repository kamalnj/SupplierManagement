<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resultats_evaluation', function (Blueprint $table) {
            $table->id();
            $table->foreignId('campagne_id')->constrained()->onDelete('cascade'); // Si vous utilisez les campagnes
            $table->foreignId('supplier_id')->constrained()->onDelete('cascade');
            $table->foreignId('critere_id')->constrained()->onDelete('cascade');
            $table->integer('note'); // Ou 'score' selon votre préférence
            $table->text('commentaire')->nullable();
            $table->date('evaluation_date')->nullable(); // Vous pouvez l'inclure si vous avez besoin de la date spécifique
            $table->timestamps();
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resultats_evaluation');

    }
};

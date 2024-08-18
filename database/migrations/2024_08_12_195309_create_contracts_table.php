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
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fournisseur_id')->constrained('suppliers')->onDelete('cascade');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->text('conditions');
            $table->string('statut')->default('actif'); // Adjust default value if necessary
            $table->string('nom_entreprise');
            $table->string('adresse_entreprise');
            $table->string('nom_representant');
            $table->string('fonction_representant');
            $table->string('nom_fournisseur');
            $table->string('adresse_fournisseur');
            $table->string('nom_representant_fournisseur');
            $table->string('fonction_representant_fournisseur');
            $table->text('description_produit_service');
            $table->string('duree_contrat');
            $table->decimal('prix_annexe', 8, 2);
            $table->text('conditions_paiement');
            $table->decimal('penalite_retard', 8, 2);
            $table->date('date_signature');
            $table->string('lieu_signature');
            $table->string('signature_entreprise');
            $table->string('signature_fournisseur');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contracts');
    }
};

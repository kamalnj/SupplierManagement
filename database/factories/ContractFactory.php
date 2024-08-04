<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contract>
 */
class ContractFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fournisseur_id' => $this->faker->numberBetween(1, 50), // Adjust the range as needed
            'date_debut' => $this->faker->date(),
            'date_fin' => $this->faker->date(),
            'conditions' => $this->faker->paragraph(),
            'statut' => $this->faker->randomElement(['actif', 'inactif']),
            'nom_entreprise' => $this->faker->company(),
            'adresse_entreprise' => $this->faker->address(),
            'nom_representant' => $this->faker->name(),
            'fonction_representant' => $this->faker->jobTitle(),
            'nom_fournisseur' => $this->faker->company(),
            'adresse_fournisseur' => $this->faker->address(),
            'nom_representant_fournisseur' => $this->faker->name(),
            'fonction_representant_fournisseur' => $this->faker->jobTitle(),
            'description_produit_service' => $this->faker->paragraph(),
            'duree_contrat' => $this->faker->word(), // Generates a random word, ensure it matches the VARCHAR type
            'prix_annexe' => $this->faker->randomFloat(2, 100, 10000),
            'conditions_paiement' => $this->faker->paragraph(),
            'penalite_retard' => $this->faker->randomFloat(2, 10, 1000),
            'date_signature' => $this->faker->date(),
            'lieu_signature' => $this->faker->city(),
            'signature_entreprise' => $this->faker->name(),
            'signature_fournisseur' => $this->faker->name(),
        ];
    }
}

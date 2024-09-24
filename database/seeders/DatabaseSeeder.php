<?php

namespace Database\Seeders;

use App\Models\Contract;
use App\Models\supplier;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(1)->create();
        
        // supplier::factory()->count(20)->create(); // Generates 50 fake fournisseurs
        // Contract::create([
        //     'fournisseur_id' => 1,
        //     'date_debut' => '1989-08-28',
        //     'date_fin' => '2009-04-06',
        //     'conditions' => 'Perspiciatis dolor molestias similique veniam impedit ex consequatur repellendus.',
        //     'statut' => 'actif',
        //     'nom_entreprise' => 'Medhurst-Pacocha',
        //     'adresse_entreprise' => '5754 Graham Ville, Baileyport, TX 80146',
        //     'nom_representant' => 'Anna Spencer',
        //     'fonction_representant' => 'Computer Science Teacher',
        //     'nom_fournisseur' => 'O\'Reilly, Kutch and Schneider',
        //     'adresse_fournisseur' => '7515 Luisa Circle, Grahamburgh, WI 08136-1978',
        //     'nom_representant_fournisseur' => 'Kristina Upton',
        //     'fonction_representant_fournisseur' => 'Bookkeeper',
        //     'description_produit_service' => 'Eaque quo omnis sit sit sint cum.',
        //     'duree_contrat' => 'qui',
        //     'prix_annexe' => 5341.27,
        //     'conditions_paiement' => 'Ea libero ut sed quaerat magnam.',
        //     'penalite_retard' => 660.47,
        //     'date_signature' => '2010-02-11',
        //     'lieu_signature' => 'South Gretastad',
        //     'signature_entreprise' => 'Rebeka Macejkovic',
        //     'signature_fournisseur' => 'Dariana Stroman III',
        // ]);

        
    }
}

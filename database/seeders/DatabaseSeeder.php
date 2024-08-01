<?php

namespace Database\Seeders;

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
        // User::factory(10)->create();

        supplier::factory()->count(50)->create(); // Generates 50 fake fournisseurs

        
    }
}

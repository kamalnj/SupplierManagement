<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     * 
     */

    public function definition(): array
    {
        return [
            'nom' => $this->faker->company,
            'email' => $this->faker->unique()->safeEmail,
            'categorie' => $this->faker->randomElement(['Electronics', 'Apparel', 'Automotive', 'Books', 'Furniture', 'Food']),
        ];
    }
}

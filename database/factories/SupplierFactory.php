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
            'adresse' => $this->faker->address,
            'contact' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // You might want to adjust this if passwords are not needed
            'date_enregistrement' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}

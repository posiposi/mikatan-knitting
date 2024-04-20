<?php

namespace Database\Factories\Price;

use Illuminate\Database\Eloquent\Factories\Factory;

class EloquentPriceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'price_id' => 'priceId',
            'item_id' => fake()->uuid(),
            'price_without_tax' => 100,
            'price_with_tax' => 110,
            'tax_rate' => 10,
        ];
    }
}

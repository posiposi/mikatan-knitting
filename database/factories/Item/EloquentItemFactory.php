<?php

namespace Database\Factories\Item;

use Illuminate\Database\Eloquent\Factories\Factory;

class EloquentItemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'item_id' => fake()->uuid(),
            'item_name' => fake()->name(),
            'status' => 'stock',
            'user_id' => fake()->uuid(),
            'description' => fake()->text(),
            'purchased_at' => '9999-12-31 23:59:59',
        ];
    }
}

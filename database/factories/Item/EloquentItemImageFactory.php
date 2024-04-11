<?php

namespace Database\Factories\Item;

use Illuminate\Database\Eloquent\Factories\Factory;

class EloquentItemImageFactory extends Factory
{
    public function definition(): array
    {
        return [
            'item_image_id' => 'itemImageId',
            'item_id' => 'itemId',
            'image' => fake()->imageUrl(),
            'image_type' => 'main',
        ];
    }
}

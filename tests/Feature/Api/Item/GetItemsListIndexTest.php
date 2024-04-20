<?php

namespace Tests\Feature\Api\Item;

use App\Models\Item\EloquentItem;
use App\Models\Item\EloquentItemImage;
use App\Models\Price\EloquentPrice;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetItemsListIndexTest extends TestCase
{
    use RefreshDatabase;

    public function testSuccessResponse(): void
    {
        EloquentItem::factory()->create([
            'item_id' => 'item_id',
            'item_name' => 'item_name',
            'status' => 'status',
            'user_id' => 'user_id',
            'description' => 'description',
            'purchased_at' => '2021-01-01 00:00:00',
        ]);
        EloquentItemImage::factory()->create([
            'item_id' => 'item_id',
            'image' => 'image',
        ]);
        EloquentPrice::factory()->create([
            'item_id' => 'item_id',
            'price_without_tax' => 100,
            'price_with_tax' => 110,
            'tax_rate' => 10,
        ]);
        $response = $this->getJson(route('items.list'));
        $this->assertSame([
            'item_id' => 'item_id',
            'item_name' => 'item_name',
            'description' => 'description',
            'status' => 'status',
            'image' => 'image',
            'price_id' => 'priceId',
            'price_without_tax' => 100,
            'price_with_tax' => 110,
            'tax_rate' => 10,
        ], $response[0]);
    }
}

<?php

namespace Tests\Unit\Adapters\Items;

use App\Adapters\Items\GetItemsListAdapter;
use App\Models\Item\EloquentItem;
use App\Models\Item\EloquentItemImage;
use App\Models\Price\EloquentPrice;
use Core\src\Items\Domain\Models\ItemsList;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetItemsListAdapterTest extends TestCase
{
    use RefreshDatabase;

    private $adapter;

    public function setUp(): void
    {
        parent::setUp();
        $this->adapter = new GetItemsListAdapter(new EloquentItem());
    }

    public function testGetItemsList(): void
    {
        EloquentItem::factory()->create([
            'item_id' => 'itemId1',
            'item_name' => 'item1',
            'status' => 'stock',
            'user_id' => null,
            'description' => 'とても良い商品',
        ]);
        EloquentPrice::factory()->create([
            'item_id' => 'itemId1',
            'price_without_tax' => 1000,
            'price_with_tax' => 1100,
            'tax_rate' => 10,
        ]);
        EloquentItemImage::factory()->create([
            'item_image_id' => 'itemImageId1',
            'item_id' => 'itemId1',
            'image' => 'https://example.com/image1.jpg',
        ]);
        $expectedArray = [
            'item_id' => 'itemId1',
            'item_name' => 'item1',
            'description' => 'とても良い商品',
            'status' => 'stock',
            'image' => 'https://example.com/image1.jpg',
            'price_id' => 'priceId',
            'price_without_tax' => 1000,
            'price_with_tax' => 1100,
            'tax_rate' => 10,
        ];
        $result = $this->adapter->getItemsList();
        $this->assertCount(1, $result);
        $this->assertInstanceOf(ItemsList::class, $result);
        $this->assertSame($result->toArrayFromModel()[0], $expectedArray);
    }
}

<?php

namespace App\Adapters\Items;

use App\Models\Item\EloquentItem;
use Core\src\Items\Domain\Models\Item;
use Core\src\Items\Domain\Models\ItemsList;
use Core\src\Items\UseCase\Ports\GetItemsListQueryPort;

class GetItemsListAdapter implements GetItemsListQueryPort
{
    public function __construct(private EloquentItem $eloquentItem)
    {
    }

    public function getItemsList(): ItemsList
    {
        $values = $this->eloquentItem->getAllItems()->toArray();
        $itemsArray = array_map(fn ($item) => Item::fromArray($item), $values);
        return ItemsList::fromArray($itemsArray);
    }
}

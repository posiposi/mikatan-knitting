<?php

namespace Tests\Feature\core\tests\Items\UseCase;

use Core\src\Items\Domain\Models\ItemsList;
use Core\src\Items\UseCase\ItemsListIndex\ItemsListIndex;
use Core\src\Items\UseCase\Ports\GetItemsListQueryPort;
use Tests\TestCase;

class ItemsListIndexTest extends TestCase
{
    public function testExecute(): void
    {
        $mockQueryPort = $this->createMock(GetItemsListQueryPort::class);
        $mockQueryPort->method('getItemsList')->willReturn(new ItemsList());
        $itemsListIndex = new ItemsListIndex($mockQueryPort);
        $result = $itemsListIndex->execute();
        $this->assertInstanceOf(ItemsList::class, $result);
    }
}

<?php

namespace Core\src\Items\UseCase\ItemsListIndex;

use Core\src\Items\UseCase\Ports\GetItemsListQueryPort;

class ItemsListIndex
{
    public function __construct(private GetItemsListQueryPort $queryPort)
    {
    }

    public function execute()
    {
        return $this->queryPort->getItemsList();
    }
}

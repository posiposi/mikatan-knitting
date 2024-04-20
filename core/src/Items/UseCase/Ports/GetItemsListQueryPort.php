<?php

namespace Core\src\Items\UseCase\Ports;

use Core\src\Items\Domain\Models\ItemsList;

interface GetItemsListQueryPort
{
    public function getItemsList(): ItemsList;
}

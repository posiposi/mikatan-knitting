<?php

namespace App\Http\Controllers\Api\V1\Item;

use App\Http\Controllers\Controller;
use Core\src\Items\UseCase\ItemsListIndex\ItemsListIndex;

class GetItemsListController extends Controller
{
    public function __construct(private ItemsListIndex $useCase)
    {
    }

    public function __invoke()
    {
        $itemsList = $this->useCase->execute();
        return response()->json($itemsList->toArrayFromModel());
    }
}

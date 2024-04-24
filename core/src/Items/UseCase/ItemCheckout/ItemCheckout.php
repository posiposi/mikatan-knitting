<?php

namespace Core\Items\UseCase\ItemCheckout;

use Core\src\Items\UseCase\Ports\InventoryUpdateCommandPort;

class ItemCheckout
{
    public function __construct(private InventoryUpdateCommandPort $InventoryUpdateCommandPort)
    {
    }

    public function execute()
    {
        // TODO Stripeでの購入処理実行

        // TODO 購入処理完了時のみ下記実行
        $this->InventoryUpdateCommandPort->checkoutItem();
    }
}

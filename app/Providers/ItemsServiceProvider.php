<?php

namespace App\Providers;

use App\Adapters\Items\GetItemsListAdapter;
use App\Adapters\Items\InventoryUpdateAdapter;
use Core\src\Items\UseCase\Ports\GetItemsListQueryPort;
use Core\src\Items\UseCase\Ports\InventoryUpdateCommandPort;
use Illuminate\Support\ServiceProvider;

class ItemsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(GetItemsListQueryPort::class, GetItemsListAdapter::class);
        $this->app->bind(InventoryUpdateCommandPort::class, InventoryUpdateAdapter::class);
    }

    public function boot(): void
    {
        //
    }
}

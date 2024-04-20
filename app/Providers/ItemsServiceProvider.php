<?php

namespace App\Providers;

use App\Adapters\Items\GetItemsListAdapter;
use Core\src\Items\UseCase\Ports\GetItemsListQueryPort;
use Illuminate\Support\ServiceProvider;

class ItemsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(GetItemsListQueryPort::class, GetItemsListAdapter::class);
    }

    public function boot(): void
    {
        //
    }
}

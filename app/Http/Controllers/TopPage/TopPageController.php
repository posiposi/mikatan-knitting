<?php

namespace App\Http\Controllers\TopPage;

use App\Http\Controllers\Controller;
use Core\src\Items\UseCase\ItemsListIndex\ItemsListIndex;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class TopPageController extends Controller
{
    public function __construct(private ItemsListIndex $useCase)
    {
    }

    public function __invoke()
    {
        $itemsList = $this->useCase->execute();

        return Inertia::render('TopPage', [
            [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ],
            'itemsList' => $itemsList->toArrayFromModel(),
        ]);
    }
}

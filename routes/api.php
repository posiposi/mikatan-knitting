<?php

use App\Http\Controllers\Api\V1\Item\CheckoutItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\Item\GetItemsListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::prefix('/items')->group(function () {
        // 商品一覧取得
        Route::get('', GetItemsListController::class)->name('items.list');
        // 商品購入
        Route::get('/{item_id}/checkout', CheckoutItemController::class)->name('item.checkout');
    });
    Route::prefix('/checkout')->group(function () {
        Route::post('/sessions');
    });
});

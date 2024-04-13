<?php

namespace App\Models\Item;

use App\Models\Price\EloquentPrice;
use Doctrine\DBAL\Query;
use Doctrine\DBAL\Query\QueryBuilder;
use Filament\Tables\Filters\QueryBuilder as FiltersQueryBuilder;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class EloquentItem extends Model
{
    use HasFactory;

    const UPDATED_AT = null;

    protected $table = 'items';
    protected $primaryKey = 'item_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'item_id',
        'item_name',
        'status',
        'user_id',
        'description',
        'purchased_at',
    ];

    public function images()
    {
        return $this->hasMany(EloquentItemImage::class, 'item_id', 'item_id');
    }

    public function price(): HasOne
    {
        return $this->hasOne(EloquentPrice::class, 'item_id', 'item_id');
    }

    public function getAllItems(): Collection
    {
        $query = $this->newQuery();
        // 価格や画像が存在しない商品もあるのでleftjoinで結合する
        $query->leftJoin('prices', 'items.item_id', '=', 'prices.item_id')
            ->leftjoin('item_images', 'items.item_id', '=', 'item_images.item_id');
        return $query->get();
    }
}

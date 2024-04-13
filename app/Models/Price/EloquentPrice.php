<?php

namespace App\Models\Price;

use App\Models\Item\EloquentItem;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EloquentPrice extends Model
{
    use HasFactory;

    protected $table = 'prices';
    protected $primaryKey = 'price_id';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'price_id',
        'item_id',
        'price_without_tax',
        'price_with_tax',
        'tax_rate',
    ];

    public function item(): BelongsTo
    {
        return $this->belongsTo(EloquentItem::class, 'item_id', 'item_id');
    }
}

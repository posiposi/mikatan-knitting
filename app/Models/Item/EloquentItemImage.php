<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EloquentItemImage extends Model
{
    use HasFactory;

    protected $table = 'item_images';
    protected $primaryKey = 'item_image_id';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    protected $fillable = [
        'item_image_id',
        'item_id',
        'image',
        'image_type',
    ];

    public function item(): BelongsTo
    {
        return $this->belongsTo(EloquentItem::class, 'item_id', 'item_id');
    }
}

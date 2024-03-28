<?php

namespace App\Models\Item;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}

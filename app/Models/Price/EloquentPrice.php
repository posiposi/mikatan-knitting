<?php

namespace App\Models\Price;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}

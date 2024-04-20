<?php

namespace App\Filament\Resources\ItemResource\Pages;

use App\Filament\Resources\ItemResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Str;
use App\Models\Item\EloquentItemImage;
use App\Models\Price\EloquentPrice;

class CreateItem extends CreateRecord
{
    protected static string $resource = ItemResource::class;

    protected $imageOriginalFileName;
    protected $priceWithoutTax;

    const BASE_MULTIPLIER = 1;
    const TAX_RATE = 10;
    const TAX_RATE_DIVISOR = 100;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['item_id'] = Str::ulid();
        $this->imageOriginalFileName = $data['attachment'];
        $this->priceWithoutTax = $data['price_without_tax'];
        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl();
    }

    protected function afterCreate(): void
    {
        EloquentItemImage::create([
            'item_image_id' => Str::ulid(),
            'item_id' => $this->record->item_id,
            'image' => 'https://' . env('AWS_BUCKET') . '.s3.' . env('AWS_DEFAULT_REGION') . '.amazonaws.com/' . $this->imageOriginalFileName,
            'image_type' => 'main',
        ]);
        EloquentPrice::create([
            'price_id' => Str::ulid(),
            'item_id' => $this->record->item_id,
            'price_without_tax' => $this->priceWithoutTax,
            'price_with_tax' => $this->priceWithoutTax * (self::BASE_MULTIPLIER + (self::TAX_RATE / self::TAX_RATE_DIVISOR)),
        ]);
    }
}

<?php

namespace App\Filament\Resources\ItemResource\Pages;

use App\Filament\Resources\ItemResource;
use App\Models\Item\EloquentItemImage;
use App\Models\Price\EloquentPrice;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditItem extends EditRecord
{
    protected static string $resource = ItemResource::class;

    protected $eloquentImage = EloquentItemImage::class;
    protected $eloquentPrice = EloquentPrice::class;

    protected $imageOriginalFileName;
    protected $priceWithoutTax;

    const BASE_MULTIPLIER = 1;
    const TAX_RATE = 10;
    const TAX_RATE_DIVISOR = 100;

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $this->imageOriginalFileName = $data['attachment'];
        $this->priceWithoutTax = $data['price_without_tax'];
        return $data;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl();
    }

    protected function afterSave(): void
    {
        $this->eloquentImage::where('item_id', $this->record->item_id)->update([
            'image' => 'https://' . env('AWS_BUCKET') . '.s3.' . env('AWS_DEFAULT_REGION') . '.amazonaws.com/' . $this->imageOriginalFileName,
        ]);
        $this->eloquentPrice::where('item_id', $this->record->item_id)->update([
            'price_without_tax' => $this->priceWithoutTax,
            'price_with_tax' => $this->priceWithoutTax * (self::BASE_MULTIPLIER + (self::TAX_RATE / self::TAX_RATE_DIVISOR)),
        ]);
        $this->record->updated_at = now();
        $this->record->save();
    }
}

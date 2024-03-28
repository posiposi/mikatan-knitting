<?php

namespace App\Filament\Resources\ItemResource\Pages;

use App\Filament\Resources\ItemResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Support\Str;
use App\Models\Item\EloquentItemImage;

class CreateItem extends CreateRecord
{
    protected static string $resource = ItemResource::class;

    protected $imageOriginalFileName;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['item_id'] = Str::ulid();
        $this->imageOriginalFileName = $data['attachment'];
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
    }
}

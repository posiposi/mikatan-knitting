<?php

namespace App\Filament\Resources\ItemResource\Pages;

use App\Filament\Resources\ItemResource;
use App\Models\Item\EloquentItemImage;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditItem extends EditRecord
{
    protected static string $resource = ItemResource::class;

    protected $eloquentImage = EloquentItemImage::class;

    protected $imageOriginalFileName;

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $this->imageOriginalFileName = $data['attachment'];
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
        $this->record->updated_at = now();
        $this->record->save();
    }
}

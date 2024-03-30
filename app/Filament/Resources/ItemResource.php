<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ItemResource\Pages;
use App\Models\Item\EloquentItem;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ItemResource extends Resource
{
    protected static ?string $model = EloquentItem::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $modelLabel = '商品';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('item_name')->label('商品名'),
                Select::make('status')->options([
                    'stock' => '在庫',
                    'stop' => '販売停止中',
                    'canceled' => 'キャンセル',
                    'sold' => '購入済み',
                ])->default('stock')->label('状態'),
                TextArea::make('description')->label('説明'),
                FileUpload::make('attachment')
                    ->disk('s3')
                    ->directory('items')
                    ->visibility('private')
                    ->preserveFilenames()
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('item_id')->label('商品ID'),
                TextColumn::make('item_name')->label('商品名'),
                ImageColumn::make('images.image')->disk('s3')->label('商品画像'),
                TextColumn::make('status')->label('状態'),
                TextColumn::make('user_id')->label('購入者ID'),
                TextColumn::make('description')->label('説明'),
                TextColumn::make('purchased_at')->label('購入日時'),
                TextColumn::make('created_at')->label('登録日時'),
                TextColumn::make('updated_at')->label('更新日時'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListItems::route('/'),
            'create' => Pages\CreateItem::route('/create'),
            'edit' => Pages\EditItem::route('/{record}/edit'),
        ];
    }
}
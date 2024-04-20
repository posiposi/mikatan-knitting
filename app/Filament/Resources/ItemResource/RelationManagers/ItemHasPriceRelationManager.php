<?php

namespace App\Filament\Resources\ItemResource\RelationManagers;

use App\Models\Price\EloquentPrice;
use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn as ColumnsTextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ItemHasPriceRelationManager extends RelationManager
{
    protected static string $relationship = 'price';

    protected $eloquentPrice = EloquentPrice::class;

    const BASE_MULTIPLIER = 1;
    const TAX_RATE = 10;
    const TAX_RATE_DIVISOR = 100;

    public function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('price_id')
            ->columns([
                Tables\Columns\TextColumn::make('price_id')->label('価格ID'),
                Tables\Columns\TextColumn::make('price_without_tax')->label('税抜価格'),
                Tables\Columns\TextColumn::make('price_with_tax')->label('税込価格'),
                Tables\Columns\TextColumn::make('tax_rate')->label('税率'),
            ])
            ->filters([
                //
            ])
            ->headerActions([])
            ->actions([])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    protected function after(): void
    {
        $this->eloquentPrice::where('item_id', $this->record->item_id)->update([
            'price_with_tax' => $this->record->price_without_tax  * (self::BASE_MULTIPLIER + (self::TAX_RATE / self::TAX_RATE_DIVISOR))
        ]);
    }
}

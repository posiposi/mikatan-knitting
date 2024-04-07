<?php

namespace Core\src\Price\Domain\Models;

use Core\src\Items\Domain\Models\ItemId;
use Core\src\Price\Domain\Models\PriceId;
use Core\src\Tax\Domain\Models\TaxRate;
use Core\src\Trait\ValueObject;

final class Price
{
    use ValueObject;

    const TAX_RATE_DENOMINATOR = 100;

    private $priceWithTax;

    public function __construct(
        private PriceId $priceId,
        private ItemId $itemId,
        private int $price,
        private TaxRate $taxRate
    ) {
        $this->priceWithTax = $this->priceWithTax();
    }

    public function fromModelToArray(): array
    {
        return [
            'price_id' => $this->priceId->toString(),
            'item_id' => $this->itemId->toString(),
            'price_without_tax' => $this->price,
            'price_with_tax' => $this->priceWithTax,
            'tax_rate' => $this->taxRate->toInt()
        ];
    }

    public function priceId(): PriceId
    {
        return $this->priceId;
    }

    public function itemId(): ItemId
    {
        return $this->itemId;
    }

    public function taxRate(): TaxRate
    {
        return $this->taxRate;
    }

    public function price(): int
    {
        return $this->price;
    }

    public function priceWithTax(): int
    {
        return $this->price * $this->calculateTaxRateMultiplier();
    }

    public static function fromArray(array $values): self
    {
        return new self(
            PriceId::from($values['price_id'] ?? ''),
            ItemId::from($values['item_id'] ?? ''),
            $values['price_without_tax'] ?? 0,
            TaxRate::from($values['tax_rate'] ?? 10)
        );
    }

    private function calculateTaxRateMultiplier(): float
    {
        return 1 + ($this->taxRate->toInt() / self::TAX_RATE_DENOMINATOR);
    }
}

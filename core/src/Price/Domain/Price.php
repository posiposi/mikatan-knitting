<?php

namespace Core\src\Price\Domain;

use Core\src\Items\Domain\ItemId;
use Core\src\Tax\Domain\TaxRate;

final class Price
{
    const TAX_RATE_DENOMINATOR = 100;

    public function __construct(
        private PriceId $priceId,
        private ItemId $itemId,
        private int $price,
        private TaxRate $taxRate
    ) {
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

    public function priceWithoutTax(): int
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
            PriceId::from($values['priceId'] ?? ''),
            ItemId::from($values['itemId'] ?? ''),
            $values['price'] ?? 0,
            TaxRate::from($values['taxRate'] ?? 10)
        );
    }

    private function calculateTaxRateMultiplier(): int
    {
        return 1 + ($this->taxRate->toInt() / self::TAX_RATE_DENOMINATOR);
    }
}

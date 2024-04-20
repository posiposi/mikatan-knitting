<?php

namespace Core\src\Items\Domain\Models;

use Core\src\Price\Domain\Models\Price;

final class Item
{
    public function __construct(
        private ItemId $itemid,
        private ItemName $itemName,
        private Description $description,
        private Status $status,
        private Image $image,
        private Price $price
    ) {
    }

    public function items(): array
    {
        return [
            'item_id' => $this->itemid->toString(),
            'item_name' => $this->itemName->toString(),
            'description' => $this->description->toString(),
            'status' => $this->status->toString(),
            'image' => $this->image->toString(),
            'price_id' => $this->price->priceId()->toString(),
            'price_without_tax' => $this->price->price(),
            'price_with_tax' => $this->price->priceWithTax(),
            'tax_rate' => $this->price->taxRate()->toInt()
        ];
    }

    public function itemId(): ItemId
    {
        return $this->itemid;
    }

    public function itemName(): ItemName
    {
        return $this->itemName;
    }

    public function description(): Description
    {
        return $this->description;
    }

    public static function fromArray(array $values): self
    {
        return new self(
            ItemId::from($values['item_id'] ?? ''),
            ItemName::from($values['item_name'] ?? ''),
            Description::from($values['description'] ?? ''),
            Status::from($values['status'] ?? ''),
            Image::from($values['image'] ?? ''),
            Price::fromArray($values) ?? 0
        );
    }
}

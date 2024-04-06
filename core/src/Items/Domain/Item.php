<?php

namespace Core\src\Items\Domain;

final class Item
{
    public function __construct(
        private ItemId $itemid,
        private ItemName $itemName,
        private Description $description
    ) {
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

    public function fromArray(array $values): self
    {
        return new self(
            ItemId::from($values['itemid']),
            ItemName::from($values['itemName']),
            Description::from($values['description'])
        );
    }
}

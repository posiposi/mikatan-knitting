<?php

namespace Core\src\Items\Domain\Models;

use ArrayIterator;
use IteratorAggregate;

class ItemsList implements IteratorAggregate
{
    public function __construct(private array $items = [])
    {
    }

    public function items(): array
    {
        return $this->items;
    }

    public static function fromArray(array $values = []): self
    {
        return new self($values);
    }

    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->items);
    }

    public function toArrayFromModel(): array
    {
        return array_map(fn ($item) => $item->items(), $this->items);
    }
}

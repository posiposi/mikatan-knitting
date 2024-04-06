<?php

namespace Core\src\Items\Domain;

use Core\src\Trait\ValueObjectString;

final class ItemName
{
    use ValueObjectString;

    public function __construct(private string $value)
    {
    }
}

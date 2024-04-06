<?php

namespace Core\src\Tax\Domain;

use Core\src\Trait\ValueObjectInt;

final class TaxRate
{
    use ValueObjectInt;

    public function __construct(private int $value)
    {
    }
}

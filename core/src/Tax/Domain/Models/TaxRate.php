<?php

namespace Core\src\Tax\Domain\Models;

use Core\src\Trait\ValueObjectInt;

final class TaxRate
{
    use ValueObjectInt;

    public function __construct(private int $value)
    {
    }
}

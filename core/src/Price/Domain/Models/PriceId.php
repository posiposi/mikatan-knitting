<?php

namespace Core\src\Price\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class PriceId
{
    use ValueObjectString;

    const PRICE_ID_MAX_LENGTH = 26;

    public function __construct(private string $value)
    {
        $this->validateLengthLimit(self::PRICE_ID_MAX_LENGTH, '不正な価格IDです。');
    }
}

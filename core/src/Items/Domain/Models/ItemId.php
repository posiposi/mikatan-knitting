<?php

namespace Core\src\Items\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class ItemId
{
    use ValueObjectString;

    const ITEM_ID_MAX_LENGTH = 26;

    public function __construct(private string $value)
    {
        $this->validateLengthLimit(self::ITEM_ID_MAX_LENGTH, '不正な商品IDです。');
    }
}

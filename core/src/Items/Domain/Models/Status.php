<?php

namespace Core\src\Items\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class Status
{
    use ValueObjectString;

    public function __construct(private string $value)
    {
    }
}

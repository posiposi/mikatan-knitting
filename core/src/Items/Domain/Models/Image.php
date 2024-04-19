<?php

namespace Core\src\Items\Domain\Models;

use Core\src\Trait\ValueObjectString;

final class Image
{
    use ValueObjectString;

    public function __construct(private ?string $value)
    {
    }
}

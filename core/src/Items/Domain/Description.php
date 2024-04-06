<?php

namespace Core\src\Items\Domain;

use Core\src\Trait\ValueObjectString;

final class Description
{
    use ValueObjectString;

    public function __construct(private string $value)
    {
    }
}

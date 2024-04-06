<?php

namespace App\Items\Domain;

use Core\src\Trait\ValueObjectString;

final class Image
{
    use ValueObjectString;

    public function __construct(private string $value)
    {
    }
}

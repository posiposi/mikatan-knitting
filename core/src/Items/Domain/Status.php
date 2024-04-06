<?php

namespace App\Items\Domain;

use Core\src\Trait\ValueObjectString;

final class Status
{
    use ValueObjectString;

    public function __construct(private string $value)
    {
    }
}

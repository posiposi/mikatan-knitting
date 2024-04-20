<?php

namespace Core\src\Trait;

use App\Exceptions\common\InvalidException;
use App\Exceptions\common\NotFoundException;

trait ValueObjectInt
{
    use ValueObject;

    public function toInt(): int
    {
        return $this->value;
    }

    public function validateNotEmpty(string $errorMessage): void
    {
        if (empty($this->value)) {
            throw new NotFoundException($errorMessage);
        }
    }

    public function validateLengthLimit(int $maxLength, string $errorMessage): void
    {
        if (mb_strlen($this->value) > $maxLength) {
            throw new InvalidException($errorMessage);
        }
    }

    public function validateSpaceOnly(string $value, string $errorMessage): void
    {
        if (preg_match('/^\s*$/', $value)) {
            throw new InvalidException($errorMessage);
        }
    }
}

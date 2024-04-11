<?php

namespace Core\tests\Price\Domain\Models;

use App\Exceptions\common\InvalidException;
use Core\src\Price\Domain\Models\PriceId;
use Tests\TestCase;

class PriceIdTest extends TestCase
{
    public function testConstruct(): void
    {
        $priceId = new PriceId('12345678901234567890123456');
        $this->assertSame('12345678901234567890123456', $priceId->toString());
    }

    public function testConstructException(): void
    {
        $this->expectException(InvalidException::class);
        $this->expectExceptionMessage('不正な価格IDです。');
        new PriceId('123456789012345678901234567');
    }
}

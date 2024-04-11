<?php

namespace Core\tests\Price\Domain\Models;

use App\Exceptions\common\InvalidException;
use Core\src\Items\Domain\Models\ItemId;
use Tests\TestCase;

class ItemIdTest extends TestCase
{
    public function testConstruct(): void
    {
        $priceId = new ItemId('12345678901234567890123456');
        $this->assertSame('12345678901234567890123456', $priceId->toString());
    }

    public function testConstructException(): void
    {
        $this->expectException(InvalidException::class);
        $this->expectExceptionMessage('不正な商品IDです。');
        new ItemId('123456789012345678901234567');
    }
}

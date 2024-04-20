<?php

namespace Tests\Feature\Page\Top;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class TopPageControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testTopPageController(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('TopPage')
                ->has('itemsList')
        );
    }
}

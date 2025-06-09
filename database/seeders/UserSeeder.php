<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // You can use the factory to create users
        \App\Models\User::factory(10)->create();

        // Alternatively, you can manually create users
        // \App\Models\User::create([
        //     'name' => 'John Doe',
        //     'email' => '
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Call the UserSeeder to seed the users table
        $this->call(UserSeeder::class);
        // You can add more seeders here as needed
    }
}

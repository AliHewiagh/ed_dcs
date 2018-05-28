<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $this->call(LaratrustSeeder::class);
        $this->call(LocationSeeder::class);
        $this->call(SchoolTypeSeeder::class);
        $this->call(StateTableSeeder::class);
        $this->call(PkgTableSeeder::class);
        $this->call(SkillTableSeeder::class);
    }
}

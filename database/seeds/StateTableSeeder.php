<?php

use Illuminate\Database\Seeder;

class StateTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $states = [
 
            'Johor',
            'Kedah',
            'Kelantan',
            'Melaka',
            'Negeri Sembilan',
            'Pahang',
            'Perak',
            'Perlis',
            'Pulau Pinang',
            'Sabah',
            'Sarawak',
            'Selangor',
            'Terengganu',
            'WP Kuala Lumpur',
            'WP Labuan',
            "WP Putrajaya"
        ];
        foreach ($states as $state){
            \App\State::create(['name'=>$state]);
        }
    }
}

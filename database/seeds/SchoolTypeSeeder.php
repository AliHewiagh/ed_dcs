<?php

use Illuminate\Database\Seeder;

class SchoolTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\SchoolType::create(["group"=>1, "name"=>"Sekolah Kebangsaan"]);
        \App\SchoolType::create(["group"=>1, "name"=>"Sekolah Jenis Kebangsaan Cina"]);
        \App\SchoolType::create(["group"=>1, "name"=>"Sekolah Jenis Kebangsaan Tamil"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Menengah Kebangsaan"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Menengah Kebangsaan Agama"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Menengah Agama Negeri"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Agama Bantuan Kerajaan"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Agama Swasta"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Seni"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Menengah Teknik"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Kolej Vokasional"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Menengah Persendirian Cina"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Swasta"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Antarabangsa"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Maktab Rendah Sains Mara"]);
        \App\SchoolType::create(["group"=>2, "name"=>"Sekolah Berasrama Penuh"]);
    }
    
}

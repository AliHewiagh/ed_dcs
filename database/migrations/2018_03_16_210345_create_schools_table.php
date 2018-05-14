<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->increments('id');
            $table->char("name", 200);
            $table->char("school_code", 200)->nullable();
            $table->integer('user_id')->unsigned()->nullable();
            $table->char("type", 2)->nullable();
            $table->integer('school_type_id')->unsigned()->nullable();
            $table->integer('location_id')->unsigned()->nullable();
            $table->char("area", 50)->nullable();
            $table->boolean("mypib")->nullable();
            $table->boolean("sekolahi")->nullable();
            $table->boolean("sekolahk")->nullable();
            $table->boolean("sbt")->nullable();
            $table->boolean("active")->default(1);
            $table->boolean('done')->default(0);
            $table->timestamps();
        });
    }




    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schools');
    }
}

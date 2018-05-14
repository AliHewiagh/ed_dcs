<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('progresses', function (Blueprint $table) {
            $table->increments('id');
            $table->char('state', 50);
            $table->unsignedInteger('location_id');
            $table->unsignedInteger('school_id');
            $table->unsignedInteger('teacher_id');
            $table->unsignedInteger('class_id');
            $table->unsignedInteger('student_id');
            $table->char('progress', 50)->nullable();
            $table->char('score', 50)->nullable();
            $table->boolean('complete')->default(0);
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
        Schema::dropIfExists('progresses');
    }
}

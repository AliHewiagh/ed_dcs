<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_records', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->char('stage', 50)->nullable();
            $table->char('qId', 50)->nullable();
            $table->char('qDomain', 50)->nullable();
            $table->char('qParam', 50)->nullable();
            $table->char('qSkill', 50)->nullable();
            $table->char('qResult', 50)->nullable();
            $table->string('userAns')->nullable();
            $table->char('time', 50)->nullable();
            $table->char('score', 20)->nullable();
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
        Schema::dropIfExists('student_records');
    }
}

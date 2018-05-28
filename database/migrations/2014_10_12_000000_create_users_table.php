<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->integer('school_id')->unsigned()->nullable();
            $table->char('username', 100)->unique();
            $table->char('email', 100)->nullable();
            $table->string('password');
            $table->unsignedInteger('class_id')->nullable();
            $table->char('phone', 30)->nullable();
            $table->char('ic_number', 20)->nullable();
            $table->char('gender', 10)->nullable();
            $table->char("dob", 10)->nullable();
            $table->tinyInteger('type')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->boolean('done')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });
    }
//status 1->suspend, 2->not approve, 3->approve, 4->active
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatabaseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actors', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('fname', 32);
            $table->string('lname', 32);
            $table->string('note', 64);
            $table->string('imgpath', 128);
            $table->timestamp('deleted_at')->nullable();
        });

        Schema::create('genres', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('name', 32);
        });

        Schema::create('producers', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('name', 32);
            $table->string('email', 64)->unique();
        });

        Schema::create('movies', function ($table) {
            $table->Increments('id');
            $table->string('title', 32);
            $table->string('description', 128);
            $table->date('release');
            $table->integer('genre_id')->unsigned();
            $table->integer('producer_id')->unsigned();
            $table->string('imgpath', 128);
            $table->timestamp('deleted_at')->nullable();
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('producer_id')->references('id')->on('producers')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::create('roles', function ($table) {
            $table->Increments('id');
            $table->string('name', 32);
            $table->integer('actor_id')->unsigned();
            $table->integer('movie_id')->unsigned();
            $table->foreign('actor_id')->references('id')->on('actors')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('movie_id')->references('id')->on('movies')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::create('rates', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('movie_id')->unsigned();
            $table->string('rating');
            $table->string('comment', 128);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('movie_id')->references('id')->on('movies')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actors');
        Schema::dropIfExists('genres');
        Schema::dropIfExists('movies');
        Schema::dropIfExists('rates');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('producers');
    }
}

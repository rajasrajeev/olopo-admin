<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryDetailVideosTable extends Migration
{
    public function up()
    {
        Schema::create('category_detail_videos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_detail_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->string('video_path');
            $table->string('thumbnail')->nullable();
            $table->text('description')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_detail_videos');
    }
}

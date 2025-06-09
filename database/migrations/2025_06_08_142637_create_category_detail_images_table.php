<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryDetailImagesTable extends Migration
{
    public function up()
    {
        Schema::create('category_detail_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_detail_id')->constrained()->onDelete('cascade');
            $table->foreignId('gallery_id')->constrained('gallery')->onDelete('cascade');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_detail_images');
    }
}

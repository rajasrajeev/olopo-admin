<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryDetailAccordionsTable extends Migration
{
    public function up()
    {
        Schema::create('category_detail_accordions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_detail_id')->constrained()->onDelete('cascade');
            $table->string('question');
            $table->longText('answer');
            $table->integer('sort_order')->default(0);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_detail_accordions');
    }
}

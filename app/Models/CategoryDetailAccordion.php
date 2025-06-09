<?php


// app/Models/CategoryDetailAccordion.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryDetailAccordion extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_detail_id',
        'question',
        'answer',
        'sort_order',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function categoryDetail()
    {
        return $this->belongsTo(CategoryDetail::class);
    }
}


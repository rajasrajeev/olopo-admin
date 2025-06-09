<?php
// app/Models/CategoryDetail.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'banner_image',
        'description',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function accordions()
    {
        return $this->hasMany(CategoryDetailAccordion::class)->orderBy('sort_order');
    }

    public function videos()
    {
        return $this->hasMany(CategoryDetailVideo::class)->orderBy('sort_order');
    }

    public function images()
    {
        return $this->hasMany(CategoryDetailImage::class)->orderBy('sort_order');
    }
}


<?php
// app/Models/CategoryDetailVideo.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryDetailVideo extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_detail_id',
        'title',
        'video_path',
        'thumbnail',
        'description',
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


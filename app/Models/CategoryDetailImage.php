<?php
// app/Models/CategoryDetailImage.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryDetailImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_detail_id',
        'gallery_id',
        'sort_order'
    ];

    public function categoryDetail()
    {
        return $this->belongsTo(CategoryDetail::class);
    }

    public function gallery()
    {
        return $this->belongsTo(Gallery::class);
    }
}

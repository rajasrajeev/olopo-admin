<?php
// app/Models/Category.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'icon',
        'status'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function categoryDetails()
    {
        return $this->hasMany(CategoryDetail::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'privacy_policy',
        'terms_conditions',
        'footer_address'
    ];

    /**
     * Get the first site setting record or create one if it doesn't exist
     */
    public static function getSettings()
    {
        return self::firstOrCreate(
            ['id' => 1],
            [
                'privacy_policy' => '',
                'terms_conditions' => '',
                'footer_address' => ''
            ]
        );
    }
}

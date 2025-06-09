<?php

use Illuminate\Support\Facades\Route;

Route::get('/clear-cache', function () {
    // Optional: Add authentication or authorization checks here

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('config:cache');
    Artisan::call('storage:link', ['--force' => true]);

    return response()->json(['message' => 'Cache set successfully!']);
});

// Frontend routes
Route::view('/', 'frontend'); // Main frontend view (home page)
Route::view('/categories/{id}', 'frontend')->name('categories'); // Categories page
Route::view('/terms-and-conditions', 'frontend')->name('terms-conditions'); // Terms and Conditions page
Route::view('/privacy-policy', 'frontend')->name('privacy-policy'); // Privacy Policy page
Route::view('/contact', 'frontend')->name('contact'); // Contact page
Route::view('/gallery', 'frontend')->name('gallery'); // Gallery page
Route::view('/events', 'frontend')->name('events'); // Events page
Route::view('/movies', 'frontend')->name('movies'); // Movies page
Route::view('/leaderboard', 'frontend')->name('leaderboard'); // Movies page
Route::view('/gift-vouchers', 'frontend')->name('gift'); // Gift Vouchers page
Route::view('/merchant-vouchers', 'frontend')->name('merchant'); // Gift Vouchers page

Route::prefix('site-settings')->group(function () {
    Route::get('/', [\App\Http\Controllers\SiteSettingController::class, 'index']);
    Route::put('/privacy-policy', [\App\Http\Controllers\SiteSettingController::class, 'updatePrivacyPolicy']);
    Route::put('/terms-conditions', [\App\Http\Controllers\SiteSettingController::class, 'updateTermsConditions']);
    Route::put('/footer-address', [\App\Http\Controllers\SiteSettingController::class, 'updateFooterAddress']);
    Route::put('/all', [\App\Http\Controllers\SiteSettingController::class, 'updateAll']);
});

// Catch-all for other frontend routes (except API)
Route::get('{any}', function () {
    return view('vue');
})->where('any', '.*')->where('any', '^(?!api).*');

// Public API routes (no authentication required)
Route::group(['prefix'=>'api/v1'],function (){
    Route::post('/register',[\App\Http\Controllers\AuthController::class, 'registerAuth']);
    Route::post('/login',[\App\Http\Controllers\AuthController::class, 'loginAuth']);
    Route::get('/auth/check',[\App\Http\Controllers\AuthController::class, 'checkAuth']);
    Route::get('/conform-mail/{key}',[\App\Http\Controllers\AuthController::class, 'conformMail']);
    Route::post('/forgot_password',[\App\Http\Controllers\AuthController::class, 'forgotPassword']);
    Route::get('/reset_password/{key}',[\App\Http\Controllers\AuthController::class, 'resetPasswordEmail']);
    Route::post('/reset_password',[\App\Http\Controllers\AuthController::class, 'resetPassword']);
    // Gallery
    Route::get('/gallery', [\App\Http\Controllers\GalleryController::class, 'index']);
    // Categories (Public - No Auth Required)
    Route::get('/categories', [\App\Http\Controllers\CategoryController::class, 'index']);


    // Category Details (Public - No Auth Required)
    Route::get('/category-details/{categoryId?}', [\App\Http\Controllers\CategoryDetailController::class, 'index']);



});

// Protected API routes (authentication required)
Route::group(['prefix'=>'api/v1','middleware'=>'auth'],function (){
    Route::get('/get/user/info',[\App\Http\Controllers\UserController::class, 'getUserInfo']);
    //Basic Info Navbar
    Route::get('/profile/info', [\App\Http\Controllers\UserController::class, 'getProfileInfo']);

    //Verify
    Route::get('/sendVerifyMail',[\App\Http\Controllers\AuthController::class,'SendVerifyMail']);

    //Dashboard
    Route::get('/count', [\App\Http\Controllers\DashboardController::class, 'getCount']);
    // Categories
    Route::post('/add/category', [\App\Http\Controllers\CategoryController::class, 'store']);
    Route::get('/get/category/{id}', [\App\Http\Controllers\CategoryController::class, 'show']);
    Route::put('/update/category', [\App\Http\Controllers\CategoryController::class, 'update']);
    Route::delete('/delete/category/{id}', [\App\Http\Controllers\CategoryController::class, 'destroy']);

    Route::post('/add/gallery', [\App\Http\Controllers\GalleryController::class, 'store']);
    Route::get('/get/gallery/{id}', [\App\Http\Controllers\GalleryController::class, 'show']);
    Route::put('/update/gallery/{id}', [\App\Http\Controllers\GalleryController::class, 'update']);
    Route::delete('/delete/gallery/{id}', [\App\Http\Controllers\GalleryController::class, 'destroy']);
    // Category Details

    Route::post('/add/category-detail', [\App\Http\Controllers\CategoryDetailController::class, 'store']);
    Route::get('/get/category-detail/{id}', [\App\Http\Controllers\CategoryDetailController::class, 'show']);
    Route::put('/update/category-detail/{id}', [\App\Http\Controllers\CategoryDetailController::class, 'update']);
    Route::delete('/delete/category-detail/{id}', [\App\Http\Controllers\CategoryDetailController::class, 'destroy']);

    // Additional routes for accordion, video, and image management (Public - No Auth Required)
    Route::prefix('category-detail/{categoryDetailId}')->group(function () {
        // Accordions
        Route::post('/accordion', [\App\Http\Controllers\CategoryDetailAccordionController::class, 'store']);
        Route::put('/accordion/{id}', [\App\Http\Controllers\CategoryDetailAccordionController::class, 'update']);
        Route::delete('/accordion/{id}', [\App\Http\Controllers\CategoryDetailAccordionController::class, 'destroy']);

        // Videos
        Route::post('/video', [\App\Http\Controllers\CategoryDetailVideoController::class, 'store']);
        Route::put('/video/{id}', [\App\Http\Controllers\CategoryDetailVideoController::class, 'update']);
        Route::delete('/video/{id}', [\App\Http\Controllers\CategoryDetailVideoController::class, 'destroy']);

        // Images
        Route::post('/image', [\App\Http\Controllers\CategoryDetailImageController::class, 'store']);
        Route::delete('/image/{id}', [\App\Http\Controllers\CategoryDetailImageController::class, 'destroy']);
    });

    //Profile
    Route::get('/profile', [\App\Http\Controllers\UserController::class, 'getProfile']);
    Route::post('/update/profile/pic',[\App\Http\Controllers\UserController::class, 'updateProfilePic']);
    Route::put('/update/profile', [\App\Http\Controllers\UserController::class, 'updateProfileInformation']);

    //setting
    Route::get('/notification', [\App\Http\Controllers\UserController::class, 'getNotification']);
    Route::post('/change_password', [\App\Http\Controllers\UserController::class, 'changePassword']);
    Route::post('/update/notification', [\App\Http\Controllers\UserController::class, 'updateNotification']);

    //Auth
    Route::get('/logout',[\App\Http\Controllers\AuthController::class, 'logout']);
});

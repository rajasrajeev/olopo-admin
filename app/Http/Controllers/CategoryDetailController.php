<?php

// app/Http/Controllers/CategoryDetailController.php
namespace App\Http\Controllers;

use App\Models\CategoryDetail;
use App\Models\CategoryDetailAccordion;
use App\Models\CategoryDetailVideo;
use App\Models\CategoryDetailImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class CategoryDetailController extends Controller
{
    public function index($categoryId = null)
    {
        try {
            $query = CategoryDetail::with(['category', 'accordions', 'videos', 'images.gallery']);

            if ($categoryId) {
                $query->where('category_id', $categoryId);
            }

            $categoryDetails = $query->orderBy('created_at', 'desc')->get();

            return response()->json([
                'status' => true,
                'data' => $categoryDetails,
                'message' => 'Category details fetched successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error fetching category details: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'banner_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'accordions' => 'nullable|array',
            'accordions.*.question' => 'required_with:accordions|string',
            'accordions.*.answer' => 'required_with:accordions|string',
            'videos' => 'nullable|array',
            'videos.*.title' => 'required_with:videos|string',
            'videos.*.video_path' => 'required_with:videos|file|mimes:mp4,avi,mov,wmv|max:102400',
            'videos.*.thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'exists:gallery,id',
            'status' => 'boolean'
        ]);

        DB::beginTransaction();
        try {
            $data = $request->only(['category_id', 'title', 'description', 'status']);

            if ($request->hasFile('banner_image')) {
                $bannerPath = $request->file('banner_image')->store('category-details/banners', 'public');
                $data['banner_image'] = $bannerPath;
            }

            $categoryDetail = CategoryDetail::create($data);

            // Handle accordions
            if ($request->has('accordions')) {
                foreach ($request->accordions as $index => $accordion) {
                    CategoryDetailAccordion::create([
                        'category_detail_id' => $categoryDetail->id,
                        'question' => $accordion['question'],
                        'answer' => $accordion['answer'],
                        'sort_order' => $index + 1
                    ]);
                }
            }

            // Handle videos
            if ($request->has('videos')) {
                foreach ($request->videos as $index => $video) {
                    $videoData = [
                        'category_detail_id' => $categoryDetail->id,
                        'title' => $video['title'],
                        'description' => $video['description'] ?? null,
                        'sort_order' => $index + 1
                    ];

                    if (isset($video['video_path'])) {
                        $videoPath = $video['video_path']->store('category-details/videos', 'public');
                        $videoData['video_path'] = $videoPath;
                    }

                    if (isset($video['thumbnail'])) {
                        $thumbnailPath = $video['thumbnail']->store('category-details/thumbnails', 'public');
                        $videoData['thumbnail'] = $thumbnailPath;
                    }

                    CategoryDetailVideo::create($videoData);
                }
            }

            // Handle images
            if ($request->has('images')) {
                foreach ($request->images as $index => $galleryId) {
                    CategoryDetailImage::create([
                        'category_detail_id' => $categoryDetail->id,
                        'gallery_id' => $galleryId,
                        'sort_order' => $index + 1
                    ]);
                }
            }

            DB::commit();

            $categoryDetail->load(['category', 'accordions', 'videos', 'images.gallery']);

            return response()->json([
                'status' => true,
                'data' => $categoryDetail,
                'message' => 'Category detail created successfully'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => 'Error creating category detail: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $categoryDetail = CategoryDetail::with(['category', 'accordions', 'videos', 'images.gallery'])->findOrFail($id);
            return response()->json([
                'status' => true,
                'data' => $categoryDetail,
                'message' => 'Category detail fetched successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Category detail not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'banner_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'status' => 'boolean'
        ]);

        try {
            $categoryDetail = CategoryDetail::findOrFail($id);
            $data = $request->only(['category_id', 'title', 'description', 'status']);

            if ($request->hasFile('banner_image')) {
                // Delete old banner if exists
                if ($categoryDetail->banner_image && Storage::disk('public')->exists($categoryDetail->banner_image)) {
                    Storage::disk('public')->delete($categoryDetail->banner_image);
                }
                $bannerPath = $request->file('banner_image')->store('category-details/banners', 'public');
                $data['banner_image'] = $bannerPath;
            }

            $categoryDetail->update($data);

            return response()->json([
                'status' => true,
                'data' => $categoryDetail,
                'message' => 'Category detail updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error updating category detail: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $categoryDetail = CategoryDetail::findOrFail($id);

            // Delete banner if exists
            if ($categoryDetail->banner_image && Storage::disk('public')->exists($categoryDetail->banner_image)) {
                Storage::disk('public')->delete($categoryDetail->banner_image);
            }

            // Delete associated videos and their files
            foreach ($categoryDetail->videos as $video) {
                if ($video->video_path && Storage::disk('public')->exists($video->video_path)) {
                    Storage::disk('public')->delete($video->video_path);
                }
                if ($video->thumbnail && Storage::disk('public')->exists($video->thumbnail)) {
                    Storage::disk('public')->delete($video->thumbnail);
                }
            }

            $categoryDetail->delete();

            return response()->json([
                'status' => true,
                'message' => 'Category detail deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error deleting category detail: ' . $e->getMessage()
            ], 500);
        }
    }
}

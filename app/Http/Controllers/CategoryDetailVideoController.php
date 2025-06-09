<?php
namespace App\Http\Controllers;

use App\Models\CategoryDetailVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryDetailVideoController extends Controller
{
    public function store(Request $request, $categoryDetailId)
    {
        $request->validate([
            'title' => 'required|string',
            'video_path' => 'required|file|mimes:mp4,avi,mov,wmv|max:102400',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer'
        ]);

        try {
            $data = [
                'category_detail_id' => $categoryDetailId,
                'title' => $request->title,
                'description' => $request->description,
                'sort_order' => $request->sort_order ?? 0
            ];

            if ($request->hasFile('video_path')) {
                $videoPath = $request->file('video_path')->store('category-details/videos', 'public');
                $data['video_path'] = $videoPath;
            }

            if ($request->hasFile('thumbnail')) {
                $thumbnailPath = $request->file('thumbnail')->store('category-details/thumbnails', 'public');
                $data['thumbnail'] = $thumbnailPath;
            }

            $video = CategoryDetailVideo::create($data);

            return response()->json([
                'status' => true,
                'data' => $video,
                'message' => 'Video added successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error adding video: ' . $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $categoryDetailId, $id)
    {
        $request->validate([
            'title' => 'required|string',
            'video_path' => 'nullable|file|mimes:mp4,avi,mov,wmv|max:102400',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer'
        ]);

        try {
            $video = CategoryDetailVideo::where('category_detail_id', $categoryDetailId)->findOrFail($id);
            $data = $request->only(['title', 'description', 'sort_order']);

            if ($request->hasFile('video_path')) {
                // Delete old video if exists
                if ($video->video_path && Storage::disk('public')->exists($video->video_path)) {
                    Storage::disk('public')->delete($video->video_path);
                }
                $videoPath = $request->file('video_path')->store('category-details/videos', 'public');
                $data['video_path'] = $videoPath;
            }

            if ($request->hasFile('thumbnail')) {
                // Delete old thumbnail if exists
                if ($video->thumbnail && Storage::disk('public')->exists($video->thumbnail)) {
                    Storage::disk('public')->delete($video->thumbnail);
                }
                $thumbnailPath = $request->file('thumbnail')->store('category-details/thumbnails', 'public');
                $data['thumbnail'] = $thumbnailPath;
            }

            $video->update($data);

            return response()->json([
                'status' => true,
                'data' => $video,
                'message' => 'Video updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error updating video: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($categoryDetailId, $id)
    {
        try {
            $video = CategoryDetailVideo::where('category_detail_id', $categoryDetailId)->findOrFail($id);

            // Delete video files if they exist
            if ($video->video_path && Storage::disk('public')->exists($video->video_path)) {
                Storage::disk('public')->delete($video->video_path);
            }
            if ($video->thumbnail && Storage::disk('public')->exists($video->thumbnail)) {
                Storage::disk('public')->delete($video->thumbnail);
            }

            $video->delete();

            return response()->json([
                'status' => true,
                'message' => 'Video deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error deleting video: ' . $e->getMessage()
            ], 500);
        }
    }
}

<?php
// app/Http/Controllers/GalleryController.php
namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function index()
    {
        try {
            $gallery = Gallery::orderBy('created_at', 'desc')->get();
            return response()->json([
                'status' => true,
                'data' => $gallery,
                'message' => 'Gallery images fetched successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error fetching gallery: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'alt_text' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'status' => 'boolean'
        ]);

        try {
            $data = $request->only(['title', 'alt_text', 'description', 'status']);

            if ($request->hasFile('image_path')) {
                $imagePath = $request->file('image_path')->store('gallery', 'public');
                $data['image_path'] = $imagePath;
            }

            $gallery = Gallery::create($data);

            return response()->json([
                'status' => true,
                'data' => $gallery,
                'message' => 'Gallery image uploaded successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error uploading image: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $gallery = Gallery::findOrFail($id);
            return response()->json([
                'status' => true,
                'data' => $gallery,
                'message' => 'Gallery image fetched successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Gallery image not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'image_path' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'alt_text' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'status' => 'boolean'
        ]);

        try {
            $gallery = Gallery::findOrFail($id);
            $data = $request->only(['title', 'alt_text', 'description', 'status']);

            if ($request->hasFile('image_path')) {
                // Delete old image if exists
                if ($gallery->image_path && Storage::disk('public')->exists($gallery->image_path)) {
                    Storage::disk('public')->delete($gallery->image_path);
                }
                $imagePath = $request->file('image_path')->store('gallery', 'public');
                $data['image_path'] = $imagePath;
            }

            $gallery->update($data);

            return response()->json([
                'status' => true,
                'data' => $gallery,
                'message' => 'Gallery image updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error updating gallery image: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $gallery = Gallery::findOrFail($id);

            // Delete image if exists
            if ($gallery->image_path && Storage::disk('public')->exists($gallery->image_path)) {
                Storage::disk('public')->delete($gallery->image_path);
            }

            $gallery->delete();

            return response()->json([
                'status' => true,
                'message' => 'Gallery image deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error deleting gallery image: ' . $e->getMessage()
            ], 500);
        }
    }
}

<?php
namespace App\Http\Controllers;

use App\Models\CategoryDetailImage;
use Illuminate\Http\Request;

class CategoryDetailImageController extends Controller
{
    public function store(Request $request, $categoryDetailId)
    {
        $request->validate([
            'gallery_id' => 'required|exists:gallery,id',
            'sort_order' => 'nullable|integer'
        ]);

        try {
            $image = CategoryDetailImage::create([
                'category_detail_id' => $categoryDetailId,
                'gallery_id' => $request->gallery_id,
                'sort_order' => $request->sort_order ?? 0
            ]);

            $image->load('gallery');

            return response()->json([
                'status' => true,
                'data' => $image,
                'message' => 'Image added successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error adding image: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($categoryDetailId, $id)
    {
        try {
            $image = CategoryDetailImage::where('category_detail_id', $categoryDetailId)->findOrFail($id);
            $image->delete();

            return response()->json([
                'status' => true,
                'message' => 'Image removed successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error adding accordion: ' . $e->getMessage()
            ], 500);
        }
    }


}

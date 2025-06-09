<?php
namespace App\Http\Controllers;

use App\Models\CategoryDetailAccordion;
use Illuminate\Http\Request;

class CategoryDetailAccordionController extends Controller
{
    public function store(Request $request, $categoryDetailId)
    {
        $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string',
            'sort_order' => 'nullable|integer'
        ]);

        try {
            $accordion = CategoryDetailAccordion::create([
                'category_detail_id' => $categoryDetailId,
                'question' => $request->question,
                'answer' => $request->answer,
                'sort_order' => $request->sort_order ?? 0
            ]);

            return response()->json([
                'status' => true,
                'data' => $accordion,
                'message' => 'Accordion added successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error updating accordion: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($categoryDetailId, $id)
    {
        try {
            $accordion = CategoryDetailAccordion::where('category_detail_id', $categoryDetailId)->findOrFail($id);
            $accordion->delete();

            return response()->json([
                'status' => true,
                'message' => 'Accordion deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error deleting accordion: ' . $e->getMessage()
            ], 500);
        }
    }
}

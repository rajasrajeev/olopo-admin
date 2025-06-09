<?php
// app/Http/Controllers/CategoryController.php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index()
    {
        try {
            $categories = Category::with('categoryDetails')->orderBy('created_at', 'asc')->get();
            return response()->json([
                'status' => true,
                'data' => $categories,
                'message' => 'Categories fetched successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error fetching categories: ' . $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'boolean'
        ]);

        try {
            $data = $request->only(['title', 'status']);

            if ($request->hasFile('icon')) {
                $iconPath = $request->file('icon')->store('categories/icons', 'public');
                $data['icon'] = $iconPath;
            }

            $category = Category::create($data);

            return response()->json([
                'status' => true,
                'data' => $category,
                'message' => 'Category created successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error creating category: ' . $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $category = Category::with('categoryDetails')->findOrFail($id);
            return response()->json([
                'status' => true,
                'data' => $category,
                'message' => 'Category fetched successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Category not found'
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'boolean'
        ]);

        try {
            $category = Category::findOrFail($id);
            $data = $request->only(['title', 'status']);

            if ($request->hasFile('icon')) {
                // Delete old icon if exists
                if ($category->icon && Storage::disk('public')->exists($category->icon)) {
                    Storage::disk('public')->delete($category->icon);
                }
                $iconPath = $request->file('icon')->store('categories/icons', 'public');
                $data['icon'] = $iconPath;
            }

            $category->update($data);

            return response()->json([
                'status' => true,
                'data' => $category,
                'message' => 'Category updated successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error updating category: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $category = Category::findOrFail($id);

            // Delete icon if exists
            if ($category->icon && Storage::disk('public')->exists($category->icon)) {
                Storage::disk('public')->delete($category->icon);
            }

            $category->delete();

            return response()->json([
                'status' => true,
                'message' => 'Category deleted successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error deleting category: ' . $e->getMessage()
            ], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SiteSettingController extends Controller
{
    /**
     * Display the site settings
     */
    public function index(): JsonResponse
    {
        $settings = SiteSetting::getSettings();

        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }

    /**
     * Update privacy policy
     */
    public function updatePrivacyPolicy(Request $request): JsonResponse
    {
        $request->validate([
            'privacy_policy' => 'required|string'
        ]);

        $settings = SiteSetting::getSettings();
        $settings->update([
            'privacy_policy' => $request->privacy_policy
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Privacy policy updated successfully',
            'data' => $settings
        ]);
    }

    /**
     * Update terms and conditions
     */
    public function updateTermsConditions(Request $request): JsonResponse
    {
        $request->validate([
            'terms_conditions' => 'required|string'
        ]);

        $settings = SiteSetting::getSettings();
        $settings->update([
            'terms_conditions' => $request->terms_conditions
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Terms and conditions updated successfully',
            'data' => $settings
        ]);
    }

    /**
     * Update footer address
     */
    public function updateFooterAddress(Request $request): JsonResponse
    {
        $request->validate([
            'footer_address' => 'required|string|max:1000'
        ]);

        $settings = SiteSetting::getSettings();
        $settings->update([
            'footer_address' => $request->footer_address
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Footer address updated successfully',
            'data' => $settings
        ]);
    }

    /**
     * Update all settings at once
     */
    public function updateAll(Request $request): JsonResponse
    {
        $request->validate([
            'privacy_policy' => 'nullable|string',
            'terms_conditions' => 'nullable|string',
            'footer_address' => 'nullable|string|max:1000'
        ]);

        $settings = SiteSetting::getSettings();
        $settings->update($request->only(['privacy_policy', 'terms_conditions', 'footer_address']));

        return response()->json([
            'success' => true,
            'message' => 'Settings updated successfully',
            'data' => $settings
        ]);
    }
}

# TODO List for Fixing Errors

## 1. Fix Authentication 401 Errors
- [ ] Update `resources/js/components/Layout/Frontend/Layout.vue` to handle 401 errors properly (e.g., redirect to login or show message).
- [ ] Check and fix API calls in `public/theme/frontend/assets/js/script.js`, `merchant.js`, `gift.js` for authentication.

## 2. Fix Google Maps Loading Issues
- [ ] Locate and read `public/js/google-search.js` to make Google Maps load asynchronously.

## 3. Fix Toast Notification Error
- [ ] Locate and read `public/js/toast.js` to fix the null reference error.

## 4. Testing
- [ ] Run the app and verify fixes.
- [ ] Check console for remaining errors.

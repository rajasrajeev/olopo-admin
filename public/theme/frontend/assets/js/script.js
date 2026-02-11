
// olopo-api.js - API integration for Olopo Homepage

// Configuration objects for both API endpoints
const apiConfig3 = {
    admin: {
        baseUrl: 'https://admin.olopo.app/api',
        authToken: null,
        userData: null
    },
    gifts: {
        baseUrl: 'https://gifts.dev.olopo.app',
        authToken: null,
        categoryData: null,
        productData: null,
        currentPage: 1, // Track the current page for pagination
        productsPerPage: 6, // Number of products to load per page
        hasMoreProducts: true // Flag to track if more products are available
    }
};

// Local storage keys
const STORAGE_KEYS = {
    ADMIN_TOKEN: 'olopo_admin_token',
    ADMIN_USER_DATA: 'olopo_admin_user_data',
    GIFTS_TOKEN: 'olopo_gifts_token',
    GIFTS_CATEGORY_DATA: 'olopo_gifts_category_data',
    GIFTS_PRODUCT_DATA: 'olopo_gifts_product_data',
    LAST_AUTH_TIME: 'olopo_last_auth_time'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Set up event listeners for the page
    setupEventListeners();
});

// Main initialization function
async function initializeApp() {
    try {
        // Check if we have valid tokens in storage
        loadStoredAuthData();
        
        // If tokens are expired or missing, authenticate again
        const needsAuth = checkIfAuthenticationNeeded();
        
        if (needsAuth) {
            showLoadingIndicator('Connecting to Olopo services...');
            await authenticateWithBothAPIs();
        }
        
        // Fetch categories and initial set of products
        await fetchCategoriesAndProducts();
        
        // Render the products to the page
        renderProductsToPage(false); // false means don't append, replace
        
        hideLoadingIndicator();
    } catch (error) {
        console.error('Initialization error:', error);
        hideLoadingIndicator();
        showErrorMessage('Failed to connect to Olopo services. Please try again later.');
    }
}

// Load any stored authentication data from localStorage
function loadStoredAuthData() {
    try {
        // Load admin API data
        const adminToken = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN);
        const adminUserData = localStorage.getItem(STORAGE_KEYS.ADMIN_USER_DATA);
        
        if (adminToken) apiConfig3.admin.authToken = adminToken;
        if (adminUserData) apiConfig3.admin.userData = JSON.parse(adminUserData);
        
        // Load gifts API data
        const giftsToken = localStorage.getItem(STORAGE_KEYS.GIFTS_TOKEN);
        const categoryData = localStorage.getItem(STORAGE_KEYS.GIFTS_CATEGORY_DATA);
        const productData = localStorage.getItem(STORAGE_KEYS.GIFTS_PRODUCT_DATA);
        
        if (giftsToken) apiConfig3.gifts.authToken = giftsToken;
        if (categoryData) apiConfig3.gifts.categoryData = JSON.parse(categoryData);
        if (productData) apiConfig3.gifts.productData = JSON.parse(productData);
    } catch (error) {
        console.error('Error loading stored auth data:', error);
        // Clear potentially corrupted data
        clearStoredAuthData();
    }
}

// Check if we need to authenticate again (token expired or missing)
function checkIfAuthenticationNeeded() {
    const lastAuthTime = localStorage.getItem(STORAGE_KEYS.LAST_AUTH_TIME);
    const currentTime = new Date().getTime();
    
    // If last auth was more than 6 hours ago or doesn't exist, authenticate again
    if (!lastAuthTime || (currentTime - parseInt(lastAuthTime)) > 6 * 60 * 60 * 1000) {
        return true;
    }
    
    // If either token is missing, authenticate again
    if (!apiConfig3.admin.authToken || !apiConfig3.gifts.authToken) {
        return true;
    }
    
    return false;
}

// Authenticate with both APIs
async function authenticateWithBothAPIs() {
    try {
        // First authenticate with admin API
        await authenticateWithAdminAPI();
        
        // Then authenticate with gifts API
        await authenticateWithGiftsAPI();
        
        // Store the authentication time
        localStorage.setItem(STORAGE_KEYS.LAST_AUTH_TIME, new Date().getTime().toString());
    } catch (error) {
        console.error('Authentication error:', error);
        throw new Error('Failed to authenticate with Olopo services');
    }
}

// Authenticate with the admin API
async function authenticateWithAdminAPI() {
    try {
        // First, submit mobile number to get OTP
        const mobileResponse = await fetch(`${apiConfig3.admin.baseUrl}/auth/submit-mobile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country_code: '+91',
                mobile: '9995000000',
                user_type: 'customer'
            })
        });
        
        const mobileData = await mobileResponse.json();
        
        if (!mobileResponse.ok || !mobileData.success) {
            throw new Error(mobileData.message || 'Failed to send OTP');
        }
        
        // Now submit the OTP to get the auth token
        const otpResponse = await fetch(`${apiConfig3.admin.baseUrl}/auth/submit-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country_code: '+91',
                mobile: '9995000000',
                user_type: 'customer',
                otp: '111111', // In production, this would come from user input
                onesignal_player_id: '1111'
            })
        });
        
        const otpData = await otpResponse.json();
        
        if (!otpResponse.ok || !otpData.success) {
            throw new Error(otpData.message || 'Failed to validate OTP');
        }
        
        // Store the token and user data
        apiConfig3.admin.authToken = otpData.data.token;
        apiConfig3.admin.userData = otpData.data.user;
        
        // Save to localStorage
        localStorage.setItem(STORAGE_KEYS.ADMIN_TOKEN, otpData.data.token);
        localStorage.setItem(STORAGE_KEYS.ADMIN_USER_DATA, JSON.stringify(otpData.data.user));
        
    } catch (error) {
        console.error('Admin API authentication error:', error);
        throw error;
    }
}

// Authenticate with the gifts API
async function authenticateWithGiftsAPI() {
    try {
        const response = await fetch(`${apiConfig3.gifts.baseUrl}/admin-login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: 'info@olopo.app',
                password: 'olopo@123'
            })
        });
        
        const data = await response.json();
        
        if (!response.ok || !data.token) {
            throw new Error(data.message || 'Failed to authenticate with gifts API');
        }
        
        // Store the token
        apiConfig3.gifts.authToken = data.token;
        
        // Save to localStorage
        localStorage.setItem(STORAGE_KEYS.GIFTS_TOKEN, data.token);
        
    } catch (error) {
        console.error('Gifts API authentication error:', error);
        throw error;
    }
}

// Fetch categories and products from the gifts API
async function fetchCategoriesAndProducts() {
    try {
        // First fetch categories if we don't have them already
        if (!apiConfig3.gifts.categoryData) {
            const categoryResponse = await fetch(`${apiConfig3.gifts.baseUrl}/mobile-get/categories`, {
                headers: {
                    'Authorization': `Bearer ${apiConfig3.gifts.authToken}`
                }
            });
            
            const categoryData = await categoryResponse.json();
            
            if (!categoryResponse.ok) {
                throw new Error(categoryData.message || 'Failed to fetch categories');
            }
            
            apiConfig3.gifts.categoryData = categoryData.data;
            localStorage.setItem(STORAGE_KEYS.GIFTS_CATEGORY_DATA, JSON.stringify(categoryData.data));
        }
        
        // Find the API SANDBOX B2B category ID
        const apiSandboxCategory = apiConfig3.gifts.categoryData[0];
        
        if (!apiSandboxCategory) {
            throw new Error('API SANDBOX B2B category not found');
        }
        
        // Now fetch products for this category with pagination
        const productsResponse = await fetch(`${apiConfig3.gifts.baseUrl}/mobile-get/categories/${apiSandboxCategory.id}/products?page=${apiConfig3.gifts.currentPage}&limit=${apiConfig3.gifts.productsPerPage}`, {
            headers: {
                'Authorization': `Bearer ${apiConfig3.gifts.authToken}`
            }
        });
        
        const productsData = await productsResponse.json();
        
        if (!productsResponse.ok) {
            throw new Error(productsData.message || 'Failed to fetch products');
        }
        
        // If this is the first page, set the product data
        if (apiConfig3.gifts.currentPage === 1) {
            apiConfig3.gifts.productData = productsData.data;
        } else {
            // Otherwise, append the new products to the existing array
            if (apiConfig3.gifts.productData && apiConfig3.gifts.productData.products) {
                apiConfig3.gifts.productData.products = [
                    ...apiConfig3.gifts.productData.products,
                    ...productsData.data.products
                ];
            } else {
                apiConfig3.gifts.productData = productsData.data;
            }
        }
        
        // Check if more products are available
        apiConfig3.gifts.hasMoreProducts = productsData.data.products.length === apiConfig3.gifts.productsPerPage;
        
        // Save to localStorage
        localStorage.setItem(STORAGE_KEYS.GIFTS_PRODUCT_DATA, JSON.stringify(apiConfig3.gifts.productData));
        
    } catch (error) {
        console.error('Error fetching categories and products:', error);
        throw error;
    }
}

// Render the products to the brand section of the page
function renderProductsToPage(append = false) {
    // Make sure we have product data
    if (!apiConfig3.gifts.productData || !apiConfig3.gifts.productData.products) {
        console.error('No product data available to render');
        return;
    }
    
    const products = apiConfig3.gifts.productData.products;
    const brandGrid = document.querySelector('.card-grid-gift');
    
    // Clear existing cards if not appending
    if (brandGrid && !append) {
        brandGrid.innerHTML = '';
    }
    
    if (brandGrid) {
        // If appending, only add the new products (from the current page)
        const startIndex = append ? (apiConfig3.gifts.currentPage - 1) * apiConfig3.gifts.productsPerPage : 0;
        const endIndex = append ? products.length : products.length;
        
        // Add new cards based on product data
        for (let i = startIndex; i < (products.length-1); i++) {
            const product = products[i];
            if (product) { // Make sure product exists
                const productCard = createProductCard(product);
                brandGrid.appendChild(productCard);
            }
        }
        
        // Update the "View More" button visibility based on whether there are more products
        updateViewMoreButtonState();
    } else {
        console.error('Brand grid element not found in the DOM');
    }
}

// Update the state of the "View More" button
function updateViewMoreButtonState() {
    const viewMoreBtn = document.querySelector('.view-more');
    if (viewMoreBtn) {
        if (apiConfig3.gifts.hasMoreProducts) {
            viewMoreBtn.style.display = 'block';
            viewMoreBtn.textContent = 'View More';
        } else {
            viewMoreBtn.style.display = 'none'; // Hide the button if no more products
            // Alternatively, you could disable it instead:
            // viewMoreBtn.disabled = true;
            // viewMoreBtn.textContent = 'No More Products';
        }
    }
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'brand-card';
    card.dataset.productId = product._id;
    
    // Get the appropriate image URL
    const imageUrl = product.images.mobile || 'assets/images/brands/new-smartphones-stand-row-showcase-store 1.png';
    
    // Create a discount percentage (random for demo)
    const discountPercent = Math.floor(Math.random() * 40) + 10; // Random between 10% and 50%
    
    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${imageUrl}" alt="${product.name}">
        </div>
        <div class="brand-info">
            <h4>${product.name}</h4>
            <p>SKU: ${product.sku}</p>
        </div>
    `;
    
    // Add click event to view product details
    card.addEventListener('click', () => {
        showProductDetails(product);
    });
    
    return card;
}

// Load more products when the "View More" button is clicked
async function loadMoreProducts() {
    try {
        // Increment the page counter
        apiConfig3.gifts.currentPage++;
        
        showLoadingIndicator('Loading more products...');
        
        // Fetch the next page of products
        await fetchCategoriesAndProducts();
        
        // Render the new products, appending them to existing ones
        renderProductsToPage(true);
        
        hideLoadingIndicator();
    } catch (error) {
        console.error('Error loading more products:', error);
        hideLoadingIndicator();
        showErrorMessage('Failed to load more products. Please try again.');
        
        // Revert the page counter on error
        apiConfig3.gifts.currentPage--;
    }
}

// Show product details in a modal
function showProductDetails(product) {
    // Create modal content
    const modalContent = `
        <div class="modal fade" id="productDetailModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="product-image">
                            <img src="${product.images.base}" class="img-fluid" alt="${product.name}">
                        </div>
                        <div class="product-details mt-3">
                            <p><strong>SKU:</strong> ${product.sku}</p>
                            <p><strong>Currency:</strong> ${product.currency.code} (${product.currency.symbol})</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to document
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);
    
    // Initialize and show the modal
    const modal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    modal.show();
    
    // Remove modal from DOM when it's hidden
    document.getElementById('productDetailModal').addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modalContainer);
    });
}

// Set up event listeners for the page
function setupEventListeners() {
    // View more button for brands section
    const viewMoreBtn = document.querySelector('.view-more');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            // Call the load more function instead of redirecting
            loadMoreProducts();
        });
    }
    
    // Setup navigation buttons
    setupNavigationButtons();
}

// Setup navigation buttons (OLOPO USER APP, MERCHANT APP, FRANCHISE)
function setupNavigationButtons() {
    const navButtons = document.querySelectorAll('.usersection-buttons .button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            navButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Handle navigation based on button text
            const buttonText = this.textContent.trim();
            
            // Implement different views based on the selected button
            // This is a placeholder for actual implementation
            console.log(`Selected: ${buttonText}`);
            
            // You can implement specific logic for each button here
        });
    });
}

// Show loading indicator
function showLoadingIndicator(message = 'Loading...') {
    // Check if loading indicator already exists
    if (document.getElementById('loading-indicator')) {
        return;
    }
    
    const loadingHtml = `
        <div id="loading-indicator" class="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style="background-color: rgba(0,0,0,0.5); z-index: 9999;">
            <div class="bg-white p-4 rounded shadow text-center">
                <div class="spinner-border text-primary mb-2" role="status"></div>
                <div id="loading-message" class="text-dark">${message}</div>
            </div>
        </div>
    `;
    
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = loadingHtml;
    document.body.appendChild(loadingDiv.firstChild);
}

// Hide loading indicator
function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

// Show error message to user
function showErrorMessage(message) {
    // Create a toast notification
    const toastHtml = `
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 9999">
            <div id="error-toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-danger text-white">
                    <strong class="me-auto">Error</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    ${message}
                </div>
            </div>
        </div>
    `;
    
    const toastDiv = document.createElement('div');
    toastDiv.innerHTML = toastHtml;
    document.body.appendChild(toastDiv.firstChild);
    
    // Show the toast
    const toast = new bootstrap.Toast(document.getElementById('error-toast'));
    toast.show();
}

// Clear all stored authentication data
function clearStoredAuthData() {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.ADMIN_USER_DATA);
    localStorage.removeItem(STORAGE_KEYS.GIFTS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.GIFTS_CATEGORY_DATA);
    localStorage.removeItem(STORAGE_KEYS.GIFTS_PRODUCT_DATA);
    localStorage.removeItem(STORAGE_KEYS.LAST_AUTH_TIME);
    
    // Reset the in-memory config as well
    apiConfig3.admin.authToken = null;
    apiConfig3.admin.userData = null;
    apiConfig3.gifts.authToken = null;
    apiConfig3.gifts.categoryData = null;
    apiConfig3.gifts.productData = null;
    apiConfig3.gifts.currentPage = 1;
    apiConfig3.gifts.hasMoreProducts = true;
}

// Utility function to format currency
function formatCurrency(amount, currencySymbol = '₹') {
    if (amount === null || amount === undefined) return 'N/A';
    return `${currencySymbol}${parseFloat(amount).toFixed(2)}`;
}
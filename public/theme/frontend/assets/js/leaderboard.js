/**
 * Leaderboard Handler
 * Fetches leaderboard data from API and updates the UI
 */

// Configuration
const API_CONFIG = {
    baseUrl: null, // Will be set dynamically from localStorage
    endpoint: '/customer/leaderboard/daily-spends',
    perPage: 10, // Adjust as needed
    currentPage: 1
};

// DOM Elements
const topThreeContainer = document.querySelector('.top-three');
const leaderboardList = document.querySelector('.leaderboard-list');

/**
 * Initialize the leaderboard
 */
function initLeaderboard() {
    // Get base URL and token from localStorage
    const baseUrlAdmin = "https://admin.olopo.app/api";
    const token = localStorage.getItem('olopo_admin_token');
    
    if (!baseUrlAdmin || !token) {
        console.error('Base URL or token not found in localStorage');
        displayError('Configuration error. Please log in again.');
        return;
    }
    
    API_CONFIG.baseUrl = baseUrlAdmin;
    
    // Fetch leaderboard data
    fetchLeaderboardData(token);
}

/**
 * Fetch leaderboard data from API
 * @param {string} token - Authentication token
 */
async function fetchLeaderboardData(token) {
    try {
        showLoader();
        
        const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoint}?page=${API_CONFIG.currentPage}&per_page=${API_CONFIG.perPage}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        const result = await response.json();
        
        if (result.success) {
            updateLeaderboard(result.data);
        } else {
            console.error('API Error:', result.message);
            displayError('Failed to load leaderboard data.');
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        displayError('Connection error. Please try again later.');
    } finally {
        hideLoader();
    }
}

/**
 * Update the leaderboard UI with fetched data
 * @param {Object} data - Leaderboard data from API
 */
function updateLeaderboard(data) {
    if (!data || !data.daily_spends || data.daily_spends.length === 0) {
        displayError('No leaderboard data available.');
        return;
    }
    
    const users = data.daily_spends;
    
    // Clear existing content
    topThreeContainer.innerHTML = '';
    leaderboardList.innerHTML = '';
    
    // Handle top three users
    updateTopThreeUsers(users.slice(0, Math.min(3, users.length)));
    
    // Handle remaining users list
    updateUsersList(users.slice(Math.min(3, users.length)));
    
    // Handle current user highlight if available
    if (data.user_rank) {
        addCurrentUserToList(data.user_rank);
    }
}

/**
 * Update the top three section of the leaderboard
 * @param {Array} topUsers - Array of top users (max 3)
 */
function updateTopThreeUsers(topUsers) {
    // Create positions array for layout
    const positions = [2, 1, 3]; // 2nd place, 1st place, 3rd place order
    
    // Handle fewer than 3 users
    if (topUsers.length < 3) {
        // If only one user, place them in the middle (crown position)
        if (topUsers.length === 1) {
            const user = topUsers[0];
            const topCardHTML = createTopCardHTML(user, 1);
            topThreeContainer.innerHTML = topCardHTML;
        } else {
            // For 2 users, place them in 1st and 2nd positions
            topUsers.forEach((user, index) => {
                const position = index === 0 ? 1 : 2;
                const topCardHTML = createTopCardHTML(user, position);
                topThreeContainer.innerHTML += topCardHTML;
            });
        }
        return;
    }
    
    // For 3 or more users, use the standard layout
    topUsers.forEach((user, index) => {
        const position = positions[index];
        const topCardHTML = createTopCardHTML(user, position);
        topThreeContainer.innerHTML += topCardHTML;
    });
}

/**
 * Create HTML for a top card user
 * @param {Object} user - User data
 * @param {number} position - Position (1, 2, or 3)
 * @returns {string} HTML for the top card
 */
function createTopCardHTML(user, position) {
    const profileImage = user.profile_photo || 'assets/images/leaderboard/user.png';
    const isCrown = position === 1;
    
    return `
        <div class="top-card">
            ${isCrown ? '<div class="crown">👑</div>' : `<span class="rank-label">${position}</span>`}
            <img src="${profileImage}" alt="${user.name}">
            <div class="fw-semibold mt-1">${user.name}</div>
            <small class="text-muted">${user.location || 'Unknown'}</small><br/>
            <small><i class="bi bi-coin gold-coin"> </i>${user.points}</small>
        </div>
    `;
}

/**
 * Update the users list below the top three
 * @param {Array} users - Array of remaining users
 */
function updateUsersList(users) {
    if (users.length === 0) return;
    
    users.forEach((user, index) => {
        // Position is index + 4 because we've already shown top 3
        const position = index + 4;
        const listItemHTML = createListItemHTML(user, position);
        leaderboardList.innerHTML += listItemHTML;
    });
}

/**
 * Create HTML for a list item user
 * @param {Object} user - User data
 * @param {number} position - Position in the leaderboard
 * @param {boolean} isCurrentUser - Whether this is the current user
 * @returns {string} HTML for the list item
 */
function createListItemHTML(user, position, isCurrentUser = false) {
    const profileImage = user.profile_photo || 'assets/images/leaderboard/user.png';
    const highlightClass = isCurrentUser ? 'highlight' : '';
    
    return `
        <li class="list-group-item ${highlightClass}">
            <div class="user-details">
                <img src="${profileImage}" alt="${user.name}">
                <div>
                    ${user.name}${isCurrentUser ? ' (me)' : ''}<br>
                    <small class="text-muted">${user.location || 'Unknown'} • <i class="bi bi-coin gold-coin"> </i>${user.points}</small>
                </div>
            </div>
            <span>#${position}</span>
        </li>
    `;
}

/**
 * Add current user to the list if not already in top positions
 * @param {Object} userRank - Current user's rank data
 */
function addCurrentUserToList(userRank) {
    // Only add if the user isn't already in the displayed list
    // This is a simplified check; you might need a more robust way to identify the current user
    const userPosition = userRank.position;
    
    // If user is in top positions, don't add again
    if (userPosition <= API_CONFIG.perPage) return;
    
    // Add a separator if needed
    if (leaderboardList.children.length > 0) {
        leaderboardList.innerHTML += `
            <li class="list-group-item text-center text-muted">
                <small>...</small>
            </li>
        `;
    }
    
    // Add the current user
    const listItemHTML = createListItemHTML(userRank, userPosition, true);
    leaderboardList.innerHTML += listItemHTML;
}

/**
 * Display an error message
 * @param {string} message - Error message
 */
function displayError(message) {
    // Create an error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger text-center mx-auto mt-3';
    errorDiv.style.maxWidth = '400px';
    errorDiv.textContent = message;
    
    // Insert after the leaderboard title
    const leaderboardTitle = document.querySelector('.leaderboard-title');
    if (leaderboardTitle && leaderboardTitle.parentNode) {
        leaderboardTitle.parentNode.insertBefore(errorDiv, leaderboardTitle.nextSibling);
    } else {
        // Fallback - insert at beginning of leaderboard section
        const leaderboardSection = document.querySelector('.leaderboard-section');
        if (leaderboardSection) {
            leaderboardSection.prepend(errorDiv);
        }
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

/**
 * Show a loading indicator
 */
function showLoader() {
    // Create loader if it doesn't exist
    if (!document.getElementById('leaderboard-loader')) {
        const loader = document.createElement('div');
        loader.id = 'leaderboard-loader';
        loader.className = 'text-center my-4';
        loader.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
        
        // Insert after the leaderboard title
        const leaderboardTitle = document.querySelector('.leaderboard-title');
        if (leaderboardTitle && leaderboardTitle.parentNode) {
            leaderboardTitle.parentNode.insertBefore(loader, leaderboardTitle.nextSibling);
        }
    }
}

/**
 * Hide the loading indicator
 */
function hideLoader() {
    const loader = document.getElementById('leaderboard-loader');
    if (loader) {
        loader.remove();
    }
}

/**
 * Load more users when scrolling to the bottom (pagination)
 */
function setupInfiniteScroll() {
    // This functionality can be added if needed
    // Would need to track if there are more pages to load
    // And add a scroll event listener
}

// Initialize the leaderboard when the DOM is loaded
document.addEventListener('DOMContentLoaded', initLeaderboard);
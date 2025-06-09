// Event API Handler for Olopo
document.addEventListener('DOMContentLoaded', function() {
    loadEvents();
});

/**
 * Function to load events from the API
 */
async function loadEvents() {
    try {
        // Get the admin token from localStorage
        const token = localStorage.getItem('olopo_admin_token');
        
        if (!token) {
            console.error('Admin token not found in localStorage');
            displayErrorMessage('Authentication error. Please login again.');
            return;
        }
        
        // Get the base URL from environment or use a default
        const baseUrl = getBaseUrl();
        const apiUrl = `${baseUrl}/customer/events?event_category=2&page=1`;
        
        // Show loading state
        showLoadingState();
        
        // Fetch events data
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
            // Process and display events
            displayEvents(result.data.data);
        } else {
            console.error('API returned error:', result.message);
            displayErrorMessage(result.message || 'Failed to load events');
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        displayErrorMessage('Failed to load events. Please try again later.');
    } finally {
        // Hide loading state
        hideLoadingState();
    }
}

/**
 * Get base URL from configuration
 */
function getBaseUrl() {
    // You can implement your logic to get base URL
    // This could be from an environment variable or config
    return 'https://olopo-dev.webc.in/api';
}

/**
 * Display events in the UI
 * @param {Array} events - Array of event objects
 */
function displayEvents(events) {
    if (!events || events.length === 0) {
        displayEmptyState('No events available at the moment.');
        return;
    }
    
    const availableTabContent = document.getElementById('available');
    
    // Clear existing content
    availableTabContent.innerHTML = '';
    
    // Loop through events and create cards
    events.forEach(event => {
        const eventCard = createEventCard(event);
        availableTabContent.appendChild(eventCard);
    });
}

/**
 * Create an event card element
 * @param {Object} event - Event data object
 * @returns {HTMLElement} - Event card DOM element
 */
function createEventCard(event) {
    // Create main card container
    const card = document.createElement('div');
    card.className = 'card event-card';
    card.setAttribute('data-event-id', event._id);
    
    // Create event image
    const img = document.createElement('img');
    img.className = 'event-image';
    img.src = event.images.banner || 'assets/images/events/first-section.png';
    img.alt = event.name;
    img.onerror = function() {
        this.src = 'assets/images/events/first-section.png';
    };
    
    // Create event overlay
    const overlay = document.createElement('div');
    overlay.className = 'event-overlay';
    
    // Add appropriate label based on event status
    const label = document.createElement('span');
    
    // Determine event status and set appropriate label
    if (event.tickets === 0 && event.tickets_available) {
        label.className = 'sold-out';
        label.textContent = 'Sold Out';
    } else if (event.classes && event.classes.length > 0) {
        // Check payment methods for the first class
        const firstClass = event.classes[0];
        const paymentMethod = firstClass.payment_methods[0];
        
        if (paymentMethod) {
            if (paymentMethod.type === 2) {
                // Points only
                label.className = 'coin';
                label.innerHTML = `<i class="bi bi-coin gold-coin"></i> ${paymentMethod.points}`;
            } else if (paymentMethod.type === 3) {
                // Cash + Points
                label.className = 'coin';
                label.innerHTML = `<i class="bi bi-coin gold-coin"></i> ${paymentMethod.points}`;
            }
        }
    }
    
    if (label.textContent || label.innerHTML) {
        overlay.appendChild(label);
    }
    
    // Create event details container
    const details = document.createElement('div');
    details.className = 'event-details';
    
    // Event title
    const title = document.createElement('h5');
    title.className = 'mb-1';
    title.textContent = event.name;
    
    // Event date and time
    const dateTime = document.createElement('small');
    dateTime.innerHTML = `<i class="bi bi-calendar-event"></i> ${event.date_from} - ${event.date_to} · ${event.start_time}`;
    
    // Event location
    const location = document.createElement('small');
    location.innerHTML = `<i class="bi bi-geo-alt"></i> ${event.location.place}`;
    
    // Add line break between small elements
    const br = document.createElement('br');
    
    // Assemble the card
    details.appendChild(title);
    details.appendChild(dateTime);
    details.appendChild(br);
    details.appendChild(location);
    
    card.appendChild(img);
    card.appendChild(overlay);
    card.appendChild(details);
    
    // Add click event to navigate to event details
    card.addEventListener('click', function() {
        window.location.href = `#?id=${event._id}`;
    });
    
    return card;
}

/**
 * Display empty state message
 * @param {string} message - Message to display
 */
function displayEmptyState(message) {
    const availableTabContent = document.getElementById('available');
    availableTabContent.innerHTML = `
        <div class="empty-state">
            <p class="mt-3">${message}</p>
        </div>
    `;
}

/**
 * Display error message
 * @param {string} message - Error message to display
 */
function displayErrorMessage(message) {
    const availableTabContent = document.getElementById('available');
    availableTabContent.innerHTML = `
        <div class="error-state">
            <p class="mt-3 text-danger">
                <i class="bi bi-exclamation-triangle"></i> ${message}
            </p>
            <button class="btn btn-sm btn-outline-primary" onclick="loadEvents()">
                <i class="bi bi-arrow-clockwise"></i> Try Again
            </button>
        </div>
    `;
}

/**
 * Show loading state
 */
function showLoadingState() {
    const availableTabContent = document.getElementById('available');
    availableTabContent.innerHTML = `
        <div class="loading-state text-center py-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading events...</p>
        </div>
    `;
}

/**
 * Hide loading state
 */
function hideLoadingState() {
    // This function doesn't need to do anything as the content
    // will be replaced with actual events or error message
}

/**
 * Filter events based on search input
 * @param {string} searchQuery - Search query
 */
function filterEvents(searchQuery) {
    // Implementation for filtering events
    // This would be called from a search input event listener
}

// Add event listener for search input if needed
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[placeholder="Search..."]');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterEvents(e.target.value);
        });
    }
    
    // Add event listeners for tabs if needed
    const tabs = document.querySelectorAll('#eventTabs button');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Handle tab changes here if needed
        });
    });
});
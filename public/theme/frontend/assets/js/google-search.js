/**
 * Google Places API Integration for 9Kopo
 * This file handles the place search functionality in the header
 * and language selection functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Places API
    initPlacesAPI();
    
    // Initialize language selector
    initLanguageSelector();
});

/**
 * Initialize Google Places API
 */
function initPlacesAPI() {
    // Load the Google Places API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUO-l2vH7nnE1lKyjk6xZmchb7VjmgX38&libraries=places&callback=initAutocomplete`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

/**
 * Initialize language selector dropdown
 */
function initLanguageSelector() {
    const languageInput = document.querySelector('input[placeholder="Select language"]');
    if (!languageInput) return;
    
    // Create a container to hold the dropdown
    const container = document.createElement('div');
    container.className = 'language-dropdown-container position-relative';
    
    // Insert the container before the language input
    languageInput.parentNode.insertBefore(container, languageInput);
    
    // Move the language input into the container
    container.appendChild(languageInput);
    
    // Create the dropdown element
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown position-absolute w-100 d-none';
    dropdown.style.backgroundColor = '#212529';
    dropdown.style.border = '1px solid #495057';
    dropdown.style.borderRadius = '4px';
    dropdown.style.zIndex = '1000';
    dropdown.style.top = '100%';
    dropdown.style.left = '0';
    dropdown.style.marginTop = '5px';
    container.appendChild(dropdown);
    
    // Define language options
    const languages = [
        { code: 'en', name: 'English' },
        /* { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'it', name: 'Italiano' },
        { code: 'pt', name: 'Português' },
        { code: 'ru', name: 'Русский' },
        { code: 'zh', name: '中文' },
        { code: 'ja', name: '日本語' },
        { code: 'ar', name: 'العربية' } */
    ];
    
    // Add language options to dropdown
    languages.forEach(lang => {
        const option = document.createElement('div');
        option.className = 'language-option p-2 text-white';
        option.textContent = lang.name;
        option.dataset.code = lang.code;
        option.style.cursor = 'pointer';
        option.style.transition = 'background-color 0.2s';
        
        option.addEventListener('mouseover', () => {
            option.style.backgroundColor = '#343a40';
        });
        
        option.addEventListener('mouseout', () => {
            option.style.backgroundColor = 'transparent';
        });
        
        option.addEventListener('click', () => {
            selectLanguage(lang);
            dropdown.classList.add('d-none');
        });
        
        dropdown.appendChild(option);
    });
    
    // Set default language (English)
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        const lang = JSON.parse(savedLanguage);
        languageInput.value = lang.name;
    } else {
        // Default to English if no language is saved
        languageInput.value = 'English';
        localStorage.setItem('selectedLanguage', JSON.stringify({ code: 'en', name: 'English' }));
    }
    
    // Show dropdown when clicking on the input
    languageInput.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('d-none');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) {
            dropdown.classList.add('d-none');
        }
    });
    
    // Set readonly to prevent keyboard input
    languageInput.setAttribute('readonly', 'readonly');
    languageInput.style.cursor = 'pointer';
}

/**
 * Initialize autocomplete functionality on the search inputs
 * This function will be called by the Google Places API once it's loaded
 */
function initAutocomplete() {
    // Target both mobile and desktop search inputs
    const searchInputs = document.querySelectorAll('input[placeholder="Search..."]');
    const cityInput = document.querySelector('input[placeholder="Select your city"]');
    
    // Apply autocomplete to the city input
    if (cityInput) {
        const cityAutocomplete = new google.maps.places.Autocomplete(cityInput, {
            types: ['(cities)'] // Restrict to cities only
        });
        
        // Handle place selection for city
        cityAutocomplete.addListener('place_changed', function() {
            const place = cityAutocomplete.getPlace();
            handleCitySelection(place);
        });
        
        // Style the autocomplete dropdown for city input
        applyAutocompleteStyles(cityInput);
    }
    
    // Apply autocomplete to all search inputs
    /* searchInputs.forEach(input => {
        if (input) {
            const searchAutocomplete = new google.maps.places.Autocomplete(input, {
                types: ['establishment', 'geocode'] // Search for establishments and addresses
            });
            
            // Handle place selection for search
            searchAutocomplete.addListener('place_changed', function() {
                const place = searchAutocomplete.getPlace();
                handlePlaceSelection(place);
            });
            
            // Style the autocomplete dropdown for search input
            applyAutocompleteStyles(input);
        }
    }); */
    
    // Prevent form submission on Enter key
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                return false;
            }
        });
    });
}

/**
 * Apply custom styles to the Google Places autocomplete dropdown
 * @param {HTMLElement} input - The input element with autocomplete
 */
function applyAutocompleteStyles(input) {
    // Add event listener to apply custom styles after Google creates the dropdown
    setTimeout(() => {
        // Target autocomplete elements
        const pacContainers = document.querySelectorAll('.pac-container');
        
        pacContainers.forEach(container => {
            // Add custom class for styling
            container.classList.add('custom-pac-container');
            
            // Adjust position to match the dark theme
            container.style.backgroundColor = '#212529';
            container.style.border = '1px solid #495057';
            container.style.color = '#fff';
            container.style.marginTop = '2px';
        });
    }, 300);
    
    // Add CSS for autocomplete styling
    if (!document.getElementById('autocomplete-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'autocomplete-styles';
        styleSheet.textContent = `
            .custom-pac-container {
                background-color: #212529 !important;
                border-color: #495057 !important;
            }
            .pac-item {
                background-color: #212529 !important;
                color: #fff !important;
                border-color: #495057 !important;
                padding: 8px !important;
            }
            .pac-item:hover {
                background-color: #343a40 !important;
            }
            .pac-item-query {
                color: #fff !important;
            }
            .pac-matched {
                color: #0d6efd !important;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

/**
 * Handle the selection of a place from the search autocomplete
 * @param {Object} place - The selected place object
 */
function handlePlaceSelection(place) {
    // If the place has no details, exit
    if (!place.geometry) {
        console.log("No details available for this place");
        return;
    }
    
    console.log("Place selected:", place);
    
    // Coordinate information from selected place
    const coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
    };
    
    // Store complete place data
    const placeData = {
        name: place.name || '',
        address: place.formatted_address || '',
        location: coordinates,
        placeId: place.place_id
    };
    
    // Save coordinates and place data in multiple storage locations for different use cases:
    
    // 1. Session Storage - Temporary storage that persists during the browser session
    sessionStorage.setItem('selectedPlace', JSON.stringify(placeData));
    sessionStorage.setItem('selectedCoordinates', JSON.stringify(coordinates));
    
    // 2. Data attributes - For immediate access by other scripts
    document.body.dataset.selectedLat = coordinates.lat;
    document.body.dataset.selectedLng = coordinates.lng;
    
    // 3. Custom event - For other scripts to listen and react to
    const placeSelectedEvent = new CustomEvent('placeSelected', {
        detail: {
            place: placeData,
            coordinates: coordinates
        }
    });
    document.dispatchEvent(placeSelectedEvent);
    
    // Log the coordinates for testing
    console.log("Selected coordinates:", coordinates);
    
    // Optionally redirect to a search results page
    // window.location.href = `/search-results.html?placeId=${place.place_id}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
}

/**
 * Handle the selection of a city
 * @param {Object} place - The selected city object
 */
function handleCitySelection(place) {
    // If the place has no details, exit
    if (!place.geometry) {
        console.log("No details available for this city");
        return;
    }
    
    console.log("City selected:", place);
    
    // Extract city coordinates
    const coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
    };
    
    // Get city information
    const cityData = {
        name: place.name || '',
        address: place.formatted_address || '',
        location: coordinates,
        placeId: place.place_id
    };
    
    // Save city data and coordinates in multiple locations:
    
    // 1. Local Storage - Persists even after browser is closed
    localStorage.setItem('selectedCity', JSON.stringify(cityData));
    localStorage.setItem('cityCoordinates', JSON.stringify(coordinates));
    
    // 2. Data attributes - For immediate access by other scripts
    document.body.dataset.cityLat = coordinates.lat;
    document.body.dataset.cityLng = coordinates.lng;
    
    // 3. Custom event - For other scripts to listen and react to
    const citySelectedEvent = new CustomEvent('citySelected', {
        detail: {
            city: cityData,
            coordinates: coordinates
        }
    });
    document.dispatchEvent(citySelectedEvent);
    
    // Log the city coordinates for testing
    console.log("City coordinates:", coordinates);
    
    // You could refresh the page content based on selected city
    // or update UI elements to reflect the city choice
}

/**
 * Select a language from the dropdown
 * @param {Object} language - The selected language object
 */
function selectLanguage(language) {
    // Update the input field
    const languageInput = document.querySelector('input[placeholder="Select language"]');
    if (languageInput) {
        languageInput.value = language.name;
    }
    
    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
    
    // Dispatch language change event
    const languageEvent = new CustomEvent('languageChanged', {
        detail: language
    });
    document.dispatchEvent(languageEvent);
    
    console.log("Language selected:", language);
    
    // Here you would typically implement language change logic
    // For example, reload page content in the selected language
    // or update UI elements to reflect the language choice
}

/**
 * Clear the search input
 * @param {string} inputSelector - The selector for the input to clear
 */
function clearSearchInput(inputSelector) {
    const input = document.querySelector(inputSelector);
    if (input) {
        input.value = '';
    }
}

/**
 * Get the currently selected coordinates (search or city)
 * @returns {Object|null} The coordinates object with lat and lng, or null if not available
 */
function getSelectedCoordinates() {
    // Try to get coordinates from session storage (from search)
    const searchCoords = sessionStorage.getItem('selectedCoordinates');
    if (searchCoords) {
        return JSON.parse(searchCoords);
    }
    
    // If no search coordinates, try city coordinates
    const cityCoords = localStorage.getItem('cityCoordinates');
    if (cityCoords) {
        return JSON.parse(cityCoords);
    }
    
    // If no coordinates are found, return null
    return null;
}

/**
 * Get the currently selected language
 * @returns {Object} The language object with code and name
 */
function getSelectedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        return JSON.parse(savedLanguage);
    }
    // Default to English
    return { code: 'en', name: 'English' };
}

// Export functions that might be needed by other scripts
window.placeSearch = {
    clearSearchInput,
    handlePlaceSelection,
    handleCitySelection,
    getSelectedCoordinates,
    getSelectedLanguage
};
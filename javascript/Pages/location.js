document.addEventListener('DOMContentLoaded', () => {
    // Initialize Leaflet map
    const map = L.map('map').setView([51.505, -0.09], 13); // Default: London
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Placeholder function for location search
    window.handleLocationSearch = () => {
        const query = $('#locationQuery').value;
        setTextContent('locationInfo', `Location info for "${query}"...`);
        // Update map view (requires geocoding API for real coordinates)
        // Example: map.setView([newLat, newLon], 13);
    };

    // Initialize with placeholder
    setTextContent('locationInfo', 'Enter a location to view details and see it on the map.');
});

// === Backend Integration Section ===
// Add your Location API call below
/*
function fetchLocation(query) {
    // Your Location API call (e.g., fetch('your-backend-endpoint/location?query=' + query))
    // Update DOM: setTextContent('locationInfo', ...)
    // Update map: map.setView([lat, lon], 13);
}
*/
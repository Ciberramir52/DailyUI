let map;
let marker;

function initMap() {
    // Default location (New York City) if no location is retrieved
    const defaultLocation = { lat: 40.7128, lng: -74.0060 };

    // Initialize the map centered on default location
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: defaultLocation,
    });

    // Default marker on the map
    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: "Default Location (NYC)",
    });
}

// Function to track the user's location
function trackLocation() {
    const status = document.getElementById('location-status');

    // Check if Geolocation is supported
    if (navigator.geolocation) {
        status.textContent = "Locating...";

        // Use Geolocation API to get current position
        navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            // Update the map and marker to the new position
            map.setCenter(pos);
            marker.setPosition(pos);
            marker.setTitle("You are here");

            status.textContent = `Location found: Latitude ${pos.lat}, Longitude ${pos.lng}`;
        }, () => {
            // Error handling
            status.textContent = "Unable to retrieve your location.";
        });
    } else {
        // Browser does not support Geolocation
        status.textContent = "Geolocation is not supported by your browser.";
    }
}

// Add event listener to the "Track My Location" button
document.getElementById('track-location-btn').addEventListener('click', trackLocation);

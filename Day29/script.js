// Function to initialize the Google Map
function initMap() {
    // Define the center of the map (example: Central City)
    const mapCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates for example

    // Create a map instance
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: mapCenter,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    { "saturation": "-80" }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#c9e4f4" }
                ]
            }
        ]
    });

    // Example restaurant locations
    const locations = [
        { lat: 37.7749, lng: -122.4194, name: "Taco Corner", type: "Mexican" },
        { lat: 37.7849, lng: -122.4094, name: "Pasta Heaven", type: "Italian" },
        { lat: 37.7649, lng: -122.4294, name: "Sushi World", type: "Japanese" },
        { lat: 37.7549, lng: -122.4194, name: "Burger Palace", type: "American" },
    ];

    // Loop through locations and add markers to the map
    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });

        // Info window for each marker
        const infoWindow = new google.maps.InfoWindow({
            content: `<h4>${location.name}</h4><p>Type: ${location.type}</p>`
        });

        // Show the info window on marker click
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

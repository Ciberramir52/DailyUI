// Handling form submission
document.getElementById('hotel-search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Capture form data
    const city = document.getElementById('city').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;

    // Simulate a hotel search result
    alert(`Searching hotels in ${city} from ${checkIn} to ${checkOut} for ${guests} guest(s) in a ${roomType}.`);
});

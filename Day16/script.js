// Get elements
const popupOverlay = document.getElementById('popup-overlay');
const openPopupBtn = document.getElementById('open-popup');
const closePopupBtn = document.getElementById('close-popup');

// Open the popup when the "Subscribe to Newsletter" button is clicked
openPopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close the popup if the user clicks outside the popup box
window.addEventListener('click', (e) => {
    if (e.target == popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

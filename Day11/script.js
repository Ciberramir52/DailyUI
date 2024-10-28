// Function to show a flash message
function showMessage(messageId) {
    const message = document.getElementById(messageId);
    message.classList.remove('hidden');
    
    // Auto-hide the flash message after 3 seconds
    setTimeout(() => {
        message.classList.add('hidden');
    }, 3000);
}

// Function to manually close a flash message
function closeMessage(messageId) {
    const message = document.getElementById(messageId);
    message.classList.add('hidden');
}

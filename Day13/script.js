// JavaScript to handle sending messages
const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatBox = document.querySelector('.chat-box');

// Function to send a message
sendButton.addEventListener('click', function() {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerHTML = `<p>${messageText}</p><span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>`;
        chatBox.appendChild(messageElement);
        messageInput.value = ''; // Clear input after sending

        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

// Handle pressing "Enter" key to send messages
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

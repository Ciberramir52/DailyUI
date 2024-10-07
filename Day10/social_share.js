document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const socialOptions = document.getElementById('social-options');

    shareButton.addEventListener('click', () => {
        socialOptions.classList.toggle('active');
    });
});

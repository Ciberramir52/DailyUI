// Sidebar navigation for showing/hiding different setting panels
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
const panels = document.querySelectorAll('.setting-panel');

// Loop through links to set up click event for switching between settings
sidebarLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const settingToShow = this.getAttribute('data-setting');

        // Remove active class from all links
        sidebarLinks.forEach(l => l.classList.remove('active'));

        // Add active class to the clicked link
        this.classList.add('active');

        // Hide all panels
        panels.forEach(panel => panel.classList.remove('active'));

        // Show the relevant panel
        document.getElementById(`${settingToShow}-settings`).classList.add('active');
    });
});

// Theme toggle buttons for appearance setting
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

lightModeBtn.addEventListener('click', () => {
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
    document.body.classList.remove('dark-mode');
});

darkModeBtn.addEventListener('click', () => {
    darkModeBtn.classList.add('active');
    lightModeBtn.classList.remove('active');
    document.body.classList.add('dark-mode');
});

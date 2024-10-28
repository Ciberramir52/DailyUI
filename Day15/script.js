// Set initial temperature and limits
let currentTemp = 34;
const maxTemp = 40;
const minTemp = 28;

const tempDisplay = document.getElementById("current-temp");
const tempUpButton = document.getElementById("temp-up");
const tempDownButton = document.getElementById("temp-down");

tempUpButton.addEventListener("click", () => {
    if (currentTemp < maxTemp) {
        currentTemp++;
        updateTemperature();
    }
});

tempDownButton.addEventListener("click", () => {
    if (currentTemp > minTemp) {
        currentTemp--;
        updateTemperature();
    }
});

function updateTemperature() {
    tempDisplay.textContent = currentTemp + "°F";
}

// You can expand this logic to handle any specific functionality
const freezerToggle = document.getElementById('freezer-toggle');
const coolingToggle = document.getElementById('cooling-toggle');
const lightsToggle = document.getElementById('lights-toggle');
const alarmToggle = document.getElementById('alarm-toggle');

freezerToggle.addEventListener('change', (e) => {
    console.log('Freezer is ' + (e.target.checked ? 'ON' : 'OFF'));
});

coolingToggle.addEventListener('change', (e) => {
    console.log('Cooling is ' + (e.target.checked ? 'ON' : 'OFF'));
});

lightsToggle.addEventListener('change', (e) => {
    console.log('Lights are ' + (e.target.checked ? 'ON' : 'OFF'));
});

alarmToggle.addEventListener('change', (e) => {
    console.log('Door Alarm is ' + (e.target.checked ? 'ON' : 'OFF'));
});

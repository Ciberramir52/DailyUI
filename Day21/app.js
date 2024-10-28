// Simulating some data fetching or dynamic updates
const temperatureElement = document.getElementById('temperature');
const lightingStatusElement = document.querySelector('#lighting-status p');
const toggleLightsButton = document.getElementById('toggle-lights');
const securityStatusElement = document.getElementById('security-status');
const energyConsumptionElement = document.getElementById('energy-consumption');

// Toggle Lights On and Off
let lightsOn = false;

toggleLightsButton.addEventListener('click', () => {
    lightsOn = !lightsOn;
    lightingStatusElement.textContent = lightsOn ? 'Lights are ON' : 'Lights are OFF';
});

// Dynamic updates
setInterval(() => {
    // Update temperature dynamically (simulated with random value)
    const temperatureValue = (Math.random() * 10 + 20).toFixed(1); // Random temp between 20 and 30°C
    temperatureElement.querySelector('p').textContent = `${temperatureValue}°C`;

    // Simulate random security status
    const securityStatus = Math.random() > 0.5 ? 'Armed' : 'Disarmed';
    securityStatusElement.querySelector('p').textContent = securityStatus;

    // Simulate random energy consumption updates
    const energyConsumption = (Math.random() * 200 + 100).toFixed(0); // Random between 100 and 300 kWh
    energyConsumptionElement.querySelector('p').textContent = `${energyConsumption} kWh`;
}, 5000); // Update every 5 seconds

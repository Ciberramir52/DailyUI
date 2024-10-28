// Data for the traffic chart
const trafficData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
        {
            label: 'Page Views',
            data: [1200, 1900, 3000, 5000, 2300, 3200, 4100],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
        },
        {
            label: 'Unique Visitors',
            data: [900, 1700, 2500, 4500, 2000, 2900, 3700],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: true,
        }
    ]
};

// Configuration options for the chart
const config = {
    type: 'line',
    data: trafficData,
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Traffic (in 1000s)'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly Web Traffic Analytics'
            }
        }
    }
};

// Rendering the chart using Chart.js
const trafficChart = new Chart(
    document.getElementById('trafficChart'),
    config
);

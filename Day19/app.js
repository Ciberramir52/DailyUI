// Example data for the leaderboard
const leaderboardData = [
    { rank: 1, name: "Alice", score: 5000, avatar: "https://i.pravatar.cc/50?u=1" },
    { rank: 2, name: "Bob", score: 4700, avatar: "https://i.pravatar.cc/50?u=2" },
    { rank: 3, name: "Charlie", score: 4500, avatar: "https://i.pravatar.cc/50?u=3" },
    { rank: 4, name: "David", score: 4200, avatar: "https://i.pravatar.cc/50?u=4" },
    { rank: 5, name: "Eve", score: 4000, avatar: "https://i.pravatar.cc/50?u=5" }
];

// Function to render leaderboard items
function renderLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard');
    
    leaderboardData.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.classList.add('leaderboard-item');

        playerItem.innerHTML = `
            <span class="rank">#${player.rank}</span>
            <div class="player-info">
                <img src="${player.avatar}" alt="Avatar">
                <span class="player-name">${player.name}</span>
            </div>
            <span class="player-score">${player.score} pts</span>
        `;

        leaderboardList.appendChild(playerItem);
    });
}

// Call the function to render the leaderboard
renderLeaderboard();

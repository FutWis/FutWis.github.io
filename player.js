// JavaScript for Player Webpage

// Function to update the current time
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    timeElement.textContent = now.toLocaleTimeString();
}

// Function to load and display player-specific data
function loadPlayerData() {
    // Replace this with code to fetch player data from your source
    // For demonstration purposes, we'll set some sample data here.
    const playerName = "Player Name";
    const playerImage = "player-image.jpg";
    const playerDescription = "This is a brief description of the player.";

    // Update the player's name and image
    const playerNameElement = document.querySelector('h1');
    playerNameElement.textContent = playerName;

    const playerImageElement = document.createElement('img');
    playerImageElement.src = playerImage;
    playerImageElement.alt = playerName;
    document.querySelector('header').appendChild(playerImageElement);

    // Update the player's description
    const playerDescriptionElement = document.createElement('p');
    playerDescriptionElement.textContent = playerDescription;
    document.querySelector('section').appendChild(playerDescriptionElement);
}

// Function to handle card refresh button click
function refreshCards() {
    // Replace this with code to refresh player-specific cards or content
    // For demonstration purposes, we'll just alert a message.
    alert("Refreshing player cards...");
}

// Initialize the page
function initializePage() {
    updateTime();
    setInterval(updateTime, 1000);
    loadPlayerData();

    const refreshCardsButton = document.getElementById('refreshCardsButton');
    refreshCardsButton.addEventListener('click', refreshCards);
}

document.getElementById("pack").addEventListener("click", function (event) {
    if (event.target.classList.contains("player")) {
        const playerName = event.target.getAttribute("data-name");
        const playerImage = event.target.getAttribute("data-image");
        const playerRating = event.target.getAttribute("data-rating");

        // Display player information
        document.getElementById("playerName").textContent = playerName;
        document.getElementById("playerImage").src = playerImage;
        document.getElementById("playerRating").textContent = "Rating: " + playerRating;

        // Show the player information div
        document.getElementById("playerInfo").style.display = "block";
    }
});

// Call the initialization function when the page loads
initializePage();


const packContents = [
	{ name: "Levi Van den Bussche", image: "players/vandenbusschetrailblazers.png", rating: 94 },
	{ name: "Mo Alkassar", image: "players/alkassaricon.png", rating: 92 },
	{ name: "Khalil Almasri", image: "players/almasrigold.png", rating: 92 },		
	{ name: "Keano van Eck", image: "players/vanecktotw.png", rating: 91 },		
	{ name: "Damian Borgt", image: "players/borgtnike.png", rating: 90 },	
	{ name: "Wesley Roodhuizen", image: "players/roodhuizennike.png", rating: 89 },		
	{ name: "Davy Roodhuizen", image: "players/roodhuizenicon.png", rating: 87 },
	{ name: "Rob Goedegebure", image: "players/goedegeburetotw.png", rating: 86 },
	{ name: "Joris van Puijvelde", image: "players/vanpuijveldefbsbc.png", rating: 85 },
	{ name: "Gabriel Nolet", image: "players/noletfbsbc.png", rating: 85 },
	{ name: "Heinrich Bierman", image: "players/biermanicon.png", rating: 84 },
	{ name: "Ad van Bever", image: "players/vanbevertotw.png", rating: 80 },
	{ name: "Leon Vissers", image: "players/visserstotw.png", rating: 80 },
	{ name: "Steef de Gruijter", image: "players/degruitertotw.png", rating: 80 },
	{ name: "Kyra Mariman", image: "players/marimansilverif.png", rating: 74 },
	{ name: "Mick Bogaert", image: "players/bogaertuclheromen.png", rating: 74 },
	{ name: "Wegihu Tekle", image: "players/deklebronze.png", rating: 68 },
	{ name: "Stephanie Roodhuizen", image: "players/roodhuizensbronze.png", rating: 64 },
	{ name: "Naatje", image: "players/naatjebronzenr.png", rating: 47 }
	];

// Function to search for players by name
function searchPlayers() {
	const playerNameInput = document.getElementById('playerName');
	const playerName = playerNameInput.value.trim().toLowerCase();
	const playerInfo = document.getElementById('playerInfo');

	// Clear previous player information
	playerInfo.innerHTML = '';

	// Search for players with matching names
	const matchingPlayers = packContents.filter(player => player.name.toLowerCase().includes(playerName));

	if (matchingPlayers.length === 0) {
		// If no matching players are found, display a message
		const noResultsMessage = document.createElement('p');
		noResultsMessage.textContent = 'No players found with this name.';
		playerInfo.appendChild(noResultsMessage);
	} else {
		// Display player information
		matchingPlayers.forEach(player => {
			const playerCard = document.createElement('div');
			playerCard.className = 'player-card';

			const playerImage = document.createElement('img');
			playerImage.src = player.image;
			playerImage.alt = player.name;

			const playerNameElement = document.createElement('h3');
			playerNameElement.textContent = player.name;

			const playerRatingElement = document.createElement('p');
			playerRatingElement.textContent = `Rating: ${player.rating}`;

			// Append elements to the player card
			playerCard.appendChild(playerImage);
			playerCard.appendChild(playerNameElement);
			playerCard.appendChild(playerRatingElement);

			// Append the player card to the player info section
			playerInfo.appendChild(playerCard);
		});
	}
}

// Function to handle the search button click
function handleSearchButtonClick() {
	searchPlayers();
}

// Add an event listener to the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearchButtonClick);

// Allow pressing Enter to trigger the search
const playerNameInput = document.getElementById('playerName');
playerNameInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		searchPlayers();
	}
});

// Initialize the page
function init() {
	const timeElement = document.getElementById('time');

	function updateTime() {
		const now = new Date();
		timeElement.textContent = now.toLocaleTimeString();
	}

	updateTime();
	setInterval(updateTime, 1000);
}

init();

document.getElementById("refreshCards2Button").addEventListener("click", function () {
	// Reload the webpage when the "Refresh Cards" button is clicked
	location.reload();
});

document.getElementById("refreshPage2Button").addEventListener("click", function () {
	// Reload the webpage when the "Refresh Page" button is clicked
	location.reload();
});
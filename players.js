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
// Sort players by rating in descending order
packContents.sort((a, b) => b.rating - a.rating);

// Function to create and populate player cards
function createPlayerCards() {
	const playerCardsContainer = document.getElementById('playerCards');

	packContents.forEach(player => {
		const card = document.createElement('div');
		card.classList.add('player-card'); // Add CSS class for styling

		const playerImage = document.createElement('img');
		playerImage.src = player.image;
		playerImage.alt = player.name;

		const playerName = document.createElement('p');
		playerName.textContent = player.name;

		const playerRating = document.createElement('p');
		playerRating.textContent = `Rating: ${player.rating}`;

		// Append elements to the card
		card.appendChild(playerImage);
		card.appendChild(playerName);
		card.appendChild(playerRating);

		// Append the card to the container
		playerCardsContainer.appendChild(card);
	});
}

// Call the function to create player cards when the page loads
window.addEventListener('load', createPlayerCards);

document.getElementById("refreshCards3Button").addEventListener("click", function () {
	// Reload the webpage when the "Refresh Cards" button is clicked
	location.reload();
});

document.getElementById("refreshPage3Button").addEventListener("click", function () {
	// Reload the webpage when the "Refresh Page" button is clicked
	location.reload();
});
document.getElementById("openPackButton").addEventListener("click", function () {
    // Simulate pack opening (replace with your logic)
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
    const selectedPlayers = getRandomUniquePlayers(packContents, 6);

    const packContentsDiv = document.getElementById("packContents");
    const openPackButton = document.getElementById("openPackButton");

    // Function to clear existing player cards
    function clearPlayerCards() {
        while (packContentsDiv.firstChild) {
            packContentsDiv.removeChild(packContentsDiv.firstChild);
        }
    }

    // Disable the "Open Pack" button to prevent multiple clicks
    openPackButton.disabled = true;

    // Clear existing player cards
    clearPlayerCards();

    // Function to select random unique players from the array
    function getRandomUniquePlayers(array, numPlayers) {
        const uniquePlayers = [];
        const shuffled = array.slice().sort(() => 0.5 - Math.random());

        for (const player of shuffled) {
            if (uniquePlayers.length === numPlayers) {
                break; // Stop when you have enough unique players
            }

            if (!uniquePlayers.some(p => p.name === player.name)) {
                // Adjust the probabilities based on player ratings
                const probability = Math.random(); // Random number between 0 and 1
                if (player.rating <= 80) {
                    // 80 and lower have a 100% chance
                    uniquePlayers.push(player);
                } else if (player.rating <= 85) {
                    // 81 to 85 have a 75% chance
                    if (probability < 0.75) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 89) {
                    // 86 to 89 have a 30% chance
                    if (probability < 0.3) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 93) {
                    // 90 to 93 have a 15% chance
                    if (probability < 0.15) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 96) {
                    // 94 to 96 have a 10% chance
                    if (probability < 0.1) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 98) {
                    // 97 to 98 have a 5% chance
                    if (probability < 0.05) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating === 99) {
                    // 99 has a 1% chance
                    if (probability < 0.01) {
                        uniquePlayers.push(player);
                    }
                }
            }
        }

        return uniquePlayers;
    }

    // Function to reveal player cards with animations
    function revealPlayerCards() {
        // Sort selectedPlayers by rating in descending order
        selectedPlayers.sort((a, b) => b.rating - a.rating);

        selectedPlayers.forEach((player, index) => {
            // Create card element with animation
            const card = document.createElement("div");
            card.classList.add("player-card");
            card.innerHTML = `
                <img src="${player.image}" alt="${player.name}" width="90" height="120">
                <p>${player.name}</p>
                <p>Rating: ${player.rating}</p>
            `;

            // Append the card to the packContentsDiv with animation
            setTimeout(() => {
                card.classList.add("reveal-animation");
                packContentsDiv.appendChild(card);

                // Enable the "Open Pack" button after animation is complete
                if (index === 5) { // Only enable after the last card for a maximum of 3 cards
                    openPackButton.disabled = false;
                }
            }, 1000 * index); // Adjust the delay as needed for your animation
        });
    }

    // Start revealing player cards
    revealPlayerCards();
});

document.getElementById("refreshCardsButton").addEventListener("click", function () {
    // Reload the webpage when the "Refresh Cards" button is clicked
    location.reload();
});

// Define a function to show the sign-in confirmation dialog
function showSignInDialog() {
    const customDialog = document.getElementById("customDialog");
    customDialog.style.display = "block";

    // Add event listeners for the "Yes" and "No" buttons in the dialog
    const confirmYesButton = document.getElementById("confirmYes");
    const confirmNoButton = document.getElementById("confirmNo");

    confirmYesButton.addEventListener("click", function () {
        // Display a "Thanks" pop-up with the browser's built-in alert
        alert("Thanks!");

        // Hide the special button
        document.getElementById("openSpecialPackButton").style.display = "none";

        // Close the dialog
        customDialog.style.display = "none";
    });

    confirmNoButton.addEventListener("click", function () {
        // Redirect to the specified URL when the user selects "No"
        window.location.href = "https://futwis.github.io";
    });
}

// Add a click event listener to the "Open Special Pack" button
document.getElementById("openSpecialPackButton").addEventListener("click", function () {
    // Show the sign-in confirmation dialog
    showSignInDialog();
});

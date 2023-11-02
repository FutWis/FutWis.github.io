document.getElementById("openPackButton").addEventListener("click", function () {
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is logged in, proceed with pack opening logic
    document.getElementById("openPackButton").addEventListener("click", function () {
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

      const selectedPlayers = getRandomUniquePlayers(packContents, 8);
      const packContentsDiv = document.getElementById("allPlayersPackContents");
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

        while (uniquePlayers.length < numPlayers && shuffled.length > 0) {
          const player = shuffled.pop();

          if (!uniquePlayers.some(p => p.name === player.name)) {
            uniquePlayers.push(player);
          }
        }

        return uniquePlayers;
      }

      // Function to determine if a player is a walkout
      function isWalkout(player) {
        // Add or remove conditions to customize walkout logic
        // In this example, all players are considered walkouts
        return true;
      }

      // Function to reveal player cards with animations
      function revealPlayerCards() {
        let highestWalkout = null; // Track the highest-rated walkout

        selectedPlayers.forEach((player, index) => {
          const isPlayerWalkout = isWalkout(player); // Check if it's a walkout player

          // Create card element with animation
          const card = document.createElement("div");
          card.classList.add("player-card");
          card.innerHTML = `
            <div class="card-front">
              <img src="${player.image}" alt="${player.name}" width="90" height="120">
              <p>${player.name}</p>
            </div>
            <div class="card-back">
              <p>Rating: ${player.rating}</p>
            </div>
          `;

          // Append the card to the packContentsDiv with animation
          setTimeout(() => {
            card.classList.add("reveal-animation");
            packContentsDiv.appendChild(card);

            // Enable the "Open Pack" button after animation is complete
            if (index === 7) { // Only enable after the last card for a maximum of 8 cards
              openPackButton.disabled = false;
              // Display a professional pop-up with the name of the highest-rated walkout
              if (highestWalkout) {
                createPopup(`Highest Walkout: ${highestWalkout.name}`);
              }
            }
          }, 1000 * index); // Adjust the delay as needed for your animation

          // Update the highestWalkout if the current player is higher-rated
          if (isPlayerWalkout && (!highestWalkout || player.rating > highestWalkout.rating)) {
            highestWalkout = player;
          }
        });
      }

      // Start revealing player cards
      revealPlayerCards();

      function updateTime() {
        const now = new Date();
        const timeElement = document.getElementById('time');
        timeElement.textContent = now.toLocaleTimeString();
      }

      updateTime();
      setInterval(updateTime, 1000);
    });

    document.getElementById("refreshPacksButton").addEventListener("click", function () {
      // Reload the webpage when the "Refresh Cards" button is clicked
      location.reload();
    });
  } else {
    // User is not logged in, display a message or take appropriate action
    alert("Please log in to open packs.");
  }
});

// Function to create a popup with custom message
function createPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => {
    document.body.removeChild(popup);
  }, 3000);
}
})
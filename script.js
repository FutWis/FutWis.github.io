document.getElementById("openPackButton").addEventListener("click", function() {
    // Simulate pack opening (replace with your logic)
     const packContents = [
        { name: "Pelé", image: "players/peléicon.png", rating: 95 },
        { name: "Zidane", image: "players/zidaneicon.png", rating: 94 },
        { name: "Ronaldo", image: "players/ronaldoicon.png", rating: 94 },
        { name: "Ronaldinho", image: "players/ronaldinhoicon.png", rating: 93 },
        { name: "Hamm", image: "players/hammicon.png", rating: 93 },
	{ name: "Cruyff", image: "players/cruyfficon.png", rating: 93 },
	{ name: "Yashin", image: "players/yashinicon.png", rating: 92 },
	{ name: "Puskás", image: "players/puskásicon.png", rating: 92 },
	{ name: "Garrincha", image: "players/garrinchaicon.png", rating: 92 },
	{ name: "Maldini", image: "players/maldiniicon.png", rating: 92 },
	{ name: "Müller", image: "players/müllericon.png", rating: 92 },
	{ name: "Charlton", image: "players/charltonicon.png", rating: 92 },
	{ name: "Prinz", image: "players/prinzicon.png", rating: 92 },
	{ name: "Haaland", image: "players/haalanduclrttk.png", rating: 92 },
	{ name: "Zico", image: "players/zicoicon.png", rating: 91 },
	{ name: "Sawa", image: "players/sawaicon.png", rating: 91 },
	{ name: "Baggio", image: "players/baggioicon.png", rating: 91 },
	{ name: "Henry", image: "players/henryicon.png", rating: 91 },
	{ name: "Cafu", image: "players/cafuicon.png", rating: 91 },
	{ name: "Baresi", image: "players/baresiicon.png", rating: 91 },
	{ name: "Alberto", image: "players/albertoicon.png", rating: 91 },
	{ name: "van Basten", image: "players/vanbastenicon.png", rating: 91 },
	{ name: "Eusébio", image: "players/eusébioicon.png", rating: 91 },
	{ name: "Lewandoski", image: "players/lewandoski.png", rating: 91 },
	{ name: "Putellas", image: "players/putellas.png", rating: 91 },
	{ name: "Kane", image: "players/kane.png", rating: 91 },
	{ name: "Haaland", image: "players/haalandgold.png", rating: 91 },
	{ name: "De Bruyne", image: "players/debruynegold.png", rating: 91 },
	{ name: "Mbappé", image: "players/mbappégold.png", rating: 91 },
	{ name: "Putellas", image: "players/putellasgold.png", rating: 91 },
	{ name: "Sneijder", image: "players/sneijderuclheroes.png", rating: 91 },
	{ name: "Benzema", image: "players/benzemagold.png", rating: 90 },
	{ name: "Kane", image: "players/kanegold.png", rating: 90 },
	{ name: "Courtois", image: "players/courtoisgold.png", rating: 90 },
	{ name: "Lewandoski", image: "players/lewandoskigold.png", rating: 90 },
	{ name: "Messi", image: "players/messigold.png", rating: 90 },
	{ name: "Bonmatí", image: "players/bonmatígold.png", rating: 90 },
	{ name: "Hansen", image: "players/hansengold.png", rating: 90 },
	{ name: "Kerr", image: "players/kerrgold.png", rating: 90 },
	{ name: "Tévez", image: "players/tévezuclheroes.png", rating: 90 },
	{ name: "Abily", image: "players/abilyicon.png", rating: 90 },
	{ name: "Rivaldo", image: "players/rivaldoicon.png", rating: 90 },
	{ name: "Casillas", image: "players/casillasicon.png", rating: 90 },
	{ name: "Pirlo", image: "players/pirloicon.png", rating: 90 },
	{ name: "Xavi", image: "players/xaviicon.png", rating: 90 },
	{ name: "Raúl", image: "players/raúlicon.png", rating: 90 },
	{ name: "Moore", image: "players/mooreicon.png", rating: 90 },
	{ name: "Gullit", image: "players/gulliticon.png", rating: 90 },
	{ name: "Best", image: "players/besticon.png", rating: 90 },
	{ name: "Del Piero", image: "players/delpieroicon.png", rating: 90 },
	{ name: "Bergkamp", image: "players/bergkampicon.png", rating: 90 },
	{ name: "Roberto Carlos", image: "players/robertocarlosicon.png", rating: 90 },
	{ name: "Matthäus", image: "players/matthäusicon.png", rating: 90 },
	{ name: "Salah", image: "players/salahtotw.png", rating: 90 },
	{ name: "Kerr", image: "players/kerrnike.png", rating: 90 },
	{ name: "Osimhen", image: "players/osimhenuclrttk.png", rating: 90 },
	{ name: "Bruno Fernandes", image: "players/brunofernandesuclrttk.png", rating: 90 },
	{ name: "Smith", image: "players/smithicon.png", rating: 89 },
	{ name: "Shearer", image: "players/shearericon.png", rating: 89 },
	{ name: "Zanetti", image: "players/zanettiicon.png", rating: 89 },
	{ name: "Nesta", image: "players/nestaicon.png", rating: 89 },
	{ name: "Cannavaro", image: "players/cannavaroicon.png", rating: 89 },
	{ name: "Stoichkov", image: "players/stoichkovicon.png", rating: 89 },
	{ name: "Luís Figo", image: "players/luísfigoicon.png", rating: 89 },
	{ name: "Eto'o", image: "players/eto'oicon.png", rating: 89 },
	{ name: "van Nistelrooy", image: "players/vannistelrooyicon.png", rating: 89 },
	{ name: "Drogba", image: "players/drogbaicon.png", rating: 89 },
	{ name: "Lahm", image: "players/lahmicon.png", rating: 89 },
	{ name: "Kaká", image: "players/kakáicon.png", rating: 89 },
	{ name: "Sánchez", image: "players/sánchezicon.png", rating: 89 },
	{ name: "Cantona", image: "players/cantonaicon.png", rating: 89 },
	{ name: "Sócrates", image: "players/sócratesicon.png", rating: 89 },
	{ name: "Emilio Butragueño", image: "players/emiliobutragueñoicon.png", rating: 89 },
	{ name: "Lineker", image: "players/linekericon.png", rating: 89 },
	{ name: "Carles Puyol", image: "players/carlespuyolicon.png", rating: 89 },
	{ name: "Schmeichel", image: "players/schmeichelicon.png", rating: 89 },
	{ name: "Dalglish", image: "players/dalglishicon.png", rating: 89 },
	{ name: "Jairzinho", image: "players/jairzinhoicon.png", rating: 89 },
	{ name: "Papin", image: "players/papinutheroes.png", rating: 89 },
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },
	{ name: "Ginola", image: "players/ginolautheroes.png", rating: 89 },
	{ name: "Fernando Morientes", image: "players/fernandomorientesutheroes.png", rating: 89 },
	{ name: "Völler", image: "players/völlerutheroes.png", rating: 89 },
	{ name: "Lúcio", image: "players/lúcioutheroes.png", rating: 89 },
	{ name: "Abedi Pelé", image: "players/abedipeléutheroes.png", rating: 89 },
	{ name: "van Dijk", image: "players/vandijknike.png", rating: 89 },
	{ name: "Saka", image: "players/sakauclrttk.png", rating: 89 },
	{ name: "Neymar", image: "players/neymargold.png", rating: 89 },
	{ name: "Salah", image: "players/salahgold.png", rating: 89 },
	{ name: "van Dijk", image: "players/vandijkgold.png", rating: 89 },	
	{ name: "Vinícius Jr.", image: "players/viníciusjrgold.png", rating: 89 },
	{ name: "Diani", image: "players/dianagold.png", rating: 89 },
	{ name: "Hegerberg", image: "players/hegerberggold.png", rating: 89 },
	{ name: "Mapi León", image: "players/kohlerutheroes.png", rating: 89 },
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },	
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },
	{ name: "Kohler", image: "players/kohlerutheroes.png", rating: 89 },

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

    // Function to create a professional pop-up at the bottom of the page
function createPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    
    const popupMessage = document.createElement("p");
    popupMessage.textContent = message;
    
    const closeButton = document.createElement("span");
    closeButton.addEventListener("click", function () {
        popup.remove(); // Close the pop-up when the close button is clicked
    });
    
    popup.appendChild(popupMessage);
    popup.appendChild(closeButton);
    
    document.body.appendChild(popup);

    // Auto-close the popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000); // 3000 milliseconds = 3 seconds
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

    // Function to determine if a player is a walkout
    function isWalkout(player) {
        // Add or remove conditions to customize walkout logic
        // In this example, all players are considered walkouts
        return true;
    }

    // Function to reveal player cards with animations
    function revealPlayerCards() {
        // Sort selectedPlayers by rating in descending order
        selectedPlayers.sort((a, b) => b.rating - a.rating);

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
                // Scroll to the newly added card
                card.scrollIntoView({ behavior: "smooth" });

                // Enable the "Open Pack" button after animation is complete
                if (index === 5) { // Only enable after the last card for a maximum of 3 cards
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
});

document.getElementById("refreshCardsButton").addEventListener("click", function () {
    // Reload the webpage when the "Refresh Cards" button is clicked
    location.reload();
});
document.getElementById("refreshPageButton").addEventListener("click", function () {
    // Reload the webpage when the "Refresh Page" button is clicked
    location.reload();
});
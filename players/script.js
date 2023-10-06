document.getElementById("openPackButton").addEventListener("click", function() {
    // Simulate pack opening (replace with your logic)
     const packContents = [
        { name: "Pelé", image: "players/pelé.png", rating: 95 },
        { name: "Zidane", image: "players/zidane.png", rating: 94 },
        { name: "Ronaldo", image: "players/r9.png", rating: 94 },
        { name: "Ronaldinho", image: "players/ronaldinho.png", rating: 93 },
        { name: "Hamm", image: "players/hamm.png", rating: 93 },
	{ name: "Cruyff", image: "players/cruyff.png", rating: 93 },
	{ name: "Yashin", image: "players/yashin.png", rating: 92 },
	{ name: "Puskás", image: "players/puskás.png", rating: 92 },
	{ name: "Garrincha", image: "players/garrincha.png", rating: 92 },
	{ name: "Maldini", image: "players/maldini.png", rating: 92 },
	{ name: "Müller", image: "players/müller.png", rating: 92 },
	{ name: "Charlton", image: "players/charlton.png", rating: 92 },
	{ name: "Prinz", image: "players/prinz.png", rating: 92 },
	{ name: "Haaland", image: "players/haaland.png", rating: 92 },
	{ name: "Zico", image: "players/zico.png", rating: 91 },
	{ name: "Sawa", image: "players/sawa.png", rating: 91 },
	{ name: "Baggio", image: "players/baggio.png", rating: 91 },
	{ name: "Henry", image: "players/henry.png", rating: 91 },
	{ name: "Cafu", image: "players/cafu.png", rating: 91 },
	{ name: "Baresi", image: "players/Baresi.png", rating: 91 },
	{ name: "Alberto", image: "players/alberto.png", rating: 91 },
	{ name: "van Basten", image: "players/vanbasten.png", rating: 91 },
	{ name: "Eusébio", image: "players/eusébio.png", rating: 91 },
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

    ];

    const selectedPlayers = getRandomUniquePlayers(packContents, 3);

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
                uniquePlayers.push(player);
            }
        }

        return uniquePlayers;
    }

    // Function to determine if a player is a walkout
    function isWalkout(player) {
        // Adjust the threshold to control the frequency of walkouts
        const rating = player.rating;
        const randomValue = Math.random();
        
        if (rating <= 80) {
            return randomValue <= 1; // 100% easy to get for <= 80-rated players
        } else if (rating <= 86) {
            return randomValue <= 0.4; // 40% easy to get for <= 86-rated players
        } else if (rating <= 90) {
            return randomValue <= 0.2; // 20% easy to get for <= 90-rated players
        } else if (rating <= 94) {
            return randomValue <= 0.1; // 10% easy to get for <= 94-rated players
        } else {
            return false; // All others have a 0% chance of being a walkout
        }
    }

    // Function to reveal player cards with animations
    function revealPlayerCards() {
        // Sort selectedPlayers by rating in descending order
        selectedPlayers.sort((a, b) => b.rating - a.rating);

        selectedPlayers.forEach((player, index) => {
            const isHighestRated = index === 0; // Check if it's the highest-rated player
            const isPlayerWalkout = isWalkout(player); // Check if it's a walkout player

            // Create card element with animation
            const card = document.createElement("div");
            card.classList.add("player-card");
            card.innerHTML = `
                <img src="${player.image}" alt="${player.name}" width="90" height="120">
                <p>${player.name}${isPlayerWalkout ? ' 🎇' : ''}${isHighestRated ? ' 🎆' : ''}</p>
                <p>Rating: ${player.rating}</p>
            `;

            // Append the card to the packContentsDiv with animation
            setTimeout(() => {
                card.classList.add("reveal-animation");
                packContentsDiv.appendChild(card);
                // Scroll to the newly added card
                card.scrollIntoView({ behavior: "smooth" });

                // Enable the "Open Pack" button after animation is complete
                if (index === 2) { // Only enable after the last card for a maximum of 3 cards
                    openPackButton.disabled = false;
                }
            }, 1000 * index); // Adjust the delay as needed for your animation
        });
    }

    // Start revealing player cards
    revealPlayerCards();
});

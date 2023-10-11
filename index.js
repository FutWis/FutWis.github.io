document.getElementById("openAllPlayersPackImage").addEventListener("click", function () {
    // Simulate pack opening (replace with your logic)
    const packContents = [
        { name: "Pelé", image: "players/peléicon.png", rating: 95 },
        { name: "Ronaldo", image: "players/ronaldoicon.png", rating: 94 },
        { name: "Zinedine Zidane", image: "players/zidaneicon.png", rating: 94 },
        { name: "Johan Cruyff", image: "players/cruyfficon.png", rating: 93 },
        { name: "Mia Hamm", image: "players/hammicon.png", rating: 93 },
        { name: "Ronaldinho", image: "players/ronaldinhoicon.png", rating: 93 },
        { name: "Robert Lewandowski", image: "players/lewandoskiuclrttk.png", rating: 92 },
        { name: "Erling Haaland", image: "players/haalanduclrttk.png", rating: 92 },
        { name: "Birgit Prinz", image: "players/prinzicon.png", rating: 92 },
        { name: "Bobby Charlton", image: "players/charltonicon.png", rating: 92 },
        { name: "Gerd Müller", image: "players/müllericon.png", rating: 92 },
        { name: "Paolo Maldini", image: "players/maldiniicon.png", rating: 92 },
        { name: "Mané Garrincha", image: "players/garrinchaicon.png", rating: 92 },
        { name: "Ferenc Puskás", image: "players/puskásicon.png", rating: 92 },
        { name: "Lev Yashin", image: "players/yashinicon.png", rating: 92 },
        { name: "Luka Modric", image: "players/modrićuclrttk.png", rating: 91 },
        { name: "Harry Kane", image: "players/kanetotw.png", rating: 91 },
        { name: "Alexia Putellas", image: "players/putellasnike.png", rating: 91 },
        { name: "Roberto Baggio", image: "players/baggioicon.png", rating: 91 },
        { name: "Homare Sawa", image: "players/sawaicon.png", rating: 91 },
        { name: "Zico", image: "players/zicoicon.png", rating: 91 },
        { name: "Eusébio", image: "players/eusébioicon.png", rating: 91 },
        { name: "Marco van Basten", image: "players/vanbastenicon.png", rating: 91 },
        { name: "Marcos Cafu", image: "players/cafuicon.png", rating: 91 },
        { name: "Carlos Alberto", image: "players/albertoicon.png", rating: 91 },
        { name: "Thierry Henry", image: "players/henryicon.png", rating: 91 },
        { name: "Franco Baresi", image: "players/baresiicon.png", rating: 91 },
        { name: "Robert Lewandowski", image: "players/lewandoskitotw.png", rating: 91 },
        { name: "Erling Haaland", image: "players/haalandgold.png", rating: 91 },
        { name: "Kevin De Bruyne", image: "players/debruynegold.png", rating: 91 },
        { name: "Kylian Mbappé", image: "players/mbappégold.png", rating: 91 },
        { name: "Alexia Putellas", image: "players/putellasgold.png", rating: 91 },
        { name: "Wesley Sneijder", image: "players/sneijderuclheroes.png", rating: 91 },
        { name: "Karim Benzema", image: "players/benzemagold.png", rating: 90 },
        { name: "Harry Kane", image: "players/kanegold.png", rating: 90 },
        { name: "Thibaut Courtois", image: "players/courtoisgold.png", rating: 90 },
        { name: "Robert Lewandowski", image: "players/lewandoskigold.png", rating: 90 },
        { name: "Lionel Messi", image: "players/messigold.png", rating: 90 },
        { name: "Aitana Bonmatí", image: "players/bonmatígold.png", rating: 90 },
        { name: "Carolina Graham Hansen", image: "players/hansengold.png", rating: 90 },
        { name: "Samantha May Kerr", image: "players/kerrgold.png", rating: 90 },
        { name: "Carlos Tévez", image: "players/tévezuclheroes.png", rating: 90 },
        { name: "Camille Abily", image: "players/abilyicon.png", rating: 90 },
        { name: "Rivaldo", image: "players/rivaldoicon.png", rating: 90 },
        { name: "Casillas", image: "players/casillasicon.png", rating: 90 },
        { name: "Andrea Pirlo", image: "players/pirloicon.png", rating: 90 },
        { name: "Xavi", image: "players/xaviicon.png", rating: 90 },
        { name: "Raúl", image: "players/raúlicon.png", rating: 90 },
        { name: "Bobby Moore", image: "players/mooreicon.png", rating: 90 },
        { name: "Ruud Gullit", image: "players/gulliticon.png", rating: 90 },
        { name: "George Best", image: "players/besticon.png", rating: 90 },
        { name: "Alessandro Del Piero", image: "players/delpieroicon.png", rating: 90 },
        { name: "Dennis Bergkamp", image: "players/bergkampicon.png", rating: 90 },
        { name: "Roberto Carlos", image: "players/robertocarlosicon.png", rating: 90 },
        { name: "Lothar Matthäus", image: "players/matthäusicon.png", rating: 90 },
        { name: "Mohamed Salah", image: "players/salahtotw.png", rating: 90 },
        { name: "Samantha May Kerr", image: "players/kerrnike.png", rating: 90 },
        { name: "Victor Osimhen", image: "players/osimhenuclrttk.png", rating: 90 },
        { name: "Bruno Fernandes", image: "players/brunofernandesuclrttk.png", rating: 90 },
        { name: "Kelly Smith", image: "players/smithicon.png", rating: 89 },
        { name: "Alan Shearer", image: "players/shearericon.png", rating: 89 },
        { name: "Javier Zanetti", image: "players/zanettiicon.png", rating: 89 },
        { name: "Alessandro Nesta", image: "players/nestaicon.png", rating: 89 },
        { name: "Fabio Cannavaro", image: "players/cannavaroicon.png", rating: 89 },
        { name: "Hristo Stoichkov", image: "players/stoichkovicon.png", rating: 89 },
        { name: "Luís Figo", image: "players/luísfigoicon.png", rating: 89 },
        { name: "Samuel Eto'o", image: "players/eto'oicon.png", rating: 89 },
        { name: "Ruud van Nistelrooy", image: "players/vannistelrooyicon.png", rating: 89 },
        { name: "Didier Drogba", image: "players/drogbaicon.png", rating: 89 },
        { name: "Philipp Lahm", image: "players/lahmicon.png", rating: 89 },
        { name: "Kaká", image: "players/kakáicon.png", rating: 89 },
        { name: "Hugo Sánchez", image: "players/sánchezicon.png", rating: 89 },
        { name: "Eric Cantona", image: "players/cantonaicon.png", rating: 89 },
        { name: "Sócrates", image: "players/sócratesicon.png", rating: 89 },
        { name: "Emilio Butragueño", image: "players/emiliobutragueñoicon.png", rating: 89 },
        { name: "Gary Lineker", image: "players/linekericon.png", rating: 89 },
        { name: "Carles Puyol", image: "players/carlespuyolicon.png", rating: 89 },
        { name: "Peter Schmeichel", image: "players/schmeichelicon.png", rating: 89 },
        { name: "Kenny Dalglish", image: "players/dalglishicon.png", rating: 89 },
        { name: "Jairzinho", image: "players/jairzinhoicon.png", rating: 89 },
        { name: "Jean-Pierre Papin", image: "players/papinutheroes.png", rating: 89 },
        { name: "Jürgen Kohler", image: "players/kohlerutheroes.png", rating: 89 },
        { name: "David Ginola", image: "players/ginolautheroes.png", rating: 89 },
        { name: "Fernando Morientes", image: "players/fernandomorientesutheroes.png", rating: 89 },
        { name: "Rudi Völler", image: "players/völlerutheroes.png", rating: 89 },
        { name: "Lúcio", image: "players/lúcioutheroes.png", rating: 89 },
        { name: "Abedi Pelé", image: "players/abedipeléutheroes.png", rating: 89 },
        { name: "Virgil van Dijk", image: "players/vandijknike.png", rating: 89 },
        { name: "Bukayo Saka", image: "players/sakauclrttk.png", rating: 89 },
        { name: "Ousmane Dembélé", image: "players/dembéléuclrttk.png", rating: 89 },
        { name: "Neymar Jr", image: "players/neymargold.png", rating: 89 },
        { name: "Mohamed Salah", image: "players/salahgold.png", rating: 89 },
        { name: "Virgil van Dijk", image: "players/vandijkgold.png", rating: 89 },
        { name: "Vinícius Jr.", image: "players/viníciusjrgold.png", rating: 89 },
        { name: "Kadidiatou Diani", image: "players/dianagold.png", rating: 89 },
        { name: "Ada Martine Hegerberg", image: "players/hegerberggold.png", rating: 89 },
        { name: "Mapi León", image: "players/mapileóngold.png", rating: 89 },
        { name: "Morgan", image: "players/morgangold.png", rating: 89 },
        { name: "Rúben Dias", image: "players/rúbendiasgold.png", rating: 89 },
        { name: "Rodri", image: "players/rodrigold.png", rating: 89 },
        { name: "Marc-André ter Stegen", image: "players/terstegengold.png", rating: 89 },
        { name: "Alisson", image: "players/alissongold.png", rating: 89 },
        { name: "Gianluca Vialli", image: "players/vialliutheroes.png", rating: 89 },
        { name: "Vincent Kompany", image: "players/kompanyuclheroes.png", rating: 89 },
        { name: "Casemiro", image: "players/casemirogold.png", rating: 89 },
        { name: "Debinha", image: "players/debinhagold.png", rating: 88 },
        { name: "Katoto", image: "players/katotogold.png", rating: 88 },
        { name: "Alexandra Popp", image: "players/poppgold.png", rating: 88 },
        { name: "Guro Reiten", image: "players/reitengold.png", rating: 88 },
        { name: "Bixente Lizarazu", image: "players/lizarazuutheroes.png", rating: 88 },
        { name: "Nadine Kessler", image: "players/kesslerutheroes.png", rating: 88 },
        { name: "Paulo Futre", image: "players/futreutheroes.png", rating: 88 },
        { name: "Jari Litmanen", image: "players/litmanenutheroes.png", rating: 88 },
        { name: "Ederson", image: "players/edersongold.png", rating: 88 },
        { name: "Bruno Fernandes", image: "players/brunofernandesgold.png", rating: 88 },
        { name: "Bernardo Silva", image: "players/bernardosilvagold.png", rating: 88 },
        { name: "Patri Guijarro", image: "players/guijarrogold.png", rating: 88 },
        { name: "Irene Paredes", image: "players/ireneparedesgold.png", rating: 88 },
        { name: "Antoine Griezmann", image: "players/griezmanngold.png", rating: 88 },
        { name: "Jan Oblak", image: "players/oblakgold.png", rating: 88 },
        { name: "Federico Valverde", image: "players/valverdegold.png", rating: 88 },
        { name: "Joshua Kimmich", image: "players/kimmichgold.png", rating: 88 },
        { name: "Sophia Smith", image: "players/smithgold.png", rating: 88 },
        { name: "Wendie Renard", image: "players/renardgold.png", rating: 88 },
        { name: "Christiane Endler", image: "players/endlergold.png", rating: 88 },
        { name: "Victor Osimhen", image: "players/osimhengold.png", rating: 88 },
        { name: "Franck Ribéry", image: "players/ribéryicon.png", rating: 88 },
    ];

    const selectedPlayers = getRandomUniquePlayers(packContents, 8);

    const packContentsDiv = document.getElementById("allPlayersPackContents");
    const openPackImage = document.getElementById("openAllPlayersPackImage");

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
        closeButton.classList.add("close-button");
        closeButton.textContent = "×";

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
    openPackImage.disabled = true;

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
                    // 81 to 85 have a 50% chance
                    if (probability < 0.5) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 89) {
                    // 86 to 89 have a 10% chance
                    if (probability < 0.1) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 93) {
                    // 90 to 93 have a 8% chance
                    if (probability < 0.08) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 96) {
                    // 94 to 96 have a 5% chance
                    if (probability < 0.05) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 98) {
                    // 97 to 98 have a 3% chance
                    if (probability < 0.03) {
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
                if (index === 7) { // Only enable after the last card for a maximum of 8 cards
                    openPackImage.disabled = false;
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

document.getElementById("openGoldPackImage").addEventListener("click", function () {
    // Simulate pack opening (replace with your logic)
    const packContents = [
        { name: "Kelly Smith", image: "players/smithicon.png", rating: 89 },
        { name: "Alan Shearer", image: "players/shearericon.png", rating: 89 },
        { name: "Javier Zanetti", image: "players/zanettiicon.png", rating: 89 },
        { name: "Alessandro Nesta", image: "players/nestaicon.png", rating: 89 },
        { name: "Fabio Cannavaro", image: "players/cannavaroicon.png", rating: 89 },
        { name: "Hristo Stoichkov", image: "players/stoichkovicon.png", rating: 89 },
        { name: "Luís Figo", image: "players/luísfigoicon.png", rating: 89 },
        { name: "Samuel Eto'o", image: "players/eto'oicon.png", rating: 89 },
        { name: "Ruud van Nistelrooy", image: "players/vannistelrooyicon.png", rating: 89 },
        { name: "Didier Drogba", image: "players/drogbaicon.png", rating: 89 },
        { name: "Philipp Lahm", image: "players/lahmicon.png", rating: 89 },
        { name: "Kaká", image: "players/kakáicon.png", rating: 89 },
        { name: "Hugo Sánchez", image: "players/sánchezicon.png", rating: 89 },
        { name: "Eric Cantona", image: "players/cantonaicon.png", rating: 89 },
        { name: "Sócrates", image: "players/sócratesicon.png", rating: 89 },
        { name: "Emilio Butragueño", image: "players/emiliobutragueñoicon.png", rating: 89 },
        { name: "Gary Lineker", image: "players/linekericon.png", rating: 89 },
        { name: "Carles Puyol", image: "players/carlespuyolicon.png", rating: 89 },
        { name: "Peter Schmeichel", image: "players/schmeichelicon.png", rating: 89 },
        { name: "Kenny Dalglish", image: "players/dalglishicon.png", rating: 89 },
        { name: "Jairzinho", image: "players/jairzinhoicon.png", rating: 89 },
        { name: "Jean-Pierre Papin", image: "players/papinutheroes.png", rating: 89 },
        { name: "Jürgen Kohler", image: "players/kohlerutheroes.png", rating: 89 },
        { name: "David Ginola", image: "players/ginolautheroes.png", rating: 89 },
        { name: "Fernando Morientes", image: "players/fernandomorientesutheroes.png", rating: 89 },
        { name: "Rudi Völler", image: "players/völlerutheroes.png", rating: 89 },
        { name: "Lúcio", image: "players/lúcioutheroes.png", rating: 89 },
		       { name: "Abedi Pelé", image: "players/abedipeléutheroes.png", rating: 89 },
        { name: "Virgil van Dijk", image: "players/vandijknike.png", rating: 88 },
        { name: "Bukayo Saka", image: "players/sakauclrttk.png", rating: 88 },
        { name: "Ousmane Dembélé", image: "players/dembéléuclrttk.png", rating: 88 },
        { name: "Neymar Jr", image: "players/neymargold.png", rating: 88 },
        { name: "Mohamed Salah", image: "players/salahgold.png", rating: 88 },
        { name: "Vinícius Jr.", image: "players/viníciusjrgold.png", rating: 88 },
        { name: "Kadidiatou Diani", image: "players/dianagold.png", rating: 88 },
        { name: "Ada Martine Hegerberg", image: "players/hegerberggold.png", rating: 88 },
        { name: "Mapi León", image: "players/mapileóngold.png", rating: 88 },
        { name: "Morgan", image: "players/morgangold.png", rating: 88 },
        { name: "Rúben Dias", image: "players/rúbendiasgold.png", rating: 88 },
        { name: "Rodri", image: "players/rodrigold.png", rating: 88 },
        { name: "Marc-André ter Stegen", image: "players/terstegengold.png", rating: 88 },
        { name: "Alisson", image: "players/alissongold.png", rating: 88 },
        { name: "Gianluca Vialli", image: "players/vialliutheroes.png", rating: 88 },
        { name: "Vincent Kompany", image: "players/kompanyuclheroes.png", rating: 88 },
        { name: "Casemiro", image: "players/casemirogold.png", rating: 88 },
        { name: "Debinha", image: "players/debinhagold.png", rating: 87 },
        { name: "Katoto", image: "players/katotogold.png", rating: 87 },
        { name: "Alexandra Popp", image: "players/poppgold.png", rating: 87 },
        { name: "Guro Reiten", image: "players/reitengold.png", rating: 87 },
        { name: "Bixente Lizarazu", image: "players/lizarazuutheroes.png", rating: 87 },
        { name: "Nadine Kessler", image: "players/kesslerutheroes.png", rating: 87 },
        { name: "Paulo Futre", image: "players/futreutheroes.png", rating: 87 },
        { name: "Jari Litmanen", image: "players/litmanenutheroes.png", rating: 87 },
        { name: "Ederson", image: "players/edersongold.png", rating: 87 },
        { name: "Bruno Fernandes", image: "players/brunofernandesgold.png", rating: 87 },
        { name: "Bernardo Silva", image: "players/bernardosilvagold.png", rating: 87 },
        { name: "Patri Guijarro", image: "players/guijarrogold.png", rating: 87 },
        { name: "Irene Paredes", image: "players/ireneparedesgold.png", rating: 87 },
        { name: "Antoine Griezmann", image: "players/griezmanngold.png", rating: 87 },
        { name: "Jan Oblak", image: "players/oblakgold.png", rating: 87 },
        { name: "Federico Valverde", image: "players/valverdegold.png", rating: 87 },
        { name: "Joshua Kimmich", image: "players/kimmichgold.png", rating: 87 },
        { name: "Sophia Smith", image: "players/smithgold.png", rating: 87 },
        { name: "Wendie Renard", image: "players/renardgold.png", rating: 87 },
        { name: "Christiane Endler", image: "players/endlergold.png", rating: 87 },
        { name: "Victor Osimhen", image: "players/osimhengold.png", rating: 87 },
        { name: "Franck Ribéry", image: "players/ribéryicon.png", rating: 87 },
    ];

    const selectedPlayers = getRandomUniquePlayers(packContents, 6);

    const packContentsDiv = document.getElementById("goldPackContents");
    const openPackImage = document.getElementById("openGoldPackImage");

    // Function to clear existing player cards
    function clearPlayerCards() {
        while (packContentsDiv.firstChild) {
            packContentsDiv.removeChild(packContentsDiv.firstChild);
        }
    }

    // Disable the "Open Pack" button to prevent multiple clicks
    openPackImage.disabled = true;

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
                // Adjust the probabilities based on player ratings (customize as needed)
                const probability = Math.random(); // Random number between 0 and 1

                if (player.rating <= 80) {
                    // 80 and lower have a 100% chance
                    uniquePlayers.push(player);
                } else if (player.rating <= 85) {
                    // 81 to 85 have a 50% chance
                    if (probability < 0.5) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 89) {
                    // 86 to 89 have a 30% chance
                    if (probability < 0.3) {
                        uniquePlayers.push(player);
                    }
                } else if (player.rating <= 93) {
                    // 90 to 93 have a 20% chance
                    if (probability < 0.2) {
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
                if (index === 5) { // Only enable after the last card for a maximum of 6 cards
                    openPackImage.disabled = false;
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
    // Refresh all card images (replace with your logic)
    const images = document.querySelectorAll(".player-card img");
    images.forEach(image => {
        const src = image.src;
        image.src = "";
        image.src = src;
    });
});
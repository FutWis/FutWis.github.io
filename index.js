document.getElementById("openPackButton").addEventListener("click", function () {
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
		{ name: "Mo Alkassar", image: "players/alkassaricon.png", rating: 92 },
		{ name: "Khalil Almasri", image: "players/almasrigold.png", rating: 92 },
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
		{ name: "Keano van Eck", image: "players/vanecktotw.png", rating: 91 },
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
		{ name: "Damian Borgt", image: "players/borgtnike.png", rating: 90 },
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
		{ name: "Wesley Roodhuizen", image: "players/roodhuizennike.png", rating: 89 },
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
		{ name: "Paul Scholes", image: "players/scholesicon.png", rating: 88 },
		{ name: "David Beckham", image: "players/beckhamicon.png", rating: 88 },
		{ name: "Marcel Desailly", image: "players/desaillyicon.png", rating: 88 },
		{ name: "Michael Owen", image: "players/owenicon.png", rating: 88 },
		{ name: "Pavel Nedvěd", image: "players/nedvědicon.png", rating: 88 },
		{ name: "Rio Ferdinand", image: "players/ferdinandicon.png", rating: 88 },
		{ name: "Andriy Shevchenko", image: "players/shevchenkoícon.png", rating: 88 },
		{ name: "Steven Gerrard", image: "players/gerrardicon.png", rating: 88 },
		{ name: "Juan Román Riquelme", image: "players/riquelmeicon.png", rating: 88 },
		{ name: "Petr Čech", image: "players/cechicon.png", rating: 88 },
		{ name: "Edwin van der Sar", image: "players/vandersaricon.png", rating: 88 },
		{ name: "Wayne Rooney", image: "players/rooneyicon.png", rating: 88 },
		{ name: "Bastian Schweinsteiger", image: "players/schweinsteigericon.png", rating: 88 },
		{ name: "Fernando Hierro", image: "players/fernandohierroicon.png", rating: 88 },
		{ name: "Gheorghe Hagi", image: "players/hagiicon.png", rating: 88 },
		{ name: "Ronald Koeman", image: "players/koemanicon.png", rating: 88 },
		{ name: "Michael Laudrup", image: "players/laudrupicon.png", rating: 88 },
		{ name: "Patrick Vieira", image: "players/vieiraicon.png", rating: 88 },
		{ name: "Laurent Blanc", image: "players/blancicon.png", rating: 88 },
		{ name: "Miroslav Klose", image: "players/kloseicon.png", rating: 88 },
		{ name: "Vincent Kompany", image: "players/kompanyutheroes.png", rating: 88 }, 
		{ name: "Robin van Persie", image: "players/vanpersieicon.png", rating: 88 }, 
		{ name: "Jay-Jay Okocha", image: "players/okochautheroes.png", rating: 88 },
		{ name: "Antonio Di Natale", image: "players/dinataleutheroes.png", rating: 88 },
		{ name: "Javier Mascherano", image: "players/mascheranoutheroes.png", rating: 88 },
		{ name: "Wesley Sneijder", image: "players/sneijderutheroes.png", rating: 88 },
		{ name: "Diego Forlán", image: "players/forlánutheroes.png", rating: 88 },
		{ name: "Diego Milito", image: "players/militoutheroes.png", rating: 88 },
		{ name: "Rafael Márquez", image: "players/márquezutheroes.png", rating: 88 },
		{ name: "Mario Gomez", image: "players/gomezutheroes.png", rating: 88 },
		{ name: "Ricardo Carvalho", image: "players/carvalhoutheroes.png", rating: 88 },
		{ name: "Carlos Tévez", image: "players/tévezutheroes.png", rating: 88 },
		{ name: "Heung Min Son", image: "players/sontotw.png", rating: 88 },
		{ name: "Leonardo Bonucci", image: "players/bonucciuclrttk.png", rating: 88 },
		{ name: "Edin Džeko", image: "players/džekoueclrttk.png", rating: 88 },
		{ name: "Martin Ødegaard", image: "players/ødegaardtotw.png", rating: 88 },
		{ name: "Lautaro Martínez", image: "players/martíneztotw.png", rating: 88 },
		{ name: "Ángel Di María", image: "players/maríauclrttk.png", rating: 88 },
		{ name: "Marcos Acuña", image: "players/acuñauclrttk.png", rating: 88 },
		{ name: "Gianfranco Zola", image: "players/zolaicon.png", rating: 87 },
		{ name: "Clarence Seedorf", image: "players/seedorficon.png", rating: 87 },
		{ name: "Robert Pirès", image: "players/pirèsicon.png", rating: 87 },
		{ name: "Emmanuel Petit", image: "players/petiticon.png", rating: 87 },
		{ name: "Claude Makélélé", image: "players/makéléléicon.png", rating: 87 },
		{ name: "Michael Ballack", image: "players/ballackicon.png", rating: 87 },
		{ name: "Frank Lampard", image: "players/lampardicon.png", rating: 87 },
		{ name: "David Trezeguet", image: "players/trezegueticon.png", rating: 87 },
		{ name: "Xabi Alonso", image: "players/alonsoicon.png", rating: 87 },
		{ name: "Fernando Torres", image: "players/torresicon.png", rating: 87 },
		{ name: "Nemanja Vidić", image: "players/vidićicon.png", rating: 87 },
		{ name: "Frank Rijkaard", image: "players/rijkaardicon.png", rating: 87 },
		{ name: "Davor Šuker", image: "players/šukericon.png", rating: 87 },
		{ name: "Patrick Kluivert", image: "players/kluiverticon.png", rating: 87 },
		{ name: "Joris van Puijvelde", image: "players/vanpuijveldefbsbc.png", rating: 85 },
		{ name: "Gabriel Nolet", image: "players/noletfbsbc.png", rating: 85 },
		{ name: "Ad van Bever", image: "players/vanbevertotw.png", rating: 80 },
		{ name: "Leon Vissers", image: "players/visserstotw.png", rating: 80 },
		{ name: "Steef de Gruijter", image: "players/degruitertotw.png", rating: 80 },
		{ name: "Wegihu Tekle", image: "players/deklebronze.png", rating: 68 },
		{ name: "Stephanie Roodhuizen", image: "players/roodhuizensbronze.png", rating: 64 },
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

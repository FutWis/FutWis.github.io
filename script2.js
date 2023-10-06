const players = [
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
	{ name: "Borgt", image: "players/borgtnike.png", rating: 90 },
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
	{ name: "Mapi León", image: "players/mapileóngold.png", rating: 89 },
	{ name: "Morgan", image: "players/morgangold.png", rating: 89 },	
	{ name: "Rúben Dias", image: "players/rúbendiasgold.png", rating: 89 },
	{ name: "Rodri", image: "players/rodrigold.png", rating: 89 },
	{ name: "ter Stegen", image: "players/terstegengold.png", rating: 89 },
	{ name: "Alisson", image: "players/alissongold.png", rating: 89 },
	{ name: "Vialli", image: "players/vialliutheroes.png", rating: 89 },
	{ name: "Kompany", image: "players/kompanyuclheroes.png", rating: 89 },
	{ name: "Casemiro", image: "players/casemirogold.png", rating: 89 },
	{ name: "Debinha", image: "players/debinhagold.png", rating: 88 },
	{ name: "Katoto", image: "players/katotogold.png", rating: 88 },
	{ name: "Popp", image: "players/poppgold.png", rating: 88 },
	{ name: "Reiten", image: "players/reitengold.png", rating: 88 },
	{ name: "Lizarazu", image: "players/lizarazuutheroes.png", rating: 88 },
	{ name: "Kessler", image: "players/kesslerutheroes.png", rating: 88 },
	{ name: "Futre", image: "players/futreutheroes.png", rating: 88 },
	{ name: "Litmanen", image: "players/litmanenutheroes.png", rating: 88 },
	{ name: "Ederson", image: "players/edersongold.png", rating: 88 },
	{ name: "Bruno Fernandes", image: "players/brunofernandesgold.png", rating: 88 },
	{ name: "Bernardo Silva", image: "players/bernardosilvagold.png", rating: 88 },
	{ name: "Irene Paredes", image: "players/ireneparedesgold.png", rating: 88 },
	{ name: "Griezmann", image: "players/griezmanngold.png", rating: 88 },
	{ name: "Oblak", image: "players/oblakgold.png", rating: 88 },
	{ name: "Valverde", image: "players/valverdegold.png", rating: 88 },
	{ name: "Kimmich", image: "players/kimmichgold.png", rating: 88 },
	{ name: "Smith", image: "players/smithgold.png", rating: 88 },
	{ name: "Renard", image: "players/renardgold.png", rating: 88 },
	{ name: "Endler", image: "players/endlergold.png", rating: 88 },
	{ name: "Osimhen", image: "players/osimhengold.png", rating: 88 },
	{ name: "Ribéry", image: "players/ribéryicon.png", rating: 88 },
	{ name: "Scholes", image: "players/scholesicon.png", rating: 88 },
	{ name: "Beckham", image: "players/beckhamicon.png", rating: 88 },
	{ name: "Desailly", image: "players/desaillyicon.png", rating: 88 },
	{ name: "Owen", image: "players/owenicon.png", rating: 88 },
	{ name: "Nedvěd", image: "players/nedvědicon.png", rating: 88 },
	{ name: "Ferdinand", image: "players/ferdinandicon.png", rating: 88 },
	{ name: "Shevchenko", image: "players/shevchenkoícon.png", rating: 88 },
	{ name: "Gerrard", image: "players/gerrardicon.png", rating: 88 },
	{ name: "Riquelme", image: "players/riquelmeicon.png", rating: 88 },
	{ name: "Cech", image: "players/cechicon.png", rating: 88 },
	{ name: "van der Sar", image: "players/vandersaricon.png", rating: 88 },
	{ name: "Rooney", image: "players/rooneyicon.png", rating: 88 },
	{ name: "Schweinsteiger", image: "players/schweinsteigericon.png", rating: 88 },
	{ name: "Fernando Hierro", image: "players/fernandohierroicon.png", rating: 88 },
	{ name: "Hagi", image: "players/hagiicon.png", rating: 88 },
	{ name: "Koeman", image: "players/koemanicon.png", rating: 88 },
];

// Define a function to handle the player search
function searchPlayer() {
    // Get the player name input element
    const playerNameInput = document.getElementById('playerName');

    // Get the player info container elements
    const playerImage = document.getElementById('playerImage');
    const playerRating = document.getElementById('playerRating');

    // Get the player name from the input field
    const playerName = playerNameInput.value.trim();

    // Check if the player name is empty
    if (!playerName) {
        alert('Please enter a player name.');
        return;
    }

    // Find the player object with the matching name
    const player = players.find(p => p.name.toLowerCase() === playerName.toLowerCase());

    // Check if the player was found
    if (player) {
        // Display player info
        playerImage.innerHTML = `<img src="${player.image}" alt="${player.name}">`;
        playerRating.textContent = `Rating: ${player.rating}`;
        // Add a pack indicator next to the player's image
        playerImage.innerHTML += '<div class="pack-indicator">Pack</div>';
    } else {
        alert('Player not found.');
    }
}

// Add a click event listener to the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchPlayer);

// Handle the Enter key press in the player name input field
const playerNameInput = document.getElementById('playerName');
playerNameInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchPlayer();
    }
});

// Define a function to refresh the page
function refreshPage() {
    location.reload();
}

// Add a click event listener to the "Refresh Page" button
const refreshPageButton = document.getElementById('refreshPage2Button');
refreshPageButton.addEventListener('click', refreshPage);


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
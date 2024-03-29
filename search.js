
const packContents = [
	{ name: "Kylian Mbappé", image: "players/mbappetoty.png", rating: 97 },
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
		{ name: "John Barnes", image: "players/barnesicon.png", rating: 87 },
		{ name: "Ian Wright", image: "players/wrighticon.png", rating: 87 },
		{ name: "Ian Rush", image: "players/rushicon.png", rating: 87 },
		{ name: "Kouadio Manu Koné", image: "players/konéstoryline.png", rating: 87 },
		{ name: "Harry Kewell", image: "players/kewellutheroes.png", rating: 87 },
		{ name: "Claudio Marchisio", image: "players/marchisioutheroes.png", rating: 87 },
		{ name: "Sakina Karchaoui", image: "players/karchaouitotw.png", rating: 87 },
		{ name: "Paulo Dybala", image: "players/dybalatotw.png", rating: 87 },
		{ name: "Hidetoshi Nakata", image: "players/nakatautheroes.png", rating: 87 },
		{ name: "Yaya Touré", image: "players/touréutheroes.png", rating: 87 },
		{ name: "Joe Cole", image: "players/coleutheroes.png", rating: 87 },
		{ name: "Matheus Cunha", image: "players/cunhastoryline.png", rating: 87 },
		{ name: "Jorge Campos", image: "players/camposutheroes.png", rating: 87 },
		{ name: "Tomas Brolin", image: "players/brolinutheroes.png", rating: 87 },
		{ name: "Iván Córdoba", image: "players/córdobautheroes.png", rating: 87 },
		{ name: "Kevin De Bruyne", image: "players/debruynefbplayer.png", rating: 87 },
		{ name: "João Cancelo", image: "players/cancelototw.png", rating: 87 },
		{ name: "N'Golo Kanté", image: "players/kantétotw.png", rating: 87 },
		{ name: "Dries Mertens", image: "players/mertensuclrttk.png", rating: 87 },
		{ name: "Svenja Huth", image: "players/huthspecialitem.png", rating: 87 },
		{ name: "Luis Díaz", image: "players/díazuelrttk.png", rating: 87 },
		{ name: "Jude Bellingham", image: "players/bellinghamtotw.png", rating: 87 },
		{ name: "Khvicha Kvaratskhelia", image: "players/kvaratskheliatotw.png", rating: 87 },
		{ name: "Heung Min Son", image: "players/songold.png", rating: 87 },
		{ name: "Steve McManaman", image: "players/mcmanamanutheroes.png", rating: 87 },
		{ name: "Rui Costa", image: "players/costautheroes.png", rating: 87 },
		{ name: "Dimitar Berbatov", image: "players/berbatovutheroes.png", rating: 87 },
		{ name: "Martin Ødegaard", image: "players/ødegaardgold.png", rating: 87 },
		{ name: "Beth Mead", image: "players/meadgold.png", rating: 87 },
		{ name: "Lucy Bronze", image: "players/bronzegold.png", rating: 87 },
		{ name: "Sandra Paños", image: "players/pañosgold.png", rating: 87 },
		{ name: "Fridolina Rolfö", image: "players/rolfögold.png", rating: 87 },
		{ name: "Frenkie de Jong", image: "players/dejonggold.png", rating: 87 },
		{ name: "Luca Modrić", image: "players/modrićgold.png", rating: 87 },
		{ name: "Ewa Pajor", image: "players/pajorgold.png", rating: 87 },
		{ name: "Lena Oberdorf", image: "players/oberdorfgold.png", rating: 87 },
		{ name: "Lina Magull", image: "players/magullgold.png", rating: 87 },
		{ name: "Gregor Kobel", image: "players/kobelgold.png", rating: 87 },
		{ name: "Manuel Neuer", image: "players/neuergold.png", rating: 87 },
		{ name: "Rose Lavelle", image: "players/lavellegold.png", rating: 87 },
		{ name: "Marquinhos", image: "players/marquinhosgold.png", rating: 87 },
		{ name: "Gianluigi Donnarumma", image: "players/donnarummagold.png", rating: 87 },
		{ name: "Mike Maignan", image: "players/maignangold.png", rating: 87 },
		{ name: "Lautaro Martínez", image: "players/martínezgold.png", rating: 87 },
		{ name: "Jude Bellingham", image: "players/bellinghamgold.png", rating: 86 },
		{ name: "Sonia Bompastor", image: "players/bompastorutheroes.png", rating: 86 },
		{ name: "Ludovic Giuly", image: "players/giulyutheroes.png", rating: 86 },
		{ name: "Tomáš Rosický", image: "players/rosickýutheroes.png", rating: 86 },
		{ name: "Nwankwo Kanu", image: "players/kanuutheroes.png", rating: 86 },
		{ name: "Ramires", image: "players/ramiresutheroes.png", rating: 86 },
		{ name: "John Arne Riise", image: "players/riiseutheroes.png", rating: 86 },
		{ name: "Trent Alexander-Arnold", image: "players/alexanderarnoldgold.png", rating: 86 },
		{ name: "Christopher Nkunku", image: "players/nkunkugold.png", rating: 86 },
		{ name: "Andrew Robertson", image: "players/robertsongold.png", rating: 86 },
		{ name: "Bukayo Saka", image: "players/sakagold.png", rating: 86 },
		{ name: "Sandro Tonali", image: "players/tonaligold.png", rating: 86 },
		{ name: "Mary Earps", image: "players/earpsgold.png", rating: 86 },
		{ name: "Lauren Hemp", image: "players/hempgold.png", rating: 86 },
		{ name: "Ashley Lawrence", image: "players/lawrencegold.png", rating: 86 },
		{ name: "Kim Little", image: "players/littlegold.png", rating: 86 },
		{ name: "Vivianne Miedema", image: "players/miedemagold.png", rating: 86 },
		{ name: "Jill Roord", image: "players/roordgold.png", rating: 86 },
		{ name: "Ronald Araujo", image: "players/araujogold.png", rating: 86 },
		{ name: "João Cancelo", image: "players/cancelogold.png", rating: 86 },
		{ name: "Éder Militão", image: "players/militãogold.png", rating: 86 },
		{ name: "Pedri", image: "players/pedrigold.png", rating: 86 },
		{ name: "İlkay Gündoğan", image: "players/gündoğangold.png", rating: 86 },
		{ name: "Toni Kroos", image: "players/kroosgold.png", rating: 86 },
		{ name: "Cristiano Ronaldo", image: "players/ronaldogold.png", rating: 86 },
		{ name: "N'Golo Kanté", image: "players/kantégold.png", rating: 86 },
		{ name: "Riyad Mahrez", image: "players/mahrezgold.png", rating: 86 },
		{ name: "Sadio Mané", image: "players/manégold.png", rating: 86 },
		{ name: "Sergej Milinković-Savić", image: "players/milinkovićsavićgold.png", rating: 86 },
		{ name: "Lea Schüller", image: "players/schüllergold.png", rating: 86 },
		{ name: "Matthijs de Ligt", image: "players/deligtgold.png", rating: 86 },
		{ name: "Jamal Musiala", image: "players/musialagold.png", rating: 86 },
		{ name: "Mallory Swanson", image: "players/swansongold.png", rating: 86 },
		{ name: "Grace Geyoro", image: "players/geyorogold.png", rating: 86 }
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

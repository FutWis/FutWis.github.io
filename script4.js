document.addEventListener("DOMContentLoaded", function () {
    const players = [
        { name: "Pelé - YOU", rating: 95 },
        { name: "Zidane - YOU", rating: 94 },
        { name: "Roodhuizen - YOU", rating: 89 },
        { name: "Borgt - YOU", rating: 90 },
        { name: "van Eck - YOU", rating: 91 },
        { name: "Roodhuizen - YOU", rating: 88 },
        { name: "Lizarazu - YOU", rating: 88 },
        { name: "Yashin - YOU", rating: 92 },
        { name: "Alberto - YOU", rating: 91 },
        { name: "Ronaldo - YOU", rating: 94 },
        { name: "de Gruijter - YOU", rating: 80 }
    ];

    // Define an array of AI players
    const aiPlayers = [
        { name: "Haaland - AI", rating: 91 },
        { name: "Baresi - AI", rating: 91 },
        { name: "van Dijk - AI", rating: 89 },
        { name: "Popp - AI", rating: 88 },
        { name: "Roodhuizen - AI", rating: 64 },
        { name: "Ribéry - AI", rating: 88 },
        { name: "Vinícius Jr. - AI", rating: 89 },
        { name: "Vissers - AI", rating: 80 },
        { name: "Raúl - AI", rating: 90 },
        { name: "Sócrates - AI", rating: 89 },
        { name: "van Bever - AI", rating: 80 }
    ];

    const selectedPlayers = [];
    const goalList = document.getElementById("goal-list");
    const matchTimeElement = document.getElementById("match-time");
    const matchWinnerElement = document.getElementById("match-winner");
    const yellowCardList = document.getElementById("yellow-card-list");
    const freeKickList = document.getElementById("free-kick-list");
    const penaltyList = document.getElementById("penalty-list");
    const offsideList = document.getElementById("offside-list");

    let matchTime = 0;
    let matchInterval;
    let goals = [];
    let yellowCards = new Map(); // Map to track yellow cards per player

    const selectedPlayersList = document.getElementById("selected-players");
    const playerNameInput = document.getElementById("player-name");
    const addButton = document.getElementById("add-button");
    const randomButton = document.getElementById("random-button");
    const startMatchButton = document.getElementById("start-match-button");

    // Function to add a player to the selected players list
    function addPlayer(player) {
        if (selectedPlayers.length < 11) {
            selectedPlayers.push(player);
            const listItem = document.createElement("li");
            listItem.textContent = player.name;
            selectedPlayersList.appendChild(listItem);

            if (selectedPlayers.length === 11) {
                startMatchButton.disabled = false;
            }
        } else {
            alert("You can only select 11 players.");
        }
    }

    // Event listener for the "Add Player" button
    addButton.addEventListener("click", function () {
        const playerName = playerNameInput.value.trim();
        if (playerName !== "") {
            const player = players.find(p => p.name === playerName);
            if (player) {
                addPlayer(player);
                playerNameInput.value = "";
            } else {
                alert("Player not found in the list.");
            }
        } else {
            alert("Please enter a player name.");
        }
    });

    // Event listener for the "Random" button
    randomButton.addEventListener("click", function () {
        selectedPlayers.length = 0; // Clear the selected players
        while (selectedPlayers.length < 11) {
            const randomIndex = Math.floor(Math.random() * players.length);
            const randomPlayer = players[randomIndex];
            if (!selectedPlayers.includes(randomPlayer)) {
                addPlayer(randomPlayer);
            }
        }
    });

    // Event listener for the "Start Match" button
    startMatchButton.addEventListener("click", function () {
        if (selectedPlayers.length === 11) {
            startMatch();
        } else {
            alert("Please select 11 players before starting the match.");
        }
    });

    // Function to start the match simulation
    function startMatch() {
        matchInterval = setInterval(function () {
            matchTime += 5; // Simulate 5 minutes real-time

            if (matchTime >= 90) {
                clearInterval(matchInterval);
                matchWinner();
                resetMatch();
            }

            updateMatchTime(matchTime);
            simulateGoal();
        }, 5000); // 5 seconds per 5 minutes (adjust for real-time simulation)

        startMatchButton.disabled = true;
    }

    // Function to update the match time
    function updateMatchTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        matchTimeElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    // Function to simulate a goal, yellow cards, free kicks, penalties, offside
    let goalsScored = 0;
    function simulateGoal() {
        if (goalsScored >= 6) {
            clearInterval(matchInterval);
            matchWinner();
            resetMatch();
            return;
        }

        // Simulate AI goals
        if (Math.random() < 0.2) { // Adjust the probability as needed
            const randomAiPlayer = aiPlayers[Math.floor(Math.random() * aiPlayers.length)];
            goals.push(randomAiPlayer);
            const goalItem = document.createElement("li");
            goalItem.textContent = `${matchTime}' - ${randomAiPlayer.name}`;
            goalList.appendChild(goalItem);
            goalsScored++;
        }

        // Simulate player goals based on rating
        selectedPlayers.forEach(player => {
            if (Math.random() < player.rating / 1000) {
                goals.push(player);
                const goalItem = document.createElement("li");
                goalItem.textContent = `${matchTime}' - ${player.name}`;
                goalList.appendChild(goalItem);
                goalsScored++;
            }
        });

        // Simulate yellow card
        selectedPlayers.forEach(player => {
            if (Math.random() < 0.1 && !yellowCards.has(player)) { // Adjust the probability as needed
                yellowCards.set(player, 1);
                const yellowCardItem = document.createElement("li");
                yellowCardItem.textContent = `${matchTime}' - Yellow Card: ${player.name}`;
                yellowCardList.appendChild(yellowCardItem);
            } else if (yellowCards.has(player) && yellowCards.get(player) === 1) {
                yellowCards.set(player, 2);
                const redCardItem = document.createElement("li");
                redCardItem.textContent = `${matchTime}' - Red Card: ${player.name}`;
                yellowCardList.appendChild(redCardItem);
            }
        });

        // Simulate free kicks
        selectedPlayers.forEach(player => {
            if (Math.random() < 0.05) { // Adjust the probability as needed
                const freeKickItem = document.createElement("li");
                freeKickItem.textContent = `${matchTime}' - Free Kick: ${player.name}`;
                freeKickList.appendChild(freeKickItem);
            }
        });

        // Simulate penalties
        if (Math.random() < 0.02) { // Adjust the probability as needed
            const penaltyPlayer = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];
            const penaltyItem = document.createElement("li");
            penaltyItem.textContent = `${matchTime}' - Penalty: ${penaltyPlayer.name}`;
            penaltyList.appendChild(penaltyItem);
        }

        // Simulate offside
        if (Math.random() < 0.05) { // Adjust the probability as needed
            const offsidePlayer = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];
            const offsideItem = document.createElement("li");
            offsideItem.textContent = `${matchTime}' - Offside: ${offsidePlayer.name}`;
            offsideList.appendChild(offsideItem);
        }
    }

    // Function to determine the match winner
    function matchWinner() {
        clearInterval(matchInterval);
        const homeGoals = goals.filter(player => players.includes(player)).length;
        const awayGoals = goals.length - homeGoals;

        if (homeGoals > awayGoals) {
            matchWinnerElement.textContent = "Home Team";
        } else if (homeGoals < awayGoals) {
            matchWinnerElement.textContent = "Away Team";
        } else {
            matchWinnerElement.textContent = "Draw";
        }
    }

    // Function to reset the match
    function resetMatch() {
        selectedPlayers.length = 0;
        goals = [];
        yellowCards.clear();
        goalsScored = 0;
        matchTime = 0;
        updateMatchTime(matchTime);
        startMatchButton.disabled = false;
        clearLists();
    }

    // Function to clear the lists of events
    function clearLists() {
        const lists = [
            goalList, yellowCardList, freeKickList, penaltyList, offsideList
        ];

        lists.forEach(list => {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        });
    }
});
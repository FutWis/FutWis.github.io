document.addEventListener("DOMContentLoaded", function () {
    const players = [
        { name: "Pelé", rating: 95 },
        { name: "Zinedine Zidane", rating: 94 },
        { name: "Wesley Roodhuizen", rating: 89 },
        { name: "Damian Borgt", rating: 90 },
        { name: "Keano van Eck", rating: 91 },
        { name: "Davy Roodhuizen", rating: 88 },
        { name: "Bixente Lizarazu", rating: 88 },
        { name: "Lev Yashin", rating: 92 },
        { name: "Carlos Alberto ", rating: 91 },
        { name: "Ronaldo", rating: 94 },
        { name: "Steef de Gruijter", rating: 80 },
	{ name: "Mo Alkassar", rating: 92 }
    ];

    const aiPlayers = [
        { name: "Erling Haaland", rating: 91 },
        { name: "Franco Baresi", rating: 91 },
        { name: "Virgil van Dijk", rating: 89 },
        { name: "Alexandra Popp", rating: 88 },
        { name: "Stephanie Roodhuizen", rating: 64 },
        { name: "Franck Ribéry", rating: 88 },
        { name: "Vinícius Jr.", rating: 89 },
        { name: "Leon Vissers", rating: 80 },
        { name: "Raúl", rating: 90 },
        { name: "Sócrates", rating: 89 },
        { name: "Ad van Bever", rating: 80 }
    ];

    const matchDuration = 90; // Duration in in-game minutes
    const realisticTimeMinutes = 5; // Realistic time in minutes
    const goalScoringProbability = 0.05; // Probability of scoring a goal in a minute
    const freeKickProbability = 0.02; // Probability of a free kick in a minute
    const penaltyProbability = 0.01; // Probability of a penalty in a minute

    const selectedPlayers = [];
    const events = [];
    const goalList = document.getElementById("goal-list");
    const matchTimeElement = document.getElementById("match-time");
    const matchWinnerElement = document.getElementById("match-winner");
    const startMatchButton = document.getElementById("start-match-button");
    const messageElement = document.getElementById("message");
    const countdownElement = document.getElementById("countdown");

    let matchTime = 0;
    let matchInterval;
    let goals = [];
    let countdownInterval;

    const selectedPlayersList = document.getElementById("selected-players");
    const playerNameInput = document.getElementById("player-name");
    const addButton = document.getElementById("add-button");
    const randomButton = document.getElementById("random-button");

    // Function to add a player to the selected players list
    function addPlayer(player) {
        if (selectedPlayers.length < 11) {
            selectedPlayers.push(player);
            const listItem = document.createElement("li");
            listItem.textContent = player.name;
            selectedPlayersList.appendChild(listItem);

            if (selectedPlayers.length === 11) {
                startMatchButton.disabled = false;
                addButton.disabled = true; // Disable the "Add Player" button
                randomButton.disabled = true; // Disable the "Random" button
            }
        } else {
            alert("You can only select 11 players.");
        }
    }

    // Event listener for the "Add Player" button
    addButton.addEventListener("click", function () {
        if (matchInterval) {
            messageElement.textContent = "You can't add players while the match is in progress.";
            return;
        }

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
        if (matchInterval) {
            messageElement.textContent = "You can't randomize players while the match is in progress.";
            return;
        }

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
        if (matchInterval) {
            messageElement.textContent = "You can't start the match while it's already in progress.";
            return;
        }

        messageElement.textContent = "";
        matchInterval = setInterval(function () {
            if (matchTime >= matchDuration) {
                clearInterval(matchInterval);
                matchWinner();
                startRestartCountdown();
            } else {
                matchTime += 1; // Increment match time by 1 in-game minute
                updateMatchTime(matchTime);
                simulateEvent();
            }
        }, (realisticTimeMinutes * 60 * 1000) / matchDuration); // Adjusted interval to match realistic time

        startMatchButton.disabled = true;
    }

    // Function to start the match restart countdown
    function startRestartCountdown() {
        let countdownTime = 30; // 30 seconds countdown

        countdownInterval = setInterval(function () {
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                restartMatch();
            } else {
                countdownElement.textContent = `${countdownTime} seconds until restart`;
                countdownTime -= 1;
            }
        }, 1000); // 1-second interval
    }

    // Function to update the match time with only minutes
    function updateMatchTime(time) {
        const minutes = Math.floor(time);
        matchTimeElement.textContent = `${minutes}`;
    }

    // Function to simulate events (goals, free kicks, penalties)
    function simulateEvent() {
        // Simulate goal
        if (Math.random() < goalScoringProbability) {
            const scoringTeam = Math.random() < 0.5 ? selectedPlayers : aiPlayers;
            const scorer = scoringTeam[Math.floor(Math.random() * scoringTeam.length)];
            goals.push(scorer);
            const goalItem = document.createElement("li");
            goalItem.textContent = `${formatTime(matchTime)} - GOAL! ${scorer.name}`;
            events.push(goalItem);
            updateEventList();
        }

        // Simulate free kick
        if (Math.random() < freeKickProbability) {
            const freeKickPlayer = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];
            const scored = Math.random() < 0.5;
            const freeKickItem = document.createElement("li");
            freeKickItem.textContent = `${formatTime(matchTime)} - Free Kick: ${freeKickPlayer.name} ${scored ? "- GOAL!" : "- Missed"}`;
            events.push(freeKickItem);
            if (scored) {
                const scorer = freeKickPlayer;
                goals.push(scorer);
            }
            updateEventList();
        }

        // Simulate penalty
        if (Math.random() < penaltyProbability) {
            const penaltyPlayer = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];
            const scored = Math.random() < 0.5;
            const penaltyItem = document.createElement("li");
            penaltyItem.textContent = `${formatTime(matchTime)} - Penalty: ${penaltyPlayer.name} ${scored ? "- GOAL!" : "- Missed"}`;
            events.push(penaltyItem);
            if (scored) {
                const scorer = penaltyPlayer;
                goals.push(scorer);
            }
            updateEventList();
        }
    }

    // Function to format time as mm:ss
    function formatTime(time) {
        const minutes = Math.floor(time);
        return `${minutes}`;
    }

    // Function to update the event list
    function updateEventList() {
        events.forEach(event => {
            goalList.appendChild(event);
        });
    }

    // Function to determine the match winner
    function matchWinner() {
        clearInterval(matchInterval);
        const homeGoals = goals.filter(player => selectedPlayers.includes(player)).length;
        const awayGoals = goals.length - homeGoals;
        if (homeGoals > awayGoals) {
            matchWinnerElement.textContent = `Home Team Wins ${homeGoals}-${awayGoals}`;
        } else if (homeGoals < awayGoals) {
            matchWinnerElement.textContent = `Away Team Wins ${awayGoals}-${homeGoals}`;
        } else {
            matchWinnerElement.textContent = `Draw ${homeGoals}-${awayGoals}`;
        }
    }

    // Function to restart the match
    function restartMatch() {
        clearInterval(countdownInterval);
        selectedPlayers.length = 0;
        goals = [];
        matchTime = 0;
        updateMatchTime(matchTime);
        startMatchButton.disabled = false;
        addButton.disabled = false; // Enable the "Add Player" button
        randomButton.disabled = false; // Enable the "Random" button
        countdownElement.textContent = ""; // Clear the countdown text

        // Clear event list
        clearEventList();

        // Clear match winner
        matchWinnerElement.textContent = "";

        // Clear message
        messageElement.textContent = "";

        // Reload the page to start a new match
        location.reload();
    }

    // Function to clear the event list
    function clearEventList() {
        events.length = 0;
        while (goalList.firstChild) {
            goalList.removeChild(goalList.firstChild);
        }
    }
});

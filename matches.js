document.addEventListener("DOMContentLoaded", function () {
    const players = [
        { name: "Levi Van den Bussche", rating: 94, position: "CAM" },
		{ name: "Mo Alkassar", rating: 92, position: "CV" },
		{ name: "Khalil Almasri", rating: 92, position: "CAM" },		
		{ name: "Keano van Eck", rating: 91, position: "GK" },		
		{ name: "Damian Borgt", rating: 90, position: "ST" },	
		{ name: "Wesley Roodhuizen", rating: 99, position: "RW" },		
		{ name: "Davy Roodhuizen", rating: 87, position: "CB" },
		{ name: "Rob Goedegebure", rating: 86, position: "ST" },
		{ name: "Joris van Puijvelde", rating: 85, position: "CDM" },
		{ name: "Gabriel Nolet", rating: 85, position: "CDM" },
		{ name: "Heinrich Bierman", rating: 84, position: "CM" },
		{ name: "Ad van Bever", rating: 80, position: "CM" },
		{ name: "Leon Vissers", rating: 80, position: "CM" },
		{ name: "Steef Van de Gruijter", rating: 80, position: "CM" },
		{ name: "Kyra Mariman", rating: 74, position: "CB" },
		{ name: "Mick Bogaert", rating: 74, position: "CB" },
		{ name: "Wegihu Tekle", rating: 68, position: "CM" },
		{ name: "Stephanie Roodhuizen", rating: 64, position: "SP" },
		{ name: "Naatje", rating: 47, position: "CB" }
    ];

    const aiPlayers = [
        { name: "AI PLAYER 1", rating: 91 },
        { name: "AI PLAYER 2", rating: 91},
        { name: "AI PLAYER 3", rating: 89 },
        { name: "AI PLAYER 4", rating: 88 },
        { name: "AI PLAYER 5", rating: 84 },
        { name: "AI PLAYER 6", rating: 88 },
        { name: "AI PLAYER 7", rating: 89 },
        { name: "AI PLAYER 8", rating: 83 },
        { name: "AI PLAYER 9", rating: 90 },
        { name: "AI PLAYER 10", rating: 89 },
        { name: "AI PLAYER 11", rating: 85 },
        { name: "AI PLAYER 12", rating: 86 },
        { name: "AI PLAYER 13", rating: 82 },
        { name: "AI PLAYER 14", rating: 89 },
        { name: "AI PLAYER 15", rating: 88 },
        { name: "AI PLAYER 16", rating: 95 },
        { name: "AI PLAYER 17", rating: 88 },
        { name: "AI PLAYER 18", rating: 89 },
        { name: "AI PLAYER 19", rating: 88 },
        { name: "AI PLAYER 20", rating: 93 },
        { name: "AI PLAYER 21", rating: 89 },
        { name: "AI PLAYER 22", rating: 83 },
        { name: "AI PLAYER 23", rating: 92 },
        { name: "AI PLAYER 24", rating: 89 },
        { name: "AI PLAYER 25", rating: 81 },
        { name: "AI PLAYER 26", rating: 88 },
        { name: "AI PLAYER 27", rating: 80 },
        { name: "AI PLAYER 28", rating: 88 },
        { name: "AI PLAYER 29", rating: 85 },
        { name: "AI PLAYER 30", rating: 83 },
        { name: "AI PLAYER 31", rating: 84 },
        { name: "AI PLAYER 32", rating: 89 },
        { name: "AI PLAYER 33", rating: 83 },
        { name: "AI PLAYER 34", rating: 81 },
        { name: "AI PLAYER 35", rating: 82 },
        { name: "AI PLAYER 36", rating: 89 },
        { name: "AI PLAYER 37", rating: 88 },
        { name: "AI PLAYER 38", rating: 79 },
        { name: "AI PLAYER 39", rating: 88 },
        { name: "AI PLAYER 40", rating: 89 },
        { name: "AI PLAYER 41", rating: 82 },
        { name: "AI PLAYER 42", rating: 79 },
        { name: "AI PLAYER 43", rating: 89 },
        { name: "AI PLAYER 44", rating: 79 },
        { name: "AI PLAYER 45", rating: 81 },
        { name: "AI PLAYER 46", rating: 83 },
        { name: "AI PLAYER 47", rating: 89 },
        { name: "AI PLAYER 48", rating: 88 },
        { name: "AI PLAYER 49", rating: 79 },
        { name: "AI PLAYER 50", rating: 88 }

    ];

    const matchDuration = 90;
    const realisticTimeMinutes = 5;
    const goalScoringProbability = 0.05;
    const freeKickProbability = 0.02;
    const penaltyProbability = 0.01;

    const cornerKickProbability = 0.02;
    const cornerKickGoalProbability = 0.2;

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
    let homeGoals = 0;
    let awayGoals = 0;
    const homeTeamName = "Home Team";
    const awayTeamName = "Away Team";
    const goalCounterElement = document.getElementById("goal-counter");

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

    randomButton.addEventListener("click", function () {
    if (matchInterval) {
        messageElement.textContent = "You can't randomize players while the match is in progress.";
        return;
    }

    if (selectedPlayers.length === 11) {
        alert("You already have 11 players selected.");
        return;
    }

    while (selectedPlayers.length < 11) {
        const randomIndex = Math.floor(Math.random() * players.length);
        const randomPlayer = players[randomIndex];

        // Check if the random player is not already in the selectedPlayers array
        if (!selectedPlayers.some(player => player.name === randomPlayer.name)) {
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

    function updateMatchTime(time) {
        const minutes = Math.floor(time);
        matchTimeElement.textContent = `${minutes}`;

        if (minutes === 44) {
            matchTimeElement.textContent = `${minutes}`;
        }

        if (minutes === 45) {
            matchTimeElement.textContent = `${minutes} Half Time!`;
        }

        if (minutes === 46) {
            matchTimeElement.textContent = `${minutes}`;
        }

        if (minutes === 90) {
            matchTimeElement.textContent = `${minutes} Full Time!`;
        }
    }

    // Function to simulate events (goals, free kicks, penalties, corner kicks)
    function simulateEvent() {
        // Simulate goal
        if (Math.random() < goalScoringProbability) {
            const scoringTeam = Math.random() < 0.5 ? selectedPlayers : aiPlayers;
            const scorer = selectScorer(scoringTeam);
            goals.push(scorer);
            const goalItem = document.createElement("li");
            goalItem.textContent = `${formatTime(matchTime)} - GOAL! ${scorer.name}`;
            events.push(goalItem);
            updateEventList();
        }

        // Simulate free kick
        if (Math.random() < freeKickProbability) {
            const freeKickPlayer = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];
            const scored = Math.random() < calculateScoringProbability(freeKickPlayer);
            const freeKickItem = document.createElement("li");
            freeKickItem.textContent = `${formatTime(matchTime)} - Free Kick: ${freeKickPlayer.name} ${scored ? "- GOAL!" : "- Missed!"}`;
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
            const scored = Math.random() < calculatePenaltyScoringProbability(penaltyPlayer);
            const penaltyItem = document.createElement("li");
            penaltyItem.textContent = `${formatTime(matchTime)} - Penalty: ${penaltyPlayer.name} ${scored ? "- GOAL!" : "- Missed!"}`;
            events.push(penaltyItem);
            if (scored) {
                const scorer = penaltyPlayer;
                goals.push(scorer);
            }
            updateEventList();
        }

        // Simulate corner kick with a low chance
        if (Math.random() < cornerKickProbability) {
            const kickingTeam = Math.random() < 0.5 ? selectedPlayers : aiPlayers;
            const scorer = kickingTeam[Math.floor(Math.random() * kickingTeam.length)];

            // Determine if the corner kick results in a goal
            const cornerKickGoal = Math.random() < cornerKickGoalProbability;

            if (cornerKickGoal) {
                goals.push(scorer);
                const cornerKickGoalItem = document.createElement("li");
                cornerKickGoalItem.textContent = `${formatTime(matchTime)} - Corner Kick: ${scorer.name} GOAL!`;
                events.push(cornerKickGoalItem);
                updateEventList();
            } else {
                const cornerKickMissItem = document.createElement("li");
                cornerKickMissItem.textContent = `${formatTime(matchTime)} - Corner Kick: ${scorer.name} Missed!`;
                events.push(cornerKickMissItem);
                updateEventList();
            }
        }
    }

    // Function to select a scorer based on player ratings
    function selectScorer(team) {
        // Sort the team by rating in descending order
        team.sort((a, b) => b.rating - a.rating);

        // Calculate the total rating of the team
        const totalRating = team.reduce((total, player) => total + player.rating, 0);

        // Calculate a random threshold based on the total rating
        const threshold = Math.random() * totalRating;

        // Find the player whose cumulative rating exceeds the threshold
        let cumulativeRating = 0;
        for (const player of team) {
            cumulativeRating += player.rating;
            if (cumulativeRating >= threshold) {
                return player;
            }
        }

        // Return the last player as a fallback (shouldn't reach here)
        return team[team.length - 1];
    }

    // Function to calculate the scoring probability for free kicks based on player rating
    function calculateScoringProbability(player) {
        // Adjust this formula as needed to make higher-rated players perform better
        return player.rating / 99;
    }

    // Function to calculate the scoring probability for penalties based on player rating
    function calculatePenaltyScoringProbability(player) {
        // Adjust this formula as needed to make higher-rated players perform better
        return player.rating / 86;
    }

    function formatTime(time) {
        const minutes = Math.floor(time);
        return `${minutes}`;
    }

    function updateEventList() {
        events.forEach(event => {
            goalList.appendChild(event);
        });
    }

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

    function restartMatch() {
        clearInterval(countdownInterval);
        selectedPlayers.length = 0;
        goals = [];
        matchTime = 0;
        updateMatchTime(matchTime);
        startMatchButton.disabled = false;
        addButton.disabled = false;
        randomButton.disabled = false;
        countdownElement.textContent = "";

        clearEventList();

        matchWinnerElement.textContent = "";

        messageElement.textContent = "";

        location.reload();
    }

    function clearEventList() {
        events.length = 0;
        while (goalList.firstChild) {
            goalList.removeChild(goalList.firstChild);
        }
    }

    function simulateEvent() {
        if (Math.random() < goalScoringProbability) {
            const scoringTeam = Math.random() < 1.0 ? selectedPlayers : aiPlayers;
            const scorer = selectScorer(scoringTeam);
            goals.push(scorer);
            const goalItem = document.createElement("li");
            goalItem.textContent = `${formatTime(matchTime)} - GOAL! ${scorer.name}`;
            events.push(goalItem);
            updateEventList();

            if (scoringTeam === selectedPlayers) {
                homeGoals++;
            } else {
                awayGoals++;
            }
            updateGoalCounter();
        }
        function updateGoalCounter() {
            goalCounterElement.textContent = `${homeTeamName} ${homeGoals} - ${awayGoals} ${awayTeamName}`;
        }

        updateGoalCounter();
    }
});
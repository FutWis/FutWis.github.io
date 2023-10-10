document.addEventListener("DOMContentLoaded", function () {
    const players = [
        { name: "Pelé", rating: 95, position: "CAM" },
        { name: "Zinedine Zidane", rating: 94, position: "CAM" },
        { name: "Ronaldo", rating: 94, position: "ST" },
        { name: "Mia Hamm", rating: 9, position: "ST" },
        { name: "Ronaldinho", rating: 93, position: "LW" },
        { name: "Johan Cruyff", rating: 93, position: "CF" },
        { name: "Birgit Prinz", rating: 92, position: "ST" },
        { name: "Bobby Charlton", rating: 92, position: "CAM" },
        { name: "Gerd Müller", rating: 92, position: "ST" },
        { name: "Lev Yashin", rating: 92, position: "GK" },
        { name: "Paolo Maldini", rating: 92, position: "CB" },
        { name: "Mané Garrincha", rating: 92, position: "RW" },
        { name: "Ferenc Puskás", rating: 92, position: "CF" },
        { name: "Erling Haaland", rating: 92, position: "ST" },
        { name: "Robert Lewandowski", rating: 92, position: "ST" },
        { name: "Zico", rating: 91, position: "CAM" },
        { name: "Homare Sawa", rating: 91, position: "CM" },
        { name: "Roberto Baggio", rating: 91, position: "CAM" },
        { name: "Thierry Henry", rating: 91, position: "ST" },
        { name: "Marcos Cafu", rating: 91, position: "RWB" },
        { name: "Franco Baresi", rating: 91, position: "CB" },
        { name: "Carlos Alberto", rating: 91, position: "RB" },
        { name: "Marco van Basten", rating: 91, position: "ST" },
        { name: "Eusébio", rating: 91, position: "CF" },
        { name: "Alexia Putellas", rating: 91, position: "CM" },
        { name: "Kevin De Bruyne", rating: 91, position: "CM" },
        { name: "Harry Kane", rating: 91, position: "ST" },
        { name: "Luka Modric", rating: 91, position: "CM" },
        { name: "Kylian Mbappé", rating: 91, position: "ST" },
        { name: "Wesley Sneijder", rating: 91, position: "CAM" },
        { name: "Karim Benzema", rating: 90, position: "CF" },
        { name: "Thibaut Courtois", rating: 90, position: "GK" },
        { name: "Lionel Messi", rating: 90, position: "CF" },
        { name: "Aitana Bonmatí", rating: 90, position: "CM" },
        { name: "Carolina Graham Hansen", rating: 90, position: "RW" },
        { name: "Samantha May Kerr", rating: 90, position: "ST" },
        { name: "Carlos Tévez", rating: 90, position: "ST" },
        { name: "Camille Abily", rating: 90, position: "CM" },
        { name: "Rivaldo", rating: 90, position: "LW" },
        { name: "Casillas", rating: 90, position: "GK" },
        { name: "Andrea Pirlo", rating: 90, position: "CM" },
        { name: "Xavi", rating: 90, position: "CM" },
        { name: "Raúl", rating: 90, position: "CF" },
        { name: "Bobby Moore", rating: 90, position: "CB" },
        { name: "Ruud Gullit", rating: 90, position: "CF" },
        { name: "George Best", rating: 90, position: "RW" },
        { name: "Alessandro Del Piero", rating: 90, position: "CF" },
        { name: "Dennis Bergkamp", rating: 90, position: "CF" },
    ];

    const aiPlayers = [
        { name: "AI PLAYER 1 - 91", rating: 91, position: "GK" },
        { name: "AI PLAYER 2 - 91", rating: 91, position: "GK" },
        { name: "AI PLAYER 3 - 89", rating: 89, position: "GK" },
        { name: "AI PLAYER 4 - 88", rating: 88, position: "LB" },
        { name: "AI PLAYER 5 - 84", rating: 84, position: "LB" },
        { name: "AI PLAYER 6 - 88", rating: 88, position: "RB" },
        { name: "AI PLAYER 7 - 89", rating: 89, position: "RB" },
        { name: "AI PLAYER 8 - 83", rating: 83, position: "CB" },
        { name: "AI PLAYER 9 - 90", rating: 90, position: "CB" },
        { name: "AI PLAYER 10 - 89", rating: 89, position: "CB" },
        { name: "AI PLAYER 11 - 85", rating: 85, position: "CB" },
        { name: "AI PLAYER 12 - 86", rating: 86, position: "CB" },
        { name: "AI PLAYER 13 - 82", rating: 82, position: "RWB" },
        { name: "AI PLAYER 14 - 89", rating: 89, position: "RWB" },
        { name: "AI PLAYER 15 - 88", rating: 88, position: "LWB" },
        { name: "AI PLAYER 16 - 95", rating: 95, position: "LWB" },
        { name: "AI PLAYER 17 - 88", rating: 88, position: "CDM" },
        { name: "AI PLAYER 18 - 89", rating: 89, position: "CDM" },
        { name: "AI PLAYER 19 - 88", rating: 88, position: "CDM" },
        { name: "AI PLAYER 20 - 93", rating: 93, position: "CDM" },
        { name: "AI PLAYER 21 - 89", rating: 89, position: "CM" },
        { name: "AI PLAYER 22 - 83", rating: 83, position: "CM" },
        { name: "AI PLAYER 23 - 92", rating: 92, position: "CM" },
        { name: "AI PLAYER 24 - 89", rating: 89, position: "CM" },
        { name: "AI PLAYER 25 - 81", rating: 81, position: "RM" },
        { name: "AI PLAYER 26 - 88", rating: 88, position: "RM" },
        { name: "AI PLAYER 27 - 80", rating: 80, position: "LM" },
        { name: "AI PLAYER 28 - 88", rating: 88, position: "LM" },
        { name: "AI PLAYER 29 - 85", rating: 85, position: "LW" },
        { name: "AI PLAYER 30 - 83", rating: 83, position: "RW" },
        { name: "AI PLAYER 31 - 84", rating: 84, position: "LW" },
        { name: "AI PLAYER 32 - 89", rating: 89, position: "RW" },
        { name: "AI PLAYER 33 - 83", rating: 83, position: "CAM" },
        { name: "AI PLAYER 34 - 81", rating: 81, position: "CAM" },
        { name: "AI PLAYER 35 - 82", rating: 82, position: "CAM" },
        { name: "AI PLAYER 36 - 89", rating: 89, position: "CF" },
        { name: "AI PLAYER 37 - 88", rating: 88, position: "CF"},
        { name: "AI PLAYER 38 - 79", rating: 79, position: "ST" },
        { name: "AI PLAYER 39 - 88", rating: 88, position: "ST" },
        { name: "AI PLAYER 40 - 89", rating: 89, position: "ST" },
        { name: "AI PLAYER 41 - 82", rating: 82, position: "RF" },
        { name: "AI PLAYER 42 - 79", rating: 79, position: "RF" },
        { name: "AI PLAYER 43 - 89", rating: 89, position: "RF" },
        { name: "AI PLAYER 44 - 79", rating: 79, position: "LF" },
        { name: "AI PLAYER 45 - 81", rating: 81, position: "LF" },
        { name: "AI PLAYER 46 - 83", rating: 83, position: "LF" },
        { name: "AI PLAYER 47 - 89", rating: 89, position: "CB" },
        { name: "AI PLAYER 48 - 88", rating: 88, position: "GK" },
        { name: "AI PLAYER 49 - 79", rating: 79, position: "CDM" },
        { name: "AI PLAYER 50 - 88", rating: 88, position: "CF" }

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

    function addPlayer(player) {
        if (selectedPlayers.length < 11) {
            selectedPlayers.push(player);
            const listItem = document.createElement("li");
            listItem.textContent = player.name;
            selectedPlayersList.appendChild(listItem);

            if (selectedPlayers.length === 11) {
                startMatchButton.disabled = false;
                addButton.disabled = true;
                randomButton.disabled = true;
            }
        } else {
            alert("You can only select 11 players.");
        }
    }

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

            if (!selectedPlayers.some(player => player.name === randomPlayer.name)) {
                addPlayer(randomPlayer);
            }
        }
    });

    startMatchButton.addEventListener("click", function () {
        if (selectedPlayers.length === 11) {
            startMatch();
        } else {
            alert("Please select 11 players before starting the match.");
        }
    });

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
                matchTime += 1;
                updateMatchTime(matchTime);
                simulateEvent();
            }
        }, (realisticTimeMinutes * 60 * 1000) / matchDuration);

        startMatchButton.disabled = true;
    }

    function startRestartCountdown() {
        let countdownTime = 30;

        countdownInterval = setInterval(function () {
            if (countdownTime <= 0) {
                clearInterval(countdownInterval);
                restartMatch();
            } else {
                countdownElement.textContent = `${countdownTime} seconds until restart`;
                countdownTime -= 1;
            }
        }, 1000);
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

    function simulateEvent() {
        if (Math.random() < goalScoringProbability) {
            const scoringTeam = Math.random() < 0.5 ? selectedPlayers : aiPlayers;
            const scorer = selectScorer(scoringTeam);
            goals.push(scorer);
            const goalItem = document.createElement("li");
            goalItem.textContent = `${formatTime(matchTime)} - GOAL! ${scorer.name}`;
            events.push(goalItem);
            updateEventList();
        }

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

        if (Math.random() < cornerKickProbability) {
            const kickingTeam = Math.random() < 0.5 ? selectedPlayers : aiPlayers;
            const scorer = kickingTeam[Math.floor(Math.random() * kickingTeam.length)];

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

    function selectScorer(team) {
        team.sort((a, b) => b.rating - a.rating);

        const totalRating = team.reduce((total, player) => total + player.rating, 0);

        const threshold = Math.random() * totalRating;

        let cumulativeRating = 0;
        for (const player of team) {
            cumulativeRating += player.rating;
            if (cumulativeRating >= threshold) {
                return player;
            }
        }

        return team[team.length - 1];
    }

    function calculateScoringProbability(player) {
        return player.rating / 99;
    }

    function calculatePenaltyScoringProbability(player) {
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

    const positionGoalScoringProbabilities = {
        "GK": 0.00,
        "LB": 0.05,
        "RB": 0.05,
        "LWB": 0.05,
        "RWB": 0.05,
        "CB": 0.05,
        "CDM": 0.10,
        "CM": 0.20,
        "CAM": 0.35,
        "LM": 0.30,
        "RM": 0.30,
        "LW": 0.40,
        "RW": 0.40,
        "LF": 0.40,
        "RF": 0.40,
        "CF": 0.45,
        "ST": 0.5,
    };

    function simulateEvent() {
        if (Math.random() < goalScoringProbability) {
            const aiScoringProbability = 0.5;
            const selectedPlayersScoringProbability = 0.5;
            
            const scoringTeam = Math.random() < 0.5 ? selectedPlayers : aiPlayers;
            const scorer = selectScorer(scoringTeam);
            
            let scoringProbability = selectedPlayersScoringProbability; // Default to selected players
            
            // If the scorer has a position defined, use the corresponding goal scoring probability
            if (scorer.position && positionGoalScoringProbabilities[scorer.position]) {
                scoringProbability = positionGoalScoringProbabilities[scorer.position];
            }
            
            if (Math.random() < scoringProbability) {
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
    }
});
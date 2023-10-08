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

            const matchDuration = 90; // Duration in in-game minutes
            const goalScoringProbability = 0.05; // Probability of scoring a goal in a minute
            const freeKickProbability = 0.02; // Probability of a free kick in a minute
            const penaltyProbability = 0.01; // Probability of a penalty in a minute

            const selectedPlayers = [];
            const events = [];
            const goalList = document.getElementById("goal-list");
            const matchTimeElement = document.getElementById("match-time");
            const matchWinnerElement = document.getElementById("match-winner");
            const restartButton = document.getElementById("restart-button");
            const messageElement = document.getElementById("message");

            let matchTime = 0;
            let matchInterval;
            let goals = [];

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

            // Event listener for the "Restart" button
            restartButton.addEventListener("click", function () {
                if (matchInterval) {
                    messageElement.textContent = "You can't restart the match while it is in progress.";
                    return;
                }

                restartMatch();
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
                    } else {
                        matchTime += 1; // Increment match time by 1 in-game minute
                        updateMatchTime(matchTime);
                        simulateEvent();
                    }
                }, (matchDuration * 1000) / matchDuration); // Adjusted interval to match real-time

                startMatchButton.disabled = true;
            }

            // Function to update the match time
            function updateMatchTime(time) {
                const minutes = Math.floor(time / 60);
                const seconds = time % 60;
                matchTimeElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
                const minutes = Math.floor(time / 60);
                const seconds = time % 60;
                return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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

                // Enable the restart button
                restartButton.disabled = false;
            }

            // Function to restart the match
            function restartMatch() {
                if (matchInterval) {
                    messageElement.textContent = "You can't restart the match while it is in progress.";
                    return;
                }

                selectedPlayers.length = 0;
                goals = [];
                matchTime = 0;
                updateMatchTime(matchTime);
                startMatchButton.disabled = false;
                addButton.disabled = false; // Enable the "Add Player" button
                randomButton.disabled = false; // Enable the "Random" button

                // Clear event list
                clearEventList();

                // Clear match winner
                matchWinnerElement.textContent = "";

                // Clear message
                messageElement.textContent = "";

                // Disable the restart button again
                restartButton.disabled = true;
            }

            // Function to clear the event list
            function clearEventList() {
                events.length = 0;
                while (goalList.firstChild) {
                    goalList.removeChild(goalList.firstChild);
                }
            }
        });
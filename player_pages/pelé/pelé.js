// Define Pelé's information
const peleInfo = {
    name: "Pelé",
    image: "players/peléicon.png",
    rating: 95,
    position: "Forward",
    nationality: "Brazil",
    club: "Santos FC",
    achievements: [
        "3-time FIFA World Cup Champion",
        "Santos FC's all-time leading scorer",
        "FIFA World Cup Golden Ball Winner"
    ]
};

// Function to populate Pelé's information
function populatePlayerInfo() {
    const playerInfoDiv = document.getElementById("playerInfo");
    const playerImage = document.createElement("img");
    playerImage.src = peleInfo.image;
    playerImage.alt = peleInfo.name;
    playerInfoDiv.appendChild(playerImage);

    const playerDetails = document.createElement("div");
    playerDetails.innerHTML = `
        <h3>${peleInfo.name}</h3>
        <p><strong>Rating:</strong> ${peleInfo.rating}</p>
        <p><strong>Position:</strong> ${peleInfo.position}</p>
        <p><strong>Nationality:</strong> ${peleInfo.nationality}</p>
        <p><strong>Club:</strong> ${peleInfo.club}</p>
        <h4>Achievements:</h4>
        <ul>
            ${peleInfo.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
    `;
    playerInfoDiv.appendChild(playerDetails);
}

// Call the function to populate the player information
populatePlayerInfo();

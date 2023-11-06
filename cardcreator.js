document.getElementById('generate-button').addEventListener('click', function() {
    // Get user input values
    const playerName = document.getElementById('player-name-input').value;
    const playerRating = document.getElementById('player-rating-input').value;
    const playerClub = document.getElementById('player-club-input').value;
    const playerPosition = document.getElementById('player-position-input').value;
    const playerImageInput = document.getElementById('player-image-input');

    // Update card with user input
    document.getElementById('player-name').textContent = playerName;
    document.getElementById('player-rating').textContent = `Rating: ${playerRating}`;
    document.getElementById('player-club').textContent = `Club: ${playerClub}`;
    document.getElementById('player-position').textContent = `Position: ${playerPosition}`;

    // Update player image
    if (playerImageInput.files && playerImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('player-image').src = e.target.result;
        };
        reader.readAsDataURL(playerImageInput.files[0]);
    }
});

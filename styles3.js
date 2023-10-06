/* General styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    display: flex;
    align-items: center;
}

#logo {
    width: 50px;
    height: auto;
    margin-right: 10px;
}

h1 {
    margin: 0;
    text-shadow: 4px 4px 10px green;
    font-style: italic;
}

h2 {
    text-shadow: 4px 4px 10px green;
    font-weight: bold;
    font-style: italic;
}

p {
    text-shadow: 4px 4px 10px green;
    font-weight: bold;
    font-style: italic;
}

main {
    text-align: center;
    padding: 20px;
}

button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    text-shadow: 4px 4px 10px green;
    font-weight: bold;
    font-style: italic;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Navigation styles */
nav {
    background-color: #333;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: inline;
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-style: italic;
    text-shadow: 4px 4px 10px green;
}

a:hover {
    color: green;
}

/* Player card styles */
/* Player card styles */
.player-card {
    background-color: black; /* Set the background color to black */
    padding: 10px;
    margin: 10px;
    display: inline-block;
    width: 200px; /* Adjust the width to your desired value */
    height: 300px; /* Adjust the height to your desired value */
    text-align: center;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden; /* Crop images that exceed card dimensions */
}


.player-card img {
    max-width: 100%;
    max-height: 100%; /* Ensure the image doesn't overflow the card */
    object-fit: cover; /* Crop and center the image within the card */
}



/* Footer styles */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 240px;
    left: 0;
    width: 100%;
    z-index: 1;
}

footer2 {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}

/* Additional styles for buttons */
.buttoncards-container {
    position: absolute;
    top: 290px;
    right: 10px;
    z-index: 1;
}

.buttonpage-container {
    position: absolute;
    top: 290px;
    left: 10px;
    z-index: 1;
}

.openPackButton {
    background-color: black;
    color: white;
}

/* Style the Refresh Cards button */
.refreshcards-button {
    background-color: black;
    color: white;
    border: none;
    text-shadow: 4px 4px 10px green;
    font-weight: bold;
    font-style: italic;
    padding: 10px 20px;
    cursor: pointer;
    position: fixed;
    border-radius: 5px;
    bottom: 10px;
    right: 10px;
    z-index: 1;
}

/* Style the Refresh Page button */
.refreshpage-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-shadow: 4px 4px 10px green;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 1;
}

/* Style the pop-up container */
.popup {
    background-color: black;
    color: white;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 195px;
    height: 15px;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    z-index: 1;
}

/* Style the close button within the pop-up */
.popup span {
    cursor: pointer;
    font-weight: bold;
    margin-left: 10px;
}

/* CSS for the time display */
#time {
    position: absolute;
    top: 30px;
    right: 15px;
    text-shadow: 4px 4px 10px green;
    font-weight: bold;
    font-style: italic;
    font-size: 30px;
    color: white;
}

/* CSS for the fixed-text-box */
.fixed-text-box {
    background-color: black;
    color: white;
    font-weight: bold;
    font-style: italic;
    font-size: 11px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    max-width: 200px;
    height: 230px;
    overflow: none;
    position: fixed;
    top: 235px;
    left: 10px;
    z-index: 1;
}

/* Table styles within the fixed-text-box */
.fixed-text-box table {
    width: 100%;
    border-collapse: collapse;
}

.fixed-text-box table, .fixed-text-box th, .fixed-text-box td {
    border: none;
    font-weight: bold;
    font-style: italic;
    border-radius: 5px;
}

.fixed-text-box th, .fixed-text-box td {
    padding: 8px;
    text-align: left;
    border: none;
}

.fixed-text-box th {
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
}

/* Additional styles */
.logout-button {
    position: absolute;
    top: 195px;
    right: 540px;
    padding: 10px 20px;
    background-color: black;
    color: white;
    font-weight: bold;
    font-style: italic;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 2;
}

.logout-button:hover {
    background-color: green;
    color: white;
}

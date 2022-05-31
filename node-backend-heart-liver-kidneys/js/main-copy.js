// add event listeners for each of the organ buttons the user may choose
document.getElementById('heart').addEventListener('click', chooseHeart);
document.getElementById('liver').addEventListener('click', chooseLiver);
document.getElementById('kidneys').addEventListener('click', chooseKidneys);

// create asynchronous functions that create the appropriate fetch to call the server with the users choice. The computer's choice, and evaluation for win or loss conditions all occur on the backend server, and the server will return the outcome of the game.
// (as an aside the server has a lot of options for how it can return the outcome, it could have generic win and loss html pages that inform the player if they won or lost, what they and the computer chose, and a button to play again that reloads the main page. Alternatively the server could simply return a json file the provides this info to the browser and the browsers javascript can handle displaying this information...)
async function chooseHeart() {

}

async function chooseLiver() {

}

async function chooseKidneys() {

}
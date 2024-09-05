// Score counter
let homeScore = 0;
let guestScore = 0;

// Select Score by ID
let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');

// Scoring function for HOME
function scoreHome1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function scoreHome2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function scoreHome3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

// Scoring function for GUEST
function scoreGuest1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function scoreGuest2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function scoreGuest3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

// Reset game
function newGame() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
}
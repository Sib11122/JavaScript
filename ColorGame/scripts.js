const colors = ['red', 'blue', 'green', 'purple', 'orange',
    'yellow', 'pink', 'cyan', 'brown', 'lime',
    'teal', 'magenta'];
let cards = [];//cards wi
let selectedCards = [];//the cards selected during the process
let score = 0;//score that user got
let timeLeft = 30;// time left it is a type of stop watch
let gameInterval;//bandwidth of game

//getting info from the html
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


// -------------------------------------------
// SHUFFLE FUNCTION=this fn takes input as array that shuffles 
// -------------------------------------------
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// -------------------------------------------
// GENERATE CARDS
// -------------------------------------------
function generateCards() {
    gameContainer.innerHTML = '';

    cards = shuffle(colors.concat(colors)); // 24 cards (12 pairs)

    cards.forEach(clr => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = clr;
        card.textContent = '?';
        gameContainer.appendChild(card);
    });
}


// -------------------------------------------
// HANDLE CARD CLICK
// -------------------------------------------
function handleCardClick(event) {

    const card = event.target;

    // Only allow clicking on actual cards
    if (!card.classList.contains('card')) return;

    // Block clicking the same card twice
    if (selectedCards.includes(card)) return;

    // Block clicking if already matched
    if (card.classList.contains('matched')) return;

    // Reveal card
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;

    selectedCards.push(card);

    // Check match when 2 cards selected
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 600);
    }
}


// -------------------------------------------
// CHECK MATCH
// -------------------------------------------
function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        // Match Found
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // Reset cards
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    selectedCards = [];
}


// -------------------------------------------
// START GAME
// -------------------------------------------
function startGame() {
    clearInterval(gameInterval);

    score = 0;
    timeLeft = 30;
    scoreElement.textContent = `Score: ${score}`;
    timerElement.textContent = `Time Left: ${timeLeft}`;

    startbtn.disabled = true;

    generateCards();
    startTimer();
}


// -------------------------------------------
// TIMER
// -------------------------------------------
function startTimer() {
    gameInterval = setInterval(() => {

        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            alert("Game Over!");
            startbtn.disabled = false;
        }

    }, 1000);
}


// -------------------------------------------
// EVENT LISTENER (DELEGATED CLICK HANDLING)
// -------------------------------------------
gameContainer.addEventListener('click', handleCardClick);
startbtn.addEventListener('click', startGame);


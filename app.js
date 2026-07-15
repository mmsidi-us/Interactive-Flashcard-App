// 1. App State: The deck of flashcards and current position
const flashcards = [
    { q: "What does HTTP stand for?", a: "HyperText Transfer Protocol" },
    { q: "What status code means 'Not Found'?", a: "404" },
    { q: "What does CSS stand for?", a: "Cascading Style Sheets" },
    { q: "What does DOM stand for?", a: "Document Object Model" },
    { q: "What Python library do we use for HTTP requests?", a: "requests" }
];

let currentIndex = 0;

// 2. DOM Elements Selection
const progressIndicator = document.getElementById("progress-indicator");
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const btnShow = document.getElementById("btn-show");
const btnNext = document.getElementById("btn-next");

// 3. Render function: Updates UI based on current index
function updateUI() {
    const currentCard = flashcards[currentIndex];
    
    // Set Text Content
    questionText.textContent = currentCard.q;
    answerText.textContent = currentCard.a;
    progressIndicator.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
    
    // Always ensure the answer starts hidden on a new card
    answerText.style.display = "none";
}

// 4. Event Listener: Show Answer
btnShow.addEventListener("click", () => {
    answerText.style.display = "block";
});

// 5. Event Listener: Next Card (Loops back automatically using modulo)
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateUI();
});

// Initialize the view with the first card immediately
updateUI();
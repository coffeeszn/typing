let started = false;
let timeElapsed;
let secondsElapsed;
let minutesElapsed;
let currentWpm;
let finalWpm;
let capturedTime;
let falseTime = null;


function timer() {
    if (userInput.length >= 1 && falseTime === null) {
        started = true;
        falseTime = millis();
    }
    if (started === true) {
        secondsElapsed = (millis() - falseTime) / 1000;
    }
}


function capturedTimeCheck() {
    if (userInput.length === targetText.length && capturedTime === undefined) {
        capturedTime = floor(secondsElapsed);
    }
}


function displayWpm() {
    currentWpm = (currentWordIndex / (secondsElapsed / 60)).toFixed(2);
    text(("current wpm: " + currentWpm), (width / 2) - 175, 50);
}
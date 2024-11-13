function displayUI() {
    if (finished !== true && started !== true) {
        displayText();
    } else if (finished !== true && started === true) {
        displayText();
        displayCaret();
        ratioDisplay();
        // timerDisplay();
        displayWpm();
    } else if (finished) {
        endStatsUI();
        nextIconButton.updateSize();
    }
}


// function timerDisplay () {
//     textSize(28);
//     fill(170, 150, 150)
//     if (started === true) {
//       text(floor(secondsElapsed), width / 2, 370);
//     }
//   }

let ratioAlpha = 0;
let ratioY = 330;

function ratioDisplay () {
    ratioAlpha = lerp(ratioAlpha, 255, 0.08);
    ratioY = lerp(ratioY, 310, 0.25);
    textSize(28);
    fill(170, 150, 150, ratioAlpha);
    if (started === true) {
        text((currentWordIndex + ' / ' + (maxWords + 1)), xPos, ratioY);
    }   
}


function endStatsUI() {
    endStatsTime();
    endStatsWpm();
    nextIconButton.show();
}

  
function displayWpm() {
    currentWpm = (currentWordIndex / (secondsElapsed / 60)).toFixed(2);
    text(("current wpm: " + currentWpm), (width / 2) - 175, 50);
}

let endAlpha = 0;

function endStatsWpm() {

    endAlpha = lerp(endAlpha, 255, 0.05);

    let [beforeDot, afterDot] = finalWpmString.split('.', 2);
    whatever = ('WPM: ' + beforeDot);
    let whateverSize = textWidth(whatever);
    text(whatever, (width / 2) - 200, height / 2);
    textSize(22);
    text('.' + afterDot, (width / 2) - 200 + whateverSize, height / 2);
}

function endStatsTime() {
    textSize(28);
    fill(170, 150, 150, endAlpha)
    text(('Time: ' + capturedTime + ' sec.'), (width / 2) - 200, (height / 2) - 50);
}
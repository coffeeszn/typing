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
    }
}


// function timerDisplay () {
//     textSize(28);
//     fill(170, 150, 150)
//     if (started === true) {
//       text(floor(secondsElapsed), width / 2, 370);
//     }
//   }


function ratioDisplay () {
    textSize(28);
    fill(170, 150, 150)
    if (started === true) {
        text((currentWordIndex + ' / ' + (maxWords + 1)), xPos, 370);
    }
}


function endStatsUI() {
    textSize(28);
    fill(170, 150, 150)
    text(('Time: ' + capturedTime + ' sec.'), (width / 2) - 200, (height / 2) - 50);

    endStatsWpm();
    nextIconButton.show();
}

  
function displayWpm() {
    currentWpm = (currentWordIndex / (secondsElapsed / 60)).toFixed(2);
    text(("current wpm: " + currentWpm), (width / 2) - 175, 50);
}

function endStatsWpm() {
    let [beforeDot, afterDot] = finalWpmString.split('.', 2);
    whatever = ('WPM: ' + beforeDot);
    let whateverSize = textWidth(whatever);
    text(whatever, (width / 2) - 200, height / 2);
    textSize(22);
    text('.' + afterDot, (width / 2) - 200 + whateverSize, height / 2);
}
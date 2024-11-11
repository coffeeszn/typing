function displayUI() {
    if (finished !== true) {
        displayText();
        displayCaret();
        ratioDisplay();
        timerDisplay();
        displayWpm();
    } else if (finished) {
        endStatsDisplay();
    }
}


function timerDisplay () {
    textSize(25);
    if (started === true) {
      text(floor(secondsElapsed), width - 350, 220);
    }
  }


function ratioDisplay () {
    textSize(25);
    if (started === true) {
        text((currentWordIndex + ' / ' + (maxWords + 1)), 350, 220);
    }
}


function endStatsDisplay() {
    textSize(25);
    text(('Time: ' + capturedTime + ' sec.'), (width / 2) - 200, (height / 2) - 50);
    whatever = ('WPM: ' + finalWpm.slice(0, 2));
    let whateverSize = textWidth(whatever);
    text(whatever, (width / 2) - 200, height / 2);
    textSize(15);
    text(finalWpm.slice(2, 5), (width / 2) - 200 + whateverSize, height / 2);
    nextIconButton.show();
  }
let textAlpha = 0;
let caretAlpha = 0;
let changeAlpha = 255;
let lineIndex;
let printWordIndex = 0;
let userWordCount;
let timesReset = 0;
let yLerping = false;
let y = 300; // Initial scrolling position
let targetY = y;

function displayText() {
    let x = xPos;
    let textY = y; // Local variable for text rendering

    lineIndex = 0;

    // Trigger scrolling when necessary
    if (userWordCountCalc() > 9 && !yLerping) {
      timesReset++;
      yLerping = true;
      targetY = y - 80; // Update targetY for lerp
    }

    // Smooth scrolling with lerp
    if (yLerping) {
      y = lerp(y, targetY, 0.3);
      if (Math.abs(y - targetY) < 0.5) {
        y = targetY;
        yLerping = false; // Stop lerping when close to target
      }
    }

    let words = targetText.split(" "); // Split text into words

    noStroke();
    strokeWeight;
    textSize(32);
    let charIndex = 0;

    // Lerp alpha for smooth fade-in
    textAlpha = lerp(textAlpha, 255, 0.05);
    caretAlpha = lerp(caretAlpha, 255, 0.05);

    for (let word of words) {
      if (printWordIndex > 4) {
        x = xPos; // Reset x position for the new line
        textY += lineHeight; // Move textY down by line height
        lineIndex++;
        printWordIndex = 0;
      }

      // Draw each character in the word
      for (let char of word + " ") {
        if (finished !== true && started === true) {
          if (charIndex === userInput.length) {
            if (caretVisible) {
              strokeWeight(1);
              stroke(255, 255, 255, caretAlpha);
              line(x, textY + 8, x + textWidth(char), textY + 8); // Draw caret
            }
            strokeWeight(0);
          }
        }

        // Apply color based on user input
        if (userInput[charIndex] === char) {
          fill(190, 170, 170, textAlpha);
        } else if (userInput[charIndex] !== undefined) {
          fill(160, 40, 40, textAlpha);
        } else {
          fill(70, 70, 70, textAlpha);
        }

        // Render the character
        if (textY > 379) {
          text(char, x, textY);
        }

        x += textWidth(char); // Advance x position by character width
        charIndex++;
        noStroke();
      }
      printWordIndex++;
    }
}

function userWordCountCalc() {
  return userWordCount = userInput.split(' ').length - 1 - (timesReset * 5);
}
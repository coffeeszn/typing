let textAlpha = 0;

function displayText() {
    let x = xPos;
    let y = 380;
    let words = targetText.split(" "); // Split text into words
    
    noStroke();
    strokeWeight
    textSize(32);
    let charIndex = 0;

    textAlpha = lerp(textAlpha, 255, 0.05);
  
    for (let word of words) {
      let wordWidth = textWidth(word + " "); // Width of word including space
  
      // Check if the word fits on the current line; if not, move to the next line
      if (x + wordWidth > maxLineWidth) {
        x = xPos;          // Reset x position to the start of the new line
        y += lineHeight;   // Move y down by line height
      }
  
      // Draw each character in the word
      for (let char of word + " ") { // Include space as part of the word
        // Apply color based on user input
        if (userInput[charIndex] === char) {
          fill(190, 170, 170, textAlpha);
        } else if (userInput[charIndex] !== undefined) {
          fill(100, 0, 0, textAlpha);
        } else {
          fill(70, 70, 70, textAlpha);
        }
  
        text(char, x, y);
        x += textWidth(char); // Advance x position by character width
        charIndex++; // Move to the next character in targetText
        noStroke();
      }
    }
  }
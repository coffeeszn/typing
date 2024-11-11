
function displayText() {
    let x = xPos;
    let y = 300;
    let words = targetText.split(" "); // Split text into words
    
    noStroke();
    textSize(32);
    let charIndex = 0;
  
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
          stroke(0);
          strokeWeight(1);
          fill(0, 140, 0);
        } else if (userInput[charIndex] !== undefined) {
          fill(180, 0, 0);
        } else {
          fill(50, 50, 50);
        }
  
        text(char, x, y);
        x += textWidth(char); // Advance x position by character width
        charIndex++; // Move to the next character in targetText
        noStroke();
      }
    }
  }
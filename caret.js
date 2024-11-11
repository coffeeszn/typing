function displayCaret() {
  textSize(32);
  let x = xPos;
  let y = 290;
  let words = targetText.split(" "); // Split target text into words
  
  let charIndex = 0;

  // Calculate the caret's position based on user input length
  for (let word of words) {
    let wordWidth = textWidth(word + " "); // Width of word including space

    // Check if the word fits on the current line; if not, move to the next line
    if (x + wordWidth > maxLineWidth) {
      x = xPos;        // Reset x to start of the new line
      y += lineHeight; // Move y down by line height
    }

    // Draw each character in the word to find the caret position
    for (let char of word + " ") { // Include space as part of the word
      if (charIndex === userInput.length) {
        // If caretVisible is true, draw the caret at the current position
        if (caretVisible) {
          stroke(0);
          line(x, y - 12, x, y + 12); // Draw caret as a line
        }
        return; // Exit once we place the caret
      }
      
      // Advance positions
      x += textWidth(char);
      charIndex++;
    }
  }

  // Blink caret visibility based on time
  if (millis() - lastBlinkTime > blinkInterval) {
    caretVisible = !caretVisible;
    lastBlinkTime = millis();
  }
}
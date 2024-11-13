let caretAlpha = 0;

function displayCaret() {
  textSize(32);
  let x = xPos; // Starting x position
  let y = 388;  // Starting y position
  const words = targetText.split(" "); // Split target text into words
  
  let charIndex = 0;

  caretAlpha = lerp(caretAlpha, 255, 0.05);

  // Loop through each word to determine caret position based on user input length
  for (let word of words) {
    let wordWidth = textWidth(word + " "); // Width of word including space

    // Check if word exceeds max line width and move to next line if needed
    if (x + wordWidth > maxLineWidth) {
      x = xPos;        // Reset x to start of the new line
      y += lineHeight; // Move y down by line height
    }

    // Loop through each character in the word (including space)
    for (let char of word + " ") {
      // Place caret at the current position if we've reached the user input length
      if (charIndex === userInput.length) {
        if (caretVisible) {
          strokeWeight(1);
          stroke(255, 255, 255, caretAlpha); // Set stroke color for caret
          line(x, y, x + textWidth(char), y); // Draw caret as a vertical line
        }
        strokeWeight(0);
        return; // Exit the function after drawing the caret
      }

      // Advance x position based on character width and increment index
      x += textWidth(char);
      charIndex++;
    }
  }
}
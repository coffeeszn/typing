let myFont;
let userInput = '';
let targetText = '';
let caretVisible = true;
let lastBlinkTime = 0;
let blinkInterval = 500; // Blinks every 500ms
let wordList = [];
let filteredWords = [];
let currentCharIndex = 0;
let charIndex;
let currentWordIndex = 0;
let lineHeight = 65;
let maxLineWidth;
let currentLineIndex = 0;
let finished = false;
let nextIconButton;
let nextButtonImage;
let whatever;
let xPos = 350;


function preload() {

  loadJSON("words.json",   // Load the JSON data for words
    (loadedData) => { 
      wordList = loadedData.words; 
    }, 
    (error) => { 
      console.error("Error loading JSON:", error); 
    }
  );
  
  nextButtonImage = loadImage(  // Load the image for the next button
    "nextButton.png", 
    () => console.log("Next button image loaded successfully"), 
    (error) => console.error("Error loading next button image:", error)
  );

  myFont = loadFont(    // Load the custom font
    "MPLUSRounded1c-Bold.ttf", 
    () => console.log("Font loaded successfully"), 
    (error) => console.error("Error loading font:", error)
  );
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, LEFT);
  filteredWords = wordList.filter(word => word.length > 3);
  textGenerator();
  maxLineWidth = width - 350;
  textFont(myFont);
  createNextIconButton();
  nextIconButton.hide();
}


function draw() {
  background(155);
  displayUI();
  capturedTimeCheck();
  timer();
  finishCheck();
}


function createNextIconButton() {
  // Ensure the path is correct relative to your project folder
  nextIconButton = createImg("nextButton.png", "Next Button");
  nextIconButton.position(width / 2 - 25, height / 2 + 200); // Adjust position
  nextIconButton.size(50, 50);
  nextIconButton.style('border', 'none');

  // Add click event to trigger the resetTest function
  nextIconButton.mousePressed(resetTest);
}


function finishCheck() {
  if (userInput.length === targetText.length && finished === false) {
    finalWpm = currentWpm;
    finished = true;
  } 
}


function keyPressed() {
  if (keyCode === BACKSPACE && userInput.length > 0) {
    if (targetText[currentCharIndex] === " ") {
      currentWordIndex = max(0, currentWordIndex - 1); // Move back to the previous word on space deletion
    } 
    userInput = userInput.slice(0, -1);
    currentCharIndex--;
  }
}


function keyTyped() {
  userInput += key;
  currentCharIndex++;
  if (targetText[currentCharIndex] === " ") {
    currentWordIndex++;
  }
  if (userInput.length === targetText.length) {
    currentWordIndex++;
  }
}


function resetTest() {
  finished = false;
  userInput = '';
  targetText = '';
  currentCharIndex = 0;
  currentWordIndex = 0;
  secondsElapsed = 0;
  falseTime = null;
  textGenerator();
  started = false;
  nextIconButton.hide();
}
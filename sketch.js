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
let lineHeight = 80;
let maxLineWidth;
let finished = false;
let nextButtonImage;
let whatever;
let xPos = 500;
let nextIconButton;


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
  filteredWords = wordList.filter(word => word.length > 3 && word.length < 8);
  textGenerator();
  maxLineWidth = width - xPos + 100;
  textFont(myFont);
  makeTheButtons();
}


function draw() {
  background(40);
  displayUI();
  capturedTimeCheck();
  timer();
  finishCheck();
}


function finishCheck() {
  if (userInput.length >= targetText.length && finished === false) {
    finalWpm = currentWpm;
    finalWpmString = finalWpm.toString();
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
  textAlpha = 0;
  endAlpha = 0;
  ratioY = 330;
  nextIconButton.hide();
}
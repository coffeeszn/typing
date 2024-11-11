let maxWords;

function textGenerator() {
  maxWords = 9;
    for (let i = 0; i <= maxWords; i++){
      targetText += (' ' + (random(filteredWords)));
    }
    targetText.toLowerCase;
    targetText = targetText.slice(1);
    console.log(targetText);
  }
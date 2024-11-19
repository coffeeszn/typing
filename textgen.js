let maxWords = 4;

function textGenerator() {
    for (let i = 0; i <= maxWords; i++){
      targetText += (' ' + (random(filteredWords)));
    }
    targetText.toLowerCase;
    targetText = targetText.slice(1);
    console.log(targetText);
  }
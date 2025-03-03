function playBtn() {
  showAndHideScreen();
  showRandomAlpha();
  setHighlightColorById(getCurrentAlphabetById());

};

// Game function


function increaseScoreNumber() {
  const getScoreElement = document.getElementById('score');
  const scoreString = getScoreElement.innerText;
  let score = parseInt(scoreString);
  score = score+1;
 getScoreElement.innerText = score;

}
function reduceLifeForWrongPress() {
  const getLifeScoreElement = document.getElementById('life');
  const lifeInnerText = getLifeScoreElement.innerText;
  let lifeScore = parseInt(lifeInnerText);
  if (lifeScore > 0) {
    lifeScore = lifeScore - 1;
    getLifeScoreElement.innerText = lifeScore;
  }
  if (lifeScore <= 0) {
    
  }
  
}

function getKeyPressHandle(event) {
  const playerKeyPressvalue = event.key;
  const currentAlphabet = getCurrentAlphabetById();

  if (playerKeyPressvalue === currentAlphabet) {
    console.log('wow! you got a point');
    showRandomAlpha();
    increaseScoreNumber();
    removeHighlightColorById(currentAlphabet);
    setHighlightColorById(getCurrentAlphabetById());

  }
  else {
    reduceLifeForWrongPress();
    console.log('you missed. you lost a life');

  }
}


document.addEventListener('keyup', getKeyPressHandle);


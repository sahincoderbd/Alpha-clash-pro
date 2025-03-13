function playBtn() {
  hideSectionElementById('home');
  showSectionElementById('playStart');
  showRandomAlpha();
  setHighlightColorById(getCurrentAlphabetById());

};


// Final Score Screen function


function playAgain() {
  showSectionElementById('playStart');
  hideSectionElementById('finalScoreScreen');

} 
// Game function
function increaseScoreNumber() {
  let getScore = getTextFromTextElementById('currentScore');
  // console.log(getScore);
 const UpdatedScore = getScore+1;
 setInnerTextById('currentScore', UpdatedScore);
  return UpdatedScore;
}
function reduceLifeForWrongPress() {
  const getLifeScore = getTextFromTextElementById('currentLife');
  console.log(getLifeScore);
  const updatedLifeScore = getLifeScore - 1;
  setInnerTextById('currentLife', updatedLifeScore);
  if (updatedLifeScore > 0) {

  }
  if (updatedLifeScore === 0 || updatedLifeScore<0) {
    hideSectionElementById('playStart');
    showSectionElementById('finalScoreScreen');
    setInnerTextById('currentLife', 5);
    setInnerTextById('finalScore', getTextFromTextElementById('currentScore'));
    setInnerTextById('currentScore', 0);

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
    showRandomAlpha();
    removeHighlightColorById(currentAlphabet);
    setHighlightColorById(getCurrentAlphabetById());
    console.log('you missed. you lost a life');

  }
}


document.addEventListener('keyup', getKeyPressHandle);


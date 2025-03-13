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


function getKeyPressHandle(event) {
  const playerKeyPressvalue = event.key;
  const currentAlphabet = getCurrentAlphabetById();

  if (playerKeyPressvalue === currentAlphabet) {
    console.log('wow! you got a point');
    showRandomAlpha();
    increaseScoreNumber();
    console.log('current alpha is ', currentAlphabet);
    removeHighlightColorById(currentAlphabet);
    setHighlightColorById(getCurrentAlphabetById());
  }
  if (playerKeyPressvalue === 'Escape') {
    gameOver();
  }
  if(playerKeyPressvalue!==currentAlphabet) {
    reduceLifeForWrongPress();
    showRandomAlpha();
    removeHighlightColorById(currentAlphabet);
    setHighlightColorById(getCurrentAlphabetById());
    console.log('you missed. you lost a life');

  }
}


document.addEventListener('keyup', getKeyPressHandle);


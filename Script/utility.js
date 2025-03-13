// showAndHideScreen()

function showSectionElementById(elementId) {
  const getElement = document.getElementById(elementId);
  getElement.classList.remove('hidden');
}

function hideSectionElementById(elementId) {
  const getElement = document.getElementById(elementId);
  getElement.classList.add('hidden');
}

// get random alphabet from alphabet string;
function getRandomAlpha() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabetString.split('');
  const RandomNumber = Math.random() * 25;
  const index = Math.round(RandomNumber);
  const alphabet = alphabetArray[index];
  return alphabet;

}
// Display Current alphabet on the screen
function showRandomAlpha() {
  const getAlphabet = document.getElementById('alphabetScreen');
  getAlphabet.innerText = getRandomAlpha().toUpperCase();
 
}
// get current alphabet
function getCurrentAlphabetById() {
  const getAlphabet = document.getElementById('alphabetScreen');
  const alphabet = getAlphabet.innerText;
  const alphabetLowerCase = alphabet.toLowerCase();
  return alphabetLowerCase;

}
// Highlight the on-screen alphabet on the keyboard 
function setHighlightColorById(alphabetKeyId) {
  const getKeyId = document.getElementById(alphabetKeyId);
  getKeyId.classList.add('bg-[#FFA500]');
  
};

function removeHighlightColorById(alphabetKeyId) {
  const getKeyId = document.getElementById(alphabetKeyId);
  getKeyId.classList.remove('bg-[#FFA500]');
  
};


//get text from text element
function getTextFromTextElementById(elementId) {
  const getElement = document. getElementById(elementId);
  const innerText = getElement.innerText;
  const innerTextValue = parseInt(innerText);
  return innerTextValue;
}
// set inner text by Id
function setInnerTextById(elementId,UpdatedText) {
  const getElement = document.getElementById(elementId);
  const parseIntOfElement = parseInt(UpdatedText);
  getElement.innerText = parseIntOfElement;
}

// game over function
function gameOver(){
      hideSectionElementById('playStart');
      showSectionElementById('finalScoreScreen');
      setInnerTextById('currentLife', 5);
      setInnerTextById('finalScore', getTextFromTextElementById('currentScore'));
      setInnerTextById('currentScore', 0);

    }
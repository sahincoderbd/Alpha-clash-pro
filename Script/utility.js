// showAndHideScreen()

function showAndHideScreen() {
  const playGroundOn = document.getElementById('playStart');
  const homeSection = document.getElementById('home');
  homeSection.classList.add('hidden');
  playGroundOn.classList.remove('hidden');
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
  console.log(alphabetLowerCase);
  return alphabetLowerCase;

}

function setHighlightColorById(alphabetKeyId) {
  const getKeyId = document.getElementById(alphabetKeyId);
  getKeyId.classList.add('bg-[#FFA500]');

  
};

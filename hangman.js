$( document ).ready(function() {
	randomWord();
	displayBlank();
	
   /*$('a').click(function(){
      var letterId = this.id;
	  checkLetter(letterId);
	  guesses--;
	  
	  if (guesses === 0) {
		  alert("You've used up your guesses. You've lost!");
	  }
   });*/
});

var wordSize = 0;
var words = ["hat", "telephone", "food", "scissors", "location", "stupid"];
var secretWord = [];
var guesses = 6;
var blankSpace = "_ ";
var guessed = "";
var blank = [];

//restarts game
function startAgain() {
	randomWord();
	blank = [];
	displayBlank();
	guesses = 6;
	$("#guessed").val(""); 
	guessed = "";
	window.location.reload();
	
}
//pulls random words from array
function randomWord(){
	secretWord = words[Math.floor(Math.random()*words.length)].split("");
	wordSize = secretWord.length;
}

//checks for matched letter
function checkLetter(letter){
	var match = false;
	for (var i=0; i<secretWord.length; i++) {
		if(letter === secretWord[i]){
			if (blank[i] === blankSpace) {
				blank[i] = letter;
				match = true;
				wordSize--;
			}	
		}
	}
	if(match === false) {
		guesses--;
		checkNumGuess();
	}
	return match;
}

//displays letters guessed
function guessLetter(letter){
	if(checkLetter(letter)){
		displaySecretWordBlank();
		displayLetterGuessed(letter);
	}else {
		displayLetterGuessed(letter);
	}
	var btn = $("body").find("#"+letter);
	btn.attr("disabled", true);
}

//displays secret word 
function displayBlank() {
	var bLine = "";
	for (var i=0; i<secretWord.length; i++) {
		bLine = bLine + blankSpace;
		blank.push(blankSpace);
	}
	$("#secret").val(bLine); 
}

//displays letters used
function displayLetterGuessed(letter) {
	guessed = guessed + letter + " ";
	$("#guessed").val(guessed); 
}

//displays secret word with underscore
function displaySecretWordBlank() {
	var bLine = "";
	for (var i=0; i<secretWord.length; i++) {
		if (blank[i] !== blankSpace) {
			bLine = bLine + blank[i] + " ";
		} else {
			bLine = bLine + blankSpace;
		} 
	}
	$("#secret").val(bLine); 
	checkWin();
}

//keeps track of number of guesses
function checkNumGuess() {
	if(guesses === 0) {
		alert("Sorry, you couldn't guess the word. Game Over!");
	}
}
	
function checkWin() {
	if (wordSize === 0) {
		alert ("You Win! You've guessed the secret word.");
	}
}


	
	
	
	
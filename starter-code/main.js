var cardVal = ['queen', 'queen', 'king', 'king', 'jack', 'jack'];
var cardClick = [];
var cardsInPlay = [];
var scoreMatch = 0;

document.querySelector(".matchScore").innerHTML = "Matches: 0/" + (cardVal.length / 2);




var createBoard = function(){
	//Creates cards
	for(var i = 0; i < cardVal.length; i++){
		var cardPop = document.createElement('div');
		cardPop.className = 'card';
		document.getElementsByClassName('board')[0].appendChild(cardPop);

		cardPop.setAttribute("data-card", cardVal[i]);
		cardPop.setAttribute("card-sel", "cardNum" + i);

		cardPop.addEventListener('click', cardControl);
		cardPop.addEventListener('click', isMatch);

	}
}

var shuffleDeck = function(){
	//Shuffles deck
	for(var i = 0; i < cardVal.length; i++){
		var storeVal = cardVal[i];
		var ranIndex = Math.floor(Math.random() * cardVal.length);
		cardVal[i] = cardVal[ranIndex];
		cardVal[ranIndex] = storeVal;
	}
}
var noMatchClear = function(){
	//Flips non matching cards back over and resets cards in play bank
	setTimeout(function(){
		//alert('YES');
		cardClick[0].style.backgroundImage = "";
		cardClick[1].style.backgroundImage = "";
		cardClick = [];
		cardsInPlay = [];}, 660);
}

var isMatch = function(){
	//Checks for a match and acts accordingly. Also returns a boolean
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			cardClick[0].style.opacity = "0.5";
			cardClick[1].style.opacity = "0.5";

			cardClick[0].removeEventListener('click', cardControl);
			cardClick[0].removeEventListener('click', isMatch);
			this.removeEventListener('click', cardControl);
			this.removeEventListener('click', isMatch);

			cardsInPlay = [];
			cardClick = [];
			scoreMatch += 1;

			document.querySelector(".matchScore").innerHTML = "Matches: " + scoreMatch + "/" + (cardVal.length / 2);

			if(scoreMatch === cardVal.length/2){
				document.querySelector(".matchScore").innerHTML = "YOU WIN!";
				alert("You Win!");
			}
			return true;
		}else{
			noMatchClear();
			return false;
		}
	}
}

var cardControl = function(){
	//Sets card background based on value, builds cards in play bank
	cardsInPlay.push(this.getAttribute('data-card'));
	cardClick.push(this);
	this.style.backgroundSize = "100% 100%";
	switch(this.getAttribute('data-card')){
		case 'queen':
			this.style.backgroundImage = "url('assets/queenImage.png')";
			break;
		case 'king':
			this.style.backgroundImage = "url('assets/kingImage.png')";
			break;
		case 'jack':
			this.style.backgroundImage = "url('assets/jackImage.png')";
			break
	}
}
shuffleDeck();
createBoard();

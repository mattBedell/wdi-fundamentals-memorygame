var cardVal = ['queen', 'queen', 'king', 'king'];
var cardClick = [];
var cardsInPlay = [];




var createBoard = function(){
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
	for(var i = 0; i < cardVal.length; i++){
		var storeVal = cardVal[i];
		var ranIndex = Math.floor(Math.random() * cardVal.length);
		cardVal[i] = cardVal[ranIndex];
		cardVal[ranIndex] = storeVal;
	}
}
var isMatch = function(){
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			cardClick[0].style.opacity = "0.5";
			cardClick[1].style.opacity = "0.5";
			cardsInPlay = [];
			cardClick = [];
			return true;
		}else{
			//cardClick[0].style.backgroundImage = '';
			//cardClick[1].style.backgroundImage = '';
			cardsInPlay = [];
			cardClick = [];
			return false;
		}
	}
}

var cardControl = function(){
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
	}
}
shuffleDeck();
createBoard();
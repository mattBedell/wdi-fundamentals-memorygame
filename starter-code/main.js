var cardVal = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var createBoard = function(){
	for(var i = 0; i < cardVal.length; i++){
		var cardPop = document.createElement('div');
		cardPop.className = 'card';
		document.getElementsByClassName('board')[0].appendChild(cardPop);

		cardPop.setAttribute("data-card", cardVal[i]);
		cardPop.addEventListener('click', isTwoCards);
	}
}


var isMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		return true;
	}else{
		return false;
	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length === 2){
		isMatch();//WHAT???????
		cardsInPlay = [];
	}
}

createBoard();
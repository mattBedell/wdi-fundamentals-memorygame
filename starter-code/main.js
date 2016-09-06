var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var creatBoard = function(cardNum){
	for(var i = 0; i < cardNum; i++){
		var cardPop = document.createElement('div');
		cardPop.className = 'card';
		document.getElementsByClassName('board')[0].appendChild(cardPop);
	}
}
creatBoard(4);


/*var cardPop = document.createElement('div');
cardPop.className = 'card';
document.getElementsByClassName('board')[0].appendChild(cardPop);
*/
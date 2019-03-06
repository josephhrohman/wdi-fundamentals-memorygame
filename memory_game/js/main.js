
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} 	else {
	console.log("Sorry, try again.");
}
}

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var flipCard = function(cardId) {
	checkForMatch();
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
		if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Found a match!");
}   else {
	alert("Pick Again");
}
}

flipCard(0);
flipCard(2);


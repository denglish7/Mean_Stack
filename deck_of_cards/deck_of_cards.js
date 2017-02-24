function Deck(){
    this.reset();
}



Deck.prototype.shuffle = function () {
    for(var i=this.cards.length-1; i>0; i--){
        var idx = Math.floor(Math.random()* (i+1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[idx];
        this.cards[idx] = temp;
    }
    return this;
}

Deck.prototype.reset = function () {
    this.cards = [];
    this.numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    for(var i=0; i<this.suits.length; i++){
        for(var j=0; j<this.numbers.length; j++){
            var card = this.numbers[j] + " of " + this.suits[i]
            this.cards.push(card);
        }
    }
    return this;
}

Deck.prototype.deal = function () {
    return this.cards.shift();
}

function Player(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.draw = function () {
    this.hand.push(myDeck.deal());
    return this;
}

Player.prototype.discard = function () {
    if(this.hand.length > 0){
        myDeck.cards.push(this.hand.shift());
    }
}


var myDeck = new Deck();
var player1 = new Player("Dan");


myDeck.shuffle();
player1.draw();
console.log(player1.hand);
player1.discard();
console.log(player1.hand);
console.log(myDeck.cards);

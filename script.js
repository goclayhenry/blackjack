var gameBoard = document.getElementById("gameBoard");

class Deck {
    constructor()
    {
        this.size = 52;
        this.face = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "Jack", "Queen", "King");
        this.suit = new Array("Clubs", "Diamonds", "Hearts", "Spades");
        this.deck = new Array();
    }

    createDeck()
    {
        for (var i = 0; i < this.suit.length; i ++)
        {
            this.deck[i] = new Array();
            var tmp = new Array();
            for (var j = 0; j < this.face.length; j ++)
            {
                tmp.push(this.face[j]);
                this.deck[i].push(this.face[j]);
            }
            
            this.deck.push(tmp);
        }
    }

    printDeck()
    {
        for (var i = 0; i < this.suit.length; i ++)
        {
            for (var j = 0; j < this.face.length; j ++)
            {
                console.log(this.deck[i][j]);
            }
        }
        console.log(this.deck[1]);
    }

}

var deck = new Deck;

deck.createDeck();
deck.printDeck();

//game.getValue("Hearts", "5");




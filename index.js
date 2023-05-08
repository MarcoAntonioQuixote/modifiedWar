//card - value, display, suit

// deck that has 52 random cards
let start = document.getElementById('startGame');

start.addEventListener('click', () => {
    let modifiedWar = new Deck(true);
    console.log(modifiedWar);
    playGame(modifiedWar);
})

class Deck {
    constructor(shuffle) {
        this.deck = this.createDeck(shuffle);
    }

    createDeck(shuffle) {
        let cards = [];
        let values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        let suits = ["🐼","🐲","💎","🐯"];
        
        
        values.forEach((v,i) => {
            for (let suit of suits) {
                cards.push(new Card(v,(i+2),suit));
            }
        })

        if (shuffle) {
            for (var i = cards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = cards[i];
                cards[i] = cards[j];
                cards[j] = temp;
            } 
        }

        return cards;
    }
}

class Card {
    constructor(face,value,suit) {
        this.face = face;
        this.value = value;
        this.suit = suit;
        this.faceDown = false;
    }
}

class Game {
    constructor(deck) {
        this.deck = deck;
    }

    displayCards() {
        let field = document.getElementById('playingField');
        field.innerHTML = '';
    
        this.deck.forEach(card => {
            let cardBody = document.createElement('div');
            if (card.faceDown === true) {
                cardBody.setAttribute('class','faceDown');
            } else {
                let face = document.createElement('span');
                let suit = document.createElement('span');
                face.innerText = card.face;
                suit.innerText = card.suit;
        
                cardBody.append(face,suit);
                cardBody.setAttribute('class','card');
            }
            cardBody.addEventListener('click', () => {
                // field.clear();
                this.handleSelection(card);
            });
            field.append(cardBody);
        });
    
    }
    
    handleSelection(card) {
        console.log(card);
        card.faceDown = true;
        this.displayCards();
        // card.faceDown = true;
        // this.displayCards(this.deck);
    }

}

function playGame(deck) {
    let game = new Game(deck.deck);
    game.displayCards();
    start.style.display = 'none';
    

    //receiving a deck of 52 cards (4 * 13);

    //display them in a grid

    //each card has a face, suit

    //each card needs to be clickable

}








//borrowed shuffle function from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
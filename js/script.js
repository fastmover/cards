suits = {
  "Clubs" : {
    id: "clubs",
    name: "Clubs",
    unicode: "&clubs;"
  },
  "Spades": {
    id: "spades",
    name: "Spades",
    unicode: "&spades;"
  },
  "Hearts": {
    id: "hearts",
    name: "Hearts",
    unicode: "&hearts;"
  },
  "Diamonds": {
    id: "diamonds",
    name: "Diamonds",
    unicode: "&diams;"
  }
};

cards = {
  2: {
    id: "2",
    name: "Two",
  },
  3: {
    id: "3",
    name: "Three",
  },
  4: {
    id: "4",
    name: "Four",
  },
  5: {
    id: "5",
    name: "Five",
  },
  6: {
    id: "6",
    name: "Six",
  },
  7: {
    id: "7",
    name: "Seven",
  },
  8: {
    id: "8",
    name: "Eight",
  },
  9: {
    id: "9",
    name: "Nine",
  },
  10: {
    id: "10",
    name: "Ten",
  },
  j: {
    id: "j",
    name: "Jack",
  },
  q: {
    id: "q",
    name: "Queen",
  },
  k: {
    id: "k",
    name: "King",
  },
  a: {
    id: "a",
    name: "Ace",
  },
};

//Build Deck:
Deck = {};
Deck.Cards = [];
zIndex = 10;
//Iterate Suits:
for (suit in suits){
  //Iterate Cards:
  for (card in cards) {
//    console.log(String(suit['id']));
//    console.log(String(card.id));



    Deck.Cards.push({
      id: String(suits[suit].id + cards[card].id),
      name: String(cards[card].name + " of " + suits[suit].name),
      card: String(cards[card].id),
      suit: String(suits[suit].id),
      image: String('cards-' + suits[suit].id + '-' + cards[card].id),
      z: zIndex,
    });

    zIndex++;


  }
}

// @source: http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }

    return this;
}

$(function() {



  Deck.renderCards = function() {
    zIndex = 10;
    for(Card in Deck.Cards) {
      Deck.Cards[Card].obj = $('<div class="card"><div class="front ' + String(Deck.Cards[Card].image) + '" style="z-index: ' + zIndex + '" ></div><div class="back cards-back-v-1"</div>');
      jQuery('article').append(Deck.Cards[Card].obj);
      zIndex++;
    }
    Deck.clickable();
  }

  Deck.verticalAlignCards = function() {
    cardHeight = $('.card').height();
    cardPeek = (cardHeight / 5);
    cardTop = 10;
    $('.card').each(function() {
      $(this).css("position", "absolute");
      $(this).css("top", cardTop);
      cardTop += cardPeek;
    });
  }
  //verticalAlignCards();


  Deck.diagonalAlignCards = function() {
    cardHeight = $('.card').height();
    cardPeek = (cardHeight / 5);
    cardTop = 10;
    $('.card').each(function() {
      $(this).css("position", "absolute");
      $(this).css("top", cardTop);
      $(this).css("left", cardTop);
      cardTop += cardPeek;
    });
  }

    Deck.clickable = function () {
    $('.card').each(function() {
      $(this).click(function() {
        Deck.flipCard(this);
      });
      $(this).data(this, 'Face', 'Up');
    });
  }

  Deck.flipCard = function(card) {
    if( $(this).data('Face') == "Up" ) {
      $(card).css({ 
      /*WebkitTransform: 'rotateX(180deg)'*/
        '-webkit-transform': 'rotateX(180deg)',
      }, 1000);
      $(card).data('Face', 'Down');
    } else {
      $(card).css({ 
      /*WebkitTransform: 'rotateX(180deg)'*/
        '-webkit-transform': 'rotateX(0deg)',
      }, 1000);
      $(this).data('Face', 'Up');
    }
    
    //$(card).find('.bottom').animate({ WebkitTransform: 'rotateX(0deg)'}, 1000);
  }


  /* !!!!RUN LINE!!!! */
  //diagonalAlignCards();
  Deck.Cards.shuffle();
  Deck.renderCards();
  Deck.diagonalAlignCards();


});









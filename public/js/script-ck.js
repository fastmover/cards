suits={Clubs:{id:"clubs",name:"Clubs",unicode:"&clubs;"},Spades:{id:"spades",name:"Spades",unicode:"&spades;"},Hearts:{id:"hearts",name:"Hearts",unicode:"&hearts;"},Diamonds:{id:"diamonds",name:"Diamonds",unicode:"&diams;"}};cards={2:{id:"2",name:"Two"},3:{id:"3",name:"Three"},4:{id:"4",name:"Four"},5:{id:"5",name:"Five"},6:{id:"6",name:"Six"},7:{id:"7",name:"Seven"},8:{id:"8",name:"Eight"},9:{id:"9",name:"Nine"},10:{id:"10",name:"Ten"},j:{id:"j",name:"Jack"},q:{id:"q",name:"Queen"},k:{id:"k",name:"King"},a:{id:"a",name:"Ace"}};Deck={};Deck.Cards=[];zIndex=10;for(suit in suits)for(card in cards){Deck.Cards.push({id:String(suits[suit].id+cards[card].id),name:String(cards[card].name+" of "+suits[suit].name),card:String(cards[card].id),suit:String(suits[suit].id),image:String("cards-"+suits[suit].id+"-"+cards[card].id),z:zIndex});zIndex++}Array.prototype.shuffle=function(){for(var e=this.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=this[e];this[e]=this[t];this[t]=n}return this};Deck.renderCards=function(){zIndex=10;for(Card in Deck.Cards){Deck.Cards[Card].obj=$('<div class="card"><div class="front '+String(Deck.Cards[Card].image)+'" style="z-index: '+zIndex+'" ></div><div class="back cards-back-v-1" style="z-index: '+zIndex+'"></div></div>');jQuery("article").append(Deck.Cards[Card].obj);zIndex++}Deck.clickable()};Deck.verticalAlignCards=function(){cardHeight=$(".card").height();cardPeek=cardHeight/5;cardTop=10;$(".card").each(function(){$(this).css("position","absolute");$(this).css("top",cardTop);cardTop+=cardPeek})};Deck.diagonalAlignCards=function(){cardHeight=$(".card").first().height();cardPeek=cardHeight/5;cardTop=10;$(".card").each(function(){$(this).css("position","absolute");$(this).css("top",cardTop);$(this).css("left",cardTop);cardTop+=cardPeek})};Deck.clickable=function(){$(".card").each(function(){$(this).click(function(){Deck.flipCard(this)});$(this).data("Face","Up")})};Deck.flipCard=function(e){if($(e).data("Face")=="Up"){$(e).css({"-webkit-transform":"rotateX(180deg)"});$(e).data("Face","Down")}else{$(e).css({"-webkit-transform":"rotateX(0deg)"});$(e).data("Face","Up")}};$(function(){$(window).load(function(){Deck.Cards.shuffle();Deck.renderCards();$(".card").imagesLoaded(function(){Deck.diagonalAlignCards()})})});
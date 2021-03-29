$(document).ready(function() {
  // We know we need to make a ".forEach()" loop *inside* of another
  // ".forEach()" loop...

  // We know we can categorize cards as:
  // 1) Every single unique card (52 total) but that takes forever
  // 2) Every *value* of card (Aces to Kings), which is easier
  // 3) Every *suit* of cards (Hearts, Diamonds, etc.), which is easiest

  // We also know we can loop through #2) with #3) or vice versa
  // to get every unique card

  let cardValue = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King"
  ]

  let cardSuit = [
    "Clubs",
    "Diamonds",
    "Hearts",
    "Spades"
  ]

  let deck = []
  cardSuit.forEach(function(name) {
    cardValue.forEach(function(number) {
    deck.push(number + " of " + name)
    })
  })
  // alert(deck[51])

  // We know we want the final result to look like:
  // e.g. Queen + " of " + Spades
  // So, our *final* array with all 52 cards should look like:
  // ["Ace of Spades", "2 of Spades", etc.]

  // Output to HTML <ul> when done
  // Here's the HTML: <ul id="card-list">
  deck.forEach(function(element){
    $("#card-list").append("<li>" + element + "</li>")
  })
})
function playBattleship() {
  var randomLoc = Math.floor(Math.random() * 5);
  var location1 = randomLoc;
  var location2 = location1 + 1;
  var location3 = location2 + 1;

  var hitArray = [];
  console.log(hitArray.length);
  var guess;
  var hits = 0;
  var guesses = 0;

  var isSunk = false;
  while (!isSunk) {
    guess = prompt("Enter the guess (between 0-6) : ");
    if (guess === null) return;
    guess = parseInt(guess);
    // console.log(typeof guess);
    if (guess < 0 || guess > 7) {
      alert("Enter the valid number");
    } else {
      guesses += 1;
      if (guess == location1 || guess == location2 || guess == location3) {
        for (var i = 0; i < hitArray.length + 1; i++) {
          if (guess == hitArray[i]) {
            alert("Already Guessed. Please enter another number");
          } else {
            hitArray.push(guess);
            hits += 1;
          }
        }
        alert("HIT!");
        if (hits == 3) {
          isSunk = true;
          alert("Congratulations!!!! You have sink the ship :)");
        }
      } else {
        alert("MISS");
      }
    }
  }
  var stats =
    "You took " +
    guesses +
    " guesses to sink the battleship, " +
    "which means your shooting accuracy was " +
    3 / guesses;

  alert(stats);
}

// Variables
var diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var winnerArray = ["🚩Player1 Wins!", "🚩Player2 Wins!", "Tie!"];
var randomNum1 = Math.floor(Math.random()*6); //0-5
var randomNum2 = Math.floor(Math.random()*6);//0-5
var leftDice = diceArray[randomNum1];
var rightDice = diceArray[randomNum2];

// Winner Conditions
if (leftDice.charAt(11) > rightDice.charAt(11)) {
  document.querySelector("h1").innerHTML = winnerArray[0];

}else if(rightDice.charAt(11) > leftDice.charAt(11)){
  document.querySelector("h1").innerHTML = winnerArray[1];

}else{
  document.querySelector("h1").innerHTML = winnerArray[2];
}

//Rolling the Dice on every refresh
document.querySelector(".img1").setAttribute("src", leftDice);
document.querySelector(".img2").setAttribute("src", rightDice);

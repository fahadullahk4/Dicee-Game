// First Dice Image
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImageSource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// Second Dice Image
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🎉 Player 1 wins !!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "🎉 Player 2 wins !!";
} else {
  document.querySelector("h1").textContent = "DRAW";
}

var randomnum1 = Math.floor(6 * Math.random()) + 1;
if (randomnum1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (randomnum1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (randomnum1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (randomnum1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (randomnum1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

var randomnum2 = Math.floor(6 * Math.random()) + 1;
if (randomnum2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomnum2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomnum2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomnum2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomnum2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 has won!";
} else if (randomnum1 === randomnum2) {
    document.querySelector("h1").innerHTML = "It's a tie!";
} else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 has won!";
}

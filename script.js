var randomNumber1 = (Math.floor(Math.random()*6) + 1);
var randomNumber2 = (Math.floor(Math.random()*6) + 1);
var randomDiceName1 = "images/dice"+randomNumber1+".png";
var randomDiceName2 = "images/dice"+randomNumber2+".png";

document.querySelector("img.img1").setAttribute("src",randomDiceName1);
document.querySelector("img.img2").setAttribute("src",randomDiceName2);

if (randomNumber1 > randomNumber2) {
    // player one wins 
    document.querySelector("h1").textContent = "⛳Player 1 Wims!";
}else if(randomNumber2 > randomNumber1){
    // player two wims 
    document.querySelector("h1").textContent = "Player 2 Wims!⛳";
}else if(randomNumber1 == randomNumber2){
    // draw 
    document.querySelector("h1").textContent = "Draw!";
}

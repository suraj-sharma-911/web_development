window.onbeforeunload = rollDice();

function rollDice(){
    let dices=["images/one.png", "images/two.png", "images/three.png","images/four.png", "images/five.png","images/six.png"];
    var player1=randomNumberGenerate();
    var player2=randomNumberGenerate();
    if (player1 > player2){
        document.querySelector(".heading").style.fontSize="6rem";
        document.querySelector(".heading").innerHTML="🎲Player 1 Wins";
    }else if(player1 < player2){
        document.querySelector(".heading").innerHTML="Player 2 Wins🎲";
    }
    else{
        document.querySelector(".heading").innerHTML="Draw !";
    }
   //document.querySelector(".img1").src=randomNumberGenerate();
   //document.querySelector(".img2").src=randomNumberGenerate();
   document.querySelector(".img1").setAttribute("src",dices[player1]);
   document.querySelector(".img2").setAttribute("src",dices[player2]);
}
function randomNumberGenerate(){
    var randomNum = Math.round(Math.random()*5);
    return randomNum;
}


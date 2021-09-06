var gamePattern = [];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var level=0;
var started=false;

$(document).keypress (function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function nextSequence(){
    level++;
    userClickedPattern=[];
    $("#level-title").text("level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}


$(".btn").click(function handler(event){
    var userChosenColor;
    //var userChosenColour = $(this).attr("id");    using this keyword

    userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);   
    animatePress("#"+userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length -1);
    //console.log(userClickedPattern);
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("Right");
        if (userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                    nextSequence();
                }, 1000);
        }
    }else{
        $("#level-title").text("Game over. Press any key to restart");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout (function (){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game over. Press any key to restart");
        startOver();
    }
}

function playSound(name){
    var aud = new Audio("sounds/"+name+".mp3");
    aud.play(); 
}

function animatePress(currentColor){
    $(currentColor).addClass("pressed");
    setTimeout ( function(){
        $(currentColor).removeClass("pressed");
    },100);
}

function startOver(){
    gamePattern=[];
    level=0;
    started= false;
}
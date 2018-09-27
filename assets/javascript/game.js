var audioLogic = new Audio('./assets/audio/logic.mp3');
var audioMello = new Audio('./assets/audio/mello.mp3');
var audioZedd = new Audio('./assets/audio/zedd.mp3');
var audioWiz = new Audio('./assets/audio/wiz.mp3');
var audioEminem = new Audio('./assets/audio/eminem.mp3');

var wins = 0;
var wordBank = ["logic", "marshmello", "zedd", "wizkhalifa", "eminem"];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var guessRemaining = 15;
var lettersGuessed = [];
var lettersBlank = [];
var userChoices = ["A", "B", "B", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function wordFlip() {
    for (i = 0; i < currentWord.length; i++) {
        lettersBlank.push("_ ");
        $("#word").text(lettersBlank.join(''));
    }
}
wordFlip();

function reset() {
    wordBank = ["logic", "marshmello", "zedd", "wizkhalifa", "eminem"];
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    guessRemaining = 15;
    lettersGuessed.length = 0;
    lettersBlank.length = 0;
    userChoices = ["A", "B", "B", "D", "E", "F", "G", "H", "I", "J", "K", 
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    $("#word").text(lettersBlank);
    wordFlip();
}

$(document).ready(function() {
    document.onkeyup = function(event) {

        var userGuess = event.key.toUpperCase();

        if (userChoices.indexOf(userGuess) !== -1) {
        
            lettersGuessed.push(userGuess);
            $('#word').html(lettersBlank);
                
            function replaceBlankWithLettersLogic() {
                if (currentWord === wordBank[0] && userGuess === "L") {
                    lettersBlank.splice(0, 1, "L");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[0] && userGuess === "O") {
                    lettersBlank.splice(1, 1, "O");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[0] && userGuess === "G") {
                    lettersBlank.splice(2, 1, "G");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[0] && userGuess === "I") {
                    lettersBlank.splice(3, 1, "I");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[0] && userGuess === "C") {
                    lettersBlank.splice(4, 1, "C");
                    $("#word").text(lettersBlank.join(''));
                } else if (userGuess !== "L" || userGuess !== "O" || userGuess !== "G" || userGuess !== "I" || userGuess !== "C") {
                    guessRemaining--;
                }
            }
            function replaceBlankWithLettersMello() {
                if (currentWord === wordBank[1] && userGuess === "M") {
                    lettersBlank.splice(0, 1, "M");
                    lettersBlank.splice(5, 1, "M");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "A") {
                    lettersBlank.splice(1, 1, "A");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "R") {
                    lettersBlank.splice(2, 1, "R");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "S") {
                    lettersBlank.splice(3, 1, "S");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "H") {
                    lettersBlank.splice(4, 1, "H");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "E") {
                    lettersBlank.splice(6, 1, "E");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "L") {
                    lettersBlank.splice(7, 1, "L");
                    lettersBlank.splice(8, 1, "L");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[1] && userGuess === "O") {
                    lettersBlank.splice(9, 1, "O");
                    $("#word").text(lettersBlank.join(''));
                } else if (userGuess !== "M" || userGuess !== "A" || userGuess !== "R" || userGuess !== "S" || userGuess !== "H" || userGuess !== "E"
                        || userGuess !== "L" || userGuess !== "O") {
                    guessRemaining--;
                }
            }
            function replaceBlankWithLettersZedd() {
                if (currentWord === wordBank[2] && userGuess === "Z") {
                    lettersBlank.splice(0, 1, "Z");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[2] && userGuess === "E") {
                    lettersBlank.splice(1, 1, "E");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[2] && userGuess === "D") {
                    lettersBlank.splice(2, 1, "D");
                    lettersBlank.splice(3, 1, "D");
                    $("#word").text(lettersBlank.join(''));
                } else if (userGuess !== "Z" || userGuess !== "E" || userGuess !== "D") {
                    guessRemaining--;
                }
            }
            function replaceBlankWithLettersWiz() {
                if (currentWord === wordBank[3] && userGuess === "W") {
                    lettersBlank.splice(0, 1, "W");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "I") {
                    lettersBlank.splice(1, 1, "I");
                    lettersBlank.splice(7, 1, "I");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "Z") {
                    lettersBlank.splice(2, 1, "Z");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "K") {
                    lettersBlank.splice(3, 1, "K");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "H") {
                    lettersBlank.splice(4, 1, "H");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "A") {
                    lettersBlank.splice(5, 1, "A");
                    lettersBlank.splice(9, 1, "A");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "L") {
                    lettersBlank.splice(6, 1, "L");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[3] && userGuess === "F") {
                    lettersBlank.splice(8, 1, "F");
                    $("#word").text(lettersBlank.join(''));
                } else if (userGuess !== "W" || userGuess !== "I" || userGuess !== "Z" || userGuess !== "K" || userGuess !== "H" || userGuess !== "A"
                    || userGuess !== "L" || userGuess !== "F") {
                    guessRemaining--;
                }
            }
            function replaceBlankWithLettersEminem() {
                if (currentWord === wordBank[4] && userGuess === "E") {
                    lettersBlank.splice(0, 1, "E");
                    lettersBlank.splice(4, 1, "E");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[4] && userGuess === "M") {
                    lettersBlank.splice(1, 1, "M");
                    lettersBlank.splice(5, 1, "M");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[4] && userGuess === "I") {
                    lettersBlank.splice(2, 1, "I");
                    $("#word").text(lettersBlank.join(''));
                } else if (currentWord === wordBank[4] && userGuess === "N") {
                    lettersBlank.splice(3, 1, "N");
                    $("#word").text(lettersBlank.join(''));
                } else if (userGuess !== "E" || userGuess !== "M" || userGuess !== "I" || userGuess !== "N") {
                    guessRemaining--;
                }
            }

        // guessRemaining reaches 0
            if (guessRemaining === 0) {
                reset();
                alert("You lose.");
                $("#userGuess").text("Letters Guessed: ");
            }
        // currentWord is "logic"
            if (currentWord === wordBank[0] && lettersGuessed.includes("L") && lettersGuessed.includes("O") && lettersGuessed.includes("G") && lettersGuessed.includes("I") && lettersGuessed.includes("C")) {
                wins++;
                $("#image").html('<img id="albumPic" src="./assets/images/logic.jpg"/>');
                audioLogic.play();
                audioMello.pause();
                audioZedd.pause();
                audioWiz.pause();
                audioEminem.pause();
                $("#songtitle").text('"Everyday" by Logic');
                reset();
                $("#userGuess").text("Letters Guessed: ");
            } else if (currentWord === wordBank[0]) {
                replaceBlankWithLettersLogic();
            }
        // currentWord is "marshmello"
            if (currentWord === wordBank[1] && lettersGuessed.includes("M") && lettersGuessed.includes("A") && lettersGuessed.includes("R") && lettersGuessed.includes("S") && lettersGuessed.includes("H") && lettersGuessed.includes("E")
            && lettersGuessed.includes("L") && lettersGuessed.includes("O")) {
                wins++;
                $("#image").html('<img id="albumPic" src="./assets/images/mello.jpg"/>');
                audioLogic.pause();
                audioMello.play();
                audioZedd.pause();
                audioWiz.pause();
                audioEminem.pause();
                $("#songtitle").text('"Alone" by Marshmello');
                reset();
                $("#userGuess").text("Letters Guessed: ");
            } else if (currentWord === wordBank[1]) {
                replaceBlankWithLettersMello();
            }
        // currentWord is "zedd"
            if (currentWord === wordBank[2] && lettersGuessed.includes("Z") && lettersGuessed.includes("E") && lettersGuessed.includes("D")) {
                wins++;
                $("#image").html('<img id="albumPic" src="./assets/images/zedd.jpg"/>');
                audioLogic.pause();
                audioMello.pause();
                audioZedd.play();
                audioWiz.pause();
                audioEminem.pause();
                
                $("#songtitle").text('"Clarity" by Zedd');
                reset();
                $("#userGuess").text("Letters Guessed: ");
            } else if (currentWord === wordBank[2]) {
                replaceBlankWithLettersZedd();
            }
        // currentWord is "wizkhalifa"
            if (currentWord === wordBank[3] && lettersGuessed.includes("W") && lettersGuessed.includes("I") && lettersGuessed.includes("Z") && lettersGuessed.includes("K") && lettersGuessed.includes("H")
            && lettersGuessed.includes("A") && lettersGuessed.includes("L") && lettersGuessed.includes("F")) {
                wins++;
                $("#image").html('<img id="albumPic" src="./assets/images/wiz.jpg"/>');
                audioLogic.pause();
                audioMello.pause();
                audioZedd.pause();
                audioWiz.play();
                audioEminem.pause();
                $("#songtitle").text('"See You Again" by Wiz Khalifa');
                reset();
                $("#userGuess").text("Letters Guessed: ");
            } else if (currentWord === wordBank[3]) {
                replaceBlankWithLettersWiz();
            }
        // currentWord is "eminem"
            if (currentWord === wordBank[4] && lettersGuessed.includes("E") && lettersGuessed.includes("M") && lettersGuessed.includes("I") && lettersGuessed.includes("N")) {
                wins++;
                $("#image").html('<img id="albumPic" src="./assets/images/eminem.jpg"/>');
                audioLogic.pause();
                audioMello.pause();
                audioZedd.pause();
                audioWiz.pause();
                audioEminem.play();
                $("#songtitle").text('"Lighters" by Eminem');
                reset();
                $("#userGuess").text("Letters Guessed: ");
            } else if (currentWord === wordBank[4]) {
                replaceBlankWithLettersEminem();
            }
            $("#guessCounter").text("Guesses Left: " + guessRemaining);
            $("#userWins").text("Wins: " + wins);
            $("#userGuess").append(userGuess + ", ");
        }
    }  
});

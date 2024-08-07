/*var randomclass;
var level = 1;
var rpattern = [];
var upattern = [];
var gameStarted = false;
document.addEventListener("keydown", function(event) {
    if (!gameStarted) {
        $("h1").text("Level 1");
        rpattern = [];
        upattern = [];
        level = 1;
        gameStarted = true;
        randomcolors();
    }
});

function randomcolors() {
    var randomnumber1 = Math.floor(Math.random() * 4);
    if (randomnumber1 == 0) {
        randomclass = ".g";
        $(".green").delay(100).fadeOut().fadeIn();
    } else if (randomnumber1 == 1) {
        randomclass = ".r";
        $(".red").delay(100).fadeOut().fadeIn();
    } else if (randomnumber1 == 2) {
        randomclass = ".y";
        $(".yellow").delay(100).fadeOut().fadeIn();
    } else if (randomnumber1 == 3) {
        randomclass = ".b";
        $(".blue").delay(100).fadeOut().fadeIn();
    }
    rpattern.push(randomclass);
    console.log(randomclass);
}

function sequencecolor(firstcolor) {
    upattern.push("." + firstcolor);
    if (!checkpattern()) {
        $("h1").text("Game Over, Press Any Key to Restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        changePageColor();
        resetGame();
    } else if (upattern.length === rpattern.length) {
        level++;
        $("h1").text("Level " + [level]);
        upattern = [];
        setTimeout(randomcolors, 1000);
    }
}

function checkpattern() {
    for (var m = 0; m < upattern.length; m++) {
        if (upattern[m] !== rpattern[m]) {
            return false;
        }
    }
    return true;
}

function buttonanimated(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}

function changePageColor() {
    document.body.style.backgroundColor = "red";
    setTimeout(function() {
        document.body.style.backgroundColor = "";
    }, 500);
}

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var classes = this.className.split(' ');
        var firstClass = classes[0];
        switch (firstClass) {
            case "g":
                var audio = new Audio("sounds/green.mp3");
                audio.play();
                break;
            case "r":
                var audio = new Audio("sounds/red.mp3");
                audio.play();
                break;
            case "y":
                var audio = new Audio("sounds/yellow.mp3");
                audio.play();
                break;
            case "b":
                var audio = new Audio("sounds/blue.mp3");
                audio.play();
                break;
        }
        buttonanimated(firstClass);
        sequencecolor(firstClass);
    })
}

function resetGame() {
    level = 1;
    gameStarted = false;
    rpattern = [];
    upattern = [];
}*/
var randomclass;
var level = 1;
var rpattern = [];
var upattern = [];
var gameStarted = false;

document.addEventListener("keydown", function(event) {
    if (!gameStarted) {
        $("h1").text("Level 1");
        rpattern = [];
        upattern = [];
        level = 1;
        gameStarted = true;
        randomcolors();
    }
});

function randomcolors() {
    var randomnumber1 = Math.floor(Math.random() * 4);
    if (randomnumber1 == 0) {
        randomclass = "green";
        $(".green").fadeOut(100).fadeIn(100);
    } else if (randomnumber1 == 1) {
        randomclass = "red";
        $(".red").fadeOut(100).fadeIn(100);
    } else if (randomnumber1 == 2) {
        randomclass = "yellow";
        $(".yellow").fadeOut(100).fadeIn(100);
    } else if (randomnumber1 == 3) {
        randomclass = "blue";
        $(".blue").fadeOut(100).fadeIn(100);
    }
    rpattern.push(randomclass);
    console.log(randomclass);
}

function sequencecolor(firstcolor) {
    upattern.push(firstcolor);
    if (!checkpattern()) {
        $("h1").text("Game Over, Press Any Key to Restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        changePageColor();
        resetGame();
    } else if (upattern.length === rpattern.length) {
        level++;
        $("h1").text("Level " + level);
        upattern = [];
        setTimeout(randomcolors, 1000);
    }
}

function checkpattern() {
    for (var m = 0; m < upattern.length; m++) {
        if (upattern[m] !== rpattern[m]) {
            return false;
        }
    }
    return true;
}

function buttonanimated(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}

function changePageColor() {
    document.body.style.backgroundColor = "red";
    setTimeout(function() {
        document.body.style.backgroundColor = "";
    }, 500);
}

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var firstClass = this.classList[1];
        switch (firstClass) {
            case "green":
                var audio = new Audio("sounds/green.mp3");
                audio.play();
                break;
            case "red":
                var audio = new Audio("sounds/red.mp3");
                audio.play();
                break;
            case "yellow":
                var audio = new Audio("sounds/yellow.mp3");
                audio.play();
                break;
            case "blue":
                var audio = new Audio("sounds/blue.mp3");
                audio.play();
                break;
        }
        buttonanimated(firstClass);
        sequencecolor(firstClass);
    });
}

function resetGame() {
    level = 1;
    gameStarted = false;
    rpattern = [];
    upattern = [];
}
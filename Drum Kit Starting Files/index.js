for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonclicked = this.innerHTML;
        makesound(buttonclicked);
        buttonanimated(buttonclicked);
    });
}
document.addEventListener("keydown", function(event) {
    makesound(event.key);
    buttonanimated(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        default:
            console.log(key);
    }
}

function buttonanimated(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}
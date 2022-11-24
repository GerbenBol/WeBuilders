let index = 2;
let opacity = 1;
let increasing = true;
let startString = "assets/img/slideshow/slide";
let endString = ".png";
slideShow();

function slideShow() {
    let img = document.getElementById("img");

    if (increasing) {
        // Fade in
        if (opacity != 100) {
            opacity++;
            img.style.opacity = opacity / 100;
        } else {
            increasing = false;
        }
    } else {
        // Fade out
        if (opacity != 0) {
            opacity--;
            img.style.opacity = opacity / 100;
        } else {
            increasing = true;
            img.src = startString + index + endString;
            index++;

            if (index > 4) {
                index = 1;
            }
        }
    }
    setTimeout(slideShow, 30);
}

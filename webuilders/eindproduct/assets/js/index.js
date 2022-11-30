let index = 2;
let opacity = 1;
let increasing = true;
let startString = "linear-gradient(rgba(34, 105, 1, ";
let secondString = "), rgba(20, 172, 48, ";
let thirdString = ") 50%, rgba(81, 164, 81, 1)), url(assets/images/slideshow/index-bg";
let endString = ".png)";
slideShow();

async function slideShow() {
    let img = document.getElementsByClassName("banner");
    let current = startString + opacity / 100 * 2 + secondString + opacity / 100 + thirdString + index + endString;

    if (increasing) {
        // Fade in
        if (opacity != 100) {
            opacity++;
            img[0].style.backgroundImage = current;
        } else {
            increasing = false;

            if (index < 3) {
                index++;
            } else {
                index = 1;
            }
            img[0].style.backgroundImage = current;
        }
    } else {
        // Fade out
        if (opacity != 25) {
            opacity--;
            img[0].style.backgroundImage = current;
        } else {
            increasing = true;
            await new Promise(r => setTimeout(r, 2000));
        }
    }
    setTimeout(slideShow, 20);
}

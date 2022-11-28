let reviews = [];
setReviews();

async function setReviews() {
    // Don't worry about this part
    await fetch("assets/data/klanten.json")
        .then((r) => r.json())
        .then((d) => fillArray(d));
    
    // Voor elke review het laten zien proces doorlopen
    for (let i = 0; i < reviews.length; i++) {
        createReview(i);
    }
}

function fillArray(data) {
    reviews = data;
}

function createReview(index) {
    let main = document.getElementById("container");
    let review = reviews[index];
    let even;

    // Check of het even of oneven is
    if (index % 2 == 0) {
        even = true;
    } else {
        even = false;
    }

    // Maak nieuwe div voor complete review
    let elem = document.createElement("div");
    elem.className = "review";
    main.appendChild(elem);

    // Voeg text en tussenstuk toe
    if (even) {
        createName(elem, review);
        createVr(elem);
        createText(elem, review);
    } else {
        createText(elem, review);
        createVr(elem);
        createName(elem, review);
    }
}

function createText(review, item) {
    let text = document.createElement("div");
    text.className = "review-text";
    text.innerHTML = item.review;
    review.appendChild(text);
}

function createVr(review) {
    let vr = document.createElement("div");
    vr.className = "vr";
    review.appendChild(vr);
}

function createName(review, item) {
    let name = document.createElement("div");
    name.className = "klant-naam";
    name.innerHTML = item.naam;
    review.appendChild(name);
}

// https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js
// split the practical into two files, one for form + one for journal/showing data

// adds a concert entry to the page

const leftPage = document.querySelector(".left-page");
const rightPage = document.querySelector(".right-page");

let currentConcert = 0;

const concerts = JSON.parse(localStorage.getItem("concerts")) || [];

document.getElementById("next-page")
    .addEventListener("click", nextConcert);

document.getElementById("prev-page")
    .addEventListener("click", previousConcert);

function displayConcert() {

    const concert = concerts[currentConcert];

    if(concerts.length === 0) {
        leftPage.innerHTML = "<h2>no concerts yet</h2>"
        rightPage.innerHTML = "";
        return;
    }

    leftPage.innerHTML =
    `
    <h1> ${concert.tourName}</h1>
    <p>${concert.notes}</p>
    `;
    rightPage.innerHTML =
    `
    <div class="info-card">
        <p><b>Who:</b> ${concert.who}</p>
        <p><b>When:</b> ${concert.when}</p>
        <p><b>Where:</b> ${concert.where}</p>
        <p><b>Rating:</b> ${concert.rating}</p>
    </div>
    <div class="photo-strip">

    ${concert.polImg.map((image, index) =>

        `<div class="polaroid photo-${index + 1}">

            <img src="${image}" class="concert-photo">

        </div>`

    ).join("")}
    </div>
    `;
}

function nextConcert() {
    currentConcert++;
    if(currentConcert >= concerts.length) {
        currentConcert = 0;
    }
    displayConcerts();
}

function previousConcert() {
    currentConcert--;
    if(currentConcert < 0) {
        currentConcert = concerts.length - 1;
    }
    displayConcert();
}

displayConcert();
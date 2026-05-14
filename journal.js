// https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js
// split the practical into two files, one for form + one for journal/showing data

// adds a concert entry to the page
/* 
function addNewConcert(concert) {
    document.getElementById("journal-container").innerHTML +=
    `
        <div class="polaroid">
            <p><b>Who:</b> ${concert.who}</p>
            <p><b>When:</b> ${concert.when}</p>
            <p><b>Where:</b> ${concert.where}</p>
            <p><b>Tour Name:</b> ${concert.tourName}</p>
            <p><b>Rating:</b> ${concert.rating}</p>
            <p><b>Notes:</b> ${concert.notes}</p>
        </div>
        <div class="photo-strip">
            ${concert.polImg.map (image =>
                `<img src="${image}" class="concert-photo">`
            ).join("")}
        </div>
    `
} // need to credit photo-strip code bit

/* same as above, but using for.. of loop instead
let imageHTML = "";
for(const images of concert.polImg) {
    imageHTML += `<img src=""${image}">';
}
*/

const leftPage = document.querySelector(".left-page");
const rightPage = document.querySelector(".right-page");

function addNewConcert(concert) {
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

// loads saved concerts from local storage
function loadSavedConcerts() {
    const existingConcerts = localStorage.getItem("concerts");
    if(existingConcerts !== null) {
        const concerts = JSON.parse(existingConcerts);
        for (const concert of concerts) {
            addNewConcert(concert);
        }
    }
}

// load saved concerts when page loads
loadSavedConcerts();
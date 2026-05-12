// https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js
// split the practical into two files, one for form + one for journal/showing data

// adds a concert entry to the page
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

// takes all images in the array to turn into HTML then combine it into one string


// loads saved concerts from local storage
function loadSavedConcerts() {
    const existingConcerts = localStorage.getItem("concerts");
    if(existingConcerts !== null) {
        concerts = JSON.parse(existingConcerts);
        for (const concert of concerts) {
            addNewConcert(concert);
        }
    }
}

// load saved concerts when page loads
loadSavedConcerts();
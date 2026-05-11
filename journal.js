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
    `
} // add image attribute to this too polImg


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
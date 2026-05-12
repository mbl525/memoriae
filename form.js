// https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js

let concerts = [] // array to store concert objects

// handles form submission & creates a new concert object
async function createConcert(event) {
    event.preventDefault();

    const imageFiles = document.getElementById("polImg") .files;

    const savedImages = [];

    for (let i = 0; i < imageFiles.length && i < 3; i++) {
        const imageData = await readImage(imageFiles[i]);
        savedImages.push(imageData);
    }

    const newConcert = {
        who: document.getElementById("who").value,
        when: document.getElementById("when").value,
        where: document.getElementById("where").value,
        tourName: document.getElementById("tourName").value,
        rating: document.getElementById("rating").value,
        notes: document.getElementById("notes").value,
        polImg: savedImages
    };
    
    // addNewConcert(newConcert);

    concerts.push(newConcert);

    saveConcerts();

    window.location.href = "journal.html"

    document.getElementById("concert-form").reset;
}

// credit: stack overflow! https://stackoverflow.com/questions/63198902/resolve-promises-one-after-another-for-previewing-image-on-upload
function readImage(file) {
    return new Promise(function(resolve) {
        const reader = new FileReader();
        reader.onload = function(event) {
            resolve(event.target.result);
        };
        reader.readAsDataURL(file);
    });
}

// saves concerts array to local storage
function saveConcerts() {
    localStorage.setItem("concerts", JSON.stringify(concerts));
}

// add event listener
document.getElementById("submit").addEventListener("click", e => createConcert(e));
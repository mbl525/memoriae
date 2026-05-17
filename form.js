/* 
This code is based upon WADD W8L1 example on Storing and Displaying Data Locally
Author: ace01603
Location: https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js
Accessed: 12.05.2026

This code also includes a function based upon a combinatino of MangoHost and Gemini
Author: MangoHost and Gemini
Location: https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js
Accessed: 12.05.2026
*/

let concerts = JSON.parse(localStorage.getItem("concerts")) || [];

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
    concerts.push(newConcert);
    saveConcerts();
    window.location.href = "journal.html"
    document.getElementById("concert-form").reset;
}

// The following function is based on a combination of MangoHost's Tutorial and Gemini
function readImage(file) {
    return new Promise(function(resolve) {
        const reader = new FileReader();
        reader.onload = function(event) {
            resolve(event.target.result);
        };
        reader.readAsDataURL(file);
    });
}
// End of Mango Host and Gemini usage

// saves concerts as an array to local storage
function saveConcerts() {
    localStorage.setItem("concerts", JSON.stringify(concerts));
}

document.getElementById("submit").addEventListener("click", e => createConcert(e));
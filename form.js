// https://github.com/IM-WADD/Lecture-Examples/blob/main/Lectures/W8Lecture1/storeClocksComplete/main.js

let concerts = [] // array to store concert objects

// handles form submission & creates a new concert object
function createConcert(event) {
    event.preventDefault();

    const newConcert = {
        who: document.getElementById("who").value,
        when: document.getElementById("when").value,
        where: document.getElementById("where").value,
        tourName: document.getElementById("tourName").value,
        rating: document.getElementById("rating").value,
        notes: document.getElementById("notes").value,
        polImg: document.getElementById("polImg").value
    };
    
    // addNewConcert(newConcert);

    concerts.push(newConcert);

    saveConcerts();

    window.location.href = "journal.html"

    document.getElementById("concert-form").reset;
}

// saves concerts array to local storage
function saveConcerts() {
    localStorage.setItem("concerts", JSON.stringify(concerts));
}

// add event listener
document.getElementById("submit").addEventListener("click", e => createConcert(e));

/*
file.El.addEventListener('change', () => {
    const fr = new FilerReader();
    fr.readAsDataURL(fileEl.files[0]);
    fr.addEventListener("load", () => {
        const url = fr.result;
        
        localStorage.setItem('my-image', url);
    });
});
*/
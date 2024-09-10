// Conteúdo para iniciar o site já mostrando a div "content1"
if (!window.location.hash) {
    window.location.hash = "#content1";
}



const contents = ["content1", "content2", "content3", "content4", "content5"];
const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

function updateArrows() {
    const currentHash = window.location.hash.replace("#", "");
    const currentIndex = contents.indexOf(currentHash);

    // Set previous arrow href
    if (currentIndex > 0) {
        prevArrow.href = "#" + contents[currentIndex - 1];
    } else {
        prevArrow.href = "#" + contents[contents.length - 1];
    }

    // Set next arrow href
    if (currentIndex < contents.length - 1) {
        nextArrow.href = "#" + contents[currentIndex + 1];
    } else {
        nextArrow.href = "#" + contents[0];
    }
}


// Initialize arrows on page load
window.addEventListener("load", updateArrows);

// Update arrows when hash changes
window.addEventListener("hashchange", updateArrows);




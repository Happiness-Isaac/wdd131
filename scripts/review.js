const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`


let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("counter").innerHTML = `You've submitted <span class="review-count">${count}</span> reviews.`;// Get current review count from localStorage
let reviewCount = localStorage.getItem("reviewCount");

// If it doesn't exist, start at 0
if (reviewCount === null) {
    reviewCount = 0;
}

// Convert to number and increment
reviewCount = Number(reviewCount) + 1;

// Save back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display on page
document.getElementById("submission-count").textContent = reviewCount;


// Footer year + last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

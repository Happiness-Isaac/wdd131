const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;
const yearSpan = document.querySelector("#currentYear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;


const temperature = 18; 
const windSpeed = 18;


document.querySelector("#temperature").textContent = temperature;
document.querySelector("#windSpeed").textContent = windSpeed;



function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";


if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

document.querySelector("#windChill").textContent = windChill;
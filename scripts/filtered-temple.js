//CURRENT DATE AND LAST MODIFICATION

const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.innerHTML = today.getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;


// HAMBURGER CLICK

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


// ARRAYS OF TEMPLE OBJECTS

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Memphis Tennessee Temple",
        location: "Tennessee, United States",
        dedicated: "1983, December, 2",
        area: 10890,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/memphis-tennessee-temple/memphis-tennessee-temple-4471.jpg"
    },
    {
        templeName: "Reno Nevada Temple",
        location: "Nevada, United States",
        dedicated: "2000, April, 23",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/reno-nevada-temple/reno-nevada-temple-5681-main.jpg"
    },
    {
        templeName: "Cochabamba Bolivia Temple",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
    },
    {
        templeName: "Buenos Aires Argentina Temple",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 19",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "Frankfurt Germany Temple",
        location: "Friedrichsdorf/TS, Germany",
        dedicated: "1987, August, 30",
        area: 328950,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
    },
];


// CARD CREATION


function createTempleCard(filteredTemples) {
    const grid = document.querySelector(".gallery");
    grid.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");


        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Size: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;


        grid.appendChild(card);
    });
}


//FILTERING


function filterTemples(type) {
    let filtered = [];

    switch (type) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated) < new Date(1900, 0, 1));
            break;

        case "new":
            filtered = temples.filter(t => new Date(t.dedicated) > new Date(2000, 0, 1));
            break;

        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;

        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;

        default:
            filtered = temples;
    }

    createTempleCard(filtered);
}


// NAVIGATION EVENTS


document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const text = e.target.textContent.toLowerCase();
        filterTemples(text);
        document.querySelector("h1").textContent = e.target.textContent;
    });
});


// INITIAL LOAD


createTempleCard(temples);



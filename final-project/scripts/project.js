// ================= DARK MODE TOGGLE =================
const toggleButton = document.getElementById("toggle-mode");

if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark);
        toggleButton.setAttribute('aria-pressed', isDark);
    })
}

// Apply saved preference
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleButton.setAttribute('aria-pressed', true);
}

// ================= FEEDBACK FORM HANDLING =================
const feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect values into an object
    const feedback = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        date: new Date().toLocaleString()
    };

    // Store in localStorage array
    let feedbackArr = JSON.parse(localStorage.getItem("feedback")) || [];
    feedbackArr.push(feedback);
    localStorage.setItem("feedback", JSON.stringify(feedbackArr));

    alert(`Thanks, ${feedback.name}! Your feedback has been saved.`);
    feedbackForm.reset();
});






const studyTips = [
    {
        tipName: "Pomodoro Technique ⏳",
        para: "Study for 25 mins, take a 5-min break. Boost your productivity!"
    },

    {
        tipName: "Active Recall 🧠",
        para: "Test yourself instead of just reading – it improves memory."
    },

    {
        tipName: "Mind Mapping 🗺️",
        para: "Visualize concepts and make connections easily."
    }
];

function displayTips(studyTips) {
    const tipContainer = document.getElementById("featured-tips");
    studyTips.forEach((tip) => {
        let card = document.createElement("div")
        card.classList.add("tip-card")
        card.innerHTML = `
        <h3>${tip.tipName}</h3>
        <p>${tip.para}</p>
        `
        tipContainer.appendChild(card)
    });
}

displayTips(studyTips);

const form = document.getElementById('myForm');
const message = document.getElementById('success-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    message.style.display = 'block';
    form.reset();
    form.querySelector('input').focus();
});



// 
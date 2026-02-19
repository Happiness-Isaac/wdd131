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

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
};


const studyTips = [
    {
        tipName: "Preview Before Class 👀",
        para: "Skim readings, check MyCourses, and look for new vocabulary before class so lectures feel familiar instead of overwhelming."
    },

    {
        tipName: "Ask & Create Questions ❓",
        para: "Write questions before, during, and after class. Thinking like the professor strengthens understanding and retention."
    },

    {
        tipName: "Clean Up Notes ASAP ✍️",
        para: "Rewrite and organize your notes right after class while information is still fresh in your mind."
    },

    {
        tipName: "Use the Pomodoro Technique ⏳",
        para: "Study in focused 25-minute sessions followed by short breaks to improve concentration and avoid burnout."
    },

    {
        tipName: "Utilize Flashcards 🎴",
        para: "Instead of a complex paragraph, create multiple, simpler cards to explain the concept in pieces.."
    },

    {
        tipName: "Break Tasks into Smaller Steps 🧩",
        para: "Large assignments feel less stressful when divided into manageable pieces with clear deadlines."
    },

    {
        tipName: "Active Recall 🧠",
        para: "Test yourself regularly instead of just rereading notes."
    },

    {
        tipName: "Mind Mapping 🤯",
        para: "Visualize connections between ideas to understand concepts more deeply."
    },

    {
        tipName: "Think Like the Professor 🎯",
        para: "Ask yourself: What are the key concepts? What might appear on an exam? What connections matter most?"
    },

    {
        tipName: "Review Weekly, Not Just Before Exams 📆",
        para: "Regular review of notes and readings prevents cramming and strengthens long-term memory."
    },

    {
        tipName: "Eliminate Digital Distractions 📵",
        para: "Silence notifications, close extra tabs, and create a focused study environment."
    },

    {
        tipName: "Sleep On It 😴",
        para: "Rest strengthens memory consolidation. Studying without sleep reduces performance."
    }
];

const tipContainer = document.getElementById("featured-tips");

studyTips.forEach(tip => {
    const card = document.createElement("article");
    card.classList.add("tip-card");

    card.innerHTML = `
        <h3>${tip.tipName}</h3>
        <p>${tip.para}</p>
    `;

    tipContainer.appendChild(card);
});







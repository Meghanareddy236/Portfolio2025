
// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Active Nav Link
const sections = document.querySelectorAll('.section');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Section Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        form.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Chat Functionality
const chatBubble = document.querySelector('.chat-bubble');
const chatModal = document.querySelector('.chat-modal');
const chatClose = document.querySelector('.chat-close');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

chatBubble.addEventListener('click', () => {
    chatModal.classList.toggle('active');
});

chatClose.addEventListener('click', () => {
    chatModal.classList.remove('active');
});

// Predefined question-answer pairs based on portfolio
const qaPairs = [
    {
        questions: ["hi", "hii", "hiii", "hello", "helloo", "hii there", "hi there", "holla", "holaa", "hiee"],
        answer: "Hi there ! Hope you are having a good day.Let me know , what you want to know about meghana."

    },
    {
        questions: ["who are you?", "i want to know about Meghana", "tell me about meghana?", "tell me about meghana", "about meghana", "who is Meghana?", "who is Meghana"],
        answer: "I'm Dakkata Meghana, a final year B.Tech student in Computer Science & Engg (Data Science) at CMR Institute of Technology. passionate about AI and ML, with experience in Python and hands-on projects. she enjoy reading books and playing chess in her free time."
    },
    {
        questions: ["what projects have you worked on", "what are your projects?", "tell me about your projects", "projects", "what are your projects"],
        answer: "I've worked on several projects, including CognixAI, a personal AI assistant built with Python, PyQt, and Hugging Face API; Dialogue Digest, a web app for summarizing conversation-style text using NLP with the Pegasus model; and a Brain Stroke Prediction System, a machine learning model built with Python and scikit-learn."
    },
    {
        questions: ["what is cognixai?", "tell me about cognixai", "what is cognixai", "cognixai", "which teck stack used in cognixai"],
        answer: "CognixAI is a personal AI assistant I built using Python, PyQt, and Hugging Face API. It helps with daily tasks and queries in real time, leveraging AI to provide efficient assistance."
    },
    {
        questions: ["what is dialogue digest", "which techstack u used in dialogue digest", "tell me about dialogue digest", "what is dialogue digest", "dialogue digest"],
        answer: "Dialogue Digest is a web app I developed using Python, Flask, and NLP with the Pegasus model. It summarizes conversation-style text, making it easier to extract key points from dialogues."
    },
    {
        questions: ["what is brain stroke prediction", "what teckstack you used in brain stroke prediction project?", "tell me about brain stroke prediction", "brain stroke prediction"],
        answer: "The Brain Stroke Prediction System is a machine learning model I created using Python and scikit-learn. It predicts the likelihood of a brain stroke based on patient data, aiming to support early detection."
    },
    {
        questions: ["what certifications do you have", "tell me about your certifications", "certifications"],
        answer: "I have several certifications: PwC Launchpad Program – ERP (Feb 2025 - July 2025), covering IT Fundamentals, Java, RDBMS, SAP, and Salesforce; Azure AI Fundamentals – AI-900 (Microsoft certified, June 2025); Career Essentials in Generative AI (LinkedIn Learning, June 2025); and SQL Intermediate (Hackerrank, July 2025)."
    },
    {
        questions: ["what skills do you have", "tell me about your skills", "skills"],
        answer: "I have hands-on experience in Python, NLP, machine learning, and SQL.I'm familiar with AI services like Hugging Face and Azure AI."
    },
    {
        questions: ["what are your hobbies", "hobbies"],
        answer: "Outside of tech, I enjoy reading books and playing chess, which help keep me engaging and creative."
    },
    {
        questions: ["how can I contact you", "contact details", "how can i contact Meghana", "I want to talk to meghana"],
        answer: "You can reach me via email at   dakkatameghanareddy@gmail.com  , or connect with me on GitHub (Meghanareddy236) or LinkedIn (meghanareddy236)."
    },
    {
        questions: ["what is shefi?", "what is shefi?", "what is the shefi scholarship", "are you a shefi scholar", "tell me about shefi"],
        answer: "Yes, I was selected as a SheFi Scholar for Cohort 15. SheFi is a global Web3 learning initiative focused on empowering women and non-binary individuals in blockchain, crypto, DeFi, and NFTs."
    },
    {
        questions: ["why did you choose ai", "why are you interested in ai/ml", "what inspired your interest in machine learning"],
        answer: "I've always been fascinated by how machines can learn from data and solve real-world problems. AI and ML offer endless possibilities—from personalized assistants to healthcare innovation—and I love building solutions that make technology more intelligent and accessible."
    },
    {
        questions: ["what tech stack did you use for this portfolio", "which technologies did you use to build this site", "how was your portfolio built"],
        answer: "This portfolio was built using HTML, CSS, and JavaScript with responsive design principles. I used hover effects, scroll animations, and dark/light mode toggles to enhance user experience. The code is hosted on GitHub and deployed using GitHub Pages."
    },
    {
        questions: ["what is your favorite book", "recommend a book", "what do you like to read", "favourite book"],
        answer: "'Atomic Habits' by James Clear is one of my favorite books. It taught me how small daily improvements can lead to big long-term changes. I also enjoy tech blogs, research papers, and LinkedIn articles to stay updated."
    },
    {
        questions: ["what are your future goals", "what do you want to do after graduation", "what are your career goals", "goals", "your goals"],
        answer: "I aim to become an AI/ML developer and contribute to impactful projects in natural language processing, healthcare AI, or ethical tech. I'm also passionate about tech education and hope to mentor others as I grow."
    },
    {
        questions: ["what is your strength", "what makes you different", "what is your unique quality"],
        answer: "I’m a strong self-learner with a growth mindset. I take initiative to explore new tools, build projects end-to-end, and always find ways to improve. My blend of technical knowledge and communication skills helps me collaborate effectively and deliver practical results."
    }







];

function sendMessage() {
    const userInput = chatInput.value.trim().toLowerCase();
    if (!userInput) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `<div class="message-content">${chatInput.value}</div>`;
    chatBody.appendChild(userMessage);

    // Default response
    let response = "Sorry, I don't have an answer for that. Try asking about my projects, certifications, or skills!";

    // Search for a match
    for (const qa of qaPairs) {
        for (const question of qa.questions) {
            // Normalize both strings
            if (userInput.includes(question.toLowerCase())) {
                response = qa.answer;
                break;
            }
        }
        if (response !== "Sorry, I don't have an answer for that. Try asking about my projects, certifications, or skills!") break;
    }

    // Add bot response
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';
    botMessage.innerHTML = `<div class="message-content">${response}</div>`;
    chatBody.appendChild(botMessage);

    // Reset input
    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Allow sending message with Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
// Resume Modal Logic
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeBtn = resumeModal.querySelector(".close");

resumeBtn.addEventListener("click", () => {
    resumeModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    resumeModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === resumeModal) {
        resumeModal.style.display = "none";
    }
});

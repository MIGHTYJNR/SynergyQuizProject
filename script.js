// Quiz Questions
let questions = [
    {
        question: "In which year did the Titanic sink?",
        answers: ["1912", "1905", "1920", "1898"],
        correctAnswer: 0,
        explanation: "The Titanic sank on 15 April 1912 after striking an iceberg on her maiden voyage from Southampton, England, to New York City, United States."
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2,
        explanation: "The Mona Lisa was painted by Leonardo da Vinci in the 16th century and is now displayed at the Louvre Museum."
    },
    {
        question: "Which position does a goalkeeper play in football?",
        answers: ["Forward", "Midfielder", "Defender", "Goalkeeper"],
        correctAnswer: 3,
        explanation: "The goalkeeper's main role is to stop the opposing team from scoring by blocking shots, headers, and crosses."
    },
    {
        question: "Which gas is used as cooking gas?",
        answers: ["Oxygen", "Liquefied petroleum gas", "Carbon Dioxide", "Helium"],
        correctAnswer: 1,
        explanation: "Liquefied petroleum gas (LPG), also known as 'cooking gas,' is commonly used for domestic and industrial purposes."
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
        correctAnswer: 2,
        explanation: "Mount Everest's peak is the highest altitude above mean sea level, reaching 29,029 feet (8,848 meters)."
    },
    {
        question: "In which sport would you perform a slam dunk?",
        answers: ["Soccer", "Basketball", "Volleyball", "Tennis"],
        correctAnswer: 1,
        explanation: "A slam dunk is a basketball move where a player jumps and forces the ball through the hoop."
    },
    {
        question: "Which country is known as the land of the rising sun?",
        answers: ["Japan", "Brazil", "Nigeria", "China"],
        correctAnswer: 0,
        explanation: "Japan is called the 'land of the rising sun' because its name in Japanese, 'Nihon' or 'Nippon,' means 'origin of the sun.'"
    },
    {
        question: "Which food item never spoils?",
        answers: ["Bread", "Cereal", "Honey", "Beans"],
        correctAnswer: 2,
        explanation: "Honey has a low moisture content and high acidity, making it resistant to bacteria and microorganisms, which is why it never spoils."
    },
    {
        question: "Which color is not in the rainbow?",
        answers: ["Red", "Black", "Blue", "Violet"],
        correctAnswer: 1,
        explanation: "The colors of the rainbow include red, orange, yellow, green, blue, indigo, and violet. Black is not one of them."
    },
    {
        question: "What is the largest organ in the body?",
        answers: ["Liver", "Kidney", "Heart", "Skin"],
        correctAnswer: 3,
        explanation: "The skin is the body's largest organ, providing a protective barrier while allowing flexibility and movement."
    },
    {
        question: "What is the primary function of the mitochondria?",
        answers: ["Protein synthesis", "Cell division", "Energy production", "Waste removal"],
        correctAnswer: 2,
        explanation: "Mitochondria are known as the 'powerhouses' of the cell, responsible for producing energy through the process of cellular respiration."
    },
    {
        question: "What is the process by which plants release oxygen?",
        answers: ["Respiration", "Photosynthesis", "Decomposition", "Fermentation"],
        correctAnswer: 1,
        explanation: "During photosynthesis, plants convert sunlight, water, and carbon dioxide into glucose and oxygen, releasing oxygen into the atmosphere."
    },
    {
        question: "Which animal group includes lions, tigers, and bears?",
        answers: ["Herbivores", "Carnivores", "Omnivores", "Mammals"],
        correctAnswer: 1,
        explanation: "Lions, tigers, and bears are all carnivores, animals that primarily eat meat."
    },
    {
        question: "What is the largest moon in our solar system?",
        answers: ["Ganymede", "Titan", "Callisto", "Europa"],
        correctAnswer: 0,
        explanation: "Ganymede, a moon of Jupiter, is the largest moon in our solar system, even bigger than the planet Mercury."
    },
    {
        question: "What is the world's largest desert?",
        answers: ["Gobi", "Mojave", "Sahara", "Atacama"],
        correctAnswer: 2,
        explanation: "The Sahara Desert, located in North Africa, is the largest hot desert in the world, spanning over 9 million square kilometers."
    },
    // True/False questions
    {
        question: "The Earth is flat.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "The Earth is not flat. Scientific evidence from centuries of observation shows that the Earth is spherical."
    },
    {
        question: "Humans breathe oxygen.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "Humans rely on oxygen for respiration, where oxygen is absorbed by the lungs and used to produce energy."
    },
    {
        question: "Radiation transfers thermal energy.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "Radiation transfers energy in the form of electromagnetic waves, and it can transfer thermal energy without needing a medium."
    },
    {
        question: "The process of converting liquid to gas is called condensation.",
        answers: ["True", "False"],
        correctAnswer: 1,
        explanation: "The process of converting liquid to gas is called evaporation or boiling, not condensation. Condensation is the opposite process, where gas turns into liquid."
    },
    {
        question: "Speed is measured in meters per second.",
        answers: ["True", "False"],
        correctAnswer: 0,
        explanation: "Speed is a measure of how fast an object is moving and is typically measured in meters per second (m/s) in the metric system."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// Brings out only the start quiz button in the start-box when the page loads
window.onload = function() {
    document.getElementById("start-box").style.display = "block";
    document.getElementById("question-box").style.display = "none";
    document.getElementById("result-box").style.display = "none";
    document.getElementById("progress-bar").style.display = "none";
};

function startQuiz() {
    document.getElementById("start-box").style.display = "none";
    document.getElementById("question-box").style.display = "block";
    document.getElementById("progress-bar").style.display = "block";
    displayQuestion();
}

// Function to show the current question
function displayQuestion() {
    resetTimer();
    updateProgressBar();

    let questionObj = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    document.getElementById("feedback").innerText = ""; // Clear feedback
    
    let buttons = document.getElementsByClassName("answer-button");
    
    // Logic to show only relevant buttons(options) for the current question
    if (questionObj.answers.length === 2) {
        // True/False question (only 2 options)
        for (let i = 0; i < buttons.length; i++) {
            if (i < 2) {
                buttons[i].innerText = questionObj.answers[i];
                buttons[i].style.display = "block"; // Show only two buttons
                buttons[i].disabled = false; // Enable buttons
            } else {
                buttons[i].style.display = "none"; // Hide the rest
            }
        }
    } else {
        // Multiple-choice question (4 options)
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerText = questionObj.answers[i];
            buttons[i].style.display = "block"; // Show all four buttons
            buttons[i].disabled = false; // Enable buttons
        }
    }

    document.getElementById("next-button").style.display = "none";
}

// Timer functions
function startTimer() {
    timeLeft = 15;
    document.getElementById("time-left").innerText = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion(); // Automatically move to the next question
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Handle answer selection
function selectAnswer(answerIndex) {
    clearInterval(timer);
    let correctIndex = questions[currentQuestionIndex].correctAnswer;
    let feedbackContent = document.getElementById("feedback");
    
    if (answerIndex === correctIndex) {
        score++;
        feedbackContent.innerHTML = `<span style="color: green;">Correct!</span> ${questions[currentQuestionIndex].explanation}`;
    } else {
        feedbackContent.innerHTML = `<span style="color: red;">Wrong.</span> ${questions[currentQuestionIndex].explanation}`;
    }

    // Disable all buttons after single selection because of the feedback
    let buttons = document.getElementsByClassName("answer-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.getElementById("next-button").style.display = "block";
}

// Move to the next question or show the result
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// Progress bar update
function updateProgressBar() {
    let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;
}

// Show the quiz result
function displayResult() {
    clearInterval(timer);
    document.getElementById("question-box").style.display = "none";
    document.getElementById("progress-bar").style.display = "none";
    document.getElementById("result-box").style.display = "block";

    document.getElementById("score-overall").innerText = `Your Score: ${(Math.round((score / questions.length) * 100 * 100) / 100).toFixed(0)} %`;
    document.getElementById("score").innerText = `You scored ${score} out of ${questions.length}`;

    let correctAnswersElement = document.getElementById("correct-answers");
    correctAnswersElement.innerHTML = questions.map((q, index) => {
        const userAnswerCorrect = index < currentQuestionIndex && questions[index].correctAnswer === q.correctAnswer;
        const feedbackClass = userAnswerCorrect ? "correct" : "wrong";

        return `
            <p class="${feedbackClass}">
                <strong>${index + 1}. ${q.question}</strong> <br>
                Correct Answer: ${q.answers[q.correctAnswer]}
            </p>
        `;
    }).join('');
}

// Restart the quiz and redirect to the index page
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    window.location.href = "quiz.html"; 
}

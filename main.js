const quizApp = document.getElementById("quizApp");
const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextButton = document.querySelector("button");

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionDiv.textContent = currentQuestion.question;

  optionsDiv.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    alert("Correct!");
  } else {
    alert(`Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`);
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    alert("Congratulations! You completed the quiz.");
    resetQuiz();
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  loadQuestion();
}

// Initial load
loadQuestion();

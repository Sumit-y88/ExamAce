
//array of questions
 const quizDB = [
  {
    question: "Which of the following is the correct formula for the area of a circle?",
    options: ["πr²", "2πr", "πd", "r²/π"],
    answer: "πr²"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "Which gas makes up approximately 78% of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answer: "Nitrogen"
  },
  {
    question: "Who wrote the novel '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    answer: "George Orwell"
  },
  {
    question: "What is the square root of 196?",
    options: ["13", "14", "15", "16"],
    answer: "14"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    answer: "1945"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific"
  },
  {
    question: "Which element has the chemical symbol 'Au'?",
    options: ["Silver", "Gold", "Aluminum", "Argon"],
    answer: "Gold"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");
const resultbox = document.getElementById("result-box");
const counter = document.getElementById("QuestionNo");

function loadQuestion() {
  const current = quizDB[currentQuestion];
  questionEl.textContent = current.question;

  optionsEl.innerHTML = "";
  current.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="answer" value="${option}"/> ${option}</label>`;
    optionsEl.appendChild(li);
  });

  
  counter.textContent = ` ${currentQuestion + 1} of ${quizDB.length}`;
}

function getSelected() {
  const answers = document.getElementsByName("answer");
  for (let ans of answers) {
    if (ans.checked) return ans.value;
  }
  return null;
}

submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected === quizDB[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizDB.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `<h1>You scored ${score} out of ${quizDB.length}</h1>`;
  }
});

loadQuestion();

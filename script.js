const questions =[
    {
        question: "what is the capital of france",
        options: ["Paris","Berlin","Madrid","Rome"],
        answer: "Paris"
    },
    {
        question: "what language runs in a browser?",
        options: ["Python","C","JavaScript","Java"],
        answer: "JavaScript",
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Display Output Mode", "Data Object Map", "None"],
        answer: "Document Object Model",
    },
];

let currentQuetsion =0;
let score = 0;
const  questionE1 = document.getElementById("question");
const optionsE1 = document.getElementById("options");
const resultE1 = document.getElementById("result");

function showQuestion(){
    const q = questions[currentQuestion];
    questionE1.textContent = q.question;
    optionsE1.innerHTML = "";
    resultE1.innerHTML = "";

    q.options.forEach(option =>{
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click",()=> checkAnswer(option));
        optionsE1.appendChild(btn);
    });
}
function checkAnswer(selected){
    const correct = questions[currentQuetsion].answer;
    if(selected === correct){
        score++;
        resultE1.textContent = "✅ Correct!";
    }
    else{
        resultEl.textContent = `❌ Wrong! Correct: ${correct}`;
    }
    currentQuestion++;
    if(currentQuestion < questions.length){
        setTimeout(showQuestion, 1000);
    }
    else {
        setTimeout(showQuestion, 1000);
    }
}

function showScore() {
  questionEl.textContent = `Quiz Completed 🎉`;
  optionsEl.innerHTML = "";
  resultEl.textContent = `Your score: ${score}/${questions.length}`;
}
document.addEventListener("DOMContentLoaded", () => {
  showQuestion();
});


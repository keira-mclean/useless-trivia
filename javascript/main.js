(function(){

function buildQuiz() {
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
            const choices = [];
            for (answer in currentQuestion.choices) {
                choices.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${answer}">
                      ${answer} :
                      ${currentQuestion.choices[answer]}
                      </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${choices.join('')} </div>`
            );
        }
    );

    quiz.innerHTML = output.join('');
}

function showResults() {
    const answerResults = quiz.querySelectorAll('.answers');

    let numCorrect = 0;

    questions.forEach ((currentQuestion, questionNumber) => {
        const answerResult = answerResults[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerResult.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correct) {
        numCorrect++;

        answerResults[questionNumber].style.color = 'lightgreen';
        } else {
            answerResults[questionNumber].style.color = 'red';
        }
    });
    results.innerHTML = `${numCorrect} out of ${questions.length}`;
}

const quiz = document.getElementById("quiz");
const submit = document.getElementById("submit");
const results = document.getElementById("results");

const questions = [
    {
        question: "What is CSS?",
        choices: {
            a: "Cascading Style Sheets",
            b: "Crazy Sarcastic Sister",
            c: "Create Stylish System",
            d: "Container System Style"
        },
        correct: "a"
    },
    {
        question: "What is HTML?",
        choices: {
            a: "Huge Text Markup Language",
            b: "HyperText Markup Language",
            c: "Hard To Melt Liquid",
            d: "Help Text Multi Language"
        },
        correct: "b"
    }
];

buildQuiz();

submit.addEventListener("click", showResults);

})();
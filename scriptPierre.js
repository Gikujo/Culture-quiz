//javascript
/*************************/
/*       Questions       */
/*************************/

const questions = [
    {
        // Texte de la question
        question:
            "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
        // Réponses possibles
        answers: [
            "Darth Vader",
            "Anakin Skywalker",
            "Les deux réponse",
            "Aucune réponse",
        ],
        // Index de la réponse correcte
        correctAnswerIndex: 2,
    },
    {
        question:
            'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
        answers: ["1967", "1974", "1962", "1980"],
        correctAnswerIndex: 0,
    },
    {
        question:
            'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
        answers: ["Zelda", "Ganon", "Tom", "Link"],
        correctAnswerIndex: 3,
    },
    {
        question:
            "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
        answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
        correctAnswerIndex: 2,
    },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

const questionEl = document.querySelector('#question');
const answersEl = document.querySelector('#answers');
const scoreEl = document.querySelector('#score');
const resultContainer = document.querySelector('.answer-container');

let score = 0;
let currentQuestion = 0;

let currentAnswer = questions[currentQuestion].answers;
let indexQuestion = questions[currentQuestion].question;


function loadQuizz() {
    deleteAnswer();
    const currentQuizData = questions[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    for (let i = 0; i < currentQuizData.answers.length; i++) {
        answersEl.innerHTML += `<li class="answer">${currentQuizData.answers[i]}</li>`;
    }
    scoreEl.innerHTML = `${score} / 4`;
    let answersList = document.querySelectorAll('.answer');
    for (let i = 0; i < answersList.length; i++) {
        answersList[i].addEventListener("click", () => {

            if (currentAnswer.indexOf(currentAnswer[i]) === currentQuizData.correctAnswerIndex) {
                score++;
                scoreEl.innerHTML = `${score} / 4`;

            }
            currentQuestion++;

            if (currentQuestion < questions.length) {
                loadQuizz();
            }
            else {
                deleteAnswer();
                questionEl.innerHTML = 'Bravo vous avez terminé';
            }
        }
        );
    }
}
function deleteAnswer() {
    questionEl.innerHTML = '';
    answersEl.innerHTML = '';
}
document.addEventListener("DOMContentLoaded", () => {

    loadQuizz();

});
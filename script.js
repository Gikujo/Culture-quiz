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
      "Les deux réponses",
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
const answerListEl = document.querySelector('#answers');
const resultContainerEl = document.querySelector('#result-container');
const scoreEl = document.querySelector('#score');
let questionIndex = 0;
let score = 0;


function repondreQuestion(reponse) {
  console.log(reponse);

  if (reponse == questions[questionIndex].correctAnswerIndex) {
    score++;
  }

  questionIndex++;

  afficherQuestion(questionIndex);
}


function afficherQuestion(questionIndex) {

  if (questionIndex == 4) {
    questionEl.innerHTML = "Merci d'avoir répondu :-)";
    answerListEl.innerHTML = "";

    scoreEl.innerHTML = score;
  } else {

    questionEl.innerHTML = questions[questionIndex].question;

    let html = '';
    let answerIndex = 0;

    questions[questionIndex].answers.forEach(answer => {
      html += `<li class="answer" id="${answerIndex}" onclick="repondreQuestion(${answerIndex})">${answer}</li>`
      answerIndex++;
    })
    answerListEl.innerHTML = html;

    scoreEl.innerHTML = score;
  }

}

afficherQuestion(questionIndex);

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {

  // démarrage du quizz

});
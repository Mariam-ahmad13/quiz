var myQuestions = [
    { question: "What is the capital city of Turkey",
        answers: {
            a: "Istanbul",
            b: "Antalya",
            c: "Ankara",
            d: "Konya"
        },
        correctAnswer: "a"
    },
    { question: "What is the value of pi",
        answers: {
             a: 3.14,
             b: 4.15,
             c: 7.93,
             d: 8.56
        },
        correctAnswer: "c"
    },
    { question: "What is 500/10",
        answers: {
             a: 10,
             b: 50,
             c: 250,
             d: 100
        },
        correctAnswer: "b"
    },
    { question: "When did Pakistan become a country",
        answers: {
             a: 1958,
             b: 2011,
             c: 1934,
             d: 1947
        },
        correctAnswer: "d"
    },
    { question: "How many states are there in the US",
        answers: {
             a: 40,
             b: 54,
             c: 50,
             d: 34
        },
        correctAnswer: "c"
    },
    { question: "What is 15*3",
        answers: {
             a: 45,
             b: 50,
             c: 64,
             d: 34
        },
        correctAnswer: "a"
    },
    { question: "How many countries are there in Europe",
        answers: {
             a: 46,
             b: 50,
             c: 53,
             d: 44
        },
        correctAnswer: "d"
    },
    { question: "What color does yellow and blue make?",
        answers: {
             a: "pink",
             b: "green",
             c: "purple",
             d: "orange"
        },
        correctAnswer: "b"
    },
    { question: "The National Game of Japan is",
        answers: {
             a: "Tennis",
             b: "Karate",
             c: "Ice Hockey",
             d: "sumo wrestling"
        },
        correctAnswer: "d"
    },
    { question: "How many days are there in a normal year?",
        answers: {
             a: "365",
             b: "390",
             c: "340",
             d: "367"
        },
        correctAnswer: "c" 
    },
] 

const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
let quizContainer = document.getElementById('questionSpace')

function startQuiz(){
    document.getElementById("startBtn").style.display="none"
    showQuestion()
    timer()
}

function showQuestion(){
     let output = [];
     myQuestions.forEach((currentQuestion, questionNumber) => {
          let answers = [];

          for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
      
            } 
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
              );
            }
     ),document.getElementById('questions').innerHTML= output.join(''); 
        }

function results(){
    const answerarea = document.getElementById('questions').querySelectorAll('.answers');
    let score = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerarea[questionNumber];
        const selector = `input[name=questions${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value; 
        for(i=0; i< myQuestions.length, i++; ){
            if (userAnswer === currentQuestion.correctAnswer) {
                score++
                answerContainer[questionNumber].style.color = 'lightgreen'; 
            }
            else{
                answerContainer[questionNumber].style.color = 'red'; 
            }
        }
        }
        
    )
    document.getElementById('submit').innerHTML = `${score} out of ${myQuestions.length}`;
}

function timer(){
   seconds = 0;
for (let i = 0; i < 5000; i++) {
    setInterval(timer,1000); {
}
 document.getElementById("timerBtn").innerHTML = seconds} 
} 

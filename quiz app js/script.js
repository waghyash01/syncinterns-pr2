const quizDB = [
    {
    question: "Q1: Which is capital of India?",
     a: "MUMBAI",
     b: "DELHI",
     c: "KOLKATA",
     d: "CHENNAI",
     ans: "ans2"
    
  },
  {
    question: "Q2: WhO is hero in pathaan movie?",

     a: "SRK",
     b: "Salman",
     c: "Akshay",
     d: "Ranveer",
    ans: "ans1"
  },
  {
    question: "Q3: Who is CM of Maharashtra",

     a: "Eknath Shinde",
     b: "Aditya Thakare",
     c: "Uddhav Thakare",
     d: "Sharad Pawar",
    ans: "ans1"
  },
  {

    question: "Q4: Who is known as the father of computers?",
     a: "Charles Babbage",
     b: "Nichola Tesla",
     c: "Bill Gates",
     d: "Sunder Pichai",
    ans: "ans1"
  }
];
let questionCount = 0;
let score=0;
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

const loadQuestion= () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)
        {
            answer = curAnsElem.id;
        }
        return answer;
    });
    return answer;

};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () =>{
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer);

     if(checkedAnswer== quizDB[questionCount].ans)
     {
        score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount < quizDB.length)
     {
        loadQuestion();
     }
     else{
            showScore.innerHTML= `
            <h3>You scored 🎉${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>`;
            showScore.classList.remove('scoreArea');
     }

});
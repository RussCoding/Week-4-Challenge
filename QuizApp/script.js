const Questions = [
    {   
        question: "What does html stand for?",
        options: ["Hypertext Markup Language", "Hypertext Makeup Language", "Hyperr Make Type Language", "Cascading Style Sheets"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables?",
        options: ["Curly brackets","Exclamation marks", "Parenthesis", "Quotation Marks"],
        answer : "Quotation Marks"
    },
    {
        question: "Which is not a commonly used data type in coding?",
        options: ["boolean","integer", "pounds", "string"],
        answer : "pounds"
    },
    {
        question: "Which of the following is a commonly used coding language?",
        options: ["Latte","Mocha", "Espresso", "Java"],
        answer : "Java"
    },
    {
        question: "How should you NOT react when encountering an error in your code?",
        options: ["Take a small break to come back with a fresh mind","Look for the error message and see what is wrong", "Throw your computer across the room","Read over your code to look for typos or logic errors"],
        answer : "Throw your computer across the room"
    }
];

const timeLeft= document.querySelector(".time-left");
const questionContainer = document.querySelector(".question-card");
const start = document.querySelector("#start");
const highscores = document.querySelector("#high-scores");
const startContainer = document.querySelector(".start-page");
const finishedContainer = document.querySelector(".finished-quiz");
const questionText = document.querySelector(".question-head");
const options = Array.from(document.querySelectorAll(".options"));
/* const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4"); */
const correctness = document.querySelector(".correctness");
let currentQuestion = 0;
let time = 100;

start.addEventListener('click', function(){
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    //shows first question
    showQuestion(0);
    //starts timer when start is pressed
    timeLeft.innerText = time;
    timer = setInterval (() => 
        {
            if (time > 0)
            {
                time -= 1;
                timeLeft.innerText = time;
            }
            else {
                clearInterval(timer);
                showScore();
            }
        }, 1000)

    options.forEach((option) => 
    {
        option.addEventListener('click', ()=>
        {
            if(option.innerText == Questions[currentQuestion].answer)
            {
                correctness.innerText = "Correct!";
                time += 5;
            }
            else
            {
                correctness.innerText = "Incorrect!";
                time -= 15;
            }
            currentQuestion++;
            showQuestion(currentQuestion);
        })
    })
})


function showQuestion(num)
{   if (num < 5)
    {
        questionText.innerText = Questions[num].question;
        for (var i = 0; i<4; i++)
        {
            options[i].innerText = Questions[num].options[i];
        }
    }
    else
    {
        clearInterval(timer);
        showScore();
        
    }
}

/* function startQuiz()
{
    startContainer.style.display="none";
    questionContainer.style.display="flex";
    for (var i = 0; i < Questions.length; i++){
        currentQuestion = Questions[i];
        questionText.innerText = Questions[i].question;
        option1.innerText = Questions[i].options[0];
        option2.innerText = Questions[i].options[1];
        option3.innerText = Questions[i].options[2];
        option4.innerText = Questions[i].options[3];
        while (correctness.innerText != "Correct!"){
            
            option1.addEventListener("click", correctAnswer);
            option2.addEventListener("click", correctAnswer);
            option3.addEventListener("click", correctAnswer);
            option4.addEventListener("click", correctAnswer);


        }

    }
} */



function correctAnswer(){
    if (currentQuestion.answer.innerText == this.innerText){
        correctness.innerText = "Correct!";
    }
    else{
        correctness.innerText = "Incorrect!";
    }
}


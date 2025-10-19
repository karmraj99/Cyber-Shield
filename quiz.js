let quizBox = document.querySelector(`.quizBox`);
let question = document.querySelector(`.question`);
let option1 = document.querySelector(`#option1`);
let option2 = document.querySelector(`#option2`);
let option3 = document.querySelector(`#option3`);
let option4 = document.querySelector(`#option4`);
let next = document.querySelector(`.next`);
let startTest = document.querySelector(`#startTest`);
let questionBox = document.querySelector(`.questionBox`);
let resultBox = document.querySelector(`.resultBox`);
let resultBar = document.querySelector(`.resultBar`);
let emoji = document.querySelector(`.emoji`);
let resultNumber = document.querySelector(`.resultNumber`);
let resultBox4 = document.querySelector(`.resultBox4`);
let tryAgain = document.querySelector(`.tryAgain`);

let questionList = [
    { 
        question: `1. What should you do if you receive an OTP message you didn’t request?`,
        option1: `Share it with your friend`,
        option2: `Ignore or delete it`,
        option3: `Reply to the message`,
        option4: `Forward it to your contact list`,
        correctOption: 2 
    },
    { 
        question: `2. Which of the following passwords is the strongest?`,
        option1: `123456`,
        option2: `mypassword`,
        option3: `R@hul#2005`,
        option4: `rahul123`,
        correctOption: 3 
    },
    { 
        question: `3. What is the safest way to access your bank account online?`,
        option1: `Through a link sent on WhatsApp`,
        option2: `From your bank’s official website or app`,
        option3: `Using any browser on public Wi-Fi`,
        option4: `By searching “bank login” on Google`,
        correctOption: 2 
    },
    { 
        question: `4. What should you check before making any online payment?`,
        option1: `Website has “https://”`,
        option2: `The site looks colorful`,
        option3: `Payment page loads fast`,
        option4: `It shows a big “SALE” banner`,
        correctOption: 1
    },
    { 
        question: `5. You get a call from someone claiming to be from your bank asking for your PIN. What should you do?`,
        option1: `Tell them politely`,
        option2: `Disconnect and report the call`,
        option3: `Ask for their employee ID`,
        option4: `Give a fake PIN`,
        correctOption: 2 
    },
    { 
        question: `6. What is phishing?`,
        option1: `A type of online game`,
        option2: `A cyber attack to steal information`,
        option3: `A method of repairing computers`,
        option4: `Software update process`,
        correctOption: 2 
    },
    { 
        question: `7. Which of these is a safe practice online?`,
        option1: `Using the same password for all sites`,
        option2: `Clicking on pop-up ads for offers`,
        option3: `Turning on two-factor authentication`,
        option4: `Sharing login details with friends`,
        correctOption: 3
    },
    { 
        question: `8. What is the main purpose of antivirus software?`,
        option1: `To speed up your internet`,
        option2: `To protect your system from viruses and malware`,
        option3: `To increase battery life`,
        option4: `To block websites`,
        correctOption: 2 
    },
    { 
        question: `9. Which of these is an example of a strong security habit?`,
        option1: `Logging out after using public computers`,
        option2: `Saving passwords in browsers`,
        option3: `Ignoring software updates`,
        option4: `Using easy passwords for quick login`,
        correctOption: 1
    },
    { 
        question: `10. What should you do if your social media account gets hacked?`,
        option1: `Create a new account`,
        option2: `Report and reset your password`,
        option3: `Wait for the hacker to stop`,
        option4: `Ignore it`,
        correctOption: 2 
    },
];

let emojiArray = [`image/excellent.png`,`image/good.png`,`image/average.png`,`image/poor.png`,`image/bad.png`]

let messageArray = [`Outstanding! You’re a true cyber expert — your online safety habits are excellent.`,
                    `Great job! You understand online risks well, just stay alert for new scams.`,
                    `Good effort! You know the basics, but there’s room to improve your cyber awareness.`,
                    `Be cautious! You’re partly aware, but you should learn more to stay fully safe online.`,
                    `High risk! You need to learn how to protect yourself — visit our Prevention page to stay safe.`
                    ]

let score = 0;
let questionNumber = 0;
let optionClick;
let optionClickOrNot = false;

startTest.addEventListener(`click`, ()=>{
    quizBox.style.display=`flex`;
    loadQuestion();
});

function loadQuestion(){
    question.innerHTML = questionList[questionNumber].question;
    option1.innerHTML = questionList[questionNumber].option1;
    option2.innerHTML = questionList[questionNumber].option2;
    option3.innerHTML = questionList[questionNumber].option3;
    option4.innerHTML = questionList[questionNumber].option4;
}

next.addEventListener(`click`,()=>{
    if(questionNumber + 1 == 10){
        resetOptionColor();
        result();
        return
    }

    resetOptionColor();

    if(optionClickOrNot){
        questionNumber++;
        loadQuestion();
        optionClickOrNot = false;
    }
})

function resetOptionColor(){
    if(optionClickOrNot){
        option1.style.backgroundColor = `white`;
        option2.style.backgroundColor = `white`;
        option3.style.backgroundColor = `white`;
        option4.style.backgroundColor = `white`;

        option1.style.border = `2px solid black`;
        option2.style.border = `2px solid black`;
        option3.style.border = `2px solid black`;
        option4.style.border = `2px solid black`;
    }
}

option1.addEventListener(`click`,()=>{
    if(!optionClickOrNot){
        optionClick = 1;
        let color = optionCheck();
        option1.style.backgroundColor = color;
        option1.style.border = `2px solid ${color}`;
        optionClickOrNot = true
    }
})

option2.addEventListener(`click`,()=>{
    if(!optionClickOrNot){
        optionClick = 2;
        let color = optionCheck();
        option2.style.backgroundColor = color;
        option2.style.border = `2px solid ${color}`;
        optionClickOrNot = true
    }
})

option3.addEventListener(`click`,()=>{
    if(!optionClickOrNot){
        optionClick = 3;
        let color = optionCheck();
        option3.style.backgroundColor = color;
        option3.style.border = `2px solid ${color}`;
        optionClickOrNot = true
    }
})

option4.addEventListener(`click`,()=>{
    if(!optionClickOrNot){
        optionClick = 4;
        let color = optionCheck();
        option4.style.backgroundColor = color;
        option4.style.border = `2px solid ${color}`;
        optionClickOrNot = true
    }
})

function optionCheck(){
    if(optionClick == questionList[questionNumber].correctOption){
        score++;
        return `#0cd621`;
    }else{
        return `red`;
    }
}

function result(){
    questionBox.style.display= `none`;
    resultBox.style.display = `flex`;
    resultBar.style.width = `${score*10}%`
    selectEmoji();
    resultNumber.innerHTML = `${score}/10`;
}

function selectEmoji(){
    if(score==10 || score==9){
        emoji.src = emojiArray[0];
        resultBox4.innerHTML = messageArray[0];
    }else if(score==8 || score==7){
        emoji.src = emojiArray[1];
        resultBox4.innerHTML = messageArray[1];
    }else if(score==6 || score==5){
        emoji.src = emojiArray[2]
        resultBox4.innerHTML = messageArray[2];
    }else if(score==4 || score==3){
        emoji.src = emojiArray[3];
        resultBox4.innerHTML = messageArray[3];
    }else{
        emoji.src = emojiArray[4];
        resultBox4.innerHTML = messageArray[4];
    }
}

tryAgain.addEventListener(`click`, ()=>{
    score = 0;
    questionNumber = 0;
    loadQuestion();
    questionBox.style.display= `flex`;
    resultBox.style.display = `none`;
})
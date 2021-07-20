/** Array of Objects */

let quiz = [
    {
        q:"What is the Incredible Hulk's real name?",
        options:["Bruce Willis","Bruce Banner","Tony Stark","Steve Rodgers"],
        answer:1
    },
    {
        q:"Which city is Spiderman from?",
        options:["Los Angeles","London","Chicago","New York City"],
        answer:3
    },
    {
        q:"What weapon does Thor use?",
        options:["Hammer","Sword","Axe","Shield"],
        answer:0
    },
    {
        q:"Which War did Captain America fight in?",
        options:["World War 1","World War 2","Vietnam War","Gulf War"],
        answer:1
    },
    {
        q:"What material is Captain America's shield made of?",
        options:["Steel","Iron","Vibranium","Platinum"],
        answer:2
    },
    {
        q:"What land is the Black Panther from?",
        options:["Wakanda","Kenya","Egypt","Cameroon"],
        answer:0
    },
    {
        q:"Which character can shrink so tiny that they cannot be seen by the naked eye?",
        options:["Incredible Hulk","Hawkeye","Falcon","Antman"],
        answer:3
    },
    {
        q:"Which Realm does Thor come from?",
        options:["Midgard","Asgard","Jotunheim","Svartalfheim"],
        answer:1
    },
    {
        q:"Which Character's weapon is a bow and arrow?",
        options:["Iron Man","Thor","Black Widow","Hawkeye"],
        answer:3
    },
    {
        q:"Which evil character wore a glove which held all the infinity stones?",
        options:["Thanos","Dr Strange","Loki","Winter Soldier"],
        answer:0
    },
    {
        q:"What group of characters is professor Charles Xavier the leader of?",
        options:["Thunderbolts","Fantastic Four","X-men","Avengers"],
        answer:2
    },
    {
        q:"What is Iron Man's real name?",
        options:["Thor Odinson","Nick Fury","Tony Stark","Steve Rodgers"],
        answer:2
    },
    {
        q:"Which character wears an eye patch?",
        options:["Nick Fury","Bruce Banner","Peter Parker","Jean Grey"],
        answer:0
    },
    {
        q:"What color skin does Mystique have in her natural form?",
        options:["Red","Yellow","Orange","Blue"],
        answer:3
    },
    {
        q:"What type of creatures does the character Blade hunt?",
        options:["Werewolves","Vampires","Elves","Dwarves"],
        answer:1
    },
    {
        q:"How many infinity stones are there?",
        options:["3","5","6","8"],
        answer:2
    },
    {
        q:"Which of these characters can heal themselves?",
        options:["Wolverine","Black Widow","Cyclops","Nightcrawler"],
        answer:0
    },
    {
        q:"What country is Colussus from?",
        options:["Sweden","Brazil","Turkey","Russia"],
        answer:3
    },
    {
        q:"What character does Jean Grey evolve into?",
        options:["Blue Robin","Dark Phoenix","Purple Dragon","Black Widow"],
        answer:1
    },
    {
        q:"How many weapons does the Human Torch carry on him?",
        options:["1","2","0","3"],
        answer:2
    },
]

let shuffleQuestions = [];
let questionNumber = 1;
let questionIndex = 0;
let score = 0;
let oldScore = 0;
let incorrectScore = 0;
let startButton = document.getElementById("button");
let homeBox = document.getElementById("home-box");
let questionHolder = document.getElementById("question-holder");
startButton.addEventListener('click', startGame);
document.querySelectorAll('.answer')
      .forEach(button => button.addEventListener('click', validateAnswer));


/** Functions for quiz */

function shuffleQuestionsArray(array) {
    var currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function startGame(){
    homeBox.classList.add('hidden-content');
    document.getElementById('question-holder').classList.remove('hidden-content');
    shuffleQuestions = shuffleQuestionsArray(quiz);
    displayQuestion(shuffleQuestions[questionIndex], questionNumber);
}

function displayQuestion(question, number){
    document.getElementById('question-text').innerText = question['q'];
    document.getElementById('question-number').innerText = number;
    document.getElementById('answer1').innerText = question['options'][0];
    document.getElementById('answer2').innerText = question['options'][1];
    document.getElementById('answer3').innerText = question['options'][2];
    document.getElementById('answer4').innerText = question['options'][3];
}

function getNextQuestion(){
    if (questionNumber < shuffleQuestions.length){
        questionNumber = questionNumber + 1;
        questionIndex = questionIndex + 1;  
        displayQuestion(shuffleQuestions[questionIndex], questionNumber);
    }
    else {
        finishGame();
    }
}


function validateAnswer(event){
    console.log('I clicked ', event.target.innerText);
    const selectedAnswerText = event.target.innerText;
    const currentQuestion = shuffleQuestions[questionIndex];
    const correctAnswerIndex = currentQuestion.answer;
    const correctAnswerText = currentQuestion.options[correctAnswerIndex];
    console.log(selectedAnswerText, correctAnswerText);
    if (correctAnswerText.localeCompare(selectedAnswerText) === 0){
        score = score + 1;
        console.log('Correct Answer');
        displayScore ();
    }
    else{
        console.log('Incorrect Answer');
        displayWrongScore ();
    }
    /**displayScore(score) */
function displayScore(score){
    document.getElementById("score").innerText = score; 
     
}

function displayWrongScore(score){
    document.getElementById("incorrect-score").innerText = incorrectScore; 
}
    getNextQuestion();
}

function finishGame (){
    questionHolder.classList.add('hidden-content');
    document.getElementById('result-box').classList.remove('hidden-content');
    document.getElementById('total-questions').innerText = 20;
    document.getElementById('total-correct').innerText = score;
    document.getElementById('total-incorrect').innerText = incorrectScore;
 }

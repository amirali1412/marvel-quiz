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
    {
        q:"Who is Juggernaut's half-brother",
        options:["Cyclops","Professor X","Wolverine","Gambit"],
        answer:1
    },
    {
        q:"What metal was injected into Wolverine's body?",
        options:["Copper","Vibranium","Adamantium","Steel"],
        answer:2
    },
    {
        q:"Which character does Antman team up with?",
        options:["Wasp","Bee","Spider","Beatle"],
        answer:0
    },
    {
        q:"What is Silver Surfer's real name?",
        options:["Victor Von Doom","Ben Grimm","Johnny Storm","Norrin Radd"],
        answer:3
    },
    {
        q:"What is the name of the race of people that Thanos comes from?",
        options:["Skrull","Kree","Human","Eternal"],
        answer:3
    },
    {
        q:"Which of these characters is NOT a member of the Guardians of the Galaxy?",
        options:["Groot","Drax","Star Lord","Ultron"],
        answer:3
    },
    {
        q:"What is Green Goblin's real name?",
        options:["William Baker","Norman Osborn","Eric Brooks","Adrian Toomes"],
        answer:1
    },
    {
        q:"Which city was Bruce Banner born in?",
        options:["Los Angeles","Miami","Dayton","Houston"],
        answer:2
    },
    {
        q:"What weapon is Elektra known to use?",
        options:["Twin Sai","Dagger","Sword","Pistol"],
        answer:0
    },
    {
        q:"Groot looks most like a .....?",
        options:["House","Mountain","Cookie","Tree"],
        answer:3
    },
]

let shuffleQuestions = [];
let questionNumber = 1;
let questionIndex = 0;
let score = 0;
let incorrectScore = 0;
let startButton = document.getElementById("button");
let homeBox = document.getElementById("home-box");
let questionHolder = document.getElementById("question-holder");
startButton.addEventListener('click', startGame);
document.querySelectorAll('.answer')
      .forEach(button => button.addEventListener('click', validateAnswer));
document.getElementById('try-again').addEventListener('click', resetGame);

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

function resetGame(){
    shuffleQuestions = [];
    questionNumber = 1;
    questionIndex = 0;
    score = 0;
    incorrectScore = 0;
    document.getElementById('result-box').classList.add('hidden-content');
    displayScore();
    displayIncorrectScore();
    homeBox.classList.remove('hidden-content');
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
    if (questionNumber < 20){
        questionNumber = questionNumber + 1;
        questionIndex = questionIndex + 1;  
        displayQuestion(shuffleQuestions[questionIndex], questionNumber);
    }
    else {
        finishGame();
    }
}

function displayScore(){
    document.getElementById("score").innerText = score; 
}

function displayIncorrectScore(){
    document.getElementById("incorrect-score").innerText = incorrectScore; 
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
        displayScore();
    }
    else{
        console.log('Incorrect Answer');
        incorrectScore = incorrectScore + 1;
        displayIncorrectScore();
    }
    getNextQuestion();
}

function finishGame (){
    questionHolder.classList.add('hidden-content');
    document.getElementById('result-box').classList.remove('hidden-content');
    document.getElementById('total-questions').innerText = 20;
    document.getElementById('total-correct').innerText = score;
    document.getElementById('total-incorrect').innerText = incorrectScore;
    if (20 <= score <= 16) {
        var textToHighlight = "Awesome! Pack your bags Nick Fury is ready to recruit you for S.H.I.E.L.D.";
        document.getElementById('comment1').innerText;
        document.getElementById("comment1").innerText = text.replace(textToHighlight, '<span style="color:white">'+textToHighlight+'</span>');
    }
    else if (15 <= score <= 11) {
        document.getElementById('comment').innerText;
    }
    else if (10 <= score <= 6) {
        document.getElementById('comment').innerText;
    }
    else {
        document.getElementById('comment').innerText;
    }

}

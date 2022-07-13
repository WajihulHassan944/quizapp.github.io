const quizDB = [
{
	question: "Q1: Which of the following is Tricontinental Country?",
	a: "Chad",
	b: "Chile",
	c: "Mali",
	d: "Swaziland",
	ans: "ans2"
},{
	question: "Q2: Famous fast food restaurant company Burger King belongs to which Country?",
	a: "America",
	b: "England",
	c: "Turkey",
	d: "None of These",
	ans: "ans1"
},{
	question: "Q3: The first person to draw the map of Earth?",
	a: "Hiraclitus",
	b: "Pythagoras",
	c: "Anaximander",
	d: "Thales",
	ans: "ans3"
},{
	question: "Q4: Who laid  first step on the Moon?",
	a: "LMP Edgar",
	b: "CMP Stuart",
	c: "Neil Armstrong",
	d: "None of these",
	ans: "ans3"
}
];

const question = document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');


const submit = document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');
const showScore =document.querySelector('#showscore');

let questionCount=0;
let score=0;
const loadquestion = () => {
	
	const questionList = quizDB[questionCount];
	
	question.innerText=questionList.question;
	option1.innerText=(questionList.a);
	option2.innerText=(questionList.b);
	option3.innerText=(questionList.c);
	option4.innerText=(questionList.d);
}

	
	loadquestion();
	 const getCheckAnswer = () => {
		let answer;
		answers.forEach((curAnsElem)=>{
			if(curAnsElem.checked){
				answer = curAnsElem.id;
			}
	 });
	 
	 return answer;
	 };
	 
	 const deselectAll=()=>{
		 answers.forEach((curAnsElem)=>curAnsElem.checked=false);
	 }
	
	submit.addEventListener('click',()=>{
		const checkedAnswer=getCheckAnswer();
		console.log(checkedAnswer);
		if(checkedAnswer ==quizDB[questionCount].ans){
			score++;
		};
		deselectAll();
		questionCount++;
		if(questionCount<quizDB.length){
			loadquestion();
		}else{
			showScore.innerHTML= `
		<h3>You scored ${score} / ${quizDB.length} ✌️ </h3>
	<button class="btn" onclick="location.reload()">Play Again</button>`;
	showScore.classList.remove('scorearea');
	}});
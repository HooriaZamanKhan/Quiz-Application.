const quizData = [
    {
        question: "Q.1  Which tag contains all the contents of an HTML document you can see?" ,

        a: "<body>" ,
        b: "<head>" ,
        c: "<html>" ,
        d: "<title>" ,
        ans: "ans3"
    },

    {
        question: "Q.2 The HTML code for adding a picture begins with the ___________ element.",
        a: "src" ,
        b: "img" ,
        c: "png" ,
        c: "IMG" ,
        ans: "ans2" , 
    },

    {
        question: "Q.3 What is the function of the <p> tag?" ,

        a:"Defines a paragraph.",
        b:"Makes the text purple.",
        c:"It pushes the text to the right.",
        d:"Prints the webpage.",
        ans: "ans1",
    },

    {
        question: " Q.4 What does HTML stand for?" ,

        a:"Hypertext Medium Language",
        b:"Hippo Tries Making Licorice",
        c:"Hypertext Markup Lingo",
        d:"Hypertext Markup Language",
        ans: "ans4",
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit= document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {


    const questionList = quizData [questionCount];
 
     question.innerText = questionList.question;

    question.innerText = quizData[questionCount].question;

    option1.innerText = questionList.c;
    option2.innerText = questionList.b;
    option3.innerText = questionList.a;
    option4.innerText = questionList.d;
}

loadQuestion();

const getChacketAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => { 
         if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false  );  
}

   submit.addEventListener('click' , () => {
    const checkedAnswer = getChacketAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizData[questionCount].ans){
        score++;
     };

     questionCount++;

     deselectAll();

     if(questionCount < quizData.length){
        loadQuestion()
     }else{

        showScore.innerHTML = ` 
        <h3 style="text-align: center;" > you scored ${score}/${quizData.length} <h3>
        <a href="start.html"><button type="submit">Play Again</button></a>
        `;

        showScore.classList.remove('scoreArea')

     }
});



function signup(){
    var a = document.getElementById('fullname').value;
    var b = document.getElementById('pass').value;
    var c = document.getElementById('email').value;
    var d = document.getElementById('conpass').value;
    localStorage.setItem('full name',a)
    localStorage.setItem('pass',b)
    localStorage.setItem('email',c)
    localStorage.setItem('conpass',d)
    alert('Data Inseted Sucessfully')
}





// function validation() {
//     var fullName = document.getElementById('fullname').value;

//     var fullname = document.getElementById('fullname').value;
//     var pass = document.getElementById('pass').value;
//     var email = document.getElementById('email').value;
//     var conpass = document.getElementById('conpass').value;




//     if(fullname == "") {
//         document.getElementById('userName').innerHTML =" ** Please Fill the Full Name Field";
//         return false;
//     }

//     //  if(user.length <=  2 || (user.lenght > 20)) {
//     //      document.getElementById('userName').innerHTML =" ** Full Name lenght must be between 2 and 20";
//     //     return false;
//     //  }

//     //  if(!isNaN(user)){
//     //     document.getElementById('username').innerHTML=" ** only character are allowed"
//     //  }

//     if(pass == "") {
//         document.getElementById('password').innerHTML =" ** Please Fill the Passward Field";
//         return false;
//     }

//     if(pass.length <=  5 || (pass.lenght > 20)) {
//         document.getElementById('passward').innerHTML =" ** Passward lenght must be between 2 and 20";
//        return false;
//     }

//     if(pass!=conpass){
//         document.getElementById('passward').innerHTML =" ** Passward are not matching";
//         return false;
//     }

//     if(email == "") {
//         document.getElementById('emails').innerHTML =" ** Please Fill the Email Field";
//         return false;
//     }

//     if(email.indexOf('@') <= 0 ){
//         document.getElementById('emails').innerHTML =" ** @ Invalid Position";
//         return false; 
//     }

//     if(conpass == "") {
//         document.getElementById('confirmpassward').innerHTML =" ** Please Fill the Confirm Passward Field";
//         return false;
//     }

//     // if(email.charAt(email.lenght-4)!='.') && ;

// }










 






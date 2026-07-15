// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.display = "none";

    }, 1200);

});

// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("darkMode");

let dark = false;

darkBtn.addEventListener("click", () => {

    if (!dark) {

        document.body.style.background =
            "linear-gradient(135deg,#f8fafc,#dbeafe,#bfdbfe)";

        document.body.style.color = "#111827";

        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        dark = true;

    } else {

        document.body.style.background =
            "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)";

        document.body.style.color = "white";

        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        dark = false;

    }

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = () => {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
// ===============================
// STUDY PLANNER
// ===============================

function addTask() {

    const input = document.getElementById("taskInput");

    const list = document.getElementById("taskList");

    if (input.value.trim() === "") {

        alert("Please enter a study goal.");

        return;

    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${input.value}
        <button onclick="this.parentElement.remove()">❌</button>
    `;

    list.appendChild(li);

    input.value = "";

}

// ===============================
// PROGRESS BAR
// ===============================

let progress = 30;

function increaseProgress() {

    if (progress < 100) {

        progress += 10;

        document.getElementById("progressBar").value = progress;

        document.getElementById("progressText").innerHTML =
            progress + "% Completed";

    }

}
// ===============================
// NOTES LOCAL STORAGE
// ===============================

const noteArea = document.getElementById("noteArea");

window.onload = function () {

    if (localStorage.getItem("notes")) {

        noteArea.value = localStorage.getItem("notes");

    }

};

function saveNotes() {

    localStorage.setItem("notes", noteArea.value);

    alert("Notes Saved Successfully!");

}
// ===============================
// QUIZ
// ===============================

const quizData = [

{
question:"Which language is used for styling webpages?",
answers:["CSS","HTML","Python","SQL"],
correct:0
},

{
question:"Which language makes webpages interactive?",
answers:["CSS","Java","JavaScript","C"],
correct:2
},

{
question:"HTML is used for?",
answers:["Database","Structure","Animation","Server"],
correct:1
}

];

let current = 0;

const question = document.getElementById("question");

const options = document.querySelectorAll(".option");

const next = document.getElementById("nextBtn");

function loadQuiz() {

    question.innerHTML = quizData[current].question;

    options.forEach((btn,index)=>{

        btn.innerHTML=quizData[current].answers[index];

        btn.onclick=()=>{

            if(index===quizData[current].correct){

                btn.style.background="limegreen";

            }

            else{

                btn.style.background="tomato";

            }

        }

    });

}

loadQuiz();

next.onclick=()=>{

current++;

if(current<quizData.length){

loadQuiz();

}

else{

question.innerHTML="🎉 Quiz Completed!";

options.forEach(btn=>btn.style.display="none");

next.style.display="none";

}

}
// ===============================
// CONTACT FORM
// ===============================

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");

this.reset();

});

// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// SIMPLE CARD ANIMATION
// ===============================

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

const screen=window.innerHeight;

if(position<screen-100){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

});
// ==========================
// FAQ
// ==========================

document.querySelectorAll(".faq-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.nextElementSibling.classList.toggle("show");

});

});

// ==========================
// MOTIVATIONAL QUOTE API
// ==========================

async function getQuote(){

try{

const res=await fetch("https://api.quotable.io/random");

const data=await res.json();

document.getElementById("quoteText").innerHTML=data.content;

}

catch{

document.getElementById("quoteText").innerHTML="Stay positive and keep learning every day!";

}

}

// ==========================
// COURSE SEARCH
// ==========================

const search=document.getElementById("searchCourse");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".course-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=title.includes(value)?"block":"none";

});

});
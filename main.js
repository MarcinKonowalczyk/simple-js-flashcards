// List of questions and answers
const questions = [
    ["Q0","A0"],
    ["Q1","A1"],
    ["Q2","A2"],
    ["Q3","A3"],
    ["Q4","A4"],
    ["Q5","A5"],
    ["Q6","A6"],
    ["Q7","A7"],
    ["Q8","A8"],
    ["Q9","A9"]];
var flag = true; // Flag to check whether we're on 'question' or on 'answer'
var answer = undefined;

// Some statistics to be used later
var question_count = new Array(questions.length).fill(0);
var update_count = 0;

// Colors
const question_color_1 = "#D7C49EFF"; // Background and text
const question_color_2 = "#343148FF"; // Rectange
const question_color_3 = "#B0A182FF"; // Accents
const answer_color_1 = question_color_1; //"#FFD662FF";
const answer_color_2 = "#3A4730FF"; //"#414730FF";
const answer_color_3 = question_color_3;

function update() {
    // window.alert("test")
    if (flag) {
        selection = Math.floor(Math.random()*questions.length);

        update_count += 1;
        question_count[selection] += 1;
        // console.log(question_count)
        
        question = questions[selection][0];
        answer = questions[selection][1];

        text = document.getElementById("text");
        text.innerHTML = question;
        text.style = `color:${question_color_1}`;
        console.log(question)

        document.getElementById("rect").style = `fill:${question_color_2}`;
        document.body.style = `background-color:${question_color_1}`

        text2 = document.getElementById("text2");
        text2.innerHTML = `Total question count: ${update_count}`;
        text2.style = `color:${question_color_3}`

        text3 = document.getElementById("text3");
        text3.innerHTML = `Question number: ${selection}`;
        text3.style = `color:${question_color_3}`
        
        flag = false;
    } else {
        text = document.getElementById("text");

        text.innerHTML = answer;
        text.style = `color:${answer_color_1}`;
        console.log(answer)

        document.getElementById("rect").style = `fill:${answer_color_2}`;
        document.body.style = `background-color:${answer_color_1}`

        text2 = document.getElementById("text2");
        text2.style = `color:${answer_color_3}`

        text3 = document.getElementById("text3");
        text3.style = `color:${answer_color_3}`

        flag = true;
    }
}

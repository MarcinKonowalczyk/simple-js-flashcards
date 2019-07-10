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
const question_color_1 = "#D7C49EFF";
const question_color_2 = "#343148FF";
const answer_color_1 = "#FFD662FF";
const answer_color_2 = "#00539CFF";

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
        flag = false;

        text2 = document.getElementById("text2");
        text2.innerHTML = `${update_count}`;
        text2.style = `color:${question_color_1}`
        // style="color:#FFE77AFF"
    } else {
        text = document.getElementById("text");

        text.innerHTML = answer;
        text.style = `color:${answer_color_1}`;
        console.log(answer)

        document.getElementById("rect").style = `fill:${answer_color_2}`;
        document.body.style = `background-color:${answer_color_1}`
        flag = true;
    }
}

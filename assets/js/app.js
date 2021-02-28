// Tuesday, Feb 23 2021 3:52 PM
var currentTime = moment().format("LLLL")
console.log(currentTime)


const container = document.querySelector(".container")
const timeArray = ["8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"]



$(".button1").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button2").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button3").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})


$(".button4").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button5").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button6").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button7").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})


$(".button8").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button9").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})

$(".button10").click(function() {
  let textInput = $(this).siblings(".textInput").text();
  let textReturn = $(this).parent().parent().attr("id");
  localStorage.setItem(textReturn, textInput);
})


// setInterval(function(), 3000);
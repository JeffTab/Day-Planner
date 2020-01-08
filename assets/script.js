// clean

var $currentDate = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $hour = $(".hour");
var currentHour = moment().format("H");
const hourCheck = document.getElementsByTagName("textarea");

$currentDate.text(moment().format("dddd, MMMM Do YYYY"));

for (i = 0; i < hourCheck.length; i++) {

    var getLocalStorage = parseInt(i) + 9;
    var textCheck = localStorage.getItem(getLocalStorage);
    hourCheck[i].value = textCheck;

    if (hourCheck[i].id == currentHour) {
        hourCheck[i].setAttribute("class", "col-10 textarea present");
    };

    if (parseInt(hourCheck[i].id) > parseInt(currentHour)) {
        hourCheck[i].setAttribute("class", "col-10 textarea future");
    };

    if (parseInt(hourCheck[i].id) < parseInt(currentHour)) {
        hourCheck[i].setAttribute("class", "col-10 textarea past");
    };
};


$(".btn").on("click", function () {
    localStorage.setItem(this.parentElement.children[1].id, this.parentElement.children[1].value);
    console.log(this.parentElement.children[1].value);
});



// $(".btn9").on("click", function () {
//     localStorage.setItem("9", $text9[0].value);
//     console.log($text9[0].value);
// });



// $(".btn10").on("click", function () {
//     localStorage.setItem("10", $text10[0].value);
// });



// $(".btn11").on("click", function () {
//     localStorage.setItem("11", $text11[0].value);
// });


// $(".btn12").on("click", function () {
//     localStorage.setItem("12", $text12[0].value);
// });


// $(".btn13").on("click", function () {
//     localStorage.setItem("13", $text13[0].value);
// });


// $(".btn14").on("click", function () {
//     localStorage.setItem("14", $text14[0].value);
// });


// $(".btn15").on("click", function () {
//     localStorage.setItem("15", $text15[0].value);
// });


// $(".btn16").on("click", function () {
//     localStorage.setItem("16", $text16[0].value);
// });


// $(".btn17").on("click", function () {
//     localStorage.setItem("17", $text17[0].value);
// });
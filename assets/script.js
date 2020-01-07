// clean

var $currentDate = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $hour = $(".hour");
var currentHour = moment().format("H");
const hourCheck = document.getElementsByTagName("textarea");

$currentDate.text(moment().format("dddd, MMMM Do YYYY"));

for (i = 0; i < hourCheck.length; i++) {

    // var textArea = $("#i");
    // textArea.text(localStorage.getItem("i"));

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



// dirty

var $text9 = $("#9");
var text9 = localStorage.getItem("9");
$text9[0].value = text9;
console.log($text9[0].value);
$(".btn9").on("click", function () {
    localStorage.setItem("9", $text9[0].value);
    console.log($text9[0].value);
});


var $text10 = $("#10");
var text10 = localStorage.getItem("10");
$text10[0].value = text10;
$(".btn10").on("click", function () {
    localStorage.setItem("10", $text10[0].value);
});


var $text11 = $("#11");
var text11 = localStorage.getItem("11");
$text11[0].value = text11;
$(".btn11").on("click", function () {
    localStorage.setItem("11", $text11[0].value);
});

var $text12 = $("#12");
var text12 = localStorage.getItem("12");
$text12[0].value = text12;
$(".btn12").on("click", function () {
    localStorage.setItem("12", $text12[0].value);
});

var $text13 = $("#13");
var text13 = localStorage.getItem("13");
$text13[0].value = text13;
$(".btn13").on("click", function () {
    localStorage.setItem("13", $text13[0].value);
});

var $text14 = $("#14");
var text14 = localStorage.getItem("14");
$text14[0].value = text14;
$(".btn14").on("click", function () {
    localStorage.setItem("14", $text14[0].value);
});

var $text15 = $("#15");
var text15 = localStorage.getItem("15");
$text15[0].value = text15;
$(".btn15").on("click", function () {
    localStorage.setItem("15", $text15[0].value);
});

var $text16 = $("#16");
var text16 = localStorage.getItem("16");
$text16[0].value = text16;
$(".btn16").on("click", function () {
    localStorage.setItem("16", $text16[0].value);
});

var $text17 = $("#17");
var text17 = localStorage.getItem("17");
$text17[0].value = text17;
$(".btn17").on("click", function () {
    localStorage.setItem("17", $text17[0].value);
});
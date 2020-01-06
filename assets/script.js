var $currentDate = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $hour = $(".hour");
var currentHour = moment().format("H");
const hourCheck = document.getElementsByTagName("textarea");

var textArea9 = $("#9");
textArea9.text(localStorage.getItem("9"));

$currentDate.text(moment().format("dddd, MMMM Do YYYY"));

for (i = 0; i < hourCheck.length; i++) {

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
    console.log("poop");
    localStorage.setItem("9", 9);
});
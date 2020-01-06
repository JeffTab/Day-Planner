var $currentDate = $("#currentDay");
var $saveBtn = $(".saveBtn");
var $hour = $(".hour");
var currentHour = moment().format("H");
console.log(currentHour);

const hourCheck = document.getElementsByTagName("textarea");

$currentDate.text(moment().format("dddd, MMMM Do YYYY"));

var timeCheck;




// if ($("#21") == currentHour) {
//     console.log("hi");
// };

for (i = 0; i < hourCheck.length; i++) {

    console.log(hourCheck[i].id)
    console.log(currentHour);

    if (hourCheck[i].id == currentHour) {
        hourCheck[i].removeAttribute("class");
        hourCheck[i].setAttribute("class", "col-10 textarea present");
    };

    if (parseInt(hourCheck[i].id) > parseInt(currentHour)) {
        hourCheck[i].removeAttribute("class");
        hourCheck[i].setAttribute("class", "col-10 textarea future");
    };
};


$(".btn").on("click", function () {
    console.log("poop");
});
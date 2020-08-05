$(document).ready(function(){

//current hour
var currentHour = moment().hours()
console.log(currentHour);


//current day
var currentDay = moment().format('LLLL');
$("#current-day").text(currentDay)

//save button click event handlers; when button is clicked, value of description is saved
$(".saveBtn").on("click", function(){
var value = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
//set items to local storage
//pass in key name (time) and value of the key
localStorage.setItem(time,value);
}); 


//loop through each time block div that is storing time and check against current time
//conditonal statements to create different colors for current, past, and future time blocks
console.log($(".time-block"))
$.each($(".time-block"), function() { 
    //parse hours into a an integer and split the id so that it loops through the hour div
var timeOnCalendar = parseInt($(this).attr("id").split("-")[1])
   if(currentHour > timeOnCalendar) {
        $(this).addClass("past"); //add class of "past" to the time-block div to change color to grey
    } else if(currentHour < timeOnCalendar) {
        $(this).addClass("future"); //add class of "future" to time-block div to change color to green
    } else if(currentHour === timeOnCalendar) {
        $(this).addClass("present"); //add class of "present" to time-block div to change color to red
    }
});


//save descriptions of time blocks to local storage so they remain after page refresh
//getItem retrieves items from local storage when page is refreshed
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

}); //document.ready closing brackets
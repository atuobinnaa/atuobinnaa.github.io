// Set the countdown date to February 29, 2024, at midnight
var countDownDate = new Date("Mar 06, 2024 09:30:00").getTime();

// Update the countdown every millisecond
var x = setInterval(function() {
    // Get the current time
    var now = new Date().getTime();

    // Calculate the remaining time until the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Update the HTML elements displaying days, hours, minutes and seconds
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1);

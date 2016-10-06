var $form = document.getElementById('picker');
// Defaults
var date = new Date();
$form.months.value = date.getMonth(); //months from 1-12
$form.day.value = date.getDate();
$form.hour.value = date.getHours();

$form.addEventListener('submit', function () {
    var months = this.months.value;
    var day = this.day.value;
    var hour = this.hour.value;
    var year = date.getFullYear();
    var target_date = new Date(months + ' ' + day + ', ' + year + ', ' + hour + ':00').getTime();
    // data odliczania koñcowego
    // var target_date = new Date('October 03, 2016, 23:59:00').getTime();
    // zmienne
    var days, hours, minutes, seconds;

    // pobranie tag element
    var countdownDay = document.getElementById("c-day");
    var countdownHour = document.getElementById("c-hour");
    var countdownMin = document.getElementById("c-min");
    var countdownSec = document.getElementById("c-sec");

    // update co sekunde
    setInterval(function () {


        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);


        countdownDay.innerHTML = days + " : ";
        if (hours < 10) {
            countdownHour.innerHTML = "0" + hours + " : ";
        } else {
            countdownHour.innerHTML = hours + " : ";
        }
        if (minutes < 10) {
            countdownMin.innerHTML = "0" + minutes + " : ";
        } else {
            countdownMin.innerHTML = minutes + " : ";
        }
        if (seconds < 10) {
            countdownSec.innerHTML = "0" + seconds;
        } else {
            countdownSec.innerHTML = seconds;
        }
    }, 1000);
});
/**
 * Created by aleksander on 2016-10-06.
 */

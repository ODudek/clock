let $form = document.getElementById('picker');
let date = new Date();
$form.months.value = date.getMonth(); //months from 1-12
$form.day.value = date.getDate();
$form.hour.value = date.getHours();

$form.addEventListener('submit', function () {
    let months = this.months.value;
    let day = this.day.value;
    let hour = this.hour.value;
    let year = date.getFullYear();
    let target_date = new Date(months + ' ' + day + ', ' + year + ', ' + hour + ':00').getTime();
    let days, hours, minutes, seconds;
    let $countdownDay = document.getElementById("c-day");
    let $countdownHour = document.getElementById("c-hour");
    let $countdownMin = document.getElementById("c-min");
    let $countdownSec = document.getElementById("c-sec");

    setInterval(function () {

        let current_date = new Date().getTime();
        let seconds_left = (target_date - current_date) / 1000;
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);


        $countdownDay.innerHTML = days + " : ";
        if (hours < 10) {
            $countdownHour.innerHTML = "0" + hours + " : ";
        } else {
            $countdownHour.innerHTML = hours + " : ";
        }
        if (minutes < 10) {
            $countdownMin.innerHTML = "0" + minutes + " : ";
        } else {
            $countdownMin.innerHTML = minutes + " : ";
        }
        if (seconds < 10) {
            $countdownSec.innerHTML = "0" + seconds;
        } else {
            $countdownSec.innerHTML = seconds;
        }
    }, 1000);
});

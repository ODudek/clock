let $form = document.getElementById('form');
let $date = document.getElementById('date');
let $time = document.getElementById('time');
let $displayDate = document.querySelectorAll('#display-date > span');

function getValue() {
    let dateValue = $date.value;
    let timeValue = $time.value;
    let datePicked = new Date(dateValue + " " + timeValue);
    let dateNow = new Date();
    let countDownDate = Math.abs(datePicked - dateNow);
    return countDownDate;
}

function displayCountDownDate() {
    let secondsLeft = getValue() / 1000;
    let day = parseInt(secondsLeft / 86400);
    secondsLeft = parseInt(secondsLeft % 86400);
    let hours = parseInt(secondsLeft / 3600);
    secondsLeft = parseInt(secondsLeft % 3600);
    let minutes = parseInt(secondsLeft / 60);
    secondsLeft = parseInt(secondsLeft % 60);
    let seconds = parseInt(secondsLeft);

    $displayDate[0].innerHTML = day;
    $displayDate[1].innerHTML = (hours < 10) ? '0' + hours : hours;
    $displayDate[2].innerHTML = (minutes < 10) ? '0' + minutes : minutes;
    $displayDate[3].innerHTML = (seconds < 10) ? '0' + seconds : seconds;
}

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    setInterval(function () {
        displayCountDownDate();
    }, 1000)
});

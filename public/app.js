
function startTime() {
    var timer= prompt('Enter Time')

    var startingMin =timer;
    var time = startingMin * 60;
    var timer = document.getElementById("timer");

    function updateCountDown() {
        var min = Math.floor(time / 60)
        var sec = time % 60;

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        timer.innerHTML = min + ":" + sec;

        // Forward
        // time++

        // Reverse
        time--

        if (min == 00 && sec == 00) {
            // alert("Oopps!! Time Up");
            // window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}
startTime()
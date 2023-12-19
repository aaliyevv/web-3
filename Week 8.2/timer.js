$(document).ready(function() {
    var interval;
    var remainingTime;

    function startTimer(duration) {
        clearInterval(interval);
        remainingTime = duration;
        interval = setInterval(function() {
            var minutes = parseInt(remainingTime / 60, 10);
            var seconds = parseInt(remainingTime % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            $('#timerDisplay').text(minutes + ":" + seconds);

            if (--remainingTime < 0) {
                clearInterval(interval);
                $('#timerDisplay').text("00:00");
            }
        }, 1000);
    }

    $('#startButton').on('click', function() {
        var duration = parseInt($('#timeInput').val());
        if (!isNaN(duration)) {
            startTimer(duration);
        }
    });

    $('#resetButton').on('click', function() {
        clearInterval(interval);
        $('#timerDisplay').text("00:00");
    });
});
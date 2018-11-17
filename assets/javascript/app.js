



// Start button begins the 60 sec countdown
window.onload = function () {


    $("#start").on("click", timer.start);
};


//  SetInterval variable that runs the timer
var intervalId;

// Prevents timer from being sped up
var timerRunning = false;

// timer object 
var timer = {

    time: 60,

    start: function () {

        // Starts timer and sets timerRunning to true
        if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
        }
    },
    stop: function () {
            clearInterval(intervalId);
            timerRunning = false;
    },

    count: function () {

        // Decrement time by 1
        timer.time--;
        console.log(timer.time);
        //Display timer and check for timout
        $("#timer").text("Time: " + timer.time + " sec");
        if (timer.time <= 0) {
            timer.stop();
            scoreTotal();
            
        }
    },

};

// Submit function to stop the clock, total the score display the score after clicking submit
function mySubmit() {
    timer.stop();
    scoreTotal();
}



// Scoring logic after game is over

function scoreTotal() {
    var score = 0;
    if ($('#a03').is(':checked')) { score++; };
    if ($('#a05').is(':checked')) { score++; };
    if ($('#a10').is(':checked')) { score++; };
    if ($('#a13').is(':checked')) { score++; };
    if ($('#a18').is(':checked')) { score++; };
    if ($('#a21').is(':checked')) { score++; };
   
    //Display the score after game is over
    $("body").html("Total right answers: " + score+ "             Total wrong answers: " + (6 - score));


}
$(document).ready(function() {

    var targetNumber = 0;
    var userScore = 0;
    var totalWins = 0;
    var totalLosses = 0;
    var onyx = Math.floor(Math.random() * 12) + 1;
    var jade = Math.floor(Math.random() * 12) + 1;
    var snowflake = Math.floor(Math.random() * 12) + 1;
    var whalevomit = Math.floor(Math.random() * 12) + 1;

    $("#blackOnyx").on("click", function() {
        userScore = userScore + onyx;
        $("#scoreTotal").html(userScore);

        if (userScore === targetNumber) {
            totalWins++;
            $("#wins").html(totalWins);
            $("#win-lose-alert").html("WINNER WINNER CHICKEN DINNER!!!");
            // alert("WINNER WINNER CHICKEN DINNER");
            restartGame();
        } else if (userScore > targetNumber) {
            totalLosses++;
            $("#losses").html(totalLosses)
            $("#win-lose-alert").html("YOU'RE AN L7 WEENIE!!!");
            // alert("YOU LOSER");
            restartGame();
        }

    });

    $("#newJade").on("click", function() {
        userScore = userScore + jade;
        $("#scoreTotal").html(userScore);

        if (userScore === targetNumber) {
            totalWins++;
            $("#wins").html(totalWins)
            $("#win-lose-alert").html("WINNER WINNER CHICKEN DINNER!!!");
            // alert("WINNER WINNER CHICKEN DINNER");
            restartGame();
        } else if (userScore > targetNumber) {
            totalLosses++;
            $("#losses").html(totalLosses)
            $("#win-lose-alert").html("YOU'RE AN L7 WEENIE!!!");
            // alert("YOU LOSER");
            restartGame();
        }

    });


    $("#snowFlake").on("click", function() {
        userScore = userScore + snowflake;
        $("#scoreTotal").html(userScore);

        if (userScore === targetNumber) {
            totalWins++;
            $("#wins").html(totalWins)
            $("#win-lose-alert").html("WINNER WINNER CHICKEN DINNER!!!");
            // alert("WINNER WINNER CHICKEN DINNER");
            restartGame();
        } else if (userScore > targetNumber) {
            totalLosses++;
            $("#losses").html(totalLosses)
            $("#win-lose-alert").html("YOU'RE AN L7 WEENIE!!!");
            // alert("YOU LOSER");
            restartGame();
        }

    });

    $("#whaleVomit").on("click", function() {
        userScore = userScore + whalevomit;
        $("#scoreTotal").html(userScore);

        if (userScore === targetNumber) {
            totalWins++;
            $("#wins").html(totalWins)
            $("#win-lose-alert").html("WINNER WINNER CHICKEN DINNER!!!");
            // alert("WINNER WINNER CHICKEN DINNER");
            restartGame();
        } else if (userScore > targetNumber) {
            totalLosses++;
            $("#losses").html(totalLosses)
            $("#win-lose-alert").html("YOU'RE AN L7 WEENIE!!!");
            // alert("YOU LOSER");
            restartGame();
        }

    });

    restartGame()

    function restartGame() {
        userScore = 0;
        totalWins = 0;
        totalLosses = 0;
        targetNumber = Math.floor(Math.random() * 120) + 19;
        onyx = Math.floor(Math.random() * 12) + 1;
        jade = Math.floor(Math.random() * 12) + 1;
        snowflake = Math.floor(Math.random() * 12) + 1;
        whalevomit = Math.floor(Math.random() * 12) + 1;
        $("#scoreTotal").html(userScore);
        $("#curNumber").html(targetNumber);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    // Minimum delay time (in milliseconds)
    var minimumDelay = 3000;
    var delayTimer;

    // Set a timeout for the minimum delay
    delayTimer = setTimeout(function () {
        if (document.readyState === "complete") {
            preloader.style.display = "none";
            content.style.display = "block";
        }
    }, minimumDelay);

    window.onload = function () {
        clearTimeout(delayTimer);
        preloader.style.display = "none";
        content.style.display = "block";
    };
});


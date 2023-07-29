var petals = document.getElementsByClassName("petal");

function changeColor(element, duration) {
    var currentColor = 237;
    var targetColor = 0;
    var interval = 8;
    var steps = duration / interval;
    var stepSize = (currentColor - targetColor) / steps;

    var currentStep = 0;
    var colorInterval = setInterval(function() {
        currentColor -= stepSize;
        element.style.backgroundColor = "rgb(247," + currentColor + "," + currentColor + ")";
        currentStep++;

        if (currentStep >= steps) {
            clearInterval(colorInterval);
        }
    }, interval);
}

setTimeout(function() {
    for (var i = 0; i < petals.length; i++) {
        if (i !== 25) {
            changeColor(petals[i], 3000);
        }
    }
}, 20000);

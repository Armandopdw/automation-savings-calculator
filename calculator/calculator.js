document.addEventListener("DOMContentLoaded", function () {
    // VARIABLES
    // ----------------------------------------------------------

    var result;
    var calculator = document.querySelector('.calculator');
    var calculatorHours = calculator.querySelector('.calculator__hours');
    var calculatorPeople = calculator.querySelector('.calculator__people');
    var calculatorRate = calculator.querySelector('.calculator__rate');
    var calculatorResult = calculator.querySelector('.calculator__result');
    var peopleAmount = calculator.querySelector('.people-amount');
    var hourAmount = calculator.querySelector('.hour-amount');
    var rateAmount = calculator.querySelector('.rate-amount');

    function numberWithCommas(num, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
    // Update calculator function to run on change in sliders
    function updateCalculator(peopleAmount, calculatorPeople, calculatorHours, calculatorPeople, calculatorRate, calculatorResult) {
        peopleAmount.textContent = calculatorPeople.value;
        hourAmount.textContent = calculatorHours.value;
        rateAmount.textContent = calculatorRate.value;
        result = parseFloat(calculatorHours.value) * parseFloat(calculatorPeople.value) * parseFloat(calculatorRate.value) * 52
        calculatorResult.textContent = '€ ' + numberWithCommas(result.toFixed(0), 1);
    }

    // Init calculator
    // ----------------------------------------------------------
    updateCalculator(peopleAmount, calculatorPeople, calculatorHours, calculatorPeople, calculatorRate, calculatorResult)

    // Add event listeners for change in slider
    // ----------------------------------------------------------

    calculatorPeople.addEventListener('input', function () {
        updateCalculator(peopleAmount, calculatorPeople, calculatorHours, calculatorPeople, calculatorRate, calculatorResult)
    });

    calculatorHours.addEventListener('input', function () {
        updateCalculator(peopleAmount, calculatorPeople, calculatorHours, calculatorPeople, calculatorRate, calculatorResult)
    });

    calculatorRate.addEventListener('input', function () {
        updateCalculator(peopleAmount, calculatorPeople, calculatorHours, calculatorPeople, calculatorRate, calculatorResult)
    });

});
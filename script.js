let result = document.getElementById('result');
let transactionHistory = document.getElementById('transaction-history');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = result.value;
        let resultValue = eval(expression);
        result.value = resultValue;

        // Store transaction history
        let transaction = expression + " = " + resultValue;
        transactionHistory.innerHTML += "<p>" + transaction + "</p>";
    } catch (error) {
        result.value = "Error";
    }
}
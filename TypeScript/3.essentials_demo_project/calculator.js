function calculateInvestment(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initialAmount < 0) {
        return 'Intial Amount should be greater than 0';
    }
    if (annualContribution < 0) {
        return 'Annual Contribution should be greater than 0';
    }
    if (expectedReturn < 0) {
        return 'Expected Return  should be greater than 0';
    }
    if (duration < 0) {
        return 'Duration should be greater than 0';
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: "".concat(i + 1),
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContributions: totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var entry = results_1[_i];
        console.log("Year ".concat(entry.year, "\n            Total Amount ").concat(entry.totalAmount, "\n            Total Interest Earned ").concat(entry.totalInterestEarned, "\n            Total Contributions ").concat(entry.totalContributions));
    }
}
var results = calculateInvestment({
    initialAmount: 1000,
    annualContribution: 30000,
    expectedReturn: 40000,
    duration: 3
});
printResults(results);

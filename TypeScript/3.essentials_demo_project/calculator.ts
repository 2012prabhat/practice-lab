type InvestmentData = {
    initialAmount:number,
    annualContribution:number,
    expectedReturn:number,
    duration:number,
}

type InvestmentResult = {
    year:string,
    totalAmount:number,
    totalContributions:number,
    totalInterestEarned:number
}

type CalculationResult = InvestmentResult[] | string


function calculateInvestment(data:InvestmentData):CalculationResult{
    const {initialAmount, annualContribution, expectedReturn, duration} = data;
    if(initialAmount < 0){
        return 'Intial Amount should be greater than 0'
    }
    if(annualContribution < 0){
        return 'Annual Contribution should be greater than 0'
    }
    if(expectedReturn < 0){
        return 'Expected Return  should be greater than 0'
    }
    if(duration < 0){
        return 'Duration should be greater than 0'
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults:InvestmentResult[] = [];
    for(let i=0;i<duration;i++){
      total = total * (1 + expectedReturn);
      totalInterestEarned = total - totalContributions - initialAmount;
      totalContributions = totalContributions + annualContribution;
      total = total + annualContribution;

      annualResults.push({
        year:`${i+1}`,
        totalAmount:total,
        totalInterestEarned,
        totalContributions
      })

    }
    return annualResults;
}

function printResults(results:CalculationResult):void{
    if(typeof results === 'string'){
        console.log(results)
        return;
    }
    for(let entry of results){
        console.log(`Year ${entry.year}
            Total Amount ${entry.totalAmount}
            Total Interest Earned ${entry.totalInterestEarned}
            Total Contributions ${entry.totalContributions}`)
    }
}


const results = calculateInvestment({
    initialAmount:1000,
    annualContribution:30000,
    expectedReturn:40000,
    duration:3
})

printResults(results);
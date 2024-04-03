function calculateTaxableIncome(basicSalary, benefits){
    return basicSalary + benefits;
} 

function calculatePayee(taxableIncome){
    const taxRates = [
        {limit: 24000, rate: 0.01},
        {limit: 11667, rate: 0.15},
        {limit: 11667, rate: 0.2},
        {limit: 11667, rate: 0.25},
        {limit: 11668, rate: 0.3}
    ];
    let tax = 0;
    let remainingIncome = taxableIncome;
    for(const{limit, rate} of taxRates){
        if(remainingIncome > limit){
        tax += limit * rate;
        remainingIncome -= limit;
    }else {
        tax += remainingIncome * rate;
        break;
    }
}
return tax;
}
function calculateNHIFDeductions(basicSalary){
    const nhifRates = [
        {limit: 5999, deduction: 150},
        {limit: 7999, deduction: 300},
        {limit: 11999, deduction: 400},
        {limit: 14999, deduction: 500},
        {limit: 19999, deduction: 600},
        {limit: 24999, deduction: 750},
        {limit: 29999, deduction: 850},
        {limit: 34999, deduction: 900},
        {limit: 39999, deduction: 950},
        {limit: 44999, deduction: 1000},
        {limit: 49999, deduction: 1100},
        {limit: 59999, deduction: 1200},
        {limit: 69999, deduction: 1300},
        {limit: 79999, deduction: 1400},
        {limit: 89999, deduction: 1500},
        {limit: 99999, deduction: 1600}
    ];
    for(const{limit, deduction} of nhifRates){
        if(basicSalary <= limit){
            return deduction;
        }
    }
    return 1700; //for salary above 99999, the deduction is 1700
}

function calculateNSSFContributions(basicSalary){
    const nssfRate = 0.06;
    return Math.min(basicSalary * nssfRate, 2000); // Maximum NSSF contribution is 2000
}

function calculateNetSalary(basicSalary, benefits){
    const taxableIncome = calculateTaxableIncome(basicSalary, benefits);
    const payee = calculatePayee(taxableIncome);
    const nhif = calculateNHIFDeductions(basicSalary);
    const nssf = calculateNSSFContributions(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - nhif - nssf;
    return netSalary;
}
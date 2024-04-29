function calculate(event){
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loanInput').value);
    const interestRate = parseFloat(document.getElementById('interestInput').value);
    const loanTerm = parseFloat(document.getElementById('termInput').value);

    if(isNaN(loanAmount)||isNaN(interestRate)||isNaN(loanTerm)){
        showError('please enter a valid number');
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;

    const monthlyPayments = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayments * totalPayments)-loanAmount;
    
    displayResult(monthlyPayments,totalInterest);
}
function displayResult(monthlyPayments,totalInterest){
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <h4>Monthly Payments: ${monthlyPayments.toFixed(2)}</h4>
        <h4>Total Interest: ${totalInterest.toFixed(2)}</h4> 
        `;
}
function showError(message){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h4>Error: ${message}</h4>`
}
document.getElementById('loanForm').addEventListener('click', calculate);

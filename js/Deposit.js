document.getElementById('deposit-btn').addEventListener('click',function(){
    // set input file
    let myDeposit = document.getElementById('ourDeposit');
    let newDepositAmountstring = myDeposit.value ;
    let newDepositAmount = parseFloat(newDepositAmountstring);

    // set Deposit file

    let totalDeositElement = document.getElementById('cngDeposit');
    let previousTotalDeositString = totalDeositElement.innerText;
    let previousTotalDeosit = parseFloat(previousTotalDeositString);

    // total ballance add
    let currentDepositTotal = previousTotalDeosit + newDepositAmount;
    totalDeositElement.innerText = currentDepositTotal;

    // set main Ballance file

    let totalBallanceElement = document.getElementById('ballance-total')
    let previousBallanceString = totalBallanceElement.innerText;
    let previousBallance = parseFloat(previousBallanceString);

    let mainBallance = previousBallance + currentDepositTotal;
    totalBallanceElement.innerText = mainBallance;
    
    // clear the value

    myDeposit.value = '';

})
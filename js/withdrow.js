document.getElementById('Withdraw-btn').addEventListener('click',function(){
    // set input file
    let myWithdraw = document.getElementById('ourWithdraw');
    let withdrawElemintString = myWithdraw.value;
    let withdrawElement = parseFloat(withdrawElemintString);

    // set withdraw file
    let totalWithdraw = document.getElementById('cngWithdraw');
    let totalWithdrawString = totalWithdraw.innerText;
    let mainWithdraw = parseFloat(totalWithdrawString);

    // total withdraw add
    let withdrawAdd = withdrawElement + mainWithdraw;
    totalWithdraw.innerText = withdrawAdd;

    // your main ballance total
    let mainBallanceWithdraw = document.getElementById('ballance-total');
    let ballanceWithdrawString = mainBallanceWithdraw.innerText;
    let mainBallance = parseFloat(ballanceWithdrawString);

    let newbalance = mainBallance - mainWithdraw;
    mainBallanceWithdraw.innerText = newbalance;
    // claer value

    myWithdraw.value = '';

})
document.getElementById('submit').addEventListener('click',function(){

    // Email Section
    let myEmail = document.getElementById('text-email');
    let email = myEmail.value;
    console.log(email);

    // pass section
    let myPass = document.getElementById('text-pass');
    let pass = myPass.value;
    console.log(pass);

    // verifai pass and email

    if(email === 'hasibur017@gmail.com'&& pass === 'hasib1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Its not your account')
    }

})




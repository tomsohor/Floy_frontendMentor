const email = document.getElementById("email");
const Form = document.getElementById('form');
const emailValidation = document.querySelector('.err');





Form.addEventListener('submit',(e)=>{
    vadateEmail(email.value);
    e.preventDefault();
})

function vadateEmail(x){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(x)){
        alert('valid');

    }else {
        if (x == ""){
            emailValidation.innerHTML = "Empty email";
            emailValidation.style.display = "block"
        // alert("email can't be empty invalid");
    }else{
        emailValidation.innerHTML = "please enter a valid email address";
            emailValidation.style.display = "block"
    }
    
}
}

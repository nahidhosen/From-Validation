let nameError = document.getElementById('name_error');
let numberError = document.getElementById('phone_error');
let emailError = document.getElementById('email_error');
let msgError = document.getElementById('msg_error');
let submitError = document.getElementById('submit_error');

function validateName(){
    const userName = document.getElementById('contact_name').value;
    if(userName.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    const userNum = document.getElementById('Contact_phone').value;
   
    if(!userNum.match(/^[0-9]{11}$/)){
        
        if(userNum.length === 0){
            numberError.innerHTML = 'Phone Number is required';
            return false
        }
      
        if(userNum.length !== 11){
            numberError.innerHTML = 'Phone Number Should be 11 digit';
            return false;
        }
        numberError.innerHTML = 'Only Digit Please';
        return false;
    }
   
    numberError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}
function validateEmail(){
    const userEmail = document.getElementById('Contact_email').value;
    if(userEmail.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!userEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invaild';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}
function validateMsg(){
    const userMsg = document.getElementById('Contact_msg').value;
    let required = 30;
    let left = required  - userMsg.length;
    if(left > 0){
        msgError.innerHTML = left + 'more chareqter required';
        return false;
    } 
    msgError.innerHTML = '<i class="fas fa-circle-check"></i>';
    return true;
}
function validate_form (){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMsg()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Fix Error submit';
        setTimeout(function(){submitError.style.display = 'none'}, 3000)
        return false;
    }
}
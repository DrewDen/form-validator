const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


// *Show input error message
function showError(input, message){
    const formControl = input.parentElement; 
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// *Show succes border
function showSucces(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';

}

// *Cecking email is valid 
function validEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//*Event Listeners 
form.addEventListener('submit', function(e){

    e.preventDefault();

    console.log(username.value);

    if (username.value === ''){
        showError(username, 'Username is required');
    } else {
        showSucces(username);
    }

    if (email.value === ''){
        showError(email, 'Email is required');
    } else if(!validEmail(email.value)){
        showError(email, 'Email is not valid');
    } else {
        showSucces(email);
    }

    if (password1.value === ''){
        showError(password1, 'Password is required');
    } else {
        showSucces(password1);
    }

    if (password2.value === ''){
        showError(password2, 'Password 2 is required');
    } else {
        showSucces(password2);
    }
    
});


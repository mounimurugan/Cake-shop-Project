const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {
    ValidateForm();
    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();

    }
});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function ValidateForm() {
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'name can not be empty');
    }
    else if (usernameInput.value.trim().length < 5 || usernameInput.
        value.trim().length > 15) {
        setError(usernameInput, 'Name must bemin 5 and max 15 Characters');
    } else {
        setSuccess(usernameInput);
    }
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'provide email address');
    }
    else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'provide valid email address');
    }
    if (passwordInput.value.trim() == '') {
        setError(passwordInput, 'password can not be empty');
    } else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
        setError(passwordInput, 'password min 6 and max 20 characters');
    } else {
        setSuccess(passwordInput);
    }
    if (confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput, 'password can not be empty');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput, 'password does not match');
    } else {
        setSuccess(confirmPasswordInput);
    }
}
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;


}
function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
}
const username=document.querySelector('#username');
const password=document.querySelector('#password');
const sumbit=document.querySelector('#submit');

sumbit.addEventListener('click',(event)=>{
     event.preventDefault();

    if(username.value.trim() ==''){
        error(username, 'username can not be empty');
    }else{
        success(username);
    }
    if(password.value.trim() ==''){
        error(password,'passwword can not be empty');
    }
    else{
        success(password);
    }  
});
function error(element, msg){
    element.style.border = '2px red solid';
    const parent = element.parentElement;
    const p =parent.querySelector('p');
    p.textContent= msg;
    p.style.visibility='visible';
}
function success(element){
    element.style.border = '2px green solid';
    const parent = element.parentElement;
    const p =parent.querySelector('p');
    p.style.visibility='hidden';  
}
import { SendForm } from './SendForm';
import ROOT from '../ROOT';

const loginBoxContainer = document.createElement('div');

const loginbBox = 
`           
    <div class="loginBoxMiddle">

        <div class="exit"><img src="../img/cross.png"></div>
        <div class="Title">Zaloguj się do sklepu</div>

        <input type="text" placeholder="login" name="login" maxlength="30">
        <input id="loginPassword"type="password" placeholder="hasło" name="hasło" maxlength="30">

        <button class="loginButton">Zaloguj</button>
    </div>
`;


loginBoxContainer.innerHTML = loginbBox;
loginBoxContainer.classList.add('loginBoxContainer', 'hide'); 

document.body.appendChild(loginBoxContainer);

const loginBoxMiddle = loginBoxContainer.children[0];
const password = document.getElementById('loginPassword') as HTMLInputElement;
const exit = loginBoxMiddle.querySelector('.loginBoxMiddle .exit');
const inputs = loginBoxMiddle.getElementsByTagName('input');

const loginForm = new SendForm(inputs, document.querySelector('.loginBoxContainer .loginButton'));

function turnOffLoginBoxContainer(){

    loginBoxContainer.classList.toggle('hide');
    password.value = '';
    console.dir(password);
    loginForm.removeHelpWindow(password, 'condition6Letters');
}

const loginFields = document.querySelectorAll('div[data-log="login"]');
const logoutFields = document.querySelectorAll('div[data-log="logout"]');
const userLogin = document.querySelector('.userLogin'); 



const onlyOnceGenerateHelpWindow = (function() {

    let fired = false;

    return function() {
        
        if(!fired) {
            this.generateHelpWindow(this.submitButton, 'Zły login lub hasło', 'unmatched data');
            
            for(const input of this.inputs) {

                input.addEventListener('input' , function removesUnmatchedDataHelpWindow() {

                    this.removeHelpWindow(this.submitButton, 'unmatched data');
                }.bind(this));
            }

            fired = true;
        }
    }
})()

loginForm.launch(function(user: any) {


    onlyOnceGenerateHelpWindow.call(this);
    
    if(user === 'Brak wyniku') {

        if(!this.submitButton['conditions']['unmatched data'].isActive) this.addHelpWindow(this.submitButton,'unmatched data', false);
        password.value = '';

        return 0;
    }

    userLogin.textContent = user[0].login;

    loginFields.forEach(el => el.classList.remove('hide'));
    logoutFields.forEach(el => el.classList.add('hide'));
    loginBoxContainer.classList.add('hide');
    [...inputs].forEach(el => el.value = '');
});

const logout = document.querySelector('.logout');
console.log(logout);

logout.addEventListener('click', function logout(event: any) {

    loginFields.forEach(el => el.classList.add('hide'));
    logoutFields.forEach(el => el.classList.remove('hide'));
    userLogin.textContent = '';

    fetch(ROOT + 'app/login/logout.php');
})

document.querySelector('.topBarLog').addEventListener('click', turnOffLoginBoxContainer);
exit.addEventListener('click', turnOffLoginBoxContainer);














import { FormController } from './FormController';

const loginBoxContainer = document.createElement('div');

const loginbBox = 
`           
    <div class="loginBoxMiddle">

        <div></div>
        <div class="Title">Zaloguj się do sklepu</div>

        <input type="text" placeholder="login" name="login">
        <input type="password" placeholder="hasło" name="hasło">

        <button class="loginButton">Zaloguj</button>
    </div>
`;


loginBoxContainer.innerHTML = loginbBox;
loginBoxContainer.classList.add('loginBoxContainer', );  //hide classa trzeba dać

document.body.appendChild(loginBoxContainer);

const loginBoxMiddle = loginBoxContainer.children[0];

document.querySelector('#topBarLog').addEventListener('click', function() {

    loginBoxContainer.classList.toggle('hide');
});

const inputs = loginBoxMiddle.getElementsByTagName('input');

new FormController(inputs).launch();

fetch('http://localhost:4456/Wedeczki/public/app/login/login.php', {
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(
        new Array(inputs.length).fill(0).map((el, i) => {
            return  {
                        name: inputs[i].name,
                        value: inputs[i].value
                    };
        })
    )
})
.then(res => res.json())
.then(res => {
    console.log(res);
});










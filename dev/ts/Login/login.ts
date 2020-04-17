const loginBoxParent = document.createElement('div');

const loginbBox = 
`           
            <input type="text" placeholder="login" name="login">
            <input type="password" placeholder="hasło" name="password">

            <button class="loginButton">Zaloguj</button>
`;


loginBoxParent.innerHTML = loginbBox;
loginBoxParent.classList.add('loginBox');
loginBoxParent.classList.add('hide');


document.body.appendChild(loginBoxParent);

document.querySelector('#topBarLog').addEventListener('click', function() {

    loginBoxParent.classList.toggle('hide');
});


interface InputsToWatch {
    name?: string;
    type?: string;
    value?: string;
}

let inputsToWatch: Array<InputsToWatch> = [{}];

for(const [index, input] of [...loginBoxParent.children].entries() as IterableIterator<[number, HTMLInputElement]>) {

    if(input.type != 'text' && input.type != 'password') continue;

    inputsToWatch = [
        ...inputsToWatch,
        {
            name: input.name,
            type: input.type,
            value: input.value
        }
    ];

    input.addEventListener('input', function monitoringChanges({target}: {target: any}) {

        inputsToWatch[index].name = target.name;
        inputsToWatch[index].type = target.type;
        inputsToWatch[index].value = target.value;
    });
}

document.querySelector('.loginBox .loginButton').addEventListener('click', function submit() {

    console.log('submit');

    fetch('http://localhost/Wedeczki/pulic/views/app/database/test.php', {
        method: 'post',
        body: JSON.stringify(inputsToWatch)
    })
    .then((res) => res.json())
    .then((res) => {console.log(JSON.parse(res));

    });
});










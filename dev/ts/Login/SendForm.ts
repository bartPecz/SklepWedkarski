import {FormController} from './FormController';
import ROOT from '../ROOT';

export class SendForm extends FormController {

    constructor(public inputs: HTMLCollectionOf<HTMLInputElement>, public submitButton: HTMLElement) {
        super(inputs, submitButton);
    }

    launch(fn = null) {

        super.launch();

        this.submitButton.addEventListener('click', async (buttonEvent) => {

            let result = await this.sendDataButtonClick(buttonEvent);

            if(!result) return 0;

            if(fn != null) fn.call(this, result);
        }); 
    }

    async sendDataButtonClick(e) {

        const button = e.target;

        if(!this.conditionExecution) return 0;

        button.disabled = true;

        try {
            let responseStream = await fetch(ROOT + 'app/login/login.php', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    new Array(this.inputs.length).fill(0).map((el, i) => {
                        return  {
                                    name: this.inputs[i].name,
                                    value: this.inputs[i].value
                                };
                    })
                )
            })  
            
            if(responseStream.ok == false) throw new Error('Connecion error - check your addres');

            let json = await responseStream.json();

            button.disabled = false;

            return json;
        }
        catch (err){
            
            console.error(err);

            button.disabled = false;

            return false;
        }
        
    }    
}
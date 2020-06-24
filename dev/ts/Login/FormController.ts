export class FormController {

    public button: HTMLElement;
    public conditionExecution: boolean;

    constructor(public inputs: HTMLCollectionOf<HTMLInputElement>, public submitButton: HTMLElement) {
        
        if(this.constructor === FormController) throw new Error(`Can't use abstract class to create object instances`);

        this.inputs = inputs;
        this.button = submitButton;

    }

    launch(fn = null) {
        
        for(const input of [...this.inputs] as [HTMLInputElement]) {

            input['conditions'] = new Object();

            this.condition6Letters(input); 
            this.forbidenSigns(input);           
        }

        this.submitButton['conditions'] = new Object();

        if(fn != null) fn();
    }

    generateHelpWindow(input: HTMLInputElement, message: string, condition: string): HTMLElement {

        const helpWindow = document.createElement('div');

        helpWindow.innerHTML = `<div>- ${input.name + ' ' + message}</div>`;

        helpWindow.style.setProperty('font-size', '14px');
        helpWindow.style.setProperty('color', 'rgb(226, 126, 126)');
        helpWindow.style.setProperty('width', '200px');

        input['conditions'][condition] = new Object();

        input['conditions'][condition].content = helpWindow;

        return helpWindow;
    }

    addHelpWindow(input: HTMLInputElement, condition: string, redbox: boolean = true) {

        input.after(input['conditions'][condition].content);
        
        input['conditions'][condition].isActive = true;
        this.conditionExecution = false;

        let style = 
            `
                border: 1px solid rgb(226, 126, 126);
                background-color: rgb(226, 126, 126);
            `;

        if(redbox) input.style.cssText = style;

    }

    removeHelpWindow(input: HTMLInputElement, condition: string) {

        input['conditions'][condition].content.remove();

        input['conditions'][condition].isActive = false;

        for(const condition in input['conditions']) {

            if(input['conditions'][condition].isActive) return 0;
        }

        input.style.cssText = null;
        this.conditionExecution = true; // Działa tylko wtedy gdy warunki są sprawdzane przed wysłaniem
    }

    condition6Letters(input) {

        let message = 'musi składać się z conajmniej 6 liter';
        let condition = 'condition6Letters';

        this.showAbove6Letters(input, this.button, condition, message);
        this.removeUnder6Letters(input, condition);
    }

    showAbove6Letters(input: HTMLInputElement, button: HTMLElement, condition: string, message: string) {

        this.generateHelpWindow(input, message, condition);

        const addWhenLetterAbove6 = () => {

            if(input.value.length < 6) {
                this.addHelpWindow(input, condition);
            }
        }
        
        button.addEventListener('click', addWhenLetterAbove6);
    }

    removeUnder6Letters(input: HTMLInputElement, condition: string) {
        const removeWhenLetterUnder6 = () => {
            console.log(condition);

            if(input.value.length >= 6) {
                this.removeHelpWindow(input, condition);
            }
        }

        input.addEventListener('input', removeWhenLetterUnder6);
    }

    forbidenSigns(input: HTMLInputElement) {

        if(input.type == 'password') return 0;
        
        let message = 'posiada niedozwolony znak';
        let condition = 'forbidenSigns';

        this.generateHelpWindow(input, message, condition);

        const reg = /[!@#\$%\^&\*\(\)\\\?<>\s]/i;

        const addWhenForbidenSign = () => {

            if(reg.test(input.value)) {
                this.addHelpWindow(input, condition);
            }
            else {
                this.removeHelpWindow(input,condition);
            }
        }

        input.addEventListener('input', addWhenForbidenSign);
    }

}
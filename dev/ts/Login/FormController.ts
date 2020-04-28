export class FormController {

    public button: HTMLElement;

    constructor(public inputs: HTMLCollectionOf<HTMLInputElement>) {
        this.inputs = inputs;
        this.button = document.querySelector('.loginBoxContainer .loginButton');
    }

    launch() {
        
        for(const input of [...this.inputs] as [HTMLInputElement]) {

            this.condition6Letters(input);            
        }
    }

    generateHelpWindow(input: HTMLInputElement, message: string, condition: string): HTMLElement {

        const helpWindow = document.createElement('div');

        helpWindow.innerHTML = `<div>${input.name + ' ' + message}</div>`;

        input[condition] = new Object();

        input[condition].content = helpWindow;

        return helpWindow;
    }

    addHelpWindow(input: HTMLInputElement, condition: string) {
        input.after(input[condition].content);

        let style = 
            `
                border: 1px solid rgb(226, 126, 126);
                background-color: rgb(226, 126, 126);
            `;

        input.style.cssText = style;

    }

    removeHelpWindow(input: HTMLInputElement, condition: string) {
        input[condition].content.remove();

        input.style.cssText = null;
    }

    condition6Letters(input) {

        let message = 'musi składać się z conjamniej 6 liter';
        let condition = 'condition6Letters';

        this.showAbove6Letters(input, this.button, condition, message);
        this.removeUnder6Letters(input, condition);
    }

    removeUnder6Letters(input: HTMLInputElement, condition: string) {

        const removeWhenLetterUnder6 = () => {

            if(input.value.length >= 6) {
                this.removeHelpWindow(input, condition);
            }
        }

        input.addEventListener('input', removeWhenLetterUnder6);
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
}
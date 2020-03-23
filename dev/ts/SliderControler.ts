export default class SliderControler {

    protected readonly imgFrame: HTMLElement;
    pass: number = 0;
    
    constructor(imgFrame: HTMLElement) {

        this.imgFrame = imgFrame;

        this.onResize();
    }

    get position(): number {


        return parseInt(window.getComputedStyle(this.imgFrame).left);
    }

    set position(newVar: number) {
        this.imgFrame.style.left = newVar + 'px';
    }

    get blockWidth(): number {

        return parseInt(window.getComputedStyle(this.imgFrame.children[0]).width);
    }

    onResize() {

        window.addEventListener('resize', () => {
            console.log(this.pass);
            this.position = -1 * this.pass * this.blockWidth;
        });

    }

    howManyPass() {
        this.pass = (this.position === 0) ? 0 : Math.abs(this.position / this.blockWidth);
    }

    onClick(button: HTMLElement, fn: Function) {

        button.addEventListener('click', () => {

            fn();
        });
    }

    forward(button: HTMLElement): void {

        this.onClick(button, () => {

          

                this.position = this.position - this.blockWidth;

                this.howManyPass();
           
        });
    }

    backward(button: HTMLElement): void {

        this.onClick(button, () => {

            this.position = this.position + this.blockWidth;

            this.howManyPass();
            // console.log(this.position + this.blockWidth);
        });
    }


}
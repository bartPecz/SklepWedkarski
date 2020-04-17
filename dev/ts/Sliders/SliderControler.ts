export default class SliderControler {

    readonly imgFrame: HTMLElement;
    pass: number = 0;
    isAnimate: boolean = false;
    lastVisibleNumber: number;
    backwardButton: HTMLElement;
    forwardButton: HTMLElement;

    constructor(imgFrame: HTMLElement) {

        this.imgFrame = imgFrame;
        this.lastVisibleNumber = parseFloat((this.pass + this.countOfVisibleParts).toFixed());

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

    get imgFrameWidth(): number {
        return parseInt(window.getComputedStyle(this.imgFrame).width);
    }

    set imgFrameWidth(newWidth: number) {
        this.imgFrame.style.width = newWidth + 'px';
    }

    get countOfVisibleParts(): number {
        return this.imgFrameWidth/this.blockWidth;
    }


    animationEnd() {
        
        this.imgFrame.addEventListener('transitionend', () => {

            this.isAnimate = false;
            this.howManyPass();                        
            this.lastVisibleNumber = parseFloat((this.pass + this.countOfVisibleParts).toFixed());
        });
    }
    
    howManyPass(): number  {
        return this.pass = (this.position === 0) ? 0 : Math.round(Math.abs(this.position / this.blockWidth));
    }

    onClick(backward: HTMLElement, forward: HTMLElement) {

        this.backwardButton = backward;
        this.forwardButton = forward;

        this.animationEnd();

        this.backwardButton.classList.add('hide');

        const map = new Map([
            [backward, this.backward],
            [forward, this.forward]
        ])

        for(const [key, value] of map.entries()){

            key.addEventListener('click', () => {
                value.call(this);
            })
        }

    }

    setStepsNumber(): number {
        return 1;
    }


    forward() {

        if(!this.isAnimate){

            this.isAnimate = true;
            this.position = this.position - this.setStepsNumber() * this.blockWidth;
        }
    }

    backward() {
            
            if(this.position === 0){
                return;
            } 

            if(!this.isAnimate) {

                this.isAnimate = true;
                this.position = this.position + this.setStepsNumber()*this.blockWidth;
            }
    }

}
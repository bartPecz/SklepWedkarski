export default class SliderControler {

    protected readonly imgFrame: HTMLElement;
    protected pass: number = 0;
    protected isAnimate: boolean = false;
    
    constructor(imgFrame: HTMLElement) {

        this.imgFrame = imgFrame;

        this.onResize();
        this.animationEnd();
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

    onResize() {

        window.addEventListener('resize', () => {


            this.position = -1 * this.pass * this.blockWidth;

            this.imgFrame.style.transitionProperty = 'none';
            this.isAnimate = false;


            setTimeout(() => {
                this.imgFrame.style.transitionProperty = null;
            })
        });

    }

    animationEnd() {
        
        this.imgFrame.addEventListener('transitionend', () => {

            this.isAnimate = false;
            this.howManyPass();
        });
    }
    
    howManyPass(): number  {

        return this.pass = (this.position === 0) ? 0 : Math.round(Math.abs(this.position / this.blockWidth));
    }

    // onClick(button: HTMLElement, fn: Function) {

    //     button.addEventListener('click', () => {

    //         fn();
    //     });
    // }


    onClick(backward: HTMLElement, forward: HTMLElement) {

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

    // forward(button: HTMLElement): SliderControler {

    //     this.onClick(button, () => {
            
    //         if(!this.isAnimate){

    //             this.isAnimate = true;
    //             this.position = this.position - this.setStepsNumber()*this.blockWidth;
    //         }
    //     });

    //     return this;
    // }

    // backward(button: HTMLElement): SliderControler {

    //     this.onClick(button, () => {

    //         if(this.position === 0){
    //             return ;
    //         } 

    //         if(!this.isAnimate) {

    //             this.isAnimate = true;
    //             this.position = this.position + this.setStepsNumber()*this.blockWidth;
    //         }
    //     });

    //     return this;
    // }

    forward() {

        if(!this.isAnimate){

            this.isAnimate = true;
            this.position = this.position - this.setStepsNumber()*this.blockWidth;
        }
    }

    backward() {
            
            if(this.position === 0){
                return ;
            } 

            if(!this.isAnimate) {

                this.isAnimate = true;
                this.position = this.position + this.setStepsNumber()*this.blockWidth;
            }
    }

}
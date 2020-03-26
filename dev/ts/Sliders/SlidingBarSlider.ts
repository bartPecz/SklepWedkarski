import SliderControler from './SliderControler';

export default class SlidingBarSlider extends SliderControler {

    constructor(imgFrame: HTMLElement) {
        super(imgFrame);

        this.onresize2();
        this.setLoop();

        
    }

    onresize2(): void {

        window.addEventListener('resize', () => {

            this.imgFrameWidth = Math.round(window.innerWidth / 60) * 60;
        });
    }

    setLoop(): void{

        console.log(this.pass);
        if(this.pass >= 6){
            this.imgFrame.style.transitionProperty = 'none';
            this.position = 0;
            this.isAnimate = false;
            this.pass = 0

            setTimeout(() => {
                this.imgFrame.style.transitionProperty = 'left';
            }, 0);
        }
        else{
            this.forward();
        }


        console.log('pupcia');

        setTimeout(this.setLoop.bind(this), 8000);
    }
}
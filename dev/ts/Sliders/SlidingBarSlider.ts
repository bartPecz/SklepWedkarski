import SliderControler from './SliderControler';

export default class SlidingBarSlider extends SliderControler {

    constructor(imgFrame: HTMLElement) {
        super(imgFrame);
    }

    onresize2() {

        if(typeof window.orientation != 'undefined') {

            window.addEventListener("orientationchange", () => {
                // this.imgFrameWidth = Math.round(window.innerWidth / 60) * 60; !!!!!!!!!!!!!!!!!!!!!!!!! ważne nie działa nie wiem czemu
                this.imgFrame.style.transitionProperty = 'none';
                this.position = 0;
                this.isAnimate = false;
                this.howManyPass();

                setTimeout(() => {
                    this.imgFrame.style.transitionProperty = null;
                });
            });

            return 0;
        }

        window.addEventListener('resize', () => {

            this.imgFrameWidth = Math.floor(window.innerWidth / 60) * 60;
            this.imgFrame.style.transitionProperty = 'none';
            this.position = 0;
            this.isAnimate = false;
            this.howManyPass();

            setTimeout(() => {
                this.imgFrame.style.transitionProperty = null;
            });
        });
    }

    setLoop(){

        if(this.pass >= 6) { 

            this.imgFrame.style.transitionProperty = 'none';
            this.position = 0;
            this.isAnimate = false;
            this.pass = 0

            setTimeout(() => {
                this.imgFrame.style.transitionProperty = 'left';
            }, 50);
        }
        else this.forward();

        setTimeout(this.setLoop.bind(this), 8000);
    }

    start() {
        
        this.onresize2();
        this.animationEnd();
        this.setLoop();
    }
}
import SliderControler  from './SliderControler';

export default class MainContentSlider extends SliderControler {

    constructor(imgFrame: HTMLElement) {
        super(imgFrame);
    }

    setStepsNumber(): number {

        console.log(this.position);
        if(0 > this.position &&  this.position > -this.imgFrameWidth) return this.howManyPass();


        return this.countOfVisibleParts;
    }
}
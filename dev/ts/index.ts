import './navBarClick';
import MainContentSlider from "./Sliders/MainContentSlider";
import SlidingBarSlider from './Sliders/SlidingBarSlider';
import './oddInTextContent';

document.addEventListener('DOMContentLoaded', () => {

    const forward = document.getElementById('forward');

    const backward = document.getElementById('backward');


    forward.style.setProperty('background-color', 'red');
    backward.style.setProperty('background-color', 'red');

    const imgFrames = document.getElementsByClassName('mainContentBlocksOverScreen') as HTMLCollectionOf<HTMLElement>;

    const sliderd = new MainContentSlider(imgFrames[0]);

    sliderd.onClick(backward, forward);

    // for(const imgFrame of imgFrames){

    //     const slider = new MainContentSlider(imgFrame);

    //     slider.onClick(backward, forward);

    //     console.dir(slider);
    // };

    const sliderFrame = document.getElementsByClassName('slidingBarOverScreen')[0] as HTMLElement;

    const slider = new SlidingBarSlider(sliderFrame);

});



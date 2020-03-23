import './navBarClick';
import SliderControler from "./SliderControler";

document.addEventListener('DOMContentLoaded', () => {

    const forward = document.getElementById('forward');

    const backward = document.getElementById('backward');


    forward.style.setProperty('background-color', 'red');
    backward.style.setProperty('background-color', 'red');



    const imgFrames = document.getElementsByClassName('mainContentBlocksOverScreen') as HTMLCollectionOf<HTMLElement>

    const imgFrame = imgFrames[0];

    const slider = new SliderControler(imgFrame);

    slider.forward(forward);
    slider.backward(backward);
});


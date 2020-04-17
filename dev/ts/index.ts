import './mainContent/mainContent';

import ROOT from './ROOT';
import './navBar/navBarClick';
import MainContentSlider from "./Sliders/MainContentSlider";
import SlidingBarSlider from './Sliders/SlidingBarSlider';
import './textContent/oddInTextContent';
import './login/login';
import './testAPI';


// const forward = document.getElementById('forward');

// const backward = document.getElementById('backward');

// forward.style.setProperty('background-color', 'red');
// backward.style.setProperty('background-color', 'red');

// const imgFrames = document.getElementsByClassName('mainContentBlocksOverScreen') as HTMLCollectionOf<HTMLElement>;

const wrappers = document.getElementsByClassName('mainContentWrapper') as HTMLCollectionOf<HTMLElement>;



// for(const imgFrame of imgFrames) {

//     const forward = imgFrame.parentElement.querySelector('.buttonForward') as HTMLElement;
//     const backward = imgFrame.parentElement.querySelector('.buttonBackward') as HTMLElement;

//     const mainContentSlider = new MainContentSlider(imgFrame);
//     mainContentSlider.onClick(backward, forward);
// }

for(const wrapper of wrappers) {

    const forward = wrapper.getElementsByClassName('buttonForward')[0] as HTMLElement;
    const backward = wrapper.getElementsByClassName('buttonBackward')[0] as HTMLElement;

    const imgFrame = wrapper.getElementsByClassName('mainContentBlocksOverScreen')[0] as HTMLElement;

    const mainContentSlider = new MainContentSlider(imgFrame);
    mainContentSlider.onClick(backward, forward);
}



const sliderFrame = document.getElementsByClassName('slidingBarOverScreen')[0] as HTMLElement;

const slider = new SlidingBarSlider(sliderFrame);

slider.start();



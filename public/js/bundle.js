/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/ts/Sliders/MainContentSlider.ts":
/*!*********************************************!*\
  !*** ./dev/ts/Sliders/MainContentSlider.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SliderControler_1 = __importDefault(__webpack_require__(/*! ./SliderControler */ "./dev/ts/Sliders/SliderControler.ts"));
class MainContentSlider extends SliderControler_1.default {
    constructor(imgFrame) {
        super(imgFrame);
    }
    setStepsNumber() {
        console.log(this.position);
        if (0 > this.position && this.position > -this.imgFrameWidth)
            return this.howManyPass();
        return this.countOfVisibleParts;
    }
}
exports.default = MainContentSlider;


/***/ }),

/***/ "./dev/ts/Sliders/SliderControler.ts":
/*!*******************************************!*\
  !*** ./dev/ts/Sliders/SliderControler.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SliderControler {
    constructor(imgFrame) {
        this.pass = 0;
        this.isAnimate = false;
        this.imgFrame = imgFrame;
        this.onResize();
        this.animationEnd();
    }
    get position() {
        return parseInt(window.getComputedStyle(this.imgFrame).left);
    }
    set position(newVar) {
        this.imgFrame.style.left = newVar + 'px';
    }
    get blockWidth() {
        return parseInt(window.getComputedStyle(this.imgFrame.children[0]).width);
    }
    get imgFrameWidth() {
        return parseInt(window.getComputedStyle(this.imgFrame).width);
    }
    set imgFrameWidth(newWidth) {
        this.imgFrame.style.width = newWidth + 'px';
    }
    get countOfVisibleParts() {
        return this.imgFrameWidth / this.blockWidth;
    }
    onResize() {
        window.addEventListener('resize', () => {
            this.position = -1 * this.pass * this.blockWidth;
            this.imgFrame.style.transitionProperty = 'none';
            this.isAnimate = false;
            setTimeout(() => {
                this.imgFrame.style.transitionProperty = null;
            });
        });
    }
    animationEnd() {
        this.imgFrame.addEventListener('transitionend', () => {
            this.isAnimate = false;
            this.howManyPass();
        });
    }
    howManyPass() {
        return this.pass = (this.position === 0) ? 0 : Math.round(Math.abs(this.position / this.blockWidth));
    }
    // onClick(button: HTMLElement, fn: Function) {
    //     button.addEventListener('click', () => {
    //         fn();
    //     });
    // }
    onClick(backward, forward) {
        const map = new Map([
            [backward, this.backward],
            [forward, this.forward]
        ]);
        for (const [key, value] of map.entries()) {
            key.addEventListener('click', () => {
                value.call(this);
            });
        }
    }
    setStepsNumber() {
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
        if (!this.isAnimate) {
            this.isAnimate = true;
            this.position = this.position - this.setStepsNumber() * this.blockWidth;
        }
    }
    backward() {
        if (this.position === 0) {
            return;
        }
        if (!this.isAnimate) {
            this.isAnimate = true;
            this.position = this.position + this.setStepsNumber() * this.blockWidth;
        }
    }
}
exports.default = SliderControler;


/***/ }),

/***/ "./dev/ts/Sliders/SlidingBarSlider.ts":
/*!********************************************!*\
  !*** ./dev/ts/Sliders/SlidingBarSlider.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SliderControler_1 = __importDefault(__webpack_require__(/*! ./SliderControler */ "./dev/ts/Sliders/SliderControler.ts"));
class SlidingBarSlider extends SliderControler_1.default {
    constructor(imgFrame) {
        super(imgFrame);
        this.onresize2();
        this.setLoop();
    }
    onresize2() {
        window.addEventListener('resize', () => {
            this.imgFrameWidth = Math.round(window.innerWidth / 60) * 60;
        });
    }
    setLoop() {
        console.log(this.pass);
        if (this.pass >= 6) {
            this.imgFrame.style.transitionProperty = 'none';
            this.position = 0;
            this.isAnimate = false;
            this.pass = 0;
            setTimeout(() => {
                this.imgFrame.style.transitionProperty = 'left';
            }, 0);
        }
        else {
            this.forward();
        }
        console.log('pupcia');
        setTimeout(this.setLoop.bind(this), 8000);
    }
}
exports.default = SlidingBarSlider;


/***/ }),

/***/ "./dev/ts/index.ts":
/*!*************************!*\
  !*** ./dev/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./navBarClick */ "./dev/ts/navBarClick.ts");
const MainContentSlider_1 = __importDefault(__webpack_require__(/*! ./Sliders/MainContentSlider */ "./dev/ts/Sliders/MainContentSlider.ts"));
const SlidingBarSlider_1 = __importDefault(__webpack_require__(/*! ./Sliders/SlidingBarSlider */ "./dev/ts/Sliders/SlidingBarSlider.ts"));
__webpack_require__(/*! ./oddInTextContent */ "./dev/ts/oddInTextContent.ts");
document.addEventListener('DOMContentLoaded', () => {
    const forward = document.getElementById('forward');
    const backward = document.getElementById('backward');
    forward.style.setProperty('background-color', 'red');
    backward.style.setProperty('background-color', 'red');
    const imgFrames = document.getElementsByClassName('mainContentBlocksOverScreen');
    const sliderd = new MainContentSlider_1.default(imgFrames[0]);
    sliderd.onClick(backward, forward);
    // for(const imgFrame of imgFrames){
    //     const slider = new MainContentSlider(imgFrame);
    //     slider.onClick(backward, forward);
    //     console.dir(slider);
    // };
    const sliderFrame = document.getElementsByClassName('slidingBarOverScreen')[0];
    const slider = new SlidingBarSlider_1.default(sliderFrame);
});


/***/ }),

/***/ "./dev/ts/navBarClick.ts":
/*!*******************************!*\
  !*** ./dev/ts/navBarClick.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelectorAll('.navBar > div');
    navBars[0].addEventListener('click', () => {
        navBars.forEach((el, i) => {
            if (i != 0)
                el.classList.toggle('navBarLRShow');
            else {
                if (el.style.getPropertyValue('background-color') == 'rgb(187, 59, 59)') {
                    el.style.setProperty('background-color', 'rgb(190, 82, 82)');
                }
                else {
                    el.style.setProperty('background-color', 'rgb(187, 59, 59)');
                }
            }
        });
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 410) {
            navBars.forEach((el, i) => {
                i != 0 ? el.classList.remove('navBarLRShow') : el.style.setProperty('background-color', 'rgb(190, 82, 82)');
            });
        }
    });
});


/***/ }),

/***/ "./dev/ts/oddInTextContent.ts":
/*!************************************!*\
  !*** ./dev/ts/oddInTextContent.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const textContentBlock = document.querySelectorAll('.textContentBlock');
textContentBlock.forEach((el, i) => {
    if (i % 2 != 0) {
        el.style.setProperty('text-align', 'right');
    }
});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
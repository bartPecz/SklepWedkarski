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

/***/ "./dev/ts/ROOT.ts":
/*!************************!*\
  !*** ./dev/ts/ROOT.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'http://localhost:4456/Wedeczki/public/';


/***/ }),

/***/ "./dev/ts/Sliders/MainContentSlider.ts":
/*!*********************************************!*\
  !*** ./dev/ts/Sliders/MainContentSlider.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SliderControler_1 = __importDefault(__webpack_require__(/*! ./SliderControler */ "./dev/ts/Sliders/SliderControler.ts"));
const ROOT_1 = __importDefault(__webpack_require__(/*! ../ROOT */ "./dev/ts/ROOT.ts"));
class MainContentSlider extends SliderControler_1.default {
    constructor(imgFrame) {
        super(imgFrame);
        this.downloading = false;
        this.productsList = JSON.parse(this.imgFrame.dataset.productsList);
        this.pathsToImages = this.productsList.map(el => {
            return ROOT_1.default + el.path; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        });
        this.numberOfLastProduct = this.productsList.length - 1;
        this.stopDownload = false;
    }
    get allBlocks() {
        return this.imgFrame.children.length;
    }
    get countOfNextBlocks() {
        return this.allBlocks - (this.countOfVisibleParts + this.howManyPass());
    }
    animationEnd() {
        this.imgFrame.addEventListener('transitionend', () => {
            this.isAnimate = false;
            this.howManyPass();
            if (Math.round(this.position) == 0)
                this.backwardButton.classList.add('hide');
            else
                this.backwardButton.classList.remove('hide');
            this.lastVisibleNumber = parseFloat((this.pass + this.countOfVisibleParts).toFixed());
            if (this.pass + this.countOfVisibleParts == this.productsList.length)
                this.forwardButton.classList.add('hide');
            else
                this.forwardButton.classList.remove('hide');
        });
    }
    onClick(backward, forward) {
        this.onResize();
        super.onClick(backward, forward);
    }
    onResize() {
        window.addEventListener('resize', () => {
            setTimeout(() => {
                this.imgFrame.style.transitionProperty = null;
            });
            if (this.pass <= 5) {
                this.position = -1 * this.pass * this.blockWidth;
                this.imgFrame.style.transitionProperty = 'none';
                this.isAnimate = false;
            }
            else {
                this.position = -1 * (this.lastVisibleNumber - this.countOfVisibleParts) * this.blockWidth;
                this.imgFrame.style.transitionProperty = 'none';
                this.isAnimate = false;
            }
        });
    }
    forward() {
        if (this.countOfNextBlocks < 2 * this.countOfVisibleParts && !this.stopDownload && !this.downloading) {
            let startNumberDownload = this.allBlocks;
            let endNumberDownload;
            this.downloading = true;
            if (this.allBlocks + 10 > this.numberOfLastProduct + 1) {
                endNumberDownload = this.numberOfLastProduct + 1;
                this.stopDownload = true;
            }
            else {
                endNumberDownload = this.allBlocks + 10;
            }
            this.fetchImg(this.pathsToImages.slice(startNumberDownload, endNumberDownload))
                .then(images => {
                for (const img of images) {
                    const imgFrameChildStructure = this.imgFrame.children[0].cloneNode(true);
                    const imgInChildStructure = imgFrameChildStructure.getElementsByTagName('img')[0];
                    imgInChildStructure.replaceWith(img);
                    this.imgFrame.appendChild(imgFrameChildStructure);
                }
                this.downloading = false;
            });
        }
        if (this.countOfNextBlocks == 0)
            return;
        super.forward();
    }
    fetchImg(imagesPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const imgType = new Image();
            const imagespromise = imagesPath.map((path) => {
                const img = imgType.cloneNode();
                if (img.addEventListener) {
                    const promise = new Promise(resolve => {
                        img.addEventListener('load', function loaded() {
                            console.log('załadowane');
                            resolve(this);
                        });
                    });
                    img.src = path;
                    return promise;
                }
                else {
                    throw new Error('Nie ma metody addEventListener');
                }
            });
            return yield Promise.all(imagespromise);
        });
    }
    setStepsNumber() {
        if (0 > this.position && this.position > -this.imgFrameWidth)
            return this.howManyPass();
        if (this.countOfNextBlocks < this.countOfVisibleParts && this.countOfNextBlocks > 0)
            return this.countOfNextBlocks;
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
        this.lastVisibleNumber = parseFloat((this.pass + this.countOfVisibleParts).toFixed());
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
    animationEnd() {
        this.imgFrame.addEventListener('transitionend', () => {
            this.isAnimate = false;
            this.howManyPass();
            this.lastVisibleNumber = parseFloat((this.pass + this.countOfVisibleParts).toFixed());
        });
    }
    howManyPass() {
        return this.pass = (this.position === 0) ? 0 : Math.round(Math.abs(this.position / this.blockWidth));
    }
    onClick(backward, forward) {
        this.backwardButton = backward;
        this.forwardButton = forward;
        this.animationEnd();
        this.backwardButton.classList.add('hide');
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
    }
    onresize2() {
        if (typeof window.orientation != 'undefined') {
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
            // this.imgFrameWidth = Math.floor(window.innerWidth / 60) * 60;
            this.imgFrame.style.transitionProperty = 'none';
            this.position = 0;
            this.isAnimate = false;
            this.howManyPass();
            setTimeout(() => {
                this.imgFrame.style.transitionProperty = null;
            });
        });
    }
    setLoop() {
        if (this.pass >= 6) {
            this.imgFrame.style.transitionProperty = 'none';
            this.position = 0;
            this.isAnimate = false;
            this.pass = 0;
            setTimeout(() => {
                this.imgFrame.style.transitionProperty = 'left';
            }, 50);
        }
        else
            this.forward();
        setTimeout(this.setLoop.bind(this), 8000);
    }
    start() {
        this.onresize2();
        this.animationEnd();
        this.setLoop();
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
__webpack_require__(/*! ./mainContent/mainContent */ "./dev/ts/mainContent/mainContent.ts");
__webpack_require__(/*! ./navBar/navBarClick */ "./dev/ts/navBar/navBarClick.ts");
const MainContentSlider_1 = __importDefault(__webpack_require__(/*! ./Sliders/MainContentSlider */ "./dev/ts/Sliders/MainContentSlider.ts"));
const SlidingBarSlider_1 = __importDefault(__webpack_require__(/*! ./Sliders/SlidingBarSlider */ "./dev/ts/Sliders/SlidingBarSlider.ts"));
__webpack_require__(/*! ./textContent/oddInTextContent */ "./dev/ts/textContent/oddInTextContent.ts");
__webpack_require__(/*! ./login/login */ "./dev/ts/login/login.ts");
__webpack_require__(/*! ./testAPI */ "./dev/ts/testAPI.ts");
// const forward = document.getElementById('forward');
// const backward = document.getElementById('backward');
// forward.style.setProperty('background-color', 'red');
// backward.style.setProperty('background-color', 'red');
// const imgFrames = document.getElementsByClassName('mainContentBlocksOverScreen') as HTMLCollectionOf<HTMLElement>;
const wrappers = document.getElementsByClassName('mainContentWrapper');
// for(const imgFrame of imgFrames) {
//     const forward = imgFrame.parentElement.querySelector('.buttonForward') as HTMLElement;
//     const backward = imgFrame.parentElement.querySelector('.buttonBackward') as HTMLElement;
//     const mainContentSlider = new MainContentSlider(imgFrame);
//     mainContentSlider.onClick(backward, forward);
// }
for (const wrapper of wrappers) {
    const forward = wrapper.getElementsByClassName('buttonForward')[0];
    const backward = wrapper.getElementsByClassName('buttonBackward')[0];
    const imgFrame = wrapper.getElementsByClassName('mainContentBlocksOverScreen')[0];
    const mainContentSlider = new MainContentSlider_1.default(imgFrame);
    mainContentSlider.onClick(backward, forward);
}
const sliderFrame = document.getElementsByClassName('slidingBarOverScreen')[0];
const slider = new SlidingBarSlider_1.default(sliderFrame);
slider.start();


/***/ }),

/***/ "./dev/ts/login/FormController.ts":
/*!****************************************!*\
  !*** ./dev/ts/login/FormController.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FormController {
    constructor(inputs) {
        this.inputs = inputs;
        this.inputs = inputs;
        this.button = document.querySelector('.loginBoxContainer .loginButton');
    }
    launch() {
        for (const input of [...this.inputs]) {
            this.condition6Letters(input);
        }
    }
    generateHelpWindow(input, message, condition) {
        const helpWindow = document.createElement('div');
        helpWindow.innerHTML = `<div>${input.name + ' ' + message}</div>`;
        input[condition] = new Object();
        input[condition].content = helpWindow;
        return helpWindow;
    }
    addHelpWindow(input, condition) {
        input.after(input[condition].content);
        let style = `
                border: 1px solid rgb(226, 126, 126);
                background-color: rgb(226, 126, 126);
            `;
        input.style.cssText = style;
    }
    removeHelpWindow(input, condition) {
        input[condition].content.remove();
        input.style.cssText = null;
    }
    condition6Letters(input) {
        let message = 'musi składać się z conjamniej 6 liter';
        let condition = 'condition6Letters';
        this.showAbove6Letters(input, this.button, condition, message);
        this.removeUnder6Letters(input, condition);
    }
    removeUnder6Letters(input, condition) {
        const removeWhenLetterUnder6 = () => {
            if (input.value.length >= 6) {
                this.removeHelpWindow(input, condition);
            }
        };
        input.addEventListener('input', removeWhenLetterUnder6);
    }
    showAbove6Letters(input, button, condition, message) {
        this.generateHelpWindow(input, message, condition);
        const addWhenLetterAbove6 = () => {
            if (input.value.length < 6) {
                this.addHelpWindow(input, condition);
            }
        };
        button.addEventListener('click', addWhenLetterAbove6);
    }
}
exports.FormController = FormController;


/***/ }),

/***/ "./dev/ts/login/login.ts":
/*!*******************************!*\
  !*** ./dev/ts/login/login.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FormController_1 = __webpack_require__(/*! ./FormController */ "./dev/ts/login/FormController.ts");
const loginBoxContainer = document.createElement('div');
const loginbBox = `           
    <div class="loginBoxMiddle">

        <div></div>
        <div class="Title">Zaloguj się do sklepu</div>

        <input type="text" placeholder="login" name="login">
        <input type="password" placeholder="hasło" name="hasło">

        <button class="loginButton">Zaloguj</button>
    </div>
`;
loginBoxContainer.innerHTML = loginbBox;
loginBoxContainer.classList.add('loginBoxContainer'); //hide classa trzeba dać
document.body.appendChild(loginBoxContainer);
const loginBoxMiddle = loginBoxContainer.children[0];
document.querySelector('#topBarLog').addEventListener('click', function () {
    loginBoxContainer.classList.toggle('hide');
});
const inputs = loginBoxMiddle.getElementsByTagName('input');
new FormController_1.FormController(inputs).launch();
fetch('http://localhost:4456/Wedeczki/public/app/login/login.php', {
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(new Array(inputs.length).fill(0).map((el, i) => {
        return {
            name: inputs[i].name,
            value: inputs[i].value
        };
    }))
})
    .then(res => res.json())
    .then(res => {
    console.log(res);
});


/***/ }),

/***/ "./dev/ts/mainContent/mainContent.ts":
/*!*******************************************!*\
  !*** ./dev/ts/mainContent/mainContent.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let mainContentSlide = `
    <div class="mainContentSlide">
        <div class="mainContentSlideTitle">
            #
        </div>
        <div class="mainContentBlocksOverScreen">
            #
        </div>
    </div>  
`;
let mainContentBlock = `
    <div class="mainContentBlock">
        <div class="mainContentBlockMiddle">
            <img src="#" class="mainContentBlockImg">
            <div class="mainContentBlockTitle">#</div>
            <div class="mainContentBlockPrice">#</div>
        </div>
    </div> 
`;
const div = document.createElement('div');
const mainContent = {
    mainContentSlide: Object.assign(div),
    mainContentBlock: Object.assign(div)
};
mainContent.mainContentSlide.innerHTML = mainContentSlide;
mainContent.mainContentBlock.innerHTML = mainContentBlock;
// console.log(mainContent.mainContentBlock.innerHTML);


/***/ }),

/***/ "./dev/ts/navBar/navBarClick.ts":
/*!**************************************!*\
  !*** ./dev/ts/navBar/navBarClick.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelectorAll('.navBar > div');
    const navBarTiles = document.querySelector('.navBarTiles');
    const navBarTilesUl = document.querySelector('.navBarTiles > ul');
    navBars[0].addEventListener('click', () => {
        navBars.forEach((el, i) => {
            if (i != 0)
                el.classList.toggle('navBarLRShow');
            else {
                if (el.style.getPropertyValue('background-color') == 'rgb(187, 59, 59)')
                    el.style.setProperty('background-color', 'rgb(190, 82, 82)');
                else
                    el.style.setProperty('background-color', 'rgb(187, 59, 59)');
            }
        });
    });
    if (window.innerWidth <= 410) {
        navBarTiles.classList.add('removeHover');
        navBarTilesUl.style.setProperty('position', 'static');
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 410) {
            navBars.forEach((el, i) => {
                i != 0 ? el.classList.remove('navBarLRShow') : el.style.setProperty('background-color', null);
            });
            navBarTiles.classList.remove('removeHover');
            navBarTiles.style.setProperty('background-color', null);
            navBarTilesUl.style.setProperty('display', null);
            navBarTilesUl.style.setProperty('position', null);
            navBarTilesUl.style.setProperty('background-color', null);
        }
        else if (window.innerWidth <= 410)
            navBarTilesUl.style.setProperty('position', 'static');
    });
    navBarTiles.addEventListener('click', function () {
        if (window.innerWidth <= 410) {
            const style = navBarTiles.style;
            const styleUl = navBarTilesUl.style;
            if (style.getPropertyValue('background-color') == 'rgb(187, 59, 59)')
                style.setProperty('background-color', null);
            else
                style.setProperty('background-color', 'rgb(187, 59, 59)');
            styleUl.setProperty('background-color', 'rgb(187, 59, 59)');
            if (styleUl.getPropertyValue('display') == 'block')
                styleUl.setProperty('display', 'none');
            else {
                styleUl.setProperty('display', 'block');
                styleUl.setProperty('border-bottom', '1px solid rgb(138, 46, 46)');
            }
        }
    });
});


/***/ }),

/***/ "./dev/ts/testAPI.ts":
/*!***************************!*\
  !*** ./dev/ts/testAPI.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ROOT_1 = __importDefault(__webpack_require__(/*! ./ROOT */ "./dev/ts/ROOT.ts"));
console.log('dupa');
console.log(ROOT_1.default + 'api/test.php');
fetch(ROOT_1.default + 'api/test.php')
    .then(res => res.json())
    .then(resp => {
    console.log('mam');
    console.log(resp);
    // let yo = JSON.parse(resp);
    // console.log(yo);
});
// fetch('http://localhost/api/test.php')
//     .then(res => res.blob(res))
//     .then(res => {
//         // console.log(res)
//         let outside = URL.createObjectURL(res)
//         console.log(outside)
//     })
// fetch('http://localhost/api/test.php')
//     .then()
//     const img = new Image()
//     const menu = document.querySelector('.navBarMenu');
//     img.addEventListener('load' , function(){
//         const i : HTMLImageElement = document.querySelector('#dupa');
//         i.src = this.src;
//         console.log(this);
//         console.log('sa')
//         menu.addEventListener('click', () => {
//             console.log('click');
//         });
//     })
//     console.log(menu);
//     setTimeout(() => {
//         img.src = 'http://localhost/img/rod.png';
//     }, 5000)
// console.log('dupa');


/***/ }),

/***/ "./dev/ts/textContent/oddInTextContent.ts":
/*!************************************************!*\
  !*** ./dev/ts/textContent/oddInTextContent.ts ***!
  \************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1JPT1QudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvTWFpbkNvbnRlbnRTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvU2xpZGVyQ29udHJvbGVyLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9TbGlkZXJzL1NsaWRpbmdCYXJTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9sb2dpbi9Gb3JtQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbG9naW4vbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL21haW5Db250ZW50L21haW5Db250ZW50LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9uYXZCYXIvbmF2QmFyQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3Rlc3RBUEkudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL3RleHRDb250ZW50L29kZEluVGV4dENvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGtCQUFlLHdDQUF3QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEQsK0hBQWlEO0FBQ2pELHVGQUEyQjtBQVEzQixNQUFxQixpQkFBa0IsU0FBUSx5QkFBZTtJQVMxRCxZQUFZLFFBQXFCO1FBRTdCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUxwQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQU96QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM1QyxPQUFPLGNBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsMENBQTBDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUU5QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsWUFBWTtRQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRXRGLElBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ3pHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBcUIsRUFBRSxPQUFvQjtRQUUvQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELFFBQVE7UUFFSixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUVuQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBRWYsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDMUI7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsT0FBTztRQUVILElBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUVsRyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSSxpQkFBaUIsQ0FBQztZQUV0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUV4QixJQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQUU7Z0JBRXBELGlCQUFpQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQzNCO2lCQUNJO2dCQUNELGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQzNDO1lBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2lCQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUU7Z0JBRVosS0FBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7b0JBRXJCLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBZ0IsQ0FBQztvQkFDeEYsTUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFbEYsbUJBQW1CLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUVyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUNyRDtnQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQztZQUFFLE9BQU87UUFFdkMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFSyxRQUFRLENBQUMsVUFBeUI7O1lBRXBDLE1BQU0sT0FBTyxHQUFxQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBRTlDLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFFbEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBc0IsQ0FBQztnQkFFcEQsSUFBRyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7b0JBRXJCLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUVsQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsTUFBTTs0QkFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztvQkFFSCxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFFZixPQUFPLE9BQU8sQ0FBQztpQkFDbEI7cUJBQ0k7b0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDcEQ7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBNEIsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFRCxjQUFjO1FBRVYsSUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4RixJQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUVsSCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUEvSkQsb0NBK0pDOzs7Ozs7Ozs7Ozs7Ozs7QUN4S0QsTUFBcUIsZUFBZTtJQVNoQyxZQUFZLFFBQXFCO1FBTmpDLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQU92QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRTFGLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUFJLFFBQVEsQ0FBQyxNQUFjO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxhQUFhLENBQUMsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzlDLENBQUM7SUFHRCxZQUFZO1FBRVIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1lBRWpELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBcUIsRUFBRSxPQUFvQjtRQUUvQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUU3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ2hCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDekIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO1FBRUYsS0FBSSxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBQztZQUVwQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUM7U0FDTDtJQUVMLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBR0QsT0FBTztRQUVILElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBRWYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzNFO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFFQSxJQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFDO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBRWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN6RTtJQUNULENBQUM7Q0FFSjtBQXpHRCxrQ0F5R0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHRCwrSEFBZ0Q7QUFFaEQsTUFBcUIsZ0JBQWlCLFNBQVEseUJBQWU7SUFFekQsWUFBWSxRQUFxQjtRQUM3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVM7UUFFTCxJQUFHLE9BQU8sTUFBTSxDQUFDLFdBQVcsSUFBSSxXQUFXLEVBQUU7WUFFekMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtnQkFDOUMsMEhBQTBIO2dCQUMxSCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVuQixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUVuQyxnRUFBZ0U7WUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVuQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU87UUFFSCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBRWYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUViLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO1lBQ3BELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNWOztZQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVwQixVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELEtBQUs7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUEvREQsbUNBK0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUQsNEZBQW1DO0FBR25DLGtGQUE4QjtBQUM5Qiw2SUFBNEQ7QUFDNUQsMElBQTBEO0FBQzFELHNHQUF3QztBQUN4QyxvRUFBdUI7QUFDdkIsNERBQW1CO0FBR25CLHNEQUFzRDtBQUV0RCx3REFBd0Q7QUFFeEQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUV6RCxxSEFBcUg7QUFFckgsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFrQyxDQUFDO0FBSXhHLHFDQUFxQztBQUVyQyw2RkFBNkY7QUFDN0YsK0ZBQStGO0FBRS9GLGlFQUFpRTtBQUNqRSxvREFBb0Q7QUFDcEQsSUFBSTtBQUVKLEtBQUksTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO0lBRTNCLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7SUFDbEYsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFnQixDQUFDO0lBRXBGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztJQUVqRyxNQUFNLGlCQUFpQixHQUFHLElBQUksMkJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNoRDtBQUlELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztBQUU5RixNQUFNLE1BQU0sR0FBRyxJQUFJLDBCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRWpELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbERmLE1BQWEsY0FBYztJQUl2QixZQUFtQixNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsTUFBTTtRQUVGLEtBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQXVCLEVBQUU7WUFFdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQXVCLEVBQUUsT0FBZSxFQUFFLFNBQWlCO1FBRTFFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakQsVUFBVSxDQUFDLFNBQVMsR0FBRyxRQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sUUFBUSxDQUFDO1FBRWxFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRWhDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRXRDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBdUIsRUFBRSxTQUFpQjtRQUNwRCxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxJQUFJLEtBQUssR0FDTDs7O2FBR0MsQ0FBQztRQUVOLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVoQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBdUIsRUFBRSxTQUFpQjtRQUN2RCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBSztRQUVuQixJQUFJLE9BQU8sR0FBRyx1Q0FBdUMsQ0FBQztRQUN0RCxJQUFJLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUVwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQXVCLEVBQUUsU0FBaUI7UUFFMUQsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7WUFFaEMsSUFBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO1FBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUF1QixFQUFFLE1BQW1CLEVBQUUsU0FBaUIsRUFBRSxPQUFlO1FBRTlGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFO1lBRTdCLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNKO0FBbkZELHdDQW1GQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZELHlHQUFrRDtBQUVsRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFeEQsTUFBTSxTQUFTLEdBQ2Y7Ozs7Ozs7Ozs7O0NBV0MsQ0FBQztBQUdGLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDeEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBRyxDQUFDLENBQUUsd0JBQXdCO0FBRWpGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFN0MsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXJELFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBRTNELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFNUQsSUFBSSwrQkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXBDLEtBQUssQ0FBQywyREFBMkQsRUFBRTtJQUMvRCxNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRSxrQkFBa0I7S0FDckM7SUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FDaEIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsT0FBUTtZQUNJLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNwQixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDekIsQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUNMO0NBQ0osQ0FBQztLQUNELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNuREgsSUFBSSxnQkFBZ0IsR0FDcEI7Ozs7Ozs7OztDQVNDO0FBRUQsSUFBSSxnQkFBZ0IsR0FDcEI7Ozs7Ozs7O0NBUUM7QUFFRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBTzFDLE1BQU0sV0FBVyxHQUFnQjtJQUM3QixnQkFBZ0IsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxnQkFBZ0IsRUFBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUN4QztBQUVELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7QUFDMUQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztBQUUxRCx1REFBdUQ7Ozs7Ozs7Ozs7OztBQ3ZDdkQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0QsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQWdCLENBQUM7SUFDMUUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBZ0IsQ0FBQztJQUVqRixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUV0QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRW5DLElBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQzFDO2dCQUVELElBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQjtvQkFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDOztvQkFDL0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzthQUNyRTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFDO1FBRXhCLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN6RDtJQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ25DLElBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUM7WUFFdkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFbkMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xHLENBQUMsQ0FBQyxDQUFDO1lBRUgsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEQsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDthQUNJLElBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHO1lBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRTVGLENBQUMsQ0FBQyxDQUFDO0lBRUgsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUVsQyxJQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBRXpCLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDaEMsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUdwQyxJQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQjtnQkFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDOztnQkFDNUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBRS9ELE9BQU8sQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUU1RCxJQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQztpQkFDcEY7Z0JBRUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLDRCQUE0QixDQUFDLENBQUM7YUFDdEU7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFSCxzRkFBMEI7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQUksR0FBQyxjQUFjLENBQUMsQ0FBQztBQUVqQyxLQUFLLENBQUMsY0FBSSxHQUFDLGNBQWMsQ0FBQztLQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNqQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBRVAseUNBQXlDO0FBQ3pDLGtDQUFrQztBQUNsQyxxQkFBcUI7QUFDckIsOEJBQThCO0FBQzlCLGlEQUFpRDtBQUNqRCwrQkFBK0I7QUFDL0IsU0FBUztBQUVULHlDQUF5QztBQUN6QyxjQUFjO0FBRWQsOEJBQThCO0FBRTlCLDBEQUEwRDtBQUUxRCxnREFBZ0Q7QUFDaEQsd0VBQXdFO0FBQ3hFLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLGlEQUFpRDtBQUNqRCxvQ0FBb0M7QUFDcEMsY0FBYztBQUNkLFNBQVM7QUFNVCx5QkFBeUI7QUFFekIseUJBQXlCO0FBRXpCLG9EQUFvRDtBQUVwRCxlQUFlO0FBRWYsdUJBQXVCOzs7Ozs7Ozs7Ozs7QUNuRHZCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUE0QixDQUFDO0FBRW5HLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMvQixJQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBRVgsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9DO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZXYvdHMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCAnaHR0cDovL2xvY2FsaG9zdDo0NDU2L1dlZGVjemtpL3B1YmxpYy8nO1xyXG5cclxuIiwiaW1wb3J0IFNsaWRlckNvbnRyb2xlciAgZnJvbSAnLi9TbGlkZXJDb250cm9sZXInO1xyXG5pbXBvcnQgUk9PVCBmcm9tICcuLi9ST09UJztcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0c0xpc3Qge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIHBhdGg/OiBzdHJpbmcsXHJcbiAgICBwcmljZT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udGVudFNsaWRlciBleHRlbmRzIFNsaWRlckNvbnRyb2xlciB7XHJcblxyXG4gICAgcHJvZHVjdHNMaXN0OiBBcnJheTxQcm9kdWN0c0xpc3Q+O1xyXG4gICAgcGF0aHNUb0ltYWdlczogQXJyYXk8c3RyaW5nPjtcclxuICAgIG51bWJlck9mTGFzdFByb2R1Y3Q6IG51bWJlcjtcclxuICAgIHN0b3BEb3dubG9hZDogYm9vbGVhbjtcclxuICAgIGRvd25sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbWdGcmFtZTogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoaW1nRnJhbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RzTGlzdCA9IEpTT04ucGFyc2UodGhpcy5pbWdGcmFtZS5kYXRhc2V0LnByb2R1Y3RzTGlzdCk7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aHNUb0ltYWdlcyA9IHRoaXMucHJvZHVjdHNMaXN0Lm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBST09UICsgZWwucGF0aDsgLy8hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkxhc3RQcm9kdWN0ID0gdGhpcy5wcm9kdWN0c0xpc3QubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9wRG93bmxvYWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbEJsb2NrcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ0ZyYW1lLmNoaWxkcmVuLmxlbmd0aDsgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvdW50T2ZOZXh0QmxvY2tzKCk6IG51bWJlciB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxCbG9ja3MgLSAodGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzICsgdGhpcy5ob3dNYW55UGFzcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRpb25FbmQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ob3dNYW55UGFzcygpO1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uKSA9PSAwKSB0aGlzLmJhY2t3YXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmJhY2t3YXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFZpc2libGVOdW1iZXIgPSBwYXJzZUZsb2F0KCh0aGlzLnBhc3MgKyB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMpLnRvRml4ZWQoKSk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnBhc3MgKyB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgPT0gdGhpcy5wcm9kdWN0c0xpc3QubGVuZ3RoKSB0aGlzLmZvcndhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZm9yd2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgb25DbGljayhiYWNrd2FyZDogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICBzdXBlci5vbkNsaWNrKGJhY2t3YXJkLCBmb3J3YXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uUmVzaXplKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5wYXNzIDw9IDUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTEgKiB0aGlzLnBhc3MgKiB0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTEgKiAodGhpcy5sYXN0VmlzaWJsZU51bWJlciAtIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykgKiB0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yd2FyZCgpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jb3VudE9mTmV4dEJsb2NrcyA8IDIgKiB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgJiYgIXRoaXMuc3RvcERvd25sb2FkICAmJiAhdGhpcy5kb3dubG9hZGluZykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0TnVtYmVyRG93bmxvYWQgPSB0aGlzLmFsbEJsb2NrcztcclxuICAgICAgICAgICAgbGV0IGVuZE51bWJlckRvd25sb2FkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmFsbEJsb2NrcyArIDEwID4gdGhpcy5udW1iZXJPZkxhc3RQcm9kdWN0ICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgZW5kTnVtYmVyRG93bmxvYWQgPSB0aGlzLm51bWJlck9mTGFzdFByb2R1Y3QgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnN0b3BEb3dubG9hZCA9IHRydWU7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZE51bWJlckRvd25sb2FkID0gdGhpcy5hbGxCbG9ja3MgKyAxMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLnBhdGhzVG9JbWFnZXMuc2xpY2Uoc3RhcnROdW1iZXJEb3dubG9hZCwgZW5kTnVtYmVyRG93bmxvYWQpKVxyXG4gICAgICAgICAgICAudGhlbihpbWFnZXMgID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBpbWcgb2YgaW1hZ2VzKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdGcmFtZUNoaWxkU3RydWN0dXJlID0gdGhpcy5pbWdGcmFtZS5jaGlsZHJlblswXS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nSW5DaGlsZFN0cnVjdHVyZSA9IGltZ0ZyYW1lQ2hpbGRTdHJ1Y3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltZ0luQ2hpbGRTdHJ1Y3R1cmUucmVwbGFjZVdpdGgoaW1nKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuYXBwZW5kQ2hpbGQoaW1nRnJhbWVDaGlsZFN0cnVjdHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jb3VudE9mTmV4dEJsb2NrcyA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN1cGVyLmZvcndhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaEltZyhpbWFnZXNQYXRoOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxBcnJheTxIVE1MSW1hZ2VFbGVtZW50Pj4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbWdUeXBlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzcHJvbWlzZSA9IGltYWdlc1BhdGgubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGltZ1R5cGUuY2xvbmVOb2RlKCkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiBsb2FkZWQoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnemHFgmFkb3dhbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBwYXRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOaWUgbWEgbWV0b2R5IGFkZEV2ZW50TGlzdGVuZXInKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoaW1hZ2VzcHJvbWlzZSkgYXMgQXJyYXk8SFRNTEltYWdlRWxlbWVudD47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcHNOdW1iZXIoKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYoMCA+IHRoaXMucG9zaXRpb24gJiYgIHRoaXMucG9zaXRpb24gPiAtdGhpcy5pbWdGcmFtZVdpZHRoKSByZXR1cm4gdGhpcy5ob3dNYW55UGFzcygpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmNvdW50T2ZOZXh0QmxvY2tzIDwgdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzICYmIHRoaXMuY291bnRPZk5leHRCbG9ja3MgPiAwKSByZXR1cm4gdGhpcy5jb3VudE9mTmV4dEJsb2NrcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cztcclxuICAgIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJDb250cm9sZXIge1xyXG5cclxuICAgIHJlYWRvbmx5IGltZ0ZyYW1lOiBIVE1MRWxlbWVudDtcclxuICAgIHBhc3M6IG51bWJlciA9IDA7XHJcbiAgICBpc0FuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxhc3RWaXNpYmxlTnVtYmVyOiBudW1iZXI7XHJcbiAgICBiYWNrd2FyZEJ1dHRvbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb3J3YXJkQnV0dG9uOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbWdGcmFtZTogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZSA9IGltZ0ZyYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFZpc2libGVOdW1iZXIgPSBwYXJzZUZsb2F0KCh0aGlzLnBhc3MgKyB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMpLnRvRml4ZWQoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmltZ0ZyYW1lKS5sZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcG9zaXRpb24obmV3VmFyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLmxlZnQgPSBuZXdWYXIgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBibG9ja1dpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW1nRnJhbWUuY2hpbGRyZW5bMF0pLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW1nRnJhbWVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmltZ0ZyYW1lKS53aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGltZ0ZyYW1lV2lkdGgobmV3V2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvdW50T2ZWaXNpYmxlUGFydHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWdGcmFtZVdpZHRoL3RoaXMuYmxvY2tXaWR0aDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYW5pbWF0aW9uRW5kKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW1nRnJhbWUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaG93TWFueVBhc3MoKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VmlzaWJsZU51bWJlciA9IHBhcnNlRmxvYXQoKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykudG9GaXhlZCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaG93TWFueVBhc3MoKTogbnVtYmVyICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzcyA9ICh0aGlzLnBvc2l0aW9uID09PSAwKSA/IDAgOiBNYXRoLnJvdW5kKE1hdGguYWJzKHRoaXMucG9zaXRpb24gLyB0aGlzLmJsb2NrV2lkdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGJhY2t3YXJkOiBIVE1MRWxlbWVudCwgZm9yd2FyZDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrd2FyZEJ1dHRvbiA9IGJhY2t3YXJkO1xyXG4gICAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGZvcndhcmQ7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja3dhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW2JhY2t3YXJkLCB0aGlzLmJhY2t3YXJkXSxcclxuICAgICAgICAgICAgW2ZvcndhcmQsIHRoaXMuZm9yd2FyZF1cclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcC5lbnRyaWVzKCkpe1xyXG5cclxuICAgICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0ZXBzTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvcndhcmQoKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmlzQW5pbWF0ZSl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uIC0gdGhpcy5zZXRTdGVwc051bWJlcigpICogdGhpcy5ibG9ja1dpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrd2FyZCgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMucG9zaXRpb24gPT09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNBbmltYXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gKyB0aGlzLnNldFN0ZXBzTnVtYmVyKCkqdGhpcy5ibG9ja1dpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFNsaWRlckNvbnRyb2xlciBmcm9tICcuL1NsaWRlckNvbnRyb2xlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkaW5nQmFyU2xpZGVyIGV4dGVuZHMgU2xpZGVyQ29udHJvbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbWdGcmFtZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihpbWdGcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25yZXNpemUyKCkge1xyXG5cclxuICAgICAgICBpZih0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaW1nRnJhbWVXaWR0aCA9IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyA2MCkgKiA2MDsgISEhISEhISEhISEhISEhISEhISEhISEhISB3YcW8bmUgbmllIGR6aWHFgmEgbmllIHdpZW0gY3plbXVcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3dNYW55UGFzcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaW1nRnJhbWVXaWR0aCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyA2MCkgKiA2MDtcclxuICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9vcCgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnBhc3MgPj0gNikgeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzID0gMFxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdsZWZ0JztcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZm9yd2FyZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0TG9vcC5iaW5kKHRoaXMpLCA4MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9ucmVzaXplMigpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb29wKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnQnO1xyXG5cclxuaW1wb3J0IFJPT1QgZnJvbSAnLi9ST09UJztcclxuaW1wb3J0ICcuL25hdkJhci9uYXZCYXJDbGljayc7XHJcbmltcG9ydCBNYWluQ29udGVudFNsaWRlciBmcm9tIFwiLi9TbGlkZXJzL01haW5Db250ZW50U2xpZGVyXCI7XHJcbmltcG9ydCBTbGlkaW5nQmFyU2xpZGVyIGZyb20gJy4vU2xpZGVycy9TbGlkaW5nQmFyU2xpZGVyJztcclxuaW1wb3J0ICcuL3RleHRDb250ZW50L29kZEluVGV4dENvbnRlbnQnO1xyXG5pbXBvcnQgJy4vbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgJy4vdGVzdEFQSSc7XHJcblxyXG5cclxuLy8gY29uc3QgZm9yd2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3J3YXJkJyk7XHJcblxyXG4vLyBjb25zdCBiYWNrd2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrd2FyZCcpO1xyXG5cclxuLy8gZm9yd2FyZC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZWQnKTtcclxuLy8gYmFja3dhcmQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmVkJyk7XHJcblxyXG4vLyBjb25zdCBpbWdGcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudEJsb2Nrc092ZXJTY3JlZW4nKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuXHJcbmNvbnN0IHdyYXBwZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbkNvbnRlbnRXcmFwcGVyJykgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XHJcblxyXG5cclxuXHJcbi8vIGZvcihjb25zdCBpbWdGcmFtZSBvZiBpbWdGcmFtZXMpIHtcclxuXHJcbi8vICAgICBjb25zdCBmb3J3YXJkID0gaW1nRnJhbWUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uRm9yd2FyZCcpIGFzIEhUTUxFbGVtZW50O1xyXG4vLyAgICAgY29uc3QgYmFja3dhcmQgPSBpbWdGcmFtZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25CYWNrd2FyZCcpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuLy8gICAgIGNvbnN0IG1haW5Db250ZW50U2xpZGVyID0gbmV3IE1haW5Db250ZW50U2xpZGVyKGltZ0ZyYW1lKTtcclxuLy8gICAgIG1haW5Db250ZW50U2xpZGVyLm9uQ2xpY2soYmFja3dhcmQsIGZvcndhcmQpO1xyXG4vLyB9XHJcblxyXG5mb3IoY29uc3Qgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG5cclxuICAgIGNvbnN0IGZvcndhcmQgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbkZvcndhcmQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGJhY2t3YXJkID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b25CYWNrd2FyZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGltZ0ZyYW1lID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudEJsb2Nrc092ZXJTY3JlZW4nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdCBtYWluQ29udGVudFNsaWRlciA9IG5ldyBNYWluQ29udGVudFNsaWRlcihpbWdGcmFtZSk7XHJcbiAgICBtYWluQ29udGVudFNsaWRlci5vbkNsaWNrKGJhY2t3YXJkLCBmb3J3YXJkKTtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBzbGlkZXJGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRpbmdCYXJPdmVyU2NyZWVuJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG5jb25zdCBzbGlkZXIgPSBuZXcgU2xpZGluZ0JhclNsaWRlcihzbGlkZXJGcmFtZSk7XHJcblxyXG5zbGlkZXIuc3RhcnQoKTtcclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBidXR0b246IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dHM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgICAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbkJveENvbnRhaW5lciAubG9naW5CdXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXVuY2goKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGNvbnN0IGlucHV0IG9mIFsuLi50aGlzLmlucHV0c10gYXMgW0hUTUxJbnB1dEVsZW1lbnRdKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbjZMZXR0ZXJzKGlucHV0KTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVIZWxwV2luZG93KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBtZXNzYWdlOiBzdHJpbmcsIGNvbmRpdGlvbjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgICAgICBjb25zdCBoZWxwV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGhlbHBXaW5kb3cuaW5uZXJIVE1MID0gYDxkaXY+JHtpbnB1dC5uYW1lICsgJyAnICsgbWVzc2FnZX08L2Rpdj5gO1xyXG5cclxuICAgICAgICBpbnB1dFtjb25kaXRpb25dID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgICBpbnB1dFtjb25kaXRpb25dLmNvbnRlbnQgPSBoZWxwV2luZG93O1xyXG5cclxuICAgICAgICByZXR1cm4gaGVscFdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBhZGRIZWxwV2luZG93KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjb25kaXRpb246IHN0cmluZykge1xyXG4gICAgICAgIGlucHV0LmFmdGVyKGlucHV0W2NvbmRpdGlvbl0uY29udGVudCk7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9IFxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI2LCAxMjYsIDEyNik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMjYsIDEyNik7XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgIGlucHV0LnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGVscFdpbmRvdyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY29uZGl0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpbnB1dFtjb25kaXRpb25dLmNvbnRlbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGlucHV0LnN0eWxlLmNzc1RleHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmRpdGlvbjZMZXR0ZXJzKGlucHV0KSB7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJ211c2kgc2vFgmFkYcSHIHNpxJkgeiBjb25qYW1uaWVqIDYgbGl0ZXInO1xyXG4gICAgICAgIGxldCBjb25kaXRpb24gPSAnY29uZGl0aW9uNkxldHRlcnMnO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dBYm92ZTZMZXR0ZXJzKGlucHV0LCB0aGlzLmJ1dHRvbiwgY29uZGl0aW9uLCBtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVVuZGVyNkxldHRlcnMoaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVW5kZXI2TGV0dGVycyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY29uZGl0aW9uOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlV2hlbkxldHRlclVuZGVyNiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhlbHBXaW5kb3coaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcmVtb3ZlV2hlbkxldHRlclVuZGVyNik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Fib3ZlNkxldHRlcnMoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGJ1dHRvbjogSFRNTEVsZW1lbnQsIGNvbmRpdGlvbjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUhlbHBXaW5kb3coaW5wdXQsIG1lc3NhZ2UsIGNvbmRpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFdoZW5MZXR0ZXJBYm92ZTYgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEhlbHBXaW5kb3coaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkV2hlbkxldHRlckFib3ZlNik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vRm9ybUNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgbG9naW5Cb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmNvbnN0IGxvZ2luYkJveCA9IFxyXG5gICAgICAgICAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJsb2dpbkJveE1pZGRsZVwiPlxyXG5cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZVwiPlphbG9ndWogc2nEmSBkbyBza2xlcHU8L2Rpdj5cclxuXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJsb2dpblwiIG5hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cImhhc8WCb1wiIG5hbWU9XCJoYXPFgm9cIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luQnV0dG9uXCI+WmFsb2d1ajwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5cclxubG9naW5Cb3hDb250YWluZXIuaW5uZXJIVE1MID0gbG9naW5iQm94O1xyXG5sb2dpbkJveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dpbkJveENvbnRhaW5lcicsICk7ICAvL2hpZGUgY2xhc3NhIHRyemViYSBkYcSHXHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvZ2luQm94Q29udGFpbmVyKTtcclxuXHJcbmNvbnN0IGxvZ2luQm94TWlkZGxlID0gbG9naW5Cb3hDb250YWluZXIuY2hpbGRyZW5bMF07XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wQmFyTG9nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsb2dpbkJveENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgaW5wdXRzID0gbG9naW5Cb3hNaWRkbGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcblxyXG5uZXcgRm9ybUNvbnRyb2xsZXIoaW5wdXRzKS5sYXVuY2goKTtcclxuXHJcbmZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQ0NTYvV2VkZWN6a2kvcHVibGljL2FwcC9sb2dpbi9sb2dpbi5waHAnLCB7XHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgIG5ldyBBcnJheShpbnB1dHMubGVuZ3RoKS5maWxsKDApLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGlucHV0c1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5wdXRzW2ldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgKVxyXG59KVxyXG4udGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuLnRoZW4ocmVzID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxubGV0IG1haW5Db250ZW50U2xpZGUgPVxyXG5gXHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRTbGlkZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudFNsaWRlVGl0bGVcIj5cclxuICAgICAgICAgICAgI1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudEJsb2Nrc092ZXJTY3JlZW5cIj5cclxuICAgICAgICAgICAgI1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICBcclxuYFxyXG5cclxubGV0IG1haW5Db250ZW50QmxvY2sgPSBcclxuYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja01pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiNcIiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tJbWdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tUaXRsZVwiPiM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tQcmljZVwiPiM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiBcclxuYFxyXG5cclxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5pbnRlcmZhY2UgTWFpbkNvbnRlbnQge1xyXG4gICAgbWFpbkNvbnRlbnRTbGlkZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBtYWluQ29udGVudEJsb2NrOiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgbWFpbkNvbnRlbnQ6IE1haW5Db250ZW50ID0ge1xyXG4gICAgbWFpbkNvbnRlbnRTbGlkZTogT2JqZWN0LmFzc2lnbihkaXYpLFxyXG4gICAgbWFpbkNvbnRlbnRCbG9jayA6IE9iamVjdC5hc3NpZ24oZGl2KVxyXG59IFxyXG5cclxubWFpbkNvbnRlbnQubWFpbkNvbnRlbnRTbGlkZS5pbm5lckhUTUwgPSBtYWluQ29udGVudFNsaWRlO1xyXG5tYWluQ29udGVudC5tYWluQ29udGVudEJsb2NrLmlubmVySFRNTCA9IG1haW5Db250ZW50QmxvY2s7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudC5tYWluQ29udGVudEJsb2NrLmlubmVySFRNTCk7XHJcblxyXG5cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBuYXZCYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdkJhciA+IGRpdicpO1xyXG4gICAgY29uc3QgbmF2QmFyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QmFyVGlsZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IG5hdkJhclRpbGVzVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QmFyVGlsZXMgPiB1bCcpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIG5hdkJhcnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIG5hdkJhcnMuZm9yRWFjaCgoZWw6IEhUTUxFbGVtZW50LCBpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpICE9IDApIGVsLmNsYXNzTGlzdC50b2dnbGUoJ25hdkJhckxSU2hvdycpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlbC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykgPT0gJ3JnYigxODcsIDU5LCA1OSknKSBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsJ3JnYigxOTAsIDgyLCA4MiknKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDE4NywgNTksIDU5KScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA0MTApe1xyXG5cclxuICAgICAgICBuYXZCYXJUaWxlcy5jbGFzc0xpc3QuYWRkKCdyZW1vdmVIb3ZlcicpO1xyXG4gICAgICAgIG5hdkJhclRpbGVzVWwuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ3N0YXRpYycpO1xyXG4gICAgfSBcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNDEwKXtcclxuXHJcbiAgICAgICAgICAgIG5hdkJhcnMuZm9yRWFjaCgoZWw6IEhUTUxFbGVtZW50LCBpKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaSAhPSAwID8gZWwuY2xhc3NMaXN0LnJlbW92ZSgnbmF2QmFyTFJTaG93JykgOiBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG5hdkJhclRpbGVzLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZUhvdmVyJyk7XHJcbiAgICAgICAgICAgIG5hdkJhclRpbGVzLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgbnVsbCk7XHJcblxyXG4gICAgICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgbnVsbCk7XHJcbiAgICAgICAgICAgIG5hdkJhclRpbGVzVWwuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgbnVsbCk7XHJcbiAgICAgICAgICAgIG5hdkJhclRpbGVzVWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA0MTApIG5hdkJhclRpbGVzVWwuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ3N0YXRpYycpO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2QmFyVGlsZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQxMCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBuYXZCYXJUaWxlcy5zdHlsZTtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVVbCA9IG5hdkJhclRpbGVzVWwuc3R5bGU7IFxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSA9PSAncmdiKDE4NywgNTksIDU5KScpIHN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgbnVsbCk7XHJcbiAgICAgICAgICAgIGVsc2Ugc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDE4NywgNTksIDU5KScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoMTg3LCA1OSwgNTkpJyk7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsZVVsLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PSAnYmxvY2snKSBzdHlsZVVsLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZVVsLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVVsLnNldFByb3BlcnR5KCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCByZ2IoMTM4LCA0NiwgNDYpJyk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IFJPT1QgZnJvbSAnLi9ST09UJztcclxuY29uc29sZS5sb2coJ2R1cGEnKTtcclxuXHJcbmNvbnNvbGUubG9nKFJPT1QrJ2FwaS90ZXN0LnBocCcpO1xyXG5cclxuZmV0Y2goUk9PVCsnYXBpL3Rlc3QucGhwJylcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21hbScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXHJcbiAgICAgICAgLy8gbGV0IHlvID0gSlNPTi5wYXJzZShyZXNwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh5byk7XHJcbiAgICB9KTtcclxuXHJcbi8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2FwaS90ZXN0LnBocCcpXHJcbi8vICAgICAudGhlbihyZXMgPT4gcmVzLmJsb2IocmVzKSlcclxuLy8gICAgIC50aGVuKHJlcyA9PiB7XHJcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4vLyAgICAgICAgIGxldCBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXMpXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cob3V0c2lkZSlcclxuLy8gICAgIH0pXHJcblxyXG4vLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvdGVzdC5waHAnKVxyXG4vLyAgICAgLnRoZW4oKVxyXG5cclxuLy8gICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcblxyXG4vLyAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJNZW51Jyk7XHJcblxyXG4vLyAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnICwgZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICBjb25zdCBpIDogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdXBhJyk7XHJcbi8vICAgICAgICAgaS5zcmMgPSB0aGlzLnNyYztcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2EnKVxyXG4vLyAgICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSlcclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKG1lbnUpO1xyXG5cclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuLy8gICAgICAgICBpbWcuc3JjID0gJ2h0dHA6Ly9sb2NhbGhvc3QvaW1nL3JvZC5wbmcnO1xyXG5cclxuLy8gICAgIH0sIDUwMDApXHJcblxyXG4vLyBjb25zb2xlLmxvZygnZHVwYScpO1xyXG4iLCJjb25zdCB0ZXh0Q29udGVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRDb250ZW50QmxvY2snKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuXHJcbnRleHRDb250ZW50QmxvY2suZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIGlmKGkgJSAyICE9IDApIHtcclxuXHJcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtYWxpZ24nLCAncmlnaHQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
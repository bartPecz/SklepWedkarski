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

/***/ "./dev/ts/login/login.ts":
/*!*******************************!*\
  !*** ./dev/ts/login/login.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const loginBoxParent = document.createElement('div');
const loginbBox = `           
            <input type="text" placeholder="login" name="login">
            <input type="password" placeholder="hasło" name="password">

            <button class="loginButton">Zaloguj</button>
`;
loginBoxParent.innerHTML = loginbBox;
loginBoxParent.classList.add('loginBox');
loginBoxParent.classList.add('hide');
document.body.appendChild(loginBoxParent);
document.querySelector('#topBarLog').addEventListener('click', function () {
    loginBoxParent.classList.toggle('hide');
});
let inputsToWatch = [{}];
for (const [index, input] of [...loginBoxParent.children].entries()) {
    if (input.type != 'text' && input.type != 'password')
        continue;
    inputsToWatch = [
        ...inputsToWatch,
        {
            name: input.name,
            type: input.type,
            value: input.value
        }
    ];
    input.addEventListener('input', function monitoringChanges({ target }) {
        inputsToWatch[index].name = target.name;
        inputsToWatch[index].type = target.type;
        inputsToWatch[index].value = target.value;
    });
}
document.querySelector('.loginBox .loginButton').addEventListener('click', function submit() {
    console.log('submit');
    fetch('http://localhost/Wedeczki/pulic/views/app/database/test.php', {
        method: 'post',
        body: JSON.stringify(inputsToWatch)
    })
        .then((res) => res.json())
        .then((res) => {
        console.log(JSON.parse(res));
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1JPT1QudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvTWFpbkNvbnRlbnRTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvU2xpZGVyQ29udHJvbGVyLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9TbGlkZXJzL1NsaWRpbmdCYXJTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9sb2dpbi9sb2dpbi50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL25hdkJhci9uYXZCYXJDbGljay50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvdGVzdEFQSS50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvdGV4dENvbnRlbnQvb2RkSW5UZXh0Q29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFB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Qiw4QkFBOEI7QUFDOUIsaURBQWlEO0FBQ2pELCtCQUErQjtBQUMvQixTQUFTO0FBRVQseUNBQXlDO0FBQ3pDLGNBQWM7QUFFZCw4QkFBOEI7QUFFOUIsMERBQTBEO0FBRTFELGdEQUFnRDtBQUNoRCx3RUFBd0U7QUFDeEUsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsaURBQWlEO0FBQ2pELG9DQUFvQztBQUNwQyxjQUFjO0FBQ2QsU0FBUztBQU1ULHlCQUF5QjtBQUV6Qix5QkFBeUI7QUFFekIsb0RBQW9EO0FBRXBELGVBQWU7QUFFZix1QkFBdUI7Ozs7Ozs7Ozs7OztBQ25EdkIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQTRCLENBQUM7QUFFbkcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQy9CLElBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFWCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0M7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rldi90cy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0ICdodHRwOi8vbG9jYWxob3N0OjQ0NTYvV2VkZWN6a2kvcHVibGljLyc7XHJcblxyXG4iLCJpbXBvcnQgU2xpZGVyQ29udHJvbGVyICBmcm9tICcuL1NsaWRlckNvbnRyb2xlcic7XHJcbmltcG9ydCBST09UIGZyb20gJy4uL1JPT1QnO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzTGlzdCB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgcGF0aD86IHN0cmluZyxcclxuICAgIHByaWNlPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250ZW50U2xpZGVyIGV4dGVuZHMgU2xpZGVyQ29udHJvbGVyIHtcclxuXHJcbiAgICBwcm9kdWN0c0xpc3Q6IEFycmF5PFByb2R1Y3RzTGlzdD47XHJcbiAgICBwYXRoc1RvSW1hZ2VzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgbnVtYmVyT2ZMYXN0UHJvZHVjdDogbnVtYmVyO1xyXG4gICAgc3RvcERvd25sb2FkOiBib29sZWFuO1xyXG4gICAgZG93bmxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGltZ0ZyYW1lOiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICBzdXBlcihpbWdGcmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdHNMaXN0ID0gSlNPTi5wYXJzZSh0aGlzLmltZ0ZyYW1lLmRhdGFzZXQucHJvZHVjdHNMaXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRoc1RvSW1hZ2VzID0gdGhpcy5wcm9kdWN0c0xpc3QubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFJPT1QgKyBlbC5wYXRoOyAvLyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm51bWJlck9mTGFzdFByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzTGlzdC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3BEb3dubG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsQmxvY2tzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1nRnJhbWUuY2hpbGRyZW4ubGVuZ3RoOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY291bnRPZk5leHRCbG9ja3MoKTogbnVtYmVyIHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbEJsb2NrcyAtICh0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgKyB0aGlzLmhvd01hbnlQYXNzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbkVuZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmltZ0ZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLnJvdW5kKHRoaXMucG9zaXRpb24pID09IDApIHRoaXMuYmFja3dhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuYmFja3dhcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0VmlzaWJsZU51bWJlciA9IHBhcnNlRmxvYXQoKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykudG9GaXhlZCgpKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cyA9PSB0aGlzLnByb2R1Y3RzTGlzdC5sZW5ndGgpIHRoaXMuZm9yd2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5mb3J3YXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gICBcclxuXHJcbiAgICBvbkNsaWNrKGJhY2t3YXJkOiBIVE1MRWxlbWVudCwgZm9yd2FyZDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIHN1cGVyLm9uQ2xpY2soYmFja3dhcmQsIGZvcndhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25SZXNpemUoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnBhc3MgPD0gNSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAtMSAqIHRoaXMucGFzcyAqIHRoaXMuYmxvY2tXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAtMSAqICh0aGlzLmxhc3RWaXNpYmxlTnVtYmVyIC0gdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzKSAqIHRoaXMuYmxvY2tXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3J3YXJkKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmNvdW50T2ZOZXh0QmxvY2tzIDwgMiAqIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cyAmJiAhdGhpcy5zdG9wRG93bmxvYWQgICYmICF0aGlzLmRvd25sb2FkaW5nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnROdW1iZXJEb3dubG9hZCA9IHRoaXMuYWxsQmxvY2tzO1xyXG4gICAgICAgICAgICBsZXQgZW5kTnVtYmVyRG93bmxvYWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWxsQmxvY2tzICsgMTAgPiB0aGlzLm51bWJlck9mTGFzdFByb2R1Y3QgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICBlbmROdW1iZXJEb3dubG9hZCA9IHRoaXMubnVtYmVyT2ZMYXN0UHJvZHVjdCArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcERvd25sb2FkID0gdHJ1ZTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZW5kTnVtYmVyRG93bmxvYWQgPSB0aGlzLmFsbEJsb2NrcyArIDEwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZldGNoSW1nKHRoaXMucGF0aHNUb0ltYWdlcy5zbGljZShzdGFydE51bWJlckRvd25sb2FkLCBlbmROdW1iZXJEb3dubG9hZCkpXHJcbiAgICAgICAgICAgIC50aGVuKGltYWdlcyAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0ZyYW1lQ2hpbGRTdHJ1Y3R1cmUgPSB0aGlzLmltZ0ZyYW1lLmNoaWxkcmVuWzBdLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdJbkNoaWxkU3RydWN0dXJlID0gaW1nRnJhbWVDaGlsZFN0cnVjdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSW5DaGlsZFN0cnVjdHVyZS5yZXBsYWNlV2l0aChpbWcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5hcHBlbmRDaGlsZChpbWdGcmFtZUNoaWxkU3RydWN0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmNvdW50T2ZOZXh0QmxvY2tzID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgc3VwZXIuZm9yd2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoSW1nKGltYWdlc1BhdGg6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZ1R5cGU6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbWFnZXNwcm9taXNlID0gaW1hZ2VzUGF0aC5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1nID0gaW1nVHlwZS5jbG9uZU5vZGUoKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIGxvYWRlZCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd6YcWCYWRvd2FuZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHBhdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05pZSBtYSBtZXRvZHkgYWRkRXZlbnRMaXN0ZW5lcicpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChpbWFnZXNwcm9taXNlKSBhcyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGVwc051bWJlcigpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBpZigwID4gdGhpcy5wb3NpdGlvbiAmJiAgdGhpcy5wb3NpdGlvbiA+IC10aGlzLmltZ0ZyYW1lV2lkdGgpIHJldHVybiB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY291bnRPZk5leHRCbG9ja3MgPCB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgJiYgdGhpcy5jb3VudE9mTmV4dEJsb2NrcyA+IDApIHJldHVybiB0aGlzLmNvdW50T2ZOZXh0QmxvY2tzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzO1xyXG4gICAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckNvbnRyb2xlciB7XHJcblxyXG4gICAgcmVhZG9ubHkgaW1nRnJhbWU6IEhUTUxFbGVtZW50O1xyXG4gICAgcGFzczogbnVtYmVyID0gMDtcclxuICAgIGlzQW5pbWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGFzdFZpc2libGVOdW1iZXI6IG51bWJlcjtcclxuICAgIGJhY2t3YXJkQnV0dG9uOiBIVE1MRWxlbWVudDtcclxuICAgIGZvcndhcmRCdXR0b246IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGltZ0ZyYW1lOiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICB0aGlzLmltZ0ZyYW1lID0gaW1nRnJhbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VmlzaWJsZU51bWJlciA9IHBhcnNlRmxvYXQoKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykudG9GaXhlZCgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW1nRnJhbWUpLmxlZnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb3NpdGlvbihuZXdWYXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUubGVmdCA9IG5ld1ZhciArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJsb2NrV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbWdGcmFtZS5jaGlsZHJlblswXSkud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWdGcmFtZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW1nRnJhbWUpLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW1nRnJhbWVXaWR0aChuZXdXaWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY291bnRPZlZpc2libGVQYXJ0cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ0ZyYW1lV2lkdGgvdGhpcy5ibG9ja1dpZHRoO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhbmltYXRpb25FbmQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ob3dNYW55UGFzcygpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RWaXNpYmxlTnVtYmVyID0gcGFyc2VGbG9hdCgodGhpcy5wYXNzICsgdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzKS50b0ZpeGVkKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBob3dNYW55UGFzcygpOiBudW1iZXIgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzID0gKHRoaXMucG9zaXRpb24gPT09IDApID8gMCA6IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5wb3NpdGlvbiAvIHRoaXMuYmxvY2tXaWR0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soYmFja3dhcmQ6IEhUTUxFbGVtZW50LCBmb3J3YXJkOiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICB0aGlzLmJhY2t3YXJkQnV0dG9uID0gYmFja3dhcmQ7XHJcbiAgICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gZm9yd2FyZDtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrd2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbYmFja3dhcmQsIHRoaXMuYmFja3dhcmRdLFxyXG4gICAgICAgICAgICBbZm9yd2FyZCwgdGhpcy5mb3J3YXJkXVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIGZvcihjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwLmVudHJpZXMoKSl7XHJcblxyXG4gICAgICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcHNOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZm9yd2FyZCgpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNBbmltYXRlKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gLSB0aGlzLnNldFN0ZXBzTnVtYmVyKCkgKiB0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2t3YXJkKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5wb3NpdGlvbiA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5pc0FuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiArIHRoaXMuc2V0U3RlcHNOdW1iZXIoKSp0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgU2xpZGVyQ29udHJvbGVyIGZyb20gJy4vU2xpZGVyQ29udHJvbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRpbmdCYXJTbGlkZXIgZXh0ZW5kcyBTbGlkZXJDb250cm9sZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGltZ0ZyYW1lOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKGltZ0ZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnJlc2l6ZTIoKSB7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbWdGcmFtZVdpZHRoID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvIDYwKSAqIDYwOyAhISEhISEhISEhISEhISEhISEhISEhISEhIHdhxbxuZSBuaWUgZHppYcWCYSBuaWUgd2llbSBjemVtdVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbWdGcmFtZVdpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIDYwKSAqIDYwO1xyXG4gICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaG93TWFueVBhc3MoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb29wKCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGFzcyA+PSA2KSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3MgPSAwXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5mb3J3YXJkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXRMb29wLmJpbmQodGhpcyksIDgwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25yZXNpemUyKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQoKTtcclxuICAgICAgICB0aGlzLnNldExvb3AoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9tYWluQ29udGVudC9tYWluQ29udGVudCc7XHJcblxyXG5pbXBvcnQgUk9PVCBmcm9tICcuL1JPT1QnO1xyXG5pbXBvcnQgJy4vbmF2QmFyL25hdkJhckNsaWNrJztcclxuaW1wb3J0IE1haW5Db250ZW50U2xpZGVyIGZyb20gXCIuL1NsaWRlcnMvTWFpbkNvbnRlbnRTbGlkZXJcIjtcclxuaW1wb3J0IFNsaWRpbmdCYXJTbGlkZXIgZnJvbSAnLi9TbGlkZXJzL1NsaWRpbmdCYXJTbGlkZXInO1xyXG5pbXBvcnQgJy4vdGV4dENvbnRlbnQvb2RkSW5UZXh0Q29udGVudCc7XHJcbmltcG9ydCAnLi9sb2dpbi9sb2dpbic7XHJcbmltcG9ydCAnLi90ZXN0QVBJJztcclxuXHJcblxyXG4vLyBjb25zdCBmb3J3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcndhcmQnKTtcclxuXHJcbi8vIGNvbnN0IGJhY2t3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2t3YXJkJyk7XHJcblxyXG4vLyBmb3J3YXJkLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JlZCcpO1xyXG4vLyBiYWNrd2FyZC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZWQnKTtcclxuXHJcbi8vIGNvbnN0IGltZ0ZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Db250ZW50QmxvY2tzT3ZlclNjcmVlbicpIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xyXG5cclxuY29uc3Qgd3JhcHBlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudFdyYXBwZXInKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuXHJcblxyXG5cclxuLy8gZm9yKGNvbnN0IGltZ0ZyYW1lIG9mIGltZ0ZyYW1lcykge1xyXG5cclxuLy8gICAgIGNvbnN0IGZvcndhcmQgPSBpbWdGcmFtZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25Gb3J3YXJkJykgYXMgSFRNTEVsZW1lbnQ7XHJcbi8vICAgICBjb25zdCBiYWNrd2FyZCA9IGltZ0ZyYW1lLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbkJhY2t3YXJkJykgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4vLyAgICAgY29uc3QgbWFpbkNvbnRlbnRTbGlkZXIgPSBuZXcgTWFpbkNvbnRlbnRTbGlkZXIoaW1nRnJhbWUpO1xyXG4vLyAgICAgbWFpbkNvbnRlbnRTbGlkZXIub25DbGljayhiYWNrd2FyZCwgZm9yd2FyZCk7XHJcbi8vIH1cclxuXHJcbmZvcihjb25zdCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcblxyXG4gICAgY29uc3QgZm9yd2FyZCA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uRm9yd2FyZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYmFja3dhcmQgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbkJhY2t3YXJkJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgaW1nRnJhbWUgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Db250ZW50QmxvY2tzT3ZlclNjcmVlbicpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IG1haW5Db250ZW50U2xpZGVyID0gbmV3IE1haW5Db250ZW50U2xpZGVyKGltZ0ZyYW1lKTtcclxuICAgIG1haW5Db250ZW50U2xpZGVyLm9uQ2xpY2soYmFja3dhcmQsIGZvcndhcmQpO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHNsaWRlckZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGluZ0Jhck92ZXJTY3JlZW4nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbmNvbnN0IHNsaWRlciA9IG5ldyBTbGlkaW5nQmFyU2xpZGVyKHNsaWRlckZyYW1lKTtcclxuXHJcbnNsaWRlci5zdGFydCgpO1xyXG5cclxuXHJcbiIsImNvbnN0IGxvZ2luQm94UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5jb25zdCBsb2dpbmJCb3ggPSBcclxuYCAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibG9naW5cIiBuYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiaGFzxYJvXCIgbmFtZT1cInBhc3N3b3JkXCI+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibG9naW5CdXR0b25cIj5aYWxvZ3VqPC9idXR0b24+XHJcbmA7XHJcblxyXG5cclxubG9naW5Cb3hQYXJlbnQuaW5uZXJIVE1MID0gbG9naW5iQm94O1xyXG5sb2dpbkJveFBhcmVudC5jbGFzc0xpc3QuYWRkKCdsb2dpbkJveCcpO1xyXG5sb2dpbkJveFBhcmVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dpbkJveFBhcmVudCk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wQmFyTG9nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsb2dpbkJveFBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn0pO1xyXG5cclxuXHJcbmludGVyZmFjZSBJbnB1dHNUb1dhdGNoIHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCBpbnB1dHNUb1dhdGNoOiBBcnJheTxJbnB1dHNUb1dhdGNoPiA9IFt7fV07XHJcblxyXG5mb3IoY29uc3QgW2luZGV4LCBpbnB1dF0gb2YgWy4uLmxvZ2luQm94UGFyZW50LmNoaWxkcmVuXS5lbnRyaWVzKCkgYXMgSXRlcmFibGVJdGVyYXRvcjxbbnVtYmVyLCBIVE1MSW5wdXRFbGVtZW50XT4pIHtcclxuXHJcbiAgICBpZihpbnB1dC50eXBlICE9ICd0ZXh0JyAmJiBpbnB1dC50eXBlICE9ICdwYXNzd29yZCcpIGNvbnRpbnVlO1xyXG5cclxuICAgIGlucHV0c1RvV2F0Y2ggPSBbXHJcbiAgICAgICAgLi4uaW5wdXRzVG9XYXRjaCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IGlucHV0Lm5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IGlucHV0LnR5cGUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBpbnB1dC52YWx1ZVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiBtb25pdG9yaW5nQ2hhbmdlcyh7dGFyZ2V0fToge3RhcmdldDogYW55fSkge1xyXG5cclxuICAgICAgICBpbnB1dHNUb1dhdGNoW2luZGV4XS5uYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5wdXRzVG9XYXRjaFtpbmRleF0udHlwZSA9IHRhcmdldC50eXBlO1xyXG4gICAgICAgIGlucHV0c1RvV2F0Y2hbaW5kZXhdLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbkJveCAubG9naW5CdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIHN1Ym1pdCgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc3VibWl0Jyk7XHJcblxyXG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvV2VkZWN6a2kvcHVsaWMvdmlld3MvYXBwL2RhdGFiYXNlL3Rlc3QucGhwJywge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0c1RvV2F0Y2gpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChyZXMpID0+IHtjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlcykpO1xyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiXHJcbmxldCBtYWluQ29udGVudFNsaWRlID1cclxuYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50U2xpZGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRTbGlkZVRpdGxlXCI+XHJcbiAgICAgICAgICAgICNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja3NPdmVyU2NyZWVuXCI+XHJcbiAgICAgICAgICAgICNcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAgXHJcbmBcclxuXHJcbmxldCBtYWluQ29udGVudEJsb2NrID0gXHJcbmBcclxuICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudEJsb2NrXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tNaWRkbGVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIjXCIgY2xhc3M9XCJtYWluQ29udGVudEJsb2NrSW1nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudEJsb2NrVGl0bGVcIj4jPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudEJsb2NrUHJpY2VcIj4jPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gXHJcbmBcclxuXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuaW50ZXJmYWNlIE1haW5Db250ZW50IHtcclxuICAgIG1haW5Db250ZW50U2xpZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgbWFpbkNvbnRlbnRCbG9jazogSFRNTEVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IG1haW5Db250ZW50OiBNYWluQ29udGVudCA9IHtcclxuICAgIG1haW5Db250ZW50U2xpZGU6IE9iamVjdC5hc3NpZ24oZGl2KSxcclxuICAgIG1haW5Db250ZW50QmxvY2sgOiBPYmplY3QuYXNzaWduKGRpdilcclxufSBcclxuXHJcbm1haW5Db250ZW50Lm1haW5Db250ZW50U2xpZGUuaW5uZXJIVE1MID0gbWFpbkNvbnRlbnRTbGlkZTtcclxubWFpbkNvbnRlbnQubWFpbkNvbnRlbnRCbG9jay5pbm5lckhUTUwgPSBtYWluQ29udGVudEJsb2NrO1xyXG5cclxuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnQubWFpbkNvbnRlbnRCbG9jay5pbm5lckhUTUwpO1xyXG5cclxuXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmF2QmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZCYXIgPiBkaXYnKTtcclxuICAgIGNvbnN0IG5hdkJhclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhclRpbGVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBuYXZCYXJUaWxlc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhclRpbGVzID4gdWwnKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBuYXZCYXJzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBuYXZCYXJzLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCwgaSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaSAhPSAwKSBlbC5jbGFzc0xpc3QudG9nZ2xlKCduYXZCYXJMUlNob3cnKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpID09ICdyZ2IoMTg3LCA1OSwgNTkpJykgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCdyZ2IoMTkwLCA4MiwgODIpJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYigxODcsIDU5LCA1OSknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDEwKXtcclxuXHJcbiAgICAgICAgbmF2QmFyVGlsZXMuY2xhc3NMaXN0LmFkZCgncmVtb3ZlSG92ZXInKTtcclxuICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdzdGF0aWMnKTtcclxuICAgIH0gXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDQxMCl7XHJcblxyXG4gICAgICAgICAgICBuYXZCYXJzLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCwgaSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGkgIT0gMCA/IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25hdkJhckxSU2hvdycpIDogZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCBudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBuYXZCYXJUaWxlcy5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVIb3ZlcicpO1xyXG4gICAgICAgICAgICBuYXZCYXJUaWxlcy5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgbmF2QmFyVGlsZXNVbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIG51bGwpO1xyXG4gICAgICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsIG51bGwpO1xyXG4gICAgICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDEwKSBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdzdGF0aWMnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIG5hdkJhclRpbGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICBcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA0MTApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gbmF2QmFyVGlsZXMuc3R5bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlVWwgPSBuYXZCYXJUaWxlc1VsLnN0eWxlOyBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykgPT0gJ3JnYigxODcsIDU5LCA1OSknKSBzdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIG51bGwpO1xyXG4gICAgICAgICAgICBlbHNlIHN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYigxODcsIDU5LCA1OSknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0eWxlVWwuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDE4NywgNTksIDU5KScpO1xyXG5cclxuICAgICAgICAgICAgaWYoc3R5bGVVbC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT0gJ2Jsb2NrJykgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJylcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnYm9yZGVyLWJvdHRvbScsICcxcHggc29saWQgcmdiKDEzOCwgNDYsIDQ2KScpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiIsImltcG9ydCBST09UIGZyb20gJy4vUk9PVCc7XHJcbmNvbnNvbGUubG9nKCdkdXBhJyk7XHJcblxyXG5jb25zb2xlLmxvZyhST09UKydhcGkvdGVzdC5waHAnKTtcclxuXHJcbmZldGNoKFJPT1QrJ2FwaS90ZXN0LnBocCcpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYW0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxyXG4gICAgICAgIC8vIGxldCB5byA9IEpTT04ucGFyc2UocmVzcCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeW8pO1xyXG4gICAgfSk7XHJcblxyXG4vLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvdGVzdC5waHAnKVxyXG4vLyAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKHJlcykpXHJcbi8vICAgICAudGhlbihyZXMgPT4ge1xyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuLy8gICAgICAgICBsZXQgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVzKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG91dHNpZGUpXHJcbi8vICAgICB9KVxyXG5cclxuLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL3Rlc3QucGhwJylcclxuLy8gICAgIC50aGVuKClcclxuXHJcbi8vICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG5cclxuLy8gICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QmFyTWVudScpO1xyXG5cclxuLy8gICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyAsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgY29uc3QgaSA6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVwYScpO1xyXG4vLyAgICAgICAgIGkuc3JjID0gdGhpcy5zcmM7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NhJylcclxuLy8gICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0pXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbi8vICAgICAgICAgaW1nLnNyYyA9ICdodHRwOi8vbG9jYWxob3N0L2ltZy9yb2QucG5nJztcclxuXHJcbi8vICAgICB9LCA1MDAwKVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2R1cGEnKTtcclxuIiwiY29uc3QgdGV4dENvbnRlbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0Q29udGVudEJsb2NrJykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcblxyXG50ZXh0Q29udGVudEJsb2NrLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICBpZihpICUgMiAhPSAwKSB7XHJcblxyXG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0ZXh0LWFsaWduJywgJ3JpZ2h0Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
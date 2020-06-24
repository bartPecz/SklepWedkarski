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
exports.default = 'http://localhost/Wedeczki/public/';


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
    constructor(inputs, submitButton) {
        this.inputs = inputs;
        this.submitButton = submitButton;
        if (this.constructor === FormController)
            throw new Error(`Can't use abstract class to create object instances`);
        this.inputs = inputs;
        this.button = submitButton;
    }
    launch(fn = null) {
        for (const input of [...this.inputs]) {
            input['conditions'] = new Object();
            this.condition6Letters(input);
            this.forbidenSigns(input);
        }
        this.submitButton['conditions'] = new Object();
        if (fn != null)
            fn();
    }
    generateHelpWindow(input, message, condition) {
        const helpWindow = document.createElement('div');
        helpWindow.innerHTML = `<div>- ${input.name + ' ' + message}</div>`;
        helpWindow.style.setProperty('font-size', '14px');
        helpWindow.style.setProperty('color', 'rgb(226, 126, 126)');
        helpWindow.style.setProperty('width', '200px');
        input['conditions'][condition] = new Object();
        input['conditions'][condition].content = helpWindow;
        return helpWindow;
    }
    addHelpWindow(input, condition, redbox = true) {
        input.after(input['conditions'][condition].content);
        input['conditions'][condition].isActive = true;
        this.conditionExecution = false;
        let style = `
                border: 1px solid rgb(226, 126, 126);
                background-color: rgb(226, 126, 126);
            `;
        if (redbox)
            input.style.cssText = style;
    }
    removeHelpWindow(input, condition) {
        input['conditions'][condition].content.remove();
        input['conditions'][condition].isActive = false;
        for (const condition in input['conditions']) {
            if (input['conditions'][condition].isActive)
                return 0;
        }
        input.style.cssText = null;
        this.conditionExecution = true; // Działa tylko wtedy gdy warunki są sprawdzane przed wysłaniem
    }
    condition6Letters(input) {
        let message = 'musi składać się z conajmniej 6 liter';
        let condition = 'condition6Letters';
        this.showAbove6Letters(input, this.button, condition, message);
        this.removeUnder6Letters(input, condition);
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
    removeUnder6Letters(input, condition) {
        const removeWhenLetterUnder6 = () => {
            console.log(condition);
            if (input.value.length >= 6) {
                this.removeHelpWindow(input, condition);
            }
        };
        input.addEventListener('input', removeWhenLetterUnder6);
    }
    forbidenSigns(input) {
        if (input.type == 'password')
            return 0;
        let message = 'posiada niedozwolony znak';
        let condition = 'forbidenSigns';
        this.generateHelpWindow(input, message, condition);
        const reg = /[!@#\$%\^&\*\(\)\\\?<>\s]/i;
        const addWhenForbidenSign = () => {
            if (reg.test(input.value)) {
                this.addHelpWindow(input, condition);
            }
            else {
                this.removeHelpWindow(input, condition);
            }
        };
        input.addEventListener('input', addWhenForbidenSign);
    }
}
exports.FormController = FormController;


/***/ }),

/***/ "./dev/ts/login/SendForm.ts":
/*!**********************************!*\
  !*** ./dev/ts/login/SendForm.ts ***!
  \**********************************/
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
const FormController_1 = __webpack_require__(/*! ./FormController */ "./dev/ts/login/FormController.ts");
const ROOT_1 = __importDefault(__webpack_require__(/*! ../ROOT */ "./dev/ts/ROOT.ts"));
class SendForm extends FormController_1.FormController {
    constructor(inputs, submitButton) {
        super(inputs, submitButton);
        this.inputs = inputs;
        this.submitButton = submitButton;
    }
    launch(fn = null) {
        super.launch();
        this.submitButton.addEventListener('click', (buttonEvent) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this.sendDataButtonClick(buttonEvent);
            if (!result)
                return 0;
            if (fn != null)
                fn.call(this, result);
        }));
    }
    sendDataButtonClick(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const button = e.target;
            if (!this.conditionExecution)
                return 0;
            button.disabled = true;
            try {
                let responseStream = yield fetch(ROOT_1.default + 'app/login/login.php', {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(new Array(this.inputs.length).fill(0).map((el, i) => {
                        return {
                            name: this.inputs[i].name,
                            value: this.inputs[i].value
                        };
                    }))
                });
                if (responseStream.ok == false)
                    throw new Error('Connecion error - check your addres');
                let json = yield responseStream.json();
                button.disabled = false;
                return json;
            }
            catch (err) {
                console.error(err);
                button.disabled = false;
                return false;
            }
        });
    }
}
exports.SendForm = SendForm;


/***/ }),

/***/ "./dev/ts/login/login.ts":
/*!*******************************!*\
  !*** ./dev/ts/login/login.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SendForm_1 = __webpack_require__(/*! ./SendForm */ "./dev/ts/login/SendForm.ts");
const ROOT_1 = __importDefault(__webpack_require__(/*! ../ROOT */ "./dev/ts/ROOT.ts"));
const loginBoxContainer = document.createElement('div');
const loginbBox = `           
    <div class="loginBoxMiddle">

        <div class="exit"><img src="../img/cross.png"></div>
        <div class="Title">Zaloguj się do sklepu</div>

        <input type="text" placeholder="login" name="login" maxlength="30">
        <input id="loginPassword"type="password" placeholder="hasło" name="hasło" maxlength="30">

        <button class="loginButton">Zaloguj</button>
    </div>
`;
loginBoxContainer.innerHTML = loginbBox;
loginBoxContainer.classList.add('loginBoxContainer', 'hide');
document.body.appendChild(loginBoxContainer);
const loginBoxMiddle = loginBoxContainer.children[0];
const password = document.getElementById('loginPassword');
const exit = loginBoxMiddle.querySelector('.loginBoxMiddle .exit');
const inputs = loginBoxMiddle.getElementsByTagName('input');
const loginForm = new SendForm_1.SendForm(inputs, document.querySelector('.loginBoxContainer .loginButton'));
function turnOffLoginBoxContainer() {
    loginBoxContainer.classList.toggle('hide');
    password.value = '';
    console.dir(password);
    loginForm.removeHelpWindow(password, 'condition6Letters');
}
const loginFields = document.querySelectorAll('div[data-log="login"]');
const logoutFields = document.querySelectorAll('div[data-log="logout"]');
const userLogin = document.querySelector('.userLogin');
const onlyOnceGenerateHelpWindow = (function () {
    let fired = false;
    return function () {
        if (!fired) {
            this.generateHelpWindow(this.submitButton, 'Zły login lub hasło', 'unmatched data');
            for (const input of this.inputs) {
                input.addEventListener('input', function removesUnmatchedDataHelpWindow() {
                    this.removeHelpWindow(this.submitButton, 'unmatched data');
                }.bind(this));
            }
            fired = true;
        }
    };
})();
loginForm.launch(function (user) {
    onlyOnceGenerateHelpWindow.call(this);
    if (user === 'Brak wyniku') {
        if (!this.submitButton['conditions']['unmatched data'].isActive)
            this.addHelpWindow(this.submitButton, 'unmatched data', false);
        password.value = '';
        return 0;
    }
    userLogin.textContent = user[0].login;
    loginFields.forEach(el => el.classList.remove('hide'));
    logoutFields.forEach(el => el.classList.add('hide'));
    loginBoxContainer.classList.add('hide');
    [...inputs].forEach(el => el.value = '');
});
const logout = document.querySelector('.logout');
console.log(logout);
logout.addEventListener('click', function logout(event) {
    loginFields.forEach(el => el.classList.add('hide'));
    logoutFields.forEach(el => el.classList.remove('hide'));
    userLogin.textContent = '';
    fetch(ROOT_1.default + 'app/login/logout.php');
});
document.querySelector('.topBarLog').addEventListener('click', turnOffLoginBoxContainer);
exit.addEventListener('click', turnOffLoginBoxContainer);


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ROOT_1 = __importDefault(__webpack_require__(/*! ../ROOT */ "./dev/ts/ROOT.ts"));
document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelectorAll('.navBar > div');
    const navBarTiles = document.querySelector('.navBarTiles');
    const navBarTilesUl = document.querySelector('.navBarTiles > ul');
    const categories = document.querySelectorAll('.categorySelect');
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
    for (const category of categories) {
        const categoryName = category.dataset.category;
        category.addEventListener('click', e => {
            const category = e.target;
            fetch(ROOT_1.default + 'app/productsSelect/categoryFromNavBar.php', {
                method: 'POST',
                body: categoryName
            });
        });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1JPT1QudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvTWFpbkNvbnRlbnRTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvU2xpZGVyQ29udHJvbGVyLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9TbGlkZXJzL1NsaWRpbmdCYXJTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9sb2dpbi9Gb3JtQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbG9naW4vU2VuZEZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2xvZ2luL2xvZ2luLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9tYWluQ29udGVudC9tYWluQ29udGVudC50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbmF2QmFyL25hdkJhckNsaWNrLnRzIiwid2VicGFjazovLy8uL2Rldi90cy90ZXN0QVBJLnRzIiwid2VicGFjazovLy8uL2Rldi90cy90ZXh0Q29udGVudC9vZGRJblRleHRDb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUMsSUFBSSxDQUFDLEVBQUU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFUCx5Q0FBeUM7QUFDekMsa0NBQWtDO0FBQ2xDLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsaURBQWlEO0FBQ2pELCtCQUErQjtBQUMvQixTQUFTO0FBRVQseUNBQXlDO0FBQ3pDLGNBQWM7QUFFZCw4QkFBOEI7QUFFOUIsMERBQTBEO0FBRTFELGdEQUFnRDtBQUNoRCx3RUFBd0U7QUFDeEUsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsaURBQWlEO0FBQ2pELG9DQUFvQztBQUNwQyxjQUFjO0FBQ2QsU0FBUztBQU1ULHlCQUF5QjtBQUV6Qix5QkFBeUI7QUFFekIsb0RBQW9EO0FBRXBELGVBQWU7QUFFZix1QkFBdUI7Ozs7Ozs7Ozs7OztBQ25EdkIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQTRCLENBQUM7QUFFbkcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQy9CLElBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFWCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0M7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rldi90cy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0ICdodHRwOi8vbG9jYWxob3N0L1dlZGVjemtpL3B1YmxpYy8nO1xyXG5cclxuIiwiaW1wb3J0IFNsaWRlckNvbnRyb2xlciAgZnJvbSAnLi9TbGlkZXJDb250cm9sZXInO1xyXG5pbXBvcnQgUk9PVCBmcm9tICcuLi9ST09UJztcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0c0xpc3Qge1xyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIHBhdGg/OiBzdHJpbmcsXHJcbiAgICBwcmljZT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udGVudFNsaWRlciBleHRlbmRzIFNsaWRlckNvbnRyb2xlciB7XHJcblxyXG4gICAgcHJvZHVjdHNMaXN0OiBBcnJheTxQcm9kdWN0c0xpc3Q+O1xyXG4gICAgcGF0aHNUb0ltYWdlczogQXJyYXk8c3RyaW5nPjtcclxuICAgIG51bWJlck9mTGFzdFByb2R1Y3Q6IG51bWJlcjtcclxuICAgIHN0b3BEb3dubG9hZDogYm9vbGVhbjtcclxuICAgIGRvd25sb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbWdGcmFtZTogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoaW1nRnJhbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RzTGlzdCA9IEpTT04ucGFyc2UodGhpcy5pbWdGcmFtZS5kYXRhc2V0LnByb2R1Y3RzTGlzdCk7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aHNUb0ltYWdlcyA9IHRoaXMucHJvZHVjdHNMaXN0Lm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBST09UICsgZWwucGF0aDsgLy8hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkxhc3RQcm9kdWN0ID0gdGhpcy5wcm9kdWN0c0xpc3QubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9wRG93bmxvYWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFsbEJsb2NrcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ0ZyYW1lLmNoaWxkcmVuLmxlbmd0aDsgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvdW50T2ZOZXh0QmxvY2tzKCk6IG51bWJlciB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxCbG9ja3MgLSAodGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzICsgdGhpcy5ob3dNYW55UGFzcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRpb25FbmQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ob3dNYW55UGFzcygpO1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uKSA9PSAwKSB0aGlzLmJhY2t3YXJkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmJhY2t3YXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFZpc2libGVOdW1iZXIgPSBwYXJzZUZsb2F0KCh0aGlzLnBhc3MgKyB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMpLnRvRml4ZWQoKSk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnBhc3MgKyB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgPT0gdGhpcy5wcm9kdWN0c0xpc3QubGVuZ3RoKSB0aGlzLmZvcndhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZm9yd2FyZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgb25DbGljayhiYWNrd2FyZDogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICBzdXBlci5vbkNsaWNrKGJhY2t3YXJkLCBmb3J3YXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG9uUmVzaXplKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5wYXNzIDw9IDUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTEgKiB0aGlzLnBhc3MgKiB0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gLTEgKiAodGhpcy5sYXN0VmlzaWJsZU51bWJlciAtIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykgKiB0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yd2FyZCgpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jb3VudE9mTmV4dEJsb2NrcyA8IDIgKiB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgJiYgIXRoaXMuc3RvcERvd25sb2FkICAmJiAhdGhpcy5kb3dubG9hZGluZykge1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0YXJ0TnVtYmVyRG93bmxvYWQgPSB0aGlzLmFsbEJsb2NrcztcclxuICAgICAgICAgICAgbGV0IGVuZE51bWJlckRvd25sb2FkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmFsbEJsb2NrcyArIDEwID4gdGhpcy5udW1iZXJPZkxhc3RQcm9kdWN0ICsgMSkge1xyXG5cclxuICAgICAgICAgICAgICAgZW5kTnVtYmVyRG93bmxvYWQgPSB0aGlzLm51bWJlck9mTGFzdFByb2R1Y3QgKyAxO1xyXG4gICAgICAgICAgICAgICB0aGlzLnN0b3BEb3dubG9hZCA9IHRydWU7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZE51bWJlckRvd25sb2FkID0gdGhpcy5hbGxCbG9ja3MgKyAxMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLnBhdGhzVG9JbWFnZXMuc2xpY2Uoc3RhcnROdW1iZXJEb3dubG9hZCwgZW5kTnVtYmVyRG93bmxvYWQpKVxyXG4gICAgICAgICAgICAudGhlbihpbWFnZXMgID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBpbWcgb2YgaW1hZ2VzKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdGcmFtZUNoaWxkU3RydWN0dXJlID0gdGhpcy5pbWdGcmFtZS5jaGlsZHJlblswXS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nSW5DaGlsZFN0cnVjdHVyZSA9IGltZ0ZyYW1lQ2hpbGRTdHJ1Y3R1cmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGltZ0luQ2hpbGRTdHJ1Y3R1cmUucmVwbGFjZVdpdGgoaW1nKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuYXBwZW5kQ2hpbGQoaW1nRnJhbWVDaGlsZFN0cnVjdHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jb3VudE9mTmV4dEJsb2NrcyA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN1cGVyLmZvcndhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaEltZyhpbWFnZXNQYXRoOiBBcnJheTxzdHJpbmc+KTogUHJvbWlzZTxBcnJheTxIVE1MSW1hZ2VFbGVtZW50Pj4ge1xyXG5cclxuICAgICAgICBjb25zdCBpbWdUeXBlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzcHJvbWlzZSA9IGltYWdlc1BhdGgubWFwKChwYXRoOiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGltZ1R5cGUuY2xvbmVOb2RlKCkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmKGltZy5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiBsb2FkZWQoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnemHFgmFkb3dhbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBwYXRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOaWUgbWEgbWV0b2R5IGFkZEV2ZW50TGlzdGVuZXInKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoaW1hZ2VzcHJvbWlzZSkgYXMgQXJyYXk8SFRNTEltYWdlRWxlbWVudD47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcHNOdW1iZXIoKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgaWYoMCA+IHRoaXMucG9zaXRpb24gJiYgIHRoaXMucG9zaXRpb24gPiAtdGhpcy5pbWdGcmFtZVdpZHRoKSByZXR1cm4gdGhpcy5ob3dNYW55UGFzcygpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmNvdW50T2ZOZXh0QmxvY2tzIDwgdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzICYmIHRoaXMuY291bnRPZk5leHRCbG9ja3MgPiAwKSByZXR1cm4gdGhpcy5jb3VudE9mTmV4dEJsb2NrcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cztcclxuICAgIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJDb250cm9sZXIge1xyXG5cclxuICAgIHJlYWRvbmx5IGltZ0ZyYW1lOiBIVE1MRWxlbWVudDtcclxuICAgIHBhc3M6IG51bWJlciA9IDA7XHJcbiAgICBpc0FuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxhc3RWaXNpYmxlTnVtYmVyOiBudW1iZXI7XHJcbiAgICBiYWNrd2FyZEJ1dHRvbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBmb3J3YXJkQnV0dG9uOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbWdGcmFtZTogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZSA9IGltZ0ZyYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFZpc2libGVOdW1iZXIgPSBwYXJzZUZsb2F0KCh0aGlzLnBhc3MgKyB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMpLnRvRml4ZWQoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmltZ0ZyYW1lKS5sZWZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcG9zaXRpb24obmV3VmFyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLmxlZnQgPSBuZXdWYXIgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBibG9ja1dpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW1nRnJhbWUuY2hpbGRyZW5bMF0pLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW1nRnJhbWVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmltZ0ZyYW1lKS53aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGltZ0ZyYW1lV2lkdGgobmV3V2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvdW50T2ZWaXNpYmxlUGFydHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWdGcmFtZVdpZHRoL3RoaXMuYmxvY2tXaWR0aDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYW5pbWF0aW9uRW5kKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW1nRnJhbWUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaG93TWFueVBhc3MoKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5sYXN0VmlzaWJsZU51bWJlciA9IHBhcnNlRmxvYXQoKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykudG9GaXhlZCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaG93TWFueVBhc3MoKTogbnVtYmVyICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzcyA9ICh0aGlzLnBvc2l0aW9uID09PSAwKSA/IDAgOiBNYXRoLnJvdW5kKE1hdGguYWJzKHRoaXMucG9zaXRpb24gLyB0aGlzLmJsb2NrV2lkdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGJhY2t3YXJkOiBIVE1MRWxlbWVudCwgZm9yd2FyZDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrd2FyZEJ1dHRvbiA9IGJhY2t3YXJkO1xyXG4gICAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGZvcndhcmQ7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja3dhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW2JhY2t3YXJkLCB0aGlzLmJhY2t3YXJkXSxcclxuICAgICAgICAgICAgW2ZvcndhcmQsIHRoaXMuZm9yd2FyZF1cclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICBmb3IoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcC5lbnRyaWVzKCkpe1xyXG5cclxuICAgICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0ZXBzTnVtYmVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZvcndhcmQoKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmlzQW5pbWF0ZSl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uIC0gdGhpcy5zZXRTdGVwc051bWJlcigpICogdGhpcy5ibG9ja1dpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYWNrd2FyZCgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMucG9zaXRpb24gPT09IDApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNBbmltYXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gKyB0aGlzLnNldFN0ZXBzTnVtYmVyKCkqdGhpcy5ibG9ja1dpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFNsaWRlckNvbnRyb2xlciBmcm9tICcuL1NsaWRlckNvbnRyb2xlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkaW5nQmFyU2xpZGVyIGV4dGVuZHMgU2xpZGVyQ29udHJvbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbWdGcmFtZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihpbWdGcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25yZXNpemUyKCkge1xyXG5cclxuICAgICAgICBpZih0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaW1nRnJhbWVXaWR0aCA9IE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggLyA2MCkgKiA2MDsgISEhISEhISEhISEhISEhISEhISEhISEhISB3YcW8bmUgbmllIGR6aWHFgmEgbmllIHdpZW0gY3plbXVcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3dNYW55UGFzcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaW1nRnJhbWVXaWR0aCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyA2MCkgKiA2MDtcclxuICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9vcCgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnBhc3MgPj0gNikgeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wYXNzID0gMFxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdsZWZ0JztcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHRoaXMuZm9yd2FyZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0TG9vcC5iaW5kKHRoaXMpLCA4MDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9ucmVzaXplMigpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMb29wKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnQnO1xyXG5cclxuaW1wb3J0IFJPT1QgZnJvbSAnLi9ST09UJztcclxuaW1wb3J0ICcuL25hdkJhci9uYXZCYXJDbGljayc7XHJcbmltcG9ydCBNYWluQ29udGVudFNsaWRlciBmcm9tIFwiLi9TbGlkZXJzL01haW5Db250ZW50U2xpZGVyXCI7XHJcbmltcG9ydCBTbGlkaW5nQmFyU2xpZGVyIGZyb20gJy4vU2xpZGVycy9TbGlkaW5nQmFyU2xpZGVyJztcclxuaW1wb3J0ICcuL3RleHRDb250ZW50L29kZEluVGV4dENvbnRlbnQnO1xyXG5pbXBvcnQgJy4vbG9naW4vbG9naW4nO1xyXG5pbXBvcnQgJy4vdGVzdEFQSSc7XHJcblxyXG5cclxuLy8gY29uc3QgZm9yd2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3J3YXJkJyk7XHJcblxyXG4vLyBjb25zdCBiYWNrd2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrd2FyZCcpO1xyXG5cclxuLy8gZm9yd2FyZC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZWQnKTtcclxuLy8gYmFja3dhcmQuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmVkJyk7XHJcblxyXG4vLyBjb25zdCBpbWdGcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudEJsb2Nrc092ZXJTY3JlZW4nKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuXHJcbmNvbnN0IHdyYXBwZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbkNvbnRlbnRXcmFwcGVyJykgYXMgSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XHJcblxyXG5cclxuXHJcbi8vIGZvcihjb25zdCBpbWdGcmFtZSBvZiBpbWdGcmFtZXMpIHtcclxuXHJcbi8vICAgICBjb25zdCBmb3J3YXJkID0gaW1nRnJhbWUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uRm9yd2FyZCcpIGFzIEhUTUxFbGVtZW50O1xyXG4vLyAgICAgY29uc3QgYmFja3dhcmQgPSBpbWdGcmFtZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25CYWNrd2FyZCcpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuLy8gICAgIGNvbnN0IG1haW5Db250ZW50U2xpZGVyID0gbmV3IE1haW5Db250ZW50U2xpZGVyKGltZ0ZyYW1lKTtcclxuLy8gICAgIG1haW5Db250ZW50U2xpZGVyLm9uQ2xpY2soYmFja3dhcmQsIGZvcndhcmQpO1xyXG4vLyB9XHJcblxyXG5mb3IoY29uc3Qgd3JhcHBlciBvZiB3cmFwcGVycykge1xyXG5cclxuICAgIGNvbnN0IGZvcndhcmQgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbkZvcndhcmQnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGJhY2t3YXJkID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidXR0b25CYWNrd2FyZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGltZ0ZyYW1lID0gd3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudEJsb2Nrc092ZXJTY3JlZW4nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdCBtYWluQ29udGVudFNsaWRlciA9IG5ldyBNYWluQ29udGVudFNsaWRlcihpbWdGcmFtZSk7XHJcbiAgICBtYWluQ29udGVudFNsaWRlci5vbkNsaWNrKGJhY2t3YXJkLCBmb3J3YXJkKTtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBzbGlkZXJGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRpbmdCYXJPdmVyU2NyZWVuJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG5jb25zdCBzbGlkZXIgPSBuZXcgU2xpZGluZ0JhclNsaWRlcihzbGlkZXJGcmFtZSk7XHJcblxyXG5zbGlkZXIuc3RhcnQoKTtcclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBidXR0b246IEhUTUxFbGVtZW50O1xyXG4gICAgcHVibGljIGNvbmRpdGlvbkV4ZWN1dGlvbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXRzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+LCBwdWJsaWMgc3VibWl0QnV0dG9uOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuY29uc3RydWN0b3IgPT09IEZvcm1Db250cm9sbGVyKSB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHVzZSBhYnN0cmFjdCBjbGFzcyB0byBjcmVhdGUgb2JqZWN0IGluc3RhbmNlc2ApO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IHN1Ym1pdEJ1dHRvbjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGF1bmNoKGZuID0gbnVsbCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihjb25zdCBpbnB1dCBvZiBbLi4udGhpcy5pbnB1dHNdIGFzIFtIVE1MSW5wdXRFbGVtZW50XSkge1xyXG5cclxuICAgICAgICAgICAgaW5wdXRbJ2NvbmRpdGlvbnMnXSA9IG5ldyBPYmplY3QoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uNkxldHRlcnMoaW5wdXQpOyBcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRlblNpZ25zKGlucHV0KTsgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b25bJ2NvbmRpdGlvbnMnXSA9IG5ldyBPYmplY3QoKTtcclxuXHJcbiAgICAgICAgaWYoZm4gIT0gbnVsbCkgZm4oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUhlbHBXaW5kb3coaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZywgY29uZGl0aW9uOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlbHBXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgaGVscFdpbmRvdy5pbm5lckhUTUwgPSBgPGRpdj4tICR7aW5wdXQubmFtZSArICcgJyArIG1lc3NhZ2V9PC9kaXY+YDtcclxuXHJcbiAgICAgICAgaGVscFdpbmRvdy5zdHlsZS5zZXRQcm9wZXJ0eSgnZm9udC1zaXplJywgJzE0cHgnKTtcclxuICAgICAgICBoZWxwV2luZG93LnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsICdyZ2IoMjI2LCAxMjYsIDEyNiknKTtcclxuICAgICAgICBoZWxwV2luZG93LnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICcyMDBweCcpO1xyXG5cclxuICAgICAgICBpbnB1dFsnY29uZGl0aW9ucyddW2NvbmRpdGlvbl0gPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGlucHV0Wydjb25kaXRpb25zJ11bY29uZGl0aW9uXS5jb250ZW50ID0gaGVscFdpbmRvdztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlbHBXaW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGVscFdpbmRvdyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY29uZGl0aW9uOiBzdHJpbmcsIHJlZGJveDogYm9vbGVhbiA9IHRydWUpIHtcclxuXHJcbiAgICAgICAgaW5wdXQuYWZ0ZXIoaW5wdXRbJ2NvbmRpdGlvbnMnXVtjb25kaXRpb25dLmNvbnRlbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0Wydjb25kaXRpb25zJ11bY29uZGl0aW9uXS5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25FeGVjdXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlID0gXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjYsIDEyNiwgMTI2KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDEyNiwgMTI2KTtcclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgaWYocmVkYm94KSBpbnB1dC5zdHlsZS5jc3NUZXh0ID0gc3R5bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUhlbHBXaW5kb3coaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNvbmRpdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlucHV0Wydjb25kaXRpb25zJ11bY29uZGl0aW9uXS5jb250ZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBpbnB1dFsnY29uZGl0aW9ucyddW2NvbmRpdGlvbl0uaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGNvbmRpdGlvbiBpbiBpbnB1dFsnY29uZGl0aW9ucyddKSB7XHJcblxyXG4gICAgICAgICAgICBpZihpbnB1dFsnY29uZGl0aW9ucyddW2NvbmRpdGlvbl0uaXNBY3RpdmUpIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQuc3R5bGUuY3NzVGV4dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25FeGVjdXRpb24gPSB0cnVlOyAvLyBEemlhxYJhIHR5bGtvIHd0ZWR5IGdkeSB3YXJ1bmtpIHPEhSBzcHJhd2R6YW5lIHByemVkIHd5c8WCYW5pZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25kaXRpb242TGV0dGVycyhpbnB1dCkge1xyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICdtdXNpIHNrxYJhZGHEhyBzacSZIHogY29uYWptbmllaiA2IGxpdGVyJztcclxuICAgICAgICBsZXQgY29uZGl0aW9uID0gJ2NvbmRpdGlvbjZMZXR0ZXJzJztcclxuXHJcbiAgICAgICAgdGhpcy5zaG93QWJvdmU2TGV0dGVycyhpbnB1dCwgdGhpcy5idXR0b24sIGNvbmRpdGlvbiwgbWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVVbmRlcjZMZXR0ZXJzKGlucHV0LCBjb25kaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBYm92ZTZMZXR0ZXJzKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBidXR0b246IEhUTUxFbGVtZW50LCBjb25kaXRpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVIZWxwV2luZG93KGlucHV0LCBtZXNzYWdlLCBjb25kaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRXaGVuTGV0dGVyQWJvdmU2ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRIZWxwV2luZG93KGlucHV0LCBjb25kaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFdoZW5MZXR0ZXJBYm92ZTYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVuZGVyNkxldHRlcnMoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNvbmRpdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlV2hlbkxldHRlclVuZGVyNiA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29uZGl0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGlucHV0LnZhbHVlLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhlbHBXaW5kb3coaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcmVtb3ZlV2hlbkxldHRlclVuZGVyNik7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yYmlkZW5TaWducyhpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xyXG5cclxuICAgICAgICBpZihpbnB1dC50eXBlID09ICdwYXNzd29yZCcpIHJldHVybiAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJ3Bvc2lhZGEgbmllZG96d29sb255IHpuYWsnO1xyXG4gICAgICAgIGxldCBjb25kaXRpb24gPSAnZm9yYmlkZW5TaWducyc7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVIZWxwV2luZG93KGlucHV0LCBtZXNzYWdlLCBjb25kaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCByZWcgPSAvWyFAI1xcJCVcXF4mXFwqXFwoXFwpXFxcXFxcPzw+XFxzXS9pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRXaGVuRm9yYmlkZW5TaWduID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYocmVnLnRlc3QoaW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEhlbHBXaW5kb3coaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUhlbHBXaW5kb3coaW5wdXQsY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBhZGRXaGVuRm9yYmlkZW5TaWduKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0Zvcm1Db250cm9sbGVyfSBmcm9tICcuL0Zvcm1Db250cm9sbGVyJztcclxuaW1wb3J0IFJPT1QgZnJvbSAnLi4vUk9PVCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VuZEZvcm0gZXh0ZW5kcyBGb3JtQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlucHV0czogSFRNTENvbGxlY3Rpb25PZjxIVE1MSW5wdXRFbGVtZW50PiwgcHVibGljIHN1Ym1pdEJ1dHRvbjogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihpbnB1dHMsIHN1Ym1pdEJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbGF1bmNoKGZuID0gbnVsbCkge1xyXG5cclxuICAgICAgICBzdXBlci5sYXVuY2goKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoYnV0dG9uRXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmREYXRhQnV0dG9uQ2xpY2soYnV0dG9uRXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgICAgICBpZihmbiAhPSBudWxsKSBmbi5jYWxsKHRoaXMsIHJlc3VsdCk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlbmREYXRhQnV0dG9uQ2xpY2soZSkge1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuY29uZGl0aW9uRXhlY3V0aW9uKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlU3RyZWFtID0gYXdhaXQgZmV0Y2goUk9PVCArICdhcHAvbG9naW4vbG9naW4ucGhwJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQXJyYXkodGhpcy5pbnB1dHMubGVuZ3RoKS5maWxsKDApLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuaW5wdXRzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmlucHV0c1tpXS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYocmVzcG9uc2VTdHJlYW0ub2sgPT0gZmFsc2UpIHRocm93IG5ldyBFcnJvcignQ29ubmVjaW9uIGVycm9yIC0gY2hlY2sgeW91ciBhZGRyZXMnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBqc29uID0gYXdhaXQgcmVzcG9uc2VTdHJlYW0uanNvbigpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycil7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9ICAgIFxyXG59IiwiaW1wb3J0IHsgU2VuZEZvcm0gfSBmcm9tICcuL1NlbmRGb3JtJztcclxuaW1wb3J0IFJPT1QgZnJvbSAnLi4vUk9PVCc7XHJcblxyXG5jb25zdCBsb2dpbkJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuY29uc3QgbG9naW5iQm94ID0gXHJcbmAgICAgICAgICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luQm94TWlkZGxlXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGl0XCI+PGltZyBzcmM9XCIuLi9pbWcvY3Jvc3MucG5nXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIlRpdGxlXCI+WmFsb2d1aiBzacSZIGRvIHNrbGVwdTwvZGl2PlxyXG5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxvZ2luXCIgbmFtZT1cImxvZ2luXCIgbWF4bGVuZ3RoPVwiMzBcIj5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJsb2dpblBhc3N3b3JkXCJ0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cImhhc8WCb1wiIG5hbWU9XCJoYXPFgm9cIiBtYXhsZW5ndGg9XCIzMFwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibG9naW5CdXR0b25cIj5aYWxvZ3VqPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcblxyXG5sb2dpbkJveENvbnRhaW5lci5pbm5lckhUTUwgPSBsb2dpbmJCb3g7XHJcbmxvZ2luQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ2luQm94Q29udGFpbmVyJywgJ2hpZGUnKTsgXHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvZ2luQm94Q29udGFpbmVyKTtcclxuXHJcbmNvbnN0IGxvZ2luQm94TWlkZGxlID0gbG9naW5Cb3hDb250YWluZXIuY2hpbGRyZW5bMF07XHJcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBleGl0ID0gbG9naW5Cb3hNaWRkbGUucXVlcnlTZWxlY3RvcignLmxvZ2luQm94TWlkZGxlIC5leGl0Jyk7XHJcbmNvbnN0IGlucHV0cyA9IGxvZ2luQm94TWlkZGxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG5cclxuY29uc3QgbG9naW5Gb3JtID0gbmV3IFNlbmRGb3JtKGlucHV0cywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luQm94Q29udGFpbmVyIC5sb2dpbkJ1dHRvbicpKTtcclxuXHJcbmZ1bmN0aW9uIHR1cm5PZmZMb2dpbkJveENvbnRhaW5lcigpe1xyXG5cclxuICAgIGxvZ2luQm94Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgIHBhc3N3b3JkLnZhbHVlID0gJyc7XHJcbiAgICBjb25zb2xlLmRpcihwYXNzd29yZCk7XHJcbiAgICBsb2dpbkZvcm0ucmVtb3ZlSGVscFdpbmRvdyhwYXNzd29yZCwgJ2NvbmRpdGlvbjZMZXR0ZXJzJyk7XHJcbn1cclxuXHJcbmNvbnN0IGxvZ2luRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtbG9nPVwibG9naW5cIl0nKTtcclxuY29uc3QgbG9nb3V0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtbG9nPVwibG9nb3V0XCJdJyk7XHJcbmNvbnN0IHVzZXJMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyTG9naW4nKTsgXHJcblxyXG5cclxuXHJcbmNvbnN0IG9ubHlPbmNlR2VuZXJhdGVIZWxwV2luZG93ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGxldCBmaXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZighZmlyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhlbHBXaW5kb3codGhpcy5zdWJtaXRCdXR0b24sICdaxYJ5IGxvZ2luIGx1YiBoYXPFgm8nLCAndW5tYXRjaGVkIGRhdGEnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpbnB1dCBvZiB0aGlzLmlucHV0cykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JyAsIGZ1bmN0aW9uIHJlbW92ZXNVbm1hdGNoZWREYXRhSGVscFdpbmRvdygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVIZWxwV2luZG93KHRoaXMuc3VibWl0QnV0dG9uLCAndW5tYXRjaGVkIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmxvZ2luRm9ybS5sYXVuY2goZnVuY3Rpb24odXNlcjogYW55KSB7XHJcblxyXG5cclxuICAgIG9ubHlPbmNlR2VuZXJhdGVIZWxwV2luZG93LmNhbGwodGhpcyk7XHJcbiAgICBcclxuICAgIGlmKHVzZXIgPT09ICdCcmFrIHd5bmlrdScpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc3VibWl0QnV0dG9uWydjb25kaXRpb25zJ11bJ3VubWF0Y2hlZCBkYXRhJ10uaXNBY3RpdmUpIHRoaXMuYWRkSGVscFdpbmRvdyh0aGlzLnN1Ym1pdEJ1dHRvbiwndW5tYXRjaGVkIGRhdGEnLCBmYWxzZSk7XHJcbiAgICAgICAgcGFzc3dvcmQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlckxvZ2luLnRleHRDb250ZW50ID0gdXNlclswXS5sb2dpbjtcclxuXHJcbiAgICBsb2dpbkZpZWxkcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcbiAgICBsb2dvdXRGaWVsZHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xyXG4gICAgbG9naW5Cb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgWy4uLmlucHV0c10uZm9yRWFjaChlbCA9PiBlbC52YWx1ZSA9ICcnKTtcclxufSk7XHJcblxyXG5jb25zdCBsb2dvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb3V0Jyk7XHJcbmNvbnNvbGUubG9nKGxvZ291dCk7XHJcblxyXG5sb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBsb2dvdXQoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGxvZ2luRmllbGRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcclxuICAgIGxvZ291dEZpZWxkcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcbiAgICB1c2VyTG9naW4udGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBmZXRjaChST09UICsgJ2FwcC9sb2dpbi9sb2dvdXQucGhwJyk7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wQmFyTG9nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0dXJuT2ZmTG9naW5Cb3hDb250YWluZXIpO1xyXG5leGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHVybk9mZkxvZ2luQm94Q29udGFpbmVyKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5sZXQgbWFpbkNvbnRlbnRTbGlkZSA9XHJcbmBcclxuICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudFNsaWRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50U2xpZGVUaXRsZVwiPlxyXG4gICAgICAgICAgICAjXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tzT3ZlclNjcmVlblwiPlxyXG4gICAgICAgICAgICAjXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gIFxyXG5gXHJcblxyXG5sZXQgbWFpbkNvbnRlbnRCbG9jayA9IFxyXG5gXHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudEJsb2NrTWlkZGxlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiI1wiIGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja0ltZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja1RpdGxlXCI+IzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja1ByaWNlXCI+IzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IFxyXG5gXHJcblxyXG5jb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmludGVyZmFjZSBNYWluQ29udGVudCB7XHJcbiAgICBtYWluQ29udGVudFNsaWRlOiBIVE1MRWxlbWVudDtcclxuICAgIG1haW5Db250ZW50QmxvY2s6IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBtYWluQ29udGVudDogTWFpbkNvbnRlbnQgPSB7XHJcbiAgICBtYWluQ29udGVudFNsaWRlOiBPYmplY3QuYXNzaWduKGRpdiksXHJcbiAgICBtYWluQ29udGVudEJsb2NrIDogT2JqZWN0LmFzc2lnbihkaXYpXHJcbn0gXHJcblxyXG5tYWluQ29udGVudC5tYWluQ29udGVudFNsaWRlLmlubmVySFRNTCA9IG1haW5Db250ZW50U2xpZGU7XHJcbm1haW5Db250ZW50Lm1haW5Db250ZW50QmxvY2suaW5uZXJIVE1MID0gbWFpbkNvbnRlbnRCbG9jaztcclxuXHJcbi8vIGNvbnNvbGUubG9nKG1haW5Db250ZW50Lm1haW5Db250ZW50QmxvY2suaW5uZXJIVE1MKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgUk9PVCBmcm9tICcuLi9ST09UJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbmF2QmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZCYXIgPiBkaXYnKTtcclxuICAgIGNvbnN0IG5hdkJhclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhclRpbGVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBuYXZCYXJUaWxlc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkJhclRpbGVzID4gdWwnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlTZWxlY3QnKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBuYXZCYXJzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBuYXZCYXJzLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCwgaSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYoaSAhPSAwKSBlbC5jbGFzc0xpc3QudG9nZ2xlKCduYXZCYXJMUlNob3cnKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpID09ICdyZ2IoMTg3LCA1OSwgNTkpJykgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCdyZ2IoMTkwLCA4MiwgODIpJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYigxODcsIDU5LCA1OSknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDEwKXtcclxuXHJcbiAgICAgICAgbmF2QmFyVGlsZXMuY2xhc3NMaXN0LmFkZCgncmVtb3ZlSG92ZXInKTtcclxuICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdzdGF0aWMnKTtcclxuICAgIH0gXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDQxMCl7XHJcblxyXG4gICAgICAgICAgICBuYXZCYXJzLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCwgaSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGkgIT0gMCA/IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25hdkJhckxSU2hvdycpIDogZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCBudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBuYXZCYXJUaWxlcy5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVIb3ZlcicpO1xyXG4gICAgICAgICAgICBuYXZCYXJUaWxlcy5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgbmF2QmFyVGlsZXNVbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsIG51bGwpO1xyXG4gICAgICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsIG51bGwpO1xyXG4gICAgICAgICAgICBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDEwKSBuYXZCYXJUaWxlc1VsLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdzdGF0aWMnKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIG5hdkJhclRpbGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICBcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8PSA0MTApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gbmF2QmFyVGlsZXMuc3R5bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlVWwgPSBuYXZCYXJUaWxlc1VsLnN0eWxlOyBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSA9PSAncmdiKDE4NywgNTksIDU5KScpIHN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgbnVsbCk7XHJcbiAgICAgICAgICAgIGVsc2Ugc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDE4NywgNTksIDU5KScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoMTg3LCA1OSwgNTkpJyk7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsZVVsLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PSAnYmxvY2snKSBzdHlsZVVsLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZVVsLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVVsLnNldFByb3BlcnR5KCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCByZ2IoMTM4LCA0NiwgNDYpJyk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY2F0ZWdvcnkuZGF0YXNldC5jYXRlZ29yeVxyXG5cclxuICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDsgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmV0Y2goUk9PVCArICdhcHAvcHJvZHVjdHNTZWxlY3QvY2F0ZWdvcnlGcm9tTmF2QmFyLnBocCcse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBjYXRlZ29yeU5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IFJPT1QgZnJvbSAnLi9ST09UJztcclxuY29uc29sZS5sb2coJ2R1cGEnKTtcclxuXHJcbmNvbnNvbGUubG9nKFJPT1QrJ2FwaS90ZXN0LnBocCcpO1xyXG5cclxuZmV0Y2goUk9PVCsnYXBpL3Rlc3QucGhwJylcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21hbScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXHJcbiAgICAgICAgLy8gbGV0IHlvID0gSlNPTi5wYXJzZShyZXNwKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh5byk7XHJcbiAgICB9KTtcclxuXHJcbi8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0L2FwaS90ZXN0LnBocCcpXHJcbi8vICAgICAudGhlbihyZXMgPT4gcmVzLmJsb2IocmVzKSlcclxuLy8gICAgIC50aGVuKHJlcyA9PiB7XHJcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4vLyAgICAgICAgIGxldCBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXMpXHJcbi8vICAgICAgICAgY29uc29sZS5sb2cob3V0c2lkZSlcclxuLy8gICAgIH0pXHJcblxyXG4vLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvdGVzdC5waHAnKVxyXG4vLyAgICAgLnRoZW4oKVxyXG5cclxuLy8gICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcblxyXG4vLyAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJNZW51Jyk7XHJcblxyXG4vLyAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnICwgZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICBjb25zdCBpIDogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdXBhJyk7XHJcbi8vICAgICAgICAgaS5zcmMgPSB0aGlzLnNyYztcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2EnKVxyXG4vLyAgICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSlcclxuXHJcbiAgICBcclxuXHJcblxyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKG1lbnUpO1xyXG5cclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuLy8gICAgICAgICBpbWcuc3JjID0gJ2h0dHA6Ly9sb2NhbGhvc3QvaW1nL3JvZC5wbmcnO1xyXG5cclxuLy8gICAgIH0sIDUwMDApXHJcblxyXG4vLyBjb25zb2xlLmxvZygnZHVwYScpO1xyXG4iLCJjb25zdCB0ZXh0Q29udGVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHRDb250ZW50QmxvY2snKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuXHJcbnRleHRDb250ZW50QmxvY2suZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIGlmKGkgJSAyICE9IDApIHtcclxuXHJcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RleHQtYWxpZ24nLCAncmlnaHQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
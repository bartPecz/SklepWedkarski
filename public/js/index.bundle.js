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
<div class="loginBoxCenter">
    
        <div id="loginBox" class="loginBox">
        

            <div class="exit"><img src="../img/cross.png"></div>
            <div class="Title">Zaloguj się do sklepu</div>

            <input type="text" placeholder="login" name="login" maxlength="30">
            <input id="loginPassword"type="password" placeholder="hasło" name="hasło" maxlength="30">

            <button class="loginButton">Zaloguj</button>
        <div>
</div>
`;
loginBoxContainer.innerHTML = loginbBox;
loginBoxContainer.classList.add('loginBoxContainer');
document.body.appendChild(loginBoxContainer);
const loginBox = document.getElementById('loginBox');
const password = document.getElementById('loginPassword');
const exit = document.querySelector('.loginBoxContainer .exit');
const inputs = loginBoxContainer.getElementsByTagName('input');
const loginForm = new SendForm_1.SendForm(inputs, document.querySelector('.loginBoxContainer .loginButton'));
function turnOffLoginBoxContainer() {
    loginBox.classList.toggle('scaleYShow');
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

Object.defineProperty(exports, "__esModule", { value: true });
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
    // for(const category of categories) {
    //     const categoryName = category.dataset.category
    //     category.addEventListener('click', e => {
    //         const category = e.target as HTMLElement;     
    //         fetch(ROOT + 'app/productsSelect/categoryFromNavBar.php',{
    //             method: 'POST',
    //             body: categoryName
    //         });
    //     });
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1JPT1QudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvTWFpbkNvbnRlbnRTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL1NsaWRlcnMvU2xpZGVyQ29udHJvbGVyLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9TbGlkZXJzL1NsaWRpbmdCYXJTbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2Rldi90cy9sb2dpbi9Gb3JtQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbG9naW4vU2VuZEZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vZGV2L3RzL2xvZ2luL2xvZ2luLnRzIiwid2VicGFjazovLy8uL2Rldi90cy9tYWluQ29udGVudC9tYWluQ29udGVudC50cyIsIndlYnBhY2s6Ly8vLi9kZXYvdHMvbmF2QmFyL25hdkJhckNsaWNrLnRzIiwid2VicGFjazovLy8uL2Rldi90cy90ZXN0QVBJLnRzIiwid2VicGFjazovLy8uL2Rldi90cy90ZXh0Q29udGVudC9vZGRJblRleHRDb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxrQkFBZSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5ELCtIQUFpRDtBQUNqRCx1RkFBMkI7QUFRM0IsTUFBcUIsaUJBQWtCLFNBQVEseUJBQWU7SUFTMUQsWUFBWSxRQUFxQjtRQUU3QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFMcEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFPekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxjQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLDBDQUEwQztRQUNyRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFFOUIsQ0FBQztJQUVELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFlBQVk7UUFFUixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFFakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5CLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUN4RSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUV0RixJQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtnQkFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUN6RyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQXFCLEVBQUUsT0FBb0I7UUFFL0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxRQUFRO1FBRUosTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFFbkMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUVmLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQzFCO2lCQUNJO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELE9BQU87UUFFSCxJQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFFbEcsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUksaUJBQWlCLENBQUM7WUFFdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFeEIsSUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUFFO2dCQUVwRCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMzQjtpQkFDSTtnQkFDRCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUMzQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztpQkFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFO2dCQUVaLEtBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO29CQUVyQixNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQWdCLENBQUM7b0JBQ3hGLE1BQU0sbUJBQW1CLEdBQUcsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRWxGLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDckQ7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUM7WUFBRSxPQUFPO1FBRXZDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUssUUFBUSxDQUFDLFVBQXlCOztZQUVwQyxNQUFNLE9BQU8sR0FBcUIsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUU5QyxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7Z0JBRWxELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQXNCLENBQUM7Z0JBRXBELElBQUcsR0FBRyxDQUFDLGdCQUFnQixFQUFFO29CQUVyQixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTt3QkFFbEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLE1BQU07NEJBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7b0JBRUgsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBRWYsT0FBTyxPQUFPLENBQUM7aUJBQ2xCO3FCQUNJO29CQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUM7aUJBQ3BEO1lBRUwsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQTRCLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBRUQsY0FBYztRQUVWLElBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUssSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEYsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFbEgsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBL0pELG9DQStKQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEtELE1BQXFCLGVBQWU7SUFTaEMsWUFBWSxRQUFxQjtRQU5qQyxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFPdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUUxRixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsTUFBYztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQUksYUFBYTtRQUNiLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksYUFBYSxDQUFDLFFBQWdCO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0lBR0QsWUFBWTtRQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUVqRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQXFCLEVBQUUsT0FBb0I7UUFFL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFFN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNoQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztRQUVGLEtBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUM7WUFFcEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDO1NBQ0w7SUFFTCxDQUFDO0lBRUQsY0FBYztRQUNWLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUdELE9BQU87UUFFSCxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUVmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMzRTtJQUNMLENBQUM7SUFFRCxRQUFRO1FBRUEsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBQztZQUNuQixPQUFPO1NBQ1Y7UUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUVoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDekU7SUFDVCxDQUFDO0NBRUo7QUF6R0Qsa0NBeUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0QsK0hBQWdEO0FBRWhELE1BQXFCLGdCQUFpQixTQUFRLHlCQUFlO0lBRXpELFlBQVksUUFBcUI7UUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTO1FBRUwsSUFBRyxPQUFPLE1BQU0sQ0FBQyxXQUFXLElBQUksV0FBVyxFQUFFO1lBRXpDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7Z0JBQzlDLDBIQUEwSDtnQkFDMUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsQ0FBQztTQUNaO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFFbkMsZ0VBQWdFO1lBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO1FBRUgsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztZQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7WUFFYixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztZQUNwRCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDVjs7WUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFcEIsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxLQUFLO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBL0RELG1DQStEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVELDRGQUFtQztBQUduQyxrRkFBOEI7QUFDOUIsNklBQTREO0FBQzVELDBJQUEwRDtBQUMxRCxzR0FBd0M7QUFDeEMsb0VBQXVCO0FBQ3ZCLDREQUFtQjtBQUduQixzREFBc0Q7QUFFdEQsd0RBQXdEO0FBRXhELHdEQUF3RDtBQUN4RCx5REFBeUQ7QUFFekQscUhBQXFIO0FBRXJILE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBa0MsQ0FBQztBQUl4RyxxQ0FBcUM7QUFFckMsNkZBQTZGO0FBQzdGLCtGQUErRjtBQUUvRixpRUFBaUU7QUFDakUsb0RBQW9EO0FBQ3BELElBQUk7QUFFSixLQUFJLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtJQUUzQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFnQixDQUFDO0lBQ2xGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztJQUVwRixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7SUFFakcsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDaEQ7QUFJRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQWdCLENBQUM7QUFFOUYsTUFBTSxNQUFNLEdBQUcsSUFBSSwwQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVqRCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZixNQUFhLGNBQWM7SUFLdkIsWUFBbUIsTUFBMEMsRUFBUyxZQUF5QjtRQUE1RSxXQUFNLEdBQU4sTUFBTSxDQUFvQztRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRTNGLElBQUcsSUFBSSxDQUFDLFdBQVcsS0FBSyxjQUFjO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBRS9HLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBRS9CLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUk7UUFFWixLQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUF1QixFQUFFO1lBRXZELEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBRW5DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRS9DLElBQUcsRUFBRSxJQUFJLElBQUk7WUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBdUIsRUFBRSxPQUFlLEVBQUUsU0FBaUI7UUFFMUUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRCxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsT0FBTyxRQUFRLENBQUM7UUFFcEUsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVELFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUvQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUU5QyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUVwRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQXVCLEVBQUUsU0FBaUIsRUFBRSxTQUFrQixJQUFJO1FBRTVFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFaEMsSUFBSSxLQUFLLEdBQ0w7OzthQUdDLENBQUM7UUFFTixJQUFHLE1BQU07WUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFM0MsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQXVCLEVBQUUsU0FBaUI7UUFFdkQsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVoRCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoRCxLQUFJLE1BQU0sU0FBUyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUV4QyxJQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsQ0FBQywrREFBK0Q7SUFDbkcsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQUs7UUFFbkIsSUFBSSxPQUFPLEdBQUcsdUNBQXVDLENBQUM7UUFDdEQsSUFBSSxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFFcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUF1QixFQUFFLE1BQW1CLEVBQUUsU0FBaUIsRUFBRSxPQUFlO1FBRTlGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFO1lBRTdCLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUM7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELG1CQUFtQixDQUFDLEtBQXVCLEVBQUUsU0FBaUI7UUFDMUQsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2QixJQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7UUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUF1QjtRQUVqQyxJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksVUFBVTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLElBQUksT0FBTyxHQUFHLDJCQUEyQixDQUFDO1FBQzFDLElBQUksU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUVoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVuRCxNQUFNLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQztRQUV6QyxNQUFNLG1CQUFtQixHQUFHLEdBQUcsRUFBRTtZQUU3QixJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN4QztpQkFDSTtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQztRQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBRUo7QUF6SUQsd0NBeUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUQseUdBQWdEO0FBQ2hELHVGQUEyQjtBQUUzQixNQUFhLFFBQVMsU0FBUSwrQkFBYztJQUV4QyxZQUFtQixNQUEwQyxFQUFTLFlBQXlCO1FBQzNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFEYixXQUFNLEdBQU4sTUFBTSxDQUFvQztRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBRS9GLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUk7UUFFWixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFPLFdBQVcsRUFBRSxFQUFFO1lBRTlELElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXpELElBQUcsQ0FBQyxNQUFNO2dCQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXJCLElBQUcsRUFBRSxJQUFJLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUssbUJBQW1CLENBQUMsQ0FBQzs7WUFFdkIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUV4QixJQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtnQkFBRSxPQUFPLENBQUMsQ0FBQztZQUV0QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUV2QixJQUFJO2dCQUNBLElBQUksY0FBYyxHQUFHLE1BQU0sS0FBSyxDQUFDLGNBQUksR0FBRyxxQkFBcUIsRUFBRTtvQkFDM0QsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFO3dCQUNMLGNBQWMsRUFBRSxrQkFBa0I7cUJBQ3JDO29CQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUNoQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2hELE9BQVE7NEJBQ0ksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs0QkFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSzt5QkFDOUIsQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FDTDtpQkFDSixDQUFDO2dCQUVGLElBQUcsY0FBYyxDQUFDLEVBQUUsSUFBSSxLQUFLO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztnQkFFdEYsSUFBSSxJQUFJLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXZDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUV4QixPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxHQUFHLEVBQUM7Z0JBRVAsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbkIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBRXhCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBRUwsQ0FBQztLQUFBO0NBQ0o7QUE5REQsNEJBOERDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUQsdUZBQXNDO0FBQ3RDLHVGQUEyQjtBQUUzQixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFeEQsTUFBTSxTQUFTLEdBQ2Y7Ozs7Ozs7Ozs7Ozs7OztDQWVDLENBQUM7QUFHRixpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3hDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVyRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTdDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXFCLENBQUM7QUFDOUUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9ELE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7QUFHbEcsU0FBUyx3QkFBd0I7SUFDN0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3ZFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3pFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFJdkQsTUFBTSwwQkFBMEIsR0FBRyxDQUFDO0lBRWhDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUVsQixPQUFPO1FBRUgsSUFBRyxDQUFDLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFFcEYsS0FBSSxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUU1QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFHLFNBQVMsOEJBQThCO29CQUVwRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQyxFQUFFO0FBRUosU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQVM7SUFHL0IsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXRDLElBQUcsSUFBSSxLQUFLLGFBQWEsRUFBRTtRQUV2QixJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUgsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFcEIsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUVELFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUV0QyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXBCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxNQUFNLENBQUMsS0FBVTtJQUV2RCxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRCxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RCxTQUFTLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUUzQixLQUFLLENBQUMsY0FBSSxHQUFHLHNCQUFzQixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUN6RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3pHekQsSUFBSSxnQkFBZ0IsR0FDcEI7Ozs7Ozs7OztDQVNDO0FBRUQsSUFBSSxnQkFBZ0IsR0FDcEI7Ozs7Ozs7O0NBUUM7QUFFRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBTzFDLE1BQU0sV0FBVyxHQUFnQjtJQUM3QixnQkFBZ0IsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxnQkFBZ0IsRUFBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUN4QztBQUVELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7QUFDMUQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztBQUUxRCx1REFBdUQ7Ozs7Ozs7Ozs7Ozs7OztBQ3JDdkQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUUvQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDM0QsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQWdCLENBQUM7SUFDMUUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBZ0IsQ0FBQztJQUNqRixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQTRCLENBQUM7SUFFM0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFFdEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUVuQyxJQUFHLENBQUMsSUFBSSxDQUFDO2dCQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUMxQztnQkFFRCxJQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0I7b0JBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUMsa0JBQWtCLENBQUMsQ0FBQzs7b0JBQy9ILEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDckU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBQztRQUV4QixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDekQ7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUNuQyxJQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFDO1lBRXZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBRW5DLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsQ0FBQztZQUVILFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhELGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0Q7YUFDSSxJQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRztZQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU1RixDQUFDLENBQUMsQ0FBQztJQUVILFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFFbEMsSUFBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtZQUV6QixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2hDLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFHcEMsSUFBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0I7Z0JBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Z0JBQzVHLEtBQUssQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUUvRCxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFNUQsSUFBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTztnQkFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7aUJBQ3BGO2dCQUVELE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3RFO1NBQ0o7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILHNDQUFzQztJQUV0QyxxREFBcUQ7SUFFckQsZ0RBQWdEO0lBRWhELHlEQUF5RDtJQUV6RCxxRUFBcUU7SUFDckUsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsVUFBVTtJQUNWLElBQUk7QUFDUixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZILHNGQUEwQjtBQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBSSxHQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRWpDLEtBQUssQ0FBQyxjQUFJLEdBQUMsY0FBYyxDQUFDO0tBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFUCx5Q0FBeUM7QUFDekMsa0NBQWtDO0FBQ2xDLHFCQUFxQjtBQUNyQiw4QkFBOEI7QUFDOUIsaURBQWlEO0FBQ2pELCtCQUErQjtBQUMvQixTQUFTO0FBRVQseUNBQXlDO0FBQ3pDLGNBQWM7QUFFZCw4QkFBOEI7QUFFOUIsMERBQTBEO0FBRTFELGdEQUFnRDtBQUNoRCx3RUFBd0U7QUFDeEUsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3Qiw0QkFBNEI7QUFDNUIsaURBQWlEO0FBQ2pELG9DQUFvQztBQUNwQyxjQUFjO0FBQ2QsU0FBUztBQU1ULHlCQUF5QjtBQUV6Qix5QkFBeUI7QUFFekIsb0RBQW9EO0FBRXBELGVBQWU7QUFFZix1QkFBdUI7Ozs7Ozs7Ozs7OztBQ25EdkIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUVYLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMvQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGV2L3RzL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgJ2h0dHA6Ly9sb2NhbGhvc3QvV2VkZWN6a2kvcHVibGljLyc7XHJcblxyXG4iLCJpbXBvcnQgU2xpZGVyQ29udHJvbGVyICBmcm9tICcuL1NsaWRlckNvbnRyb2xlcic7XHJcbmltcG9ydCBST09UIGZyb20gJy4uL1JPT1QnO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RzTGlzdCB7XHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgcGF0aD86IHN0cmluZyxcclxuICAgIHByaWNlPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250ZW50U2xpZGVyIGV4dGVuZHMgU2xpZGVyQ29udHJvbGVyIHtcclxuXHJcbiAgICBwcm9kdWN0c0xpc3Q6IEFycmF5PFByb2R1Y3RzTGlzdD47XHJcbiAgICBwYXRoc1RvSW1hZ2VzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgbnVtYmVyT2ZMYXN0UHJvZHVjdDogbnVtYmVyO1xyXG4gICAgc3RvcERvd25sb2FkOiBib29sZWFuO1xyXG4gICAgZG93bmxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGltZ0ZyYW1lOiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICBzdXBlcihpbWdGcmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdHNMaXN0ID0gSlNPTi5wYXJzZSh0aGlzLmltZ0ZyYW1lLmRhdGFzZXQucHJvZHVjdHNMaXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRoc1RvSW1hZ2VzID0gdGhpcy5wcm9kdWN0c0xpc3QubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFJPT1QgKyBlbC5wYXRoOyAvLyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm51bWJlck9mTGFzdFByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzTGlzdC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3BEb3dubG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWxsQmxvY2tzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1nRnJhbWUuY2hpbGRyZW4ubGVuZ3RoOyBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY291bnRPZk5leHRCbG9ja3MoKTogbnVtYmVyIHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFsbEJsb2NrcyAtICh0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgKyB0aGlzLmhvd01hbnlQYXNzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbkVuZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmltZ0ZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLnJvdW5kKHRoaXMucG9zaXRpb24pID09IDApIHRoaXMuYmFja3dhcmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuYmFja3dhcmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0VmlzaWJsZU51bWJlciA9IHBhcnNlRmxvYXQoKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykudG9GaXhlZCgpKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cyA9PSB0aGlzLnByb2R1Y3RzTGlzdC5sZW5ndGgpIHRoaXMuZm9yd2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5mb3J3YXJkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gICBcclxuXHJcbiAgICBvbkNsaWNrKGJhY2t3YXJkOiBIVE1MRWxlbWVudCwgZm9yd2FyZDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIHN1cGVyLm9uQ2xpY2soYmFja3dhcmQsIGZvcndhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgb25SZXNpemUoKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnBhc3MgPD0gNSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAtMSAqIHRoaXMucGFzcyAqIHRoaXMuYmxvY2tXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAtMSAqICh0aGlzLmxhc3RWaXNpYmxlTnVtYmVyIC0gdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzKSAqIHRoaXMuYmxvY2tXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3J3YXJkKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmNvdW50T2ZOZXh0QmxvY2tzIDwgMiAqIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cyAmJiAhdGhpcy5zdG9wRG93bmxvYWQgICYmICF0aGlzLmRvd25sb2FkaW5nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhcnROdW1iZXJEb3dubG9hZCA9IHRoaXMuYWxsQmxvY2tzO1xyXG4gICAgICAgICAgICBsZXQgZW5kTnVtYmVyRG93bmxvYWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWxsQmxvY2tzICsgMTAgPiB0aGlzLm51bWJlck9mTGFzdFByb2R1Y3QgKyAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICBlbmROdW1iZXJEb3dubG9hZCA9IHRoaXMubnVtYmVyT2ZMYXN0UHJvZHVjdCArIDE7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcERvd25sb2FkID0gdHJ1ZTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZW5kTnVtYmVyRG93bmxvYWQgPSB0aGlzLmFsbEJsb2NrcyArIDEwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZldGNoSW1nKHRoaXMucGF0aHNUb0ltYWdlcy5zbGljZShzdGFydE51bWJlckRvd25sb2FkLCBlbmROdW1iZXJEb3dubG9hZCkpXHJcbiAgICAgICAgICAgIC50aGVuKGltYWdlcyAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0ZyYW1lQ2hpbGRTdHJ1Y3R1cmUgPSB0aGlzLmltZ0ZyYW1lLmNoaWxkcmVuWzBdLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdJbkNoaWxkU3RydWN0dXJlID0gaW1nRnJhbWVDaGlsZFN0cnVjdHVyZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nSW5DaGlsZFN0cnVjdHVyZS5yZXBsYWNlV2l0aChpbWcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5hcHBlbmRDaGlsZChpbWdGcmFtZUNoaWxkU3RydWN0dXJlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmNvdW50T2ZOZXh0QmxvY2tzID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgc3VwZXIuZm9yd2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoSW1nKGltYWdlc1BhdGg6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPEFycmF5PEhUTUxJbWFnZUVsZW1lbnQ+PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZ1R5cGU6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbWFnZXNwcm9taXNlID0gaW1hZ2VzUGF0aC5tYXAoKHBhdGg6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1nID0gaW1nVHlwZS5jbG9uZU5vZGUoKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgaWYoaW1nLmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIGxvYWRlZCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd6YcWCYWRvd2FuZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IHBhdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05pZSBtYSBtZXRvZHkgYWRkRXZlbnRMaXN0ZW5lcicpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChpbWFnZXNwcm9taXNlKSBhcyBBcnJheTxIVE1MSW1hZ2VFbGVtZW50PjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGVwc051bWJlcigpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBpZigwID4gdGhpcy5wb3NpdGlvbiAmJiAgdGhpcy5wb3NpdGlvbiA+IC10aGlzLmltZ0ZyYW1lV2lkdGgpIHJldHVybiB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY291bnRPZk5leHRCbG9ja3MgPCB0aGlzLmNvdW50T2ZWaXNpYmxlUGFydHMgJiYgdGhpcy5jb3VudE9mTmV4dEJsb2NrcyA+IDApIHJldHVybiB0aGlzLmNvdW50T2ZOZXh0QmxvY2tzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzO1xyXG4gICAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckNvbnRyb2xlciB7XHJcblxyXG4gICAgcmVhZG9ubHkgaW1nRnJhbWU6IEhUTUxFbGVtZW50O1xyXG4gICAgcGFzczogbnVtYmVyID0gMDtcclxuICAgIGlzQW5pbWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGFzdFZpc2libGVOdW1iZXI6IG51bWJlcjtcclxuICAgIGJhY2t3YXJkQnV0dG9uOiBIVE1MRWxlbWVudDtcclxuICAgIGZvcndhcmRCdXR0b246IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGltZ0ZyYW1lOiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICB0aGlzLmltZ0ZyYW1lID0gaW1nRnJhbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VmlzaWJsZU51bWJlciA9IHBhcnNlRmxvYXQoKHRoaXMucGFzcyArIHRoaXMuY291bnRPZlZpc2libGVQYXJ0cykudG9GaXhlZCgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW1nRnJhbWUpLmxlZnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBwb3NpdGlvbihuZXdWYXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUubGVmdCA9IG5ld1ZhciArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJsb2NrV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbWdGcmFtZS5jaGlsZHJlblswXSkud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWdGcmFtZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuaW1nRnJhbWUpLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW1nRnJhbWVXaWR0aChuZXdXaWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS53aWR0aCA9IG5ld1dpZHRoICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY291bnRPZlZpc2libGVQYXJ0cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ0ZyYW1lV2lkdGgvdGhpcy5ibG9ja1dpZHRoO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhbmltYXRpb25FbmQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbWdGcmFtZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ob3dNYW55UGFzcygpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RWaXNpYmxlTnVtYmVyID0gcGFyc2VGbG9hdCgodGhpcy5wYXNzICsgdGhpcy5jb3VudE9mVmlzaWJsZVBhcnRzKS50b0ZpeGVkKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBob3dNYW55UGFzcygpOiBudW1iZXIgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzID0gKHRoaXMucG9zaXRpb24gPT09IDApID8gMCA6IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5wb3NpdGlvbiAvIHRoaXMuYmxvY2tXaWR0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soYmFja3dhcmQ6IEhUTUxFbGVtZW50LCBmb3J3YXJkOiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgICAgICB0aGlzLmJhY2t3YXJkQnV0dG9uID0gYmFja3dhcmQ7XHJcbiAgICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gZm9yd2FyZDtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrd2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoW1xyXG4gICAgICAgICAgICBbYmFja3dhcmQsIHRoaXMuYmFja3dhcmRdLFxyXG4gICAgICAgICAgICBbZm9yd2FyZCwgdGhpcy5mb3J3YXJkXVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIGZvcihjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwLmVudHJpZXMoKSl7XHJcblxyXG4gICAgICAgICAgICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcHNOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZm9yd2FyZCgpIHtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNBbmltYXRlKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gLSB0aGlzLnNldFN0ZXBzTnVtYmVyKCkgKiB0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhY2t3YXJkKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5wb3NpdGlvbiA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5pc0FuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiArIHRoaXMuc2V0U3RlcHNOdW1iZXIoKSp0aGlzLmJsb2NrV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgU2xpZGVyQ29udHJvbGVyIGZyb20gJy4vU2xpZGVyQ29udHJvbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRpbmdCYXJTbGlkZXIgZXh0ZW5kcyBTbGlkZXJDb250cm9sZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGltZ0ZyYW1lOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKGltZ0ZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbnJlc2l6ZTIoKSB7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbWdGcmFtZVdpZHRoID0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAvIDYwKSAqIDYwOyAhISEhISEhISEhISEhISEhISEhISEhISEhIHdhxbxuZSBuaWUgZHppYcWCYSBuaWUgd2llbSBjemVtdVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvd01hbnlQYXNzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5pbWdGcmFtZVdpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIDYwKSAqIDYwO1xyXG4gICAgICAgICAgICB0aGlzLmltZ0ZyYW1lLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaG93TWFueVBhc3MoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb29wKCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGFzcyA+PSA2KSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5pbWdGcmFtZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3MgPSAwXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1nRnJhbWUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdGhpcy5mb3J3YXJkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXRMb29wLmJpbmQodGhpcyksIDgwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25yZXNpemUyKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQoKTtcclxuICAgICAgICB0aGlzLnNldExvb3AoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9tYWluQ29udGVudC9tYWluQ29udGVudCc7XHJcblxyXG5pbXBvcnQgUk9PVCBmcm9tICcuL1JPT1QnO1xyXG5pbXBvcnQgJy4vbmF2QmFyL25hdkJhckNsaWNrJztcclxuaW1wb3J0IE1haW5Db250ZW50U2xpZGVyIGZyb20gXCIuL1NsaWRlcnMvTWFpbkNvbnRlbnRTbGlkZXJcIjtcclxuaW1wb3J0IFNsaWRpbmdCYXJTbGlkZXIgZnJvbSAnLi9TbGlkZXJzL1NsaWRpbmdCYXJTbGlkZXInO1xyXG5pbXBvcnQgJy4vdGV4dENvbnRlbnQvb2RkSW5UZXh0Q29udGVudCc7XHJcbmltcG9ydCAnLi9sb2dpbi9sb2dpbic7XHJcbmltcG9ydCAnLi90ZXN0QVBJJztcclxuXHJcblxyXG4vLyBjb25zdCBmb3J3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcndhcmQnKTtcclxuXHJcbi8vIGNvbnN0IGJhY2t3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2t3YXJkJyk7XHJcblxyXG4vLyBmb3J3YXJkLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JlZCcpO1xyXG4vLyBiYWNrd2FyZC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZWQnKTtcclxuXHJcbi8vIGNvbnN0IGltZ0ZyYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Db250ZW50QmxvY2tzT3ZlclNjcmVlbicpIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xyXG5cclxuY29uc3Qgd3JhcHBlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluQ29udGVudFdyYXBwZXInKSBhcyBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuXHJcblxyXG5cclxuLy8gZm9yKGNvbnN0IGltZ0ZyYW1lIG9mIGltZ0ZyYW1lcykge1xyXG5cclxuLy8gICAgIGNvbnN0IGZvcndhcmQgPSBpbWdGcmFtZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25Gb3J3YXJkJykgYXMgSFRNTEVsZW1lbnQ7XHJcbi8vICAgICBjb25zdCBiYWNrd2FyZCA9IGltZ0ZyYW1lLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbkJhY2t3YXJkJykgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4vLyAgICAgY29uc3QgbWFpbkNvbnRlbnRTbGlkZXIgPSBuZXcgTWFpbkNvbnRlbnRTbGlkZXIoaW1nRnJhbWUpO1xyXG4vLyAgICAgbWFpbkNvbnRlbnRTbGlkZXIub25DbGljayhiYWNrd2FyZCwgZm9yd2FyZCk7XHJcbi8vIH1cclxuXHJcbmZvcihjb25zdCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcblxyXG4gICAgY29uc3QgZm9yd2FyZCA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnV0dG9uRm9yd2FyZCcpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYmFja3dhcmQgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbkJhY2t3YXJkJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgaW1nRnJhbWUgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW5Db250ZW50QmxvY2tzT3ZlclNjcmVlbicpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IG1haW5Db250ZW50U2xpZGVyID0gbmV3IE1haW5Db250ZW50U2xpZGVyKGltZ0ZyYW1lKTtcclxuICAgIG1haW5Db250ZW50U2xpZGVyLm9uQ2xpY2soYmFja3dhcmQsIGZvcndhcmQpO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHNsaWRlckZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGluZ0Jhck92ZXJTY3JlZW4nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbmNvbnN0IHNsaWRlciA9IG5ldyBTbGlkaW5nQmFyU2xpZGVyKHNsaWRlckZyYW1lKTtcclxuXHJcbnNsaWRlci5zdGFydCgpO1xyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIGJ1dHRvbjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY29uZGl0aW9uRXhlY3V0aW9uOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dHM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTElucHV0RWxlbWVudD4sIHB1YmxpYyBzdWJtaXRCdXR0b246IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jb25zdHJ1Y3RvciA9PT0gRm9ybUNvbnRyb2xsZXIpIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgdXNlIGFic3RyYWN0IGNsYXNzIHRvIGNyZWF0ZSBvYmplY3QgaW5zdGFuY2VzYCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gaW5wdXRzO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gc3VibWl0QnV0dG9uO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsYXVuY2goZm4gPSBudWxsKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGNvbnN0IGlucHV0IG9mIFsuLi50aGlzLmlucHV0c10gYXMgW0hUTUxJbnB1dEVsZW1lbnRdKSB7XHJcblxyXG4gICAgICAgICAgICBpbnB1dFsnY29uZGl0aW9ucyddID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25kaXRpb242TGV0dGVycyhpbnB1dCk7IFxyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZGVuU2lnbnMoaW5wdXQpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvblsnY29uZGl0aW9ucyddID0gbmV3IE9iamVjdCgpO1xyXG5cclxuICAgICAgICBpZihmbiAhPSBudWxsKSBmbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlSGVscFdpbmRvdyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgbWVzc2FnZTogc3RyaW5nLCBjb25kaXRpb246IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICAgICAgY29uc3QgaGVscFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBoZWxwV2luZG93LmlubmVySFRNTCA9IGA8ZGl2Pi0gJHtpbnB1dC5uYW1lICsgJyAnICsgbWVzc2FnZX08L2Rpdj5gO1xyXG5cclxuICAgICAgICBoZWxwV2luZG93LnN0eWxlLnNldFByb3BlcnR5KCdmb250LXNpemUnLCAnMTRweCcpO1xyXG4gICAgICAgIGhlbHBXaW5kb3cuc3R5bGUuc2V0UHJvcGVydHkoJ2NvbG9yJywgJ3JnYigyMjYsIDEyNiwgMTI2KScpO1xyXG4gICAgICAgIGhlbHBXaW5kb3cuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgJzIwMHB4Jyk7XHJcblxyXG4gICAgICAgIGlucHV0Wydjb25kaXRpb25zJ11bY29uZGl0aW9uXSA9IG5ldyBPYmplY3QoKTtcclxuXHJcbiAgICAgICAgaW5wdXRbJ2NvbmRpdGlvbnMnXVtjb25kaXRpb25dLmNvbnRlbnQgPSBoZWxwV2luZG93O1xyXG5cclxuICAgICAgICByZXR1cm4gaGVscFdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICBhZGRIZWxwV2luZG93KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjb25kaXRpb246IHN0cmluZywgcmVkYm94OiBib29sZWFuID0gdHJ1ZSkge1xyXG5cclxuICAgICAgICBpbnB1dC5hZnRlcihpbnB1dFsnY29uZGl0aW9ucyddW2NvbmRpdGlvbl0uY29udGVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXRbJ2NvbmRpdGlvbnMnXVtjb25kaXRpb25dLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbkV4ZWN1dGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGUgPSBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyNiwgMTI2LCAxMjYpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTI2LCAxMjYpO1xyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICBpZihyZWRib3gpIGlucHV0LnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGVscFdpbmRvdyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY29uZGl0aW9uOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaW5wdXRbJ2NvbmRpdGlvbnMnXVtjb25kaXRpb25dLmNvbnRlbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGlucHV0Wydjb25kaXRpb25zJ11bY29uZGl0aW9uXS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IoY29uc3QgY29uZGl0aW9uIGluIGlucHV0Wydjb25kaXRpb25zJ10pIHtcclxuXHJcbiAgICAgICAgICAgIGlmKGlucHV0Wydjb25kaXRpb25zJ11bY29uZGl0aW9uXS5pc0FjdGl2ZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5zdHlsZS5jc3NUZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbkV4ZWN1dGlvbiA9IHRydWU7IC8vIER6aWHFgmEgdHlsa28gd3RlZHkgZ2R5IHdhcnVua2kgc8SFIHNwcmF3ZHphbmUgcHJ6ZWQgd3lzxYJhbmllbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmRpdGlvbjZMZXR0ZXJzKGlucHV0KSB7XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJ211c2kgc2vFgmFkYcSHIHNpxJkgeiBjb25ham1uaWVqIDYgbGl0ZXInO1xyXG4gICAgICAgIGxldCBjb25kaXRpb24gPSAnY29uZGl0aW9uNkxldHRlcnMnO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dBYm92ZTZMZXR0ZXJzKGlucHV0LCB0aGlzLmJ1dHRvbiwgY29uZGl0aW9uLCBtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVVuZGVyNkxldHRlcnMoaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Fib3ZlNkxldHRlcnMoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGJ1dHRvbjogSFRNTEVsZW1lbnQsIGNvbmRpdGlvbjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUhlbHBXaW5kb3coaW5wdXQsIG1lc3NhZ2UsIGNvbmRpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFdoZW5MZXR0ZXJBYm92ZTYgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEhlbHBXaW5kb3coaW5wdXQsIGNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkV2hlbkxldHRlckFib3ZlNik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVW5kZXI2TGV0dGVycyhpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY29uZGl0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZW1vdmVXaGVuTGV0dGVyVW5kZXI2ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb25kaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYoaW5wdXQudmFsdWUubGVuZ3RoID49IDYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSGVscFdpbmRvdyhpbnB1dCwgY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCByZW1vdmVXaGVuTGV0dGVyVW5kZXI2KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JiaWRlblNpZ25zKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcblxyXG4gICAgICAgIGlmKGlucHV0LnR5cGUgPT0gJ3Bhc3N3b3JkJykgcmV0dXJuIDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAncG9zaWFkYSBuaWVkb3p3b2xvbnkgem5hayc7XHJcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9ICdmb3JiaWRlblNpZ25zJztcclxuXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUhlbHBXaW5kb3coaW5wdXQsIG1lc3NhZ2UsIGNvbmRpdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZyA9IC9bIUAjXFwkJVxcXiZcXCpcXChcXClcXFxcXFw/PD5cXHNdL2k7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFdoZW5Gb3JiaWRlblNpZ24gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZihyZWcudGVzdChpbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkSGVscFdpbmRvdyhpbnB1dCwgY29uZGl0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSGVscFdpbmRvdyhpbnB1dCxjb25kaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGFkZFdoZW5Gb3JiaWRlblNpZ24pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Rm9ybUNvbnRyb2xsZXJ9IGZyb20gJy4vRm9ybUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUk9PVCBmcm9tICcuLi9ST09UJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5kRm9ybSBleHRlbmRzIEZvcm1Db250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXRzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxJbnB1dEVsZW1lbnQ+LCBwdWJsaWMgc3VibWl0QnV0dG9uOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKGlucHV0cywgc3VibWl0QnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXVuY2goZm4gPSBudWxsKSB7XHJcblxyXG4gICAgICAgIHN1cGVyLmxhdW5jaCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChidXR0b25FdmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VuZERhdGFCdXR0b25DbGljayhidXR0b25FdmVudCk7XHJcblxyXG4gICAgICAgICAgICBpZighcmVzdWx0KSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgICAgIGlmKGZuICE9IG51bGwpIGZuLmNhbGwodGhpcywgcmVzdWx0KTtcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VuZERhdGFCdXR0b25DbGljayhlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZighdGhpcy5jb25kaXRpb25FeGVjdXRpb24pIHJldHVybiAwO1xyXG5cclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VTdHJlYW0gPSBhd2FpdCBmZXRjaChST09UICsgJ2FwcC9sb2dpbi9sb2dpbi5waHAnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBcnJheSh0aGlzLmlucHV0cy5sZW5ndGgpLmZpbGwoMCkubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5pbnB1dHNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuaW5wdXRzW2ldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihyZXNwb25zZVN0cmVhbS5vayA9PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKCdDb25uZWNpb24gZXJyb3IgLSBjaGVjayB5b3VyIGFkZHJlcycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZVN0cmVhbS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQgeyBTZW5kRm9ybSB9IGZyb20gJy4vU2VuZEZvcm0nO1xyXG5pbXBvcnQgUk9PVCBmcm9tICcuLi9ST09UJztcclxuXHJcbmNvbnN0IGxvZ2luQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5jb25zdCBsb2dpbmJCb3ggPSBcclxuYCAgICAgICBcclxuPGRpdiBjbGFzcz1cImxvZ2luQm94Q2VudGVyXCI+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGlkPVwibG9naW5Cb3hcIiBjbGFzcz1cImxvZ2luQm94XCI+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhpdFwiPjxpbWcgc3JjPVwiLi4vaW1nL2Nyb3NzLnBuZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVcIj5aYWxvZ3VqIHNpxJkgZG8gc2tsZXB1PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxvZ2luXCIgbmFtZT1cImxvZ2luXCIgbWF4bGVuZ3RoPVwiMzBcIj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibG9naW5QYXNzd29yZFwidHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJoYXPFgm9cIiBuYW1lPVwiaGFzxYJvXCIgbWF4bGVuZ3RoPVwiMzBcIj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsb2dpbkJ1dHRvblwiPlphbG9ndWo8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuXHJcblxyXG5sb2dpbkJveENvbnRhaW5lci5pbm5lckhUTUwgPSBsb2dpbmJCb3g7XHJcbmxvZ2luQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ2luQm94Q29udGFpbmVyJyk7IFxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2dpbkJveENvbnRhaW5lcik7XHJcblxyXG5jb25zdCBsb2dpbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkJveCcpO1xyXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpblBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZXhpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbkJveENvbnRhaW5lciAuZXhpdCcpO1xyXG5jb25zdCBpbnB1dHMgPSBsb2dpbkJveENvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuXHJcbmNvbnN0IGxvZ2luRm9ybSA9IG5ldyBTZW5kRm9ybShpbnB1dHMsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbkJveENvbnRhaW5lciAubG9naW5CdXR0b24nKSk7XHJcblxyXG5cclxuZnVuY3Rpb24gdHVybk9mZkxvZ2luQm94Q29udGFpbmVyKCl7XHJcbiAgICBsb2dpbkJveC5jbGFzc0xpc3QudG9nZ2xlKCdzY2FsZVlTaG93Jyk7XHJcbiAgICBwYXNzd29yZC52YWx1ZSA9ICcnO1xyXG4gICAgY29uc29sZS5kaXIocGFzc3dvcmQpO1xyXG4gICAgbG9naW5Gb3JtLnJlbW92ZUhlbHBXaW5kb3cocGFzc3dvcmQsICdjb25kaXRpb242TGV0dGVycycpO1xyXG59XHJcblxyXG5jb25zdCBsb2dpbkZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWxvZz1cImxvZ2luXCJdJyk7XHJcbmNvbnN0IGxvZ291dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWxvZz1cImxvZ291dFwiXScpO1xyXG5jb25zdCB1c2VyTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckxvZ2luJyk7IFxyXG5cclxuXHJcblxyXG5jb25zdCBvbmx5T25jZUdlbmVyYXRlSGVscFdpbmRvdyA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICBsZXQgZmlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWZpcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVIZWxwV2luZG93KHRoaXMuc3VibWl0QnV0dG9uLCAnWsWCeSBsb2dpbiBsdWIgaGFzxYJvJywgJ3VubWF0Y2hlZCBkYXRhJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IoY29uc3QgaW5wdXQgb2YgdGhpcy5pbnB1dHMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcgLCBmdW5jdGlvbiByZW1vdmVzVW5tYXRjaGVkRGF0YUhlbHBXaW5kb3coKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSGVscFdpbmRvdyh0aGlzLnN1Ym1pdEJ1dHRvbiwgJ3VubWF0Y2hlZCBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5sb2dpbkZvcm0ubGF1bmNoKGZ1bmN0aW9uKHVzZXI6IGFueSkge1xyXG5cclxuXHJcbiAgICBvbmx5T25jZUdlbmVyYXRlSGVscFdpbmRvdy5jYWxsKHRoaXMpO1xyXG4gICAgXHJcbiAgICBpZih1c2VyID09PSAnQnJhayB3eW5pa3UnKSB7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLnN1Ym1pdEJ1dHRvblsnY29uZGl0aW9ucyddWyd1bm1hdGNoZWQgZGF0YSddLmlzQWN0aXZlKSB0aGlzLmFkZEhlbHBXaW5kb3codGhpcy5zdWJtaXRCdXR0b24sJ3VubWF0Y2hlZCBkYXRhJywgZmFsc2UpO1xyXG4gICAgICAgIHBhc3N3b3JkLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJMb2dpbi50ZXh0Q29udGVudCA9IHVzZXJbMF0ubG9naW47XHJcblxyXG4gICAgbG9naW5GaWVsZHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG4gICAgbG9nb3V0RmllbGRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcclxuICAgIGxvZ2luQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIFsuLi5pbnB1dHNdLmZvckVhY2goZWwgPT4gZWwudmFsdWUgPSAnJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ291dCcpO1xyXG5jb25zb2xlLmxvZyhsb2dvdXQpO1xyXG5cclxubG9nb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbG9nb3V0KGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICBsb2dpbkZpZWxkcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XHJcbiAgICBsb2dvdXRGaWVsZHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG4gICAgdXNlckxvZ2luLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgZmV0Y2goUk9PVCArICdhcHAvbG9naW4vbG9nb3V0LnBocCcpO1xyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcEJhckxvZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHVybk9mZkxvZ2luQm94Q29udGFpbmVyKTtcclxuZXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHR1cm5PZmZMb2dpbkJveENvbnRhaW5lcik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxubGV0IG1haW5Db250ZW50U2xpZGUgPVxyXG5gXHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRTbGlkZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudFNsaWRlVGl0bGVcIj5cclxuICAgICAgICAgICAgI1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluQ29udGVudEJsb2Nrc092ZXJTY3JlZW5cIj5cclxuICAgICAgICAgICAgI1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+ICBcclxuYFxyXG5cclxubGV0IG1haW5Db250ZW50QmxvY2sgPSBcclxuYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbkNvbnRlbnRCbG9ja01pZGRsZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiNcIiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tJbWdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tUaXRsZVwiPiM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5Db250ZW50QmxvY2tQcmljZVwiPiM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiBcclxuYFxyXG5cclxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5pbnRlcmZhY2UgTWFpbkNvbnRlbnQge1xyXG4gICAgbWFpbkNvbnRlbnRTbGlkZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBtYWluQ29udGVudEJsb2NrOiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgbWFpbkNvbnRlbnQ6IE1haW5Db250ZW50ID0ge1xyXG4gICAgbWFpbkNvbnRlbnRTbGlkZTogT2JqZWN0LmFzc2lnbihkaXYpLFxyXG4gICAgbWFpbkNvbnRlbnRCbG9jayA6IE9iamVjdC5hc3NpZ24oZGl2KVxyXG59IFxyXG5cclxubWFpbkNvbnRlbnQubWFpbkNvbnRlbnRTbGlkZS5pbm5lckhUTUwgPSBtYWluQ29udGVudFNsaWRlO1xyXG5tYWluQ29udGVudC5tYWluQ29udGVudEJsb2NrLmlubmVySFRNTCA9IG1haW5Db250ZW50QmxvY2s7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudC5tYWluQ29udGVudEJsb2NrLmlubmVySFRNTCk7XHJcblxyXG5cclxuIiwiaW1wb3J0IFJPT1QgZnJvbSAnLi4vUk9PVCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5hdkJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2QmFyID4gZGl2Jyk7XHJcbiAgICBjb25zdCBuYXZCYXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJUaWxlcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgbmF2QmFyVGlsZXNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZCYXJUaWxlcyA+IHVsJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5U2VsZWN0JykgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgbmF2QmFyc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbmF2QmFycy5mb3JFYWNoKChlbDogSFRNTEVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKGkgIT0gMCkgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2QmFyTFJTaG93Jyk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSA9PSAncmdiKDE4NywgNTksIDU5KScpIGVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywncmdiKDE5MCwgODIsIDgyKScpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoMTg3LCA1OSwgNTkpJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQxMCl7XHJcblxyXG4gICAgICAgIG5hdkJhclRpbGVzLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUhvdmVyJyk7XHJcbiAgICAgICAgbmF2QmFyVGlsZXNVbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnc3RhdGljJyk7XHJcbiAgICB9IFxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA0MTApe1xyXG5cclxuICAgICAgICAgICAgbmF2QmFycy5mb3JFYWNoKChlbDogSFRNTEVsZW1lbnQsIGkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpICE9IDAgPyBlbC5jbGFzc0xpc3QucmVtb3ZlKCduYXZCYXJMUlNob3cnKSA6IGVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbmF2QmFyVGlsZXMuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlSG92ZXInKTtcclxuICAgICAgICAgICAgbmF2QmFyVGlsZXMuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIG5hdkJhclRpbGVzVWwuc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCBudWxsKTtcclxuICAgICAgICAgICAgbmF2QmFyVGlsZXNVbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCBudWxsKTtcclxuICAgICAgICAgICAgbmF2QmFyVGlsZXNVbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQxMCkgbmF2QmFyVGlsZXNVbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnc3RhdGljJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXZCYXJUaWxlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPD0gNDEwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IG5hdkJhclRpbGVzLnN0eWxlO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZVVsID0gbmF2QmFyVGlsZXNVbC5zdHlsZTsgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZihzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykgPT0gJ3JnYigxODcsIDU5LCA1OSknKSBzdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIG51bGwpO1xyXG4gICAgICAgICAgICBlbHNlIHN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYigxODcsIDU5LCA1OSknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0eWxlVWwuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDE4NywgNTksIDU5KScpO1xyXG5cclxuICAgICAgICAgICAgaWYoc3R5bGVVbC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT0gJ2Jsb2NrJykgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJylcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVVbC5zZXRQcm9wZXJ0eSgnYm9yZGVyLWJvdHRvbScsICcxcHggc29saWQgcmdiKDEzOCwgNDYsIDQ2KScpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZvcihjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNhdGVnb3J5LmRhdGFzZXQuY2F0ZWdvcnlcclxuXHJcbiAgICAvLyAgICAgY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7ICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGZldGNoKFJPT1QgKyAnYXBwL3Byb2R1Y3RzU2VsZWN0L2NhdGVnb3J5RnJvbU5hdkJhci5waHAnLHtcclxuICAgIC8vICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gICAgICAgICAgICAgYm9keTogY2F0ZWdvcnlOYW1lXHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG59KTtcclxuXHJcbiIsImltcG9ydCBST09UIGZyb20gJy4vUk9PVCc7XHJcbmNvbnNvbGUubG9nKCdkdXBhJyk7XHJcblxyXG5jb25zb2xlLmxvZyhST09UKydhcGkvdGVzdC5waHAnKTtcclxuXHJcbmZldGNoKFJPT1QrJ2FwaS90ZXN0LnBocCcpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYW0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKVxyXG4gICAgICAgIC8vIGxldCB5byA9IEpTT04ucGFyc2UocmVzcCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coeW8pO1xyXG4gICAgfSk7XHJcblxyXG4vLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9hcGkvdGVzdC5waHAnKVxyXG4vLyAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKHJlcykpXHJcbi8vICAgICAudGhlbihyZXMgPT4ge1xyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuLy8gICAgICAgICBsZXQgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwocmVzKVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG91dHNpZGUpXHJcbi8vICAgICB9KVxyXG5cclxuLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvYXBpL3Rlc3QucGhwJylcclxuLy8gICAgIC50aGVuKClcclxuXHJcbi8vICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG5cclxuLy8gICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QmFyTWVudScpO1xyXG5cclxuLy8gICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJyAsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgY29uc3QgaSA6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVwYScpO1xyXG4vLyAgICAgICAgIGkuc3JjID0gdGhpcy5zcmM7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NhJylcclxuLy8gICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0pXHJcblxyXG4gICAgXHJcblxyXG5cclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyhtZW51KTtcclxuXHJcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbi8vICAgICAgICAgaW1nLnNyYyA9ICdodHRwOi8vbG9jYWxob3N0L2ltZy9yb2QucG5nJztcclxuXHJcbi8vICAgICB9LCA1MDAwKVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2R1cGEnKTtcclxuIiwiY29uc3QgdGV4dENvbnRlbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZXh0Q29udGVudEJsb2NrJyk7XHJcblxyXG50ZXh0Q29udGVudEJsb2NrLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCwgaSkgPT4ge1xyXG4gICAgaWYoaSAlIDIgIT0gMCkge1xyXG5cclxuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndGV4dC1hbGlnbicsICdyaWdodCcpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
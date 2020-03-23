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

/***/ "./dev/ts/SliderControler.ts":
/*!***********************************!*\
  !*** ./dev/ts/SliderControler.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SliderControler {
    constructor(imgFrame) {
        this.pass = 0;
        this.imgFrame = imgFrame;
        this.onResize();
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
    onResize() {
        window.addEventListener('resize', () => {
            console.log(this.pass);
            this.position = -1 * this.pass * this.blockWidth;
        });
    }
    howManyPass() {
        this.pass = (this.position === 0) ? 0 : Math.abs(this.position / this.blockWidth);
    }
    onClick(button, fn) {
        button.addEventListener('click', () => {
            fn();
        });
    }
    forward(button) {
        this.onClick(button, () => {
            this.position = this.position - this.blockWidth;
            this.howManyPass();
        });
    }
    backward(button) {
        this.onClick(button, () => {
            this.position = this.position + this.blockWidth;
            this.howManyPass();
            // console.log(this.position + this.blockWidth);
        });
    }
}
exports.default = SliderControler;


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
const SliderControler_1 = __importDefault(__webpack_require__(/*! ./SliderControler */ "./dev/ts/SliderControler.ts"));
document.addEventListener('DOMContentLoaded', () => {
    const forward = document.getElementById('forward');
    const backward = document.getElementById('backward');
    forward.style.setProperty('background-color', 'red');
    backward.style.setProperty('background-color', 'red');
    const imgFrames = document.getElementsByClassName('mainContentBlocksOverScreen');
    const imgFrame = imgFrames[0];
    const slider = new SliderControler_1.default(imgFrame);
    slider.forward(forward);
    slider.backward(backward);
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
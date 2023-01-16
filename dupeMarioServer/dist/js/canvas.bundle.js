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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector('canvas'); //the query selector will select the html canvas element

console.log(canvas);
var c = canvas.getContext('2d'); //we want a 2d context hence we are using the variable c to save canvas context

console.log(c);
canvas.width = 1024; //window.innerWidth;//making canvas fit to full screen's width

canvas.height = 576; //window.innerHeight;//making canvas fit to full screen's width
//canvas.width = window.innerWidth;//making canvas fit to full screen's width
//canvas.height = window.innerHeight;//making canvas fit to full screen's width

var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  //creating player class
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    }; //this position is an object

    this.velocity = {
      x: 0,
      y: 0 //by default this y=1 value will keep pushing our player down into the canvas because->
      //  |0,0
      //  |0,1
      //  |0,2
      //  |0,3
      //  |0,4
      //  |0,5
      //top left is 0,0 in a canvas, as you go down y axis value increases

    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      //creating draw method
      c.fillStyle = 'red'; //changing color of canvas

      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      //altering player property
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;else this.velocity.y = 0; //stops player from going down the canvas
    }
  }]);

  return Player;
}(); //creating a loop for the update method so that we can see the changes to the character in real time


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y // we could. also write just only x and y

    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      //c.fillStyle='blue'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

;
var image = new Image();
image.src = _img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var p1 = new Player(); //const platform = new Platform();

var platforms = [new Platform({
  x: -1,
  y: 470,
  image: image
}), new Platform({
  x: image.width - 3,
  y: 470,
  image: image
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; //to determine how far our player has moved

var scrollOffset = 0; //p1.draw();
//p1.update();
//creating a loop for the update method so that we can see the changes to the character in real time

function animate() {
  requestAnimationFrame(animate); //console.log('go')

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); //clears canvas to help us see the shape of the rectangle
  //c.clearRect(0,0,canvas.width,canvas.height);//clears canvas to help us see the shape of the rectangle

  platforms.forEach(function (platform) {
    platform.draw();
  });
  p1.update();

  if (keys.right.pressed && p1.position.x < 400) {
    //move right
    p1.velocity.x = 5;
  } else if (keys.left.pressed && p1.position.x > 100) {
    //move left
    p1.velocity.x = -5;
  } else {
    p1.velocity.x = 0; //stop if nothing is pressed

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        //platform.draw();
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        // platform.draw();
        platform.position.x += 5;
      });
    }
  } //platform collision detection


  platforms.forEach(function (platform) {
    if (p1.position.y + p1.height <= platform.position.y && p1.position.y + p1.height + p1.velocity.y >= platform.position.y && p1.position.x + p1.width >= platform.position.x && p1.position.x <= platform.position.x + platform.width) {
      p1.velocity.y = 0;
    }
  });

  if (scrollOffset > 2000) {
    console.log(scrollOffset);
    console.log('you win'); //document.write('you win')

    return;
  }
}

animate(); //
//window.addEventListener('keydown', (event)=>{
//    console.log(event)
//})
//
//window.addEventListener('keydown', ()=>{
//    console.log('key pressed')
//})

window.addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true; //p1.velocity.x+=1;

      break;

    case 87:
      console.log('up');
      p1.velocity.y -= 20;

      if (p1.position.y <= 0.2 * canvas.height) {
        p1.velocity.y += 60;
      }

      break;
  }
});
window.addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false; //p1.velocity.x=0;

      break;

    case 87:
      console.log('up');
      p1.velocity.y -= 20;

      if (p1.position.y <= 0.2 * canvas.height) {
        p1.velocity.y += 60;
      }

      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
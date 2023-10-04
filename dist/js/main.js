/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (() => {

eval("const slider = function(){\r\n    console.log(\"Dom ingeladen\")\r\n    $('.slider').slick({\r\n      slidesToShow: 3,\r\n      slidesToScroll: 2,\r\n      variableWidth: true,\r\n      centerMode:true,\r\n      centerPadding: '40px',\r\n      arrows: false,\r\n      speed: 250,\r\n      infinite: true,\r\n      autoplaySpeed: 4000,\r\n      autoplay: true,\r\n      responsive: [\r\n    // {\r\n    //   breakpoint: 992,\r\n    //   settings: {\r\n    //     slidesToShow: 3,\r\n    //   }\r\n    // },\r\n    // {\r\n    //   breakpoint: 767,\r\n    //   settings: {\r\n    //     slidesToShow: 2,\r\n    //     centerMode:true,\r\n    //     centerPadding: '0',\r\n    //   }\r\n    // },\r\n    // {\r\n    //   breakpoint: 576,\r\n    //   settings: {\r\n    //     slidesToShow: 1,\r\n    //     centerMode:true,\r\n    //     centerPadding: '0',\r\n    //   }\r\n    // }\r\n  ]\r\n    });\r\n  }\r\n\r\n  const init = function(){\r\n        slider();\r\n  }\r\n\r\n  \r\n\r\ndocument.addEventListener('DOMContentLoaded', init);\r\n\n\n//# sourceURL=webpack://landingpage/./js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/slider.js"]();
/******/ 	
/******/ })()
;
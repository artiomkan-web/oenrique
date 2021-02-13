 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = "./#src/js/script.js");
 })
 ({

 "./#src/js/script.js":
 (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction testWebP(callback) {\n  var webP = new Image();\n\n  webP.onload = webP.onerror = function () {\n    callback(webP.height == 2);\n  };\n\n  webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\n}\n\ntestWebP(function (support) {\n  if (support == true) {\n    document.querySelector('body').classList.add('webp');\n  } else {\n    document.querySelector('body').classList.add('no-webp');\n  }\n}); // Burger\n\nvar menuList = document.querySelector('.header__menu'),\n    menuItem = document.querySelectorAll('.header__menu > li > a'),\n    burgerTab = document.querySelector('.header__burger');\n\nfunction rootMenu() {\n  menuList.classList.contains('active') ? menuList.classList.remove('active') : menuList.classList.add('active');\n}\n\nburgerTab.addEventListener('click', function (e) {\n  rootMenu();\n});\nmenuItem.forEach(function (i) {\n  i.addEventListener('click', function (e) {\n    rootMenu();\n  });\n}); // Reviews\n\nvar reviewsIndex = 0,\n    reviewsItems = document.querySelectorAll('.testimonials__item'),\n    reviewsDots = document.querySelectorAll('.testimonials__dot'),\n    reviewsSlider = document.querySelector('.testimonials__slider');\n\nfunction hideReviews() {\n  reviewsItems.forEach(function (i) {\n    i.classList.remove('active');\n    i.style.opacity = 0;\n  });\n  reviewsDots.forEach(function (i) {\n    i.classList.remove('active');\n  });\n  var n = 1;\n  setInterval(function () {\n    if (n != 1) {\n      n -= 0.1;\n      reviewsItems[value].style.opacity = n;\n    }\n  }, 10);\n}\n\nfunction showReview(value) {\n  reviewsItems[value].classList.add('active');\n  reviewsDots[value].classList.add('active');\n  var n = 0;\n  setInterval(function () {\n    if (n < 1) {\n      n += 0.1;\n      reviewsItems[value].style.opacity = n;\n    }\n  }, 10);\n}\n\n;\nshowReview(0);\nreviewsSlider.addEventListener('click', function (e) {\n  for (var i = 0; i < reviewsDots.length; i++) {\n    if (e.target.classList.contains('testimonials__dot') && e.target == reviewsDots[i]) {\n      reviewsIndex = i;\n      hideReviews();\n      showReview(reviewsIndex);\n    }\n  }\n});\nreviewsDots.forEach(function (i) {\n  i.addEventListener('click', function (e) {\n    i.classList.add('active');\n  });\n});\nsetInterval(function () {\n  if (reviewsIndex < 3) {\n    hideReviews();\n    showReview(reviewsIndex);\n    reviewsIndex++;\n  } else {\n    reviewsIndex = 0;\n  }\n}, 5000); // Portfolio\n\nvar portfolioList = document.querySelector('.portfolio__list-items'),\n    portfolioItem = document.querySelectorAll('.portfolio__item'),\n    portfolioBtn = document.querySelector('.portfolio__button');\n\nfunction portfolioMin() {\n  document.querySelectorAll('.hidden').forEach(function (i) {\n    i.style.width = getComputedStyle(document.querySelector('.portfolio__item')).width;\n    i.style.height = '0';\n    i.style.display = 'none';\n  });\n  portfolioBtn.innerHTML = 'LOAD MORE';\n}\n\n;\nportfolioMin();\n\nfunction portfolioAll() {\n  document.querySelectorAll('.hidden').forEach(function (i) {\n    i.style.display = 'flex';\n    i.style.height = getComputedStyle(document.querySelector('.portfolio__item')).height;\n  });\n  portfolioBtn.innerHTML = 'COLLAPSE PROJECTS';\n}\n\nportfolioBtn.addEventListener('click', function (e) {\n  if (portfolioList.classList.contains('show')) {\n    portfolioList.classList.remove('show');\n    portfolioMin();\n  } else {\n    portfolioList.classList.add('show');\n    portfolioAll();\n  }\n}); // Components\n// ReactDOM.render(\n//     // <Portfolio/>,\n//     // document.getElementById('portfolio')\n// );\n\n//# sourceURL=webpack:///./#src/js/script.js?");

 })

 });
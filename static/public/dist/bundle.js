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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/public/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./static/public/css/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/public/css/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Russo+One);", ""]);
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../fonts/ANURATI/Anurati-Regular.ttf */ "./static/fonts/ANURATI/Anurati-Regular.ttf"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../fonts/ANURATI/Anurati-Regular.otf */ "./static/fonts/ANURATI/Anurati-Regular.otf"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../../public/images/hexagon.jpg */ "./static/public/images/hexagon.jpg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../icons/close.svg */ "./static/public/icons/close.svg"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../icons/show.svg */ "./static/public/icons/show.svg"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../icons/vk.svg */ "./static/public/icons/vk.svg"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../icons/fb.svg */ "./static/public/icons/fb.svg"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../icons/ok.svg */ "./static/public/icons/ok.svg"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../icons/hexagon.svg */ "./static/public/icons/hexagon.svg"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../icons/users.svg */ "./static/public/icons/users.svg"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../icons/user.svg */ "./static/public/icons/user.svg"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../icons/access.svg */ "./static/public/icons/access.svg"));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../icons/game1.svg */ "./static/public/icons/game1.svg"));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(/*! ../icons/sign_in.svg */ "./static/public/icons/sign_in.svg"));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(/*! ../icons/sign_out.svg */ "./static/public/icons/sign_out.svg"));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(/*! ../icons/drop_down.svg */ "./static/public/icons/drop_down.svg"));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(/*! ../icons/user_edit.svg */ "./static/public/icons/user_edit.svg"));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(/*! ../icons/delete.svg */ "./static/public/icons/delete.svg"));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(/*! ../icons/crown.svg */ "./static/public/icons/crown.svg"));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(/*! ../icons/arrow_previous.svg */ "./static/public/icons/arrow_previous.svg"));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(/*! ../icons/ru.png */ "./static/public/icons/ru.png"));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(/*! ../icons/done.svg */ "./static/public/icons/done.svg"));

// Module
exports.push([module.i, "@font-face {\n  font-family: Anurati;\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"ttf\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"otf\");\n  font-style: normal;\n  font-stretch: normal;\n}\nhtml, body, #application, #main {\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\nbody {\n  background: #424242 url(" + ___CSS_LOADER_URL___2___ + ");\n  background-size: 100%;\n}\n\n#application, #main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\na {\n  color: #005BD1;\n  text-decoration: none;\n  cursor: pointer;\n}\na:hover {\n  text-decoration: underline;\n}\na:focus {\n  outline: none;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n.title, .profile-popup__title {\n  display: block;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n}\n.title_size_large {\n  font-size: 28px;\n}\n\n.hr {\n  display: block;\n  height: 0;\n  padding: 0;\n  border: 0;\n  border-top: 1px solid #E0E0E0;\n}\n.hr_inline {\n  margin: 0;\n}\n\n.update-profile-popup, .signup-popup, .profile-popup, .login-popup {\n  position: relative;\n  z-index: 100;\n  width: 50%;\n  min-width: fit-content;\n  min-width: -moz-max-content;\n  background-color: white;\n  border-radius: 5px;\n}\n.update-profile-popup__close-popup, .login-popup__close-popup {\n  position: absolute;\n  top: 11px;\n  right: 8px;\n}\n.game-over__content, .signup-popup__content, .profile-popup__content, .login-popup__content {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 18px 15px 15px 15px;\n  border: 1px #E0E0E0 solid;\n  border-top: 0;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.signup-popup__title, .profile-popup__title, .login-popup__title {\n  padding: 10px;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  background-color: #fb6a06;\n  color: white;\n}\n\n.icon, .scoreboard__item_place_first .scoreboard__link::before, .scoreboard__item_place_second .scoreboard__link::before, .scoreboard__item_place_third .scoreboard__link::before, .select::after, .checkbox:checked::before {\n  display: inline-block;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  height: 14px;\n  width: 14px;\n}\n.icon_size_small, .sm-icons-list__icon, .checkbox_size_small::before {\n  height: 12px;\n  width: 12px;\n}\n.icon_size_large, .checkbox_size_large::before {\n  height: 20px;\n  width: 20px;\n}\n.icon_size_xlarge {\n  height: 24px;\n  width: 24px;\n}\n.icon_size_xxlarge {\n  height: 32px;\n  width: 32px;\n}\n.icon_size_xxxlarge {\n  height: 40px;\n  width: 40px;\n}\n.icon_size_fit {\n  height: 60%;\n  width: 60%;\n}\n.icon_size_header-fit {\n  height: 2.5em;\n  width: 2.5em;\n}\n.icon_color_green {\n  background-color: #2e7d32;\n}\n.icon_color_orange {\n  background-color: #FD9E0B;\n}\n.icon_color_white, .sm-icons-list__icon, .checkbox:checked::before {\n  background-color: white;\n}\n.icon_color_black, .select::after {\n  background-color: black;\n}\n.icon_color_muted {\n  background-color: #A9A9A9;\n}\n.icon_color_muted-light {\n  background-color: #F7F7F7;\n}\n.icon_type_cross {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___3___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n.icon_type_eye {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___4___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___4___ + ");\n}\n.icon_type_vk {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___5___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___5___ + ");\n}\n.icon_type_fb {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___6___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___6___ + ");\n}\n.icon_type_ok {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___7___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___7___ + ");\n}\n.icon_type_hexagon {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___8___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___8___ + ");\n}\n.icon_type_users {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___9___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___9___ + ");\n}\n.icon_type_user {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___10___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___10___ + ");\n}\n.icon_type_key {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___11___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___11___ + ");\n}\n.icon_type_gamepad {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___12___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___12___ + ");\n}\n.icon_type_signin {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___13___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___13___ + ");\n}\n.icon_type_signout {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___14___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___14___ + ");\n}\n.icon_type_dropdown, .select::after {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___15___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___15___ + ");\n}\n.icon_type_useredit {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___16___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___16___ + ");\n}\n.icon_type_delete {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___17___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___17___ + ");\n}\n.icon_type_crown, .scoreboard__item_place_first .scoreboard__link::before, .scoreboard__item_place_second .scoreboard__link::before, .scoreboard__item_place_third .scoreboard__link::before {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___18___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___18___ + ");\n}\n.icon_type_back {\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___19___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___19___ + ");\n}\n.icon_type_ru {\n  background-image: url(" + ___CSS_LOADER_URL___20___ + ");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: 0 25%;\n}\n.icon_btn {\n  cursor: pointer;\n}\n\n.icon-bg {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n  width: 20px;\n  border-radius: 4px;\n  border: 1px solid #E0E0E0;\n}\n.icon-bg_shape_round {\n  border-radius: 100%;\n}\n.icon-bg_color_green {\n  background-color: #2e7d32;\n}\n.icon-bg_color_white {\n  background-color: white;\n}\n.icon-bg_color_black {\n  background-color: black;\n}\n.icon-bg_color_muted {\n  background-color: #A9A9A9;\n}\n.icon-bg_color_dark-gray {\n  background-color: #393939;\n}\n.icon-bg_color_muted-light {\n  background-color: #F7F7F7;\n}\n.icon-bg_color_vk {\n  background-color: #4A76A8;\n}\n.icon-bg_color_fb {\n  background-color: #3B5998;\n}\n.icon-bg_color_ok {\n  background-color: #EE8208;\n}\n.icon-bg_size_large {\n  height: 24px;\n  width: 24px;\n}\n.icon-bg_size_xlarge {\n  height: 28px;\n  width: 28px;\n}\n.icon-bg_size_xxlarge {\n  height: 36px;\n  width: 36px;\n}\n.icon-bg_size_xxxlarge {\n  height: 50px;\n  width: 50px;\n}\n.icon-bg_size_tall, .sm-icons-list__icon-bg {\n  height: 30px;\n  width: 24px;\n}\n.icon-bg_size_full {\n  height: 100%;\n  width: 100%;\n}\n.icon-bg_btn, .sm-icons-list__icon-bg {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease 0s;\n}\n.icon-bg_btn:hover, .sm-icons-list__icon-bg:hover {\n  -webkit-box-shadow: 0 2px 0 0 #F5F5F5, 0 0 12px -1px lightblue;\n  -moz-box-shadow: 0 2px 0 0 #F5F5F5, 0 0 12px -1px lightblue;\n  box-shadow: 0 2px 0 0 #F5F5F5, 0 0 12px -1px lightblue;\n}\n.icon-bg_borderless {\n  border: none;\n}\n\n.btn, .result-redirect__btn, .file-input__label {\n  height: 32px;\n  padding: 0 15px;\n  font-size: 16px;\n  line-height: 16px;\n  border: 1px solid #a74604;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px #F5F5F5;\n  -moz-box-shadow: 0 2px #F5F5F5;\n  box-shadow: 0 2px #F5F5F5;\n  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;\n  background-color: #fb6a06;\n  color: white;\n  cursor: pointer;\n  font-weight: bold;\n}\n.btn .btn__icon, .result-redirect__btn .btn__icon, .file-input__label .btn__icon {\n  transition: background-color 0.5s ease 0s;\n  background-color: white;\n}\n.btn:hover:not(.btn_disabled), .result-redirect__btn:hover:not(.btn_disabled), .file-input__label:hover:not(.btn_disabled) {\n  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;\n  background-color: #a74604;\n  color: white;\n}\n.btn:hover:not(.btn_disabled) .btn__icon, .result-redirect__btn:hover:not(.btn_disabled) .btn__icon, .file-input__label:hover:not(.btn_disabled) .btn__icon {\n  transition: background-color 0.5s ease 0s;\n  background-color: white;\n}\n.btn:active:not(.btn_disabled), .result-redirect__btn:active:not(.btn_disabled), .file-input__label:active:not(.btn_disabled) {\n  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;\n  background-color: #7f3503;\n  color: white;\n}\n.btn:active:not(.btn_disabled) .btn__icon, .result-redirect__btn:active:not(.btn_disabled) .btn__icon, .file-input__label:active:not(.btn_disabled) .btn__icon {\n  transition: background-color 0.2s ease 0s;\n  background-color: white;\n}\n.btn::-moz-focus-inner, .result-redirect__btn::-moz-focus-inner, .file-input__label::-moz-focus-inner {\n  border: 0;\n}\n.btn:focus, .result-redirect__btn:focus, .file-input__label:focus {\n  outline: none;\n}\n.btn_size_large {\n  height: 40px;\n}\n.btn_size_large .btn__text {\n  line-height: 20px;\n}\n.btn_color_muted {\n  border-color: #E0E0E0;\n  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;\n  background-color: #F7F7F7;\n  color: #A9A9A9;\n}\n.btn_color_muted .btn__icon {\n  transition: background-color 0.5s ease 0s;\n  background-color: #A9A9A9;\n}\n.btn_color_muted:hover:not(.btn_disabled) {\n  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;\n  background-color: #c4c4c4;\n  color: #767676;\n}\n.btn_color_muted:hover:not(.btn_disabled) .btn__icon {\n  transition: background-color 0.5s ease 0s;\n  background-color: #767676;\n}\n.btn_color_muted:active:not(.btn_disabled) {\n  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;\n  background-color: #b0b0b0;\n  color: #434343;\n}\n.btn_color_muted:active:not(.btn_disabled) .btn__icon {\n  transition: background-color 0.2s ease 0s;\n  background-color: #434343;\n}\n.btn_disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn__inner {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n}\n.btn__text {\n  margin: auto 0;\n  font-size: 16px;\n  line-height: 16px;\n  padding-top: 1px;\n}\n@-moz-document url-prefix() {\n  .btn__text {\n    padding-top: 0;\n  }\n}\n.btn__text_normal {\n  color: black;\n  font-weight: normal;\n}\n.btn__icon {\n  margin: auto 8px auto 0;\n}\n\n.checkbox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  position: relative;\n  top: -3px;\n  vertical-align: bottom;\n  z-index: 200;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 14px;\n  width: 14px;\n  margin: 0;\n  border-radius: 3px;\n  cursor: pointer;\n  background-color: #fb6a06;\n}\n.checkbox:checked::before {\n  content: \"\";\n  -webkit-mask-image: url(" + ___CSS_LOADER_URL___21___ + ");\n  mask-image: url(" + ___CSS_LOADER_URL___21___ + ");\n}\n.checkbox:focus {\n  outline: none;\n}\n.checkbox_size_small {\n  width: 12px;\n  height: 12px;\n}\n.checkbox_size_small::before {\n  margin-bottom: 0;\n}\n.checkbox_size_large {\n  width: 16px;\n  height: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 3px 0;\n}\n.form-group:last-of-type {\n  padding-bottom: 0;\n}\n.form-group_align_space-between {\n  flex-direction: row;\n  justify-content: space-between;\n}\n.form-group_align_center {\n  flex-direction: row;\n  justify-content: center;\n}\n.form-group_align_stretch {\n  flex-direction: row;\n  justify-content: stretch;\n}\n.form-group_align_stretch .form-group__field {\n  flex-grow: 1;\n}\n.form-group_size_inline {\n  padding: 0;\n}\n.form-group_size_large {\n  padding-bottom: 10px;\n}\n.form-group__help-text {\n  font-size: 12px;\n  margin-top: 4px;\n}\n.form-group__help-text_type_error {\n  color: #FF1100;\n}\n.form-group__help-text_hidden {\n  display: none;\n  margin-top: 0;\n}\n.form-group__title {\n  display: block;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n}\n.form-group__title_align_left {\n  text-align: left;\n}\n\n.file-input {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 28px;\n  padding: 0;\n  border: 1px solid #E0E0E0;\n  border-radius: 3px;\n}\n.file-input__label {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 0;\n  height: 30px;\n  margin: -1px;\n  border: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n  box-shadow: none;\n}\n.file-input__field {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.file-input__info {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-width: 130px;\n  overflow: hidden;\n  flex-grow: 1;\n  white-space: nowrap;\n  padding: 0 15px;\n  font-size: 12px;\n}\n\n.input {\n  position: relative;\n  z-index: 200;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: fit-content;\n  padding: 0;\n  border: 1px solid #E0E0E0;\n  border-radius: 3px;\n  transition: box-shadow 0.2s ease 0s;\n  border-width: 1px;\n}\n.input:focus-within {\n  z-index: 300;\n  border-color: lightblue;\n  -webkit-box-shadow: 0 0 50px -12px lightblue;\n  -moz-box-shadow: 0 0 50px -12px lightblue;\n  box-shadow: 0 0 50px -12px lightblue;\n}\n.input_status_error {\n  border-color: #FF1100;\n}\n.input__icon {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.input__icon:last-child {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.input__icon:first-child {\n  margin-left: 10px;\n  margin-right: 0;\n}\n.input__field {\n  display: inline-block;\n  height: 18px;\n  min-width: 0;\n  flex-grow: 1;\n  margin: 0;\n  padding: 6px 5px 4px 5px;\n  line-height: 12px;\n  border-radius: 3px;\n  border-width: 0;\n  background-color: white;\n  color: black;\n  font-size: 12px;\n  outline: none;\n}\n@-moz-document url-prefix() {\n  .input__field {\n    height: 15px;\n    padding-bottom: 7px;\n  }\n}\n.input__field:first-child {\n  padding-left: 10px;\n}\n.input__field:last-child {\n  padding-right: 10px;\n}\n.input__field-appendix {\n  display: inline-block;\n  margin: 0;\n  height: 18px;\n  padding: 8px 2px 3px 2px;\n  border-radius: 3px;\n  font-size: 12px;\n  pointer-events: none;\n}\n@-moz-document url-prefix() {\n  .input__field-appendix {\n    line-height: 12px;\n  }\n}\n.input__inner {\n  display: flex;\n  flex-direction: row;\n}\n.input__tooltip {\n  position: absolute;\n  left: calc(100% + 8px);\n  z-index: 400;\n  display: table;\n  min-width: 180px;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  -webkit-box-shadow: 0 0 50px -5px #676767;\n  -moz-box-shadow: 0 0 50px -5px #676767;\n  box-shadow: 0 0 50px -5px #676767;\n  pointer-events: none;\n}\n.input__tooltip::before {\n  position: absolute;\n  top: calc(50% - 4px);\n  left: -6px;\n  content: \"\";\n  border-style: solid;\n  border-width: 4px 6px 4px 0;\n  border-color: transparent white transparent transparent;\n}\n.input__tooltip-title {\n  display: table-row;\n  max-width: 30px;\n  font-size: 12px;\n  color: black;\n}\n.input__tooltip-help {\n  display: table-row;\n  font-size: 9px;\n  color: #A9A9A9;\n}\n\n.select {\n  transition: box-shadow 0.2s ease 0s;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 28px;\n  min-width: fit-content;\n  padding: 0;\n  border: 1px solid #E0E0E0;\n  border-radius: 3px;\n}\n.select:focus-within {\n  z-index: 300;\n  border-color: lightblue;\n  -webkit-box-shadow: 0 0 50px -12px lightblue;\n  -moz-box-shadow: 0 0 50px -12px lightblue;\n  box-shadow: 0 0 50px -12px lightblue;\n}\n.select :-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000;\n}\n.select::after {\n  position: absolute;\n  top: 8px;\n  right: 3px;\n  z-index: 201;\n  pointer-events: none;\n  content: \"\";\n}\n.select_stretched {\n  width: 100%;\n}\n.select_status_error {\n  border-color: #FF1100;\n}\n.select_status_error:focus-within {\n  border-color: #FF1100;\n}\n.select__field {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: inline-block;\n  flex-grow: 1;\n  height: 28px;\n  line-height: 28px;\n  padding: 1px 22px 0 10px;\n  font-size: 12px;\n  background-color: white;\n  color: black;\n  border-radius: 3px;\n  border-width: 0;\n}\n@-moz-document url-prefix() {\n  .select__field {\n    padding-top: 0;\n  }\n}\n.select__field:focus {\n  outline: none;\n  border: none;\n}\n.select__chosen-icon {\n  margin-left: 10px;\n}\n\n.field-group {\n  transition: box-shadow 0.2s ease 0s;\n  display: flex;\n  flex-direction: row;\n  align-content: stretch;\n  justify-content: stretch;\n  height: 30px;\n}\n.field-group:focus-within {\n  box-shadow: 0 0 50px -12px lightblue;\n}\n.field-group:focus-within .field-group__field:not([class*=status_error]) {\n  border-color: lightblue;\n}\n.field-group__field {\n  flex-grow: 1;\n  height: 28px;\n  margin: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 1px;\n}\n.field-group__field:focus-within {\n  box-shadow: none;\n}\n.field-group__field:first-child {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.field-group__field:last-child {\n  border-right-width: 1px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.field-group__field_stretched_1 {\n  flex-grow: 1;\n}\n.field-group__field_stretched_2 {\n  flex-grow: 2;\n}\n.field-group__field_stretched_3 {\n  flex-grow: 3;\n}\n.field-group__field_stretched_4 {\n  flex-grow: 4;\n}\n.field-group__field_stretched_5 {\n  flex-grow: 5;\n}\n.field-group__field_stretched_6 {\n  flex-grow: 6;\n}\n.field-group__field_stretched_7 {\n  flex-grow: 7;\n}\n.field-group__field_stretched_8 {\n  flex-grow: 8;\n}\n.field-group__field_stretched_9 {\n  flex-grow: 9;\n}\n.field-group__field_stretched_10 {\n  flex-grow: 10;\n}\n.field-group__field_stretched_11 {\n  flex-grow: 11;\n}\n.field-group__field_stretched_12 {\n  flex-grow: 12;\n}\n\n.sm-icons-list {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.sm-icons-list__icon-bg {\n  -webkit-box-shadow: 0 2px 0 0 #F5F5F5;\n  -moz-box-shadow: 0 2px 0 0 #F5F5F5;\n  box-shadow: 0 2px 0 0 #F5F5F5;\n  margin: 0 2px;\n}\n.pagination {\n  width: 50%;\n  margin: 20px auto;\n  text-align: center;\n}\n.pagination__link {\n  padding: 3px 10px;\n  height: 30px;\n  border: #a74604 solid 1px;\n  border-right: none;\n  background-color: white;\n  color: #1b0c29;\n  cursor: pointer;\n  font-weight: bold;\n}\n.pagination__link:focus {\n  outline: none;\n}\n.pagination__link:not(.pagination__link_current) {\n  background-color: #fb6a06;\n  color: white;\n  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;\n  background-color: #fb6a06;\n  color: white;\n}\n.pagination__link:not(.pagination__link_current) .pagination__icon {\n  transition: background-color 0.5s ease 0s;\n  background-color: white;\n}\n.pagination__link:not(.pagination__link_current):hover:not(.pagination_disabled) {\n  transition: background-color 0.5s ease 0s, color 0.5s ease 0s;\n  background-color: #994002;\n  color: white;\n}\n.pagination__link:not(.pagination__link_current):hover:not(.pagination_disabled) .pagination__icon {\n  transition: background-color 0.5s ease 0s;\n  background-color: white;\n}\n.pagination__link:not(.pagination__link_current):active:not(.pagination_disabled) {\n  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;\n  background-color: #702f02;\n  color: white;\n}\n.pagination__link:not(.pagination__link_current):active:not(.pagination_disabled) .pagination__icon {\n  transition: background-color 0.2s ease 0s;\n  background-color: white;\n}\n.pagination__link:hover:not(.pagination__link_current) {\n  color: #6614b0;\n  cursor: pointer;\n}\n.pagination__link_first {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.pagination__link_last {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n  border-right: #a74604 solid 1px;\n}\n.pagination__link_current {\n  background-color: white;\n  color: #fb6a06;\n  cursor: auto;\n}\n\n.authors {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 4%;\n  padding: 5%;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.authors__description {\n  text-align: center;\n  font-size: 20px;\n}\n.authors__header {\n  font-size: 40px;\n  font-weight: bold;\n}\n.authors__img {\n  height: 300px;\n  width: 300px;\n  border: 1px solid #E0E0E0;\n  border-radius: 100%;\n}\n.authors__item {\n  width: 400px;\n  margin: 0 40px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.authors__items {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 80px;\n}\n.authors__title {\n  text-align: center;\n  font-size: 30px;\n  margin: 10px 0 0;\n}\n.authors__subtitle {\n  text-align: center;\n  font-size: 16px;\n  margin: 0 0 10px;\n  color: #FFFFFF;\n}\n.authors__close-popup {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.header {\n  display: flex;\n  align-self: stretch;\n  justify-self: flex-start;\n  align-items: center;\n  height: 4em;\n  min-height: 4em;\n  padding-left: 5%;\n  background-color: #fb6a06;\n}\n.header_main {\n  margin: 0 8px 24px;\n}\n.header__title {\n  margin: 0 0 0 4px;\n  padding: 0;\n  font-size: 3em;\n  font-weight: bolder;\n  color: white;\n}\n.header__title:hover {\n  text-decoration: none;\n}\n.header__link {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n.header__link:hover {\n  text-decoration: none;\n}\n\n.login-form__remember-me-label, .login-form__forgot-password-link {\n  font-size: 12px;\n}\n.login-form__remember-me-label {\n  margin-left: 4px;\n}\n.login-form__double-btn {\n  margin-top: 10px;\n}\n.login-form__sumbit-btn {\n  margin-right: 4px;\n  flex-grow: 1;\n}\n.login-form__cancel-btn {\n  flex-grow: 0;\n}\n\n.login-popup {\n  padding: 0;\n  margin: auto 0;\n  max-width: 300px;\n}\n.login-popup__hr {\n  margin: 16px -16px;\n}\n.login-popup__continue-with-text {\n  margin: 8px 0;\n  font-size: 9px;\n  text-align: center;\n  font-weight: bold;\n  color: #A9A9A9;\n}\n.login-popup__signup-link {\n  font-size: 12px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.menu {\n  margin: 4% auto 0 auto;\n  width: 60%;\n  height: 90%;\n  min-width: fit-content;\n  max-width: 600px;\n  border: 0;\n  border-radius: 3px;\n}\n.menu__link {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.menu__link:hover {\n  text-decoration: none;\n}\n.menu__item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 4%;\n  height: 4.5rem;\n  background-color: #fb6a06;\n  color: white;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.71);\n}\n.menu__dropdown-btn {\n  position: absolute;\n  top: 20px;\n  right: 10px;\n}\n.menu__text {\n  width: 85%;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n}\n.menu__icon-bg {\n  width: 15%;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.profile-info {\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 10px;\n  padding: 20px;\n}\n.profile-info__item {\n  display: table-row;\n  height: 40px;\n  white-space: nowrap;\n  border-bottom: 1px solid #E0E0E0;\n}\n.profile-info .profile-info__item-value, .profile-info .profile-info__item-name {\n  display: table-cell;\n  vertical-align: middle;\n}\n.profile-info__item-name {\n  font-weight: bold;\n}\n.profile-info__item-value {\n  padding-left: 40px;\n}\n\n.profile-popup {\n  align-items: center;\n  max-width: 400px;\n}\n.profile-popup_main {\n  margin-top: 4%;\n}\n.profile-popup__profile-info {\n  max-width: fit-content;\n  margin: 20px auto 10px;\n}\n.profile-popup__profile-icon {\n  display: flex;\n  justify-content: center;\n  width: 140px;\n  height: 140px;\n  margin: 0 auto;\n  overflow: hidden;\n  object-fit: cover;\n  border-radius: 100%;\n}\n.profile-popup__double-btn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  margin: 0 auto;\n  padding: 0 40px;\n}\n.profile-popup__double-btn_center {\n  flex-direction: row;\n  justify-content: center;\n}\n.profile-popup__btn {\n  width: 140px;\n  margin: 0 4px;\n}\n.profile-popup__btn:first-child {\n  margin-left: 0;\n}\n.profile-popup__btn:last-child {\n  margin-right: 0;\n}\n\n.scoreboard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: fit-content;\n  margin-top: 4%;\n  padding: 2%;\n  border-radius: 7px;\n  background-color: white;\n}\n.scoreboard__items {\n  max-width: 600px;\n  min-width: 450px;\n}\n.scoreboard__item {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: 60px;\n  border-bottom: 1px solid #fb6a06;\n}\n.scoreboard__item_place_first, .scoreboard__item_place_second, .scoreboard__item_place_third {\n  font-size: 20px;\n  font-weight: bold;\n}\n.scoreboard__item_place_first .scoreboard__link, .scoreboard__item_place_second .scoreboard__link, .scoreboard__item_place_third .scoreboard__link {\n  position: relative;\n}\n.scoreboard__item_place_first .scoreboard__link::before, .scoreboard__item_place_second .scoreboard__link::before, .scoreboard__item_place_third .scoreboard__link::before {\n  position: absolute;\n  top: -25px;\n  width: 40px;\n  height: 40px;\n  content: \"\";\n}\n.scoreboard__item_place_first .scoreboard__link::before {\n  background-color: #FFD700;\n}\n.scoreboard__item_place_second .scoreboard__link::before {\n  background-color: #C0C0C0;\n}\n.scoreboard__item_place_third .scoreboard__link::before {\n  background-color: #CD7F32;\n}\n.scoreboard__user-data {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.scoreboard__link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.scoreboard__link:hover {\n  text-decoration: black;\n}\n.scoreboard__avatar {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  margin-right: 10px;\n  border-radius: 100%;\n  vertical-align: middle;\n  line-height: 40px;\n}\n.scoreboard__place {\n  display: inline-block;\n  margin-right: 10px;\n  width: 20px;\n}\n.scoreboard__data-field {\n  display: flex;\n  align-items: center;\n}\n.scoreboard__username {\n  padding-left: 10px;\n  color: black;\n}\n\n.signup-popup {\n  -webkit-align-self: center;\n  align-self: center;\n  padding: 0;\n  max-width: 450px;\n}\n.signup-popup_main {\n  margin: 4% 0 0 0;\n}\n.signup-popup__hr {\n  margin: 12px -16px 12px -16px;\n}\n.signup-popup__explanation-text {\n  margin: 8px 0;\n  font-size: 12px;\n  color: #A9A9A9;\n}\n.signup-popup__double-btn {\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n}\n.signup-popup__signup-btn {\n  margin-right: 4px;\n}\n.signup-popup__cancel-btn {\n  margin-left: 4px;\n}\n\n.signup-form__date-select:last-child {\n  margin-right: 0;\n}\n.signup-form__form-group {\n  margin: 8px 0;\n}\n\n.update-profile-popup {\n  max-width: 250px;\n  border: 1px #a74604 solid;\n}\n.update-profile-popup__hr {\n  margin: 16px -15px 16px -15px;\n}\n.update-profile-popup__title {\n  margin: 0 0 16px 0;\n}\n.update-profile-popup__continue-with-text {\n  margin: 8px 0;\n  font-size: 9px;\n  text-align: center;\n  color: #A9A9A9;\n  font-weight: bold;\n}\n.update-profile-popup__signup-link {\n  font-size: 12px;\n  text-align: center;\n  font-weight: bold;\n}\n.update-profile-popup__double-btn {\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n}\n.update-profile-popup__update-btn {\n  margin-right: 4px;\n}\n.update-profile-popup__cancel-btn {\n  margin-left: 4px;\n}\n\n.not-found-page {\n  width: 55%;\n  margin: auto auto;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.28);\n  padding: 20px;\n}\n.not-found-page__link {\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-decoration: underline;\n  color: black;\n}\n.not-found-page__text {\n  font-weight: bold;\n}\n.not-found-page__text_main {\n  font-size: 4rem;\n  color: black;\n}\n.not-found-page__text_additional {\n  margin-bottom: 4%;\n  font-size: 1.5rem;\n  color: #1c1c1c;\n}\n\n.game-over {\n  position: relative;\n  width: 42rem;\n  align-items: center;\n  margin: auto 0;\n  background-color: rgba(226, 216, 216, 0.6);\n  border-radius: 5px;\n  max-width: 56rem;\n}\n.game-over_multi {\n  width: 56rem;\n}\n.game-over__column {\n  display: inline-block;\n  width: 33.33%;\n  vertical-align: top;\n}\n.game-over__title {\n  display: block;\n  text-align: center;\n  font-size: 45px;\n  font-weight: bold;\n  margin-top: 4%;\n}\n.game-over_main {\n  margin-top: 4%;\n}\n.game-over__profile-info {\n  max-width: fit-content;\n  margin: 20px auto 10px;\n}\n.game-over__profile-icon {\n  display: flex;\n  justify-content: center;\n  width: 140px;\n  height: 140px;\n  margin: 0 auto;\n  overflow: hidden;\n  object-fit: cover;\n  border-radius: 100%;\n}\n.game-over__btn {\n  width: 140px;\n  margin: 0 4px;\n}\n.game-over__btn:first-child {\n  margin-left: 0;\n}\n.game-over__btn:last-child {\n  margin-right: 0;\n}\n\n.result-time {\n  margin-left: auto;\n  margin-right: auto;\n  width: 12rem;\n  border: 4px solid #0e100f;\n  border-radius: 10px;\n  margin-top: 1rem;\n}\n.result-time__title {\n  text-align: center;\n  font-size: 24px;\n  font-weight: lighter;\n  color: black;\n}\n.result-time__seconds {\n  font-weight: bold;\n  text-align: center;\n  font-size: 50px;\n}\n\n.game-info {\n  align-items: center;\n  margin: auto 0;\n}\n.game-info_single {\n  padding-top: 3rem;\n}\n.game-info_main {\n  display: block;\n  padding-top: 9rem;\n}\n.game-info_main_title {\n  margin-bottom: 2rem;\n}\n.game-info__one-btn {\n  position: absolute;\n  bottom: 0;\n  top: 38%;\n  left: 50%;\n  transform: translate(-50%, 70%);\n}\n.game-info__avatar {\n  border-radius: 8rem;\n  width: 185px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.game-info__nickname {\n  text-align: center;\n  font-weight: bold;\n  font-family: sans-serif;\n  font-size: 45px;\n}\n.game-info__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 1rem 0rem 1rem;\n  font-family: Helvetica, sans-serif;\n  font-weight: normal;\n}\n.game-info__item-name {\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-right: 10px;\n}\n.game-info__item-value {\n  font-size: 35px;\n  font-weight: bold;\n  padding-left: 10px;\n}\n\n.result-redirect {\n  padding: 1rem;\n  font-family: Helvetica, sans-serif;\n  font-weight: normal;\n  position: relative;\n  bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 33rem;\n}\n.result-redirect__item_center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-family: Helvetica, sans-serif;\n  font-weight: normal;\n}\n.result-redirect__btn {\n  display: block;\n  width: 33rem;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, 0%);\n  border: 1px solid #a3653bde;\n  -webkit-box-shadow: 0 2px #977575a6;\n  -moz-box-shadow: 0 2px #977575a6;\n  box-shadow: 0 2px #977575a6;\n  height: 55px;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  width: 33rem;\n}\n.result-redirect__center {\n  margin-left: auto;\n  margin-right: auto;\n  width: 18rem;\n  padding-top: 1rem;\n}\n.result-redirect__link {\n  text-align: center;\n  color: #282222cc;\n  font-weight: bold;\n  font-size: 25px;\n  text-decoration: underline;\n}\n.result-redirect__one-btn {\n  position: absolute;\n  bottom: 0;\n  top: 38%;\n  left: 50%;\n  transform: translate(-50%, 70%);\n}\n.result-redirect__text {\n  font-size: 25px;\n}\n\n.game-msg {\n  padding-top: 1rem;\n  font-size: 45px;\n  font-weight: bold;\n}\n.game-msg_center {\n  text-align: center;\n}\n\n.offline-msg {\n  background: rgba(102, 102, 102, 0.5);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.offline-msg__window {\n  width: 300px;\n  height: 70px;\n  text-align: center;\n  padding: 15px;\n  border: 3px solid black;\n  border-radius: 10px;\n  color: #fb6a06;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background: #fff;\n}\n.offline-msg__btn {\n  display: inline-block;\n  border: 1px solid #fb6a06;\n  color: #fb6a06;\n  padding: 0 12px;\n  margin: 10px;\n  border-radius: 5px;\n  text-decoration: none;\n  background: #f2f2f2;\n  font-size: 14pt;\n  cursor: pointer;\n}\n.offline-msg__btn:hover {\n  background: #e6e6ff;\n}\n\n.hexagons {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  overflow: auto;\n  min-height: 800px;\n}\n.hexagons_main {\n  display: flex;\n}\n.hexagons__game {\n  display: block;\n  border-radius: 15px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./static/fonts/ANURATI/Anurati-Regular.otf":
/*!**************************************************!*\
  !*** ./static/fonts/ANURATI/Anurati-Regular.otf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/otf;base64,T1RUTwAKAIAAAwAgQ0ZGIO51Xo4AABOEAAAMa09TLzJjRn/8AAABEAAAAGBjbWFwypriNgAABcgAAAF6aGVhZAmvkf8AAACsAAAANmhoZWEInQSLAAAA5AAAACRobXR4bo0AcQAAB0QAAACYa2Vybn46fbgAAAf8AAALiG1heHAAJlAAAAABCAAAAAZuYW1lN3LBtwAAAXAAAARYcG9zdP+4ADIAAAfcAAAAIAABAAAAAQAA1f1ZoF8PPPUAAwPoAAAAANK8o5AAAAAA0sWqbwAAAAAFFwMgAAAAAwACAAAAAAAAAAEAAAOE/tQAAAWJAAAABwUXAAEAAAAAAAAAAAAAAAAAAAAmAABQAAAmAAAAAwLoAZAABQAEAooCWAAAAEsCigJYAAABXgAyAPAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAUFlSUwBAACAiYAMg/zgAyAPoAMgAAAABAAAAAAGQAyAAIAAgAAAAAAATAOoAAQAAAAAAAAA/AAAAAQAAAAAAAQAHAD8AAQAAAAAAAwAaAEYAAQAAAAAABAAPAGAAAQAAAAAABQAnAG8AAQAAAAAABgAPAJYAAQAAAAAABwBRAKUAAQAAAAAACAAlAPYAAQAAAAAACQAPARsAAwABBAkAAAB+ASoAAwABBAkAAQAOAagAAwABBAkAAgAOAbYAAwABBAkAAwA0AcQAAwABBAkABAAeAfgAAwABBAkABQBOAhYAAwABBAkABgAeAfgAAwABBAkABwCiAmQAAwABBAkACABKAwYAAwABBAkACQAeA1BDb3B5cmlnaHQgMjAxNiBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5BbnVyYXRpMS4wMDA7UFlSUztBbnVyYXRpLVJlZ3VsYXJBbnVyYXRpIFJlZ3VsYXJWZXJzaW9uIDEuMDAwO1BTIDAwMS4wMDE7aG90Y29udiAxLjAuNTZBbnVyYXRpLVJlZ3VsYXJQbGVhc2UgcmVmZXIgdG8gdGhlIENvcHlyaWdodCBzZWN0aW9uIGZvciB0aGUgZm9udCB0cmFkZW1hcmsgYXR0cmlidXRpb24gbm90aWNlcy5QWVJTIEZvbnRsYWIgTHRkLiAvIE1hZGUgd2l0aCBGb250TGFiRW1tZXJhbiBSaWNoYXJkAEMAbwBwAHkAcgBpAGcAaAB0ACAAMgAwADEANgAgAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZAAuACAAQQBsAGwAIAByAGkAZwBoAHQAcwAgAHIAZQBzAGUAcgB2AGUAZAAuAEEAbgB1AHIAYQB0AGkAUgBlAGcAdQBsAGEAcgAxAC4AMAAwADAAOwBQAFkAUgBTADsAQQBuAHUAcgBhAHQAaQAtAFIAZQBnAHUAbABhAHIAQQBuAHUAcgBhAHQAaQAtAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAMAA7AFAAUwAgADAAMAAxAC4AMAAwADEAOwBoAG8AdABjAG8AbgB2ACAAMQAuADAALgA1ADYAUABsAGUAYQBzAGUAIAByAGUAZgBlAHIAIAB0AG8AIAB0AGgAZQAgAEMAbwBwAHkAcgBpAGcAaAB0ACAAcwBlAGMAdABpAG8AbgAgAGYAbwByACAAdABoAGUAIABmAG8AbgB0ACAAdAByAGEAZABlAG0AYQByAGsAIABhAHQAdAByAGkAYgB1AHQAaQBvAG4AIABuAG8AdABpAGMAZQBzAC4AUABZAFIAUwAgAEYAbwBuAHQAbABhAGIAIABMAHQAZAAuACAALwAgAE0AYQBkAGUAIAB3AGkAdABoACAARgBvAG4AdABMAGEAYgBFAG0AbQBlAHIAYQBuACAAUgBpAGMAaABhAHIAZAAAAAMAAAADAAABIgABAAAAAAAcAAMAAQAAASIAAAEGAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAECAAAAAAMAAAAABAAAAAUAAAAAAAAAAAAAAAAAAAAAAAYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAACUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAWAAAABIAEAADAAIAIQAmACsALwBdAH4gICJg//8AAAAgACYAKwAvAEEAfiAgImD////h/93/2f/W/8X/peAE3cUAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAfQAPwD6AAABGgAABAwAAANIAAADeAAAA4MAMgMpAAAC0AAAAz4AAAJ8AAACfQAAA2sAAAMzAAAAjAAAAmcAAALBAAACaAAAA7oAAAMyAAADxQAAAwwAAAPCAAAC+QAAAyMAAAH+AAADDgAAAlAAAAWJAAADlwAAA3gAAANOAAABpAAAA3gAAAIpAAADSAAAApoAAANIAAAAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAuEAAEB6QYAAAgFdgACAAX/jQACAAf/lQACAAn/iwACAAr/lgACABL/lgACABf/jAACABz/kwACAB//YQACACH/jQAFAAX9owAFAAb+aQAFAAf/lQAFAAj/HwAFAAn/iwAFAAr/lgAFAAz/IAAFAA3+gAAFAA/+lgAFABD+sgAFABL/lgAFABT/IAAFABb/IQAFABf/jAAFABj/SAAFABz/kwAFAB//YQAFACH9owAGAAX/jQAGAAf/KwAGAAj/QQAGAAn/iwAGAAr/lgAGAAz/QgAGAA//fwAGABD/CAAGABL+pQAGABP+sQAGABT/QgAGABb/QwAGABf+UgAGABj+2QAGABn/ywAGABr/ZAAGABv+awAGABz+WQAGAB7/rQAGAB//YQAGACH/jQAHAAX/OQAHAAb/ZAAHAAf/iAAHAAn/LAAHAAr/iQAHAA//dAAHABD/eQAHABL/lQAHABf/RgAHABv/ZQAHABz/VAAHAB3/WQAHAB7/WQAHAB//VQAHACH/OQAIAAX/UQAIAAb/awAIAAf/eAAIAAn/bQAIAAr/eAAIAAv/iwAIAA3/agAIAA//SAAIABD/AQAIABX/jQAIABf/jgAIAB//lQAIACH/UQAJAAX+1QAJAAb/EwAJAAf/egAJAAn+vwAJAAr/egAJAAv/jQAJAA3/fQAJAA//CQAJABD/iAAJABL/TgAJABP/WgAJABX/jgAJABf+5gAJABj/dQAJABv/FAAJABz/AgAJAB3+9gAJAB7+9gAJAB/++gAJACH+1QAJACL/QgAKAAX/jQAKAAf/lQAKAAn/iwAKAAr/lgAKAA//mAAKABL/lgAKABf/jAAKABj/kQAKABz/kwAKAB//YQAKACH/jQALAAX+3AALAAb/LgALAAf/igALAAn/gAALAAr/iwALAA3/kQALAA/+jAALABL/iwALABP/kQALABf/gQALABj/hgALABz/iAALAB//VgALACH+3AAMAAX/CQAMAAb/QwAMAAf/eAAMAAn+8wAMAAr/eAAMAAv/igAMAA3/fgAMAA//PAAMABD/XQAMABL/UAAMABP/VQAMABX/jAAMABf/FAAMABj/cQAMABv/MwAMABz/IgAMAB3/KgAMAB7/KgAMAB//GwAMACH/CQAMACL/cwANAAX/jQANAAf/lQANAAn/iwANAAr/lgANAA//mAANABL/lgANABf/jAANABz/kwANAB//YQANACH/jQAOAAX/jQAOAAf/lQAOAAn/iwAOAAr/lgAOAA//mAAOABL/lgAOABf/jAAOABz/kwAOAB//YQAOACH/jQAPAAX/HgAPAAb/TgAPAAf/igAPAAn/gAAPAAr/iwAPAA3/kQAPAA//WQAPABL/iwAPABP/kQAPABf/gQAPABj/lAAPABz/iAAPAB//VgAPACH/HgAQAAX/jQAQAAf/lQAQAAj/CgAQAAn/iwAQAAr/lgAQAAz/CwAQAA//ZgAQABD+cQAQABL/lgAQABT/CwAQABb/DQAQABf/jAAQABj/PQAQABz/kwAQAB//YQAQACH/jQARAAX/jQARAAf/KwARAAj/bAARAAn/iwARAAr/lgARAAz/bQARAA//mAARABD+0wARABL+VgARABP+WwARABT/bQARABb/cAARABf+WgARABj+XwARABr/lgARABv+nQARABz+UwARAB7/rQARAB//YQARACH/jQASAAX/jQASAAf/lQASAAn/iwASAAr/lgASAA//mAASABL/lgASABf/jAASABz/kwASAB//YQASACH/jQATAAX/jQATAAf/lQATAAn/iwATAAr/lgATAA//mAATABL/lgATABf/jAATABz/kwATAB//YQATACH/jQAUAAX+1gAUAAb/FAAUAAf/egAUAAn+vwAUAAr/egAUAAv/jQAUAA3/fQAUAA//CQAUABD/iAAUABL/TgAUABP/WwAUABT/nwAUABX/jgAUABf+5gAUABj/dQAUABv/FQAUABz/AwAUAB3+9wAUAB7+9wAUAB/++gAUACH+1gAUACL/QgAVAAX+gAAVAAb+6wAVAAf/jAAVAAn/FwAVAAr/jQAVAAv/jAAVAA3/XQAVAA/+kwAVABD/iAAVABL/igAVABP/kwAVABX/jgAVABf/NQAVABv/VgAVABz/RQAVAB3/RgAVAB7/RgAVAB//RgAVACH+gAAVACL/jwAWAAX+1wAWAAb/FQAWAAf/egAWAAn+wQAWAAr/egAWAAv/jQAWAA3/fgAWAA//BQAWABD/iAAWABL/UAAWABP/XAAWABX/jgAWABf+6AAWABj/dQAWABv/FgAWABz/BAAWAB3++AAWAB7++AAWAB/+/AAWACH+1wAWACL/RAAXAAX/igAXAAf/jQAXAAn/iAAXAAr/kwAXAA//eQAXABD/iAAXABL/iwAXABP/lAAXABf/NgAXABv/VwAXABz/RgAXAB//XwAXACH/igAYAAX/GQAYAAb/RQAYAAf/aAAYAAj/jgAYAAn/DAAYAAr/aAAYAAv/igAYAAz/jwAYAA3/fgAYAA//VAAYABD/WAAYABL+oQAYABP+ogAYABT/jwAYABX/jAAYABb/jwAYABf+iwAYABj/HAAYABv+wAAYABz+rgAYAB3/OQAYAB7/OQAYAB/+zQAYACH/GQAYACL/fQAZAAX+uAAZAAb+zgAZAAf/lQAZAAj/bwAZAAn/iwAZAAr/lgAZAAz/cAAZAA3+xwAZAA/+wwAZABD+1gAZABL/lgAZABT/bwAZABb/cQAZABf/jAAZABj/kQAZABz/kwAZAB//YQAZACH+uAAaAAX+8QAaAAb/JwAaAAf/eAAaAAn+3gAaAAr/eAAaAAv/igAaAA3/fgAaAA//KAAaABD/WQAaABL+oQAaABP+nAAaABX/jAAaABf+mgAaABj/AAAaABv+0AAaABz+vgAaAB3/EQAaAB7/EQAaAB/+kQAaACH+8QAaACL/WwAbAAX/XwAbAAb/dQAbAAf/VQAbAAj/iAAbAAn/XQAbAAr/agAbAAz/igAbAA//iAAbABD/SwAbABL+6AAbABP+9AAbABT/igAbABb/jAAbABf+lQAbABj/HAAbABv+rgAbABz+nAAbAB3/gAAbAB7/gAAbAB//MwAbACH/XwAcAAX+UwAcAAb+agAcAAf/lQAcAAj/RQAcAAn/iwAcAAr/lgAcAAz/RwAcAA3+5gAcAA/+lgAcABD/BwAcABL/lgAcABT/RwAcABb/SAAcABf/jAAcABj/XgAcABz/kwAcAB//YQAcACH+UwAdAAX/jQAdAAf/lQAdAAj/HwAdAAn/iwAdAAr/lgAdAAz/IAAdAA//cQAdABD+swAdABL/lgAdABT/IAAdABb/IgAdABf/jAAdABj/SAAdABz/kwAdAB//YQAdACH/jQAeAAX9owAeAAb+aQAeAAf/lQAeAAj/HwAeAAn/iwAeAAr/lgAeAAz/IAAeAA3+gAAeAA/+lgAeABD+sgAeABL/lgAeABT/IAAeABb/IQAeABf/jAAeABj/SAAeABz/kwAeAB//YQAeACH9owAfAAX/jwAfAAf/kgAfAAj/bgAfAAn/jAAfAAr/lwAfAAz/bwAfABD+1QAfABL/kwAfABT/bwAfABb/cgAfABf/iQAfABj/JwAfABz/kAAfAB//YwAfACH/jwAhAAX9owAhAAb+aQAhAAf/lQAhAAj/HwAhAAn/iwAhAAr/lgAhAAz/IAAhAA3+gAAhAA/+lgAhABD+sgAhABL/lgAhABT/IAAhABb/IQAhABf/jAAhABj/SAAhABz/kwAhAB//YQAhACH9owAiAAX/jQAiAAf/lQAiAAn/iwAiAAr/lgAiAA//mAAiABL/lgAiABf/jAAiABz/kwAiAB//YQAiACH/jQEABAIAAQEBEEFudXJhdGktUmVndWxhcgABAQEf+BAA+BwC+B0D+BkEioscBRf5tAXtD/cPEZ0cDFkSAAMBAQkYH25vdGVxdWFsQW51cmF0aSBSZWd1bGFyQW51cmF0aQAAAQABAQAHAAAMAAAQAAAiHABfAABwAAGHAAAmAgABACkALABSAK8A8gE7AXoCVALyA4ADvQPuBIcEuQTaBUMFjAW9BeYGDwaRBvQHdgfVCHsImgjnCQMJOgmHCcoJ+wokCm0KlwreCwwLjvwEi8n5N8oBycr3jskD9xHKFfk39479N/uOB01MFfgL+bT8C/20Bg78/g783ov3GvkudwGL9xoD9xr5tBX7Gvyp9xoG+xr7nxX3Gvca+xoGDvc8oHb34fca8/cZ+xn3eRKL+m8T2PoG+M8VE+j09xkF/KMGE9ihqMDOBYoG+z0GVkj7ZPueI/saBfc9Bvf2BvsP+zI2+wFXSQX3Pga+zfdm95/19xoF/KIG3PMFDqB29+H3GvfhdxKL9+GL9xoT6BPw+GcE+xr34fcaB/caFvsa9+H3GgcT6Pxn/GcV9xr34fsaBvca+GcV+xr74fcaBg6foHb5tHcBi/mvA/fN+CQV+838JPfO+CQF+yP8JBX3d/e3BYwH93j4kBX7zfwkBYwG+878JAX3Pwb3d/e4BYoH4PcB98z4JAUOqov3GfkvdwG9+bQD9+D3nhWLB/cK93/3Cft/BfcqBvuf+Kr8JP20BfcoBs/3GgX4mYoV+yiLBs37GQX3KQYOUIv3Gvdb9xn3XPcaAfip9xkD+S74yxWrhal/px5/qHqjdqB2oXKbbpgIl25tkWwb/EUG9xn7GgX3wAaYmImGlx+YhpaElIGUgpKAkH8IkH+Ofn4afYh+hn8ehn+EgIKCgoGAhH6GCIV/fol+G/vAi1YGO/sZ9xmL98AGmZiIhpgfl4aVg5SClIKSgJB/CJB/jn5+Gn6IfoZ/HoZ/hICCgoKBgIR+hgiGf36Jfhv7wPsa98AGq6mRl6cfqJikm6ChoKCco5eoCJenkamrGs10w1y4Hrq5osPMGg77KIv3GvsFdvku9xoSi/caE3ATsPeKqxV2u7+AwhvCv5Wgux/7L/IFZmmSmGofa5lvnnOkcqN4p32rCH2shK2wGrCSrZmsHpmrnqejo6Okp56smQiYq66SsBvTynJXwB/q6GawYKhboBmgW1eVVBtUV4B2Wx9admFvZmZnZ25hdlsIE3B2WoBXVBpVlligWh6gWqhhr2awZ7VuvHYIDmWL9xr4qPcaAfip9xkD+Q/4vhV1vG+1ZrBnr2CoW6AIoFpYllQb+54G9xn7GgX3GQavroR+qx+rfah3o3Okcp5vmWsImWqSaWcaZ4RpfWoefWt4b3Nyc3JueGt9CH5raIRmG/sZBvsZ+xoF954Gwr+WoLsfvKC2qK+vr7CntaG8CKC7lb7CGsKBvna7Hg77fIv3Gvdb9xn3XPcaAYv4qQOWBID4qfca/CQH+xn5LhX3GfsaBfgk9xoG/Kn74hX7GfcZB/gk9xn8JAYO+3ugdvee9xv3nfcaAYv3GQP4JQT8JfcZ9574JPcb/CQH+xn4IxX3GfsaBfgk9xoGDpKL9xr3W/cZ91z3GgGL9xoD+JP3MRV8aWaDYxtCS6S/Vx9Xv3LL1BrUpMq/vx7AwMqk1BvVyXFXvx/r6WawYKhboBmgWleVVBv7Ay1kPD4fPD1kLfsCGvsDsy7ZPR492ehj9wMbrqyPlKsfrJOpl6ebqJulnqOhpKGgpJ2m+xm3GHFubXVpewj7A/dEFfddBvcZ9xkF++IGDlqgdvfh9xr34XcBi/cZ+CT3GQP4qfm0Ffvh/CQH+xn7GgX74fcZ9+H4JPvh9xn5tAcO/Wygdvm0dwGL9xkD9xn5MBX7GfcYBf20B4sH9xn3GgUO+5GL9xr7BXb5tHcS99b3GxNw+A7YFYsHi4uLix6/wKbK1Br4qvsb/KoHZn5scHEeE7CLi4uLHsZQBYsH+yz7BRWLB4sHLvdBFSsrBVi/ynHVG/caB4uLi4tnbJilcR73iU8ViwewZwUO+zegdvm0dwGL+OIDw/fsFffu++z77vfsBffu+FwV++777QWLB/iq9+0V+1AG++777QWLB1NTw1QFiwf37vvsBfdQBvwk+CQFDvuQi/ca+S53AYv3GQP3GfcaFfsZ+xoF+Kn3Ggb8qfkuFXUH/OkH9xn3GgX4YwehBw7hoHb5tHcB+TH3GAP4+gT4Jfwn96D3nwX8cvcY+bQH/CT8JPwl+CQFDlmgdvm0dwH4qPcZA/io+bQV/HMH/Kj4cwX7Xgf5LfzqBYwHjAf5sgcO7Iv3Gvio9xoBi/ca+Kj3GwP4JPm0FfsDLWM9Ph89PWMt+wIa+wOzLtk9Hj3Z6GP3Axv3A+iz2dkf2tiz6fcDGvcCY+k82R7ZPS6z+wMb+xoE1MpxV78fv1elTEIaQnJMVlYeV1dMckIbQkukv1cfV79yy9Qa1KTKv78ewMDKpNQbDjOgdvee9xr3nvcaAYv3Gfgk9xkD+OD5ZhW/V0ylQhv8JAb3GfsaBfefBq+qfnGlH6ZxmGtnGmZ9bHFxHnFxbH5nG/ufBvsZ/CT3Gfee958G1Mqlv78fwL+ky9Qa1HHKV8AeDumL9xr4qvcYAYv3Gfiq9xkD+CQW49ijvM4fKuwFc2Nef1kbQUylvlcfWL9wytYa1KbKvr8evr/Kp9Ub1cpvWL8fvlemTEIaWH5dcmMe7CoFvc+j2OMa9wNk6T3ZHto9LbH7Axv7AixlPD0fPD1mLIr7Aor7ArEs2jwIPdnpZfcEGw4goHb5LvcaAfh49xkD+M74ExWruJq9wxrUcclXwB6/V0ylQhv78wbQ+wuafAX3nwavqn5xpR+mcZhsZxpmfmtwcR5xcWx+Zxv7C4z3fPwlBfctBvs497O6nrKrqrgZDkqL9xr7BXb34fcZ91z3Got3Eov3Gfgk9xkTbvhE9+EVp6KBd58fnneWdHAafYh+hn8ehn6EgYKCgoKAhH6GCIZ/fol9G/saB8zCori4H7m5osLLGst0wl25HrheVKJKG/tbBm50lZ93H3ifgqKnGpiNmJCXHpCXkpaUlJWVlZKYkAiQl5iNmRv3GgdKVHRdXh8Ttl5ddFVLGkqiVLhdHl64wnTMGw77+qB2+S73GgGL9xoD+bQE+xoH/S73Gvku9573GgcONYv3GvkudwGL9xn4JPcZA/ip9+EVVXZcZGQeZGRcd1QbVFues2QfZbF4usIa+Gf7GfxnBzCrO8xKHkrM2mvmG+bbq8zMH83Mq9rnGg77qKB2+bR3AYv4bwP5tAT4JP201vcp+9r5HwUO+Lmgdvm0dwGLHAUXA/cp+bQV+ykG99r9H9b3KgX5hfiJFfuP/In7Rff0QPsq95D8ifgk+bQFDr6gdvm0dwGL+a8D9z/5tBX7Pwb3zvwk3/cABfwi/JAV9z8G93f3uDf3AAX4dfgkFfs9Bvt4+7jg+wAFNvsAFfd4+7gF9z0G+8z4JAUOn6B2+bR3AYv5rwP4d/gkFffM+CQF+z0G+3j7uPt397gF+z8G9878JPvO/CQF9z8G93f3uAWKB4wE+3f7uPd397cFDnWL9xr4qPcaAYv5tQP4nvkuFfel9xoFi/2v+xr4ngf7jPyoFYsH+6b7GgX5tfcaBg78VIv3Gvio9xoBi/caA/gk+S4V9xr8JPsaB/0u9xoH9573Gvue+KgGDp+gdvm0dwGL+a8D9834JBX7zfwk9874JAX7I/wkFfd397cFjAf3ePiQFfvN/CQFjAb7zvwkBfc/Bvd397gFigfg9wH3zPgkBQ77z4v3Gvio9xoB9573GgP3nvkuFfyo+577GveeB/ca+S4G9xr8JPsaBw6gdvfh9xr34XcBi/m0A/kL+GcV+/YG9w/3MuD3Ab/NBfs+BlhJ+2b7nyH7GgX4ogb7ZPueVkgFjAb3Pga/zvdk957z9xoFDvteoHb4Xvca92R3AfeP9xkD+Q/45BX7j/dk+xn7ZPuP+xr3j/xe9xn4XvePBg6L91yL9xn3GvcZi/dcEov5tBNoE1j5CPm0FRNo+zD7XAUTWPc+Bvcw91wF/Kv8ZxX7m/sZ9zMGE6j7MftcBfc/BhNo9zD3XAX4a/cZ/AMGE6hqYQWMB0MvBRNo+z0GE1j09xkFE2j7nPcaFfgEBvP3GQX8bAb5FhYi+xkF95v3GQYOi4v5tIsG9xoK9xkL+dwU+fgVAA=="

/***/ }),

/***/ "./static/fonts/ANURATI/Anurati-Regular.ttf":
/*!**************************************************!*\
  !*** ./static/fonts/ANURATI/Anurati-Regular.ttf ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,AAEAAAAPAIAAAwBwRkZUTXmaZBEAABsMAAAAHEdERUYAKQAuAAATcAAAAB5HUE9T5TvBUwAAE8AAAAdKR1NVQrj/uP4AABOQAAAAME9TLzJjRn/lAAABeAAAAGBjbWFw47ntngAAAngAAAF6Z2FzcP//AAMAABNoAAAACGdseWY4Hp2EAAAESAAACgRoZWFkCbWSBAAAAPwAAAA2aGhlYQibBIYAAAE0AAAAJGhtdHhv2wBvAAAB2AAAAKBsb2NhMuwwcAAAA/QAAABSbWF4cABuAD4AAAFYAAAAIG5hbWU7mHrpAAAOTAAABKdwb3N0A3gDtgAAEvQAAAByAAEAAAABAAAKnOVkXw889QALA+gAAAAA0ryjkAAAAADSxapv//4AAAUXAyAAAAAIAAIAAAAAAAAAAQAAA4T+1AAABYn//gAABRcAAQAAAAAAAAAAAAAAAAAAACgAAQAAACgAOwAEAAAAAAACAAAAAQABAAAAQAAAAAAAAAADAu8BkAAFAAQCigJYAAAASwKKAlgAAAFeADIA8AAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAABQWVJTAEAAICJgAyD/OADIA+gAyAAAAAEAAAAAAZADIAAAACAAAgH0AD8AAAAAAU0AAAD6AAABGgAABAwAAANIAAADeAAAA4MAMgMpAAAC0AAAAz4AAAJ8AAACfQAAA2sAAAMzAAAAjAAAAmcAAALBAAACaAAAA7oAAAMyAAADxQAAAwwAAAPC//4C+QAAAyMAAAH+AAADDgAAAlAAAAWJAAADlwAAA3gAAANOAAABpAAAA3gAAAIpAAADSAAAApoAAANIAAAAAAADAAAAAwAAABwAAQAAAAAAdAADAAEAAAAcAAQAWAAAABIAEAADAAIAIQAmACsALwBdAH4gICJg//8AAAAgACYAKwAvAEEAfiAgImD////j/9//2//Y/8f/p+AG3ccAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAwQAAAAABQAAAAAGAAAABwAAAAAAAAAAAAAAAAAAAAAACAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmAAAAAAAAAAAAAAAAJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAKABOAHAAkgCwAQgBRgF8AZoBsgHuAgYCFAI6AlwCcgKIApwCygL0AyYDUAOQA6IDwgPQA+wEFgQ4BE4EZASGBJwEvgTUBQIAAAACAD8AAAG2AyAAAwAHAAA3MxEjAxEhEX36+j4Bdz8Co/0eAyD84AAAAgAAAAAAhgMgAAMABwAAExEjGQE1MxWGhoYDIP3rAhX84IaGAAAAAAEAAAAAA9sDIAAUAAABIQchBwMHIz8CISM3Ezc7AQ8BIQNy/fFRAg5q0jOqNFV7/p6paNA1qQE1FgIPAjtohv71QkJtnoYBCkNDHQAEAAAAAAMgAyAAAwAHAAsADwAAESEVISUhFSEDETMZAiMRAU3+swHTAU3+s4aGhgHThoaG/rMBTf6zAyD+swFNAAAAAAMAAAAAAxsDIAACAAUADgAAATMBMxMVEzMBBzUDIwEjATkB/sar4+Sp/shV46sBOgEBkP5wASQBAf3+cG0B/twBkAAAAgAyAAADUgMgAAcACwAAAQ8BIwkBIycBFyMnAUxCRJQBkAELlnUBTUOVQgEKhIYDIP3q6/6QhYUAAAAAAQAAAAACmgMgADoAAAEUBxYVFAcGBwYHBiMhNSEyNzY3PgE0JicmJyYjISM1OwEhMjc2Nz4BNTQmJyYnJiMhJyEyFxYXFhcWAppGRhIRIR0uKjD+1AEsFREUDQ0QEA0QDxUT/tSFUDUBLBYQFA0NEBANDRQRFf7UhQGxLysuHSEREgI3YkVDZDAqKSEeFRKGBwgODSYmJg0QBgiFCAgODSYUEyYNDggHhhIVHiEpKgABAAAAAAKsAyAAJwAANyYnJicmNTQ3Njc+ATMyFxYXByYjIgcGBwYHBhUUFhcWFxYzFwYjIvZHOTgeICAfNzeSUlRHSTdfTm43MTEkJBUVKiUjMTM1m0dUUiAeODlHS09RS0c3NkAfIDddTRQVJSQwMjY3YiMlFRRnHwAAAQAAAAACmgMgACAAAAEWFAcGBw4BIyE3MzI3Njc2NzY0Jy4BJyYrASchMhceAQJ7Hx8hNTeSUv72hYU3MTMiJBUVFRVKMDE2hYUBClBLSWwCKkemR0o2NkCGFBYkJi8xbDEwShUUhiAgbAAAAwAAAAACFQMgAAQACAAOAAA1NyEVIREhFSEHMyEVISOFAZD96wIV/nCFhQGQ/nCFC3uGAyCGyIUAAAAAAgAAAAACFQMgAAYACgAAETMhFSERIxEhFSGFAZD+cIUCFf5wAZGH/vYDIIYAAAAAAgAAAAAC3gMgACEAJQAAJTY3FwYHBgcGBwYjIiY1NDc2MzIXFhcHJiMiBwYVFBYzMic1IQcB/zQmhR0jJSoqMS42pOx2c6dUSEk3YE5ub05NmnA7OwFOhZ0YKywrHyIXGAwN7KSldXYfIDdeTk5Nb3Cax4WFAAAAAQAAAAACmgMgAAoAAAEzESMRIREjETchAhWFhf5whYUBkAMg/OABTf6zAU2GAAAAAQAAAAAAhQMgAAMAABMRBxGFhQKc/eqGAyAAAAQAAAAAAckDIAAJAAoAEAASAAAlLwE2NREzERQPAScWMxUiJyUXAXolOyiHT71dJzZuTwFVJU0kOyc3Ahb96mxRTa0nhk0kJAAAAAADAAAAAAJOAyAAAQADAAsAABMBEQkDIwEnNwE4AVr+pgIW/nABkLz+pjg4AVoBWP6oAyD+pwFZ/nD+cAFYNzgBWQAAAAIAAAAAAhUDIAADAAkAADchFSERMxURBxGFAZD964WFhoYDIBb+MYYCVQAAAQAAAAADIQMgAAcAABE1CQERIxEBAZEBkIT+9AJmuv5wAZD84AHe/vUAAAABAAAAAAKZAyAABwAAATMRHQEBNQECFIX9ZwIUAyD84gEBAlbK/iEAAgAAAAADIQMgAAwAGgAAATIXFhUUBwYgJhA3NhciBwYVFBYzMjc2NTQmAZCkdnd3dv647HZ0pm9OTZpwb01OnAMgdnWlpnR27AFIdnaGTk1vcJpNTm9unAAAAAABAAAAAAKaAyAAGAAAARYVFAcGIyERIxEzITI3NjU0JyYjISchMgJMTk5Obv71hYUBCzYnKCgnNv71hQGQbgLSUG1wTU7+9gGQJyg2NycnhgAAAAAB//4AAAMgAyAAHwAAISInJjc2NzYgFxYVFAcnNjU0JyYiBwYVFBcWMzI3FwYBkKh0dgICc3QBTnR1SmEmTlHYUU5OT25LPGFkdHamqXJ1dXWmhGVhPUxsUE9PUGxuUE0kYUkAAQAAAAACaQMgABcAAAEGBxMjAxcyNzY1NCcmIyEvASEyFxYVFAI6Lkekmeh3NicoKCc2/vUPRQFfbk5OAX9DHf7hAZEBJyc4NicnD3dOT21VAAAAAQAAAAACmgMgACoAAAEjIicmNTQ3NjMVIgcGBwYHBhUUFxY7ATIXFhQHBiM1Mjc2NzY3NjU0JyYBsMdhRERERGEWERIPDQgHHB4qx2FERUVEYRYREw4OBwgeHgFNREZgXkZFhgcHDw0TERUqHR5ERcBFRIYHBw4OEhMUJiAeAAABAAAAAAGQAyAABgAAESEVIREjEQGQ/vaGAyCG/WYCmgAAAAABAAAAAAKaAyAAEgAAATMUBwYjIiY1ETMRFBcWMzI3NgIVhWJhi4rChTk6VFI7PAFNi2FhwosB0/4tUzk7OzwAAQAAAAAB2wMgAAMAABEzAQeVAUZLAyD9dZUAAAIAAAAABRcDIAADAAkAABsBBwEhMwEDNxOV/Ev+ugSClf5w/EuxAyD+C5YCi/zgAfWW/qAAAAAABAAAAAADGwMgAAMABwALAA8AABsBBwERARcDCQEnEwM3ASOr41T+xgE6VOMCcP7IVeTkVQE4qQMg/txsAZD84AGQbP7cAyD+cGwBJP4EbP5wAAAAAgAAAAADGwMgAAoADQAAAQc1AyMJATMbATMBFQMB41XjqwE6/sar4+Sp/nPjAZBtAf7cAZABkP7cAST+BAH+3QAAAAACAAAAAAMhAyAAAwAHAAABITUhASEVIQIK/fYDG/33Ag/83wKahv1mhgAAAAEAAAAAAZADIAAJAAABIREhFSEjETUhAZD+9gEK/vaGAZACmv3shgKahgAAAwAAAAADGwMgAAIABQAOAAABMwEzExUTMwEHNQMjASMBOQH+xqvj5Kn+yFXjqwE6AQGQ/nABJAEB/f5wbQH+3AGQAAABAAAAAAGQAyAACQAAASE1IRURIyE1IQEK/vYBkIb+9gEKApqGhv1mhgAAAAEAAAAAAyADIAAQAAABMwcDBysBNxMhNxM3Mw8CAnepaNA0qgE10P3yatIzqjRVewHThv72Q0MBCoYBC0JCbZ4AAAAAAQAAAAACewMgAAsAAAEVIxEjESM1MzUzFQJ7+4X7+4UCUIb+NgHKhtDQAAAEAAAAAAMgAyAAAwASABYAGgAAATMHIwMzBzM3FTchFSEHIzcjPQIhByUzFSECdKqcqtEBaalIIQFv/imcq52fAdhoARKe/vkDIMj+9YVcASqFyMiFhoWFhYUAAAAAFAD2AAEAAAAAAAAAPwCAAAEAAAAAAAEABwDQAAEAAAAAAAIABwDoAAEAAAAAAAMAGgEmAAEAAAAAAAQADwFhAAEAAAAAAAUAJwHBAAEAAAAAAAYADwIJAAEAAAAAAAcAUQK9AAEAAAAAAAgAJQNbAAEAAAAAAAkADwOhAAMAAQQJAAAAfgAAAAMAAQQJAAEADgDAAAMAAQQJAAIADgDYAAMAAQQJAAMANADwAAMAAQQJAAQAHgFBAAMAAQQJAAUATgFxAAMAAQQJAAYAHgHpAAMAAQQJAAcAogIZAAMAAQQJAAgASgMPAAMAAQQJAAkAHgOBAEMAbwBwAHkAcgBpAGcAaAB0ACAAMgAwADEANgAgAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZAAuACAAQQBsAGwAIAByAGkAZwBoAHQAcwAgAHIAZQBzAGUAcgB2AGUAZAAuAABDb3B5cmlnaHQgMjAxNiBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC4AAEEAbgB1AHIAYQB0AGkAAEFudXJhdGkAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAADEALgAwADAAMAA7AFAAWQBSAFMAOwBBAG4AdQByAGEAdABpAC0AUgBlAGcAdQBsAGEAcgAAMS4wMDA7UFlSUztBbnVyYXRpLVJlZ3VsYXIAAEEAbgB1AHIAYQB0AGkALQBSAGUAZwB1AGwAYQByAABBbnVyYXRpLVJlZ3VsYXIAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADAAOwBQAFMAIAAwADAAMQAuADAAMAAxADsAaABvAHQAYwBvAG4AdgAgADEALgAwAC4ANQA2AABWZXJzaW9uIDEuMDAwO1BTIDAwMS4wMDE7aG90Y29udiAxLjAuNTYAAEEAbgB1AHIAYQB0AGkALQBSAGUAZwB1AGwAYQByAABBbnVyYXRpLVJlZ3VsYXIAAFAAbABlAGEAcwBlACAAcgBlAGYAZQByACAAdABvACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAHMAZQBjAHQAaQBvAG4AIABmAG8AcgAgAHQAaABlACAAZgBvAG4AdAAgAHQAcgBhAGQAZQBtAGEAcgBrACAAYQB0AHQAcgBpAGIAdQB0AGkAbwBuACAAbgBvAHQAaQBjAGUAcwAuAABQbGVhc2UgcmVmZXIgdG8gdGhlIENvcHlyaWdodCBzZWN0aW9uIGZvciB0aGUgZm9udCB0cmFkZW1hcmsgYXR0cmlidXRpb24gbm90aWNlcy4AAFAAWQBSAFMAIABGAG8AbgB0AGwAYQBiACAATAB0AGQALgAgAC8AIABNAGEAZABlACAAdwBpAHQAaAAgAEYAbwBuAHQATABhAGIAAFBZUlMgRm9udGxhYiBMdGQuIC8gTWFkZSB3aXRoIEZvbnRMYWIAAEUAbQBtAGUAcgBhAG4AIABSAGkAYwBoAGEAcgBkAABFbW1lcmFuIFJpY2hhcmQAAAACAAAAAAAA/4MAMgAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAABAAIAAwAEAAkADgASACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABhAIIAjwAAAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMAJwABAAQAAAACAAAAAAABAAAACgAsAC4AAkRGTFQADmxhdG4AGAAEAAAAAP//AAAABAAAAAD//wAAAAAAAAABAAAACgAwAD4AAkRGTFQADmxhdG4AGgAEAAAAAP//AAEAAAAEAAAAAP//AAEAAAABa2VybgAIAAAAAQAAAAEABAACAAAAAQAIAAEG6gAEAAAAHgBGAGwAtgEMAUoBgAHWAgQCPgKUApQCvgL4AzoClAKUA4wD5gQ4BI4ExAUqBXQFygYgBmoAbAasAGwClAAJAAf/jQAJ/5UAC/+LAAz/lgAU/5YAGf+MAB7/kwAh/2EAI/+NABIAB/2jAAj+aQAJ/5UACv8fAAv/iwAM/5YADv8gAA/+gAAR/pYAEv6yABT/lgAW/yAAGP8hABn/jAAa/0gAHv+TACH/YQAj/aMAFQAH/40ACf8rAAr/QQAL/4sADP+WAA7/QgAR/38AEv8IABT+pQAV/rEAFv9CABj/QwAZ/lIAGv7ZABv/ywAc/2QAHf5rAB7+WQAg/60AIf9hACP/jQAPAAf/OQAI/2QACf+IAAv/LAAM/4kAEf90ABL/eQAU/5UAGf9GAB3/ZQAe/1QAH/9ZACD/WQAh/1UAI/85AA0AB/9RAAj/awAJ/3gAC/9tAAz/eAAN/4sAD/9qABH/SAAS/wEAF/+NABn/jgAh/5UAI/9RABUAB/7VAAj/EwAJ/3oAC/6/AAz/egAN/40AD/99ABH/CQAS/4gAFP9OABX/WgAX/44AGf7mABr/dQAd/xQAHv8CAB/+9gAg/vYAIf76ACP+1QAk/0IACwAH/40ACf+VAAv/iwAM/5YAEf+YABT/lgAZ/4wAGv+RAB7/kwAh/2EAI/+NAA4AB/7cAAj/LgAJ/4oAC/+AAAz/iwAP/5EAEf6MABT/iwAV/5EAGf+BABr/hgAe/4gAIf9WACP+3AAVAAf/CQAI/0MACf94AAv+8wAM/3gADf+KAA//fgAR/zwAEv9dABT/UAAV/1UAF/+MABn/FAAa/3EAHf8zAB7/IgAf/yoAIP8qACH/GwAj/wkAJP9zAAoAB/+NAAn/lQAL/4sADP+WABH/mAAU/5YAGf+MAB7/kwAh/2EAI/+NAA4AB/8eAAj/TgAJ/4oAC/+AAAz/iwAP/5EAEf9ZABT/iwAV/5EAGf+BABr/lAAe/4gAIf9WACP/HgAQAAf/jQAJ/5UACv8KAAv/iwAM/5YADv8LABH/ZgAS/nEAFP+WABb/CwAY/w0AGf+MABr/PQAe/5MAIf9hACP/jQAUAAf/jQAJ/ysACv9sAAv/iwAM/5YADv9tABH/mAAS/tMAFP5WABX+WwAW/20AGP9wABn+WgAa/l8AHP+WAB3+nQAe/lMAIP+tACH/YQAj/40AFgAH/tYACP8UAAn/egAL/r8ADP96AA3/jQAP/30AEf8JABL/iAAU/04AFf9bABb/nwAX/44AGf7mABr/dQAd/xUAHv8DAB/+9wAg/vcAIf76ACP+1gAk/0IAFAAH/oAACP7rAAn/jAAL/xcADP+NAA3/jAAP/10AEf6TABL/iAAU/4oAFf+TABf/jgAZ/zUAHf9WAB7/RQAf/0YAIP9GACH/RgAj/oAAJP+PABUAB/7XAAj/FQAJ/3oAC/7BAAz/egAN/40AD/9+ABH/BQAS/4gAFP9QABX/XAAX/44AGf7oABr/dQAd/xYAHv8EAB/++AAg/vgAIf78ACP+1wAk/0QADQAH/4oACf+NAAv/iAAM/5MAEf95ABL/iAAU/4sAFf+UABn/NgAd/1cAHv9GACH/XwAj/4oAGQAH/xkACP9FAAn/aAAK/44AC/8MAAz/aAAN/4oADv+PAA//fgAR/1QAEv9YABT+oQAV/qIAFv+PABf/jAAY/48AGf6LABr/HAAd/sAAHv6uAB//OQAg/zkAIf7NACP/GQAk/30AEgAH/rgACP7OAAn/lQAK/28AC/+LAAz/lgAO/3AAD/7HABH+wwAS/tYAFP+WABb/bwAY/3EAGf+MABr/kQAe/5MAIf9hACP+uAAVAAf+8QAI/ycACf94AAv+3gAM/3gADf+KAA//fgAR/ygAEv9ZABT+oQAV/pwAF/+MABn+mgAa/wAAHf7QAB7+vgAf/xEAIP8RACH+kQAj/vEAJP9bABUAB/9fAAj/dQAJ/1UACv+IAAv/XQAM/2oADv+KABH/iAAS/0sAFP7oABX+9AAW/4oAGP+MABn+lQAa/xwAHf6uAB7+nAAf/4AAIP+AACH/MwAj/18AEgAH/lMACP5qAAn/lQAK/0UAC/+LAAz/lgAO/0cAD/7mABH+lgAS/wcAFP+WABb/RwAY/0gAGf+MABr/XgAe/5MAIf9hACP+UwAQAAf/jQAJ/5UACv8fAAv/iwAM/5YADv8gABH/cQAS/rMAFP+WABb/IAAY/yIAGf+MABr/SAAe/5MAIf9hACP/jQAPAAf/jwAJ/5IACv9uAAv/jAAM/5cADv9vABL+1QAU/5MAFv9vABj/cgAZ/4kAGv8nAB7/kAAh/2MAI/+PAAIAAwAEAAQAAAAHACEAAQAjACQAHAAAAAAAAQAAAADUGBYRAAAAANK8o5AAAAAA0sWqbw=="

/***/ }),

/***/ "./static/public/css/style.css":
/*!*************************************!*\
  !*** ./static/public/css/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./static/public/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./static/public/icons/access.svg":
/*!****************************************!*\
  !*** ./static/public/icons/access.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjQwMyA3LjA1NmwtLjE3Ni0uMTc2YTIuMjUxIDIuMjUxIDAgMCAxIDAtMy4xODJsMS45NDUtMS45NDRhNC4wMDEgNC4wMDEgMCAwIDEgNS42NTYgMGwxLjQxNSAxLjQxNGE0LjAwMiA0LjAwMiAwIDAgMSAwIDUuNjU3bC0xLjk0NSAxLjk0NGEyLjI1MSAyLjI1MSAwIDAgMS0zLjE4MiAwbC0uMTc3LS4xNzctMS4yMzIgMS4yMzFjLS4xMzEuMTMxLS40MDguMzkxLS44NDIuMzkxLS44MSAwLTEuOTczLS4yNDctMi4yMTkgMC0uMjYyLjI1OS0uMTUyLjY1NS0uMTUgMS43ODEuMDE5LjY0My0uNzMxIDEtMS40OTYgMUgyYy0uNjU5IDAtMS0uMjk1LTEtMXYtMi4wMThjMC0uMzIuMTIyLS42NC4zNjYtLjg4M2w0LjAzNy00LjAzOHptNy4wMDItLjc3N2ExIDEgMCAwIDAgMC0xLjQxNGwtMS4yNzMtMS4yNzRhMSAxIDAgMCAwLTEuNDE0IDEuNDE0bDEuMjczIDEuMjc0YTEgMSAwIDAgMCAxLjQxNCAweiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/public/icons/arrow_previous.svg":
/*!************************************************!*\
  !*** ./static/public/icons/arrow_previous.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjMwNCA3LjI4MWwzLjA0LTMuMDM5YTEgMSAwIDAgMSAxLjQxNCAxLjQxNEw2LjQxNCA3aDUuNjM3YTEgMSAwIDAgMSAwIDJINi40MTRsMS4zNDQgMS4zNDRhMSAxIDAgMCAxLTEuNDE0IDEuNDE0bC0zLjA0LTMuMDM5LS4wMTEtLjAxMmEuOTk3Ljk5NyAwIDAgMSAwLTEuNDE0bC4wMTEtLjAxMnoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/public/icons/close.svg":
/*!***************************************!*\
  !*** ./static/public/icons/close.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjU4NiA4TDQuMjkzIDUuNzA3YS45OTkuOTk5IDAgMSAxIDEuNDE0LTEuNDE0TDggNi41ODZsMi4yOTMtMi4yOTNhMSAxIDAgMCAxIDEuNDE0IDEuNDE0TDkuNDE0IDhsMi4yOTMgMi4yOTNhMSAxIDAgMCAxLTEuNDE0IDEuNDE0TDggOS40MTRsLTIuMjkzIDIuMjkzYTEgMSAwIDAgMS0xLjQxNC0xLjQxNEw2LjU4NiA4eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/public/icons/crown.svg":
/*!***************************************!*\
  !*** ./static/public/icons/crown.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBkPSJNNTI4IDQ0OEgxMTJjLTguOCAwLTE2IDcuMi0xNiAxNnYzMmMwIDguOCA3LjIgMTYgMTYgMTZoNDE2YzguOCAwIDE2LTcuMiAxNi0xNnYtMzJjMC04LjgtNy4yLTE2LTE2LTE2em02NC0zMjBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4IDAgNy4xIDEuNiAxMy43IDQuNCAxOS44TDQ3NiAyMzkuMmMtMTUuNCA5LjItMzUuMyA0LTQ0LjItMTEuNkwzNTAuMyA4NUMzNjEgNzYuMiAzNjggNjMgMzY4IDQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4cy00OCAyMS41LTQ4IDQ4YzAgMTUgNyAyOC4yIDE3LjcgMzdsLTgxLjUgMTQyLjZjLTguOSAxNS42LTI4LjkgMjAuOC00NC4yIDExLjZsLTcyLjMtNDMuNGMyLjctNiA0LjQtMTIuNyA0LjQtMTkuOCAwLTI2LjUtMjEuNS00OC00OC00OFMwIDE0OS41IDAgMTc2czIxLjUgNDggNDggNDhjMi42IDAgNS4yLS40IDcuNy0uOEwxMjggNDE2aDM4NGw3Mi4zLTE5Mi44YzIuNS40IDUuMS44IDcuNy44IDI2LjUgMCA0OC0yMS41IDQ4LTQ4cy0yMS41LTQ4LTQ4LTQ4eiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBGcmVlIDUuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tCkxpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKQotLT4="

/***/ }),

/***/ "./static/public/icons/delete.svg":
/*!****************************************!*\
  !*** ./static/public/icons/delete.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi40MzcgNmEuNDYzLjQ2MyAwIDAgMSAuNDY0LjQ4OWwtLjM2NyA2LjY3OWMwIDEuMTA0LS45MTQgMS44NC0yLjAxOCAxLjg0SDUuNTQ4Yy0xLjEwMyAwLTIuMDE3LS42ODYtMi4wMTctMS43OWwtLjQzNi02LjcyNEEuNDYyLjQ2MiAwIDAgMSAzLjU1OCA2aDguODc5ek0yLjEyOCA1YS41MjkuNTI5IDAgMCAxLS41MzEtLjUyNWwuMDAxLS4wMTJjMC0uNDE0LjI1MS0uNzY5LjYwOC0uOTIyLjQ1NS0uMjQxIDEuNjgxLS40MzkgMy4yOTItLjU0MlYxLjQxQzUuNDk4LjYzMiA2LjEzIDAgNi45MDggMGgyLjE4NGMuNzc4IDAgMS40MS42MzIgMS40MSAxLjQxdjEuNTg5YzEuNjExLjEwMyAyLjgzNy4zMDEgMy4yOTIuNTQyLjM1Ny4xNTMuNjA4LjUwOC42MDguOTIyIDAgLjI5Ny0uMjQuNTM3LS41MzcuNTM3SDIuMTI4em02LjU3MS0zLjQwN0g3LjMwMUEuMzAxLjMwMSAwIDAgMCA3IDEuODk0djEuMDQxYTQ2LjQ1NCA0Ni40NTQgMCAwIDEgMiAwVjEuODk0YS4zMDEuMzAxIDAgMCAwLS4zMDEtLjMwMXoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/public/icons/done.svg":
/*!**************************************!*\
  !*** ./static/public/icons/done.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS43NSA1bC04IDgtMy41LTMuNUMzLjc1IDkgMyA5IDIuNSA5LjVzLS41IDEuMjUgMCAxLjc1bDQuMzc1IDQuMzc1Yy4yNS4yNS41LjM3NS44NzUuMzc1cy42MjUtLjEyNS44NzUtLjM3NUwxNy41IDYuNzVjLjUtLjUuNS0xLjI1IDAtMS43NXMtMS4yNS0uNS0xLjc1IDB6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/icons/drop_down.svg":
/*!*******************************************!*\
  !*** ./static/public/icons/drop_down.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjIyOCA2LjYzNUExIDEgMCAwIDEgNSA1aDZhMSAxIDAgMCAxIC43NzIgMS42MzVsLTIuOTY0IDMuOTU0YS45OTkuOTk5IDAgMCAxLTEuNjE2IDBMNC4yMjggNi42MzV6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/icons/favicon.ico":
/*!*****************************************!*\
  !*** ./static/public/icons/favicon.ico ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./static/public/icons/fb.svg":
/*!************************************!*\
  !*** ./static/public/icons/fb.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjYxNCA4LjE0N2gyLjA5N3MuMjE3LS42NjMuMjg5LTEuNjJ2LS4xNDguMDc0LS4zNjhIOC41NDJ2LTIuMzZjMC0uMjIuMzYyLS41OS42NS0uNTloMS41MTlWMUg5LjQxQzYuNjYzIDEgNi40NDYgMy41MDUgNi40NDYgMy44NzR2Mi4yODRINXYyLjIxaDEuNDQ2VjE1aDIuMTY4VjguMTQ3eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/public/icons/game1.svg":
/*!***************************************!*\
  !*** ./static/public/icons/game1.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAzYzEuNjU2IDAgMyAxLjM0NCAzIDN2NWEzLjAwMSAzLjAwMSAwIDAgMS01Ljg1MS45MzVDOS45NTQgMTEuNDAxIDkuNTMxIDExIDkgMTFINi45OTZjLS41NTIgMC0uOTI5LjM2Ny0xLjE2NyAxQTMuMDAxIDMuMDAxIDAgMCAxIDAgMTFWNmMwLTEuNjU2IDEuMzQ0LTMgMy0zaDEwem0tLjg4MSA1LjM4N2EuODg3Ljg4NyAwIDEgMS0xLjI1NSAxLjI1NC44ODcuODg3IDAgMCAxIDEuMjU1LTEuMjU0ek0zLjg3NyA1LjQ4NUgzLjEyYS4zNzguMzc4IDAgMCAwLS4zNzguMzc4di44NzhoLS44ODRhLjM4LjM4IDAgMCAwLS4zNzkuMzh2Ljc1OWMwIC4yMDkuMTcuMzc5LjM3OS4zNzloLjg4NHYuODc4YzAgLjIwOS4xNjkuMzc4LjM3OC4zNzhoLjc1N2EuMzc4LjM3OCAwIDAgMCAuMzc4LS4zNzh2LS44NzhoLjg4N2EuMzguMzggMCAwIDAgLjM3OS0uMzc5di0uNzU5YS4zOC4zOCAwIDAgMC0uMzc5LS4zOGgtLjg4N3YtLjg3OGEuMzc4LjM3OCAwIDAgMC0uMzc4LS4zNzh6bTkuODYzIDEuMzg4YS44ODcuODg3IDAgMSAxLTEuMjU1IDEuMjU0Ljg4Ny44ODcgMCAwIDEgMS4yNTUtMS4yNTR6bS0zLjIyNiAwYS44ODcuODg3IDAgMSAxLTEuMjU1IDEuMjU0Ljg4Ny44ODcgMCAwIDEgMS4yNTUtMS4yNTR6bTEuNjA1LTEuNTE0YS44ODcuODg3IDAgMSAxLTEuMjU1IDEuMjU0Ljg4Ny44ODcgMCAwIDEgMS4yNTUtMS4yNTR6TTkgMkg2LjY3MWExIDEgMCAwIDEgMC0ySDlhMSAxIDAgMCAxIDAgMnoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/public/icons/hexagon.svg":
/*!*****************************************!*\
  !*** ./static/public/icons/hexagon.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE3NCIgaGVpZ2h0PSIyMDAiIHZpZXdib3g9IjAgMCAxNzMuMjA1MDgwNzU2ODg3NzIgMjAwIiA+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNODYuNjAyNTQwMzc4NDQzODYgMEwxNzMuMjA1MDgwNzU2ODg3NzIgNTBMMTczLjIwNTA4MDc1Njg4NzcyIDE1MEw4Ni42MDI1NDAzNzg0NDM4NiAyMDBMMCAxNTBMMCA1MFoiPjwvcGF0aD4KPC9zdmc+"

/***/ }),

/***/ "./static/public/icons/ok.svg":
/*!************************************!*\
  !*** ./static/public/icons/ok.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDguMjYyYzEuOTk5IDAgMy41ODQtMS42MDYgMy41ODQtMy42MzFDMTEuNTg0IDIuNjc2IDkuOTk5IDEgOCAxUzQuNDE2IDIuNjA2IDQuNDE2IDQuNjNjMCAyLjAyNiAxLjU4NSAzLjYzMiAzLjU4NCAzLjYzMnptMC01LjA5N2MuODI3IDAgMS41MTYuNjk4IDEuNTE2IDEuNDY2IDAgLjgzOC0uNjg5IDEuNDY2LTEuNTE2IDEuNDY2LS44MjcgMC0xLjUxNi0uNjk4LTEuNTE2LTEuNDY2UzcuMTczIDMuMTY1IDggMy4xNjV6bTEuNDQ3IDguMDNsMi4xMzcgMi4wMjRhMS4wMjIgMS4wMjIgMCAwIDEgMCAxLjQ2NyAxLjA3MiAxLjA3MiAwIDAgMS0xLjUxNiAwbC0yLTEuOTU1LTEuOTk4IDEuOTU1Yy0uMjA3LjIxLS40ODIuMjgtLjc1OC4yOHMtLjU1MS0uMDctLjc1OC0uMjhhMS4wMjIgMS4wMjIgMCAwIDEgMC0xLjQ2N2wxLjk5OS0yLjAyNGMtLjY5LS4xNC0xLjQ0OC0uNDItMi4wNjgtLjgzOC0uNDgyLS4zNS0uNjItLjk3OC0uMzQ0LTEuNDY3LjI3NS0uNDg5Ljk2NC0uNjI4IDEuNDQ3LS4zNDkgMS40NDcuOTA4IDMuMzc3LjkwOCA0LjgyNCAwIC40ODMtLjI4IDEuMTcyLS4xNCAxLjQ0Ny4zNS4yNzYuNDg4LjEzOCAxLjE4Ni0uMzQ0IDEuNDY2LS42Mi40MTktMS4zMS42OTgtMi4wNjguODM4eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/public/icons/ru.png":
/*!************************************!*\
  !*** ./static/public/icons/ru.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0d31ef75adef220e73f0cb93a84a7422.png";

/***/ }),

/***/ "./static/public/icons/show.svg":
/*!**************************************!*\
  !*** ./static/public/icons/show.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEuNDg4Yy01LjMwMiAwLTggNS4yMS04IDYuNTEyIDAgMS4zMDIgMi43OTEgNi41MTIgOCA2LjUxMlMxNiA5LjMwMiAxNiA4YzAtMS4zMDItMi42OTgtNi41MTItOC02LjUxMnptMCAxMC4yMzNBMy43MzEgMy43MzEgMCAwIDEgNC4yNzkgOCAzLjczMSAzLjczMSAwIDAgMSA4IDQuMjc5IDMuNzMxIDMuNzMxIDAgMCAxIDExLjcyMSA4IDMuNzMxIDMuNzMxIDAgMCAxIDggMTEuNzIxek04IDZjMS4xNDMgMCAyIC45NTMgMiAyIDAgMS4xNDMtLjk1MiAyLTIgMi0xLjE0MyAwLTItLjk1Mi0yLTIgMC0xLjE0Mi44NTctMiAyLTJ6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/icons/sign_in.svg":
/*!*****************************************!*\
  !*** ./static/public/icons/sign_in.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjU5NyAyLjAxMWEuNTk2LjU5NiAwIDAgMC0uNTMxLjMyM2wtLjAwNC4wMDhhMS4wODcgMS4wODcgMCAwIDEtMS45NjUtLjkxOWwuMTM4LS4zNTMuMDAxLS4wMDJBMiAyIDAgMCAxIDcgLjAxMWg3YTIgMiAwIDAgMSAyIDJWMTEuNWMwIDEuNzY4LTEuNTk5IDIuNTY4LTEuNTk5IDIuNTY4bC0yLjY4NCAxLjc5MS0uMDAxLjAwMWExLjE2NCAxLjE2NCAwIDAgMS0xLjcxOC0xLjAyN2wuMDAxLS4xNTV2LS42NjdINi45OTNhMi4wMDEgMi4wMDEgMCAwIDEtMS43NjQtMS4wNThsLS4wMDEtLjAwMS0uMTM4LS4zNTNhMS4wODcgMS4wODcgMCAwIDEgMS45NjUtLjkybC4wMDguMDE1Yy4xLjE4OC4yOTguMzE3LjUyNy4zMTdoMi40MDlsLjAwMS0zVjUuNzAzYzAtMS43OTcgMS41MDMtMi40NjMgMS41MDMtMi40NjNsMi40MjItMS4yMjlINy41OTd6bS0zLjAxMSA0bC0uMjkzLS4yOTNhMSAxIDAgMCAxIDEuNDE0LTEuNDE0bDEuOTg2IDEuOTg1LjAxNC4wMTVhLjk4Ni45ODYgMCAwIDEgLjI5Mi42NjRMOCA2Ljk5OXYuMDQzbC0uMDAxLjAwMXYuMDIybC0uMDAxLjAwMXYuMDExYS44NDQuODQ0IDAgMCAxLS4wMTIuMTAxbC0uMDAxLjAwNHYuMDAzbC0uMDAxLjAwM3YuMDA0bC0uMDAxLjAwMnYuMDAxYS45ODcuOTg3IDAgMCAxLS4yNzYuNTIzbC0uMDE0LjAxNC0xLjk4NiAxLjk4NmExIDEgMCAwIDEtMS40MTQtMS40MTRsLjI5My0uMjkzSDFhMSAxIDAgMCAxIDAtMmgzLjU4NnoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/public/icons/sign_out.svg":
/*!******************************************!*\
  !*** ./static/public/icons/sign_out.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAxMS40ODljMCAxLjc2OC0xLjU5OSAyLjU2OC0xLjU5OSAyLjU2OGwtMi42ODQgMS43OTEtLjAwMS4wMDFhMS4xNjQgMS4xNjQgMCAwIDEtMS43MTgtMS4wMjdsLjAwMS0uMTU1VjE0SDdhMiAyIDAgMCAxLTItMnYtMmExIDEgMCAwIDEgMiAwdjEuNDAzYzAgLjMyOS4yNjcuNTk3LjU5Ny41OTdoMi40MDJMMTAgOVY1LjY5MmMwLTEuNzk2IDEuNTAzLTIuNDYzIDEuNTAzLTIuNDYzbDIuMjI4LTEuMTMxQS41OTQuNTk0IDAgMCAwIDEzLjQwMyAySDcuNTk3QS41OTcuNTk3IDAgMCAwIDcgMi41OTdWNGExIDEgMCAwIDEtMiAwVjJhMiAyIDAgMCAxIDItMmg3YTIgMiAwIDAgMSAyIDJ2OS40ODl6TS4zMDcgNi4yNzhsMS45ODYtMS45ODVhMSAxIDAgMCAxIDEuNDE0IDEuNDE0TDMuNDE0IDZIN2ExIDEgMCAwIDEgMCAySDMuNDE0bC4yOTMuMjkzYTEgMSAwIDAgMS0xLjQxNCAxLjQxNEwuMzA3IDcuNzIybC0uMDE0LS4wMTVhLjk4My45ODMgMCAwIDEtLjI3Ni0uNTIzdi0uMDAxbC0uMDAxLS4wMDF2LS4wMDVsLS4wMDEtLjAwM3YtLjAwM2wtLjAwMS0uMDAzdi0uMDAxYS44Mi44MiAwIDAgMS0uMDEyLS4xMDF2LS4wMTFsLS4wMDEtLjAwMXYtLjAyMkgwdi0uMDYzbC4wMDEtLjAwMXYtLjAxYS45ODUuOTg1IDAgMCAxIC4yOTItLjY2NWwuMDE0LS4wMTV6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/icons/user.svg":
/*!**************************************!*\
  !*** ./static/public/icons/user.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjQ4OCA4LjQwNEEzIDMgMCAwIDEgNSA1LjgxM1YzLjU0NGEzLjAwMSAzLjAwMSAwIDAgMSA2IDB2Mi4yNjlhMyAzIDAgMCAxLTEuNDg4IDIuNTkxVjkuMkE0LjUwMiA0LjUwMiAwIDAgMSAxNCAxMy43di4zYTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xdi0uM2MwLTIuNDggMi4wMS00LjQ5NCA0LjQ4OC00LjV2LS43OTZ6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/icons/user_edit.svg":
/*!*******************************************!*\
  !*** ./static/public/icons/user_edit.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjYyNyAxMy4yMDNsNC4yMzctNC4yMzcgMi4xNyAyLjE3LTMuMTUyIDMuMTUyLTEuMDg1IDEuMDg1Yy0uMDAxLjAwMS0uMjQzLjIyNS0uNzEyLjMxNGwtMS42MjEuMzA2YS40MzguNDM4IDAgMCAxLS4zNi0uMDk3LjQzOC40MzggMCAwIDEtLjA5Ny0uMzZsLjMwNi0xLjYyMWMuMDg5LS40NjguMzEyLS43MS4zMTQtLjcxMnpNNS41NTcgMTRIMi4wMTNhMSAxIDAgMCAxLTEtMXYtLjNjMC0yLjQ4IDIuMDEtNC40OTQgNC40ODgtNC41di0uNzk2YTMgMyAwIDAgMS0xLjQ4OC0yLjU5MVYzYTMuMDAxIDMuMDAxIDAgMCAxIDYgMHYxLjgxM2EzIDMgMCAwIDEtMS40ODggMi41OTFWOC4yYTQuNTIgNC41MiAwIDAgMSAxLjE5OS4xNjUgMjQ3Ny43MyAyNDc3LjczIDAgMCAwLTMuMzI2IDMuMzI5Yy0uMDA0LjAwNC0uNTA5LjU1Mi0uNzEgMS42MTFMNS41NTcgMTR6bTguOTk0LTYuODEyYS42NDMuNjQzIDAgMCAwLS45MDkgMGwtLjg1Ni44NTYgMi4xNyAyLjE3Ljg1Ni0uODU2YS42NDMuNjQzIDAgMCAwIDAtLjkwOWwtMS4yNjEtMS4yNjF6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/icons/users.svg":
/*!***************************************!*\
  !*** ./static/public/icons/users.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAxNUg1YTEgMSAwIDAgMS0xLTF2LS4zYzAtMi40OCAyLjAxLTQuNDk0IDQuNDg4LTQuNXYtLjc5NkEzIDMgMCAwIDEgNyA1LjgxM1YzLjU0NGEzLjAwMSAzLjAwMSAwIDAgMSA2IDB2Mi4yNjlhMyAzIDAgMCAxLTEuNDg4IDIuNTkxVjkuMkE0LjUwMiA0LjUwMiAwIDAgMSAxNiAxMy43di4zYTEgMSAwIDAgMS0xIDF6TTIuNTQxIDEzSC43NTNBLjc1NC43NTQgMCAwIDEgMCAxMi4yNDdhMy4zOTIgMy4zOTIgMCAwIDEgMy4yMDYtMy4zODV2LS41NzRhMi4xNDIgMi4xNDIgMCAwIDEtMS4wNjMtMS44NVY1LjE0M0EyLjE0NCAyLjE0NCAwIDAgMSA1LjUwNCAzLjM4bC0uMDA0LjE1NGMwIC43ODUtLjAwNiAxLjU3MS4wMDEgMi4zNTYuMDA2LjI1My4wMjkuNTA1LjA3Ni43NTUuMDczLjM4OS4xOTkuNzYzLjM2OCAxLjEybC4wMDkuMDE3YTIuMTYzIDIuMTYzIDAgMCAxLS41ODguNTA2di4yOTZhNi4wMzUgNi4wMzUgMCAwIDAtMi42MzkgMy40NzcgNiA2IDAgMCAwLS4xODYuOTM5eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/public/icons/vk.svg":
/*!************************************!*\
  !*** ./static/public/icons/vk.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS42MjMgMy45MDFjLjExOS0uMzczIDAtLjY0NC0uNTI1LS42NDRoLTEuNzQ1Yy0uNDQxIDAtLjY0NC4yMzgtLjc2My40OTIgMCAwLS44OTggMi4xNjktMi4xNTIgMy41NzUtLjQwNi40MDctLjU5My41NDItLjgxMy41NDItLjExOSAwLS4yNzEtLjEzNS0uMjcxLS41MDhWMy44ODRjMC0uNDQtLjEzNi0uNjQ0LS41MDktLjY0NEg2LjFjLS4yNzEgMC0uNDQuMjA0LS40NC40MDcgMCAuNDI0LjYyNy41MjUuNjk0IDEuNzEydjIuNTc1YzAgLjU1OS0uMTAxLjY2MS0uMzIyLjY2MS0uNTkzIDAtMi4wMzMtMi4xODYtMi44OTctNC42NzctLjE3LS40OTEtLjMzOS0uNjc4LS43OC0uNjc4SC41OTNjLS41MDggMC0uNTkzLjIzOC0uNTkzLjQ5MiAwIC40NTcuNTkzIDIuNzYyIDIuNzYyIDUuODEyIDEuNDQgMi4wODQgMy40OTEgMy4yMDMgNS4zMzggMy4yMDMgMS4xMTggMCAxLjI1NC0uMjU1IDEuMjU0LS42Nzh2LTEuNTc2YzAtLjUwOC4xMDEtLjU5My40NTctLjU5My4yNTQgMCAuNzEyLjEzNSAxLjc0NiAxLjEzNSAxLjE4NiAxLjE4NiAxLjM4OSAxLjcyOSAyLjA1IDEuNzI5aDEuNzQ1Yy41MDkgMCAuNzQ2LS4yNTUuNjEtLjc0Ni0uMTUyLS40OTEtLjcyOC0xLjIwMy0xLjQ3NC0yLjA1LS40MDctLjQ3NS0xLjAxNy0xLTEuMjAzLTEuMjU0LS4yNTQtLjMzOS0uMTg2LS40NzUgMC0uNzgtLjAxNyAwIDIuMTE4LTMuMDE2IDIuMzM4LTQuMDMzIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/public/images/hexagon.jpg":
/*!******************************************!*\
  !*** ./static/public/images/hexagon.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b1a81f232c0cec19ed63b2c7f24e56e9.jpg";

/***/ }),

/***/ "./static/public/js/ajax.js":
/*!**********************************!*\
  !*** ./static/public/js/ajax.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajax; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The class implements methods for calling communicating with the server API
 */
var ajax =
/*#__PURE__*/
function () {
  function ajax() {
    _classCallCheck(this, ajax);
  }

  _createClass(ajax, null, [{
    key: "_ajax",

    /**
     * @param {string} method HTTP Method to use
     * @param {string} path Path to send the query to
     * @param {Object} body Body of the query (will be serialized as json)
     * @param {string} mode cors/no-cors/*same-origin, see fetch docs
     * @return {Promise} Promise for the HTTP request
     * @private
     */
    value: function _ajax(_ref) {
      var method = _ref.method,
          path = _ref.path,
          body = _ref.body,
          _ref$mode = _ref.mode,
          mode = _ref$mode === void 0 ? 'cors' : _ref$mode;
      var headers = new Headers();
      var csrfToken = getSingleCookie('csrf');

      if (csrfToken) {
        headers.append('X-CSRF-Token', csrfToken);
      }

      if (body) {
        headers.append('Content-Type', 'application/json; charset=utf-8');
        body = JSON.stringify(body);
      }

      var init = {
        headers: headers,
        method: method,
        mode: mode,
        credentials: 'include'
      };

      if (body) {
        init.body = body;
      }

      return fetch(path, init);
    }
    /**
     * @param {string} path Path to send the query to
     * @param {Object} body Body of the query (will be serialized as json)
     * @return {Promise} Promise for the HTTP request
     */

  }, {
    key: "doGet",
    value: function doGet(_ref2) {
      var _ref2$path = _ref2.path,
          path = _ref2$path === void 0 ? '/' : _ref2$path,
          _ref2$body = _ref2.body,
          body = _ref2$body === void 0 ? null : _ref2$body;
      return this._ajax({
        path: path,
        body: body,
        method: 'GET'
      });
    }
    /**
     * @param {string} path Path to send the query to
     * @param {Object} body Body of the query (will be serialized as json)
     * @return {Promise} Promise for the HTTP request
     */

  }, {
    key: "doPost",
    value: function doPost(_ref3) {
      var _ref3$path = _ref3.path,
          path = _ref3$path === void 0 ? '/' : _ref3$path,
          _ref3$body = _ref3.body,
          body = _ref3$body === void 0 ? null : _ref3$body;
      return this._ajax({
        path: path,
        body: body,
        method: 'POST'
      });
    }
    /**
     * @param {string} path Path to send the query to
     * @param {Object} body Body of the query (will be serialized as json)
     * @return {Promise} Promise for the HTTP request
     */

  }, {
    key: "doPut",
    value: function doPut(_ref4) {
      var _ref4$path = _ref4.path,
          path = _ref4$path === void 0 ? '/' : _ref4$path,
          _ref4$body = _ref4.body,
          body = _ref4$body === void 0 ? null : _ref4$body;
      return this._ajax({
        path: path,
        body: body,
        method: 'PUT'
      });
    }
  }]);

  return ajax;
}();
/**
 * Retrieves a single cookie from document.cookie. If the cookie is unset,
 * returns undefined.
 * @param {string} name The name of the cookie
 * @return {string} The value of the cookie. Undefined if not found.
 */




function getSingleCookie(name) {
  var cookies = ('; ' + document.cookie).split('; ' + name + '=');

  if (cookies.length === 2) {
    var cookieValue = cookies.pop();
    var endOfCookieValue = cookieValue.indexOf(';');
    return cookieValue.substring(0, endOfCookieValue !== -1 ? endOfCookieValue : undefined);
  }
}

/***/ }),

/***/ "./static/public/js/bundle.bemhtml.js":
/*!********************************************!*\
  !*** ./static/public/js/bundle.bemhtml.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bemhtml;

(function (global) {
  function buildBemXjst(libs) {
    var exports;
    /* BEM-XJST Runtime Start */

    var bemhtml = function (module, exports) {
      (function (f) {
        if (_typeof(exports) === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else { var g; }
      })(function () {
        var define, module, exports;
        return function e(t, n, r) {
          function s(o, u) {
            if (!n[o]) {
              if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return require(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
              }

              var l = n[o] = {
                exports: {}
              };
              t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e);
              }, l, l.exports, e, t, n, r);
            }

            return n[o].exports;
          }

          var i = typeof require == "function" && require;

          for (var o = 0; o < r.length; o++) {
            s(r[o]);
          }

          return s;
        }({
          1: [function (require, module, exports) {
            var inherits = require('inherits');

            var Match = require('../bemxjst/match').Match;

            var BemxjstEntity = require('../bemxjst/entity').Entity;
            /**
             * @class Entity
             * @param {BEMXJST} bemxjst
             * @param {String} block
             * @param {String} elem
             * @param {Array} templates
             */


            function Entity(bemxjst) {
              this.bemxjst = bemxjst;
              this.jsClass = null; // "Fast modes" about HTML

              this.tag = new Match(this, 'tag');
              this.attrs = new Match(this, 'attrs');
              this.bem = new Match(this, 'bem');
              this.cls = new Match(this, 'cls');
              BemxjstEntity.apply(this, arguments);
            }

            inherits(Entity, BemxjstEntity);
            exports.Entity = Entity;

            Entity.prototype.init = function (block, elem) {
              this.block = block;
              this.elem = elem; // Class for jsParams

              this.jsClass = this.bemxjst.classBuilder.build(this.block, this.elem);
            };

            Entity.prototype._keys = {
              tag: 1,
              content: 1,
              attrs: 1,
              mix: 1,
              js: 1,
              mods: 1,
              elemMods: 1,
              cls: 1,
              bem: 1
            };

            Entity.prototype.defaultBody = function (context) {
              context.mods = this.mods.exec(context);
              if (context.ctx.elem) context.elemMods = this.elemMods.exec(context);
              return this.bemxjst.render(context, this, this.tag.exec(context), this.js.exec(context), this.bem.exec(context), this.cls.exec(context), this.mix.exec(context), this.attrs.exec(context), this.content.exec(context), context.mods, context.elemMods);
            };
          }, {
            "../bemxjst/entity": 5,
            "../bemxjst/match": 8,
            "inherits": 11
          }],
          2: [function (require, module, exports) {
            var inherits = require('inherits');

            var utils = require('../bemxjst/utils');

            var Entity = require('./entity').Entity;

            var BEMXJST = require('../bemxjst');

            function BEMHTML(options) {
              BEMXJST.apply(this, arguments);
              this._shortTagCloser = typeof options.xhtml !== 'undefined' && options.xhtml ? '/>' : '>';
              this._elemJsInstances = options.elemJsInstances;
              this._omitOptionalEndTags = options.omitOptionalEndTags;
              this._singleQuotesForDataAttrs = typeof options.singleQuotesForDataAttrs === 'undefined' ? false : options.singleQuotesForDataAttrs;
              this._unquotedAttrs = typeof options.unquotedAttrs === 'undefined' ? false : options.unquotedAttrs;
            }

            inherits(BEMHTML, BEMXJST);
            module.exports = BEMHTML;
            BEMHTML.prototype.Entity = Entity;

            BEMHTML.prototype.runMany = function (arr) {
              var out = '';
              var context = this.context;
              var prevPos = context.position;
              var prevNotNewList = context._notNewList;

              if (prevNotNewList) {
                context._listLength += arr.length - 1;
              } else {
                context.position = 0;
                context._listLength = arr.length;
              }

              context._notNewList = true;

              if (this.canFlush) {
                for (var i = 0; i < arr.length; i++) {
                  out += context._flush(this._run(arr[i]));
                }
              } else {
                for (var i = 0; i < arr.length; i++) {
                  out += this._run(arr[i]);
                }
              }

              if (!prevNotNewList) context.position = prevPos;
              return out;
            };

            BEMHTML.prototype.render = function (context, entity, tag, js, bem, cls, mix, attrs, content, mods, elemMods) {
              var ctx = context.ctx;
              if (tag === undefined) tag = 'div';else if (!tag) return content || content === 0 ? this._run(content) : '';
              var out = '<' + tag;
              if (js === true) js = {};
              var jsParams;

              if (js) {
                jsParams = {};
                jsParams[entity.jsClass] = js;
              }

              var isBEM = typeof bem !== 'undefined' ? bem : entity.block || entity.elem;
              isBEM = !!isBEM;
              var addJSInitClass = isBEM && jsParams && (this._elemJsInstances ? entity.block : entity.block && !entity.elem);
              if (!isBEM && !cls) return this.renderClose(out, context, tag, attrs, isBEM, ctx, content);
              out += ' class=';
              var classValue = '';

              if (isBEM) {
                classValue += entity.jsClass;
                classValue += this.buildModsClasses(entity.block, entity.elem, entity.elem ? elemMods : mods);

                if (mix) {
                  var m = this.renderMix(entity, mix, jsParams, addJSInitClass);
                  classValue += m.out;
                  jsParams = m.jsParams;
                  addJSInitClass = m.addJSInitClass;
                }

                if (cls) classValue += ' ' + (typeof cls === 'string' ? utils.attrEscape(cls).trim() : cls);
              } else {
                classValue += typeof cls === 'string' ? utils.attrEscape(cls).trim() : cls;
              }

              if (addJSInitClass) classValue += ' i-bem';
              out += this._unquotedAttrs && utils.isUnquotedAttr(classValue) ? classValue : '"' + classValue + '"';
              if (isBEM && jsParams) out += ' data-bem=\'' + utils.jsAttrEscape(JSON.stringify(jsParams)) + '\'';
              return this.renderClose(out, context, tag, attrs, isBEM, ctx, content);
            };

            var OPTIONAL_END_TAGS = {
              // https://www.w3.org/TR/html4/index/elements.html
              html: 1,
              head: 1,
              body: 1,
              p: 1,
              li: 1,
              dt: 1,
              dd: 1,
              colgroup: 1,
              thead: 1,
              tbody: 1,
              tfoot: 1,
              tr: 1,
              th: 1,
              td: 1,
              option: 1,
              // html5 https://www.w3.org/TR/html5/syntax.html#optional-tags

              /* dl — Neither tag is omissible */
              rb: 1,
              rt: 1,
              rtc: 1,
              rp: 1,
              optgroup: 1
            };

            BEMHTML.prototype.renderClose = function (prefix, context, tag, attrs, isBEM, ctx, content) {
              var out = prefix;
              out += this.renderAttrs(attrs);

              if (utils.isShortTag(tag)) {
                out += this._shortTagCloser;
                if (this.canFlush) out = context._flush(out);
              } else {
                out += '>';
                if (this.canFlush) out = context._flush(out); // TODO(indutny): skip apply next flags

                if (content || content === 0) out += this.renderContent(content, isBEM);
                if (!this._omitOptionalEndTags || !OPTIONAL_END_TAGS.hasOwnProperty(tag)) out += '</' + tag + '>';
              }

              if (this.canFlush) out = context._flush(out);
              return out;
            };

            BEMHTML.prototype.renderAttrs = function (attrs) {
              var out = ''; // NOTE: maybe we need to make an array for quicker serialization

              if (utils.isObj(attrs)) {
                /* jshint forin : false */
                for (var name in attrs) {
                  var attr = attrs[name];
                  if (attr === undefined || attr === false || attr === null) continue;

                  if (attr === true) {
                    out += ' ' + name;
                  } else {
                    var attrVal = utils.isSimple(attr) ? attr : this.run(attr);
                    out += ' ' + name + '=';
                    out += this._singleQuotesForDataAttrs && name.indexOf('data-') === 0 ? '\'' + utils.jsAttrEscape(attrVal) + '\'' : this.getAttrValue(attrVal);
                  }
                }
              }

              return out;
            };

            BEMHTML.prototype.getAttrValue = function (attrVal) {
              return this._unquotedAttrs && utils.isUnquotedAttr(attrVal) ? attrVal : '"' + utils.attrEscape(attrVal) + '"';
            };

            BEMHTML.prototype.renderMix = function (entity, mix, jsParams, addJSInitClass) {
              var visited = {};
              var context = this.context;
              var js = jsParams;
              var addInit = addJSInitClass;
              visited[entity.jsClass] = true; // Transform mix to the single-item array if it's not array

              if (!Array.isArray(mix)) mix = [mix];
              var classBuilder = this.classBuilder;
              var out = '';

              for (var i = 0; i < mix.length; i++) {
                var item = mix[i];
                if (!item) continue;
                if (typeof item === 'string') item = {
                  block: item,
                  elem: undefined
                };
                var hasItem = false;

                if (item.elem) {
                  hasItem = item.elem !== entity.elem && item.elem !== context.elem || item.block && item.block !== entity.block;
                } else if (item.block) {
                  hasItem = !(item.block === entity.block && item.mods) || item.mods && entity.elem;
                }

                var block = item.block || item._block || context.block;
                var elem = item.elem || item._elem || context.elem;
                var key = classBuilder.build(block, elem);
                var classElem = item.elem || item._elem || (item.block ? undefined : context.elem);
                if (hasItem) out += ' ' + classBuilder.build(block, classElem);
                out += this.buildModsClasses(block, classElem, item.elem || !item.block && (item._elem || context.elem) ? item.elemMods : item.mods);

                if (item.js) {
                  if (!js) js = {};
                  js[classBuilder.build(block, item.elem)] = item.js === true ? {} : item.js;
                  if (!addInit) addInit = this._elemJsInstances ? item.elem || block : block && !item.elem;
                } // Process nexted mixes from BEMJON


                if (item.mix) {
                  var nested = this.renderMix(entity, item.mix, js, addInit);
                  js = utils.extend(js, nested.jsParams);
                  addInit = nested.addJSInitClass;
                  out += nested.out;
                } // Process nested mixes from templates


                if (!hasItem || visited[key]) continue;
                visited[key] = true;
                var nestedEntity = this.entities[key];
                if (!nestedEntity) continue;
                var oldBlock = context.block;
                var oldElem = context.elem;
                var nestedMix = nestedEntity.mix.exec(context);
                context.elem = oldElem;
                context.block = oldBlock;
                if (!nestedMix) continue;

                for (var j = 0; j < nestedMix.length; j++) {
                  var nestedItem = nestedMix[j];
                  if (!nestedItem) continue;

                  if (!nestedItem.block && !nestedItem.elem || !visited[classBuilder.build(nestedItem.block, nestedItem.elem)]) {
                    if (nestedItem.block) continue;
                    nestedItem._block = block;
                    nestedItem._elem = elem;
                    mix = mix.slice(0, i + 1).concat(nestedItem, mix.slice(i + 1));
                  }
                }
              }

              return {
                out: out,
                jsParams: js,
                addJSInitClass: addInit
              };
            };

            BEMHTML.prototype.buildModsClasses = function (block, elem, mods) {
              if (!mods) return '';
              var res = '';
              var modName;
              /*jshint -W089 */

              for (modName in mods) {
                if (!mods.hasOwnProperty(modName) || modName === '') continue;
                var modVal = mods[modName];
                if (!modVal && modVal !== 0) continue;
                if (typeof modVal !== 'boolean') modVal += '';
                var builder = this.classBuilder;
                res += ' ' + (elem ? builder.buildElemClass(block, elem, modName, modVal) : builder.buildBlockClass(block, modName, modVal));
              }

              return res;
            };
          }, {
            "../bemxjst": 7,
            "../bemxjst/utils": 10,
            "./entity": 1,
            "inherits": 11
          }],
          3: [function (require, module, exports) {
            function ClassBuilder(options) {
              this.elemDelim = options.elem || '__';
              this.modDelim = typeof options.mod === 'string' ? {
                name: options.mod || '_',
                val: options.mod || '_'
              } : {
                name: options.mod && options.mod.name || '_',
                val: options.mod && options.mod.val || '_'
              };
            }

            exports.ClassBuilder = ClassBuilder;

            ClassBuilder.prototype.build = function (block, elem) {
              if (!elem) return block;else return block + this.elemDelim + elem;
            };

            ClassBuilder.prototype.buildModPostfix = function (modName, modVal) {
              var res = this.modDelim.name + modName;
              if (modVal !== true) res += this.modDelim.val + modVal;
              return res;
            };

            ClassBuilder.prototype.buildBlockClass = function (name, modName, modVal) {
              var res = name;
              if (modVal) res += this.buildModPostfix(modName, modVal);
              return res;
            };

            ClassBuilder.prototype.buildElemClass = function (block, name, modName, modVal) {
              return this.buildBlockClass(block) + this.elemDelim + name + this.buildModPostfix(modName, modVal);
            };

            ClassBuilder.prototype.split = function (key) {
              return key.split(this.elemDelim, 2);
            };
          }, {}],
          4: [function (require, module, exports) {
            var utils = require('./utils');

            function Context(bemxjst) {
              this._bemxjst = bemxjst;
              this.ctx = null;
              this.block = ''; // Save current block until the next BEM entity

              this._currBlock = '';
              this.elem = null;
              this.mods = {};
              this.elemMods = {};
              this.position = 0;
              this._listLength = 0;
              this._notNewList = false;
              this.escapeContent = bemxjst.options.escapeContent !== false;
            }

            exports.Context = Context;
            Context.prototype._flush = null;
            Context.prototype.isSimple = utils.isSimple;
            Context.prototype.isShortTag = utils.isShortTag;
            Context.prototype.extend = utils.extend;
            Context.prototype.identify = utils.identify;
            Context.prototype.xmlEscape = utils.xmlEscape;
            Context.prototype.attrEscape = utils.attrEscape;
            Context.prototype.jsAttrEscape = utils.jsAttrEscape;

            Context.prototype.onError = function (context, e) {
              console.error('bem-xjst rendering error:', {
                block: context.ctx.block,
                elem: context.ctx.elem,
                mods: context.ctx.mods,
                elemMods: context.ctx.elemMods
              }, e);
            };

            Context.prototype.isFirst = function () {
              return this.position === 1;
            };

            Context.prototype.isLast = function () {
              return this.position === this._listLength;
            };

            Context.prototype.generateId = function () {
              return utils.identify(this.ctx);
            };

            Context.prototype.reapply = function (ctx) {
              return this._bemxjst.run(ctx);
            };
          }, {
            "./utils": 10
          }],
          5: [function (require, module, exports) {
            var utils = require('./utils');

            var Match = require('./match').Match;

            var tree = require('./tree');

            var Template = tree.Template;
            var PropertyMatch = tree.PropertyMatch;
            var CompilerOptions = tree.CompilerOptions;

            function Entity(bemxjst, block, elem, templates) {
              this.bemxjst = bemxjst;
              this.block = null;
              this.elem = null; // Compiler options via `xjstOptions()`

              this.options = {}; // `true` if entity has just a default renderer for `def()` mode

              this.canFlush = true; // "Fast modes"

              this.def = new Match(this);
              this.mix = new Match(this, 'mix');
              this.js = new Match(this, 'js');
              this.mods = new Match(this, 'mods');
              this.elemMods = new Match(this, 'elemMods');
              this.content = new Match(this, 'content'); // "Slow modes"

              this.rest = {}; // Initialize

              this.init(block, elem);
              this.initModes(templates);
            }

            exports.Entity = Entity;

            Entity.prototype.init = function (block, elem) {
              this.block = block;
              this.elem = elem;
            };

            Entity.prototype._keys = {
              content: 1,
              mix: 1,
              js: 1,
              mods: 1,
              elemMods: 1
            };

            Entity.prototype._initRest = function (key) {
              if (key === 'default') {
                this.rest[key] = this.def;
              } else if (this._keys[key]) {
                this.rest[key] = this[key];
              } else {
                this.rest[key] = this.rest[key] || new Match(this, key);
              }
            };

            Entity.prototype.initModes = function (templates) {
              /* jshint maxdepth : false */
              for (var i = 0; i < templates.length; i++) {
                var template = templates[i];

                for (var j = template.predicates.length - 1; j >= 0; j--) {
                  var pred = template.predicates[j];
                  if (!(pred instanceof PropertyMatch)) continue;
                  if (pred.key !== '_mode') continue;
                  template.predicates.splice(j, 1);

                  this._initRest(pred.value); // All templates should go there anyway


                  this.rest[pred.value].push(template);
                  break;
                }

                if (j === -1) this.def.push(template); // Merge compiler options

                for (var j = template.predicates.length - 1; j >= 0; j--) {
                  var pred = template.predicates[j];
                  if (!(pred instanceof CompilerOptions)) continue;
                  this.options = utils.extend(this.options, pred.options);
                }
              }
            };

            Entity.prototype.prepend = function (other) {
              // Prepend to the slow modes, fast modes are in this hashmap too anyway
              var keys = Object.keys(this.rest);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!other.rest[key]) continue;
                this.rest[key].prepend(other.rest[key]);
              } // Add new slow modes


              keys = Object.keys(other.rest);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (this.rest[key]) continue;

                this._initRest(key);

                this.rest[key].prepend(other.rest[key]);
              }
            }; // NOTE: This could be potentially compiled into inlined invokations


            Entity.prototype.run = function (context) {
              if (this.def.count !== 0) return this.def.exec(context);
              return this.defaultBody(context);
            };

            function contentMode() {
              return this.ctx.content;
            }

            Entity.prototype.setDefaults = function () {
              // Default .content() template for applyNext()
              if (this.content.count !== 0) this.content.push(new Template([], contentMode)); // .def() default

              if (this.def.count !== 0) {
                this.canFlush = this.options.flush || false;
                var self = this;
                this.def.push(new Template([], function defaultBodyProxy() {
                  return self.defaultBody(this);
                }));
              }
            };
          }, {
            "./match": 8,
            "./tree": 9,
            "./utils": 10
          }],
          6: [function (require, module, exports) {
            function BEMXJSTError(msg, func) {
              this.name = 'BEMXJSTError';
              this.message = msg;
              if (Error.captureStackTrace) Error.captureStackTrace(this, func || this.constructor);else this.stack = new Error().stack;
            }

            BEMXJSTError.prototype = Object.create(Error.prototype);
            BEMXJSTError.prototype.constructor = BEMXJSTError;
            exports.BEMXJSTError = BEMXJSTError;
          }, {}],
          7: [function (require, module, exports) {
            var inherits = require('inherits');

            var Tree = require('./tree').Tree;

            var PropertyMatch = require('./tree').PropertyMatch;

            var AddMatch = require('./tree').AddMatch;

            var Context = require('./context').Context;

            var ClassBuilder = require('./class-builder').ClassBuilder;

            var utils = require('./utils');

            function BEMXJST(options) {
              this.options = options;
              this.entities = null;
              this.defaultEnt = null; // Current tree

              this.tree = null; // Current match

              this.match = null; // Create new Context constructor for overriding prototype

              this.contextConstructor = function ContextChild(bemxjst) {
                Context.call(this, bemxjst);
              };

              inherits(this.contextConstructor, Context);
              this.context = null;
              this.classBuilder = new ClassBuilder(this.options.naming || {}); // Execution depth, used to invalidate `applyNext` bitfields

              this.depth = 0; // Do not call `_flush` on overridden `def()` mode

              this.canFlush = false; // oninit templates

              this.oninit = null; // Initialize default entity (no block/elem match)

              this.defaultEnt = new this.Entity(this, '', '', []);
              this.defaultElemEnt = new this.Entity(this, '', '', []);
            }

            module.exports = BEMXJST;
            BEMXJST.prototype.locals = Tree.methods.concat('local', 'applyCtx', 'applyNext', 'apply');

            BEMXJST.prototype.runOninit = function (oninits, ret) {
              var self = ret || this;
              self.BEMContext = this.contextConstructor;

              for (var i = 0; i < oninits.length; i++) {
                // NOTE: oninit has global context instead of BEMXJST
                var oninit = oninits[i];
                oninit(self, {
                  BEMContext: self.BEMContext
                });
              }
            };

            BEMXJST.prototype.compile = function (code) {
              var self = this;

              function applyCtx() {
                return self.run(self.context.ctx);
              }

              function _applyCtx() {
                return self._run(self.context.ctx);
              }

              function applyCtxWrap(ctx, changes) {
                // Fast case
                if (!changes) return self.local({
                  ctx: ctx
                }, applyCtx);
                return self.local(changes, function () {
                  return self.local({
                    ctx: ctx
                  }, _applyCtx);
                });
              }

              function _applyCtxWrap(ctx, changes) {
                // Fast case
                if (!changes) return self.local({
                  ctx: ctx
                }, _applyCtx);
                return self.local(changes, function () {
                  return self.local({
                    ctx: ctx
                  }, applyCtx);
                });
              }

              function apply(mode, changes) {
                return self.applyMode(mode, changes);
              }

              function localWrap(changes) {
                return function localBody(body) {
                  return self.local(changes, body);
                };
              }

              var tree = new Tree({
                refs: {
                  applyCtx: applyCtxWrap,
                  _applyCtx: _applyCtxWrap,
                  apply: apply
                }
              }); // Yeah, let people pass functions to us!

              var templates = this.recompileInput(code);
              var out = tree.build(templates, [localWrap, applyCtxWrap, function applyNextWrap(changes) {
                if (changes) return self.local(changes, applyNextWrap);
                return self.applyNext();
              }, apply]); // Concatenate templates with existing ones
              // TODO(indutny): it should be possible to incrementally add templates

              if (this.tree) {
                this.runOninit(out.oninit);
                out = {
                  templates: out.templates.concat(this.tree.templates),
                  oninit: this.tree.oninit.concat(out.oninit)
                };
              }

              this.tree = out; // Group block+elem entities into a hashmap

              var ent = this.groupEntities(out.templates); // Transform entities from arrays to Entity instances

              ent = this.transformEntities(ent);
              this.entities = ent;
              this.oninit = out.oninit;
            };

            BEMXJST.prototype.getTemplate = function (code, options) {
              this.compile(code, options);
              return this.exportApply();
            };

            BEMXJST.prototype.recompileInput = function (code) {
              var args = BEMXJST.prototype.locals; // Reuse function if it already has right arguments

              if (typeof code === 'function' && code.length === args.length) return code;
              return new Function(args.join(', '), utils.fnToString(code));
            };

            BEMXJST.prototype.groupEntities = function (tree) {
              var res = {};

              for (var i = 0; i < tree.length; i++) {
                // Make sure to change only the copy, the original is cached in `this.tree`
                var template = tree[i].clone();
                var block = null;
                var elem;
                elem = undefined;

                for (var j = 0; j < template.predicates.length; j++) {
                  var pred = template.predicates[j];
                  if (!(pred instanceof PropertyMatch) && !(pred instanceof AddMatch)) continue;
                  if (pred.key === 'block') block = pred.value;else if (pred.key === 'elem') elem = pred.value;else continue; // Remove predicate, we won't much against it

                  template.predicates.splice(j, 1);
                  j--;
                }

                if (block === null) {
                  var msg = 'block(…) subpredicate is not found.\n' + '    See template with subpredicates:\n     * ';

                  for (var j = 0; j < template.predicates.length; j++) {
                    var pred = template.predicates[j];
                    if (j !== 0) msg += '\n     * ';

                    if (pred.key === '_mode') {
                      msg += pred.value + '()';
                    } else {
                      if (Array.isArray(pred.key)) {
                        msg += pred.key[0].replace('mods', 'mod').replace('elemMods', 'elemMod') + '(\'' + pred.key[1] + '\', \'' + pred.value + '\')';
                      } else {
                        msg += 'match(…)';
                      }
                    }
                  }

                  msg += '\n    And template body: \n    (' + (typeof template.body === 'function' ? template.body : JSON.stringify(template.body)) + ')';

                  if (typeof BEMXJSTError === 'undefined') {
                    BEMXJSTError = require('./error').BEMXJSTError;
                  }

                  throw new BEMXJSTError(msg);
                }

                var key = this.classBuilder.build(block, elem);
                if (!res[key]) res[key] = [];
                res[key].push(template);
              }

              return res;
            };

            BEMXJST.prototype.transformEntities = function (entities) {
              var wildcardElems = [];
              var keys = Object.keys(entities);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i]; // TODO(indutny): pass this values over

                var parts = this.classBuilder.split(key);
                var block = parts[0];
                var elem = parts[1];
                if (elem === '*') wildcardElems.push(block);
                entities[key] = new this.Entity(this, block, elem, entities[key]);
              } // Merge wildcard block templates


              if (entities.hasOwnProperty('*')) {
                var wildcard = entities['*'];

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (key === '*') continue;
                  entities[key].prepend(wildcard);
                }

                this.defaultEnt.prepend(wildcard);
                this.defaultElemEnt.prepend(wildcard);
              } // Merge wildcard elem templates


              for (var i = 0; i < wildcardElems.length; i++) {
                var block = wildcardElems[i];
                var wildcardKey = this.classBuilder.build(block, '*');
                var wildcard = entities[wildcardKey];

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (key === wildcardKey) continue;
                  var entity = entities[key];
                  if (entity.block !== block || entity.elem === undefined) continue;
                  entities[key].prepend(wildcard);
                }

                this.defaultElemEnt.prepend(wildcard);
              } // Set default templates after merging with wildcard


              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                entities[key].setDefaults();
                this.defaultEnt.setDefaults();
                this.defaultElemEnt.setDefaults();
              }

              return entities;
            };

            BEMXJST.prototype._run = function (context) {
              if (context === undefined || context === '' || context === null) return this.runEmpty();else if (Array.isArray(context)) return this.runMany(context);else if (typeof context.html === 'string' && !context.tag && typeof context.block === 'undefined' && typeof context.elem === 'undefined' && typeof context.cls === 'undefined' && typeof context.attrs === 'undefined') return this.runUnescaped(context);else if (utils.isSimple(context)) return this.runSimple(context);
              return this.runOne(context);
            };

            BEMXJST.prototype.run = function (json) {
              var match = this.match;
              var context = this.context;
              var depth = this.depth;
              this.match = null;
              this.context = new this.contextConstructor(this);
              this.canFlush = this.context._flush !== null;
              this.depth = 0;

              var res = this._run(json);

              if (this.canFlush) res = this.context._flush(res);
              this.match = match;
              this.context = context;
              this.depth = depth;
              return res;
            };

            BEMXJST.prototype.runEmpty = function () {
              this.context._listLength--;
              return '';
            };

            BEMXJST.prototype.runUnescaped = function (context) {
              this.context._listLength--;
              return '' + context.html;
            };

            BEMXJST.prototype.runSimple = function (simple) {
              this.context._listLength--;
              if (!simple && simple !== 0 || simple === true) return '';
              return typeof simple === 'string' && this.context.escapeContent ? utils.xmlEscape(simple) : simple;
            };

            BEMXJST.prototype.runOne = function (json) {
              var context = this.context;
              var oldCtx = context.ctx;
              var oldBlock = context.block;
              var oldCurrBlock = context._currBlock;
              var oldElem = context.elem;
              var oldMods = context.mods;
              var oldElemMods = context.elemMods;
              if (json.block || json.elem) context._currBlock = '';else context._currBlock = context.block;
              context.ctx = json;

              if (json.block) {
                context.block = json.block;
                if (json.mods) context.mods = json.mods;else if (json.block !== oldBlock || !json.elem) context.mods = {};
              } else {
                if (!json.elem) context.block = '';else if (oldCurrBlock) context.block = oldCurrBlock;
              }

              context.elem = json.elem;
              if (json.elemMods) context.elemMods = json.elemMods;else context.elemMods = {};
              var block = context.block || '';
              var elem = context.elem; // Control list position

              if (block || elem) context.position++;else context._listLength--; // To invalidate `applyNext` flags

              this.depth++;
              var restoreFlush = false;
              var ent = this.entities[this.classBuilder.build(block, elem)];

              if (ent) {
                if (this.canFlush && !ent.canFlush) {
                  // Entity does not support flushing, do not flush anything nested
                  restoreFlush = true;
                  this.canFlush = false;
                }
              } else {
                // No entity - use default one
                ent = this.defaultEnt;
                if (elem !== undefined) ent = this.defaultElemEnt;
                ent.init(block, elem);
              }

              var res = this.options.production === true ? this.tryRun(context, ent) : ent.run(context);
              context.ctx = oldCtx;
              context.block = oldBlock;
              context.elem = oldElem;
              context.mods = oldMods;
              context.elemMods = oldElemMods;
              context._currBlock = oldCurrBlock;
              this.depth--;
              if (restoreFlush) this.canFlush = true;
              return res;
            };

            BEMXJST.prototype.tryRun = function (context, ent) {
              try {
                return ent.run(context);
              } catch (e) {
                return context.onError(context, e) || '';
              }
            };

            BEMXJST.prototype.renderContent = function (content, isBEM) {
              var context = this.context;
              var oldPos = context.position;
              var oldListLength = context._listLength;
              var oldNotNewList = context._notNewList;
              context._notNewList = false;

              if (isBEM) {
                context.position = 0;
                context._listLength = 1;
              }

              var res = this._run(content);

              context.position = oldPos;
              context._listLength = oldListLength;
              context._notNewList = oldNotNewList;
              return res;
            };

            BEMXJST.prototype.local = function (changes, body) {
              var keys = Object.keys(changes);
              var restore = [];

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var parts = key.split('.');
                var value = this.context;

                for (var j = 0; j < parts.length - 1; j++) {
                  value = value[parts[j]];
                }

                restore.push({
                  parts: parts,
                  value: value[parts[j]]
                });
                value[parts[j]] = changes[key];
              }

              var res = body.call(this.context);

              for (var i = 0; i < restore.length; i++) {
                var parts = restore[i].parts;
                var value = this.context;

                for (var j = 0; j < parts.length - 1; j++) {
                  value = value[parts[j]];
                }

                value[parts[j]] = restore[i].value;
              }

              return res;
            };

            BEMXJST.prototype.applyNext = function () {
              return this.match.exec(this.context);
            };

            BEMXJST.prototype.applyMode = function (mode, changes) {
              var key;
              var match = this.match;

              if (!match) {
                var key = this.classBuilder.build(this.context.block, this.context.elem);
                match = this.entities[key].rest[mode];
              } else {
                match = this.match.entity.rest[mode];
              }

              if (!match) {
                if (mode === 'mods') return this.context.mods;
                if (mode === 'elemMods') return this.context.elemMods;
                return this.context.ctx[mode];
              }

              if (!changes) return match.exec(this.context);
              var self = this; // Allocate function this way, to prevent allocation at the top of the
              // `applyMode`

              var localBody = function localBody() {
                return match.exec(self.context);
              };

              return this.local(changes, localBody);
            };

            BEMXJST.prototype.exportApply = function (exports) {
              var self = this;
              var ret = exports || {};

              ret.apply = function (context) {
                return self.run(context);
              }; // Add templates at run time


              ret.compile = function (templates) {
                self.compile(templates);
                return ret;
              };

              this.runOninit(self.oninit, ret);
              return ret;
            };
          }, {
            "./class-builder": 3,
            "./context": 4,
            "./error": 6,
            "./tree": 9,
            "./utils": 10,
            "inherits": 11
          }],
          8: [function (require, module, exports) {
            var tree = require('./tree');

            var PropertyMatch = tree.PropertyMatch;
            var AddMatch = tree.AddMatch;
            var WrapMatch = tree.WrapMatch;
            var ExtendMatch = tree.ExtendMatch;
            var CustomMatch = tree.CustomMatch;

            function MatchNested(template, pred) {
              this.template = template;
              this.keys = pred.key;
              this.value = pred.value;
            }

            MatchNested.prototype.exec = function (context) {
              var val = context;

              for (var i = 0; i < this.keys.length - 1; i++) {
                val = val[this.keys[i]];
                if (!val) return false;
              }

              val = val[this.keys[i]];
              if (this.value === true) return val !== undefined && val !== '' && val !== false && val !== null;
              return String(val) === this.value;
            };

            function MatchCustom(template, pred) {
              this.template = template;
              this.body = pred.body;
            }

            MatchCustom.prototype.exec = function (context) {
              return this.body.call(context, context, context.ctx);
            };

            function MatchWrap(template) {
              this.template = template;
              this.wrap = null;
            }

            MatchWrap.prototype.exec = function (context) {
              var res = this.wrap !== context.ctx;
              this.wrap = context.ctx;
              return res;
            };

            function MatchExtend(template) {
              this.template = template;
              this.wrap = null;
            }

            MatchExtend.prototype.exec = function (context) {
              var res = this.ext !== context.ctx;
              this.ext = context.ctx;
              return res;
            };

            function AddWrap(template, pred) {
              this.template = template;
              this.key = pred.key;
              this.value = pred.value;
            }

            AddWrap.prototype.exec = function (context) {
              return context[this.key] === this.value;
            };

            function MatchTemplate(mode, template) {
              this.mode = mode;
              this.predicates = new Array(template.predicates.length);
              this.body = template.body;
              var postpone = [];

              for (var i = 0, j = 0; i < this.predicates.length; i++, j++) {
                var pred = template.predicates[i];

                if (pred instanceof PropertyMatch) {
                  this.predicates[j] = new MatchNested(this, pred);
                } else if (pred instanceof ExtendMatch) {
                  j--;
                  postpone.push(new MatchExtend(this));
                } else if (pred instanceof AddMatch) {
                  this.predicates[j] = new AddWrap(this, pred);
                } else if (pred instanceof CustomMatch) {
                  this.predicates[j] = new MatchCustom(this, pred); // Push MatchWrap later, they should not be executed first.
                  // Otherwise they will set flag too early, and body might not be executed
                } else if (pred instanceof WrapMatch) {
                  j--;
                  postpone.push(new MatchWrap(this));
                } else {
                  // Skip
                  j--;
                }
              } // Insert late predicates


              for (var i = 0; i < postpone.length; i++, j++) {
                this.predicates[j] = postpone[i];
              }

              if (this.predicates.length !== j) this.predicates.length = j;
            }

            exports.MatchTemplate = MatchTemplate;

            function Match(entity, modeName) {
              this.entity = entity;
              this.modeName = modeName;
              this.bemxjst = this.entity.bemxjst;
              this.templates = []; // applyNext mask

              this.mask = [0]; // We are going to create copies of mask for nested `applyNext()`

              this.maskSize = 0;
              this.maskOffset = 0;
              this.count = 0;
              this.depth = -1;
              this.thrownError = null;
            }

            exports.Match = Match;

            Match.prototype.prepend = function (other) {
              this.templates = other.templates.concat(this.templates);
              this.count += other.count;

              while (Math.ceil(this.count / 31) > this.mask.length) {
                this.mask.push(0);
              }

              this.maskSize = this.mask.length;
            };

            Match.prototype.push = function (template) {
              this.templates.push(new MatchTemplate(this, template));
              this.count++;
              if (Math.ceil(this.count / 31) > this.mask.length) this.mask.push(0);
              this.maskSize = this.mask.length;
            };

            Match.prototype.tryCatch = function (fn, ctx) {
              try {
                return fn.call(ctx, ctx, ctx.ctx);
              } catch (e) {
                this.thrownError = e;

                if (this.modeName) {
                  this.thrownError.ctx = ctx;
                  this.thrownError.name = 'BEMXJST ERROR';
                  var classBuilder = this.entity.bemxjst.classBuilder;
                  var cause = e.stack.split('\n')[1];
                  this.thrownError.message = 'Template error in mode ' + this.modeName + ' in block ' + classBuilder.build(ctx.ctx.block, ctx.ctx.elem) + '\n    ' + e.message + '\n';
                  this.thrownError.stack = this.thrownError.name + ': ' + this.thrownError.message + ' ' + cause + '\n' + e.stack;
                }
              }
            };

            Match.prototype.exec = function (context) {
              var save = this.checkDepth();
              var template;
              var bitIndex = this.maskOffset;
              var mask = this.mask[bitIndex];
              var bit = 1;

              for (var i = 0; i < this.count; i++) {
                if ((mask & bit) === 0) {
                  template = this.templates[i];

                  for (var j = 0; j < template.predicates.length; j++) {
                    var pred = template.predicates[j];
                    /* jshint maxdepth : false */

                    if (!pred.exec(context)) break;
                  } // All predicates matched!


                  if (j === template.predicates.length) break;
                }

                if (bit === 0x40000000) {
                  bitIndex++;
                  mask = this.mask[bitIndex];
                  bit = 1;
                } else {
                  bit <<= 1;
                }
              }

              if (i === this.count) {
                this.restoreDepth(save);
                if (this.modeName === 'mods') return context.mods;
                if (this.modeName === 'elemMods') return context.elemMods;
                return context.ctx[this.modeName];
              }

              var oldMask = mask;
              var oldMatch = this.bemxjst.match;
              this.mask[bitIndex] |= bit;
              this.bemxjst.match = this;
              this.thrownError = null;
              var out;
              if (typeof template.body === 'function') out = this.tryCatch(template.body, context);else out = template.body;
              this.mask[bitIndex] = oldMask;
              this.bemxjst.match = oldMatch;
              this.restoreDepth(save);
              var e = this.thrownError;

              if (e !== null) {
                this.thrownError = null;
                throw e;
              }

              return out;
            };

            Match.prototype.checkDepth = function () {
              if (this.depth === -1) {
                this.depth = this.bemxjst.depth;
                return -1;
              }

              if (this.bemxjst.depth === this.depth) return this.depth;
              var depth = this.depth;
              this.depth = this.bemxjst.depth;
              this.maskOffset += this.maskSize;

              while (this.mask.length < this.maskOffset + this.maskSize) {
                this.mask.push(0);
              }

              return depth;
            };

            Match.prototype.restoreDepth = function (depth) {
              if (depth !== -1 && depth !== this.depth) this.maskOffset -= this.maskSize;
              this.depth = depth;
            };
          }, {
            "./tree": 9
          }],
          9: [function (require, module, exports) {
            var inherits = require('inherits');

            var utils = require('./utils');

            function Template(predicates, body) {
              this.predicates = predicates;
              this.body = body;
            }

            exports.Template = Template;

            Template.prototype.wrap = function () {
              var body = this.body;

              for (var i = 0; i < this.predicates.length; i++) {
                var pred = this.predicates[i];
                body = pred.wrapBody(body);
              }

              this.body = body;
            };

            Template.prototype.clone = function () {
              return new Template(this.predicates.slice(), this.body);
            };

            function MatchBase() {}

            exports.MatchBase = MatchBase;

            MatchBase.prototype.wrapBody = function (body) {
              return body;
            };

            function Item(tree, children) {
              this.conditions = [];
              this.children = [];

              for (var i = children.length - 1; i >= 0; i--) {
                var arg = children[i];
                if (arg instanceof MatchBase) this.conditions.push(arg);else if (arg === tree.boundBody) this.children[i] = tree.queue.pop();else this.children[i] = arg;
              }
            }

            function WrapMatch(refs) {
              MatchBase.call(this);
              this.refs = refs;
            }

            inherits(WrapMatch, MatchBase);
            exports.WrapMatch = WrapMatch;

            WrapMatch.prototype.wrapBody = function (body) {
              var _applyCtx = this.refs._applyCtx;

              if (typeof body !== 'function') {
                return function () {
                  return _applyCtx(body);
                };
              }

              return function () {
                return _applyCtx(body.call(this, this, this.ctx));
              };
            };

            function ReplaceMatch(refs) {
              MatchBase.call(this);
              this.refs = refs;
            }

            inherits(ReplaceMatch, MatchBase);
            exports.ReplaceMatch = ReplaceMatch;

            ReplaceMatch.prototype.wrapBody = function (body) {
              var applyCtx = this.refs.applyCtx;

              if (typeof body !== 'function') {
                return function () {
                  return applyCtx(body, {
                    position: this.position - 1
                  });
                };
              }

              return function () {
                return applyCtx(body.call(this, this, this.ctx), {
                  position: this.position - 1
                });
              };
            };

            function ExtendMatch(refs) {
              MatchBase.call(this);
              this.refs = refs;
            }

            inherits(ExtendMatch, MatchBase);
            exports.ExtendMatch = ExtendMatch;

            ExtendMatch.prototype.wrapBody = function (body) {
              var refs = this.refs;
              var applyCtx = refs.applyCtx;

              if (typeof body !== 'function') {
                return function () {
                  var changes = {};
                  var keys = Object.keys(body);

                  for (var i = 0; i < keys.length; i++) {
                    changes[keys[i]] = body[keys[i]];
                  }

                  return applyCtx(this.ctx, changes);
                };
              }

              return function () {
                var changes = {};
                var obj = body.call(this, this, this.ctx);
                var keys = Object.keys(obj);

                for (var i = 0; i < keys.length; i++) {
                  changes[keys[i]] = obj[keys[i]];
                }

                return applyCtx(this.ctx, changes);
              };
            };

            function AddMatch(mode, refs) {
              MatchBase.call(this);
              this.mode = mode;
              this.refs = refs;
            }

            inherits(AddMatch, MatchBase);
            exports.AddMatch = AddMatch;

            AddMatch.prototype.wrapBody = function (body) {
              return this[this.mode + 'WrapBody'](body);
            };

            AddMatch.prototype.appendContentWrapBody = function (body) {
              var apply = this.refs.apply;

              if (typeof body !== 'function') {
                return function () {
                  return [apply('content'), body];
                };
              }

              return function () {
                return [apply('content'), body.call(this, this, this.ctx)];
              };
            };

            AddMatch.prototype.prependContentWrapBody = function (body) {
              var apply = this.refs.apply;

              if (typeof body !== 'function') {
                return function () {
                  return [body, apply('content')];
                };
              }

              return function () {
                return [body.call(this, this, this.ctx), apply('content')];
              };
            };

            AddMatch.prototype.mixWrapBody = function (body) {
              var apply = this.refs.apply;

              if (typeof body !== 'function') {
                return function () {
                  var ret = apply('mix');
                  /* istanbul ignore else */

                  if (!Array.isArray(ret)) ret = [ret];
                  return ret.concat(body);
                };
              }

              return function () {
                var ret = apply('mix');
                if (!Array.isArray(ret)) ret = [ret];
                return ret.concat(body.call(this, this, this.ctx));
              };
            };

            ['attrs', 'js', 'mods', 'elemMods'].forEach(function (method) {
              AddMatch.prototype[method + 'WrapBody'] = function (body) {
                var apply = this.refs.apply;
                return typeof body !== 'function' ? function () {
                  return this[method] = utils.extend(apply(method) || {}, body);
                } : function () {
                  return this[method] = utils.extend(apply(method) || {}, body.call(this, this, this.ctx));
                };
              };
            });

            function CompilerOptions(options) {
              MatchBase.call(this);
              this.options = options;
            }

            inherits(CompilerOptions, MatchBase);
            exports.CompilerOptions = CompilerOptions;

            function PropertyMatch(key, value) {
              MatchBase.call(this);
              this.key = key;
              this.value = value;
            }

            inherits(PropertyMatch, MatchBase);
            exports.PropertyMatch = PropertyMatch;

            function CustomMatch(body) {
              MatchBase.call(this);
              this.body = body;
            }

            inherits(CustomMatch, MatchBase);
            exports.CustomMatch = CustomMatch;

            function Tree(options) {
              this.options = options;
              this.refs = this.options.refs;
              this.boundBody = this.body.bind(this);
              var methods = this.methods('body');

              for (var i = 0; i < methods.length; i++) {
                var method = methods[i]; // NOTE: method.name is empty because of .bind()

                this.boundBody[Tree.methods[i]] = method;
              }

              this.queue = [];
              this.templates = [];
              this.initializers = [];
            }

            exports.Tree = Tree;
            Tree.methods = [// Subpredicates:
            'match', 'block', 'elem', 'mod', 'elemMod', // Runtime related:
            'oninit', 'xjstOptions', // Output generators:
            'wrap', 'replace', 'extend', 'mode', 'def', 'content', 'appendContent', 'prependContent', 'attrs', 'addAttrs', 'js', 'addJs', 'mix', 'addMix', 'mods', 'addMods', 'addElemMods', 'elemMods', 'tag', 'cls', 'bem'];

            Tree.prototype.build = function (templates, apply) {
              var methods = this.methods('global').concat(apply);
              methods[0] = this.match.bind(this);
              templates.apply({}, methods);
              return {
                templates: this.templates.slice().reverse(),
                oninit: this.initializers
              };
            };

            function methodFactory(self, kind, name) {
              var method = self[name];
              var boundBody = self.boundBody;

              if (kind !== 'body') {
                if (name === 'replace' || name === 'extend' || name === 'wrap') {
                  return function () {
                    return method.apply(self, arguments);
                  };
                }

                return function () {
                  method.apply(self, arguments);
                  return boundBody;
                };
              }

              return function () {
                var res = method.apply(self, arguments); // Insert body into last item

                var child = self.queue.pop();
                var last = self.queue[self.queue.length - 1];
                last.conditions = last.conditions.concat(child.conditions);
                last.children = last.children.concat(child.children);
                if (name === 'replace' || name === 'extend' || name === 'wrap') return res;
                return boundBody;
              };
            }

            Tree.prototype.methods = function (kind) {
              var out = new Array(Tree.methods.length);

              for (var i = 0; i < out.length; i++) {
                var name = Tree.methods[i];
                out[i] = methodFactory(this, kind, name);
              }

              return out;
            }; // Called after all matches


            Tree.prototype.flush = function (conditions, item) {
              var subcond = item.conditions ? conditions.concat(item.conditions) : item.conditions;

              for (var i = 0; i < item.children.length; i++) {
                var arg = item.children[i]; // Go deeper

                if (arg instanceof Item) {
                  this.flush(subcond, item.children[i]); // Body
                } else {
                  if (this.isShortcutAllowed(arg, conditions)) {
                    var keys = Object.keys(arg);

                    for (var n = 0; n < keys.length; n++) {
                      this.addTemplate(conditions.concat(this.createMatch(keys[n])), arg[keys[n]]);
                    }
                  } else {
                    this.addTemplate(conditions, arg);
                  }
                }
              }
            };

            Tree.prototype.createMatch = function (modeName) {
              switch (modeName) {
                case 'addAttrs':
                  return [new PropertyMatch('_mode', 'attrs'), new AddMatch('attrs', this.refs)];

                case 'addJs':
                  return [new PropertyMatch('_mode', 'js'), new AddMatch('js', this.refs)];

                case 'addMix':
                  return [new PropertyMatch('_mode', 'mix'), new AddMatch('mix', this.refs)];

                case 'addMods':
                  return [new PropertyMatch('_mode', 'mods'), new AddMatch('mods', this.refs)];

                case 'addElemMods':
                  return [new PropertyMatch('_mode', 'elemMods'), new AddMatch('elemMods', this.refs)];

                case 'appendContent':
                case 'prependContent':
                  return [new PropertyMatch('_mode', 'content'), new AddMatch(modeName, this.refs)];

                case 'wrap':
                  return new WrapMatch(this.refs);

                case 'replace':
                  return new ReplaceMatch(this.refs);

                case 'extend':
                  return new ExtendMatch(this.refs);

                case 'def':
                  return new PropertyMatch('_mode', 'default');

                default:
                  return new PropertyMatch('_mode', modeName);
              }
            };

            Tree.prototype.addTemplate = function (conditions, arg) {
              var template = new Template(conditions, arg);
              template.wrap();
              this.templates.push(template);
            };

            Tree.prototype.body = function () {
              var children = new Array(arguments.length);

              for (var i = 0; i < arguments.length; i++) {
                children[i] = arguments[i];
              }

              var child = new Item(this, children);
              this.queue[this.queue.length - 1].children.push(child);
              if (this.queue.length === 1) this.flush([], this.queue.shift());
              return this.boundBody;
            };

            Tree.modsCheck = {
              mods: 1,
              elemMods: 1
            };

            Tree.checkConditions = function (conditions) {
              for (var i = 0; i < conditions.length; i++) {
                var condition = conditions[i];
                if (condition.key === 'block' || condition.key === 'elem' || Array.isArray(condition.key) && Tree.modsCheck[condition.key[0]] || condition instanceof CustomMatch) continue;
                return false;
              }

              return true;
            };

            Tree.prototype.isShortcutAllowed = function (arg, conditions) {
              return _typeof(arg) === 'object' && arg !== null && !Array.isArray(arg) && Tree.checkConditions(conditions);
            };

            Tree.prototype.match = function () {
              var children = new Array(arguments.length);
              if (!arguments.length) throw new Error('.match() must have argument');

              for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (typeof arg === 'function') arg = new CustomMatch(arg);
                if (!(arg instanceof MatchBase)) throw new Error('Wrong .match() argument');
                children[i] = arg;
              }

              this.queue.push(new Item(this, children));
              return this.boundBody;
            };

            Tree.prototype.applyMode = function (args, mode) {
              if (args.length) {
                throw new Error('Predicate should not have arguments but ' + JSON.stringify(args) + ' passed');
              }

              return this.mode(mode);
            };

            Tree.prototype.xjstOptions = function (options) {
              this.queue.push(new Item(this, [new CompilerOptions(options)]));
              return this.boundBody;
            };

            ['mode', 'elem', 'block'].forEach(function (method) {
              Tree.prototype[method] = function (name) {
                return this.match(new PropertyMatch(method === 'mode' ? '_mode' : method, name));
              };
            });
            ['mod', 'elemMod'].forEach(function (method) {
              Tree.prototype[method] = function (name, value) {
                return this.match(new PropertyMatch([method + 's', name], value === undefined ? true : String(value)));
              };
            });

            Tree.prototype.def = function () {
              return this.applyMode(arguments, 'default');
            };

            ['content', 'mix', 'bem', 'js', 'cls', 'attrs', 'tag', 'elemMods', 'mods'].forEach(function (method) {
              Tree.prototype[method] = function () {
                return this.applyMode(arguments, method);
              };
            });
            ['appendContent', 'prependContent'].forEach(function (method) {
              Tree.prototype[method] = function () {
                return this.content.apply(this, arguments).match(new AddMatch(method, this.refs));
              };
            });

            function capitalize(s) {
              return s[0].toUpperCase() + s.slice(1);
            }

            ['mods', 'elemMods', 'attrs', 'js', 'mix'].forEach(function (method) {
              Tree.prototype['add' + capitalize(method)] = function () {
                return this[method].apply(this, arguments).match(new AddMatch(method, this.refs));
              };
            });

            Tree.prototype.wrap = function () {
              return this.def.apply(this, arguments).match(new WrapMatch(this.refs));
            };

            Tree.prototype.replace = function () {
              return this.def.apply(this, arguments).match(new ReplaceMatch(this.refs));
            };

            Tree.prototype.extend = function () {
              return this.def.apply(this, arguments).match(new ExtendMatch(this.refs));
            };

            Tree.prototype.oninit = function (fn) {
              this.initializers.push(fn);
            };
          }, {
            "./utils": 10,
            "inherits": 11
          }],
          10: [function (require, module, exports) {
            var amp = '&amp;';
            var lt = '&lt;';
            var gt = '&gt;';
            var quot = '&quot;';
            var singleQuot = '&#39;';
            var matchXmlRegExp = /[&<>]/;

            function isEmpty(string) {
              return typeof string === 'undefined' || string === null || typeof string === 'number' && isNaN(string);
            }

            exports.xmlEscape = function (string) {
              if (isEmpty(string)) return '';
              var str = '' + string;
              var match = matchXmlRegExp.exec(str);
              if (!match) return str;
              var escape;
              var html = '';
              var index = 0;
              var lastIndex = 0;

              for (index = match.index; index < str.length; index++) {
                switch (str.charCodeAt(index)) {
                  case 38:
                    // &
                    escape = amp;
                    break;

                  case 60:
                    // <
                    escape = lt;
                    break;

                  case 62:
                    // >
                    escape = gt;
                    break;

                  default:
                    continue;
                }

                if (lastIndex !== index) html += str.substring(lastIndex, index);
                lastIndex = index + 1;
                html += escape;
              }

              return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
            };

            var matchAttrRegExp = /["&]/;

            exports.attrEscape = function (string) {
              if (isEmpty(string)) return '';
              var str = '' + string;
              var match = matchAttrRegExp.exec(str);
              if (!match) return str;
              var escape;
              var html = '';
              var index = 0;
              var lastIndex = 0;

              for (index = match.index; index < str.length; index++) {
                switch (str.charCodeAt(index)) {
                  case 34:
                    // "
                    escape = quot;
                    break;

                  case 38:
                    // &
                    escape = amp;
                    break;

                  default:
                    continue;
                }

                if (lastIndex !== index) html += str.substring(lastIndex, index);
                lastIndex = index + 1;
                html += escape;
              }

              return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
            };

            var matchJsAttrRegExp = /['&]/;

            exports.jsAttrEscape = function (string) {
              if (isEmpty(string)) return '';
              var str = '' + string;
              var match = matchJsAttrRegExp.exec(str);
              if (!match) return str;
              var escape;
              var html = '';
              var index = 0;
              var lastIndex = 0;

              for (index = match.index; index < str.length; index++) {
                switch (str.charCodeAt(index)) {
                  case 38:
                    // &
                    escape = amp;
                    break;

                  case 39:
                    // '
                    escape = singleQuot;
                    break;

                  default:
                    continue;
                }

                if (lastIndex !== index) html += str.substring(lastIndex, index);
                lastIndex = index + 1;
                html += escape;
              }

              return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
            };

            exports.extend = function (o1, o2) {
              if (!o1 || !o2) return o1 || o2;
              var res = {};
              var n;

              for (n in o1) {
                /* istanbul ignore else */
                if (o1.hasOwnProperty(n)) res[n] = o1[n];
              }

              for (n in o2) {
                /* istanbul ignore else */
                if (o2.hasOwnProperty(n)) res[n] = o2[n];
              }

              return res;
            };

            var SHORT_TAGS = {
              // hash for quick check if tag short
              area: 1,
              base: 1,
              br: 1,
              col: 1,
              command: 1,
              embed: 1,
              hr: 1,
              img: 1,
              input: 1,
              keygen: 1,
              link: 1,
              meta: 1,
              param: 1,
              source: 1,
              wbr: 1
            };

            exports.isShortTag = function (t) {
              return SHORT_TAGS.hasOwnProperty(t);
            };

            exports.isSimple = function isSimple(obj) {
              if (!obj || obj === true) return true;
              if (!obj.block && !obj.elem && !obj.tag && !obj.cls && !obj.attrs && obj.hasOwnProperty('html') && isSimple(obj.html)) return true;
              return typeof obj === 'string' || typeof obj === 'number';
            };

            exports.isObj = function (val) {
              return val && _typeof(val) === 'object' && !Array.isArray(val) && val !== null;
            };

            var uniqCount = 0;
            var uniqId = +new Date();
            var uniqExpando = '__' + uniqId;
            var uniqPrefix = 'uniq' + uniqId;

            function getUniq() {
              return uniqPrefix + ++uniqCount;
            }

            exports.getUniq = getUniq;

            exports.identify = function (obj, onlyGet) {
              if (!obj) return getUniq();
              if (onlyGet || obj[uniqExpando]) return obj[uniqExpando];
              var u = getUniq();
              obj[uniqExpando] = u;
              return u;
            };

            exports.fnToString = function (code) {
              // It is fine to compile without templates at first
              if (!code) return '';

              if (typeof code === 'function') {
                // Examples for regular function
                //   function () { … }
                //   function name() { … }
                //   function (a, b) { … }
                //   function name(a, b) { … }
                //
                // Examples for arrow function
                //   () => { … }
                //   (a, b) => { … }
                //   _ => { … }
                code = code.toString();
                code = code.replace(code.indexOf('function') === 0 ? /^function\s*[^{]+{|}$/g : /^(_|\(\w|[^=>]+\))\s=>\s{|}$/g, '');
              }

              return code;
            };
            /**
             * regexp for check may attribute be unquoted
             *
             * https://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.2
             * https://www.w3.org/TR/html5/syntax.html#attributes
             */


            var UNQUOTED_ATTR_REGEXP = /^[:\w.-]+$/;

            exports.isUnquotedAttr = function (str) {
              return str && UNQUOTED_ATTR_REGEXP.exec(str);
            };
          }, {}],
          11: [function (require, module, exports) {
            if (typeof Object.create === 'function') {
              // implementation from standard node.js 'util' module
              module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                  constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                });
              };
            } else {
              // old school shim for old browsers
              module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;

                var TempCtor = function TempCtor() {};

                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
              };
            }
          }, {}]
        }, {}, [2])(2);
      });

      ;
      return module.exports || exports.bemhtml;
    }({}, {});

    var api = new bemhtml({
      "exportName": "bemhtml",
      "escapeContent": true,
      "to": "/home/astronaut/gitHub/rowbot/three_in_a_boat_front"
    });
    api.compile(function (match, block, elem, mod, elemMod, oninit, xjstOptions, wrap, replace, extend, mode, def, content, appendContent, prependContent, attrs, addAttrs, js, addJs, mix, addMix, mods, addMods, addElemMods, elemMods, tag, cls, bem, local, applyCtx, applyNext, apply) {
      /* BEM-XJST User code here: */
      block('authors').elem('img')({
        'tag': 'img'
      });
      block('authors').elem('items').match(function (node, ctx) {
        return ctx.authors !== undefined;
      })({
        appendContent: function appendContent(node, ctx) {
          return ctx.authors.map(function (elt) {
            return {
              elem: 'item',
              content: [{
                elem: 'img',
                attrs: {
                  src: elt.img,
                  alt: elt.name
                }
              }, {
                elem: 'title',
                content: elt.name
              }, {
                elem: 'subtitle',
                content: elt.devInfo
              }, {
                elem: 'description',
                content: elt.description
              }]
            };
          });
        }
      });
      block('btn')({
        'tag': 'button'
      });
      block('btn').elem('text')({
        'tag': 'span'
      });
      block('btn').elem('inner')({
        'tag': 'span'
      }); // if inner isn't explicitly wrapping the content - do that implicitly

      block('btn').match(function (node, ctx) {
        return ctx.content && ctx.content.find(function (elt) {
          return elt['elem'] === 'inner';
        }) === undefined;
      })({
        content: function content() {
          return [{
            elem: 'inner',
            content: applyNext()
          }];
        }
      });
      block('btn').match(function (node, ctx) {
        return !ctx.content && ctx.icon && ctx.btnText;
      })({
        addMods: {
          'with-icon': true
        },
        content: function content(node, ctx) {
          return [{
            elem: 'inner',
            content: [{
              block: 'icon',
              wrappedInside: 'btn',
              mods: {
                type: ctx.icon,
                size: ctx.mods.size
              }
            }, {
              elem: 'text',
              content: ctx.btnText
            }]
          }];
        }
      });
      block('checkbox')({
        tag: 'input',
        addAttrs: {
          type: 'checkbox'
        }
      });
      block('checkbox')({
        tag: 'input',
        addAttrs: function addAttrs(node, ctx) {
          return {
            'id': node.formId + '_' + ctx.fieldName,
            'name': ctx.fieldName
          };
        }
      });
      block('field-group')({
        extend: function extend(node) {
          return {
            _fieldParents: (node._fieldParents || []).concat(['field-group'])
          };
        }
      });
      block('field-group').match(function (node) {
        return Array.isArray(node._fieldParents) && (node._fieldParents.length > 0 && node._fieldParents[node._fieldParents.length - 1] !== 'field-group' || node._fieldParents.length > 1);
      })({
        addMix: function addMix(node) {
          return {
            block: node._fieldParents[node._fieldParents.length - 1] === 'field-group' ? node._fieldParents[node._fieldParents.length - 2] : node._fieldParents[node._fieldParents.length - 1],
            elem: 'field'
          };
        }
      });
      block('file-input').elem('field')({
        tag: 'input',
        addAttrs: function addAttrs(node) {
          return {
            id: node.formId + '_' + node.fieldName,
            name: node.fieldName,
            type: 'file'
          };
        }
      });
      block('file-input').elem('label')({
        tag: 'label',
        addAttrs: function addAttrs(node) {
          return {
            'for': node.formId + '_' + node.fieldName
          };
        }
      });
      block('file-input').elem('info')({
        tag: 'span'
      });
      block('file-input').match(function (node, ctx) {
        return !ctx.content;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'label',
            content: [ctx.labelText || 'Выберите файл']
          }, {
            elem: 'info',
            content: [ctx.emptyText || '(файл не выбран)']
          }, {
            elem: 'field'
          }];
        }
      });
      block('file-input')({
        extend: function extend(node, ctx) {
          return {
            fieldName: ctx.fieldName || node.generateId()
          };
        }
      });
      block('form')({
        tag: 'form'
      });
      block('form')({
        extend: function extend(node, ctx) {
          return {
            formId: ctx.name
          };
        }
      });
      block('form-group')({
        extend: function extend(node) {
          return {
            _fieldParents: (node._fieldParents || []).concat(['form-group'])
          };
        }
      });
      block('form-group').elem('help-text')({
        addAttrs: function addAttrs(node, ctx) {
          return {
            'id': "help_".concat(ctx['for'])
          };
        }
      });
      block('game')();
      block('game-info').elem('item')({
        content: function content(node, ctx) {
          return [{
            elem: 'item-name',
            content: ctx.name
          }, {
            elem: 'item-value',
            content: ctx.value
          }];
        }
      });
      block('game-info').elem('avatar')({
        tag: 'img'
      });
      block('game-info').elem('line')({
        tag: 'hr'
      });
      block('game-info').match(function (node, ctx) {
        return !ctx.content && ctx.userInfo;
      })({
        content: function content(node, ctx) {
          return ctx.userInfo.map(function (elt) {
            return {
              elem: 'item',
              name: elt[0],
              value: elt[1] || '-'
            };
          });
        }
      });
      block('*').match(function (node, ctx) {
        return ctx.wrappedInside;
      })({
        addMix: function addMix(node, ctx) {
          return {
            block: ctx.wrappedInside,
            elem: ctx.wrappedAs || ctx.block,
            elemMods: ctx.elemMods
          };
        }
      }); // not needed

      block('hexagons').elem('game')({
        tag: 'canvas'
      });
      block('icon')({
        tag: function tag(node, ctx) {
          return ctx.tag || 'i';
        }
      }); // not needed

      block('input').elem('field')({
        tag: 'input',
        addAttrs: function addAttrs(node) {
          return {
            'id': node.formId + '_' + node.fieldName,
            'name': node.fieldName
          };
        }
      });
      block('input').elem('field').match(function (node, ctx) {
        return !ctx.attrs || !ctx.attrs.type;
      })({
        addAttrs: {
          type: 'text'
        }
      });
      block('input').match(function (node, ctx) {
        return !ctx.content;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'field',
            attrs: ctx.fieldAttrs
          }];
        }
      });
      block('input')({
        extend: function extend(node, ctx) {
          return {
            fieldName: ctx.fieldName || node.generateId()
          };
        }
      });
      block('input').elem('tooltip')({
        addAttrs: function addAttrs(node, ctx) {
          return {
            'data-for': node.formId + (ctx['data-for'] || node.fieldName)
          };
        }
      }); // (form/field)-group related stuff

      block('input').match(function (node) {
        return Array.isArray(node._fieldParents) && node._fieldParents.length;
      })({
        addMix: function addMix(node) {
          return {
            block: node._fieldParents[node._fieldParents.length - 1],
            elem: 'field'
          };
        }
      }); // emptied out in favor of form

      block('menu').elem('link')({
        tag: 'a'
      });
      block('menu').elem('avatar')({
        tag: 'img'
      });
      block('menu').elem('title')({
        block: 'title',
        mods: {
          large: true
        }
      });
      block('menu').elem('items').match(function (node, ctx) {
        return ctx.points !== undefined;
      })({
        appendContent: function appendContent(node, ctx) {
          return ctx.points.map(function (elt) {
            return {
              elem: 'item',
              content: [{
                elem: 'link',
                attrs: {
                  'href': '#',
                  'data-link-type': elt.href
                },
                content: [{
                  tag: 'span',
                  block: 'icon-bg',
                  mods: {
                    borderless: true,
                    size: 'full',
                    color: 'dark-gray'
                  },
                  content: {
                    block: 'icon',
                    mods: {
                      color: 'white',
                      type: elt.type,
                      size: 'fit'
                    }
                  },
                  wrappedInside: 'menu',
                  wrappedAs: 'icon-bg'
                }, {
                  elem: 'text',
                  content: elt.text
                }]
              }]
            };
          });
        }
      });
      block('not-found-page').elem('link')({
        tag: 'a'
      }); // not needed

      block('pagination').elem('link')({
        tag: 'button'
      });
      block('pagination').elem('link').match(function (node, ctx) {
        return ctx.content;
      })({
        addMix: function addMix(node, ctx) {
          var mods = {};

          if (ctx.content === 'Вперед') {
            mods = {
              last: true
            };
          }

          if (ctx.content === 'Назад') {
            mods = {
              first: true
            };
          }

          return {
            block: 'pagination',
            elem: 'link',
            elemMods: mods
          };
        }
      });
      block('profile-info').elem('item')({
        content: function content(node, ctx) {
          return [{
            elem: 'item-name',
            content: ctx.name
          }, {
            elem: 'item-value',
            content: ctx.value
          }];
        }
      });
      block('profile-popup').elem('profile-icon')({
        tag: 'img'
      });
      block('profile-info').match(function (node, ctx) {
        return !ctx.content && ctx.userInfo;
      })({
        content: function content(node, ctx) {
          return ctx.userInfo.map(function (elt) {
            return {
              elem: 'item',
              name: elt[0],
              value: elt[1] || '-'
            };
          });
        }
      });
      block('profile-info').match(function (node, ctx) {
        return !ctx.content && ctx.fields;
      })({
        content: function content(node, ctx) {
          return ctx.fields.map(function (elt) {
            return {
              elem: 'item',
              name: elt.name,
              value: {
                block: 'form-group',
                mods: {
                  size: 'inline'
                },
                content: elt.content ? elt.content : [elt.value || {
                  block: 'input',
                  fieldName: elt.fieldName,
                  fieldAttrs: elt.fieldAttrs
                }, elt.novalidate ? {} : {
                  elem: 'help-text',
                  elemMods: {
                    hidden: true
                  },
                  "for": elt.fieldName || elt.value.fieldName
                }]
              }
            };
          });
        }
      });
      block('profile-popup').match(function (node, ctx) {
        return !ctx.content && ctx.title && (ctx.info || ctx.fields) && ctx.img && ctx.allowEdit !== undefined;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'title',
            content: [ctx.title]
          }, {
            elem: 'content',
            content: [{
              elem: 'profile-icon',
              attrs: {
                src: ctx.img
              }
            }, {
              block: 'profile-info',
              mix: {
                block: 'profile-popup',
                elem: 'profile-info'
              },
              userInfo: ctx.info,
              userFields: ctx.fields
            }, {
              elem: 'double-btn',
              content: ctx.allowEdit ? [{
                block: 'btn',
                mods: {
                  'size': 'large',
                  'with-icon': true,
                  'cancel': true
                },
                wrappedInside: 'profile-popup',
                icon: 'useredit',
                btnText: 'Изменить'
              }, {
                block: 'btn',
                attrs: {
                  'data-type': 'menu'
                },
                mods: {
                  'size': 'large',
                  'with-icon': true,
                  'cancel': false,
                  'color': 'muted'
                },
                wrappedInside: 'profile-popup',
                icon: 'back',
                btnText: 'В меню'
              }] : [{
                block: 'btn',
                attrs: {
                  'data-type': 'back'
                },
                mods: {
                  'size': 'large',
                  'with-icon': true,
                  'cancel': false,
                  'color': 'muted'
                },
                wrappedInside: 'profile-popup',
                icon: 'back',
                btnText: 'Назад'
              }]
            }]
          }];
        }
      });
      block('result-redirect').elem('btn')({
        tag: 'button'
      });
      block('result-redirect').elem('link')({
        tag: 'a  '
      });
      block('result-redirect').elem('btn').match(function (node, ctx) {
        return !ctx.content && ctx.btnText;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'inner',
            content: [{
              elem: 'text',
              content: ctx.btnText
            }]
          }];
        }
      });
      block('scoreboard').elem('username')({
        tag: 'span'
      });
      block('scoreboard').elem('avatar')({
        tag: 'img'
      });
      block('scoreboard').elem('items').match(function (node, ctx) {
        return ctx.scores !== undefined;
      })({
        appendContent: function appendContent(node, ctx) {
          return ctx.scores.map(function (elt, index) {
            return {
              elem: 'item',
              content: [{
                elem: 'user-data',
                content: [{
                  elem: 'place',
                  content: '#' + (ctx.page * 10 + (index + 1))
                }, {
                  elem: 'link',
                  tag: 'a',
                  fieldName: 'userName',
                  value: elt.userId,
                  attrs: {
                    value: elt.userId
                  },
                  // to be changed once api's here
                  content: [{
                    elem: 'data-field',
                    content: [{
                      elem: 'avatar',
                      attrs: {
                        src: elt.img,
                        alt: elt.name
                      }
                    }, {
                      elem: 'username',
                      content: elt.username
                    }]
                  }]
                }]
              }, {
                elem: 'score',
                content: elt.score
              }],
              elemMods: index < 3 && ctx.page === 0 ? {
                place: ['first', 'second', 'third'][index]
              } : {}
            };
          });
        }
      });
      block('select').elem('field')({
        tag: 'select',
        addAttrs: function addAttrs(node) {
          return {
            'id': node.formId + '_' + node.fieldName,
            'name': node.fieldName
          };
        }
      });
      block('select').match(function (node, ctx) {
        return !ctx.content && ctx.options;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'field',
            attrs: ctx.fieldAttrs,
            content: ctx.options.map(function (option) {
              return [{
                tag: 'option',
                content: option.content,
                attrs: {
                  selected: option.selected ? true : undefined,
                  value: option.value
                }
              }];
            })
          }];
        }
      });
      block('select')({
        extend: function extend(node, ctx) {
          return {
            fieldName: ctx.fieldName || node.generateId()
          };
        }
      }); // (form/field)-group related stuff

      block('select').match(function (node) {
        return Array.isArray(node._fieldParents) && node._fieldParents.length;
      })({
        addMix: function addMix(node) {
          return {
            block: node._fieldParents[node._fieldParents.length - 1],
            elem: 'field'
          };
        }
      }); // block('signup-popup')({tag: 'form'});

      block('signup-popup').elem('hr')({
        tag: 'hr'
      });
      block('signup-popup').elem('explanation-text')({
        tag: 'span'
      });
      block('sm-icons-list').elem('icon-bg')({
        'tag': 'a'
      });
      block('sm-icons-list').elem('icon')({
        'tag': 'i'
      });
      block('sm-icons-list').elem('icon-bg').match(function (node, ctx) {
        return ctx.href;
      })({
        addAttrs: function addAttrs(node, ctx) {
          return {
            href: ctx.href
          };
        }
      });
      ;
      ;
      oninit(function (exports, context) {
        var BEMContext = exports.BEMContext || context.BEMContext;

        BEMContext.prototype.require = function (lib) {
          return this._libs[lib];
        };
      });
      ;
    });
    exports = api.exportApply(exports);
    if (libs) exports.BEMContext.prototype._libs = libs;
    return exports;
  }

  ;
  var glob = this.window || this.global || this;
  var exp =  true ? exports : undefined;

  if ((typeof modules === "undefined" ? "undefined" : _typeof(modules)) === "object") {
    modules.define("bemhtml", [], function (provide) {
      var engine = buildBemXjst({});
      provide(engine);
    });
  } else {
    var _libs = {};

    if (Object.keys(_libs).length) {
      bemhtml = buildBemXjst(_libs);
      exp["bemhtml"] = bemhtml;
      exp["bemhtml"].libs = _libs;
    } else {
      bemhtml = buildBemXjst(glob);
      exp["bemhtml"] = bemhtml;
      exp["bemhtml"].libs = glob;
    }
  }
})(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./static/public/js/bundle.bemtree.js":
/*!********************************************!*\
  !*** ./static/public/js/bundle.bemtree.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bemtree;

(function (global) {
  function buildBemXjst(libs) {
    var exports;
    /* BEM-XJST Runtime Start */

    var bemtree = function (module, exports) {
      (function (f) {
        if (_typeof(exports) === "object" && typeof module !== "undefined") {
          module.exports = f();
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else { var g; }
      })(function () {
        var define, module, exports;
        return function e(t, n, r) {
          function s(o, u) {
            if (!n[o]) {
              if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return require(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
              }

              var l = n[o] = {
                exports: {}
              };
              t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e);
              }, l, l.exports, e, t, n, r);
            }

            return n[o].exports;
          }

          var i = typeof require == "function" && require;

          for (var o = 0; o < r.length; o++) {
            s(r[o]);
          }

          return s;
        }({
          1: [function (require, module, exports) {
            var inherits = require('inherits');

            var BemxjstEntity = require('../bemxjst/entity').Entity;

            function Entity() {
              BemxjstEntity.apply(this, arguments);
            }

            inherits(Entity, BemxjstEntity);
            exports.Entity = Entity;

            Entity.prototype.defaultBody = function (context) {
              context.mods = this.mods.exec(context);
              if (context.ctx.elem) context.elemMods = this.elemMods.exec(context);
              return this.bemxjst.render(context, this, this.content.exec(context), this.js.exec(context), this.mix.exec(context), context.mods, context.elemMods);
            };
          }, {
            "../bemxjst/entity": 5,
            "inherits": 11
          }],
          2: [function (require, module, exports) {
            var inherits = require('inherits');

            var BEMXJST = require('../bemxjst');

            var Entity = require('./entity').Entity;

            var utils = require('../bemxjst/utils');

            function BEMTREE() {
              BEMXJST.apply(this, arguments);
            }

            inherits(BEMTREE, BEMXJST);
            module.exports = BEMTREE;
            BEMTREE.prototype.Entity = Entity;

            BEMTREE.prototype.runMany = function (arr) {
              var out = [];
              var context = this.context;
              var prevPos = context.position;
              var prevNotNewList = context._notNewList;

              if (prevNotNewList) {
                context._listLength += arr.length - 1;
              } else {
                context.position = 0;
                context._listLength = arr.length;
              }

              context._notNewList = true;

              if (this.canFlush) {
                for (var i = 0; i < arr.length; i++) {
                  out += context._flush(this._run(arr[i]));
                } // TODO: fixme!

              } else {
                for (var i = 0; i < arr.length; i++) {
                  out.push(this._run(arr[i]));
                }
              }

              if (!prevNotNewList) context.position = prevPos;
              return out;
            };

            BEMTREE.prototype.render = function (context, entity, content, js, mix, mods, elemMods) {
              var ctx = utils.extend({}, context.ctx);
              var isBEM = !!(ctx.block || ctx.elem || ctx.bem);
              if (typeof js !== 'undefined') ctx.js = js;
              if (typeof mix !== 'undefined') ctx.mix = mix;
              if (!entity.elem && mods && Object.keys(mods).length > 0) ctx.mods = utils.extend(ctx.mods || {}, mods);
              if (entity.elem && elemMods && Object.keys(elemMods).length > 0) ctx.elemMods = utils.extend(ctx.elemMods || {}, elemMods);
              if (typeof content === 'undefined') return ctx;
              ctx.content = this.renderContent(content, isBEM);
              return ctx;
            };

            BEMTREE.prototype._run = function (context) {
              if (!context || context === true) return context;
              return BEMXJST.prototype._run.call(this, context);
            };

            BEMTREE.prototype.runUnescaped = function (context) {
              this.context._listLength--;
              return context;
            };
          }, {
            "../bemxjst": 7,
            "../bemxjst/utils": 10,
            "./entity": 1,
            "inherits": 11
          }],
          3: [function (require, module, exports) {
            function ClassBuilder(options) {
              this.elemDelim = options.elem || '__';
              this.modDelim = typeof options.mod === 'string' ? {
                name: options.mod || '_',
                val: options.mod || '_'
              } : {
                name: options.mod && options.mod.name || '_',
                val: options.mod && options.mod.val || '_'
              };
            }

            exports.ClassBuilder = ClassBuilder;

            ClassBuilder.prototype.build = function (block, elem) {
              if (!elem) return block;else return block + this.elemDelim + elem;
            };

            ClassBuilder.prototype.buildModPostfix = function (modName, modVal) {
              var res = this.modDelim.name + modName;
              if (modVal !== true) res += this.modDelim.val + modVal;
              return res;
            };

            ClassBuilder.prototype.buildBlockClass = function (name, modName, modVal) {
              var res = name;
              if (modVal) res += this.buildModPostfix(modName, modVal);
              return res;
            };

            ClassBuilder.prototype.buildElemClass = function (block, name, modName, modVal) {
              return this.buildBlockClass(block) + this.elemDelim + name + this.buildModPostfix(modName, modVal);
            };

            ClassBuilder.prototype.split = function (key) {
              return key.split(this.elemDelim, 2);
            };
          }, {}],
          4: [function (require, module, exports) {
            var utils = require('./utils');

            function Context(bemxjst) {
              this._bemxjst = bemxjst;
              this.ctx = null;
              this.block = ''; // Save current block until the next BEM entity

              this._currBlock = '';
              this.elem = null;
              this.mods = {};
              this.elemMods = {};
              this.position = 0;
              this._listLength = 0;
              this._notNewList = false;
              this.escapeContent = bemxjst.options.escapeContent !== false;
            }

            exports.Context = Context;
            Context.prototype._flush = null;
            Context.prototype.isSimple = utils.isSimple;
            Context.prototype.isShortTag = utils.isShortTag;
            Context.prototype.extend = utils.extend;
            Context.prototype.identify = utils.identify;
            Context.prototype.xmlEscape = utils.xmlEscape;
            Context.prototype.attrEscape = utils.attrEscape;
            Context.prototype.jsAttrEscape = utils.jsAttrEscape;

            Context.prototype.onError = function (context, e) {
              console.error('bem-xjst rendering error:', {
                block: context.ctx.block,
                elem: context.ctx.elem,
                mods: context.ctx.mods,
                elemMods: context.ctx.elemMods
              }, e);
            };

            Context.prototype.isFirst = function () {
              return this.position === 1;
            };

            Context.prototype.isLast = function () {
              return this.position === this._listLength;
            };

            Context.prototype.generateId = function () {
              return utils.identify(this.ctx);
            };

            Context.prototype.reapply = function (ctx) {
              return this._bemxjst.run(ctx);
            };
          }, {
            "./utils": 10
          }],
          5: [function (require, module, exports) {
            var utils = require('./utils');

            var Match = require('./match').Match;

            var tree = require('./tree');

            var Template = tree.Template;
            var PropertyMatch = tree.PropertyMatch;
            var CompilerOptions = tree.CompilerOptions;

            function Entity(bemxjst, block, elem, templates) {
              this.bemxjst = bemxjst;
              this.block = null;
              this.elem = null; // Compiler options via `xjstOptions()`

              this.options = {}; // `true` if entity has just a default renderer for `def()` mode

              this.canFlush = true; // "Fast modes"

              this.def = new Match(this);
              this.mix = new Match(this, 'mix');
              this.js = new Match(this, 'js');
              this.mods = new Match(this, 'mods');
              this.elemMods = new Match(this, 'elemMods');
              this.content = new Match(this, 'content'); // "Slow modes"

              this.rest = {}; // Initialize

              this.init(block, elem);
              this.initModes(templates);
            }

            exports.Entity = Entity;

            Entity.prototype.init = function (block, elem) {
              this.block = block;
              this.elem = elem;
            };

            Entity.prototype._keys = {
              content: 1,
              mix: 1,
              js: 1,
              mods: 1,
              elemMods: 1
            };

            Entity.prototype._initRest = function (key) {
              if (key === 'default') {
                this.rest[key] = this.def;
              } else if (this._keys[key]) {
                this.rest[key] = this[key];
              } else {
                this.rest[key] = this.rest[key] || new Match(this, key);
              }
            };

            Entity.prototype.initModes = function (templates) {
              /* jshint maxdepth : false */
              for (var i = 0; i < templates.length; i++) {
                var template = templates[i];

                for (var j = template.predicates.length - 1; j >= 0; j--) {
                  var pred = template.predicates[j];
                  if (!(pred instanceof PropertyMatch)) continue;
                  if (pred.key !== '_mode') continue;
                  template.predicates.splice(j, 1);

                  this._initRest(pred.value); // All templates should go there anyway


                  this.rest[pred.value].push(template);
                  break;
                }

                if (j === -1) this.def.push(template); // Merge compiler options

                for (var j = template.predicates.length - 1; j >= 0; j--) {
                  var pred = template.predicates[j];
                  if (!(pred instanceof CompilerOptions)) continue;
                  this.options = utils.extend(this.options, pred.options);
                }
              }
            };

            Entity.prototype.prepend = function (other) {
              // Prepend to the slow modes, fast modes are in this hashmap too anyway
              var keys = Object.keys(this.rest);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!other.rest[key]) continue;
                this.rest[key].prepend(other.rest[key]);
              } // Add new slow modes


              keys = Object.keys(other.rest);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (this.rest[key]) continue;

                this._initRest(key);

                this.rest[key].prepend(other.rest[key]);
              }
            }; // NOTE: This could be potentially compiled into inlined invokations


            Entity.prototype.run = function (context) {
              if (this.def.count !== 0) return this.def.exec(context);
              return this.defaultBody(context);
            };

            function contentMode() {
              return this.ctx.content;
            }

            Entity.prototype.setDefaults = function () {
              // Default .content() template for applyNext()
              if (this.content.count !== 0) this.content.push(new Template([], contentMode)); // .def() default

              if (this.def.count !== 0) {
                this.canFlush = this.options.flush || false;
                var self = this;
                this.def.push(new Template([], function defaultBodyProxy() {
                  return self.defaultBody(this);
                }));
              }
            };
          }, {
            "./match": 8,
            "./tree": 9,
            "./utils": 10
          }],
          6: [function (require, module, exports) {
            function BEMXJSTError(msg, func) {
              this.name = 'BEMXJSTError';
              this.message = msg;
              if (Error.captureStackTrace) Error.captureStackTrace(this, func || this.constructor);else this.stack = new Error().stack;
            }

            BEMXJSTError.prototype = Object.create(Error.prototype);
            BEMXJSTError.prototype.constructor = BEMXJSTError;
            exports.BEMXJSTError = BEMXJSTError;
          }, {}],
          7: [function (require, module, exports) {
            var inherits = require('inherits');

            var Tree = require('./tree').Tree;

            var PropertyMatch = require('./tree').PropertyMatch;

            var AddMatch = require('./tree').AddMatch;

            var Context = require('./context').Context;

            var ClassBuilder = require('./class-builder').ClassBuilder;

            var utils = require('./utils');

            function BEMXJST(options) {
              this.options = options;
              this.entities = null;
              this.defaultEnt = null; // Current tree

              this.tree = null; // Current match

              this.match = null; // Create new Context constructor for overriding prototype

              this.contextConstructor = function ContextChild(bemxjst) {
                Context.call(this, bemxjst);
              };

              inherits(this.contextConstructor, Context);
              this.context = null;
              this.classBuilder = new ClassBuilder(this.options.naming || {}); // Execution depth, used to invalidate `applyNext` bitfields

              this.depth = 0; // Do not call `_flush` on overridden `def()` mode

              this.canFlush = false; // oninit templates

              this.oninit = null; // Initialize default entity (no block/elem match)

              this.defaultEnt = new this.Entity(this, '', '', []);
              this.defaultElemEnt = new this.Entity(this, '', '', []);
            }

            module.exports = BEMXJST;
            BEMXJST.prototype.locals = Tree.methods.concat('local', 'applyCtx', 'applyNext', 'apply');

            BEMXJST.prototype.runOninit = function (oninits, ret) {
              var self = ret || this;
              self.BEMContext = this.contextConstructor;

              for (var i = 0; i < oninits.length; i++) {
                // NOTE: oninit has global context instead of BEMXJST
                var oninit = oninits[i];
                oninit(self, {
                  BEMContext: self.BEMContext
                });
              }
            };

            BEMXJST.prototype.compile = function (code) {
              var self = this;

              function applyCtx() {
                return self.run(self.context.ctx);
              }

              function _applyCtx() {
                return self._run(self.context.ctx);
              }

              function applyCtxWrap(ctx, changes) {
                // Fast case
                if (!changes) return self.local({
                  ctx: ctx
                }, applyCtx);
                return self.local(changes, function () {
                  return self.local({
                    ctx: ctx
                  }, _applyCtx);
                });
              }

              function _applyCtxWrap(ctx, changes) {
                // Fast case
                if (!changes) return self.local({
                  ctx: ctx
                }, _applyCtx);
                return self.local(changes, function () {
                  return self.local({
                    ctx: ctx
                  }, applyCtx);
                });
              }

              function apply(mode, changes) {
                return self.applyMode(mode, changes);
              }

              function localWrap(changes) {
                return function localBody(body) {
                  return self.local(changes, body);
                };
              }

              var tree = new Tree({
                refs: {
                  applyCtx: applyCtxWrap,
                  _applyCtx: _applyCtxWrap,
                  apply: apply
                }
              }); // Yeah, let people pass functions to us!

              var templates = this.recompileInput(code);
              var out = tree.build(templates, [localWrap, applyCtxWrap, function applyNextWrap(changes) {
                if (changes) return self.local(changes, applyNextWrap);
                return self.applyNext();
              }, apply]); // Concatenate templates with existing ones
              // TODO(indutny): it should be possible to incrementally add templates

              if (this.tree) {
                this.runOninit(out.oninit);
                out = {
                  templates: out.templates.concat(this.tree.templates),
                  oninit: this.tree.oninit.concat(out.oninit)
                };
              }

              this.tree = out; // Group block+elem entities into a hashmap

              var ent = this.groupEntities(out.templates); // Transform entities from arrays to Entity instances

              ent = this.transformEntities(ent);
              this.entities = ent;
              this.oninit = out.oninit;
            };

            BEMXJST.prototype.getTemplate = function (code, options) {
              this.compile(code, options);
              return this.exportApply();
            };

            BEMXJST.prototype.recompileInput = function (code) {
              var args = BEMXJST.prototype.locals; // Reuse function if it already has right arguments

              if (typeof code === 'function' && code.length === args.length) return code;
              return new Function(args.join(', '), utils.fnToString(code));
            };

            BEMXJST.prototype.groupEntities = function (tree) {
              var res = {};

              for (var i = 0; i < tree.length; i++) {
                // Make sure to change only the copy, the original is cached in `this.tree`
                var template = tree[i].clone();
                var block = null;
                var elem;
                elem = undefined;

                for (var j = 0; j < template.predicates.length; j++) {
                  var pred = template.predicates[j];
                  if (!(pred instanceof PropertyMatch) && !(pred instanceof AddMatch)) continue;
                  if (pred.key === 'block') block = pred.value;else if (pred.key === 'elem') elem = pred.value;else continue; // Remove predicate, we won't much against it

                  template.predicates.splice(j, 1);
                  j--;
                }

                if (block === null) {
                  var msg = 'block(…) subpredicate is not found.\n' + '    See template with subpredicates:\n     * ';

                  for (var j = 0; j < template.predicates.length; j++) {
                    var pred = template.predicates[j];
                    if (j !== 0) msg += '\n     * ';

                    if (pred.key === '_mode') {
                      msg += pred.value + '()';
                    } else {
                      if (Array.isArray(pred.key)) {
                        msg += pred.key[0].replace('mods', 'mod').replace('elemMods', 'elemMod') + '(\'' + pred.key[1] + '\', \'' + pred.value + '\')';
                      } else {
                        msg += 'match(…)';
                      }
                    }
                  }

                  msg += '\n    And template body: \n    (' + (typeof template.body === 'function' ? template.body : JSON.stringify(template.body)) + ')';

                  if (typeof BEMXJSTError === 'undefined') {
                    BEMXJSTError = require('./error').BEMXJSTError;
                  }

                  throw new BEMXJSTError(msg);
                }

                var key = this.classBuilder.build(block, elem);
                if (!res[key]) res[key] = [];
                res[key].push(template);
              }

              return res;
            };

            BEMXJST.prototype.transformEntities = function (entities) {
              var wildcardElems = [];
              var keys = Object.keys(entities);

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i]; // TODO(indutny): pass this values over

                var parts = this.classBuilder.split(key);
                var block = parts[0];
                var elem = parts[1];
                if (elem === '*') wildcardElems.push(block);
                entities[key] = new this.Entity(this, block, elem, entities[key]);
              } // Merge wildcard block templates


              if (entities.hasOwnProperty('*')) {
                var wildcard = entities['*'];

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (key === '*') continue;
                  entities[key].prepend(wildcard);
                }

                this.defaultEnt.prepend(wildcard);
                this.defaultElemEnt.prepend(wildcard);
              } // Merge wildcard elem templates


              for (var i = 0; i < wildcardElems.length; i++) {
                var block = wildcardElems[i];
                var wildcardKey = this.classBuilder.build(block, '*');
                var wildcard = entities[wildcardKey];

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (key === wildcardKey) continue;
                  var entity = entities[key];
                  if (entity.block !== block || entity.elem === undefined) continue;
                  entities[key].prepend(wildcard);
                }

                this.defaultElemEnt.prepend(wildcard);
              } // Set default templates after merging with wildcard


              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                entities[key].setDefaults();
                this.defaultEnt.setDefaults();
                this.defaultElemEnt.setDefaults();
              }

              return entities;
            };

            BEMXJST.prototype._run = function (context) {
              if (context === undefined || context === '' || context === null) return this.runEmpty();else if (Array.isArray(context)) return this.runMany(context);else if (typeof context.html === 'string' && !context.tag && typeof context.block === 'undefined' && typeof context.elem === 'undefined' && typeof context.cls === 'undefined' && typeof context.attrs === 'undefined') return this.runUnescaped(context);else if (utils.isSimple(context)) return this.runSimple(context);
              return this.runOne(context);
            };

            BEMXJST.prototype.run = function (json) {
              var match = this.match;
              var context = this.context;
              var depth = this.depth;
              this.match = null;
              this.context = new this.contextConstructor(this);
              this.canFlush = this.context._flush !== null;
              this.depth = 0;

              var res = this._run(json);

              if (this.canFlush) res = this.context._flush(res);
              this.match = match;
              this.context = context;
              this.depth = depth;
              return res;
            };

            BEMXJST.prototype.runEmpty = function () {
              this.context._listLength--;
              return '';
            };

            BEMXJST.prototype.runUnescaped = function (context) {
              this.context._listLength--;
              return '' + context.html;
            };

            BEMXJST.prototype.runSimple = function (simple) {
              this.context._listLength--;
              if (!simple && simple !== 0 || simple === true) return '';
              return typeof simple === 'string' && this.context.escapeContent ? utils.xmlEscape(simple) : simple;
            };

            BEMXJST.prototype.runOne = function (json) {
              var context = this.context;
              var oldCtx = context.ctx;
              var oldBlock = context.block;
              var oldCurrBlock = context._currBlock;
              var oldElem = context.elem;
              var oldMods = context.mods;
              var oldElemMods = context.elemMods;
              if (json.block || json.elem) context._currBlock = '';else context._currBlock = context.block;
              context.ctx = json;

              if (json.block) {
                context.block = json.block;
                if (json.mods) context.mods = json.mods;else if (json.block !== oldBlock || !json.elem) context.mods = {};
              } else {
                if (!json.elem) context.block = '';else if (oldCurrBlock) context.block = oldCurrBlock;
              }

              context.elem = json.elem;
              if (json.elemMods) context.elemMods = json.elemMods;else context.elemMods = {};
              var block = context.block || '';
              var elem = context.elem; // Control list position

              if (block || elem) context.position++;else context._listLength--; // To invalidate `applyNext` flags

              this.depth++;
              var restoreFlush = false;
              var ent = this.entities[this.classBuilder.build(block, elem)];

              if (ent) {
                if (this.canFlush && !ent.canFlush) {
                  // Entity does not support flushing, do not flush anything nested
                  restoreFlush = true;
                  this.canFlush = false;
                }
              } else {
                // No entity - use default one
                ent = this.defaultEnt;
                if (elem !== undefined) ent = this.defaultElemEnt;
                ent.init(block, elem);
              }

              var res = this.options.production === true ? this.tryRun(context, ent) : ent.run(context);
              context.ctx = oldCtx;
              context.block = oldBlock;
              context.elem = oldElem;
              context.mods = oldMods;
              context.elemMods = oldElemMods;
              context._currBlock = oldCurrBlock;
              this.depth--;
              if (restoreFlush) this.canFlush = true;
              return res;
            };

            BEMXJST.prototype.tryRun = function (context, ent) {
              try {
                return ent.run(context);
              } catch (e) {
                return context.onError(context, e) || '';
              }
            };

            BEMXJST.prototype.renderContent = function (content, isBEM) {
              var context = this.context;
              var oldPos = context.position;
              var oldListLength = context._listLength;
              var oldNotNewList = context._notNewList;
              context._notNewList = false;

              if (isBEM) {
                context.position = 0;
                context._listLength = 1;
              }

              var res = this._run(content);

              context.position = oldPos;
              context._listLength = oldListLength;
              context._notNewList = oldNotNewList;
              return res;
            };

            BEMXJST.prototype.local = function (changes, body) {
              var keys = Object.keys(changes);
              var restore = [];

              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var parts = key.split('.');
                var value = this.context;

                for (var j = 0; j < parts.length - 1; j++) {
                  value = value[parts[j]];
                }

                restore.push({
                  parts: parts,
                  value: value[parts[j]]
                });
                value[parts[j]] = changes[key];
              }

              var res = body.call(this.context);

              for (var i = 0; i < restore.length; i++) {
                var parts = restore[i].parts;
                var value = this.context;

                for (var j = 0; j < parts.length - 1; j++) {
                  value = value[parts[j]];
                }

                value[parts[j]] = restore[i].value;
              }

              return res;
            };

            BEMXJST.prototype.applyNext = function () {
              return this.match.exec(this.context);
            };

            BEMXJST.prototype.applyMode = function (mode, changes) {
              var key;
              var match = this.match;

              if (!match) {
                var key = this.classBuilder.build(this.context.block, this.context.elem);
                match = this.entities[key].rest[mode];
              } else {
                match = this.match.entity.rest[mode];
              }

              if (!match) {
                if (mode === 'mods') return this.context.mods;
                if (mode === 'elemMods') return this.context.elemMods;
                return this.context.ctx[mode];
              }

              if (!changes) return match.exec(this.context);
              var self = this; // Allocate function this way, to prevent allocation at the top of the
              // `applyMode`

              var localBody = function localBody() {
                return match.exec(self.context);
              };

              return this.local(changes, localBody);
            };

            BEMXJST.prototype.exportApply = function (exports) {
              var self = this;
              var ret = exports || {};

              ret.apply = function (context) {
                return self.run(context);
              }; // Add templates at run time


              ret.compile = function (templates) {
                self.compile(templates);
                return ret;
              };

              this.runOninit(self.oninit, ret);
              return ret;
            };
          }, {
            "./class-builder": 3,
            "./context": 4,
            "./error": 6,
            "./tree": 9,
            "./utils": 10,
            "inherits": 11
          }],
          8: [function (require, module, exports) {
            var tree = require('./tree');

            var PropertyMatch = tree.PropertyMatch;
            var AddMatch = tree.AddMatch;
            var WrapMatch = tree.WrapMatch;
            var ExtendMatch = tree.ExtendMatch;
            var CustomMatch = tree.CustomMatch;

            function MatchNested(template, pred) {
              this.template = template;
              this.keys = pred.key;
              this.value = pred.value;
            }

            MatchNested.prototype.exec = function (context) {
              var val = context;

              for (var i = 0; i < this.keys.length - 1; i++) {
                val = val[this.keys[i]];
                if (!val) return false;
              }

              val = val[this.keys[i]];
              if (this.value === true) return val !== undefined && val !== '' && val !== false && val !== null;
              return String(val) === this.value;
            };

            function MatchCustom(template, pred) {
              this.template = template;
              this.body = pred.body;
            }

            MatchCustom.prototype.exec = function (context) {
              return this.body.call(context, context, context.ctx);
            };

            function MatchWrap(template) {
              this.template = template;
              this.wrap = null;
            }

            MatchWrap.prototype.exec = function (context) {
              var res = this.wrap !== context.ctx;
              this.wrap = context.ctx;
              return res;
            };

            function MatchExtend(template) {
              this.template = template;
              this.wrap = null;
            }

            MatchExtend.prototype.exec = function (context) {
              var res = this.ext !== context.ctx;
              this.ext = context.ctx;
              return res;
            };

            function AddWrap(template, pred) {
              this.template = template;
              this.key = pred.key;
              this.value = pred.value;
            }

            AddWrap.prototype.exec = function (context) {
              return context[this.key] === this.value;
            };

            function MatchTemplate(mode, template) {
              this.mode = mode;
              this.predicates = new Array(template.predicates.length);
              this.body = template.body;
              var postpone = [];

              for (var i = 0, j = 0; i < this.predicates.length; i++, j++) {
                var pred = template.predicates[i];

                if (pred instanceof PropertyMatch) {
                  this.predicates[j] = new MatchNested(this, pred);
                } else if (pred instanceof ExtendMatch) {
                  j--;
                  postpone.push(new MatchExtend(this));
                } else if (pred instanceof AddMatch) {
                  this.predicates[j] = new AddWrap(this, pred);
                } else if (pred instanceof CustomMatch) {
                  this.predicates[j] = new MatchCustom(this, pred); // Push MatchWrap later, they should not be executed first.
                  // Otherwise they will set flag too early, and body might not be executed
                } else if (pred instanceof WrapMatch) {
                  j--;
                  postpone.push(new MatchWrap(this));
                } else {
                  // Skip
                  j--;
                }
              } // Insert late predicates


              for (var i = 0; i < postpone.length; i++, j++) {
                this.predicates[j] = postpone[i];
              }

              if (this.predicates.length !== j) this.predicates.length = j;
            }

            exports.MatchTemplate = MatchTemplate;

            function Match(entity, modeName) {
              this.entity = entity;
              this.modeName = modeName;
              this.bemxjst = this.entity.bemxjst;
              this.templates = []; // applyNext mask

              this.mask = [0]; // We are going to create copies of mask for nested `applyNext()`

              this.maskSize = 0;
              this.maskOffset = 0;
              this.count = 0;
              this.depth = -1;
              this.thrownError = null;
            }

            exports.Match = Match;

            Match.prototype.prepend = function (other) {
              this.templates = other.templates.concat(this.templates);
              this.count += other.count;

              while (Math.ceil(this.count / 31) > this.mask.length) {
                this.mask.push(0);
              }

              this.maskSize = this.mask.length;
            };

            Match.prototype.push = function (template) {
              this.templates.push(new MatchTemplate(this, template));
              this.count++;
              if (Math.ceil(this.count / 31) > this.mask.length) this.mask.push(0);
              this.maskSize = this.mask.length;
            };

            Match.prototype.tryCatch = function (fn, ctx) {
              try {
                return fn.call(ctx, ctx, ctx.ctx);
              } catch (e) {
                this.thrownError = e;

                if (this.modeName) {
                  this.thrownError.ctx = ctx;
                  this.thrownError.name = 'BEMXJST ERROR';
                  var classBuilder = this.entity.bemxjst.classBuilder;
                  var cause = e.stack.split('\n')[1];
                  this.thrownError.message = 'Template error in mode ' + this.modeName + ' in block ' + classBuilder.build(ctx.ctx.block, ctx.ctx.elem) + '\n    ' + e.message + '\n';
                  this.thrownError.stack = this.thrownError.name + ': ' + this.thrownError.message + ' ' + cause + '\n' + e.stack;
                }
              }
            };

            Match.prototype.exec = function (context) {
              var save = this.checkDepth();
              var template;
              var bitIndex = this.maskOffset;
              var mask = this.mask[bitIndex];
              var bit = 1;

              for (var i = 0; i < this.count; i++) {
                if ((mask & bit) === 0) {
                  template = this.templates[i];

                  for (var j = 0; j < template.predicates.length; j++) {
                    var pred = template.predicates[j];
                    /* jshint maxdepth : false */

                    if (!pred.exec(context)) break;
                  } // All predicates matched!


                  if (j === template.predicates.length) break;
                }

                if (bit === 0x40000000) {
                  bitIndex++;
                  mask = this.mask[bitIndex];
                  bit = 1;
                } else {
                  bit <<= 1;
                }
              }

              if (i === this.count) {
                this.restoreDepth(save);
                if (this.modeName === 'mods') return context.mods;
                if (this.modeName === 'elemMods') return context.elemMods;
                return context.ctx[this.modeName];
              }

              var oldMask = mask;
              var oldMatch = this.bemxjst.match;
              this.mask[bitIndex] |= bit;
              this.bemxjst.match = this;
              this.thrownError = null;
              var out;
              if (typeof template.body === 'function') out = this.tryCatch(template.body, context);else out = template.body;
              this.mask[bitIndex] = oldMask;
              this.bemxjst.match = oldMatch;
              this.restoreDepth(save);
              var e = this.thrownError;

              if (e !== null) {
                this.thrownError = null;
                throw e;
              }

              return out;
            };

            Match.prototype.checkDepth = function () {
              if (this.depth === -1) {
                this.depth = this.bemxjst.depth;
                return -1;
              }

              if (this.bemxjst.depth === this.depth) return this.depth;
              var depth = this.depth;
              this.depth = this.bemxjst.depth;
              this.maskOffset += this.maskSize;

              while (this.mask.length < this.maskOffset + this.maskSize) {
                this.mask.push(0);
              }

              return depth;
            };

            Match.prototype.restoreDepth = function (depth) {
              if (depth !== -1 && depth !== this.depth) this.maskOffset -= this.maskSize;
              this.depth = depth;
            };
          }, {
            "./tree": 9
          }],
          9: [function (require, module, exports) {
            var inherits = require('inherits');

            var utils = require('./utils');

            function Template(predicates, body) {
              this.predicates = predicates;
              this.body = body;
            }

            exports.Template = Template;

            Template.prototype.wrap = function () {
              var body = this.body;

              for (var i = 0; i < this.predicates.length; i++) {
                var pred = this.predicates[i];
                body = pred.wrapBody(body);
              }

              this.body = body;
            };

            Template.prototype.clone = function () {
              return new Template(this.predicates.slice(), this.body);
            };

            function MatchBase() {}

            exports.MatchBase = MatchBase;

            MatchBase.prototype.wrapBody = function (body) {
              return body;
            };

            function Item(tree, children) {
              this.conditions = [];
              this.children = [];

              for (var i = children.length - 1; i >= 0; i--) {
                var arg = children[i];
                if (arg instanceof MatchBase) this.conditions.push(arg);else if (arg === tree.boundBody) this.children[i] = tree.queue.pop();else this.children[i] = arg;
              }
            }

            function WrapMatch(refs) {
              MatchBase.call(this);
              this.refs = refs;
            }

            inherits(WrapMatch, MatchBase);
            exports.WrapMatch = WrapMatch;

            WrapMatch.prototype.wrapBody = function (body) {
              var _applyCtx = this.refs._applyCtx;

              if (typeof body !== 'function') {
                return function () {
                  return _applyCtx(body);
                };
              }

              return function () {
                return _applyCtx(body.call(this, this, this.ctx));
              };
            };

            function ReplaceMatch(refs) {
              MatchBase.call(this);
              this.refs = refs;
            }

            inherits(ReplaceMatch, MatchBase);
            exports.ReplaceMatch = ReplaceMatch;

            ReplaceMatch.prototype.wrapBody = function (body) {
              var applyCtx = this.refs.applyCtx;

              if (typeof body !== 'function') {
                return function () {
                  return applyCtx(body, {
                    position: this.position - 1
                  });
                };
              }

              return function () {
                return applyCtx(body.call(this, this, this.ctx), {
                  position: this.position - 1
                });
              };
            };

            function ExtendMatch(refs) {
              MatchBase.call(this);
              this.refs = refs;
            }

            inherits(ExtendMatch, MatchBase);
            exports.ExtendMatch = ExtendMatch;

            ExtendMatch.prototype.wrapBody = function (body) {
              var refs = this.refs;
              var applyCtx = refs.applyCtx;

              if (typeof body !== 'function') {
                return function () {
                  var changes = {};
                  var keys = Object.keys(body);

                  for (var i = 0; i < keys.length; i++) {
                    changes[keys[i]] = body[keys[i]];
                  }

                  return applyCtx(this.ctx, changes);
                };
              }

              return function () {
                var changes = {};
                var obj = body.call(this, this, this.ctx);
                var keys = Object.keys(obj);

                for (var i = 0; i < keys.length; i++) {
                  changes[keys[i]] = obj[keys[i]];
                }

                return applyCtx(this.ctx, changes);
              };
            };

            function AddMatch(mode, refs) {
              MatchBase.call(this);
              this.mode = mode;
              this.refs = refs;
            }

            inherits(AddMatch, MatchBase);
            exports.AddMatch = AddMatch;

            AddMatch.prototype.wrapBody = function (body) {
              return this[this.mode + 'WrapBody'](body);
            };

            AddMatch.prototype.appendContentWrapBody = function (body) {
              var apply = this.refs.apply;

              if (typeof body !== 'function') {
                return function () {
                  return [apply('content'), body];
                };
              }

              return function () {
                return [apply('content'), body.call(this, this, this.ctx)];
              };
            };

            AddMatch.prototype.prependContentWrapBody = function (body) {
              var apply = this.refs.apply;

              if (typeof body !== 'function') {
                return function () {
                  return [body, apply('content')];
                };
              }

              return function () {
                return [body.call(this, this, this.ctx), apply('content')];
              };
            };

            AddMatch.prototype.mixWrapBody = function (body) {
              var apply = this.refs.apply;

              if (typeof body !== 'function') {
                return function () {
                  var ret = apply('mix');
                  /* istanbul ignore else */

                  if (!Array.isArray(ret)) ret = [ret];
                  return ret.concat(body);
                };
              }

              return function () {
                var ret = apply('mix');
                if (!Array.isArray(ret)) ret = [ret];
                return ret.concat(body.call(this, this, this.ctx));
              };
            };

            ['attrs', 'js', 'mods', 'elemMods'].forEach(function (method) {
              AddMatch.prototype[method + 'WrapBody'] = function (body) {
                var apply = this.refs.apply;
                return typeof body !== 'function' ? function () {
                  return this[method] = utils.extend(apply(method) || {}, body);
                } : function () {
                  return this[method] = utils.extend(apply(method) || {}, body.call(this, this, this.ctx));
                };
              };
            });

            function CompilerOptions(options) {
              MatchBase.call(this);
              this.options = options;
            }

            inherits(CompilerOptions, MatchBase);
            exports.CompilerOptions = CompilerOptions;

            function PropertyMatch(key, value) {
              MatchBase.call(this);
              this.key = key;
              this.value = value;
            }

            inherits(PropertyMatch, MatchBase);
            exports.PropertyMatch = PropertyMatch;

            function CustomMatch(body) {
              MatchBase.call(this);
              this.body = body;
            }

            inherits(CustomMatch, MatchBase);
            exports.CustomMatch = CustomMatch;

            function Tree(options) {
              this.options = options;
              this.refs = this.options.refs;
              this.boundBody = this.body.bind(this);
              var methods = this.methods('body');

              for (var i = 0; i < methods.length; i++) {
                var method = methods[i]; // NOTE: method.name is empty because of .bind()

                this.boundBody[Tree.methods[i]] = method;
              }

              this.queue = [];
              this.templates = [];
              this.initializers = [];
            }

            exports.Tree = Tree;
            Tree.methods = [// Subpredicates:
            'match', 'block', 'elem', 'mod', 'elemMod', // Runtime related:
            'oninit', 'xjstOptions', // Output generators:
            'wrap', 'replace', 'extend', 'mode', 'def', 'content', 'appendContent', 'prependContent', 'attrs', 'addAttrs', 'js', 'addJs', 'mix', 'addMix', 'mods', 'addMods', 'addElemMods', 'elemMods', 'tag', 'cls', 'bem'];

            Tree.prototype.build = function (templates, apply) {
              var methods = this.methods('global').concat(apply);
              methods[0] = this.match.bind(this);
              templates.apply({}, methods);
              return {
                templates: this.templates.slice().reverse(),
                oninit: this.initializers
              };
            };

            function methodFactory(self, kind, name) {
              var method = self[name];
              var boundBody = self.boundBody;

              if (kind !== 'body') {
                if (name === 'replace' || name === 'extend' || name === 'wrap') {
                  return function () {
                    return method.apply(self, arguments);
                  };
                }

                return function () {
                  method.apply(self, arguments);
                  return boundBody;
                };
              }

              return function () {
                var res = method.apply(self, arguments); // Insert body into last item

                var child = self.queue.pop();
                var last = self.queue[self.queue.length - 1];
                last.conditions = last.conditions.concat(child.conditions);
                last.children = last.children.concat(child.children);
                if (name === 'replace' || name === 'extend' || name === 'wrap') return res;
                return boundBody;
              };
            }

            Tree.prototype.methods = function (kind) {
              var out = new Array(Tree.methods.length);

              for (var i = 0; i < out.length; i++) {
                var name = Tree.methods[i];
                out[i] = methodFactory(this, kind, name);
              }

              return out;
            }; // Called after all matches


            Tree.prototype.flush = function (conditions, item) {
              var subcond = item.conditions ? conditions.concat(item.conditions) : item.conditions;

              for (var i = 0; i < item.children.length; i++) {
                var arg = item.children[i]; // Go deeper

                if (arg instanceof Item) {
                  this.flush(subcond, item.children[i]); // Body
                } else {
                  if (this.isShortcutAllowed(arg, conditions)) {
                    var keys = Object.keys(arg);

                    for (var n = 0; n < keys.length; n++) {
                      this.addTemplate(conditions.concat(this.createMatch(keys[n])), arg[keys[n]]);
                    }
                  } else {
                    this.addTemplate(conditions, arg);
                  }
                }
              }
            };

            Tree.prototype.createMatch = function (modeName) {
              switch (modeName) {
                case 'addAttrs':
                  return [new PropertyMatch('_mode', 'attrs'), new AddMatch('attrs', this.refs)];

                case 'addJs':
                  return [new PropertyMatch('_mode', 'js'), new AddMatch('js', this.refs)];

                case 'addMix':
                  return [new PropertyMatch('_mode', 'mix'), new AddMatch('mix', this.refs)];

                case 'addMods':
                  return [new PropertyMatch('_mode', 'mods'), new AddMatch('mods', this.refs)];

                case 'addElemMods':
                  return [new PropertyMatch('_mode', 'elemMods'), new AddMatch('elemMods', this.refs)];

                case 'appendContent':
                case 'prependContent':
                  return [new PropertyMatch('_mode', 'content'), new AddMatch(modeName, this.refs)];

                case 'wrap':
                  return new WrapMatch(this.refs);

                case 'replace':
                  return new ReplaceMatch(this.refs);

                case 'extend':
                  return new ExtendMatch(this.refs);

                case 'def':
                  return new PropertyMatch('_mode', 'default');

                default:
                  return new PropertyMatch('_mode', modeName);
              }
            };

            Tree.prototype.addTemplate = function (conditions, arg) {
              var template = new Template(conditions, arg);
              template.wrap();
              this.templates.push(template);
            };

            Tree.prototype.body = function () {
              var children = new Array(arguments.length);

              for (var i = 0; i < arguments.length; i++) {
                children[i] = arguments[i];
              }

              var child = new Item(this, children);
              this.queue[this.queue.length - 1].children.push(child);
              if (this.queue.length === 1) this.flush([], this.queue.shift());
              return this.boundBody;
            };

            Tree.modsCheck = {
              mods: 1,
              elemMods: 1
            };

            Tree.checkConditions = function (conditions) {
              for (var i = 0; i < conditions.length; i++) {
                var condition = conditions[i];
                if (condition.key === 'block' || condition.key === 'elem' || Array.isArray(condition.key) && Tree.modsCheck[condition.key[0]] || condition instanceof CustomMatch) continue;
                return false;
              }

              return true;
            };

            Tree.prototype.isShortcutAllowed = function (arg, conditions) {
              return _typeof(arg) === 'object' && arg !== null && !Array.isArray(arg) && Tree.checkConditions(conditions);
            };

            Tree.prototype.match = function () {
              var children = new Array(arguments.length);
              if (!arguments.length) throw new Error('.match() must have argument');

              for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (typeof arg === 'function') arg = new CustomMatch(arg);
                if (!(arg instanceof MatchBase)) throw new Error('Wrong .match() argument');
                children[i] = arg;
              }

              this.queue.push(new Item(this, children));
              return this.boundBody;
            };

            Tree.prototype.applyMode = function (args, mode) {
              if (args.length) {
                throw new Error('Predicate should not have arguments but ' + JSON.stringify(args) + ' passed');
              }

              return this.mode(mode);
            };

            Tree.prototype.xjstOptions = function (options) {
              this.queue.push(new Item(this, [new CompilerOptions(options)]));
              return this.boundBody;
            };

            ['mode', 'elem', 'block'].forEach(function (method) {
              Tree.prototype[method] = function (name) {
                return this.match(new PropertyMatch(method === 'mode' ? '_mode' : method, name));
              };
            });
            ['mod', 'elemMod'].forEach(function (method) {
              Tree.prototype[method] = function (name, value) {
                return this.match(new PropertyMatch([method + 's', name], value === undefined ? true : String(value)));
              };
            });

            Tree.prototype.def = function () {
              return this.applyMode(arguments, 'default');
            };

            ['content', 'mix', 'bem', 'js', 'cls', 'attrs', 'tag', 'elemMods', 'mods'].forEach(function (method) {
              Tree.prototype[method] = function () {
                return this.applyMode(arguments, method);
              };
            });
            ['appendContent', 'prependContent'].forEach(function (method) {
              Tree.prototype[method] = function () {
                return this.content.apply(this, arguments).match(new AddMatch(method, this.refs));
              };
            });

            function capitalize(s) {
              return s[0].toUpperCase() + s.slice(1);
            }

            ['mods', 'elemMods', 'attrs', 'js', 'mix'].forEach(function (method) {
              Tree.prototype['add' + capitalize(method)] = function () {
                return this[method].apply(this, arguments).match(new AddMatch(method, this.refs));
              };
            });

            Tree.prototype.wrap = function () {
              return this.def.apply(this, arguments).match(new WrapMatch(this.refs));
            };

            Tree.prototype.replace = function () {
              return this.def.apply(this, arguments).match(new ReplaceMatch(this.refs));
            };

            Tree.prototype.extend = function () {
              return this.def.apply(this, arguments).match(new ExtendMatch(this.refs));
            };

            Tree.prototype.oninit = function (fn) {
              this.initializers.push(fn);
            };
          }, {
            "./utils": 10,
            "inherits": 11
          }],
          10: [function (require, module, exports) {
            var amp = '&amp;';
            var lt = '&lt;';
            var gt = '&gt;';
            var quot = '&quot;';
            var singleQuot = '&#39;';
            var matchXmlRegExp = /[&<>]/;

            function isEmpty(string) {
              return typeof string === 'undefined' || string === null || typeof string === 'number' && isNaN(string);
            }

            exports.xmlEscape = function (string) {
              if (isEmpty(string)) return '';
              var str = '' + string;
              var match = matchXmlRegExp.exec(str);
              if (!match) return str;
              var escape;
              var html = '';
              var index = 0;
              var lastIndex = 0;

              for (index = match.index; index < str.length; index++) {
                switch (str.charCodeAt(index)) {
                  case 38:
                    // &
                    escape = amp;
                    break;

                  case 60:
                    // <
                    escape = lt;
                    break;

                  case 62:
                    // >
                    escape = gt;
                    break;

                  default:
                    continue;
                }

                if (lastIndex !== index) html += str.substring(lastIndex, index);
                lastIndex = index + 1;
                html += escape;
              }

              return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
            };

            var matchAttrRegExp = /["&]/;

            exports.attrEscape = function (string) {
              if (isEmpty(string)) return '';
              var str = '' + string;
              var match = matchAttrRegExp.exec(str);
              if (!match) return str;
              var escape;
              var html = '';
              var index = 0;
              var lastIndex = 0;

              for (index = match.index; index < str.length; index++) {
                switch (str.charCodeAt(index)) {
                  case 34:
                    // "
                    escape = quot;
                    break;

                  case 38:
                    // &
                    escape = amp;
                    break;

                  default:
                    continue;
                }

                if (lastIndex !== index) html += str.substring(lastIndex, index);
                lastIndex = index + 1;
                html += escape;
              }

              return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
            };

            var matchJsAttrRegExp = /['&]/;

            exports.jsAttrEscape = function (string) {
              if (isEmpty(string)) return '';
              var str = '' + string;
              var match = matchJsAttrRegExp.exec(str);
              if (!match) return str;
              var escape;
              var html = '';
              var index = 0;
              var lastIndex = 0;

              for (index = match.index; index < str.length; index++) {
                switch (str.charCodeAt(index)) {
                  case 38:
                    // &
                    escape = amp;
                    break;

                  case 39:
                    // '
                    escape = singleQuot;
                    break;

                  default:
                    continue;
                }

                if (lastIndex !== index) html += str.substring(lastIndex, index);
                lastIndex = index + 1;
                html += escape;
              }

              return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
            };

            exports.extend = function (o1, o2) {
              if (!o1 || !o2) return o1 || o2;
              var res = {};
              var n;

              for (n in o1) {
                /* istanbul ignore else */
                if (o1.hasOwnProperty(n)) res[n] = o1[n];
              }

              for (n in o2) {
                /* istanbul ignore else */
                if (o2.hasOwnProperty(n)) res[n] = o2[n];
              }

              return res;
            };

            var SHORT_TAGS = {
              // hash for quick check if tag short
              area: 1,
              base: 1,
              br: 1,
              col: 1,
              command: 1,
              embed: 1,
              hr: 1,
              img: 1,
              input: 1,
              keygen: 1,
              link: 1,
              meta: 1,
              param: 1,
              source: 1,
              wbr: 1
            };

            exports.isShortTag = function (t) {
              return SHORT_TAGS.hasOwnProperty(t);
            };

            exports.isSimple = function isSimple(obj) {
              if (!obj || obj === true) return true;
              if (!obj.block && !obj.elem && !obj.tag && !obj.cls && !obj.attrs && obj.hasOwnProperty('html') && isSimple(obj.html)) return true;
              return typeof obj === 'string' || typeof obj === 'number';
            };

            exports.isObj = function (val) {
              return val && _typeof(val) === 'object' && !Array.isArray(val) && val !== null;
            };

            var uniqCount = 0;
            var uniqId = +new Date();
            var uniqExpando = '__' + uniqId;
            var uniqPrefix = 'uniq' + uniqId;

            function getUniq() {
              return uniqPrefix + ++uniqCount;
            }

            exports.getUniq = getUniq;

            exports.identify = function (obj, onlyGet) {
              if (!obj) return getUniq();
              if (onlyGet || obj[uniqExpando]) return obj[uniqExpando];
              var u = getUniq();
              obj[uniqExpando] = u;
              return u;
            };

            exports.fnToString = function (code) {
              // It is fine to compile without templates at first
              if (!code) return '';

              if (typeof code === 'function') {
                // Examples for regular function
                //   function () { … }
                //   function name() { … }
                //   function (a, b) { … }
                //   function name(a, b) { … }
                //
                // Examples for arrow function
                //   () => { … }
                //   (a, b) => { … }
                //   _ => { … }
                code = code.toString();
                code = code.replace(code.indexOf('function') === 0 ? /^function\s*[^{]+{|}$/g : /^(_|\(\w|[^=>]+\))\s=>\s{|}$/g, '');
              }

              return code;
            };
            /**
             * regexp for check may attribute be unquoted
             *
             * https://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.2
             * https://www.w3.org/TR/html5/syntax.html#attributes
             */


            var UNQUOTED_ATTR_REGEXP = /^[:\w.-]+$/;

            exports.isUnquotedAttr = function (str) {
              return str && UNQUOTED_ATTR_REGEXP.exec(str);
            };
          }, {}],
          11: [function (require, module, exports) {
            if (typeof Object.create === 'function') {
              // implementation from standard node.js 'util' module
              module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                  constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                });
              };
            } else {
              // old school shim for old browsers
              module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;

                var TempCtor = function TempCtor() {};

                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor();
                ctor.prototype.constructor = ctor;
              };
            }
          }, {}]
        }, {}, [2])(2);
      });

      ;
      return module.exports || exports.bemtree;
    }({}, {});

    var api = new bemtree({
      "exportName": "bemtree",
      "runtimeLinting": true,
      "to": "/home/astronaut/gitHub/rowbot/three_in_a_boat_front"
    });
    api.compile(function (match, block, elem, mod, elemMod, oninit, xjstOptions, wrap, replace, extend, mode, def, content, appendContent, prependContent, attrs, addAttrs, js, addJs, mix, addMix, mods, addMods, addElemMods, elemMods, tag, cls, bem, local, applyCtx, applyNext, apply) {
      /* BEM-XJST User code here: */
      block('authors').elem('img')({
        'tag': 'img'
      });
      block('authors').elem('items').match(function (node, ctx) {
        return ctx.authors !== undefined;
      })({
        appendContent: function appendContent(node, ctx) {
          return ctx.authors.map(function (elt) {
            return {
              elem: 'item',
              content: [{
                elem: 'img',
                attrs: {
                  src: elt.img,
                  alt: elt.name
                }
              }, {
                elem: 'title',
                content: elt.name
              }, {
                elem: 'subtitle',
                content: elt.devInfo
              }, {
                elem: 'description',
                content: elt.description
              }]
            };
          });
        }
      });
      block('btn')({
        'tag': 'button'
      });
      block('btn').elem('text')({
        'tag': 'span'
      });
      block('btn').elem('inner')({
        'tag': 'span'
      }); // if inner isn't explicitly wrapping the content - do that implicitly

      block('btn').match(function (node, ctx) {
        return ctx.content && ctx.content.find(function (elt) {
          return elt['elem'] === 'inner';
        }) === undefined;
      })({
        content: function content() {
          return [{
            elem: 'inner',
            content: applyNext()
          }];
        }
      });
      block('btn').match(function (node, ctx) {
        return !ctx.content && ctx.icon && ctx.btnText;
      })({
        addMods: {
          'with-icon': true
        },
        content: function content(node, ctx) {
          return [{
            elem: 'inner',
            content: [{
              block: 'icon',
              wrappedInside: 'btn',
              mods: {
                type: ctx.icon,
                size: ctx.mods.size
              }
            }, {
              elem: 'text',
              content: ctx.btnText
            }]
          }];
        }
      });
      block('checkbox')({
        tag: 'input',
        addAttrs: {
          type: 'checkbox'
        }
      });
      block('checkbox')({
        tag: 'input',
        addAttrs: function addAttrs(node, ctx) {
          return {
            'id': node.formId + '_' + ctx.fieldName,
            'name': ctx.fieldName
          };
        }
      });
      block('field-group')({
        extend: function extend(node) {
          return {
            _fieldParents: (node._fieldParents || []).concat(['field-group'])
          };
        }
      });
      block('field-group').match(function (node) {
        return Array.isArray(node._fieldParents) && (node._fieldParents.length > 0 && node._fieldParents[node._fieldParents.length - 1] !== 'field-group' || node._fieldParents.length > 1);
      })({
        addMix: function addMix(node) {
          return {
            block: node._fieldParents[node._fieldParents.length - 1] === 'field-group' ? node._fieldParents[node._fieldParents.length - 2] : node._fieldParents[node._fieldParents.length - 1],
            elem: 'field'
          };
        }
      });
      block('file-input').elem('field')({
        tag: 'input',
        addAttrs: function addAttrs(node) {
          return {
            id: node.formId + '_' + node.fieldName,
            name: node.fieldName,
            type: 'file'
          };
        }
      });
      block('file-input').elem('label')({
        tag: 'label',
        addAttrs: function addAttrs(node) {
          return {
            'for': node.formId + '_' + node.fieldName
          };
        }
      });
      block('file-input').elem('info')({
        tag: 'span'
      });
      block('file-input').match(function (node, ctx) {
        return !ctx.content;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'label',
            content: [ctx.labelText || 'Выберите файл']
          }, {
            elem: 'info',
            content: [ctx.emptyText || '(файл не выбран)']
          }, {
            elem: 'field'
          }];
        }
      });
      block('file-input')({
        extend: function extend(node, ctx) {
          return {
            fieldName: ctx.fieldName || node.generateId()
          };
        }
      });
      block('form')({
        tag: 'form'
      });
      block('form')({
        extend: function extend(node, ctx) {
          return {
            formId: ctx.name
          };
        }
      });
      block('form-group')({
        extend: function extend(node) {
          return {
            _fieldParents: (node._fieldParents || []).concat(['form-group'])
          };
        }
      });
      block('form-group').elem('help-text')({
        addAttrs: function addAttrs(node, ctx) {
          return {
            'id': "help_".concat(ctx['for'])
          };
        }
      });
      block('game')();
      block('game-info').elem('item')({
        content: function content(node, ctx) {
          return [{
            elem: 'item-name',
            content: ctx.name
          }, {
            elem: 'item-value',
            content: ctx.value
          }];
        }
      });
      block('game-info').elem('avatar')({
        tag: 'img'
      });
      block('game-info').elem('line')({
        tag: 'hr'
      });
      block('game-info').match(function (node, ctx) {
        return !ctx.content && ctx.userInfo;
      })({
        content: function content(node, ctx) {
          return ctx.userInfo.map(function (elt) {
            return {
              elem: 'item',
              name: elt[0],
              value: elt[1] || '-'
            };
          });
        }
      });
      block('*').match(function (node, ctx) {
        return ctx.wrappedInside;
      })({
        addMix: function addMix(node, ctx) {
          return {
            block: ctx.wrappedInside,
            elem: ctx.wrappedAs || ctx.block,
            elemMods: ctx.elemMods
          };
        }
      }); // not needed

      block('hexagons').elem('game')({
        tag: 'canvas'
      });
      block('icon')({
        tag: function tag(node, ctx) {
          return ctx.tag || 'i';
        }
      }); // not needed

      block('input').elem('field')({
        tag: 'input',
        addAttrs: function addAttrs(node) {
          return {
            'id': node.formId + '_' + node.fieldName,
            'name': node.fieldName
          };
        }
      });
      block('input').elem('field').match(function (node, ctx) {
        return !ctx.attrs || !ctx.attrs.type;
      })({
        addAttrs: {
          type: 'text'
        }
      });
      block('input').match(function (node, ctx) {
        return !ctx.content;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'field',
            attrs: ctx.fieldAttrs
          }];
        }
      });
      block('input')({
        extend: function extend(node, ctx) {
          return {
            fieldName: ctx.fieldName || node.generateId()
          };
        }
      });
      block('input').elem('tooltip')({
        addAttrs: function addAttrs(node, ctx) {
          return {
            'data-for': node.formId + (ctx['data-for'] || node.fieldName)
          };
        }
      }); // (form/field)-group related stuff

      block('input').match(function (node) {
        return Array.isArray(node._fieldParents) && node._fieldParents.length;
      })({
        addMix: function addMix(node) {
          return {
            block: node._fieldParents[node._fieldParents.length - 1],
            elem: 'field'
          };
        }
      }); // emptied out in favor of form

      block('menu').elem('link')({
        tag: 'a'
      });
      block('menu').elem('avatar')({
        tag: 'img'
      });
      block('menu').elem('title')({
        block: 'title',
        mods: {
          large: true
        }
      });
      block('menu').elem('items').match(function (node, ctx) {
        return ctx.points !== undefined;
      })({
        appendContent: function appendContent(node, ctx) {
          return ctx.points.map(function (elt) {
            return {
              elem: 'item',
              content: [{
                elem: 'link',
                attrs: {
                  'href': '#',
                  'data-link-type': elt.href
                },
                content: [{
                  tag: 'span',
                  block: 'icon-bg',
                  mods: {
                    borderless: true,
                    size: 'full',
                    color: 'dark-gray'
                  },
                  content: {
                    block: 'icon',
                    mods: {
                      color: 'white',
                      type: elt.type,
                      size: 'fit'
                    }
                  },
                  wrappedInside: 'menu',
                  wrappedAs: 'icon-bg'
                }, {
                  elem: 'text',
                  content: elt.text
                }]
              }]
            };
          });
        }
      });
      block('not-found-page').elem('link')({
        tag: 'a'
      }); // not needed

      block('pagination').elem('link')({
        tag: 'button'
      });
      block('pagination').elem('link').match(function (node, ctx) {
        return ctx.content;
      })({
        addMix: function addMix(node, ctx) {
          var mods = {};

          if (ctx.content === 'Вперед') {
            mods = {
              last: true
            };
          }

          if (ctx.content === 'Назад') {
            mods = {
              first: true
            };
          }

          return {
            block: 'pagination',
            elem: 'link',
            elemMods: mods
          };
        }
      });
      block('profile-info').elem('item')({
        content: function content(node, ctx) {
          return [{
            elem: 'item-name',
            content: ctx.name
          }, {
            elem: 'item-value',
            content: ctx.value
          }];
        }
      });
      block('profile-popup').elem('profile-icon')({
        tag: 'img'
      });
      block('profile-info').match(function (node, ctx) {
        return !ctx.content && ctx.userInfo;
      })({
        content: function content(node, ctx) {
          return ctx.userInfo.map(function (elt) {
            return {
              elem: 'item',
              name: elt[0],
              value: elt[1] || '-'
            };
          });
        }
      });
      block('profile-info').match(function (node, ctx) {
        return !ctx.content && ctx.fields;
      })({
        content: function content(node, ctx) {
          return ctx.fields.map(function (elt) {
            return {
              elem: 'item',
              name: elt.name,
              value: {
                block: 'form-group',
                mods: {
                  size: 'inline'
                },
                content: elt.content ? elt.content : [elt.value || {
                  block: 'input',
                  fieldName: elt.fieldName,
                  fieldAttrs: elt.fieldAttrs
                }, elt.novalidate ? {} : {
                  elem: 'help-text',
                  elemMods: {
                    hidden: true
                  },
                  "for": elt.fieldName || elt.value.fieldName
                }]
              }
            };
          });
        }
      });
      block('profile-popup').match(function (node, ctx) {
        return !ctx.content && ctx.title && (ctx.info || ctx.fields) && ctx.img && ctx.allowEdit !== undefined;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'title',
            content: [ctx.title]
          }, {
            elem: 'content',
            content: [{
              elem: 'profile-icon',
              attrs: {
                src: ctx.img
              }
            }, {
              block: 'profile-info',
              mix: {
                block: 'profile-popup',
                elem: 'profile-info'
              },
              userInfo: ctx.info,
              userFields: ctx.fields
            }, {
              elem: 'double-btn',
              content: ctx.allowEdit ? [{
                block: 'btn',
                mods: {
                  'size': 'large',
                  'with-icon': true,
                  'cancel': true
                },
                wrappedInside: 'profile-popup',
                icon: 'useredit',
                btnText: 'Изменить'
              }, {
                block: 'btn',
                attrs: {
                  'data-type': 'menu'
                },
                mods: {
                  'size': 'large',
                  'with-icon': true,
                  'cancel': false,
                  'color': 'muted'
                },
                wrappedInside: 'profile-popup',
                icon: 'back',
                btnText: 'В меню'
              }] : [{
                block: 'btn',
                attrs: {
                  'data-type': 'back'
                },
                mods: {
                  'size': 'large',
                  'with-icon': true,
                  'cancel': false,
                  'color': 'muted'
                },
                wrappedInside: 'profile-popup',
                icon: 'back',
                btnText: 'Назад'
              }]
            }]
          }];
        }
      });
      block('result-redirect').elem('btn')({
        tag: 'button'
      });
      block('result-redirect').elem('link')({
        tag: 'a  '
      });
      block('result-redirect').elem('btn').match(function (node, ctx) {
        return !ctx.content && ctx.btnText;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'inner',
            content: [{
              elem: 'text',
              content: ctx.btnText
            }]
          }];
        }
      });
      block('scoreboard').elem('username')({
        tag: 'span'
      });
      block('scoreboard').elem('avatar')({
        tag: 'img'
      });
      block('scoreboard').elem('items').match(function (node, ctx) {
        return ctx.scores !== undefined;
      })({
        appendContent: function appendContent(node, ctx) {
          return ctx.scores.map(function (elt, index) {
            return {
              elem: 'item',
              content: [{
                elem: 'user-data',
                content: [{
                  elem: 'place',
                  content: '#' + (ctx.page * 10 + (index + 1))
                }, {
                  elem: 'link',
                  tag: 'a',
                  fieldName: 'userName',
                  value: elt.userId,
                  attrs: {
                    value: elt.userId
                  },
                  // to be changed once api's here
                  content: [{
                    elem: 'data-field',
                    content: [{
                      elem: 'avatar',
                      attrs: {
                        src: elt.img,
                        alt: elt.name
                      }
                    }, {
                      elem: 'username',
                      content: elt.username
                    }]
                  }]
                }]
              }, {
                elem: 'score',
                content: elt.score
              }],
              elemMods: index < 3 && ctx.page === 0 ? {
                place: ['first', 'second', 'third'][index]
              } : {}
            };
          });
        }
      });
      block('select').elem('field')({
        tag: 'select',
        addAttrs: function addAttrs(node) {
          return {
            'id': node.formId + '_' + node.fieldName,
            'name': node.fieldName
          };
        }
      });
      block('select').match(function (node, ctx) {
        return !ctx.content && ctx.options;
      })({
        content: function content(node, ctx) {
          return [{
            elem: 'field',
            attrs: ctx.fieldAttrs,
            content: ctx.options.map(function (option) {
              return [{
                tag: 'option',
                content: option.content,
                attrs: {
                  selected: option.selected ? true : undefined,
                  value: option.value
                }
              }];
            })
          }];
        }
      });
      block('select')({
        extend: function extend(node, ctx) {
          return {
            fieldName: ctx.fieldName || node.generateId()
          };
        }
      }); // (form/field)-group related stuff

      block('select').match(function (node) {
        return Array.isArray(node._fieldParents) && node._fieldParents.length;
      })({
        addMix: function addMix(node) {
          return {
            block: node._fieldParents[node._fieldParents.length - 1],
            elem: 'field'
          };
        }
      }); // block('signup-popup')({tag: 'form'});

      block('signup-popup').elem('hr')({
        tag: 'hr'
      });
      block('signup-popup').elem('explanation-text')({
        tag: 'span'
      });
      block('sm-icons-list').elem('icon-bg')({
        'tag': 'a'
      });
      block('sm-icons-list').elem('icon')({
        'tag': 'i'
      });
      block('sm-icons-list').elem('icon-bg').match(function (node, ctx) {
        return ctx.href;
      })({
        addAttrs: function addAttrs(node, ctx) {
          return {
            href: ctx.href
          };
        }
      });
      ;
      ;
      oninit(function (exports, context) {
        var BEMContext = exports.BEMContext || context.BEMContext;

        BEMContext.prototype.require = function (lib) {
          return this._libs[lib];
        };
      });
      ;
    });
    exports = api.exportApply(exports);
    if (libs) exports.BEMContext.prototype._libs = libs;
    return exports;
  }

  ;
  var glob = this.window || this.global || this;
  var exp =  true ? exports : undefined;

  if ((typeof modules === "undefined" ? "undefined" : _typeof(modules)) === "object") {
    modules.define("bemtree", [], function (provide) {
      var engine = buildBemXjst({});
      provide(engine);
    });
  } else {
    var _libs = {};

    if (Object.keys(_libs).length) {
      bemtree = buildBemXjst(_libs);
      exp["bemtree"] = bemtree;
      exp["bemtree"].libs = _libs;
    } else {
      bemtree = buildBemXjst(glob);
      exp["bemtree"] = bemtree;
      exp["bemtree"].libs = glob;
    }
  }
})(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./static/public/js/controllers/authors-controller.js":
/*!************************************************************!*\
  !*** ./static/public/js/controllers/authors-controller.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthorsController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _views_authors_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/authors-view.js */ "./static/public/js/views/authors-view.js");
/* harmony import */ var _models_author_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/author.js */ "./static/public/js/models/author.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @class AuthorsController
 */

var AuthorsController =
/*#__PURE__*/
function (_Controller) {
  _inherits(AuthorsController, _Controller);

  /**
   * Construct obj AuthorsController
   * @param {HTMLElement} parent
   */
  function AuthorsController(parent) {
    var _this;

    _classCallCheck(this, AuthorsController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorsController).call(this, parent, true));
    _this.model = new _models_author_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this.view = new _views_authors_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](parent);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(AuthorsController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      this.model.getAuthors().then(function (data) {
        _this2.view.render(data);
      }, function (error) {
        return console.log(error);
      }); // TODO show 5** err mb
    }
  }]);

  return AuthorsController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/game-controller.js":
/*!*********************************************************!*\
  !*** ./static/public/js/controllers/game-controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameController; });
/* harmony import */ var _game_mods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/mods.js */ "./static/public/js/game/mods.js");
/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/game.js */ "./static/public/js/game/game.js");
/* harmony import */ var _views_game_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/game-view.js */ "./static/public/js/views/game-view.js");
/* harmony import */ var _views_game_over_single_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/game-over-single-view.js */ "./static/public/js/views/game-over-single-view.js");
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _game_core_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/core/events.js */ "./static/public/js/game/core/events.js");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-bus.js */ "./static/public/js/event-bus.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * The main class GameController
 */

var GameController =
/*#__PURE__*/
function (_Controller) {
  _inherits(GameController, _Controller);

  /**
   * Init game object
   * @param {HTMLElement} parent
   */
  function GameController(parent) {
    var _this;

    _classCallCheck(this, GameController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameController).call(this, parent, false));
    _this.view = new _views_game_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent);
    _this.resultView = new _views_game_over_single_view_js__WEBPACK_IMPORTED_MODULE_3__["default"](parent);
    _this.game = null;
    _this.bus = _event_bus_js__WEBPACK_IMPORTED_MODULE_6__["default"];
    return _this;
  }
  /**
   * Destructor
   */


  _createClass(GameController, [{
    key: "destructor",
    value: function destructor() {
      _get(_getPrototypeOf(GameController.prototype), "destructor", this).call(this);

      this.game.destroy();
    }
    /**
     * Create game logic
     */

  }, {
    key: "action",
    value: function action() {
      var _this2 = this;

      var mode = '';

      if (navigator.onLine) {
        mode = _game_mods_js__WEBPACK_IMPORTED_MODULE_0__["default"].ONLINE;
      } else {
        mode = _game_mods_js__WEBPACK_IMPORTED_MODULE_0__["default"].OFFLINE;
      }

      this.bus.on(_game_core_events_js__WEBPACK_IMPORTED_MODULE_5__["default"].FINISH_GAME, function (state) {
        _this2.destructor();

        _models_user_service_js__WEBPACK_IMPORTED_MODULE_7__["default"].getData().then(function (user) {
          if (user) {
            state.highScore = user.highScore === null || !user.highScore ? 0 : user.highScore;

            if (state.highScore < state.score) {
              _models_user_service_js__WEBPACK_IMPORTED_MODULE_7__["default"].updateScore(state.score);
            }
          }

          _this2.destructor();

          _this2.resultView.render(state, mode);

          _this2._initResultView();
        }, function (error) {
          console.log(error);
        });
      });
      this.game = new _game_game_js__WEBPACK_IMPORTED_MODULE_1__["default"](mode, this.view);
      this.game.start();
    }
    /**
     * Init result view
     * Add event listeners
     * @private
     */

  }, {
    key: "_initResultView",
    value: function _initResultView() {
      var _this3 = this;

      var btn = document.getElementsByClassName('result-redirect__btn')[0];

      var handler = function handler() {
        _this3.resultView.parent.innerHTML = '';
        window.history.pushState({}, '', '/single');
        window.history.pushState({}, '', '/single');
        window.history.back();
      };

      btn.addEventListener('click', handler);
      this.events.push({
        item: btn,
        type: 'click',
        handler: handler
      });
    }
  }]);

  return GameController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./static/public/js/controllers/game-menu-controller.js":
/*!**************************************************************!*\
  !*** ./static/public/js/controllers/game-menu-controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMenuController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _views_game_menu_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/game-menu-view.js */ "./static/public/js/views/game-menu-view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * @class GameMenuController
 */

var GameMenuController =
/*#__PURE__*/
function (_Controller) {
  _inherits(GameMenuController, _Controller);

  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  function GameMenuController(parent) {
    var _this;

    _classCallCheck(this, GameMenuController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameMenuController).call(this, parent, true));
    _this.view = new _views_game_menu_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](parent);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(GameMenuController, [{
    key: "action",
    value: function action() {
      this.view.render();
    }
  }]);

  return GameMenuController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/game-over-mlt-controller.js":
/*!******************************************************************!*\
  !*** ./static/public/js/controllers/game-over-mlt-controller.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOverMltController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _views_game_over_mlt_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/game-over-mlt-view.js */ "./static/public/js/views/game-over-mlt-view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * @class GameMenuController
 */

var GameOverMltController =
/*#__PURE__*/
function (_Controller) {
  _inherits(GameOverMltController, _Controller);

  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  function GameOverMltController(parent) {
    var _this;

    _classCallCheck(this, GameOverMltController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameOverMltController).call(this, parent));
    _this.view = new _views_game_over_mlt_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](parent);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(GameOverMltController, [{
    key: "action",
    value: function action() {
      this.view.render();
    }
  }]);

  return GameOverMltController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/login-controller.js":
/*!**********************************************************!*\
  !*** ./static/public/js/controllers/login-controller.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");
/* harmony import */ var _views_login_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/login-view.js */ "./static/public/js/views/login-view.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation.js */ "./static/public/js/validation.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @class LoginController
 */

var LoginController =
/*#__PURE__*/
function (_Controller) {
  _inherits(LoginController, _Controller);

  /**
   * Create Login Controller object
   * @param {HTMLElement} parent
   */
  function LoginController(parent) {
    var _this;

    _classCallCheck(this, LoginController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginController).call(this, parent, true));
    _this.view = new _views_login_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent);
    return _this;
  }
  /**
   * realize page logic
   */


  _createClass(LoginController, [{
    key: "action",
    value: function action() {
      this.view.render();

      this._initInputs();

      Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["addValidationOnBlur"])();
      var form = document.getElementById('loginForm');
      form.addEventListener('submit', this.submitHandler);
      var cancel = this.view.parent.getElementsByClassName('btn_color_muted')[0];
      cancel.addEventListener('click', this._clickHandler);
      this.events.push({
        item: form,
        type: 'submit',
        handler: this.submitHandler
      }, {
        item: application,
        type: 'click',
        handler: this._clickHandler
      });
    }
    /**
     * Handel submit event
     * @param {event} event
     */

  }, {
    key: "submitHandler",
    value: function submitHandler(event) {
      event.preventDefault();

      if (!Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["validateForm"])(event.target)) {
        return;
      }

      var form = event.target;
      var name = form.elements['email'].value;
      var password = form.elements['password'].value;
      var body = {
        name: name,
        password: password
      };
      _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].sendData(form, body).then(function (ok) {
        if (ok) {
          window.history.pushState({}, '', '/');
          window.history.pushState({}, '', '/');
          window.history.back();
        } else {
          console.log('Client error, stay here');
        }
      });
    }
    /**
     * Initializes show password buttons and maybe other stuff in the future
     * @private
     */

  }, {
    key: "_initInputs",
    value: function _initInputs() {
      var buttons = document.getElementsByClassName('icon_show-pwd');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var btn = _step.value;

          btn.onclick = function (e) {
            var elt = e.target || e.srcElement;
            var target = document.getElementById(elt.dataset.pwdFor);

            if (target.type === 'password') {
              target.setAttribute('type', 'text');
            } else {
              target.setAttribute('type', 'password');
            }
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * handle click event
     * @param {event} event
     * @return {boolean} ok-status
     * @private
     */

  }, {
    key: "_clickHandler",
    value: function _clickHandler(event) {
      var link = event.target.closest('[data-link-type]');
      return link === null;
    }
  }]);

  return LoginController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/logout-controller.js":
/*!***********************************************************!*\
  !*** ./static/public/js/controllers/logout-controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoutController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");
/* harmony import */ var _views_menu_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/menu-view.js */ "./static/public/js/views/menu-view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @class LogoutController
 */

var LogoutController =
/*#__PURE__*/
function (_Controller) {
  _inherits(LogoutController, _Controller);

  /**
   * Create Logout Controller object
   * @param {HTMLElement} parent
   */
  function LogoutController(parent) {
    var _this;

    _classCallCheck(this, LogoutController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LogoutController).call(this, parent, true));
    _this.view = new _views_menu_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent);
    _this.events = [];
    return _this;
  }
  /**
   * realize page logic
   */


  _createClass(LogoutController, [{
    key: "action",
    value: function action() {
      _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].singout().then(function () {
        window.history.pushState({}, '', '/');
        window.history.pushState({}, '', '/');
        window.history.back();
      });
    }
  }]);

  return LogoutController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/menu-controller.js":
/*!*********************************************************!*\
  !*** ./static/public/js/controllers/menu-controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _views_menu_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/menu-view.js */ "./static/public/js/views/menu-view.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @class MenuController
 */

var MenuController =
/*#__PURE__*/
function (_Controller) {
  _inherits(MenuController, _Controller);

  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  function MenuController(parent) {
    var _this;

    _classCallCheck(this, MenuController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuController).call(this, parent, false));
    _this.user = null;
    _this.view = new _views_menu_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](parent);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(MenuController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      _models_user_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].getData().then(function (user) {
        _this2.user = user;

        _this2.view.render(_this2.user);
      }, function (error) {
        console.log(error);
      });
    }
  }]);

  return MenuController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/not-found-controller.js":
/*!**************************************************************!*\
  !*** ./static/public/js/controllers/not-found-controller.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFoundController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _views_page_not_found_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/page-not-found-view.js */ "./static/public/js/views/page-not-found-view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * @class NotFoundController
 */

var NotFoundController =
/*#__PURE__*/
function (_Controller) {
  _inherits(NotFoundController, _Controller);

  /**
   * Construct obj AuthorsController
   * @param {HTMLElement} parent
   */
  function NotFoundController() {
    var _this;

    _classCallCheck(this, NotFoundController);

    var main = document.getElementById('main');
    _this = _possibleConstructorReturn(this, _getPrototypeOf(NotFoundController).call(this, main, false));
    _this.view = new _views_page_not_found_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](main);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(NotFoundController, [{
    key: "action",
    value: function action() {
      this.view.render();
    }
  }]);

  return NotFoundController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/notification-controller.js":
/*!*****************************************************************!*\
  !*** ./static/public/js/controllers/notification-controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotificationController; });
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config.js */ "./static/public/js/settings/config.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SERVER_ADDRESS = _settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].wsUrl; // 'ws://localhost:3000/ws';

/**
 * The singleton class for sending and receiving messages from server
 * @class NotificationController
 */

var NotificationController =
/*#__PURE__*/
function () {
  /**
   * Constructor
   * @param {string} path
   * @param {function} onMsg
   */
  function NotificationController(path, onMsg) {
    var _this = this;

    _classCallCheck(this, NotificationController);

    var Socket = 'MozWebSocket' in window ? MozWebSocket : WebSocket;
    this.ws = new Socket(SERVER_ADDRESS + path);

    this.ws.onerror = function (event) {
      console.log('WebSocket ERROR: ' + JSON.stringify(event, null, 4));

      _this._makeNotify('WebSocket ERROR: ' + JSON.stringify(event, null, 4));
    };

    this.ws.onclose = function (event) {
      _this.onDisconnected('Client disconnected.');
    };

    this.ws.onopen = function () {
      console.log('ws success connected');
      _this.ws.onmessage = onMsg;
    };
  }
  /**
   * Disconnection handler
   * @param {string} discMsg
   */


  _createClass(NotificationController, [{
    key: "onDisconnected",
    value: function onDisconnected(discMsg) {
      this._makeNotify(discMsg);
    }
    /**
     * Send angel to server
     * @param {*} data
     */

  }, {
    key: "sendData",
    value: function sendData(data) {
      this.ws.send(data);
    }
    /**
     * Close connection
     */

  }, {
    key: "close",
    value: function close() {
      this.ws.close();
    }
    /**
     * Says the client information about connection
     * @param {string} data
     * @private
     */

  }, {
    key: "_makeNotify",
    value: function _makeNotify() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'error';

      if (!'Notification' in window) {
        console.error('haven`t Notification in window');
        return;
      }

      if (Notification.permission === 'granted') {
        new Notification(data);
        return;
      }

      if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            new Notification(data);
          }
        });
      }
    }
  }]);

  return NotificationController;
}();



/***/ }),

/***/ "./static/public/js/controllers/profile-controller.js":
/*!************************************************************!*\
  !*** ./static/public/js/controllers/profile-controller.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");
/* harmony import */ var _views_profile_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/profile-view.js */ "./static/public/js/views/profile-view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @class ProfileController
 */

var ProfileController =
/*#__PURE__*/
function (_Controller) {
  _inherits(ProfileController, _Controller);

  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  function ProfileController(parent) {
    var _this;

    _classCallCheck(this, ProfileController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileController).call(this, parent, true));
    _this.view = new _views_profile_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(ProfileController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      var id = this._parseIdFromUrl();

      _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUser(id).then(function (data) {
        _this2.view.render(data);

        _this2._configureEvents();
      }, function () {
        window.history.pushState({}, '', '/signin');
        window.history.pushState({}, '', '/signin');
        window.history.back();
      });
    }
    /**
    * Add event listeners
    * @private
    */

  }, {
    key: "_configureEvents",
    value: function _configureEvents() {
      var btn = document.getElementsByClassName('btn_cancel')[0];

      if (btn) {
        var handle = function handle(event) {
          event.preventDefault();
          window.history.pushState({}, '', '/profile/update');
          window.history.pushState({}, '', '/profile/update');
          window.history.back();
        };

        btn.addEventListener('click', handle);
        this.events.push({
          item: btn,
          type: 'click',
          handler: handle
        });
      }

      var backBtn = document.getElementsByClassName('btn_color_muted')[0];

      if (backBtn) {
        var _handle;

        if (backBtn.attributes['data-type'].value === 'back') {
          _handle = function _handle(event) {
            event.preventDefault();
            window.history.back();
          };
        } else {
          _handle = function _handle(event) {
            event.preventDefault();
            window.history.pushState({}, '', '/');
            window.history.pushState({}, '', '/');
            window.history.back();
          };
        }

        backBtn.addEventListener('click', _handle);
        this.events.push({
          item: backBtn,
          type: 'click',
          handler: _handle
        });
      }
    }
    /**
       * Get id from url
     * @return {undefined}
     * @private
     */

  }, {
    key: "_parseIdFromUrl",
    value: function _parseIdFromUrl() {
      var id = window.location.search.replace('?', '').split('&').reduce(function (param, e) {
        var a = e.split('=');
        param[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return param;
      }, {})['id'];
      id = id ? id : -1;
      return id;
    }
  }]);

  return ProfileController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/scoreboard-controller.js":
/*!***************************************************************!*\
  !*** ./static/public/js/controllers/scoreboard-controller.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreboardController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");
/* harmony import */ var _views_scoreboard_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/scoreboard-view.js */ "./static/public/js/views/scoreboard-view.js");
/* harmony import */ var _views_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/pagination.js */ "./static/public/js/views/pagination.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @class ScoreboardController
 */

var ScoreboardController =
/*#__PURE__*/
function (_Controller) {
  _inherits(ScoreboardController, _Controller);

  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  function ScoreboardController(parent) {
    var _this;

    _classCallCheck(this, ScoreboardController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScoreboardController).call(this, parent, true));
    _this.view = new _views_scoreboard_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent);
    return _this;
  }
  /**
   * Create action
   */


  _createClass(ScoreboardController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      var page = this._parsePageNumber();

      _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].getUsers(page).then(function (data) {
        _this2.view.render(data);

        _this2._configureEvents();

        var paginator = new _views_pagination_js__WEBPACK_IMPORTED_MODULE_3__["default"](_this2.parent);
        paginator.render(data.data.page + 1, data.data.nPages + 1);
        _views_pagination_js__WEBPACK_IMPORTED_MODULE_3__["default"].setPaginationLinks(_this2.events, _this2._pagesLinkHandler);
      }, function (error) {
        return console.log(error);
      }); // TODO show 5** err mb
    }
    /**
     * Parse page number from url
     * @return {string}
     * @private
     */

  }, {
    key: "_parsePageNumber",
    value: function _parsePageNumber() {
      var page = window.location.search.replace('?', '').split('&').reduce(function (param, e) {
        var a = e.split('=');
        param[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return param;
      }, {})['page'];
      page = page ? page : 0;
      return page;
    }
    /**
     * Add event listeners
     * @private
     */

  }, {
    key: "_configureEvents",
    value: function _configureEvents() {
      var _this3 = this;

      var profiles = document.getElementsByClassName('scoreboard__link');
      Array.from(profiles).forEach(function (link) {
        if (Number(link.value) < 1) {
          return;
        }

        link.addEventListener('click', _this3._eventHandler);
        var event = {
          item: link,
          type: 'click',
          handler: _this3._eventHandler
        };

        _this3.events.push(event);
      });
    }
    /**
     * Handle click on profile link
     * @param {Event} event
     * @private
     */

  }, {
    key: "_eventHandler",
    value: function _eventHandler(event) {
      event.preventDefault();
      var path = 'profile?id=' + event.target.closest('.scoreboard__link').getAttribute('value');
      window.history.pushState({}, '', path);
      window.history.pushState({}, '', path);
      window.history.back();
    }
    /**
     * Handler for pagination link's click event
     * @param {Event} event
     * @private
     */

  }, {
    key: "_pagesLinkHandler",
    value: function _pagesLinkHandler(event) {
      event.preventDefault();
      var path = 'leaders?page=' + (event.target.value - 1);
      window.history.pushState({}, '', path);
      window.history.pushState({}, '', path);
      window.history.back();
    }
  }]);

  return ScoreboardController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/signup-controller.js":
/*!***********************************************************!*\
  !*** ./static/public/js/controllers/signup-controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUpController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");
/* harmony import */ var _views_signup_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/signup-view.js */ "./static/public/js/views/signup-view.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation.js */ "./static/public/js/validation.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * @class SignUpController
 */

var SignUpController =
/*#__PURE__*/
function (_Controller) {
  _inherits(SignUpController, _Controller);

  /**
   * Create SignUp Controller
   * @param {HTMLElement} parent
   */
  function SignUpController(parent) {
    var _this;

    _classCallCheck(this, SignUpController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignUpController).call(this, parent, true));
    _this.view = new _views_signup_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](parent);
    _this.events = []; // Array for collecting events

    return _this;
  }
  /**
   * Get data from input form on sign up page
   * @param {event} event
   * @return {Object} input form
   */


  _createClass(SignUpController, [{
    key: "_getFromSignUp",
    value: function _getFromSignUp(event) {
      var form = document.getElementById('signup-form');
      var email = form['signup-form_email'].value;
      var userName = form['signup-form_username'].value;
      var password = form['signup-form_password'].value;
      return {
        userName: userName,
        password: password,
        name: name,
        lastName: lastName,
        email: email,
        date: date
      };
    }
    /**
     * Call 'sign up' rendering func and add event listeners
     */

  }, {
    key: "action",
    value: function action() {
      this.view.render();
      var cancel = this.view.parent.getElementsByClassName('btn_color_muted')[0];
      cancel.addEventListener('click', this._cancelHandler);
      var form = document.getElementById('signup-form');
      form.addEventListener('submit', this._submitHandler.bind(this));
      Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["addValidationOnBlur"])();
      this.events.push({
        item: form,
        type: 'submit',
        handler: this._submitHandler.bind(this)
      }, {
        item: cancel,
        type: 'click',
        handler: this._cancelHandler
      });
    }
    /**
     * Handel cancel event
     * @param {event} event
     */

  }, {
    key: "_cancelHandler",
    value: function _cancelHandler(event) {
      event.preventDefault();
      window.history.pushState({}, '', '/');
      window.history.pushState({}, '', '/');
      window.history.back();
    }
  }, {
    key: "_submitHandler",

    /**
     * Handel click on submit event
     * @param {event} event
     */
    value: function _submitHandler(event) {
      event.preventDefault();

      if (!Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["validateForm"])(event.target)) {
        return;
      }

      var body = this._getFromSignUp(event);

      _models_user_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].sendData(event.target, body).then(function (ok) {
        if (ok) {
          window.history.pushState({}, '', '/');
          window.history.pushState({}, '', '/');
          window.history.back();
        } else {
          console.log('Client error, stay here');
        }
      });
    }
  }]);

  return SignUpController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/controllers/update-controller.js":
/*!***********************************************************!*\
  !*** ./static/public/js/controllers/update-controller.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateController; });
/* harmony import */ var _core_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/controller.js */ "./static/public/js/core/controller.js");
/* harmony import */ var _views_update_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/update-view.js */ "./static/public/js/views/update-view.js");
/* harmony import */ var _models_user_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-service.js */ "./static/public/js/models/user-service.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation.js */ "./static/public/js/validation.js");
/* harmony import */ var _file_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-input.js */ "./static/public/js/file-input.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * @class UpdateController
 */

var UpdateController =
/*#__PURE__*/
function (_Controller) {
  _inherits(UpdateController, _Controller);

  /**
   * Create UpdateController object
   * @param {HTMLElement} parent
   */
  function UpdateController(parent) {
    var _this;

    _classCallCheck(this, UpdateController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdateController).call(this, parent, true));
    _this.view = new _views_update_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](parent);
    _this.user = null;
    _this.events = [];
    return _this;
  }
  /**
   * Create logout
   */


  _createClass(UpdateController, [{
    key: "action",
    value: function action() {
      var _this2 = this;

      _models_user_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].getData().then(function (user) {
        _this2.user = user;

        _this2.view.render(_this2.user);

        Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["addValidationOnBlur"])();
        Object(_file_input_js__WEBPACK_IMPORTED_MODULE_4__["initFileInputs"])();

        var cancel = _this2.view.parent.getElementsByClassName('btn_color_muted')[0];

        cancel.addEventListener('click', _this2._cancelHandler);
        var form = document.getElementById('updateForm');
        form.addEventListener('submit', _this2._submitHandler.bind(_this2));

        _this2.events.push({
          item: form,
          type: 'submit',
          handler: _this2._submitHandler.bind(_this2)
        }, {
          item: cancel,
          type: 'click',
          handler: _this2._cancelHandler
        });
      });
    }
    /**
     * Handel click on submit event
     * @param {event} event
     */

  }, {
    key: "_submitHandler",
    value: function _submitHandler(event) {
      var _this3 = this;

      event.preventDefault();

      if (!Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["validateForm"])(event.target)) {
        return;
      }

      var body = this._getFromProfileForm(event);

      Object(_file_input_js__WEBPACK_IMPORTED_MODULE_4__["getBase64"])(body.img).then(function (result) {
        if (result) {
          body.img = result;
        }

        return _models_user_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateData(event.target, body, _this3.user.uid);
      }, function () {
        return _models_user_service_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateData(event.target, body, _this3.user.uid);
      }).then(function (ok) {
        if (ok) {
          window.history.pushState({}, '', '/profile');
          window.history.pushState({}, '', '/profile');
          window.history.back();
        } else {
          console.log('Client error, stay here');
        }
      });
    }
    /**
     * Handel cancel event
     * @param {event} event
     */

  }, {
    key: "_cancelHandler",
    value: function _cancelHandler(event) {
      event.preventDefault();
      window.history.back();
    }
    /**
     * get user data from form
     * @param {event} event
     * @return {Object} user info object
     * @private
     */

  }, {
    key: "_getFromProfileForm",
    value: function _getFromProfileForm(event) {
      var form = event.target;
      var firstName = form['updateForm_firstName'].value;
      var lastName = form['updateForm_lastName'].value;
      var email = form['updateForm_email'].value;
      var selectField = document.getElementsByTagName('select');
      var userName = form['updateForm_username'].value;
      var day = selectField['updateForm_selectDay'].value;
      var month = selectField['updateForm_selectMonth'].value;
      var year = selectField['updateForm_selectYear'].value;
      var gender = selectField['updateForm_selectMale'].value;
      var date = "".concat(day, "-").concat(month, "-").concat(year);
      var password = form['updateForm_password'].value;
      var img = form['updateForm_avatar'].files[0];
      return {
        name: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        date: date,
        gender: gender,
        password: password,
        img: img
      };
    }
  }]);

  return UpdateController;
}(_core_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/core/controller.js":
/*!*********************************************!*\
  !*** ./static/public/js/core/controller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });

/**
 * @class Controller
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller =
/*#__PURE__*/
function () {
  /**
   * Construct base controller
   * @param {HTMLElement} parent
   * @param {boolean} isRequiredOnline does this page require
   * internet connection
   */
  function Controller(parent, isRequiredOnline) {
    _classCallCheck(this, Controller);

    this.parent = parent;
    this.isRequiredOnline = isRequiredOnline;
    this.events = [];
  }
  /**
   * Destruct object
   */


  _createClass(Controller, [{
    key: "destructor",
    value: function destructor() {
      while (this.events.length) {
        var event = this.events.pop();
        event.item.removeEventListener(event.type, event.handler);
      }

      this.parent.innerHTML = '';
    }
    /**
     * Do page actions
     */

  }, {
    key: "action",
    value: function action() {}
  }]);

  return Controller;
}();



/***/ }),

/***/ "./static/public/js/core/model.js":
/*!****************************************!*\
  !*** ./static/public/js/core/model.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });

/**
 * @class Model
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, [{
    key: "getData",

    /**
     * Get model data
     */
    value: function getData() {}
    /**
     * Send user data to the server
     * @param {HTMLFormElement} form
     * @param {Object} body
     */

  }, {
    key: "sendData",
    value: function sendData(form, body) {}
    /**
     * Update user data on the server
     * @param {HTMLFormElement} form
     * @param {Object} body
     * @param {int} userId
     */

  }, {
    key: "updateData",
    value: function updateData(form, body, userId) {}
  }]);

  return Model;
}();


;

/***/ }),

/***/ "./static/public/js/core/router.js":
/*!*****************************************!*\
  !*** ./static/public/js/core/router.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var _controllers_not_found_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/not-found-controller.js */ "./static/public/js/controllers/not-found-controller.js");
/* harmony import */ var _views_offline_messagebox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/offline-messagebox.js */ "./static/public/js/views/offline-messagebox.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @class Router
 */

var Router =
/*#__PURE__*/
function () {
  /**
   *
   * @param {string} rootPath
   * @param {HTMLElement} rootElement
   */
  function Router(rootPath, rootElement) {
    _classCallCheck(this, Router);

    this.rootElement = rootElement;
    this.routes = {};
    this.currentController = undefined;
  }
  /**
   * Add new view to a router
   * @param {string} url
   * @param {Controller} controller
   * @return {Router} this
   */


  _createClass(Router, [{
    key: "addRoute",
    value: function addRoute(url, controller) {
      this.routes[url] = controller;
      return this;
    }
    /**
     * Open view
     * @param {string} url
     */

  }, {
    key: "open",
    value: function open(url) {
      // to make paths like leaders and /leaders similar
      if (url.startsWith('/') && url.length > 1) {
        url = url.slice(1);
      }

      var newController = this.routes[url];

      if (!newController) {
        newController = new _controllers_not_found_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      } // comment this to work offline


      if (!navigator.onLine && newController.isRequiredOnline) {
        if (!this.currentController) {
          window.history.pushState({}, '', '/');
          window.history.pushState({}, '', '/');
          window.history.back();
        } else {
          Object(_views_offline_messagebox_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.currentController.parent);
        }

        return;
      }

      if (this.currentController) {
        this.currentController.destructor();
      }

      newController.action();
      this.currentController = newController;
    }
    /**
     * Configure router's listeners
     */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      window.addEventListener('popstate', function () {
        var currentPath = window.location.pathname;

        _this.open(currentPath);
      });
      this.rootElement.addEventListener('click', function (event) {
        var link = event.target.closest('[data-link-type]');

        if (link === null) {
          return;
        }

        event.preventDefault();
        window.history.pushState({}, '', link.dataset['linkType']);

        _this.open(link.dataset['linkType']);
      });
      var currentPath = window.location.pathname;
      this.open(currentPath);
    }
  }]);

  return Router;
}();



/***/ }),

/***/ "./static/public/js/core/view.js":
/*!***************************************!*\
  !*** ./static/public/js/core/view.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });

/**
 * @class View
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View =
/*#__PURE__*/
function () {
  /**
   * Constructor to init events array
   * @param {HTMLElement} parent
   */
  function View(parent) {
    _classCallCheck(this, View);

    this.parent = parent;
  }
  /**
   * Render view
   */


  _createClass(View, [{
    key: "render",
    value: function render() {}
  }]);

  return View;
}();



/***/ }),

/***/ "./static/public/js/event-bus.js":
/*!***************************************!*\
  !*** ./static/public/js/event-bus.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Event bus
 */
var Bus =
/*#__PURE__*/
function () {
  /**
   * Event bus constructor
   */
  function Bus() {
    _classCallCheck(this, Bus);

    this.listeners = {};
  }
  /**
   * Add event
   * @param {String} event
   * @param {Function} listener
   * @return {Bus}
   */


  _createClass(Bus, [{
    key: "on",
    value: function on(event, listener) {
      (this.listeners[event] || (this.listeners[event] = [])).push(listener);
      return this;
    }
    /**
     * Remove listener
     * @param {String} event
     * @param {Function} listener
     * @return {Bus}
     */

  }, {
    key: "off",
    value: function off(event, listener) {
      if (listener) {
        this.listeners[event] = (this.listeners[event] || []).filter(function (l) {
          return l !== listener;
        });
      } else {
        this.listeners[event] = [];
      }

      return this;
    }
    /**
     * Produce event
     * @param {String} event
     * @param {Object} data
     * @return {Bus}
     */

  }, {
    key: "emit",
    value: function emit(event, data) {
      (this.listeners[event] || (this.listeners[event] = [])).forEach(function (l) {
        return l(data);
      });
      return this;
    }
  }]);

  return Bus;
}();

var bus = new Bus();
/* harmony default export */ __webpack_exports__["default"] = (bus);

/***/ }),

/***/ "./static/public/js/file-input.js":
/*!****************************************!*\
  !*** ./static/public/js/file-input.js ***!
  \****************************************/
/*! exports provided: previewFile, initFileInputs, getBase64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewFile", function() { return previewFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFileInputs", function() { return initFileInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase64", function() { return getBase64; });


var BLOCK = 'file-input';
/**
 * Show the selected image from users data before sending it to the server
 */

function previewFile() {
  var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}
/**
 * Set handler for file inputs changes
 */

function initFileInputs() {
  var fileInputs = document.getElementsByClassName(BLOCK);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var inputBlock = _step.value;
      var children = inputBlock.childNodes;
      var field = void 0;
      var info = void 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var child = _step2.value;

          if (child.classList.contains("".concat(BLOCK, "__field"))) {
            field = child;
          } else if (child.classList.contains("".concat(BLOCK, "__info"))) {
            info = child;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      field.onchange = function (e) {
        if (e.srcElement.id === 'updateForm_avatar') {
          previewFile();
        }

        var elt = e.target || e.srcElement;

        if (elt.files && elt.files.length > 0) {
          if (elt.files.length === 1) {
            var fileName = elt.files[0].name;
            fileName = fileName.length > 20 ? fileName.substr(0, 17) + '...' : fileName;
            info.textContent = fileName;
          } else {
            if (elt.getAttribute('multiple') !== null) {
              var filesInfoText = elt.files.length % 100 >= 5 && elt.files.length <= 20 ? 'файлов' : elt.files.length % 10 === 1 ? 'файл' : elt.files.length % 10 <= 4 ? 'файла' : 'файлов';
              info.textContent = "".concat(elt.files.length, " ").concat(filesInfoText);
            } // else do nothing (?)

          }
        }
      };
    };

    for (var _iterator = fileInputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
/**
 * Get file in Base64 format
 * @param {File} file
 * @return {Promise<any>}
 */

function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    if (!file) {
      return resolve(undefined);
    }

    reader.readAsDataURL(file);

    reader.onload = function () {
      var encoded = reader.result.replace(/^data:(.*;base64,)?/, '');

      if (encoded.length % 4 > 0) {
        encoded += '='.repeat(4 - encoded.length % 4);
      }

      resolve(encoded);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

/***/ }),

/***/ "./static/public/js/game/controllers.js":
/*!**********************************************!*\
  !*** ./static/public/js/game/controllers.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameControllers; });
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-bus.js */ "./static/public/js/event-bus.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/events.js */ "./static/public/js/game/core/events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @class GameControllers
 */

var GameControllers =
/*#__PURE__*/
function () {
  /**
   * Constructor
   * @param {object} view
   */
  function GameControllers(view) {
    _classCallCheck(this, GameControllers);

    this.keys = [];
    this.view = view;
    this.keyHandler = this._keyHandler.bind(this);
  }
  /**
   * Начинаем слушать события клавиатуры
   */


  _createClass(GameControllers, [{
    key: "start",
    value: function start() {
      document.addEventListener('keydown', this.keyHandler);
      document.addEventListener('keyup', this.keyHandler);
      document.addEventListener('touchstart', this.keyHandler, false);
      document.addEventListener('touchend', this.keyHandler, false);
    }
    /**
     * Прекращаем слушать события клавиатуры
     */

  }, {
    key: "destroy",
    value: function destroy() {
      document.removeEventListener('keydown', this.keyHandler);
      document.removeEventListener('keyup', this.keyHandler);
      document.removeEventListener('touchstart', this.keyHandler, false);
      document.removeEventListener('touchend', this.keyHandler, false);
    }
    /**
     * Обработчик события
     * @param  {Event} event
     */

  }, {
    key: "_keyHandler",
    value: function _keyHandler(event) {
      if (event.type.toLowerCase() === 'keydown') {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_PRESSED, event.key);
      } else if (event.type.toLowerCase() === 'keyup') {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_UNPRESSED, event.key);
      } else if (event.type.toLowerCase() === 'touchstart') {
        var touch = event.changedTouches[0];

        if (touch.pageX < this.view.canvas.width / 2) {
          _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_PRESSED, 'ArrowLeft');
        } else {
          _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_PRESSED, 'ArrowRight');
        }
      } else if (event.type.toLowerCase() === 'touchend') {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].emit(_core_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_UNPRESSED, {});
      }
    }
  }]);

  return GameControllers;
}();



/***/ }),

/***/ "./static/public/js/game/core/core.js":
/*!********************************************!*\
  !*** ./static/public/js/game/core/core.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameCore; });
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-bus.js */ "./static/public/js/event-bus.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ "./static/public/js/game/core/events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var KEYS = {
  LEFT: ['a', 'A', 'ф', 'Ф', 'ArrowLeft'],
  RIGHT: ['d', 'D', 'в', 'В', 'ArrowRight']
};
/**
 * Base class for all game cores
 */

var GameCore =
/*#__PURE__*/
function () {
  /**
   *
   * @param controller
   * @param scene
   */
  function GameCore(controller, scene) {
    _classCallCheck(this, GameCore);

    this.controller = controller;
    this.scene = scene;
    this.onGameStarted = this.onGameStarted.bind(this);
    this.onGameFinished = this.onGameFinished.bind(this);
    this.onControllsPressed = this.onControllsPressed.bind(this);
    this.onControllsUnpressed = this.onControllsUnpressed.bind(this);
    this.onGameStateChanged = this.onGameStateChanged.bind(this);
  }
  /**
   *
   */


  _createClass(GameCore, [{
    key: "start",
    value: function start() {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].START_GAME, this.onGameStarted);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].FINISH_GAME, this.onGameFinished);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_PRESSED, this.onControllsPressed);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_UNPRESSED, this.onControllsUnpressed);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_STATE_CHANGED, this.onGameStateChanged);
    }
    /**
     *
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].START_GAME, this.onGameStarted);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].FINISH_GAME, this.onGameFinished);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_PRESSED, this.onControllsPressed);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].CONTROLS_UNPRESSED, this.onControllsUnpressed);
      _event_bus_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(_events_js__WEBPACK_IMPORTED_MODULE_1__["default"].GAME_STATE_CHANGED, this.onGameStateChanged);
      this.controller.destroy();
      this.scene.stop();
    }
    /**
     *
     * @param evt
     */

  }, {
    key: "onControllsPressed",
    value: function onControllsPressed(evt) {
      throw new Error('This method must be overridden');
    }
    /**
     *
     * @param evt
     */

  }, {
    key: "onControllsUnpressed",
    value: function onControllsUnpressed(evt) {
      throw new Error('This method must be overridden');
    }
    /**
     *
     * @param evt
     */

  }, {
    key: "onGameStarted",
    value: function onGameStarted(evt) {
      throw new Error('This method must be overridden');
    }
    /**
     *
     * @param evt
     */

  }, {
    key: "onGameFinished",
    value: function onGameFinished(evt) {
      throw new Error('This method must be overridden');
    }
    /**
     *
     * @param evt
     */

  }, {
    key: "onGameStateChanged",
    value: function onGameStateChanged(evt) {
      throw new Error('This method must be overridden');
    }
    /**
     *
     * @param name
     * @param data
     * @return {boolean}
     * @private
     */

  }, {
    key: "_pressed",
    value: function _pressed(name, data) {
      return KEYS[name].some(function (k) {
        return data.toLowerCase() === k.toLowerCase();
      });
    }
  }]);

  return GameCore;
}();


;

/***/ }),

/***/ "./static/public/js/game/core/events.js":
/*!**********************************************!*\
  !*** ./static/public/js/game/core/events.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EVENTS = {
  START_GAME: 'START_GAME',
  FINISH_GAME: 'FINISH_GAME',
  CONTROLS_PRESSED: 'CONTROLS_PRESSED',
  CONTROLS_UNPRESSED: 'CONTROLS_UNPRESSED',
  GAME_STATE_CHANGED: 'GAME_STATE_CHANGED'
};
/* harmony default export */ __webpack_exports__["default"] = (EVENTS);

/***/ }),

/***/ "./static/public/js/game/core/geometry.js":
/*!************************************************!*\
  !*** ./static/public/js/game/core/geometry.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Geometry; });
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./static/public/js/game/core/settings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var sqrt3 = 1.7320508075688772;
/**
 * @class Geometry
 */

var Geometry =
/*#__PURE__*/
function () {
  function Geometry() {
    _classCallCheck(this, Geometry);
  }

  _createClass(Geometry, null, [{
    key: "checkHexagonCollision",

    /**
     * Check collision of hexagon and cursor
     * @param {Object} hexagon
     * @param {{x: number, y: number}} cursor
     * @return {boolean}
     */
    value: function checkHexagonCollision(hexagon, cursor) {
      var _this = this;

      var lines = this.convertHexagonToLines(hexagon);
      var isCollide = false;
      lines.forEach(function (line) {
        if (line) {
          line = _this.rotateLine(line.first, line.second, hexagon.angle);

          if (_this._lineAndCursorCollision(line.first, line.second, cursor)) {
            isCollide = true;
          }
        }
      });
      return isCollide;
    }
    /**
     * Convert hexagon object to array of lines
     * @param {object} hexagon
     * @return {Array} array of lines
     */

  }, {
    key: "convertHexagonToLines",
    value: function convertHexagonToLines(hexagon) {
      var lines = [];

      if (!(hexagon.sides & _settings_js__WEBPACK_IMPORTED_MODULE_0__["MASKS"].top)) {
        lines.push({
          first: {
            x: -hexagon.side / 2,
            y: hexagon.side * sqrt3 / 2
          },
          second: {
            x: hexagon.side / 2,
            y: hexagon.side * sqrt3 / 2
          }
        });
      } else {
        lines.push(undefined);
      }

      if (!(hexagon.sides & _settings_js__WEBPACK_IMPORTED_MODULE_0__["MASKS"].topRight)) {
        lines.push({
          first: {
            x: hexagon.side / 2,
            y: hexagon.side * sqrt3 / 2
          },
          second: {
            x: hexagon.side,
            y: 0
          }
        });
      } else {
        lines.push(undefined);
      }

      if (!(hexagon.sides & _settings_js__WEBPACK_IMPORTED_MODULE_0__["MASKS"].bottomRight)) {
        lines.push({
          first: {
            x: hexagon.side,
            y: 0
          },
          second: {
            x: hexagon.side / 2,
            y: -hexagon.side * sqrt3 / 2
          }
        });
      } else {
        lines.push(undefined);
      }

      if (!(hexagon.sides & _settings_js__WEBPACK_IMPORTED_MODULE_0__["MASKS"].bottom)) {
        lines.push({
          first: {
            x: hexagon.side / 2,
            y: -hexagon.side * sqrt3 / 2
          },
          second: {
            x: -hexagon.side / 2,
            y: -hexagon.side * sqrt3 / 2
          }
        });
      } else {
        lines.push(undefined);
      }

      if (!(hexagon.sides & _settings_js__WEBPACK_IMPORTED_MODULE_0__["MASKS"].bottomLeft)) {
        lines.push({
          first: {
            x: -hexagon.side / 2,
            y: -hexagon.side * sqrt3 / 2
          },
          second: {
            x: -hexagon.side,
            y: 0
          }
        });
      } else {
        lines.push(undefined);
      }

      if (!(hexagon.sides & _settings_js__WEBPACK_IMPORTED_MODULE_0__["MASKS"].topLeft)) {
        lines.push({
          first: {
            x: -hexagon.side,
            y: 0
          },
          second: {
            x: -hexagon.side / 2,
            y: hexagon.side * sqrt3 / 2
          }
        });
      } else {
        lines.push(undefined);
      }

      return lines;
    }
    /**
     * Check collision of cursor and line
     * @param {{x: number, y: number}} dot0
     * @param {{x: number, y: number}} dot1
     * @param {{x: number, y: number}} cursor
     * @return {boolean}
     * @private
     */

  }, {
    key: "_lineAndCursorCollision",
    value: function _lineAndCursorCollision(dot0, dot1, cursor) {
      var eps = 1e-10;
      var d0 = {
        x: dot0.x - cursor.x,
        y: dot0.y - cursor.y
      };
      var d1 = {
        x: dot1.x - dot0.x,
        y: dot1.y - dot0.y
      };
      var r = 10;
      var a = d1.x * d1.x + d1.y * d1.y;
      var k = d0.x * d1.x + d0.y * d1.y;
      var c = d0.x * d0.x + d0.y * d0.y - r * r; // CURSOR.height * CURSOR.height;

      var disc = k * k - a * c; // return disc >= eps;

      if (disc < 0) {
        return false;
      } else if (Math.abs(disc) < eps) {
        var t = -k / a;
        return t > -eps && t < 1 + eps;
      } else {
        var t1 = (-k + Math.sqrt(disc)) / a;
        var t2 = (-k - Math.sqrt(disc)) / a;

        if (t1 > t2) {
          var _t = t1;
          t1 = t2;
          t2 = _t;
        }

        return !(t2 < eps || t1 > 1 - eps);
      }
    }
    /**
     * Rotate line on angle
     * @param {{x: number, y: number}} dot0
     * @param {{x: number, y: number}} dot1
     * @param {number} angle
     * @return {{first: *, second: *}}
     */

  }, {
    key: "rotateLine",
    value: function rotateLine(dot0, dot1, angle) {
      dot0 = this.rotateDot(dot0, angle);
      dot1 = this.rotateDot(dot1, angle);
      return {
        first: dot0,
        second: dot1
      };
    }
    /**
     * Rotate dot on angle
     * @param {{x: number, y: number}} dot
     * @param {number} angle
     * @return {{x: number, y: number}}
     */

  }, {
    key: "rotateDot",
    value: function rotateDot(dot, angle) {
      var newX = dot.x * Math.cos(angle) - dot.y * Math.sin(angle);
      dot.y = dot.x * Math.sin(angle) + dot.y * Math.cos(angle);
      dot.x = newX;
      return dot;
    }
    /**
     * Get coords of cursor center
     * @param {number} cursorAngle
     * @return {{x: number, y: number}}
     */

  }, {
    key: "cursorAngleToDot",
    value: function cursorAngleToDot(cursorAngle) {
      return {
        x: (_settings_js__WEBPACK_IMPORTED_MODULE_0__["CURSOR"].radius - 30) * Math.cos(-cursorAngle),
        y: (_settings_js__WEBPACK_IMPORTED_MODULE_0__["CURSOR"].radius - 30) * Math.sin(-cursorAngle)
      };
    }
  }]);

  return Geometry;
}();



/***/ }),

/***/ "./static/public/js/game/core/offline-core.js":
/*!****************************************************!*\
  !*** ./static/public/js/game/core/offline-core.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OfflineGame; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./static/public/js/game/core/core.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry.js */ "./static/public/js/game/core/geometry.js");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../event-bus.js */ "./static/public/js/event-bus.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./static/public/js/game/core/events.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.js */ "./static/public/js/game/core/settings.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var mask2 = 4;
var mask5 = 22;
/**
 * Offline game core class
 */

var OfflineGame =
/*#__PURE__*/
function (_GameCore) {
  _inherits(OfflineGame, _GameCore);

  /**
   * Constructor
   * @param {object} controller
   * @param {object} scene
   */
  function OfflineGame(controller, scene) {
    var _this;

    _classCallCheck(this, OfflineGame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OfflineGame).call(this, controller, scene));
    _this.scene = scene;
    _this.state = {};
    _this.gameLoop = _this.gameLoop.bind(_assertThisInitialized(_this));
    _this.gameloopRequestId = null;
    _this.lastFrame = 0;
    return _this;
  }
  /**
   * Start game
   */


  _createClass(OfflineGame, [{
    key: "start",
    value: function start() {
      _get(_getPrototypeOf(OfflineGame.prototype), "start", this).call(this);

      this.state = {
        hexagons: [],
        cursorAngle: Math.PI / 2,
        score: 0,
        time: 0,
        cursorCircleAngle: 0,
        clockWise: true
      };
      this.tick = 0;
      this.state.hexagons = Array.from(new Array(3), function (_, position) {
        return {
          side: 400 + 300 * position,
          sides: Math.floor(Math.random() * 2) === 1 ? mask2 : mask5,
          angle: Math.floor(Math.random() * 2 * Math.PI)
        };
      });
      setTimeout(function () {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].START_GAME, this.state);
      }.bind(this));
    }
    /**
     * GameController loop action
     * @param {number} now
     */

  }, {
    key: "gameLoop",
    value: function gameLoop(now) {
      var delay = now - this.lastFrame;
      this.state.time += delay / 1000;
      this.lastFrame = now;
      ++this.tick;
      var difficultyIncrement = 1 + 1e-2 * 0.04 * this.tick;

      if (difficultyIncrement > 2.5) {
        difficultyIncrement = 2.5;
      }

      var ticksSinceRotation = this.tick % Math.round(15 * 25);

      if (ticksSinceRotation === 0) {
        this.state.clockWise = !this.state.clockWise;
      }

      var ticksToRotation = Math.min(ticksSinceRotation, Math.abs(ticksSinceRotation - 15 * 0.04));
      var rotationAmplitude = Math.min(1, Math.max(0.5, 3 * ticksToRotation / 15 * 0.04));
      var rotationDirection = 1.0;

      if (!this.state.clockWise) {
        rotationDirection = -1;
      }

      var angleIncrement = rotationAmplitude * rotationDirection;
      angleIncrement *= Math.PI / 3 * 0.04 * difficultyIncrement;
      this.state.cursorCircleAngle += angleIncrement;
      this.state.hexagons = this.state.hexagons.map(function (hexagon) {
        hexagon.side -= _settings_js__WEBPACK_IMPORTED_MODULE_4__["HEXAGON"].speed * delay;
        hexagon.angle += _settings_js__WEBPACK_IMPORTED_MODULE_4__["HEXAGON"].rotatingSpeed * delay;
        return hexagon;
      });

      for (var i = 0; i < this.state.hexagons.length; i++) {
        if (this.state.hexagons[i].side < _settings_js__WEBPACK_IMPORTED_MODULE_4__["HEXAGON"].minSize) {
          this.state.hexagons[i] = {
            side: 1100,
            sides: Math.floor(Math.random() * 2) === 1 ? mask2 : mask5,
            angle: Math.floor(Math.random() * 2 * Math.PI)
          };
          this.state.score += 10;
        }
      }

      _event_bus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].GAME_STATE_CHANGED, this.state);
      var cursor = _geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"].cursorAngleToDot(this.state.cursorAngle - this.state.cursorCircleAngle);

      for (var _i = 0; _i < this.state.hexagons.length; _i++) {
        var condition = _geometry_js__WEBPACK_IMPORTED_MODULE_1__["default"].checkHexagonCollision(this.state.hexagons[_i], cursor);

        if (condition) {
          _event_bus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].FINISH_GAME, this.state);
          return;
        }
      }

      this.gameloopRequestId = requestAnimationFrame(this.gameLoop);
    }
    /**
     * Control pressed event
     * @param {object} evt
     */

  }, {
    key: "onControllsPressed",
    value: function onControllsPressed(evt) {
      var _this2 = this;

      if (!this.controllersLoopIntervalId) {
        this.controllersLoopIntervalId = setInterval(function () {
          var speed = _settings_js__WEBPACK_IMPORTED_MODULE_4__["CURSOR"].rotatingSpeed;

          if (_this2._pressed('LEFT', evt)) {
            if (_this2.state.clockWise) {
              speed *= 1.5;
            }

            _this2.state.cursorAngle += speed;
          } else if (_this2._pressed('RIGHT', evt)) {
            if (!_this2.state.clockWise) {
              speed *= 1.5;
            }

            _this2.state.cursorAngle -= speed;
          }
        }, 50);
      }
    }
    /**
     * Control unpressed event
     * @param {object} evt
     */

  }, {
    key: "onControllsUnpressed",
    value: function onControllsUnpressed(evt) {
      clearInterval(this.controllersLoopIntervalId);
      this.controllersLoopIntervalId = undefined;
    }
    /**
     * Start game event
     * @param {object} evt
     */

  }, {
    key: "onGameStarted",
    value: function onGameStarted(evt) {
      this.controller.start();
      this.scene.render(evt);
      this.scene.start();
      this.lastFrame = performance.now();
      this.gameloopRequestId = requestAnimationFrame(this.gameLoop);
    }
    /**
     * Finish game event
     * @param {object} evt
     */

  }, {
    key: "onGameFinished",
    value: function onGameFinished(evt) {
      this.destroy();
    }
    /**
     * Destructor
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(OfflineGame.prototype), "destroy", this).call(this);

      cancelAnimationFrame(this.gameloopRequestId);

      if (this.controllersLoopIntervalId) {
        clearInterval(this.controllersLoopIntervalId);
      }

      this.scene.stop();
    }
    /**
     * State change game event
     * @param {object} evt
     */

  }, {
    key: "onGameStateChanged",
    value: function onGameStateChanged(evt) {
      this.scene.update(evt);
    }
  }]);

  return OfflineGame;
}(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/game/core/online-single-core.js":
/*!**********************************************************!*\
  !*** ./static/public/js/game/core/online-single-core.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OfflineGame; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./static/public/js/game/core/core.js");
/* harmony import */ var _controllers_notification_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/notification-controller.js */ "./static/public/js/controllers/notification-controller.js");
/* harmony import */ var _event_bus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../event-bus.js */ "./static/public/js/event-bus.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ "./static/public/js/game/core/events.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.js */ "./static/public/js/game/core/settings.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * Offline game core class
 */

var OfflineGame =
/*#__PURE__*/
function (_GameCore) {
  _inherits(OfflineGame, _GameCore);

  /**
   * Constructor
   * @param {object} controller
   * @param {object} scene
   */
  function OfflineGame(controller, scene) {
    var _this;

    _classCallCheck(this, OfflineGame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OfflineGame).call(this, controller, scene));
    _this.scene = scene;
    _this.state = {};
    _this.gameLoop = _this.gameLoop.bind(_assertThisInitialized(_this));
    _this.ws = new _controllers_notification_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"]('/play', _this.gameLoop.bind(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Start game
   */


  _createClass(OfflineGame, [{
    key: "start",
    value: function start() {
      _get(_getPrototypeOf(OfflineGame.prototype), "start", this).call(this);

      this.state = {
        hexagons: [],
        cursorAngle: Math.PI / 2,
        score: 0,
        time: 0,
        cursorCircleAngle: 0
      };
      this.time = performance.now();
      setTimeout(function () {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].START_GAME, this.state);
      }.bind(this));
    }
    /**
     * GameController loop action
     * @param {object} message
     */

  }, {
    key: "gameLoop",
    value: function gameLoop(message) {
      var _this2 = this;

      var data;

      try {
        // TODO get game id here
        data = JSON.parse(message.data);
      } catch (e) {
        return;
      }

      this.state.time = (performance.now() - this.time) / 1000;

      if (data.hexes) {
        this.state.cursorCircleAngle = data.cursorCircleAngle;
        this.state.score = data.score;
        this.state.hexagons = data.hexes;
        this.state.hexagons.forEach(function (_, position) {
          _this2.state.hexagons[position].sides = _this2.state.hexagons[position].sidesMask;
        });
        _event_bus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].GAME_STATE_CHANGED, this.state);
      }

      if (data.over) {
        _event_bus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit(_events_js__WEBPACK_IMPORTED_MODULE_3__["default"].FINISH_GAME, this.state);
      }
    }
    /**
     * Control pressed event
     * @param {object} evt
     */

  }, {
    key: "onControllsPressed",
    value: function onControllsPressed(evt) {
      var _this3 = this;

      if (!this.controllersLoopIntervalId) {
        this.controllersLoopIntervalId = setInterval(function () {
          if (_this3._pressed('LEFT', evt)) {
            _this3.state.cursorAngle += _settings_js__WEBPACK_IMPORTED_MODULE_4__["CURSOR"].rotatingSpeed;
          } else if (_this3._pressed('RIGHT', evt)) {
            _this3.state.cursorAngle -= _settings_js__WEBPACK_IMPORTED_MODULE_4__["CURSOR"].rotatingSpeed;
          }

          _this3.ws.sendData(JSON.stringify({
            angle: _this3.state.cursorAngle
          }));
        }, 50);
      }
    }
    /**
     * Control unpressed event
     * @param {object} evt
     */

  }, {
    key: "onControllsUnpressed",
    value: function onControllsUnpressed(evt) {
      clearInterval(this.controllersLoopIntervalId);
      this.controllersLoopIntervalId = undefined;
    }
    /**
     * Start game event
     * @param {object} evt
     */

  }, {
    key: "onGameStarted",
    value: function onGameStarted(evt) {
      this.controller.start();
      this.scene.render(evt);
      this.scene.start();
    }
    /**
     * Finish game event
     * @param {object} evt
     */

  }, {
    key: "onGameFinished",
    value: function onGameFinished(evt) {
      this.destroy();
    }
    /**
     * Destructor
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(OfflineGame.prototype), "destroy", this).call(this);

      if (this.controllersLoopIntervalId) {
        clearInterval(this.controllersLoopIntervalId);
      }

      this.ws.close();
      this.scene.stop();
    }
    /**
     * State change game event
     * @param {object} evt
     */

  }, {
    key: "onGameStateChanged",
    value: function onGameStateChanged(evt) {
      this.scene.update(evt);
    }
  }]);

  return OfflineGame;
}(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/game/core/settings.js":
/*!************************************************!*\
  !*** ./static/public/js/game/core/settings.js ***!
  \************************************************/
/*! exports provided: CURSOR, HEXAGON, MASKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURSOR", function() { return CURSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEXAGON", function() { return HEXAGON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MASKS", function() { return MASKS; });
var CURSOR = {
  radius: 100,
  height: 15,
  rotatingSpeed: Math.PI / 12
};
var HEXAGON = {
  minSize: 40,
  width: 10,
  speed: 0.2,
  rotatingSpeed: Math.PI / 5000
};
var MASKS = {
  top: 1,
  topRight: 2,
  bottomRight: 4,
  bottom: 8,
  bottomLeft: 16,
  topLeft: 32
};

/***/ }),

/***/ "./static/public/js/game/game.js":
/*!***************************************!*\
  !*** ./static/public/js/game/game.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _core_offline_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/offline-core.js */ "./static/public/js/game/core/offline-core.js");
/* harmony import */ var _core_online_single_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/online-single-core.js */ "./static/public/js/game/core/online-single-core.js");
/* harmony import */ var _controllers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers.js */ "./static/public/js/game/controllers.js");
/* harmony import */ var _mods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mods.js */ "./static/public/js/game/mods.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





/**
 *
 */

var Game =
/*#__PURE__*/
function () {
  /**
   * GameController class constructor
   * @param {Object} mode
   * @param {View} view
   */
  function Game(mode, view) {
    _classCallCheck(this, Game);

    var GameConstructor = null;

    switch (mode) {
      case _mods_js__WEBPACK_IMPORTED_MODULE_3__["default"].ONLINE:
        {
          GameConstructor = _core_online_single_core_js__WEBPACK_IMPORTED_MODULE_1__["default"];
          break;
        }

      case _mods_js__WEBPACK_IMPORTED_MODULE_3__["default"].OFFLINE:
        {
          GameConstructor = _core_offline_core_js__WEBPACK_IMPORTED_MODULE_0__["default"];
          break;
        }

      default:
        throw new Error('Invalid game mode ' + mode);
    }

    this.gameControllers = new _controllers_js__WEBPACK_IMPORTED_MODULE_2__["default"](view);
    this.gameCore = new GameConstructor(this.gameControllers, view);
  }
  /**
   * Start game
   */


  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.gameCore.start();
    }
    /**
     * GameController destructor
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.gameCore.destroy();
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./static/public/js/game/mods.js":
/*!***************************************!*\
  !*** ./static/public/js/game/mods.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GAME_MODES = {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};
/* harmony default export */ __webpack_exports__["default"] = (GAME_MODES);

/***/ }),

/***/ "./static/public/js/graphics/arrow.js":
/*!********************************************!*\
  !*** ./static/public/js/graphics/arrow.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserArrow; });
/* harmony import */ var _game_core_geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/core/geometry.js */ "./static/public/js/game/core/geometry.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @class UserArrow
 */

var UserArrow =
/*#__PURE__*/
function () {
  /**
   * Construct user arrow element in canvas
   * @param {Object} ctx
   * @param {Number} base
   * @param {Number} height
   * @param {Number} side
   * @param {string} color
   */
  function UserArrow(ctx, base, height, side, color) {
    _classCallCheck(this, UserArrow);

    this.ctx = ctx;
    this.color = color;
    this.currentAngle = 0;
    side /= 1.5;
    this.radius = side + height;
    this.lineRadius = Math.sqrt(base * base / 4 + side * side);
    this.alpha = Math.asin(base / 2 / this.lineRadius);
  }
  /**
   * Draw arrow
   * @param {Number} angle - local angle
   */


  _createClass(UserArrow, [{
    key: "draw",
    value: function draw() {
      var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.currentAngle = -angle;
      var vx = Math.cos(this.currentAngle) * this.radius;
      var vy = Math.sin(this.currentAngle) * this.radius;
      var x1 = Math.cos(this.currentAngle + this.alpha) * this.lineRadius;
      var y1 = Math.sin(this.currentAngle + this.alpha) * this.lineRadius;
      var x2 = Math.cos(this.currentAngle - this.alpha) * this.lineRadius;
      var y2 = Math.sin(this.currentAngle - this.alpha) * this.lineRadius;
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.moveTo(vx, vy);
      this.ctx.lineTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.closePath();
      this.ctx.fill(); // it was used for debugging
      // const dot = Geometry.cursorAngleToDot(-this.currentAngle);
      // this.ctx.beginPath();
      // this.ctx.arc(dot.x, dot.y, 10, 0, 2 * Math.PI);
      // this.ctx.fill();
    }
  }]);

  return UserArrow;
}();



/***/ }),

/***/ "./static/public/js/graphics/hexagon.js":
/*!**********************************************!*\
  !*** ./static/public/js/graphics/hexagon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hexagon; });
/* harmony import */ var _game_core_geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/core/geometry.js */ "./static/public/js/game/core/geometry.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var FALL_SPEED = 1;
var FALL_SIZE = 5;
/**
 * @class Hexagon
 */

var Hexagon =
/*#__PURE__*/
function () {
  /**
   * Create Hexagon in canvas
   * @param {Object} ctx
   * @param {Number} side
   * @param {Number} lineWidth
   * @param {Number} emptySides
   * @param {string} color
   * @param {Number} angle
   */
  function Hexagon(ctx, side, lineWidth, emptySides, color, angle) {
    _classCallCheck(this, Hexagon);

    this.side = side;
    this.currentSide = side;
    this.ctx = ctx;
    this.sidesMask = emptySides;
    this.lineWidth = lineWidth;
    this.currentAngle = angle;
    this.emptySides = new Array(6);
    this.color = color;

    this._parseMask();
  }
  /**
   * Set parameters for new hexagon
   * @param {Number} emptySides
   * @param {string} color
   */


  _createClass(Hexagon, [{
    key: "setNewParameters",
    value: function setNewParameters(emptySides, color) {
      this.currentSide = this.side;
      this.sidesMask = emptySides;
      this.emptySides = [];
      this.color = color;

      this._parseMask();
    }
    /**
     * Parses mask from server or client to detect blank sides.
     * @private
     */

  }, {
    key: "_parseMask",
    value: function _parseMask() {
      var copyNum = this.sidesMask;

      for (var i = 0; i < 6 && copyNum; ++i) {
        this.emptySides[i] = copyNum & 1;
        copyNum >>= 1;
      }
    }
    /**
     * Reduces the sides size
     */

  }, {
    key: "fallDown",
    value: function fallDown() {
      this.currentSide -= FALL_SPEED * FALL_SIZE;
    }
    /**
     * Draw hexagon
     */

  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      this.ctx.beginPath();
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.color; // let x = -this.currentSide / 2 * Math.sin(this.currentAngle);
      // let y = this.currentSide / 2 * Math.cos(this.currentAngle);
      // this.ctx.moveTo(x, y);

      var lines = _game_core_geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"].convertHexagonToLines({
        side: this.side,
        sides: this.sidesMask,
        angle: this.currentAngle
      });
      lines.forEach(function (_, pos) {
        if (lines[pos]) {
          lines[pos] = _game_core_geometry_js__WEBPACK_IMPORTED_MODULE_0__["default"].rotateLine(lines[pos].first, lines[pos].second, _this.currentAngle);
        }
      });

      for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (line) {
          if (i === 0) {
            this.ctx.moveTo(line.first.x, line.first.y);
          }

          this.ctx.lineTo(line.second.x, line.second.y);
        } else if (i < lines.length - 1 && lines[i + 1]) {
          this.ctx.moveTo(lines[i + 1].first.x, lines[i + 1].first.y);
        }
      }

      this.ctx.restore();

      if (!this.sidesMask) {
        this.ctx.closePath();
      }

      this.ctx.stroke();
    }
  }]);

  return Hexagon;
}();



/***/ }),

/***/ "./static/public/js/graphics/text.js":
/*!*******************************************!*\
  !*** ./static/public/js/graphics/text.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasText; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TEXT_SIZE = 30;
/**
 * @class CanvasText
 */

var CanvasText =
/*#__PURE__*/
function () {
  /**
   * @constructor
   * @param {Object} ctx - context
   * @param {Number} pos - Y-text level
   * @param {string} color - text color
   * @param {string} background - background color
   * @param {string} text - input text
   * @param {Number} textStatus - simple OX orientation
   *                [ left: -1, center: 0, right: 1 ]
   */
  function CanvasText(ctx, pos, color, background) {
    var text = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var textStatus = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, CanvasText);

    this.ctx = ctx;
    this.position = pos;
    this.color = color;
    this.background = background;
    this.text = text;
    this.simplePos = textStatus;
  }
  /**
   * Update text and background
   * @param {string|Number} text - new text
   * @param {string} background - new background color
   */


  _createClass(CanvasText, [{
    key: "setParameters",
    value: function setParameters(text) {
      var background = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (Number.isFinite(text) && this.simplePos === 0) {
        this.text = text.toFixed(2);
      } else {
        this.text = text;
      }

      if (background !== undefined) {
        this.background = background;
      }
    }
    /**
     * Draw text in canvas
     */

  }, {
    key: "draw",
    value: function draw() {
      this.ctx.font = "".concat(TEXT_SIZE, "pt  'Russo One', sans-serif, cursive");
      var textWidth = this.ctx.measureText(this.text).width;
      this.ctx.fillStyle = this.background;
      var x = 0;

      switch (+this.simplePos) {
        case -1:
          {
            x = 10;
            break;
          }

        case 1:
          {
            x = this.ctx.canvas.width - textWidth - 10;
            break;
          }

        default:
          {
            x = (this.ctx.canvas.width - textWidth) / 2;
          }
      }

      this.ctx.fillRect(x, this.position - TEXT_SIZE, textWidth, TEXT_SIZE);
      this.ctx.fillStyle = this.color;
      this.ctx.fillText(this.text, x, this.position);
    }
  }]);

  return CanvasText;
}();



/***/ }),

/***/ "./static/public/js/main.js":
/*!**********************************!*\
  !*** ./static/public/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/config.js */ "./static/public/js/settings/config.js");
/* harmony import */ var _views_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/header.js */ "./static/public/js/views/header.js");
/* harmony import */ var _core_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/router.js */ "./static/public/js/core/router.js");
/* harmony import */ var _controllers_menu_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/menu-controller.js */ "./static/public/js/controllers/menu-controller.js");
/* harmony import */ var _controllers_authors_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/authors-controller.js */ "./static/public/js/controllers/authors-controller.js");
/* harmony import */ var _controllers_scoreboard_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/scoreboard-controller.js */ "./static/public/js/controllers/scoreboard-controller.js");
/* harmony import */ var _controllers_profile_controller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/profile-controller.js */ "./static/public/js/controllers/profile-controller.js");
/* harmony import */ var _controllers_signup_controller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/signup-controller.js */ "./static/public/js/controllers/signup-controller.js");
/* harmony import */ var _controllers_login_controller_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/login-controller.js */ "./static/public/js/controllers/login-controller.js");
/* harmony import */ var _controllers_logout_controller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/logout-controller.js */ "./static/public/js/controllers/logout-controller.js");
/* harmony import */ var _controllers_update_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/update-controller.js */ "./static/public/js/controllers/update-controller.js");
/* harmony import */ var _controllers_game_menu_controller_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controllers/game-menu-controller.js */ "./static/public/js/controllers/game-menu-controller.js");
/* harmony import */ var _controllers_game_over_mlt_controller_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controllers/game-over-mlt-controller.js */ "./static/public/js/controllers/game-over-mlt-controller.js");
/* harmony import */ var _controllers_game_controller_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controllers/game-controller.js */ "./static/public/js/controllers/game-controller.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/style.css */ "./static/public/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_14__);


__webpack_require__(/*! ./bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js");

__webpack_require__(/*! ./bundle.bemtree.js */ "./static/public/js/bundle.bemtree.js");

__webpack_require__(/*! ../icons/favicon.ico */ "./static/public/icons/favicon.ico");
















var application = document.getElementById('application');
Object(_views_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

application.insertAdjacentHTML('beforeend', '<div id="main"></div>');
var main = document.getElementById('main');
var router = new _core_router_js__WEBPACK_IMPORTED_MODULE_2__["default"](_settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].home, application).addRoute('/', new _controllers_menu_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"](main)).addRoute('authors', new _controllers_authors_controller_js__WEBPACK_IMPORTED_MODULE_4__["default"](main)).addRoute('leaders', new _controllers_scoreboard_controller_js__WEBPACK_IMPORTED_MODULE_5__["default"](main)).addRoute('profile', new _controllers_profile_controller_js__WEBPACK_IMPORTED_MODULE_6__["default"](main)).addRoute('signup', new _controllers_signup_controller_js__WEBPACK_IMPORTED_MODULE_7__["default"](main)).addRoute('signin', new _controllers_login_controller_js__WEBPACK_IMPORTED_MODULE_8__["default"](main)).addRoute('exit', new _controllers_logout_controller_js__WEBPACK_IMPORTED_MODULE_9__["default"](main)).addRoute('authors', new _controllers_authors_controller_js__WEBPACK_IMPORTED_MODULE_4__["default"](main)).addRoute('profile/update', new _controllers_update_controller_js__WEBPACK_IMPORTED_MODULE_10__["default"](main)).addRoute('single', new _controllers_game_controller_js__WEBPACK_IMPORTED_MODULE_13__["default"](main)).addRoute('multi', new _controllers_game_over_mlt_controller_js__WEBPACK_IMPORTED_MODULE_12__["default"](main)).addRoute('play', new _controllers_game_menu_controller_js__WEBPACK_IMPORTED_MODULE_11__["default"](main));
router.start();

/***/ }),

/***/ "./static/public/js/models/author.js":
/*!*******************************************!*\
  !*** ./static/public/js/models/author.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ajax.js */ "./static/public/js/ajax.js");
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/config.js */ "./static/public/js/settings/config.js");
/* harmony import */ var _core_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/model.js */ "./static/public/js/core/model.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @class Author
 */

var Author =
/*#__PURE__*/
function (_Model) {
  _inherits(Author, _Model);

  function Author() {
    _classCallCheck(this, Author);

    return _possibleConstructorReturn(this, _getPrototypeOf(Author).apply(this, arguments));
  }

  _createClass(Author, [{
    key: "getAuthors",

    /**
     * Get list of authors
     * @return {Promise<any | never>}
     */
    value: function getAuthors() {
      return _ajax_js__WEBPACK_IMPORTED_MODULE_0__["default"].doGet({
        path: _settings_config_js__WEBPACK_IMPORTED_MODULE_1__["settings"].url + '/authors'
      }).then(function (response) {
        if (response.status > 499) {
          throw new Error('Server error');
        }

        return response.json().then(function (data) {
          return data.data;
        });
      }, function (error) {
        throw new Error(error);
      });
    }
  }]);

  return Author;
}(_core_model_js__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./static/public/js/models/user-service.js":
/*!*************************************************!*\
  !*** ./static/public/js/models/user-service.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserService; });
/* harmony import */ var _core_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/model.js */ "./static/public/js/core/model.js");
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ajax.js */ "./static/public/js/ajax.js");
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/config.js */ "./static/public/js/settings/config.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation.js */ "./static/public/js/validation.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @class UserService
 */

var UserService =
/*#__PURE__*/
function (_Model) {
  _inherits(UserService, _Model);

  /**
   * Create user object
   */
  function UserService() {
    var _this;

    _classCallCheck(this, UserService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserService).call(this));
    _this.user = undefined;
    _this.event = null;
    return _this;
  }
  /**
   * Get users data from server
   * @return {Promise} promise to get user data
   */


  _createClass(UserService, null, [{
    key: "getData",
    value: function getData() {
      var _this2 = this;

      if (this.user) {
        return new Promise(function (resolve) {
          resolve(_this2.user);
        });
      }

      return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doGet({
        path: _settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url + '/'
      }).then(function (response) {
        if (response.status > 499) {
          return undefined; // TODO show message here
        }

        return response.json().then(function (data) {
          _this2.user = data.user;

          if (_this2.user !== null) {
            _this2.user.isCurrent = true;
          }

          return data.user;
        });
      }, function (error) {
        return undefined;
      });
    }
    /**
     * Send user data to the server
     * @param {HTMLFormElement} form
     * @param {Object} body
     * @return {Promise}
     */

  }, {
    key: "sendData",
    value: function sendData(form, body) {
      // По идее надо бы сделать на каждый урл свой метод
      var path = '';

      if (form.id === 'loginForm') {
        path = '/signin';
      } else if (form.id === 'signup-form') {
        path = '/users';
      } else {
        path = '/signout';
      }

      return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doPost({
        path: _settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url + path,
        body: body
      }).then(function (response) {
        if (response.status > 499) {
          throw new Error('Server error');
        }

        return response.json().then(function (data) {
          return Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["checkResponse"])(data, form);
        });
      });
    }
    /**
     * Send user data to the server
     * @param {HTMLFormElement} form
     * @param {Object} body
     * @return {Promise}
     */

  }, {
    key: "singout",
    value: function singout() {
      var _this3 = this;

      var path = _settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url + '/signout';
      return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doPost({
        path: path
      }).then(function (response) {
        if (response.status > 499) {
          throw new Error('Server error');
        }

        _this3.user = undefined;
        return response.json().then(function () {
          return true;
        });
      });
    }
    /**
     * Update user data on the server
     * @param {HTMLFormElement} form
     * @param {Object} body
     * @param {int} userId
     * @return {Promise}
     */

  }, {
    key: "updateData",
    value: function updateData(form, body, userId) {
      var _this4 = this;

      var path = "".concat(_settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url, "/users/").concat(userId);
      return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doPut({
        path: path,
        body: body
      }).then(function (response) {
        if (response.status > 499) {
          throw new Error('Server error');
        }

        return response.json().then(function (data) {
          if (Object(_validation_js__WEBPACK_IMPORTED_MODULE_3__["checkResponse"])(data, form)) {
            _this4.user = undefined;
            return true;
          } else {
            return false;
          }
        });
      });
    }
    /**
     * Get list of users with pagination
     * @param {string} page
     * @return {Promise<any | never>}
     */

  }, {
    key: "getUsers",
    value: function getUsers(page) {
      var url = _settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url + '/users?sort=-highscore&page=' + page;
      return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doGet({
        path: url
      }).then(function (response) {
        if (response.status > 499) {
          throw new Error('Server error');
        }

        return response.json().then(function (data) {
          return JSON.parse(JSON.stringify(data));
        }, function (error) {
          throw new Error(error);
        });
      }, function (error) {
        throw new Error(error);
      });
    }
    /**
     * Get user by id. If id == -1 get current user.
     * @param {number} id
     * @return {Promise<any | never>}
     */

  }, {
    key: "getUser",
    value: function getUser(id) {
      var _this5 = this;

      if (id !== -1) {
        var path = _settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url + '/users/' + id;
        return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doGet({
          path: path
        }).then(function (response) {
          if (response.status > 499) {
            throw new Error('Server error');
          }

          return response.json().then(function (data) {
            data.data.isCurrent = !data.user === null && data.data.uid === data.user.uid;
            return data.data;
          }, function (error) {
            throw new Error(error);
          });
        });
      } else {
        if (this.user) {
          return new Promise(function (resolve) {
            resolve(_this5.user);
          });
        }

        return _ajax_js__WEBPACK_IMPORTED_MODULE_1__["default"].doGet({
          path: _settings_config_js__WEBPACK_IMPORTED_MODULE_2__["settings"].url + '/'
        }).then(function (response) {
          if (response.status > 499) {
            throw new Error('Server error');
          }

          return response.json().then(function (data) {
            data.user.isCurrent = true;
            _this5.user = data.user;
            return data.user;
          }, function (error) {
            throw new Error(error);
          });
        });
      }
    }
    /**
     * Update user score in local data
     * @param {number} score
     */

  }, {
    key: "updateScore",
    value: function updateScore(score) {
      if (this.user && this.user.highScore < score) {
        this.user.highScore = score;
      }
    }
  }]);

  return UserService;
}(_core_model_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/parsing.js":
/*!*************************************!*\
  !*** ./static/public/js/parsing.js ***!
  \*************************************/
/*! exports provided: parseUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUser", function() { return parseUser; });
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/config.js */ "./static/public/js/settings/config.js");

/**
 * Transform json of user to readable format
 * @param {Object} user
 * @return {Object} user json
 */

function parseUser(user) {
  var genderToStr = {
    male: 'Мужской',
    female: 'Женский',
    other: 'Другой',
    "null": ''
  };
  var email = user.email,
      nickname = user.username,
      highScore = user.highScore,
      id = user.uid;
  var gender = user.gender,
      img = user.img;
  gender = gender !== null ? genderToStr[gender] : '';
  img = _settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath + img;
  return {
    gender: gender,
    email: email,
    nickname: nickname,
    id: id,
    img: img,
    highScore: highScore
  };
}

/***/ }),

/***/ "./static/public/js/settings/config.js":
/*!*********************************************!*\
  !*** ./static/public/js/settings/config.js ***!
  \*********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
var settings = {
  home: 'http://127.0.0.1:8080',
  url: 'http://127.0.0.1:3000',
  imgPath: 'https://hexagon-game.s3.eu-north-1.amazonaws.com/img/',
  wsUrl: 'ws://127.0.0.1:3000'
};

/***/ }),

/***/ "./static/public/js/settings/server-errors.js":
/*!****************************************************!*\
  !*** ./static/public/js/settings/server-errors.js ***!
  \****************************************************/
/*! exports provided: serverErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverErrors", function() { return serverErrors; });
var serverErrors = {
  'E_DATE_OUT_OF_RANGE': 'Некорректная дата',
  'E_INVALID_DATE_FORMAT': 'Некорректная дата',
  'E_INVALID_BASE64': 'Некорректный файл',
  'E_EMAIL_DOES_NOT_EXIST': 'Неверный email',
  'E_INVALID_CREDENTIALS': 'Неверный email или пароль',
  'E_EMAIL_DOMAIN_DOES_NOT_EXIST': 'Некорректный email',
  'E_TOO_LONG': 'Введенное значение слишком длинное',
  'E_TOO_SHORT': 'Введенное значение слишком короткое',
  'E_DUPLICATE_NOT_ALLOWED': 'Это значение уже занято'
};

/***/ }),

/***/ "./static/public/js/validation.js":
/*!****************************************!*\
  !*** ./static/public/js/validation.js ***!
  \****************************************/
/*! exports provided: addValidationOnBlur, validateForm, checkResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addValidationOnBlur", function() { return addValidationOnBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkResponse", function() { return checkResponse; });
/* harmony import */ var _settings_server_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings/server-errors.js */ "./static/public/js/settings/server-errors.js");

/**
 * Check if input is valid
 * @param {HTMLInputElement} input
 * @return {Array} array of errors
 */

function validate(input) {
  if (input.value === '') {
    if (input.required) {
      return ['Заполните это поле'];
    }

    return [];
  }

  var errors = [];

  switch (input.attributes['checktype'].value) {
    case 'password':
      errors = validatePassword(input);
      break;

    case 'repeatPassword':
      errors = validateRepeatPassword(input);
      break;

    case 'email':
      errors = validateEmail(input);
      break;

    case 'name':
      errors = validateName(input);
      break;

    case 'lastName':
      errors = validateLastName(input);
      break;

    case 'username':
      errors = validateUserName(input);
  }

  return errors;
}
/**
 * Add help-text with error after input
 * @param {HTMLInputElement}input
 * @param {Array}errMsgs
 */


function addErrors(input, errMsgs) {
  if (errMsgs.length !== 0) {
    var msg = errMsgs.join('<br>');
    var helpText = document.getElementById('help_' + input.name);
    helpText.innerHTML = msg;
    helpText.classList.remove('form-group__help-text_hidden');
    helpText.classList.add('form-group__help-text_type_error');
  }
}
/**
 * Hide error under the input
 * @param {HTMLInputElement}input
 */


function clearErrors(input) {
  var helpText = document.getElementById('help_' + input.name);
  helpText.classList.remove('form-group__help-text_type_error');
  helpText.classList.add('form-group__help-text_hidden');
  helpText.innerHTML = '';
}
/**
 * Validate password
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */


function validatePassword(input) {
  var errors = [];

  if (input.value.length < 8) {
    errors.push('Пароль должен содержать не менее 8 символов');
  }

  if (!/[0-9]/.test(input.value)) {
    errors.push('Пароль должен содержать цифры');
  }

  if (!/[A-z]/.test(input.value)) {
    errors.push('Пароль должен содержать латинские буквы');
  }

  if (!/^[\w\dA-z]+$/.test(input.value)) {
    errors.push('Пароль должен состоять из цифр и латинских букв');
  }

  return errors;
}
/**
 * Validate passport repeat field
 * @param {HTMLInputElement}input
 * @return {Array} array of serverErrors
 */


function validateRepeatPassword(input) {
  var formId = input.id.split('_')[0];
  var password = document.getElementById(formId + '_password');

  if (input.value !== password.value) {
    return ['Введенное значение не совпадает с паролем'];
  }

  return [];
}
/**
 * Validate email
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */


function validateEmail(input) {
  var errors = [];
  var emailReg = RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\' + '[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}' + '\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

  if (!emailReg.test(input.value)) {
    errors.push('Введите корректный email-адрес');
  }

  if (input.value.length > 256) {
    errors.push('Длина не должна превышать 256 символов');
  }

  return errors;
}
/**
 * Validate name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */


function validateName(input) {
  var errors = [];

  if (!/^[A-ZА-ЯЁ]/.test(input.value)) {
    errors.push('Имя должно начинаться с заглавной буквы');
  }

  if (input.value.length > 32) {
    errors.push('Длина не должна превышать 32 символа');
  }

  return errors;
}
/**
 * Validate last name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */


function validateLastName(input) {
  var errors = [];

  if (!/^[A-ZА-ЯЁ]/.test(input.value)) {
    errors.push('Фамилия должна начинаться с заглавной буквы');
  }

  if (input.value.length > 32) {
    errors.push('Длина не должна превышать 32 символа');
  }

  return errors;
}
/**
 * Validate last name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */


function validateUserName(input) {
  var errors = [];

  if (!/^[A-Za-z0-9]+$/.test(input.value)) {
    errors.push('Username может содержать только цифры и латинские буквы');
  }

  if (input.value.length > 32) {
    errors.push('Длина не должна превышать 32 символа');
  }

  return errors;
}
/**
 * Add validation on blur event for every input on page
 */


function addValidationOnBlur() {
  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].attributes['checkable']) {
      continue;
    }

    inputs[i].onblur = function () {
      var errMsgs = validate(this);
      addErrors(this, errMsgs);
    };

    inputs[i].onfocus = function () {
      clearErrors(this);
    };
  }
}
/**
 * Validate form
 * @param {HTMLFormElement}form form to validate
 * @return {boolean} true if form is okay
 */

function validateForm(form) {
  var inputs = form.getElementsByTagName('input');
  var isOk = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;
      var expectedId = form.id + '_' + input.name;

      if (!input.attributes['checkable'] || input.id !== expectedId) {
        continue;
      }

      clearErrors(input);
      var errMsgs = validate(input);

      if (errMsgs.length > 0) {
        addErrors(input, errMsgs);
        isOk = false;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return isOk;
}
/**
 * Check server response and add errors to help-texts
 * @param {XMLHttpRequestResponseType} response
 * @param {HTMLFormElement} form
 * @return {boolean}
 */

function checkResponse(response, form) {
  if (response.status === 'ok') {
    return true;
  }

  var fields = response.data.fields;

  if (fields.password !== undefined && fields.password.errors) {
    var errors = [];
    fields.password.errors.forEach(function (error) {
      errors.push(_settings_server_errors_js__WEBPACK_IMPORTED_MODULE_0__["serverErrors"][error]);
    });

    if (errors) {
      addErrors(form['password'], errors);
    }
  }

  if (fields.username !== undefined && fields.username.errors) {
    var _errors = [];
    fields.username.errors.forEach(function (error) {
      _errors.push(_settings_server_errors_js__WEBPACK_IMPORTED_MODULE_0__["serverErrors"][error]);
    });
    addErrors(form['username'], _errors);
  }

  if (fields.name !== undefined && fields.name.errors) {
    var _errors2 = [];
    fields.name.errors.forEach(function (error) {
      _errors2.push(_settings_server_errors_js__WEBPACK_IMPORTED_MODULE_0__["serverErrors"][error]);
    });
    addErrors(form['email'], _errors2);
  }

  if (fields.email !== undefined && fields.email.errors) {
    var _errors3 = [];
    fields.email.errors.forEach(function (error) {
      _errors3.push(_settings_server_errors_js__WEBPACK_IMPORTED_MODULE_0__["serverErrors"][error]);
    });
    addErrors(form['email'], _errors3);
  }

  return false;
}

/***/ }),

/***/ "./static/public/js/views/authors-view.js":
/*!************************************************!*\
  !*** ./static/public/js/views/authors-view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthorsView; });
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config.js */ "./static/public/js/settings/config.js");
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class AuthorsView
 */


var AuthorsView =
/*#__PURE__*/
function (_View) {
  _inherits(AuthorsView, _View);

  /**
   * @param {HTMLElement} parent
   */
  function AuthorsView(parent) {
    _classCallCheck(this, AuthorsView);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuthorsView).call(this, parent));
  }
  /**
   * create Page with Authors
   * @param {Object} authors Authors JSON, in the format returned by the server
   */


  _createClass(AuthorsView, [{
    key: "render",
    value: function render(authors) {
      var data = JSON.parse(JSON.stringify(authors));
      var bemAuthors = [];
      Array.from(data).forEach(function (author) {
        var name = author.name,
            devInfo = author.devInfo,
            img = author.img,
            description = author.description;
        bemAuthors.push({
          name: name,
          devInfo: devInfo,
          img: _settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath + img,
          description: description
        });
      });
      var draw = [{
        block: 'authors',
        content: [{
          elem: 'header',
          content: 'Проект разработали'
        }, {
          block: 'icon',
          tag: 'a',
          wrappedInside: 'authors',
          wrappedAs: 'close-popup',
          mods: {
            size: 'large',
            color: 'black',
            btn: true,
            type: 'cross'
          },
          attrs: {
            'data-link-type': '/'
          }
        }, {
          elem: 'items',
          authors: bemAuthors
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    }
  }]);

  return AuthorsView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./static/public/js/views/game-menu-view.js":
/*!**************************************************!*\
  !*** ./static/public/js/views/game-menu-view.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameMenuView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class GameMenuView
 */


var GameMenuView =
/*#__PURE__*/
function (_View) {
  _inherits(GameMenuView, _View);

  /**
   *
   * @param {HTMLElement} parent
   */
  function GameMenuView(parent) {
    _classCallCheck(this, GameMenuView);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameMenuView).call(this, parent));
  }
  /**
   * create game menu page
   */


  _createClass(GameMenuView, [{
    key: "render",
    value: function render() {
      var template = [{
        block: 'menu',
        content: [{
          elem: 'items',
          points: [{
            href: 'single',
            text: 'Синглплеер',
            type: 'gamepad'
          }, {
            href: 'multi',
            text: 'Мультиплеер',
            type: 'users'
          }, {
            href: '/',
            text: 'Главное меню',
            type: 'back'
          }]
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    }
  }]);

  return GameMenuView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/views/game-over-mlt-view.js":
/*!******************************************************!*\
  !*** ./static/public/js/views/game-over-mlt-view.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOverMultiClass; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class GameOverMultiClass
 */


var GameOverMultiClass =
/*#__PURE__*/
function (_View) {
  _inherits(GameOverMultiClass, _View);

  /**
   * Construct game over page
   * @param {HTMLElement} parent
   */
  function GameOverMultiClass(parent) {
    _classCallCheck(this, GameOverMultiClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameOverMultiClass).call(this, parent));
  }
  /**
   * render page
   */


  _createClass(GameOverMultiClass, [{
    key: "render",
    value: function render() {
      var template = [{
        block: 'game-over',
        mods: {
          multi: true
        },
        content: [{
          elem: 'title',
          wrappedInside: 'game-over-popup',
          content: ['Результаты']
        }, {
          elem: 'column',
          content: [{
            block: 'game-info',
            content: [{
              elem: 'avatar',
              attrs: {
                src: '/images/user.png'
              }
            }, {
              elem: 'nickname',
              content: ['USER1']
            }, {
              elem: 'item',
              value: '10:50'
            }, {
              elem: 'line'
            }, {
              elem: 'item',
              value: '6,72'
            }, {
              elem: 'line'
            }]
          }]
        }, {
          elem: 'column',
          mods: {
            'top': true
          },
          content: [{
            block: 'result-time',
            title: 'Время',
            content: [{
              elem: 'seconds',
              content: ['64:45']
            }, {
              elem: 'title',
              content: ['Время']
            }]
          }, {
            block: 'game-info',
            mods: {
              main: true
            },
            content: [{
              mix: {
                'block': 'game-info_main_title'
              },
              elem: 'item',
              name: 'Лучшее время'
            }, {
              elem: 'item',
              name: 'Начисленные очки'
            }]
          }]
        }, {
          elem: 'column',
          content: [{
            block: 'game-info',
            content: [{
              elem: 'avatar',
              attrs: {
                src: '/images/user.png'
              }
            }, {
              elem: 'nickname',
              content: ['USER2']
            }, {
              elem: 'item',
              value: '11:50'
            }, {
              elem: 'line'
            }, {
              elem: 'item',
              value: '6,72'
            }, {
              elem: 'line'
            }]
          }]
        }, {
          block: 'game-msg',
          mods: {
            'center': true
          },
          content: ['ВЫ ПРОИГРАЛИ']
        }, {
          block: 'result-redirect',
          content: [{
            elem: 'btn',
            mods: {
              'center': true
            },
            btnText: 'СЫГРАТЬ ЕЩЕ РАЗ'
          }, {
            elem: 'center',
            content: {
              elem: 'link',
              attrs: {
                'href': '#',
                'data-link-type': '/'
              },
              content: 'Выйти в главное меню'
            }
          }]
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    }
  }]);

  return GameOverMultiClass;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/views/game-over-single-view.js":
/*!*********************************************************!*\
  !*** ./static/public/js/views/game-over-single-view.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameOverSingleClass; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
/* harmony import */ var _game_mods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/mods.js */ "./static/public/js/game/mods.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class GameOverSingleClass
 */


var GameOverSingleClass =
/*#__PURE__*/
function (_View) {
  _inherits(GameOverSingleClass, _View);

  /**
   * Construct game over page
   * @param {HTMLElement} parent
   */
  function GameOverSingleClass(parent) {
    _classCallCheck(this, GameOverSingleClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameOverSingleClass).call(this, parent));
  }
  /**
   * render page
   * @param {object} state - Game state
   * @param {string} mode - Game mode
   */


  _createClass(GameOverSingleClass, [{
    key: "render",
    value: function render(state, mode) {
      if (state.highScore === null) {
        state.highScore = 0;
      }

      var record = state.score > state.highScore;
      var template = [{
        block: 'game-over',
        content: [{
          elem: 'title',
          wrappedInside: 'game-over-popup',
          content: ['Результаты']
        }, {
          block: 'result-time',
          title: 'Время',
          content: [{
            elem: 'title',
            content: ['Время']
          }, {
            elem: 'seconds',
            content: [this._convertTime(state.time)]
          }]
        }, {
          block: 'game-info',
          mods: {
            'single': true
          },
          content: [mode === _game_mods_js__WEBPACK_IMPORTED_MODULE_1__["default"].OFFLINE || state.highScore === undefined ? {} : {
            elem: 'item',
            name: 'Лучший счет',
            value: state.highScore
          }, {
            elem: 'line'
          }, {
            elem: 'item',
            name: 'Счет',
            value: state.score
          }, {
            elem: 'line'
          }]
        }, record ? {
          block: 'game-msg',
          mods: {
            'center': true
          },
          content: ['Новый рекорд!']
        } : {}, {
          block: 'result-redirect',
          content: [{
            elem: 'btn',
            mods: {
              'center': true
            },
            btnText: 'СЫГРАТЬ ЕЩЕ РАЗ'
          }, {
            elem: 'center',
            content: {
              elem: 'link',
              attrs: {
                'href': '#',
                'data-link-type': '/'
              },
              content: 'Выйти в главное меню'
            }
          }]
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    }
    /**
     * Convert time to string
     * @param {number} time
     * @return {string}
     * @private
     */

  }, {
    key: "_convertTime",
    value: function _convertTime(time) {
      return time.toFixed(2).toString();
    }
  }]);

  return GameOverSingleClass;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/views/game-view.js":
/*!*********************************************!*\
  !*** ./static/public/js/views/game-view.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
/* harmony import */ var _graphics_hexagon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graphics/hexagon.js */ "./static/public/js/graphics/hexagon.js");
/* harmony import */ var _graphics_arrow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphics/arrow.js */ "./static/public/js/graphics/arrow.js");
/* harmony import */ var _graphics_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphics/text.js */ "./static/public/js/graphics/text.js");
/* harmony import */ var _game_core_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/core/settings.js */ "./static/public/js/game/core/settings.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;

var MIN_SIZE = 100;
var color = '#ff4d00';
/**
 * @class GameView
 */

var GameView =
/*#__PURE__*/
function (_View) {
  _inherits(GameView, _View);

  /**
   * @param {HTMLElement}parent
   */
  function GameView(parent) {
    var _this;

    _classCallCheck(this, GameView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameView).call(this, parent));
    _this.currentScore = 0;
    _this.currentTime = 0;
    _this.lastFrameTime = 0;
    _this.cursorCircleAngle = 0;
    return _this;
  }
  /**
   * Render GameController
   * @param {Object} state with info about hexagons
   */


  _createClass(GameView, [{
    key: "render",
    value: function render(state) {
      var _this2 = this;

      var draw = [{
        block: 'game',
        mods: {
          main: true
        },
        content: [{
          block: 'hexagons',
          mods: {
            main: true
          },
          content: [{
            elem: 'game',
            attrs: {
              id: 'game-canvas',
              width: 950,
              height: 800
            }
          }]
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
      this.canvas = document.getElementById('game-canvas');
      this.ctx = this.canvas.getContext('2d');
      this.hexagons = [];
      state.hexagons.forEach(function (hexagon) {
        _this2.hexagons.push(new _graphics_hexagon_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this2.ctx, hexagon.side, 10, hexagon.sides, color, hexagon.angle));
      });
      this.arrow = new _graphics_arrow_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.ctx, 25, _game_core_settings_js__WEBPACK_IMPORTED_MODULE_4__["CURSOR"].height, _game_core_settings_js__WEBPACK_IMPORTED_MODULE_4__["CURSOR"].radius, '#fff');
      this.baseHex = new _graphics_hexagon_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, 40, 10, 0, color, 0);
      this.scoreTitle = new _graphics_text_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, 35, '#FFF', '#000', 'SCORE', 1);
      this.scoreOut = new _graphics_text_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, 70, '#FFF', '#000', state.score, 1);
      this.timeOut = new _graphics_text_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.ctx, 70, '#FFF', '#000', '00:00', 0);
    }
    /**
     * Render new scene
     * @param {number} now
     */

  }, {
    key: "renderScene",
    value: function renderScene(now) {
      this.lastFrameTime = now;
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.arrow.draw(this.cursorAngle - this.cursorCircleAngle);
      this.hexagons.forEach(function (hexagon) {
        hexagon.draw();
      });
      this.baseHex.draw();
      this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
      this.timeOut.setParameters(this.currentTime);
      this.timeOut.draw();
      this.scoreTitle.draw();
      this.scoreOut.setParameters(this.currentScore);
      this.scoreOut.draw();
      this.requestFrameId = requestAnimationFrame(this.renderScene.bind(this));
    }
    /**
     * Update state
     * @param {Object} state
     */

  }, {
    key: "update",
    value: function update(state) {
      var _this3 = this;

      this.hexagons = [];
      state.hexagons.forEach(function (hexagon) {
        _this3.hexagons.push(new _graphics_hexagon_js__WEBPACK_IMPORTED_MODULE_1__["default"](_this3.ctx, hexagon.side, 10, hexagon.sides, color, hexagon.angle));
      });
      this.cursorAngle = state.cursorAngle;
      this.cursorCircleAngle = state.cursorCircleAngle;
      this.currentScore = state.score;
      this.currentTime = state.time;
    }
    /**
     * Rotate all canvas
     * @param {Number} direction, value: 1 or -1
     * @private
     */

  }, {
    key: "_rotate",
    value: function _rotate(direction) {
      // TODO: can be more properly cleaned. added to the to-do list
      ctx.clearRect(-100, -100, this.canvas.width * 1.5, this.canvas.height * 2);
      ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      this.baseHex.draw();
      this.arrow.draw(0);

      if (this.hexagon.currentSide >= MIN_SIZE) {
        this.hexagon.draw();
      } else {
        this.hexagon.setNewParameters(0, '#ff4d00');
      }

      ctx.rotate(Math.PI / 180 * 2);
      ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
    }
    /**
     *
     */

  }, {
    key: "start",
    value: function start() {
      this.lastFrameTime = performance.now();
      this.requestFrameId = requestAnimationFrame(this.renderScene.bind(this));
    }
    /**
     *
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.requestFrameId) {
        window.cancelAnimationFrame(this.requestFrameId);
        this.requestFrameId = null;
      }
    }
  }]);

  return GameView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/views/header.js":
/*!******************************************!*\
  !*** ./static/public/js/views/header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHeader; });
var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * Create page header
 */


function createHeader() {
  var header = {
    block: 'header',
    mods: {
      'main': true
    },
    content: [{
      block: 'icon',
      mods: {
        color: 'white',
        size: 'header-fit',
        type: 'hexagon'
      }
    }, {
      elem: 'title',
      tag: 'a',
      attrs: {
        'data-link-type': '/'
      },
      content: ['HEXAGON']
    }]
  };
  var application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', '<div class="header"></div>');
  var headerDiv = document.getElementsByClassName('header')[0];
  headerDiv.insertAdjacentHTML('beforeend', bemhtml.apply(header));
}

/***/ }),

/***/ "./static/public/js/views/login-view.js":
/*!**********************************************!*\
  !*** ./static/public/js/views/login-view.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
/* harmony import */ var _views_templates_login_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views-templates/login-template.js */ "./static/public/js/views/views-templates/login-template.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class LoginView
 */


var LoginView =
/*#__PURE__*/
function (_View) {
  _inherits(LoginView, _View);

  /**
   *
   * @param {HTMLElement}parent
   */
  function LoginView(parent) {
    _classCallCheck(this, LoginView);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginView).call(this, parent));
  }
  /**
   * Render Login page
   */


  _createClass(LoginView, [{
    key: "render",
    value: function render() {
      var draw = Object(_views_templates_login_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    }
  }]);

  return LoginView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/views/menu-view.js":
/*!*********************************************!*\
  !*** ./static/public/js/views/menu-view.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;

var authedTemplate = [{
  href: 'play',
  text: 'Играть',
  type: 'gamepad'
}, {
  href: 'profile',
  text: 'Профиль',
  type: 'user'
}, {
  href: 'leaders',
  text: 'Лидеры',
  type: 'crown'
}, {
  href: 'authors',
  text: 'Авторы',
  type: 'users'
}, {
  href: 'exit',
  text: 'Выйти',
  type: 'signout'
}];
var unauthedTemplate = [{
  href: 'single',
  text: 'Играть',
  type: 'gamepad'
}, {
  href: 'signin',
  text: 'Авторизация',
  type: 'signin'
}, {
  href: 'signup',
  text: 'Регистрация',
  type: 'key'
}, {
  href: 'leaders',
  text: 'Лидеры',
  type: 'crown'
}, {
  href: 'authors',
  text: 'Авторы',
  type: 'users'
}];
/**
 * @class MenuView
 */

var MenuView =
/*#__PURE__*/
function (_View) {
  _inherits(MenuView, _View);

  /**
   *
   * @param {HTMLElement} parent
   */
  function MenuView(parent) {
    _classCallCheck(this, MenuView);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuView).call(this, parent));
  }
  /**
   * create Menu page
   * @param {JSON} user data
   */


  _createClass(MenuView, [{
    key: "render",
    value: function render(user) {
      if (!user) {
        this.menuPageDrawer(unauthedTemplate);
      } else {
        this.menuPageDrawer(authedTemplate);
      }
    }
    /**
     * Get function to render menu with current data
     * @param {Array} data array of menu points
     */

  }, {
    key: "menuPageDrawer",
    value: function menuPageDrawer(data) {
      var template = [{
        block: 'menu',
        content: [{
          elem: 'items',
          points: data
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    }
  }]);

  return MenuView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/views/offline-messagebox.js":
/*!******************************************************!*\
  !*** ./static/public/js/views/offline-messagebox.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showMessage; });


var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * Render message about using online feature without internet
 * @param {HTMLElement} parent
 */


function showMessage(parent) {
  var template = [{
    block: 'offline-msg',
    content: {
      elem: 'window',
      content: [{
        elem: 'text',
        content: 'Мы не можем сделать для вас это ' + 'без интернет-соединения :С'
      }, {
        elem: 'btn',
        attrs: {
          'href': '#'
        },
        tag: 'a',
        content: 'Назад'
      }]
    }
  }];
  parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  var btn = parent.getElementsByClassName('offline-msg__btn')[0];

  btn.onclick = function () {
    var offlineMsg = parent.getElementsByClassName('offline-msg')[0];
    parent.removeChild(offlineMsg);
    window.history.back();
  };
}

/***/ }),

/***/ "./static/public/js/views/page-not-found-view.js":
/*!*******************************************************!*\
  !*** ./static/public/js/views/page-not-found-view.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageNotFoundView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class PageNotFoundView
 */


var PageNotFoundView =
/*#__PURE__*/
function (_View) {
  _inherits(PageNotFoundView, _View);

  /**
   * @param {HTMLElement} parent
   */
  function PageNotFoundView(parent) {
    _classCallCheck(this, PageNotFoundView);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageNotFoundView).call(this, parent));
  }
  /**
   * create Page with Authors
   */


  _createClass(PageNotFoundView, [{
    key: "render",
    value: function render() {
      var draw = [{
        block: 'not-found-page',
        content: [{
          elem: 'text',
          elemMods: {
            main: true
          },
          content: 'Oops, we have lost this page :C'
        }, {
          elem: 'text',
          elemMods: {
            additional: true
          },
          content: 'or you typed something wrong C:'
        }, {
          elem: 'link',
          attrs: {
            'href': '#',
            'data-link-type': '/'
          },
          content: 'But you can go to our main page!'
        }]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    }
  }]);

  return PageNotFoundView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/views/pagination.js":
/*!**********************************************!*\
  !*** ./static/public/js/views/pagination.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paginator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class Paginator
 */


var Paginator =
/*#__PURE__*/
function () {
  /**
   * @param {HTMLElement} parent
   */
  function Paginator(parent) {
    _classCallCheck(this, Paginator);

    this.parent = parent;
  }
  /**
   * Get array of the pages, which are showed in pagination
   * @param {int} currPage number of the current page
   * @param {int} pagesNumber number of he pages
   * @return {Array} array of elements of pagination
   * @private
   */


  _createClass(Paginator, [{
    key: "_getNumeration",
    value: function _getNumeration(currPage, pagesNumber) {
      var numbers = [{
        content: 'Назад',
        attrs: {
          value: currPage - 1
        }
      }, {
        content: 1,
        attrs: {
          value: 1
        }
      }];

      if (pagesNumber >= 2) {
        numbers.push({
          content: 2,
          attrs: {
            value: 2
          }
        });
      }

      if (currPage > 5) {
        numbers.push({
          content: '...',
          attrs: {
            value: 1
          }
        });
      }

      for (var i = currPage - 2; i <= currPage + 2 && i <= pagesNumber; i++) {
        if (i > 2) {
          numbers.push({
            content: i,
            attrs: {
              value: i
            }
          });
        }
      }

      if (currPage + 2 < pagesNumber - 2) {
        numbers.push({
          content: '...',
          attrs: {
            value: 1
          }
        }, {
          content: pagesNumber - 1,
          attrs: {
            value: pagesNumber - 1
          }
        }, {
          content: pagesNumber,
          attrs: {
            value: pagesNumber
          }
        });
      } else if (currPage + 2 < pagesNumber - 1) {
        numbers.push({
          content: pagesNumber - 1,
          attrs: {
            value: pagesNumber - 1
          }
        }, {
          content: pagesNumber,
          attrs: {
            value: pagesNumber
          }
        });
      } else if (currPage + 2 < pagesNumber) {
        numbers.push({
          content: pagesNumber,
          attrs: {
            value: pagesNumber
          }
        });
      }

      numbers.push({
        content: 'Вперед',
        attrs: {
          value: currPage < pagesNumber ? currPage + 1 : -1
        }
      });
      return numbers;
    }
    /**
     * Create pagination
     * @param {int} currPage number of the current page
     * @param {int} pagesNumber number of he pages
     */

  }, {
    key: "render",
    value: function render(currPage, pagesNumber) {
      var template = [{
        block: 'pagination',
        content: []
      }];

      var numbers = this._getNumeration(currPage, pagesNumber);

      numbers.forEach(function (number) {
        number.elem = 'link';

        if (number.attrs.value === currPage || number.attrs.value < 1) {
          number.elemMods = {
            current: true
          };
        }

        template[0].content.push(number);
      });
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    }
    /**
     * Add event listener for each pagination item
     * @param {Array} events
     * @param {function} handler
     */

  }], [{
    key: "setPaginationLinks",
    value: function setPaginationLinks(events, handler) {
      var pagLinks = document.getElementsByClassName('pagination__link');
      Array.from(pagLinks).forEach(function (link) {
        if (Number(link.value) < 1) {
          return;
        }

        link.addEventListener('click', handler);
        events.push({
          item: link,
          type: 'click',
          handler: handler
        });
      });
    }
  }]);

  return Paginator;
}();



/***/ }),

/***/ "./static/public/js/views/profile-view.js":
/*!************************************************!*\
  !*** ./static/public/js/views/profile-view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileView; });
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config.js */ "./static/public/js/settings/config.js");
/* harmony import */ var _parsing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parsing.js */ "./static/public/js/parsing.js");
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class ProfileView
 */


var ProfileView =
/*#__PURE__*/
function (_View) {
  _inherits(ProfileView, _View);

  /**
   *
   * @param {HTMLElement} parent
   */
  function ProfileView(parent) {
    _classCallCheck(this, ProfileView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProfileView).call(this, parent));
  }
  /**
   * Render profile view
   * @param {Object} user
   */


  _createClass(ProfileView, [{
    key: "render",
    value: function render(user) {
      var profile = Object(_parsing_js__WEBPACK_IMPORTED_MODULE_1__["parseUser"])(user);
      var template = [{
        block: 'profile-popup',
        mods: {
          main: true
        },
        title: 'Профиль',
        img: profile.img.startsWith(_settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath) ? profile.img : _settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath + profile.img,
        allowEdit: user.isCurrent,
        info: [['Никнейм', profile.nickname || profile.username], ['Email', profile.email], ['Счет', profile.highScore], ['Пол', profile.gender]]
      }];
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    }
  }]);

  return ProfileView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./static/public/js/views/scoreboard-view.js":
/*!***************************************************!*\
  !*** ./static/public/js/views/scoreboard-view.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreboardView; });
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config.js */ "./static/public/js/settings/config.js");
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * Create Score Board page
 * @param {Array}users An Array of personal users data
 */


var ScoreboardView =
/*#__PURE__*/
function (_View) {
  _inherits(ScoreboardView, _View);

  function ScoreboardView() {
    _classCallCheck(this, ScoreboardView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScoreboardView).apply(this, arguments));
  }

  _createClass(ScoreboardView, [{
    key: "render",

    /**
     * Render ScoreBoard
     * @param {Object} data
     */
    value: function render(data) {
      var bemUsers = [];
      Array.from(data.data.users).forEach(function (user) {
        var name = user.firstName,
            img = user.img,
            username = user.username,
            score = user.highScore,
            userId = user.uid;
        bemUsers.push({
          name: name,
          img: _settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath + img,
          username: username,
          score: score,
          userId: userId
        });
      });
      var draw = [{
        block: 'scoreboard',
        content: [{
          elem: 'items',
          scores: bemUsers
        }]
      }];
      draw[0].content[0].page = parseInt(data.data.page) || 0;
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    }
  }]);

  return ScoreboardView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./static/public/js/views/signup-view.js":
/*!***********************************************!*\
  !*** ./static/public/js/views/signup-view.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SigUpView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
/* harmony import */ var _views_templates_signup_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views-templates/signup-template.js */ "./static/public/js/views/views-templates/signup-template.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class SigUpView
 */


var SigUpView =
/*#__PURE__*/
function (_View) {
  _inherits(SigUpView, _View);

  /**
   * Create SignUpView object
   * @param {HTMLElement} parent
   */
  function SigUpView(parent) {
    _classCallCheck(this, SigUpView);

    return _possibleConstructorReturn(this, _getPrototypeOf(SigUpView).call(this, parent));
  }
  /**
   * Rendering view
   */


  _createClass(SigUpView, [{
    key: "render",
    value: function render() {
      var draw = Object(_views_templates_signup_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    }
  }]);

  return SigUpView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./static/public/js/views/update-view.js":
/*!***********************************************!*\
  !*** ./static/public/js/views/update-view.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateView; });
/* harmony import */ var _core_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/view.js */ "./static/public/js/core/view.js");
/* harmony import */ var _views_templates_update_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views-templates/update-template.js */ "./static/public/js/views/views-templates/update-template.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var bemhtml = __webpack_require__(/*! ../bundle.bemhtml.js */ "./static/public/js/bundle.bemhtml.js").bemhtml;
/**
 * @class SigUpView
 */


var UpdateView =
/*#__PURE__*/
function (_View) {
  _inherits(UpdateView, _View);

  /**
   * Create SignUpView object
   * @param {HTMLElement} parent
   */
  function UpdateView(parent) {
    _classCallCheck(this, UpdateView);

    return _possibleConstructorReturn(this, _getPrototypeOf(UpdateView).call(this, parent));
  }
  /**
   * Render Update page
   * @param {Object} user
   * @return {boolean} - status
   */


  _createClass(UpdateView, [{
    key: "render",
    value: function render(user) {
      if (user) {
        var draw = Object(_views_templates_update_template_js__WEBPACK_IMPORTED_MODULE_1__["default"])(user);
        this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
        return true;
      }

      return false;
    }
  }]);

  return UpdateView;
}(_core_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./static/public/js/views/views-templates/login-template.js":
/*!******************************************************************!*\
  !*** ./static/public/js/views/views-templates/login-template.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return [{
    block: 'login-popup',
    content: [{
      block: 'title',
      wrappedInside: 'login-popup',
      wrappedAs: 'title',
      content: 'Вход'
    }, {
      block: 'icon',
      tag: 'a',
      wrappedInside: 'login-popup',
      wrappedAs: 'close-popup',
      mods: {
        size: 'large',
        color: 'white',
        btn: true,
        type: 'cross'
      },
      attrs: {
        'data-link-type': '/'
      }
    }, {
      elem: 'content',
      content: [{
        block: 'form',
        attrs: {
          id: 'loginForm',
          novalidate: true
        },
        name: 'loginForm',
        mix: {
          'block': 'login-form'
        },
        content: [{
          block: 'form-group',
          mods: {
            size: 'inline'
          },
          content: [{
            elem: 'title',
            elemMods: {
              align: 'left'
            },
            content: ['Email: ']
          }, {
            block: 'form-group',
            mods: {
              size: 'large'
            },
            content: [{
              block: 'input',
              wrappedInside: 'login-form',
              fieldName: 'email',
              fieldAttrs: {
                type: 'email',
                required: true,
                checkable: true,
                checkType: 'null'
              }
            }, {
              block: 'form-group',
              elem: 'help-text',
              elemMods: {
                hidden: true
              },
              "for": 'email'
            }]
          }, {
            elem: 'title',
            elemMods: {
              align: 'left'
            },
            content: ['Пароль: ']
          }, {
            block: 'form-group',
            mods: {
              size: 'large'
            },
            content: [{
              block: 'input',
              mods: {
                "with": 'icon'
              },
              fieldName: 'password',
              wrappedInside: 'login-form',
              content: [{
                elem: 'field',
                attrs: {
                  type: 'password',
                  required: true,
                  checkable: true,
                  checkType: 'null'
                }
              }, {
                block: 'icon',
                wrappedInside: 'input',
                fieldName: 'rememberMeCheck',
                mods: {
                  'show-pwd': true,
                  'color': 'black',
                  'btn': true,
                  'type': 'eye'
                },
                attrs: {
                  'data-pwd-for': 'loginForm_password'
                }
              }]
            }, {
              block: 'form-group',
              elem: 'help-text',
              elemMods: {
                hidden: true
              },
              "for": 'password'
            }]
          }]
        }, {
          block: 'form-group',
          wrappedInside: 'login-form',
          wrappedAs: 'form-group',
          mods: {
            align: 'stretch'
          },
          mix: {
            block: 'login-form',
            elem: 'double-btn'
          },
          content: [{
            block: 'btn',
            wrappedInside: 'login-form',
            wrappedAs: 'sumbit-btn',
            fieldName: 'submit',
            attrs: {
              type: 'submit'
            },
            content: [{
              elem: 'inner',
              content: {
                elem: 'text',
                content: 'Войти'
              }
            }]
          }, {
            block: 'btn',
            mods: {
              color: 'muted'
            },
            attrs: {
              'data-link-type': '/',
              'role': 'link'
            },
            content: [{
              block: 'btn',
              elem: 'inner',
              content: [{
                block: 'btn',
                elem: 'text',
                elemMods: {
                  'normal': true
                },
                content: 'Назад'
              }]
            }]
          }]
        }]
      }, {
        block: 'hr',
        wrappedInside: 'login-popup'
      }, {
        elem: 'signup-link',
        content: {
          tag: 'a',
          href: '#',
          content: 'Зарегистрироваться',
          attrs: {
            'data-link-type': 'signup'
          }
        }
      }]
    }]
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./static/public/js/views/views-templates/signup-template.js":
/*!*******************************************************************!*\
  !*** ./static/public/js/views/views-templates/signup-template.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var template = function template() {
  return [{
    block: 'signup-popup',
    mods: {
      'main': true
    },
    content: [{
      elem: 'title',
      mix: {
        'block': 'title'
      },
      content: 'Регистрация'
    }, {
      elem: 'content',
      content: [{
        elem: 'explanation-text',
        content: 'Для регистрации на ресурсе укажите информацию о себе'
      }, {
        block: 'form',
        attrs: {
          id: 'signup-form',
          novalidate: true
        },
        name: 'signup-form',
        mix: {
          block: 'signup-form'
        },
        content: [{
          block: 'signup-form',
          content: [{
            block: 'form-group',
            content: [{
              block: 'input',
              fieldName: 'email',
              fieldAttrs: {
                type: 'email',
                placeholder: 'Email',
                required: true,
                checkable: true,
                checkType: 'email'
              }
            }, {
              block: 'form-group',
              elem: 'help-text',
              elemMods: {
                hidden: true
              },
              "for": 'email'
            }]
          }, {
            block: 'form-group',
            content: [{
              block: 'input',
              fieldName: 'username',
              fieldAttrs: {
                type: 'text',
                placeholder: 'Username',
                required: true,
                checkable: true,
                checkType: 'username'
              }
            }, {
              block: 'form-group',
              elem: 'help-text',
              elemMods: {
                hidden: true
              },
              "for": 'username'
            }]
          }, {
            block: 'form-group',
            content: [{
              block: 'input',
              wrappedAs: 'input',
              fieldName: 'password',
              fieldAttrs: {
                type: 'password',
                placeholder: 'Пароль',
                required: true,
                checkable: true,
                checkType: 'password'
              },
              required: true
            }, {
              block: 'form-group',
              elem: 'help-text',
              elemMods: {
                hidden: true
              },
              "for": 'password'
            }]
          }, {
            block: 'form-group',
            content: [{
              block: 'input',
              wrappedAs: 'input',
              fieldName: 'passwordRepeat',
              fieldAttrs: {
                type: 'password',
                placeholder: 'Повторите пароль',
                required: true,
                checkable: true,
                checkType: 'repeatPassword'
              },
              required: true
            }, {
              block: 'form-group',
              elem: 'help-text',
              elemMods: {
                hidden: true
              },
              "for": 'passwordRepeat'
            }]
          }]
        }, {
          block: 'signup-popup',
          elem: 'hr',
          mix: {
            'block': 'hr'
          }
        }, {
          block: 'signup-popup',
          elem: 'double-btn',
          content: [{
            block: 'btn',
            wrappedInside: 'signup-popup',
            wrappedAs: 'singup-btn',
            mods: {
              size: 'large'
            },
            attrs: {
              type: 'submit'
            },
            content: [{
              elem: 'inner',
              content: {
                elem: 'text',
                content: 'Зарегестироророваться'
              }
            }]
          }, {
            block: 'btn',
            mods: {
              color: 'muted',
              size: 'large'
            },
            wrappedInside: 'signup-popup',
            wrappedAs: 'cancel-btn',
            content: [{
              elem: 'inner',
              content: {
                elem: 'text',
                cls: 'btn__text_normal',
                content: 'Отменить'
              }
            }]
          }]
        }]
      }]
    }]
  }];
};

/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "./static/public/js/views/views-templates/update-template.js":
/*!*******************************************************************!*\
  !*** ./static/public/js/views/views-templates/update-template.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return template; });
/* harmony import */ var _settings_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/config.js */ "./static/public/js/settings/config.js");

/**
 * Get template of the profile's update page for user
 * @param {Object} user
 * @return {Array} template of the profile's update page
 */

function template(user) {
  var gender = {
    block: 'select',
    fieldName: 'selectMale',
    options: [{
      content: 'Пол',
      value: ''
    }, {
      content: 'Мужской',
      value: 'male'
    }, {
      content: 'Женский',
      value: 'female'
    }, {
      content: 'Другой',
      value: 'other'
    }]
  };
  setSelectedGender(user, gender);
  return [{
    block: 'profile-popup',
    mods: {
      main: true
    },
    content: [{
      block: 'title',
      wrappedInside: 'profile-popup',
      content: ['Обновление профиля']
    }, {
      elem: 'content',
      content: [{
        elem: 'profile-icon',
        attrs: {
          src: user.img.startsWith(_settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath) ? user.img : _settings_config_js__WEBPACK_IMPORTED_MODULE_0__["settings"].imgPath + user.img
        }
      }, {
        block: 'form',
        attrs: {
          id: 'updateForm',
          novalidate: true
        },
        name: 'updateForm',
        mix: {
          'block': 'signup-form'
        },
        content: [{
          block: 'profile-info',
          wrappedInside: 'profile-popup',
          fields: [{
            name: 'Аватар',
            novalidate: true,
            value: {
              block: 'file-input',
              fieldName: 'avatar'
            }
          }, {
            name: 'Email',
            fieldName: 'email',
            fieldAttrs: {
              checkable: true,
              checkType: 'email',
              required: true,
              value: user.email,
              type: 'email',
              placeholder: 'your.name@site.com'
            }
          }, {
            name: 'Никейм',
            fieldName: 'username',
            fieldAttrs: {
              required: true,
              checkable: true,
              value: user.username || user.nickname,
              placeholder: 'username',
              checkType: 'userName'
            }
          }, {
            name: 'Пол',
            novalidate: true,
            value: gender
          }, {
            name: 'Новый пароль',
            fieldName: 'password',
            fieldAttrs: {
              type: 'password',
              placeholder: 'Пароль',
              checkable: true,
              checkType: 'password'
            }
          }, {
            name: 'Повторите пароль',
            fieldName: 'passwordRepeat',
            fieldAttrs: {
              type: 'password',
              placeholder: 'Повторите пароль',
              checkable: true,
              checkType: 'repeatPassword'
            }
          }]
        }, {
          block: 'profile-popup',
          elem: 'double-btn',
          elemMods: {
            center: true
          },
          content: [{
            block: 'btn',
            attrs: {
              'type': 'submit'
            },
            mods: {
              size: 'large'
            },
            wrappedInside: 'profile-popup',
            icon: 'useredit',
            btnText: 'Обновить'
          }, {
            block: 'btn',
            mods: {
              size: 'large',
              color: 'muted'
            },
            wrappedInside: 'profile-popup',
            icon: 'delete',
            btnText: 'Отменить'
          }]
        }]
      }]
    }]
  }];
}
/**
 * Set selected gender
 * @param {Object} user
 * @param {Object} gender
 */

function setSelectedGender(user, gender) {
  if (user.gender !== '') {
    var options = gender.options;
    options.forEach(function (option) {
      if (option.value === user.gender) {
        option.selected = true;
      }
    });
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
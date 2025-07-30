/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./firebase-config.js":
/*!****************************!*\
  !*** ./firebase-config.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// firebase-config.js\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAPfpPeqxqL47TodPKJLSZxDF6waKNhhfw\",\n    authDomain: \"kaizen-rpg.firebaseapp.com\",\n    projectId: \"kaizen-rpg\",\n    storageBucket: \"kaizen-rpg.appspot.com\",\n    messagingSenderId: \"232887985196\",\n    appId: \"1:232887985196:web:a8480f832acbd07a195d89\"\n};\n// Solo inicializa si no hay apps ya\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length === 0 ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2ZpcmViYXNlLWNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ2lDO0FBQ0o7QUFFbEQsTUFBTUcsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEsb0NBQW9DO0FBQ3BDLE1BQU1DLE1BQU1ULHFEQUFPQSxHQUFHVSxNQUFNLEtBQUssSUFBSVgsMkRBQWFBLENBQUNHLGtCQUFrQkYscURBQU9BLEVBQUUsQ0FBQyxFQUFFO0FBRWpGLE1BQU1XLEtBQUtWLGdFQUFZQSxDQUFDUTtBQUVMIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXERhbmllbFxcRG93bmxvYWRzXFxrYWl6ZW4tcnBnLWFwcC12MTNcXGZpcmViYXNlLWNvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJlYmFzZS1jb25maWcuanNcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QVBmcFBlcXhxTDQ3VG9kUEtKTFNaeERGNndhS05oaGZ3XCIsXG4gIGF1dGhEb21haW46IFwia2FpemVuLXJwZy5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImthaXplbi1ycGdcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJrYWl6ZW4tcnBnLmFwcHNwb3QuY29tXCIsIC8vIGN1aWRhZG8sIHRlbsOtYXMgZXN0byBtYWwgZXNjcml0b1xuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyMzI4ODc5ODUxOTZcIixcbiAgYXBwSWQ6IFwiMToyMzI4ODc5ODUxOTY6d2ViOmE4NDgwZjgzMmFjYmQwN2ExOTVkODlcIixcbn07XG5cbi8vIFNvbG8gaW5pY2lhbGl6YSBzaSBubyBoYXkgYXBwcyB5YVxuY29uc3QgYXBwID0gZ2V0QXBwcygpLmxlbmd0aCA9PT0gMCA/IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpIDogZ2V0QXBwcygpWzBdO1xuXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQgeyBhcHAsIGRiIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImxlbmd0aCIsImRiIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./firebase-config.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-config */ \"(pages-dir-node)/./firebase-config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _firebase_config__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _firebase_config__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n // 👈 usamos la instancia compartida\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction App({ Component, pageProps }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.app); // 👈 usamos la app importada\n            const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, {\n                \"App.useEffect.unsubscribe\": (firebaseUser)=>{\n                    setUser(firebaseUser);\n                }\n            }[\"App.useEffect.unsubscribe\"]);\n            return ({\n                \"App.useEffect\": ()=>unsubscribe()\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: user,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Daniel\\\\Downloads\\\\kaizen-rpg-app-v13\\\\pages\\\\_app.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Daniel\\\\Downloads\\\\kaizen-rpg-app-v13\\\\pages\\\\_app.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDNEI7QUFDQztBQUNuQixDQUFDLG9DQUFvQztBQUV2RSxNQUFNTSw0QkFBY0osb0RBQWFBLENBQUMsTUFBTTtBQUVoQyxTQUFTSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUVqQ0QsZ0RBQVNBO3lCQUFDO1lBQ1IsTUFBTVksT0FBT1Qsc0RBQU9BLENBQUNFLGlEQUFHQSxHQUFHLDZCQUE2QjtZQUN4RCxNQUFNUSxjQUFjVCxpRUFBa0JBLENBQUNROzZDQUFNLENBQUNFO29CQUM1Q0gsUUFBUUc7Z0JBQ1Y7O1lBQ0E7aUNBQU8sSUFBTUQ7O1FBQ2Y7d0JBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUCxZQUFZUyxRQUFRO1FBQUNDLE9BQU9OO2tCQUMzQiw0RUFBQ0Y7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxEYW5pZWxcXERvd25sb2Fkc1xca2FpemVuLXJwZy1hcHAtdjEzXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBhcHAgfSBmcm9tICcuLi9maXJlYmFzZS1jb25maWcnOyAvLyDwn5GIIHVzYW1vcyBsYSBpbnN0YW5jaWEgY29tcGFydGlkYVxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTsgLy8g8J+RiCB1c2Ftb3MgbGEgYXBwIGltcG9ydGFkYVxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChmaXJlYmFzZVVzZXIpID0+IHtcbiAgICAgIHNldFVzZXIoZmlyZWJhc2VVc2VyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsImdldEF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJhcHAiLCJBdXRoQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwiYXV0aCIsInVuc3Vic2NyaWJlIiwiZmlyZWJhc2VVc2VyIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/layouts/DefaultLayout.js":
/*!**************************************!*\
  !*** ./src/layouts/DefaultLayout.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./src/components/Header.js\");\n/* harmony import */ var _components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/HeaderNavigation */ \"(app-pages-browser)/./src/components/HeaderNavigation.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"(app-pages-browser)/./src/components/Footer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// This file includes the most common layouts for 1 page. Ex: Header, Footer, Navigation ....\n// use param children for passing content \nconst DefaultLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const shouldRenderComponent = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)() !== \"/\" && (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)() !== \"/about\" ? true : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            shouldRenderComponent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hungnguyen/Documents/BACK TO IT/nextjs-personal-blog/src/layouts/DefaultLayout.js\",\n                lineNumber: 15,\n                columnNumber: 32\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hungnguyen/Documents/BACK TO IT/nextjs-personal-blog/src/layouts/DefaultLayout.js\",\n                lineNumber: 15,\n                columnNumber: 55\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/hungnguyen/Documents/BACK TO IT/nextjs-personal-blog/src/layouts/DefaultLayout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hungnguyen/Documents/BACK TO IT/nextjs-personal-blog/src/layouts/DefaultLayout.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hungnguyen/Documents/BACK TO IT/nextjs-personal-blog/src/layouts/DefaultLayout.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DefaultLayout, \"Hxw6hjjKSVtIhlLngIfb8zkGWHc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\nvar _c;\n$RefreshReg$(_c, \"DefaultLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9sYXlvdXRzL0RlZmF1bHRMYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkM7QUFDSDtBQUNtQjtBQUNuQjtBQUcxQyw2RkFBNkY7QUFDN0YsMENBQTBDO0FBQzFDLE1BQU1JLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDakMsTUFBTUMsd0JBQXdCLG1FQUFtQixPQUFPTiw0REFBV0EsT0FBTyxXQUFZLE9BQU87SUFFN0YscUJBQ0UsOERBQUNPOztZQUNFRCxzQ0FBd0IsOERBQUNKLG9FQUFnQkE7Ozs7MENBQU0sOERBQUNELDBEQUFNQTs7Ozs7MEJBQ3ZELDhEQUFDTzswQkFBTUg7Ozs7OzswQkFDUCw4REFBQ0YsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBVk1DOztRQUMyQkosd0RBQVdBO1FBQWNBLHdEQUFXQTs7O0tBRC9ESTtBQVdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL0RlZmF1bHRMYXlvdXQuanM/NjJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyTmF2aWdhdGlvblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuXG4vLyBUaGlzIGZpbGUgaW5jbHVkZXMgdGhlIG1vc3QgY29tbW9uIGxheW91dHMgZm9yIDEgcGFnZS4gRXg6IEhlYWRlciwgRm9vdGVyLCBOYXZpZ2F0aW9uIC4uLi5cbi8vIHVzZSBwYXJhbSBjaGlsZHJlbiBmb3IgcGFzc2luZyBjb250ZW50IFxuY29uc3QgRGVmYXVsdExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc2hvdWxkUmVuZGVyQ29tcG9uZW50ID0gKHVzZVBhdGhuYW1lKCkgIT09ICcvJyAmJiB1c2VQYXRobmFtZSgpICE9PSAnL2Fib3V0JykgPyB0cnVlIDogZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Nob3VsZFJlbmRlckNvbXBvbmVudCA/IDxIZWFkZXJOYXZpZ2F0aW9uIC8+IDogPEhlYWRlciAvPn1cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7Il0sIm5hbWVzIjpbInVzZVBhdGhuYW1lIiwiSGVhZGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsIkZvb3RlciIsIkRlZmF1bHRMYXlvdXQiLCJjaGlsZHJlbiIsInNob3VsZFJlbmRlckNvbXBvbmVudCIsImRpdiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/layouts/DefaultLayout.js\n"));

/***/ })

});
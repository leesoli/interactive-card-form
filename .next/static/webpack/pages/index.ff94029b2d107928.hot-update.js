"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Form.js */ \"./components/Form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Homepage() {\n    var checkFormCompletion = function checkFormCompletion() {\n        var keys = Object.keys(formData);\n        for(var i = 0; i < keys.length; i++){\n            if (displayMessage(keys[i])) {\n                return;\n            }\n        }\n        setFormCompleted(true);\n    };\n    var updateForm = function updateForm(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setFormData(function(prevData) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, prevData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, name, value));\n        });\n    };\n    var displayMessage = function displayMessage(inputField) {\n        var inputValue = formData[inputField];\n        if (!inputValue) {\n            return \"Can't be blank\";\n        }\n        if (inputValue.match(/[A-Z]/gi) && inputField !== \"name\") {\n            return \"Wrong format, numbers only\";\n        }\n        if (inputValue.match(/\\d/gi) && inputField === \"name\") {\n            return \"Wrong format, letters only\";\n        }\n        if (inputField === \"cardNumber\" && inputValue.length !== 16) {\n            return \"Not correct length\";\n        }\n        if ((inputField === \"month\" || inputField === \"year\") && inputValue.length !== 2) {\n            return \"Not correct length\";\n        }\n        if (inputField === \"month\" && inputValue > 12) {\n            return \"Insert correct month\";\n        }\n        if (inputField === \"cvc\" && inputValue.length !== 3) {\n            return \"Not correct length\";\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        cardNumber: \"\",\n        month: \"\",\n        year: \"\",\n        cvc: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), formCompleted = ref1[0], setFormCompleted = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row md:h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-purple-900 h-80 md:h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-96 h-2/3 bg-gray-100 left-20 top-12 bottom-0 rounded-md pt-4 flex flex-col justify-between md:h-52 md:top-1/2 md:left-48\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-800 h-12\"\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pr-4 rounded-sm items-center bg-gray-300 flex w-10/12 justify-end h-8 text-white mx-auto mb-auto mt-8\",\n                            children: formData.cvc ? formData.cvc : \"OOO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bg-purple-300 w-96 h-full rounded-md p-6 flex flex-col justify-between bg-gradient-to-br from-[#6448fe] via-pink-500 to-[#600594] z-10 right-12 top-28 bottom-0 md:top-[-15em] md:right-24 z-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center w-16 justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-white w-8 rounded-full h-8\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-none w-4 rounded-full h-4 border-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-auto mb-4 text-xl text-white tracking-widest\",\n                                    children: formData.cardNumber ? formData.cardNumber.match(/.{1,4}/g).join(\" \") : \"0000000000000000\".match(/.{1,4}/g).join(\" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-white tracking-wider\",\n                                            children: formData.name ? formData.name : \"JANE APPLESEED\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-white tracking-wider\",\n                                            children: formData.month && formData.year ? \"\".concat(formData.month, \"/\").concat(formData.year) : \"00/00\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-32 px-12 md:flex md:mt-0 md:items-center md:w-1/3 md:ml-48 md:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    formData: formData,\n                    updateForm: updateForm,\n                    checkFormCompletion: checkFormCompletion,\n                    displayMessage: displayMessage,\n                    formCompleted: formCompleted\n                }, void 0, false, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n};\n_s(Homepage, \"fl7scH63gJGA4kUfD5LEFp3PWHo=\");\n_c = Homepage;\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsR0FBQyxDQUFnQixRQUFkaEIsUUFBUSxDQUFDaUIsSUFBSSxDQUFFLEdBQUUsT0FBTzs7Ozs7Z0RBQU87Ozs7Ozt3Q0FDL0g7Ozs7OztnQ0FDRjs7Ozs7O3dCQUNBOzs7OztvQkFDRTswQkFDViw4REFBQ0ssU0FBTztnQkFBQ0QsU0FBUyxFQUFDLDBFQUEwRTswQkFDM0YsNEVBQUMzQiwyREFBSTtvQkFBQ00sUUFBUSxFQUFFQSxRQUFRO29CQUFFSyxVQUFVLEVBQUVBLFVBQVU7b0JBQUVSLG1CQUFtQixFQUFFQSxtQkFBbUI7b0JBQUVNLGNBQWMsRUFBRUEsY0FBYztvQkFBRWdCLGFBQWEsRUFBRUEsYUFBYTs7Ozs7d0JBQUc7Ozs7O29CQUNuSjs7Ozs7O1lBQ04sQ0FDUDtDQUNGO0dBL0V1QnZCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybS5qcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBjYXJkTnVtYmVyOiAnJyxcbiAgICBtb250aDogJycsXG4gICAgeWVhcjogJycsXG4gICAgY3ZjOiAnJ1xuICB9KVxuICBjb25zdCBbZm9ybUNvbXBsZXRlZCwgc2V0Rm9ybUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JtQ29tcGxldGlvbigpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybURhdGEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpc3BsYXlNZXNzYWdlKGtleXNbaV0pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0Rm9ybUNvbXBsZXRlZCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZvcm0oZSkge1xuICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YShwcmV2RGF0YSA9PiAoe1xuICAgICAgLi4ucHJldkRhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5TWVzc2FnZShpbnB1dEZpZWxkKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGZvcm1EYXRhW2lucHV0RmllbGRdO1xuXG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm4gJ0NhblxcJ3QgYmUgYmxhbmsnO1xuICAgIH1cbiAgICBpZiAoaW5wdXRWYWx1ZS5tYXRjaCgvW0EtWl0vZ2kpICYmIGlucHV0RmllbGQgIT09ICduYW1lJykge1xuICAgICAgcmV0dXJuICdXcm9uZyBmb3JtYXQsIG51bWJlcnMgb25seSc7XG4gICAgfVxuICAgIGlmIChpbnB1dFZhbHVlLm1hdGNoKC9cXGQvZ2kpICYmIGlucHV0RmllbGQgPT09ICduYW1lJykge1xuICAgICAgcmV0dXJuICdXcm9uZyBmb3JtYXQsIGxldHRlcnMgb25seSc7XG4gICAgfVxuICAgIGlmIChpbnB1dEZpZWxkID09PSAnY2FyZE51bWJlcicgJiYgaW5wdXRWYWx1ZS5sZW5ndGggIT09IDE2KSB7XG4gICAgICByZXR1cm4gJ05vdCBjb3JyZWN0IGxlbmd0aCc7XG4gICAgfVxuICAgIGlmICgoaW5wdXRGaWVsZCA9PT0gJ21vbnRoJyB8fCBpbnB1dEZpZWxkID09PSAneWVhcicpICYmIGlucHV0VmFsdWUubGVuZ3RoICE9PSAyKSB7XG4gICAgICByZXR1cm4gJ05vdCBjb3JyZWN0IGxlbmd0aCc7XG4gICAgfVxuICAgIGlmIChpbnB1dEZpZWxkID09PSAnbW9udGgnICYmIGlucHV0VmFsdWUgPiAxMikge1xuICAgICAgcmV0dXJuICdJbnNlcnQgY29ycmVjdCBtb250aCc7XG4gICAgfVxuICAgIGlmIChpbnB1dEZpZWxkID09PSAnY3ZjJyAmJiBpbnB1dFZhbHVlLmxlbmd0aCAhPT0gMykge1xuICAgICAgcmV0dXJuICdOb3QgY29ycmVjdCBsZW5ndGgnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmgtc2NyZWVuXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtOTAwIGgtODAgbWQ6aC1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy05NiBoLTIvMyBiZy1ncmF5LTEwMCBsZWZ0LTIwIHRvcC0xMiBib3R0b20tMCByb3VuZGVkLW1kIHB0LTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbWQ6aC01MiBtZDp0b3AtMS8yIG1kOmxlZnQtNDhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgaC0xMlwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci00IHJvdW5kZWQtc20gaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIGZsZXggdy0xMC8xMiBqdXN0aWZ5LWVuZCBoLTggdGV4dC13aGl0ZSBteC1hdXRvIG1iLWF1dG8gbXQtOFwiPntmb3JtRGF0YS5jdmM/IGZvcm1EYXRhLmN2YzogJ09PTyd9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXB1cnBsZS0zMDAgdy05NiBoLWZ1bGwgcm91bmRlZC1tZCBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzY0NDhmZV0gdmlhLXBpbmstNTAwIHRvLVsjNjAwNTk0XSB6LTEwIHJpZ2h0LTEyIHRvcC0yOCBib3R0b20tMCBtZDp0b3AtWy0xNWVtXSBtZDpyaWdodC0yNCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHctMTYganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctOCByb3VuZGVkLWZ1bGwgaC04XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW5vbmUgdy00IHJvdW5kZWQtZnVsbCBoLTQgYm9yZGVyLTJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItNCB0ZXh0LXhsIHRleHQtd2hpdGUgdHJhY2tpbmctd2lkZXN0XCI+e2Zvcm1EYXRhLmNhcmROdW1iZXI/IGZvcm1EYXRhLmNhcmROdW1iZXIubWF0Y2goLy57MSw0fS9nKS5qb2luKCcgJyk6ICcwMDAwMDAwMDAwMDAwMDAwJy5tYXRjaCgvLnsxLDR9L2cpLmpvaW4oJyAnKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdHJhY2tpbmctd2lkZXJcIj57Zm9ybURhdGEubmFtZT8gZm9ybURhdGEubmFtZTogJ0pBTkUgQVBQTEVTRUVEJ308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0cmFja2luZy13aWRlclwiPnsoZm9ybURhdGEubW9udGggJiYgZm9ybURhdGEueWVhcik/IGAke2Zvcm1EYXRhLm1vbnRofS8ke2Zvcm1EYXRhLnllYXJ9YDogJzAwLzAwJ308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMzIgcHgtMTIgbWQ6ZmxleCBtZDptdC0wIG1kOml0ZW1zLWNlbnRlciBtZDp3LTEvMyBtZDptbC00OCBtZDpteC1hdXRvXCI+XG4gICAgICAgIDxGb3JtIGZvcm1EYXRhPXtmb3JtRGF0YX0gdXBkYXRlRm9ybT17dXBkYXRlRm9ybX0gY2hlY2tGb3JtQ29tcGxldGlvbj17Y2hlY2tGb3JtQ29tcGxldGlvbn0gZGlzcGxheU1lc3NhZ2U9e2Rpc3BsYXlNZXNzYWdlfSBmb3JtQ29tcGxldGVkPXtmb3JtQ29tcGxldGVkfS8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiRm9ybSIsInVzZVN0YXRlIiwiSG9tZXBhZ2UiLCJjaGVja0Zvcm1Db21wbGV0aW9uIiwia2V5cyIsIk9iamVjdCIsImZvcm1EYXRhIiwiaSIsImxlbmd0aCIsImRpc3BsYXlNZXNzYWdlIiwic2V0Rm9ybUNvbXBsZXRlZCIsInVwZGF0ZUZvcm0iLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0Rm9ybURhdGEiLCJwcmV2RGF0YSIsImlucHV0RmllbGQiLCJpbnB1dFZhbHVlIiwibWF0Y2giLCJjYXJkTnVtYmVyIiwibW9udGgiLCJ5ZWFyIiwiY3ZjIiwiZm9ybUNvbXBsZXRlZCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Form.js */ \"./components/Form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Homepage() {\n    var clearForm = function clearForm() {\n        setFormData({\n            name: \"\",\n            cardNumber: \"\",\n            month: \"\",\n            year: \"\",\n            cvc: \"\"\n        });\n    };\n    var checkFormCompletion = function checkFormCompletion() {\n        var keys = Object.keys(formData);\n        for(var i = 0; i < keys.length; i++){\n            if (displayMessage(keys[i])) {\n                return;\n            }\n        }\n        setFormCompleted(true);\n    };\n    var updateForm = function updateForm(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setFormData(function(prevData) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, prevData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, name, value));\n        });\n    };\n    var displayMessage = function displayMessage(inputField) {\n        var inputValue = formData[inputField];\n        if (!inputValue) {\n            return \"Can't be blank\";\n        }\n        if (inputValue.match(/[A-Z]/gi) && inputField !== \"name\") {\n            return \"Wrong format, numbers only\";\n        }\n        if (inputValue.match(/\\d/gi) && inputField === \"name\") {\n            return \"Wrong format, letters only\";\n        }\n        if (inputField === \"cardNumber\" && inputValue.length !== 16) {\n            return \"Not correct length\";\n        }\n        if ((inputField === \"month\" || inputField === \"year\") && inputValue.length !== 2) {\n            return \"Not correct length\";\n        }\n        if (inputField === \"cvc\" && inputValue.length !== 3) {\n            return \"Not correct length\";\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        cardNumber: \"\",\n        month: \"\",\n        year: \"\",\n        cvc: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), formCompleted = ref1[0], setFormCompleted = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row md:h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-purple-900 h-80 md:h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-96 h-2/3 bg-gray-100 left-20 top-12 bottom-0 rounded-md pt-4 flex flex-col justify-between md:h-52 md:top-1/2 md:left-48\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-800 h-12\"\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pr-4 rounded-sm items-center bg-gray-300 flex w-10/12 justify-end h-8 text-white mx-auto mb-auto mt-8\",\n                            children: formData.cvc ? formData.cvc : \"OOO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bg-purple-300 w-96 h-full rounded-md p-6 flex flex-col justify-between bg-gradient-to-br from-[#6448fe] via-pink-500 to-[#600594] z-10 right-12 top-28 bottom-0 md:top-[-15em] md:right-24 z-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center w-16 justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-white w-8 rounded-full h-8\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-none w-4 rounded-full h-4 border-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-auto mb-4 text-xl text-white tracking-widest\",\n                                    children: formData.cardNumber ? formData.cardNumber.match(/.{1,4}/g).join(\" \") : \"0000000000000000\".match(/.{1,4}/g).join(\" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-white tracking-wider\",\n                                            children: formData.name ? formData.name : \"JANE APPLESEED\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-white tracking-wider\",\n                                            children: formData.month && formData.year ? \"\".concat(formData.month, \"/\").concat(formData.year) : \"00/00\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"mt-32 px-12 md:flex md:mt-0 md:items-center md:w-1/3 md:ml-48 md:mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    formData: formData,\n                    updateForm: updateForm,\n                    checkFormCompletion: checkFormCompletion,\n                    displayMessage: displayMessage,\n                    clearForm: clearForm,\n                    formCompleted: formCompleted\n                }, void 0, false, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/solilee/Desktop/interactive-card-form/pages/index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n};\n_s(Homepage, \"fl7scH63gJGA4kUfD5LEFp3PWHo=\");\n_c = Homepage;\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0RBQUUsUUFBUyxDQUFDckIsS0FBSyxJQUFJTSxRQUFRLENBQUNMLElBQUksR0FBRyxFQUFDLENBQW9CSyxNQUFhLENBQS9CQSxRQUFRLENBQUNOLEtBQUssRUFBQyxHQUFDLENBQWdCLFFBQWRNLFFBQVEsQ0FBQ0wsSUFBSSxDQUFFLEdBQUUsT0FBTzs7Ozs7Z0RBQU87Ozs7Ozt3Q0FDL0g7Ozs7OztnQ0FDRjs7Ozs7O3dCQUNBOzs7OztvQkFDRTswQkFDViw4REFBQ3FCLFNBQU87Z0JBQUNELFNBQVMsRUFBQywwRUFBMEU7MEJBQzNGLDRFQUFDNUIsMkRBQUk7b0JBQUNhLFFBQVEsRUFBRUEsUUFBUTtvQkFBRUssVUFBVSxFQUFFQSxVQUFVO29CQUFFUixtQkFBbUIsRUFBRUEsbUJBQW1CO29CQUFFTSxjQUFjLEVBQUVBLGNBQWM7b0JBQUViLFNBQVMsRUFBRUEsU0FBUztvQkFBRXVCLGFBQWEsRUFBRUEsYUFBYTs7Ozs7d0JBQUc7Ozs7O29CQUN6Szs7Ozs7O1lBQ04sQ0FDUDtDQUNGO0dBdEZ1QnhCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybS5qcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBjYXJkTnVtYmVyOiAnJyxcbiAgICBtb250aDogJycsXG4gICAgeWVhcjogJycsXG4gICAgY3ZjOiAnJ1xuICB9KVxuICBjb25zdCBbZm9ybUNvbXBsZXRlZCwgc2V0Rm9ybUNvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIHNldEZvcm1EYXRhKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgY2FyZE51bWJlcjogJycsXG4gICAgICBtb250aDogJycsXG4gICAgICB5ZWFyOiAnJyxcbiAgICAgIGN2YzogJydcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JtQ29tcGxldGlvbigpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZm9ybURhdGEpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlzcGxheU1lc3NhZ2Uoa2V5c1tpXSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRGb3JtQ29tcGxldGVkKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRm9ybShlKSB7XG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKGlucHV0RmllbGQpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZm9ybURhdGFbaW5wdXRGaWVsZF07XG5cbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybiAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgfVxuICAgIGlmIChpbnB1dFZhbHVlLm1hdGNoKC9bQS1aXS9naSkgJiYgaW5wdXRGaWVsZCAhPT0gJ25hbWUnKSB7XG4gICAgICByZXR1cm4gJ1dyb25nIGZvcm1hdCwgbnVtYmVycyBvbmx5JztcbiAgICB9XG4gICAgaWYgKGlucHV0VmFsdWUubWF0Y2goL1xcZC9naSkgJiYgaW5wdXRGaWVsZCA9PT0gJ25hbWUnKSB7XG4gICAgICByZXR1cm4gJ1dyb25nIGZvcm1hdCwgbGV0dGVycyBvbmx5JztcbiAgICB9XG4gICAgaWYgKGlucHV0RmllbGQgPT09ICdjYXJkTnVtYmVyJyAmJiBpbnB1dFZhbHVlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIHJldHVybiAnTm90IGNvcnJlY3QgbGVuZ3RoJztcbiAgICB9XG4gICAgaWYgKChpbnB1dEZpZWxkID09PSAnbW9udGgnIHx8IGlucHV0RmllbGQgPT09ICd5ZWFyJykgJiYgaW5wdXRWYWx1ZS5sZW5ndGggIT09IDIpIHtcbiAgICAgIHJldHVybiAnTm90IGNvcnJlY3QgbGVuZ3RoJztcbiAgICB9XG4gICAgaWYgKGlucHV0RmllbGQgPT09ICdjdmMnICYmIGlucHV0VmFsdWUubGVuZ3RoICE9PSAzKSB7XG4gICAgICByZXR1cm4gJ05vdCBjb3JyZWN0IGxlbmd0aCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aC1zY3JlZW5cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXB1cnBsZS05MDAgaC04MCBtZDpoLWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTk2IGgtMi8zIGJnLWdyYXktMTAwIGxlZnQtMjAgdG9wLTEyIGJvdHRvbS0wIHJvdW5kZWQtbWQgcHQtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtZDpoLTUyIG1kOnRvcC0xLzIgbWQ6bGVmdC00OFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBoLTEyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByLTQgcm91bmRlZC1zbSBpdGVtcy1jZW50ZXIgYmctZ3JheS0zMDAgZmxleCB3LTEwLzEyIGp1c3RpZnktZW5kIGgtOCB0ZXh0LXdoaXRlIG14LWF1dG8gbWItYXV0byBtdC04XCI+e2Zvcm1EYXRhLmN2Yz8gZm9ybURhdGEuY3ZjOiAnT09PJ308L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYmctcHVycGxlLTMwMCB3LTk2IGgtZnVsbCByb3VuZGVkLW1kIHAtNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjNjQ0OGZlXSB2aWEtcGluay01MDAgdG8tWyM2MDA1OTRdIHotMTAgcmlnaHQtMTIgdG9wLTI4IGJvdHRvbS0wIG1kOnRvcC1bLTE1ZW1dIG1kOnJpZ2h0LTI0IHotMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy0xNiBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy04IHJvdW5kZWQtZnVsbCBoLThcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbm9uZSB3LTQgcm91bmRlZC1mdWxsIGgtNCBib3JkZXItMlwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi00IHRleHQteGwgdGV4dC13aGl0ZSB0cmFja2luZy13aWRlc3RcIj57Zm9ybURhdGEuY2FyZE51bWJlcj8gZm9ybURhdGEuY2FyZE51bWJlci5tYXRjaCgvLnsxLDR9L2cpLmpvaW4oJyAnKTogJzAwMDAwMDAwMDAwMDAwMDAnLm1hdGNoKC8uezEsNH0vZykuam9pbignICcpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0cmFja2luZy13aWRlclwiPntmb3JtRGF0YS5uYW1lPyBmb3JtRGF0YS5uYW1lOiAnSkFORSBBUFBMRVNFRUQnfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRyYWNraW5nLXdpZGVyXCI+eyhmb3JtRGF0YS5tb250aCAmJiBmb3JtRGF0YS55ZWFyKT8gYCR7Zm9ybURhdGEubW9udGh9LyR7Zm9ybURhdGEueWVhcn1gOiAnMDAvMDAnfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC0zMiBweC0xMiBtZDpmbGV4IG1kOm10LTAgbWQ6aXRlbXMtY2VudGVyIG1kOnctMS8zIG1kOm1sLTQ4IG1kOm14LWF1dG9cIj5cbiAgICAgICAgPEZvcm0gZm9ybURhdGE9e2Zvcm1EYXRhfSB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfSBjaGVja0Zvcm1Db21wbGV0aW9uPXtjaGVja0Zvcm1Db21wbGV0aW9ufSBkaXNwbGF5TWVzc2FnZT17ZGlzcGxheU1lc3NhZ2V9IGNsZWFyRm9ybT17Y2xlYXJGb3JtfSBmb3JtQ29tcGxldGVkPXtmb3JtQ29tcGxldGVkfS8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiRm9ybSIsInVzZVN0YXRlIiwiSG9tZXBhZ2UiLCJjbGVhckZvcm0iLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJjYXJkTnVtYmVyIiwibW9udGgiLCJ5ZWFyIiwiY3ZjIiwiY2hlY2tGb3JtQ29tcGxldGlvbiIsImtleXMiLCJPYmplY3QiLCJmb3JtRGF0YSIsImkiLCJsZW5ndGgiLCJkaXNwbGF5TWVzc2FnZSIsInNldEZvcm1Db21wbGV0ZWQiLCJ1cGRhdGVGb3JtIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldkRhdGEiLCJpbnB1dEZpZWxkIiwiaW5wdXRWYWx1ZSIsIm1hdGNoIiwiZm9ybUNvbXBsZXRlZCIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
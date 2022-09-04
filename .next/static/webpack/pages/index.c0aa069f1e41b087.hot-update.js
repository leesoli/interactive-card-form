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

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInput */ \"./components/FormInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Form(param) {\n    var formData = param.formData, updateForm = param.updateForm, clearForm = param.clearForm;\n    var checkFormCompletion = function checkFormCompletion() {\n        var formComplete = true;\n        var formDataKeys = Object.keys(formData);\n        for(var i = 0; i < formDataKeys; i++){\n            var inputValue = formData[key];\n            if (!inputValue) {\n                formComplete = false;\n                break;\n            }\n            if (key === \"name\" && inputValue.match(/\\d/gi)) {\n                formComplete = false;\n                break;\n            }\n            if (key === \"cardNumber\" && (inputValue.match(/[A-Z]/gi) || inputValue.length !== 16)) {\n                formComplete = false;\n                break;\n            }\n            if ((key === \"month\" || key === \"year\") && inputValue.length !== 2) {\n                formComplete = false;\n                break;\n            }\n        }\n        if (formComplete) {\n            setFormCompleted(true);\n        }\n    };\n    var displayMessage = function displayMessage(inputField) {\n        var inputValue = formData[inputField];\n        if (!inputValue) {\n            hasError[inputField] = true;\n            return \"Can't be blank\";\n        }\n        if (inputValue.match(/[A-Z]/gi) && inputField !== \"name\") {\n            hasError[inputField] = true;\n            return \"Wrong format, numbers only\";\n        }\n        if (inputValue.match(/\\d/gi) && inputField === \"name\") {\n            hasError[inputField] = true;\n            return \"Wrong format, letters only\";\n        }\n        if (inputField === \"cardNumber\" && inputValue.length !== 16) {\n            hasError[inputField] = true;\n            return \"Not correct length\";\n        }\n        if ((inputField === \"month\" || inputField === \"year\") && inputValue.length !== 2) {\n            hasError[inputField] = true;\n            return \"Not correct length\";\n        }\n        if (inputField === \"cvc\" && inputValue.length !== 3) {\n            hasError[inputField] = true;\n            return \"Not correct length\";\n        }\n        checkFormCompletion();\n    };\n    var handleSubmit = function handleSubmit(e) {\n        e.preventDefault();\n        setDisplayErrorMessages(true);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), displayErrorMessages = ref[0], setDisplayErrorMessages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), formCompleted = ref1[0], setFormCompleted = ref1[1];\n    var hasError = {\n        name: false,\n        cardNumber: false,\n        month: false,\n        year: false,\n        cvc: false\n    };\n    console.log(displayErrorMessages);\n    console.log(formCompleted, \"form completed\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setDisplayErrorMessages(false);\n        setFormComplete(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex text-lg\",\n        children: formCompleted ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Form Complete!\"\n        }, void 0, false, {\n            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n            lineNumber: 86,\n            columnNumber: 23\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"flex flex-col h-full w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        \"CARDHOLDER NAME\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            hasError: hasError,\n                            fieldName: \"name\",\n                            formData: formData,\n                            updateForm: updateForm\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        displayErrorMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: displayMessage(\"name\")\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                            lineNumber: 91,\n                            columnNumber: 36\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"flex flex-col\",\n                    children: [\n                        \"CARD NUMBER\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            hasError: hasError,\n                            fieldName: \"cardNumber\",\n                            formData: formData,\n                            updateForm: updateForm\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        displayErrorMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-red-800\",\n                            children: displayMessage(\"cardNumber\")\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                            lineNumber: 96,\n                            columnNumber: 36\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex flex-col w-1/2\",\n                            children: [\n                                \"EXP. DATE (MM/YY)\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex w-full justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-1/2\",\n                                            onChange: updateForm,\n                                            type: \"text\",\n                                            name: \"month\",\n                                            value: formData.month,\n                                            placeholder: \"MM\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: \"w-1/2\",\n                                            onChange: updateForm,\n                                            type: \"text\",\n                                            name: \"year\",\n                                            value: formData.year,\n                                            placeholder: \"YY\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this),\n                                        displayErrorMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: displayMessage(\"month\") || displayMessage(\"year\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 40\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex flex-col w-1/2\",\n                            children: [\n                                \"CVC\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    hasError: hasError,\n                                    fieldName: \"cvc\",\n                                    formData: formData,\n                                    updateForm: updateForm\n                                }, void 0, false, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, this),\n                                displayErrorMessages && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: displayMessage(\"cvc\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 38\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-purple-800 text-white py-2 rounded-lg\",\n                    children: \"Confirm\"\n                }, void 0, false, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/solilee/Desktop/interactive-card-form/components/Form.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n};\n_s(Form, \"9ip0VbeygKHB3N51NfY26IFA9RQ=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7Ozs7Z0RBQUU7c0RBQ2pILDhEQUFDSixPQUFLOzRDQUFDTCxTQUFTLEVBQUMsT0FBTzs0Q0FBQ00sUUFBUSxFQUFFckMsVUFBVTs0Q0FBRXNDLElBQUksRUFBQyxNQUFNOzRDQUFDaEIsSUFBSSxFQUFDLE1BQU07NENBQUNpQixLQUFLLEVBQUV4QyxRQUFRLENBQUMwQixJQUFJOzRDQUFFZSxXQUFXLEVBQUMsSUFBSTs7Ozs7Z0RBQUU7d0NBQzlHcEIsb0JBQW9CLGtCQUFJLDhEQUFDVSxLQUFHO3NEQUFFakIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJQSxjQUFjLENBQUMsTUFBTSxDQUFDOzs7OztnREFBTzs7Ozs7O3dDQUNuRjs7Ozs7O2dDQUNBO3NDQUNSLDhEQUFDcUIsT0FBSzs0QkFBQ0gsU0FBUyxFQUFDLHFCQUFxQjs7Z0NBQUMsS0FFckM7OENBQUEsOERBQUNwQyxrREFBUztvQ0FBQ29CLFFBQVEsRUFBRUEsUUFBUTtvQ0FBRW9CLFNBQVMsRUFBQyxLQUFLO29DQUFDcEMsUUFBUSxFQUFFQSxRQUFRO29DQUFFQyxVQUFVLEVBQUVBLFVBQVU7Ozs7O3dDQUFHO2dDQUMzRm9CLG9CQUFvQixrQkFBSSw4REFBQ1UsS0FBRzs4Q0FBRWpCLGNBQWMsQ0FBQyxLQUFLLENBQUM7Ozs7O3dDQUFPOzs7Ozs7Z0NBQ3JEOzs7Ozs7d0JBQ0o7OEJBQ04sOERBQUM0QixRQUFNO29CQUFDVixTQUFTLEVBQUMsMENBQTBDOzhCQUFDLFNBQU87Ozs7O3dCQUFTOzs7Ozs7Z0JBQ3hFOzs7OztZQUVILENBQ1A7Q0FDRjtHQWxIdUJqQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzP2ZiOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtICh7Zm9ybURhdGEsIHVwZGF0ZUZvcm0sIGNsZWFyRm9ybX0pIHtcbiAgY29uc3QgW2Rpc3BsYXlFcnJvck1lc3NhZ2VzLCBzZXREaXNwbGF5RXJyb3JNZXNzYWdlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmb3JtQ29tcGxldGVkLCBzZXRGb3JtQ29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFzRXJyb3IgPSB7XG4gICAgbmFtZTogZmFsc2UsXG4gICAgY2FyZE51bWJlcjogZmFsc2UsXG4gICAgbW9udGg6IGZhbHNlLFxuICAgIHllYXI6IGZhbHNlLFxuICAgIGN2YzogZmFsc2VcbiAgfTtcbiAgY29uc29sZS5sb2coZGlzcGxheUVycm9yTWVzc2FnZXMpXG4gIGNvbnNvbGUubG9nKGZvcm1Db21wbGV0ZWQsICdmb3JtIGNvbXBsZXRlZCcpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGlzcGxheUVycm9yTWVzc2FnZXMoZmFsc2UpO1xuICAgIHNldEZvcm1Db21wbGV0ZShmYWxzZSk7XG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGNoZWNrRm9ybUNvbXBsZXRpb24oKSB7XG4gICAgbGV0IGZvcm1Db21wbGV0ZSA9IHRydWU7XG4gICAgY29uc3QgZm9ybURhdGFLZXlzID0gT2JqZWN0LmtleXMoZm9ybURhdGEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybURhdGFLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBmb3JtRGF0YVtrZXldO1xuICAgICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICAgIGZvcm1Db21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICduYW1lJyAmJiBpbnB1dFZhbHVlLm1hdGNoKC9cXGQvZ2kpKSB7XG4gICAgICAgIGZvcm1Db21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdjYXJkTnVtYmVyJyAmJiAoaW5wdXRWYWx1ZS5tYXRjaCgvW0EtWl0vZ2kpIHx8IGlucHV0VmFsdWUubGVuZ3RoICE9PSAxNikpIHtcbiAgICAgICAgZm9ybUNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKChrZXkgPT09ICdtb250aCcgfHwga2V5ID09PSAneWVhcicpICYmIGlucHV0VmFsdWUubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGZvcm1Db21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm9ybUNvbXBsZXRlKSB7XG4gICAgICBzZXRGb3JtQ29tcGxldGVkKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKGlucHV0RmllbGQpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZm9ybURhdGFbaW5wdXRGaWVsZF07XG5cbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIGhhc0Vycm9yW2lucHV0RmllbGRdID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnQ2FuXFwndCBiZSBibGFuayc7XG4gICAgfVxuICAgIGlmIChpbnB1dFZhbHVlLm1hdGNoKC9bQS1aXS9naSkgJiYgaW5wdXRGaWVsZCAhPT0gJ25hbWUnKSB7XG4gICAgICBoYXNFcnJvcltpbnB1dEZpZWxkXSA9IHRydWU7XG4gICAgICByZXR1cm4gJ1dyb25nIGZvcm1hdCwgbnVtYmVycyBvbmx5JztcbiAgICB9XG4gICAgaWYgKGlucHV0VmFsdWUubWF0Y2goL1xcZC9naSkgJiYgaW5wdXRGaWVsZCA9PT0gJ25hbWUnKSB7XG4gICAgICBoYXNFcnJvcltpbnB1dEZpZWxkXSA9IHRydWU7XG4gICAgICByZXR1cm4gJ1dyb25nIGZvcm1hdCwgbGV0dGVycyBvbmx5JztcbiAgICB9XG4gICAgaWYgKGlucHV0RmllbGQgPT09ICdjYXJkTnVtYmVyJyAmJiBpbnB1dFZhbHVlLmxlbmd0aCAhPT0gMTYpIHtcbiAgICAgIGhhc0Vycm9yW2lucHV0RmllbGRdID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnTm90IGNvcnJlY3QgbGVuZ3RoJztcbiAgICB9XG4gICAgaWYgKChpbnB1dEZpZWxkID09PSAnbW9udGgnIHx8IGlucHV0RmllbGQgPT09ICd5ZWFyJykgJiYgaW5wdXRWYWx1ZS5sZW5ndGggIT09IDIpIHtcbiAgICAgIGhhc0Vycm9yW2lucHV0RmllbGRdID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnTm90IGNvcnJlY3QgbGVuZ3RoJztcbiAgICB9XG4gICAgaWYgKGlucHV0RmllbGQgPT09ICdjdmMnICYmIGlucHV0VmFsdWUubGVuZ3RoICE9PSAzKSB7XG4gICAgICBoYXNFcnJvcltpbnB1dEZpZWxkXSA9IHRydWU7XG4gICAgICByZXR1cm4gJ05vdCBjb3JyZWN0IGxlbmd0aCc7XG4gICAgfVxuICAgIGNoZWNrRm9ybUNvbXBsZXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldERpc3BsYXlFcnJvck1lc3NhZ2VzKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1sZ1wiPlxuICAgICAge2Zvcm1Db21wbGV0ZWQ/IDxkaXY+Rm9ybSBDb21wbGV0ZSE8L2Rpdj4gOlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgQ0FSREhPTERFUiBOQU1FXG4gICAgICAgICAgPEZvcm1JbnB1dCBoYXNFcnJvcj17aGFzRXJyb3J9IGZpZWxkTmFtZT1cIm5hbWVcIiBmb3JtRGF0YT17Zm9ybURhdGF9IHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19Lz5cbiAgICAgICAgICB7ZGlzcGxheUVycm9yTWVzc2FnZXMgJiYgPGRpdj57ZGlzcGxheU1lc3NhZ2UoXCJuYW1lXCIpfTwvZGl2Pn1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICBDQVJEIE5VTUJFUlxuICAgICAgICAgIDxGb3JtSW5wdXQgaGFzRXJyb3I9e2hhc0Vycm9yfSBmaWVsZE5hbWU9XCJjYXJkTnVtYmVyXCIgZm9ybURhdGE9e2Zvcm1EYXRhfSB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfS8+XG4gICAgICAgICAge2Rpc3BsYXlFcnJvck1lc3NhZ2VzICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtODAwXCI+e2Rpc3BsYXlNZXNzYWdlKFwiY2FyZE51bWJlclwiKX08L2Rpdj59XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0xLzJcIj5cbiAgICAgICAgICAgIEVYUC4gREFURSAoTU0vWVkpXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy0xLzJcIiBvbkNoYW5nZT17dXBkYXRlRm9ybX0gdHlwZT1cInRleHRcIiBuYW1lPVwibW9udGhcIiB2YWx1ZT17Zm9ybURhdGEubW9udGh9IHBsYWNlaG9sZGVyPVwiTU1cIi8+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEvMlwiIG9uQ2hhbmdlPXt1cGRhdGVGb3JtfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ5ZWFyXCIgdmFsdWU9e2Zvcm1EYXRhLnllYXJ9IHBsYWNlaG9sZGVyPVwiWVlcIi8+XG4gICAgICAgICAgICAgIHtkaXNwbGF5RXJyb3JNZXNzYWdlcyAmJiA8ZGl2PntkaXNwbGF5TWVzc2FnZShcIm1vbnRoXCIpIHx8IGRpc3BsYXlNZXNzYWdlKFwieWVhclwiKX08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yXCI+XG4gICAgICAgICAgICBDVkNcbiAgICAgICAgICAgIDxGb3JtSW5wdXQgaGFzRXJyb3I9e2hhc0Vycm9yfSBmaWVsZE5hbWU9XCJjdmNcIiBmb3JtRGF0YT17Zm9ybURhdGF9IHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19Lz5cbiAgICAgICAgICAgIHtkaXNwbGF5RXJyb3JNZXNzYWdlcyAmJiA8ZGl2PntkaXNwbGF5TWVzc2FnZShcImN2Y1wiKX08L2Rpdj59XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcHVycGxlLTgwMCB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZC1sZ1wiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJGb3JtSW5wdXQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvcm0iLCJmb3JtRGF0YSIsInVwZGF0ZUZvcm0iLCJjbGVhckZvcm0iLCJjaGVja0Zvcm1Db21wbGV0aW9uIiwiZm9ybUNvbXBsZXRlIiwiZm9ybURhdGFLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJpbnB1dFZhbHVlIiwia2V5IiwibWF0Y2giLCJsZW5ndGgiLCJzZXRGb3JtQ29tcGxldGVkIiwiZGlzcGxheU1lc3NhZ2UiLCJpbnB1dEZpZWxkIiwiaGFzRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXREaXNwbGF5RXJyb3JNZXNzYWdlcyIsImRpc3BsYXlFcnJvck1lc3NhZ2VzIiwiZm9ybUNvbXBsZXRlZCIsIm5hbWUiLCJjYXJkTnVtYmVyIiwibW9udGgiLCJ5ZWFyIiwiY3ZjIiwiY29uc29sZSIsImxvZyIsInNldEZvcm1Db21wbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiZmllbGROYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form.js\n"));

/***/ })

});
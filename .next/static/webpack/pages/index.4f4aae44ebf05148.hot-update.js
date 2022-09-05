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

/***/ "./components/FormInput.js":
/*!*********************************!*\
  !*** ./components/FormInput.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction FormInput(param) {\n    var fieldName = param.fieldName, formData = param.formData, updateForm = param.updateForm, hasError = param.hasError, displayErrorMessages = param.displayErrorMessages;\n    var findPlaceHolder = function findPlaceHolder() {\n        if (fieldName === \"name\") {\n            return \"e.g. Jane Appleseed\";\n        } else if (fieldName === \"cardNumber\") {\n            return \"e.g. 1234 5678 9123 0000\";\n        } else if (fieldName === \"cvc\") {\n            return \"e.g. 123\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: hasError && displayErrorMessages ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"border-2 border-red-800\",\n            onChange: updateForm,\n            type: \"text\",\n            name: fieldName,\n            value: formData[fieldName],\n            placeholder: findPlaceHolder()\n        }, void 0, false, {\n            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/FormInput.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            className: \"\",\n            onChange: updateForm,\n            type: \"text\",\n            name: fieldName,\n            value: formData[fieldName],\n            placeholder: findPlaceHolder()\n        }, void 0, false, {\n            fileName: \"/Users/solilee/Desktop/interactive-card-form/components/FormInput.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/solilee/Desktop/interactive-card-form/components/FormInput.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_c = FormInput;\nvar _c;\n$RefreshReg$(_c, \"FormInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1JbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLFNBQVMsQ0FBQyxLQUFpRSxFQUFFO1FBQWxFQyxTQUFTLEdBQVYsS0FBaUUsQ0FBaEVBLFNBQVMsRUFBRUMsUUFBUSxHQUFwQixLQUFpRSxDQUFyREEsUUFBUSxFQUFFQyxVQUFVLEdBQWhDLEtBQWlFLENBQTNDQSxVQUFVLEVBQUVDLFFBQVEsR0FBMUMsS0FBaUUsQ0FBL0JBLFFBQVEsRUFBRUMsb0JBQW9CLEdBQWhFLEtBQWlFLENBQXJCQSxvQkFBb0I7UUFFdkZDLGVBQWUsR0FBeEIsU0FBU0EsZUFBZSxHQUFHO1FBQ3pCLElBQUlMLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDeEIsT0FBTyxxQkFBcUI7U0FDN0IsTUFBTSxJQUFJQSxTQUFTLEtBQUssWUFBWSxFQUFFO1lBQ3JDLE9BQU8sMEJBQTBCO1NBQ2xDLE1BQU0sSUFBSUEsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM5QixPQUFPLFVBQVU7U0FDbEI7S0FDRjtJQUdELHFCQUNFLDhEQUFDTSxLQUFHO2tCQUNBLFFBQVMsSUFBSUYsb0JBQW9CLGlCQUNqQyw4REFBQ0csT0FBSztZQUFDQyxTQUFTLEVBQUMseUJBQXlCO1lBQUNDLFFBQVEsRUFBRVAsVUFBVTtZQUFFUSxJQUFJLEVBQUMsTUFBTTtZQUFDQyxJQUFJLEVBQUVYLFNBQVM7WUFBRVksS0FBSyxFQUFFWCxRQUFRLENBQUNELFNBQVMsQ0FBQztZQUFFYSxXQUFXLEVBQUVSLGVBQWUsRUFBRTs7Ozs7Z0JBQUcsaUJBQzNKLDhEQUFDRSxPQUFLO1lBQUNDLFNBQVMsRUFBQyxFQUFFO1lBQUNDLFFBQVEsRUFBRVAsVUFBVTtZQUFFUSxJQUFJLEVBQUMsTUFBTTtZQUFDQyxJQUFJLEVBQUVYLFNBQVM7WUFBRVksS0FBSyxFQUFFWCxRQUFRLENBQUNELFNBQVMsQ0FBQztZQUFFYSxXQUFXLEVBQUVSLGVBQWUsRUFBRTs7Ozs7Z0JBQUc7Ozs7O1lBRWxJLENBQ1A7Q0FDRjtBQXJCdUJOLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtSW5wdXQuanM/Njg3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtSW5wdXQoe2ZpZWxkTmFtZSwgZm9ybURhdGEsIHVwZGF0ZUZvcm0sIGhhc0Vycm9yLCBkaXNwbGF5RXJyb3JNZXNzYWdlc30pIHtcblxuICBmdW5jdGlvbiBmaW5kUGxhY2VIb2xkZXIoKSB7XG4gICAgaWYgKGZpZWxkTmFtZSA9PT0gXCJuYW1lXCIpIHtcbiAgICAgIHJldHVybiAnZS5nLiBKYW5lIEFwcGxlc2VlZCdcbiAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZSA9PT0gXCJjYXJkTnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiAnZS5nLiAxMjM0IDU2NzggOTEyMyAwMDAwJ1xuICAgIH0gZWxzZSBpZiAoZmllbGROYW1lID09PSAnY3ZjJykge1xuICAgICAgcmV0dXJuICdlLmcuIDEyMydcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICB7KGhhc0Vycm9yICYmIGRpc3BsYXlFcnJvck1lc3NhZ2VzKT9cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1yZWQtODAwXCIgb25DaGFuZ2U9e3VwZGF0ZUZvcm19IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lfSB2YWx1ZT17Zm9ybURhdGFbZmllbGROYW1lXX0gcGxhY2Vob2xkZXI9e2ZpbmRQbGFjZUhvbGRlcigpfS8+OlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiXCIgb25DaGFuZ2U9e3VwZGF0ZUZvcm19IHR5cGU9XCJ0ZXh0XCIgbmFtZT17ZmllbGROYW1lfSB2YWx1ZT17Zm9ybURhdGFbZmllbGROYW1lXX0gcGxhY2Vob2xkZXI9e2ZpbmRQbGFjZUhvbGRlcigpfS8+XG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJGb3JtSW5wdXQiLCJmaWVsZE5hbWUiLCJmb3JtRGF0YSIsInVwZGF0ZUZvcm0iLCJoYXNFcnJvciIsImRpc3BsYXlFcnJvck1lc3NhZ2VzIiwiZmluZFBsYWNlSG9sZGVyIiwiZGl2IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FormInput.js\n"));

/***/ })

});
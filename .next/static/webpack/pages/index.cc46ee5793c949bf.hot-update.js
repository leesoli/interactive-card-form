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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Form.js */ \"./components/Form.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Homepage() {\n    var updateForm = function updateForm(e) {\n        var _target = e.target, name = _target.name, value = _target.value;\n        setFormData(function(prevData) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, prevData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, name, value));\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        cardNumber: \"\",\n        month: \"\",\n        year: \"\",\n        cvc: \"\"\n    }), formData = ref[0], setFormData = ref[1];\n    var number = \"0000000000000000\".split(\"\").map(function(n, i) {\n        return console.log();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-purple-900 h-80\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute bg-purple-300\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: formData.cardNumber ? formData.cardNumber : [\n                                \"0000000000000000\"\n                            ].map(function(n, i) {\n                                return i;\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: formData.name ? formData.name : \"JANE APPLESEED\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: formData.month && formData.year ? \"\".concat(formData.month, \"/\").concat(formData.year) : \"00/00\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    formData: formData,\n                    updateForm: updateForm\n                }, void 0, false, {\n                    fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/solilee/Desktop/interactive-card-details-form-main/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(Homepage, \"fCEOtFfuNacMnYaCuvVh6UO4nKE=\");\n_c = Homepage;\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBeUM7QUFDVjtBQUVoQixTQUFTRSxRQUFRLEdBQUc7UUFTeEJDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxDQUFDQyxDQUFDLEVBQUU7UUFDckIsSUFBc0JBLE9BQVEsR0FBUkEsQ0FBQyxDQUFDQyxNQUFNLEVBQXZCQyxJQUFJLEdBQVdGLE9BQVEsQ0FBdkJFLElBQUksRUFBRUMsS0FBSyxHQUFJSCxPQUFRLENBQWpCRyxLQUFLO1FBQ2xCQyxXQUFXLENBQUNDLFNBQUFBLFFBQVE7bUJBQUssd0tBQ3BCQSxRQUFRLEdBQ1gscUZBQUNILElBQUksRUFBR0MsS0FBSyxFQUNkO1NBQUMsQ0FBQztLQUNKOztJQWRELElBQWdDTixHQU05QixHQU44QkEsK0NBQVEsQ0FBQztRQUN2Q0ssSUFBSSxFQUFFLEVBQUU7UUFDUkksVUFBVSxFQUFFLEVBQUU7UUFDZEMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsSUFBSSxFQUFFLEVBQUU7UUFDUkMsR0FBRyxFQUFFLEVBQUU7S0FDUixDQUFDLEVBTktDLFFBQVEsR0FBaUJiLEdBTTlCLEdBTmEsRUFBRU8sV0FBVyxHQUFJUCxHQU05QixHQU4wQjtJQWdCNUIsSUFBTWMsTUFBTSxHQUVkLGtCQUFrQixDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUM7ZUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFO0tBQ2QsQ0FBQztJQUVGLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsU0FBTztnQkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjswQkFDckMsNEVBQUNGLEtBQUc7b0JBQUNFLFNBQVMsRUFBQyx3QkFBd0I7O3NDQUNyQyw4REFBQ0YsS0FBRztzQ0FBRVIsUUFBUSxDQUFDSixVQUFVLEdBQUVJLFFBQVEsQ0FBQ0osVUFBVSxHQUFFO2dDQUFDLGtCQUFrQjs2QkFBQyxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDO3VDQUM1RUEsQ0FBQzs2QkFDRixDQUFDOzs7OztnQ0FBTztzQ0FDVCw4REFBQ0csS0FBRzs7OENBQ0YsOERBQUNBLEtBQUc7OENBQUVSLFFBQVEsQ0FBQ1IsSUFBSSxHQUFFUSxRQUFRLENBQUNSLElBQUksR0FBRSxnQkFBZ0I7Ozs7O3dDQUFPOzhDQUMzRCw4REFBQ2dCLEtBQUc7OENBQUUsUUFBUyxDQUFDWCxLQUFLLElBQUlHLFFBQVEsQ0FBQ0YsSUFBSSxHQUFHLEVBQUMsQ0FBb0JFLE1BQWEsQ0FBL0JBLFFBQVEsQ0FBQ0gsS0FBSyxFQUFDLEdBQUMsQ0FBZ0IsUUFBZEcsUUFBUSxDQUFDRixJQUFJLENBQUUsR0FBRSxPQUFPOzs7Ozt3Q0FBTzs7Ozs7O2dDQUN6Rjs7Ozs7O3dCQUNGOzs7OztvQkFDRTswQkFDViw4REFBQ1csU0FBTzswQkFDTiw0RUFBQ3ZCLDJEQUFJO29CQUFDYyxRQUFRLEVBQUVBLFFBQVE7b0JBQUVYLFVBQVUsRUFBRUEsVUFBVTs7Ozs7d0JBQUc7Ozs7O29CQUMzQzs7Ozs7O1lBQ04sQ0FDUDtDQUNGO0dBekN1QkQsUUFBUTtBQUFSQSxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtLmpzJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGNhcmROdW1iZXI6ICcnLFxuICAgIG1vbnRoOiAnJyxcbiAgICB5ZWFyOiAnJyxcbiAgICBjdmM6ICcnXG4gIH0pXG5cbiAgZnVuY3Rpb24gdXBkYXRlRm9ybShlKSB7XG4gICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHByZXZEYXRhID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IG51bWJlciA9XG5cbicwMDAwMDAwMDAwMDAwMDAwJy5zcGxpdCgnJykubWFwKChuLCBpKSA9PiAoXG4gICAgY29uc29sZS5sb2coKVxuICApKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXB1cnBsZS05MDAgaC04MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJnLXB1cnBsZS0zMDBcIj5cbiAgICAgICAgICA8ZGl2Pntmb3JtRGF0YS5jYXJkTnVtYmVyPyBmb3JtRGF0YS5jYXJkTnVtYmVyOiBbJzAwMDAwMDAwMDAwMDAwMDAnXS5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgIGlcbiAgICAgICAgICApKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj57Zm9ybURhdGEubmFtZT8gZm9ybURhdGEubmFtZTogJ0pBTkUgQVBQTEVTRUVEJ308L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+eyhmb3JtRGF0YS5tb250aCAmJiBmb3JtRGF0YS55ZWFyKT8gYCR7Zm9ybURhdGEubW9udGh9LyR7Zm9ybURhdGEueWVhcn1gOiAnMDAvMDAnfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Rm9ybSBmb3JtRGF0YT17Zm9ybURhdGF9IHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19Lz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU3RhdGUiLCJIb21lcGFnZSIsInVwZGF0ZUZvcm0iLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0Rm9ybURhdGEiLCJwcmV2RGF0YSIsImNhcmROdW1iZXIiLCJtb250aCIsInllYXIiLCJjdmMiLCJmb3JtRGF0YSIsIm51bWJlciIsInNwbGl0IiwibWFwIiwibiIsImkiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
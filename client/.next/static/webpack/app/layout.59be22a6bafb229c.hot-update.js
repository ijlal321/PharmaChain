"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"22baa3f896c9\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2EwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyMmJhYTNmODk2YzlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/contexts/Web3Context.js":
/*!*************************************!*\
  !*** ./app/contexts/Web3Context.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Provider: function() { return /* binding */ Web3Provider; },\n/* harmony export */   useWeb3: function() { return /* binding */ useWeb3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _src_contracts_Pharma_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/contracts/Pharma.json */ \"(app-pages-browser)/./src/contracts/Pharma.json\");\n/* __next_internal_client_entry_do_not_use__ Web3Provider,useWeb3 auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n// src/contexts/Web3Context.js\n\n\n\nconst Web3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst Web3Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [PharmaContract, setPharmaContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const init = async ()=>{\n            try {\n                if (window.ethereum) {\n                    const web3Instance = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                    setWeb3(web3Instance);\n                    const account = await window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                    setAccounts(account);\n                    const contractInstance = new web3Instance.eth.Contract(_src_contracts_Pharma_json__WEBPACK_IMPORTED_MODULE_3__.abi, _src_contracts_Pharma_json__WEBPACK_IMPORTED_MODULE_3__.networks[1234].address);\n                    setPharmaContract(contractInstance);\n                    window.ethereum.on(\"accountsChanged\", (accounts)=>{\n                        setAccounts(accounts);\n                        window.location.reload();\n                    });\n                    window.ethereum.on(\"chainChanged\", ()=>{\n                        window.location.reload();\n                    });\n                } else {\n                    alert(\"Please install MetaMask!\");\n                }\n            } catch (error) {\n                console.error(error);\n                alert(\"A Logged in metamask is required for fun functionality\");\n            }\n        };\n        if (!web3) {\n            init();\n        }\n        const setupListeners = ()=>{\n            PharmaContract.on(\"MedicineLaunched\", (medicineId)=>{\n                alert(\"Medicine Launched at Id\", medicineId);\n            });\n        };\n        if (web3) {\n            setupListeners();\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: {\n            web3,\n            accounts,\n            PharmaContract\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\WebArchieve\\\\Hackathon\\\\client\\\\app\\\\contexts\\\\Web3Context.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Web3Provider, \"QraC1EZKOvvB7UM0ebxudjZqD6Q=\");\n_c = Web3Provider;\nconst useWeb3 = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Web3Context);\n};\n_s1(useWeb3, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"Web3Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0cy9XZWIzQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSw4QkFBOEI7QUFDZ0Q7QUFDdEQ7QUFDK0I7QUFFdkQsTUFBTU8sNEJBQWNOLG9EQUFhQTtBQUkxQixNQUFNTyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDVyxnQkFBZ0JDLGtCQUFrQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUVyREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxPQUFPO1lBQ1gsSUFBSTtnQkFDRixJQUFJQyxPQUFPQyxRQUFRLEVBQUU7b0JBQ25CLE1BQU1DLGVBQWUsSUFBSWQsNENBQUlBLENBQUNZLE9BQU9DLFFBQVE7b0JBQzdDUCxRQUFRUTtvQkFFUixNQUFNQyxVQUFVLE1BQU1ILE9BQU9DLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO3dCQUFFQyxRQUFRO29CQUFzQjtvQkFDOUVULFlBQVlPO29CQUVaLE1BQU1HLG1CQUFtQixJQUFJSixhQUFhSyxHQUFHLENBQUNDLFFBQVEsQ0FBQ25CLDJEQUFZLEVBQUVBLDhFQUErQjtvQkFDcEdTLGtCQUFrQlE7b0JBRWxCTixPQUFPQyxRQUFRLENBQUNXLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQ2pCO3dCQUNyQ0MsWUFBWUQ7d0JBQ1pLLE9BQU9hLFFBQVEsQ0FBQ0MsTUFBTTtvQkFDeEI7b0JBRUFkLE9BQU9DLFFBQVEsQ0FBQ1csRUFBRSxDQUFDLGdCQUFnQjt3QkFDakNaLE9BQU9hLFFBQVEsQ0FBQ0MsTUFBTTtvQkFDeEI7Z0JBQ0YsT0FBTztvQkFDTEMsTUFBTTtnQkFDUjtZQUNGLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtnQkFDZEQsTUFBTTtZQUNSO1FBQ0Y7UUFDQSxJQUFJLENBQUN0QixNQUFLO1lBQ1JNO1FBQ0Y7UUFFQSxNQUFNbUIsaUJBQWlCO1lBQ3JCckIsZUFBZWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDTztnQkFDckNKLE1BQU0sMkJBQTJCSTtZQUNuQztRQUNGO1FBRUEsSUFBSTFCLE1BQUs7WUFDVHlCO1FBQ0E7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQzVCLFlBQVk4QixRQUFRO1FBQUNDLE9BQU87WUFBRTVCO1lBQU1FO1lBQVVFO1FBQWU7a0JBQzNETDs7Ozs7O0FBR1AsRUFBRTtHQXREV0Q7S0FBQUE7QUF3RE4sTUFBTStCLFVBQVU7O0lBQU1yQyxPQUFBQSxpREFBVUEsQ0FBQ0s7QUFBVyxFQUFFO0lBQXhDZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHRzL1dlYjNDb250ZXh0LmpzP2Y1M2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG4vLyBzcmMvY29udGV4dHMvV2ViM0NvbnRleHQuanNcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5pbXBvcnQgbXlQaGFybWEgZnJvbSAnLi4vLi4vc3JjL2NvbnRyYWN0cy9QaGFybWEuanNvbic7XHJcblxyXG5jb25zdCBXZWIzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFdlYjNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUGhhcm1hQ29udHJhY3QsIHNldFBoYXJtYUNvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgICBjb25zdCB3ZWIzSW5zdGFuY2UgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgICAgc2V0V2ViMyh3ZWIzSW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgICAgc2V0QWNjb3VudHMoYWNjb3VudCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IG5ldyB3ZWIzSW5zdGFuY2UuZXRoLkNvbnRyYWN0KG15UGhhcm1hLmFiaSwgbXlQaGFybWEubmV0d29ya3NbMTIzNF0uYWRkcmVzcyk7XHJcbiAgICAgICAgICBzZXRQaGFybWFDb250cmFjdChjb250cmFjdEluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIChhY2NvdW50cykgPT4ge1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50cyhhY2NvdW50cyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICBhbGVydCgnQSBMb2dnZWQgaW4gbWV0YW1hc2sgaXMgcmVxdWlyZWQgZm9yIGZ1biBmdW5jdGlvbmFsaXR5Jyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpZiAoIXdlYjMpe1xyXG4gICAgICBpbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0dXBMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgIFBoYXJtYUNvbnRyYWN0Lm9uKCdNZWRpY2luZUxhdW5jaGVkJywgKG1lZGljaW5lSWQpID0+IHtcclxuICAgICAgICBhbGVydChcIk1lZGljaW5lIExhdW5jaGVkIGF0IElkXCIsIG1lZGljaW5lSWQpXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAod2ViMyl7XHJcbiAgICBzZXR1cExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWIzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB3ZWIzLCBhY2NvdW50cywgUGhhcm1hQ29udHJhY3QgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvV2ViM0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VXZWIzID0gKCkgPT4gdXNlQ29udGV4dChXZWIzQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjMiLCJteVBoYXJtYSIsIldlYjNDb250ZXh0IiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ3ZWIzIiwic2V0V2ViMyIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJQaGFybWFDb250cmFjdCIsInNldFBoYXJtYUNvbnRyYWN0IiwiaW5pdCIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViM0luc3RhbmNlIiwiYWNjb3VudCIsInJlcXVlc3QiLCJtZXRob2QiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXR1cExpc3RlbmVycyIsIm1lZGljaW5lSWQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlV2ViMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/contexts/Web3Context.js\n"));

/***/ })

});
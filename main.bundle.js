webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// imports


// module
exports.push([module.i, "h1 {\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.container {\n    left: 10%;\n    width: 80%;\n    min-width: 1000px;\n    height: 600px;\n    margin: auto;\n}\n\n.file-container {\n    height: 10%;\n}\n\n.json-container {\n    height: 90%;\n    padding-left: 20px;\n    overflow-y: auto;\n    background-color: black;\n    font-size: 1.5rem;\n    color: white;\n    margin-top: 20px;\n}\n\ninput[type=file] {\n\toutline: 1px dotted #000;\n\toutline: -webkit-focus-ring-color auto 5px;\n    font-size: 1.5rem;\n    padding: 10px;\n    background-color: white;\n    cursor: pointer;\n}\n\ninput[type=file]:focus, input[type=file]:hover {\n    background-color: #edf0f3;\n}\n\ninput[type=button] {\n    float: right;\n    margin-left: 20px;\n    font-size: 1.5rem;\n    color: white;\n    padding: 10px;\n    text-transform: uppercase;\n    cursor: pointer;\n}\n\ninput[type=button]:disabled {\n    background: gray;\n    cursor: default;\n}\n\n.success {\n    background-color: #4CAF50;\n}\n\n.primary {\n    background-color: #008CBA;\n}\n\n.danger {\n    background-color: #f44336;\n}\n\n.alert {\n    margin-bottom: 20px;\n    padding: 20px;\n    color: white;\n    font-size: 1.5rem;\n}\n\n.closebtn {\n    margin-left: 15px;\n    color: white;\n    font-weight: bold;\n    float: right;\n    font-size: 1.5rem;\n    line-height: 20px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.closebtn:hover {\n    color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{title}}\n</h1>\n\n<div class=\"container\">\n    <div class=\"alert\" [class]=\"success ? 'alert success': 'alert danger'\" [style.display]=\"showAlert ? 'block' : 'none'\">\n        <span class=\"closebtn\" (click)=\"showAlert = false;\">&times;</span> {{message}}\n    </div>\n    <div class=\"file-container\">\n        <input type=\"file\" id=\"file\" #file (change)=\"readFile(file)\">\n        <input type=\"button\" class=\"danger\" value=\"clear JSON\" [disabled]=\"!isConverted\" (click)=\"clear(file)\">\n        <!-- <input type=\"button\" class=\"primary\" value=\"copy JSON\" [disabled]=\"!isConverted\" (click)=\"copy()\"> -->\n    </div>\n    <div class=\"json-container\">\n        <pre id=\"jsonViewer\" *ngIf=\"response\">{{response | json}}</pre>\n        <input id=\"hiddenTxt\" type=\"text\" style=\"display:none;\">\n    </div>\n</div>"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(_ElementRef) {
        this._ElementRef = _ElementRef;
        this.title = 'Angular 2/4 CSV to JSON converter';
        this.response = "Select the file to display JSON data...";
        this.showAlert = false;
        this.success = false;
        this.message = "JSON is copied on the clipboard!";
        this.isConverted = false;
    }
    AppComponent.prototype.readFile = function (fileInput) {
        var file = fileInput.files[0];
        var extension = file.name.split('.').pop();
        if (!extension || extension.toLowerCase() !== 'csv') {
            this.setLoader("Invalid file with extension '" + extension + "'", true, false);
            this.clear(fileInput);
            return;
        }
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = this.convertFile.bind(this);
    };
    AppComponent.prototype.convertFile = function (event) {
        var lines = event.target.result.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j] ? currentline[j].trim() : currentline[j];
            }
            result.push(obj);
        }
        this.isConverted = true;
        this.response = result;
        this.setLoader('File converted successfully!', true, true);
    };
    AppComponent.prototype.copy = function () {
        var json = this._ElementRef.nativeElement.querySelector('#jsonViewer').innerHTML;
        var el = this._ElementRef.nativeElement.querySelector('#hiddenTxt');
        el.value = json;
        el.select();
        document.execCommand("copy");
        this.setLoader('JSON is copied on the clipboard!', true, true);
    };
    AppComponent.prototype.clear = function (file) {
        file.value = "";
        this.response = "Select the file to display JSON data...";
        this.isConverted = false;
    };
    AppComponent.prototype.setLoader = function (message, showAlert, success) {
        this.message = message;
        this.showAlert = showAlert;
        this.success = success;
        if (showAlert) {
            setTimeout(function () {
                this.showAlert = false;
            }.bind(this), 5000);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map
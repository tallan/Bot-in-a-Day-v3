(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-information/contact-information.component */ "./src/app/contact-information/contact-information.component.ts");
/* harmony import */ var _demo_instructions_demo_instructions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-instructions/demo-instructions.component */ "./src/app/demo-instructions/demo-instructions.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/downloads/downloads.component.ts");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./references/references.component */ "./src/app/references/references.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'references', component: _references_references_component__WEBPACK_IMPORTED_MODULE_5__["ReferencesComponent"] },
    { path: 'downloads', component: _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_4__["DownloadsComponent"] },
    { path: 'contact', component: _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_2__["ContactInformationComponent"] },
    { path: 'instructions', component: _demo_instructions_demo_instructions_component__WEBPACK_IMPORTED_MODULE_3__["DemoInstructionsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-site-header></app-site-header>\n<div class=\"body-content\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-information/contact-information.component */ "./src/app/contact-information/contact-information.component.ts");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./references/references.component */ "./src/app/references/references.component.ts");
/* harmony import */ var _demo_instructions_demo_instructions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-instructions/demo-instructions.component */ "./src/app/demo-instructions/demo-instructions.component.ts");
/* harmony import */ var _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downloads/downloads.component */ "./src/app/downloads/downloads.component.ts");
/* harmony import */ var _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site-header/site-header.component */ "./src/app/site-header/site-header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _contact_information_contact_information_component__WEBPACK_IMPORTED_MODULE_4__["ContactInformationComponent"],
                _references_references_component__WEBPACK_IMPORTED_MODULE_5__["ReferencesComponent"],
                _demo_instructions_demo_instructions_component__WEBPACK_IMPORTED_MODULE_6__["DemoInstructionsComponent"],
                _downloads_downloads_component__WEBPACK_IMPORTED_MODULE_7__["DownloadsComponent"],
                _site_header_site_header_component__WEBPACK_IMPORTED_MODULE_8__["SiteHeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-information/contact-information.component.html":
/*!************************************************************************!*\
  !*** ./src/app/contact-information/contact-information.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-sm-12 col-lg-6\" *ngFor=\"let contact of contacts\">\n      <div class=\"card m-2\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{contact.name}}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{contact.title}}</h6>\n            <p class=\"card-text\">{{contact.description}}</p>\n            <a *ngFor=\"let link of contact.links\" [href]=\"link.link\" class=\"card-link\" target=\"_blank\" [title]=\"link.tooltip\">\n              <i [class]=\"link.icon\" style=\"font-size:2em;\"></i>  \n            </a>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact-information/contact-information.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/contact-information/contact-information.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-information/contact-information.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/contact-information/contact-information.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInformationComponent", function() { return ContactInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_items_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration-items/contact */ "./src/configuration-items/contact.ts");
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free-brands */ "./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid */ "./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactInformationComponent = /** @class */ (function () {
    function ContactInformationComponent() {
        this.contacts = _configuration_items_contact__WEBPACK_IMPORTED_MODULE_1__["contact"];
    }
    ContactInformationComponent.prototype.ngOnInit = function () {
        console.log(this.contacts);
        _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_2__["default"].library.add(_fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faTwitterSquare"], _fortawesome_fontawesome_free_brands__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"], _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_4__["faEnvelopeSquare"]);
    };
    ContactInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-information',
            template: __webpack_require__(/*! ./contact-information.component.html */ "./src/app/contact-information/contact-information.component.html"),
            styles: [__webpack_require__(/*! ./contact-information.component.scss */ "./src/app/contact-information/contact-information.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactInformationComponent);
    return ContactInformationComponent;
}());



/***/ }),

/***/ "./src/app/demo-instructions/demo-instructions.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demo-instructions/demo-instructions.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-3\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-sm-12 col-lg-10\">\n      <div class=\"card \">\n        <div class=\"card-header\">\n          <ul class=\"nav nav-tabs card-header-tabs nav-fill\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\" *ngFor=\"let demo of demoInstructions\">\n              <a class=\"nav-link\" [ngClass]=\"{'active': demo == this.activeDemo }\" (click)=\"activateTab(demo)\">{{demo.tabName}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane active\">\n                <div class=\"py-1\">\n                    <div class=\"px-3 py-0\">\n                      <h4>{{this.activeDemo.name}}</h4>\n                      <p *ngFor=\"let sentence of this.activeDemo.description\">{{sentence}}</p>\n                    </div>\n                  </div>\n              <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\" *ngFor=\"let step of this.activeDemo.steps\">\n                  <div class=\"d-flex w-100 justify-content-between\">\n                    <h5 class=\"mb-1\">{{step.name}}</h5>\n                    <div>\n                      <small *ngIf=\"step.fileRef\">File(s): {{step.fileRef}}</small>\n                      <small *ngIf=\"step.fileRef && step.lineRef\"> | </small>\n                      <small *ngIf=\"step.lineRef\">Line(s): {{step.lineRef}}</small>\n                    </div>\n                  </div>\n                  <p class=\"mb-1\">{{step.description}}</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/demo-instructions/demo-instructions.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demo-instructions/demo-instructions.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo-instructions/demo-instructions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo-instructions/demo-instructions.component.ts ***!
  \******************************************************************/
/*! exports provided: DemoInstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoInstructionsComponent", function() { return DemoInstructionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_items_demo_instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration-items/demo-instructions */ "./src/configuration-items/demo-instructions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoInstructionsComponent = /** @class */ (function () {
    function DemoInstructionsComponent() {
        this.demoInstructions = _configuration_items_demo_instructions__WEBPACK_IMPORTED_MODULE_1__["demoInstructions"];
    }
    DemoInstructionsComponent.prototype.ngOnInit = function () {
        if (this.activeDemo == null) {
            this.activeDemo = _configuration_items_demo_instructions__WEBPACK_IMPORTED_MODULE_1__["demoInstructions"][0];
        }
    };
    DemoInstructionsComponent.prototype.activateTab = function (demo) {
        this.activeDemo = demo;
    };
    DemoInstructionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-instructions',
            template: __webpack_require__(/*! ./demo-instructions.component.html */ "./src/app/demo-instructions/demo-instructions.component.html"),
            styles: [__webpack_require__(/*! ./demo-instructions.component.scss */ "./src/app/demo-instructions/demo-instructions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoInstructionsComponent);
    return DemoInstructionsComponent;
}());



/***/ }),

/***/ "./src/app/downloads/downloads.component.html":
/*!****************************************************!*\
  !*** ./src/app/downloads/downloads.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-lg-10\" *ngFor=\"let download of downloads\">\n        <div class=\"card m-2\">            \n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{download.name}}</h5>\n              <p class=\"card-text\">{{download.description}}</p> \n              <a [href]=\"download.link\" class=\"btn btn-primary\" target=\"_blank\">{{download.action}}</a>\n            </div>           \n          </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/downloads/downloads.component.scss":
/*!****************************************************!*\
  !*** ./src/app/downloads/downloads.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/downloads/downloads.component.ts":
/*!**************************************************!*\
  !*** ./src/app/downloads/downloads.component.ts ***!
  \**************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_items_downloads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration-items/downloads */ "./src/configuration-items/downloads.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent() {
        this.downloads = _configuration_items_downloads__WEBPACK_IMPORTED_MODULE_1__["downloads"];
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    DownloadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! ./downloads.component.html */ "./src/app/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.scss */ "./src/app/downloads/downloads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/references/references.component.html":
/*!******************************************************!*\
  !*** ./src/app/references/references.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  references works!\n</p>\n"

/***/ }),

/***/ "./src/app/references/references.component.scss":
/*!******************************************************!*\
  !*** ./src/app/references/references.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/references/references.component.ts":
/*!****************************************************!*\
  !*** ./src/app/references/references.component.ts ***!
  \****************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferencesComponent = /** @class */ (function () {
    function ReferencesComponent() {
    }
    ReferencesComponent.prototype.ngOnInit = function () {
    };
    ReferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-references',
            template: __webpack_require__(/*! ./references.component.html */ "./src/app/references/references.component.html"),
            styles: [__webpack_require__(/*! ./references.component.scss */ "./src/app/references/references.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferencesComponent);
    return ReferencesComponent;
}());



/***/ }),

/***/ "./src/app/site-header/site-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/site-header/site-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"\">{{appName}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"contact\" [routerLinkActive]=\"['active']\">Contact Information</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"downloads\" [routerLinkActive]=\"['active']\">Downloads</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"references\" [routerLinkActive]=\"['active']\">Reference Materials</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"instructions\" [routerLinkActive]=\"['active']\">Demo Instructions</a>\n      </li>\n    </ul>\n  </div>\n</nav> "

/***/ }),

/***/ "./src/app/site-header/site-header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/site-header/site-header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/site-header/site-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/site-header/site-header.component.ts ***!
  \******************************************************/
/*! exports provided: SiteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteHeaderComponent", function() { return SiteHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent() {
        this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].applicationName;
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-header',
            template: __webpack_require__(/*! ./site-header.component.html */ "./src/app/site-header/site-header.component.html"),
            styles: [__webpack_require__(/*! ./site-header.component.scss */ "./src/app/site-header/site-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "./src/configuration-items/contact.ts":
/*!********************************************!*\
  !*** ./src/configuration-items/contact.ts ***!
  \********************************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
var contact = [
    {
        name: 'David Ruhlemann',
        title: 'Senior Developer',
        description: 'likes to write stories for robots',
        links: [
            {
                icon: 'fas fa-envelope-square',
                link: 'mailto:david.ruhlemann@tallan.com',
                tooltip: 'Email'
            },
            {
                icon: 'fab fa-linkedin',
                link: 'https://www.linkedin.com/in/david-ruhlemann-a8aba0b0/',
                tooltip: 'LinkedIn'
            }
        ]
    },
    {
        name: 'Matt Kruzcek',
        title: 'VP of Mobile, Web, and AI',
        description: 'Hides dad jokes in his code comments',
        links: [
            {
                icon: 'fas fa-envelope-square',
                link: 'mailto:matthew.kruczek@tallan.com',
                tooltip: 'Email'
            },
            {
                icon: 'fab fa-linkedin',
                link: 'https://www.linkedin.com/in/david-ruhlemann-a8aba0b0/',
                tooltip: 'LinkedIn'
            },
            {
                icon: 'fab fa-twitter-square',
                link: 'https://twitter.com/mckruz?lang=en',
                tooltip: 'Twitter'
            }
        ]
    }
];


/***/ }),

/***/ "./src/configuration-items/demo-instructions.ts":
/*!******************************************************!*\
  !*** ./src/configuration-items/demo-instructions.ts ***!
  \******************************************************/
/*! exports provided: demoInstructions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoInstructions", function() { return demoInstructions; });
var demoInstructions = [
    {
        tabName: 'Demo 1',
        name: 'Bot Template to Greeting Bot',
        description: [
            'This project is a modified version of the Bot Application project template. The behavior is controlled by changing the DemoStep enum in the Constants.cs file.',
            'We will be turning the default template into a bot which will greet the user and maintain their name in this demo.'
        ],
        steps: [
            {
                name: 'Step 1: Learning basic functionality',
                description: 'It is important to remember that at it\'s core a bot is just an API. Looking at the MessagesController you can see that there is a single ' +
                    'available action named "Post" which recieves an activity.  This is the JSON coming from the linked channel.  Within this activity lies a large ' +
                    'amount of valuable data; Most notably the activity type.  Post has a direct action for messages, and then fields all the other types of activities ' +
                    'to another method "HandleSystemMessage", we will not be making changes there, but be aware that these interaction methods are available to implement if need arises.',
                screenshotLink: '',
                lineRef: '21, 52-80',
                fileRef: 'MessagesController.cs'
            },
            {
                name: 'Step 2: The Dialog',
                description: 'If you follow the logic in the MessagesController for ActivityType.Message it constructs a new RootDialog.',
                screenshotLink: '',
                lineRef: '9-30',
                fileRef: 'RootDialog.cs'
            },
            {
                name: 'Step 3',
                description: 'do something more',
                screenshotLink: '',
                lineRef: 234,
                fileRef: 'message'
            }
        ]
    },
    {
        tabName: 'Demo 2',
        name: 'Greeting Bot to Basic Multifunction Bot',
        steps: [
            {
                name: 'Step 1',
                description: 'do something',
                screenshotLink: ''
            },
            {
                name: 'Step 2',
                description: 'do something else',
                screenshotLink: ''
            },
            {
                name: 'Step 3',
                description: 'do something more',
                screenshotLink: ''
            }
        ]
    }
];


/***/ }),

/***/ "./src/configuration-items/downloads.ts":
/*!**********************************************!*\
  !*** ./src/configuration-items/downloads.ts ***!
  \**********************************************/
/*! exports provided: downloads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloads", function() { return downloads; });
var downloads = [
    {
        name: 'Bot Emulator',
        link: 'https://github.com/Microsoft/BotFramework-Emulator/releases/download/v3.5.36/botframework-emulator-Setup-3.5.36.exe',
        description: 'This is a quick download of the latest stable Bot Emulator v3.5.36',
        action: 'Download'
    },
    {
        name: 'All Versions of the Emulator',
        link: 'https://github.com/Microsoft/BotFramework-Emulator/releases',
        description: 'This is a link to the emulator GitHub for all releases so you can determine your desired version.',
        action: 'Visit'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: downloads, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloads", function() { return downloads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var downloads = {};
var environment = {
    production: false,
    applicationName: 'Bot In A Day 2018'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\event-frontpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
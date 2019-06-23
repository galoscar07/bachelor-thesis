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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth-guard.service */ "./src/app/shared/auth-guard.service.ts");
/* harmony import */ var _forgotten_account_forgotten_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotten-account/forgotten-account.component */ "./src/app/forgotten-account/forgotten-account.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/password-reset/password-reset.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");









var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'home', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__["MainpageComponent"], canActivate: [_shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'forgotten-account', component: _forgotten_account_forgotten_account_component__WEBPACK_IMPORTED_MODULE_6__["ForgottenAccountComponent"] },
    { path: 'password-reset', component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"] },
    { path: 'registration-complete', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" type=\"text/css\">\n</head>\n\n<body>\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\n</body>\n\n</html>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth-guard.service */ "./src/app/shared/auth-guard.service.ts");
/* harmony import */ var _forgotten_account_forgotten_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgotten-account/forgotten-account.component */ "./src/app/forgotten-account/forgotten-account.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/password-reset/password-reset.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_11__["MainpageComponent"],
                _forgotten_account_forgotten_account_component__WEBPACK_IMPORTED_MODULE_16__["ForgottenAccountComponent"],
                _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_17__["PasswordResetComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            ],
            providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <p class=\"lead\">Sign up to our newsletter for the latest news</p>\n        <form class=\"form-inline\" [formGroup]=\"subscribeForm\" (ngSubmit)=\"onSubmitSubscribe($event)\">\n          <div class=\"form-group\">\n            <input\n              id=\"email-footer\" name=\"email-footer\"\n              formControlName=\"email-footer\"\n              type=\"text\" class=\"form-control\"\n              placeholder=\"Your e-mail here\"\n            >\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary ml-3\">\n            Subscribe </button>\n        </form>\n      </div>\n      <div class=\"col-4 col-md-1 align-self-center\"> <a href=\"#\">\n        <i class=\"fa fa-fw fa-facebook text-muted fa-2x\"></i>\n      </a> </div>\n      <div class=\"col-4 col-md-1 align-self-center\"> <a href=\"#\">\n        <i class=\"fa fa-fw fa-twitter text-muted fa-2x\"></i>\n      </a> </div>\n      <div class=\"col-4 col-md-1 align-self-center\"> <a href=\"#\">\n        <i class=\"fa fa-fw fa-instagram text-muted fa-2x\"></i>\n      </a> </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.subscribeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email-footer': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
    };
    FooterComponent.prototype.onSubmitSubscribe = function () {
        console.log(this.subscribeForm);
        this.subscribeForm.reset();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgotten-account/forgotten-account.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/forgotten-account/forgotten-account.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHRlbi1hY2NvdW50L2ZvcmdvdHRlbi1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotten-account/forgotten-account.component.html":
/*!********************************************************************!*\
  !*** ./src/app/forgotten-account/forgotten-account.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\" style=\"background-color: whitesmoke ;background-size:cover;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"bg-white p-5 mx-auto col-md-8 col-10\" style=\"opacity: 0.95\">\n        <h2 class=\"mb-1 text-center\">\n          <b *ngIf=\"emailHasBeenSend\">Email Sent!</b>\n        </h2>\n        <h4 *ngIf=\"emailHasBeenSend\" class=\"mb-3 text-center\" style=\"margin-top: 20px\">\n          <span class=\"text-muted\">An email with the reset password link was sent to the email address in your profile.\n            If you did not receive the email, verify that the user name is correct or contact the\n            system administrator.\n          </span>\n        </h4>\n        <h2 class=\"mb-1 text-center\">\n          <b *ngIf=\"!emailHasBeenSend\">Find Your Account</b>\n        </h2>\n        <h4 class=\"mb-3 text-center\" *ngIf=\"!emailHasBeenSend\">\n          Please enter your email address to send a reset password link for your account.\n        </h4>\n\n        <form\n          *ngIf=\"!emailHasBeenSend\"\n          [formGroup]=\"forgottenAccountForm\"\n          (ngSubmit)=\"onSubmitForgotten($event)\"\n        >\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"emailForgotten\">\n                E-mail:\n              </label>\n              <input\n                [ngStyle]=\"{'border': errors.email ? '1px solid red' : ''}\"\n                id=\"emailForgotten\" name=\"emailForgotten\"\n                formControlName=\"emailForgotten\"\n                class=\"form-control\" type=\"text\"\n                placeholder=\"e-mail\"\n              >\n              <span style=\"color: red\">{{errors.email}}</span>\n            </div>\n          <button type=\"submit\" class=\"btn btn-primary mt-4 btn-block pt-2\">\n            <h4><b>Send</b></h4>\n          </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forgotten-account/forgotten-account.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/forgotten-account/forgotten-account.component.ts ***!
  \******************************************************************/
/*! exports provided: ForgottenAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenAccountComponent", function() { return ForgottenAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ForgottenAccountComponent = /** @class */ (function () {
    function ForgottenAccountComponent(apiService, authService, router) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.errors = {
            email: null,
        };
        this.emailHasBeenSend = false;
    }
    ForgottenAccountComponent.prototype.ngOnInit = function () {
        this.forgottenAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailForgotten: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    };
    ForgottenAccountComponent.prototype.onSubmitForgotten = function () {
        var _this = this;
        var email = this.forgottenAccountForm.value.emailForgotten;
        this.apiService.postPasswordReset(email).subscribe(function (response) {
            if (response.detail === 'Password reset e-mail has been sent.') {
                _this.emailHasBeenSend = true;
            }
        }, (function (error1) {
            _this.errors = error1.error;
            _this.forgottenAccountForm.reset();
        }));
    };
    ForgottenAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotten-account',
            template: __webpack_require__(/*! ./forgotten-account.component.html */ "./src/app/forgotten-account/forgotten-account.component.html"),
            styles: [__webpack_require__(/*! ./forgotten-account.component.css */ "./src/app/forgotten-account/forgotten-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ForgottenAccountComponent);
    return ForgottenAccountComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n  <div style=\"margin-left: 50px\">\n    <a class=\"navbar-brand text-primary\" [routerLink]=\"'/'\" href=\"#\">\n      <i class=\"fa fa-paper-plane\"></i>\n      <b> studHelper<br></b>\n    </a>\n  </div>\n\n  <!--If the user is not authenticated then show the form for log in on the header-->\n  <form\n    *ngIf=\"!authService.isUserAuthenticated()\"\n    class=\"form-inline\"\n    [formGroup]=\"signinForm\"\n    (ngSubmit)=\"onSubmitSignin($event)\"\n  >\n    <div class=\"form-group\">\n      <a class=\"nav-link\" [routerLink]=\"'/forgotten-account'\" href=\"#\" >Forgotten account?</a>\n    </div>\n    <div class=\"form-group\" style=\"margin-right: 10px\">\n      <input\n        [ngStyle]=\"{'border': errors.email || errors.non_field_errors ? '1px solid red' : ''}\"\n        id=\"emailHeader\" name=\"emailHeader\"\n        formControlName=\"emailHeader\"\n        type=\"email\" class=\"form-control\"\n        placeholder=\"e-mail\">\n    </div>\n    <div class=\"form-group\" style=\"margin-right: 10px\">\n      <input\n        [ngStyle]=\"{'border': errors.password || errors.non_field_errors ? '1px solid red' : ''}\"\n        id=\"password\" name=\"password\"\n        formControlName=\"password\"\n        type=\"password\" class=\"form-control\"\n        placeholder=\"********\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary \">Log in</button>\n  </form>\n\n\n\n  <!--Else show the buttons for the site-->\n  <ul class=\"nav\" *ngIf=\"authService.isUserAuthenticated()\">\n    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a> </li>\n    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-cogs\"></i> Settings</a> </li>\n    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-file-text\"></i> Files</a> </li>\n    <button (click)=\"onLogoutClicked()\" class=\"btn btn-primary \">Log out</button>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiService, authService, router) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.errors = {
            username: null,
            password: null,
            non_field_errors: null,
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailHeader: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    HeaderComponent.prototype.onSubmitSignin = function () {
        var _this = this;
        var email = this.signinForm.value.emailHeader;
        var password = this.signinForm.value.password;
        this.apiService.postLogInUser(email, password).subscribe(function (response) {
            _this.authService.setTokenLocalStorage(response.key);
            _this.router.navigate(['/home']);
            _this.signinForm.reset();
        }, (function (error1) {
            _this.errors = error1.error;
            console.log(error1);
        }));
    };
    HeaderComponent.prototype.onLogoutClicked = function () {
        var _this = this;
        var token = this.authService.token;
        this.authService.deleteTokenFromLocalStorage();
        this.apiService.postLogOutUser(token).subscribe(function (response) {
            _this.router.navigate(['/']);
        }, (function (error1) {
            alert(error1);
        }));
        this.router.navigate(['/']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\" style=\"background-image: url('https://stud-help.herokuapp.com/static/assets/img/book-cover.jpg') ;background-size:cover;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"bg-white p-5 mx-auto col-md-8 col-10\" style=\"opacity: 0.95\">\n        <div *ngIf=\"signupFormSubmitted\">\n          <h2 class=\"mb-1 text-center\">\n          <b>Thank you!</b>\n        </h2>\n        <h4 class=\"mb-3 text-center\">\n          We've send a confirmation email to check the validity of the data you've entered. Please check your email and come back later!\n        </h4>\n        </div>\n\n        <div *ngIf=\"!signupFormSubmitted\">\n        <h2 class=\"mb-1 text-center\">\n          <b>Create an account!</b>\n        </h2>\n        <h4 class=\"mb-3 text-center\">\n          It is free and it will always be that way!\n        </h4>\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmitRegister($event)\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"firstName\">\n                First Name:\n              </label>\n              <input\n                [ngStyle]=\"{'border': errors.first_name ? '1px solid red' : ''}\"\n                id=\"firstName\" name=\"firstName\"\n                formControlName=\"firstName\"\n                class=\"form-control\" type=\"text\"\n                placeholder=\"first name\"\n              >\n              <span style=\"color: red\">{{errors.first_name}}</span>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"lastName\">\n                Last Name:\n              </label>\n              <input\n                [ngStyle]=\"{'border': errors.last_name ? '1px solid red' : ''}\"\n                id=\"lastName\" name=\"lastName\"\n                formControlName=\"lastName\"\n                class=\"form-control\"  type=\"text\"\n                placeholder=\"last name\">\n              <span style=\"color: red\" *ngFor=\"let error of errors.last_name\">{{error}}</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">\n              Username:\n            </label>\n            <input\n              [ngStyle]=\"{'border': errors.username ? '1px solid red' : ''}\"\n              id=\"username\" name=\"username\"\n              formControlName=\"username\"\n              class=\"form-control\" type=\"text\"\n              placeholder=\"username\">\n            <span style=\"color: red\" *ngFor=\"let error of errors.username\">{{error}}</span>\n          </div >\n          <div class=\"form-group\">\n            <label for=\"emailHomepage\">\n              E-mail:\n            </label>\n            <input\n              [ngStyle]=\"{'border': errors.email ? '1px solid red' : ''}\"\n              id=\"emailHomepage\" name=\"emailHomepage\"\n              formControlName=\"emailHomepage\"\n              class=\"form-control\" type=\"text\"\n              placeholder=\"e-mail\">\n            <span style=\"color: red\" *ngFor=\"let error of errors.email\">{{error}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordHomepage1\">\n              Password:\n            </label>\n            <input\n              [ngStyle]=\"{'border': errors.password1 ? '1px solid red' : ''}\"\n              id=\"passwordHomepage1\" name=\"passwordHomepage1\"\n              formControlName=\"passwordHomepage1\"\n              type=\"password\" class=\"form-control\"\n              placeholder=\"********\">\n            <span style=\"color: red\" *ngFor=\"let error of errors.password1\">{{error}}</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordHomepage2\">\n              Confirm password:\n            </label>\n            <input\n              [ngStyle]=\"{'border': errors.password2 ? '1px solid red' : ''}\"\n              id=\"passwordHomepage2\" name=\"passwordHomepage2\"\n              formControlName=\"passwordHomepage2\"\n              type=\"password\" class=\"form-control\"\n              placeholder=\"********\">\n            <span style=\"color: red\" *ngFor=\"let error of errors.password2\">{{error}}</span>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary mt-4 btn-block pt-2\">\n            <h4><b>Create</b></h4>\n          </button>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(apiService) {
        this.apiService = apiService;
        this.signupFormSubmitted = false;
        this.errors = {
            first_name: null,
            last_name: null,
            username: null,
            password1: null,
            password2: null,
            email: null,
        };
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            emailHomepage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            passwordHomepage1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            passwordHomepage2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    };
    HomepageComponent.prototype.onSubmitRegister = function () {
        var _this = this;
        var email = this.signupForm.value.emailHomepage;
        var firstName = this.signupForm.value.firstName;
        var lastName = this.signupForm.value.lastName;
        var username = this.signupForm.value.username;
        var password1 = this.signupForm.value.passwordHomepage1;
        var password2 = this.signupForm.value.passwordHomepage2;
        console.log(email, firstName, lastName, username, password1, password2);
        this.apiService.postRegisterUser(username, email, password1, password2, firstName, lastName).subscribe(function (response) {
            _this.signupFormSubmitted = true;
        }, (function (error1) {
            _this.errors = error1.error;
        }));
        this.signupForm.reset();
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mainpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/password-reset/password-reset.component.css":
/*!*************************************************************!*\
  !*** ./src/app/password-reset/password-reset.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/password-reset/password-reset.component.html":
/*!**************************************************************!*\
  !*** ./src/app/password-reset/password-reset.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\" style=\"background-color: whitesmoke ;background-size:cover;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"bg-white p-5 mx-auto col-md-8 col-10\" style=\"opacity: 0.95\">\n        <h2 class=\"mb-1 text-center\">\n          <b>You are almost done</b>\n        </h2>\n        <h4 class=\"mb-3 text-center\" *ngIf=\"!emailHasBeenSend\">\n          Reset your password\n        </h4>\n\n        <form\n          [formGroup]=\"passwordReset\"\n          (ngSubmit)=\"onSubmitPasswordReset($event)\"\n        >\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"password1Reset\">\n                Password:\n              </label>\n              <input\n                [ngStyle]=\"{'border': errors.new_password1 ? '1px solid red' : ''}\"\n                id=\"password1Reset\" name=\"password1Reset\"\n                formControlName=\"password1Reset\"\n                class=\"form-control\" type=\"password\"\n                placeholder=\"*******\"\n              >\n              <span style=\"color: red\">{{errors.new_password1}}</span>\n            </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"password2Reset\">\n                  Confirm Password:\n                </label>\n                <input\n                  [ngStyle]=\"{'border': errors.new_password2 ? '1px solid red' : ''}\"\n                  id=\"password2Reset\" name=\"password2Reset\"\n                  formControlName=\"password2Reset\"\n                  class=\"form-control\" type=\"password\"\n                  placeholder=\"*******\"\n                >\n              <span style=\"color: red\">{{errors.new_password2}}</span>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary mt-4 btn-block pt-2\">\n              <h4><b>Submit</b></h4>\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/password-reset/password-reset.component.ts":
/*!************************************************************!*\
  !*** ./src/app/password-reset/password-reset.component.ts ***!
  \************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(apiService, authService, router, route) {
        var _this = this;
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.errors = {
            new_password1: null,
            new_password2: null,
            token: null,
            uid: null,
        };
        this.route.queryParams.subscribe(function (params) {
            _this.uid = params.ui;
            _this.token = params.token;
        });
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        this.passwordReset = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password1Reset: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, []),
            password2Reset: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
    };
    PasswordResetComponent.prototype.onSubmitPasswordReset = function () {
        var _this = this;
        var password1 = this.passwordReset.value.password1Reset;
        var password2 = this.passwordReset.value.password2Reset;
        this.apiService.postNewPassword(password1, password2, this.uid, this.token).subscribe(function (response) {
            _this.router.navigate(['/']);
        }, (function (error1) {
            _this.errors = error1.error;
        }));
    };
    PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.css */ "./src/app/password-reset/password-reset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\" style=\"background-color: whitesmoke ;background-size:cover;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"bg-white p-5 mx-auto col-md-8 col-10\" style=\"opacity: 0.95\">\n        <h2 *ngIf=\"everythingWorkedOk\" class=\"mb-1 text-center\">\n          <b>You're done!</b>\n        </h2>\n        <h4 *ngIf=\"everythingWorkedOk\" class=\"mb-3 text-center\" style=\"margin-top: 20px\">\n          <span class=\"text-muted\">\n            The account was successfully created.\n          </span>\n        </h4>\n\n        <h2 *ngIf=\"!everythingWorkedOk\" class=\"mb-1 text-center\">\n          <b>Something went wrong!</b>\n        </h2>\n        <h4 *ngIf=\"!everythingWorkedOk\" class=\"mb-3 text-center\" style=\"margin-top: 20px\">\n          <span class=\"text-muted\">\n            Please contact us at stud.helper.email@gmail.com to solve the issue. Thank you!\n          </span>\n        </h4>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.token = null;
        this.everythingWorkedOk = true;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.token = params.token;
            _this.apiService.postRegistrationAccountConfirmEmail(_this.token).subscribe(function (response) {
                console.log(response);
            }, (function (error1) {
                _this.everythingWorkedOk = false;
                console.log(error1);
            }));
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiLink = 'http://stud-help.herokuapp.com/';
    }
    ApiService.prototype.postRegisterUser = function (username, email, password1, password2, firstName, lastName) {
        return this.http.post(this.apiLink + 'auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
            first_name: firstName,
            last_name: lastName
        });
    };
    ApiService.prototype.postLogInUser = function (email, password) {
        return this.http.post(this.apiLink + 'auth/login/', {
            email: email, password: password
        });
    };
    ApiService.prototype.postLogOutUser = function (token) {
        return this.http.post(this.apiLink + 'auth/logout/', {
            token: token,
        });
    };
    ApiService.prototype.postPasswordReset = function (email) {
        return this.http.post(this.apiLink + 'auth/password/reset/', {
            email: email,
        });
    };
    ApiService.prototype.postNewPassword = function (new_password1, new_password2, uid, token) {
        return this.http.post(this.apiLink + 'auth/password/reset/confirm/', {
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid,
            token: token,
        });
    };
    ApiService.prototype.postRegistrationAccountConfirmEmail = function (token) {
        return this.http.post(this.apiLink + 'auth/registration/account-confirm-email/' + token + '/', {});
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.token = null;
    }
    AuthService.prototype.setTokenLocalStorage = function (token) {
        localStorage.setItem('authToken', token);
        this.token = token;
    };
    AuthService.prototype.deleteTokenFromLocalStorage = function () {
        localStorage.removeItem('authToken');
        this.token = null;
    };
    AuthService.prototype.isUserAuthenticated = function () {
        if (this.token === null) {
            var token = localStorage.getItem('authToken');
            if (token === null) {
                return false;
            }
        }
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/galoscar/Documents/GitProjects/Thesis/heroku.studhelper/bachelor-thesis/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
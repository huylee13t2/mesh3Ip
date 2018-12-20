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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, afAuth, router) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (!user) {
                // this.router.navigate(['/login']);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-datetimepicker */ "./node_modules/angular2-datetimepicker/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/new-invoice/new-invoice.component */ "./src/app/pages/new-invoice/new-invoice.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _pages_export_invoice_export_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/export-invoice/export-invoice.component */ "./src/app/pages/export-invoice/export-invoice.component.ts");
/* harmony import */ var _pages_informations_informations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/informations/informations.component */ "./src/app/pages/informations/informations.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_lang_lang_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/lang/lang.service */ "./src/app/services/lang/lang.service.ts");
/* harmony import */ var _pages_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/email-verify/email-verify.component */ "./src/app/pages/email-verify/email-verify.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/billings-service/billings.service */ "./src/app/services/billings-service/billings.service.ts");
/* harmony import */ var _services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/payments-service/payments.service */ "./src/app/services/payments-service/payments.service.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _services_user_settings_service_user_settings_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/user-settings-service/user-settings.service */ "./src/app/services/user-settings-service/user-settings.service.ts");
/* harmony import */ var _directives_number_only_number_only_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/number-only/number-only.directive */ "./src/app/directives/number-only/number-only.directive.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _contents_home_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contents/home/home.component */ "./src/app/contents/home/home.component.ts");
/* harmony import */ var _contents_header_header_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contents/header/header.component */ "./src/app/contents/header/header.component.ts");
/* harmony import */ var _contents_footer_footer_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contents/footer/footer.component */ "./src/app/contents/footer/footer.component.ts");
/* harmony import */ var _contents_tos_tos_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./contents/tos/tos.component */ "./src/app/contents/tos/tos.component.ts");
/* harmony import */ var _contents_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./contents/disclaimer/disclaimer.component */ "./src/app/contents/disclaimer/disclaimer.component.ts");
/* harmony import */ var _contents_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./contents/pricing/pricing.component */ "./src/app/contents/pricing/pricing.component.ts");
/* harmony import */ var _contents_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./contents/privacy/privacy.component */ "./src/app/contents/privacy/privacy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AngularFireModule } from '@angular/fire';

// import { AngularFireStorageModule } from '@angular/fire/storage';






























// new page







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _pages_new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_13__["NewInvoiceComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"],
                _pages_export_invoice_export_invoice_component__WEBPACK_IMPORTED_MODULE_15__["ExportInvoiceComponent"],
                _pages_informations_informations_component__WEBPACK_IMPORTED_MODULE_16__["InformationsComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _pages_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_25__["EmailVerifyComponent"],
                _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_26__["ResetPasswordComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_29__["LoadingComponent"],
                _directives_number_only_number_only_directive__WEBPACK_IMPORTED_MODULE_31__["NumberOnlyDirective"],
                // new page
                _contents_header_header_component__WEBPACK_IMPORTED_MODULE_35__["HeaderCtnComponent"],
                _contents_footer_footer_component__WEBPACK_IMPORTED_MODULE_36__["FooterCtnComponent"],
                _contents_home_home_component__WEBPACK_IMPORTED_MODULE_34__["HomeCtnComponent"],
                _contents_tos_tos_component__WEBPACK_IMPORTED_MODULE_37__["TosComponent"],
                _contents_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_38__["DisclaimerComponent"],
                _contents_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_39__["PricingComponent"],
                _contents_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_40__["PrivacyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_23__["appRoutes"]),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_9__["AngularDateTimePickerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_32__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_33__["AngularFireStorageModule"],
            ],
            providers: [
                _services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                _services_lang_lang_service__WEBPACK_IMPORTED_MODULE_24__["LangService"],
                ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
                _services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_27__["BillingsService"],
                _services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_28__["PaymentsService"],
                _services_user_settings_service_user_settings_service__WEBPACK_IMPORTED_MODULE_30__["UserSettingsService"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/new-invoice/new-invoice.component */ "./src/app/pages/new-invoice/new-invoice.component.ts");
/* harmony import */ var _pages_export_invoice_export_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/export-invoice/export-invoice.component */ "./src/app/pages/export-invoice/export-invoice.component.ts");
/* harmony import */ var _pages_informations_informations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/informations/informations.component */ "./src/app/pages/informations/informations.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/email-verify/email-verify.component */ "./src/app/pages/email-verify/email-verify.component.ts");
/* harmony import */ var _guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/verify-email/verify-email.guard */ "./src/app/guards/verify-email/verify-email.guard.ts");
/* harmony import */ var _guards_register_guard_register_guard_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/register-guard/register-guard.guard */ "./src/app/guards/register-guard/register-guard.guard.ts");
/* harmony import */ var _guards_login_login_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/login/login.guard */ "./src/app/guards/login/login.guard.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _contents_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contents/home/home.component */ "./src/app/contents/home/home.component.ts");
/* harmony import */ var _contents_tos_tos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contents/tos/tos.component */ "./src/app/contents/tos/tos.component.ts");
/* harmony import */ var _contents_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contents/disclaimer/disclaimer.component */ "./src/app/contents/disclaimer/disclaimer.component.ts");
/* harmony import */ var _contents_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contents/pricing/pricing.component */ "./src/app/contents/pricing/pricing.component.ts");
/* harmony import */ var _contents_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contents/privacy/privacy.component */ "./src/app/contents/privacy/privacy.component.ts");












// new page





var appRoutes = [
    { path: '', component: _contents_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeCtnComponent"] },
    { path: 'disclaimer', component: _contents_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_14__["DisclaimerComponent"] },
    { path: 'pricing', component: _contents_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__["PricingComponent"] },
    { path: 'privacy', component: _contents_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyComponent"] },
    { path: 'tos', component: _contents_tos_tos_component__WEBPACK_IMPORTED_MODULE_13__["TosComponent"] },
    {
        path: 'dashboard',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
    {
        path: 'new',
        component: _pages_new_invoice_new_invoice_component__WEBPACK_IMPORTED_MODULE_1__["NewInvoiceComponent"],
    },
    {
        path: 'export/:id',
        component: _pages_export_invoice_export_invoice_component__WEBPACK_IMPORTED_MODULE_2__["ExportInvoiceComponent"]
    },
    {
        path: 'informations',
        component: _pages_informations_informations_component__WEBPACK_IMPORTED_MODULE_3__["InformationsComponent"],
    },
    {
        path: 'settings',
        component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"],
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        canActivate: [_guards_login_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]]
    },
    {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        canActivate: [_guards_register_guard_register_guard_guard__WEBPACK_IMPORTED_MODULE_9__["RegisterGuardGuard"]]
    },
    {
        path: 'email-verify',
        component: _pages_email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_7__["EmailVerifyComponent"],
        canActivate: [_guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_8__["VerifyEmailGuard"]]
    }, {
        path: 'reset-password',
        component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"],
        canActivate: [_guards_register_guard_register_guard_guard__WEBPACK_IMPORTED_MODULE_9__["RegisterGuardGuard"]]
    }
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 copy-r\">\n  <p>About arttime</p>\n</div>\n<div class=\"col-md-6 copy-l\">\n  <p>All Rights Reserved copy arttime © 2018</p>\n</div>\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-footer]',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/loading/loading.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/loading/loading.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"load-page-in relative-load-page\">\n  <div class='uil-ripple-css' style='transform:scale(0.6);'>\n    <div></div>\n    <div></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
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

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-loading]',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar\">\n  <div class=\"clearfix \">\n    <div class=\"head-logo\">\n      <a routerLink=\"/dashboard\" class=\"camp-logo\"><img src=\"/assets/images/logo.svg\" alt=\"الشعار\" title=\"الرئيسية\"></a>\n    </div>\n    <!-- icon-right -->\n    <div class=\"icon-right\">\n      <ul>\n        <li>\n          <i class=\"fa fa-bars fa-top-bar navbar-toggle-c navbar-toggle-c-single\"></i>\n        </li>\n      </ul>\n    </div>\n    <!-- icon-right -->\n    <div class=\"icon-left\">\n      <ul>\n        <li class=\"dropdown notifications-menu\">\n          <a class=\"dropdown-toggle notifications-menu-a\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fa fa-top-bar fa-bell-o\"></i>\n            <span class=\"label label-danger\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">لديك 10 اشعارات جديدة</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a>\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into\n                    the\n                    page and may cause design problems\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <i class=\"fa fa-user text-red\"></i> You changed your username\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a>View all</a></li>\n          </ul>\n        </li>\n        <li class=\"dropdown notifications-menu\">\n          <a class=\"dropdown-toggle notifications-menu-a avatar-user\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <span> {{user.user_name}} </span><img src=\"/assets/images/user.png\" alt=\"\">\n          </a>\n          <ul class=\"dropdown-menu\" style=\"width: 190px;top: 60px;\"> \n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a (click)=\"signout($event)\">\n                    <i class=\"fa fa-sign-out\"></i> تسجيل الخروج\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n      </ul>\n    </div>\n    <!-- icon-left -->\n  </div>\n  <!--container-->\n</div>\n<!--topbar-->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.user = {};
        this.user = this.cookieService.getAll();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        $('.carousel').carousel();
        $('[data-toggle="tooltip"]').tooltip();
        /* ******* */
        $('.datetimepicker3').each(function () {
            $('.datetimepicker3').datetimepicker({
                format: 'LT'
            });
        });
        $('.datetimepicker4').each(function () {
            $('.datetimepicker4').datetimepicker({
                format: 'l'
            });
        });
        /* ******** */
        $('#Invoices_popup').on('shown.bs.modal', function (e) {
            var window_Invoices_popup_left = $('.Invoices_popup_left').innerHeight();
            $(".Invoices_popup_right_row_in").css('min-height', window_Invoices_popup_left);
        });
        /******** */
        $('.selectpicker').selectpicker({
            countSelectedText: 'btn df fdefault',
            size: 8
        });
        /****** */
        var window_height = $(window).innerHeight();
        var window_height_footer = $('#footer').height();
        $(".content-wrapper").css('min-height', window_height - window_height_footer);
        /********* */
        var window_width = $(window).width();
        $(".navbar-toggle-c-single").click(function () {
            if (window_width >= 768) {
                $("body").toggleClass('sidebar-mini');
                $(".head-logo").toggle();
            }
            else {
                $(".sidebar").toggle();
            }
        });
    };
    NavbarComponent.prototype.signout = function (e) {
        var _this = this;
        e.preventDefault();
        this.authService.doLogout().then(function (res) {
            _this.router.navigate(['/login']);
        }).catch(function (err) {
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-navbar]',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- menu -->\n  <div id=\"MainMenu\">\n    <div class=\"list-group panel\">\n      <ul>\n        <li>\n          <a routerLink=\"/dashboard\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"list-group-item collapsed\">\n            <i class=\"fa fa-tachometer Menu-icon\"></i>\n            <span>لوحة التحكم </span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/informations\" class=\"list-group-item collapsed\" routerLinkActive=\"active\">\n            <i class=\"fa fa-credit-card Menu-icon\"></i>\n            <span> المدفوعات </span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/new\" class=\"list-group-item collapsed\" routerLinkActive=\"active\">\n            <i class=\"fa fa-file-text Menu-icon\"></i>\n            <span> اضافة فاتورة جديدة </span>\n          </a>\n        </li>\n        <!-- <li>\n            <a href=\"\" class=\"list-group-item collapsed\" >\n              <i class=\"fa fa-area-chart Menu-icon\"></i>\n              <span>  التقارير  </span>\n            </a>\n          </li> -->\n        <li>\n          <a routerLink=\"/settings\" class=\"list-group-item collapsed\" routerLinkActive=\"active\">\n            <i class=\"fa fa-female Menu-icon\"></i>\n            <span> الاعدادت </span>\n          </a>\n        </li>\n        <!-- <li>\n            <a href=\"#demo2\" class=\"list-group-item  collapsed\" data-toggle=\"collapse\" data-parent=\"#MainMenu\">\n              <i class=\"fa fa-female Menu-icon\"></i>\n              <span>  الاعدادت  </span>\n              <i class=\"fa fa-caret-down\"></i>\n            </a>\n                <div class=\"collapse  collapsemain \" id=\"demo2\">\n                  <a href=\"\" class=\"list-group-item\">  اعدادت عامة  </a>\n                  <a href=\"\" class=\"list-group-item\"> اعدادت خاصة  </a>\n                </div>\n          </li> -->\n      </ul>\n    </div>\n    <!-- list-group panel -->\n  </div>\n  <!-- MainMenu -->\n "

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-sidebar]',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/contents/disclaimer/disclaimer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/contents/disclaimer/disclaimer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-ctn></app-header-ctn>\n<div class=\"ctnPage\">\n\t<section class=\"privacy-top\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-md-offset-4 text-center  \">\n\t\t\t\t\t<div class=\"section-title btn-link-blue\">\n\t\t\t\t\t\t<h2 class=\" btn-link-blue\"> وثائق قانونية </h2>\n\t\t\t\t\t\t<h3 class=\" \">تم تحديث جميع الوثائق  </h3>\n\t\t\t\t\t\t<h3 class=\" \"> في 21 أيار 2016 </h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"box-head\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li  class=\"active\"><a routerLink=\"/disclaimer\"> <span> إخلاء المسئولية  </span></a></li>\n\t\t\t\t\t<li  class=\"\"><a routerLink=\"/tos\"> <span> شروط الخدمة </span></a></li>\n\t\t\t\t\t<li  class=\"\"><a routerLink=\"/privacy\"> <span>سياسة الخصوصية</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- home-about -->\n\n\t<section class=\"privacy-main\">\n\t\t<div class=\"container \">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t\t<div class=\"documents__content\">\n\t\t\t\t\t\t<h3>١. المعلومات</h3>\n\t\t\t\t\t\t<p>كيف يتعامل مستقل مع المعلومات التي تزودنا بها؟ يلتزم موقع مستقل بتأمين خصوصيتك حين تزور موقعنا وتتواصل معنا الكترونياً. هذه الصفحة توضح الوجه الذي سيتم عبره استخدام أي معلومات شخصية تزودنا بها خلال تواجدك في موقعنا. انتفاء المسؤولية القانونية يقر المُستخدِم بأنه المسؤول الوحيد عن طبيعة الاستخدام الذي يحدده للموقع الإلكتروني مستقل، وتخلي إدارة موقع مستقل طرفها، إلى أقصى مدى يجيزه القانون، من كامل المسؤولية عن أية خسائر أو أضرار أو نفقات أو مصاريف يتكبدها المُستخدِم أو يتعرض لها هو أو أي طرف آخر من جراء استخدام الموقع الإلكتروني مستقل أو العجز عن استخدامه. حالات انقطاع الخدمة والسهو والخطأ في الموقع الإلكتروني مستقل تبذل إدارة الموقع قصارى جهدها للحرص والحفاظ على استمرار عمل الموقع الإلكتروني بدون مشاكل، رغم ذلك قد تقع في أي وقت أخطاء وحالات سهو وانقطاع للخدمة وتأخير لها، وفي مثل هذه الحالات سنتوقع من المستخدمين الصبر حتى تعود الخدمة إلى معدلها الطبيعي. حساب المشترك وكلمة السر وأمن المعلومات يختار المشترك كلمة سر / مرور لحسابه، وسيُدخل عنوانا\n\t\t\t\t\t\t\t<a href=\"/contact\">https://resume.io/contact</a> or by mail addressed to: \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"documents__bottom\">\n\t\t\t\t\t\t\t<div class=\"documents__bottom-address\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"documents__bottom-pin\">\n\t\t\t\t\t\t\t\t\t<!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->\n\t\t\t\t\t\t\t\t\t<title>Icons/ Default/ Pin</title>\n\t\t\t\t\t\t\t\t\t<desc>Created with Sketch.</desc>\n\t\t\t\t\t\t\t\t\t<defs></defs>\n\t\t\t\t\t\t\t\t\t<g id=\"Icons/-Default/-Pin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t<path d=\"M7.92325987,14.4023311 C6.74039163,13.3064252 6,11.7396764 6,10 C6,6.6862915 8.6862915,4 12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.7155806 17.2799763,13.2629907 16.1256355,14.3565236 L12.3183103,19.1101916 C12.2999388,19.1331295 12.2790953,19.153973 12.2561573,19.1723445 C12.0837303,19.3104455 11.8319976,19.2826186 11.6938967,19.1101916 L7.92325987,14.4023311 Z M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z\" id=\"Pin\" fill=\"#2196F3\"></path>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\tشركة الفن للإتصالات و تقنية المعلومات <br>حي الملك فهد ، شارع حائل \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"documents__bottom-updated\">تحديث نص الخصوصية بتاريخ<br>on May 21, 2016</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"clearfix\"></div>\n\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- pricing-main -->\n</div>\n<app-footer-ctn></app-footer-ctn>"

/***/ }),

/***/ "./src/app/contents/disclaimer/disclaimer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/contents/disclaimer/disclaimer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privacy-top {\n  background: #f2f5fa;\n  padding: 50px 0 0 0; }\n\n.privacy-main {\n  background: #fff;\n  padding: 50px 0; }\n\n.box-head {\n  text-align: center;\n  margin-top: 30px; }\n\n.box-head .nav-tabs {\n  border: 0 !important; }\n\n.box-head .nav-tabs {\n  text-align: center; }\n\n.box-head .nav-tabs li {\n  display: inline-block !important;\n  float: none; }\n\n.box-head .nav-tabs a {\n  color: #98a1b3 !important;\n  padding: 15px 20px;\n  border: 0 !important;\n  background: none !important;\n  border-bottom: 2px solid #f7f7f9 !important;\n  margin-bottom: -1px !important;\n  min-width: 250px; }\n\n.box-head .nav-tabs a {\n  color: #98a1b3 !important;\n  padding: 15px 20px;\n  border: 0 !important;\n  background: none !important;\n  border-bottom: 2px solid #f7f7f9 !important;\n  margin-bottom: -1px !important;\n  min-width: 250px; }\n\nli.active a {\n  border: 0 !important;\n  color: #333 !important;\n  background: #fff !important;\n  margin: 0; }\n\n.box-head .nav-tabs li.active a {\n  border: 0 !important;\n  color: #333 !important;\n  background: #fff !important;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/contents/disclaimer/disclaimer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/contents/disclaimer/disclaimer.component.ts ***!
  \*************************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
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

var DisclaimerComponent = /** @class */ (function () {
    function DisclaimerComponent() {
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
    };
    DisclaimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disclaimer',
            template: __webpack_require__(/*! ./disclaimer.component.html */ "./src/app/contents/disclaimer/disclaimer.component.html"),
            styles: [__webpack_require__(/*! ./disclaimer.component.scss */ "./src/app/contents/disclaimer/disclaimer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DisclaimerComponent);
    return DisclaimerComponent;
}());



/***/ }),

/***/ "./src/app/contents/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/contents/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer-con\" class=\"footerCtn\">\n\t<div id=\"footer-container\">\n\t\t<div class=\"footer-top\">\n\t\t\t<div class=\"container  \"><!----><!-- IF is fixed run row-->\n\t\t\t\t<div class=\"col-sm-6 col-md-2 col-xs-12  \">\n\t\t\t\t\t<div id=\"widget\" class=\"widget    \">\n\t\t\t\t\t\t<div class=\"widget-head\">\n\t\t\t\t\t\t\t<h4>  الروابط السريعة </h4>\n\t\t\t\t\t\t</div><!--widget-head-->\n\t\t\t\t\t\t<div class=\"widget-content-footer footer-link\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> اشهر البلدان</a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\">أشهر المدن </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> المطارات الرائجة </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> كل البلدان </a> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!--widget-content-footer-->\n\t\t\t\t\t</div><!--widget-->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-sm-6 -->\n\t\t\t\t<div class=\"col-sm-6 col-md-2 col-xs-12  \">\n\t\t\t\t\t<div id=\"widget\" class=\"widget    \">\n\t\t\t\t\t\t<div class=\"widget-head\">\n\t\t\t\t\t\t\t<h4>  الروابط السريعة </h4>\n\t\t\t\t\t\t</div><!--widget-head-->\n\t\t\t\t\t\t<div class=\"widget-content-footer footer-link\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> اشهر البلدان</a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\">أشهر المدن </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> المطارات الرائجة </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> كل البلدان </a> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!--widget-content-footer-->\n\t\t\t\t\t</div><!--widget-->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-sm-6 -->\n\t\t\t\t<div class=\"col-sm-6 col-md-2 col-xs-12  \">\n\t\t\t\t\t<div id=\"widget\" class=\"widget    \">\n\t\t\t\t\t\t<div class=\"widget-head\">\n\t\t\t\t\t\t\t<h4> المساعدة و الاستعلامات  </h4>\n\t\t\t\t\t\t</div><!--widget-head-->\n\t\t\t\t\t\t<div class=\"widget-content-footer footer-link\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> اشهر البلدان</a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\">أشهر المدن </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> المطارات الرائجة </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> كل البلدان </a> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!--widget-content-footer-->\n\t\t\t\t\t</div><!--widget-->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-sm-6 -->\n\t\t\t\t<div class=\"col-sm-6 col-md-2 col-xs-12  \">\n\t\t\t\t\t<div id=\"widget\" class=\"widget    \">\n\t\t\t\t\t\t<div class=\"widget-head\">\n\t\t\t\t\t\t\t<h4>الشروط و الاحكام العامة </h4>\n\t\t\t\t\t\t</div><!--widget-head-->\n\t\t\t\t\t\t<div class=\"widget-content-footer footer-link\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> اشهر البلدان</a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\">أشهر المدن </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> المطارات الرائجة </a> </li>\n\t\t\t\t\t\t\t\t<li> <a href=\"#\"> كل البلدان </a> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!--widget-content-footer-->\n\t\t\t\t\t</div><!--widget-->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-sm-6 -->\n\n\t\t\t\t<div class=\"col-sm-12  col-md-3 col-xs-12  \">\n\t\t\t\t\t<div id=\"widget\" class=\"widget    \">\n\t\t\t\t\t\t<div class=\"widget-head\">\n\t\t\t\t\t\t\t<h4>  راســـلنا</h4>\n\t\t\t\t\t\t</div><!--widget-head-->\n\t\t\t\t\t\t<div class=\"widget-content-footer\">\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t<div class=\"  con-det con-det2\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>    حي الروابي - شارع عبدالله السويدي بجوار جامع حمزة بن عبدالمطلب رضي الله عنه  </li>\n\t\t\t\t\t\t\t\t\t<li>  123456 </li>\n\t\t\t\t\t\t\t\t\t<li>     info@resume.com </li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div><!--con-det-->\n\t\t\t\t\t\t\t<div class=\" shre-top shre-top-foot \">\n\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"facebook\"  >\n\t\t\t\t\t\t\t\t\t<div class=\"footer_social_button footer_social_button_facebook\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"footer__social-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"M9.7 6.5V9H8v3h1.7v9h3.6v-9h2.4l.3-3h-2.7V6.9c0-.3.4-.7.8-.7H16V3h-2.6C9.6 3 9.7 6 9.7 6.5z\"></path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"twitter\"  >\n\t\t\t\t\t\t\t\t\t<div class=\"footer_social_button footer_social_button_twitter\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" class=\"footer__social-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"M22,6.65726165 C21.3376575,6.93834507 20.6260261,7.12834723 19.8790276,7.21377587 C20.6414245,6.7763705 21.2269859,6.08375592 21.502751,5.25840563 C20.7891156,5.66347665 19.998875,5.95758129 19.1576579,6.11605662 C18.4840655,5.42916196 17.5242666,5 16.4620928,5 C14.4226476,5 12.7692172,6.58236439 12.7692172,8.53420174 C12.7692172,8.81121392 12.8018773,9.08095845 12.8648421,9.3396669 C9.79570743,9.19222764 7.07458384,7.78519551 5.2532124,5.64685525 C4.9353302,6.16884809 4.75318603,6.77596674 4.75318603,7.4236968 C4.75318603,8.64991228 5.40512226,9.7317167 6.39603438,10.3655171 C5.7906801,10.3471461 5.22125543,10.188166 4.72340874,9.92343483 C4.72305718,9.93817203 4.72305718,9.95297652 4.72305718,9.96788195 C4.72305718,11.6802903 5.99602735,13.1087217 7.68535218,13.4334783 C7.37552075,13.5141964 7.04923623,13.5575332 6.71244001,13.5575332 C6.47446782,13.5575332 6.24314015,13.5353265 6.01761325,13.4940085 C6.48758108,14.8980797 7.85135967,15.9200606 9.4673487,15.9484919 C8.20348398,16.8965176 6.61115506,17.4614771 4.88094359,17.4614771 C4.58285433,17.4614771 4.2889135,17.4447884 4,17.411983 C5.63427025,18.4148862 7.5754188,19 9.66088347,19 C16.4534444,19 20.1679411,13.6144632 20.1679411,8.94398327 C20.1679411,8.79075681 20.1642848,8.63833786 20.1572184,8.48672643 C20.8788342,7.98845442 21.5049307,7.36599293 22,6.65726165 Z\"></path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"google\"  >\n\t\t\t\t\t\t\t\t\t<div class=\"footer_social_button footer_social_button_google\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"footer__social-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"M7.61736571,10.0173745 L7.61736571,12.988417 C7.61736571,12.988417 10.5430464,12.9826255 11.7380427,12.9826255 C11.0905077,14.9054054 10.0897719,15.953668 7.61736571,15.953668 C5.11552612,15.953668 3.16703458,13.96139 3.16703458,11.5 C3.16703458,9.03861004 5.1214128,7.04633205 7.61736571,7.04633205 C8.94186902,7.04633205 9.79543782,7.503861 10.5783664,8.14092664 C11.2082414,7.52123552 11.1552612,7.43436293 12.7505519,5.95173745 C11.3966152,4.74131274 9.59529065,4 7.62325239,4 C3.4142752,4 0,7.35907336 0,11.5 C0,15.6409266 3.4142752,19 7.62325239,19 C13.9161148,19 15.4525386,13.6081081 14.9403974,10.0173745 C13.451067,10.0173745 7.61736571,10.0173745 7.61736571,10.0173745 Z M21.5796748,10.9203252 L21.5796748,8.5 L19.498374,8.5 L19.498374,10.9203252 L17,10.9203252 L17,13.001626 L19.498374,13.001626 L19.498374,15.5 L21.5796748,15.5 L21.5796748,13.001626 L24,13.001626 L24,10.9203252 L21.5796748,10.9203252 Z\" fill-rule=\"nonzero\"></path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"linkedin\"  >\n\t\t\t\t\t\t\t\t\t<div class=\"footer_social_button footer_social_button_linkedin\">\n\t\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"footer__social-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<g transform=\"translate(3.000000, 2.000000)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M4.08623369,5.58814247 L4.08623369,17.1801163 L0.228138734,17.1801163 L0.228138734,5.58814247 L4.08623369,5.58814247 Z M4.34033757,2.0022773 C4.34033757,3.11532037 3.50251904,4.00593948 2.15726326,4.00593948 L2.13260794,4.00593948 C0.837356231,4.00593948 0,3.11532037 0,2.0022773 C0,0.865691612 0.862859078,0 2.18268907,0 C3.50251904,0 4.31529701,0.865691612 4.34033757,2.0022773 Z M18,10.5336328 L17.999846,17.1801163 L14.1419051,17.1801163 L14.1419051,10.9784037 C14.1419051,9.42066665 13.5836162,8.35770937 12.1869696,8.35770937 C11.1210893,8.35770937 10.4862149,9.07429769 10.2073787,9.76642013 C10.1053672,10.014464 10.0803267,10.3600636 10.0803267,10.7065095 L10.0803267,17.180424 L6.22176946,17.180424 C6.22176946,17.180424 6.27262105,6.67618112 6.22176946,5.58845021 L10.0803267,5.58845021 L10.0803267,7.23035607 C10.5923868,6.44106259 11.5094876,5.31594046 13.5578822,5.31594046 C16.0966866,5.31594046 18,6.97307979 18,10.5336328 Z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\n\n\t\t\t\t\t\t\t</div><!-- #shre-top -->\n\t\t\t\t\t\t</div><!--widget-content-footer-->\n\t\t\t\t\t</div><!--widget-->\n\t\t\t\t</div>\n\n\n\n\t\t\t</div><!--container-->\n\t\t</div><!--footer-top-->\n\t\t<div class=\"footer-copy\">\n\t\t\t<div class=\"container \"><!---->\n\t\t\t\t<div class=\"footer-copy-main\">\n\t\t\t\t\t<div class=\"text-center col-md-12 \">\n\t\t\t\t\t\t<div class=\"footer__country-name\"> <img src=\"https://cdn.resume.io/packs/_/app/assets/images/landing/shared/usa-3f54583f890e1734d87e7df201bfd10a.png\" height=\"14px\" width=\"22\" alt=\"\"> <span></span> International</div>\n\n\t\t\t\t\t\t<p>  جميع الحقوق محفوظة لدى  <a href=\"#\"> </a> © 2018   </p>\n\t\t\t\t\t</div><!--copy-l-->\n\n\t\t\t\t</div>\n\n\n\t\t\t</div><!--container-->\n\t\t</div><!--footer-copy-->\n\n\t</div><!--footer-container-->\n</footer>"

/***/ }),

/***/ "./src/app/contents/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/contents/footer/footer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerCtn .footer-top {\n  background: #0f141f;\n  padding: 100px 0; }\n\n.footerCtn .footer-copy {\n  background: #0f141f;\n  border: none !important; }\n\n.footerCtn .widget-head h4 {\n  color: #3d4047;\n  position: relative;\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  font-weight: bold; }\n\n.footerCtn .footer-link li {\n  padding-right: 15px;\n  position: relative; }\n\n.footerCtn .widget-content-footer li a {\n  color: #fff;\n  line-height: 25px; }\n\na:link, a:visited, a:active, a:focus {\n  color: #168ae6;\n  outline: 0 none;\n  text-decoration: none;\n  transition: background-color .2s linear, color .2s linear; }\n\n.footerCtn .widget-content-footer li a {\n  color: #fff;\n  line-height: 25px; }\n\n.footerCtn .footer-link li:after {\n  position: absolute;\n  content: \"\\f111\";\n  right: 0;\n  top: 7px;\n  font-size: 11px;\n  color: #938989;\n  font-family: 'FontAwesome'; }\n\n.footerCtn .con-det li {\n  color: #fff;\n  line-height: 25px; }\n\n.footerCtn .shre-top {\n  text-align: center;\n  width: auto;\n  padding-left: 0; }\n\n.footerCtn .shre-top-foot {\n  margin-top: 10px; }\n\n.footerCtn .shre-top a {\n  transition: all 0.6s ease; }\n\n.footerCtn .shre-top a {\n  display: inline-block;\n  margin-left: 12px; }\n\n.footerCtn .shre-top a:hover {\n  margin-top: 0px; }\n\n.footerCtn .footer_social_button {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  color: #fff;\n  transition: background-color .1s ease;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.footerCtn .footer_social_button.footer_social_button_facebook {\n  background-color: #537bc0; }\n\n.footerCtn .footer_social_button svg {\n  fill: currentColor; }\n\n.footerCtn .footer_social_button.footer_social_button_twitter {\n  background-color: #1da1f2; }\n\n.footerCtn .footer_social_button.footer_social_button_google {\n  background-color: #d34836; }\n\n.footerCtn .footer_social_button.footer_social_button_linkedin {\n  background-color: #0077b5; }\n\n.footerCtn .footer-copy-main {\n  padding: 10px 0;\n  color: #fff; }\n\n.footerCtn .footer-copy-main p {\n  color: #4f5259; }\n\n#widget {\n  background: none !important;\n  border: none !important; }\n\n#nav-top {\n  width: 100%; }\n\n#widget {\n  background: none !important;\n  border: none !important; }\n\n.footerCtn .widget-head {\n  background: none !important;\n  border-right: none !important;\n  padding: 0 !important; }\n"

/***/ }),

/***/ "./src/app/contents/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/contents/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterCtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCtnComponent", function() { return FooterCtnComponent; });
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

var FooterCtnComponent = /** @class */ (function () {
    function FooterCtnComponent() {
    }
    FooterCtnComponent.prototype.ngOnInit = function () {
    };
    FooterCtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-ctn',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/contents/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/contents/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterCtnComponent);
    return FooterCtnComponent;
}());



/***/ }),

/***/ "./src/app/contents/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/contents/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header-con\">\n\t<div id=\"nav-top\">\n\t\t<div class=\"navbar navbar-tl4s navbar-default  \">\n\t\t\t<div class=\" \">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t\t\t\t<div class=\"navbar__logo\" style=\"background-image: url(./assets/styles/images/SVG/For_White_Gray_Bg.svg)\" routerLink=\"/\"></div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-left\">\n\t\t\t\t\t\t<li><a routerLink=\"/login\"  class=\"btn btn-link-blue   \" > دخول </a>  </li>\n\t\t\t\t\t\t<li><a routerLink=\"/register\"  class=\"btn btn-header   \" > تسجيل جديد </a>  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"nav navbar-nav nav\">\n\t\t\t\t\t\t<li class=\" \"><a routerLink=\"/\">الرئيسية</a> </li>\n\t\t\t\t\t\t<li><a routerLink=\"/\">من نحن</a> </li>\n\t\t\t\t\t\t<li><a routerLink=\"/pricing\">   الاسعار </a> </li>\n\t\t\t\t\t\t<li><a routerLink=\"/\"> الاسئلة الشائعة  </a> </li>\n\t\t\t\t\t\t<li><a routerLink=\"/\"> تواصل معانا  </a> </li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n"

/***/ }),

/***/ "./src/app/contents/header/header.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/contents/header/header.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header-con {\n  margin: 0 auto;\n  z-index: 55;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0; }\n\n.navbar-tl4s {\n  background: #fff;\n  margin-bottom: 0;\n  border: 0px solid #000000;\n  border-radius: 0px;\n  z-index: 55; }\n\n.navbar-toggle {\n  margin-top: 12px; }\n\n.navbar-toggle {\n  border: 0; }\n\n.navbar-tl4s .navbar-brand {\n  padding-right: 15px; }\n\n.navbar__logo {\n  width: 120px;\n  height: 32px;\n  background-size: contain;\n  background-position: 0;\n  margin-top: 15px; }\n\n.btn-link-blue {\n  color: #168ae6 !important; }\n\na.btn-link-blue {\n  color: #168ae6 !important; }\n\na:link, a:visited, a:active, a:focus {\n  color: #168ae6;\n  outline: 0 none;\n  text-decoration: none;\n  transition: background-color .2s linear, color .2s linear; }\n\na.btn-header {\n  padding: 14px 20px !important;\n  color: #fff !important;\n  background: #2196f3 !important;\n  border: 1px solid #2196f3 !important;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 22px;\n  display: inline-block;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  text-align: center;\n  color: #fff;\n  background-color: #2196f3;\n  padding: 14px 24px;\n  border-radius: 4px;\n  transition: background-color .1s ease;\n  cursor: pointer;\n  border-width: 0; }\n"

/***/ }),

/***/ "./src/app/contents/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/contents/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderCtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCtnComponent", function() { return HeaderCtnComponent; });
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

var HeaderCtnComponent = /** @class */ (function () {
    function HeaderCtnComponent() {
    }
    HeaderCtnComponent.prototype.ngOnInit = function () {
    };
    HeaderCtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-ctn',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/contents/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/contents/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderCtnComponent);
    return HeaderCtnComponent;
}());



/***/ }),

/***/ "./src/app/contents/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/contents/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-ctn></app-header-ctn>\n<div class=\"ctnPage\">\n\t<section class=\"home-about\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"section-title btn-link-blue\">\n\t\t\t\t\t\t<h2 class=\" btn-link-blue\"> فقط 2 ٪ من السير الذاتية تجعله يتخطى الدور الأول. كن في أعلى 2٪ </h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tاستخدم قوالب استئناف مهنية تم اختبارها ميدانياً تتبع قواعد \"القواعد الذاتية\" التي يبحث عنها. سهولة الاستخدام والقيام بذلك خلال دقائق - جرب الآن مجاناً!\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"read-more-slide\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-header \">بناء القوالب</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-header  btn-header-border-1 margin-r-15\"> مشاهدة القوالب   </a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"home__hero-counter-main\">\n\t\t\t\t\t\t<div class=\"home__hero-counter\">\n\t\t\t\t\t\t\t<div class=\" home__hero-counter-wrapper\"  >\n\t\t\t\t\t\t\t\t<span class=\" home__hero-counter-wrapper_num\">8,698</span>\n\t\t\t\t\t\t\t\t<span  class=\" home__hero-counter-wrapper_txt\">استئناف تم إنشاؤه اليوم</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- home__hero-counter-main -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<a class=\"home-about-cover\" href=\"/create-resume\"  data-wow-duration=\"3s\" data-wow-delay=\".4s\" ></a>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- home-about -->\n\n\t<section class=\"why-home\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"section-title btn-link-blue text-center\">\n\t\t\t\t<h2 class=\"  \"> بناء سيرتك الذاتية الفائزة في ثلاث خطوات بسيطة</h2>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"about-post\">\n\t\t\t\t\t\t<div class=\"about-icon p-right\">\n\t\t\t\t\t\t\t<span>1</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"about-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"about-post\">\n\t\t\t\t\t\t<div class=\"about-icon p-right\">\n\t\t\t\t\t\t\t<span>2</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"about-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"about-post\">\n\t\t\t\t\t\t<div class=\"about-icon p-right\">\n\t\t\t\t\t\t\t<span>3</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"about-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- about-home -->\n\t<section class=\"features-home\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"section-title btn-link-blue text-center\">\n\t\t\t\t<h2 class=\"  \"> قم ببناء سيرة ذاتية جديرة بالاهتمام تساعدك على توظيفك بشكل أسرع</h2>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"features-box\">\n\t\t\t\t\t\t<div class=\"features-box-img\">\n\t\t\t\t\t\t\t<img class=\"home__features-image\" alt=\"Build a Resume Quick and easy\" src=\"https://cdn.resume.io/assets/landing/home/save_time-c6cd5b1f0695e3b512e8b495ea66b55bbdf02f0481d088d4c137c7b98ea57199.svg\" width=\"100\" height=\"100\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"features-box-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tوفر الوقت من خلال منشئ السيرة الذاتية السهل المكون من 3 خطوات. لا مزيد من حظر أو صعوبات الكاتب في Word. بسرعة بناء السيرة الذاتية حب أرباب العمل.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"features-box\">\n\t\t\t\t\t\t<div class=\"features-box-img\">\n\t\t\t\t\t\t\t<img class=\"home__features-image\" alt=\"Build a Resume Quick and easy\" src=\"https://cdn.resume.io/assets/landing/home/save_time-c6cd5b1f0695e3b512e8b495ea66b55bbdf02f0481d088d4c137c7b98ea57199.svg\" width=\"100\" height=\"100\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"features-box-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tوفر الوقت من خلال منشئ السيرة الذاتية السهل المكون من 3 خطوات. لا مزيد من حظر أو صعوبات الكاتب في Word. بسرعة بناء السيرة الذاتية حب أرباب العمل.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"features-box\">\n\t\t\t\t\t\t<div class=\"features-box-img\">\n\t\t\t\t\t\t\t<img class=\"home__features-image\" alt=\"Build a Resume Quick and easy\" src=\"https://cdn.resume.io/assets/landing/home/save_time-c6cd5b1f0695e3b512e8b495ea66b55bbdf02f0481d088d4c137c7b98ea57199.svg\" width=\"100\" height=\"100\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"features-box-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tوفر الوقت من خلال منشئ السيرة الذاتية السهل المكون من 3 خطوات. لا مزيد من حظر أو صعوبات الكاتب في Word. بسرعة بناء السيرة الذاتية حب أرباب العمل.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"features-box\">\n\t\t\t\t\t\t<div class=\"features-box-img\">\n\t\t\t\t\t\t\t<img class=\"home__features-image\" alt=\"Build a Resume Quick and easy\" src=\"https://cdn.resume.io/assets/landing/home/save_time-c6cd5b1f0695e3b512e8b495ea66b55bbdf02f0481d088d4c137c7b98ea57199.svg\" width=\"100\" height=\"100\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-icon -->\n\t\t\t\t\t\t<div class=\"features-box-content\">\n\t\t\t\t\t\t\t<h3> اختر واحدة من السير الذاتية المصممة بشكل احترافي</h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tوفر الوقت من خلال منشئ السيرة الذاتية السهل المكون من 3 خطوات. لا مزيد من حظر أو صعوبات الكاتب في Word. بسرعة بناء السيرة الذاتية حب أرباب العمل.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- about-content -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- about-post -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t<div class=\"read-more-slide margin-b-0 margin-t-15 text-center\">\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-header \">   تعرف على المزيد </a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- features-home -->\n\n\t<section class=\"home-testimonials\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"section-title btn-link-blue text-center\">\n\t\t\t\t<h2 class=\"  \">  راى العملاء بنا</h2>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"testimonials-box\">\n\t\t\t\t\t\t<div class=\"testimonials-box-head clearfix\">\n\t\t\t\t\t\t\t<div class=\"testimonials-box-head-img\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/styles/images/customer-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- testimonials-box-head-img -->\n\t\t\t\t\t\t\t<h3>محمد على</h3>\n\t\t\t\t\t\t\t<h4>مطور ويب</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- testimonials-box-head -->\n\t\t\t\t\t\t<div class=\"testimonials-content\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.\n\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- testimonials-content -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- testimonials-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-4 -->\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"testimonials-box\">\n\t\t\t\t\t\t<div class=\"testimonials-box-head clearfix\">\n\t\t\t\t\t\t\t<div class=\"testimonials-box-head-img\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/styles/images/customer-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- testimonials-box-head-img -->\n\t\t\t\t\t\t\t<h3>محمد على</h3>\n\t\t\t\t\t\t\t<h4>مطور ويب</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- testimonials-box-head -->\n\t\t\t\t\t\t<div class=\"testimonials-content\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.\n\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- testimonials-content -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- testimonials-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-4 -->\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"testimonials-box\">\n\t\t\t\t\t\t<div class=\"testimonials-box-head clearfix\">\n\t\t\t\t\t\t\t<div class=\"testimonials-box-head-img\">\n\t\t\t\t\t\t\t\t<img src=\"./assets/styles/images/customer-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- testimonials-box-head-img -->\n\t\t\t\t\t\t\t<h3>محمد على</h3>\n\t\t\t\t\t\t\t<h4>مطور ويب</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- testimonials-box-head -->\n\t\t\t\t\t\t<div class=\"testimonials-content\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.\n\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- testimonials-content -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- testimonials-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-4 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\n\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t<div class=\"text-center margin-t-15 margin-b-15\">\n\t\t\t\t<div class=\"col-md-offset-3 col-md-6 color-gra margin-t-15\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\tتم إرسال الشهادات التي تم العثور عليها في Resume.io إلينا بواسطة عملاء Resume.io أو CVster.nl وقد لا تعكس تجربة المشتري المعتادة ولا تهدف إلى تمثيل أو ضمان حصول أي شخص على نفس النتائج أو نتائج مماثلة.\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- container -->\n\n\t</section>\n\t<!-- home-testimonials -->\n\n\t<section class=\"Companies-home\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"section-title text-center\">\n\t\t\t\t<h2>   الشركات التي استأجرت المتقدمين الذين استخدموا باني السيرة الذاتية الخاصة بك  </h2>\n\t\t\t</div>\n\t\t\t<div class=\"Companies-home-content \">\n\n\t\t\t\t<div class=\"text-center margin-b-15\">\n\t\t\t\t\t<img src=\"./assets/styles/images/Companies.png\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Companies-num text-center margin-b-15\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"Companies-num-main\">\n\t\t\t\t\t\t\t\t<span class=\"Companies-num-main-num btn-link-blue lang_en\">1,784,893</span>\n\t\t\t\t\t\t\t\t<span class=\"Companies-num-main-txt \">مستخدم</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Companies-num-main -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- col-md-4 -->\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"Companies-num-main\">\n\t\t\t\t\t\t\t\t<span class=\"Companies-num-main-num btn-link-blue lang_en\">6,924</span>\n\t\t\t\t\t\t\t\t<span class=\"Companies-num-main-txt \">مستخدم</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Companies-num-main -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- col-md-4 -->\n\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"Companies-num-main\">\n\t\t\t\t\t\t\t\t<span class=\"Companies-num-main-num btn-link-blue lang_en\">12,389</span>\n\t\t\t\t\t\t\t\t<span class=\"Companies-num-main-txt \">مستخدم</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Companies-num-main -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- col-md-4 -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Companies-num -->\n\t\t\t</div>\n\t\t\t<!-- Companies-home-content -->\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- Companies-home -->\n\n</div>\n\n<app-footer-ctn></app-footer-ctn>"

/***/ }),

/***/ "./src/app/contents/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/contents/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-about {\n  background-color: #f2f5fa;\n  overflow: hidden;\n  padding-top: 80px;\n  min-height: 580px;\n  max-height: calc(100vh - 80px); }\n\n.section-title {\n  margin-bottom: 30px; }\n\n.section-title h2 {\n  font-size: 25px;\n  color: #333;\n  margin: 0;\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  line-height: 33px; }\n\n.btn-header.btn-header-border-1, a.btn-header.btn-header-border-1 {\n  border: 1px solid #2196f3 !important;\n  color: #2196f3 !important;\n  background-color: transparent !important; }\n\n.home__hero-counter-wrapper {\n  padding-right: 15px;\n  position: relative;\n  margin-top: 30px; }\n\n.home__hero-counter-wrapper:before {\n  content: \"\";\n  position: absolute;\n  right: 4px;\n  top: 5px;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #00c853;\n  -webkit-animation: pulse2 1.5s ease infinite;\n  animation: pulse2 1.5s ease infinite;\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  animation-timing-function: ease;\n  -webkit-animation-timing-function: ease; }\n\n.why-home {\n  padding: 100px 0; }\n\n.section-title {\n  margin-bottom: 30px; }\n\n.section-title h2 {\n  font-size: 25px;\n  color: #333;\n  margin: 0;\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  line-height: 33px; }\n\n.about-post {\n  padding: 15px; }\n\n.about-icon {\n  float: right;\n  width: 70px; }\n\n.about-content {\n  height: 100%;\n  overflow: hidden; }\n\n.about-icon i, .about-icon span {\n  color: #2196f3;\n  background-color: #e6f4ff;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  display: inline-block;\n  text-align: center;\n  line-height: 49px;\n  font-size: 26px; }\n\n.about-post h3 {\n  color: #333;\n  line-height: 25px;\n  font-size: 12px;\n  margin-top: 0; }\n\n.features-home {\n  padding: 0 0 100px 0; }\n\n.features-box {\n  margin-bottom: 10px;\n  margin-top: 20px; }\n\n.features-box-content h3 {\n  font-size: 12px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  line-height: 25px; }\n\n.features-box-content p {\n  font-size: 12px;\n  line-height: 25px; }\n\n.home-testimonials {\n  background-color: #f2f5fa;\n  padding: 100px 0; }\n\n.testimonials-box {\n  background: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  margin-bottom: 30px; }\n\n.testimonials-content p {\n  margin: 0;\n  margin-bottom: 44px;\n  min-height: 130px; }\n\n.testimonials-box-head-img {\n  float: right;\n  width: 48px;\n  height: 48px;\n  margin-left: 10px; }\n\n.testimonials-box-head h3 {\n  margin-top: 0;\n  font-size: 12px;\n  font-weight: bold;\n  color: #333; }\n\n.testimonials-box-head h4 {\n  font-size: 12px;\n  color: #98a1b3; }\n\n.testimonials-box-head-img img {\n  border-radius: 24px;\n  width: 48px;\n  height: 48px; }\n\n.Companies-home {\n  padding: 100px 0; }\n\n.Companies-num-main {\n  text-align: center; }\n\n.Companies-num-main-num {\n  display: block;\n  /* font-weight: 700; */\n  font-size: 46px;\n  color: #2196f3;\n  text-align: center; }\n\n.Companies-num-main-txt {\n  display: block;\n  font-weight: 700;\n  font-size: 12px;\n  color: #333;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/contents/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/contents/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeCtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCtnComponent", function() { return HomeCtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeCtnComponent = /** @class */ (function () {
    function HomeCtnComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        var isLogin = localStorage.getItem("is_login");
        if (isLogin == 'true') {
            this.router.navigate(['/dashboard']);
        }
    }
    HomeCtnComponent.prototype.ngOnInit = function () {
        var isLogin = localStorage.getItem("is_login");
        if (isLogin == 'true') {
            this.router.navigate(['/dashboard']);
        }
    };
    HomeCtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-ctn',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/contents/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/contents/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], HomeCtnComponent);
    return HomeCtnComponent;
}());



/***/ }),

/***/ "./src/app/contents/pricing/pricing.component.html":
/*!*********************************************************!*\
  !*** ./src/app/contents/pricing/pricing.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-ctn></app-header-ctn>\n<div class=\"ctnPage\">\n\t<section class=\"pricing-top\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-md-pull-8  \">\n\t\t\t\t\t<div class=\"section-title btn-link-blue\">\n\t\t\t\t\t\t<h2 class=\" btn-link-blue\"> استئناف الأدوات للجميع </h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- home-about -->\n\n\t<section class=\"pricing-main\">\n\t\t<div class=\"container small-padding\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"pricing-main-box\">\n\t\t\t\t\t\t<div class=\"pricing-main-box-head\">\n\t\t\t\t\t\t\t<span class=\"card-price\">74.95</span>\n\t\t\t\t\t\t\t<span class=\"card-currency\">$</span>\n\t\t\t\t\t\t\t<div class=\"pricing__card-caption\"> 12 شهر</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-head -->\n\t\t\t\t\t\t<div class=\"pricing-main-box-contenr\">\n\t\t\t\t\t\t\t<div class=\"pricing__card-feature-list\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>استئناف غير محدود ورسائل الغلاف</li>\n\t\t\t\t\t\t\t\t\t<li>جميع القوالب والألوان المتميزة </li>\n\t\t\t\t\t\t\t\t\t<li>غير محدود قوات الدفاع الشعبي التنزيلات </li>\n\t\t\t\t\t\t\t\t\t<li>دفعة لمرة واحدة ، لا حاجة للإلغاء</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\t\t\t\t\t\t\t<div class=\"read-more-slide margin-b-15 margin-t-15 text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-header \">  اشترك الان </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- pricing-main-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"pricing-main-box\">\n\t\t\t\t\t\t<div class=\"pricing-main-box-head\">\n\t\t\t\t\t\t\t<span class=\"card-price\">74.95</span>\n\t\t\t\t\t\t\t<span class=\"card-currency\">$</span>\n\t\t\t\t\t\t\t<div class=\"pricing__card-caption\"> 12 شهر</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-head -->\n\t\t\t\t\t\t<div class=\"pricing-main-box-contenr\">\n\t\t\t\t\t\t\t<div class=\"pricing__card-feature-list\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>استئناف غير محدود ورسائل الغلاف</li>\n\t\t\t\t\t\t\t\t\t<li>جميع القوالب والألوان المتميزة </li>\n\t\t\t\t\t\t\t\t\t<li>غير محدود قوات الدفاع الشعبي التنزيلات </li>\n\t\t\t\t\t\t\t\t\t<li>دفعة لمرة واحدة ، لا حاجة للإلغاء</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\t\t\t\t\t\t\t<div class=\"read-more-slide margin-b-15 margin-t-15 text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-header \">  اشترك الان </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- pricing-main-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"pricing-main-box\">\n\t\t\t\t\t\t<div class=\"pricing-main-box-head\">\n\t\t\t\t\t\t\t<span class=\"card-price\">74.95</span>\n\t\t\t\t\t\t\t<span class=\"card-currency\">$</span>\n\t\t\t\t\t\t\t<div class=\"pricing__card-caption\"> 12 شهر</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-head -->\n\t\t\t\t\t\t<div class=\"pricing-main-box-contenr\">\n\t\t\t\t\t\t\t<div class=\"pricing__card-feature-list\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>استئناف غير محدود ورسائل الغلاف</li>\n\t\t\t\t\t\t\t\t\t<li>جميع القوالب والألوان المتميزة </li>\n\t\t\t\t\t\t\t\t\t<li>غير محدود قوات الدفاع الشعبي التنزيلات </li>\n\t\t\t\t\t\t\t\t\t<li>دفعة لمرة واحدة ، لا حاجة للإلغاء</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"pricing__card-feature-list-star\">\n\t\t\t\t\t\t\t\t\t<li>  7 أيام ضمان استعادة الاموال </li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\t\t\t\t\t\t\t<div class=\"read-more-slide margin-b-15 margin-t-15 text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-header \">  اشترك الان </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- pricing-main-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"pricing-main-box\">\n\t\t\t\t\t\t<div class=\"pricing-main-box-head\">\n\t\t\t\t\t\t\t<span class=\"card-price\">74.95</span>\n\t\t\t\t\t\t\t<span class=\"card-currency\">$</span>\n\t\t\t\t\t\t\t<div class=\"pricing__card-caption\"> 12 شهر</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-head -->\n\t\t\t\t\t\t<div class=\"pricing-main-box-contenr\">\n\t\t\t\t\t\t\t<div class=\"pricing__card-feature-list\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>استئناف غير محدود ورسائل الغلاف</li>\n\t\t\t\t\t\t\t\t\t<li>جميع القوالب والألوان المتميزة </li>\n\t\t\t\t\t\t\t\t\t<li>غير محدود قوات الدفاع الشعبي التنزيلات </li>\n\t\t\t\t\t\t\t\t\t<li>دفعة لمرة واحدة ، لا حاجة للإلغاء</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\t\t\t\t\t\t\t<div class=\"read-more-slide margin-b-15 margin-t-15 text-center\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-header \">  اشترك الان </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- pricing-main-box-contenr -->\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- pricing-main-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t<div class=\"text-center margin-t-30 margin-b-15\">\n\t\t\t\t<img src=\"./assets/styles/images/pay.png\" alt=\"\">\n\t\t\t\t<div class=\"paypal\">\n\t\t\t\t\t<span>نحن نقبل جميع طرق الدفع الرئيسية وعمليات الدفع باستخدام تأمين SSL Secure / 256-bit SSL الآمن. 7 أيام ضمان استعادة الاموال.</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- pricing-main -->\n\t<section class=\"faq-main\">\n\t\t<div class=\"container  \">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t<div class=\"section-title \">\n\t\t\t\t\t\t<h2 class=\"  \"> أسئلة حول التسعير</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-4 -->\n\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t<div class=\"faq-box \">\n\n\t\t\t\t\t\t<div class=\"faq-home-content \">\n\n\t\t\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\">\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\n\t\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/styles/images/SVG/svgexport-2.svg\" class=\"img-accordion  \" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">\n\t\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟  <img src=\"./assets/styles/images/SVG/svgexport-2.svg\" class=\"img-accordion  \" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\n\t\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟  <img src=\"./assets/styles/images/SVG/svgexport-2.svg\" class=\"img-accordion  \" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\">\n\t\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟  <img src=\"./assets/styles/images/SVG/svgexport-2.svg\" class=\"img-accordion  \" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse5\">\n\t\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟  <img src=\"./assets/styles/images/SVG/svgexport-2.svg\" class=\"img-accordion  \" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse5\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse6\">\n\t\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟  <img src=\"./assets/styles/images/SVG/svgexport-2.svg\" class=\"img-accordion  \" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t\tما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟    ما هى متطلبات ايجار سيارة ؟\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- row -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- faq-box -->\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-4 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"clearfix\"></div>\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- pricing-main -->\n</div>\n<app-footer-ctn></app-footer-ctn>"

/***/ }),

/***/ "./src/app/contents/pricing/pricing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/contents/pricing/pricing.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pricing-top {\n  background: #f2f5fa url(https://cdn.resume.io/packs/_/app/assets/images/landing/pricing/sailor-777fd3a604d849e43a0d276cd124cfe1.svg) top center no-repeat;\n  overflow: hidden;\n  background-size: cover;\n  width: 100%;\n  height: 350px;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  padding: 0;\n  padding-top: 40px; }\n\n.pricing-main {\n  background: #f2f5fa;\n  padding-bottom: 15px; }\n\n.pricing-main-box {\n  background: #fff;\n  border-radius: 5px;\n  padding: 30px; }\n\n.pricing-main-box-head {\n  text-align: center; }\n\n.card-price {\n  font-size: 25px;\n  line-height: 40px;\n  font-weight: 600; }\n\n.card-currency {\n  font-size: 22px;\n  line-height: 30px; }\n\n.pricing__card-caption {\n  color: #98a1b3;\n  margin-bottom: 20px;\n  text-transform: lowercase; }\n\n.pricing__card-feature-list {\n  min-height: 200px; }\n\n.pricing__card-feature-list li {\n  line-height: 25px;\n  padding-right: 20px;\n  position: relative; }\n\n.pricing__card-feature-list li:after {\n  position: absolute;\n  content: \"\\f17b\";\n  font-size: 14px;\n  right: 0;\n  top: 3px;\n  font-family: 'FontAwesome'; }\n\n.faq-main {\n  background: #f2f5fa;\n  padding: 100px 0; }\n\n.faq-box {\n  background: #fff;\n  border-radius: 7px;\n  padding: 20px; }\n\n.faq-home-content .panel-group {\n  margin: 0 !important; }\n\n.faq-home-content .panel-default {\n  border-color: #fff;\n  border: 0px solid #f4f4f4;\n  box-shadow: 0 0 0;\n  border-bottom: 1px solid #e3e3e3;\n  margin: 0 !important; }\n\n.faq-home-content .panel-default > .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #fff;\n  padding: 0; }\n\n.faq-home-content .panel-default > .panel-heading a {\n  color: #98a1b3;\n  padding: 15px;\n  display: block; }\n\n.img-accordion {\n  display: inline-block;\n  position: relative;\n  /* padding-left: 20px; */\n  margin-left: -10px;\n  float: left;\n  margin-top: -2px;\n  width: 24px;\n  height: 24px;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n  transition: transform .3s ease,-webkit-transform .3s ease; }\n\n.paypal {\n  width: 100%;\n  text-align: center;\n  margin: 15px auto;\n  color: #98a1b3 !important;\n  width: 40%; }\n"

/***/ }),

/***/ "./src/app/contents/pricing/pricing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/contents/pricing/pricing.component.ts ***!
  \*******************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
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

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/contents/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.scss */ "./src/app/contents/pricing/pricing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/contents/privacy/privacy.component.html":
/*!*********************************************************!*\
  !*** ./src/app/contents/privacy/privacy.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-ctn></app-header-ctn>\n<div class=\"ctnPage\">\n\t<section class=\"privacy-top\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-md-offset-4 text-center  \">\n\t\t\t\t\t<div class=\"section-title btn-link-blue\">\n\t\t\t\t\t\t<h2 class=\" btn-link-blue\"> وثائق قانونية </h2>\n\t\t\t\t\t\t<h3 class=\" \">تم تحديث جميع الوثائق  </h3>\n\t\t\t\t\t\t<h3 class=\" \"> في 21 أيار 2016 </h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"box-head\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li  class=\"\"><a routerLink=\"/disclaimer\"> <span> إخلاء المسئولية  </span></a></li>\n\t\t\t\t\t<li  class=\"\"><a routerLink=\"/tos\"> <span> شروط الخدمة </span></a></li>\n\t\t\t\t\t<li  class=\"active\"><a routerLink=\"/privacy\"> <span>سياسة الخصوصية</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- home-about -->\n\n\t<section class=\"privacy-main\">\n\t\t<div class=\"container \">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t\t<div class=\"documents__content\">\n\t\t\t\t\t\t<h3>١. المعلومات</h3>\n\t\t\t\t\t\t<p>كيف يتعامل مستقل مع المعلومات التي تزودنا بها؟ يلتزم موقع مستقل بتأمين خصوصيتك حين تزور موقعنا وتتواصل معنا الكترونياً. هذه الصفحة توضح الوجه الذي سيتم عبره استخدام أي معلومات شخصية تزودنا بها خلال تواجدك في موقعنا. انتفاء المسؤولية القانونية يقر المُستخدِم بأنه المسؤول الوحيد عن طبيعة الاستخدام الذي يحدده للموقع الإلكتروني مستقل، وتخلي إدارة موقع مستقل طرفها، إلى أقصى مدى يجيزه القانون، من كامل المسؤولية عن أية خسائر أو أضرار أو نفقات أو مصاريف يتكبدها المُستخدِم أو يتعرض لها هو أو أي طرف آخر من جراء استخدام الموقع الإلكتروني مستقل أو العجز عن استخدامه. حالات انقطاع الخدمة والسهو والخطأ في الموقع الإلكتروني مستقل تبذل إدارة الموقع قصارى جهدها للحرص والحفاظ على استمرار عمل الموقع الإلكتروني بدون مشاكل، رغم ذلك قد تقع في أي وقت أخطاء وحالات سهو وانقطاع للخدمة وتأخير لها، وفي مثل هذه الحالات سنتوقع من المستخدمين الصبر حتى تعود الخدمة إلى معدلها الطبيعي. حساب المشترك وكلمة السر وأمن المعلومات يختار المشترك كلمة سر / مرور لحسابه، وسيُدخل عنوانا\n\t\t\t\t\t\t\t<a href=\"/contact\">https://resume.io/contact</a> or by mail addressed to: \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"documents__bottom\">\n\t\t\t\t\t\t\t<div class=\"documents__bottom-address\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"documents__bottom-pin\">\n\t\t\t\t\t\t\t\t\t<!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->\n\t\t\t\t\t\t\t\t\t<title>Icons/ Default/ Pin</title>\n\t\t\t\t\t\t\t\t\t<desc>Created with Sketch.</desc>\n\t\t\t\t\t\t\t\t\t<defs></defs>\n\t\t\t\t\t\t\t\t\t<g id=\"Icons/-Default/-Pin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t<path d=\"M7.92325987,14.4023311 C6.74039163,13.3064252 6,11.7396764 6,10 C6,6.6862915 8.6862915,4 12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.7155806 17.2799763,13.2629907 16.1256355,14.3565236 L12.3183103,19.1101916 C12.2999388,19.1331295 12.2790953,19.153973 12.2561573,19.1723445 C12.0837303,19.3104455 11.8319976,19.2826186 11.6938967,19.1101916 L7.92325987,14.4023311 Z M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z\" id=\"Pin\" fill=\"#2196F3\"></path>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\tشركة الفن للإتصالات و تقنية المعلومات <br>حي الملك فهد ، شارع حائل \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"documents__bottom-updated\">تحديث نص الخصوصية بتاريخ<br>on May 21, 2016</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"clearfix\"></div>\n\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- pricing-main -->\n</div>\n<app-footer-ctn></app-footer-ctn>"

/***/ }),

/***/ "./src/app/contents/privacy/privacy.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/contents/privacy/privacy.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privacy-top {\n  background: #f2f5fa;\n  padding: 50px 0 0 0; }\n\n.privacy-main {\n  background: #fff;\n  padding: 50px 0; }\n\n.box-head {\n  text-align: center;\n  margin-top: 30px; }\n\n.box-head .nav-tabs {\n  border: 0 !important; }\n\n.box-head .nav-tabs {\n  text-align: center; }\n\n.box-head .nav-tabs li {\n  display: inline-block !important;\n  float: none; }\n\n.box-head .nav-tabs a {\n  color: #98a1b3 !important;\n  padding: 15px 20px;\n  border: 0 !important;\n  background: none !important;\n  border-bottom: 2px solid #f7f7f9 !important;\n  margin-bottom: -1px !important;\n  min-width: 250px; }\n\n.box-head .nav-tabs a {\n  color: #98a1b3 !important;\n  padding: 15px 20px;\n  border: 0 !important;\n  background: none !important;\n  border-bottom: 2px solid #f7f7f9 !important;\n  margin-bottom: -1px !important;\n  min-width: 250px; }\n\nli.active a {\n  border: 0 !important;\n  color: #333 !important;\n  background: #fff !important;\n  margin: 0; }\n\n.box-head .nav-tabs li.active a {\n  border: 0 !important;\n  color: #333 !important;\n  background: #fff !important;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/contents/privacy/privacy.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/contents/privacy/privacy.component.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
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

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/contents/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/contents/privacy/privacy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/contents/tos/tos.component.html":
/*!*************************************************!*\
  !*** ./src/app/contents/tos/tos.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-ctn></app-header-ctn>\n<div class=\"ctnPage\">\n\t<section class=\"privacy-top\" >\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 col-md-offset-4 text-center  \">\n\t\t\t\t\t<div class=\"section-title btn-link-blue\">\n\t\t\t\t\t\t<h2 class=\" btn-link-blue\"> وثائق قانونية </h2>\n\t\t\t\t\t\t<h3 class=\" \">تم تحديث جميع الوثائق  </h3>\n\t\t\t\t\t\t<h3 class=\" \"> في 21 أيار 2016 </h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-6 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"box-head\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li  class=\"\"><a routerLink=\"/disclaimer\"> <span> إخلاء المسئولية  </span></a></li>\n\t\t\t\t\t<li  class=\"active\"><a routerLink=\"/tos\"> <span> شروط الخدمة </span></a></li>\n\t\t\t\t\t<li  class=\"\"><a routerLink=\"/privacy\"> <span>سياسة الخصوصية</span></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- home-about -->\n\n\t<section class=\"privacy-main\" lang=\"ar\">\n\t\t<button class=\"btn btn-link-blue\" (click)=\"createPDF()\">Created PDF</button>/\n\t\t<div class=\"container \">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-8 col-md-offset-2\" id=\"page-A4\" >\n\t\t\t\t\t<div class=\"documents__content\">\n\t\t\t\t\t\t<h3>١. المعلومات</h3>\n\t\t\t\t\t\t<p>كيف يتعامل مستقل مع المعلومات التي تزودنا بها؟ يلتزم موقع مستقل بتأمين خصوصيتك حين تزور موقعنا وتتواصل معنا الكترونياً. هذه الصفحة توضح الوجه الذي سيتم عبره استخدام أي معلومات شخصية تزودنا بها خلال تواجدك في موقعنا. انتفاء المسؤولية القانونية يقر المُستخدِم بأنه المسؤول الوحيد عن طبيعة الاستخدام الذي يحدده للموقع الإلكتروني مستقل، وتخلي إدارة موقع مستقل طرفها، إلى أقصى مدى يجيزه القانون، من كامل المسؤولية عن أية خسائر أو أضرار أو نفقات أو مصاريف يتكبدها المُستخدِم أو يتعرض لها هو أو أي طرف آخر من جراء استخدام الموقع الإلكتروني مستقل أو العجز عن استخدامه. حالات انقطاع الخدمة والسهو والخطأ في الموقع الإلكتروني مستقل تبذل إدارة الموقع قصارى جهدها للحرص والحفاظ على استمرار عمل الموقع الإلكتروني بدون مشاكل، رغم ذلك قد تقع في أي وقت أخطاء وحالات سهو وانقطاع للخدمة وتأخير لها، وفي مثل هذه الحالات سنتوقع من المستخدمين الصبر حتى تعود الخدمة إلى معدلها الطبيعي. حساب المشترك وكلمة السر وأمن المعلومات يختار المشترك كلمة سر / مرور لحسابه، وسيُدخل عنوانا\n\t\t\t\t\t\t\t<a href=\"/contact\">https://resume.io/contact</a> or by mail addressed to: \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"documents__bottom\">\n\t\t\t\t\t\t\t<div class=\"documents__bottom-address\">\n\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"documents__bottom-pin\">\n\t\t\t\t\t\t\t\t\t<!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->\n\t\t\t\t\t\t\t\t\t<title>Icons/ Default/ Pin</title>\n\t\t\t\t\t\t\t\t\t<desc>Created with Sketch.</desc>\n\t\t\t\t\t\t\t\t\t<defs></defs>\n\t\t\t\t\t\t\t\t\t<g id=\"Icons/-Default/-Pin\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t\t\t\t\t\t\t<path d=\"M7.92325987,14.4023311 C6.74039163,13.3064252 6,11.7396764 6,10 C6,6.6862915 8.6862915,4 12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.7155806 17.2799763,13.2629907 16.1256355,14.3565236 L12.3183103,19.1101916 C12.2999388,19.1331295 12.2790953,19.153973 12.2561573,19.1723445 C12.0837303,19.3104455 11.8319976,19.2826186 11.6938967,19.1101916 L7.92325987,14.4023311 Z M12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 Z\" id=\"Pin\" fill=\"#2196F3\"></path>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\tشركة الفن للإتصالات و تقنية المعلومات <br>حي الملك فهد ، شارع حائل \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"documents__bottom-updated\">تحديث نص الخصوصية بتاريخ<br>on May 21, 2016</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- col-md-3 -->\n\t\t\t</div>\n\t\t\t<!-- row -->\n\t\t\t<div class=\"clearfix\"></div>\n\n\t\t</div>\n\t\t<!-- container -->\n\t</section>\n\t<!-- pricing-main -->\n</div>\n<app-footer-ctn></app-footer-ctn>"

/***/ }),

/***/ "./src/app/contents/tos/tos.component.scss":
/*!*************************************************!*\
  !*** ./src/app/contents/tos/tos.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privacy-top {\n  background: #f2f5fa;\n  padding: 50px 0 0 0; }\n\n.privacy-main {\n  background: #fff;\n  padding: 50px 0; }\n\n.box-head {\n  text-align: center;\n  margin-top: 30px; }\n\n.box-head .nav-tabs {\n  border: 0 !important; }\n\n.box-head .nav-tabs {\n  text-align: center; }\n\n.box-head .nav-tabs li {\n  display: inline-block !important;\n  float: none; }\n\n.box-head .nav-tabs a {\n  color: #98a1b3 !important;\n  padding: 15px 20px;\n  border: 0 !important;\n  background: none !important;\n  border-bottom: 2px solid #f7f7f9 !important;\n  margin-bottom: -1px !important;\n  min-width: 250px; }\n\n.box-head .nav-tabs a {\n  color: #98a1b3 !important;\n  padding: 15px 20px;\n  border: 0 !important;\n  background: none !important;\n  border-bottom: 2px solid #f7f7f9 !important;\n  margin-bottom: -1px !important;\n  min-width: 250px; }\n\nli.active a {\n  border: 0 !important;\n  color: #333 !important;\n  background: #fff !important;\n  margin: 0; }\n\n.box-head .nav-tabs li.active a {\n  border: 0 !important;\n  color: #333 !important;\n  background: #fff !important;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/contents/tos/tos.component.ts":
/*!***********************************************!*\
  !*** ./src/app/contents/tos/tos.component.ts ***!
  \***********************************************/
/*! exports provided: TosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TosComponent", function() { return TosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TosComponent = /** @class */ (function () {
    function TosComponent() {
    }
    TosComponent.prototype.ngOnInit = function () {
    };
    TosComponent.prototype.createPDF = function () {
        var _width = $('.privacy-main').width();
        console.log(_width);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML($('.privacy-main').html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    };
    TosComponent.prototype.createPDFInvoice = function (name) {
        console.log(name);
        var fileName = "INV" + name;
        this.generatePDFInvoice(fileName);
    };
    TosComponent.prototype.generatePDFInvoice = function (fileName) {
        var data = document.getElementById('page-A4');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            // Few necessary setting options 
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var _width = canvas.width;
            var _height = canvas.height;
            var width = canvas.width;
            var height = canvas.clientHeight;
            var contentDataURL = canvas.toDataURL('image/jpg', 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__('p', 'mm', 'a4');
            pdf.internal.scaleFactor = 30;
            var position = 0;
            pdf.addImage(contentDataURL, 'JPG', 0, 0, imgWidth, imgHeight);
            pdf.save(fileName + '.pdf');
        });
    };
    TosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tos',
            template: __webpack_require__(/*! ./tos.component.html */ "./src/app/contents/tos/tos.component.html"),
            styles: [__webpack_require__(/*! ./tos.component.scss */ "./src/app/contents/tos/tos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TosComponent);
    return TosComponent;
}());



/***/ }),

/***/ "./src/app/directives/number-only/number-only.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/directives/number-only/number-only.directive.ts ***!
  \*****************************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
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

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Shift', 'Alt', 'Control', 'Enter'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numberOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/guards/login/login.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/login/login.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.getCurrentUser()
                .then(function (user) {
                if (user.emailVerified) {
                    _this.router.navigate(['/']);
                    return resolve(false);
                }
                else {
                    return resolve(true);
                }
            }).catch(function (err) {
                return resolve(true);
            });
        });
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/guards/register-guard/register-guard.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/guards/register-guard/register-guard.guard.ts ***!
  \***************************************************************/
/*! exports provided: RegisterGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuardGuard", function() { return RegisterGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterGuardGuard = /** @class */ (function () {
    function RegisterGuardGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterGuardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.getCurrentUser()
                .then(function (user) {
                if (user.emailVerified) {
                    _this.router.navigate(['/']);
                    return resolve(false);
                }
                else if (!user.emailVerified) {
                    _this.router.navigate(['/email-verify']);
                    return resolve(false);
                }
            }).catch(function (err) {
                return resolve(true);
            });
        });
    };
    RegisterGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterGuardGuard);
    return RegisterGuardGuard;
}());



/***/ }),

/***/ "./src/app/guards/verify-email/verify-email.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/guards/verify-email/verify-email.guard.ts ***!
  \***********************************************************/
/*! exports provided: VerifyEmailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailGuard", function() { return VerifyEmailGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyEmailGuard = /** @class */ (function () {
    function VerifyEmailGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    VerifyEmailGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.getCurrentUser()
                .then(function (user) {
                if (user.emailVerified) {
                    _this.router.navigate(['/']);
                    return resolve(false);
                }
                else {
                    return resolve(true);
                }
            }, function (err) {
                _this.router.navigate(['/login']);
                return resolve(false);
            });
        });
    };
    VerifyEmailGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VerifyEmailGuard);
    return VerifyEmailGuard;
}());



/***/ }),

/***/ "./src/app/interfaces/user.ts":
/*!************************************!*\
  !*** ./src/app/interfaces/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.uid = '';
        this.name = '';
        this.email = '';
        this.logo = '';
        this.company_name = '';
        this.company_email = '';
        this.company_phone = '';
        this.fees_number = '';
        this.lang = '';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/email-verify/email-verify.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/email-verify/email-verify.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/email-verify/email-verify.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/email-verify/email-verify.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-main clearfix\">\n\n\n  <div class=\"login-logo text-center margin-t-70  margin-b-70 margin-b-15\">\n    <div class=\"camp-logo\">\n      <a routerLink=\"/\" class=\"margelogin\"><img src=\"/assets/images/logo.svg\" alt=\"الشعار\" title=\"الرئيسية\"></a>\n    </div>\n  </div>\n  <!--login-logo-->\n\n\n  <div class=\"col-md-4 col-md-offset-4\">\n\n\n\n    <div class=\"box-min\">\n      <div class=\"box-min-content\">\n        <div [ngSwitch]=\"_error\">\n          <div class=\"alert alert-success\" *ngSwitchCase=\"'success'\">تم ارسال رسالة تأكيد الى البريد الالكتروني.</div>\n          <div class=\"alert alert-danger\" *ngSwitchCase=\"'failed'\">حدث خطأ الرجاء اعادة المحاولة.</div>\n        </div>\n\n        <h4>تم ارسال رسالة تأكيد الى البريد الالكتروني الرجاء الضعط عليها لتفعيل الحساب.</h4>\n        <h4>اذا لم تصلك رسالة يمكنك الضغط على اعادة الارسال</h4>\n\n        <div class=\"read-more-home read-more-slide-cat text-center margin-t-15 \">\n            <i class=\"fa fa-spin fa-spinner fa-3x\" *ngIf=\"loading\"></i>\n          <button type=\"submit\" class=\"hvr-bounce-to-right\" (click)=\"sendEmail()\" *ngIf=\"!loading\">اعادة الارسال</button>\n        </div>\n        <div class=\" text-center\">\n          <a routerLink=\"/login\" class=\"btn btn-link  margin-b-0 text-center\"> <span> تسجيل الدخول</span>\n          </a>\n        </div>\n      </div>\n      <!--box-min-content-->\n    </div>\n    <!--box-min-->\n\n  </div>\n</div>\n<!--login-page-->"

/***/ }),

/***/ "./src/app/pages/email-verify/email-verify.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/email-verify/email-verify.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailVerifyComponent = /** @class */ (function () {
    function EmailVerifyComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.loading = true;
        this.authService.getCurrentUser().then(function (user) {
            _this.loading = false;
            _this.user = user;
            if (user.emailVerified) {
                _this.router.navigate(['/login']);
            }
        }).catch(function () {
            _this.loading = false;
            _this.router.navigate(['/login']);
        });
    }
    EmailVerifyComponent.prototype.ngOnInit = function () {
    };
    EmailVerifyComponent.prototype.sendEmail = function () {
        var _this = this;
        this.loading = true;
        this._error = '';
        this.user.sendEmailVerification().then(function (res) {
            _this._error = 'success';
            _this.loading = false;
        }, function () {
            _this.loading = false;
            _this._error = 'failed';
        });
    };
    EmailVerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-verify',
            template: __webpack_require__(/*! ./email-verify.component.html */ "./src/app/pages/email-verify/email-verify.component.html"),
            styles: [__webpack_require__(/*! ./email-verify.component.css */ "./src/app/pages/email-verify/email-verify.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmailVerifyComponent);
    return EmailVerifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/export-invoice/export-invoice.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/export-invoice/export-invoice.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn.btn-success{\r\n\tbackground: #e0eef2;\r\n\tborder: none;\r\n\tcolor: #57626c;\r\n\tpadding: 7px 15px;\r\n}\r\n\r\n#page-a4{\r\n\tbackground: #F5F6FA;\r\n}\r\n\r\n#page-A4{\r\n\twidth: 100%;\r\n\tmax-width: 100%;\r\n\theight: 1800px;\r\n\tmin-height: 1800px;\r\n\tborder: 1px solid #ddd;\r\n\tmargin: 30px auto;\r\n\tbackground: #fff;\r\n\tpadding: 90px !important;\r\n\tposition: relative;\r\n\twidth: 11.93in;\r\n\theight: 15.98in;\r\n}\r\n\r\n.main-A4{\r\n\tmargin-top: 200px;\r\n}\r\n\r\n.table-A4{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n.print-foot-A4{\r\n\tposition: fixed;\r\n\tbottom: 30px;\r\n\tright: 30px;\r\n}\r\n\r\n.print-foot-A4 button{\r\n\tbackground: #1468CF;\r\n\tcolor: #fff;\r\n}\r\n\r\n.print-foot-A4 button i{\r\n\tcolor: #fff;\r\n}\r\n\r\n.footer-pdf{\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tbottom: 90px;\r\n\ttext-align: center;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n\r\n.footer-pdf .logo-footer{\r\n\twidth: 150px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.footer-pdf .logo-footer img{\r\n\twidth: 100%;\r\n}\r\n\r\nul li{\r\n\tfont-size: 18px;\r\n\tline-height: 28px;\r\n}\r\n\r\ntable thead tr th{\r\n\tfont-size: 18px;\r\n\tpadding: 15px !important;\r\n}\r\n\r\ntable tbody tr td{\r\n\tfont-size: 18px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/export-invoice/export-invoice.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/export-invoice/export-invoice.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <section id=\"page-a4\">\n\n    <div class=\"container\" style=\"padding: 20px;\" *ngIf=\"loading.billing || (!loading.billing && !billing)\">\n      <div class=\"text-center margin-t-10\" *ngIf=\"loading.billing\">\n        <i class=\"fa fa-spin fa-spinner fa-3x color-orange\"></i>\n      </div>\n      <div *ngIf=\"!loading.billing && !billing\">\n        <div class=\"alert alert-danger\">الفاتورة غير موجودة</div>\n        <div class=\"text-center\">\n          <a routerLink=\"/\">الصفحة الرئيسية</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"page-A4 \" id=\"page-A4\" *ngIf=\"!loading.billing && billing\">\n      <header>\n        <div class=\"row\">\n          <div class=\"col-xs-6\">\n            <div class=\"a4-head-right\">\n              <ul>\n                <li> <span>فاتورة</span> #INV{{billing._number}}</li>\n                <li> <span>الي</span> : {{billing.company_name}}</li>\n                <li> <span>تاريخها</span> {{billing.date | date}}</li>\n                <li *ngIf=\"fees_number\"> <span> الرقم الضريبي</span> {{fees_number}}</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-xs-6\">\n            <div class=\"head-logo\">\n              <div class=\"camp-logo\">\n                <i *ngIf=\"loading.logo\" class=\"fa fa-spin fa-spinner fa-3x color-orange\"></i>\n                <img *ngIf=\"!loading.logo\" style=\"max-width: 150px;max-height: 60px;width: auto; height: auto;\" [src]=\"logoUrl || './assets/images/lg-pdf.svg'\"\n                alt=\"الشعار\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </header>\n\n      <main class=\"main-A4\">\n        <div class=\"  table-c table-A4 table-Invoices-popup\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>الوصف</th>\n                <th>الوحدة</th>\n                <th>الكمية</th>\n                <th>الاجمالي</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let p of billing.products\">\n                <td>{{p.description}}</td>\n                <td class=\"lang_en\">{{p.price | currency:' SR '}}</td>\n                <td class=\"lang_en\">{{p.quantity}}</td>\n                <td class=\"lang_en\">{{(p.price * p.quantity) | currency:' SR '}}</td>\n              </tr>\n              <tr>\n                <td class=\"total-table\"> المجموع</td>\n                <td class=\"lang_en\">{{billing.total | currency:' SR '}}</td>\n                <td> </td>\n                <td> </td>\n              </tr>\n              <tr *ngIf=\"loading.account\">\n                <td colspan=\"4\" class=\"text-center\" *ngIf=\"loading.account\"><i class=\"fa fa-spin fa-spinner fa-3x color-orange\"></i></td>\n              </tr>\n              <tr *ngIf=\"!loading.account\">\n                <td> القيمة المضافة {{billing.fees}}%</td>\n                <td>{{ billing.total_fees | currency:' SR '}}</td>\n                <td> </td>\n                <td> </td>\n              </tr>\n              <tr>\n                <td class=\"total-table\"> الاجمالي</td>\n                <td class=\"total-table\">{{ billing.total_all | currency:' SR '}}</td>\n                <td> </td>\n                <td> </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n\n        <!-- table-responsive -->\n        <div class=\"table-c  table-Invoices-popup\">\n          <i *ngIf=\"loading.account\" class=\"fa fa-spin fa-spinner fa-3x color-orange\"></i>\n          <table *ngIf=\"!loading.account && accountInfo\" class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"total-table\"> معلومات الدفع</th>\n                <th> </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td style=\"width:50%\"> البنك <span>: {{banks[accountInfo.bank_name]}}</span> </td>\n                <td style=\"width:50%\">باسم <span>: {{accountInfo.name}}</span></td>\n              </tr>\n              <tr>\n                <td style=\"width:50%\"> رقم الحساب <span>: {{accountInfo.number}}</span> </td>\n                <td style=\"width:50%\"> رقم الأيبان <span>: {{accountInfo.iban}}</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"footer-pdf\">\n          <div class=\"logo-footer\">\n            <img src=\"./assets/images/group58.svg\">\n          </div>\n        </div>\n        <!-- Invoices_popup_right_col_main -->\n      </main>\n    </div>\n    <!-- page-A4 -->\n\n    <div class=\"print-foot-A4\">\n      <i *ngIf=\"downloading || loading.logo || loading.account\" class=\"fa fa-spin fa-spinner fa-3x color-orange\"></i>\n      <button type=\"button\" *ngIf=\"!downloading && !loading.logo && !loading.account\" class=\"btn btn-success text-white\" (click)=\"createPDFInvoice(billing._number)\">\n        <i class=\"fa fa-file-pdf-o\"></i> تحميل PDF </button>\n      </div>\n    </section>\n  <!-- </div> -->"

/***/ }),

/***/ "./src/app/pages/export-invoice/export-invoice.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/export-invoice/export-invoice.component.ts ***!
  \******************************************************************/
/*! exports provided: ExportInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportInvoiceComponent", function() { return ExportInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/billings-service/billings.service */ "./src/app/services/billings-service/billings.service.ts");
/* harmony import */ var src_app_services_user_settings_service_user_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-settings-service/user-settings.service */ "./src/app/services/user-settings-service/user-settings.service.ts");
/* harmony import */ var src_app_services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/payments-service/payments.service */ "./src/app/services/payments-service/payments.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ExportInvoiceComponent = /** @class */ (function () {
    function ExportInvoiceComponent(route, billingsService, settingsService, payService, http, titleService) {
        this.route = route;
        this.billingsService = billingsService;
        this.settingsService = settingsService;
        this.payService = payService;
        this.http = http;
        this.titleService = titleService;
        this.loading = {
            billing: true,
            account: true,
            logo: true
        };
        this.downloading = false;
        this.isPDF = false;
        this.id = this.route.snapshot.params.id;
        this.titleService.setTitle('فاتورك');
    }
    Object.defineProperty(ExportInvoiceComponent.prototype, "banks", {
        get: function () { return { ahli: 'الاهلي', rajhi: 'الراجحي', bilad: 'البلاد', inma: 'الانماء' }; },
        enumerable: true,
        configurable: true
    });
    ExportInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if (!this.id) {
        //   this.loading.billing = false;
        //   return;
        // }
        this.loading.billing = true;
        this.billingsService.getById(this.id).snapshotChanges()
            .map(function (a) {
            _this.loading.billing = false;
            _this.billing = a.payload.data();
            if (!_this.billing) {
                _this.billing = null;
                return;
            }
            _this.titleService.setTitle('فاتورة #INV' + _this.billing._number);
            _this.billing.total = 0;
            for (var i in _this.billing.products) {
                var item = _this.billing.products[i];
                _this.billing.total += +item.price * +item.quantity;
            }
            _this.billing.total_all = _this.billing.total;
            _this.billing.fees = 0;
            _this.billing.total_fees = 0;
            _this.getAccount(_this.billing.uid);
            _this.getSettings(_this.billing.uid);
        })
            .subscribe();
    };
    ExportInvoiceComponent.prototype.createPDFInvoice = function (name) {
        console.log(name);
        this.isPDF = true;
        var fileName = "INV" + name;
        this.generatePDFInvoice(fileName);
    };
    ExportInvoiceComponent.prototype.generatePDFInvoice = function (fileName) {
        var data = document.getElementById('page-A4');
        html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(data).then(function (canvas) {
            // Few necessary setting options 
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var _width = canvas.width;
            var _height = canvas.height;
            var width = canvas.width;
            var height = canvas.clientHeight;
            var contentDataURL = canvas.toDataURL('image/png', 1.0);
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_8__('p', 'in', 'a4'); // A4 size page of PDF 
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, 0, 8.3, 11.7);
            pdf.save(fileName + '.pdf'); // Generated PDF  
        });
    };
    ExportInvoiceComponent.prototype.getAccount = function (uid) {
        var _this = this;
        this.loading.account = true;
        this.payService.getByUId(uid).snapshotChanges()
            .map(function (a) {
            _this.loading.account = false;
            if (a.length <= 0) {
                return;
            }
            var info = a[0].payload.doc.data();
            var accounts = info.accounts || [];
            var used = info.used_account;
            for (var i in accounts) {
                var item = accounts[i];
                if (item.id == used) {
                    _this.accountInfo = item;
                    _this.billing.fees = item.fees;
                    _this.setFees(_this.accountInfo.fees);
                    break;
                }
            }
        }).subscribe();
    };
    ExportInvoiceComponent.prototype.getSettings = function (uid) {
        var _this = this;
        this.loading.logo = true;
        this.settingsService.getByUId(uid).snapshotChanges()
            .map(function (a) {
            _this.loading.logo = false;
            if (a.length <= 0) {
                return;
            }
            var info = a[0].payload.doc.data();
            _this.fees_number = info.fees_number || null;
            var logo = info.logo || null;
            if (!logo) {
                return;
            }
            _this.loading.logo = true;
            _this.settingsService.getLogo(logo).subscribe(function (logo) {
                _this.loading.logo = false;
                _this.logoUrl = logo || null;
            }, function () {
                _this.loading.logo = false;
                _this.logoUrl = null;
            });
        }).subscribe();
    };
    ExportInvoiceComponent.prototype.setFees = function (fees) {
        var fees = +fees;
        if (!fees) {
            return;
        }
        this.billing.fees = fees;
        this.billing.total_fees = (this.billing.total / 100) * fees;
        this.billing.total_all = this.billing.total_fees + this.billing.total;
    };
    ExportInvoiceComponent.prototype.createPDF = function () {
        var _this = this;
        this.downloading = true;
        var date = this.todayDate;
        var account = this.accountInfo ? __assign({}, this.accountInfo) : '';
        if (account) {
            account.bank_name = this.banks[account.bank_name];
        }
        var body = __assign({}, this.billing, { date: date, account: account, fees_number: this.fees_number || '', logo: this.logoUrl || 'https://ftortk.io/assets/images/sm-logo.png' });
        var url = (src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? 'https://arttime.sa/ftortk/index.php' : 'http://localhost/ftortk/index.php');
        this.http.post(url, body, {
            responseType: 'blob'
        })
            .subscribe(function (res) {
            var url = window.URL.createObjectURL(res);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = 'AT' + _this.billing._number + '.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
            _this.downloading = false;
        }, function (error) {
            _this.downloading = false;
        }, function () {
            _this.downloading = false;
        });
    };
    Object.defineProperty(ExportInvoiceComponent.prototype, "todayDate", {
        get: function () {
            var today = new Date(this.billing.date);
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            dd = dd < 10 ? '0' + dd : dd;
            mm = mm < 10 ? '0' + mm : mm;
            return mm + '/' + dd + '/' + yyyy;
        },
        enumerable: true,
        configurable: true
    });
    ExportInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-invoice',
            template: __webpack_require__(/*! ./export-invoice.component.html */ "./src/app/pages/export-invoice/export-invoice.component.html"),
            styles: [__webpack_require__(/*! ./export-invoice.component.css */ "./src/app/pages/export-invoice/export-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_3__["BillingsService"],
            src_app_services_user_settings_service_user_settings_service__WEBPACK_IMPORTED_MODULE_4__["UserSettingsService"],
            src_app_services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_5__["PaymentsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ExportInvoiceComponent);
    return ExportInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu{\r\n    position: absolute!important;\r\n    z-index: 9999!important;\r\n}\r\n\r\n.table-responsive{\r\n    overflow-y: auto;\r\n}\r\n\r\n.btn.btn-success.btn-active{\r\n    background-color: #398439;\r\n    color: #fff;\r\n}\r\n\r\n.share-input-home-page{\r\n    margin-top: 10px;\r\n    padding: 3px;\r\n    height: 30px;\r\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header app-navbar id=\"header-con\"></header>\n<div id=\"main\">\n  <div app-sidebar class=\"col-md-3 col-sm-12 col-xs-12 sidebar \"></div>\n  <div class=\" main-content\">\n    <div class=\"content-wrapper\">\n      <div class=\"main-content-in\">\n        <div class=\"row\">\n          <div class=\"col-md-3 pp-left\">\n            <div class=\"box-min  box-none-bg \">\n              <div class=\"box-head box-fff-bg margin-b-15\">\n                <div class=\"box-head-link\">\n                  <a routerLink=\"/new\" class=\"head-link-a\">\n                    <i class=\"fa fa-file-text head-link-i\"></i> انشاء فتورة جديدة\n                    <button class=\"btn btn-link btn-link-button  \" type=\"button\" data-toggle=\"dropdown\">\n                      <i class=\"fa fa-ellipsis-h\"></i>\n                    </button>\n                  </a>\n                </div>\n                <!--box-head-->\n              </div>\n              <!--box-head-->\n              <div class=\"box-head box-fff-bg margin-b-15\">\n                <div class=\"box-head-link\">\n                  <span class=\"head-link-a\">\n                    <i class=\"fa fa-area-chart Menu-icon\"></i>اجمالي الفواتير\n                    <span class=\"  btn-link-button lang_en btn-link-text-decoration-none  \">\n                      {{total | currency:' SR '}}\n                    </span>\n                  </span>\n                </div>\n                <!--box-head-->\n              </div>\n              <!--box-head-->\n              <div class=\"box-head box-fff-bg margin-b-15\">\n                <div class=\"box-head-link\">\n                  <span class=\"head-link-a\">\n                    <i class=\"fa fa-area-chart Menu-icon\"></i>الفواتير المدفوعه\n                    <span class=\"  btn-link-button lang_en btn-link-text-decoration-none  \">\n                      {{total_done | currency:' SR '}}\n                    </span>\n                  </span>\n                </div>\n                <!--box-head-->\n              </div>\n              <!--box-head-->\n              <div class=\"box-head box-fff-bg margin-b-15\">\n                <div class=\"box-head-link\">\n                  <span class=\"head-link-a\">\n                    <i class=\"fa fa-area-chart Menu-icon\"></i>فواتير بإنتظار الدفع\n                    <span class=\"  btn-link-button lang_en btn-link-text-decoration-none  \">\n                      {{total_waiting | currency:' SR '}}\n                    </span>\n                  </span>\n                </div>\n                <!--box-head-->\n              </div>\n              <!--box-head-->\n              <div class=\"box-head box-fff-bg margin-b-15\">\n                <div class=\"box-head-link\">\n                  <span class=\"head-link-a\">\n                    <i class=\"fa fa-area-chart Menu-icon\"></i>فواتير ملغيه\n                    <span class=\"  btn-link-button lang_en btn-link-text-decoration-none  \">\n                      {{total_cancel | currency:' SR '}}\n                    </span>\n                  </span>\n                </div>\n                <!--box-head-->\n              </div>\n            </div>\n            <!--box-min-->\n          </div>\n          <!-- col-md-8 -->\n          <div class=\"col-md-9\">\n            <div class=\"box-min\">\n              <div class=\"box-head\">\n                <ul class=\"nav nav-tabs\">\n                  <li [ngClass]=\"{'active': filter=='all'}\" (click)=\"setFilter('all')\"><a>الكل</a></li>\n                  <li [ngClass]=\"{'active': filter=='waiting'}\" (click)=\"setFilter('waiting')\"><a> بانتظار\n                      الدفع </a></li>\n                  <li [ngClass]=\"{'active': filter=='done'}\" (click)=\"setFilter('done')\"><a>مدفوع</a></li>\n                  <li [ngClass]=\"{'active': filter=='cancel'}\" (click)=\"setFilter('cancel')\"><a>ملغي</a></li>\n                </ul>\n              </div>\n              <!--box-head-->\n              <div class=\"box-min-content\">\n                <div class=\"text-center\" *ngIf=\"loading\"><i class=\"fa fa-spin fa-spinner fa-3x color-orange\"></i></div>\n                <div class=\"table-responsive table-c\" *ngIf=\"!loading\">\n                  <div class=\"text-center\" *ngIf=\"!billings.length\">\n                    <span>لا يوجد لديك فواتير</span>\n                  </div>\n                  <table class=\"table\">\n                    <tbody>\n                      <tr *ngFor=\"let billing of billings\" (click)=\"showDetails(billing)\">\n                        <td style=\"width:50px;\">\n                          <i class=\"fa fa-file-text table-icon\"></i>\n                        </td>\n                        <td style=\"width:200px;\">\n                          <a data-toggle=\"modal\" data-target=\"#Invoices_popup\">\n                            <span class=\"table_span_string lang_en\">INV{{billing._number}}</span>\n                            <span class=\"table_span_small\">فاتورة</span>\n                          </a>\n                        </td>\n                        <td>\n                          <a data-toggle=\"modal\" data-target=\"#Invoices_popup\">\n                            <span class=\"table_span_string lang_en\">{{billing.date | date}}</span>\n                            <span class=\"table_span_small\"> تاريخها </span>\n                          </a>\n                        </td>\n                        <td>\n                          <a>\n                            <span class=\"table_span_string lang_en\">{{billing.total | currency:' SR '}}</span>\n                            <span class=\"table_span_small\"> الاجمالي</span>\n                          </a>\n                        </td>\n                        <td>\n                          <a data-toggle=\"modal\" data-target=\"#Invoices_popup\">\n                            <div class=\"table_span_lable\">\n                              <span class=\"table_span_lable_color\" [ngClass]=\"{'lable_color_green' : billing.status=='done', 'lable_color_orange' : billing.status=='waiting', 'lable_color_pink' : billing.status=='cancel'}\"></span>\n                              <span class=\"table_span_lable_text\">{{status[billing.status]}}</span>\n                            </div>\n                          </a>\n\n                        </td>\n                        <td style=\"width:50px;\">\n                          <div class=\"dropdown\">\n                            <button class=\"btn btn-link btn-link-table \" type=\"button\" data-toggle=\"dropdown\">\n                              <i class=\"fa fa-ellipsis-h\"></i>\n                            </button>\n                            <ul class=\"dropdown-menu\">\n                              <li><a class=\"\" (click)=\"changeStatus(billing, 'done')\">مدفوع</a></li>\n                              <li><a class=\"\" (click)=\"changeStatus(billing, 'waiting')\">غير مدفوع</a></li>\n                              <li><a class=\"\" (click)=\"changeStatus(billing, 'cancel')\">ملغي</a></li>\n                              <li class=\"\" role=\"separator\" class=\"divider\"></li>\n                              <li><a (click)=\"deleteBilling(billing.id)\" class=\"color-red\"><i class=\"fa fa-minus-circle\"></i>\n                                  حذف</a></li>\n                            </ul>\n                          </div>\n                        </td>\n                      </tr>\n\n                    </tbody>\n                  </table>\n\n\n                  <div class=\"read-more-home read-more-slide-cat text-center\" *ngIf=\"billings.length >= limit && billings_all.length > billings.length\">\n                    <i class=\"fa fa-spin fa-spinner fa-3x color-orange\" *ngIf=\"moreLoading\"></i>\n                    <button type=\"button\" *ngIf=\"!moreLoading\" (click)=\"getMore()\" class=\"hvr-bounce-to-right\"><i class=\"fa fa-plus-circle\"></i>\n                      المزيد</button>\n                  </div>\n                </div>\n                <!-- table-responsive -->\n\n\n                <!-- Modal -->\n                <div id=\"Invoices_popup\" class=\"modal fade Invoices_popup\" role=\"dialog\">\n                  <div class=\"modal-dialog modal-lg\">\n                    <!-- Modal content-->\n                    <div class=\"modal-content\">\n                      <div class=\"row\" *ngIf=\"billing_details\">\n                        <div class=\"col-md-4 Invoices_popup_right\">\n                          <div class=\"Invoices_popup_right_row\">\n                            <div class=\"Invoices_popup_right_row_in \">\n                              <div class=\"Invoices_popup_right_col_main clearfix\">\n                                <div class=\"col-sm-6\">\n                                  <span class=\"table_span_small\">فاتورة</span>\n                                  <span class=\"table_span_string\">#INV{{billing_details._number}}</span>\n                                </div>\n                                <!-- col-sm-6 -->\n                                <div class=\"col-sm-6\">\n                                  <div class=\"pp-left\">\n                                    <button type=\"button\" class=\"btn btn-success text-white\"> {{status[billing_details.status]}} </button>\n                                  </div>\n                                  <!-- table_span_lable -->\n                                </div>\n                                <!-- col-sm-6 -->\n                              </div>\n                              <!-- Invoices_popup_right_col_main -->\n                              <div class=\"Invoices_popup_right_col_main clearfix\">\n                                <div class=\"col-sm-12\">\n                                  <span class=\"table_span_small\"> الي</span>\n                                  <span class=\"table_span_string  \">{{billing_details.company_name}}</span>\n                                  <span class=\"table_span_string lang_en\">{{billing_details.company_email}}</span>\n                                </div>\n                                <!-- col-sm-12 -->\n                              </div>\n                              <!-- Invoices_popup_right_col_main -->\n                              <div class=\"Invoices_popup_right_col_main clearfix\">\n                                <div class=\"col-sm-12\">\n                                  <span class=\"table_span_small\"> تاريخها </span>\n                                  <span class=\"table_span_string lang_en\">{{billing_details.date | date}}</span>\n                                </div>\n                                <!-- col-sm-12 -->\n                              </div>\n                              <!-- Invoices_popup_right_col_main -->\n                              <div class=\"Invoices_popup_right_col_main_pdf\">\n                                <a routerLink=\"/export/{{ billing_details.id }}\" target=\"_blank\"><i class=\"fa fa-print\"></i>\n                                <!-- <a routerLink=\"/export/{{ billing_details.id }}\" target=\"_blank\"  data-dismiss=\"modal\" (click)=\"createPDFInvoice(billing_details._number)\"><i class=\"fa fa-print\"></i> -->\n                                  تصدير الفاتورة PDF </a> <br>\n                                <a (click)=\"showShareLink = !showShareLink\" ><i class=\"fa fa-print\"></i> مشاركة\n                                  رابط الفاتورة </a>\n                                <input type=\"text\" class=\"form-control share-input-home-page\" *ngIf=\"showShareLink\"\n                                  [value]=\"'https://ftortk.io/export/' + billing_details.id\">\n                              </div>\n                              <!-- Invoices_popup_right_col_main -->\n                            </div>\n                            <!-- Invoices_popup_right_row_in -->\n                          </div>\n                          <!-- Invoices_popup_right_row -->\n                        </div>\n                        <!-- col-md-4 -->\n                        <div class=\"col-md-8 Invoices_popup_left\">\n                          <div class=\"modal-header\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><i class=\"fa fa-times-circle\"></i></button>\n                          </div>\n                          <!-- modal-header -->\n                          <div class=\"modal-body\">\n                            <div class=\"table-responsive table-c table-Invoices-popup\">\n                              <table class=\"table\">\n                                <thead>\n                                  <tr>\n                                    <th>الوصف</th>\n                                    <th>الوحدة</th>\n                                    <th>الكمية</th>\n                                    <th style=\"width: 100px;\"> الاجمالي </th>\n                                  </tr>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let p of billing_details.products\">\n                                    <td>{{p.description}}</td>\n                                    <td class=\"lang_en\">{{p.price | currency:' SR '}}</td>\n                                    <td class=\"lang_en\">{{p.quantity}}</td>\n                                    <td class=\"lang_en\">{{(p.price * p.quantity) | currency:' SR '}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"total-table\"> المجموع</td>\n                                    <td> </td>\n                                    <td> </td>\n                                    <td class=\"lang_en\">{{billing_details.total | currency:' SR '}}</td>\n                                  </tr>\n                                  <tr>\n                                    <td class=\"total-table\"> القيمة المضافة {{fees}}%</td>\n                                    <td> </td>\n                                    <td> </td>\n                                    <td>{{ billing_details.total_fees | currency:' SR '}}</td>\n                                  </tr>\n\n                                </tbody>\n                              </table>\n                            </div>\n                            <div class=\"text-left Invoices-popup-total\">\n                              <h2> الاجمالي : <span>{{ billing_details.total_all | currency:' SR '}}</span> </h2>\n                            </div>\n                            <!-- table-responsive -->\n\n\n                          </div>\n                          <!-- modal-body -->\n                        </div>\n                        <!-- col-md-8 -->\n                      </div>\n                      <!-- row -->\n\n                    </div>\n                    <!-- modal-content -->\n                  </div>\n                  <!-- modal-dialog -->\n                </div>\n                <!-- Invoices_popup -->\n\n\n              </div>\n              <!--box-min-content-->\n            </div>\n            <!--box-min-->\n          </div>\n          <!-- col-md-8 -->\n        </div>\n        <!-- row -->\n      </div>\n      <!--content-wrapper -->\n    </div>\n    <!--col-md-9 main-content -->\n    <footer id=\"footer\" app-footer></footer>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var src_app_services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/billings-service/billings.service */ "./src/app/services/billings-service/billings.service.ts");
/* harmony import */ var src_app_services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/payments-service/payments.service */ "./src/app/services/payments-service/payments.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import * as $ from "jquery";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(billingsService, router, pay_info) {
        this.billingsService = billingsService;
        this.router = router;
        this.pay_info = pay_info;
        this.billings = [];
        this.billings_all = [];
        this.billing_details = {};
        this.loading = true;
        this.info = null;
        this.moreLoading = false;
        this.showShareLink = false;
        this.limit = 10;
        this.filter = 'all';
        this.total = 0;
        this.total_done = 0;
        this.total_waiting = 0;
        this.total_cancel = 0;
        this.fees = 0;
    }
    Object.defineProperty(HomeComponent.prototype, "status", {
        get: function () { return { 'done': 'مدفوع', 'waiting': 'بانتظار الدفع', 'cancel': 'ملغي' }; },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billingsService.getBillings.snapshotChanges()
            .map(function (actions) {
            _this.loading = false;
            _this.initVars();
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                var products = data.products;
                var total = 0;
                for (var i in products) {
                    total = +total + (+products[i].price * +products[i].quantity);
                }
                data.total = total;
                _this.total += +data.total;
                if (data.status == 'done') {
                    _this.total_done += +data.total;
                }
                else if (data.status == 'waiting') {
                    _this.total_waiting += +data.total;
                }
                else if (data.status == 'cancel') {
                    _this.total_cancel += +data.total;
                }
                return __assign({ id: id }, data);
            });
        })
            .subscribe(function (res) {
            _this.billings_all = res;
            _this.setFilter(_this.filter);
        });
        this.getAccount();
    };
    HomeComponent.prototype.initVars = function () {
        this.total = 0;
        this.total_done = 0;
        this.total_waiting = 0;
        this.total_cancel = 0;
    };
    HomeComponent.prototype.shareInvoice = function (_id) {
        // $('#Invoices_popup').modal('hide');
        this.router.navigate(['/export/' + _id]);
    };
    HomeComponent.prototype.createPDFInvoice = function (name) {
        console.log(name);
        var fileName = "INV" + name;
        this.generatePDFInvoice(fileName);
    };
    HomeComponent.prototype.generatePDFInvoice = function (fileName) {
        var data = document.getElementById('Invoices_popup');
        html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(data).then(function (canvas) {
            // Few necessary setting options 
            var imgWidth = 258;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_6__('p', 'mm', 'a4'); // A4 size page of PDF 
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, 30, imgWidth, imgHeight);
            pdf.save(fileName + '.pdf'); // Generated PDF  
        });
    };
    HomeComponent.prototype.getAccount = function () {
        var _this = this;
        this.pay_info._info.snapshotChanges()
            .map(function (a) {
            if (a.length <= 0) {
                return;
            }
            var info = a[0].payload.doc.data();
            var accounts = info.accounts || [];
            for (var i in accounts) {
                var item = accounts[i];
                if (item.id == info.used_account) {
                    _this.fees = +item.fees;
                    break;
                }
            }
        }).subscribe();
    };
    HomeComponent.prototype.showDetails = function (billing) {
        billing.total_fees = (billing.total / 100) * this.fees;
        billing.total_all = this.fees ? billing.total_fees + billing.total : billing.total;
        this.billing_details = billing;
    };
    HomeComponent.prototype.changeStatus = function (billing, status) {
        billing.status = status;
        this.billingsService.update(billing.id, billing);
    };
    HomeComponent.prototype.getMore = function () {
        var last_key = this.billings.length;
        var count = 0;
        var ii = 0;
        for (var i in this.billings_all) {
            var item = this.billings_all[i];
            if (this.filter != 'all' && item.status != this.filter) {
                continue;
            }
            if (ii >= last_key) {
                count++;
                this.billings.push(item);
            }
            if (count >= this.limit) {
                break;
            }
            ii++;
        }
    };
    HomeComponent.prototype.setFilter = function (status) {
        if (this.loading && this.billings_all.length > 0) {
            return;
        }
        this.filter = status;
        this.billings = [];
        var count = 0;
        for (var i in this.billings_all) {
            var item = this.billings_all[i];
            if (this.filter == 'all' || item.status == this.filter) {
                this.billings.push(item);
                count++;
            }
            if (count >= this.limit) {
                break;
            }
        }
    };
    HomeComponent.prototype.deleteBilling = function (billing_id) {
        var conf = confirm('هل انت متأكد من حذف الفاتورة؟');
        if (!conf) {
            return false;
        }
        this.billingsService.delete(billing_id);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_4__["BillingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_5__["PaymentsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/informations/informations.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/informations/informations.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-min{\r\n    padding-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/pages/informations/informations.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/informations/informations.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header app-navbar id=\"header-con\"></header>\n<div id=\"main\">\n  <div app-sidebar class=\"col-md-3 col-sm-12 col-xs-12 sidebar \"></div>\n  <div class=\"main-content\">\n    <div class=\"content-wrapper\">\n      <div class=\"main-content-in\">\n        <div class=\" \">\n          <div class=\"box-min2 clearfix\">\n            <div class=\"col-md-3 pp-left\">\n              <div class=\"box-min  box-none-bg \">\n                <div class=\"box-head margin-b-15\">\n                  <div class=\"box-head-link\">\n                    <a class=\"head-link-a\">\n                      كيف تملأ الحساب البنكي\n                      <button class=\"btn btn-link btn-link-button  \" type=\"button\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-question-circle\"></i>\n                      </button>\n                    </a>\n                  </div>\n                  <!--box-head-link-->\n                </div>\n                <!--box-head-->\n                <div class=\"info-box-Invoices\">\n                  <div class=\"info-box-main margin-t-70\">\n                    <h2> تفاصيل الحساب</h2>\n                    <p>\n                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،\n                      لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص\n                      أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.\n                    </p>\n                  </div>\n                  <!-- info-box-main -->\n                  <div class=\"info-box-main\">\n                    <h2> تفاصيل البنك و الرسوم</h2>\n                    <p>\n                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،\n                      لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص\n                      أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.\n                    </p>\n                  </div>\n                  <!-- info-box-main -->\n                </div>\n                <!-- info-box-Invoices -->\n              </div>\n              <!--box-min-->\n            </div>\n            <!-- col-md-8 -->\n            <div class=\"col-md-9 padding-r-0\">\n              <div class=\"box-min   \">\n                <div class=\"box-head\">\n                  <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a> <span> الحسابات </span></a></li>\n                  </ul>\n                </div>\n                <!--box-head-->\n                <div class=\"box-min-content\">\n                  <div [ngSwitch]=\"_error\">\n                    <div class=\"alert alert-danger\" *ngSwitchCase=\"'invalid'\">يجب ملئ الفورم بشكل صحيح واختيار الحساب.</div>\n                    <div class=\"alert alert-danger\" *ngSwitchCase=\"'account'\">يجب اختيار حساب.</div>\n                    <div class=\"alert alert-success\" *ngSwitchCase=\"'success'\">تم حفظ التغييرات.</div>\n                  </div>\n                  <div app-loading *ngIf=\"loading\"></div>\n                  <div class=\"form-main\" *ngIf=\"!loading\">\n                    <form [formGroup]=\"info_form\" (ngSubmit)=\"save()\">\n                      <div class=\"form-main-head\">\n                        <h2 class=\"margin-t-0\"><span>تفاصيل</span></h2>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                          <div class=\"form-group select-account\">\n                            <label> اختار رقم الحساب </label>\n                            <select formControlName=\"used_account\" class=\"form-control\">\n                              <option value=\"\">اختار رقم الحساب</option>\n                              <option *ngFor=\"let account of accounts.controls\" [value]=\"account.value.id\">\n                                {{account.value.currency}} {{account.value.number}}</option>\n                            </select>\n                          </div>\n                          <!--form-group-->\n                        </div>\n                      </div>\n\n                      <div class=\" Settings-form-main\">\n                        <div class=\"Settings-clone\" class=\"\" *ngFor=\"let account of accounts.controls; let i = index\"\n                          formArrayName=\"accounts\">\n                          <div class=\"row\" [formGroupName]=\"i\">\n\n                            <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                <label> حدد البنك </label>\n                                <select formControlName=\"bank_name\" class=\"form-control\">\n                                  <option value=\"ahli\"> الاهلى </option>\n                                  <option value=\"rajhi\" selected> الراجحي </option>\n                                  <option value=\"bilad\"> البلاد </option>\n                                  <option value=\"inma\"> الإنماء </option>\n                                </select>\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <!--col-md-6-->\n                            <div class=\"col-md-6\">\n                              <div class=\"form-group\">\n                                <label> رقم <span class=\"lang_en\">IBAN</span> </label>\n                                <input type=\"text\" formControlName=\"iban\" class=\"form-control lang_en\" placeholder=\" \">\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <!--col-md-6-->\n                            <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                <label> اسم صاحب الحساب </label>\n                                <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"  ادخل  اسم صاحب الحساب \">\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <!--col-md-6-->\n                            <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                <label> رقم الحسابي البنكي </label>\n                                <input type=\"text\" formControlName=\"number\" class=\"form-control\" placeholder=\" ادخل رقم الحساب\">\n                                <input type=\"hidden\" formControlName=\"id\" class=\"form-control\">\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <!--col-md-6-->\n                            <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                <label> العملة </label>\n                                <select formControlName=\"currency\" class=\"form-control lang_en\" title=\"العملة\">\n                                  <option value=\"SR\" selected> SR </option>\n                                  <option value=\"USD\"> USD </option>\n                                  <option value=\"ERU\"> ERU</option>\n                                  <option value=\"USD\"> USD </option>\n                                </select>\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <!--col-md-6-->\n                            <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                <label> ضريبة القيمة المضافة </label>\n                                <select formControlName=\"fees\" class=\"form-control lang_en\" title=\" اختار الضريبة    \">\n                                  <option value=\"0\"> 0% </option>\n                                  <option value=\"5\" selected> 5% </option>\n                                  <option value=\"10\"> 10% </option>\n                                  <option value=\"15\"> 15% </option>\n                                </select>\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <div class=\"col-md-6 text-left\">\n                              <a (click)=\"deleteAccount($event, i)\" *ngIf=\"accounts.controls.length > 1\" class=\"btn btn-link color-red\"\n                                title=\"حذف هذا الحساب\" style=\"margin-top: 20px;\">\n                                <i class=\"fa fa-minus-circle\"></i>\n                                <span>حذف </span> </a>\n                            </div>\n                            <!--col-md-6-->\n                          </div>\n                        </div>\n                      </div>\n                      <!--Settings-form-main-->\n\n                      <div class=\"add-more-div margin-b-15\">\n                        <a (click)=\"addAccount($event, i)\" class=\"btn btn-link color-orange add-Settings-clone\"\n                          *ngIf=\"accounts.controls.length < 4\"> <i class=\"fa fa-plus-circle\"></i>\n                          <span> أضافة حساب جديد</span> </a>\n                      </div>\n                      <div class=\"read-more-home\">\n                        <div class=\"pull-left\">\n                          <div class=\"read-more-home read-more-slide-cat\">\n                            &nbsp;&nbsp;\n                            <button type=\"submit\" class=\"hvr-bounce-to-right\">حفظ</button>\n                            <button type=\"button\" class=\"btn-b hvr-bounce-to-right\" (click)=\"resetForm()\">الغاء</button>\n                          </div>\n                          <!-- read-more-slide-cat -->\n                        </div>\n                        <!-- read-more-slide-cat -->\n                      </div>\n                      <!-- read-more-absolute -->\n                    </form>\n                  </div>\n                  <!--form-main-->\n                </div>\n                <!--box-min-content-->\n              </div>\n              <!--box-min-->\n            </div>\n            <!-- col-md-9 -->\n          </div>\n          <!-- box-min2 -->\n        </div>\n        <!-- row -->\n      </div>\n      <!--content-wrapper -->\n    </div>\n    <!--col-md-9 main-content -->\n    <footer id=\"footer\" app-footer></footer>\n  </div>\n  <!--main-content-in-->\n</div>"

/***/ }),

/***/ "./src/app/pages/informations/informations.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/informations/informations.component.ts ***!
  \**************************************************************/
/*! exports provided: InformationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationsComponent", function() { return InformationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/payments-service/payments.service */ "./src/app/services/payments-service/payments.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InformationsComponent = /** @class */ (function () {
    function InformationsComponent(paymentsService, fb) {
        this.paymentsService = paymentsService;
        this.fb = fb;
        this.info = null;
        this.loading = true;
        this.info_form = this.fb.group({
            used_account: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            accounts: this.fb.array([this.account()])
        });
    }
    Object.defineProperty(InformationsComponent.prototype, "accounts", {
        get: function () { return this.info_form.get('accounts'); },
        enumerable: true,
        configurable: true
    });
    InformationsComponent.prototype.account = function (id, bank_name, iban, name, number, currency, fees) {
        return this.fb.group({
            bank_name: [bank_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            iban: [iban, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: [name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            number: [number, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            currency: [currency, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            fees: [fees, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            id: [id || this.generateCode]
        });
    };
    InformationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.paymentsService._info.snapshotChanges()
            .map(function (actions) {
            _this.loading = false;
            _this.info = null;
            return actions.map(function (a) {
                var id = a.payload.doc.id;
                _this.info = __assign({ id: id }, a.payload.doc.data());
                _this.info_form.patchValue({ used_account: _this.info.used_account });
                _this.removeAllAccounts();
                for (var i in _this.info.accounts) {
                    var account = _this.info.accounts[i];
                    _this.accounts.push(_this.account(account.id, account.bank_name, account.iban, account.name, account.number, account.currency, account.fees));
                }
            });
        })
            .subscribe();
    };
    InformationsComponent.prototype.save = function () {
        this._error = null;
        if (this.info_form.invalid) {
            this._error = 'invalid';
            return;
        }
        var body = __assign({}, this.info_form.value);
        if (this.info) {
            var used = body.used_account;
            body.used_account = '';
            for (var i in this.accounts.controls) {
                var item = this.accounts.controls[i].value;
                if (item.id == used) {
                    body.used_account = item.id;
                    break;
                }
            }
        }
        if (!body.used_account) {
            this._error = 'account';
            return;
        }
        this.paymentsService.update((this.info ? this.info.id : null), body, (this.info ? true : false));
        this._error = 'success';
    };
    InformationsComponent.prototype.resetForm = function () {
        this.info_form.reset();
        var n = this.accounts.length;
        for (var i = 1; n > i; n--) {
            this.accounts.removeAt(i);
        }
    };
    InformationsComponent.prototype.removeAllAccounts = function () {
        var n = this.accounts.length;
        for (var i = 0; n > i; n--) {
            this.accounts.removeAt(i);
        }
    };
    InformationsComponent.prototype.addAccount = function (e) {
        e.preventDefault();
        if (this.accounts.controls.length >= 4) {
            return;
        }
        this.accounts.push(this.account());
    };
    InformationsComponent.prototype.deleteAccount = function (e, i) {
        e.preventDefault();
        if (this.accounts.controls.length <= 1) {
            return;
        }
        var c = this.accounts.controls[i];
        if (c.controls.id.value == this.info_form.get('used_account').value) {
            this.info_form.patchValue({ used_account: '' });
        }
        this.accounts.removeAt(i);
    };
    Object.defineProperty(InformationsComponent.prototype, "generateCode", {
        get: function () {
            return Math.random().toString(26).substring(2);
        },
        enumerable: true,
        configurable: true
    });
    InformationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informations',
            template: __webpack_require__(/*! ./informations.component.html */ "./src/app/pages/informations/informations.component.html"),
            styles: [__webpack_require__(/*! ./informations.component.css */ "./src/app/pages/informations/informations.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_payments_service_payments_service__WEBPACK_IMPORTED_MODULE_1__["PaymentsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], InformationsComponent);
    return InformationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-main clearfix\">\n\n\n  <div class=\"login-logo text-center margin-t-70  margin-b-70 margin-b-15\">\n    <div class=\"camp-logo\">\n      <a routerLink=\"/\" class=\"margelogin\"><img src=\"/assets/images/logo.svg\" alt=\"الشعار\" title=\"الرئيسية\"></a>\n    </div>\n  </div>\n  <!--login-logo-->\n\n\n  <div class=\"col-md-4 col-md-offset-4\">\n\n\n\n    <div class=\"box-min\">\n      <div class=\"box-head\">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active btn-block text-center\"><a> <span> تسجيل الدخول </span></a></li>\n        </ul>\n      </div>\n      <!--box-head-->\n      <div class=\"box-min-content\">\n        <div class=\"form-main\">\n          <div class=\"alert alert-danger\" *ngIf=\"_error\">خطأ معلومات الدخول غير صحيحة.</div>\n          <form [formGroup]=\"user\" (ngSubmit)=\"login()\">\n\n            <div class=\"login-main form-main  \">\n              <div class=\"form-login\">\n                <div class=\"form-group\">\n                  <input type=\"email\" formControlName=\"email\" id=\"email\" class=\"form-control\" placeholder=\" البريد الالكتروني\">\n                  <div class=\"alert alert-danger\" *ngIf=\"email.invalid && email.touched\">يجب كتابة بريد صحيح</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\" placeholder=\"كلمة المرور\">\n                  <div class=\"alert alert-danger\" *ngIf=\"password.invalid && password.touched\">يجب كتابة كلمة السر من 6\n                    الي 25 خانة</div>\n                </div>\n                <div class=\"read-more-home read-more-slide-cat text-center margin-t-15 \">\n                    <i class=\"fa fa-spin fa-spinner fa-3x\" *ngIf=\"loading\"></i>\n                  <button type=\"submit\" class=\"hvr-bounce-to-right\" [disabled]=\"user.invalid\" *ngIf=\"!loading\"> دخول</button>\n                </div>\n                <!-- read-more-slide-cat -->\n                <div class=\" text-center\">\n                  <a routerLink=\"/register\" class=\"btn btn-link  margin-b-0 text-center\"> <span>تسجيل حساب جديد</span></a>\n                  <a routerLink=\"/reset-password\" class=\"btn btn-link  margin-b-0 text-center\"> <span> استعادة كلمة السر</span></a>\n                </div>\n                <!-- text-center -->\n              </div>\n              <!--form-login-->\n            </div>\n            <!--login-main-->\n          </form>\n        </div>\n        <!--form-main-->\n      </div>\n      <!--box-min-content-->\n    </div>\n    <!--box-min-->\n\n  </div>\n</div>\n<!--login-page-->"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.loading = false;
        this._error = false;
        this.user = this.fb.group({
            email: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                ]
            ],
            password: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)
                ]
            ]
        });
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.user.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.user.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this._error = false;
        this.authService.doLogin(this.user.value)
            .then(function (res) {
            if (res.user.emailVerified) {
                localStorage.setItem("is_login", "true");
                _this.authService.setLoginCookie(res.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.router.navigate(['/email-verify']);
            }
            _this.loading = false;
        }, function (err) {
            _this._error = true;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-invoice/new-invoice.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/new-invoice/new-invoice.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched{\r\n    border-color: rgba(226, 33, 24, 0.5607843137254902);\r\n}"

/***/ }),

/***/ "./src/app/pages/new-invoice/new-invoice.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-invoice/new-invoice.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header app-navbar id=\"header-con\"></header>\n<div id=\"main\">\n  <div app-sidebar class=\"col-md-3 col-sm-12 col-xs-12 sidebar \"></div>\n  <div class=\" main-content\">\n    <div class=\"content-wrapper\">\n      <div class=\"main-content-in\">\n        <div class=\" \">\n          <div class=\"box-min2 clearfix\">\n            <div class=\"col-md-3 pp-left\">\n              <div class=\"box-min  box-none-bg \">\n                <div class=\"box-head margin-b-15\">\n                  <div class=\"box-head-link\">\n                    <a class=\"head-link-a\">\n                      كيف تملأ الفاتورة\n                      <button class=\"btn btn-link btn-link-button  \" type=\"button\" data-toggle=\"dropdown\">\n                        <i class=\"fa fa-question-circle\"></i>\n                      </button>\n                    </a>\n                  </div>\n                  <!--box-head-link-->\n                </div>\n                <!--box-head-->\n                <div class=\"info-box-Invoices\">\n                  <div class=\"info-box-main margin-t-70\">\n                    <h2>العملاء و القوالب</h2>\n                    <p>\n                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،\n                      حيث\n                      يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها\n                      التطبيق.\n                    </p>\n                  </div>\n                  <!-- info-box-main -->\n                  <div class=\"info-box-main  margin-t-10\">\n                    <h2> تفاصيل الشركة </h2>\n                    <p>\n                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،\n                      حيث\n                      يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها\n                      التطبيق.\n                    </p>\n                  </div>\n                  <!-- info-box-main -->\n                </div>\n                <!-- info-box-Invoices -->\n              </div>\n              <!--box-min-->\n            </div>\n            <!-- col-md-8 -->\n            <div class=\"col-md-9 padding-r-0\">\n              <div class=\"box-min   \">\n                <div class=\"box-head\">\n                  <ul class=\"nav nav-tabs\">\n                    <li><a><i class=\"fa fa-newspaper-o\"></i> <span> فاتورة جديدة </span></a></li>\n                  </ul>\n                </div>\n                <!--box-head-->\n                <div class=\"box-min-content\">\n                  <div class=\"form-main\">\n\n                    <div [ngSwitch]=\"_errors\">\n                      <div class=\"alert alert-danger alert-dismissible\" *ngSwitchCase=\"'invalid'\">\n                        <button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span></button>\n                        <div [ngSwitch]=\"_invalid_errors\">\n                            <span *ngSwitchCase=\"'company_email'\">الرجاء ادخال ايميل الشركة بشكل صحيح.</span>\n                            <span *ngSwitchCase=\"'company_name'\">الرجاء ادخال اسم الشركة.</span>\n                            <span *ngSwitchCase=\"'description'\">الرجاء ادخال تفاصل المنتج.</span>\n                            <span *ngSwitchCase=\"'quantity'\">الرجاء ادخال الكمية.</span>\n                            <span *ngSwitchCase=\"'price'\">الرجاء ادخال سعر المنتج.</span>\n                            <span *ngSwitchDefault> يرجى ملئ الخانات بشكل صحيح ، جميع الخانات الزامية</span>\n                        </div>\n                      </div>\n\n                      <div class=\"alert alert-danger alert-dismissible\" *ngSwitchCase=\"'reload'\">\n                        <button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span></button>\n                        <span>خطأ الرجاء اعادة تحميل الصفحة !.</span>\n                      </div>\n\n                      <div class=\"alert alert-success alert-dismissible\" *ngSwitchCase=\"'success'\">\n                        <button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span></button>\n                        <span>تمت اضافة الفاتورة بنجاح.</span>\n                      </div>\n\n                      <div class=\"alert alert-danger alert-dismissible\" *ngSwitchCase=\"'failed'\">\n                        <button type=\"button\" class=\"close\"><span aria-hidden=\"true\">&times;</span></button>\n                        <span>فشلت العملية لم يتم اضافة الفاتورة.</span>\n                      </div>\n                    </div>\n\n\n                    <form [formGroup]=\"billing\" (ngSubmit)=\"add()\">\n                      <div class=\"form-main-head\">\n                        <h2 class=\"margin-t-0\"><span>تفاصيل</span></h2>\n                      </div>\n                      <div class=\"row\">\n\n                        <div class=\"col-md-5\">\n                          <div class=\"form-group\">\n                            <label for=\"name\"> ايميل الشركة </label>\n                            <input type=\"text\" formControlName=\"company_email\" class=\"form-control\" placeholder=\"ادخل الايميل هنا\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                            <label for=\"name\">اسم الشركة </label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"company_name\" placeholder=\"ادخل اسم الشركة هنا\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                            <label for=\"name\"> ادخل التاريخ </label>\n                            <angular2-date-picker [settings]=\"dateSettings\" formControlName=\"date\" placeholder=\"اختار التاريخ\"\n                              class=\"form-control\"></angular2-date-picker>\n                          </div>\n                        </div>\n                      </div>\n                      <!--row-->\n                      <div class=\"form-main-head\">\n                        <h2 class=\"\"><span> قائمة الخدمات </span></h2>\n                      </div>\n                      <div class=\"Settings-form-main\">\n\n                        <div *ngFor=\"let product of products.controls; let i = index;\" formArrayName=\"products\" class=\"Settings-clone\">\n                          <div class=\"row\" [formGroupName]=\"i\">\n                            <div class=\"col-md-5\">\n                              <div class=\"form-group form-group-span\">\n                                <label for=\"name\"> تفاصيل الخدمة </label>\n                                <input type=\"text\" formControlName=\"description\" (keyup)=\"descCount($event)\" maxlength=\"420\"\n                                  class=\"form-control\" placeholder=\"أدخل تفاصيل الخدمة\">\n                                <span>{{desc_number}}</span>\n                              </div>\n                            </div>\n                            <div class=\"col-md-2\">\n                              <div class=\"form-group\">\n                                <label for=\"name\"> الكمية </label>\n                                <input type=\"text\" formControlName=\"quantity\" numberOnly class=\"form-control\" placeholder=\"20\">\n                              </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                              <div class=\"form-group\">\n                                <label for=\"name\"> السعر </label>\n                                <input type=\"text\" formControlName=\"price\" numberOnly class=\"form-control\" placeholder=\"10,000\">\n                              </div>\n                            </div>\n                            <div class=\"col-md-2 text-center\" *ngIf=\"products.controls.length > 1\">\n                              <a (click)=\"deleteProduct($event, i)\" class=\"btn btn-link color-red\" title=\"حذف هذا المنتج\"\n                                style=\"margin-top: 20px;\">\n                                <i class=\"fa fa-minus-circle\"></i>\n                                <span>حذف </span> </a>\n                            </div>\n                          </div>\n                        </div>\n                        <!--row-->\n\n                      </div>\n                      <!--Settings-form-main-->\n\n\n                      <div class=\"add-more-div\">\n                        <a *ngIf=\"products.controls.length < 10\" (click)=\"addProduct($event)\" class=\"btn btn-link color-orange\">\n                          <i class=\"fa fa-plus-circle\"></i>\n                          <span>أضافة خدمة جديدة</span> </a>\n                      </div>\n\n                      <div class=\"read-more-home\">\n                        <div class=\"pull-left\">\n                          <div class=\"read-more-home read-more-slide-cat\">\n                            <i class=\"fa fa-spin fa-spinner fa-3x color-orange\" *ngIf=\"loading\"></i>\n                            <button type=\"submit\" *ngIf=\"!loading\" class=\"hvr-bounce-to-right\">\n                              حفظ الفاتورة</button>\n                            <button type=\"button\" (click)=\"resetForm()\" class=\"btn-b hvr-bounce-to-right\">الغاء</button>\n                          </div>\n                          <!-- read-more-slide-cat -->\n                        </div>\n                        <!-- read-more-slide-cat -->\n                      </div>\n                      <!-- read-more-absolute -->\n                    </form>\n                  </div>\n                  <!--form-main-->\n                </div>\n                <!--box-min-content-->\n              </div>\n              <!--box-min-->\n            </div>\n            <!-- col-md-9 -->\n          </div>\n          <!-- box-min2 -->\n        </div>\n        <!-- row -->\n      </div>\n      <!--content-wrapper -->\n    </div>\n    <!--col-md-9 main-content -->\n    <footer id=\"footer\" app-footer></footer>\n  </div>\n  <!--main-content-in-->\n\n</div>"

/***/ }),

/***/ "./src/app/pages/new-invoice/new-invoice.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/new-invoice/new-invoice.component.ts ***!
  \************************************************************/
/*! exports provided: NewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInvoiceComponent", function() { return NewInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/billings-service/billings.service */ "./src/app/services/billings-service/billings.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewInvoiceComponent = /** @class */ (function () {
    function NewInvoiceComponent(fb, billingsService) {
        this.fb = fb;
        this.billingsService = billingsService;
        this.date = new Date();
        this.loading = false;
        this.desc_number = 420;
        this.dateSettings = {
            bigBanner: false,
            timePicker: true,
            format: 'dd-MM-yyyy'
        };
        this.billing = this.fb.group({
            date: [this.date.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            ],
            company_email: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            company_name: [
                '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            ],
            products: this.fb.array([this.product])
        });
    }
    Object.defineProperty(NewInvoiceComponent.prototype, "products", {
        get: function () { return this.billing.get('products'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewInvoiceComponent.prototype, "product", {
        get: function () {
            return this.fb.group({
                description: [
                    '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(420)]
                ],
                quantity: [
                    '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                ],
                price: [
                    '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                ]
            });
        },
        enumerable: true,
        configurable: true
    });
    NewInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billingsService.getLastItem.valueChanges().subscribe(function (item) {
            if (!item || !item.length) {
                _this.setNumber(0);
            }
            else {
                _this.setNumber(item[0]._number);
            }
        });
    };
    NewInvoiceComponent.prototype.setNumber = function (n) {
        var number;
        var n = +n + 1;
        if (n < 10) {
            number = '000';
        }
        else if (n < 100) {
            number = '00';
        }
        else if (n < 1000) {
            number = 0;
        }
        this.last_item_id = "" + number + n;
    };
    NewInvoiceComponent.prototype.add = function () {
        this._errors = '';
        if (this.billing.invalid) {
            for (var i in this.billing.controls) {
                var control = this.billing.controls[i];
                if (i == 'products') {
                    for (var k in this.products.controls) {
                        var p = this.products.controls[k];
                        for (var ii in p.controls) {
                            if (p.controls[ii].errors) {
                                this._invalid_errors = ii;
                                break;
                            }
                        }
                    }
                    break;
                }
                if (control.errors) {
                    this._invalid_errors = i;
                    break;
                }
            }
            this._errors = 'invalid';
            return;
        }
        var body = __assign({}, this.billing.value);
        if (!this.last_item_id) {
            this._errors = 'reload';
            return;
        }
        body._number = this.last_item_id;
        if (this.billingsService.add(body)) {
            this._errors = 'success';
        }
        else {
            this._errors = 'failed';
        }
        this.resetForm();
    };
    NewInvoiceComponent.prototype.resetForm = function () {
        this.billing.reset({
            date: this.date.toString()
        });
        var n = this.products.length;
        for (var i = 1; n > i; n--) {
            this.products.removeAt(i);
        }
    };
    NewInvoiceComponent.prototype.addProduct = function (e) {
        e.preventDefault();
        if (this.products.controls.length >= 10) {
            return;
        }
        this.products.push(this.product);
    };
    NewInvoiceComponent.prototype.deleteProduct = function (e, i) {
        e.preventDefault();
        if (this.products.controls.length <= 1) {
            return;
        }
        this.products.removeAt(i);
    };
    NewInvoiceComponent.prototype.descCount = function (e) {
        var l = e.target.value.length;
        var r = 420;
        if (l > r) {
            e.preventDefault();
            return false;
        }
        this.desc_number = r - l;
    };
    NewInvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-invoice',
            template: __webpack_require__(/*! ./new-invoice.component.html */ "./src/app/pages/new-invoice/new-invoice.component.html"),
            styles: [__webpack_require__(/*! ./new-invoice.component.css */ "./src/app/pages/new-invoice/new-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_billings_service_billings_service__WEBPACK_IMPORTED_MODULE_2__["BillingsService"]])
    ], NewInvoiceComponent);
    return NewInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert.alert-danger{\r\n    padding: 5px;\r\n}"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-main clearfix\">\n\n\n  <div class=\"login-logo text-center margin-t-70  margin-b-70 margin-b-15\">\n    <div class=\"camp-logo\">\n      <a routerLink=\"/\" class=\"margelogin\"><img src=\"/assets/images/logo.svg\" alt=\"الشعار\" title=\"الرئيسية\"></a>\n    </div>\n  </div>\n  <!--login-logo-->\n\n\n  <div class=\"col-md-4 col-md-offset-4\">\n\n\n\n    <div class=\"box-min   \">\n      <div class=\"box-head\">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active btn-block text-center\"><a> <span>  تسجيل حساب جديد  </span></a></li>\n        </ul>\n      </div>\n      <!--box-head-->\n      <div class=\"box-min-content\">\n        <div class=\"form-main\">\n          <div class=\"alert alert-danger\" *ngIf=\"_error\">{{_error}}</div>\n          <form [formGroup]=\"user\" (ngSubmit)=\"signUp()\">\n            <div class=\"login-main form-main\">\n              <div class=\"form-login\">\n                <div class=\"form-group\">\n                  <input type=\"text\" formControlName=\"name\" id=\"name\" class=\"form-control\" placeholder=\"الاسم الكامل\"\n                    autofocus>\n                  <div class=\"alert alert-danger\" *ngIf=\"name.invalid && name.touched\">يجب كتابة الاسم الكامل</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" formControlName=\"email\" id=\"email\" class=\"form-control\" placeholder=\" البريد الالكتروني\">\n                  <div class=\"alert alert-danger\" *ngIf=\"email.invalid && email.touched\">يجب كتابة بريد صحيح</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\" placeholder=\"كلمة المرور\">\n                  <div class=\"alert alert-danger\" *ngIf=\"password.invalid && password.touched\">يجب كتابة كلمة السر من 6\n                    الي 25 خانة</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" formControlName=\"passwordConfirm\" id=\"passwordConfirm\" class=\"form-control\"\n                    placeholder=\" تأكيد كلمة المرور  \">\n                  <div class=\"alert alert-danger\" *ngIf=\"passwordConfirm.invalid && passwordConfirm.errors?.required && passwordConfirm.touched\">يجب\n                    كتابة تأكيد كلمة السر</div>\n                  <div class=\"alert alert-danger\" *ngIf=\"passwordConfirm.errors?.confirm\">يجب كتابة كلمة السر من 6 الي\n                    25 خانة</div>\n                </div>\n                <div class=\"read-more-home read-more-slide-cat text-center margin-t-15 \">\n                  <i class=\"fa fa-spin fa-spinner fa-3x\" *ngIf=\"loading\"></i>\n                  <button type=\"submit\" class=\"hvr-bounce-to-right\" [disabled]=\"user.invalid\" *ngIf=\"!loading\"> تسجيل</button>\n                </div>\n                <!-- read-more-slide-cat -->\n                <div class=\" text-center\">\n                  <a routerLink=\"/login\" class=\"btn btn-link  margin-b-0 text-center\"> <span> تسجيل الدخول </span>\n                  </a>\n                </div>\n                <!-- text-center -->\n              </div>\n              <!--form-login-->\n            </div>\n            <!--login-main-->\n          </form>\n        </div>\n        <!--form-main-->\n      </div>\n      <!--box-min-content-->\n    </div>\n    <!--box-min-->\n\n  </div>\n</div>\n<!--login-page-->"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_lang_lang_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/lang/lang.service */ "./src/app/services/lang/lang.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService, lang, router) {
        this.fb = fb;
        this.authService = authService;
        this.lang = lang;
        this.router = router;
        this.registered = false;
        this.loading = false;
        this.user = this.fb.group({
            name: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            ],
            email: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            password: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)
                ]
            ],
            passwordConfirm: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24)
                ]
            ]
        });
    }
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () { return this.user.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.user.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.user.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordConfirm", {
        get: function () { return this.user.get('passwordConfirm'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this._error = null;
        if (this.password.value !== this.passwordConfirm.value) {
            this.passwordConfirm.setValue('');
            this.passwordConfirm.setErrors({ confirm: true });
            return;
        }
        this.loading = true;
        this.authService.doRegister(this.user.value)
            .then(function (res) {
            _this.loading = false;
            _this.router.navigate(['/email-verify']);
        }, function (err) {
            _this._error = (_this.lang.arabic[err.code] ? _this.lang.arabic[err.code] : _this.lang.arabic.opps_error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_lang_lang_service__WEBPACK_IMPORTED_MODULE_4__["LangService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-main clearfix\">\n\n\n  <div class=\"login-logo text-center margin-t-70  margin-b-70 margin-b-15\">\n    <div class=\"camp-logo\">\n      <a routerLink=\"/\" class=\"margelogin\"><img src=\"/assets/images/logo.svg\" alt=\"الشعار\" title=\"الرئيسية\"></a>\n    </div>\n  </div>\n  <!--login-logo-->\n\n\n  <div class=\"col-md-4 col-md-offset-4\">\n\n\n\n    <div class=\"box-min\">\n      <div class=\"box-head\">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active btn-block text-center\"><a> <span> استعادة كلمة السر </span></a></li>\n        </ul>\n      </div>\n      <!--box-head-->\n      <div class=\"box-min-content\">\n        <div class=\"form-main\">\n          <div [ngSwitch]=\"_error\" *ngIf=\"_error\">\n            <div class=\"alert alert-success\" *ngSwitchCase=\"'success'\">تم ارسال رابط استعادة كلمة السر الى بريدك الالكتروني.</div>\n            <div class=\"alert alert-danger\" *ngSwitchDefault>{{lang.arabic[_error] ? lang.arabic[_error] : lang.arabic.opps_error}}</div>\n          </div>\n          <form [formGroup]=\"user\" (ngSubmit)=\"sendResetPassword()\">\n\n            <div class=\"login-main form-main  \">\n              <div class=\"form-login\">\n                <div class=\"form-group\">\n                  <input type=\"email\" formControlName=\"email\" id=\"email\" class=\"form-control\" placeholder=\" البريد الالكتروني\">\n                  <div class=\"alert alert-danger\" *ngIf=\"email.invalid && email.touched\">يجب كتابة بريد صحيح</div>\n                </div>\n                <div class=\"read-more-home read-more-slide-cat text-center margin-t-15 \">\n                  <i class=\"fa fa-spin fa-spinner fa-3x\" *ngIf=\"loading\"></i>\n                  <button type=\"submit\" class=\"hvr-bounce-to-right\" [disabled]=\"user.invalid\" *ngIf=\"!loading\"> ارسال</button>\n                </div>\n                <!-- read-more-slide-cat -->\n                <!-- text-center -->\n              </div>\n              <!--form-login-->\n            </div>\n            <!--login-main-->\n          </form>\n          <div class=\" text-center\">\n            <a routerLink=\"/login\" class=\"btn btn-link  margin-b-0 text-center\"> <span> دخول</span></a>\n          </div>\n        </div>\n        <!--form-main-->\n      </div>\n      <!--box-min-content-->\n    </div>\n    <!--box-min-->\n\n  </div>\n</div>\n<!--login-page-->"

/***/ }),

/***/ "./src/app/pages/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var src_app_services_lang_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/lang/lang.service */ "./src/app/services/lang/lang.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, afAuth, lang, router) {
        this.fb = fb;
        this.afAuth = afAuth;
        this.lang = lang;
        this.router = router;
        this.loading = false;
        this.user = this.fb.group({
            email: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ]
        });
    }
    Object.defineProperty(ResetPasswordComponent.prototype, "email", {
        get: function () { return this.user.get('email'); },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.sendResetPassword = function () {
        var _this = this;
        this.loading = true;
        this._error = null;
        this.afAuth.auth.sendPasswordResetEmail(this.user.value.email).then(function () {
            _this.loading = false;
            _this._error = 'success';
            _this.user.reset();
        }).catch(function (err) {
            _this.loading = false;
            _this._error = err.code;
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/pages/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], src_app_services_lang_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 60px;\r\n    width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header app-navbar id=\"header-con\"></header>\n<div id=\"main\">\n  <div app-sidebar class=\"col-md-3 col-sm-12 col-xs-12 sidebar \"></div>\n  <div class=\" main-content\">\n\n    <div class=\"uploadLogo\" style=\"width: 100%; margin: 60px;\">\n      <label for=\"file\">File:</label>\n      <input type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg,.svg\" />\n\n      <progress max=\"100\" [value]=\"(uploadProgress | async)\"></progress>\n\n      <a [href]=\"downloadURL | async\" style=\"display: block;\">{{ downloadURL | async }}</a>\n      <img [src]=\"downloadURL | async\" style=\"width: 300px; display: block;\">\n    </div>\n\n    <div class=\"content-wrapper\">\n      <div class=\"main-content-in\">\n        <div class=\" \">\n          <div class=\"box-min2 box-fff-bg clearfix\">\n            <div class=\"col-md-4 pp-left Settings-sidebar \">\n              <div class=\"box-min  box-none-bg \">\n                <div class=\"box-head margin-b-15\">\n                  <div class=\"box-head-link\">\n                    <a class=\"head-link-a\">\n                      معلومات عامة\n                    </a>\n                  </div>\n                  <!--box-head-link-->\n                </div>\n                <!--box-head-->\n                <div class=\"Settings-sidebar-info\">\n                  <ul>\n                    <li><a>الامان و الخصوصية</a> </li>\n                    <li><a> مساعدة ؟</a> </li>\n                    <li><a> اتصل بنا </a> </li>\n                    <li><a class=\"color-red\"> حذف الحساب</a> </li>\n                  </ul>\n                </div>\n                <!-- Settings-sidebar-info -->\n\n              </div>\n              <!--box-min-->\n            </div>\n            <!-- col-md-8 -->\n            <div class=\"col-md-8 padding-r-0\">\n              <div class=\"box-min   \">\n                <div class=\"box-head\">\n                  <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a> <span> معلومات عامة </span></a></li>\n                  </ul>\n                </div>\n                <!--box-head-->\n                <div class=\"box-min-content\">\n                  <div class=\"alert alert-success\" *ngIf=\"changeSuccess\">تم حفظ التغييرات</div>\n                  <div [ngSwitch]=\"uploadFailed\">\n                    <div class=\"alert alert-danger\" *ngSwitchCase=\"'invalid'\">خطأ لم يتم حفظ الصورة</div>\n                    <div class=\"alert alert-danger\" *ngSwitchCase=\"'type'\">صيغة الصورة غير مدعومة</div>\n                    <div class=\"alert alert-danger\" *ngSwitchCase=\"'size'\">اقصى حجم للشعار 1MB</div>\n                    <div class=\"alert alert-danger\" *ngSwitchCase=\"'image_size'\">مقاسات الشعار يجب ان تكون 150 * 60 او 60*60</div>\n                  </div>\n                  <div app-loading *ngIf=\"loading\"></div>\n                  <div class=\"form-main\" *ngIf=\"!loading\">\n                    <form [formGroup]=\"settings\" (ngSubmit)=\"save()\">\n                      <div class=\" Settings-form-main\">\n                        <div class=\"row Settings-clone\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <div class=\"company-Settings-img clearfix\">\n                                <div class=\"images-r pull-left\" *ngIf=\"!uploadLoading\">\n                                  <img [hidden]=\"!logoUrl\" [src]=\"logoUrl | async\" alt=\"شعار شركتك\" title=\"شعار شركتك\">\n                                  <img [hidden]=\"logoUrl\" src=\"/assets/images/logo.svg\" alt=\"شعار شركتك\" title=\"شعار شركتك\">\n                                </div>\n                                <!-- images-r -->\n                                <div class=\"form-group\">\n                                  <div *ngIf=\"!uploadLoading\" class=\"fileupload fileupload-new pic-img-up\"\n                                  data-provides=\"fileupload\">\n                                  <span class=\"btn btn-primary btn-file\">\n                                    <span class=\"fileupload-new\"><i class=\"fa fa-cloud-upload\"></i> اختر صورة </span>\n                                    <span class=\"fileupload-exists\"><i class=\"fa fa-cloud-upload\"></i> تغيير</span>\n                                    <!-- <input type=\"file\" (change)=\"uploadLogo($event)\" accept=\"image/*\" /> -->\n                                    <input id=\"uploadFile\" type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg,.svg\" />\n                                  </span>\n                                  <div style=\"font-size: 10px;color: #8c8a8a;\">حجم الشعار المسموح به 1MB , الصيغ المسموحة ( PNG , JPG , JPEG, SVG )</div>\n                                </div>\n                                <div *ngIf=\"uploadLoading\" app-loading></div>\n                              </div>\n                              <!--form-group-->\n                            </div>\n                            <!-- company-Settings-img -->\n                          </div>\n                          <!--form-group-->\n                        </div>\n                        <!--col-md-6-->\n                        <div class=\"col-xs-12\">\n                          <div class=\"form-group\">\n                            <label> اسم الشركة </label>\n                            <input type=\"text\" formControlName=\"company_name\" class=\"form-control\" placeholder=\" ادخل اسم الشركة\">\n                          </div>\n                          <!--form-group-->\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label> رقم الجوال </label>\n                            <input type=\"text\" formControlName=\"company_phone\" class=\"form-control\" placeholder=\" ادخل رقم الجوال\">\n                          </div>\n                          <!--form-group-->\n                        </div>\n                        <!--col-md-6-->\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label> الايميل </label>\n                            <input type=\"text\" formControlName=\"company_email\" class=\"form-control\" placeholder=\" ادخل الايميل \">\n                          </div>\n                          <!--form-group-->\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label> الرقم الضريبي </label>\n                            <input type=\"text\" onlyNumber formControlName=\"fees_number\" class=\"form-control\"\n                            maxlength=\"25\" placeholder=\"الرقم الضريبي \">\n                          </div>\n                          <!--form-group-->\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"form-group\">\n                            <label> اللغة </label>\n                            <select formControlName=\"lang\" class=\"form-control\">\n                              <option value=\"ar\"> Arabic </option>\n                              <option value=\"en\"> English </option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>\n                      <!--row-->\n                    </div>\n                    <!--Settings-form-main-->\n\n                    <div class=\"\">\n                      <div class=\" text-left\">\n                        <div class=\"read-more-home read-more-slide-cat\">\n                          <button type=\"submit\" [disabled]=\"settings.invalid\" class=\"hvr-bounce-to-right\">حفظ</button>\n                          <button type=\"button\" class=\"btn-b hvr-bounce-to-right\">الغاء</button>\n                        </div>\n                        <!-- read-more-slide-cat -->\n                      </div>\n                      <!-- read-more-slide-cat -->\n                    </div>\n                    <!-- read-more-absolute -->\n                  </form>\n                </div>\n                <!--form-main-->\n              </div>\n              <!--box-min-content-->\n            </div>\n            <!--box-min-->\n          </div>\n          <!-- col-md-9 -->\n        </div>\n        <!-- box-min2 -->\n      </div>\n      <!-- row -->\n    </div>\n    <!--content-wrapper -->\n  </div>\n  <!--col-md-9 main-content -->\n  <footer id=\"footer\" app-footer></footer>\n</div>\n<!--main-content-in-->\n\n</div>"

/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_settings_service_user_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-settings-service/user-settings.service */ "./src/app/services/user-settings-service/user-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AngularFireStorage } from 'angularfire2/storage';

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(fb, settingsService, sanitizer, afStorage) {
        this.fb = fb;
        this.settingsService = settingsService;
        this.sanitizer = sanitizer;
        this.afStorage = afStorage;
        this.loading = false;
        this.logoUrl = null;
        this.urlImage = "";
        this.uploadLoading = false;
        this.exist = false;
        this.changeSuccess = false;
        this.settings = this.fb.group({
            company_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            company_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            company_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fees_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)],
            lang: ['']
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.settingsService._settings.snapshotChanges()
            .map(function (actions) {
            _this.user = null;
            _this.loading = false;
            _this.uploadLoading = false;
            actions.map(function (a) {
                _this.user = a.payload.doc.data();
                _this.id = a.payload.doc.id;
                _this.settings.patchValue(__assign({}, _this.user));
                _this.exist = true;
                if (_this.user.logo) {
                    _this.uploadLoading = true;
                    _this.settingsService.getLogo(_this.user.logo).subscribe(function (logo) {
                        _this.uploadLoading = false;
                        _this.logoUrl = logo || null;
                    }, function () {
                        _this.logoUrl = null;
                        _this.uploadLoading = false;
                    });
                }
            });
        }).subscribe();
    };
    SettingsComponent.prototype.upload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        // this.afStorage.upload('/upload/', file); 
        // const randomId = Math.random().toString(36).substring(2);
        // this.ref = this.afStorage.ref(randomId);
        // this.task = this.ref.put(event.target.files[0]); 
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref('/companies/' + id);
        this.task = this.ref.put(file);
        this.uploadProgress = this.task.percentageChanges();
        this.changeSuccess = false;
        this.uploadFailed = '';
        if (!file) {
            return;
        }
        if (file.size > 1048576) {
            this.uploadFailed = 'size';
            return;
        }
        if (file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/jpeg' && file.type != 'image/svg+xml') {
            this.uploadFailed = 'type';
            return;
        }
        var _url = window.URL;
        var logo = new Image();
        logo.onload = function (e) {
            var w = e.path[0].width;
            var h = e.path[0].height;
            _this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this.downloadURL = _this.ref.getDownloadURL();
                _this.logoUrl = _this.ref.getDownloadURL();
                _this.uploadLoading = false;
                localStorage.setItem("url_logo", JSON.parse(_this.logoUrl));
            }))
                .subscribe();
        };
        logo.src = _url.createObjectURL(file);
    };
    SettingsComponent.prototype.save = function () {
        this.changeSuccess = false;
        var body;
        if (this.exist) {
            body = __assign({}, this.user, this.settings.value);
        }
        else {
            body = __assign({}, this.settings.value);
        }
        if (this.uploadUrl) {
            body.logo = this.uploadUrl;
        }
        this.settingsService.update(this.id, body, this.exist);
        this.changeSuccess = true;
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/pages/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_settings_service_user_settings_service__WEBPACK_IMPORTED_MODULE_4__["UserSettingsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-service/auth-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/auth-service/auth-service.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_interfaces_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/user */ "./src/app/interfaces/user.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(db, afAuth, cookieService) {
        this.db = db;
        this.afAuth = afAuth;
        this.cookieService = cookieService;
    }
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('الرجاء تسجيل الدخول للمتابعة.');
                }
            });
        });
    };
    AuthService.prototype.updateCurrentUser = function (value) {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doRegister = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(user.email, user.password)
                .then(function (res) {
                res.user.sendEmailVerification();
                _this.updateCurrentUser(user);
                var u = __assign({}, new src_app_interfaces_user__WEBPACK_IMPORTED_MODULE_6__["User"]());
                u.uid = res.user.uid;
                u.name = user.name;
                u.email = user.email;
                _this.db.collection('users').add(u);
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (user) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(user.email, user.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                _this.removeLoginCookie();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService.prototype.setLoginCookie = function (user) {
        this.cookieService.set('user_id', user.uid);
        this.cookieService.set('user_name', user.displayName);
        this.cookieService.set('user_email', user.email);
        this.cookieService.set('user_email_verified', user.emailVerified);
    };
    AuthService.prototype.removeLoginCookie = function () {
        this.cookieService.deleteAll();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/billings-service/billings.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/billings-service/billings.service.ts ***!
  \***************************************************************/
/*! exports provided: BillingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingsService", function() { return BillingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BillingsService = /** @class */ (function () {
    function BillingsService(db, cookieService) {
        var _this = this;
        this.db = db;
        this.cookieService = cookieService;
        this.user = {};
        this.user = this.cookieService.getAll();
        if (this.user.user_id) {
            this.billings = this.db.collection('billings', function (ref) {
                return ref.where('uid', '==', _this.user.user_id).orderBy('_number', 'desc');
            });
        }
    }
    Object.defineProperty(BillingsService.prototype, "getBillings", {
        get: function () {
            return this.billings;
        },
        enumerable: true,
        configurable: true
    });
    BillingsService.prototype.add = function (billing) {
        if (!this.user.user_id) {
            return false;
        }
        billing.uid = this.user.user_id;
        billing.status = 'waiting';
        billing.total = 0;
        this.billings.add(billing);
        return true;
    };
    BillingsService.prototype.update = function (id, billing) {
        this.billing = this.db.doc("billings/" + id);
        this.billing.update(billing);
    };
    BillingsService.prototype.delete = function (id) {
        this.billing = this.db.doc("billings/" + id);
        this.billing.delete();
    };
    Object.defineProperty(BillingsService.prototype, "getLastItem", {
        get: function () {
            var _this = this;
            return this.db.collection('billings', function (ref) { return ref.where('uid', '==', _this.user.user_id).orderBy('_number', 'desc').limit(1); });
        },
        enumerable: true,
        configurable: true
    });
    BillingsService.prototype.getById = function (id) {
        return this.db.doc("billings/" + id);
    };
    BillingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], BillingsService);
    return BillingsService;
}());



/***/ }),

/***/ "./src/app/services/lang/lang.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/lang/lang.service.ts ***!
  \***********************************************/
/*! exports provided: LangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
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

var LangService = /** @class */ (function () {
    function LangService() {
        this.arabic = {
            'auth/email-already-in-use': 'هذا البريد مستخدم بالفعل فى حساب آخر، يمكنك الضغط على تسجيل الدخول للدخول لحسابك.',
            'opps_error': 'خطأ! يرجى المحاولة.',
            'auth/user-not-found': 'هذا البريد غير موجود ، يمكنك تسجيل حساب جديد'
            //There is no user record corresponding to this identifier. The user may have been deleted.
        };
    }
    LangService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LangService);
    return LangService;
}());



/***/ }),

/***/ "./src/app/services/payments-service/payments.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/payments-service/payments.service.ts ***!
  \***************************************************************/
/*! exports provided: PaymentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsService", function() { return PaymentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsService = /** @class */ (function () {
    function PaymentsService(db, cookieService) {
        var _this = this;
        this.db = db;
        this.cookieService = cookieService;
        this.user = {};
        this.user = this.cookieService.getAll();
        if (this.user.user_id) {
            this.info = this.db.collection('pay_info', function (ref) { return ref.where('uid', '==', _this.user.user_id); });
        }
    }
    Object.defineProperty(PaymentsService.prototype, "_info", {
        get: function () {
            return this.info;
        },
        enumerable: true,
        configurable: true
    });
    PaymentsService.prototype.getByUId = function (uid) {
        return this.db.collection('pay_info', function (ref) { return ref.where('uid', '==', uid); });
    };
    PaymentsService.prototype.update = function (id, info, exist) {
        if (!this.user.user_id) {
            return false;
        }
        if (!exist) {
            info.uid = this.user.user_id;
            this.info.add(info);
            return;
        }
        var i = this.db.doc("pay_info/" + id);
        i.update(info);
    };
    PaymentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], PaymentsService);
    return PaymentsService;
}());



/***/ }),

/***/ "./src/app/services/user-settings-service/user-settings.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/user-settings-service/user-settings.service.ts ***!
  \*************************************************************************/
/*! exports provided: UserSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsService", function() { return UserSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _interfaces_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/user */ "./src/app/interfaces/user.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



var UserSettingsService = /** @class */ (function () {
    function UserSettingsService(db, cookieService, 
    // private afstorage: AngularFireStorage,
    afStorage) {
        var _this = this;
        this.db = db;
        this.cookieService = cookieService;
        this.afStorage = afStorage;
        this.user = {};
        this.user = this.cookieService.getAll();
        if (this.user.user_id) {
            this.settings = this.db.collection('users', function (ref) { return ref.where('uid', '==', _this.user.user_id); });
        }
    }
    Object.defineProperty(UserSettingsService.prototype, "_settings", {
        get: function () { return this.settings; },
        enumerable: true,
        configurable: true
    });
    UserSettingsService.prototype.getByUId = function (uid) {
        return this.db.collection('users', function (ref) { return ref.where('uid', '==', uid); });
    };
    UserSettingsService.prototype.update = function (id, user, exist) {
        if (!this.user.user_id) {
            return false;
        }
        if (!exist) {
            var u = new _interfaces_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
            u.uid = this.user.user_id;
            u.name = this.user.user_name;
            u.email = this.user.user_email;
            user = __assign({}, u, user);
            this.settings.add(user);
            return;
        }
        var i = this.db.doc("users/" + id);
        i.update(user);
    };
    UserSettingsService.prototype.saveLogo = function (file) {
        // console.log(file);
        // const randome_id = Math.random().toString(26).substring(2);
        // var ref = this.afStorage.ref(`/companies/${randome_id}`);
        // console.log(ref);
        // this. ref.put(file);
        // const id = Math.random().toString(36).substring(2);
        // this.ref = this.afStorage.ref(id);
        // this.task = this.ref.put(file);
        // console.log(this.task);
        // return this.task;
        this.afStorage.upload('/upload/', file);
        return 1;
    };
    UserSettingsService.prototype.getLogo = function (url) {
        return this.afStorage.ref("/companies/" + url).getDownloadURL();
    };
    UserSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], UserSettingsService);
    return UserSettingsService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyB0xLEVEyg3cfGwRGkJ1vkttpWzou9d-vc",
        authDomain: "ftortk-20433.firebaseapp.com",
        databaseURL: "https://ftortk-20433.firebaseio.com",
        projectId: "ftortk-20433",
        storageBucket: "ftortk-20433.appspot.com",
        messagingSenderId: "765718816822"
    }
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

module.exports = __webpack_require__(/*! /var/www/html/jobs/angular6/mesh3Ip/new_prs/28-11-2018/28-11-2018/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
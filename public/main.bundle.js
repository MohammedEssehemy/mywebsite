webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_projects_projects_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_messages_messages_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_message_message_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_messages_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_users_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// components









// services



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_10__components_messages_messages_component__["a" /* MessagesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: '*', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_messages_service__["a" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_16__services_users_service__["a" /* UsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactComponent = (function () {
    function ContactComponent(flashMessagesService, validateService, messagesService, router) {
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.messagesService = messagesService;
        this.router = router;
        this.msg = new __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.validateService.validateContactForm(this.msg)) {
            this.messagesService.sendMessage(this.msg).subscribe(function (response) {
                if (response.success) {
                    _this.flashMessagesService.show('sent Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
                    setTimeout(function () { _this.router.navigate(['/']); }, 3000);
                }
                else {
                    _this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessagesService.show('All fields are required', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ContactComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(flashMessagesService, validateService, usersService, router) {
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.usersService = usersService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
    };
    LoginComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.validateService.validateLoginForm(this.user)) {
            this.usersService.authenticate(this.user).subscribe(function (response) {
                if (response.success) {
                    _this.usersService.storeToken(response.token);
                    _this.usersService.storeUser(response.user);
                    _this.flashMessagesService.show('login Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
                    setTimeout(function () { _this.router.navigate(['/']); }, 3000);
                }
                else {
                    _this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessagesService.show('All fields are required', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_message__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageComponent = (function () {
    function MessageComponent(messagesService, flashMessagesService) {
        this.messagesService = messagesService;
        this.flashMessagesService = flashMessagesService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.message.time = new Date(this.message.time);
    };
    MessageComponent.prototype.deleteClicked = function (e) {
        var _this = this;
        e.preventDefault();
        if (confirm('Are you Sure?')) {
            this.messagesService.deleteMessage(this.message._id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessagesService.show('deleted Successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessagesService.show("Error: " + data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    return MessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_message__["a" /* Message */]) === "function" && _a || Object)
], MessageComponent.prototype, "message", void 0);
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], MessageComponent);

var _a, _b, _c;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.getMessages().subscribe(function (response) {
            if (response.success) {
                _this.messagesList = response.messages;
            }
            else {
                console.log(response);
            }
        }, function (err) { return console.log(err); });
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(usersService, router, flashMessagesService) {
        this.usersService = usersService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutFun = function () {
        var _this = this;
        this.usersService.logout();
        this.flashMessagesService.show('logout ,redirected in 2 seconds', { cssClass: 'alert-success', timeout: 2000 });
        setTimeout(function () { _this.router.navigate(['/']); }, 2000);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(186),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(187),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(flashMessagesService, validateService, usersService, router) {
        this.flashMessagesService = flashMessagesService;
        this.validateService = validateService;
        this.usersService = usersService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
    };
    RegisterComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.validateService.validateRegisterForm(this.user)) {
            this.usersService.register(this.user).subscribe(function (response) {
                if (response.success) {
                    _this.usersService.storeToken(response.token);
                    _this.usersService.storeUser(response.user);
                    _this.flashMessagesService.show('registered Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
                    setTimeout(function () { _this.router.navigate(['/']); }, 3000);
                }
                else {
                    _this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessagesService.show('All fields are required', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(188),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 112:
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

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "a{\n    color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "       .bs-calltoaction {\n         position: relative;\n         width: auto;\n         padding: 15px 25px;\n         border: 1px solid black;\n         margin-top: 10px;\n         margin-bottom: 10px;\n         border-radius: 5px;\n       }\n\n       .bs-calltoaction>.row {\n         display: table;\n         width: calc(100% + 30px);\n       }\n\n       .bs-calltoaction>.row>[class^=\"col-\"],\n       .bs-calltoaction>.row>[class*=\" col-\"] {\n         float: none;\n         display: table-cell;\n         vertical-align: middle;\n       }\n\n       .cta-contents {\n         padding-top: 10px;\n         padding-bottom: 10px;\n       }\n\n       .cta-title {\n         margin: 0 auto 15px;\n         padding: 0;\n       }\n\n       .cta-desc {\n         padding: 0;\n       }\n\n       .cta-desc p:last-child {\n         margin-bottom: 0;\n       }\n\n       .cta-button {\n         padding-top: 10px;\n         padding-bottom: 10px;\n       }\n\n       @media (max-width: 991px) {\n         .bs-calltoaction>.row {\n           display: block;\n           width: auto;\n         }\n         .bs-calltoaction>.row>[class^=\"col-\"],\n         .bs-calltoaction>.row>[class*=\" col-\"] {\n           float: none;\n           display: block;\n           vertical-align: middle;\n           position: relative;\n         }\n         .cta-contents {\n           text-align: center;\n         }\n       }\n\n       .bs-calltoaction.bs-calltoaction-default {\n         color: #333;\n         background-color: #fff;\n         border-color: #ccc;\n       }\n\n       .bs-calltoaction.bs-calltoaction-primary {\n         color: #fff;\n       }\n\n       .bs-calltoaction.bs-calltoaction-primary .cta-button .btn,\n       {\n         border-color: #fff;\n       }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "#beforLoading{\n    position: fixed;\n    top: 25%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>  \n<div class='container'>\n  <router-outlet></router-outlet>\n      <flash-messages></flash-messages>\n</div>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\n  <fieldset>\n    <legend>Send new Message</legend>\n    <!-- name -->\n    <div class=\"form-group\">\n      <label for=\"inputName\" class=\"col-lg-2 control-label\">Name</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\"  id=\"inputName\" name=\"name\" [(ngModel)]=\"msg.username\" placeholder=\"Name\">\n      </div>\n    </div>\n    <!-- email -->\n    <div class=\"form-group\">\n      <label for=\"inputEmail\" class=\"col-lg-2 control-label\" [ngClass]=\"validateService.validateEmail(msg.email)?'':'has-error'\">Email</label>\n      <div class=\"col-lg-10\">\n        <input type=\"email\" class=\"form-control\"  id=\"inputEmail\" name=\"email\" [(ngModel)]=\"msg.email\"\n          placeholder=\"Email\">\n      </div>\n    </div>\n    <!-- title -->\n    <div class=\"form-group\">\n      <label for=\"inputTitle\" class=\"col-lg-2 control-label\">Title</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\"  id=\"inputTitle\" name=\"title\" [(ngModel)]=\"msg.title\" placeholder=\"Title\">\n      </div>\n    </div>\n    <!--Message body-->\n    <div class=\"form-group\">\n      <label for=\"textArea\" class=\"col-lg-2 control-label\">Message Body</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"3\"  id=\"textArea\" name=\"body\" [(ngModel)]=\"msg.body\"></textarea>\n      </div>\n    </div>\n    <!-- Buttons -->\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n        <button type=\"submit\" [disabled]=\" !validateService.validateContactForm(msg)\" (click)=\"onSubmit($event);\"  class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n    <div class=\"col-md-4\">\n      <h3>Mohammed Essehemy</h3>\n      <h4>feel free to contact me.</h4>\n      <p style=\"color:#fff;\">\n        <strong><span class=\"glyphicon glyphicon-envelope\"></span> &nbsp; &nbsp; <a href=\"mailto:mohammedessehemy@gmail.com\">   Gmail </a> </strong><br /> \n      </p>\n         <p style=\"color:#fff;\">\n        <strong><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> &nbsp; &nbsp; <a href=\"http://linkedin.com/in/mohammed-essehemy-5609a4a3/\">  Linkedin </a> </strong><br />\n      </p>\n       <p style=\"color:#fff;\">\n        <strong><i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n &nbsp; &nbsp;         <a href=\"http://github.com/MohammedEssehemy/\">  Github </a></strong><br /> \n      </p>\n      <p style=\"color:#fff;\">\n        <strong><span class=\"glyphicon glyphicon-map-marker\"></span> &nbsp; &nbsp; Dar Essalam, Cairo, Egypt.</strong><br> \n      </p>\n      <p></p>\n    </div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h1>projects</h1>\n    <p class=\"lead\" > This is my main App</p>\n    <i class=\"fa fa-university fa-5x\"  id=\"MainIcon\" aria-hidden=\"true\"></i>\n\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\n  <fieldset>\n    <legend>Login</legend>\n    <!-- name -->\n    <div class=\"form-group\">\n      <label for=\"inputName\" class=\"col-lg-2 control-label\">username</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\"  id=\"inputName\" name=\"name\" [(ngModel)]=\"user.username\" placeholder=\"Name\">\n      </div>\n    </div>\n    <!-- password -->\n    <div class=\"form-group\">\n      <label for=\"inputPassword\" class=\"col-lg-2 control-label\">password</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"user.password\"\n          placeholder=\"Password\">\n      </div>\n    </div>\n    <!-- Buttons -->\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n        <button type=\"submit\" (click)=\"onSubmit($event);\" [disabled]=\" !validateService.validateLoginForm(user)\" class=\"btn btn-primary\">Login</button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-calltoaction bs-calltoaction-primary\">\n  <div class=\"row\">\n    <div class=\"col-md-9 cta-contents\">\n      <h3 class=\"cta-title\">{{message.title}}</h3>\n      <div class=\"cta-desc\">\n        <h4>By: {{message.username}}</h4>\n        <h5>{{message.email}}</h5>\n      <h6> {{message.time.toUTCString()}} </h6>        \n        <p>{{message.body}}</p>\n      </div>\n    </div>\n    <div class=\"col-md-3 cta-button\">\n      <button  (click)=\"deleteClicked($event);\" class=\"btn btn-lg btn-block btn-danger\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div id=\"beforLoading\" class=\"col-xs-offset-5\" *ngIf=\"!messagesList\">\n<i class=\"fa fa-refresh fa-spin fa-5x\"></i>\n<span class=\"sr-only\">Loading...</span>\n</div>\n<app-message *ngFor=\"let message of messagesList\" [message]=\"message\" > Loading ...</app-message>\n<flash-messages></flash-messages>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">Awesome GIS</a>\n    </div>\n    <ul class=\"nav navbar-nav \">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\">\n        <a [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/register']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a>\n      </li>\n      <li [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/messages']\">Messages</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\" (click)=\"logoutFun();\"> <span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/contact']\">Contact Me</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\n  <fieldset>\n    <legend>Register</legend>\n    <!-- name -->\n    <div class=\"form-group\">\n      <label for=\"inputName\" class=\"col-lg-2 control-label\">username</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\"  id=\"inputName\" name=\"name\" [(ngModel)]=\"user.username\" placeholder=\"Name\">\n      </div>\n    </div>\n     <!-- email -->\n    <div class=\"form-group\" [ngClass]=\"validateService.validateEmail(user.email)?'':'has-error'\">\n      <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label>\n      <div class=\"col-lg-10\">\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" name=\"email\" [(ngModel)]=\"user.email\"\n          placeholder=\"Email\">\n      </div>\n    </div>\n    <!-- password -->\n    <div class=\"form-group\" [ngClass]=\"validateService.validatePassword(user.password)?'':'has-error'\">\n      <label for=\"inputPassword\" class=\"col-lg-2 control-label\">password</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" class=\"form-control\"  id=\"inputPassword\" name=\"password\" [(ngModel)]=\"user.password\"\n          placeholder=\"Password\">\n      </div>\n    </div>\n    <!-- retype password -->\n    <div class=\"form-group\" [ngClass]=\"retype!==user.password?'has-error':''\">\n      <label for=\"inputPassword\" class=\"col-lg-2 control-label\">confirm password</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" class=\"form-control\" id=\"retypePassword\" name=\"password\" [(ngModel)]=\"retype\" \n          placeholder=\"Password\">\n      </div>\n    </div>\n    <!-- Buttons -->\n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n        <button type=\"submit\" (click)=\"onSubmit($event);\" [disabled]=\" !validateService.validateRegisterForm(user) || user.password !== retype\" class=\"btn btn-primary\">Register</button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.authenticate = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('content-type', 'application/json');
        return this.http.post('api/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('content-type', 'application/json');
        return this.http.post('api/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.storeToken = function (token) {
        localStorage.setItem('authToken', token);
        this.token = token;
    };
    UsersService.prototype.storeUser = function (user) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.user = user;
    };
    UsersService.prototype.getToken = function () {
        return localStorage.getItem('authToken');
    };
    UsersService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('userData'));
    };
    UsersService.prototype.logout = function () {
        this.token = this.user = null;
        localStorage.clear();
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesService = (function () {
    function MessagesService(http, usersService) {
        this.http = http;
        this.usersService = usersService;
    }
    MessagesService.prototype.sendMessage = function (msg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('content-type', 'application/json');
        return this.http.post('api/msgs', msg, { headers: headers }).map(function (res) { return res.json(); });
    };
    MessagesService.prototype.getMessages = function () {
        this.token = this.usersService.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.token);
        return this.http.get('api/msgs', { headers: headers }).map(function (res) { return res.json(); });
    };
    MessagesService.prototype.deleteMessage = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.token);
        return this.http.delete("api/msgs/" + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _b || Object])
], MessagesService);

var _a, _b;
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateEmail = function (email) {
        var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (emailRegex.test(email)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validatePassword = function (password) {
        var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (strongPasswordRegex.test(password)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateContactForm = function (msg) {
        if (msg.username && this.validateEmail(msg.email) && msg.title && msg.body) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateLoginForm = function (user) {
        if (user.username && user.password) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateRegisterForm = function (user) {
        if (user.username && this.validatePassword(user.password) && this.validateEmail(user.email)) {
            return true;
        }
        else {
            return false;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map
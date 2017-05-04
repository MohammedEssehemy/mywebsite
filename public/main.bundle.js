webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(121);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(200),
        styles: [__webpack_require__(182)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_projects_projects_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_messages_messages_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_message_message_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_messages_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_users_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_users_guard__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_loading_loading_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_map_map_component__ = __webpack_require__(114);
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
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_10__components_messages_messages_component__["a" /* MessagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_users_guard__["a" /* UsersGuard */]] },
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
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_map_map_component__["a" /* MapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_messages_service__["a" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_16__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_17__guards_users_guard__["a" /* UsersGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_custom_validators__ = __webpack_require__(75);
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
    function ContactComponent(fb, flashMessagesService, messagesService, router) {
        this.fb = fb;
        this.flashMessagesService = flashMessagesService;
        this.messagesService = messagesService;
        this.router = router;
        this.busy = false;
        this.formErrors = {
            'username': '',
            'email': '',
            'title': '',
            'body': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'name is required.'
            },
            'email': {
                'required': 'email is required.',
                'validateEmail': 'please enter valid email'
            },
            'title': {
                'required': 'title is required'
            },
            'body': {
                'required': 'message body is required',
                'minlength': 'message body must be at least 20 characters long.',
                'maxlength': 'message body cannot be more than 240 characters long.',
            }
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.msg = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]();
        this.buildForm();
    };
    ContactComponent.prototype.buildForm = function () {
        var _this = this;
        this.messageForm = this.fb.group({
            'username': [this.msg.username, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'email': [this.msg.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__shared_custom_validators__["a" /* validateEmail */]
                ]
            ],
            'title': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'body': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(20),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(240)
                ]
            ]
        });
        this.messageForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.messageForm) {
            return;
        }
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = this.messageForm.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' , ';
                }
                this.formErrors[field] = this.formErrors[field].slice(0, -2);
            }
        }
    };
    ContactComponent.prototype.onSubmit = function (e) {
        var _this = this;
        this.msg = this.messageForm.value;
        this.busy = true;
        e.preventDefault();
        this.messagesService.sendMessage(this.msg).subscribe(function (response) {
            if (response.success) {
                _this.flashMessagesService.show('redirecting to home', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.busy = false;
                _this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(201),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ContactComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(202),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(203),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
        console.log(this.message);
    };
    return LoadingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LoadingComponent.prototype, "message", void 0);
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__(204),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_users_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
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
    function LoginComponent(fb, flashMessagesService, usersService, router) {
        this.fb = fb;
        this.flashMessagesService = flashMessagesService;
        this.usersService = usersService;
        this.router = router;
        this.busy = false;
        this.formErrors = {
            'username': '',
            'password': '',
        };
        this.validationMessages = {
            'username': {
                'required': 'username is required.'
            },
            'password': {
                'required': 'password is required.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'username': [this.user.username, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'password': [this.user.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = this.userForm.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' , ';
                }
                this.formErrors[field] = this.formErrors[field].slice(0, -2);
            }
        }
    };
    LoginComponent.prototype.onSubmit = function (e) {
        var _this = this;
        this.user = this.userForm.value;
        this.busy = true;
        e.preventDefault();
        this.usersService.authenticate(this.user).subscribe(function (response) {
            if (response.success) {
                _this.usersService.storeToken(response.token);
                _this.usersService.storeUser(response.user);
                _this.flashMessagesService.show('redirecting to home', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.busy = false;
                _this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(205),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        // set up the map
        var map = new __WEBPACK_IMPORTED_MODULE_1_leaflet__["Map"]('map');
        // create the tile layer with correct attribution
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new __WEBPACK_IMPORTED_MODULE_1_leaflet__["TileLayer"](osmUrl, { minZoom: 8, maxZoom: 12, attribution: osmAttrib });
        // start the map in South-East England
        map.setView(new __WEBPACK_IMPORTED_MODULE_1_leaflet__["LatLng"](51.3, 0.7), 9);
        map.addLayer(osm);
        ///  hacking  the marker icon problem in leaflet
        var DefaultIcon = __WEBPACK_IMPORTED_MODULE_1_leaflet__["icon"]({
            iconRetinaUrl: '/images/marker-icon-2x.png',
            iconUrl: '../../../../node_modules/leaflet/dist/images/marker-icon.png',
            shadowUrl: '../../../../node_modules/leaflet/dist/images/marker-shadow.png',
        });
        // L.Marker.prototype.options.icon = DefaultIcon;
        function onMapClick(e) {
            var marker = __WEBPACK_IMPORTED_MODULE_1_leaflet__["marker"](e.latlng).addTo(map);
        }
        var circle = __WEBPACK_IMPORTED_MODULE_1_leaflet__["circle"]([51.3, 0.7], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map);
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers().addTo(map);
        map.on('click', onMapClick);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(206),
        styles: [__webpack_require__(188), __webpack_require__(181)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_message__ = __webpack_require__(73);
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
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
                    _this.deleted.emit(_this.message._id);
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MessageComponent.prototype, "deleted", void 0);
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(207),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], MessageComponent);

var _a, _b, _c;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(31);
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
        this.loading = true;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.getMessages().subscribe(function (response) {
            if (response.success) {
                _this.loading = false;
                _this.messagesList = response.messages;
            }
            else {
                console.log(response);
            }
        }, function (err) { return console.log(err); });
    };
    MessagesComponent.prototype.messageDeleted = function (id) {
        var messageIndex = this.messagesList.findIndex(function (m) { return m._id == id; });
        this.messagesList.splice(messageIndex, 1);
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(208),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
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
        if (this.usersService.loggedIn()) {
            this.user = this.usersService.getUser();
        }
    };
    NavbarComponent.prototype.logoutFun = function () {
        var _this = this;
        this.usersService.logout();
        this.flashMessagesService.show('logged out', { cssClass: 'alert-success', timeout: 2000 });
        setTimeout(function () { _this.router.navigate(['/']); }, 2000);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(209),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(210),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_users_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_custom_validators__ = __webpack_require__(75);
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
    function RegisterComponent(fb, flashMessagesService, usersService, router) {
        this.fb = fb;
        this.flashMessagesService = flashMessagesService;
        this.usersService = usersService;
        this.router = router;
        this.busy = false;
        this.formErrors = {
            'username': '',
            'email': '',
            'password': '',
            'confirm': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'username is required.',
                'minlength': 'username must be at least 4 characters long.',
                'maxlength': 'username cannot be more than 24 characters long.'
            },
            'email': {
                'required': 'email is required.',
                'validateEmail': 'please enter valid email'
            },
            'password': {
                'required': 'password is required.',
                'validatePassword': 'password must be strong (P@ssw0rd)'
            },
            'confirm': {
                'required': 'retype your password',
                'matchPassword': 'password mismatch'
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.buildForm();
    };
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'username': [this.user.username, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(24)
                ]
            ],
            'password': [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__shared_custom_validators__["b" /* validatePassword */]
                ]
            ],
            'confirm': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    function () {
                        if (!_this.userForm) {
                            return;
                        }
                        var password = _this.userForm.controls['password'].value;
                        var confirm = _this.userForm.controls['confirm'].value;
                        if (!confirm || password === confirm) {
                            return null;
                        }
                        else {
                            return {
                                matchPassword: {
                                    password: password,
                                    confirm: confirm
                                }
                            };
                        }
                    }
                ]
            ],
            'email': [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_6__shared_custom_validators__["a" /* validateEmail */]
                ]
            ]
        });
        this.userForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    RegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = this.userForm.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' , ';
                }
                this.formErrors[field] = this.formErrors[field].slice(0, -2);
            }
        }
    };
    RegisterComponent.prototype.onSubmit = function (e) {
        var _this = this;
        // take only the password and leave the confirm
        delete this.userForm.value.confirm;
        this.user = this.userForm.value;
        this.busy = true;
        e.preventDefault();
        /// send to service
        this.usersService.register(this.user).subscribe(function (response) {
            if (response.success) {
                _this.usersService.storeToken(response.token);
                _this.usersService.storeUser(response.user);
                _this.flashMessagesService.show('redirecting to home', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/']);
            }
            else {
                _this.busy = false;
                _this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(211),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersGuard = (function () {
    function UsersGuard(router, usersService) {
        this.router = router;
        this.usersService = usersService;
    }
    UsersGuard.prototype.canActivate = function (route, state) {
        //    state.url => url
        if (this.usersService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return UsersGuard;
}());
UsersGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _b || Object])
], UsersGuard);

var _a, _b;
//# sourceMappingURL=users.guard.js.map

/***/ }),

/***/ 121:
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

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
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
    function UsersService(http
        // private jwtHelper: JwtHelper
    ) {
        this.http = http;
    }
    UsersService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token');
    };
    UsersService.prototype.isAdmin = function () {
    };
    UsersService.prototype.authenticate = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('api/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.register = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('api/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.storeToken = function (token) {
        localStorage.setItem('token', token);
        this.token = token;
    };
    UsersService.prototype.storeUser = function (user) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.user = user;
    };
    UsersService.prototype.getToken = function () {
        return localStorage.getItem('token');
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "div[role=\"main\"]{\r\n  overflow:auto;\r\n  margin: 7% auto 7% auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*a{\n    color: #fff;\n}*/\n.glyphicon,.fa{\n    color:#2fa4e7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "#map{\n    position: absolute;\n    top : 10%;\n    width : 100%;\n    height: 100%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "       .bs-calltoaction {\n         position: relative;\n         width: auto;\n         padding: 15px 25px;\n         border: 1px solid black;\n         margin-top: 10px;\n         margin-bottom: 10px;\n         border-radius: 5px;\n       }\n\n       .bs-calltoaction>.row {\n         display: table;\n         width: calc(100% + 30px);\n       }\n\n       .bs-calltoaction>.row>[class^=\"col-\"],\n       .bs-calltoaction>.row>[class*=\" col-\"] {\n         float: none;\n         display: table-cell;\n         vertical-align: middle;\n       }\n\n       .cta-contents {\n         padding-top: 10px;\n         padding-bottom: 10px;\n       }\n\n       .cta-title {\n         margin: 0 auto 15px;\n         padding: 0;\n       }\n\n       .cta-desc {\n         padding: 0;\n       }\n\n       .cta-desc p:last-child {\n         margin-bottom: 0;\n       }\n\n       .cta-button {\n         padding-top: 10px;\n         padding-bottom: 10px;\n       }\n\n       @media (max-width: 991px) {\n         .bs-calltoaction>.row {\n           display: block;\n           width: auto;\n         }\n         .bs-calltoaction>.row>[class^=\"col-\"],\n         .bs-calltoaction>.row>[class*=\" col-\"] {\n           float: none;\n           display: block;\n           vertical-align: middle;\n           position: relative;\n         }\n         .cta-contents {\n           text-align: center;\n         }\n       }\n\n       .bs-calltoaction.bs-calltoaction-default {\n         color: #333;\n         background-color: #fff;\n         border-color: #ccc;\n       }\n\n       .bs-calltoaction.bs-calltoaction-primary {\n         color: #fff;\n       }\n\n       .bs-calltoaction.bs-calltoaction-primary .cta-button .btn,\n       {\n         border-color: #fff;\n       }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>  \n <div class=\"container \" role=\"main\">\n<router-outlet></router-outlet>\n<flash-messages></flash-messages>\n </div>\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"busy\" [message]=\"'sending Data'\"></app-loading>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Contact Me</h3>\n  </div>\n  <div class=\"panel-body\">\n\n\n    <form [formGroup]=\"messageForm\" *ngIf=\"!busy\" (ngSubmit)=\"onSubmit($event)\">\n      <fieldset>\n        <!-- username -->\n        <div class=\"form-group\">\n          <label for=\"username\">username</label>\n\n          <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\" required>\n\n          <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\">\n            {{ formErrors.username }}\n          </div>\n        </div>\n\n\n        <!-- email -->\n        <div class=\"form-group\">\n          <label for=\"email\">email</label>\n\n          <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" required>\n\n          <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n            {{ formErrors.email }}\n          </div>\n        </div>\n\n        <!-- title -->\n        <div class=\"form-group\">\n          <label for=\"title\">title</label>\n\n          <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\" required>\n\n          <div *ngIf=\"formErrors.title\" class=\"alert alert-danger\">\n            {{ formErrors.title }}\n          </div>\n        </div>\n\n        <!-- body -->\n        <div class=\"form-group\">\n          <label for=\"body\">body</label>\n          <textarea class=\"form-control\" rows=\"3\" formControlName=\"body\" id=\"body\" required></textarea>\n\n          <div *ngIf=\"formErrors.body\" class=\"alert alert-danger\">\n            {{ formErrors.body }}\n          </div>\n        </div>\n\n        <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!messageForm.valid\">Submit</button>\n      </fieldset>\n    </form>\n\n  </div>\n</div>\n\n<!-- my contacts-->\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"text-center\">\n        <h3>Mohammed Essehemy</h3>\n        <h5>feel free to contact me.</h5>\n        <p class=\"col-xs-3\" >\n          <strong><span class=\"glyphicon glyphicon-envelope\"></span> &nbsp; <a href=\"mailto:mohammedessehemy@gmail.com\">   Gmail </a> </strong><br\n          />\n        </p>\n        <p class=\"col-xs-3\" >\n          <strong><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> &nbsp; <a href=\"http://linkedin.com/in/mohammed-essehemy-5609a4a3/\">  Linkedin </a> </strong><br\n          />\n        </p>\n        <p class=\"col-xs-3\" >\n          <strong><i class=\"fa fa-github\"  aria-hidden=\"true\"></i>\n &nbsp;  <a href=\"http://github.com/MohammedEssehemy/\">  Github </a></strong><br />\n        </p>\n        <p class=\"col-xs-3\" style=\"color:#2fa4e7;\">\n          <strong><span class=\"glyphicon glyphicon-map-marker\"></span> &nbsp; &nbsp;Cairo, Egypt.</strong><br>\n        </p>\n        <p></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">Awesome GIS</a>\n    </div>\n    <ul class=\"nav navbar-nav \">\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/contact']\">Contact Me</a></li>\n\n      <li style=\"color:#fff;\">\n        <a href=\"mailto:mohammedessehemy@gmail.com\"> <span class=\"glyphicon glyphicon-envelope\"></span> Gmail </a> \n      </li>\n      <li style=\"color:#fff;\">\n        <a href=\"http://linkedin.com/in/mohammed-essehemy-5609a4a3/\"> <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> Linkedin </a> \n      </li>\n      <li style=\"color:#fff;\">\n        <a href=\"http://github.com/MohammedEssehemy/\"> <i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github </a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\" style=\"margin:auto\">\n      <li style=\"color:#fff;\">\n      <a> <span class=\"glyphicon glyphicon-map-marker\"></span> Cairo, Egypt. &copy; 2017 </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h1>projects</h1>\n    <p class=\"lead\" > This is my main App</p>\n    <i class=\"fa fa-university fa-5x\"  id=\"MainIcon\" aria-hidden=\"true\"></i>\n\n</div>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <br />\n  <br />\n  <br />\n<i class=\"fa fa-refresh fa-spin fa-5x\"></i>\n<span class=\"sr-only\">loading</span>\n<p class=\"lead\" > {{message}}</p>\n</div>\n\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"busy\" [message]=\"'sending Data'\" ></app-loading>\n    <form [formGroup]=\"userForm\"  *ngIf=\"!busy\"  (ngSubmit)=\"onSubmit($event)\">\n    <legend>User Login</legend>\n<fieldset>\n      <!-- username -->\n      <div class=\"form-group\">\n        <label for=\"username\">username</label>\n\n        <input type=\"text\" id=\"username\" class=\"form-control\"\n               formControlName=\"username\" required >\n\n        <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\">\n          {{ formErrors.username }}\n        </div>\n      </div>\n\n<!-- password-->\n\n        <div class=\"form-group\">\n        <label for=\"password\">password</label>\n\n        <input type=\"password\" id=\"password\" class=\"form-control\"\n               formControlName=\"password\" required >\n\n        <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n\n                <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n\n      <button type=\"submit\" class=\"btn btn-default\"\n             [disabled]=\"!userForm.valid\">Submit</button>\n</fieldset>\n       </form>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div id='map' ></div>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<div class=\"bs-calltoaction bs-calltoaction-primary\">\n  <div class=\"row\">\n    <div class=\"col-md-9 cta-contents\">\n      <h3 class=\"cta-title\">{{message.title}}</h3>\n      <div class=\"cta-desc\">\n        <h4>By: {{message.username}}</h4>\n        <h5>{{message.email}}</h5>\n      <h6> {{message.time.toUTCString()}} </h6>        \n        <p>{{message.body}}</p>\n      </div>\n    </div>\n    <div class=\"col-md-3 cta-button\">\n      <button  (click)=\"deleteClicked($event);\" class=\"btn btn-lg btn-block btn-danger\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"loading\" [message]=\"'fetching messages from server'\" ></app-loading>\n<app-message *ngFor=\"let message of messagesList\" (deleted)=\"messageDeleted($event);\" [message]=\"message\" > Loading ...</app-message>"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">Awesome GIS</a>\n    </div>\n    <ul class=\"nav navbar-nav \">\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact : true}\">\n        <a [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li *ngIf=\"usersService.loggedIn();\" [routerLinkActive]=\"['active']\">\n        <a [routerLink]=\"['/messages']\">Messages</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n       <li [routerLinkActive]=\"['active']\" *ngIf=\"!usersService.loggedIn();\">\n        <a [routerLink]=\"['/register']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a>\n      </li>\n      <li *ngIf=\"!usersService.loggedIn();\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      <li *ngIf=\"usersService.loggedIn();\"><a href=\"#\" (click)=\"logoutFun();\"> <span class=\"glyphicon glyphicon-log-out\"></span>Logout</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"busy\" [message]=\"'sending Data'\" ></app-loading>\n    <form [formGroup]=\"userForm\"  *ngIf=\"!busy\"  (ngSubmit)=\"onSubmit($event)\">\n        <fieldset>\n    <legend>New User</legend>\n          \n      <!-- username -->\n      <div class=\"form-group\">\n        <label for=\"username\">username</label>\n\n        <input type=\"text\" id=\"username\" class=\"form-control\"\n               formControlName=\"username\" required >\n\n        <div *ngIf=\"formErrors.username\" class=\"alert alert-danger\">\n          {{ formErrors.username }}\n        </div>\n      </div>\n\n<!-- password-->\n\n        <div class=\"form-group\">\n        <label for=\"password\">password</label>\n\n        <input type=\"password\" id=\"password\" class=\"form-control\"\n               formControlName=\"password\" required >\n\n        <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n          {{ formErrors.password }}\n        </div>\n      </div>\n      <!-- confirm password -->\n        <div  class=\"form-group\">\n        <label for=\"confirm\">confirm</label>\n\n        <input type=\"password\" id=\"confirm\" class=\"form-control\"\n               formControlName=\"confirm\" required >\n\n        <div *ngIf=\"formErrors.confirm\" class=\"alert alert-danger\">\n          {{ formErrors.confirm }}\n        </div>\n        </div>\n\n        <!-- email -->\n        <div class=\"form-group\">\n        <label for=\"email\">email</label>\n\n        <input type=\"email\" id=\"email\" class=\"form-control\"\n               formControlName=\"email\" required >\n\n        <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n          {{ formErrors.email }}\n        </div>\n      </div>\n              <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n      <button type=\"submit\" class=\"btn btn-default\"\n             [disabled]=\"!userForm.valid\">Submit</button>\n        </fieldset>\n    </form>"

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(18);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('content-type', 'application/json');
        return this.http.post('api/msgs', msg, { headers: headers }).map(function (res) { return res.json(); });
    };
    MessagesService.prototype.getMessages = function () {
        this.token = this.usersService.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('x-access-token', this.token);
        return this.http.get('api/msgs', { headers: headers }).map(function (res) { return res.json(); });
    };
    MessagesService.prototype.deleteMessage = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('x-access-token', this.token);
        return this.http.delete("api/msgs/" + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _b || Object])
], MessagesService);

var _a, _b;
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 73:
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

/***/ 74:
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateEmail;
/* harmony export (immutable) */ __webpack_exports__["b"] = validatePassword;
function validateEmail(c) {
    var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return !c.value || emailRegex.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}
function validatePassword(c) {
    var strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return !c.value || strongPasswordRegex.test(c.value) ? null : {
        validatePassword: {
            valid: false
        }
    };
}
//# sourceMappingURL=custom.validators.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[256]);
//# sourceMappingURL=main.bundle.js.map
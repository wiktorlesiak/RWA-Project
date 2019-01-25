"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var application_component_1 = require('./application/application.component');
var menubar_component_1 = require('./menubar/menubar.component');
var footer_component_1 = require('./footer/footer.component');
var home_component_1 = require('./home/home.component');
var dublin_component_1 = require('./dublin/dublin.component');
var meath_component_1 = require('./meath/meath.component');
var cork_component_1 = require('./cork/cork.component');
var bach_component_1 = require('./restaurants/bach/bach.component');
var spire_component_1 = require('./restaurants/spire/spire.component');
var earls_component_1 = require('./restaurants/earls/earls.component');
var teach_component_1 = require('./restaurants/teach/teach.component');
var banyi_component_1 = require('./restaurants/BanyiJapaneseDining/banyi.component');
var monto_component_1 = require('./restaurants/Monto Cafe/monto.component');
var nosta_component_1 = require('./restaurants/Nosta/nosta.component');
var son_component_1 = require('./restaurants/Son of a Bun/son.component');
var chillipadi_component_1 = require('./restaurants/Chillipadi/chillipadi.component');
var summary_component_1 = require('./summary/summary.component');
var score_component_1 = require('./score/score.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: home_component_1.default
                    },
                    {
                        path: 'dublin',
                        component: dublin_component_1.default
                    },
                    {
                        path: 'meath',
                        component: meath_component_1.default
                    },
                    {
                        path: 'cork',
                        component: cork_component_1.default
                    },
                    {
                        path: 'restaurants/4',
                        component: spire_component_1.default
                    },
                    {
                        path: 'restaurants/5',
                        component: earls_component_1.default
                    },
                    {
                        path: 'restaurants/3',
                        component: teach_component_1.default
                    },
                    {
                        path: 'restaurants/2',
                        component: bach_component_1.default
                    },
                    {
                        path: 'restaurants/1',
                        component: banyi_component_1.default
                    },
                    {
                        path: 'restaurants/0',
                        component: monto_component_1.default
                    },
                    {
                        path: 'restaurants/6',
                        component: nosta_component_1.default
                    },
                    {
                        path: 'restaurants/7',
                        component: son_component_1.default
                    },
                    {
                        path: 'restaurants/8',
                        component: chillipadi_component_1.default
                    }
                ])
            ],
            declarations: [application_component_1.default,
                menubar_component_1.default,
                footer_component_1.default,
                dublin_component_1.default,
                home_component_1.default,
                meath_component_1.default,
                cork_component_1.default,
                bach_component_1.default,
                banyi_component_1.default,
                spire_component_1.default,
                teach_component_1.default,
                earls_component_1.default,
                banyi_component_1.default,
                monto_component_1.default,
                nosta_component_1.default,
                son_component_1.default,
                chillipadi_component_1.default,
                summary_component_1.default,
                score_component_1.default
            ],
            bootstrap: [application_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=module.js.map
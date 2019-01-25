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
var core_1 = require('@angular/core');
var county_service_1 = require('../../county-service/county-service');
var BanyiComponent = (function () {
    function BanyiComponent() {
    }
    BanyiComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', county_service_1.County)
    ], BanyiComponent.prototype, "county", void 0);
    BanyiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-banyi',
            templateUrl: 'banyi.component.html',
            styleUrls: ['banyi.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BanyiComponent);
    return BanyiComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BanyiComponent;
//# sourceMappingURL=banyi.component.js.map
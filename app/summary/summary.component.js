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
var summary_service_1 = require('../summary-service/summary-service');
var SummaryComponent = (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', summary_service_1.Summary)
    ], SummaryComponent.prototype, "summary", void 0);
    SummaryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-summary',
            templateUrl: 'summary.component.html',
            styleUrls: ['summary.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SummaryComponent);
    return SummaryComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SummaryComponent;
//# sourceMappingURL=summary.component.js.map
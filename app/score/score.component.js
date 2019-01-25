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
// Implement ScoreComponent here.
var core_1 = require('@angular/core');
var ScoreComponent = (function () {
    function ScoreComponent() {
        this.starsEmpty = [];
    }
    ScoreComponent.prototype.ngOnInit = function () {
        if (this.scores > 1) {
            this.starsEmpty.push(false);
        }
        else {
            this.starsEmpty.push(true);
        }
        if (this.scores > 2) {
            this.starsEmpty.push(false);
        }
        else {
            this.starsEmpty.push(true);
        }
        if (this.scores > 3) {
            this.starsEmpty.push(false);
        }
        else {
            this.starsEmpty.push(true);
        }
        if (this.scores > 4) {
            this.starsEmpty.push(false);
        }
        else {
            this.starsEmpty.push(true);
        }
        if (this.scores == 5) {
            this.starsEmpty.push(false);
        }
        else {
            this.starsEmpty.push(true);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ScoreComponent.prototype, "scores", void 0);
    ScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-score',
            templateUrl: 'score.component.html',
            styleUrls: ['score.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreComponent);
    return ScoreComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScoreComponent;
//# sourceMappingURL=score.component.js.map
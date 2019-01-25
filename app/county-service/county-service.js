"use strict";
var County = (function () {
    function County(id, name, desc, score, cuisine) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.score = score;
        this.cuisine = cuisine;
    }
    return County;
}());
exports.County = County;
var CountyService = (function () {
    function CountyService() {
    }
    CountyService.prototype.getCounties = function () {
        var counties = [
            new County(0, 'Monto Cafe', 'This is the description blah blah blah', 7, 'Italian'),
            new County(1, 'Banyi Japanese Dining', 'This is the description blah blah blah', 8, 'Japanese'),
            new County(2, 'Bach 16', 'This is the description blah blah blah', 6, 'Italian'),
        ];
        return counties;
    };
    return CountyService;
}());
exports.CountyService = CountyService;
//# sourceMappingURL=county-service.js.map
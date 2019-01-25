"use strict";
var Summary = (function () {
    function Summary(id, title, address, price, score) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.price = price;
        this.score = score;
    }
    return Summary;
}());
exports.Summary = Summary;
var SummaryService = (function () {
    function SummaryService() {
    }
    SummaryService.prototype.getDublinSummary = function () {
        var summaries = [
            new Summary(0, 'Monto Cafe', '8/9 Camden Street upper, Camden Street', 8.99, 4.9),
            new Summary(1, 'Banyi Japanese Dining', '4 Bedford Row, City Centre South, Dublin', 9, 3.2),
            new Summary(2, 'Bach 16', '16 Bachelors Walk, City Centre North, Dublin', 10, 4.2)
        ];
        return summaries;
    };
    SummaryService.prototype.getMeathSummary = function () {
        var summaries = [
            new Summary(3, 'Teach na Teamhrach', 'Trim Road, Navan, Meath', 6.44, 2.3),
            new Summary(4, 'The Spire Restaurant', 'Church Lane, Duleek, Meath', 8.39, 4.0),
            new Summary(5, 'Earls Kitchen', 'Unit 1 9 Old Cornmarket Navan, Navan, Meath', 13.99, 1.9)
        ];
        return summaries;
    };
    SummaryService.prototype.getCorkSummary = function () {
        var summaries = [
            new Summary(6, 'Nosta', 'Trim Road, Navan, Meath', 17.44, 3.3),
            new Summary(7, 'The Spire Restaurant', '4 Marlboro Street Cork, Cork', 8.60, 4.7),
            new Summary(8, 'Chillipadi', 'Unit 2, West End Shopping Centre, Ballincollig, Cork, Navan, Meath', 7.99, 3.9)
        ];
        return summaries;
    };
    SummaryService.prototype.getPopSummary = function () {
        var summaries = [
            new Summary(1, 'Banyi Japanese Dining', '4 Bedford Row, City Centre South, Dublin', 9, 3.2),
            new Summary(3, 'Teach na Teamhrach', 'Trim Road, Navan, Meath', 6.44, 2.3),
            new Summary(7, 'The Spire Restaurant', '4 Marlboro Street Cork, Cork', 8.60, 4.7),
            new Summary(2, 'Bach 16', '16 Bachelors Walk, City Centre North, Dublin', 10, 4.2)
        ];
        return summaries;
    };
    return SummaryService;
}());
exports.SummaryService = SummaryService;
//# sourceMappingURL=summary-service.js.map
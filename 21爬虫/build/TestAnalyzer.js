"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestAnalyzer = /** @class */ (function () {
    function TestAnalyzer() {
    }
    TestAnalyzer.prototype.analyze = function (html, filePath) {
        return JSON.stringify(html);
    };
    return TestAnalyzer;
}());
exports.default = TestAnalyzer;

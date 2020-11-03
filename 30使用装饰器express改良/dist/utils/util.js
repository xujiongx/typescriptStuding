"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = exports.getResponseData = void 0;
exports.getResponseData = function (data, errMsg) {
    if (errMsg) {
        return {
            success: false,
            errMsg: errMsg,
            data: data,
        };
    }
    return {
        success: true,
        data: data,
    };
};
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods = exports.Methods || (exports.Methods = {}));

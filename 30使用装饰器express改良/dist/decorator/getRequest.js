"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
/*
 * @Author: your name
 * @Date: 2020-09-05 02:02:57
 * @LastEditTime: 2020-09-05 02:03:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\decorator\getRequest.ts
 */
var util_1 = require("../utils/util");
function getRequestDecorator(type) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        };
    };
}
exports.get = getRequestDecorator(util_1.Methods.get);
exports.post = getRequestDecorator(util_1.Methods.post);

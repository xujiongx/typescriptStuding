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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-09-04 13:35:29
 * @LastEditTime: 2020-09-05 02:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\controller\LoginController.ts
 */
require("reflect-metadata");
var util_1 = require("../utils/util");
var decorator_1 = require("../decorator");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.home = function (req, res) {
        var isLogin = !!(req.session ? req.session.login : false);
        if (isLogin) {
            res.send("\n    <html>\n    <body>\n      \n      <a href='/test/getData'>\u722C\u53D6\u5185\u5BB9</a>\n      <a href='/test/showData'>\u8BFB\u53D6\u5185\u5BB9</a>\n      <a href='/test/logout'>\u9000\u51FA</a>\n    </body>\n    </html>");
        }
        else {
            res.send("\n    <html>\n    <body>\n      <form method='post' action='/test/login'>\n      <input type='password' name='password'/>\n      <input type=\"submit\" value=\"\u63D0\u4EA4\">\n      <a href='/showData'>\u8BFB\u53D6\u5185\u5BB9</a>\n    </body>\n    </html>");
        }
    };
    LoginController.prototype.login = function (req, res) {
        var password = req.body.password;
        var isLogin = !!(req.session ? req.session.login : false);
        if (isLogin) {
            res.json(util_1.getResponseData(null, '已经登陆过'));
        }
        else {
            if (password === '123' && req.session) {
                req.session.login = true;
                res.json(util_1.getResponseData(true));
            }
            else {
                res.json(util_1.getResponseData(null, '登陆失败'));
            }
        }
    };
    LoginController.prototype.logout = function (req, res) {
        if (req.session) {
            req.session.login = undefined;
        }
        res.json(util_1.getResponseData(true));
    };
    __decorate([
        decorator_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "home", null);
    __decorate([
        decorator_1.post('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "login", null);
    __decorate([
        decorator_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "logout", null);
    LoginController = __decorate([
        decorator_1.controller('/test')
    ], LoginController);
    return LoginController;
}());
exports.default = LoginController;

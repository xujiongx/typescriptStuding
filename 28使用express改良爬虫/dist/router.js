"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-09-01 16:02:03
 * @LastEditTime: 2020-09-03 14:53:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\28使用express改良爬虫\src\router.ts
 */
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var utils_1 = __importDefault(require("./utils"));
var CopyAnalyzer_1 = __importDefault(require("./utils/CopyAnalyzer"));
var util_1 = require("./utils/util");
//检验是否登陆中间件
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请登录'));
    }
};
var router = express_1.default.Router();
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n  <html>\n  <body>\n    \n    <a href='/getData'>\u722C\u53D6\u5185\u5BB9</a>\n    <a href='/showData'>\u8BFB\u53D6\u5185\u5BB9</a>\n    <a href='/logout'>\u9000\u51FA</a>\n  </body>\n  </html>");
    }
    else {
        res.send("\n  <html>\n  <body>\n    <form method='post' action='/login'>\n    <input type='password' name='password'/>\n    <input type=\"submit\" value=\"\u63D0\u4EA4\">\n    <a href='/showData'>\u8BFB\u53D6\u5185\u5BB9</a>\n    \n  </body>\n  </html>");
    }
});
router.post('/login', function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
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
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(util_1.getResponseData(true));
});
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds');
});
router.get('/getData', checkLogin, function (req, res) {
    var url = 'https://www.jdlingyu.com/collection/meizitu';
    var copyAnalyzer = CopyAnalyzer_1.default.getInstance();
    new utils_1.default(url, copyAnalyzer);
    res.json(util_1.getResponseData(true));
});
router.get('/showData', checkLogin, function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf8');
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (error) {
        res.json(util_1.getResponseData(null, '没有爬取到内容'));
    }
});
exports.default = router;

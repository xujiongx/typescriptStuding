"use strict";
/*
 * @Author: your name
 * @Date: 2020-08-24 21:00:34
 * @LastEditTime: 2020-08-25 18:28:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\21爬虫\src\crowller.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var superagent_1 = __importDefault(require("superagent"));
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Crowller = /** @class */ (function () {
    function Crowller() {
        this.url = 'https://www.jdlingyu.com/collection/meizitu';
        this.Header = {
            referer: 'https://www.jdlingyu.com/mzitu',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        };
        this.filePath = path_1.default.resolve(__dirname, '../data/course.json');
        this.initSpiderProcess();
    }
    //通过html文本获得需要得json
    Crowller.prototype.getJsonInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var imgUl = $('.post-list-item ');
        // console.log(imgUl.html());
        var imgs = [];
        imgUl.map(function (index, element) {
            var imgSrc = $(element).find('img').attr('src') || '';
            var imgInfo = $(element).find('h2').text();
            imgs.push({ imgSrc: imgSrc, imgInfo: imgInfo });
        });
        var result = {
            time: new Date().getTime(),
            data: imgs,
        };
        return result;
    };
    //获得爬取得html文本
    Crowller.prototype.getRawHTML = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, superagent_1.default.get(this.url).set(this.Header)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.text];
                }
            });
        });
    };
    //获得写入文件得文本
    Crowller.prototype.generateJsonContent = function (courseResult) {
        var fileContent = {};
        if (fs_1.default.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(this.filePath, 'utf8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    };
    //将文本写入文件
    Crowller.prototype.writeFile = function (content) {
        fs_1.default.writeFileSync(this.filePath, content);
    };
    Crowller.prototype.initSpiderProcess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var html, courseResult, fileContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRawHTML()];
                    case 1:
                        html = _a.sent();
                        courseResult = this.getJsonInfo(html);
                        fileContent = this.generateJsonContent(courseResult);
                        this.writeFile(JSON.stringify(fileContent));
                        return [2 /*return*/];
                }
            });
        });
    };
    return Crowller;
}());
var crowller = new Crowller();

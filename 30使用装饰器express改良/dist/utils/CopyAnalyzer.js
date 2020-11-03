"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: your name
 * @Date: 2020-08-25 18:01:18
 * @LastEditTime: 2020-09-05 02:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\21爬虫\src\xujiong.ts
 */
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var CopyAnalyzer = /** @class */ (function () {
    function CopyAnalyzer() {
    }
    CopyAnalyzer.getInstance = function () {
        if (!CopyAnalyzer.instance) {
            CopyAnalyzer.instance = new CopyAnalyzer();
        }
        return CopyAnalyzer.instance;
    };
    //将html转换成所需要得文本信息（筛选所需内容）
    CopyAnalyzer.prototype.getJsonInfo = function (html) {
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
    //获得写入文件得文本（设计存储格式）
    CopyAnalyzer.prototype.generateJsonContent = function (courseResult, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
        }
        fileContent[courseResult.time] = courseResult.data;
        return fileContent;
    };
    CopyAnalyzer.prototype.analyze = function (html, filePath) {
        var courseInfo = this.getJsonInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return CopyAnalyzer;
}());
exports.default = CopyAnalyzer;

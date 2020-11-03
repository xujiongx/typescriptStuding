/*
 * @Author: your name
 * @Date: 2020-08-24 21:00:34
 * @LastEditTime: 2020-08-25 18:28:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\21爬虫\src\crowller.ts
 */

import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Course {
  imgSrc: string;
  imgInfo: string;
}

interface CourseResult {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}

class Crowller {
  private url = 'https://www.jdlingyu.com/collection/meizitu';
  private Header = {
    referer: 'https://www.jdlingyu.com/mzitu',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
  };
  private filePath = path.resolve(__dirname, '../data/course.json');

  //通过html文本获得需要得json
  getJsonInfo(html: string) {
    const $ = cheerio.load(html);
    const imgUl = $('.post-list-item ');
    // console.log(imgUl.html());
    const imgs: Course[] = [];
    imgUl.map((index, element) => {
      const imgSrc = $(element).find('img').attr('src') || '';
      const imgInfo = $(element).find('h2').text();
      imgs.push({ imgSrc, imgInfo });
    });
    const result = {
      time: new Date().getTime(),
      data: imgs,
    };
    return result;
  }

  //获得爬取得html文本
  async getRawHTML() {
    const result = await superagent.get(this.url).set(this.Header);
    return result.text;
  }

  //获得写入文件得文本
  generateJsonContent(courseResult: CourseResult) {
    let fileContent: Content = {};
    if (fs.existsSync(this.filePath)) {
      fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    }
    fileContent[courseResult.time] = courseResult.data;
    return fileContent;
  }

  //将文本写入文件
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess() {
    const html = await this.getRawHTML();
    const courseResult = this.getJsonInfo(html);
    const fileContent = this.generateJsonContent(courseResult);
    this.writeFile(JSON.stringify(fileContent));
  }
  constructor() {
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();

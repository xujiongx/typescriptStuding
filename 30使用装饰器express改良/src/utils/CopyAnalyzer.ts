/*
 * @Author: your name
 * @Date: 2020-08-25 18:01:18
 * @LastEditTime: 2020-09-05 02:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\21爬虫\src\xujiong.ts
 */
import cheerio from 'cheerio';
import fs from 'fs';
import { Analyzer } from './crowller';

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

export default class CopyAnalyzer implements Analyzer {
  //单例模式
  private static instance: CopyAnalyzer;
  static getInstance(): CopyAnalyzer {
    if (!CopyAnalyzer.instance) {
      CopyAnalyzer.instance = new CopyAnalyzer();
    }
    return CopyAnalyzer.instance;
  }
  //将html转换成所需要得文本信息（筛选所需内容）
  private getJsonInfo(html: string) {
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

  //获得写入文件得文本（设计存储格式）
  private generateJsonContent(courseResult: CourseResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    fileContent[courseResult.time] = courseResult.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getJsonInfo(html);
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }

  private constructor() {}
}

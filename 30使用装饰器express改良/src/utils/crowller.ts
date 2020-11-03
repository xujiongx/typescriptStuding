/*
 * @Author: your name
 * @Date: 2020-08-24 21:00:34
 * @LastEditTime: 2020-09-03 13:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\21爬虫\src\crowller.ts
 */

//组合设计模式

import superagent from 'superagent';
import fs from 'fs';
import path from 'path';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private Header = {
    referer: 'https://www.jdlingyu.com/mzitu',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
  };
  private filePath = path.resolve(__dirname, '../../data/course.json');

  private async getRawHTML() {
    const result = await superagent.get(this.url).set(this.Header);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHTML();
    const fileCount = this.copyAnalyzer.analyze(html, this.filePath);
    this.writeFile(fileCount);
  }
  constructor(private url: string, private copyAnalyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

export default Crowller;

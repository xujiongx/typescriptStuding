/*
 * @Author: your name
 * @Date: 2020-08-25 18:01:18
 * @LastEditTime: 2020-08-25 22:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\21爬虫\src\xujiong.ts
 */
import { Analyzer } from './crowller';

export default class TestAnalyzer implements Analyzer {
  public analyze(html: string, filePath: string) {
    return JSON.stringify(html);
  }
}

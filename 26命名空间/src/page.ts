/*
 * @Author: your name
 * @Date: 2020-08-31 19:47:36
 * @LastEditTime: 2020-08-31 22:32:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\26命名空间\src\page.ts
 */
import { Header, Context, Footer } from './components';

export default class Page {
  constructor() {
    new Header();
    new Context();
    new Footer();
  }
}

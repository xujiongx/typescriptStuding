/*
 * @Author: your name
 * @Date: 2020-09-02 10:53:00
 * @LastEditTime: 2020-09-02 11:25:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\28使用express改良爬虫\src\custom.d.ts
 */
declare namespace Express {
  interface Request {
    myName: string;
  }
}

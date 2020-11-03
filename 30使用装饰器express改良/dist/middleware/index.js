"use strict";
// /*
//  * @Author: your name
//  * @Date: 2020-09-04 13:49:48
//  * @LastEditTime: 2020-09-04 14:02:49
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \typescript\30使用装饰器express改良\src\middleware\index.ts
//  */
// import express, { Request, Response, NextFunction } from 'express';
// import { getResponseData } from '../utils/util';
// import { RequestWithBody } from '../utils/util';
// export default class middleware {
//   //检验是否登陆中间件
//   static checkLogin(req: RequestWithBody, res: Response, next: NextFunction) {
//     const isLogin = req.session ? req.session.login : false;
//     if (isLogin) {
//       next();
//     } else {
//       res.json(getResponseData(null, '请登录'));
//     }
//   }
// }

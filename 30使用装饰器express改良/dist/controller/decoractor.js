"use strict";
// /*
//  * @Author: your name
//  * @Date: 2020-09-04 19:01:59
//  * @LastEditTime: 2020-09-05 01:59:06
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \typescript\30使用装饰器express改良\src\controller\decoractor.ts
//  */
// import express, { RequestHandler, Response, NextFunction } from 'express';
// import { getResponseData, RequestWithBody } from '../utils/util';
// // import { Router } from 'express';
// // export const router = Router();
// // import router from '../router';
// enum Methods {
//   get = 'get',
//   post = 'post',
// }
// // export function controller(target: any) {
// //   for (let key in target.prototype) {
// //     const path = Reflect.getMetadata('path', target.prototype, key);
// //     const method: Methods = Reflect.getMetadata(
// //       'method',
// //       target.prototype,
// //       key
// //     );
// //     const handle = target.prototype[key];
// //     const middleware = Reflect.getMetadata('middleware', target.prototype, key);
// //     if (path && method && handle) {
// //       if (middleware) {
// //         router[method](path, middleware, handle);
// //       } else {
// //         router[method](path, handle);
// //       }
// //     }
// //   }
// // }
// function getRequestDecorator(type: Methods) {
//   return function (path: string) {
//     return function (target: any, key: string) {
//       Reflect.defineMetadata('path', path, target, key);
//       Reflect.defineMetadata('method', type, target, key);
//     };
//   };
// }
// export const get = getRequestDecorator(Methods.get);
// export const post = getRequestDecorator(Methods.post);
// export function use(middleware: RequestHandler) {
//   return function (target: any, key: string) {
//     Reflect.defineMetadata('middleware', middleware, target, key);
//   };
// }
// // export function get(path: string) {
// //   return function (target: any, key: string) {
// //     Reflect.defineMetadata('path', path, target, key);
// //     Reflect.defineMetadata('method', 'get', target, key);
// //   };
// // }
// // export function post(path: string) {
// //   return function (target: any, key: string) {
// //     Reflect.defineMetadata('path', path, target, key);
// //     Reflect.defineMetadata('method', 'post', target, key);
// //   };
// // }

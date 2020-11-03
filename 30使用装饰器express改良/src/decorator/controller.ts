/*
 * @Author: your name
 * @Date: 2020-09-05 01:46:26
 * @LastEditTime: 2020-09-05 02:47:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\decorator\controller.ts
 */
import router from '../router';
import { Methods } from '../utils/util';
import { RequestHandler } from 'express';

export function controller(root: string) {
  return function (target: new (...args: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        'method',
        target.prototype,
        key
      );
      const handle = target.prototype[key];
      const middlewares: RequestHandler[] = Reflect.getMetadata(
        'middlewares',
        target.prototype,
        key
      );
      if (path && method) {
        const fullPath = root === '/' ? path : `${root}${path}`;
        if (middlewares && middlewares.length) {
          router[method](fullPath, ...middlewares, handle);
        } else {
          router[method](fullPath, handle);
        }
      }
    }
  };
}

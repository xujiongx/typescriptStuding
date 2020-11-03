/*
 * @Author: your name
 * @Date: 2020-09-05 02:02:57
 * @LastEditTime: 2020-09-05 02:03:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\decorator\getRequest.ts
 */
import { Methods } from '../utils/util';

function getRequestDecorator(type: Methods) {
  return function (path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', type, target, key);
    };
  };
}

export const get = getRequestDecorator(Methods.get);
export const post = getRequestDecorator(Methods.post);

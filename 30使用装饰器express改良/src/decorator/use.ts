/*
 * @Author: your name
 * @Date: 2020-09-05 02:00:34
 * @LastEditTime: 2020-09-05 02:44:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\decorator\use.ts
 */
import express, { RequestHandler, Response, NextFunction } from 'express';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string) {
    const originMiddleware =
      Reflect.getMetadata('middlewares', target, key) || [];
    originMiddleware.push(middleware);
    Reflect.defineMetadata('middlewares', originMiddleware, target, key);
  };
}

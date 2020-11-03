/*
 * @Author: your name
 * @Date: 2020-09-01 15:47:00
 * @LastEditTime: 2020-09-05 01:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\28使用express改良爬虫\src\index.ts
 */
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controller/LoginController';
import './controller/CrowllerController';
import router from './router';

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: 'session',
    keys: ['xujiong'],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(router);

app.listen('7001', () => console.log('server is running'));

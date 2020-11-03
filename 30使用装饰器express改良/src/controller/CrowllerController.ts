/*
 * @Author: your name
 * @Date: 2020-09-04 13:35:29
 * @LastEditTime: 2020-09-05 02:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\controller\LoginController.ts
 */
import 'reflect-metadata';
import fs from 'fs';
import path from 'path';
import { Response, NextFunction } from 'express';
import { getResponseData, RequestWithBody } from '../utils/util';
import Crowller from '../utils/crowller';
import CopyAnalyzer from '../utils/CopyAnalyzer';
import { controller, use, get } from '../decorator';

const checkLogin = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
): void => {
  //双感叹号转换为布尔类型
  const isLogin = !!(req.session ? req.session.login : false);
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, '请登录'));
  }
};

const test = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
): void => {
  console.log(123);
  next();
};

@controller('/test')
class CrowllerController {
  @get('/getData')
  @use(checkLogin)
  @use(test) //多个中间件的时候的修改
  getData(req: RequestWithBody, res: Response): void {
    const url = 'https://www.jdlingyu.com/collection/meizitu';
    const copyAnalyzer = CopyAnalyzer.getInstance();
    new Crowller(url, copyAnalyzer);
    res.json(getResponseData(true));
  }

  @get('/showData')
  @use(checkLogin)
  showData(req: RequestWithBody, res: Response): void {
    try {
      const position = path.resolve(__dirname, '../../data/course.json');
      const result = fs.readFileSync(position, 'utf8');
      res.json(getResponseData(JSON.parse(result)));
    } catch (error) {
      res.json(getResponseData(null, '没有爬取到内容'));
    }
  }
}

export default CrowllerController;

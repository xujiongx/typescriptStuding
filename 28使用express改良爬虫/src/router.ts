/*
 * @Author: your name
 * @Date: 2020-09-01 16:02:03
 * @LastEditTime: 2020-09-03 14:53:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\28使用express改良爬虫\src\router.ts
 */
import fs from 'fs';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import Crowller from './utils';
import CopyAnalyzer from './utils/CopyAnalyzer';
import { getResponseData } from './utils/util';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

//检验是否登陆中间件
const checkLogin = (
  req: RequestWithBody,
  res: Response,
  next: NextFunction
) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, '请登录'));
  }
};

const router = express.Router();

router.use(function timeLog(req: RequestWithBody, res: Response, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req: RequestWithBody, res: Response) {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.send(`
  <html>
  <body>
    
    <a href='/getData'>爬取内容</a>
    <a href='/showData'>读取内容</a>
    <a href='/logout'>退出</a>
  </body>
  </html>`);
  } else {
    res.send(`
  <html>
  <body>
    <form method='post' action='/login'>
    <input type='password' name='password'/>
    <input type="submit" value="提交">
    <a href='/showData'>读取内容</a>
    
  </body>
  </html>`);
  }
});

router.post('/login', function (req: RequestWithBody, res: Response) {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.json(getResponseData(null, '已经登陆过'));
  } else {
    if (password === '123' && req.session) {
      req.session.login = true;
      res.json(getResponseData(true));
    } else {
      res.json(getResponseData(null, '登陆失败'));
    }
  }
});

router.get('/logout', function (req: RequestWithBody, res: Response) {
  if (req.session) {
    req.session.login = undefined;
  }
  res.json(getResponseData(true));
});

// define the about route
router.get('/about', function (req: RequestWithBody, res: Response) {
  res.send('About birds');
});

router.get('/getData', checkLogin, function (
  req: RequestWithBody,
  res: Response
) {
  const url = 'https://www.jdlingyu.com/collection/meizitu';
  const copyAnalyzer = CopyAnalyzer.getInstance();
  new Crowller(url, copyAnalyzer);
  res.json(getResponseData(true));
});

router.get('/showData', checkLogin, (req: RequestWithBody, res: Response) => {
  try {
    const position = path.resolve(__dirname, '../data/course.json');
    const result = fs.readFileSync(position, 'utf8');
    res.json(getResponseData(JSON.parse(result)));
  } catch (error) {
    res.json(getResponseData(null, '没有爬取到内容'));
  }
});

export default router;

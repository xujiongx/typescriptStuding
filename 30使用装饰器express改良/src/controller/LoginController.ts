/*
 * @Author: your name
 * @Date: 2020-09-04 13:35:29
 * @LastEditTime: 2020-09-05 02:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\controller\LoginController.ts
 */
import 'reflect-metadata';
import { Response } from 'express';
import { getResponseData, RequestWithBody } from '../utils/util';
import { controller, get, post } from '../decorator';

@controller('/test')
class LoginController {
  @get('/')
  home(req: RequestWithBody, res: Response): void {
    const isLogin = !!(req.session ? req.session.login : false);
    if (isLogin) {
      res.send(`
    <html>
    <body>
      
      <a href='/test/getData'>爬取内容</a>
      <a href='/test/showData'>读取内容</a>
      <a href='/test/logout'>退出</a>
    </body>
    </html>`);
    } else {
      res.send(`
    <html>
    <body>
      <form method='post' action='/test/login'>
      <input type='password' name='password'/>
      <input type="submit" value="提交">
      <a href='/showData'>读取内容</a>
    </body>
    </html>`);
    }
  }

  @post('/login')
  login(req: RequestWithBody, res: Response): void {
    const { password } = req.body;
    const isLogin = !!(req.session ? req.session.login : false);
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
  }

  @get('/logout')
  logout(req: RequestWithBody, res: Response): void {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getResponseData(true));
  }
}

export default LoginController;

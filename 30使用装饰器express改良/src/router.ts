/*
 * @Author: your name
 * @Date: 2020-09-04 13:33:47
 * @LastEditTime: 2020-09-05 01:42:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\30使用装饰器express改良\src\router.ts
 */
// /*
//  * @Author: your name
//  * @Date: 2020-09-01 16:02:03
//  * @LastEditTime: 2020-09-04 13:59:18
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \typescript\28使用express改良爬虫\src\router.ts
//  */
// import express from 'express';
// import LoginController from './controller/LoginController';
// import middleware from './middleware/index';

// const router = express.Router();

// // define the home page route
// router.get('/', LoginController.home);

// router.post('/login', LoginController.login);

// router.get('/logout', LoginController.logout);

// router.get('/getData', middleware.checkLogin, LoginController.getData);

// router.get('/showData', middleware.checkLogin, LoginController.showData);

// export default router;

import { Router } from 'express';
const router = Router();
export default router;

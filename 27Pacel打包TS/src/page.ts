/*
 * @Author: your name
 * @Date: 2020-08-31 22:36:24
 * @LastEditTime: 2020-09-01 13:17:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\27Pacel打包TS\src\page.ts
 */
//编写第三方库的编译文件
import $ from 'jquery';
$(function () {
  console.log('Hello');
  $('body').html('<div>Word</div>');
  new $.fn.init();
});

/*
 * @Author: your name
 * @Date: 2020-08-23 03:30:09
 * @LastEditTime: 2020-08-23 03:33:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\静态类型\demo.ts
 */

/*
 *类型不会变
 *具有类型地属性和方法
 */
const count: number = 2019;

interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 3,
  y: 4,
};

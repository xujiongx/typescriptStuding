/*
 * @Author: your name
 * @Date: 2020-08-23 03:00:18
 * @LastEditTime: 2020-08-23 03:22:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo.ts
 */

interface point {
  x: number;
  y: number;
}
function tsSqrtz(data: point) {
  console.log('123' + '234');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

console.log(tsSqrtz({ x: 3, y: 4 }));

/*
 * @Author: your name
 * @Date: 2020-08-23 03:59:38
 * @LastEditTime: 2020-08-23 22:45:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\04函数相关内容\demo.ts
 */
function add(first: number, second: number): number {
  return first + second;
}

function sayHello(): void {
  console.log(123);
}

function errEmitter(): never {
  throw Error;
}

//解构赋值
function addT({ first, second }: { first: number; second: number }): number {
  return first + second;
}

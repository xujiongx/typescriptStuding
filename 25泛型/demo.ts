/*
 * @Author: your name
 * @Date: 2020-08-31 16:14:05
 * @LastEditTime: 2020-08-31 16:22:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\25泛型\demo.ts
 */

//泛型  泛指的类型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

console.log(join<number, string>(1, '1'));

function map<T>(params: T[]) {
  return params;
}

map<string>(['123', 'qwe']);

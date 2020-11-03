/*
 * @Author: your name
 * @Date: 2020-08-23 22:45:47
 * @LastEditTime: 2020-08-23 23:03:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\05复习\demo.js
 */
const func = (str: string) => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

const data = new Date();

//JSON等内置小函数无法判断
interface Person {
  name: string;
}
const rawData = '{"name":"Dell"}';

const newData: Person = JSON.parse(rawData);

console.log(newData);

let temp: number | string = 123;
temp = '123';

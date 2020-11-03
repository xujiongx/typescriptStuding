/*
 * @Author: your name
 * @Date: 2020-08-23 23:08:32
 * @LastEditTime: 2020-08-23 23:59:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\06数组和元组\demo.ts
 */

//  1.数组
const numberArr = [1, '2', 3];

const stringArr = [true, 2, undefined];

// type alias
type User = { name: string; age: number };
class Teacher {
  name: string;
  age: number;
}
const onjectArr: User[] = [{ name: 'Bob', age: 23 }, new Teacher()];

//2.元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 13];

const teacherList: [string, string, number][] = [
  ['Bob', 'male', 18],
  ['Tom', 'male', 28],
  ['Dina', 'female', 38],
];

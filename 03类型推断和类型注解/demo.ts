/*
 * @Author: your name
 * @Date: 2020-08-23 03:48:00
 * @LastEditTime: 2020-08-23 03:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\类型推断和类型注解\demo.ts
 */
// 类型注解  我们告诉ts变量是什么类型
// 类型推断  ts自动分析变量类型
//如果能够自动分析变量类型，我们就什么都不用做，如果不能，就需要使用类型注解

let count3: number;

count3 = 123;

let countInterface = 123;

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber;//不需要进行类型注解

function getTotal3(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}

const total = getTotal3(1, 2);

const obj = {
  name: 'dell',
  age: '18',
};

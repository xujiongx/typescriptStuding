/*
 * @Author: your name
 * @Date: 2020-08-27 15:01:05
 * @LastEditTime: 2020-08-27 15:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\23联合类型和类型保护\demo.ts
 */
interface Brid {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

//as
function trainAnial(animal: Brid | Dog) {
  if (animal.fly == true) {
    //断言 自身对逻辑的理解
    (animal as Brid).sing();
  }
  (animal as Dog).bark();
}

// in
//联合类型用或实现
function trainAnialSecond(animal: Brid | Dog) {
  if ('sing' in animal) {
    //断言 自身对逻辑的理解
    animal.sing();
  } else {
    animal.bark();
  }
}

//typeof
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first} ${second}`;
  }
  return first + second;
}

//instanceof  类具有instaceof属性
class NumberObject {
  count: number;
}
function addSecond(
  first: object | NumberObject,
  second: object | NumberObject
) {
  if (first instanceof NumberObject && second instanceof NumberObject) {
    return first.count + second.count;
  } else {
    return 0;
  }
}

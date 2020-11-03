/*
 * @Author: your name
 * @Date: 2020-08-24 20:38:37
 * @LastEditTime: 2020-08-24 20:45:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\20抽象类\demo.ts
 */
//readonly
class Person10 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person10 = new Person10('dell');

// person10.name = 'Hello';

console.log(person10.name);

// 抽象类
abstract class Grom {
  width: number;
  height: number;
  getType() {
    return 'Grom';
  }
  abstract getArea(): number;
}

class Circle extends Grom {
  getArea() {
    return 123;
  }
}

class Square {}

class Triangle {}

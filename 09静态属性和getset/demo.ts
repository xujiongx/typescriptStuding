/*
 * @Author: your name
 * @Date: 2020-08-24 03:44:07
 * @LastEditTime: 2020-08-24 20:34:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\09静态属性和getset\demo.ts
 */
class Person9 {
  constructor(private _name: string) {}
  get name() {
    return this._name + '  lee';
  }
  set name(name: string) {
    this._name = name;
  }
}

const person9 = new Person9('dell');
person9.name = 'bb si';
console.log(person9.name);

//单例模式
class Demo {
  private static instance: Demo;
  //规避new
  private constructor(public name: string) {}
  static getInstance(name: string) {
    if (!this.instance) {
      this.instance = new Demo(name);
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance('dell lee');
const demo2 = Demo.getInstance('ddd');

console.log(demo1.name);
console.log(demo2.name);

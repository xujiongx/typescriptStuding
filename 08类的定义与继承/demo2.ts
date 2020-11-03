/*
 * @Author: your name
 * @Date: 2020-08-24 03:15:38
 * @LastEditTime: 2020-08-24 03:31:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\08类的定义与继承\demo2.ts
 */
// 类中地访问类型和构造器;
//public protected private
class Person81 {
  name: string;
  private sayHi() {
    console.log('hi');
  }
}

const person81 = new Person81();
person81.name = 'dell';
console.log(person81.name);
// person81.sayHi();

//constructor

class Person82 {
  //传统方法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  //简化写法
  constructor(public name: string) {}
}

const person82 = new Person82('dell2');

console.log(person82.name);

//子类构造器
class Person83 {
  constructor(public name: string) {}
}

class Teacher83 extends Person83 {
  constructor(public age: number) {
    super('bob'); //子类构造器需要super(),父类没有构造器也需要传递空地super()
  }
}

const teacher83 = new Teacher83(28);
console.log(teacher83.age, teacher83.name);

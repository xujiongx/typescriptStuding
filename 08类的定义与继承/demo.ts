/*
 * @Author: your name
 * @Date: 2020-08-24 03:08:55
 * @LastEditTime: 2020-08-24 03:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\08类的定义与继承\demo.ts
 */
class Person8 {
  name = 'dell';
  getName() {
    return this.name;
  }
}

class Teacher8 extends Person8 {
  getTeacherName() {
    return 'dell';
  }
  getName() {
    //super指的是父类
    return super.getName() + 'lee';
  }
}

const person8 = new Person8();
console.log(person8.getName());

const teacher8 = new Teacher8();
teacher8.getName();
teacher8.getTeacherName();

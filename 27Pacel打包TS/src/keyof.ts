/*
 * @Author: your name
 * @Date: 2020-09-01 13:46:35
 * @LastEditTime: 2020-09-01 14:01:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\27Pacel打包TS\src\keyof,.ts
 */
interface Person {
  name: string;
  age: number;
  gender: string;
}

//keyof和泛型的结合
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'Bob',
  age: 19,
  gender: 'Hello',
});

teacher.getInfo(name);
console.log(teacher.getInfo('name'), teacher.getInfo('age'));

/*
 * @Author: your name
 * @Date: 2020-09-03 18:53:44
 * @LastEditTime: 2020-09-04 13:09:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\29类的装饰器\src\simpleDecorator.ts
 */
//类的装饰器
// function testDecorator() {
//   return function <T extends new (...args: any[]) => {}>(constructor: T) {
//     return class extends constructor {
//       name = 'jiong';
//       getName() {
//         return this.name;
//       }
//     };
//   };
// }

// const Test = testDecorator()(
//   class Test {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
// );

// const test = new Test('dell');
// console.log(test.getName());

//方法的装饰器
//普通方法，target对应的是类的prototype
//静态方法，targrt对应的是类的构造函数
// function getNameDecorate(
//   target: any,
//   key: any,
//   descriptor: PropertyDescriptor
// ) {
//   // descriptor.writable = true;
//   // descriptor.enumerable = true;
//   // descriptor.configurable = true;
//   // console.log(target, key, descriptor, 123);
//   descriptor.value = function () {
//     return 'descript';
//   };
// }

// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @getNameDecorate
//   getName() {
//     return this.name;
//   }
// }

// const test = new Test('jiong');

// console.log(test.getName());

//访问器的装饰器
// function visitDecorator(
//   target: any,
//   key: string,
//   descriptor: PropertyDescriptor
// ) {
//   // descriptor.writable = false;
//   console.log(target, key);
// }

// class Test {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
//   @visitDecorator
//   get name() {
//     return this._name;
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const test = new Test('bob');
// test.name = 'jiong';
// console.log(test.name);

//属性的装饰器

//修改的并不是实例上的name,而是原型上的name
// function nameDecorator(target: any, key: string): any {
//   target[key] = 'xu';
//   // console.log(target, key);
//   // const descriptor: PropertyDescriptor = {
//   //   writable: false,
//   // };
//   // return descriptor;
// }
// class Test {
//   @nameDecorator
//   name = 'Dell';
// }

// const test = new Test();
// // test.name = 'jiong';
// // console.log(test.name);
// console.log((test as any).__proto__.name);

//参数装饰器
//原型。方法名，参数所在的位置
// function paramDecorator(target: any, key: string, paramIndex: number) {
//   console.log(target, key, paramIndex);
// }

// class Test {
//   getInfo(@paramDecorator name: string, @paramDecorator age: number) {
//     console.log(name, age);
//   }
// }

// const test = new Test();
// test.getInfo('xu', 18);

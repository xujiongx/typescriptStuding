/*
 * @Author: your name
 * @Date: 2020-09-03 14:55:41
 * @LastEditTime: 2020-09-03 19:39:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\29类的装饰器\src\index.ts
 */
//类的装饰器
//装饰器本身是一个函数
//接受的参数是构造函数
//通过@符号使用
//类创建之后马上执行
//工厂类型包装  参数进行判断
function simpleDecorator(flag: boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log('bob');
      };
      console.log('decorator');
    };
  } else {
    return function (constructor: any) {};
  }
}

@simpleDecorator(true)
class SimpleTest {}

const simpleTest = new SimpleTest();

(simpleTest as any).getName();

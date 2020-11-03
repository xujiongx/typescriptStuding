/*
 * @Author: your name
 * @Date: 2020-08-31 17:43:02
 * @LastEditTime: 2020-08-31 18:00:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\25泛型\demo2.ts
 */
interface Item {
  name: string;
}

class Manager<T extends Item> {
  constructor(private data: T[]) {}
  getItemName(index: number): string {
    return this.data[index].name;
  }
}

const manager = new Manager([{ name: 'john', age: 18 }]);
console.log(manager.getItemName(0));

//使用泛型做具体的类型注解

function hello<T>(params: T) {
  return params;
}
const func: <T>(params: T) => T = hello;

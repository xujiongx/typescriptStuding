/*
 * @Author: your name
 * @Date: 2020-08-31 19:47:36
 * @LastEditTime: 2020-08-31 22:19:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\26命名空间\src\page.ts
 */
//依赖文件
namespace Home {
  export class Page {
    user: Components.User = {
      name: 'bob',
    };
    constructor() {
      new Components.Header();
      new Components.Context();
      new Components.Footer();
    }
  }
}

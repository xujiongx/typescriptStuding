/*
 * @Author: your name
 * @Date: 2020-08-31 21:49:23
 * @LastEditTime: 2020-08-31 22:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\26命名空间\src\components.ts
 */
namespace Components {
  export interface User {
    name: string;
  }

  export class Header {
    constructor() {
      const el = document.createElement('div');
      el.innerHTML = 'This is Header';
      document.body.appendChild(el);
    }
  }
  export class Context {
    constructor() {
      const el = document.createElement('div');
      el.innerHTML = 'This is Context';
      document.body.appendChild(el);
    }
  }
  export class Footer {
    constructor() {
      const el = document.createElement('div');
      el.innerHTML = 'This is Footer';
      document.body.appendChild(el);
    }
  }
}

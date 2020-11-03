/*
 * @Author: your name
 * @Date: 2020-08-31 23:55:45
 * @LastEditTime: 2020-09-01 13:25:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\27Pacel打包TS\src\jquery.d.ts
 */

//  全局定义declare  变量/函数

declare module 'jquery' {
  interface jqueryInstance {
    html: (params: string) => jqueryInstance;
  }
  function $(params: () => void): void;
  function $(params: string): jqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}

// interface jqueryInstance {
//   html: (params: string) => jqueryInstance;
// }
// // declare var $: (params: void) => void;
// //函数重载
// declare function $(params: () => void): void;
// declare function $(params: string): jqueryInstance;

// //对对象进行类型定义，以及对类进行定义，命名空间的嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

//通过接口重载
// interface jquery {
//   (params: () => void): void;
//   (params: string): jqueryInstance;
// }

// declare var $: jquery;

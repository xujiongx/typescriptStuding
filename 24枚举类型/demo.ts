/*
 * @Author: your name
 * @Date: 2020-08-27 15:42:08
 * @LastEditTime: 2020-08-31 16:12:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\24枚举类型\demo.ts
 */
console.log(123);

enum Status {
  Office = 1,
  online,
  Delete,
}

//应用场景
function getResult(status) {
  if (status === status.Office) {
    return 'office';
  } else if (status === status.Online) {
    return 'online';
  } else if (status === status.Delete) {
    return 'delete';
  }
  return 'error';
}

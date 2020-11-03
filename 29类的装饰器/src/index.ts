//通过装饰器修改方法，实现异常捕获

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(msg);
      }
    };
  };
}

interface UserInfo {
  name: string;
  age: number;
}

class Test {
  private userInfo: any = undefined;
  @catchError('userInfo.name 不存在')
  getName() {
    return this.userInfo.name;
  }
  @catchError('userInfo.age 不存在')
  getAge() {
    return this.userInfo.age;
  }
}

const test = new Test();
test.getName();

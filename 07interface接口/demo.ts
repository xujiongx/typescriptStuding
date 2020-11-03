/*
 * @Author: your name
 * @Date: 2020-08-24 00:05:14
 * @LastEditTime: 2020-08-24 03:08:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\07interface接口\demo.ts
 */

//接口不会被编译成js，是用来帮助更好地写ts
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propertyName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teacher(): string;
}

interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const person: Person = {
  name: 'Bob',
  age: 30,
  sex: 'male',
  say() {
    return 'say Hello';
  },
};

getPersonName(person);

class Users implements Person {
  say() {
    return 'say Hello';
  }
  name = 'dell';
}

const say: SayHi = (word: string) => {
  return word;
};

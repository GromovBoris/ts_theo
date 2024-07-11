// можно задавать явно тип, либо ts подхватит его неявно при первой инициализации
let num = 10;
console.log(num);
// num = "123" будет ругаться
let nam: string = "asdf";

// дает обратиться к встроенному методу, но выдает ошибку при обращении к незаданному
const obj = {};
// console.log(obj.abc) будет ругаться
console.log(obj.valueOf);

// через | можно херачить разные типы
let numberString: number | string = 234;
numberString = "234";

// можно положить только указанный тип
const arr: number[] = [123];
const arr2: [][] = [[], []];
const arr3: (number | string)[] = [123, "123"];

// tuples / кортежи только конкретное количество элементов с конкретными типами
const numberArr: [number, number] = [123, 456];
// при этом даст запушить новое
numberArr.push(321);
console.log(numberArr);

// дополнительные типы данных
// any
let test: any = 123;
test = "qwe";
test.map();
// unknown не можем переопределить
let test2: unknown = 123;
test2 = "qwe";
// let test3: string = test2 будет ругаться
// void обозначает отсутствие значения, чаще всего используется в функциях которые ничего не возвращаюют
function sayHello(n: any): void {
  //   return 1;будет ругаться
}
// void в стрелочной функции
const func = (n: any): void => {};

// литеральные типы данных задают строгое соответствие ожидаемым значениям
let env: "dev" | "stage" | "prod" = "dev";
// let env2:"dev"|"stage"|"prod" = "noth" будет ругаться

// types/типы  можно сохранять громоздкие выбор типов для использования в функциях и пп
type envs = "dev" | "stage" | "prod";
function setEnvs(myEnv: envs): envs {
  return myEnv;
}

// enums сорздает объект значений как type но можно обращаться как к объекту
const enum envsObj {
  dev = "dev",
  stage = "stage",
  prod = "prod",
}

let newEnv: envsObj = envsObj.prod;

// interfaces интерфейсы
// лучше избегать вложенностей как ниже, а описывать интерфейс в интерфейсе если нужна вложенность
// удобен для описания структуры баз данных и пп поля в экземпляре интерфейса будут строго типизированы
// в отличие от types позволяет с помощью extends расширяться на одном уровне

interface userInfo {
  phone: number;
  adress?: string;
}
interface User extends userInfo {
  name: string | "Bob";
  surname: string;
  height?: number;
  // ? показывает, что поле необязательное
}
interface Client {
  user: User;
  bill: number;
}
let clientBob: Client = {
  user: { name: "Bob", surname: "Gromov", height: 84, phone: 123456789 },
  bill: 185,
};

// также интерфейсом можно задавать любое количество однотипных полей
interface dateFromServer {
  [date: string]: number;
}
let newDate: dateFromServer = {
  "123": 123,
  "234": 234,
  "345": 345,
};

// в интерфейсах есть возможность задать свойству значение readonly

interface names {
  name: string;
  readonly surname: string;
}
const newChel: names = {
  name: "Petr",
  surname: "Lykov",
};
// newChel.surname = "Hlykov" даст ошибку

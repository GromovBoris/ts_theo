// generics дженерики

interface UsersNew {
  name: string;
  surname: string;
}

const userNewFirst: UsersNew = {
  name: "Boris",
  surname: "Gromov",
};

interface Articles {
  author: string;
  title: string;
  content: string;
}

const articleNewFirst: Articles = {
  author: "Gromov",
  title: "first",
  content: "story",
};

// универсальная функция для запроса по урлу

// не можем использовать универсально даже с разными типами, не дает универсальности, any тоже не даст нужно результата:

// function makeRequest(url: string, params?: {}): UsersNew | Articles | any {
//   return { name: "Boris", surname: "Gromov" };
// }

// для этого используем дженерики с указателем типа

interface Params {
  query: {};
}

// данные в <> можно назвать как угодно
// при написании функции можно использовать сразу несколько дженериков
// например <ReguestData, TypeData> и пр.
// также можно передовать типы:
// const MyType = string | "qwerty" или <string, number>

function makeRequest<Type>(
  url: string,
  //   returnData: Type,
  params?: Params
): Type | undefined {
  let returnData = {} as Type;
  return returnData;
}

const myUser = makeRequest<UsersNew>("/getUsers");

const myArticle = makeRequest<Articles>("/getArticles");

//  дженерики можно использовать для расширения интерфейсов

interface DataType<Type> {
  type: Type;
  name: string;
}

const newUserSecond: DataType<string> = {
  type: "type",
  name: "Bob",
};

// также можно задавать по несколько сразу

interface DataNext<A, B, C> {
  type: A;
  name: B;
  surname: C;
}

const newUserThird: DataNext<number, string, string> = {
  type: 1,
  name: "ASD",
  surname: "QWE",
};

// конструируем класс с помощью дженериков

type CustumerTypes = "new" | "impulse" | "angry" | "happy";

class CustumerClass<T> {
  type: T;
  name: string;

  constructor(type: T, name: string) {
    (this.type = type), (this.name = name);
  }
}

const custumerFirst = new CustumerClass<CustumerTypes>("angry", "Bob");

console.log(custumerFirst);

// можно использовать в функциях

interface PersonInfo {
  name: string;
  surname: string;
}

function workPerson<T extends PersonInfo>(args: T): string {
  return `hi, ${args.name} ${args.surname}`;
}

console.log(workPerson({ name: "Boris", surname: "Gromov" }));

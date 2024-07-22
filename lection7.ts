// utility types

interface Accomodation {
  title: string;
  location: string;
  address: string;
  rooms: number;
}

// с помощью Pick можем взять частично выборочно из интерфейса с их перечислением

const userAccoFirst: Pick<Accomodation, "title" | "location"> = {
  title: "firstUser",
  location: "Sacramento",
  // а тут ругается
  //   name: "Boris"
};

// утилита Omit наоборот исклчает элементы интерфейса

const userAccoSecond: Omit<Accomodation, "title" | "location"> = {
  // тут сразу ругается
  // title: "firstUser",
  // location: "Sacramento",
  address: "dream road 15",
  rooms: 3,
};

// можем определить массив вот  так:

const firstArray: number[] = [1, 2, 3];

// а можно вот так через дженерик:

const secondArray: Array<number> = [1, 2, 3];

// а можно использовать свойства Array:

const thirdArray: ReadonlyArray<number> = [1, 2, 3];

// и теперь нам не даст изменить в массиве ничего:

// thirdArray[0] = 1 будет красным ибо ридонли

// здесь не будет ругаться, ибо Partial делает свойства необязательными
const myAcco: Partial<Accomodation> = {
  title: "second",
  // но необязательными становятся только объявленные свойства, незаданные по-прежнему не даст добавить
};

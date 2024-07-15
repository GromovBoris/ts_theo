// по сути у каждого класса есть интерфейс, который он реализует через имплемент

interface IUserNames {
  name: string;
  surname: string;
}

interface IUserPersonal {
  birthday: string;
  age: number;
}

interface IUserData extends IUserNames, IUserPersonal {
  height: number;
  weight: number;
}

class UserData implements IUserData {
  name: string;
  surname: string;
  birthday: string;
  age: number;
  height: number;
  weight: number;
  constructor(props: IUserData) {
    this.name = props.name;
    this.surname = props.surname;
    this.birthday = props.birthday;
    this.age = props.age;
    this.height = props.height;
    this.weight = props.weight;
  }
}

const userBoris: UserData = {
  name: "Boris",
  surname: "Gromov",
  birthday: "16071979",
  age: 44,
  height: 185,
  weight: 100,
};

console.log(userBoris);

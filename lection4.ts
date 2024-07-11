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
}

class UserData implements IUserData {
  name: string;
  surname: string;
  birthday: string;
  age: number;
  height: number;
  constructor(props: IUserData) {
    this.name = props.name;
    this.surname = props.surname;
    this.birthday = props.birthday;
    this.age = props.age;
    this.height = props.height;
  }
}

const userBoris: UserData = {
  name: "Boris",
  surname: "Gromov",
  birthday: "16071979",
  age: 44,
  height: 102,
};

console.log(userBoris);

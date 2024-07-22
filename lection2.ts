// пишем интерфейс для пропсов, чтобы не повторяться
interface IClassUser {
  name: string;
  surname: string;
}

class ClassUser {
  name: string;
  // public делает свойство/метод публичным, они такие и являются по умолчанию
  public surname: string;
  // private делает свойство/метод приватным, это значит, что использовать обращение к нему мы можем только внутри класса
  //protected разрешит использовать свойство в классах extended
  // private secretMessage: string;
  protected secretMessage: string;
  // secretMessage: string;

  // можно так
  // constructor(props: { name: string; surname: string }) {
  // а можно вот так с интерфейсом
  constructor(props: IClassUser) {
    this.name = props.name;
    this.surname = props.surname;
    this.secretMessage = `${props.name}, its your secret message`;
  }

  greets(): void {
    console.log(`Hi, ${this.name} ${this.surname}!`);
  }

  // можно сделать переменную или метод приватным
  private bye(): void {
    console.log(`Bye, ${this.name} ${this.surname}!`);
  }

  printSecretMessage(password: number): string | null {
    if (password === 123) {
      return this.secretMessage;
    }
    return "go away, i call police";
  }
}

const userBob = new ClassUser({
  name: "Boris",
  surname: "Gromov",
  // phone: 89099091106 подсвечивает, что такого пропса нет
});

// вызывается
userBob.greets();
// не вызывается, можно использовать только внутри
// userBob.bye();

// можем достать
userBob.name;
//  подсветит ошибку
// userBob.phone;

// вот так можно получить private
console.log(userBob.printSecretMessage(123));
console.log(userBob.printSecretMessage(124));
// а так нет
// console.log(userBob.secretMessage);

interface IClassCustomer extends IClassUser {
  bill: number;
}

class ClassCustomer extends ClassUser {
  // вопросительный знак делает свойство необязательным
  // bill?: number;
  bill: number;

  constructor(props: IClassCustomer) {
    // используем super для наследования пропсов из конструктора-родителя
    super({
      name: props.name,
      surname: props.surname,
    });

    this.bill = props.bill;
  }
  getBill(): string {
    // почему-то не работает с super
    // return `${super.secretMessage} ${this.bill}`;
    return `${this.secretMessage} ${this.bill}`;
  }
}

const customerBob = new ClassCustomer({
  bill: 2024,
  name: "B",
  surname: "G",
});

console.log(customerBob.getBill());

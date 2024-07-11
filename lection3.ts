// в интерфейса задан общий стандарт класса

interface IFirstClass {
  name: string;
  surname: string;
  printSecretMessage(password: number): string | null;
}

interface ISecondClass {
  greets(): string;
}

// с помощью implements мы заставляем класс соответствовать стандартам интерфейса
// также можно имплементить 2 и более интерфейсов в класс

class FirstClass implements IFirstClass, ISecondClass {
  name: string;
  public surname: string;
  protected secretMessage: string;

  constructor(props: IClassUser) {
    this.name = props.name;
    this.surname = props.surname;
    this.secretMessage = `${props.name}, its your secret message`;
  }

  greets(): string {
    return `Hi, ${this.name} ${this.surname}!`;
  }

  private bye(): void {
    console.log(`Bye, ${this.name} ${this.surname}!`);
  }

  printSecretMessage(password: number): string | null {
    // запись не будет верна, поскольку иное передано через implements.
    // implements заставляет строго соответствовать интерфейсу
    //   printSecretMessage(password: number): number | null {
    if (password === 123) {
      return this.secretMessage;
    }
    return "go away, i call police";
  }
}

const firstUserBob = new FirstClass({
  name: "Boris",
  surname: "Gromov",
  // phone: 89099091106 подсвечивает, что такого пропса нет
});

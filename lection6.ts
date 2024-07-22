// utility types

interface User {
  name: string;
}

interface Human extends User {
  speak(): void;
}

interface Animal extends User {
  color: string;
}

// получаем с сервера User но что именно непонятно

const serverInfo: User = {
  name: "Boris",
  speak: () => {
    console.log("hello");
  },
};

// проверяем на Human

function isHuman(serverInfo: User): serverInfo is Human {
  return typeof (serverInfo as Human).speak === "function";
}

if (isHuman(serverInfo)) {
  console.log("yeah!");
}

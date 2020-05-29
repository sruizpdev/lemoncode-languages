console.log(
  'This is your playground, experiment with TS code and check the console'
);
console.log(
  '----------------------------------------------------------------------------------'
);
// DATA
const nums = [0, 1, 2, 3, 4];
const nums2 = [5, 6, 7, 8, 9];
console.log('Array original: ', nums);
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = (arr: string[]) => {
  if (arr.length > 0) {
    const [first] = arr;
    return first;
  } else {
    return null;
  }
};
console.log('head: ', head(nums));
console.log(
  '----------------------------------------------------------------------------------'
);
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = (arr: string[]) => {
  if (arr.length > 0) {
    const [first, ...newArray] = arr;
    return newArray;
  } else {
    return null;
  }
};
console.log('tail: ', tail(nums));
console.log(
  '----------------------------------------------------------------------------------'
);
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = (arr) => {
  return arr.length > 0 ? arr.slice(0, arr.length - 1) : null;
};
console.log('init: ', init(nums));
console.log(
  '----------------------------------------------------------------------------------'
);
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (arr) => {
  return arr.length > 0 ? arr[arr.length - 1] : null;
};
console.log('last: ', last(nums));
console.log(
  '----------------------------------------------------------------------------------'
);
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
console.log('Array original: ', nums);
console.log('Array original 2: ', nums2);

const concat = (a, b) => {
  return [...a, ...b];
};
console.log('concat: ', concat(nums, nums2));
// Opcional
const concatOpcional = (...listArrays) => {
  let newArray = [];
  listArrays.forEach((arr) => (newArray = [...newArray, ...arr]));
  return newArray;
};

console.log(
  'concatOpcional: ',
  concatOpcional(nums, nums2, [10, 11, 12], [13, 14, 15])
);

let person = {
  name: '',
  phone: '',
};
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
  return {
    ...source,
  };
}
console.log(clone(person));
console.log(
  '----------------------------------------------------------------------------------'
);
//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };
console.log({ a });
console.log({ b });

function merge(source, target) {
  return {
    ...target,
    ...source,
  };
}
console.log('merge: ', merge(a, b));

//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
console.log(
  '----------------------------------------------------------------------------------'
);
const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

function isBookRead(books: book[], titleToSearch: string) {
  const newBooks = books.filter((book) => book.title === titleToSearch);
  if (newBooks.length > 0) {
    return newBooks[0].isRead;
  } else {
    return false;
  }
}
interface book {
  title: string;
  isRead: boolean;
}

console.log('Libro Devastación: ', isBookRead(books, 'Devastación')); // true
console.log(
  'Libro Canción de hielo y fuego: ',
  isBookRead(books, 'Canción de hielo y fuego')
); // false
console.log(
  'Libro Los Pilares de la Tierra: ',
  isBookRead(books, 'Los Pilares de la Tierra')
); // false

// Slot Machine
console.log(
  '----------------------------------------------------------------------------------'
);

class SlothMachine {
  partida = {
    coins: 0,
  };
  constructor() {
    this.partida.coins = 0;
  }
  play() {
    this.partida.coins++;

    const bool1: boolean = Math.random() >= 0.1;
    const bool2: boolean = Math.random() >= 0.1;
    const bool3: boolean = Math.random() >= 0.1;

    if (bool1 && bool2 && bool3) {
      console.log(`Congratulations!!!. You won ${this.partida.coins} coins!!`);
      this.partida.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

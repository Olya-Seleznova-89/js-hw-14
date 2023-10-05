//Створити функцію, яка приймає масив об'єктів з ключами "name" та "age" і повертає новий масив, який містить тільки імена людей старших за 18 років.

const arrayPeople = [
  { name: "Petro", age: 25 },
  { name: "Mery", age: 16 },
  { name: "Ivan", age: 17 },
  { name: "Stas", age: 23 },
  { name: "Ira", age: 18 },
];

const age = 18;

function ageElder(arr, prop, age) {
  return arr.filter((obj) => obj[prop] >= age);
}

console.table(ageElder(arrayPeople, 'age', age));
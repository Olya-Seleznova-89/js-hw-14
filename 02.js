//Створити функцію, яка приймає масив об'єктів і повертає новий масив, який містить тільки об'єкти з певним значенням ключа.

const user = [
  { name: 'John', gender: 'male' },
  { name: 'Jane', gender: 'female' },
  { name: 'Bob', gender: 'male'},
  { name: 'Adam', gender: 'male'},
  { name: 'Alice', gender: 'female'},
]

function createNewArrayValue(arr, key, value) {
  return arr.filter(obj => obj[key] === value);
}

const genderUsers =  createNewArrayValue(user, 'gender', 'male');

console.log(genderUsers);
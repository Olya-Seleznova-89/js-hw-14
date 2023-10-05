// Створити функцію, яка приймає масив чисел і повертає новий масив, який містить тільки непарні числа.

const numbers = [8, 11, 5, 2, 10, 3, 14];

function filterNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0);
}
const newArr = filterNumbers(numbers);
console.log(newArr); 
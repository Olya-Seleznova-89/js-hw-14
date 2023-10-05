// Необхідно відобразити список товарів, відсортований за ціною в порядку зростання або спадання.Для цього можна використовувати метод sort() або reverse().

const products  = [    
    { name: "🍍", price: 170 },
    { name: "🍎", price: 110 },
    { name: "🍇", price: 120 },
    { name: "🍏", price: 50 },  
  ];
  
  function sortPrice(products) {
    return products.slice().sort((a, b) => a.price - b.price);
  }
  
  console.table(sortPrice(products));
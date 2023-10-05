// Необхідно відобразити список товарів, які відповідають певному критерію цін. Для цього можна використовувати метод filter (), потім дати на них знижку 10%.

const products  = [    
    { name: "🍍", price: 170 },
    { name: "🍎", price: 110 },
    { name: "🍇", price: 120 },
    { name: "🍏", price: 50 },  
  ];
  const start = 100;
  const sales = 0.9;
  
  function filterGoodsAndSales(arr, prop, start, sales) {
    return arr
      .filter((obj) => obj[prop] >= start)
      .map((obj) => ({
        name: obj.name,
        price: obj[prop] * sales,
      }));
  }
  
  console.table(filterGoodsAndSales(products, "price", start, sales));
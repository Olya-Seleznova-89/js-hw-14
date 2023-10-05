// Необхідно об'єднати два списки даних в один, для цього можна використовувати метод concat ().

    const product1  = [    
        { name: "🍍", price: 170 },
        { name: "🍎", price: 110 },
  ];
  const product2  = [    
    { name: "🍇", price: 120 },
    { name: "🍏", price: 50 },  
  ];
  
  console.table(product1.concat(product2));
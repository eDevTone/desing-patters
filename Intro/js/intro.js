(() => {
  // Funcion de primer orden
  function sum(a, b) {
    return a + b;
  }

  let res = sum(1, 2);

  console.log(res);

  const fnSum = sum;

  console.log(fnSum(11, 2));

  // Funcion de order superior
  function operation(a, b, fn) {
    console.log('Executing operation');
    console.log(fn(a, b));
  }

  operation(20, 2, sum);

  //Arrow function
  operation(20, 2, (a, b) => a * b);
  operation(20, 2, (a, b) => {
    const c = a + b;
    return c * 4;
  });

  // ForEach Es una funcion de orden superior con una funcion anonima de perimer orden
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((item, index) => {
    console.log(item, index);
  });

  //Reduce 
  const arr2 = [5, 4, 7, 1, 10];
  const total = arr2.reduce((acc, cur) => acc + cur, 0);
  console.log(total);

})()
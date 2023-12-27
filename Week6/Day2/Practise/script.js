// function checkYear() {
//     const userAnswer = Number(prompt("Give me a year"));
//     const output = userAnswer > 2000 && userAnswer < 2100 ? "You are in the 21st century" : "You live in rhe middle age";
//     console.log(output);
// }

// checkYear()


// const calculator = (num1, num2, operator) => {
//     return operator === "+"
//     ? num1 + num2
//     : operator === "-"
//     ? num1 - num2
//     : operator === "*"
//     ? num1 * num2
//     : operator === "/"
//     ? num1 / num2
//     : "invalid Operator";
// };

// console.log(calculator(1, 2, '+'));
// console.log(calculator(1, 2, '-'));
// console.log(calculator(1, 2, '*'));
// console.log(calculator(1, 2, '/'));
// console.log(calculator(1, 2, 'asasasasa'));


// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }

// let fnInside = outside(3);
// console.log(fnInside);

// let result = fnInside(10);

// console.log(result);

// // Вот пошаговое объяснение:

// // Определение функции outside: Эта функция принимает один аргумент x и возвращает другую функцию — inside. Это важная часть: outside не возвращает результат сложения, она возвращает функцию.

// // Функция inside: Это внутренняя функция, определенная внутри outside. Она тоже принимает один аргумент y и возвращает сумму x и y. Важно отметить, что inside имеет доступ к переменной x, определенной в outside благодаря механизму замыканий.

// // Замыкания (Closures): В JavaScript функции помнят окружение, в котором они были созданы. Это означает, что inside помнит значение x даже после того, как внешняя функция outside завершает выполнение. Этот механизм и называется замыканием.

// // Вызов outside(3): Вы вызываете функцию outside, передавая ей 3. Это устанавливает значение x равным 3 в замыкании функции inside. Возвращаемая функция inside сохраняется в переменной fnInside.

// // Вывод fnInside: В консоль выводится тело функции inside, потому что fnInside является ссылкой на эту функцию.

// // Вызов fnInside(10): Теперь вы вызываете fnInside (которая является inside с x=3) и передаете ей 10 как y. Она возвращает сумму 3 и 10, то есть 13.

// // Вывод result: В консоль выводится 13, результат вызова fnInside(10).

// // Таким образом, замыкания позволяют "запомнить" и использовать значения переменных из вышестоящей функции даже после того, как эта функция завершила выполнение. Это мощная особенность JavaScript, которая широко используется для создания приватных переменных, написания функций высшего порядка и других задач.



// let add = (function () {
//     let counter = 0;
//     function calculus() {
//         counter += 1; 
//         return counter
//     }
//     return calculus
//   })();
  
//   console.log(add());
//   console.log(add());
//   console.log(add());
//   console.log(add());

// //   Немедленно вызываемое функциональное выражение (IIFE): Выражение (function () {...})(); это функция, которая определяется и сразу же вызывается. Это означает, что вся логика внутри этой функции исполняется сразу после её объявления.

// // Переменная counter: Внутри IIFE создается переменная counter, которая инициализируется значением 0. Эта переменная приватна для IIFE и доступна только внутри неё.

// // Функция calculus: Внутри IIFE определяется функция calculus. Эта функция увеличивает значение counter на 1 при каждом вызове и возвращает новое значение. Она имеет доступ к переменной counter благодаря замыканию.

// // Возвращение функции calculus: IIFE возвращает функцию calculus. Это означает, что переменная add становится ссылкой на функцию calculus.

// // Вызов add(): Когда вы вызываете add(), вы на самом деле вызываете функцию calculus, которая увеличивает свой счетчик и возвращает его текущее значение. Поскольку counter сохраняется в замыкании, он не сбрасывается между вызовами; он увеличивается каждый раз, когда вы вызываете add().

// // Таким образом, при последовательных вызовах:

// // Первый console.log(add()) выводит 1, потому что это первый вызов функции и counter увеличивается с 0 до 1.
// // Второй console.log(add()) выводит 2, так как counter уже был равен 1 и увеличивается ещё на 1.
// // Третий и четвертый вызовы аналогично увеличивают и выводят counter, показывая 3 и 4 соответственно.
// // Это популярный паттерн для создания приватных переменных и функций, который позволяет сохранять состояние между вызовами и защищает переменные от доступа извне.

// const add = a => b => a + b;
// const result = add(2)(3)
// console.log(result) // console.log 5

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// console.log(myCar);

// console.log(myCar.make);
// console.log(myCar['make']);

// for (let key in myCar) {
//     if (myCar.hasOwnProperty(key)) {  // Check if the property is not from the prototype chain
//         console.log(key, myCar[key]);  // Log the key and its corresponding value
//     }
// }

function makeUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John
  
  // The same as
  function makeUserShorthand(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }

  let user2 = makeUserShorthand("Egor", 30);
  alert(user2.name); // John
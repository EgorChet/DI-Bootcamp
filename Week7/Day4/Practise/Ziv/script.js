// function getX() {
//   setTimeout(timeoutX, 1);
// }

// const timeoutX = () => {
//   console.log("get x =>");
//   return 5;
// }

// function getY() {
//   console.log("get y =>");
//   return 6;
// }

// function getXY() {
//   console.log("get xy =>");
//   let x = getX();
//   console.log("x=>", x);
//   let y = getY();
//   console.log("y=>", y);
//   console.log(x + y);
// }

// getXY();

// function doSomething(f){
//   // ... get data from the server

//   f()
// }

// function myCallback(){
//   console.log('Callback executed!!!');
// }

// doSomething(myCallback)

// function fetchDataFromServer(callback){
//   setTimeout(()=>{
//     const data = 'Data from server'
//     callback(data)
//   },2000)
// }

// function processData(data){
//   console.log('Received:' + data);
// }

// fetchDataFromServer(processData);

/** */
// function getX(callback){
//   setTimeout(()=> {
//     callback(5)
//   }, 2000)
// }

// function getY(callback){
//   callback(6)
// }

// function getXY() {
//   getX(function(x){
//     getY(function(y){
//       console.log(x + y);
//     })
//   })
// }

// getXY()

/** Promise
 *  - Pendding
 *  -- resolve - fulfiled
 *  -- reject - fulfiled
 */

/**
 * new Promise((resolve, reject) => {})
 */

// const p = new Promise((resolve, reject)=>{
//   resolve(10)
// });

// console.log(p);

// const flip = () => {
//   const coin = Math.floor(Math.random() * 3);
//   return coin < 2 ? (coin === 0 ? "head" : "tail") : "side";
// };

// const flipcoin = new Promise((res, rej) => {
//   setTimeout(() => {
//     const flipResult = flip();
//     if (flipResult === "head" || flipResult === "tail") {
//       res({flipResult});
//     } else {
//       rej({flipResult});
//     }
//   }, 1000);
// });

// // console.log(flipcoin);
// flipcoin
//   .then((result) => {
//     // console.log("res=>", result);
//     return JSON.stringify(result,null, 4);
//   })
//   .then((result)=> {
//     // return JSON.parse(result);
//     console.log(result);
//   })
//   // .then((result)=>{
//   //     console.log(result);
//   // })
//   .   ((error) => {
//     console.log("rej=>", error);
//   });

// const getX = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(5);
//     }, 2000);
//   });
// };

// const getY = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(6);
//     }, 3000);
//   });
// };

// const getXY = () => {
//   // let x = getX();

//   getX()
//     .then((resultX) => {
//       // let y = getY();

//       getY()
//         .then((resultY) => {
//           return resultX + resultY;
//         })
//         .then((sum) => {
//           console.log(sum);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// getXY();

/**
 * 1. simulateAsyncOperation function return a Promise with data as
 * Array of objects from server as json
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 */

// const getDataFromServer = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const arr = [
//         { username: "aaa", email: "aaa@gmail.com" },
//         { username: "bbb", email: "bbb@gmail.com" },
//         { username: "ccc", email: "ccc@gmail.com" },
//       ];
//       // res(JSON.stringify(arr));
//       rej(new Error("server not found"));
//     }, 5 * 1000);
//   });
// };

// getDataFromServer()
//   .then((res) => {
//     // console.log(res);
//     return JSON.parse(res);
//   })
//   .then((data) => {
//     showdata(data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert("please try again in few minutes");
//   });

// const showdata = (arr) => {
//   const html = arr.map((item) => {
//     return `<div>
//           ${item.username}, ${item.email}
//         </div>`;
//   });
//   document.getElementById("root").innerHTML = html.join("");
// };

/**
 * Promise Static methods
 *
 * Promise.all(arr_of_promises)
 * Promise.allSettled(arr)
 * Promise.race(arr)
 *
 */

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolve Promise 1");
  }, 2 * 1000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolve Promise 2");
  }, 5 * 1000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolve Promise 3");
  }, 1 * 1000);
});

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const data = async () => {
  try {
    const result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
  } catch (err) {
    console.log();
  }
};
// data()

// Promise.allSettled([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/** async / await ES8 */

function simpleAsync() {
  return new Promise((res, rej) => {
    res(1);
  });
}

// simpleAsync()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

/** return promise */
async function asyncFunction() {
  throw new Error("aaaa");
  return 10;
}

const arrowAsyncFunction = async () => {};

// asyncFunction()
//   .then((result) => console.log(result))
//   .catch((err) => console.log('catching my error=>',err));

async function getResult() {
  try {
    let res = await asyncFunction();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// getResult();

const getX = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(5);
    }, 2000);
  });
};
// const getX = async () => {
//   setTimeout(() => {
//     return 5
//   }, 2000);
// };

const getY = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(6);
    }, 3000);
  });
};

async function getXY() {
  try {
    const x = await getX();
    let y = await getY();
    console.log(x + y);
  } catch (error) {
    console.log("error=>", error);
  }
}
// getXY();
// function getXY() {
//   getX()
//     .then((resultX) => {
//       getY()
//         .then((resultY) => {
//           return resultX + resultY;
//         })
//         .then((sum) => {
//           console.log(sum);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// getXY();

// Async/Await In Loops
// WARNING: async/await doesn’t play nicely with .forEach() loops
// async/await plays nicely with for , for : of and while loops

const timeout = async (milliseconds, id) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id, " Done!");
      resolve();
    }, milliseconds);
  });
};

async function x() {
  console.log("before");

  ["first", "second", "third"].forEach(async (item) => {
    await timeout(2000, item);
  });

  //   for (item of ["first", "second", "third"]) {
  //     await timeout(2000, item);
  //   }
  console.log("after");
}

// x();

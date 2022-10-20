const getUser = (id) => {
  setTimeout(() => {
    console.log("Fetch stuff from database");
    return { id: id };
  }, 2000);
};

console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

// Note:
// The above `user` will not be printed
// To get the result from an asynchronous function, we can do three ways:
// 1. Callbacks
// 2. Promises
// 3. Async / Await

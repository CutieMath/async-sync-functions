// Method two: Use promises
// Parallel promises

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

// We are still using single thread
// They are kicking with two functions
Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(new Error(err.message)));

// if one complete, a result will be returned
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(new Error(err.message)));

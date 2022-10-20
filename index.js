// Asynchronous / None blocking function demo
console.log("Before");
setTimeout(() => {
  console.log("Fetch stuff from database");
}, 2000);
console.log("After");

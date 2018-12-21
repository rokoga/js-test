// Test1

// This is the first test.
// Just rewrite the TODO functions !

// TODO: Fix the function getData to receive the callback described bellow as argument
// Should call the callback function with returned data
const getData = cb => {
  //setTimeout simulates the delay time
  setTimeout(() => {
    cb({
      name: "John",
      age: "31",
      like: "guitar"
    });
  }, 500);
};

// TODO: Use the getData function with the callback
// Should return the return of getData with callback
const Test1 = cb => {
  getData(cb);
};

module.exports = Test1;

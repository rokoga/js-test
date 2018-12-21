// Test1

// This is the first test.
// Just rewrite the TODO functions !

// TODO: Fix the function getData to receive callback as argument
// Should use the callback function to return the data
const getData = () => {
  //setTimeout simulates the delay time
  setTimeout(() => {
    return {
      name: "John",
      age: "31",
      like: "guitar"
    };
  }, 500);
};

// TODO: Use the callback function to use as argument to getData function
const Test1 = callback => {
  getData();
};

module.exports = Test1;

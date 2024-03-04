// worker.js

// Define an event listener for the 'message' event
export default () => {
  function heavyCalculation() {
    // Simulate a heavy computation
    let result = 0;
    for (let i = 0; i < 10000000000; i++) {
      result += i;
    }
    return result;
  }
  onmessage = function (event) {
    // console.log("Received message:", event.data);
    const { type } = event.data;
    if (type === "calculate") {
      console.log("Heavy calculation starting...");
      const result = heavyCalculation(); // This can be any expensive computation
      postMessage(result);
    }
  };
};

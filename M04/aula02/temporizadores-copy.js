console.log(1);

setTimeout(() => {
  console.log("Hello in 2 seconds");
}, 0);

console.log(2);

let count = 0;
let interval = setInterval(() => {
  console.log("Hello");
  count++;
  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

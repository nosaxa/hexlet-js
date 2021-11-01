import _ from "lodash";

console.log("Hello Hexlet!");
console.log(_.last(["one", "two"]));

const subtr = (a, b) => {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};

const first = subtr(12, 4);
const second = subtr(2399, 5550);

console.log(first, second);

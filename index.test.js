const sum = require("./index");

// test("add of two numbers ", (sumeTest) => {
//   expect(sum(1, 2).toBe(3));
// });

test("add of two numbers ", sumTest);
function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(a1: number, a2: number, cb: (num: number) => void) {
  const result = a1 + a2;
  cb(result);
}

printResult(add(14, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(7, 7));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

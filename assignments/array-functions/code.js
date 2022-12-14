const timesTable = (rows, columns) => {
  const numbers = Array(columns).fill().map((_, i) => i + 1)
  for (let i = 1; i <= rows; i++) {
    const print = numbers.map(x => x * i)
    console.log(print)
  }
}

const exponentsTable = (rows, columns) => {
  const num = Array(columns).fill().map((_, i) => i + 1)
  for (let i = 1; i <= rows; i++) {
    const print = num.map(x => x ** i)
    console.log(print)
  }
}

const fibonacci = (num) => {
  if (num == 0) {
    return 'stop being dumb'
  } else {
    const array = [0, 1]
    for (let i = 0; i < num - 1; i++) {
      array.push(array[i] + array[i + 1])
    }
    return array
  }
}
//to get the xth fibonacci number: fibonacci(x)[x]

function sigma(start, end, modifier) {
  const length = end - start + 1;
  const map = (v, k) => modifier ? modifier(k + start) : k + start;
  const sum = (a, b) => a + b;

  return Array.from({ length }, map).reduce(sum);
}

const countTens = (array) => array.filter((x) => x == 10).reduce((acc) => acc + 1, 0)
const sum = (array) => array.reduce((acc, x) => acc + x, 0)
const evens = (array) => array.filter((x) => x % 2 == 0)
const anyOverOneHundred = (array) => array.filter((x) => x > 100).length > 0
const pyramid = (num) => Array(num).fill().flatMap((_, i) => Array(i + 1).fill(i + 1))
// function calling itself
const fn = (val) => {
  if (val > 0) {
    // calling time - ascending
    console.log(`${val}`);
    fn(val - 1);
    // ending tiem - descending
    console.log(`${val}`);
  }
  return val;
};

const tail = (n) => {
  if (n > 0) {
    console.log(n);
    tail(n - 1);
  }
};

const tailLoop = (n) => {
  while (n > 0) {
    console.log(n);
    n--;
  }
};

const head = (n) => {
  if (n > 0) {
    head(n - 1);
    console.log(n);
  }
};

const headLoop = (n) => {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
};

const tree = (n) => {
  if (n > 0) {
    console.log(n);
    tree(n - 1);
    tree(n - 1);
  }
};

// sum of first n natural numbers
const sum = (n) => {
  if (n > 0) {
    return n + sum(n - 1);
  }
  return 0;
};

//factorial of given number
const factorial = (n) => {
  if (n === 0) return 1;
  return factorial(n - 1) * n;
};

// m power of n
const pow = (m, n) => {
  if (n === 0) return 1;
  if (n % 2 === 0) return pow(m * m, n / 2);
  return m * pow(m * m, (n - 1) / 2);
};

//taylor series e power x
// e^x =  1 +  x/1 + x^2/2! + x^3/3! + ... + n terms
// e^x = 1+x[1+x/2[1+x/3[...]]]
const taylorLoop = (x, n) => {
  let total = 0;
  for (i = n; i > 0; i--) total = 1 + (total * x) / i;
  return total;
};

//excessive recursion
const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
};

const fibLoop = (n) => {
  if (n <= 1) return n;

  let total = 0,
    t0 = 0,
    t1 = 1;
  for (i = 2; i < n; i++) {
    s = t0 + t1;
    t0 = t1;
    t1 = total;
  }
  return total;
};

const fibMap = {};
const fibMem = (n) => {
  if (fibMap[n]) return fibMap[n];
  if (n <= 1) {
    fibMap[n] = n;
    return n;
  }
  fibMap[n - 1] = fibMap[n - 1] || fibMem(n - 1);
  fibMap[n - 2] = fibMap[n - 2] || fibMem(n - 2);
  return fibMap[n - 1] + fibMap[n - 2];
};

// combintation formula ncr = n!/r!(n-r)!
const ncr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

//ncr using pascal triangle
const ncrPascal = (n, r) => {
  if (r == 0 || n == r) return 1;
  return ncrPascal(n - 1, r - 1) + ncrPascal(n - 1, r);
};

//tower or hanoi - move one disk, no larger on top of other
const toh = (n, a, b, c) => {
  if (n > 0) {
    toh(n - 1, a, c, b);
    console.log(`${a} to ${c}`);
    toh(n - 1, b, a, c);
  }
};

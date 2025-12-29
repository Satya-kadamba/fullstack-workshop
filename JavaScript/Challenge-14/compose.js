const compose = (...fns) => {
  return (value) => {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
};

const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
};

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x

const composed = compose(addOne, double, square);
console.log(composed(3)); 

const piped = pipe(square, double, addOne);
console.log(piped(3)); 

// CLASS 01
null;

// CLASS 02
null;

// CLASS 03
null;

// CLASS 04
null;

// CLASS 05
null;

// CLASS 06
null;

// CLASS 07
null;

// CLASS 08
null;

// CLASS 09
const fizzBuzz = () => {
    const c = console.log;
    for (let i = 1; i <= 1000; i++) {
        !(i % 15) ? c('fizzBuzz') : !(i % 5) ? c('buzz') : !(i % 3) ? c('fizz') : c(i);
    }
};

// CLASS 10
const rotateArray = arr => {
    if (!arr.length) return arr;
    arr.push(arr.shift());
    return arr;
};

// CLASS 11
const checkSum = (a, b) => a === 50 || b === 50 || a + b === 50;

// CLASS 12
const withinLimits = (a, b) =>
    ((0 <= a && a <= 20) || (80 <= a && a <= 100))
    && ((0 <= b && b <= 20) || (80 <= b && b <= 100));

// CLASS 13
null;

// CLASS 14
null;

// CLASS 15
null;

// CLASS 16
null;

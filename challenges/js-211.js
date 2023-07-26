// CLASS 01
null;

// CLASS 02
null;

// CLASS 03
const sumOfPoweredByTwo = $ => $.reduce((s, v) => s + v ** 2, 0);

// CLASS 04
const fizzBuzz = () => {
    const c = console.log;
    for (let i = 1; i < 101; i++) {
        !(i % 15) ? c('FizzBuzz') : !(i % 5) ? c('Buzz') : !(i % 3) ? c('Fizz') : c(i);
    }
};

// CLASS 05
const isUnique = $ => {
    for (let i = 0; i < $.length; i++) {
        if ($.match(new RegExp(`${$[i]}`, 'g')).length > 1) return false;
    }
    return true;
};

// CLASS 06
const findLongestWord = $ => {
    let out = 0;
    $.replaceAll(/[^a-z ]/ig, '').split(' ').forEach(v => out = Math.max(out, v.length));
    return out;
};

// CLASS 07
const sortedScores = $ => $.sort((a, b) => b - a);

// CLASS 08
const duplicate = $ => [...$, ...$];
const reverseArray = $ => $.reverse();

// CLASS 09
const powOfTwoSumEven = $ => $.reduce((s, v) => {
    if (!((v ** 2) % 4)) return s + (v ** 2);
    return s;
}, 0);

// CLASS 10
const isPalindrome = $ => {
    const $fix = $.replaceAll(/\W/g, '').toLowerCase();
    return $fix == $fix.split('').reverse().join('');
};

// CLASS 11
const inPlaceMoveZeros = $ => {
    const $fix = $.filter(v => v != 0);
    return $fix.concat(Array($.length - $fix.length).fill(0));
};

// CLASS 12
const bubbleSort = $ => {
    const len = $.length;
    let s = true;
    for (let i = 0; i < len - 1; i++) {
        if ($[i] < $[i + 1]) {
            [$[i], $[i + 1]] = [$[i + 1], $[i]];
            s = false;
        }
    }
    if (!s) bubbleSort($);
    return $;
};
const sumArray = $ => $.reduce((s, v) => s + v, 0);

// CLASS 12.5
const longestAlternatingSubarray = $ => {
    let long = 1, tally = 1;
    for (let i = 1; i < $.length; i++) {
        if ($[i] * $[i - 1] < 0) long = Math.max(long, ++tally);
        else tally = 1;
    }
    return long;
};
const longestIncreasingSubsequence = $ => {
    const map = new Array($.length).fill(1);
    for (let i = 0; i < $.length; i++) {
        for (let j = 0; j < i; j++) {
            if ($[i] > $[j]) map[i] = Math.max(map[i], map[j] + 1);
        }
    }
    return Math.max.apply(null, map);
};
const removeDuplicates = $ => [...new Set($)];

// CLASS 13
const fizzBuzzSum = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (!(i % 5) || !(i % 3)) sum += i;
    }
    return sum;
};
const maxValueOfArray = $ => Math.max.apply(null, $);
const mergeSort = ($, L, R) => {
    const merge = ($, L, M, R) => {
        const A = M - L + 1, B = R - M, X = new Array(A), Y = new Array(B);
        for (let i = 0; i < A; i++) X[i] = $[L + i];
        for (let j = 0; j < B; j++) Y[j] = $[M + j + 1];
        let i = 0, j = 0, k = L;
        while (i < A && j < B) {
            if (X[i] <= Y[j]) $[k++] = X[i++];
            else $[k++] = Y[j++];
        }
        while (i < A) $[k++] = X[i++];
        while (j < B) $[k++] = Y[j++];
    };
    if (L >= R) return;
    const M = L + parseInt((R - L) / 2, 10);
    mergeSort($, L, M);
    mergeSort($, M + 1, R);
    merge($, L, M, R);
    return $;
};

// CLASS 14
const fibonacci = () => {
    const seq = [0, 1];
    while (seq.at(-1) < 4e6) seq.push(seq.at(-2) + seq.at(-1));
    return seq.slice(0, -1).reduce((s, v) => !(v % 2) ? s + v : s, 0);
};

// CLASS 15
const quickSort = ($, L, R) => {
    const swap = ($, A, B) => {
        const x = $[A];
        $[A] = $[B];
        $[B] = x;
    };
    const partition = ($, L, R) => {
        let A = (L - 1);
        for (let B = L; B < R; B++) {
            if ($[B] < $[R]) swap($, ++A, B);
        }
        swap($, A + 1, R);
        return A + 1;
    };
    if (L < R) {
        quickSort($, L, partition($, L, R) - 1);
        quickSort($, partition($, L, R) + 1, R);
    }
    return $;
};

// CLASS 15.5
const factorial = n => n == 0 ? 1 : n * factorial(n - 1);
const exponent = (b, e) => e == 0 ? 1 : e == 1 ? b : b * exponent(b, e - 1);
const fib = n => {
    if (n == 0) return [0];
    if (n == 1) return [0, 1];
    const $ = fib(n - 1);
    return [...$, $[n - 2] + $[n - 1]];
};
const range = (a, b) => {
    const $ = [];
    if (a == b - 1) return $;
    $.push(a + 1);
    return $.concat(range(a + 1, b));
};
const sumArr = $ => $.length == 0 ? 0 : $[0] + sumArr($.slice(1));

// CLASS 16
Array.prototype.customFilter = function (cb) {
    const out = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) out.push(this[i]);
    }
    return out;
};
Array.prototype.customReduce = function (cb, init = 0) {
    let out = init + this[0];
    for (let i = 1; i < this.length; i++) out = cb(out, this[i], i, this);
    return out;
};

// CLASS 16.5
const findGCD = (a, b) => {
    const c = Math.min(a, b);
    return (a % c == 0 && b % c == 0) ? c : findGCD(Math.max(a, b), c - 1);
};

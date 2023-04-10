// CLASS 01
null;

// CLASS 02
const minMax = arr => {
    return { min: Math.min.apply(null, arr), max: Math.max.apply(null, arr) };
};

// CLASS 03
const sumPairs = (arr, sum) => {
    const pairs = [];
    if (arr.indexOf(sum / 2) !== arr.lastIndexOf(sum / 2)) pairs.push([sum / 2, sum / 2]);
    arr = [...new Set(arr.sort((a, b) => a > b ? 1 : -1))];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
};

// CLASS 04
const areAnagrams = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
};

// CLASS 05
const reverseString = str => {
    return str.length === 1 ? str : str.at(str.length - 1) + reverse(str.substr(0, str.length - 1));
};

// CLASS 06
null;

// CLASS 07
null;

// CLASS 08
const reverseWord = (str, n) => {
    let spaces = 0, reverse = '', word = '';
    if (!n) return null;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') spaces++;
        if (spaces === n - 1) word += str[i];
    }
    for (let i = word.length - 1; i > 0; i--) {
        switch (word[i]) {
            case '.': case ',': case '?': case '!': case '"':
            case ':': case ';': case '&': case '(': case ')':
                break;
            default: reverse += word[i];
        }
    }
    if (n === 1) return reverse + str[0];
    if (!reverse.length) return null;
    return reverse;
};

// CLASS 09
null;

// CLASS 10
null;

// CLASS 11
null;

// CLASS 12
const swap = (num1, num2) => {
    num1 = (num2 += num1 -= num2) - num1;
    return [num1, num2];
};

// CLASS 13
const pascalsTriangle = n => {
    const tri = [[1], [1, 1]];
    if (!n) return [];
    if (n === 1) return tri[0];
    for (let i = 2; i < n; i++) {
        const row = [];
        for (let j = 1; j < i; j++) row.push(tri[i - 1][j - 1] + tri[i - 1][j]);
        tri.push([1, ...row, 1]);
    }
    return tri;
};

// CLASS 14
null;

// CLASS 15
const fibonacci = n => {
    const term = m => m < 2 ? m : term(m - 1) + term(m - 2);
    const seq = [];
    for (let i = 0; i < n; i++) seq.push(term(i));
    return seq;
};

// CLASS 16
const mostCommon = arr => {
    const count = {};
    let most = 0, str;
    for (const e of arr) count[e] ? count[e] += 1 : count[e] = 1;
    for (const e in count) if (count[e] > most) { most = count[e]; str = e; }
    return str;
};

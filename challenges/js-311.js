// CLASS 01
null;

// CLASS 02
const sumOneForOne = (arr1, arr2) => {
    const arrSum = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        arrSum[i] = (arr1[i] ||= 0) + (arr2[i] ||= 0);
    }
    return arrSum;
};

// CLASS 03
const globalPolicy = arr => {
    if (!arr.length) return true;
    for (const e of arr) if (e.policy !== '--:--' && e.policy !== arr[0].policy) return false;
    return true;
};

// CLASS 04
const getNArray = (arr, n) => {
    if (!arr.length) return [];
    if (typeof n === 'undefined') return arr[0];
    if (n <= 0) return [];
    return arr.slice(0, n);
};

// CLASS 05
const cloneArray = arr => arr.map(e => Array.isArray(e) ? cloneArray(e) : e);

// CLASS 06
const binarySearch = (arr, num = -1) => {
    let L = 0;
    let H = arr.length - 1;
    let M = parseInt((L + H) / 2, 10);
    while (L <= H) {
        if (arr[M] === num) return M;
        if (arr[M] < num) L = M + 1;
        if (arr[M] > num) H = M - 1;
        M = parseInt((L + H) / 2, 10);
    }
    return -1;
};

// CLASS 07
const deDup = arr => {
    let current = arr[0];
    let removed = 0;
    for (let i = 1; i < arr.length; i++) {
        if (current === arr[i]) {
            arr[i] = null;
            removed++;
        } else current = arr[i];
    }
    arr.sort();
    arr.splice(arr.length - removed);
    return arr.length;
};

// CLASS 08
null;

// CLASS 09
const twoDigits = input => {
    if (typeof input !== 'number') return;
    const str = String(input);
    const index = str.indexOf('.');
    return index === -1 ? `${input}.00` : str.length - index === 2
        ? `${input}0` : str.slice(0, index + 3);
};

// CLASS 10
null;

// CLASS 11
const firstNoRepeat = str => {
    const map = new Map();
    for (const letter of str) {
        map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1);
    }
    for (const e of map.entries()) if (e[1] === 1) return str.indexOf(e[0]);
    return -1;
};

// CLASS 12
const findBestSellAndBuy = arr => {
    if (arr.length < 2) return {};
    const buy = [];
    const sell = [];
    const profits = [];
    for (let i = 0; i < arr.length - 1; i++) {
        const buyPrice = arr[i];
        const sellPrice = Math.max.apply(null, arr.slice(i + 1));
        buy.push(buyPrice);
        sell.push(sellPrice);
        profits.push(sellPrice - buyPrice);
    }
    const index = profits.indexOf(Math.max.apply(null, profits));
    return {
        maxProfit: profits[index],
        buyIndex: index,
        buyPrice: buy[index],
        sellIndex: arr.indexOf(sell[index]),
        sellPrice: sell[index],
    };
};

// CLASS 13
const permutations = str => {
    function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }
    function generate() {
        for (let i = 0; i < letters.length ** 4; i++) {
            const shuffle = [...base].sort(() => Math.random() - 0.5).join('');
            set.add(shuffle);
        }
    }
    const letters = [...new Set(str.split('').sort().join(''))];
    const base = [];
    const map = {};
    const set = new Set();
    const output = new Set();
    if (letters.length > 8) return 'TOO MANY LETTERS';
    for (let i = 0; i < letters.length; i++) {
        base.push(i);
        map[i] = letters[i];
    }
    while (set.size !== factorial(letters.length)) generate();
    for (const e of [...set].sort()) {
        let perm = '';
        for (const n of e) perm += map[parseInt(n, 10)];
        output.add(perm);
    }
    return output;
};

// CLASS 14
const descendingPairs = arr => {
    const nums = arr.sort((a, b) => b - a);
    const map = new Map();
    while (nums.length > 1) {
        for (let i = 1; i < nums.length; i++) map.set(`${nums[0]},${nums[i]}`, nums[0] + nums[i]);
        nums.shift();
    }
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    for (const e of sorted) {
        const pos = e[0].indexOf(',');
        e[1] = parseInt(e[0].slice(pos + 1), 10);
        e[0] = parseInt(e[0].slice(0, pos), 10);
    }
    return sorted;
};

// CLASS 15
const convertZigZag = (str, rows) => {
    if (!rows || rows < 2) return str;
    let map = {};
    let counter = 0;
    let row = 1;
    let direction = true;
    let output = '';
    for (let i = 1; i <= rows; i++) map[i] = '';
    while (counter < str.length) {
        map[row] += str[counter];
        counter++;
        if (!(row % rows)) direction = false;
        if (row === 1) direction = true;
        if (direction) row++;
        else row--;
    }
    if (rows === 2) {
        map = { 1: '', 2: '' };
        counter = 0;
        for (const e of '1122'.repeat(rows + 1).slice(1, str.length + 1)) {
            map[e] += str[counter];
            counter++;
        }
    }
    for (const e in map) output += map[e];
    return output;
};

// CLASS 16
const unique = arr => {
    for (const e of arr) if (arr.indexOf(e) === arr.lastIndexOf(e)) return e;
};

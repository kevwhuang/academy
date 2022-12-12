module.exports = { inverseDiagonal: inverseDiagonal };

function inverseDiagonal(input) {
    const LEN = input.length;
    let clone = [];
    let line = [];
    let solution = [];

    for (let i = 0; i < LEN; i++) {
        clone.push([...input[i]]);
    }

    for (let j = 0; j < LEN; j++) {
        for (let i = 0; i < input.length; i++) {
            line.push(input[i][i]);
            input[i].splice(i, 1);
        }
        solution.push(line);
        line = [];
        input.pop();
    }

    for (let j = 0; j < LEN; j++) {
        for (let i = 0; i < clone.length; i++) {
            line.push(clone[i][i]);
            clone[i].splice(i, 1);
        }
        solution.unshift(line);
        line = [];
        clone.shift();
    }

    solution.splice(LEN, 1);
    return solution;
}

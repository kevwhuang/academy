function inverseDiagonal(input) {
    const clone = [], len = input.length, solution = [];
    let line = [];

    for (let i = 0; i < len; i++) {
        clone.push([...input[i]]);
    }

    for (let j = 0; j < len; j++) {
        for (let i = 0; i < input.length; i++) {
            line.push(input[i][i]);
            input[i].splice(i, 1);
        }

        solution.push(line);
        line = [];
        input.pop();
    }

    for (let j = 0; j < len; j++) {
        for (let i = 0; i < clone.length; i++) {
            line.push(clone[i][i]);
            clone[i].splice(i, 1);
        }

        solution.unshift(line);
        line = [];
        clone.shift();
    }

    solution.splice(len, 1);
    return solution;
}

module.exports = inverseDiagonal;

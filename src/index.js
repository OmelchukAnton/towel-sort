module.exports = function towelSort (matrix) {
    let arr = [];

    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let row = i % 2 === 0 ? j : matrix[i].length - 1 - j;
                arr.push(matrix[i][row]);
            }
        }
    }

    return arr;
}

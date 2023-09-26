class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    get rows() {

        return this.matrix.split('\n').map(row => row.split(' ').map(Number));

        
    }

    get columns()  {
        // Transpose the matrix to get columns
        const rows = this.rows;
        return rows[0].map((_, i) => rows.map(row => row[i]));
    }
}

const matrixStr = "1 2 3\n4 5 6\n7 8 9";
const matrix = new Matrix(matrixStr);

console.log("Matrix:");
console.log(matrix.rows);

console.log("\nColumns:");
console.log(matrix.columns);
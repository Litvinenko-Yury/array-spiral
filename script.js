'use strict';

function createArr(rows, columns) {
    const tempArr = []; //создал пустой массив

    /*вставить в массив внутренние массивы*/
    for (let i = 0; i < rows; i++) {
        tempArr.push(new Array(columns)); //записываем пустые внутренние массивы нужной длины
    }

    /* начальные счетчики строк и столбцов*/
    let rowMin = 0,
        rowMax = rows - 1,
        colMin = 0,
        colMax = columns - 1;

    let num = 1001; // содержимое в ячейке, для наглядности


    for (let n = 0; n <= 5; n++) {
        /*1. проход top-горизональ, слева-направо*/
        for (let i = colMin; i <= colMax; i++) {
            tempArr[rowMin][i] = num; // заполняем top-горизональ
            num++;
        }
        if (rowMin == rowMax) { break; } //выход из цикла, т.к. это был последний горизонтальный проход


        /*2. проход right-вертикаль, сверху-вниз*/
        for (let i = (rowMin + 1); i <= rowMax; i++) {
            tempArr[i][colMax] = num; // заполняем right-вертикаль
            num++;
        }

        if (colMin == colMax) { break; } //выход из цикла, т.к. это был последний вертикальный проход

        /*3. проход bottom-горизонт, справо-налево*/
        for (var i = (colMax - 1); i >= colMin; i--) {
            tempArr[rowMax][i] = num; // заполняем bottom-горизонт
            num++;
        }

        /*4. проход left-вертикаль, снизу-вверх*/
        for (let i = (rowMax - 1); i >= (rowMin + 1); i--) {
            tempArr[i][colMin] = num; // заполняем left-вертикаль
            num++;
        }

        /*5. изменить счетчики строк и столбцов*/
        rowMin++,
            rowMax--,
            colMin++,
            colMax--;
    }

    return tempArr;
}

const arr2D = createArr(10, 5);
console.log(arr2D);
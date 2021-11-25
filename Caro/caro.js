let isPlayer_1 = true;
const winNumer = 3;
let matrix = [];
let isCompleted = false;
function buildData(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(size).fill(0);
    }
    return matrix;
}

function drawCaroTable(matrix) {
    let size = matrix.length;
    let tbCaro = "<table>";
    for (let i = 0; i < size; i++) {
        tbCaro += "<tr>";
        for (let j = 0; j < size; j++) {
            tbCaro += `<td class = '${matrix[i][j] == 0 ? '' :
                (matrix[i][j] == 1 ? 'isX' : 'isO')}'
                    onclick='play(${i}, ${j})'>
                    ${matrix[i][j] == 0 ? '&nbsp;&nbsp;' :
                    (matrix[i][j] == 1 ? 'X' : 'O')}</td>`;
        }
        tbCaro += "</tr>";
    }
    tbCaro += "</table>";
    document.getElementById("caro-area").innerHTML = tbCaro;
}

function play(i, j) {
    if(!isCompleted){
        if (matrix[i][j] != 0) {
            alert('invalid position!');
        }
        else {
            if (isPlayer_1) {
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j] = 10;
            }
            drawCaroTable(matrix);
            for (let director = 1; director <= 4; director++) {
                let data = check(i, j, director);
                if (isWin(data, isPlayer_1)) {
                    isCompleted = true;
                    alert(`${isPlayer_1 ? 'Player 1' : 'Player 2'} is win`);
                }
            }
            isPlayer_1 = !isPlayer_1;
        }
    }
    else{
        alert('game is over!')
    }
}

function check(i, j, director) {
    let data = [];
    let value = winNumer - 1;
    switch (director) {
        //ngang
        case 1: {
            data = [];
            for (let k = j - value; k <= j + value; k++) {
                data.push(matrix[i][k]);
            }
            return data;
        }
        //doc
        case 2: {
            data = [];
            for (let k = i - value; k <= i + value; k++) {
                data.push(matrix[k][j]);
            }
            return data;
        }
        //cheo chinh
        case 3: {
            data = [];
            for (let k = i - value, l = j - value; k <= i + value; k++, l++) {
                data.push(matrix[k][l]);
            }
            return data;
        }
        //cheo phu
        case 4: {
            data = [];
            for (let k = i - value, l = j + value; k <= i + value; k++, l--) {
                data.push(matrix[k][l]);
            }
            return data;
        }
    }
}

function isWin(data, player) {
    let checkValue = player ? 3 : 30;
    let total = 0;
    for (let l = 0; l < data.length - (winNumer - 1); l++) {
        total = 0;
        for(let k = l; k < winNumer; k++){
            total += data[k];
        }
        if (total == checkValue)
            return true;
    }
    return false;
}

function start() {
    const size = 10;
    matrix = buildData(size);
    drawCaroTable(matrix);
}

start();
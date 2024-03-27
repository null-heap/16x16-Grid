const divArray = [];
const rows = 16;
const columns = 17;
let mainDiv = document.querySelector('#main');

for(let i = 0;i < rows; i++){
    let temp = document.createElement('div');
    temp.classList.toggle("firstRow");
    divArray[i] = [];
    divArray[i][0] = temp;
    mainDiv.appendChild(divArray[i][0]);

    for(let j = 1;j< columns; j++){
        divArray[i][j] = document.createElement('div');
        divArray[i][0].appendChild(divArray[i][j]);
    }
}

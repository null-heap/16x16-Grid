let rows = 16;
let columns = 16;
let mainDiv = document.querySelector('#main');
let sizePrompt = document.querySelector('#sizePrompt');

let divArray = createGrid(rows, columns);
// removeGrid(divArray);

sizePrompt.addEventListener('click', () =>{
    rows = Number(prompt("Enter grid size under 100"));
    columns = rows + 1;
    if(rows <= 100){

    
    removeGrid(divArray);
    divArray = createGrid(rows, columns);
    }else{
        alert("choose a number under 100");
    }
})






//hovering effect
let count = 0;
const hoverArray = [];
mainDiv.addEventListener('mouseover',(e) =>{
    if( e.target !== mainDiv && e.target.className !== "firstRow") {
    let target = e.target;
    target.style.cssText = `background-color: yellow`;
    

    //makes snake like affect 
    hoverArray.push(target);
    if(count == 16){
        let temp = hoverArray.shift();
        temp.style.cssText = 'background-color: transparent';
        count--;
    }
    count ++;

    }


})


function createGrid(rows, columns){
    let mainDiv = document.querySelector('#main');

    const divArray = [];
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
    return divArray;
}

function removeGrid(array){
    let mainDiv = document.querySelector('#main');
    let rows = array.length;
    for(let i = 0;i < rows; i++){
        mainDiv.removeChild(array[i][0]);
    }
    
}
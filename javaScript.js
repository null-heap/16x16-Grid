let rows = 16;
let mainDiv = document.querySelector('#main');
let sizePrompt = document.querySelector('#sizePrompt');

createGrid(rows); //used to keep track of the current grid

sizePrompt.addEventListener('click', () =>{
    rows = Number(prompt("Enter grid size under 100"));
    if(rows <= 100 && rows != 0){
    removeGrid();
    createGrid(rows);
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
    
    
    //choose random colors for random hover backgrounds
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    target.style.cssText = `background-color:rgb(${red},${green},${blue})`

    //makes snake like affect 
    hoverArray.push(target);
    if(count == 16){// after how many blocks should first block be transparent
        let temp = hoverArray.shift();
        temp.style.cssText = 'background-color: transparent';
        count--;
    }
    count ++;
    }
})

function createGrid(rows){
    let columns = rows + 1;
    let mainDiv = document.querySelector('#main');

    for(let i = 0;i < rows; i++){
        let temp = document.createElement('div');
        temp.classList.toggle("firstRow");
        mainDiv.appendChild(temp);
    
        for(let j = 1;j< columns; j++){
            let innerDiv = document.createElement('div');
            temp.appendChild(innerDiv);
        }
    }
}

function removeGrid(){
    let mainDiv = document.querySelector('#main');
    mainDiv.textContent = " ";
}
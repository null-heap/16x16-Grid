const divArray = [];
const rows = 68;
const columns = 68;
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

let count = 0;
const hoverArray = [];

//hovering effect
mainDiv.addEventListener('mouseover',(e) =>{
    let delayInMIlliseconds = 2000;
     
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
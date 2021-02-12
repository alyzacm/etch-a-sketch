const resetButton = document.querySelector('#resetButton');
const colorBtns = document.querySelectorAll('.colorBtns');

let color = 'black';

function createGrid(x = 16){
    
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";
    document.documentElement.style.setProperty("--columns-row", x);
            
    for(let i = 0; i < (x*x); i++){
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
        cell.counter = 0;
        cell.addEventListener("mouseenter", colorGrid);
    }       
};

function resetGrid(){
    var size = prompt("How many squares per side for new grid?");
    if(size > 100){
        createGrid(100);
    }
    else if(size == ""){
        createGrid();
    }
    else{
        createGrid(size);
    }
}

function colorGrid(e){
    let cell = e.target;
    if(color === 'black'){
        cell.style.background = 'black';
        cell.style.opacity = 1;
    }
    else if(color === 'pastel'){
        let pastels = ["#E0BBE4", "#957DAD", "#D291BC", "FEC8D8", "FFDFD3"];
        cell.style.background = pastels[Math.floor(Math.random() * pastels.length)];
        cell.style.opacity = 1;
    }
    else if(color === 'shader'){
        cell.style.background = 'black';
        cell.counter++;
        cell.style.opacity = 0.1 * e.target.counter;
    }
    else if(color === 'eraser'){
        cell.style.background = 'white';
    }
}

function changeColor(e){
    color = e.target.id;
}


createGrid();

resetButton.addEventListener('click', resetGrid);
colorBtns.forEach((button) => button.addEventListener('click', changeColor));
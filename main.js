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
    if(color === 'black'){
        e.target.style.background = 'black';
        e.target.style.opacity = 1;
    }
    else if(color === 'grayscale'){
        e.target.style.background = 'black';
        let opacity = e.target.style.opacity;
        if(Number(opacity) < 1){
            e.target.style.opacity = (Number(opacity) + 0.1)
        } 
      
    }
    else if(color === 'pastel'){
        let pastels = ["#E0BBE4", "#957DAD", "#D291BC", "FEC8D8", "FFDFD3"];
        e.target.style.background = pastels[Math.floor(Math.random() * pastels.length)];
    }
}

function changeColor(e){
    color = e.target.id;
}


createGrid();

resetButton.addEventListener('click', resetGrid);
colorBtns.forEach((button) => button.addEventListener('click', changeColor));
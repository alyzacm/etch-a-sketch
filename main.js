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


/* Prompt user for the size of new grid, max size is 100 and default size is 16
 *   if no value is entered
*/
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


/* pastel: chooses a random color from pastel color palette
 * shader: adds 10% of black with every pass so that square is completely black 
 *    after 10 passes
*/
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

/* Update color variable
 * Remove previously selected button from active class
 * Add currently selected button to active class
*/
function changeSelection(e){
    var cur = document.getElementsByClassName("active");
    cur[0].className = cur[0].className.replace("active", "");
    this.className += " active";
    color = e.target.id;
}


createGrid();

resetButton.addEventListener('click', resetGrid);
colorBtns.forEach((button) => button.addEventListener('click', changeSelection));
function createGrid(x){
    
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = '';
    document.documentElement.style.setProperty("--columns-row", x);
            
    for(let i = 0; i < (x*x); i++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseenter", function() {
            cell.classList.add("hover");
        });
    };
};

function resetGrid(){
    var size = prompt("How many squares per side for new grid?");
    size > 100 ? createGrid(100) : createGrid(size);
}

createGrid(16);
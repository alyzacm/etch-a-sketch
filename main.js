function createGrid(x){
    
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = '';
    document.documentElement.style.setProperty("--columns-row", x);
    
            
    for(let i = 0; i < (x*x); i++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "black";
        });
    };
};

createGrid(30);
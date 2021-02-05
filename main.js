

function createGrid(x){
    
    const container = document.getElementById("grid");
    container.innerHTML = '';
    // document.documentElement.style.setProperty("--grid-rows", x);
    // document.documentElement.style.setProperty("--grid-cols", x);
    document.documentElement.style.setProperty("--columns-row", x);
    
            
    for(let i = 0; i < (x*x); i++){
        let cell = document.createElement('div');
        // cell.innerText = (i + 1);
        // container.appendChild(cell).className = "grid-item";
        document.getElementById("grid").appendChild(cell);
        cell.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "black";
        });
    };
};

createGrid(16);
const container = document.getElementById("container");
const cell = document.createElement('div');



function grid() {



    for(let i = 1; i <= 256; i++){
        const cell = document.createElement('div');
cell.innerHTML = ""
cell.style.border = "solid";
cell.style.backgroundColor = "white";
cell.id ="cell";
container.appendChild(cell); 
    }
};

grid()

container.addEventListener('mousemove', changeColor);
function changeColor(e) {
    let target = e.target || e.srcElement;
    target.style.backgroundColor = "black";
    return false;
}




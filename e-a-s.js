const container = document.getElementById("container");
const cell = document.createElement('div');
const big_button = document.getElementById('big');
const med_button = document.getElementById('med');
const small_button = document.getElementById('small');
const rgb_button = document.getElementById('rgb');
const normal_button = document.getElementById('normal');
const clear_button = document.getElementById('clear');
//container.innerHTML = "hello"


big_button.addEventListener('click', function () {
    container.innerHTML = "";
    grid(64);
});

med_button.addEventListener('click', function () {
    container.innerHTML = "";
    grid(32);
});

small_button.addEventListener('click', function () {
    container.innerHTML = "";
    grid(16);
});


function first() {
    let gridSize = (16 * 16);
        let containerSize = 500
        let cellPixel = Math.sqrt(((containerSize * containerSize)/ gridSize)) - 2
    for(let i = 1; i <= gridSize; i++){
        const cell = document.createElement('div');
        cell.style.border = "solid";
        cell.style.borderWidth = "1px";
        cell.style.backgroundColor = "white";
        cell.id ="cell";
        cell.style.width = `${cellPixel}px`;
        cell.style.height = `${cellPixel}px`;
        container.appendChild(cell); 
}
};



function grid(size) {
    if(size === undefined){
        first();
    } else {
        let hw = size;
        let gridSize = (hw * hw);
        let containerSize = 500
        let cellPixel = Math.sqrt(((containerSize * containerSize)/ gridSize)) - 2;
    for(let i = 1; i <= gridSize; i++){
        const container = document.getElementById("container");
        const cell = document.createElement('div');
        cell.style.border = "solid";
        cell.style.borderWidth = "1px";
        cell.style.backgroundColor = "white";
        cell.id ="cell";
        cell.style.width = `${cellPixel}px`;
        cell.style.height = `${cellPixel}px`;
        container.appendChild(cell); 
    }
    
}
}

grid();


container.addEventListener('mousemove', changeColor);
function changeColor(e) {
    let target = e.target || e.srcElement;
    target.style.backgroundColor = "darkslategrey";
    return false;
}

normal_button.addEventListener('click', function () {
    container.addEventListener('mousemove', changeColor);
function changeColor(e) {
    let target = e.target || e.srcElement;
    target.style.backgroundColor = "darkslategrey";
    return false;
}})

rgb_button.addEventListener('click', function () {
    container.addEventListener('mousemove', randomColor);
function randomColor(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    let target = e.target || e.srcElement;
    target.style.backgroundColor = rgb;
    return false;
}})




console.log(randomColor());




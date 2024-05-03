let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTUN"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now you can draw";
            }
            else{
                draw.innerHTML = "You are not allowed to draw"
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
    console.log("hi");
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.computedStyleMap.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.computedStyleMap.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provice a number between 1 and 100"
    }
    else{
        message.innerHTML = "Now you play!"
        return input;
    }
}

function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}
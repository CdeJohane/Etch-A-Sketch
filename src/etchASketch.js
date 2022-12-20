//Get Div of bigger Square
let bigSquare = document.getElementById("squares");

//Find size Button and when pressed, prompt for size
const sizeBtn = document.getElementById("size");
sizeBtn.addEventListener("click",function(e){
    maxSquares = prompt("Enter Number Of Sides Of Square");
    makeSquares();
});

//constants for size and width of all squares
const bigSide=350;
let maxSquares = 16;
makeSquares()
function makeSquares(){
    bigSquare.innerHTML="";
    let smallSide = Math.floor(bigSide/maxSquares);
    //Loop OFr Setting Up the squares
    for(let x=1; x<=maxSquares;x++){
        //Create Divs for a row of maxSquares
        let rowSquares = document.createElement("div");
        for(let x=1; x<=maxSquares;x++){
            //Create Div for each small Square
            let smallSquare = document.createElement("div");
            smallSquare.style.height=`${smallSide}px`;
            smallSquare.style.width=`${smallSide}px`;
            smallSquare.style.backgroundColor="#FFFFFF";
            smallSquare.addEventListener("mouseover", function(e){
            smallSquare.style.backgroundColor="#F2F300"
        });
        //Append smallSquare to the row
        rowSquares.appendChild(smallSquare);
    }
    //Append Row to big square
    bigSquare.appendChild(rowSquares); 
}
}

 

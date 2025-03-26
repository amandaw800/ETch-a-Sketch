const body = document.querySelector("body");
// Create a container element that's a div that will contain all the other divs
const container = document.createElement("div"); 
const squareContainer = document.createElement("div");
const changeButton = document.querySelector(".change");

//Create a div that is a square
const square = document.createElement("div");


container.style.width = "2059px";



squareContainer.style.display = "flex";
squareContainer.style.flexWrap = "wrap";

changeButton.addEventListener("click", ()=>
{
    let grid = parseInt(prompt("How many squares per side should there be?"))

    removeSquares();
    
    container.style.width = (grid * 125 + 59) + 'px';

    makeSquares(grid);
    setTimeout(hover, 0);

    hover();


    //makeSquares(grid); // array of all the squares

}
);


function hover()
{
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) =>
    {
    
    square.addEventListener("mouseover", ()=>
    {
        
        square.style.backgroundColor = "red";
    });
});

}


//Creates squares and stores them into an array
function makeSquares(n)
{
    let arr = []

    for(let i = 0; i < n*n; i++)
    {
        const square = document.createElement("div");
        square.style.borderStyle = "solid";
        square.style.width = "125px";
        square.style.height = "125px";
        square.classList.add("square");

        arr.push(square);


        squareContainer.appendChild(square);

    }

    return arr;

}

function removeSquares(){
    const item = document.getElementById("squareContainer");
    squareContainer.innerHTML = '';
    

}




makeSquares(16);
setTimeout(hover, 0);

hover();


container.appendChild(squareContainer)
body.append(container);

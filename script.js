const body = document.querySelector("body");
// Create a container element that's a div that will contain all the other divs
const container = document.createElement("div"); 
const squareContainer = document.createElement("div");

//Create a div that is a square
const square = document.createElement("div");

container.style.borderStyle = "solid";
container.style.borderColor = "red";
container.style.width = "2059px";

squareContainer.style.borderStyle = "solid";
squareContainer.style.borderColor = "orange"




squareContainer.style.display = "flex";
squareContainer.style.flexWrap = "wrap";





//Creates squares and stores them into an array
function makeSquares()
{
    let arr = []

    for(let i = 0; i < 16*16; i++)
    {
        const square = document.createElement("div");
        square.style.borderStyle = "solid";
        square.style.width = "125px";
        square.style.height = "125px";

        arr.push(square);


        squareContainer.appendChild(square);

    }
    return arr;

}


//Call functions
makeSquares();



container.appendChild(squareContainer)
body.append(container);

const boxes = document.querySelectorAll('.parent div');
const boxesArray = [1,2,3,4,5,6,7,8,9];
let playerMoves = '';
let computerMoves = '';


// ******* player move ******* //
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',(e)=> {

        const index = boxesArray.indexOf(parseInt(e.target.dataset.name));

        e.target.style.backgroundColor = 'red';
        boxesArray.splice(index,1);
        playerMoves += (e.target.dataset.name);
        console.log(playerMoves)


        // computer move invoked
        setTimeout(()=> {
            computerPlay();
        },1000)

    })
}

// ******* computer move ******* //
function computerPlay() {
        
    const randomPick = Math.floor(Math.random()*10)%boxesArray.length;
    const indexValue = boxesArray[randomPick];

    boxes[(indexValue-1)].style.backgroundColor = 'green';
    boxesArray.splice((randomPick),1);
    computerMoves += indexValue;
    console.log(computerMoves)

        
}



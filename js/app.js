const boxes = document.querySelectorAll('.parent div');
const boxesArray = [1,2,3,4,5,6,7,8,9];
let playerMoves = '';
// let playerSelectedBox = '';



// ******* player move ******* //
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',(e)=> {

        const index = boxesArray.indexOf(parseInt(e.target.dataset.name));

        e.target.style.backgroundColor = 'red';
        boxesArray.splice(index,1);
        playerMoves += (e.target.dataset.name);
        console.log(playerMoves+'player moves')

        if(playerMoves.length == 3){
          playerMovesThree(e); 
        }else if(playerMoves.length == 4) {
          playerMovesFour(e);
        }else if (playerMoves.length == 5){
          console.log('draw');
        }

        // computer move invoked
        setTimeout(()=> {
            computerPlay();
        },1000)

    })
}

// ******* computer move ******* //

let computerMoves = '';
function computerPlay() {
        
    const randomPick = Math.floor(Math.random()*10)%boxesArray.length;
    const indexValue = boxesArray[randomPick];

    boxes[(indexValue-1)].style.backgroundColor = 'green';
    boxesArray.splice((randomPick),1);
    computerMoves += indexValue;
    console.log(computerMoves+'compter moves')      
}


let moves = ['123','456','789','147','258','369','159','357'];
// let res = '';

function playerMovesThree(e) {
  
    for(let i=0; i<moves.length; i++) {
      console.log(moves.length-i)
      let res = '';
      for(let j=0; j<playerMoves.length; j++) {
       console.log(j+'inner moves')

        if(playerMoves.includes(moves[i][j])) {
          res += moves[i][j];
        } 
      }
      console.log(res+'rsuljbhmj')
      if(res.length ==3){
        console.log('winner');
        break;
      }
      res = '';
      
    }

  
}
function playerMovesFour(e) {

    for(let i=0; i<moves.length; i++) {
      console.log(moves.length-i)
      let res = '';
      for(let j=0; j<playerMoves.length; j++) {
       console.log(j+'inner moves')

        if(playerMoves.includes(moves[i][j])) {
          res += moves[i][j];
        } 
      }
      console.log(res+'rsuljbhmj')
      if(res.length ==3){
        console.log('winner');
        break;
      }
      res = '';
      
    }

  
}


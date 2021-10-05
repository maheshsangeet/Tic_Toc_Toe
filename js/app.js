const boxes = document.querySelectorAll('.parent div');
const boxesArray = [1,2,3,4,5,6,7,8,9];
const moves = ['123','456','789','147','258','369','159','357'];
let playerSelected = '';


// ******* player moves ******* //
function playerMoves () {

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',(e)=> {

      const index = boxesArray.indexOf(parseInt(e.target.dataset.name));

      e.target.style.backgroundColor = 'red';
      boxesArray.splice(index,1);
      playerSelected += (e.target.dataset.name);
      // console.log(playerSelected+'player moves')


      if(playerSelected.length == 3 || playerSelected.length == 4 ){
        playerMovesCheck(e); 
      }else if (playerSelected.length == 5){
        console.log('draw');
      }


      // computer moves invoked
      setTimeout(()=> {
        computerMoves();

        if(computerSelected.length == 3 || computerSelected.length == 4 ){
          computerMovesCheck(e); 
        }
          
      },1000)
      
    })
  }
}
playerMoves();


// ******* computer moves ******* //

let computerSelected = '';
function computerMoves() {
        
    const randomPick = Math.floor(Math.random()*10)%boxesArray.length;
    const indexValue = boxesArray[randomPick];

    boxes[(indexValue-1)].style.backgroundColor = 'green';
    boxesArray.splice((randomPick),1);
    computerSelected += indexValue;

    // console.log(computerSelected+'computer moves')      
}


// ******* checking box selected by player ****** //
function playerMovesCheck(e) {
  
  for(let i=0; i<moves.length; i++) {
    // console.log(moves.length-i)

    let check = '';
    for(let j=0; j<playerSelected.length; j++) {
    //  console.log(j+'inner moves')
      if(playerSelected.includes(moves[i][j])) {
        check += moves[i][j];
      } 
    }

    // console.log(check+'player  ')
    if(check.length ==3){
      console.log('winner');
    }else if(check.length ==4) {
      console.log('winner');
    }

  }

}

// ******* checking box selected by computer ****** //

function computerMovesCheck(e) {
  
  for(let i=0; i<moves.length; i++) {
    // console.log(moves.length-i)

    let check = '';
    for(let j=0; j<computerSelected.length; j++) {
    //  console.log(j+'computer inner moves')
      if(computerSelected.includes(moves[i][j])) {
        check += moves[i][j];
      } 
    }

    // console.log(check+'computer')
    if(check.length ==3){
      console.log('winner computer');
    }else if(check.length ==4) {
      console.log('winner computer');
    }
  }

}


const boxes = document.querySelectorAll('.game div');
const boxesArray = [1,2,3,4,5,6,7,8,9];
const moves = ['123','456','789','147','258','369','159','357'];
let playerSelected = '';
let win = '';
let red = 'rgb(78, 239, 245)';
const playerName = document.querySelector('.playerName');


// *****   start game ***** //
function startGame() {
    const playBtn = document.querySelector('.introduction button');
    const introScreen = document.querySelector('.introduction');
    const gameScreen = document.querySelector('.game');


    playBtn.addEventListener('click',()=> {
        introScreen.classList.add('fadeOut');
        gameScreen.classList.remove('fadeOut');


        playerMoves();

    })

}

startGame();

// ******* player moves ******* //
function playerMoves() {

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click',(e)=> {

        const index = boxesArray.indexOf(parseInt(e.target.dataset.name));
  
        // e.target.style.backgroundColor = `${red}`;
        e.target.innerText = 'X';

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
  
  
  // ******* computer moves ******* //
  
  let computerSelected = '';
  function computerMoves() {
          
      const randomPick = Math.floor(Math.random()*10)%boxesArray.length;
      const indexValue = boxesArray[randomPick];
  
      // boxes[(indexValue-1)].style.backgroundColor = 'green';
      boxes[(indexValue-1)].innerText = 'O';
      boxesArray.splice((randomPick),1);
      computerSelected += indexValue;
  
      // console.log(computerSelected+'computer moves')      
  }
  
  
  // ******* checking box selected by player ****** //
  function playerMovesCheck(e) {
    
    for(let i=0; i<moves.length; i++) {
  
      let check = '';
      for(let j=0; j<playerSelected.length; j++) {
        if(playerSelected.includes(moves[i][j])) {
          check += moves[i][j];
        } 
      }
  
      if(check.length ==3){
        win = `${playerName.value} won`;
  
        congratulations();
  
      }else if(check.length ==4) {
        win = `${playerName.value} won`;
  
        congratulations();
  
      }
  
    }
  
  }
  
  // ******* checking box selected by computer ****** //
  function computerMovesCheck(e) {
    
    for(let i=0; i<moves.length; i++) {
  
      let check = '';
      for(let j=0; j<computerSelected.length; j++) {
  
        if(computerSelected.includes(moves[i][j])) {
          check += moves[i][j];
        } 
      }
  
  
      if(check.length ==3){
        win = 'computer won';
        console.log('winner computer');
        congratulations();
      }else if(check.length ==4) {
        win = 'computer won';
        console.log('winner computer');
        congratulations();
      }
    }
  
  }


// ****** result popup ****** //

const modal = document.getElementById("popup1");
const msg = document.querySelector('#msg');


function congratulations() {
  modal.id="show";

  msg.innerHTML = win;

  closeModal();
  playAgain();

}

// ******* play again modal ****** //
function playAgain(){
  const playAgainBtn = document.querySelector("#play-again");

  playAgainBtn.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerText = '';
    }
    
    modal.id="";

  });
}



// ********* Close modal *********//

function closeModal(){
  const closeIcon = document.querySelector(".close");

  closeIcon.addEventListener("click", () => {
      window.location.reload();
  });
}
  
  
let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      updateScoreElement();

      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */
      let isAutoPlaying = false;
      let intervelId;

     function autoplay () {
      if(!isAutoPlaying){
        intervelId =  setInterval( () => {


          const playerMove = pickComputerMove();
          playGame(playerMove);
          
          }, 1000);
          isAutoPlaying = true;
      }
      else {
      clearInterval(intervelId);
      isAutoPlaying = false;

      }



 }

 document.querySelector('.js-rock-button').addEventListener('click', () =>{
    playGame('rock')
 });



    document.querySelector('.js-paper-button').addEventListener('click', () =>{
      playGame('paper')
  

 })
 
 document.querySelector('.js-scissor-button').addEventListener('click', () =>{
  playGame('scissor')


})

  document.body.addEventListener('keydown', (event) => {
    console.log(event.key);

    if(event.key === 'r') {
      playGame('rock')
} 
else if (event.key === 'p'){
  playGame('paper')
}
else if (event.key === 's') {
  playGame('scissor')
}
 } );



    

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

      
        updateScoreElement();
        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = 
        
        `you 
      <img class="move-icon" src="${playerMove}-emoji.png">
      <img class="move-icon" src="${computerMove}-emoji.png">
      Computer`


      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }

      let arr = ['nake dinner', 'wash dishes' , 'watch netflix'].forEach(function(value,index){
        console.log(value);
        console.log(index)
      })
  
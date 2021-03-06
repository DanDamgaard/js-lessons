let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * max) + min,
    guessesleft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload()
  }

});

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');

  }
  if(guess === winningNum){

    gameOver(true, `${winningNum} is correct!, You Win.`)
   
  } else {
    
    guessesleft -= 1;

    if(guessesleft === 0){
      gameOver(false, `Game Over, You lost. the correct number was ${winningNum}.`)
      

    } else {
      guessInput.style.borderColor = 'red';
      if(guess > winningNum){
        setMessage(`You guessed to high try again, You have ${guessesleft} left.`,'red')
      } else {
        setMessage(`You guessed to low try again, You have ${guessesleft} left.`,'red')

      }
    }
  }
})

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red'

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color
  setMessage(msg)
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;


}
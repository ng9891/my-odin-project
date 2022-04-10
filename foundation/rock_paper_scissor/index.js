(() => {
  const arrOfOptions = ['Rock', 'Paper', 'Scissors'];
  const MIN_SCORE_TO_WIN = 5;
  let rounds = 1;
  let playerScore = 0;
  let pcScore = 0;

  function getRandomInt(max = 1) {
    return Math.floor(Math.random() * max);
  }

  function getRandomPlay() {
    return getRandomInt(arrOfOptions.length);
  }

  function getWeightedPlay(weightAgainst) {
    const minWeight = Math.floor(100 / arrOfOptions.length);
    const maxWeight = 50;

    const range = maxWeight - minWeight;
    const ratio = playerScore / MIN_SCORE_TO_WIN;

    const amountToIncrease = Math.round(ratio * range);
    const weightForFavoredElement = minWeight + amountToIncrease;
    const randInt = getRandomInt(100);

    if (weightAgainst === 0 && (randInt < weightForFavoredElement)) {    
      return 1;
    }
    if (weightAgainst === 1 && (randInt < weightForFavoredElement)) {
      return 2;
    }
    if (randInt < weightForFavoredElement) {
      return 0;
    }
    
    const unFavoredElements = arrOfOptions.map((_,idx)=>idx).filter((el) => el !== weightAgainst);
    return unFavoredElements[getRandomInt(unFavoredElements.length)];
  }

  const equation = (x) => {
    return Math.pow(2, x);
  };

  // Computes if the pc gets to cheat
  const computerCheat = function willPcCheatThisround(playerScore = 1, minScoreToWin = MIN_SCORE_TO_WIN) {
    const chancePlayer = equation(playerScore);
    const chanceCap = equation(minScoreToWin);
    return getRandomInt(chanceCap) < chancePlayer;
  };

  function computerPlay(playerPlayed) {
    const willCheat = computerCheat();
    let played = willCheat ? getWeightedPlay(playerPlayed) : getRandomPlay();
    return played;
  }

  function changeImage(player = 1, played = 0) {
    let img;
    if (player === 1) {
      img = document.querySelector('.player-field');
    } else if (player === 2) {
      img = document.querySelector('.pc-field');
    }
    img.src = `./assets/${played}.png`;
  }

  function increaseRound() {
    const counter = document.querySelector('.round-number');
    counter.textContent = rounds;
    rounds += 1;
  }

  function calculateWinner(p1 = 0, p2 = 0) {
    let playerStatus = 0;
    if (p1 === p2) playerStatus = 0;
    else if (p1 === 0) {
      if (p2 === 1) playerStatus = 2;
      else playerStatus = 1;
    } else if (p1 === 1) {
      if (p2 === 2) playerStatus = 2;
      else playerStatus = 1;
    } else if (p1 === 2) {
      if (p2 === 0) playerStatus = 2;
      else playerStatus = 1;
    }

    return playerStatus;
  }

  function playRound(p1 = 0, p2 = 0) {
    if (isNaN(p1)) return;
    const player = Number(p1);
    let pc = Number(p2);

    let winner = calculateWinner(player, p2);

    increaseRound();
    changeImage(1, player);
    changeImage(2, pc);

    return winner;
  }

  function increasePlayerScore() {
    const counter = document.querySelector('.score-player');
    playerScore += 1;
    counter.textContent = playerScore;
  }

  function increasePcScore() {
    const counter = document.querySelector('.score-pc');
    pcScore += 1;
    counter.textContent = pcScore;
  }

  function endGame() {
    const playerBtn = document.querySelectorAll('.btn');
    window.removeEventListener('keydown', handleKeyPress);
    playerBtn.forEach((btn) => {
      btn.removeEventListener('click', handleClick);
      btn.style.cssText = 'pointer-events: none;';
    });
  }

  function checkGameStatus() {
    if (pcScore !== MIN_SCORE_TO_WIN && playerScore !== MIN_SCORE_TO_WIN) return;
    endGame();
    setTimeout(() => {
      if (playerScore === MIN_SCORE_TO_WIN) alert('Congratulations. You have won the game!');
      else alert('Sorry. You lost to the PC...');
    }, 500);
  }

  function announce(winner) {
    const announcer = document.querySelector('.announce');
    announcer.parentElement.classList.remove(...announcer.parentElement.classList);
    if (winner === 0) {
      announcer.textContent = "It's a Draw!";
    } else if (winner === 1) {
      increasePlayerScore();
      announcer.parentNode.classList.add('win');
      announcer.textContent = 'You Win!';
    } else if (winner === 2) {
      increasePcScore();
      announcer.parentNode.classList.add('lose');
      announcer.textContent = 'You Lose!';
    }
    checkGameStatus();
  }

  function handleClick(e) {
    const player = e.target.children[0].getAttribute('data-value');
    const pc = computerPlay(player);
    announce(playRound(player, pc));
  }

  function handleKeyPress(e) {
    const player = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!player) return;
    const played = player.children[0].getAttribute('data-value');
    const pc = computerPlay(played);
    announce(playRound(played, pc));
    player.classList.toggle('selected');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform' && e.type !== 'mouseout') return;
    e.target.classList.remove('selected');
  }

  function main() {
    const playerBtn = document.querySelectorAll('.btn');
    playerBtn.forEach((btn) => btn.addEventListener('click', handleClick));
    playerBtn.forEach((btn) => btn.addEventListener('transitionend', removeTransition));
    playerBtn.forEach((btn) => btn.addEventListener('mouseout', removeTransition));
    window.addEventListener('keydown', handleKeyPress);
  }

  main();
})();

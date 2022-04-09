(() => {
  const arrOfOptions = ['Rock', 'Paper', 'Scissors'];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomPlay() {
    return getRandomInt(arrOfOptions.length);
  }

  function computerPlay() {
    return getRandomPlay();
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

  function playRound(p1 = 0, p2 = 0) {
    if (isNaN(p1)) return;
    const player = Number(p1);
    let playerStatus = 0;

    changeImage(1, player);
    changeImage(2, p2);

    if (player === p2) playerStatus = 0;
    else if (player === 0) {
      if (p2 === 1) playerStatus = 2;
      else playerStatus = 1;
    } else if (player === 1) {
      if (p2 === 2) playerStatus = 2;
      else playerStatus = 1;
    } else if (player === 2) {
      if (p2 === 0) playerStatus = 2;
      else playerStatus = 1;
    }

    return playerStatus;
  }

  let rounds = 1;
  let playerScore = 0;
  let pcScore = 0;

  function increaseRound() {
    const counter = document.querySelector('.round-number');
    counter.textContent = rounds;
    rounds += 1;
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
    if (pcScore !== 5 && playerScore !== 5) return;
    endGame();
    setTimeout(() => {
      if (playerScore === 5) alert('Congratulations. You have won the game!');
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
    increaseRound();
    const player = e.target.children[0].getAttribute('data-value');
    const pc = computerPlay();
    announce(playRound(player, pc));
  }

  function handleKeyPress(e) {
    const player = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!player) return;
    const played = player.children[0].getAttribute('data-value');
    const pc = computerPlay();
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

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

  function getResult(winner, p1, p2) {
    if (winner === 0) return `It's a draw!`;
    if (winner === 1) return `You Won! ${arrOfOptions[p1]} beats ${arrOfOptions[p2]}`;
    return `You Lose! ${arrOfOptions[p2]} beats ${arrOfOptions[p1]}`;
  }

  function playRound(p1 = 0, p2 = 0) {
    // Scissor 2 > 1
    // Paper 1 > 0
    // Rock 0 > 2
    let playerStatus = 0;

    if (p1 === p2) {
      playerStatus = 0;
    } else if (p1 === 0) {
      if (p2 === 1) {
        // lose
        playerStatus = 2;
      } else {
        // win
        playerStatus = 1;
      }
    } else if (p1 === 1) {
      if (p2 === 2) {
        // lose
        playerStatus = 2;
      } else {
        // win
        playerStatus = 1;
      }
    } else if (p1 === 2) {
      if (p2 === 0) {
        // lose
        playerStatus = 2;
      } else {
        // win
        playerStatus = 1;
      }
    }

    return getResult(playerStatus, p1, p2);
  }

  // function game(rounds) {
  //   for (let i = 0; i < rounds; i++) {
  //     const input = prompt(`0 for Rock | 1 for Paper | 2 for Scissors`);
  //     if (!input) break;

  //     const intInput = Number(input);
  //     if (isNaN(input) || intInput > 2 || intInput < 0) {
  //       console.error('Invalid input. Try again.');
  //       i = i - 1;
  //       continue;
  //     }

  //     console.log(playRound(intInput, computerPlay()));
  //   }
  // }

  // game(5);
})();

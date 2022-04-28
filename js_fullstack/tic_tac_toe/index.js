(() => {
  const BOARD_SIZE = 3;
  const titTacToe = ((boardSize) => {
    let gameBoardArr = [...new Array(boardSize)].map(() => new Array(boardSize));
    let playCount = 0;
    let player1 = null;
    let player2 = null;
    let currentTurn = null;
    let ended = false;

    const getBoardSize = () => {
      return boardSize;
    };

    const resetBoard = () => {
      gameBoardArr = [...new Array(boardSize)].map(() => new Array(boardSize));
      ended = false;
      playCount = 0;
      currentTurn = player1;
    };

    const endBoard = () => {
      ended = true;
    };

    const isGameEnded = () => {
      return ended;
    };

    const setPlayer = (Player, num) => {
      if (num === 1) {
        if (player1) {
          console.error('Player 1 already set.');
          return false;
        }
        player1 = Player;
        return true;
      } else if (num === 2) {
        if (player2) {
          console.error('Player 2 already set.');
          return false;
        }
        player2 = Player;
        return true;
      }
      console.error('Invalid params');
      return false;
    };

    const getCurrentTurn = () => {
      if (!currentTurn) currentTurn = player1;
      return currentTurn;
    };

    const nextTurn = () => {
      if (!currentTurn) currentTurn = player1;
      currentTurn = currentTurn === player1 ? player2 : player1;
    };

    // https://stackoverflow.com/a/1058804
    const _checkWin = (player, x, y) => {
      let col = 0;
      let row = 0;
      let diag = 0;
      let rdiag = 0;
      const boardSize = getBoardSize();

      for (let i = 0; i < boardSize; i++) {
        if (gameBoardArr[x][i] === player) row += 1;
        if (gameBoardArr[i][y] === player) col += 1;
        if (gameBoardArr[i][i] === player) diag += 1;
        if (gameBoardArr[i][boardSize - i - 1] === player) rdiag += 1;
      }

      if (row === boardSize) return 'row';
      if (col === boardSize) return 'col';
      if (diag === boardSize) return 'diag';
      if (rdiag === boardSize) return 'rdiag';

      if (playCount === boardSize ** 2) return 'draw';
      return false;
    };

    const playPosition = (x, y) => {
      const currPlayer = getCurrentTurn();
      if (gameBoardArr[x][y]) return;
      gameBoardArr[x][y] = currPlayer;
      playCount += 1;

      console.log(gameBoardArr);

      // Check for winning condition;
      return _checkWin(currPlayer, x, y);
    };

    return {
      getBoardSize,
      setPlayer,
      nextTurn,
      getCurrentTurn,
      playPosition,
      resetBoard,
      endBoard,
      isGameEnded,
    };
  })(BOARD_SIZE);

  const Player = (name, icon) => {
    let playerIcon = icon;
    const getName = () => name;
    const setIcon = (icon) => (playerIcon = icon);
    const getIcon = () => playerIcon;

    return {getName, getIcon, setIcon};
  };

  const markWinner = (winLocation, x, y) => {
    const boardEl = document.querySelector('.grid');
    const boardSize = titTacToe.getBoardSize();
    const cells = boardEl.childNodes;
    console.log(cells);
    for (let i = 0; i < boardSize; i++) {
      if (winLocation === 'row') document.querySelector(`div[data-pos='${x},${i}']`).classList.add('win');
      else if (winLocation === 'col') document.querySelector(`div[data-pos='${i},${y}']`).classList.add('win');
      else if (winLocation === 'diag') document.querySelector(`div[data-pos='${i},${i}']`).classList.add('win');
      else if (winLocation === 'rdiag')
        document.querySelector(`div[data-pos='${i},${boardSize - i - 1}']`).classList.add('win');
    }
  };

  const handleClick = (e) => {
    const content = e.target.textContent;
    if (content) return;
    if (titTacToe.isGameEnded()) return alert('Game Ended');
    const currPlayer = titTacToe.getCurrentTurn();
    e.target.textContent = currPlayer.getIcon();

    let pos = e.target.getAttribute('data-pos');
    const [x, y] = pos.split(',');
    const location = titTacToe.playPosition(x, y);
    console.log(location);
    if (location) {
      titTacToe.endBoard();
      markWinner(location, x, y);
      if (location === 'draw') alert(`A draw!`);
      else alert(`${currPlayer.getName()} Won! on ${location} at pos ${[x, y]}`);
    }
    titTacToe.nextTurn();
  };

  const handleReset = () => {
    titTacToe.resetBoard();
    const grid = document.querySelector('.grid');
    Array.from(grid.children).forEach((el) => {
      el.textContent = '';
      el.classList.remove('win');
    });
  };

  const main = () => {
    const grid = document.querySelector('.container .board-container .grid');
    grid.addEventListener('click', handleClick);

    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', handleReset);

    const p1 = Player('David', 'X');
    const p2 = Player('Bot', 'O');

    titTacToe.setPlayer(p1, 1);
    titTacToe.setPlayer(p2, 2);
  };

  main();
})();

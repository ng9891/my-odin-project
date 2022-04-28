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

    const getPlayers = () => {
      return {p1: player1, p2: player2};
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
      return currentTurn;
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

      // Check for winning condition;
      return _checkWin(currPlayer, x, y);
    };

    return {
      getBoardSize,
      getPlayers,
      setPlayer,
      nextTurn,
      getCurrentTurn,
      playPosition,
      resetBoard,
      endBoard,
      isGameEnded,
    };
  })(BOARD_SIZE);

  const Player = (name, icon, bot = false) => {
    let playerIcon = icon;
    // let botPlayer = bot;
    const getName = () => name;
    const setIcon = (icon) => (playerIcon = icon);
    const getIcon = () => playerIcon;
    const setToBot = (isBot) => (bot = isBot);
    const isBot = () => bot;

    return {getName, getIcon, setIcon, setToBot, isBot};
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

  const announceResult = (player, loc) => {
    const container = document.querySelector('.container');
    const announce = document.querySelector('.announce');
    announce.classList.remove('hide');
    container.classList.add('blur');
    if (loc === 'draw') {
      return announce.lastElementChild.classList.remove('hide');
    }

    announce.firstElementChild.textContent = `${player.getName()} has Won!`;
    announce.firstElementChild.classList.remove('hide');
  };

  const handleBotPlay = () => {
    console.log('BOt Playing NOW!');
  };

  const changePlayerTurn = () => {
    const currPlayer = titTacToe.getCurrentTurn();
    const nextPlayer = titTacToe.nextTurn();

    if (nextPlayer.isBot()) handleBotPlay();
  };

  const playPosition = (x, y, el) => {
    if (titTacToe.isGameEnded()) return;
    const currPlayer = titTacToe.getCurrentTurn();
    el.textContent = currPlayer.getIcon();

    const location = titTacToe.playPosition(x, y);
    if (location) {
      titTacToe.endBoard();
      markWinner(location, x, y);
      announceResult(currPlayer, location);
    }

    changePlayerTurn();
  };

  const handlePlay = (e) => {
    const content = e.target.textContent;
    if (content) return;
    const pos = e.target.getAttribute('data-pos');
    const [x, y] = pos.split(',');
    playPosition(x, y, e.target);
  };

  const changePlayerType = (e) => {
    const playerToChange = e.target.parentNode.parentNode.className;
    const setToType = e.target.textContent;
    const {p1, p2} = titTacToe.getPlayers();

    let player = playerToChange === 'p1' ? p1 : p2;
    if (setToType === 'Bot') {
      player.setToBot(true);
      e.target.previousElementSibling.classList.remove('selected');
    } else {
      player.setToBot(false);
      e.target.nextElementSibling.classList.remove('selected');
    }
    e.target.classList.add('selected');
    handleReset();
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
    const announce = document.querySelector('.announce');
    announce.addEventListener('click', (e) => {
      const announcement = document.querySelector('.announce >div:not(.hide)');
      if (announcement) announcement.classList.add('hide');
      announce.classList.add('hide');
      const container = document.querySelector('.container');
      container.classList.remove('blur');
    });

    const grid = document.querySelector('.grid');
    grid.addEventListener('click', handlePlay);

    const playerBtns = document.querySelectorAll('.btn-container button');
    playerBtns.forEach((el) => el.addEventListener('click', changePlayerType));

    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', handleReset);

    const p1 = Player('Player 1', 'X');
    const p2 = Player('Player 2', 'O', true);

    titTacToe.setPlayer(p1, 1);
    titTacToe.setPlayer(p2, 2);
  };

  main();
})();

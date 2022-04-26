(() => {
  const board = null;
  const titTacToe = ((boardEl) => {
    const gameBoardArr = [...new Array(3)].map(() => new Array(3));
    const gameBoardEl = boardEl;
    let playCount = 0;

    const _checkWinningCondition = (Player) => {};

    const resetGame = ()=>{};

    const setToPosition = (Player, pos) => {
      gameBoardArr[pos.x][pos.y] = Player;
      console.log(gameBoardArr);
      playCount += 1;
      // Update visually the board.
      // gameBoardEl

      // Check for winning condition;
    };


    return {
      setToPosition,
      resetGame,
    };
  })(board);

  const Player = (name, icon) => {
    const getName = () => name;
    const getIcon = () => icon;

    return {getName, getIcon};
  };

  console.log(Player('test', 'icon').getIcon());

  titTacToe.setToPosition('Player1', {x: 2, y: 2});
  titTacToe.setToPosition('Player2', {x: 0, y: 1});
})();

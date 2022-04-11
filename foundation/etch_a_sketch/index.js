(() => {
  let matrixSize = 16;
  let drawing = false;

  const handleHover = (e) => {
    if(e.type ==='mouseenter' && !drawing) return;
    e.target.classList.add('selected');
  };

  const handleMouseDown = (e) => {
    // console.log(e)
    drawing = true;
  };

  const deleteMatrix = () => {
    const grid = document.querySelector('.grid');
    while (grid.lastElementChild) {
      grid.removeChild(grid.lastElementChild);
    }
  };

  const createMatrix = (size) => {
    const grid = document.querySelector('.grid');
    deleteMatrix();

    for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('item');
      div.addEventListener('mouseenter', handleHover);
      div.addEventListener('mousedown', handleHover);
      grid.appendChild(div);
    }
  };


  const handleMouseUp = () => {
    drawing = false;
  };

  function main() {
    createMatrix(matrixSize);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
  }

  main();
})();

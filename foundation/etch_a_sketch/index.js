(() => {
  const DEFAULT_BACKGROUND = '#d7e3f5';
  const DEFAULT_COLOR = '#10b9bc';

  let matrixSize = 16;
  let drawing = false;
  let erasing = false;
  let rainbow = false;

  const handleHover = (e) => {
    if (e.type === 'mouseenter' && !drawing) return;
    if (erasing) {
      e.target.style.background = DEFAULT_BACKGROUND;
      return;
    }

    if (rainbow) {
      return;
    }

    const color = document.querySelector('input[name="color-picker"]').value;
    e.target.style.background = color;
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

  const toggleEraser = (el) => {
    el.classList.toggle('active-btn');
    erasing = !erasing;
  };

  const toggleRainbowBtn = (el) => {
    el.classList.toggle('active-btn-rainbow');
    rainbow = !rainbow;
  };

  const handleMouseDown = (e, arg) => {
    drawing = true;
  };

  const handleMouseUp = () => {
    drawing = false;
  };

  const handleRainbow = (e) => {
    toggleRainbowBtn(e.target);
    if (erasing) {
      const el = e.target.nextElementSibling;
      toggleEraser(el);
    }
  };

  const handleEraser = (e) => {
    toggleEraser(e.target);
    if (rainbow) {
      const el = e.target.previousElementSibling;
      toggleRainbowBtn(el);
    }
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    const label = e.target.nextElementSibling;

    if (e.type === 'input') label.textContent = `${value}x${value}`;

    if (e.type === 'change') {
      matrixSize = value;
      document.querySelector('.grid').style.gridTemplateColumns = `repeat(${value}, 1fr)`;
      createMatrix(matrixSize);
    }
  };

  function main() {
    const slider = document.querySelector('input[name="slider"]');
    const colorPicker = document.querySelector('input[name="color-picker"]');
    const eraserBtn = document.querySelector('.eraser-btn');
    const rainbowBtn = document.querySelector('.rainbow-btn');
    const resetBtn = document.querySelector('.reset');

    createMatrix(matrixSize);
    colorPicker.value = DEFAULT_COLOR;

    slider.addEventListener('input', handleSliderChange);
    slider.addEventListener('change', handleSliderChange);
    rainbowBtn.addEventListener('click', handleRainbow);
    eraserBtn.addEventListener('click', handleEraser);
    resetBtn.addEventListener('click', () => {
      createMatrix(matrixSize);
    });

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
  }

  main();
})();

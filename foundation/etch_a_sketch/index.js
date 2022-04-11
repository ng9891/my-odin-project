(() => {
  const DEFAULT_BACKGROUND = '#d7e3f5';
  const DEFAULT_PAINT_COLOR = '#10b9bc';
  const MAX_RGB_VALUE = 256;

  let matrixSize = 16;
  let drawing = false;
  let erasing = false;
  let random = false;
  let randomSteps = 0;

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  // https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
  const rgb2hex = (rgb) =>
    rgb
      ? `#${rgb
          .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
          .slice(1)
          .map((n) => parseInt(n, 10).toString(16).padStart(2, '0'))
          .join('')}`
      : '';

  const handleHover = (e) => {
    if (e.type === 'mouseenter' && !drawing) return;
    if (erasing) {
      e.target.style.background = DEFAULT_BACKGROUND;
      return;
    }

    if (random) {
      // Already colored location
      const currentBG = e.target.style.backgroundColor;
      if (currentBG && rgb2hex(currentBG) !== DEFAULT_BACKGROUND) return;
      let color = 'rgb(0,0,0)';
      if (randomSteps === 9) randomSteps = 0;
      else {
        const r = getRandomInt(MAX_RGB_VALUE);
        const g = getRandomInt(MAX_RGB_VALUE);
        const b = getRandomInt(MAX_RGB_VALUE);
        color = `rgb(${r},${g},${b})`;
        randomSteps += 1;
      }
      e.target.style.background = color;
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

  const togglerandomBtn = (el) => {
    el.classList.toggle('active-btn-random');
    randomSteps = 0;
    random = !random;
  };

  const handleMouseDown = () => {
    drawing = true;
  };

  const handleMouseUp = () => {
    drawing = false;
  };

  const handlerandom = (e) => {
    togglerandomBtn(e.target);
    if (erasing) {
      const el = e.target.nextElementSibling;
      toggleEraser(el);
    }
  };

  const handleEraser = (e) => {
    toggleEraser(e.target);
    if (random) {
      const el = e.target.previousElementSibling;
      togglerandomBtn(el);
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
    const randomBtn = document.querySelector('.random-btn');
    const resetBtn = document.querySelector('.reset');

    createMatrix(matrixSize);
    colorPicker.value = DEFAULT_PAINT_COLOR;

    slider.addEventListener('input', handleSliderChange);
    slider.addEventListener('change', handleSliderChange);
    randomBtn.addEventListener('click', handlerandom);
    eraserBtn.addEventListener('click', handleEraser);
    resetBtn.addEventListener('click', () => {
      createMatrix(matrixSize);
    });

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
  }

  main();
})();

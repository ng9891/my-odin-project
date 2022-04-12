(({add, subtract, multiply, divide, power, factorial, operate}) => {
  const CALC_SIZE = 20;
  const CALC_OP = ['ac', 'c', '%', '/', 'x', '-', '+', '.', '='].reverse();

  const generateKeyPadNum = () => {
    const arr = [0];
    let tempArr = [];
    for (let i = 1; i < 10; i++) {
      tempArr.push(i);
      if (i % 3 === 0) {
        tempArr.reverse();
        arr.push(...tempArr);
        tempArr = [];
      }
    }
    return arr;
  };

  const CALC_NUM = generateKeyPadNum();

  const getButton = (div, i) => {
    if (i === 0) {
      div.style.cssText = 'background: var(--main-accent-color-dark); grid-column: 1 / 5;';
      const span = document.createElement('span');
      span.classList.add('prev');
      const span2 = document.createElement('span');
      span2.classList.add('curr');
      div.appendChild(span);
      div.appendChild(span2);
    } else if (i < 4) {
      div.style.cssText = 'background: var(--primary-accent-color-light);';
      div.textContent = CALC_OP.pop().toUpperCase();
    } else if (i % 4 === 0 || i === 19) {
      div.style.cssText = 'background: var(--secondary-accent-color-light)';
      div.textContent = CALC_OP.pop();
    } else if (i === 17) {
      div.style.cssText = 'grid-column: 1 / 3;';
      div.textContent = CALC_NUM.pop();
    } else if (i === 18) {
      div.textContent = CALC_OP.pop();
    } else {
      div.textContent = CALC_NUM.pop();
    }
    return div;
  };

  const handleClick = (e) => {
    console.log(e.target.classList.value);
  };

  const createCalculator = () => {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < CALC_SIZE; i++) {
      const div = document.createElement('div');
      div.classList.add(`item${i}`);
      div.addEventListener('click', handleClick);
      grid.appendChild(getButton(div, i));
    }
  };

  function main() {
    createCalculator();
  }

  main();
})(calculator);

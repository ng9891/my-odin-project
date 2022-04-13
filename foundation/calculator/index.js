(({operate}) => {
  const CALC_SIZE = 20;
  const CALC_OP = ['ac', 'c', '+/-', '/', 'x', '-', '+', '.', '='].reverse();

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
    let op = '';
    if (i === 0) {
      const span = document.createElement('span');
      span.classList.add('prev');
      const span2 = document.createElement('span');
      span2.classList.add('curr');
      span2.textContent = '0';
      div.appendChild(span);
      div.appendChild(span2);
    } else if (i < 4) {
      op = CALC_OP.pop();
      div.textContent = op.toUpperCase();
    } else if (i % 4 === 0 || i === 19) {
      op = CALC_OP.pop();
      div.textContent = op;
    } else if (i === 17) {
      op = CALC_NUM.pop();
      div.textContent = 0;
    } else if (i === 18) {
      op = CALC_OP.pop();
      div.textContent = op;
    } else {
      op = CALC_NUM.pop();
      div.textContent = op;
    }
    div.setAttribute('data-value', op);
    return div;
  };

  let currOp;
  let firstNum;
  let currField = '';
  let secondNum;
  let clearCurr = false;

  const writePrevField = (str) => {
    const prevField = document.querySelector('span.prev');
    prevField.textContent = str;
  };

  const appendCurrField = (str) => {
    const field = document.querySelector('span.curr');
    if (clearCurr || !currField || currField === '0') {
      field.textContent = '';
      currField = '';
      clearCurr = false;
    }
    let newStr = field.textContent + str;

    field.textContent = newStr;
    currField = field.textContent;
  };

  const appendDot = () => {
    if (!currField || clearCurr) appendCurrField('0');
    if (currField.includes('.')) return;
    appendCurrField('.');
  };

  const plusMinus = () => {
    if (!currField) return;
    clearCurr = true;
    appendCurrField(Number(currField) * -1);
  };

  const clear = () => {
    clearCurr = true;
    appendCurrField(0);
    writePrevField('');
    currField = '';
    firstNum = undefined;
    secondNum = undefined;
    currOp = undefined;
  };

  const eval = (op) => {
    if (!op || clearCurr) return;
    secondNum = Number(currField);
    if (op === '/' && secondNum === 0) return alert('Cannot divide by 0');
    const result = operate(op, firstNum, secondNum);
    let num = Number(result);
    if (num > 999999999 || num < -999999999) num = num.toExponential(2);

    clearCurr = true;
    appendCurrField(num);
    writePrevField(`${firstNum} ${op} ${secondNum} =`);
    currOp = undefined;
  };

  const setOp = (op) => {
    if (currOp) eval(currOp);
    currOp = op;
    firstNum = Number(currField);
    writePrevField(`${firstNum} ${currOp} `);
    clearCurr = true;
  };

  const switchOpAction = (op) => {
    switch (op) {
      case '=': {
        eval(currOp);
        break;
      }
      case 'ac': {
        clear();
        break;
      }
      case 'c': {
        clearCurr = true;
        appendCurrField('0');
        break;
      }
      case '.': {
        appendDot();
        break;
      }
      case '+/-': {
        plusMinus();
        return;
      }
      default: {
        // + - * /
        setOp(op);
      }
    }
    return;
  };

  const handleClick = (e) => {
    const att = e.target.getAttribute('data-value');
    if (isNaN(att)) {
      switchOpAction(att);
    } else {
      appendCurrField(att);
    }
  };

  const createCalculator = () => {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < CALC_SIZE; i++) {
      const div = document.createElement('div');
      div.classList.add(`item${i}`);
      if (i !== 0) div.addEventListener('click', handleClick);
      grid.appendChild(getButton(div, i));
    }
  };

  const toggleDarkMode = () => {
    const currTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = !currTheme || currTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  function main() {
    createCalculator();
    const darkModeCheckBox = document.querySelector('input[name="darkmode"]');
    darkModeCheckBox.addEventListener('change', toggleDarkMode);
    const defaultDarkMode = localStorage.getItem('theme');
    if (defaultDarkMode && defaultDarkMode === 'dark') {
      darkModeCheckBox.checked = true;
      toggleDarkMode();
    }
  }

  main();
})(calculator);

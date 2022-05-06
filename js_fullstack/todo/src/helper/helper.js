export const removeChildren = (parentEl) => {
  while (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }
};

export const createWrappingDiv = (className, childElArr) => {
  const div = document.createElement('div');
  div.classList.add(className);
  if (childElArr && childElArr.length > 0) {
    for (const el of childElArr) {
      div.appendChild(el);
    }
  }
  return div;
};

export const createInput = ({label = '', id, type, siblingEl, ...attributes}) => {
  const returnArr = [];
  const labelEl = document.createElement('label');
  if (label) {
    labelEl.setAttribute('for', id);
    labelEl.textContent = label;
    returnArr.push(labelEl);
  }

  const input = document.createElement('input');
  input.setAttribute('type', type);
  if (id) input.setAttribute('id', id);
  for (const [key, value] of Object.entries(attributes)) {
    input.setAttribute(key, value);
  }

  if (type === 'radio') {
    labelEl.appendChild(input);
    if (siblingEl) labelEl.appendChild(siblingEl);
    if (!label) returnArr.push(labelEl);
  } else returnArr.push(input);

  return returnArr;
};

export const createButton = (type, content, className) => {
  const btn = document.createElement('button');
  btn.setAttribute('type', type);
  btn.textContent = content;
  if (className) btn.classList.add(className);
  return btn;
};

export const createImgButton = ({url, className, clickEvent, parentType = 'div', parentClass}) => {
  const container = document.createElement(parentType);
  if(parentClass) container.classList.add(parentClass);

  const img = document.createElement('img');
  img.setAttribute('src', url);
  if (className) img.classList.add(className);

  container.appendChild(img);
  container.addEventListener('click', clickEvent);
  return container;
};

export const tabClickLogic = (e) => {
  const li = e.target.closest('li');
  if (li.classList.contains('active')) return;

  const currSelected = document.querySelector('nav ul li:not(.projects):not(.add-project).active');
  if (currSelected) currSelected.classList.remove('active');
  li.classList.add('active');

  // Closing sidebar
  const sidebar = li.closest('.sidebar');
  sidebar.classList.remove('active');
};

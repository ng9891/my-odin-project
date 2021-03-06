export const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((e) => {
      console.error(e);
    });

export const degree = '°';

export const addChildren = (container, childElArr) => {
  if (childElArr && childElArr.length > 0) {
    for (const el of childElArr) {
      container.appendChild(el);
    }
  }
};

export const createContainer = (type = 'div', className, childElArr) => {
  const div = document.createElement(type);
  if (className) div.className = className;
  addChildren(div, childElArr);
  return div;
};

export const removeChildren = (parentEl) => {
  while (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }
};

import sub from 'date-fns/sub'
export const getPreviousDayDT = () => {
  const date = new Date();
  const yesterday = sub(date,{days:1});
  return Math.floor(yesterday.getTime() / 1000);
};

export const celsiusToFahrenheit = (c)=>{
  return c * (9/5) + 32
}
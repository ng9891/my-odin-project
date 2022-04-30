import PubSub from './helper/pubsub';
import dummyFn from './modules/UI';

const handleSub = (data) => {
  console.log('Hello from index.js', data);
};

dummyFn();

const container = document.querySelector('#container');

const handleClick = () => {
  PubSub.publish('test', 1234);
};

const btn = document.createElement('button');
btn.textContent = 'Click Me! and look at your console!';
btn.addEventListener('click', handleClick);

container.appendChild(btn);

PubSub.subscribe('test', handleSub);

import PubSub from './helper/pubsub';
import dummyFn from './modules/UI';

import './style.css';

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

// container.appendChild(btn);

PubSub.subscribe('test', handleSub);

// Testing modal
const openModal = ()=>{
  const modal = document.querySelector('.modal');
  modal.showModal();
}

const addTodo = document.querySelector('.add-todo');
addTodo.addEventListener('click', openModal);


// Testing sidebar
const toggleSidebar  = ()=>{
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active')
}

const sidebarBtn = document.querySelector('.sidebar-btn');
sidebarBtn.addEventListener('click', toggleSidebar)

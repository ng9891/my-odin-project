import PubSub from './helper/pubsub';
import main from './modules/UI';
import Modal from './modules/Modal';

import './style.css';

main();
const modal = Modal(document.querySelector('.modal'));

// Testing modal
const openModal = ()=>{
  modal.addTaskModal();
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

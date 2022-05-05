import main from './modules/UI';

import './style.css';

main();

// Testing sidebar
const toggleSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
};

const sidebarBtn = document.querySelector('.sidebar-btn');
sidebarBtn.addEventListener('click', toggleSidebar);

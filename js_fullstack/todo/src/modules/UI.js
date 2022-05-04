import PubSub from '../helper/pubsub';
import Project from './Project';
import Modal from './Modal';
import {removeChildren} from '../helper/helper';

const modal = Modal(document.querySelector('.modal'));
const ProjectsUI = (() => {
  const projects = new Map();

  const $projectsContainer = document.querySelector('ul .projects-container');
  // const $addProjectBtn = document.querySelector('li .add-project');

  const getTodoCount = (todosArr) => {
    let count = 0;
    todosArr.forEach((todo) => {
      if (!todo.getComplete()) count += 1;
    });
    return count;
  };

  const updateTodoCount = (project, el) => {
    const todosArr = project.getTodoArr();
    const count = getTodoCount(todosArr);
    if (count === 0) el.classList.add('notodo');
    else {
      el.textContent = count;
      el.classList.remove('notodo');
    }
  };

  const createElement = (title) => {
    const li = document.createElement('li');

    const spanTitle = document.createElement('span');
    const spanTodo = document.createElement('span');

    spanTitle.textContent = title;

    const project = projects.get(title);
    if (project) updateTodoCount(project, spanTodo);

    li.appendChild(spanTitle);
    li.appendChild(spanTodo);

    return li;
  };

  const addProject = (title) => {
    if (projects.get(title)) return false;
    projects.set(title, Project(title));
    _render();
    return true;
  };

  const getProject = (title) => {
    return projects.get(title);
  };

  const handleAddProject = (e) => {
    // function getRandomInt(max = 2) {
    //   return Math.floor(Math.random() * max);
    // }
    // addProject('test' + getRandomInt(999));
    modal.addProjectModal();
  };

  const _render = () => {
    removeChildren($projectsContainer);
    projects.forEach((_, title) => {
      const li = createElement(title);
      $projectsContainer.append(li);
    });

    const addProjBtn = document.createElement('li');
    addProjBtn.classList.add('add-project');
    addProjBtn.addEventListener('click', handleAddProject);
    const img = document.createElement('img');
    img.setAttribute('src', '../src/assets/plus.svg');
    addProjBtn.appendChild(img);
    $projectsContainer.append(addProjBtn);
  };

  _render();
  return {
    addProject,
    getProject,
  };
})();

const main = () => {
  ProjectsUI.getProject();
};

export default main;

import PubSub from '../helper/pubsub';
import Project from './Project';
import Todo from './Todo';
import Modal from './Modal';
import {removeChildren, createImgButton, createWrappingDiv, createInput, formatDate} from '../helper/helper';

const handleTabClick = (e) => {
  const li = e.target.closest('li');
  if (li.classList.contains('active')) return;

  const currSelected = document.querySelector('nav ul li:not(.projects):not(.add-project).active');
  currSelected.classList.remove('active');
  li.classList.add('active');
  const title = e.target.firstChild.textContent;
  const project = ProjectsUI.getProject(title);
  if (project) PubSub.publish('changeCurrProject', project);
};

const ProjectsUI = (() => {
  const projects = new Map();
  let currProject = null;

  const $projectsContainer = document.querySelector('ul .projects-container');

  const updateTodoCount = (project, el) => {
    const count = project.getSize() - project.getCompletedCount();
    if (count === 0) el.classList.add('notodo');
    else {
      el.textContent = count;
      el.classList.remove('notodo');
    }
  };

  const createProjectElement = (title) => {
    const li = document.createElement('li');

    const spanTitle = document.createElement('span');
    const spanTodo = document.createElement('span');

    spanTitle.textContent = title;

    const project = projects.get(title);
    if (project) updateTodoCount(project, spanTodo);

    li.appendChild(spanTitle);
    li.appendChild(spanTodo);
    li.addEventListener('click', handleTabClick);

    if (currProject) {
      const currTitle = currProject.getTitle();
      if (currTitle === title) li.classList.add('active');
    }

    return li;
  };

  const addProject = (project) => {
    const title = project.getTitle();
    if (projects.has(title)) return alert('Repeated Project Name');
    projects.set(title, project);
    _render();
    return true;
  };

  const deleteProject = (title) => {
    const deleted = projects.delete(title);
    if (deleted) _render();
  };

  const getProjects = () => {
    return projects;
  };

  const getProject = (title) => {
    return projects.get(title);
  };

  const handleAddProject = () => {
    PubSub.publish('openAddProjectModal');
  };

  const _render = () => {
    console.dir([...projects.entries()]);
    removeChildren($projectsContainer);
    projects.forEach((_, title) => {
      if (title !== 'Home' && title !== 'Today' && title !== 'Week') {
        const li = createProjectElement(title);
        $projectsContainer.append(li);
      }
    });

    const btn = createImgButton({
      url: '../src/assets/plus.svg',
      clickEvent: handleAddProject,
      parentType: 'li',
      parentClass: 'add-project',
    });
    $projectsContainer.append(btn);
  };

  const setCurrProject = (project) => {
    currProject = project;
  };

  PubSub.subscribe('newProject', addProject);
  PubSub.subscribe('changeCurrProject', setCurrProject);
  PubSub.subscribe('projectDeleted', deleteProject);
  PubSub.subscribe('todoAdded', () => _render());
  PubSub.subscribe('todoDeleted', () => _render());
  PubSub.subscribe('todoCompletedToggle', () => _render());

  // _render();
  return {
    addProject,
    deleteProject,
    getProject,
    getProjects,
  };
})();

const todosUI = (() => {
  let currProject = null;

  const $todoContainer = document.querySelector('.todo-container');

  const priorityMap = {
    '1': 'low',
    '2': 'med',
    '3': 'high',
  };

  const handleDeleteTodo = (e) => {
    e.preventDefault();
    const itemEl = e.target.closest('.item');
    const todoTitle = itemEl.querySelector('.title').textContent;
    console.log('delete todo', todoTitle);

    const todo = currProject.getTodo(todoTitle);
    if (todo) {
      const deleted = currProject.deleteTodo(todo);
      if (deleted) {
        _render();
        PubSub.publish('todoDeleted', todo);
      }
    }
  };

  const handleCompleteTodo = (e) => {
    e.preventDefault();
    const itemEl = e.target.closest('.item');
    const todoTitle = itemEl.querySelector('.title').textContent;
    console.log('complete todo', todoTitle);

    const todo = currProject.getTodo(todoTitle);
    if (todo) {
      const completed = currProject.toggleCompleteTask(todo);
      completed ? itemEl.classList.add('done') : itemEl.classList.remove('done');
      PubSub.publish('todoCompletedToggle', todo);
      console.log(currProject.getCompletedCount());
    }
  };

  const openModal = (e) => {
    if (e.target.type === 'checkbox' || e.target.nodeName === 'IMG') return;
    const item = e.target.closest('.item');

    if (item && !item.classList.contains('add-todo')) {
      const title = item.querySelector('.title').textContent;

      const selectedTodo = currProject.getTodo(title);
      if (!selectedTodo) return console.error('TODO not found.');

      const {due, priority, desc} = selectedTodo.getTodo();
      PubSub.publish('openViewTaskModal', {
        projectName: currProject.getTitle(),
        title,
        due,
        priority,
        desc,
      });
    } else if (item.classList.contains('add-todo')) {
      PubSub.publish('openAddTaskModal', {
        projectName: currProject.getTitle(),
      });
    }
  };

  const createTodoElement = ({title, due, priority, completed}) => {
    const checkbox = createInput({type: 'checkbox'})[0];
    const checkboxDiv = createWrappingDiv('check', [checkbox]);
    checkbox.addEventListener('change', handleCompleteTodo);

    const titleDiv = createWrappingDiv('title');
    titleDiv.textContent = title;

    const dateDiv = createWrappingDiv('date');
    dateDiv.textContent = formatDate(due);

    const deleteBtn = createImgButton({
      url: '../src/assets/trash-can-outline.svg',
      clickEvent: handleDeleteTodo,
      parentClass: 'btn-container',
    });

    const item = createWrappingDiv('item', [checkboxDiv, titleDiv, dateDiv, deleteBtn]);
    item.addEventListener('click', openModal);
    item.classList.add(`${priorityMap[priority]}`);
    if (completed) {
      checkbox.setAttribute('checked', '');
      item.classList.add('done');
    }

    return item;
  };

  const _render = () => {
    removeChildren($todoContainer);
    const projectTitle = currProject.getTitle();
    const h3 = document.createElement('h3');
    h3.textContent = projectTitle;
    const title = createWrappingDiv('projTitle', [h3]);
    $todoContainer.appendChild(title);

    const todos = currProject.getTodoArr();
    todos.forEach((todo) => {
      const el = createTodoElement(todo.getTodo());
      $todoContainer.appendChild(el);
    });

    if (projectTitle !== 'Week' && projectTitle !== 'Today') {
      const addTodoBtn = createImgButton({
        url: '../src/assets/plus.svg',
        parentClass: 'item',
      });
      addTodoBtn.classList.add('add-todo');
      addTodoBtn.addEventListener('click', openModal);
      $todoContainer.appendChild(addTodoBtn);
    }
  };

  const setCurrProject = (project) => {
    currProject = project;
    _render();
  };

  const handleNewTask = (todo) => {
    currProject.addTodo(todo);
    _render();
    PubSub.publish('todoAdded', todo);
  };

  PubSub.subscribe('changeCurrProject', setCurrProject);
  PubSub.subscribe('newTaskSubmit', handleNewTask);
})();

// Only Home, Wekk, Projects tabs
const tabs = document.querySelectorAll('nav ul li:not(.projects):not(.add-project)');
for (let i = 0; i < 3; i++) {
  tabs[i].addEventListener('click', handleTabClick);
}

// Debugging
PubSub.subscribe('changeCurrProject', (project) => {
  console.log('CURRENT PROJECT is:', project.getTitle());
});

PubSub.subscribe('todoDeleted', (test) => {
  console.log('DELETED TODO:', test);
});

const main = () => {
  Modal(document.querySelector('.modal'));
  const home = Project('Home');
  const today = Project('Today');
  const week = Project('Week');

  ProjectsUI.addProject(home);
  ProjectsUI.addProject(today);
  ProjectsUI.addProject(week);

  // Init with Home
  PubSub.publish('changeCurrProject', home);

  // Testing
  const testProj = Project('testingProj');
  const test = Todo({title: 'testTodo', desc: 'testDesc', priority: 1, due: '2022-12-25'});
  testProj.addTodo(test);

  const test2 = Todo({title: 'testTodo2', desc: 'testDesc', priority: 3, due: '2022-12-25'});
  testProj.addTodo(test2);

  const test3 = Todo({title: 'testTodo3', desc: 'testDesc', priority: 2, due: '2022-12-26'});
  testProj.addTodo(test3);

  const test4 = Todo({title: 'testTodo444 4444 44444', desc: 'testDesc', priority: 2, due: '2022-12-26'});
  testProj.addTodo(test4);

  ProjectsUI.addProject(testProj);
};

export default main;

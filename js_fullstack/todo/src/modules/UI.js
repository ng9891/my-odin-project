import PubSub from '../helper/pubsub';
import Project from './Project';
import Todo from './Todo';
import Modal from './Modal';
import ProjectsUI from './ProjectsUI';
import Storage from './Storage';

import {removeChildren, createImgButton, createWrappingDiv, createInput, tabClickLogic} from '../helper/helper';
import {add as addDate, compareAsc, format} from 'date-fns';

const TodosUI = (() => {
  let currProject = null;

  const $todoContainer = document.querySelector('.todo-container');
  const $homeEl = document.querySelector('li.home');

  const openModal = (e) => {
    if (e.target.type === 'checkbox' || e.target.classList.contains('deleteTodoBtn')) return;
    const item = e.target.closest('.item');

    if (item && !item.classList.contains('add-todo')) {
      const title = item.querySelector('.title').textContent;
      const projectName = item.querySelector('.projName input').value;

      const project = ProjectsUI.getProject(projectName);
      const selectedTodo = project.getTodo(title);
      if (!selectedTodo) return console.error('TODO not found.');

      const {due, priority, desc} = selectedTodo.getTodo();
      PubSub.publish('openViewTaskModal', {
        projectName,
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

  const handleDeleteProject = () => {
    PubSub.publish('deleteProject', currProject.getTitle());
    $homeEl.click();
  };

  const _render = () => {
    removeChildren($todoContainer);
    const projectTitle = currProject.getTitle();
    const h2 = document.createElement('h2');
    h2.textContent = projectTitle;

    const span = createImgButton({
      url: '../src/assets/trash-can-outline.svg',
      className: 'deleteProjectBtn',
      clickEvent: handleDeleteProject,
      parentType: 'span',
      parentClass: 'deleteProject',
    });

    const divChildren = [h2];
    if (currProject.getTitle() !== 'Today' && currProject.getTitle() !== 'Week' && currProject.getTitle() !== 'Home') {
      divChildren.push(span);
    }
    const title = createWrappingDiv('projTitle', divChildren);
    $todoContainer.appendChild(title);

    const todos = currProject.getTodoArr();
    const completedArr = [];
    todos.forEach((todo) => {
      const todoObj = todo.getTodo();
      const el = createTodoElement(todoObj);
      todoObj.completed ? completedArr.push(el) : $todoContainer.appendChild(el);
    });

    completedArr.forEach((el) => {
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

  const handleDeleteTodo = (e) => {
    e.preventDefault();
    const itemEl = e.target.closest('.item');
    const todoTitle = itemEl.querySelector('.title').textContent;
    const projTitle = itemEl.querySelector('.projName input').value;

    const project = ProjectsUI.getProject(projTitle);
    const todo = project.getTodo(todoTitle);

    if (todo) {
      const deleted = project.deleteTodo(todo);
      if (deleted) {
        currProject.deleteTodo(todo);
        PubSub.publish('todoDeleted', todo);
        _render();
      }
    }
  };

  const handleCompleteTodo = (e) => {
    e.preventDefault();
    const itemEl = e.target.closest('.item');
    const todoTitle = itemEl.querySelector('.title').textContent;
    const projTitle = itemEl.querySelector('.projName input').value;

    const project = ProjectsUI.getProject(projTitle);
    const todo = project.getTodo(todoTitle);
    if (todo) {
      const completed = project.toggleCompleteTask(todo);
      if (completed === null) return console.error('Todo not found.');
      PubSub.publish('todoCompletedToggle', todo);
      _render();
    }
  };

  const priorityMap = {
    '1': 'low',
    '2': 'med',
    '3': 'high',
  };

  const createTodoElement = ({title, due, priority, completed, project}) => {
    const projName = createInput({type: 'hidden', value: project})[0];
    const projNameDiv = createWrappingDiv('projName', [projName]);

    const checkbox = createInput({type: 'checkbox'})[0];
    const checkboxDiv = createWrappingDiv('check', [checkbox]);
    checkbox.addEventListener('change', handleCompleteTodo);

    const titleDiv = createWrappingDiv('title');
    titleDiv.textContent = title;

    const projInfoDiv = createWrappingDiv('proj');
    if (currProject.getTitle() === 'Today' || currProject.getTitle() === 'Week') projInfoDiv.textContent = `${project}`;

    const dateDiv = createWrappingDiv('date');
    // https://stackoverflow.com/a/31732581
    const dueTxt = !due ? 'No due' : format(new Date(due.replace(/-/g, '/')), 'MMM dd');
    dateDiv.textContent = dueTxt;

    const deleteBtn = createImgButton({
      url: '../src/assets/trash-can-outline.svg',
      className: 'deleteTodoBtn',
      clickEvent: handleDeleteTodo,
      parentClass: 'btn-container',
    });

    const item = createWrappingDiv('item', [projNameDiv, checkboxDiv, titleDiv, projInfoDiv, dateDiv, deleteBtn]);
    item.addEventListener('click', openModal);
    item.classList.add(`${priorityMap[priority]}`);
    if (completed) {
      checkbox.setAttribute('checked', '');
      item.classList.add('done');
    }

    return item;
  };

  const setCurrProject = (project) => {
    currProject = project;
    _render();
  };

  const handleNewTask = (todo) => {
    const done = currProject.addTodo(todo);
    if (done) {
      PubSub.publish('todoAdded', todo);
      _render();
    } else {
      alert('Repeated Task Name');
    }
  };

  const handleTaskUpdate = ({newTodo, oldTodo}) => {
    const project = ProjectsUI.getProject(oldTodo.projectName);
    const todo = project.getTodo(oldTodo.title);

    const {title, desc, due, priority} = newTodo;
    const found = project.getTodo(newTodo.title);
    if (found && found !== todo) return alert('Repeated task name');
    todo.setTitle(title);
    todo.setDesc(desc);
    todo.setDue(due);
    todo.setPriority(priority);
    todo.setToProject(oldTodo.projectName);
    PubSub.publish('todoUpdated', todo);
    _render();
  };

  PubSub.subscribe('changeCurrProject', setCurrProject);
  PubSub.subscribe('newTaskSubmit', handleNewTask);
  PubSub.subscribe('taskUpdate', handleTaskUpdate);
})();

// Populating daily and weekly projects.
const GeneralTabsUI = (() => {
  const $homeEl = document.querySelector('li.home');
  const $todayEl = document.querySelector('li.today');
  const $weekEl = document.querySelector('li.week');

  const handleTabClick = (e) => {
    tabClickLogic(e);
    const title = e.target.firstChild.textContent;
    const project = ProjectsUI.getProject(title);
    if (project) PubSub.publish('changeCurrProject', project);
  };

  $homeEl.addEventListener('click', handleTabClick);
  $todayEl.addEventListener('click', handleTabClick);
  $weekEl.addEventListener('click', handleTabClick);

  const calcProjects = function calcDailyWeeklyProjects() {
    const projectsMap = ProjectsUI.getProjects();
    PubSub.publish('deleteProject', 'Today');
    PubSub.publish('deleteProject', 'Week');

    const newDailyProj = Project('Today');
    const newWeeklyProj = Project('Week');

    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = addDate(today, {days: 1});
    const weekLater = addDate(today, {weeks: 1});
    for (const [key, project] of projectsMap.entries()) {
      const tasksArr = project.getTodoArr();
      tasksArr.forEach((task) => {
        let {due} = task.getTodo();
        if (due) {
          // https://stackoverflow.com/a/31732581
          due = new Date(due.replace(/-/g, '/'));
          const laterThanToday = compareAsc(due, tomorrow) >= 0;
          const earlierThanAWeekLater = compareAsc(due, weekLater) <= 0;
          if (laterThanToday && earlierThanAWeekLater) newWeeklyProj.addTodo(task, false);
          if (compareAsc(due, today) >= 0 && compareAsc(due, tomorrow) < 0) newDailyProj.addTodo(task, false);
        }
      });
    }

    PubSub.publish('newProject', newDailyProj);
    PubSub.publish('newProject', newWeeklyProj);
  };

  const handleProjectDeleted = (title) => {
    if (title === 'Week' || title === 'Today') return;
    calcProjects();
  };

  PubSub.subscribe('newTaskSubmit', calcProjects);
  PubSub.subscribe('taskUpdate', calcProjects);
  PubSub.subscribe('todoCompletedToggle', calcProjects);
  PubSub.subscribe('todoDeleted', calcProjects);
  PubSub.subscribe('projectDeleted', handleProjectDeleted);

  return {
    calcProjects,
  };
})();

// Demo
const demo = () => {
  console.log('hi');
  const projects = ProjectsUI.getProjects();
};

const restoreProjects = () => {
  const projects = Storage.restoreStorage();
  if (!projects) return false;
  for (const [key, project] of Object.entries(projects)) {
    const newProj = Project(key);
    ProjectsUI.addProject(newProj);
    for (const todo of project) {
      const newTodo = Todo(todo);
      newProj.addTodo(newTodo);
    }
  }
  return true;
};

const main = () => {
  Modal(document.querySelector('.modal'));
  const restored = restoreProjects();

  const home = restored ? ProjectsUI.getProject('Home') : Project('Home');
  if (!restored) PubSub.publish('newProject', home);

  PubSub.publish('changeCurrProject', home);
  GeneralTabsUI.calcProjects();
  PubSub.publish('finishInitalLoad', ProjectsUI.getProjects());

  const demoBtn = document.querySelector('.demo button');
  demoBtn.addEventListener('click', demo);
};

export default main;

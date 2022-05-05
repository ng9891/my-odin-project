import PubSub from '../helper/pubsub';
import Project from './Project';
import Todo from './Todo';
import Modal from './Modal';
import {removeChildren, createImgButton, createWrappingDiv, createInput} from '../helper/helper';
import {add as addDate, compareAsc, format} from 'date-fns';

const handleTabClick = (e) => {
  const li = e.target.closest('li');
  if (li.classList.contains('active')) return;

  const currSelected = document.querySelector('nav ul li:not(.projects):not(.add-project).active');
  if (currSelected) currSelected.classList.remove('active');
  li.classList.add('active');

  // Closing sidebar
  const sidebar = li.closest('.sidebar');
  sidebar.classList.remove('active');

  const title = e.target.firstChild.textContent;
  const project = ProjectsUI.getProject(title);
  if (project) PubSub.publish('changeCurrProject', project);
};

const ProjectsUI = (() => {
  const projects = new Map();
  let currProject = null;

  const $projectsContainer = document.querySelector('ul .projects-container');
  const $homeEl = document.querySelector('li.home');
  const $todayEl = document.querySelector('li.today');
  const $weekEl = document.querySelector('li.week');

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
    if (deleted) {
      PubSub.publish('projectDeleted', title);
      _render();
    }
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
    removeChildren($projectsContainer);
    projects.forEach((project, title) => {
      if (title === 'Home' || title === 'Today' || title === 'Week') {
        let el = null;
        if (title === 'Home') el = $homeEl;
        else if (title === 'Today') el = $todayEl;
        else el = $weekEl;
        updateTodoCount(project, el.lastElementChild);
      } else {
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
  PubSub.subscribe('deleteProject', deleteProject);

  PubSub.subscribe('todoAdded', () => _render());
  PubSub.subscribe('todoDeleted', () => _render());
  PubSub.subscribe('todoCompletedToggle', () => _render());
  PubSub.subscribe('generalTabsUpdate', () => _render());
  PubSub.subscribe('projectNameUpdated', () => _render());

  // _render();
  return {
    addProject,
    deleteProject,
    getProject,
    getProjects,
  };
})();

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
    currProject.addTodo(todo);
    PubSub.publish('todoAdded', todo);
    _render();
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

const GeneralTabsUI = (() => {
  const $homeEl = document.querySelector('li.home');
  const $todayEl = document.querySelector('li.today');
  const $weekEl = document.querySelector('li.week');

  $homeEl.addEventListener('click', handleTabClick);
  $todayEl.addEventListener('click', handleTabClick);
  $weekEl.addEventListener('click', handleTabClick);

  const _render = () => {
    PubSub.publish('generalTabsUpdate');
  };

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
    ProjectsUI.addProject(newDailyProj);
    ProjectsUI.addProject(newWeeklyProj);
    _render();
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

const main = () => {
  Modal(document.querySelector('.modal'));
  const home = Project('Home');
  const today = Project('Today');
  const week = Project('Week');

  ProjectsUI.addProject(home);
  ProjectsUI.addProject(today);
  ProjectsUI.addProject(week);

  // Testing
  const testProj = Project('testingProj');
  const test = Todo({title: 'testTodo', desc: 'testDesc', priority: 1, due: '2022-05-05'});
  testProj.addTodo(test);
  // home.addTodo(test);

  const test2 = Todo({title: 'testTodo2', desc: 'testDesc', priority: 3, due: '2022-05-09'});
  testProj.addTodo(test2);
  // home.addTodo(test2);

  const test3 = Todo({title: 'testTodo3', desc: 'testDesc', priority: 2, due: '2022-05-13'});
  testProj.addTodo(test3);
  // home.addTodo(test3);

  const test4 = Todo({title: 'testTodo444 4444 44444', desc: 'testDesc', priority: 2});
  testProj.addTodo(test4);
  // home.addTodo(test4);

  const test5 = Todo({title: 'testTodo444 4444 444444', desc: 'testDesc', priority: 2, due: '2022-05-06'});
  testProj.addTodo(test5);
  // home.addTodo(test5);

  ProjectsUI.addProject(testProj);

  // Init with Home
  PubSub.publish('changeCurrProject', home);

  GeneralTabsUI.calcProjects();
};

export default main;

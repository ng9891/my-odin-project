import PubSub from '../helper/pubsub';
import {removeChildren, tabClickLogic, createImgButton} from '../helper/helper';
const ProjectsUI = (() => {
  const projects = new Map();
  let currProject = null;

  const $projectsContainer = document.querySelector('ul .projects-container');
  const $homeEl = document.querySelector('li.home');
  const $todayEl = document.querySelector('li.today');
  const $weekEl = document.querySelector('li.week');

  const handleTabClick = (e) => {
    tabClickLogic(e);
    const title = e.target.firstChild.textContent;
    const project = ProjectsUI.getProject(title);
    if (project) PubSub.publish('changeCurrProject', project);
  };

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
    PubSub.publish('updateStorage', {title, projects});
    return true;
  };

  const deleteProject = (title) => {
    const deleted = projects.delete(title);
    if (deleted) {
      PubSub.publish('projectDeleted', title);
      PubSub.publish('updateStorage', {title, projects});
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

  return {
    addProject,
    deleteProject,
    getProject,
    getProjects,
  };
})();

export default ProjectsUI;

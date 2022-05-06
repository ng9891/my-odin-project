import PubSub from '../helper/pubsub';

const mapToObj = (m) => {
  return Array.from(m).reduce((obj, [key, value]) => {
    obj[key] = [...value.getTodoArr()];
    return obj;
  }, {});
};

function objectify(map) {
  const tmpObj = mapToObj(map);
  for (const key in tmpObj) {
    if (key === 'Today' || key === 'Week') {
      delete tmpObj[key];
      continue;
    }
    const todoArr = tmpObj[key];
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i]) todoArr[i] = todoArr[i].getTodo();
    }
  }
  return Object.assign({}, tmpObj);
}

const Storage = (() => {
  let projectsMap;
  let initialLoad = true;

  const handleTodos = (obj) => {
    if (initialLoad) return;
    const projectJSON = JSON.stringify(objectify(projectsMap));
    localStorage.setItem('projects', projectJSON);
  };

  const handleProjects = ({title, projects}) => {
    if (initialLoad) return;
    if (title === 'Week' || title === 'Today') return;
    if (projectsMap !== projects) projectsMap = projects;

    const projectJSON = JSON.stringify(objectify(projectsMap));
    localStorage.setItem('projects', projectJSON);
  };

  const restoreStorage = () => {
    return JSON.parse(localStorage.getItem('projects'));
  };

  const handleInitialLoad = (projects) => {
    projectsMap = projects;
    initialLoad = false;
  };

  PubSub.subscribe('updateStorage', handleProjects);
  PubSub.subscribe('todoAdded', handleTodos);
  PubSub.subscribe('todoDeleted', handleTodos);
  PubSub.subscribe('todoCompletedToggle', handleTodos);
  PubSub.subscribe('todoUpdated', handleTodos);

  PubSub.subscribe('finishInitalLoad', handleInitialLoad);

  return {
    restoreStorage,
  };
})();

export default Storage;

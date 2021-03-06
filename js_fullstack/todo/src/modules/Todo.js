const Todo = ({title, desc, due, priority = 1, completed = false, project = null}) => {
  priority = Number(priority);
  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);
  const setDesc = (newDesc) => (desc = newDesc);
  const setDue = (newDue) => (due = newDue);
  const setPriority = (newPriority) => (priority = Number(newPriority));
  const setToProject = (projectName) => (project = projectName);
  const getProjectName = () => project;
  const getCompleted = () => completed;
  const toggleCompleted = () => {
    completed = !completed;
    return completed;
  };
  const getTodo = () => {
    return {title, desc, due, priority, completed, project};
  };

  return {
    getTitle,
    setTitle,
    setDesc,
    setDue,
    setPriority,
    getTodo,
    getCompleted,
    toggleCompleted,
    setToProject,
    getProjectName,
  };
};

export default Todo;

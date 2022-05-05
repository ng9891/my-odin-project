const Project = (title, completedCount = 0) => {
  let todoArr = [];

  const addTodo = (todo, set = true) => {
    // Enforce unique title and projectName.
    const found = todoArr.find((el) => {
      if (!todo.getProjectName() && el.getTitle() === todo.getTitle()) return el;
      if (todo.getProjectName() && (el.getTitle() === todo.getTitle() && el.getProjectName() === todo.getProjectName()))
        return el;
    });
    if (todo.getCompleted()) completedCount += 1;
    if (found) return alert('Repeated task name');
    if (set) todo.setToProject(title);
    todoArr.push(todo);
  };

  const getTodo = (title) => {
    return todoArr.find((el) => el.getTitle() === title);
  };

  const deleteTodo = (todo) => {
    const len = todoArr.length;
    const filteredArr = todoArr.filter((el) => el !== todo);

    if (len !== 0 && filteredArr.length === len) return false;

    if (todo.getCompleted()) completedCount -= 1;
    todoArr = filteredArr;
    return true;
  };

  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);
  const getTodoArr = () => todoArr;

  const toggleCompleteTask = (todo) => {
    const found = todoArr.find((el) => el === todo);
    if (!found) return null;
    const completed = todo.toggleCompleted();
    completedCount = completed ? completedCount + 1 : completedCount - 1;
    return completed;
  };

  const getSize = () => todoArr.length;
  const getCompletedCount = () => {
    return completedCount;
  };

  return {
    addTodo,
    deleteTodo,
    getTitle,
    setTitle,
    getTodoArr,
    getSize,
    toggleCompleteTask,
    getTodo,
    getCompletedCount,
  };
};

export default Project;

// const test = Project('testProject');

// test.addTodo({title:'test'})
// test.addTodo({title:'test2'})
// test.addTodo({title:'test3'})
// const arr = test.getTodoArr();

// console.log(test.getTodoArr())
// console.log(test.getSize())
// console.log(test.getTitle())

// arr[1].title = 'this is changed';

// console.log(test.getTodoArr())

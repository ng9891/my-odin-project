const Project = (title, completedCount = 0) => {
  let todoArr = [];

  const addTodo = (todo) => {
    const found = todoArr.find((el) => el === todo);
    if (found) return alert('Repeated task name');
    todoArr.push(todo);
  };

  const getTodo = (title) => {
    return todoArr.find((el) => el.getTodo().title === title);
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
  const getTodoArr = () => todoArr;
  
  const toggleCompleteTask = (todo) => {
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

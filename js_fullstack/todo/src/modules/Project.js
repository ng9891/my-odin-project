const Project = (title) => {
  const todoArr = [];

  const addTodo = (todo) => {
    todoArr.push(todo);
  };

  const deleteTodo = (todo) => {
    todoArr.filter((el) => el !== todo);
  };

  const getTitle = () => title;
  const getTodoArr = () => todoArr;
  const getSize = () => todoArr.length;

  return {
    addTodo,
    deleteTodo,
    getTitle,
    getTodoArr,
    getSize,
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
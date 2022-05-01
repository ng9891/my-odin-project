const Todo = (title, desc, due, priority = 3) => {
  const completed = false;
  const setTitle = (newTitle) => (title = newTitle);
  const setDesc = (newDesc) => (desc = newDesc);
  const setDue = (newDue) => (due = newDue);
  const setPriority = (newPriority) => (priority = newPriority);
  const getCompleted = () => completed;
  const toggleCompleted = () => {
    completed = !completed;
    return completed;
  };
  const getTodo = () => {
    return {title, desc, due, priority};
  };

  return {
    setTitle,
    setDesc,
    setDue,
    setPriority,
    getTodo,
    getCompleted,
    toggleCompleted,
  };
};

export default Todo;

// const test = Todo('testtitle', 'testDesc', new Date(02 / 13 / 20));
// const test2 = Todo('testtitle2', 'testDesc2', new Date(02 / 13 / 21), 2);

// console.log(test.getTodo());
// console.log(test2.getTodo());

// test2.setDesc('testDesc3');
// console.log(test2.getTodo());

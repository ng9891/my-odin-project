# TODO List App - The Odin Project - JavaScript Path
Dynamically created TODO list application using Webpack and modular patterns.

Link to the project description [here](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)

[Live Demo](https://ng9891.github.io/my-odin-project/js_fullstack/todo/dist/)

### Personal Notes
I built this project following the `SOLID` design pattern. The logic and the UI logic are separated from each other using the module pattern. They communicate via Publish/Subscription (`PubSub`) using a self-made module.

`Webpack` allowed me to use ES6 import/export which facilitated the use of the module pattern and the use of npm libraries. I used `date-fns` library to format/process the dates.

I decided `not` to generate unique ID's for each generated project and task. So, I ran into issues of (C)RUDing the wrong card.

Lesson learned: have a `unique ID`... makes life much easier... 


![preview](https://i.ibb.co/R4vr9Dy/todoapp.png)

Author: vT
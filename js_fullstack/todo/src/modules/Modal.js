import PubSub from '../helper/pubsub';
import {removeChildren, createWrappingDiv, createInput, createButton} from '../helper/helper';
import Project from './Project';
import Todo from './Todo';

const Modal = ($modal) => {
  const $closeBtn = $modal.querySelector('.close-btn img:last-of-type');
  const $deleteBtn = $modal.querySelector('.close-btn img:first-of-type');

  let $form = $modal.querySelector('form');
  const $title = $modal.querySelector('h3');

  const createForm = (type, {projectName, title, desc, priority = 1, due} = {}) => {
    removeChildren($form);
    // Remove previous eventListeners
    const newForm = $form.cloneNode(true);
    $form.parentNode.replaceChild(newForm, $form);
    $form = newForm;
    if (type === 'project') {
      $deleteBtn.style.visibility = 'hidden';
      $title.textContent = 'New Project';

      const project = createInput({
        label: 'Project:',
        id: 'project',
        type: 'text',
        name: 'project',
        required: '',
      });
      const projectDiv = createWrappingDiv('form-control');
      for (const el of project) projectDiv.appendChild(el);
      $form.appendChild(projectDiv);
    } else {
      $title.textContent = ``;

      const project = createInput({
        label: 'Project:',
        id: 'project',
        type: 'hidden',
        name: 'project',
        value: projectName,
        readonly: '',
        required: '',
      });
      const projectDiv = createWrappingDiv('form-control');
      projectDiv.appendChild(project[1]);

      const titleInput = createInput({
        id: 'title',
        type: 'text',
        name: 'title',
        placeholder: 'Name',
        parentClass: 'form-control',
        maxlength: 80,
        required: '',
      });
      const titleDiv = createWrappingDiv('form-control', [titleInput[0]]);

      const descArea = document.createElement('textarea');
      descArea.setAttribute('rows', 10);
      descArea.setAttribute('id', 'desc');
      descArea.setAttribute('name', 'desc');
      descArea.setAttribute('placeholder', 'Description');
      const descDiv = createWrappingDiv('form-control', [descArea]);

      const dueInput = createInput({
        label: 'Due:',
        id: 'due',
        type: 'date',
        name: 'due',
        parentClass: 'form-control',
      });
      const dueDiv = createWrappingDiv('form-control');
      for (const el of dueInput) dueDiv.appendChild(el);

      // Priority Radio buttons
      const optSpanLow = document.createElement('span');
      optSpanLow.textContent = 'Low';
      const optLow = createInput({
        siblingEl: optSpanLow,
        id: 'low',
        type: 'radio',
        name: 'priority',
        value: 1,
        checked: '',
      });
      const optSpanMed = document.createElement('span');
      optSpanMed.textContent = 'Medium';
      const optMed = createInput({siblingEl: optSpanMed, id: 'medium', type: 'radio', name: 'priority', value: 2});
      const optSpanHigh = document.createElement('span');
      optSpanHigh.textContent = 'High';
      const optHigh = createInput({siblingEl: optSpanHigh, id: 'high', type: 'radio', name: 'priority', value: 3});
      const priorityDiv = createWrappingDiv('form-control', [optLow[0], optMed[0], optHigh[0]]);
      priorityDiv.classList.add('priority-container');

      if (type === 'viewTask') {
        titleInput[0].setAttribute('value', title);
        descArea.textContent = desc;
        dueInput[1].setAttribute('value', due);
        switch (priority) {
          case 1: {
            // optLow[0].firstChild.setAttribute('checked', '');
            optLow[0].click();
            break;
          }
          case 2: {
            // optMed[0].firstChild.setAttribute('checked', '');
            optMed[0].click();
            break;
          }
          default:
            // optHigh[0].firstChild.setAttribute('checked', '');
            optHigh[0].click();
        }
      }

      $form.appendChild(titleDiv);
      $form.appendChild(descDiv);
      $form.appendChild(projectDiv);
      $form.appendChild(dueDiv);
      $form.appendChild(priorityDiv);
    }
    // Modal Buttons
    const saveBtn = createButton('submit', 'Save');
    const closeBtn = createButton('button', 'Cancel');
    closeBtn.addEventListener('click', closeModal, {once: true});
    const btnContainer = createWrappingDiv('form-control', [saveBtn, closeBtn]);
    $form.appendChild(btnContainer);
  };

  const closeModal = () => {
    $modal.setAttribute('closing', '');
    $modal.addEventListener(
      'animationend',
      () => {
        $modal.removeAttribute('closing');
        $modal.close();
      },
      {once: true}
    );
    $modal.close();
  };

  $closeBtn.addEventListener('click', closeModal);

  const handleProjectSubmit = (e) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
    PubSub.publish('newProject', Project(formData.project));
  };

  const handleTaskSubmit = (e) => {
    const {title, desc, priority, due} = Object.fromEntries(new FormData(e.target).entries());
    const newTodo = Todo({title, desc, priority, due});
    PubSub.publish('newTaskSubmit', newTodo);
  };

  const handleTaskUpdate = (oldTodo, e) => {
    const {title, desc, priority, due, project} = Object.fromEntries(new FormData(e.target).entries());
    const newTodo = {title, desc, priority, due, projectName: project};
    PubSub.publish('taskUpdate', {newTodo, oldTodo});
  };

  const addTaskModal = ({projectName}) => {
    if (!projectName) return console.error('No projectName');
    createForm('addTask', {projectName});
    $modal.close();
    $modal.showModal();
    $form.addEventListener('submit', handleTaskSubmit, {once: true});
  };

  const addProjectModal = () => {
    createForm('project');
    $modal.close();
    $modal.showModal();
    $form.addEventListener('submit', handleProjectSubmit, {once: true});
  };

  const viewTaskModal = (formType, {projectName, title, desc, priority, due}) => {
    if (!projectName) return console.error('No projectName');
    createForm(formType, {projectName, title, desc, priority, due});
    $modal.close();
    $modal.showModal();
    $form.addEventListener('submit', handleTaskUpdate.bind(null, {title, desc, priority, due, projectName}), {
      once: true,
    });
  };

  PubSub.subscribe('openAddProjectModal', addProjectModal);
  PubSub.subscribe('openAddTaskModal', addTaskModal);
  PubSub.subscribe('openViewTaskModal', viewTaskModal.bind(null, 'viewTask'));
};

export default Modal;

import PubSub from '../helper/pubsub';
import {removeChildren, createWrappingDiv, createInput, createButton} from '../helper/helper';

const Modal = ($modal) => {
  const $closeBtn = $modal.querySelector('.close-btn img:last-of-type');
  const $deleteBtn = $modal.querySelector('.close-btn img:first-of-type');

  const $form = $modal.querySelector('form');
  const $title = $modal.querySelector('h3');

  const createForm = (type) => {
    removeChildren($form);
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
      $deleteBtn.style.visibility = type === 'viewTask' ? 'visible' : 'hidden';
      $title.textContent = type === 'viewTask' ? 'View Task' : 'Add New Task';

      const project = createInput({
        label: 'Project:',
        id: 'project',
        type: 'text',
        name: 'project',
        readonly: '',
        required: '',
      });
      const projectDiv = createWrappingDiv('form-control');
      for (const el of project) projectDiv.appendChild(el);

      const title = createInput({
        id: 'title',
        type: 'text',
        name: 'title',
        placeholder: 'Name',
        parentClass: 'form-control',
        required: '',
      });
      const titleDiv = createWrappingDiv('form-control', [title[0]]);

      const desc = document.createElement('textarea');
      desc.setAttribute('rows', 10);
      desc.setAttribute('id', 'desc');
      desc.setAttribute('name', 'desc');
      desc.setAttribute('placeholder', 'Description');
      desc.setAttribute('required', '');
      const descDiv = createWrappingDiv('form-control', [desc]);

      const due = createInput({
        label: 'Due:',
        id: 'due',
        type: 'date',
        name: 'due',
        parentClass: 'form-control',
        required: '',
      });
      const dueDiv = createWrappingDiv('form-control');
      for (const el of due) dueDiv.appendChild(el);

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

      $form.appendChild(projectDiv);
      $form.appendChild(titleDiv);
      $form.appendChild(descDiv);
      $form.appendChild(dueDiv);
      $form.appendChild(priorityDiv);
    }
    // Modal Buttons
    const saveBtn = createButton('submit', 'Save');
    const closeBtn = createButton('button', 'Cancel');
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
    PubSub.publish('newProject', formData);
  };

  const handleTaskSubmit = (e) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
    PubSub.publish('newTaskSubmit', formData);
  };

  const addTaskModal = (projectName) => {
    if (!projectName) return console.error('No projectName');
    createForm('addTask');
    $modal.showModal();
    $form.addEventListener('submit', handleTaskSubmit, {once: true});
  };

  const addProjectModal = () => {
    createForm('project');
    $modal.showModal();
    $form.addEventListener('submit', handleProjectSubmit, {once: true});
  };

  const viewTaskModal = (projectName, {title, desc, priority, due}) => {
    if (!projectName) return console.error('No projectName');
    createForm('viewTask');
    $modal.showModal();
    $form.addEventListener('submit', handleTaskSubmit, {once: true});
  };

  return {
    addTaskModal,
    addProjectModal,
    viewTaskModal,
    closeModal,
  };
};

export default Modal;

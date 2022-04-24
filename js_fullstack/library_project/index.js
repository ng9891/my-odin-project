(() => {
  const createBookCard = () => {
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const buttonsDiv = document.createElement('div');
  };

  const closeModal = () => {
    const modal = document.querySelector('#submit-book');
    modal.setAttribute('closing', '');
    modal.addEventListener(
      'animationend',
      () => {
        modal.removeAttribute('closing');
        modal.close();
      },
      {once: true}
    );
    modal.close();
  };

  const handleSubmit = (e) => {
    closeModal();
    console.log(e);
  };

  const handleClickBackdrop = (e) => {
    if (e.target.nodeName === 'DIALOG') closeModal();
  };

  const handleAddBook = () => {
    const modal = document.querySelector('#submit-book');
    document.querySelector('.modal form').reset();
    modal.showModal();
  };

  const main = () => {
    const addBookBtn = document.querySelector('.add-btn');
    addBookBtn.addEventListener('click', handleAddBook);

    const modal = document.querySelector('#submit-book');
    modal.addEventListener('click', handleClickBackdrop);

    const modalCloseBtn = document.querySelector('.modal-container .close-modal-btn');
    modalCloseBtn.addEventListener('click', closeModal);

    const form = document.querySelector('.modal form');
    form.addEventListener('submit', handleSubmit);
  };

  main();
})();

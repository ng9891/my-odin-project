(() => {
  let LIBRARY = [];

  class Book {
    constructor(title, author, read) {
      this.title = title;
      this.author = author;
      this.read = read;
    }

    toggleRead() {
      this.read = this.read === 'read' ? 'unread' : 'read';
    }
  }

  const addBook = (title, author, read) => {
    const newBook = new Book(title, author, read);

    const repeated = LIBRARY.some((book) => book.title === title && book.author === author);

    if (repeated) return null;
    LIBRARY.push(newBook);
    return newBook;
  };

  const removeBook = (e) => {
    const card = e.target.parentNode.parentNode;
    const title = card.firstChild.textContent;
    const author = card.firstChild.nextSibling.textContent;
    LIBRARY = LIBRARY.filter((book) => book.title !== title || book.author !== author);
    e.target.parentNode.parentNode.remove();

    saveLibrary();
  };

  const handleToggleRead = function(e) {
    const card = e.target.parentNode.parentNode;
    const title = card.firstChild.textContent;
    const author = card.firstChild.nextSibling.textContent;
    const book = LIBRARY.find((book) => book.title === title && book.author === author);
    if (!book) return alert('Book not found (?)');
    book.toggleRead();
    saveLibrary();
    e.target.textContent = `Mark as ${book.read}`;
    book.read === 'read' ? card.classList.add('read') : card.classList.remove('read');
  };

  const createBookCard = (book) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(book.read);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = book.title;
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    authorDiv.textContent = book.author;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('btn-container');
    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = `Mark as ${book.read}`;
    toggleReadBtn.addEventListener('click', handleToggleRead);
    const removeBookBtn = document.createElement('button');
    removeBookBtn.textContent = `Remove`;
    removeBookBtn.addEventListener('click', removeBook);

    buttonsDiv.appendChild(toggleReadBtn);
    buttonsDiv.appendChild(removeBookBtn);

    card.appendChild(titleDiv);
    card.appendChild(authorDiv);
    card.appendChild(buttonsDiv);

    return card;
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

  const createBook = ({title, author, read}) => {
    const newBook = addBook(title, author, read);
    if (!newBook) {
      alert('Repeated Book');
      return false;
    }
    const card = createBookCard(newBook);
    const cardContainer = document.querySelector('.card-container');
    cardContainer.appendChild(card);
    saveLibrary();
    return true;
  };

  const saveLibrary = () => {
    localStorage.setItem('library', JSON.stringify(LIBRARY));
  };

  const getLibrary = () => {
    const oldLibrary = JSON.parse(localStorage.getItem('library'));
    const newLibrary = oldLibrary.map((el) => {
      const newBook = new Book(el.title, el.author, el.read);
      createBook(newBook);
      return newBook;
    });
    LIBRARY = newLibrary;
  };

  const handleSubmit = (e) => {
    const formData = Object.fromEntries(new FormData(e.target).entries());
    if (createBook(formData)) closeModal();
    else e.preventDefault();
  };

  const handleClickBackdrop = (e) => {
    if (e.target.nodeName === 'DIALOG') closeModal();
  };

  const handleAddBook = () => {
    const modal = document.querySelector('#submit-book');
    document.querySelector('.modal form').reset();
    modal.showModal();
  };

  function getRandomInt(max = 2) {
    return Math.floor(Math.random() * max);
  }

  const addDummy = () => {
    const read = getRandomInt() ? 'read' : 'unread';
    const random = getRandomInt(1000);
    createBook({title: `Dummy Book ${LIBRARY.length + 1}`, author: `David Copperfield${random}, Harris, et al.`, read});
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

    const dummyBtn = document.querySelector('header .dummy');
    dummyBtn.addEventListener('click', addDummy);

    getLibrary();
  };

  main();
})();

/* eslint max-classes-per-file: ["error", 2] */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
const bookList = document.getElementById('booklist');
const addLi = (id, title, author) => {
  const list = document.createElement('li');
  list.id = id;
  list.className = 'books-lists';
  list.innerText = `${title} - ${author}`;
  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'Delete';
  list.appendChild(button);
  return list;
};
class AllBooks {
  constructor() {
    this.data = [];
  }

  addBook(title, author) {
    this.data.push(new Book(title, author));
    document.getElementById('Title').value = '';
    document.getElementById('Author').value = '';
    this.refresh();
  }

  refresh() {
    bookList.innerHTML = '';
    localStorage.setItem('books', JSON.stringify(this.data));
    this.data.forEach(
      (book) => {
        bookList.appendChild(addLi(book.id, book.title, book.author));
      },
    );
  }
}
const BooksList = new AllBooks();
bookList.addEventListener('click', (e) => {
  const tgt = e.target;
  if (tgt.tagName === 'BUTTON') {
    tgt.closest('li').remove();
  }

  window.onload = () => {
    if (localStorage.getItem('books') === null) {
      localStorage.setItem('books', JSON.stringify([]));
    } else {
      BooksList.data = JSON.parse(localStorage.books);
      BooksList.refresh();
    }
  };
}, false);
document.getElementById('btnAdd').addEventListener('click', () => {
  BooksList.addBook(document.getElementById('Title').value, document.getElementById('Author').value);
}, false);

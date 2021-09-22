const showField = document.querySelector('.books-list');
const submit = document.getElementById('submit');
const bookList = JSON.parse(localStorage.getItem('books')) || [];

function Voks(title, author) {
  this.title = title;
  this.author = author;
}

function addBook() {
  const newBook = new Voks();
  newBook.title = document.getElementById('title').value;
  newBook.author = document.getElementById('author').value;
  bookList.push(newBook);
  localStorage.setItem('books', JSON.stringify(bookList));
}

function pushContent() {
  document.getElementById('books-list').innerHTML = '';
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  bookList.forEach((e) => {
    const contain = document.createElement('div');
    contain.className = 'contain';
    const title = document.createElement('div');
    title.className = 'title';
    const author = document.createElement('div');
    author.className = 'author';
    title.innerHTML = e.title;
    author.innerHTML = e.author;
    const remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';

    contain.appendChild(title);
    contain.appendChild(author);
    contain.appendChild(remove);
    showField.appendChild(contain);
  });
}

function removeBook() {
  const removBtn = document.querySelectorAll('.remove');
  for (let i = 0; i < removBtn.length; i += 1) {
    removBtn[i].addEventListener('click', () => {
      bookList.splice(i, 1);
      removBtn[i].parentNode.remove();
      localStorage.setItem('books', JSON.stringify(bookList));
    });
  }
}

submit.addEventListener('click', () => {
  addBook();
  pushContent();
  removeBook();
});

window.onload = () => {
  pushContent();
  removeBook();
};
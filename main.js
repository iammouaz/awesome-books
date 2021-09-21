const showField = document.querySelector('.books-list');
const submit = document.getElementById('submit');

const bookList = [];

function Voks(title, author) {
  this.title = title;
  this.author = author;
}

function saveLocal() {
  localStorage.setItem('data', JSON.stringify(bookList));
}

function addBook() {
  const newBook = new Voks();
  newBook.title = document.getElementById('title').value;
  newBook.author = document.getElementById('author').value;
  bookList.push(newBook);
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
    saveLocal();
  });
}

function removeBook() {
  const removBtn = document.querySelectorAll('.remove');
  for (let i = 0; i < removBtn.length; i += 1) {
    removBtn[i].addEventListener('click', () => {
      bookList.splice(bookList[removBtn[i]], 1);
      removBtn[i].parentNode.remove();
      saveLocal();
    });
  }
}

submit.addEventListener('click', () => {
  addBook();
  pushContent();
  removeBook();
});

let bookList = [];

function voks (){
    this.title = title;
    this.author = author;
}

const submit = document.getElementById('submit');
submit .addEventListener('click', function (){
    let newBook = new voks;
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    bookList.push(newBook);
})

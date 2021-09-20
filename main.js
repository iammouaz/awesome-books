const showField = document.querySelector('.books-list');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
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
    for (let i = 0; i<= bookList.length; i++){
        let contain = document.createElement('div');
        let title = document.createElement('div');
        title.id = 'title';
        let author = document.createElement('div');
        author.id = 'author';
        title.textContent = bookList[i].title;
        author.textContent = bookList[i].author;
        let remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Remove';
        contain.appendChild(title);
        contain.appendChild(author);
        contain.appendChild(remove);
        showField.appendChild(contain);
    }
})


bookList.forEach((item) => {
    console.log(bookList['voks']);
});

// for (let i = 0; i<bookList.length; i++){
//     bookAuthor.innerHTML =  
// }
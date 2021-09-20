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
    console.log(newBook);
})

const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
bookList.forEach((item) => {
    bookTitle.innerHTML =+ `<span>${item.title}</span>`
});

// for (let i = 0; i<bookList.length; i++){
//     bookAuthor.innerHTML =  
// }
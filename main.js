const showField = document.querySelector('.books-list');

let bookList = [];

function Voks(title,author){
    this.title = title;
    this.author = author;
}
const submit = document.getElementById('submit');

function addBook(){
    let newBook = new Voks();
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    bookList.push(newBook);
}

function pushContent(){
    document.getElementById('books-list').innerHTML = '';
    document.getElementById('title').value ='';
    document.getElementById('author').value = '';
    bookList.forEach((e)=>{
        let contain = document.createElement('div');
        contain.className = 'contain'
        let title = document.createElement('div');
        title.className = 'title';
        let author = document.createElement('div');
        author.className = 'author';
        title.innerHTML = e.title;
        author.innerHTML = e.author;
        let remove = document.createElement('button');
        remove.className = 'remove';
        remove.textContent = 'Remove';
        
        contain.appendChild(title);
        contain.appendChild(author);
        contain.appendChild(remove);
        showField.appendChild(contain);
    });
}

function removeBook() {
    let removBtn = document.querySelectorAll('.remove');
    removBtn.forEach (e => {
        e.addEventListener('click', ()=>{
            e.parentNode.remove();
        })
    })
}

submit.addEventListener('click', ()=>{
    addBook();
    pushContent();
    removeBook();
});

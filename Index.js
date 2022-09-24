//all of the book objects are going to be stored in an array so add a function 
//to the script (not the constructor) that can take the users input and store the 
//new book object into an array.

//write a function that loops through the array and displays each book on the page.
//You can display them in some sort of table, or each on their own 'card'. It 
//might help for now to manually add a few books to your array so you can see
//the display

//add a NEW BOOK button that brings up a form allowing the users to input the details
//for the new book: author, title, # of pages, wheather its been read.

//add a button on each books display to remove the book from the library
    //you need to associate your DOM elements witht the actual book objects. 
    //One easy solution is giving the a data-attribute that corresponds to the 
    //index of the library array

//add a button on each books display to change its read status
    //to facilitate this you will want to create the function that toggles
    //a books read status on your Book prototpe instance


var myLibrary = []

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

//changes the display of the add book form to block styling
function showForm() {
    document.getElementById('popup').style.display = 'block';
}
//changes the display of the add book form to none to "hide" it from view
function hideForm() {
    document.getElementById('popup').style.display = 'none';
}

//function for adding a new book to the myLibrary array
function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages)
    myLibrary.push(book)
}

//function to display the books on the page
function displayBooks() {
    const books = document.querySelector('.book-list');

    //loops over the array and displays the cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.className = 'book';
        books.appendChild(card);
        for(let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement('p')
            para.textContent = (`${myLibrary[key]}`);
            card.appendChild(para);
        }
        var readBtn = card.appendChild(document.createElement('button'))
        readBtn.className = "not-read"
        readBtn.innerHTML = "Not Read"
        })
}

addBookToLibrary("A Game of Thrones", "George R.R. Martin", "694");
addBookToLibrary("A Clash of Kings", "George R.R. Martin", "792");

displayBooks();



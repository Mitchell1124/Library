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


//takes the user input and adds it to the myLibrary array
function Book() {
    //gets user input and creates an object 
    var bookInfo = {
        "title": document.getElementById('title').value,
        "author": document.getElementById('author').value,
        "pages": document.getElementById('pages').value
    }
    
    //pushs the user input bookInfo object to the myLibrary array
    myLibrary.push(bookInfo);

    console.log(myLibrary)

    //resets the user input fileds so that they are blank
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

function addBookToLibrary() {

    for(i = 0; i < myLibrary.length; i++) {
        
        var element = document.createElement("div")
        element.className = "book"

        var titleElement = element.appendChild(document.createElement('h1'))
        titleElement.className = "title"
        titleElement.innerHTML = myLibrary[i].title

        var authorElement = element.appendChild(document.createElement('p'))
        authorElement.className = "author"
        authorElement.innerHTML = myLibrary[i].author

        var pagesElement = element.appendChild(document.createElement('p'))
        pagesElement.className = "pages"
        pagesElement.innerHTML = myLibrary[i].pages + " pages"
    
        var readBtn = element.appendChild(document.createElement('button'))
        readBtn.className = "not-read"
        readBtn.innerHTML = "Not Read"

        document.getElementById('bookList').appendChild(element)
    }

}

function showForm() {
    document.getElementById('popup').style.display = 'block';
}

function hideForm() {
    document.getElementById('popup').style.display = 'none';
}

// function test() {
//     var element = document.createElement("div")
//     element.className = "book"

//     var titleElement = element.appendChild(document.createElement('h1'))
//     titleElement.className = "title"
//     titleElement.innerHTML = myLibrary[0].title

//     var authorElement = element.appendChild(document.createElement('p'))
//     authorElement.className = "author"
//     authorElement.innerHTML = myLibrary[0].author

//     var pagesElement = element.appendChild(document.createElement('p'))
//     pagesElement.className = "pages"
//     pagesElement.innerHTML = myLibrary[0].pages + " pages"
    
//     var readBtn = element.appendChild(document.createElement('button'))
//     readBtn.className = "not-read"
//     readBtn.innerHTML = "Not Read"

//     document.getElementById('bookList').appendChild(element)
// }



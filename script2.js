fetch("./assets/books.json")
.then((response) => response.json())
.then(onDataReady)
.catch((error) => console.log(error));


function onDataReady(data) {

    let list = "";
    for (const book of data) {
        list += "\nTitolo: " + book.title + ", Autore: " + book.author + ", Genere: " + book.genre + ", Editore: " + book.publisher + ", Prezzo: " + book.price;
    }
    document.getElementById("books-list").innerText = list;

    /*
    let list = "";
    for (const book of data) {
        list += "\nTitolo: " + book.title + ", Autore: " + book.author + ", Genere: " + book.genre + ", Editore: " + book.publisher + ", Prezzo: " + book.price;
    }
    let newText = document.createTextNode(list),
    book_list = document.getElementById("books-list");
    book_list.appendChild(newText);
    */
}

function onError(error) {
    console.log(error);
}
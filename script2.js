fetch("./assets/books.json")
.then((response) => response.json())
.then(onDataReady)
.catch((error) => console.log(error));


function onDataReady(data) {
    /*
    let list = "";
    for (const book of data) {
        list += "\nTitolo: " + book.title + ", Autore: " + book.author + ", Genere: " + book.genre + ", Editore: " + book.publisher + ", Prezzo: " + book.price;
    }
    document.getElementById("books-list").innerText = list;
    */

    book_list = document.getElementById("books-list");
    for (const book of data) {
        list = document.createElement("li");
        let book_string = "Titolo: " + book.title + "; Autore: " + book.author + "; Genere: " + book.genre + "; Editore: " + book.publisher + "; Prezzo: " + book.price;
        let node = document.createTextNode(book_string);
        list.appendChild(node);
        list.className += "book-card" + " ";                //+= e spazio per poter inserire più classi
        book_list.appendChild(list);
        const br = document.createElement("br");
        book_list.appendChild(br);
    }
    
    
    
    
}

function onError(error) {
    console.log(error);
}
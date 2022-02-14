// const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.getElementById("demo").innerHTML = this.responseText;
//     }
//   xhttp.open("GET", "./assets/data.json", true);
//   xhttp.send();



// const httpRequest = new XMLHttpRequest();

// httpRequest.onreadystatechange = gestisciRisposteDelServer;
// httpRequest.open('GET', './assets/data.json');
// httpRequest.send();

// function gestisciRisposteDelServer(){
//     console.log("Ready state", httpRequest.readyState);
//     console.log("Status", httpRequest.status);
//     console.log("Status", httpRequest.responseText);
//     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//        const arrayOfUsers = JSON.parse(httpRequest.responseText);
//        console.log(arrayOfUsers);
//     }
// }



fetch("./assets/data.json")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));


function onDataReady(data) {
    for (const user of data) {
        console.log("Nome: ", user.username);
    }
}

function onError(error) {
    console.log(error);
}
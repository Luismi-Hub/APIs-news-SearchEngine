

////////// FUNCIONES PARA INPUT Y MOSTRAR ELEMENTOS ///////////

var tBoton = document.getElementById("boton");

var input = document.getElementById("entrada");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        traerInfo();
    }
});


function pagination(){

    setTimeout(function () {

  
        document.getElementById("pagination").style.display = "flex"
    }, 1000);

}


function spinner() {



    setTimeout(function () {
        document.getElementById("spinner").style.display = "none"
        document.getElementById("container").style.display = "flex"
        document.getElementById("pagination").style.display = "flex"
    }, 1000);

}



    /////////// PASAMOS LA URL PARA OBTENER EL JSON ///////////


function loadDoc(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

    ////////// PARSEAR EL JSON A UN OBJETO //////////////


function loadAPI(xhttp) {
    objeto = JSON.parse(xhttp.responseText);


    for (var i = 0; i < 12; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h3>" + " <a href=" + objeto.articles[i].url + " target=_blank>" + objeto.articles[i].title + "</a>" + "</h3>" + "<br>" + "<br>" + "<img src=" + objeto.articles[i].urlToImage + ">" + "<p>" + objeto.articles[i].description + "</p>" + "<br>" + " <button class='boton'>+info</button>"
        newDiv.classList.add("noticia");
        var contenedor = document.getElementById("container")
        contenedor.appendChild(newDiv)
    }

}


function loadAPI1(xhttp) {
    objeto = JSON.parse(xhttp.responseText);


    for (var i = 0; i < 12; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h3>" + " <a href=" + objeto.articles[i].url + " target=_blank>" + objeto.articles[i].title + "</a>" + "</h3>" + "<br>" + "<br>" + "<img src=" + objeto.articles[i].urlToImage + ">" + "<p>" + objeto.articles[i].description + "</p>" + "<br>" + " <button class='boton'>+info</button>"
        newDiv.classList.add("noticia");
        var contenedor = document.getElementById("container")
        contenedor.appendChild(newDiv)
    }

}

function loadAPI2(xhttp) {
    objeto = JSON.parse(xhttp.responseText);


    for (var i = 13; i < 24; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h3>" + " <a href=" + objeto.articles[i].url + " target=_blank>" + objeto.articles[i].title + "</a>" + "</h3>" + "<br>" + "<br>" + "<img src=" + objeto.articles[i].urlToImage + ">" + "<p>" + objeto.articles[i].description + "</p>" + "<br>" + " <button class='boton'>+info</button>"
        newDiv.classList.add("noticia");
        var contenedor = document.getElementById("container")
        contenedor.appendChild(newDiv)
    }

}



    //////////// LLAMADA A LA API Y MAQUETACION DE DATOS ///////////////


    function traerInfo() {
        {
    
            document.getElementById("spinner").style.display = "block"
    
            spinner();
    
    
            document.getElementById("titulo").style.display = "none"
    
    
            var tNoticia = document.getElementById("entrada");
    
            var noticia = tNoticia.value;
    
    
            var borrar = document.getElementById("container")
    
            while (borrar.firstChild) {
                borrar.removeChild(borrar.firstChild);
            }
    
    
    
            loadDoc('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
                'q=' + noticia + '&' +
                'from=2021-05-06&' +
                'sortBy=popularity&' +
                'apiKey=067bdec191fb4b0cbe14fa478bde44d1', loadAPI)
    
        }
    }
    
    
    tBoton.addEventListener("click", function () {
    
        traerInfo();
    
    })
    

/////////  PRIMERA PAGINA //////////////////


function uno() {

    document.getElementById("pagination").style.display = "none"

    pagination()


    var primera = document.getElementById("primera")
    var segunda = document.getElementById("segunda")

    primera.classList.add("active");

    segunda.classList.remove("active");



    var tNoticia = document.getElementById("entrada");

    var noticia = tNoticia.value;


    var borrar = document.getElementById("container")

    while (borrar.firstChild) {
        borrar.removeChild(borrar.firstChild);
    }


    loadDoc('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
        'q=' + noticia + '&' +
        'from=2021-05-06&' +
        'sortBy=popularity&' +
        'apiKey=067bdec191fb4b0cbe14fa478bde44d1', loadAPI1)

}

///////// SEGUNDA PAGINA //////////////////

function dos() {

    document.getElementById("pagination").style.display = "none"

    pagination()

    var primera = document.getElementById("primera")
    var segunda = document.getElementById("segunda")

    segunda.classList.add("active");

    primera.classList.remove("active");


    var tNoticia = document.getElementById("entrada");

    var noticia = tNoticia.value;


    var borrar = document.getElementById("container")

    while (borrar.firstChild) {
        borrar.removeChild(borrar.firstChild);
    }



    loadDoc('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?' +
        'q=' + noticia + '&' +
        'from=2021-05-06&' +
        'sortBy=popularity&' +
        'apiKey=067bdec191fb4b0cbe14fa478bde44d1', loadAPI2)

}

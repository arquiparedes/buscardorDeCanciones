    // Obtener Información a través de AJAX
    var peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://127.0.0.1:5500/datos.json');
    peticion.onload = function () {
      if (peticion.status == 200) {
        let datos = JSON.parse(peticion.response)
    
        listacancion = datos.canciones;
    
        listacancion.sort(function(a,b){
            return a.reproducciones - b.reproducciones

        })
        largo = listacancion.length
        // console.log(largo);
        // console.log(listacancion)

        // Asignar nombres a las canciones
        var titulo1 = document.getElementById("titulo1")
        titulo1.innerHTML = listacancion[0].nombre;
        var titulo1 = document.getElementById("titulo2")
        titulo1.innerHTML = listacancion[1].nombre;
        var titulo1 = document.getElementById("titulo3")
        titulo1.innerHTML = listacancion[2].nombre;
        var titulo1 = document.getElementById("titulo4")
        titulo1.innerHTML = listacancion[3].nombre;
        var titulo1 = document.getElementById("titulo5")
        titulo1.innerHTML = listacancion[4].nombre;
        var titulo1 = document.getElementById("titulo6")
        titulo1.innerHTML = listacancion[5].nombre;
        var titulo1 = document.getElementById("titulo7")
        titulo1.innerHTML = listacancion[6].nombre;
        var titulo1 = document.getElementById("titulo8")
        titulo1.innerHTML = listacancion[7].nombre;
        var titulo1 = document.getElementById("titulo9")
        titulo1.innerHTML = listacancion[8].nombre;

// Asignar archivo de audio
        var cancion1 = document.getElementById("audio1")
        cancion1.src = "./canciones/" + listacancion[0].ruta;
        var cancion1 = document.getElementById("audio2")
        cancion1.src = "./canciones/" + listacancion[1].ruta;
        var cancion1 = document.getElementById("audio3")
        cancion1.src = "./canciones/" + listacancion[2].ruta;
        var cancion1 = document.getElementById("audio4")
        cancion1.src = "./canciones/" + listacancion[3].ruta;
        var cancion1 = document.getElementById("audio5")
        cancion1.src = "./canciones/" + listacancion[4].ruta;
        var cancion1 = document.getElementById("audio6")
        cancion1.src = "./canciones/" + listacancion[5].ruta;
        var cancion1 = document.getElementById("audio7")
        cancion1.src = "./canciones/" + listacancion[6].ruta;
        var cancion1 = document.getElementById("audio8")
        cancion1.src = "./canciones/" + listacancion[7].ruta;
        var cancion1 = document.getElementById("audio9")
        cancion1.src = "./canciones/" + listacancion[8].ruta;


        // Asignar imágenes
        var imagen1 = document.getElementById("figura1")
        imagen1.src = "./imagenes/icon_" + listacancion[0].icono + ".svg";
        var imagen1 = document.getElementById("figura2")
        imagen1.src = "./imagenes/icon_" + listacancion[1].icono + ".svg";
        var imagen1 = document.getElementById("figura3")
        imagen1.src = "./imagenes/icon_" + listacancion[2].icono + ".svg";
        var imagen1 = document.getElementById("figura4")
        imagen1.src = "./imagenes/icon_" + listacancion[3].icono + ".svg";
        var imagen1 = document.getElementById("figura5")
        imagen1.src = "./imagenes/icon_" + listacancion[4].icono + ".svg";
        var imagen1 = document.getElementById("figura6")
        imagen1.src = "./imagenes/icon_" + listacancion[5].icono + ".svg";
        var imagen1 = document.getElementById("figura7")
        imagen1.src = "./imagenes/icon_" + listacancion[6].icono + ".svg";
        var imagen1 = document.getElementById("figura8")
        imagen1.src = "./imagenes/icon_" + listacancion[7].icono + ".svg";
        var imagen1 = document.getElementById("figura9")
        imagen1.src = "./imagenes/icon_" + listacancion[8].icono + ".svg";

        }
      
    };
    peticion.send();

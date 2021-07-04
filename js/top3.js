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
        console.log(largo);
        console.log(listacancion)

        var titulo1 = document.getElementById("ttop1")
        titulo1.innerHTML = listacancion[largo-1].nombre;
        var titulo2 = document.getElementById("ttop2")
        titulo2.innerHTML = listacancion[largo-2].nombre;
        var titulo3 = document.getElementById("ttop3")
        titulo3.innerHTML = listacancion[largo-3].nombre;

        var cancion1 = document.getElementById("ctop1")
        cancion1.src = "./canciones/" + listacancion[largo-1].ruta;
        var cancion2 = document.getElementById("ctop2")
        cancion2.src = "./canciones/" + listacancion[largo-2].ruta;
        var cancion3 = document.getElementById("ctop3")
        cancion3.src = "./canciones/" + listacancion[largo-3].ruta;

        }
      
    };
    peticion.send();

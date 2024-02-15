
// Segundo ejercicio

// Evento keydown, se produce cuando se presiona una tecla 
document.addEventListener('keydown',zoomIn);
 function zoomIn(e){
  // propiedad KEYCODE que va a leer el elemento en ASCII en este caso la tecla de arriba es el 38 
     if(e.keyCode == '38'){
       let myImage = document.getElementById('baloon');
       // utilizaremos la propiedad CLIENWIDTH ya que devuelve  el ancho visible de un elemento en píxeles, incluido el relleno, pero no el borde, la barra de desplazamiento o el margen.
       let changewith = myImage.clientWidth;
       if(changewith >= 120){
        alert('Es el nivel maximo')
        myImage.src = "explosion.png"
       } else {
        myImage.style.width = (changewith + 10) + "px";
       }
     }
  }

  window.addEventListener('keydown', zoomOut);
  function zoomOut(e){
     if(e.keyCode == '40'){
        let myImage = document.getElementById('baloon');
        let changewith = myImage.clientWidth;
        if(changewith == 20){
            alert ("Nivel máximo, ya está roto :(")
          location.reload()
        } else {
            myImage.style.width = (changewith - 10) + "px"
        }
     }
  }


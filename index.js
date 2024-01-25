//  window.addEventListener("DOMContentLoaded", function(){
//      document.getElementById("cambiar_color").addEventListener("click", function(){
//          let colordefondo = document.getElementById("color_text").value
//          console.log(colordefondo)
//          document.getElementById("cuerpo").setAttribute("bgcolor", colordefondo)
//      })
//  })

// function CambiarColor(){
//     let colordefondo = document.getElementById("color_text").value
//   console.log(colordefondo)
//   document.getElementById("cuerpo").style.backgroundColor = colordefondo
// }

window.addEventListener("load", function(){
    document.getElementById("cambiarcolor").addEventListener("click", function(){
        let colordeFondo = document.getElementById("colordefondo").value;
        document.getElementById("cuerpo").setAttribute("bgcolor", colordeFondo)
    })
})

//---------------

function pesos(){
    let pesos = document.getElementById("pesos").value
    let euros = 0.05
    let resultado = document.getElementById("resultado1")
    resultado.innerHTML = "Euros:" + (pesos*euros)
}

//-----------------

 let valor_inicial = 0
 function actualizarPantalla(){
     let observar_pantalla = document.getElementById("resultado2"); 
     observar_pantalla.innerHTML = `${valor_inicial}`
 } 
 function contador(){
  valor_inicial++;
  console.log(valor_inicial)
  actualizarPantalla();
 }
 function reiniciarContador(){
     valor_inicial = 0;
     actualizarPantalla();
 }
 
 document.getElementById("incrementar").addEventListener('click', contador);
 document.getElementById("reiniciar").addEventListener('click', reiniciarContador);

//---------------


let array = []

function guardar(){
    let casillas = {
        "nombre": document.getElementById("nombre").value,
        "edad": document.getElementById("edad").value,
        "correo": document.getElementById("correo").value,
        "curso": document.getElementById("curso").value,
        "matricula": document.getElementById("matricula").value
    }
    console.log(casillas)
  array.push(casillas)

  renderizado()
}

function renderizado(){
    let mostrar = document.getElementById("mostrar")
     mostrar.innerHTML = " "; 
    array.forEach(function(element){
        mostrar.innerHTML += `
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Correo</th>
      <th scope="col">Curso</th>
      <th scope="col">Matricula</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${element.nombre}</td>
      <td>${element.edad}</td>
      <td>${element.correo}</td>
      <td>${element.curso}</td>
      <td>${element.matricula}</td>
      <td><button type="button" class="btn btn-danger">Borrar</button></td>
      <td><button type="button" class="btn btn-warning">Editar</button></td>
    </tr>
  </tbody>
  </table>
        </div>
        `
    })
}
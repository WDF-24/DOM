
let array = JSON.parse(localStorage.getItem("casillas")) ? JSON.parse(localStorage.getItem("casillas")) : []

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
  localStorage.setItem("casillas", JSON.stringify(array))

  document.getElementById("nombre").value = ""
  document.getElementById("edad").value = ""
  document.getElementById("correo").value = ""
  document.getElementById("curso").value = ""
  document.getElementById("matricula").value = ""

  renderizado()
}

function renderizado(){
    let mostrar = document.getElementById("mostrar")
     mostrar.innerHTML = " "; 
    array.forEach(function(element, index){
        mostrar.innerHTML += `
        <div class="curso-tabla">
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
      <td><button type="button" class="btn btn-danger" onclick="borrar(${index})">Borrar</button></td>
      <td><button type="button" class="btn btn-warning" onclick="editar(${index})">Editar</button></td>
    </tr>
  </tbody>
  </table>
        </div>
        `
    })
}

function borrar(index){
console.log(array.splice(index,1))
array.splice(index,1)
localStorage.setItem("casillas", JSON.stringify(array))
renderizado()
}

function editar(index){
for(i=0; i < array.length; i++){
  if(i == index){
    document.getElementById("nombre").value = array[i].nombre
    document.getElementById("edad").value = array[i].edad
    document.getElementById("correo").value = array[i].correo
    document.getElementById("curso").value = array[i].curso
    document.getElementById("matricula").value = array[i].matricula

    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = `
    <td><button type="button" class="btn btn-primary" onclick="reguardar(${i})">Guardar</button></td>
    <td><button type="button" class="btn btn-success" onclick="salir(this)">Salir</button></td>
    `
  }
}
}

function reguardar(i){
  let casillas = {
    "nombre": document.getElementById("nombre").value,
    "edad": document.getElementById("edad").value,
    "correo": document.getElementById("correo").value,
    "curso": document.getElementById("curso").value,
    "matricula": document.getElementById("matricula").value
}

array[i] = casillas

localStorage.setItem("casillas", JSON.stringify(array))
document.getElementById("nombre").value = ""
document.getElementById("edad").value = ""
document.getElementById("correo").value = ""
document.getElementById("curso").value = ""
document.getElementById("matricula").value = ""

renderizado()
}

function salir(e){
e.parentElement.remove()
location.reload();
renderizado() 
}

renderizado()
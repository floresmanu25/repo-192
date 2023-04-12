let nombreUsuario = "pepe"
let apellidoUsuario = "suarez"
let edadUsuario = 27

const usuario = {
    nombre: "Pepe",
    apellido: "suarez",
    edad: 27
}
usuario. estaCasado = verdadero



/* for(const usuario of usuarios){
 consola.log(usuario.nombre + " " + usuario.apellido )
} */

consola. log(documento)

DOM = > modelo de objetos de documento

/* document.write("<h2>Hola</h2>") */
/* let nombre = prompt("ingrese su nombre")
const tituloHTML = document.getElementById("titulo")
consola.log(tituloHTML.innerText)
tituloHTML.innerText = "hola" + nombre */





/* for(let i = 1; i <= 20; i = i + 1){
 consola.log("Hola")
    contenedorHTML.innerHTML += "<h2>Hola</h2>"
} */

const usuarios = [
    {
        nombre: "Pepe",
        apellido: "suarez",
        edad: 27
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "pepesito",
        apellido: "suarez",
        edad: 45
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    },
    {
        nombre: "mariam",
        apellido: "lopez",
        edad: 24
    }
]

const contenedorHTML = documento. getElementById("contenedor")

for(const usuario de usuarios){
    contenedorHTML. innerHTML += `
    <div class="card">
 <h2>Nombre: ${usuario. nombre}</h2>
 <h3>Apellido: ${usuario. apellido}</h3>
 <p>Edad: ${usuario. edad}</p>
        <button>Ver detalle</button>
    </div>
    `
}

const formularioUsuarioHTML = documento. getElementById("formularioUsuario")
formularioUsuarioHTML. addEventListener("submit", (evento) => {
    evento. preventDefault()
    /* consola.log(evento) */
    consola. log(formularioUsuarioHTML. apellido. valor)
})
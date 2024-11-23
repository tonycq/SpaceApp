const url ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15"


async function listaImagenes(){

try{
let fetchImagen = await fetch(url)
let dataImagenes = await fetchImagen.json()

const card = document.querySelector("[data-ul]")

dataImagenes.forEach(element => {
    const contenido =
    `
    <li class="card">
                    <img class="card__image" src="${element.url}" alt="imagen">
                    <h3 class="card__title">${element.title}</h3>
    `
    card.innerHTML = card.innerHTML + contenido
})



}

catch(error){ 
    console.log(error)
}

}

listaImagenes()



/* 
---------conexion a la api usando then y cath------
function listaImagenes(){
fetch(url)
.then(response => response.json())
.then(dataImagenes =>{
    console.log(dataImagenes)


const card = document.querySelector("[data-ul]")

dataImagenes.forEach(element => {
    const contenido =
    `
    <li class="card">
                    <img class="card__image" src="${element.url}" alt="imagen">
                    <h3 class="card__title">${element.title}</h3>
    `
    card.innerHTML = card.innerHTML + contenido
})


})
.catch(error => console.log(error))

}


listaImagenes() */


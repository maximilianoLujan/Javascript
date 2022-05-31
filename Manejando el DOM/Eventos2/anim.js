document.addEventListener("click",(e)=>{
    if (e.target.className === "botones"){
        alert(`Esta apretando un boton`)
    }
    if (e.target.className === "contenedor1"){
        alert(`Esta apretando el primer contenedor`)
    }
    if (e.target.className === "contenedor2"){
        alert(`Esta apretando el segundo contenedor`)
    }
    if (e.target.className === "contenedor3"){
        alert(`Esta apretando el contenedor 3`)
    }
    if (e.target.className === "imagenes1"){
        alert(`Esta apretando la imagen de futbol`)
    }
    if (e.target.className === "imagenes1"){
        alert(`Esta apretando la imagen de gimnasio`)
    }
})

const $midiv1 = document.querySelector(".div1"),
$midiv2 = document.querySelector(".div2"),
$midiv3 = document.querySelector(".div3");


$midiv3.addEventListener("dblclick",(e)=>{
    console.log(`Usted presiono el ${e.target.className}`)
})


//Agregando un prevemntdefault a un enlace


const $miboton = document.querySelector("enlaces");
$miboton.addEventListener("click",(e)=>{
    e.preventDefault;
})
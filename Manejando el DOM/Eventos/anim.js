function holaMundo(){
    alert("A ver si anda");
}



const $miid = document.getElementById("boton-dinamico");
$miid.onclick = (e=>{
    alert("A ver si anda el otro")
})

const $miid2 = document.getElementById("boton-multiple");
$miid2.addEventListener("click",e=>{
    alert("Este es el boton multiple")
})
$miid2.addEventListener("click",e=>{
    alert("Este es el boton multiple 2")
})

//Manejando el flujo de eventos
const $miscontenedores = document.querySelectorAll(".miseccion div");
console.log($miscontenedores);
function funcionEvento(e){
    console.log(`Este es el div numero ${this.className}`)
}
$miscontenedores.forEach(div =>{
    div.addEventListener("click",funcionEvento);
})
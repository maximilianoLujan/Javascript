function holaMundo(){
    alert("A ver si anda");
}



const $miid = document.getElementById("boton-dinamico");
$miid.onclick = (e=>{
    alert("A ver si anda el otro")
})

const $miid2 = document.getElementById("boton-multiple");
$miid2.addEventListener("click",e=>{
    alert("A ver si anda el picachu")
})
$miid2.addEventListener("click",e=>{
    alert("A ver si anda el picachu multiple")
})
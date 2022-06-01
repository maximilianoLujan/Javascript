const $elmenu = document.querySelector(".elmenu"),
    $elboton = document.querySelector(".boton");

    let comprobar = false;
document.addEventListener("click",e=>{
    if (e.target.className === "boton"){
        if (comprobar){
            $elmenu.style.animationName = "mianimacion2"
            setTimeout(() => {
                $elmenu.style.display = "none";
            }, 2000);
            $elboton.style.backgroundImage = "url(Icons/menus.png)";
            comprobar=false;
        }else{
            $elmenu.style.animationName = "mianimacion"
            $elmenu.style.display = "flex";
            $elboton.style.backgroundImage = "url(Icons/cruzar.png)";
            comprobar = true;
        }
    }
})
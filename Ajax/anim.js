(()=>{
    const d = document,
    $milista = d.querySelector(".milista"),
    $mifragmento = d.createDocumentFragment();
    const json = new XMLHttpRequest();


    json.addEventListener("readystatechange",(e)=>{
        if (json.readyState !== 4) return;
        if ((json.status >= 200)&&(json.status < 300)){
            const info = JSON.parse(json.responseText);
            info.forEach(el =>{
                const $linumber = d.createElement("li"),
                    $liname = d.createElement("li"),
                    $licoment = d.createElement("li"),
                    $ul = d.createElement("ul"); 
                $linumber.textContent = `Comentario numero: ${el.id}`;
                $liname.textContent = `Realizado por: ${el.name}`;
                $licoment.textContent = `Contenido: ${el.body}`;
                $ul.appendChild($linumber);
                $ul.appendChild($liname);
                $ul.appendChild($licoment);
                $mifragmento.appendChild($ul);
            })
            $milista.appendChild($mifragmento)
        } else{
            $error = d.createElement("h1");
            $error.textContent = `No se pudo traer la informacion debido al error con codigo: ${json.status}`
            $error.style.textAlign = "center";
            $milista.appendChild($error)
        }
    });

    json.open("GET","https://jsonplaceholder.typicode.com/comments");
    json.send();
})();
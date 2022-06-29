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


(()=>{   
    const d = document,
    $milista = d.querySelector(".milistafetch"),
    $mifragmento = d.createDocumentFragment();

    async function obtenerdatos(){
        try {
            let json = await fetch("https://jsonplaceholder.typicode.com/users"),
                res = await json.json();

            if (!json.ok){
                throw {
                    error: `${json.status}`,
                    message: `${json.statusText}`
                }
            }
            res.forEach(el=>{
                const $linumber = d.createElement("li"),
                $liname = d.createElement("li"),
                $liuser = d.createElement("li"),
                $ul = d.createElement("ul"); 
                $linumber.textContent = `Comentario numero: ${el.id}`;
                $liname.textContent = `Realizado por: ${el.name}`;
                $liuser.textContent = `Username: ${el.username}`;
                $ul.appendChild($linumber);
                $ul.appendChild($liname);
                $ul.appendChild($liuser);
                $mifragmento.appendChild($ul);
            })
            $milista.appendChild($mifragmento);
        } catch (err) {
            console.log("estoy en el catch",err);
            const $texto = d.createElement("h2");
            $texto.textContent = `Ha surgido un error con el codigo:${err.error} y el mensaje: ${(err.message)||(`Error no determinado`)}`;
            $texto.style.textAlign ="center";
            $milista.appendChild($texto)
        } finally{
            console.log("Esto se ejecuta siempre")
        }
    }
    obtenerdatos();
})()

(()=>{
    const d = document,
        $milista = d.querySelector(".milistaaxios"),
        $mifragmento = d.createDocumentFragment();

    async function obtenerDatos(){
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;
                json.forEach(el=>{
                    const $linumber = d.createElement("li"),
                    $liname = d.createElement("li"),
                    $liuser = d.createElement("li"),
                    $ul = d.createElement("ul"); 
                    $linumber.textContent = `Comentario numero: ${el.id}`;
                    $liname.textContent = `Realizado por: ${el.name}`;
                    $liuser.textContent = `Username: ${el.username}`;
                    $ul.appendChild($linumber);
                    $ul.appendChild($liname);
                    $ul.appendChild($liuser);
                    $mifragmento.appendChild($ul);
                })
                $milista.appendChild($mifragmento)
        } catch (error) {
            const $mih2 = d.createElement("h2");
            $mih2.textContent = `Ha ocurrido el error: ${error.message}`;
            $mih2.style.textAlign = "center";
            $milista.appendChild($mih2)
            console.log(error);
        } finally{
            console.log("Esto se ejecutara siempre")
        }
    }
    obtenerDatos();
})()

 
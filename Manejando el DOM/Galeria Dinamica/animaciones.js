/*
Agregando imagen dinamicamente creando cada elemento y agregandole los atributos
const $container = document.querySelector("div");
console.log($container);

const $div = document.createElement("div");
const $img = document.createElement("img");
const $encabezado = document.createElement("h4");
$img.setAttribute("src","Imagenes/tecnologia.jpg");
$img.setAttribute("alt","tecnologia");
$encabezado.innerText = "Tecnologia";
$div.className += "contenedorimagenes--c";

//console.log($div);
//console.log($encabezado);
//console.log($img);

$div.appendChild($img);
$div.appendChild($encabezado);
//console.log($div);

$container.appendChild($div);

//Agregando imagen dinamicamente con el metodo InnerHTML
const $div2 = document.createElement("div");
$div2.className += "contenedorimagenes--c";
$div2.innerHTML +=  `<img src="Imagenes/voley.jpg" alt="voley">`;
$div2.innerHTML +=  `<h4>Voley</h4>`

$container.appendChild($div2);


//Probando a recorrer todos los nombres de las clases de una etiqueta HTML
let contador = 1;
($container.classList).forEach(el =>{
    //console.info(`La clase numero ${contador} es: ${el}`);
    contador++;
});




//Realizando el agregado dinamico pero con template
const   $micontenedor = document.querySelector(".contenedorimagenes") 
    $mitemplate = document.getElementById("template--c").content,
    $mifragmento2 = document.createDocumentFragment()

const arr = [
    {
        img: "Imagenes/perros.jpg",
        tittle: "perros"
    },
    {
        img: "Imagenes/auto.jpg",
        tittle: "Auto"
    }
]


arr.forEach(el => {
    $mitemplate.querySelector("img").setAttribute("src",el.img);
    $mitemplate.querySelector("img").setAttribute("alt",el.tittle);
    $mitemplate.querySelector("h4").textContent = el.tittle;

    let $clone = document.importNode($mitemplate,true);
    $mifragmento2.appendChild($clone);
})
$micontenedor.appendChild($mifragmento2);




/*La forma adecuada de agregar elementos dinamicamente es mediante document.CreateDocumentFragment() Es mas optima ya que no le pide tantos recursos al navegador del usuario*/
const deportes = ["Futbol","Escritorio","Gimnasio","Libros","Paisaje","Salud","Tecnologia","Voley"];

const $miul = document.createElement("ul");
const $mifragmento = document.createDocumentFragment();

//console.log($miul);
//console.log($mifragmento);

deportes.forEach(el =>{
    const $mili = document.createElement("li");
    $mili.innerText += el;
    $mifragmento.appendChild($mili)
})
//console.log($mifragmento);
const $apartados = document.createElement("h2");
$apartados.innerHTML += "Todos Los Apartados";
document.body.appendChild($apartados);
$miul.appendChild($mifragmento)
document.body.appendChild($miul);


//Agregando elementos con los nuevos metodos de javascript

const $mycontent = document.querySelector("div"),
    $mydiv = document.createElement("div"),
    $myimage = document.createElement("img"),
    $mytext = document.createElement("h4");


$myimage.setAttribute("src","Imagenes/auto.jpg");
$myimage.setAttribute("alt","auto");
$mytext.insertAdjacentText("afterbegin","Auto");
$mydiv.className += "contenedorimagenes--c";
$mydiv.append($myimage);
$mydiv.append($mytext);

let $clone = $mydiv.cloneNode(true);




$mycontent.prepend($clone);
$mycontent.append($mydiv);

/*
    prepend
    append
    before 
    after
*/
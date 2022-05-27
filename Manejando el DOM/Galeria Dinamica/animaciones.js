//Agregando imagen dinamicamente creando cada elemento y agregandole los atributos
const $container = document.querySelector("div");
console.log($container);

const $div = document.createElement("div");
const $img = document.createElement("img");
const $encabezado = document.createElement("h4");
$img.setAttribute("src","Imagenes/tecnologia.jpg");
$img.setAttribute("alt","tecnologia");
$encabezado.innerText = "Tecnologia";
$div.className += "contenedorimagenes--c";

console.log($div);
console.log($encabezado);
console.log($img);

$div.appendChild($img);
$div.appendChild($encabezado);
console.log($div);

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
    console.info(`La clase numero ${contador} es: ${el}`);
    contador++;
});

/*La forma adecuada de agregar elementos dinamicamente es mediante document.CreateDocumentFragment() Es mas optima ya que no le pide tantos recursos al navegador del usuario*/

const deportes = ["Futbol","Escritorio","Gimnasio","Libros","Paisaje","Salud","Tecnologia","Voley"];

const $miul = document.createElement("ul");
const $mifragmento = document.createDocumentFragment();

console.log($miul);
console.log($mifragmento);

deportes.forEach(el =>{
    const $mili = document.createElement("li");
    $mili.innerText += el;
    $mifragmento.appendChild($mili)
})
console.log($mifragmento);
const $apartados = document.createElement("h2");
$apartados.innerHTML += "Todos Los Apartados";
document.body.appendChild($apartados);
$miul.appendChild($mifragmento)
document.body.appendChild($miul);

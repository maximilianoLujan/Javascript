//Practicando symbols() -----> Para definir atributos privados en los objetos
const MAXI = Symbol();
const numero = Symbol();

const objeto = {
    [MAXI]: "holanda",
    MAXI: "MIRA ESTO"
}
objeto.numero = 5;
objeto.num = 5;
objeto[numero] = function(){
    //console.log(`Esto es lo que sucede`)
}
//console.log(objeto)
objeto[numero]();
//Practicando sets ------->Arreglo Mejorado
//.has() ------>Pregunta si el set contiene un elemento
//.clear() ----->Borra todos los elementos del arreglo
//Array.from() ------>Convierte el set en un arreglo
//
const setDeMaxi = new Set();

setDeMaxi.add(5)
setDeMaxi.add(5);
setDeMaxi.add("maxi");
setDeMaxi.add(undefined);
setDeMaxi.add("maxi")
//console.log(setDeMaxi)

/*for (let item of setDeMaxi){
    console.log(item)
}*/

let arreglo = Array.from(setDeMaxi);
//console.log(arreglo)

setDeMaxi.delete(undefined)
//console.log(setDeMaxi)

//console.log(setDeMaxi.has(5))

//Practicando maps
//set        ------>Seteamos las llaves y valores
//.size()    ------>Longitud del mapa
//has()      -------->Evalua si existe la llave
//.get()     ------->Obtenemos el valor de la llave
//.delete()  ------->Eliminamos el valor de la llave

var mapMaxi = new Map()
mapMaxi.set("nombre","maxi");
mapMaxi.set("apellido","lujan");
mapMaxi.set("edad",20);
//console.log(mapMaxi);
//console.log(mapMaxi.get("edad"))
mapMaxi.delete("apellido");
//console.log(mapMaxi)

/*for (let [key,value] of mapMaxi){
    console.log(`key: ${key} value: ${value}`)
}*/



//Weaksets and Weakmaps ------> Solo aceptan objetos
//No tienen size(), no se pueden iterar
//No hay forma de obtener las claves dentro de los weakmaps
var mapadevil = new WeakMap();
var setDevil = new WeakSet();
var objeto1 ={
    valor: "1"
}
var objeto2 ={
    valor: "1"
}
var objeto3 ={
    valor: "1"
}
//console.log(setDevil);

setDevil.add(objeto1);
setDevil.add(objeto2);
setDevil.add(objeto3);
//console.log(setDevil.has(objeto1));
//console.log(setDevil);


//console.info(`Este es un mapa`)
mapadevil.set(objeto1,3);
mapadevil.set(objeto2,6);
mapadevil.set(objeto3,"sucio");
//console.log(mapadevil);
//console.log(mapadevil.has(objeto1));
//console.log(mapadevil.get(objeto1));

objeto1 = null;
//console.log(mapadevil);





//Iterables y Iterators
const iterable = [3,6,4,12];
const iterador = iterable[Symbol.iterator]();

//console.log(iterable);
//console.log(iterador);
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

let next = iterador.next();
while(!next.done){
    //console.log(next.value)
    next = iterador.next();
}




//A partir de aca seran los apuntes sobre el DOM (Modificando el Document)
document.write("<h2>Este h2 esta escrito desde javascript</h2>");
/*Elementos del Dom*/
//document.getElementById()
//document.querySelector() un selector cualquiera
//document.querySelectorAll()

/*Obtener y modificar atributos*/
//document.documentElement.lang; 
//document.documentElement.getAttribute("lang"); Forma correcta
//document.documentElement.lang = "es";
//document.documentElement.setAttribute("lang","es");
//document.documentElement.hasAttribute("lang");
//document.documentElement.removeAttribute("lang");

/*Estilos*/
//document.documentElement.style.backgroundColor;
//document.documentElement.getAttribute("style");
//
const miTexto = document.querySelector("h1")
//console.log(window.getComputedStyle(miTexto));
//console.log(miTexto.setAttribute("color","aqua"))
//miTexto.style.setProperty("color","red");
//miTexto.style.setProperty("background-color","blue");
//miTexto.style.backgroundColor = "blue";

/*variables css o Custom Properties*/

/* Clases CSS */
//console.log(miTexto)
//console.log(miTexto.className);
//console.log(miTexto.classList);
//miTexto.classList.add();
//miTexto.classList.contains()
//miTexto.classList.remove()
//miTexto.classList.toggle(); ---> Si existe la clase la borra y si no existe la agrega
//
//miTexto.classList.replace("","") --->Remplaza la clase por otra

/* Texto y HTML */
//const $miidDOM = document.getElementById("parr");
//console.log($miidDOM);
//$miidDOM.innerHTML = "<br><p>Este es otro texto<p/>"
//$miidDOM.textContent = "<br>Esto es test content";
//$miidDOM.outerHTML = "<br><p>Este es otro texto<p/><br>"


/* DOM Traversing (Recorriendo el DOM) */

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

console.log(iterable);
console.log(iterador);
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

let next = iterador.next();
while(!next.done){
    console.log(next.value)
    next = iterador.next();
}



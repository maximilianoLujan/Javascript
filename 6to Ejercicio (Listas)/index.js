var asignaturas =[`Matematicas`,`Fisica`,`Quimica`,`Historia`,`Lengua`];

//Imprime lista por pantalla
asignaturas.forEach(valor=>{
    console.log(valor)
})

//Imprime lista por pantalla
asignaturas.forEach(valor=>{
    console.log(` Yo Estudio ${valor} ` )
})


//Ordenar de menor a mayor
var listaNumeros =[5,8,3,9,2,6,324,3,5764,745,25];
listaNumeros.sort(function(a,b){
    return a- b;
});

//Encontrar el menor en una lista
var listaPrecios =[50, 75, 46, 22, 80, 65, 80];
var m = Math.min.apply(null, listaPrecios);
console.log(m);

//Encontrar el mayor en una lista
var may = Math.max.apply(null,listaPrecios);
console.log(may);


const constante = 100;
for (let i = 1; i <= constante;i++){
    var auxiliar =calcularparidad(i);
    console.log(`El numero ${i} es ${auxiliar}`);
}
function calcularparidad(i){
    if ((i % 2) == 0){
        return("par");
    }else{
        return("impar");
    }
}
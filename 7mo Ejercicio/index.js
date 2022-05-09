//Ejercicio numero 1
function calcularLongitud(cadena){
    if (typeof(cadena)=== "string"){
        return `La cadena tiene ${cadena.length} caracteres `;
    }
    return `El tipo ingresado no es un string, por lo tanto no se pueden obtener los caracteres`;
}

//console.log(calcularLongitud("anda perfecto"));


//Ejercicio numero 2
const recortarTexto = (cadena = "",long = undefined)=>
    (!cadena)
        ?console.warn("No ingresaste una cadena de texto")
        :(long === undefined)
            ?console.warn("No ingresaste la longitud")
            :(long < cadena.length)
                ?console.log(`La nueva cadena es ${cadena.slice(0,long)}`)
                :console.warn("La longitud que desea recortar es mayor a la cadena en si")

//console.log(recortarTexto("Maximiliano"));
//console.log(recortarTexto("Maximiliano", 20));
//console.log(recortarTexto("maximiliano",4));

//Ejercicio numero 3
const separarCadena = (cadena="",separador = undefined)=>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:(separador === undefined)
    ?console.warn("No ingresaste el caracter separador")
    :console.log(cadena.split(separador))


//separarCadena("este texto va a separar todas las e hola","e");
//separarCadena("Hola mundo");


//Ejercicio numero 4
const devolverTextoXVeces = (texto="",repetir = undefined)=>{
    if (texto.length === 0) return(console.warn("No ingresaste el texto"));
    if (repetir===undefined) return(console.warn("No ingresaste el numero a repetir"));
        let cadena ="";
        for (var i = 0;i < repetir;i++){
            cadena = cadena + texto + " ";
        }
        console.log(cadena);
}
devolverTextoXVeces();
devolverTextoXVeces("hola");
devolverTextoXVeces("hola",5);
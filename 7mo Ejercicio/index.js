//Programa una funcion que cuente el numero de caracteres de una cadena de texto
function calcularLongitud(cadena){
    if (typeof(cadena)=== "string"){
        return `La cadena tiene ${cadena.length} caracteres `;
    }
    return `El tipo ingresado no es un string, por lo tanto no se pueden obtener los caracteres`;
}
//console.log(calcularLongitud("anda perfecto"));





//Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicado.
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





//Programa una funcion que dada un string te devuelva un array de textos separados por cierto caracter.
//mifuncion("hola que tal"," ") devolvera ["hola","que","tal"];
const separarCadena = (cadena="",separador = undefined)=>
(!cadena)
?console.warn("No ingresaste una cadena de texto")
:(separador === undefined)
    ?console.warn("No ingresaste el caracter separador")
    :console.log(cadena.split(separador))


//separarCadena("este texto va a separar todas las e hola","e");
//separarCadena("Hola mundo");





//Programa una funcion que devuelva un texto x veces
const devolverTextoXVeces = (texto="",repetir = undefined)=>{
    if (texto.length === 0) return(console.warn("No ingresaste el texto"));
    if (repetir===undefined) return(console.warn("No ingresaste el numero a repetir"));
        let cadena ="";
        for (var i = 0;i < repetir;i++){
            cadena = cadena + texto + " ";
        }
        console.log(cadena);
}
//devolverTextoXVeces();
//devolverTextoXVeces("hola");
//devolverTextoXVeces("hola",5);





//Programa una funcion que invierta las palabras de una cadena de texto.
const invertirCadena = (cadena="")=>
    (cadena.length === 0)
        ?console.warn("La cadena que ingreso esta vacia")
        :console.info(cadena.split("").reverse().join(""))

//invertirCadena();
//invertirCadena("hola mundo");





//Programa una funcion que valide si una palabra dada es palindromo
const esPalindormo = (cadena="")=>{
    if (!cadena) return(console.warn("La cadena esta vacia"))
    console.warn((cadena.split("").reverse().join("").toLowerCase()) === cadena.toLowerCase() )
}
//esPalindormo("Hola Mundo");
//esPalindormo();





//Ejercicio 7
const eliminarPatron = (cadena="",patron="")=>{
    if (!cadena) return(console.warn("La cadena esta vacia"))
    if (!patron) return(console.warn("El patron esta vacio"))
    nuevacadena = cadena.replaceAll(patron,"");
    return(console.info(`La nueva cadena es: ${nuevacadena}`));
}

//liminarPatron("","lo");
//liminarPatron("hola mundo");
//liminarPatron("hola mundo adios mundo pero sin el mundo","mundo");
//liminarPatron("hola mundo adios mundo pero sin el mundo","unicornio");





//Programa una funcion que dado un numero, diga si este es capicua o no
const esCapicua = (i=0)=>{
    if (!i) return(console.warn("No ingreso un numero"))
    if (typeof(i) !== "number") return(console.warn("No ingreso un numero"))
    return( console.info(((i.toString().split("").reverse().join("")) === i.toString())));
}
//esCapicua(4568945);
//esCapicua(12344321);
//esCapicua(12.3);
//esCapicua(12.21)
//esCapicua("neuquen");





//Programa una funcion que devuelva el factorial de un numero
const factorial = (i = 0)=>{
    if (i === 0) return(console.info("El factorial de 0 es 1"))
    if (i < 0 ) return(console.warn("Ingresaste un numero negativo"))
    if (typeof(i) !== "number") return(console.warn("No ingresaste un numero entero"))
    let auxiliar = 1;
    for (aux =1; aux <= i;aux++){
        auxiliar *= aux;
    }
    return(console.info(`El factorial de ${i} es: ${auxiliar}`))
}
//factorial(0);
//factorial(1);
//factorial(10);
//factorial("hola mundo");





//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const esPrimo = (numero=0)=>{
    if (!numero) return(console.warn("No ingresaste un numero"))
    if (typeof(numero)!== "number") return(console.warn("No ingresaste un numero"))
    if (numero < 0) return(console.warn("Los numeros negativos no pueden ser primos"))
    let contador = 0;
    for (i=0;i<=numero;i++){
         if ((numero % i)===0) contador++
    }
    if (contador===2) return(console.info(`El numero ${numero} es un numero primo`))
    return(console.info(`El numero ${numero} no es un numero primo`))
}
//esPrimo("HOLA MUNDO");
//esPrimo(10);
//esPrimo(7);
//esPrimo(0);
//esPrimo(1);
//esPrimo(-5);
//esPrimo(3.2)





// Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const esParOImpar = (numero = 0)=>{
    if (!numero) return(console.warn("No ingresaste un numero"))
    if (typeof(numero)!== "number") return(console.warn("No ingresaste un numero"))
    if ((numero % 2)===0) return(console.info(`El numero ${numero} es un numero par`))
    return(console.info(`El numero ${numero} es un numero impar`))
    
}
//esParOImpar();
//esParOImpar(2);
//esParOImpar(29);





//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const pasarGrados = (numero=0,caracter="")=>{
    if (!numero) return(console.warn("No ingresaste los grados"))
    if (!caracter) return(console.warn("No ingresaste la unidad"))
    if (typeof(numero)!== "number") return(console.warn("Por favor ingresa un numero"))
    if ((caracter.toLowerCase() !== "f") && (caracter.toLocaleLowerCase() !== "c")) return(console.warn("Por favor ingrese una unidad valida, f o c "))
    if (caracter.toLowerCase() === "c"){
        return(console.info(`${numero}° Celsius son ${numero + 32}° Fahrenheit`));
    }
    return(console.info(`${numero}° Fahrenheit son ${numero -32 }° Celsius`));
}
pasarGrados(3,"r");
pasarGrados(3,"c");
pasarGrados(30,"f");
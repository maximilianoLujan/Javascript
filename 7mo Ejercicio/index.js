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





//Programa una funci??n que determine si un n??mero es primo (aquel que solo es divisible por s?? mismo y 1) o no, pe. miFuncion(7) devolver?? true.
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





// Programa una funci??n que determine si un n??mero es par o impar, pe. miFuncion(29) devolver?? Impar.
const esParOImpar = (numero = 0)=>{
    if (!numero) return(console.warn("No ingresaste un numero"))
    if (typeof(numero)!== "number") return(console.warn("No ingresaste un numero"))
    if ((numero % 2)===0) return(console.info(`El numero ${numero} es un numero par`))
    return(console.info(`El numero ${numero} es un numero impar`))
    
}
//esParOImpar();
//esParOImpar(2);
//esParOImpar(29);





//Programa una funci??n para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolver?? 32??F.
const pasarGrados = (numero=0,caracter="")=>{
    if (!numero) return(console.warn("No ingresaste los grados"))
    if (!caracter) return(console.warn("No ingresaste la unidad"))
    if (typeof(numero)!== "number") return(console.warn("Por favor ingresa un numero"))
    if ((caracter.toLowerCase() !== "f") && (caracter.toLocaleLowerCase() !== "c")) return(console.warn("Por favor ingrese una unidad valida, f o c "))
    if (caracter.toLowerCase() === "c"){
        return(console.info(`${numero}?? Celsius son ${numero + 32}?? Fahrenheit`));
    }
    return(console.info(`${numero}?? Fahrenheit son ${numero -32 }?? Celsius`));
}
//pasarGrados(3,"r");
//pasarGrados(3,"c");
//pasarGrados(30,"f");





//15) Programa una funci??n para convertir n??meros de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolver?? 4 base 10.
const pasarDecimalBinario = (numero=0, base=0)=>{
    if (!numero) return(console.warn("No ingresaste los grados"))
    if (!base) return(console.warn("No ingresaste la unidad"))
    if ((base != 2)&&(base!=10)) return(console.warn("No ingresaste una base valida"))
    if (base === 2){
        auxiliar = parseInt(numero.toString(),2)
        return(console.info(`El numero ${numero} convertido a decimal es: ${auxiliar}`))
    }else{
        resultado = [];
        auxiliar = numero;
        resto = 0;
        while (auxiliar!==0){
            resultado.push(auxiliar % 2);
            auxiliar = Math.floor(auxiliar/2);
        }
        return console.info(`El numero ${numero} convertido a binario es: ${resultado.reverse().join("")}`)
    }
}
//pasarDecimalBinario(1000,54);
//pasarDecimalBinario(1000,2);
//pasarDecimalBinario(101011,2);
//pasarDecimalBinario(54,10);
//pasarDecimalBinario(422,10);





//Programa una funci??n que devuelva el monto final despu??s de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolver?? 800.
const aplicarDescuento = (numero=0,descuento=0)=>{
    return(console.info(`El precio original es de $${numero}, pero con el descuento del 
    ${descuento}%, el precio final es de $${numero -((numero * descuento)/100)}`))
}
//aplicarDescuento(1000,20);





//Programa una funci??n que dada una fecha v??lida determine cuantos a??os han pasado hasta el d??a de hoy, pe. miFuncion(new Date(1984,4,23)) devolver?? 37 a??os (en 2022).
const cuantosAniosPasaron = (a = new Date())=>{
    if (!a) return(console.warn("No ingresaste los datos"))
    if (a.getFullYear() > 2022) return(console.info("Ese dia todavia no ha llegado"))
    return(console.info(`Desde ${a.getFullYear()} hasta 2022 han pasado ${2022 - a.getFullYear()} a??os`))
}
//cuantosAniosPasaron(new Date(2023,4,5));
//cuantosAniosPasaron(new Date(1984,4,23));





//18) Programa una funci??n que dada una cadena de texto cuente el n??mero de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const devolverNroConsonantesYVocales = (palabra="")=>{
    if (!palabra) return(console.warn("No ingresaste una palabra"))
    let consonantes = 0;
    let vocales = 0;
    auxiliar = palabra.toLocaleLowerCase();
    for (i =0;i < auxiliar.length ;i++){
        if (auxiliar[i] === " ") continue
        else if ((auxiliar[i]=="a")||(auxiliar[i]=="e")||(auxiliar[i]=="i")||(auxiliar[i]=="o")||(auxiliar[i]=="u") ) vocales++;
        else consonantes++;
    }
    return(console.info(`La palabra ${palabra} tiene ${vocales} vocales y ${consonantes} consonantes`))
}
//devolverNroConsonantesYVocales();
//devolverNroConsonantesYVocales("HOlA MUNdO");
//devolverNroConsonantesYVocales("CUANTAS vocales tiene este TEXTO");





//Programa una funci??n que valide que un texto sea un nombre v??lido, pe. miFuncion("Jonathan MirCha") devolver?? verdadero.
const validarNombre = (nombre = "")=>{
    if (!nombre) return(console.warn("No ingresaste un nombre"));
    if (typeof(nombre) !== "string") return(console.warn("No ingresaste un texto"));
    let nombreregex = /^[a-z ,.'-]+$/i;
    if (!nombre) return(console.warn("No ingresaste nada"))
        if (nombreregex.test(nombre))
            return(console.info(`El nombre ${nombre} es valido`))
        else
            return(console.infoE(`l nombre ${nombre} no es valido`))
}
//validarNombre("Maximiliano Lujan*");
//validarNombre("Jonathan MirCha");
//validarNombre("Mateo 54321");






//20) Programa una funci??n que valide que un texto sea un email v??lido, pe. miFuncion("jonmircha@gmail.com") devolver?? verdadero.
const validarEmail = (mail ="")=>{
    if (!mail) return(console.warn("No ingresaste un email"))
    if (typeof(mail) !== "string") return(console.warn("No ingresaste un texto"));
    let expregular =  (/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i).test(mail);
    return (expregular)
        ?console.info(`El mail ${mail} es valido`)
        :console.warn(`El mail ${mail} no es valido`)
}
//validarEmail();
//validarEmail("jonmircha@gmail.com");
//validarEmail("maxilujan.com");
//validarEmail("maxilujan@");
//validarEmail("@gmail.com");





//21) Programa una funci??n que dado un array num??rico devuelve otro array con los n??meros elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolver?? [1, 16, 25].
const elevarArreglo = (array =[]) => {
    if (!array) return(console.warn("El arreglo esta vacio"));
    let auxiliar = [];
    array.forEach(x =>{
        if (typeof(x) !== "number"){
            auxiliar.push(-1);
            
        } else{
            x = x*x;
            auxiliar.push(x);
        } 
    })
    return(console.info(`El arreglo quedaria: ${auxiliar}`));
}

//console.info("Donde aparece un -1 es porque en esa posicion del arreglo no habia un numero")
//elevarArreglo([1,4,5]);
//elevarArreglo([1,4,5,"maxi",2.2]);





//22) Programa una funci??n que dado un array devuelva el n??mero mas alto y el m??s bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolver?? [99, -60].
const menorMayorDelArreglo = (array =[])=>{
    if (!array) return(console.warn("El arreglo esta vacio"));
    var check = false;
    array.forEach(x=>{
        if (typeof(x)!== "number"){
            check = true;
            return(console.warn("Solo puedes ingresar numeros en el arreglo"));
        }
    })
    var m = Math.min(...array);
    var M = Math.max(...array);
    if (!check) return(console.info(`El menor valor del arreglo es: ${m} y el mayor es: ${M}`))
}
//menorMayorDelArreglo([1,4,5,99,-60]);
//menorMayorDelArreglo([0,2,"hola"]);






//Programa una funci??n que dado un array de n??meros devuelva un objeto con 2 arreglos en el primero almacena los n??meros pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolver?? {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const paresEimpares = (array =[] )=>{
    if (!array) return(console.warn("El arreglo esta vacio"));
    var objeto = {
        pares: [],
        impares: []
    }
    array.forEach(x=>{
        if ((x % 2)===0) 
            objeto.pares.push(x);
        else 
            objeto.impares.push(x);
    })
    return(console.info(`Pares: ${objeto.pares} Impares: ${objeto.impares}`))
}
//paresEimpares([1,2,3,4,5,6,7,8,9,0]);
//paresEimpares([4,32,543,65,43,53243,2])






//24) Programa una funci??n que dado un arreglo de n??meros devuelva un objeto con dos arreglos, el primero tendr?? los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolver?? { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarAscDesc = (array="")=>{
    if (!array) return(console.warn("El arreglo esta vacio"));  
    const objeto = {
        ascendente: new Array(),
        descendente: new Array() 
    }
    var aux = array.sort((a,b)=> {
        return (a-b);
    })
    objeto.ascendente = aux;
    objeto.descendente = aux.slice().reverse();
    return(console.info(`Asc: ${objeto.ascendente} y Desc: ${objeto.descendente}`));
}
//ordenarAscDesc([7,5,7,8,6]);
//ordenarAscDesc([2,43,5,7,89,256]);






// Programa una funci??n que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolver?? ["x", 10, 2, "10", true].
const eliminarDuplicados = (array =[])=>{
    if (!array) return(console.warn("El arreglo esta vacio"));
    let arrayaux =[];
    array.forEach(x => {
        if (arrayaux.includes(x) !== true) arrayaux.push(x);

    }) 
    return(console.info(`El arreglo sin repetidos es: ${arrayaux}`));
}
//eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
//eliminarDuplicados([3,3,3,3,"hola mundo","hola mundo","3"]);






//26) Programa una funci??n que dado un arreglo de n??meros obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolver?? 4.5.
const promedioDeUnArray= (array=[])=>{
    if (!array) return(console.warn("El arreglo esta vacio"));
    suma=0;
    contador=0;
    array.forEach(x=>{
        if (typeof(x) !== "number") {
            return(console.warn(`Hay un elemento del arreglo que no es un numero`))
        }       
    })
    array.forEach(x=>{
        suma +=x;
        contador++;
    })
    return(console.info(`El promedio es de: ${suma/contador}`))

}
//promedioDeUnArray([9,8,7,6,5,4,3,2,1,0]);
//promedioDeUnArray([9,"hola mundo",7,6,5,4,3,2,1,0])
console.clear();
console.log("Iniciando analizador de frases...");
console.log("desde aquí se detallará todo el proceso...");

function obtenerFrase (){
    console.log("Primero solicitamos através de un prompt una frase al usuarío.");
    let frase = prompt("Dame una frase y analizaré, el número de caracteres, número de palabras, si es palíndromo, etc.");
    console.log("Al pedirlo por prompt nos devuelve un string");
    console.log("Esta es la verificación: "+typeof frase);

    if (frase == null || frase == ""){
        console.log("El usuario no a introducido ningún caracter o ha cancelado, le preguntamos si esto es correcto");
        var salir = confirm("¿Quieres salis sin introducir ninguna frase?")
        if (salir == true) {
            salirFunction();
        }else{
            obtenerFrase ();
        }
    } else {
        console.log("Pedimos al usuario que verifique la frase através de un confirm y almacenamos su respuesta");
        console.log("Esta es la frase introducida: "+frase);
        let confirmacion = confirm('Esta es tu frase: "'+frase+'" ¿Es correcto?')
        if (confirmacion == true){
            
            console.log("Si la frase es correcta devuelve "+confirmacion+" y procedemos a contar los caracteres");
            let totalCaracteres =frase.length
            console.log("Mostramos un alert con el total de los carcteres en este caso es de "+ totalCaracteres);
            alert('Para la frase "'+frase+'", el total de los caracteres es de '+ totalCaracteres+'.');
            
            let arrayFrase = frase.split(' ')
            let totalPalabras =arrayFrase.length
            console.log("Mostramos un alert con el total de las palabras en este caso es de "+ totalPalabras);
            alert('Para la frase "'+frase+'", el total de las palabras es de '+ totalPalabras+'.');
//          let sinA = frase.match(/a/gi).length;
            let sinA = totalCaracteres-(frase.replace(/a/gi,"").length);
            console.log(`La letra A o a aparece ${sinA} veces`);
            alert(`La letra A o a aparece ${sinA} veces`);


            let arrayFrasePorLetras = frase.split('')

            let arrayInvertido = arrayFrasePorLetras.reverse();
            let arrayPalindromo1 = arrayInvertido.toString();
            let arrayPalindromo = arrayPalindromo1.replace(/,/g,"");

            if (frase.toLowerCase() == arrayPalindromo.toLowerCase()){
                console.log("Mostramos un alert con el palindromo de la frase en este caso es: "+ arrayPalindromo+", un palindromo.");
                alert('La frase "'+frase+'", es un palindromo.');
                salirFunction();
            } else  {
                console.log('Mostramos un alert de la frase en este caso es: "'+ arrayPalindromo+'", no es un palindromo. "'+arrayPalindromo+'".');
                alert(`La frase "${frase}", no es un palindromo. "${arrayPalindromo}".`);
                salirFunction();
            }

        } else {
            console.log("Si la frase no es correcta devuelve "+confirmacion+" y procedemos a preguntarle de nuevo");
            obtenerFrase ();
        }
    }

    function salirFunction() {
        alert("Si deseas volver en otro momento deberás recargar la página. Gracias.");
        console.log("Como confirma que no quiere introducir frase alguna lo sacamos de la ejecución");
    }
}

setTimeout(() => {
    obtenerFrase ();
}, 3000);




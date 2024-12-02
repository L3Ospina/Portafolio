try {
    let numerador = 10;
    let denominador = prompt("Ingresa un denominador:");

    if (isNaN(denominador)) { // Verifica si lo ingresado no es un número
        //isNaN(variable) determina
        throw new Error("El denominador no es un número válido");
    } 

    denominador = Number(denominador); // Convertimos a número

    if (denominador === 0) { // Comprobamos la división por cero
        throw new Error("No se puede dividir por cero");
    } 

    let resultado = numerador / denominador;
    console.log("El resultado es: " + resultado);

} catch (error) {
    console.log("Error: " + error.message); // Mostramos el mensaje del error al usuario
}


/*
QUE ES EL isNaN()

console.log(isNaN(NaN));           // true
console.log(isNaN("texto"));       // true
console.log(isNaN("123"));         // false (se convierte a 123)
console.log(isNaN(undefined));     // true
console.log(isNaN(null));          // false (se convierte a 0)
*/

/*
Solo puedes crear un throw new Error("No se puede dividir por cero");
Por condicion
*/
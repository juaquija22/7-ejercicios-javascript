function frutaEmpacadaCorrectamente(entrada, salida) {
    let pila = [];
    let indiceEntrada = 0;

    for (let frutaSalida of salida) {
        // Meter frutas hasta que la que queremos sacar esté en la cima de la pila
        while (pila.at(-1) !== frutaSalida && indiceEntrada < entrada.length) {
            pila.push(entrada[indiceEntrada]);
            indiceEntrada++;
        }

        // Si la fruta deseada está en la cima, la sacamos
        if (pila.at(-1) === frutaSalida) {
            pila.pop();
        } else {
            return false; // No es posible respetar las reglas de pila
        }
    }
    return true; // Todas las frutas pudieron salir en orden válido
}

// Ejemplos
console.log(frutaEmpacadaCorrectamente(['manzana', 'banana', 'kiwi'], ['kiwi', 'banana', 'manzana'])); // true
console.log(frutaEmpacadaCorrectamente(['manzana', 'banana', 'kiwi'], ['banana', 'kiwi', 'manzana'])); // false

// Interacción con el usuario
let entrada = prompt("Frutas que entran (separadas por coma):").split(',').map(f => f.trim());
let salida = prompt("Frutas que salen (separadas por coma):").split(',').map(f => f.trim());

alert(frutaEmpacadaCorrectamente(entrada, salida) ? "SÍ se puede" : "NO se puede");

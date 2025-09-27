function decodespell(Spell) {
    // Diccionario de valores para cada símbolo
    const valores = {
        "☽": 1,
        "☾": 5,
        "♁": 10,
        "⚕": 50,
        "⚡": 100
    };

    let total = 0;

    for (let i = 0; i < Spell.length; i++) {
        let primero = valores[Spell[i]];      // valor actual
        let next = valores[Spell[i + 1]];     // valor siguiente

        // Si aparece un símbolo no válido → devolver NaN
        if (primero == undefined) return NaN;

        // Si el actual es menor que el siguiente, se resta (regla tipo números romanos)
        if (next !== undefined && primero < next) {
            total -= primero;
        } else {
            total += primero;
        }
    }

    return total;
}

// Entrada del usuario
const input = prompt("Ingrese el símbolo deseado");
const result = decodespell(input);

// Mostrar resultado
if (isNaN(result)) {
    alert("El símbolo no ha sido encontrado");
} else {
    alert("El resultado es = " + result);
}

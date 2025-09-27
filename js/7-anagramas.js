// Función que determina si dos palabras son anagramas
function esAnagrama(a, b) {
    // Convertimos ambas palabras a minúsculas, las separamos en letras,
    // las ordenamos alfabéticamente y las volvemos a unir.
    // Si las cadenas resultantes son iguales -> son anagramas.
    return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('');
}

// --------------------
// Pruebas en consola
// --------------------
console.log(esAnagrama('cinema', 'iceman'));   // true
console.log(esAnagrama('hello', 'world'));     // false
console.log(esAnagrama('Listen', 'Silent'));   // true
console.log(esAnagrama('evil', 'vile'));       // true

// --------------------
// Versión interactiva
// --------------------
let a = prompt("Primera palabra:");
let b = prompt("Segunda palabra:");

if (a && b) {
    let r = esAnagrama(a, b);
    console.log(`"${a}" y "${b}" son anagramas: ${r ? 'SÍ' : 'NO'}`);
    alert(r 
        ? `SÍ, "${a}" y "${b}" son anagramas` 
        : `NO, "${a}" y "${b}" no son anagramas`);
}

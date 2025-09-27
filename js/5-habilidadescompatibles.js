function portalFueraDeFase(portales) {
    let conteo = new Map();

    // Contar ocurrencias
    for (let letra of portales) {
        conteo.set(letra, (conteo.get(letra) || 0) + 1);
    }

    // Buscar el primer portal con solo una aparición
    for (let i = 0; i < portales.length; i++) {
        if (conteo.get(portales[i]) === 1) {
            return i;
        }
    }

    return -1;
}

// Ejemplos
console.log(portalFueraDeFase("aabbcdd")); // 4 → 'c'
console.log(portalFueraDeFase("aabbcc"));  // -1 → todos repetidos
console.log(portalFueraDeFase("zxyzzx"));  // 2 → 'y'

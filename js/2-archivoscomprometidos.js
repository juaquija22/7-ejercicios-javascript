function getCompromisedFiles(lastSafeDownload, droneLogs) {
  const compromised = new Set(); // Usamos Set para evitar IDs repetidos

  // Recorremos cada registro de los drones
  for (const [fileId, timestamp] of droneLogs) {
    // Si el archivo fue modificado DESPUÉS del último respaldo seguro
    if (timestamp > lastSafeDownload) {
      compromised.add(fileId); // Lo añadimos al Set
    }
  }

  // Convertimos el Set a array y lo ordenamos de menor a mayor
  return Array.from(compromised).sort((a, b) => a - b);
}

// -------------------------
// Ejemplo de uso
// -------------------------
const lastSafeDownload = 1670000000;
const droneLogs = [
  [42, 1670000500], // después → comprometido
  [13, 1670000000], // igual al límite → seguro
  [8, 1670000700],  // después → comprometido
  [8, 1670000001],  // después → comprometido (pero ya está agregado)
  [99, 1669999999], // antes → seguro
];

// Resultado esperado: [8, 42]
console.log(getCompromisedFiles(lastSafeDownload, droneLogs));

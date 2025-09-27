function detectarPlagio(base, frasesEstudiante) {
    // Filtramos solo las frases del estudiante que coincidan con alguna en la base
    return frasesEstudiante.filter(fraseEstudiante => {
        
        // Normalizamos la frase del estudiante (minúsculas, sin espacios extra, sin punto final ni signos)
        const normalizada = fraseEstudiante
            .toLowerCase()
            .trim()
            .replace(/[.!?]$/, '');
        
        // Revisamos si alguna frase de la base coincide con la del estudiante
        return base.some(fraseBase => {
            const baseNormalizada = fraseBase
                .toLowerCase()
                .trim()
                .replace(/[.!?]$/, '');
            
            return normalizada === baseNormalizada;
        });
    });
}

// ------------------
// Ejemplo en duro
// ------------------
const base = [
    'El conocimiento es poder.',
    'Aprender nunca es una pérdida de tiempo!',
    'Programar es divertid'
];

const frasesEstudiante = [
    'el conocimiento es poder',
    'Aprender nunca es una pérdida de tiempo ',
    'programar es divertido.',
    'La práctica hace al maestro'
];

console.log(detectarPlagio(base, frasesEstudiante)); // ["el conocimiento es poder", "Aprender nunca es una pérdida de tiempo "]

// ------------------
// Versión interactiva
// ------------------
let baseInput = prompt("Frases de la base (separadas por ;): ");
let estudianteInput = prompt("Frases del estudiante (separadas por ;):");

if (baseInput && estudianteInput) {
    // Convertimos las entradas en arrays de frases
    let arrBase = baseInput.split(';').map(f => f.trim());
    let arrEstudiante = estudianteInput.split(';').map(f => f.trim());
    
    // Detectamos coincidencias
    let resultado = detectarPlagio(arrBase, arrEstudiante);
    
    // Mostramos resultados en consola
    console.log(`Base: [${arrBase.join(', ')}]`);
    console.log(`Estudiante: [${arrEstudiante.join(', ')}]`);
    console.log(`Frases plagiadas: [${resultado.join(', ')}]`);
    
    // Y también en pantalla
    alert(`Frases plagiadas encontradas: ${resultado.length}\n${resultado.join('\n')}`);
}

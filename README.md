# Ejercicios de JavaScript

Una colección de ejercicios de programación en JavaScript que abordan diferentes algoritmos y problemas de lógica.

## 📁 Estructura del Proyecto

```
ejercicios javascript/
├── index.html          # Archivo HTML principal
├── js/                 # Directorio con ejercicios JavaScript
│   ├── 1-arkanus.js
│   ├── 2-archivoscomprometidos.js
│   ├── 3-frasesplagiadas.js
│   ├── 4-frutasemvasadas.js
│   ├── 5-habilidadescompatibles.js
│   ├── 6-puertasdelportaltemporal.js
│   └── 7-anagramas.js
└── README.md
```

## 🚀 Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. Modifica la línea 7 en `index.html` para cambiar qué ejercicio quieres ejecutar:
   ```html
   <script src="js/NOMBRE_DEL_EJERCICIO.js" defer></script>
   ```
3. Recarga la página para ejecutar el ejercicio seleccionado

## 📋 Lista de Ejercicios

### 1. Arkanus (`1-arkanus.js`)
**Descripción:** Decodificador de hechizos que convierte símbolos mágicos a números usando un sistema de numeración especial.

**Funcionalidad:**
- Convierte símbolos mágicos (☽, ☾, ♁, ⚕, ⚡) a valores numéricos
- Implementa lógica de sustracción para números romanos
- Maneja entrada de usuario con `prompt()`
- Valida símbolos no reconocidos

**Símbolos:**
- ☽ = 1
- ☾ = 5  
- ♁ = 10
- ⚕ = 50
- ⚡ = 100

**Ejemplo de uso:**
```javascript
decodespell("☽☾♁") // Retorna: 14
```

### 2. Archivos Comprometidos (`2-archivoscomprometidos.js`)
**Descripción:** Identifica archivos que fueron descargados después de un timestamp de seguridad.

**Funcionalidad:**
- Filtra archivos por timestamp
- Retorna IDs de archivos comprometidos ordenados
- Usa `Set` para evitar duplicados
- Solo muestra resultados en consola

**Estructura de datos:**
```javascript
const droneLogs = [
  [fileId, timestamp],
  [42, 1670000500],
  // ...
];
```

**Resultado esperado:** `[8, 42]`

### 3. Frases Plagiadas (`3-frasesplagiadas.js`)
**Descripción:** Detecta frases plagiadas comparando textos del estudiante contra una base de datos de frases sospechosas.

**Funcionalidad:**
- Compara frases ignorando mayúsculas/minúsculas
- Ignora espacios al inicio y final
- Ignora puntuación final (., !, ?)
- Retorna frases plagiadas en el orden original
- Interfaz interactiva con `prompt()`

**Ejemplo:**
- Base: `['El conocimiento es poder.', 'Aprender nunca es una pérdida de tiempo!']`
- Estudiante: `['el conocimiento es poder', ' Aprender nunca es una pérdida de tiempo ']`
- Resultado: `["el conocimiento es poder", "Aprender nunca es una pérdida de tiempo "]` ✅

### 4. Frutas Emvasadas (`4-frutasemvasadas.js`)
**Descripción:** Simula el proceso de empaque de frutas usando una pila (stack).

**Funcionalidad:**
- Verifica si es posible empacar frutas en el orden deseado
- Usa algoritmo de pila para simular el proceso
- Interfaz interactiva con `prompt()`
- Usa `pila.at(-1)` para acceder al último elemento

**Algoritmo:**
1. Mientras la fruta deseada no esté en la cima de la pila, empuja frutas de la entrada
2. Si la fruta deseada está en la cima, la saca
3. Si no es posible, retorna `false`

**Ejemplo:**
- Entrada: `['manzana', 'banana', 'kiwi']`
- Salida: `['kiwi', 'banana', 'manzana']` ✅

### 5. Habilidades Compatibles (`5-habilidadescompatibles.js`)
**Descripción:** Encuentra candidatos compatibles para un trabajo basado en sus habilidades.

**Funcionalidad:**
- Filtra candidatos que cumplan al menos 70% de las habilidades requeridas
- Comparación case-insensitive
- Retorna IDs de candidatos compatibles ordenados
- Interfaz interactiva con `prompt()`

**Criterio:** Candidato debe tener al menos 70% de las habilidades del trabajo.

**Estructura de datos:**
```javascript
const candidatos = [
  { id: 'juan', skills: ['JavaScript', 'React', 'Node', 'Git'] },
  // ...
];
```

### 6. Puertas del Portal Temporal (`6-puertasdelportaltemporal.js`)
**Descripción:** Encuentra la primera letra única en una secuencia de portales.

**Funcionalidad:**
- Cuenta frecuencia de cada letra usando objeto
- Retorna índice de la primera letra que aparece solo una vez
- Retorna -1 si todas las letras se repiten
- Interfaz interactiva con `prompt()`

**Algoritmo:**
1. Contar ocurrencias de cada letra
2. Buscar la primera letra con conteo = 1
3. Retornar su índice o -1

**Ejemplos:**
- `'quasar'` → 0 (q es única)
- `'xyxyxy'` → -1 (todas se repiten)
- `'aabbccddeeffg'` → 12 (g es única)

### 7. Anagramas (`7-anagramas.js`)
**Descripción:** Verifica si dos palabras son anagramas.

**Funcionalidad:**
- Comparación case-insensitive
- Ordena caracteres para comparación
- Interfaz interactiva con `prompt()`
- Algoritmo simple y eficiente

**Algoritmo:**
1. Convertir ambas palabras a minúsculas
2. Dividir en caracteres, ordenar y unir
3. Comparar los resultados

**Ejemplos:**
- `'cinema'` y `'iceman'` → ✅
- `'hello'` y `'world'` → ❌
- `'Listen'` y `'Silent'` → ✅

## 🛠️ Tecnologías Utilizadas

- **JavaScript (ES6+)**
- **HTML5**
- **Algoritmos de estructuras de datos:**
  - Pilas (Stack)
  - Conjuntos (Set)
  - Arrays y objetos
  - Mapas (Map)

## 📝 Características

- ✅ Ejercicios interactivos con entrada de usuario
- ✅ Validación de entrada
- ✅ Manejo de errores
- ✅ Código limpio y comentado
- ✅ Ejemplos de prueba incluidos
- ✅ Interfaz de consola y alertas
- ✅ Algoritmos optimizados

## 🎯 Objetivos de Aprendizaje

- Algoritmos de ordenamiento y búsqueda
- Estructuras de datos (pilas, conjuntos, mapas)
- Manipulación de strings y arrays
- Lógica de programación
- Interacción con el usuario
- Validación de datos
- Algoritmos de comparación y filtrado

## 📚 Conceptos Aplicados

- **Algoritmos:** Búsqueda, filtrado, ordenamiento, conteo
- **Estructuras de datos:** Arrays, Sets, Stacks, Objects, Maps
- **Programación funcional:** `map()`, `filter()`, `sort()`, `some()`
- **Manejo de strings:** `split()`, `join()`, `toLowerCase()`, `trim()`, `replace()`
- **Validación:** Verificación de tipos y rangos
- **Expresiones regulares:** `/[.!?]$/` para puntuación final

## 🔧 Funciones Principales

| Ejercicio | Función Principal | Parámetros | Retorno |
|-----------|------------------|------------|---------|
| Arkanus | `decodespell(Spell)` | String de símbolos | Número o NaN |
| Archivos | `getCompromisedFiles(lastSafe, logs)` | Timestamp, Array | Array de IDs |
| Plagio | `detectarPlagio(base, frases)` | Array, Array | Array filtrado |
| Frutas | `frutaEmpacadaCorrectamente(entrada, salida)` | Array, Array | Boolean |
| Habilidades | `candidatosCompatibles(requisitos, candidatos)` | Array, Array | Array de IDs |
| Portal | `portalFueraDeFase(portales)` | String | Número (índice) |
| Anagramas | `esAnagrama(a, b)` | String, String | Boolean |

## 🚀 Ejecución Rápida

Para probar cualquier ejercicio:

1. **Edita `index.html`** línea 7:
   ```html
   <script src="js/NOMBRE_EJERCICIO.js" defer></script>
   ```

2. **Abre en navegador** y sigue las instrucciones del `prompt()`

3. **Revisa la consola** para ver resultados detallados

## 📖 Notas de Implementación

- **Arkanus**: Implementa lógica de sustracción similar a números romanos
- **Archivos**: Usa `Set` para eliminar duplicados automáticamente
- **Plagio**: Normaliza texto ignorando mayúsculas, espacios y puntuación
- **Frutas**: Simula pila con `push()`, `pop()` y `at(-1)`
- **Habilidades**: Calcula porcentaje de compatibilidad (70% mínimo)
- **Portal**: Cuenta frecuencias y busca primera ocurrencia única
- **Anagramas**: Ordena caracteres para comparación eficiente

---

*Proyecto de ejercicios de JavaScript para práctica y aprendizaje de algoritmos.*
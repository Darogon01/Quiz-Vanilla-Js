//The literal object programming of questions from the Class model Questions.
export const dataProgramming = [
    {
      question: "¿Cuál es la diferencia entre `let` y `var` en JavaScript?",
      choices: [
        "`var` tiene un alcance de bloque, `let` de función",
        "`let` tiene alcance de bloque, `var` tiene alcance de función",
        "`let` se usa para constantes, `var` para variables",
        "No hay diferencia entre `let` y `var`"
      ],
      answer: "`let` tiene alcance de bloque, `var` tiene alcance de función",
    },
    {
      question: "¿Qué método en JavaScript se utiliza para combinar todos los elementos de un array en una sola cadena?",
      choices: ["join()", "concat()", "merge()", "push()"],
      answer: "join()",
    },
    {
      question: "¿Cuál es el resultado de `typeof null` en JavaScript?",
      choices: ["'null'", "'undefined'", "'object'", "'function'"],
      answer: "'object'",
    },
    {
      question: "¿Qué es una 'promesa' en JavaScript?",
      choices: [
        "Un objeto que representa la finalización o fracaso de una operación asincrónica",
        "Una función que siempre devuelve un valor",
        "Un tipo de bucle especial",
        "Un patrón de diseño"
      ],
      answer: "Un objeto que representa la finalización o fracaso de una operación asincrónica",
    },
    {
      question: "¿Cuál es el propósito de `use strict` en JavaScript?",
      choices: [
        "Permite código en ECMAScript6",
        "Activa el modo estricto, mejorando el manejo de errores",
        "Evita el uso de variables globales",
        "Habilita funciones de depuración"
      ],
      answer: "Activa el modo estricto, mejorando el manejo de errores",
    },
    {
      question: "¿Qué es un 'closure' en JavaScript?",
      choices: [
        "Una función junto con su entorno léxico",
        "Una función que no retorna un valor",
        "Una variable local dentro de una función",
        "Una estructura de control de flujo"
      ],
      answer: "Una función junto con su entorno léxico",
    },
    {
      question: "¿Cuál de estas estructuras de datos es inmutable en JavaScript?",
      choices: ["Array", "Set", "Map", "String"],
      answer: "String",
    },
    {
      question: "¿Cómo defines una función anónima en JavaScript?",
      choices: [
        "`function () { ... }`",
        "`function anonymous() { ... }`",
        "`var function = { ... }`",
        "`anonymous function() { ... }`"
      ],
      answer: "`function () { ... }`",
    },
    {
      question: "¿Cuál es la salida de `console.log(2 + '2')` en JavaScript?",
      choices: ["'4'", "'22'", "NaN", "SyntaxError"],
      answer: "'22'",
    },
    {
      question: "¿Cuál es el propósito de la función `Array.prototype.map()` en JavaScript?",
      choices: [
        "Recorrer un array y modificar cada elemento en su lugar",
        "Retornar un nuevo array con los resultados de aplicar una función a cada elemento",
        "Reducir un array a un único valor",
        "Filtrar un array por una condición"
      ],
      answer: "Retornar un nuevo array con los resultados de aplicar una función a cada elemento",
    },
    {
      question: "¿Qué significa REST en términos de diseño de APIs?",
      choices: [
        "Real-time Exchange and Synchronization Technology",
        "Representational State Transfer",
        "Remote State Transmission",
        "Reliable Server Transfer"
      ],
      answer: "Representational State Transfer",
    },
    {
      question: "¿Cuál es la principal diferencia entre '==' y '===' en JavaScript?",
      choices: [
        "'==' compara valores sin tener en cuenta el tipo, '===' compara tanto el valor como el tipo",
        "'==' compara solo valores de tipo string, '===' compara todos los tipos",
        "'===' es una comparación asíncrona",
        "No hay diferencia"
      ],
      answer: "'==' compara valores sin tener en cuenta el tipo, '===' compara tanto el valor como el tipo",
    },
    {
      question: "¿Qué significa SOLID en el contexto de diseño de software?",
      choices: [
        "Son principios para el diseño de interfaces de usuario",
        "Es un modelo para desarrollar bases de datos",
        "Es un conjunto de principios para el diseño de software orientado a objetos",
        "Es un acrónimo para un tipo de pruebas unitarias"
      ],
      answer: "Es un conjunto de principios para el diseño de software orientado a objetos",
    },
    {
      question: "¿Qué hace la función `reduce()` en JavaScript?",
      choices: [
        "Recorre un array y reduce cada valor a uno más pequeño",
        "Recorre un array y aplica una función para obtener un único valor acumulado",
        "Concatena todos los elementos de un array",
        "Remueve los valores nulos del array"
      ],
      answer: "Recorre un array y aplica una función para obtener un único valor acumulado",
    },
    {
      question: "¿Qué es el 'Event Loop' en JavaScript?",
      choices: [
        "Un bucle que recorre todos los eventos en el DOM",
        "Un mecanismo que permite a JavaScript manejar operaciones asíncronas",
        "Una función recursiva de llamada a eventos",
        "Una función que limpia eventos antiguos"
      ],
      answer: "Un mecanismo que permite a JavaScript manejar operaciones asíncronas",
    },
    {
      question: "¿Cuál es el propósito de `async` en una función?",
      choices: [
        "Convertir una función en síncrona",
        "Permitir que una función retorne una promesa y usar `await` en su interior",
        "Ejecutar una función solo después de cierto tiempo",
        "Permitir que una función maneje eventos en el DOM"
      ],
      answer: "Permitir que una función retorne una promesa y usar `await` en su interior",
    },
    {
      question: "¿Qué es un 'singleton' en patrones de diseño?",
      choices: [
        "Un objeto que se puede instanciar varias veces",
        "Una función que se ejecuta una sola vez",
        "Un patrón de diseño que restringe la creación de instancias a una sola",
        "Una estructura de datos que almacena un solo valor"
      ],
      answer: "Un patrón de diseño que restringe la creación de instancias a una sola",
    },
    {
      question: "¿Qué significa la inmutabilidad en el contexto de programación funcional?",
      choices: [
        "Que los datos no pueden modificarse una vez definidos",
        "Que los datos solo pueden modificarse dentro de funciones",
        "Que las funciones no retornan valores",
        "Que las variables pueden ser reasignadas"
      ],
      answer: "Que los datos no pueden modificarse una vez definidos",
    },
    {
      question: "¿Cuál es el propósito de un 'middleware' en Node.js?",
      choices: [
        "Para encriptar datos de usuario",
        "Para gestionar errores de red",
        "Para ejecutar código entre una solicitud y una respuesta",
        "Para gestionar conexiones a la base de datos"
      ],
      answer: "Para ejecutar código entre una solicitud y una respuesta",
    },
    {
      question: "¿Qué diferencia hay entre una función declarativa y una función de expresión en JavaScript?",
      choices: [
        "Las funciones declarativas son asíncronas, las de expresión son síncronas",
        "Las funciones declarativas se pueden usar antes de su declaración, las de expresión no",
        "Las funciones de expresión son más rápidas",
        "No hay diferencia"
      ],
      answer: "Las funciones declarativas se pueden usar antes de su declaración, las de expresión no",
    },
    {
      question: "¿Cuál de estos métodos de array modifica el array original?",
      choices: ["map()", "filter()", "sort()", "reduce()"],
      answer: "sort()",
    },
    {
      question: "¿Qué hace la función `Object.freeze()` en JavaScript?",
      choices: [
        "Hace que un objeto sea inmutable",
        "Detiene la ejecución de un script",
        "Convierte un objeto en JSON",
        "Elimina todas las propiedades de un objeto"
      ],
      answer: "Hace que un objeto sea inmutable",
    },
    {
      question: "¿Qué resultado da `console.log([] == ![])` en JavaScript?",
      choices: ["true", "false", "undefined", "SyntaxError"],
      answer: "true",
    },
    {
      question: "¿Cuál es el propósito de la arquitectura 'MVC'?",
      choices: [
        "Separar los datos, la lógica y la interfaz de usuario",
        "Modelar bases de datos en forma de árbol",
        "Aumentar la eficiencia de las consultas SQL",
        "Reducir el tamaño de las aplicaciones web"
      ],
      answer: "Separar los datos, la lógica y la interfaz de usuario",
    },
    {
      question: "¿Qué significa 'DRY' en programación?",
      choices: [
        "Divertido, Rápido y Juvenil",
        "Don’t Repeat Yourself",
        "Design Rationalized Yield",
        "Data Representation Yield"
      ],
      answer: "Don’t Repeat Yourself",
    }
  ];
  
  
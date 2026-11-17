// ==========================================================================
// BANCO DE PREGUNTAS POR GRADO ESCOLAR (1.° a 7.° Grado + Inglés Niveles 1 a 4)
// Total preguntas: 2.000 (500 por nivel / 100 por materia/área)
// Diseñado para primaria argentina / latinoamericana e inglés británico curricular Nivel 1 a 4
// ==========================================================================

const CATEGORIES = {
    "matematica": {
        "id": "matematica",
        "name": "Matemática",
        "icon": "📐",
        "color": "#2563eb",
        "lightColor": "#dbeafe",
        "badge": "🔢"
    },
    "lengua": {
        "id": "lengua",
        "name": "Lengua",
        "icon": "📚",
        "color": "#dc2626",
        "lightColor": "#fee2e2",
        "badge": "📖"
    },
    "naturales": {
        "id": "naturales",
        "name": "Ciencias Naturales",
        "icon": "🌿",
        "color": "#16a34a",
        "lightColor": "#dcfce7",
        "badge": "🔬"
    },
    "sociales": {
        "id": "sociales",
        "name": "Ciencias Sociales",
        "icon": "🌍",
        "color": "#ea580c",
        "lightColor": "#ffedd5",
        "badge": "🏛️"
    },
    "ingenio": {
        "id": "ingenio",
        "name": "Ingenio y Cultura",
        "icon": "💡",
        "color": "#9333ea",
        "lightColor": "#f3e8ff",
        "badge": "⭐"
    }
};

const QUESTIONS_DATA = [
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de las siguientes fracciones es equivalente a 1/2?",
        "options": [
            "2/5",
            "3/6",
            "4/10",
            "2/3"
        ],
        "correct": 1,
        "explanation": "3/6 es equivalente a 1/2 porque si dividís numerador y denominador por 3, obtenés 1/2.",
        "id": "q_g5_matematica_1"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Un ángulo que mide exactamente 90 grados se llama:",
        "options": [
            "Agudo",
            "Obtuso",
            "Recto",
            "Llano"
        ],
        "correct": 2,
        "explanation": "El ángulo recto mide 90°. Los agudos miden menos de 90° y los obtusos más de 90°.",
        "id": "q_g5_matematica_2"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si sumamos 1/4 + 2/4, ¿qué fracción obtenemos?",
        "options": [
            "3/4",
            "3/8",
            "2/8",
            "1/2"
        ],
        "correct": 0,
        "explanation": "Al tener el mismo denominador (4), solo se suman los numeradores: 1 + 2 = 3, quedando 3/4.",
        "id": "q_g5_matematica_3"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cómo se llama el triángulo que tiene sus tres lados de distinta longitud?",
        "options": [
            "Equilátero",
            "Isósceles",
            "Escaleno",
            "Rectángulo"
        ],
        "correct": 2,
        "explanation": "El triángulo escaleno tiene los 3 lados desiguales. El equilátero tiene 3 iguales y el isósceles 2 iguales.",
        "id": "q_g5_matematica_4"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de multiplicar 125 × 8?",
        "options": [
            "950",
            "1.000",
            "1.025",
            "1.100"
        ],
        "correct": 1,
        "explanation": "125 × 8 = 1.000 (100 × 8 = 800 y 25 × 8 = 200; 800 + 200 = 1.000).",
        "id": "q_g5_matematica_5"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos gramos hay en 2 kilos y medio (2,5 kg)?",
        "options": [
            "250 g",
            "2.050 g",
            "2.500 g",
            "25.000 g"
        ],
        "correct": 2,
        "explanation": "1 kilo equivale a 1.000 gramos. Por lo tanto, 2,5 kilos son 2.500 gramos.",
        "id": "q_g5_matematica_6"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de estos números es múltiplo de 3 y de 5 al mismo tiempo?",
        "options": [
            "20",
            "25",
            "30",
            "35"
        ],
        "correct": 2,
        "explanation": "30 termina en 0 (múltiplo de 5) y la suma de sus cifras 3+0 = 3 (múltiplo de 3).",
        "id": "q_g5_matematica_7"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si un rectángulo mide 6 cm de base y 4 cm de altura, ¿cuál es su perímetro?",
        "options": [
            "24 cm",
            "20 cm",
            "10 cm",
            "12 cm"
        ],
        "correct": 1,
        "explanation": "El perímetro es la suma de todos sus lados: 6 + 4 + 6 + 4 = 20 cm.",
        "id": "q_g5_matematica_8"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 2/3 de 60?",
        "options": [
            "30",
            "40",
            "45",
            "20"
        ],
        "correct": 1,
        "explanation": "Para calcular 2/3 de 60, dividís 60 entre 3 (= 20) y luego multiplicás por 2 (= 40).",
        "id": "q_g5_matematica_9"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de sumar los números decimales 1,5 + 2,75?",
        "options": [
            "3,80",
            "4,25",
            "4,15",
            "3,25"
        ],
        "correct": 1,
        "explanation": "Alineando las comas: 1,50 + 2,75 = 4,25.",
        "id": "q_g5_matematica_10"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de las siguientes fracciones es mayor que 1/2?",
        "options": [
            "1/4",
            "2/6",
            "3/4",
            "3/8"
        ],
        "correct": 2,
        "explanation": "3/4 representa el 75%, que es mayor que 1/2 (50%).",
        "id": "q_g5_matematica_11"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "La fracción impropia 7/2 expresada como número mixto es:",
        "options": [
            "2 y 1/2",
            "3 y 1/2",
            "4 y 1/2",
            "3 y 1/4"
        ],
        "correct": 1,
        "explanation": "7 dividido 2 da 3 de cociente y resto 1, es decir: 3 enteros y 1/2.",
        "id": "q_g5_matematica_12"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 45 × 100?",
        "options": [
            "450",
            "4.500",
            "45.000",
            "40.500"
        ],
        "correct": 1,
        "explanation": "Para multiplicar por 100, se agregan dos ceros al número: 45 × 100 = 4.500.",
        "id": "q_g5_matematica_13"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 3.200 dividido entre 10?",
        "options": [
            "32",
            "320",
            "3.020",
            "32.000"
        ],
        "correct": 1,
        "explanation": "Para dividir un número terminado en cero por 10, se le quita un cero: 3.200 ÷ 10 = 320.",
        "id": "q_g5_matematica_14"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si dividimos 47 entre 5, ¿cuál es el resto de la división entera?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correct": 1,
        "explanation": "5 × 9 = 45. Para llegar a 47 faltan 2, por lo tanto el resto es 2.",
        "id": "q_g5_matematica_15"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Un ángulo que mide exactamente 180 grados se denomina ángulo:",
        "options": [
            "Agudo",
            "Recto",
            "Llano",
            "Completo"
        ],
        "correct": 2,
        "explanation": "El ángulo llano mide exactamente 180° (equivale a media vuelta o dos rectos).",
        "id": "q_g5_matematica_16"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué cuadrilátero tiene sus 4 lados iguales pero sus ángulos no son necesariamente de 90°?",
        "options": [
            "Rectángulo",
            "Rombo",
            "Trapecio",
            "Romboide"
        ],
        "correct": 1,
        "explanation": "El rombo tiene sus 4 lados de igual longitud, a diferencia del rectángulo que tiene lados opuestos iguales.",
        "id": "q_g5_matematica_17"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos metros hay en 3 kilómetros y medio (3,5 km)?",
        "options": [
            "350 m",
            "3.050 m",
            "3.500 m",
            "35.000 m"
        ],
        "correct": 2,
        "explanation": "1 km equivale a 1.000 m. Por lo tanto, 3,5 km son 3.500 metros.",
        "id": "q_g5_matematica_18"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos mililitros (ml) hay en 1 litro y medio de jugo?",
        "options": [
            "150 ml",
            "1.050 ml",
            "1.500 ml",
            "15.000 ml"
        ],
        "correct": 2,
        "explanation": "1 litro equivale a 1.000 ml, más medio litro (500 ml) suman 1.500 ml.",
        "id": "q_g5_matematica_19"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántas horas completas equivalen a 3 días enteros?",
        "options": [
            "48 horas",
            "72 horas",
            "96 horas",
            "60 horas"
        ],
        "correct": 1,
        "explanation": "Cada día tiene 24 horas: 3 × 24 = 72 horas.",
        "id": "q_g5_matematica_20"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Para hacer 1 torta se usan 2 huevos. ¿Cuántos huevos se necesitan para hacer 5 tortas iguales?",
        "options": [
            "8",
            "10",
            "12",
            "15"
        ],
        "correct": 1,
        "explanation": "Es proporcionalidad directa: 5 tortas × 2 huevos por torta = 10 huevos.",
        "id": "q_g5_matematica_21"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de los siguientes números es divisible por 2?",
        "options": [
            "135",
            "247",
            "358",
            "419"
        ],
        "correct": 2,
        "explanation": "Un número es divisible por 2 cuando su última cifra es par (0, 2, 4, 6 u 8). El 358 termina en 8.",
        "id": "q_g5_matematica_22"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de estos números es divisible por 5?",
        "options": [
            "234",
            "450",
            "312",
            "501"
        ],
        "correct": 1,
        "explanation": "Un número es divisible por 5 cuando termina en 0 o en 5. El 450 termina en 0.",
        "id": "q_g5_matematica_23"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Comprás un libro de $3.200 y pagás con un billete de $5.000. ¿Cuánto dinero te dan de vuelto?",
        "options": [
            "$1.600",
            "$1.800",
            "$2.200",
            "$1.200"
        ],
        "correct": 1,
        "explanation": "$5.000 - $3.200 = $1.800 de vuelto.",
        "id": "q_g5_matematica_24"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si un cuadrado tiene lados de 5 cm, ¿cuál es su área en centímetros cuadrados?",
        "options": [
            "20 cm²",
            "25 cm²",
            "15 cm²",
            "30 cm²"
        ],
        "correct": 1,
        "explanation": "El área del cuadrado es lado × lado: 5 cm × 5 cm = 25 cm².",
        "id": "q_g5_matematica_25"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el perímetro de un triángulo equilátero cuyos lados miden 7 cm cada uno?",
        "options": [
            "14 cm",
            "21 cm",
            "28 cm",
            "49 cm"
        ],
        "correct": 1,
        "explanation": "El triángulo equilátero tiene sus 3 lados iguales: 7 + 7 + 7 = 21 cm.",
        "id": "q_g5_matematica_26"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "En el número 47.820, ¿qué valor posicional tiene la cifra 7?",
        "options": [
            "70",
            "700",
            "7.000",
            "70.000"
        ],
        "correct": 2,
        "explanation": "La cifra 7 ocupa el lugar de las unidades de mil, por lo que vale 7.000.",
        "id": "q_g5_matematica_27"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Al redondear el número 689 a la centena más cercana, ¿qué número obtenemos?",
        "options": [
            "600",
            "650",
            "700",
            "800"
        ],
        "correct": 2,
        "explanation": "689 está más cerca de 700 que de 600 (la decena es 8, mayor o igual a 5).",
        "id": "q_g5_matematica_28"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 350 × 10?",
        "options": [
            "3.500",
            "35.000",
            "350",
            "3.050"
        ],
        "correct": 0,
        "explanation": "Para multiplicar un número por 10 se le agrega un cero al final: 350 × 10 = 3.500.",
        "id": "q_g5_matematica_29"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es la mitad de 1.500?",
        "options": [
            "700",
            "750",
            "800",
            "850"
        ],
        "correct": 1,
        "explanation": "1.500 dividido entre 2 es 750.",
        "id": "q_g5_matematica_30"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el número que equivale a 5 centenas, 3 decenas y 8 unidades?",
        "options": [
            "583",
            "538",
            "835",
            "358"
        ],
        "correct": 1,
        "explanation": "5 centenas (500) + 3 decenas (30) + 8 unidades (8) = 538.",
        "id": "q_g5_matematica_31"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si una caja tiene 12 lápices de colores, ¿cuántos lápices hay en 5 cajas iguales?",
        "options": [
            "50",
            "55",
            "60",
            "65"
        ],
        "correct": 2,
        "explanation": "12 lápices × 5 cajas = 60 lápices en total.",
        "id": "q_g5_matematica_32"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué fracción representa una pizza cortada en 8 porciones iguales si ya comimos 3 porciones?",
        "options": [
            "3/8",
            "5/8",
            "1/3",
            "3/5"
        ],
        "correct": 0,
        "explanation": "La porción consumida es 3 partes de un total de 8: 3/8.",
        "id": "q_g5_matematica_33"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos centímetros hay en 2 metros y medio?",
        "options": [
            "205 cm",
            "250 cm",
            "2.500 cm",
            "25 cm"
        ],
        "correct": 1,
        "explanation": "1 metro son 100 cm, por lo tanto 2,5 metros equivalen a 250 cm.",
        "id": "q_g5_matematica_34"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Un polígono de 5 lados rectos se denomina:",
        "options": [
            "Cuadrilátero",
            "Pentágono",
            "Hexágono",
            "Octógono"
        ],
        "correct": 1,
        "explanation": "El pentágono es el polígono cerrado de 5 lados y 5 ángulos.",
        "id": "q_g5_matematica_35"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 100 menos 37?",
        "options": [
            "63",
            "73",
            "67",
            "53"
        ],
        "correct": 0,
        "explanation": "100 - 37 = 63 (ya que 63 + 37 = 100).",
        "id": "q_g5_matematica_36"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el doble de 0,75?",
        "options": [
            "1,25",
            "1,50",
            "1,75",
            "2,00"
        ],
        "correct": 1,
        "explanation": "0,75 + 0,75 = 1,50 (o 1 y medio).",
        "id": "q_g5_matematica_37"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántas caras planas tiene un cubo clásico de 6 caras?",
        "options": [
            "4",
            "6",
            "8",
            "12"
        ],
        "correct": 1,
        "explanation": "El cubo posee 6 caras cuadradas idénticas, 8 vértices y 12 aristas.",
        "id": "q_g5_matematica_38"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si repartimos 45 caramelos en partes iguales entre 5 amigos, ¿cuántos recibe cada uno?",
        "options": [
            "7",
            "8",
            "9",
            "10"
        ],
        "correct": 2,
        "explanation": "45 dividido 5 es 9 (5 × 9 = 45).",
        "id": "q_g5_matematica_39"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué hora marca el reloj si son las 15:45?",
        "options": [
            "Las 3 y cuarto de la tarde",
            "Las 4 menos cuarto de la tarde",
            "Las 5 menos cuarto",
            "Las 3 de la mañana"
        ],
        "correct": 1,
        "explanation": "Las 15 horas son las 3 de la tarde; con 45 minutos faltan 15 para las 4 (4 menos cuarto).",
        "id": "q_g5_matematica_40"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "Las palabras que siempre llevan tilde porque su sílaba tónica es la antepenúltima se llaman:",
        "options": [
            "Agudas",
            "Graves o llanas",
            "Esdrújulas",
            "Monosílabas"
        ],
        "correct": 2,
        "explanation": "Las palabras esdrújulas llevan tilde siempre, como por ejemplo: brújula, música, sábado.",
        "id": "q_g5_lengua_1"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la oración 'Los cachorros juguetones corren por el parque', ¿cuál es el adjetivo?",
        "options": [
            "Cachorros",
            "Juguetones",
            "Corren",
            "Parque"
        ],
        "correct": 1,
        "explanation": "'Juguetones' es un adjetivo calificativo porque indica una cualidad de los cachorros.",
        "id": "q_g5_lengua_2"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de los siguientes sustantivos es abstracto?",
        "options": [
            "Mesa",
            "Amistad",
            "Montaña",
            "Perro"
        ],
        "correct": 1,
        "explanation": "'Amistad' es abstracto porque designa un sentimiento o idea que no podemos percibir con los sentidos físicos.",
        "id": "q_g5_lengua_3"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estas palabras está escrita correctamente con regla de ortografía?",
        "options": [
            "Enbudo",
            "Ambiente",
            "Inbierno",
            "Canbio"
        ],
        "correct": 1,
        "explanation": "La regla ortográfica indica que siempre se escribe 'm' antes de 'b' y 'p' (Ambiente).",
        "id": "q_g5_lengua_4"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Dónde llevan la sílaba tónica (fuerza de voz) las palabras agudas?",
        "options": [
            "En la antepenúltima sílaba",
            "En la penúltima sílaba",
            "En la última sílaba",
            "En cualquier sílaba"
        ],
        "correct": 2,
        "explanation": "Las palabras agudas se acentúan con mayor fuerza en la última sílaba (ej: canción, París, papel).",
        "id": "q_g5_lengua_5"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuándo llevan tilde las palabras graves o llanas?",
        "options": [
            "Cuando terminan en N, S o vocal",
            "Cuando NO terminan en N, S o vocal",
            "Siempre llevan tilde",
            "Nunca llevan tilde"
        ],
        "correct": 1,
        "explanation": "Las graves llevan tilde cuando terminan en cualquier consonante que NO sea N ni S (ej: árbol, lápiz).",
        "id": "q_g5_lengua_6"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de las siguientes formas verbales está en infinitivo?",
        "options": [
            "Caminó",
            "Comiendo",
            "Escribir",
            "Jugaremos"
        ],
        "correct": 2,
        "explanation": "Los verbos en infinitivo terminan en -ar, -er o -ir (no están conjugados en persona ni tiempo).",
        "id": "q_g5_lengua_7"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la frase 'Ella trajo su mochila al colegio', ¿cuál es el pronombre personal?",
        "options": [
            "Mochila",
            "Colegio",
            "Ella",
            "Trajo"
        ],
        "correct": 2,
        "explanation": "'Ella' es un pronombre personal de tercera persona singular que reemplaza al nombre.",
        "id": "q_g5_lengua_8"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estas palabras es un sinónimo de 'veloz'?",
        "options": [
            "Lento",
            "Rápido",
            "Pausado",
            "Débil"
        ],
        "correct": 1,
        "explanation": "Los sinónimos tienen significados parecidos o idénticos: veloz y rápido son sinónimos.",
        "id": "q_g5_lengua_9"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el antónimo (lo opuesto) de la palabra 'valiente'?",
        "options": [
            "Audaz",
            "Cobarde",
            "Fuerte",
            "Atrevido"
        ],
        "correct": 1,
        "explanation": "El antónimo de valiente es cobarde o temeroso.",
        "id": "q_g5_lengua_10"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la palabra 'perrito', ¿qué sufijo diminutivo se utilizó?",
        "options": [
            "-ote",
            "-ito",
            "-azo",
            "-ero"
        ],
        "correct": 1,
        "explanation": "El sufijo '-ito' expresa tamaño pequeño o cariño (diminutivo).",
        "id": "q_g5_lengua_11"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la palabra 'golazo', ¿qué sufijo aumentativo se utilizó?",
        "options": [
            "-ito",
            "-azo",
            "-illo",
            "-ucho"
        ],
        "correct": 1,
        "explanation": "El sufijo '-azo' se usa como aumentativo o para indicar admiración/destaque.",
        "id": "q_g5_lengua_12"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "El prefijo 're-' en palabras como 'rehacer' o 'rearmar' significa:",
        "options": [
            "Negación",
            "Volver a hacer o repetición",
            "Debajo de",
            "Antes de"
        ],
        "correct": 1,
        "explanation": "El prefijo 're-' indica repetición o reiteración de la acción.",
        "id": "q_g5_lengua_13"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué elemento característico tiene un cuento o texto narrativo?",
        "options": [
            "Introducción, conflicto (o nudo) y desenlace",
            "Ingredientes y pasos de cocción",
            "Columnas de números y gráficos",
            "Rimas al final de cada verso únicamente"
        ],
        "correct": 0,
        "explanation": "La estructura básica de la narración está compuesta por el inicio, el conflicto o nudo y la resolución.",
        "id": "q_g5_lengua_14"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "Una oración que formula una pregunta como '¿A qué hora empieza la función?' se clasifica como:",
        "options": [
            "Exclamativa",
            "Interrogativa",
            "Imperativa",
            "Desiderativa"
        ],
        "correct": 1,
        "explanation": "Las oraciones interrogativas son las que piden una información o formulan preguntas.",
        "id": "q_g5_lengua_15"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la oración 'Compramos frutas en la verdulería', ¿cuál es el sujeto tácito o desinencial?",
        "options": [
            "Yo",
            "Tú / Vos",
            "Nosotros / Nosotras",
            "Ellos"
        ],
        "correct": 2,
        "explanation": "Por la terminación del verbo 'compramos', se deduce que el sujeto somos 'nosotros'.",
        "id": "q_g5_lengua_16"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "El núcleo del predicado en una oración bimembre es siempre un:",
        "options": [
            "Sustantivo",
            "Adjetivo",
            "Verbo",
            "Artículo"
        ],
        "correct": 2,
        "explanation": "El núcleo del predicado verbal es siempre el verbo conjugado que indica la acción.",
        "id": "q_g5_lengua_17"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es la forma correcta de escribir el diminutivo de 'pedazo'?",
        "options": [
            "Pedazito",
            "Pedasito",
            "Pedacito",
            "Pedasito"
        ],
        "correct": 2,
        "explanation": "Los diminutivos de palabras con 'z' se escriben con 'c': pedazo -> pedacito, pez -> pececito.",
        "id": "q_g5_lengua_18"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "Por regla ortográfica, siempre se escribe 'v' después de la letra:",
        "options": [
            "M",
            "N",
            "P",
            "B"
        ],
        "correct": 1,
        "explanation": "Se escribe siempre 'v' después de 'n' (ej: invierno, invitar, tranvía).",
        "id": "q_g5_lengua_19"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cómo se llama el relato breve protagonizado comúnmente por animales que transmite una enseñanza o moraleja?",
        "options": [
            "Noticia",
            "Fábula",
            "Poema épico",
            "Biografía"
        ],
        "correct": 1,
        "explanation": "Las fábulas son relatos donde los personajes suelen ser animales personificados y dejan una moraleja final.",
        "id": "q_g5_lengua_20"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué conector lógico se usa para ordenar acciones en el tiempo?",
        "options": [
            "Primero, luego, finalmente",
            "Porque, ya que",
            "Pero, sin embargo",
            "O sea, es decir"
        ],
        "correct": 0,
        "explanation": "'Primero', 'luego', 'después' y 'finalmente' son conectores temporales que marcan el orden cronológico.",
        "id": "q_g5_lengua_21"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la poesía, cuando coinciden exactamente vocales y consonantes desde la última vocal acentuada, la rima es:",
        "options": [
            "Asonante",
            "Consonante",
            "Libre",
            "Blanca"
        ],
        "correct": 1,
        "explanation": "La rima consonante tiene total coincidencia de sonidos vocálicos y consonánticos (ej: florero / cerero).",
        "id": "q_g5_lengua_22"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estas palabras pertenece a la misma familia léxica que 'pan'?",
        "options": [
            "Pantalón",
            "Panadería",
            "Panel",
            "Panal"
        ],
        "correct": 1,
        "explanation": "'Panadería', 'panadero' y 'panera' comparten la raíz y significado relacionado con el pan.",
        "id": "q_g5_lengua_23"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué palabra contiene un diptongo (dos vocales unidas en la misma sílaba)?",
        "options": [
            "Viento",
            "Poeta",
            "Teatro",
            "Caoba"
        ],
        "correct": 0,
        "explanation": "En 'vien-to', la 'i' (vocal cerrada) y la 'e' (vocal abierta) forman una sola sílaba (diptongo).",
        "id": "q_g5_lengua_24"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el plural correcto de la palabra 'lápiz'?",
        "options": [
            "Lápizes",
            "Lápices",
            "Lápises",
            "Lápizs"
        ],
        "correct": 1,
        "explanation": "Las palabras terminadas en 'z' forman su plural con 'ces' (lápiz -> lápices, pez -> peces).",
        "id": "q_g5_lengua_25"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la oración 'El sol brilla en el cielo', ¿cuál es el sujeto?",
        "options": [
            "El sol",
            "Brilla",
            "En el cielo",
            "Cielo"
        ],
        "correct": 0,
        "explanation": "¿Quién realiza la acción de brillar? 'El sol', que es el sujeto de la oración.",
        "id": "q_g5_lengua_26"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el sinónimo de la palabra 'hablador'?",
        "options": [
            "Callado",
            "Charlatán o locuaz",
            "Tímido",
            "Tranquilo"
        ],
        "correct": 1,
        "explanation": "Charlatán o locuaz es alguien que habla mucho, sinónimo de hablador.",
        "id": "q_g5_lengua_27"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué clase de palabra es 'rápidamente'?",
        "options": [
            "Sustantivo",
            "Adjetivo",
            "Adverbio",
            "Verbo"
        ],
        "correct": 2,
        "explanation": "Las palabras terminadas en '-mente' que modifican a un verbo son adverbios de modo.",
        "id": "q_g5_lengua_28"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estas palabras es aguda y lleva tilde?",
        "options": [
            "Árbol",
            "Café",
            "Música",
            "Mesa"
        ],
        "correct": 1,
        "explanation": "'Café' es aguda porque se acentúa en la última sílaba y lleva tilde por terminar en vocal.",
        "id": "q_g5_lengua_29"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tiempo verbal expresa una acción que ocurrirá más adelante?",
        "options": [
            "Pretérito o pasado",
            "Presente",
            "Futuro",
            "Condicional"
        ],
        "correct": 2,
        "explanation": "El tiempo futuro indica hechos que sucederán con posterioridad al momento del habla.",
        "id": "q_g5_lengua_30"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué signo ortográfico se utiliza para indicar que se omiten palabras o para crear suspenso?",
        "options": [
            "Puntos suspensivos (...)",
            "Comillas",
            "Punto y coma",
            "Paréntesis"
        ],
        "correct": 0,
        "explanation": "Los puntos suspensivos (...) dejan una frase incompleta o generan intriga.",
        "id": "q_g5_lengua_31"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el antónimo de 'construir'?",
        "options": [
            "Edificar",
            "Destruir o demoler",
            "Armar",
            "Fabricar"
        ],
        "correct": 1,
        "explanation": "Destruir o demoler es lo contrario a construir.",
        "id": "q_g5_lengua_32"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué género literario está escrito en versos y estrofas y expresa emociones del autor?",
        "options": [
            "Poesía o lírica",
            "Noticia periodística",
            "Manual de instrucciones",
            "Teatro"
        ],
        "correct": 0,
        "explanation": "La poesía se caracteriza por su disposición en versos, rima y expresión de sentimientos.",
        "id": "q_g5_lengua_33"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la palabra 'submarino', ¿qué significa el prefijo 'sub-'?",
        "options": [
            "Por encima",
            "Debajo o inferior",
            "Alrededor",
            "Rápido"
        ],
        "correct": 1,
        "explanation": "El prefijo 'sub-' significa bajo o por debajo de (submarino = bajo el mar).",
        "id": "q_g5_lengua_34"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el sustantivo individual correspondiente al colectivo 'jauría'?",
        "options": [
            "Pájaro",
            "Perro o lobo",
            "Pez",
            "Oveja"
        ],
        "correct": 1,
        "explanation": "Una jauría es un conjunto de perros o lobos.",
        "id": "q_g5_lengua_35"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estas palabras lleva la 'h' intercalada escrita correctamente?",
        "options": [
            "Zanahoria",
            "Zanaoria",
            "Canaoria",
            "Zanauria"
        ],
        "correct": 0,
        "explanation": "'Zanahoria' se escribe con 'h' intercalada después de la primera 'a'.",
        "id": "q_g5_lengua_36"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de texto relata la vida de una persona escrita por otra?",
        "options": [
            "Autobiografía",
            "Biografía",
            "Crónica",
            "Enciclopedia"
        ],
        "correct": 1,
        "explanation": "La biografía es la narración de la historia de vida de una persona real.",
        "id": "q_g5_lengua_37"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la frase 'El viento aullaba furioso en la tormenta', ¿qué recurso literario se aplica?",
        "options": [
            "Personificación",
            "Metáfora",
            "Comparación",
            "Hipérbole"
        ],
        "correct": 0,
        "explanation": "Es personificación porque se le atribuyen cualidades de seres vivos (aullar, furioso) al viento.",
        "id": "q_g5_lengua_38"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es la forma correcta de separar en sílabas la palabra 'estrella'?",
        "options": [
            "Es-tre-lla",
            "Est-rel-la",
            "Es-trel-la",
            "E-stre-lla"
        ],
        "correct": 0,
        "explanation": "La división silábica correcta es: es - tre - lla (3 sílabas, trisílaba).",
        "id": "q_g5_lengua_39"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de los siguientes verbos es irregular en presente?",
        "options": [
            "Cantar",
            "Ir (yo voy)",
            "Bailar",
            "Comer"
        ],
        "correct": 1,
        "explanation": "El verbo 'ir' cambia completamente su raíz al conjugarse (voy, vas, va), por eso es irregular.",
        "id": "q_g5_lengua_40"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuáles son los 4 sistemas principales que intervienen en la nutrición humana?",
        "options": [
            "Digestivo, Circulatorio, Respiratorio y Excretor",
            "Nervioso, Óseo, Muscular e Inmunológico",
            "Locomotor, Auditivo, Visual y Circulatorio",
            "Endócrino, Digestivo, Linfático y Nervioso"
        ],
        "correct": 0,
        "explanation": "La función de nutrición integra los sistemas Digestivo, Respiratorio, Circulatorio y Excretor.",
        "id": "q_g5_naturales_1"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "En una cadena alimentaria, ¿qué seres vivos ocupan el rol de 'productores'?",
        "options": [
            "Los carnívoros",
            "Los hongos",
            "Las plantas y algas",
            "Los herbívoros"
        ],
        "correct": 2,
        "explanation": "Las plantas y algas fabrican su propio alimento mediante fotosíntesis (autótrofos).",
        "id": "q_g5_naturales_2"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "Una mezcla de agua con arena es un ejemplo de mezcla:",
        "options": [
            "Homogénea",
            "Heterogénea",
            "Solución pura",
            "Gaseosa"
        ],
        "correct": 1,
        "explanation": "Es heterogénea porque se pueden distinguir sus fases a simple vista (la arena se deposita en el fondo).",
        "id": "q_g5_naturales_3"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué gas absorben las plantas durante la fotosíntesis y qué gas liberan al ambiente?",
        "options": [
            "Absorben dióxido de carbono y liberan oxígeno",
            "Absorben oxígeno y liberan nitrógeno",
            "Absorben helio y liberan dióxido de carbono",
            "Absorben vapor de agua y liberan metano"
        ],
        "correct": 0,
        "explanation": "Durante la fotosíntesis, las plantas absorben CO2 (dióxido de carbono) y liberan oxígeno (O2).",
        "id": "q_g5_naturales_4"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué vasos sanguíneos transportan la sangre de regreso desde el cuerpo hacia el corazón?",
        "options": [
            "Arterias",
            "Venas",
            "Capilares pulmonares",
            "Linfáticos"
        ],
        "correct": 1,
        "explanation": "Las venas devuelven la sangre al corazón, mientras que las arterias la llevan desde el corazón hacia los órganos.",
        "id": "q_g5_naturales_5"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿En qué parte del cuerpo comienza el proceso de digestión mediante la masticación y la saliva?",
        "options": [
            "En el estómago",
            "En el esófago",
            "En la boca",
            "En el hígado"
        ],
        "correct": 2,
        "explanation": "La digestión se inicia en la boca, donde los dientes trituran el alimento y la saliva inicia la digestión química.",
        "id": "q_g5_naturales_6"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿En qué diminutas estructuras de los pulmones se realiza el intercambio entre oxígeno y dióxido de carbono?",
        "options": [
            "Tráquea",
            "Alvéolos pulmonares",
            "Laringe",
            "Bronquios mayores"
        ],
        "correct": 1,
        "explanation": "Los alvéolos son pequeños saquitos rodeados de capilares donde el oxígeno pasa a la sangre y se elimina el CO2.",
        "id": "q_g5_naturales_7"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuáles son los órganos principales del sistema excretor que filtran la sangre y producen orina?",
        "options": [
            "Los pulmones",
            "Los riñones",
            "Los intestinos",
            "Los ganglios"
        ],
        "correct": 1,
        "explanation": "Los dos riñones filtran los desechos metabólicos de la sangre para expulsarlos en forma de orina.",
        "id": "q_g5_naturales_8"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos seres vivos está formado por una sola célula (unicelular)?",
        "options": [
            "Una bacteria",
            "Un perro",
            "Una planta de maíz",
            "Una lombriz"
        ],
        "correct": 0,
        "explanation": "Las bacterias y los protozoos son organismos unicelulares formados por una única célula microscópica.",
        "id": "q_g5_naturales_9"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿A qué reino de la naturaleza pertenecen los champiñones, levaduras y mohos?",
        "options": [
            "Reino Vegetal",
            "Reino Fungi (hongos)",
            "Reino Protista",
            "Reino Animal"
        ],
        "correct": 1,
        "explanation": "Los hongos forman el reino Fungi: no son plantas porque no hacen fotosíntesis y se nutren por absorción.",
        "id": "q_g5_naturales_10"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos animales es un invertebrado?",
        "options": [
            "Una paloma",
            "Una rana",
            "Un pulpo",
            "Un caballo"
        ],
        "correct": 2,
        "explanation": "El pulpo es un molusco cefalópodo y carece de columna vertebral y esqueleto óseo interno.",
        "id": "q_g5_naturales_11"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llaman los animales que se reproducen mediante huevos que eclosionan fuera de la madre?",
        "options": [
            "Vivíparos",
            "Ovíparos",
            "Mamíferos",
            "Marsupiales"
        ],
        "correct": 1,
        "explanation": "Los ovíparos (como las aves, reptiles y la mayoría de los peces) ponen huevos en el exterior.",
        "id": "q_g5_naturales_12"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se denominan los organismos que descomponen restos de plantas y animales muertos cerrando el ciclo de la materia?",
        "options": [
            "Consumidores terciarios",
            "Descomponedores",
            "Productores autótrofos",
            "Predadores"
        ],
        "correct": 1,
        "explanation": "Los hongos y bacterias descomponedores transforman la materia orgánica en nutrientes inorgánicos para el suelo.",
        "id": "q_g5_naturales_13"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "En una taza de té donde el azúcar se disolvió por completo, ¿qué componente es el solvente?",
        "options": [
            "El azúcar",
            "El agua del té",
            "La cuchara",
            "El vapor"
        ],
        "correct": 1,
        "explanation": "El agua es el solvente (disuelve al azúcar, que es el soluto).",
        "id": "q_g5_naturales_14"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué método es el más adecuado para separar una mezcla de agua y aceite?",
        "options": [
            "Filtración con papel",
            "Decantación (embudo de separación)",
            "Imantación",
            "Tamizado"
        ],
        "correct": 1,
        "explanation": "Como el agua y el aceite no se mezclan y tienen distinta densidad, se separan por decantación.",
        "id": "q_g5_naturales_15"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llama el cambio de estado cuando el vapor de agua se enfría y forma gotitas líquidas (como en el espejo del baño)?",
        "options": [
            "Evaporación",
            "Condensación",
            "Sublimación",
            "Fusión"
        ],
        "correct": 1,
        "explanation": "La condensación es el paso de gas a líquido cuando disminuye la temperatura.",
        "id": "q_g5_naturales_16"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿En qué consiste la etapa de precipitación en el ciclo hidrológico del agua?",
        "options": [
            "El agua cae a la tierra en forma de lluvia, nieve o granizo",
            "El agua se calienta y sube en vapor",
            "Las plantas absorben agua por la raíz",
            "Los ríos desembocan en el mar"
        ],
        "correct": 0,
        "explanation": "La precipitación ocurre cuando las gotas de las nubes se hacen pesadas y caen por gravedad.",
        "id": "q_g5_naturales_17"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Por qué el sonido no puede propagarse en el vacío del espacio exterior?",
        "options": [
            "Porque hace mucho frío",
            "Porque necesita un medio material (aire, líquido o sólido) para transmitir sus vibraciones",
            "Porque la luz viaja más rápido",
            "Porque la gravedad lo anula"
        ],
        "correct": 1,
        "explanation": "El sonido es una onda mecánica que necesita moléculas para vibrar y transmitirse.",
        "id": "q_g5_naturales_18"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de las siguientes es una fuente de energía renovable e inagotable?",
        "options": [
            "El carbón mineral",
            "El gas natural",
            "El viento (energía eólica)",
            "El petróleo crudo"
        ],
        "correct": 2,
        "explanation": "El viento es un recurso renovable natural que no se agota con su uso.",
        "id": "q_g5_naturales_19"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué pigmento verde presente en las hojas de las plantas es fundamental para atrapar la energía de la luz solar?",
        "options": [
            "Hemoglobina",
            "Clorofila",
            "Melanina",
            "Caroteno"
        ],
        "correct": 1,
        "explanation": "La clorofila, ubicada en los cloroplastos, absorbe la luz solar para la fotosíntesis.",
        "id": "q_g5_naturales_20"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué parte de la planta se encarga principalmente de absorber agua y minerales del suelo?",
        "options": [
            "Las hojas",
            "El tallo",
            "La raíz",
            "La flor"
        ],
        "correct": 2,
        "explanation": "La raíz fija la planta al suelo y absorbe agua y sales minerales a través de sus pelos absorbentes.",
        "id": "q_g5_naturales_21"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué propiedad tienen los metales como el hierro de ser atraídos por un imán?",
        "options": [
            "Conductividad térmica",
            "Magnetismo",
            "Ductilidad",
            "Maleabilidad"
        ],
        "correct": 1,
        "explanation": "El magnetismo es la fuerza física de atracción o repulsión que ejercen los imanes sobre metales ferromagnéticos.",
        "id": "q_g5_naturales_22"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es la función principal de los glóbulos rojos (eritrocitos) en la sangre?",
        "options": [
            "Transportar oxígeno a todas las células del cuerpo",
            "Combatir infecciones y bacterias",
            "Formar coágulos para cerrar heridas",
            "Digerir los nutrientes"
        ],
        "correct": 0,
        "explanation": "Los glóbulos rojos poseen hemoglobina para transportar el oxígeno desde los pulmones a los tejidos.",
        "id": "q_g5_naturales_23"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos materiales es un buen aislante térmico (no conduce bien el calor)?",
        "options": [
            "El cobre",
            "El aluminio",
            "La madera o el corcho",
            "La plata"
        ],
        "correct": 2,
        "explanation": "La madera, el corcho y el plástico son aislantes térmicos; por eso los mangos de las sartenes suelen ser de estos materiales.",
        "id": "q_g5_naturales_24"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué parte de la célula vegetal le da rigidez y forma a la planta?",
        "options": [
            "La pared celular",
            "El núcleo",
            "El citoplasma",
            "El lisosoma"
        ],
        "correct": 0,
        "explanation": "La pared celular compuesta de celulosa otorga soporte y rigidez a las células vegetales.",
        "id": "q_g5_naturales_25"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llaman los animales que se alimentan tanto de plantas como de otros animales?",
        "options": [
            "Herbívoros",
            "Carnívoros",
            "Omnívoros",
            "Descomponedores"
        ],
        "correct": 2,
        "explanation": "Los omnívoros (como los seres humanos, los cerdos y los osos) consumen vegetales y carne.",
        "id": "q_g5_naturales_26"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué sentido nos permite percibir las vibraciones mecánicas sonoras en el aire?",
        "options": [
            "La vista",
            "El oído",
            "El olfato",
            "El gusto"
        ],
        "correct": 1,
        "explanation": "El oído capta las ondas sonoras que hacen vibrar el tímpano y son procesadas por el cerebro.",
        "id": "q_g5_naturales_27"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué cambio de estado ocurre cuando un trozo de hielo se derrite por calor?",
        "options": [
            "Fusión",
            "Solidificación",
            "Sublimación",
            "Evaporación"
        ],
        "correct": 0,
        "explanation": "La fusión es el paso del estado sólido al líquido mediante el aporte de calor.",
        "id": "q_g5_naturales_28"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es la función principal del esqueleto en el cuerpo humano?",
        "options": [
            "Sostener el cuerpo y proteger órganos vitales",
            "Bombear sangre a los tejidos",
            "Digerir los alimentos",
            "Filtrar el aire que respiramos"
        ],
        "correct": 0,
        "explanation": "El sistema óseo da estructura al cuerpo, permite el movimiento y protege órganos como el cerebro y corazón.",
        "id": "q_g5_naturales_29"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos animales respira mediante branquias?",
        "options": [
            "Una ballena",
            "Un pez dorado",
            "Un delfín",
            "Una tortuga marina"
        ],
        "correct": 1,
        "explanation": "Los peces tienen branquias para extraer el oxígeno disuelto en el agua. Ballenas y delfines respiran por pulmones.",
        "id": "q_g5_naturales_30"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de energía produce el Sol y llega a la Tierra en forma de rayos?",
        "options": [
            "Energía lumínica y térmica",
            "Energía química fósil",
            "Energía nuclear sólida",
            "Energía eólica"
        ],
        "correct": 0,
        "explanation": "La radiación solar viaja por el espacio aportando luz (energía lumínica) y calor (energía térmica).",
        "id": "q_g5_naturales_31"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llama la capa sólida superficial de la Tierra sobre la que vivimos?",
        "options": [
            "La corteza terrestre o litosfera",
            "El núcleo interno",
            "El manto superior",
            "La troposfera"
        ],
        "correct": 0,
        "explanation": "La corteza terrestre es la capa externa rocosa más delgada y sólida del planeta.",
        "id": "q_g5_naturales_32"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué método usarías para separar arena fina mezclada con piedras grandes?",
        "options": [
            "Tamizado o colado por rejilla",
            "Imantación",
            "Evaporación",
            "Decantación"
        ],
        "correct": 0,
        "explanation": "El tamizado utiliza una malla que retiene las partículas gruesas (piedras) y deja pasar las finas (arena).",
        "id": "q_g5_naturales_33"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué líquido digestivo es producido por el hígado para facilitar la digestión de las grasas?",
        "options": [
            "La saliva",
            "La bilis",
            "El jugo pancreático",
            "El ácido láctico"
        ],
        "correct": 1,
        "explanation": "El hígado sintetiza la bilis, que se almacena en la vesícula biliar y emulsiona las grasas en el intestino.",
        "id": "q_g5_naturales_34"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué insectos son reconocidos como los principales polinizadores de flores y cultivos?",
        "options": [
            "Las abejas",
            "Los mosquitos",
            "Las pulgas",
            "Las cucarachas"
        ],
        "correct": 0,
        "explanation": "Al recolectar néctar, las abejas transportan el polen de flor en flor permitiendo la fecundación vegetal.",
        "id": "q_g5_naturales_35"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué fenómeno natural ocurre cuando la Luna se interpone directamente entre el Sol y la Tierra?",
        "options": [
            "Eclipse solar",
            "Eclipse lunar",
            "Marea muerta",
            "Aurora boreal"
        ],
        "correct": 0,
        "explanation": "En un eclipse solar, la Luna bloquea total o parcialmente la luz del Sol proyectando su sombra en la Tierra.",
        "id": "q_g5_naturales_36"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es la función de los glóbulos blancos (leucocitos) en el sistema inmunológico?",
        "options": [
            "Defender al organismo contra bacterias, virus e infecciones",
            "Llevar oxígeno a los músculos",
            "Coagular la sangre en cortes",
            "Transportar azúcares"
        ],
        "correct": 0,
        "explanation": "Los glóbulos blancos son las células defensoras encargadas de neutralizar microorganismos patógenos.",
        "id": "q_g5_naturales_37"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué gas es indispensable para que se produzca una combustión (fuego)?",
        "options": [
            "Oxígeno",
            "Helio",
            "Nitrógeno",
            "Argón"
        ],
        "correct": 0,
        "explanation": "El oxígeno actúa como comburente; sin oxígeno la llama se apaga de inmediato.",
        "id": "q_g5_naturales_38"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es la unidad estructural y funcional básica de todos los seres vivos?",
        "options": [
            "El tejido",
            "La célula",
            "El órgano",
            "El átomo inerte"
        ],
        "correct": 1,
        "explanation": "Todos los organismos vivos están compuestos por una o más células, unidad básica de la vida.",
        "id": "q_g5_naturales_39"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de relación tienen un perro y las pulgas que viven a costa de su sangre?",
        "options": [
            "Parasitismo",
            "Mutualismo",
            "Comensalismo",
            "Cooperación"
        ],
        "correct": 0,
        "explanation": "En el parasitismo, un organismo (parásito) se beneficia perjudicando al hospedador sin matarlo de inmediato.",
        "id": "q_g5_naturales_40"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué año se sancionó la Constitución Nacional Argentina?",
        "options": [
            "1810",
            "1816",
            "1853",
            "1900"
        ],
        "correct": 2,
        "explanation": "La Constitución Nacional Argentina fue sancionada en 1853 en Santa Fe.",
        "id": "q_g5_sociales_1"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "Según la Constitución, ¿cuáles son los tres poderes del Estado argentino?",
        "options": [
            "Ejecutivo, Legislativo y Judicial",
            "Político, Policial y Militar",
            "Municipal, Provincial y Escolar",
            "Económico, Social y Cultural"
        ],
        "correct": 0,
        "explanation": "El sistema republicano divide el poder en: Ejecutivo (Presidente), Legislativo (Congreso) y Judicial (Jueces).",
        "id": "q_g5_sociales_2"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la cadena montañosa más larga de América del Sur que bordea el oeste de Argentina?",
        "options": [
            "Los Alpes",
            "El Himalaya",
            "La Cordillera de los Andes",
            "Las Sierras Pampeanas"
        ],
        "correct": 2,
        "explanation": "La Cordillera de los Andes recorre todo el oeste de Sudamérica y forma el límite con Chile.",
        "id": "q_g5_sociales_3"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuántas provincias integran la República Argentina (sin contar CABA)?",
        "options": [
            "20",
            "22",
            "23",
            "24"
        ],
        "correct": 2,
        "explanation": "Argentina está conformada por 23 provincias y 1 ciudad autónoma (CABA).",
        "id": "q_g5_sociales_4"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué acontecimiento fundamental se recuerda el 25 de Mayo en Argentina?",
        "options": [
            "La Revolución de Mayo de 1810 y el Primer Gobierno Patrio",
            "La Declaración de la Independencia en Tucumán",
            "El Cruce de los Andes",
            "La creación de la Bandera"
        ],
        "correct": 0,
        "explanation": "El 25 de Mayo de 1810 se formó la Primera Junta, destituyendo al virrey español Cisneros.",
        "id": "q_g5_sociales_5"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué edificio histórico de Buenos Aires fue el centro de los debates populares durante la semana de Mayo de 1810?",
        "options": [
            "La Casa Rosada",
            "El Cabildo de Buenos Aires",
            "El Congreso de la Nación",
            "El Teatro Colón"
        ],
        "correct": 1,
        "explanation": "En el Cabildo abierto los criollos exigieron la renuncia del virrey y formaron el primer gobierno propio.",
        "id": "q_g5_sociales_6"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué provincia argentina se declaró la Independencia el 9 de Julio de 1816?",
        "options": [
            "Córdoba",
            "Buenos Aires",
            "Tucumán",
            "Salta"
        ],
        "correct": 2,
        "explanation": "Los congresales se reunieron en la histórica Casa de Tucumán en San Miguel de Tucumán.",
        "id": "q_g5_sociales_7"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién fue el gran líder militar que comandó el legendario Cruce de los Andes para liberar a Chile y Perú?",
        "options": [
            "Manuel Belgrano",
            "José de San Martín",
            "Mariano Moreno",
            "Juan José Paso"
        ],
        "correct": 1,
        "explanation": "El General Don José de San Martín organizó el Ejército de los Andes en Mendoza para liberar el continente.",
        "id": "q_g5_sociales_8"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llamaba el territorio colonial creado por España en 1776 que abarcaba la actual Argentina, Uruguay, Paraguay y Bolivia?",
        "options": [
            "Virreinato de Nueva España",
            "Virreinato del Río de la Plata",
            "Virreinato del Perú",
            "Capitanía General de Chile"
        ],
        "correct": 1,
        "explanation": "El Virreinato del Río de la Plata fue fundado en 1776 con capital en la ciudad de Buenos Aires.",
        "id": "q_g5_sociales_9"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se denomina a los pueblos originarios que no tenían vivienda fija y se desplazaban cazando y recolectando?",
        "options": [
            "Sedentarios",
            "Nómadas",
            "Agricultores",
            "Urbanos"
        ],
        "correct": 1,
        "explanation": "Los pueblos nómadas se trasladaban constantemente en busca de alimentos según las estaciones del año.",
        "id": "q_g5_sociales_10"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué pueblo originario habitaba las costas y selvas del Litoral argentino y navegaba en canoas?",
        "options": [
            "Los Guaraníes",
            "Los Onas (Selk'nam)",
            "Los Diaguitas",
            "Los Tehuelches"
        ],
        "correct": 0,
        "explanation": "Los guaraníes habitaron la región litoral, pescaban, navegaban ríos y cultivaban mandioca, batata y maíz.",
        "id": "q_g5_sociales_11"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "En el sistema de gobierno argentino, ¿quién encabeza el Poder Ejecutivo Nacional?",
        "options": [
            "El Presidente de la Nación",
            "El Presidente de la Corte Suprema",
            "El Gobernador de Buenos Aires",
            "El Jefe de Gabinete de Diputados"
        ],
        "correct": 0,
        "explanation": "El Poder Ejecutivo Nacional es unipersonal y está desempeñado por el Presidente de la Nación.",
        "id": "q_g5_sociales_12"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué poder del Estado está a cargo de redactar, debatir y aprobar las leyes del país?",
        "options": [
            "Poder Ejecutivo",
            "Poder Judicial",
            "Poder Legislativo (Congreso)",
            "Poder Electoral"
        ],
        "correct": 2,
        "explanation": "El Poder Legislativo (Cámara de Diputados y de Senadores) tiene como misión sancionar las leyes nacionales.",
        "id": "q_g5_sociales_13"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué gran región geográfica argentina se caracteriza por sus extensas llanuras aptas para la agricultura y ganadería?",
        "options": [
            "La Región Pampeana",
            "La Puna",
            "La Cordillera Patagónica",
            "El Valle de la Luna"
        ],
        "correct": 0,
        "explanation": "La llanura pampeana posee suelos fértiles y clima templado, ideales para cereales, oleaginosas y cría de ganado.",
        "id": "q_g5_sociales_14"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la famosa maravilla natural de cascadas ubicada en la provincia de Misiones?",
        "options": [
            "Glaciar Perito Moreno",
            "Cataratas del Iguazú",
            "Quebrada de Humahuaca",
            "Valle de Calchaquí"
        ],
        "correct": 1,
        "explanation": "Las Cataratas del Iguazú son reconocidas como una de las maravillas naturales del mundo en el río Iguazú.",
        "id": "q_g5_sociales_15"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué clima predomina en la mayor parte de la meseta patagónica argentina?",
        "options": [
            "Cálido y húmedo",
            "Frío y árido o semiárido",
            "Tropical lluvioso",
            "Ecuatorial"
        ],
        "correct": 1,
        "explanation": "La meseta patagónica se caracteriza por sus vientos intensos, bajas precipitaciones y clima frío y seco.",
        "id": "q_g5_sociales_16"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Por qué se dice que la Constitución Nacional es la 'Ley Suprema' de la República Argentina?",
        "options": [
            "Porque ninguna otra ley, decreto o tratado puede contradecirla",
            "Porque la redactó una sola persona",
            "Porque solo rige en la Ciudad de Buenos Aires",
            "Porque nunca puede modificarse ni reformarse"
        ],
        "correct": 0,
        "explanation": "Por el principio de supremacía constitucional, todas las leyes deben ajustarse a la Constitución Nacional.",
        "id": "q_g5_sociales_17"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué tratado internacional consagra el derecho de todos los niños a la educación, la salud y el juego?",
        "options": [
            "Convención sobre los Derechos del Niño",
            "Pacto de San José",
            "Tratado de Asunción",
            "Declaración de Versalles"
        ],
        "correct": 0,
        "explanation": "La Convención sobre los Derechos del Niño (ONU) aprobada en 1989 garantiza la protección integral de la infancia.",
        "id": "q_g5_sociales_18"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es el río más ancho del mundo, que separa a Argentina de Uruguay?",
        "options": [
            "Río Paraná",
            "Río de la Plata",
            "Río Colorado",
            "Río Bermejo"
        ],
        "correct": 1,
        "explanation": "El Río de la Plata es considerado el río más ancho del mundo, superando los 200 km en su desembocadura exterior.",
        "id": "q_g5_sociales_19"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué gran prócer argentino creó la bandera albiceleste en las orillas del río Paraná en 1812?",
        "options": [
            "Manuel Belgrano",
            "José de San Martín",
            "Juan Manuel de Rosas",
            "Domingo Faustino Sarmiento"
        ],
        "correct": 0,
        "explanation": "El General Manuel Belgrano diseñó e izó la bandera nacional por primera vez en la actual ciudad de Rosario.",
        "id": "q_g5_sociales_20"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia argentina se ubica en el extremo sur del país y comprende una gran isla?",
        "options": [
            "Santa Cruz",
            "Chubut",
            "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
            "Río Negro"
        ],
        "correct": 2,
        "explanation": "Tierra del Fuego es la provincia más austral de Argentina y del continente americano.",
        "id": "q_g5_sociales_21"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué nombre recibe el mapa que muestra la división de países, provincias y ciudades con sus capitales?",
        "options": [
            "Mapa físico",
            "Mapa político",
            "Mapa temático",
            "Mapa hidrográfico"
        ],
        "correct": 1,
        "explanation": "El mapa político representa los límites territoriales y fronteras administrativas fijadas por las sociedades.",
        "id": "q_g5_sociales_22"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué gran cordillera atraviesa América de sur a norte y posee el pico más alto del continente (el Aconcagua)?",
        "options": [
            "Los Montes Apalaches",
            "La Cordillera de los Andes",
            "Las Rocosas",
            "Los Alpes"
        ],
        "correct": 1,
        "explanation": "El cerro Aconcagua (6.961 m), ubicado en Mendoza en la Cordillera de los Andes, es la cima más alta de América.",
        "id": "q_g5_sociales_23"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué poder del Estado ejerce la administración de justicia a través de jueces y tribunales?",
        "options": [
            "Poder Ejecutivo",
            "Poder Legislativo",
            "Poder Judicial",
            "Poder Municipal"
        ],
        "correct": 2,
        "explanation": "El Poder Judicial se encarga de aplicar las leyes y juzgar los conflictos según el marco normativo.",
        "id": "q_g5_sociales_24"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué ciudad argentina se encuentra el Monumento Histórico Nacional a la Bandera?",
        "options": [
            "Buenos Aires",
            "Rosario",
            "Córdoba",
            "Santa Fe"
        ],
        "correct": 1,
        "explanation": "El monumento se levanta en Rosario (Santa Fe), donde Belgrano izó por primera vez la bandera en 1812.",
        "id": "q_g5_sociales_25"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué océano se encuentra al oeste de la Cordillera de los Andes separando América de Asia?",
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "correct": 0,
        "explanation": "El Océano Pacífico baña las costas occidentales de América del Sur (Chile, Perú, etc.).",
        "id": "q_g5_sociales_26"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué presidente de la Primera Junta de gobierno patrio fue un militar nacido en Potosí?",
        "options": [
            "Cornelio Saavedra",
            "Mariano Moreno",
            "Manuel Alberti",
            "Juan José Castelli"
        ],
        "correct": 0,
        "explanation": "Cornelio Saavedra fue el presidente de la Primera Junta creada el 25 de mayo de 1810.",
        "id": "q_g5_sociales_27"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Córdoba en Argentina?",
        "options": [
            "Río Cuarto",
            "Córdoba",
            "Villa María",
            "Carlos Paz"
        ],
        "correct": 1,
        "explanation": "La ciudad de Córdoba es la capital homónima de la provincia mediterránea.",
        "id": "q_g5_sociales_28"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué instrumento cartográfico representa a la Tierra en una superficie plana con coordenadas?",
        "options": [
            "El planisferio o mapa mundi",
            "El globo terráqueo",
            "La brújula magnética",
            "El astrolabio"
        ],
        "correct": 0,
        "explanation": "El planisferio es la proyección plana de toda la superficie esférica terrestre.",
        "id": "q_g5_sociales_29"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué pueblo originario nómade habitaba las estepas de la Patagonia continental cazando guanacos y choiques?",
        "options": [
            "Los Tehuelches",
            "Los Guaraníes",
            "Los Diaguitas",
            "Los Comechingones"
        ],
        "correct": 0,
        "explanation": "Los tehuelches eran expertos cazadores pedestres nómades de la Patagonia que utilizaban boleadoras y pieles.",
        "id": "q_g5_sociales_30"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama la ley que regula el tránsito y las normas de seguridad vial en la vía pública?",
        "options": [
            "Ley Nacional de Tránsito",
            "Código Penal",
            "Ley del Deporte",
            "Constitución Provincial"
        ],
        "correct": 0,
        "explanation": "La Ley Nacional de Tránsito establece los derechos, obligaciones, señales y velocidades para circular seguro.",
        "id": "q_g5_sociales_31"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es el río argentino que divide la región de la Patagonia de la región Pampeana?",
        "options": [
            "Río Colorado",
            "Río Paraná",
            "Río Pilcomayo",
            "Río Dulce"
        ],
        "correct": 0,
        "explanation": "El río Colorado es considerado el límite geográfico tradicional entre la Pampa y la Patagonia.",
        "id": "q_g5_sociales_32"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué actividad económica transforma materias primas en productos manufacturados?",
        "options": [
            "La industria o manufactura",
            "La agricultura",
            "La pesca artesanal",
            "El turismo"
        ],
        "correct": 0,
        "explanation": "La industria (sector secundario) elabora bienes procesados a partir de los recursos naturales del sector primario.",
        "id": "q_g5_sociales_33"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién fue el patriota y periodista secretario de la Primera Junta que fundó 'La Gazeta de Buenos Ayres'?",
        "options": [
            "Mariano Moreno",
            "Cornelio Saavedra",
            "Domingo French",
            "Antonio Beruti"
        ],
        "correct": 0,
        "explanation": "Mariano Moreno fundó en junio de 1810 'La Gazeta de Buenos Ayres' para difundir las ideas revolucionarias.",
        "id": "q_g5_sociales_34"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué gran glaciar argentino de la provincia de Santa Cruz es famoso por sus desprendimientos de hielo en el Lago Argentino?",
        "options": [
            "Glaciar Perito Moreno",
            "Glaciar Upsala",
            "Glaciar Viedma",
            "Glaciar Spegazzini"
        ],
        "correct": 0,
        "explanation": "El Glaciar Perito Moreno es una de las mayores reservas de agua dulce del mundo y polo turístico en El Calafate.",
        "id": "q_g5_sociales_35"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama el poder del Estado representado por la Corte Suprema y jueces que vela por el cumplimiento de las leyes?",
        "options": [
            "Poder Judicial",
            "Poder Ejecutivo",
            "Poder Legislativo",
            "Poder Municipal"
        ],
        "correct": 0,
        "explanation": "El Poder Judicial administra la justicia e interpreta las leyes en casos de litigio.",
        "id": "q_g5_sociales_36"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué mes se conmemora en Argentina el Paso a la Inmortalidad del General José de San Martín?",
        "options": [
            "Agosto (17 de Agosto)",
            "Mayo (25 de Mayo)",
            "Julio (9 de Julio)",
            "Junio (20 de Junio)"
        ],
        "correct": 0,
        "explanation": "San Martín falleció el 17 de agosto de 1850 en Boulogne-sur-Mer (Francia).",
        "id": "q_g5_sociales_37"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la moneda oficial de curso legal en la República Argentina?",
        "options": [
            "El Peso Argentino",
            "El Real",
            "El Dólar",
            "El Euro"
        ],
        "correct": 0,
        "explanation": "El Peso es la moneda nacional de curso legal emitida por el Banco Central de la República Argentina.",
        "id": "q_g5_sociales_38"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué derecho humano fundamental garantiza que todo niño tenga un nombre y una nacionalidad al nacer?",
        "options": [
            "Derecho a la identidad",
            "Derecho al comercio",
            "Derecho de huelga",
            "Derecho de navegación"
        ],
        "correct": 0,
        "explanation": "El derecho a la identidad asegura la inscripción en el registro civil, con nombre, apellido y nacionalidad.",
        "id": "q_g5_sociales_39"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la principal vía de comunicación marítima internacional que conecta el océano Atlántico con el Pacífico en el sur del continente?",
        "options": [
            "Estrecho de Magallanes y Pasaje de Drake",
            "Canal de Suez",
            "Canal de la Mancha",
            "Estrecho de Gibraltar"
        ],
        "correct": 0,
        "explanation": "El Estrecho de Magallanes descubierto en 1520 une ambos océanos en el extremo sur sudamericano.",
        "id": "q_g5_sociales_40"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el planeta más grande de todo nuestro Sistema Solar?",
        "options": [
            "Saturno",
            "Júpiter",
            "Neptuno",
            "La Tierra"
        ],
        "correct": 1,
        "explanation": "Júpiter es el planeta más grande: ¡dentro de él podrían caber más de 1.300 planetas Tierra!",
        "id": "q_g5_ingenio_1"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso invento argentino para escribir fue patentado por Ladislao José Biró?",
        "options": [
            "La pluma estilográfica",
            "La birome (bolígrafo)",
            "La máquina de escribir",
            "El lápiz mecánico"
        ],
        "correct": 1,
        "explanation": "Ladislao Biró inventó la birome en Argentina en la década de 1940.",
        "id": "q_g5_ingenio_2"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Si en una carrera de atletismo adelantás al que va en SEGUNDO lugar, ¿en qué puesto quedás?",
        "options": [
            "Primero",
            "Segundo",
            "Tercero",
            "Último"
        ],
        "correct": 1,
        "explanation": "¡Quedás segundo! Al adelantar al segundo, pasás a ocupar su lugar.",
        "id": "q_g5_ingenio_3"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Cuántos meses del año tienen al menos 28 días?",
        "options": [
            "Solo 1 (febrero)",
            "6 meses",
            "Todos los 12 meses",
            "Ninguno"
        ],
        "correct": 2,
        "explanation": "¡Todos los 12 meses tienen al menos 28 días! Febrero tiene 28 (o 29) y los demás tienen 30 o 31.",
        "id": "q_g5_ingenio_4"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Cuanto más le quitas, más grande se vuelve. ¿Qué es?",
        "options": [
            "Un agujero en la tierra",
            "Una montaña",
            "Un árbol",
            "Un globo"
        ],
        "correct": 0,
        "explanation": "¡Un agujero! Mientras más tierra o material le sacás, más grande se hace el pozo.",
        "id": "q_g5_ingenio_5"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el planeta más cercano al Sol en el Sistema Solar?",
        "options": [
            "Venus",
            "Mercurio",
            "La Tierra",
            "Marte"
        ],
        "correct": 1,
        "explanation": "Mercurio orbita en la primera posición más próxima al Sol, a unos 58 millones de kilómetros.",
        "id": "q_g5_ingenio_6"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el único satélite natural que gira alrededor del planeta Tierra?",
        "options": [
            "Europa",
            "Titán",
            "La Luna",
            "Fobos"
        ],
        "correct": 2,
        "explanation": "La Luna es el único satélite natural de la Tierra y sus fases duran aproximadamente 28 días.",
        "id": "q_g5_ingenio_7"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué transporte público automotor urbano nació y fue inventado en la ciudad de Buenos Aires en 1928?",
        "options": [
            "El tren subterráneo",
            "El colectivo",
            "El trolebús",
            "El tranvía a caballo"
        ],
        "correct": 1,
        "explanation": "El 'colectivo' nació en Buenos Aires en 1928 cuando taxistas comenzaron a llevar pasajeros con recorrido fijo compartido.",
        "id": "q_g5_ingenio_8"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Hace cuántos millones de años aproximadamente se extinguieron los grandes dinosaurios?",
        "options": [
            "Hace 10.000 años",
            "Hace 66 millones de años",
            "Hace 500 millones de años",
            "Hace 1 millón de años"
        ],
        "correct": 1,
        "explanation": "Los dinosaurios se extinguieron al final del período Cretácico, hace unos 66 millones de años por el impacto de un asteroide.",
        "id": "q_g5_ingenio_9"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué significa la 'R' de 'Reducir' en la regla ecológica de las 3 R?",
        "options": [
            "Generar y consumir menos residuos innecesarios",
            "Tirar la basura en bolsas más chicas",
            "Pintar los tachos de verde",
            "Quemarla para que ocupe menos espacio"
        ],
        "correct": 0,
        "explanation": "Reducir significa disminuir el volumen de consumo y envases descartables para producir menos desechos.",
        "id": "q_g5_ingenio_10"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué océano baña toda la costa oriental marítima de la República Argentina?",
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "correct": 1,
        "explanation": "El Mar Argentino es parte del Océano Atlántico Sur y se extiende sobre nuestra plataforma continental.",
        "id": "q_g5_ingenio_11"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el animal terrestre más rápido del planeta Tierra en distancias cortas?",
        "options": [
            "El león",
            "El guepardo o chita",
            "La gacela",
            "El caballo de carrera"
        ],
        "correct": 1,
        "explanation": "El guepardo o chita puede alcanzar velocidades de más de 100 km/h en persecuciones cortas.",
        "id": "q_g5_ingenio_12"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el animal viviente más grande y pesado que jamás ha existido en la historia del planeta?",
        "options": [
            "El Tiranosaurio Rex",
            "El elefante africano",
            "La ballena azul",
            "El megalodón"
        ],
        "correct": 2,
        "explanation": "La ballena azul puede medir hasta 30 metros de largo y pesar cerca de 180 toneladas, superando a los mayores dinosaurios.",
        "id": "q_g5_ingenio_13"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "En una mesa hay 3 manzanas y agarrás 2 manzanas para comer. ¿Cuántas manzanas tenés vos?",
        "options": [
            "1 manzana",
            "2 manzanas",
            "3 manzanas",
            "Ninguna"
        ],
        "correct": 1,
        "explanation": "¡Tenés 2 manzanas! Son las que tomaste con tus manos.",
        "id": "q_g5_ingenio_14"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Por qué se produce el arcoíris en el cielo?",
        "options": [
            "Por el reflejo del agua del mar en las nubes",
            "Porque las gotas de lluvia descomponen y refractan la luz blanca del Sol en colores",
            "Porque la atmósfera cambia de color según la temperatura",
            "Por el humo de los aviones"
        ],
        "correct": 1,
        "explanation": "Cada gota de lluvia actúa como un pequeño prisma óptico que refracta y descompone los rayos solares.",
        "id": "q_g5_ingenio_15"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es la estrella más cercana a nuestro planeta Tierra?",
        "options": [
            "Alfa Centauri",
            "La Estrella Polar",
            "El Sol",
            "Sirio"
        ],
        "correct": 2,
        "explanation": "¡El Sol es una estrella! Y es la más cercana a nosotros, a unos 150 millones de kilómetros.",
        "id": "q_g5_ingenio_16"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el hueso más largo y fuerte del esqueleto humano?",
        "options": [
            "El fémur (en el muslo)",
            "El húmero (en el brazo)",
            "La tibia",
            "La clavícula"
        ],
        "correct": 0,
        "explanation": "El fémur, ubicado en la pierna entre la cadera y la rodilla, es el hueso más largo y resistente del cuerpo.",
        "id": "q_g5_ingenio_17"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Tiene dientes pero no muerde, desenreda sin hablar. ¿Quién es?",
        "options": [
            "El peine",
            "El tenedor",
            "La sierra",
            "El cepillo de dientes"
        ],
        "correct": 0,
        "explanation": "¡El peine! Tiene dientes finos para peinar y desenredar el cabello pero no muerde.",
        "id": "q_g5_ingenio_18"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué científico y educador argentino impulsó las escuelas normales y fue presidente entre 1868 y 1874?",
        "options": [
            "Domingo Faustino Sarmiento",
            "Mariano Moreno",
            "Bernardino Rivadavia",
            "Justo José de Urquiza"
        ],
        "correct": 0,
        "explanation": "Sarmiento es recordado como el gran impulsor de la educación pública y popular en Argentina.",
        "id": "q_g5_ingenio_19"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el gas que compone la mayor parte del aire que nos rodea en la atmósfera terrestre?",
        "options": [
            "Oxígeno",
            "Nitrógeno",
            "Dióxido de carbono",
            "Hidrógeno"
        ],
        "correct": 1,
        "explanation": "El nitrógeno compone aproximadamente el 78% del aire atmosférico, mientras que el oxígeno es el 21%.",
        "id": "q_g5_ingenio_20"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Si me nombras, desaparezco. ¿Quién soy?",
        "options": [
            "El silencio",
            "La oscuridad",
            "El viento",
            "El eco"
        ],
        "correct": 0,
        "explanation": "¡El silencio! En cuanto pronunciás una palabra, rompés el silencio.",
        "id": "q_g5_ingenio_21"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué instrumento se utiliza comúnmente para medir la temperatura ambiental o del cuerpo?",
        "options": [
            "Barómetro",
            "Termómetro",
            "Anemómetro",
            "Higrómetro"
        ],
        "correct": 1,
        "explanation": "El termómetro es el instrumento de medición térmica calibrado en grados Celsius o Fahrenheit.",
        "id": "q_g5_ingenio_22"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso perro de historieta argentina creado por Manuel García Ferré resolvía misterios con Anteojito?",
        "options": [
            "Patoruzito",
            "Pelopincho",
            "Trapito",
            "Antifaz"
        ],
        "correct": 1,
        "explanation": "Pelopincho y Cachirula, o Calculín y Anteojito son íconos entrañables de la historieta infantil argentina.",
        "id": "q_g5_ingenio_23"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué cosa vuela sin alas y llora sin tener ojos?",
        "options": [
            "La nube",
            "El avión",
            "El viento",
            "La cometa"
        ],
        "correct": 0,
        "explanation": "¡La nube! Vuela llevada por el viento y cuando 'llora' produce la lluvia.",
        "id": "q_g5_ingenio_24"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué planeta del Sistema Solar es conocido como el 'Planeta Rojo' debido al óxido de hierro en su suelo?",
        "options": [
            "Marte",
            "Venus",
            "Júpiter",
            "Saturno"
        ],
        "correct": 0,
        "explanation": "Marte se ve rojizo en el cielo nocturno por la abundancia de óxidos de hierro en su superficie.",
        "id": "q_g5_ingenio_25"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Si tengo 4 patas pero no puedo caminar, ¿qué soy?",
        "options": [
            "Una mesa o silla",
            "Un gato dormido",
            "Un ciervo",
            "Un auto"
        ],
        "correct": 0,
        "explanation": "Las mesas y sillas tienen 4 patas para apoyarse pero son objetos inanimados.",
        "id": "q_g5_ingenio_26"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el metal líquido a temperatura ambiente que se usaba antiguamente en los termómetros clínicos?",
        "options": [
            "Mercurio",
            "Plomo",
            "Cobre",
            "Aluminio"
        ],
        "correct": 0,
        "explanation": "El mercurio (Hg) es el único elemento metálico líquido a temperatura ambiente estándar.",
        "id": "q_g5_ingenio_27"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué país de América del Sur tiene la mayor extensión territorial?",
        "options": [
            "Brasil",
            "Argentina",
            "Colombia",
            "Perú"
        ],
        "correct": 0,
        "explanation": "Brasil es el país más grande de Sudamérica (más de 8,5 millones de km²), seguido por Argentina.",
        "id": "q_g5_ingenio_28"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué fruta es?",
        "options": [
            "La pera",
            "La manzana",
            "El limón",
            "La uva"
        ],
        "correct": 0,
        "explanation": "¡La pera! El acertijo contiene la respuesta oculta en la frase ('espera' -> 'es pera').",
        "id": "q_g5_ingenio_29"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso personaje de historieta argentina creado por Quino ama la paz y odia la sopa?",
        "options": [
            "Mafalda",
            "Mónica",
            "Inodoro Pereyra",
            "Hijitus"
        ],
        "correct": 0,
        "explanation": "Mafalda es la famosa niña reflexiva creada por Joaquín Salvador Lavado (Quino) en 1964.",
        "id": "q_g5_ingenio_30"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuántos lados tiene una señal de tránsito reglamentaria de 'PARE' o 'STOP'?",
        "options": [
            "8 lados (octógono)",
            "6 lados (hexágono)",
            "4 lados",
            "3 lados"
        ],
        "correct": 0,
        "explanation": "Las señales de PARE son octogonales (8 lados) para que los conductores las reconozcan incluso de espaldas.",
        "id": "q_g5_ingenio_31"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué entra al agua y nunca se moja?",
        "options": [
            "La sombra",
            "El pez",
            "La esponja",
            "El barco"
        ],
        "correct": 0,
        "explanation": "¡La sombra! Se proyecta sobre el agua pero no absorbe humedad ni se moja.",
        "id": "q_g5_ingenio_32"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué instrumento musical tradicional del tango argentino es pariente del acordeón y tiene fuelle?",
        "options": [
            "El bandoneón",
            "El violín",
            "La guitarra criolla",
            "El charango"
        ],
        "correct": 0,
        "explanation": "El bandoneón es el instrumento emblemático de la música ciudadana rioplatense y del tango.",
        "id": "q_g5_ingenio_33"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué ave marina no vuela por el aire pero es una excelente nadadora y vive en colonias en el sur?",
        "options": [
            "El pingüino",
            "La gaviota",
            "El albatros",
            "El cormorán"
        ],
        "correct": 0,
        "explanation": "Los pingüinos tienen alas adaptadas como aletas para propulsarse con gran velocidad bajo el agua.",
        "id": "q_g5_ingenio_34"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué se hace más y más húmedo cuanto más seca?",
        "options": [
            "Una toalla",
            "El sol",
            "El secador de pelo",
            "Una esponja seca"
        ],
        "correct": 0,
        "explanation": "¡La toalla! Mientras más seca el cuerpo o los platos, más agua absorbe y más húmeda queda.",
        "id": "q_g5_ingenio_35"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es la capital de la República Argentina?",
        "options": [
            "Ciudad Autónoma de Buenos Aires (CABA)",
            "La Plata",
            "Rosario",
            "Córdoba"
        ],
        "correct": 0,
        "explanation": "CABA es la capital federal y sede del gobierno nacional argentino.",
        "id": "q_g5_ingenio_36"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué color resulta de mezclar en proporciones iguales pintura azul y pintura amarilla?",
        "options": [
            "Verde",
            "Naranja",
            "Violeta",
            "Marrón"
        ],
        "correct": 0,
        "explanation": "El verde es un color secundario obtenido de la mezcla de los primarios azul y amarillo.",
        "id": "q_g5_ingenio_37"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué va hacia arriba pero nunca baja?",
        "options": [
            "Tu edad",
            "La lluvia",
            "Una pelota",
            "Un globo con helio"
        ],
        "correct": 0,
        "explanation": "¡Los años y tu edad! Cada cumpleaños suma un año y nunca disminuye.",
        "id": "q_g5_ingenio_38"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué emblemático árbol autóctono de Argentina y Uruguay tiene flores rojas declaradas flor nacional?",
        "options": [
            "El ceibo",
            "El jacarandá",
            "El ombú",
            "El pino"
        ],
        "correct": 0,
        "explanation": "La flor del ceibo fue declarada Flor Nacional de Argentina en 1942.",
        "id": "q_g5_ingenio_39"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué astro natural produce las mareas altas y bajas en las costas marinas de la Tierra?",
        "options": [
            "La atracción gravitatoria de la Luna",
            "El calor del Sol solamente",
            "Los vientos alisios",
            "Las ballenas"
        ],
        "correct": 0,
        "explanation": "La fuerza de atracción gravitatoria que ejerce la Luna sobre los océanos es la causa principal de las mareas.",
        "id": "q_g5_ingenio_40"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 25% de 200?",
        "options": [
            "25",
            "40",
            "50",
            "75"
        ],
        "correct": 2,
        "explanation": "El 25% representa la cuarta parte (1/4). 200 ÷ 4 = 50.",
        "id": "q_g6_matematica_1"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es la fórmula para calcular el área de un triángulo de base 'b' y altura 'h'?",
        "options": [
            "b × h",
            "(b × h) ÷ 2",
            "b + h",
            "2 × (b + h)"
        ],
        "correct": 1,
        "explanation": "El área de cualquier triángulo se calcula como Base × Altura dividido por 2.",
        "id": "q_g6_matematica_2"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál de estos números es un número primo (solo divisible por 1 y por sí mismo)?",
        "options": [
            "9",
            "15",
            "17",
            "21"
        ],
        "correct": 2,
        "explanation": "17 es primo porque solo tiene dos divisores: el 1 y el 17. 9, 15 y 21 son compuestos.",
        "id": "q_g6_matematica_3"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si en una ciudad la temperatura era de 3 °C y bajó 5 grados, ¿qué temperatura hace ahora?",
        "options": [
            "-2 °C",
            "2 °C",
            "-5 °C",
            "8 °C"
        ],
        "correct": 0,
        "explanation": "3 - 5 = -2 °C. Representa un número entero negativo por debajo de cero.",
        "id": "q_g6_matematica_4"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el valor de 'x' en la ecuación: 2x + 10 = 30?",
        "options": [
            "5",
            "10",
            "15",
            "20"
        ],
        "correct": 1,
        "explanation": "2x = 30 - 10 = 20. Por lo tanto, x = 20 ÷ 2 = 10.",
        "id": "q_g6_matematica_5"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el mínimo común múltiplo (mcm) entre 4 y 6?",
        "options": [
            "12",
            "24",
            "8",
            "2"
        ],
        "correct": 0,
        "explanation": "Los múltiplos de 4 son 4, 8, 12... y de 6 son 6, 12... El menor múltiplo común es 12.",
        "id": "q_g6_matematica_6"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 50% de 380?",
        "options": [
            "190",
            "180",
            "175",
            "195"
        ],
        "correct": 0,
        "explanation": "El 50% equivale a la mitad exacta de una cantidad: 380 ÷ 2 = 190.",
        "id": "q_g6_matematica_7"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 10% de 4.500?",
        "options": [
            "45",
            "450",
            "4.050",
            "455"
        ],
        "correct": 1,
        "explanation": "El 10% se calcula dividiendo la cantidad por 10: 4.500 ÷ 10 = 450.",
        "id": "q_g6_matematica_8"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 75% de 400?",
        "options": [
            "250",
            "300",
            "350",
            "320"
        ],
        "correct": 1,
        "explanation": "El 75% equivale a tres cuartas partes (3/4). 400 ÷ 4 = 100, y 100 × 3 = 300.",
        "id": "q_g6_matematica_9"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es la raíz cuadrada de 81 (√81)?",
        "options": [
            "7",
            "8",
            "9",
            "10"
        ],
        "correct": 2,
        "explanation": "9 × 9 = 81, por lo tanto la raíz cuadrada de 81 es 9.",
        "id": "q_g6_matematica_10"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 2 elevado a la cuarta potencia (2⁴)?",
        "options": [
            "8",
            "16",
            "32",
            "12"
        ],
        "correct": 1,
        "explanation": "2 × 2 × 2 × 2 = 16.",
        "id": "q_g6_matematica_11"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el valor de 'x' en la ecuación: 3x = 27?",
        "options": [
            "7",
            "8",
            "9",
            "10"
        ],
        "correct": 2,
        "explanation": "x = 27 ÷ 3 = 9.",
        "id": "q_g6_matematica_12"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si una remera cuesta $8.000 y tiene un descuento del 20%, ¿cuánto dinero se descuenta?",
        "options": [
            "$1.200",
            "$1.600",
            "$2.000",
            "$800"
        ],
        "correct": 1,
        "explanation": "El 10% es $800; el 20% es el doble: 2 × $800 = $1.600.",
        "id": "q_g6_matematica_13"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el Máximo Común Divisor (MCD) entre 12 y 18?",
        "options": [
            "3",
            "4",
            "6",
            "9"
        ],
        "correct": 2,
        "explanation": "Los divisores de 12 son 1, 2, 3, 4, 6, 12. De 18: 1, 2, 3, 6, 9, 18. El mayor divisor compartido es 6.",
        "id": "q_g6_matematica_14"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el número primo más pequeño de dos cifras?",
        "options": [
            "10",
            "11",
            "13",
            "17"
        ],
        "correct": 1,
        "explanation": "11 es el menor número de dos dígitos que solo es divisible por 1 y por 11.",
        "id": "q_g6_matematica_15"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "En un paralelogramo de base 8 cm y altura 5 cm, ¿cuál es su área?",
        "options": [
            "20 cm²",
            "40 cm²",
            "26 cm²",
            "13 cm²"
        ],
        "correct": 1,
        "explanation": "El área del paralelogramo es Base × Altura: 8 cm × 5 cm = 40 cm².",
        "id": "q_g6_matematica_16"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de sumar 3/5 + 1/10?",
        "options": [
            "4/15",
            "7/10",
            "4/10",
            "3/10"
        ],
        "correct": 1,
        "explanation": "Buscando común denominador (10): 3/5 = 6/10. Luego: 6/10 + 1/10 = 7/10.",
        "id": "q_g6_matematica_17"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el producto de multiplicar 2/3 × 3/4?",
        "options": [
            "6/12 o 1/2",
            "5/7",
            "6/7",
            "1/4"
        ],
        "correct": 0,
        "explanation": "(2 × 3) / (3 × 4) = 6/12, que simplificado por 6 da 1/2.",
        "id": "q_g6_matematica_18"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si un auto recorre 180 km en 2 horas a velocidad constante, ¿cuántos km recorre por hora?",
        "options": [
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "85 km/h"
        ],
        "correct": 1,
        "explanation": "180 km ÷ 2 horas = 90 km por hora.",
        "id": "q_g6_matematica_19"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es (-4) + 10?",
        "options": [
            "-6",
            "6",
            "-14",
            "14"
        ],
        "correct": 1,
        "explanation": "A diez le restamos cuatro: 10 - 4 = 6.",
        "id": "q_g6_matematica_20"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es (-3) + (-5)?",
        "options": [
            "-8",
            "8",
            "-2",
            "2"
        ],
        "correct": 0,
        "explanation": "Sumar dos números negativos aumenta la deuda: (-3) + (-5) = -8.",
        "id": "q_g6_matematica_21"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de dividir 15 entre 0,5?",
        "options": [
            "7,5",
            "30",
            "15,5",
            "3"
        ],
        "correct": 1,
        "explanation": "Dividir por 0,5 equivale a multiplicar por 2: 15 ÷ 0,5 = 30.",
        "id": "q_g6_matematica_22"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si la suma de los ángulos interiores de todo triángulo es siempre 180°, y dos miden 60° y 70°, ¿cuánto mide el tercero?",
        "options": [
            "40°",
            "50°",
            "60°",
            "70°"
        ],
        "correct": 1,
        "explanation": "60° + 70° = 130°. Para llegar a 180° faltan: 180° - 130° = 50°.",
        "id": "q_g6_matematica_23"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el perímetro de un rombo cuyos lados miden 6,5 cm cada uno?",
        "options": [
            "24 cm",
            "26 cm",
            "28 cm",
            "13 cm"
        ],
        "correct": 1,
        "explanation": "El rombo tiene 4 lados iguales: 4 × 6,5 cm = 26 cm.",
        "id": "q_g6_matematica_24"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál de los siguientes números es divisible por 9?",
        "options": [
            "125",
            "342",
            "214",
            "501"
        ],
        "correct": 1,
        "explanation": "Un número es divisible por 9 si la suma de sus cifras es múltiplo de 9: 3 + 4 + 2 = 9.",
        "id": "q_g6_matematica_25"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el valor numérico de la expresión '3a + 5' cuando a = 4?",
        "options": [
            "12",
            "17",
            "19",
            "20"
        ],
        "correct": 1,
        "explanation": "Reemplazando: 3 × 4 + 5 = 12 + 5 = 17.",
        "id": "q_g6_matematica_26"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cómo se expresa en lenguaje algebraico: 'el triple de un número aumentado en dos'?",
        "options": [
            "3x + 2",
            "3(x + 2)",
            "x³ + 2",
            "x/3 + 2"
        ],
        "correct": 0,
        "explanation": "'El triple de un número' es 3x, y 'aumentado en dos' es + 2: 3x + 2.",
        "id": "q_g6_matematica_27"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si 6 fotocopias cuestan $300, ¿cuánto costarán 15 fotocopias?",
        "options": [
            "$600",
            "$750",
            "$800",
            "$900"
        ],
        "correct": 1,
        "explanation": "Cada fotocopia cuesta $50 ($300 ÷ 6). Entonces 15 fotocopias costarán 15 × $50 = $750.",
        "id": "q_g6_matematica_28"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuántos metros cuadrados hay en 1 hectárea (ha)?",
        "options": [
            "1.000 m²",
            "10.000 m²",
            "100.000 m²",
            "100 m²"
        ],
        "correct": 1,
        "explanation": "1 hectárea equivale a una manzana de 100 m × 100 m = 10.000 metros cuadrados.",
        "id": "q_g6_matematica_29"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es la media aritmética (promedio) de las notas: 7, 8 y 9?",
        "options": [
            "7,5",
            "8",
            "8,5",
            "9"
        ],
        "correct": 1,
        "explanation": "(7 + 8 + 9) ÷ 3 = 24 ÷ 3 = 8.",
        "id": "q_g6_matematica_30"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué número decimal resulta de dividir 1 entre 4 (1/4)?",
        "options": [
            "0,2",
            "0,25",
            "0,4",
            "0,14"
        ],
        "correct": 1,
        "explanation": "1 dividido 4 es exactamente 0,25 (un cuarto).",
        "id": "q_g6_matematica_31"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el valor absoluto de -15 (| -15 |)?",
        "options": [
            "-15",
            "15",
            "0",
            "1/15"
        ],
        "correct": 1,
        "explanation": "El valor absoluto representa la distancia al cero en la recta numérica, siempre positivo: 15.",
        "id": "q_g6_matematica_32"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si el radio de un círculo mide 5 cm, ¿cuánto mide su diámetro?",
        "options": [
            "2,5 cm",
            "10 cm",
            "15 cm",
            "25 cm"
        ],
        "correct": 1,
        "explanation": "El diámetro de una circunferencia es el doble de su radio: 2 × 5 cm = 10 cm.",
        "id": "q_g6_matematica_33"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 10² + 5²?",
        "options": [
            "100",
            "125",
            "150",
            "225"
        ],
        "correct": 1,
        "explanation": "10² = 100 y 5² = 25. 100 + 25 = 125.",
        "id": "q_g6_matematica_34"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "En una escala 1:100 de un mapa, ¿qué distancia real representan 3 cm en el papel?",
        "options": [
            "30 cm",
            "3 metros (300 cm)",
            "30 metros",
            "300 metros"
        ],
        "correct": 1,
        "explanation": "3 cm × 100 = 300 cm = 3 metros.",
        "id": "q_g6_matematica_35"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el menor múltiplo común (mcm) entre 3, 4 y 6?",
        "options": [
            "12",
            "18",
            "24",
            "36"
        ],
        "correct": 0,
        "explanation": "12 es múltiplo de 3 (3×4), de 4 (4×3) y de 6 (6×2).",
        "id": "q_g6_matematica_36"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué número entero representa estar a 15 metros bajo el nivel del mar?",
        "options": [
            "+15",
            "-15",
            "0",
            "1/15"
        ],
        "correct": 1,
        "explanation": "Las profundidades bajo el nivel de referencia (0) se expresan con signo negativo: -15.",
        "id": "q_g6_matematica_37"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 0,6 × 0,4?",
        "options": [
            "0,24",
            "2,4",
            "0,024",
            "0,10"
        ],
        "correct": 0,
        "explanation": "6 × 4 = 24. Con dos lugares decimales en total: 0,24.",
        "id": "q_g6_matematica_38"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si un ángulo mide 35°, ¿cuánto mide su ángulo complementario (que juntos suman 90°)?",
        "options": [
            "45°",
            "55°",
            "65°",
            "145°"
        ],
        "correct": 1,
        "explanation": "90° - 35° = 55°.",
        "id": "q_g6_matematica_39"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si un ángulo mide 110°, ¿cuánto mide su ángulo suplementario (que juntos suman 180°)?",
        "options": [
            "70°",
            "80°",
            "90°",
            "60°"
        ],
        "correct": 0,
        "explanation": "180° - 110° = 70°.",
        "id": "q_g6_matematica_40"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "Cuando el narrador relata la historia usando 'yo' y participa como personaje principal, es un narrador:",
        "options": [
            "Omnisciente",
            "Protagonista",
            "Testigo",
            "Segunda persona"
        ],
        "correct": 1,
        "explanation": "El narrador protagonista cuenta los hechos en primera persona desde su propia experiencia.",
        "id": "q_g6_lengua_1"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué fenómeno fonético ocurre en la palabra 'pa-ís', donde se rompe el diptongo por tilde en la vocal cerrada?",
        "options": [
            "Hiato",
            "Triptongo",
            "Aféresis",
            "Sinalefa"
        ],
        "correct": 0,
        "explanation": "Es un hiato acentual: la vocal cerrada 'i' con tilde se separa de la abierta 'a' en sílabas distintas.",
        "id": "q_g6_lengua_2"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la oración 'El científico investigó minuciosamente los fósiles', la palabra 'minuciosamente' es un:",
        "options": [
            "Sustantivo común",
            "Adverbio de modo",
            "Verbo conjugado",
            "Pronombre"
        ],
        "correct": 1,
        "explanation": "Indica 'cómo' o de qué modo se realizó la acción del verbo investigar (adverbio de modo).",
        "id": "q_g6_lengua_3"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la transformación a voz pasiva de 'El jurado eligió la mejor obra'?",
        "options": [
            "La mejor obra fue elegida por el jurado",
            "La mejor obra elegirá al jurado",
            "El jurado ha sido elegido por la obra",
            "Eligiendo la mejor obra estuvo el jurado"
        ],
        "correct": 0,
        "explanation": "El objeto directo pasa a sujeto paciente: 'La mejor obra' + verbo ser conjugado + participio + 'por el jurado'.",
        "id": "q_g6_lengua_4"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se llama el narrador que conoce absolutamente todo lo que piensan y sienten los personajes?",
        "options": [
            "Narrador omnisciente",
            "Narrador testigo",
            "Narrador protagonista",
            "Narrador en segunda persona"
        ],
        "correct": 0,
        "explanation": "El narrador omnisciente sabe todo sobre los hechos, pensamientos y emociones de los personajes.",
        "id": "q_g6_lengua_5"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la frase 'El tiempo es oro', ¿qué recurso retórico se utiliza?",
        "options": [
            "Metáfora",
            "Comparación con 'como'",
            "Hipérbole",
            "Personificación"
        ],
        "correct": 0,
        "explanation": "Es una metáfora: identifica directamente el valor del tiempo con el oro sin usar nexos comparativos.",
        "id": "q_g6_lengua_6"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el sujeto en la oración pasiva 'El gol fue anotado por el delantero'?",
        "options": [
            "El gol (sujeto paciente)",
            "Por el delantero",
            "Anotado",
            "Fue"
        ],
        "correct": 0,
        "explanation": "'El gol' recibe la acción del verbo ser + participio (sujeto paciente).",
        "id": "q_g6_lengua_7"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de texto defiende una postura o punto de vista mediante argumentos y razones?",
        "options": [
            "Texto argumentativo",
            "Texto instructivo",
            "Texto descriptivo",
            "Texto narrativo"
        ],
        "correct": 0,
        "explanation": "El texto argumentativo (como editoriales y ensayos) busca persuadir al lector mediante argumentos válidos.",
        "id": "q_g6_lengua_8"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la palabra 'geología', ¿qué significa la raíz griega 'geo'?",
        "options": [
            "Tierra",
            "Agua",
            "Fuego",
            "Vida"
        ],
        "correct": 0,
        "explanation": "'Geo' proviene del griego y significa Tierra (geología = estudio de la Tierra).",
        "id": "q_g6_lengua_9"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas palabras presenta hiato?",
        "options": [
            "Teatro",
            "Cielo",
            "Fuego",
            "Tierra"
        ],
        "correct": 0,
        "explanation": "En 'te-a-tro', las vocales abiertas 'e' y 'a' van en sílabas distintas formando un hiato simple.",
        "id": "q_g6_lengua_10"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En 'El alumno respondió inteligentemente', la palabra destacada es un adverbio de:",
        "options": [
            "Modo",
            "Tiempo",
            "Lugar",
            "Cantidad"
        ],
        "correct": 0,
        "explanation": "Indica el modo o manera en que se desarrolló la acción de responder.",
        "id": "q_g6_lengua_11"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué signo de puntuación se usa para introducir citas textuales o una lista anunciada?",
        "options": [
            "Dos puntos (:)",
            "Punto y coma (;)",
            "Punto final",
            "Puntos suspensivos"
        ],
        "correct": 0,
        "explanation": "Los dos puntos preceden a enumeraciones anunciadas o citas textuales literales.",
        "id": "q_g6_lengua_12"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de los siguientes verbos está conjugado en modo subjuntivo (que expresa deseo o duda)?",
        "options": [
            "Ojalá llueva",
            "Hoy llueve",
            "Ayer llovió",
            "Mañana lloverá"
        ],
        "correct": 0,
        "explanation": "'Llueva' está en modo subjuntivo porque expresa un deseo ('ojalá llueva').",
        "id": "q_g6_lengua_13"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué conector lógico se utiliza para contraponer una idea a otra?",
        "options": [
            "Sin embargo",
            "Además",
            "Por lo tanto",
            "En primer lugar"
        ],
        "correct": 0,
        "explanation": "'Sin embargo' o 'pero' son conectores adversativos de oposición.",
        "id": "q_g6_lengua_14"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la oración 'Ellos navegaron por el río', el verbo está en:",
        "options": [
            "Pretérito perfecto simple",
            "Pretérito imperfecto",
            "Presente",
            "Condicional"
        ],
        "correct": 0,
        "explanation": "'Navegaron' expresa una acción concluida en el pasado (pretérito perfecto simple).",
        "id": "q_g6_lengua_15"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el antónimo contextual de la palabra 'eficiente'?",
        "options": [
            "Ineficiente o incompetente",
            "Habilidoso",
            "Rápido",
            "Capaz"
        ],
        "correct": 0,
        "explanation": "Lo opuesto a eficiente es ineficiente o ineficaz.",
        "id": "q_g6_lengua_16"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué figura retórica se aprecia en 'La luna le sonreía a los enamorados'?",
        "options": [
            "Personificación",
            "Metáfora",
            "Anáfora",
            "Hipérbole"
        ],
        "correct": 0,
        "explanation": "Se le atribuye una acción humana (sonreír) a un astro inerte.",
        "id": "q_g6_lengua_17"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En estilo indirecto, la frase 'Ella dijo: Vendré mañana' se transforma en:",
        "options": [
            "Ella dijo que vendría al día siguiente",
            "Ella dijo vendré mañana",
            "Ella dijo que venía hoy",
            "Ella dijo vengo mañana"
        ],
        "correct": 0,
        "explanation": "En el estilo indirecto se eliminan las comillas y los tiempos y adverbios se adaptan al pasado.",
        "id": "q_g6_lengua_18"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas palabras debe escribirse con 'b' según la regla de terminaciones en '-bilidad'?",
        "options": [
            "Amabilidad",
            "Movilidad",
            "Civilidad",
            "Servilidad"
        ],
        "correct": 0,
        "explanation": "Las palabras terminadas en '-bilidad' se escriben con b (amabilidad, habilidad), salvo excepciones como movilidad.",
        "id": "q_g6_lengua_19"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En el análisis sintáctico de la oración 'Compré flores para mi madre', ¿qué función cumple 'para mi madre'?",
        "options": [
            "Objeto Indirecto",
            "Objeto Directo",
            "Circunstancial de lugar",
            "Sujeto"
        ],
        "correct": 0,
        "explanation": "'Para mi madre' es el destinatario de la acción de comprar (Objeto Indirecto).",
        "id": "q_g6_lengua_20"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el núcleo del sujeto en la oración 'La brillante alumna ganó la medalla'?",
        "options": [
            "Alumna",
            "Brillante",
            "La",
            "Ganó"
        ],
        "correct": 0,
        "explanation": "'Alumna' es el sustantivo que funciona como núcleo central del sintagma sujeto.",
        "id": "q_g6_lengua_21"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué palabra es un adverbio de cantidad?",
        "options": [
            "Bastante",
            "Cerca",
            "Ayer",
            "Pronto"
        ],
        "correct": 0,
        "explanation": "'Bastante', 'mucho', 'poco' y 'nada' son adverbios de cantidad.",
        "id": "q_g6_lengua_22"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el pretérito imperfecto del verbo 'vivir' para 'yo'?",
        "options": [
            "Vivía",
            "Viví",
            "He vivido",
            "Viviré"
        ],
        "correct": 0,
        "explanation": "El pretérito imperfecto de la 2ª y 3ª conjugación termina en -ía (vivía, comía).",
        "id": "q_g6_lengua_23"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de rima se produce cuando solo riman las vocales a partir de la última vocal acentuada?",
        "options": [
            "Rima asonante",
            "Rima consonante",
            "Rima libre",
            "Rima blanca"
        ],
        "correct": 0,
        "explanation": "En la rima asonante coinciden únicamente los sonidos vocálicos (ej: barca / plata).",
        "id": "q_g6_lengua_24"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de los siguientes sustantivos es abstracto?",
        "options": [
            "Esperanza",
            "Cuaderno",
            "Árbol",
            "Piedra"
        ],
        "correct": 0,
        "explanation": "'Esperanza' es una emoción o concepto mental no perceptible físicamente.",
        "id": "q_g6_lengua_25"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la función del conector 'en consecuencia'?",
        "options": [
            "Indicar efecto o resultado",
            "Indicar causa inicial",
            "Indicar oposición",
            "Indicar tiempo"
        ],
        "correct": 0,
        "explanation": "'En consecuencia' es un conector consecutivo que introduce el resultado de lo anterior.",
        "id": "q_g6_lengua_26"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la forma correcta del participio del verbo 'escribir'?",
        "options": [
            "Escrito",
            "Escribido",
            "Escribiente",
            "Escriturado"
        ],
        "correct": 0,
        "explanation": "El participio de escribir es irregular: 'escrito'.",
        "id": "q_g6_lengua_27"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la palabra 'inmortal', ¿qué significado aporta el prefijo 'in-'?",
        "options": [
            "Negación (no mortal)",
            "Aumento",
            "Hacia adentro",
            "Repetición"
        ],
        "correct": 0,
        "explanation": "El prefijo 'in-' (o 'im-' ante 'm' o 'p') indica negación o privación.",
        "id": "q_g6_lengua_28"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas palabras es esdrújula?",
        "options": [
            "Química",
            "Reloj",
            "Papel",
            "Cartel"
        ],
        "correct": 0,
        "explanation": "'Quí-mi-ca' se acentúa en la antepenúltima sílaba y lleva tilde siempre.",
        "id": "q_g6_lengua_29"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué elemento paratextual de un libro resume el contenido en la contratapa?",
        "options": [
            "La sinopsis o reseña",
            "El índice analítico",
            "El prólogo",
            "El glosario"
        ],
        "correct": 0,
        "explanation": "La sinopsis en la contratapa ofrece una síntesis orientativa del argumento de la obra.",
        "id": "q_g6_lengua_30"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el antónimo de 'complejo'?",
        "options": [
            "Simple o sencillo",
            "Difícil",
            "Enredado",
            "Extenso"
        ],
        "correct": 0,
        "explanation": "Lo opuesto a complejo es simple o elemental.",
        "id": "q_g6_lengua_31"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de oración es '¡Ojalá ganemos el campeonato!'?",
        "options": [
            "Desiderativa (expresa deseo)",
            "Enunciativa",
            "Imperativa",
            "Dubitativa"
        ],
        "correct": 0,
        "explanation": "Las oraciones desiderativas expresan un anhelo o deseo del hablante.",
        "id": "q_g6_lengua_32"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la regla para el uso de la letra 'g' en palabras con sonido suave antes de 'e' o 'i'?",
        "options": [
            "Se intercala una 'u' muda (ej: gue, gui)",
            "Se escribe con 'j'",
            "Se coloca diéresis obligatoria siempre",
            "Se duplica la letra g"
        ],
        "correct": 0,
        "explanation": "Para que la 'g' suene suave ante 'e' o 'i' se escribe 'gu' (guerra, guitarra).",
        "id": "q_g6_lengua_33"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué indica el punto y coma (;) en un texto?",
        "options": [
            "Una pausa mayor que la coma y menor que el punto",
            "El final de un párrafo",
            "Una pregunta abierta",
            "El inicio de un diálogo"
        ],
        "correct": 0,
        "explanation": "El punto y coma separa oraciones sintácticamente independientes pero con estrecha relación de sentido.",
        "id": "q_g6_lengua_34"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el infinitivo del verbo conjugado 'supimos'?",
        "options": [
            "Saber",
            "Suponer",
            "Subir",
            "Supeditar"
        ],
        "correct": 0,
        "explanation": "'Supimos' es la primera persona plural del pretérito perfecto simple de 'saber'.",
        "id": "q_g6_lengua_35"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas oraciones posee un predicado no verbal nominal?",
        "options": [
            "La primavera, hermosa",
            "Los pájaros cantan al amanecer",
            "El tren llegó puntual",
            "Estudiamos para el examen"
        ],
        "correct": 0,
        "explanation": "En 'La primavera, hermosa', el núcleo del predicado es un adjetivo sustituyendo al verbo copulativo con una coma.",
        "id": "q_g6_lengua_36"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se denominan las palabras que se pronuncian igual pero tienen distinto significado y grafía (ej: 'tubo' y 'tuvo')?",
        "options": [
            "Homófonas",
            "Sinónimas",
            "Antónimas",
            "Parónimas"
        ],
        "correct": 0,
        "explanation": "Las palabras homófonas suenan idénticas pero se escriben diferente y tienen significados distintos.",
        "id": "q_g6_lengua_37"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué sufijo forma sustantivos que indican profesión u ocupación (ej: periodista, ciclista)?",
        "options": [
            "-ista",
            "-eza",
            "-ción",
            "-ble"
        ],
        "correct": 0,
        "explanation": "El sufijo '-ista' indica oficio, profesión o afinidad ideológica/deportiva.",
        "id": "q_g6_lengua_38"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué recurso literario se observa en la repetición deliberada de una misma palabra al inicio de varios versos?",
        "options": [
            "Anáfora",
            "Metáfora",
            "Hipérbole",
            "Elipsis"
        ],
        "correct": 0,
        "explanation": "La anáfora es la repetición rítmica de palabras al comienzo de frases o versos consecutivos.",
        "id": "q_g6_lengua_39"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el gentilicio correspondiente a los nacidos en la provincia de Salta?",
        "options": [
            "Salteño",
            "Saltense",
            "Saltino",
            "Saltador"
        ],
        "correct": 0,
        "explanation": "El gentilicio oficial de Salta es 'salteño/a'.",
        "id": "q_g6_lengua_40"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la principal diferencia entre una célula eucariota y una célula procariota (como las bacterias)?",
        "options": [
            "La célula eucariota posee núcleo definido que guarda el ADN",
            "La célula procariota tiene clorofila siempre",
            "La procariota es mucho más grande y compleja",
            "Las eucariotas no tienen membrana celular"
        ],
        "correct": 0,
        "explanation": "Las células eucariotas tienen núcleo celular envuelto por membrana, mientras que las procariotas tienen el ADN libre en el citoplasma.",
        "id": "q_g6_naturales_1"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál de los siguientes es un ejemplo de cambio químico (transformación de la materia)?",
        "options": [
            "Hervir agua y evaporarla",
            "Cortar un papel en pedacitos",
            "Quemar un trozo de madera (combustión)",
            "Disolver azúcar en café"
        ],
        "correct": 2,
        "explanation": "La combustión es una reacción química: la madera reacciona con el oxígeno y se transforma en cenizas, humo y CO2.",
        "id": "q_g6_naturales_2"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué glándula del sistema reproductor masculino produce los espermatozoides y la testosterona?",
        "options": [
            "La vejiga",
            "Los testículos",
            "El páncreas",
            "La uretra"
        ],
        "correct": 1,
        "explanation": "Los testículos son las gónadas masculinas encargadas de la espermatogénesis y la síntesis hormonal.",
        "id": "q_g6_naturales_3"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de energía renovable aprovecha el calor proveniente del interior de la corteza terrestre?",
        "options": [
            "Biomasa",
            "Energía geotérmica",
            "Energía mareomotriz",
            "Energía hidroeléctrica"
        ],
        "correct": 1,
        "explanation": "'Geo' (tierra) y 'termia' (calor): la energía geotérmica aprovecha el vapor y calor de las profundidades de la Tierra.",
        "id": "q_g6_naturales_4"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué organela celular es la 'central energética' encargada de la respiración celular?",
        "options": [
            "Las mitocondrias",
            "Los ribosomas",
            "El aparato de Golgi",
            "Los lisosomas"
        ],
        "correct": 0,
        "explanation": "Las mitocondrias producen energía en forma de ATP mediante la respiración celular.",
        "id": "q_g6_naturales_5"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué organela presente solo en células vegetales contiene clorofila para realizar la fotosíntesis?",
        "options": [
            "Los cloroplastos",
            "Los centriolos",
            "Las vacuolas contráctiles",
            "El retículo rugoso"
        ],
        "correct": 0,
        "explanation": "Los cloroplastos son los plastos verdes donde se produce glucosa a partir de luz, agua y CO2.",
        "id": "q_g6_naturales_6"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál de los siguientes es un cambio físico y NO químico?",
        "options": [
            "La evaporación del agua al hervir",
            "La oxidación de un clavo de hierro",
            "La combustión de nafta",
            "La digestión de proteínas"
        ],
        "correct": 0,
        "explanation": "La evaporación es un cambio de estado: la molécula de H2O sigue siendo agua (cambio físico).",
        "id": "q_g6_naturales_7"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llaman los microorganismos unicelulares que carecen de núcleo definido?",
        "options": [
            "Bacterias (procariotas)",
            "Levaduras",
            "Amebas",
            "Protozoos"
        ],
        "correct": 0,
        "explanation": "Las bacterias son células procariotas: su material genético está disperso en el citoplasma.",
        "id": "q_g6_naturales_8"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué hormona es producida por el páncreas para regular los niveles de glucosa en la sangre?",
        "options": [
            "La insulina",
            "La adrenalina",
            "La tiroxina",
            "El estrógeno"
        ],
        "correct": 0,
        "explanation": "La insulina permite que la glucosa ingrese a las células para ser utilizada como energía.",
        "id": "q_g6_naturales_9"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de reproducción genera descendientes genéticamente idénticos a su único progenitor?",
        "options": [
            "Reproducción asexual",
            "Reproducción sexual",
            "Fecundación cruzada",
            "Polinización"
        ],
        "correct": 0,
        "explanation": "En la reproducción asexual (bipartición, esquejes, etc.) no hay intercambio genético: los hijos son clones.",
        "id": "q_g6_naturales_10"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál de los siguientes es un recurso energético fósil no renovable?",
        "options": [
            "El gas natural",
            "La energía mareomotriz",
            "La biomasa forestal sustentable",
            "La energía solar fotovoltaica"
        ],
        "correct": 0,
        "explanation": "El gas natural es un hidrocarburo fósil cuyos yacimientos tardaron millones de años en formarse.",
        "id": "q_g6_naturales_11"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué capa de la atmósfera se encuentra más cercana a la superficie y concentra el clima y las nubes?",
        "options": [
            "Troposfera",
            "Estratosfera",
            "Termosfera",
            "Mesosfera"
        ],
        "correct": 0,
        "explanation": "La troposfera es la capa inferior donde respiramos y se desarrollan todos los fenómenos meteorológicos.",
        "id": "q_g6_naturales_12"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué científico y médico británico descubrió la penicilina a partir de un hongo en 1928?",
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Edward Jenner"
        ],
        "correct": 0,
        "explanation": "Fleming descubrió que el moho Penicillium notatum producía una sustancia antibacteriana (penicilina).",
        "id": "q_g6_naturales_13"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué principio físico explica por qué un barco de acero flota en el agua a pesar de su gran peso?",
        "options": [
            "Principio de Arquímedes (empuje hidrostático)",
            "Tercera Ley de Newton",
            "Ley de Ohm",
            "Efecto Doppler"
        ],
        "correct": 0,
        "explanation": "El casco del barco desaloja un gran volumen de agua, generando una fuerza de empuje hacia arriba igual al peso del agua desalojada.",
        "id": "q_g6_naturales_14"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué glándulas del sistema reproductor femenino producen los óvulos y estrógenos?",
        "options": [
            "Los ovarios",
            "El útero",
            "Las trompas de Falopio",
            "Las glándulas suprarrenales"
        ],
        "correct": 0,
        "explanation": "Los ovarios son las gónadas femeninas encargadas de madurar los gametos femeninos (óvulos).",
        "id": "q_g6_naturales_15"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la velocidad aproximada de la luz en el vacío?",
        "options": [
            "300.000 kilómetros por segundo",
            "30.000 km/s",
            "3.000 km/s",
            "1.000 km/s"
        ],
        "correct": 0,
        "explanation": "La luz viaja en el vacío a aproximadamente 300.000 km/s (constante 'c').",
        "id": "q_g6_naturales_16"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué mineral es fundamental en la dieta para que los huesos y dientes crezcan fuertes?",
        "options": [
            "Calcio",
            "Hierro",
            "Sodio",
            "Yodo"
        ],
        "correct": 0,
        "explanation": "El calcio es el principal componente mineral de la hidroxiapatita que forma los huesos.",
        "id": "q_g6_naturales_17"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama el proceso biológico por el cual una oruga se transforma en mariposa adulta?",
        "options": [
            "Metamorfosis",
            "Evolución",
            "Mitosis",
            "Mimetismo"
        ],
        "correct": 0,
        "explanation": "La metamorfosis completa incluye las fases de huevo, larva (oruga), pupa (crisálida) y adulto.",
        "id": "q_g6_naturales_18"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué instrumento inventado por Galileo y perfeccionado por van Leeuwenhoek permitió ver células por primera vez?",
        "options": [
            "El microscopio óptico",
            "El telescopio astronómico",
            "El barómetro",
            "El periscopio"
        ],
        "correct": 0,
        "explanation": "El microscopio con lentes de aumento reveló el mundo microscópico celular a mediados del siglo XVII.",
        "id": "q_g6_naturales_19"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de energía se manifiesta en forma de calor que pasa de un cuerpo caliente a uno más frío?",
        "options": [
            "Energía térmica",
            "Energía mecánica",
            "Energía química",
            "Energía sonora"
        ],
        "correct": 0,
        "explanation": "La energía térmica o calor fluye espontáneamente del objeto a mayor temperatura al de menor.",
        "id": "q_g6_naturales_20"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué gas atmosférico producido por la quema de combustibles fósiles es el principal responsable del efecto invernadero antropogénico?",
        "options": [
            "Dióxido de carbono (CO2)",
            "Oxígeno (O2)",
            "Argón",
            "Nitrógeno (N2)"
        ],
        "correct": 0,
        "explanation": "El exceso de CO2 retiene la radiación infrarroja aumentando la temperatura media global.",
        "id": "q_g6_naturales_21"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál de estas enfermedades infecciosas es causada por un virus y prevenida mediante vacuna?",
        "options": [
            "Sarampión",
            "Tétanos",
            "Cólera",
            "Fiebre tifoidea"
        ],
        "correct": 0,
        "explanation": "El sarampión es causado por un virus ARN y se previene con la vacuna triple viral.",
        "id": "q_g6_naturales_22"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿En qué consiste la pasteurización desarrollada por Louis Pasteur?",
        "options": [
            "Calentar líquidos a temperatura controlada para eliminar bacterias patógenas sin hervir",
            "Congelar alimentos a -50 °C",
            "Agregar salmuera para deshidratar",
            "Filtrar el agua con arena"
        ],
        "correct": 0,
        "explanation": "La pasteurización destruye microorganismos patógenos en leche y jugos calentándolos moderadamente.",
        "id": "q_g6_naturales_23"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué componente celular contiene la información genética con las instrucciones hereditarias de la vida?",
        "options": [
            "El ADN en los cromosomas",
            "La membrana plasmática",
            "Los lípidos del citoplasma",
            "El agua celular"
        ],
        "correct": 0,
        "explanation": "El ADN (ácido desoxirribonucleico) guarda la información genética de padres a hijos.",
        "id": "q_g6_naturales_24"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál de los siguientes es un consumidor terciario en una red trófica marina?",
        "options": [
            "Una orca o tiburón blanco",
            "El fitoplancton",
            "El krill",
            "Una sardina"
        ],
        "correct": 0,
        "explanation": "Los grandes depredadores como orcas y tiburones ocupan los niveles tróficos más altos.",
        "id": "q_g6_naturales_25"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué nombre reciben las fuerzas que se ejercen sin necesidad de contacto físico (como la gravedad y el magnetismo)?",
        "options": [
            "Fuerzas a distancia",
            "Fuerzas de rozamiento",
            "Fuerzas elásticas",
            "Fuerzas de fricción"
        ],
        "correct": 0,
        "explanation": "La gravedad y las fuerzas magnéticas y electrostáticas actúan mediante campos a distancia.",
        "id": "q_g6_naturales_26"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la principal función de las plaquetas en el torrente sanguíneo?",
        "options": [
            "Participar en la coagulación para detener hemorragias",
            "Matar virus",
            "Llevar oxígeno",
            "Regular la acidez"
        ],
        "correct": 0,
        "explanation": "Las plaquetas o trombocitos forman coágulos taponando las lesiones en los vasos sanguíneos.",
        "id": "q_g6_naturales_27"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué nombre recibe la sustancia que acelera una reacción química sin consumirse en el proceso (como las enzimas)?",
        "options": [
            "Catalizador o enzima",
            "Reactivo puro",
            "Soluto inerte",
            "Inhibidor"
        ],
        "correct": 0,
        "explanation": "Los catalizadores biológicos (enzimas) aceleran las reacciones metabólicas celulares.",
        "id": "q_g6_naturales_28"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es el órgano sensorial humano que posee células fototractoras llamadas conos y bastones?",
        "options": [
            "El ojo (en la retina)",
            "El tímpano",
            "La piel",
            "La lengua"
        ],
        "correct": 0,
        "explanation": "Los conos permiten ver colores y los bastones captan la luz en condiciones de penumbra.",
        "id": "q_g6_naturales_29"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué bioma se caracteriza por temperaturas permanentemente gélidas, suelo congelado (permafrost) y escasa vegetación?",
        "options": [
            "La tundra",
            "La selva tropical",
            "El desierto cálido",
            "La sabana"
        ],
        "correct": 0,
        "explanation": "La tundra se ubica en las regiones árticas y subárticas, con vegetación de líquenes y musgos.",
        "id": "q_g6_naturales_30"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué ocurre con las moléculas de un gas cuando se calienta en un recipiente cerrado?",
        "options": [
            "Se mueven más rápido y aumenta la presión interna",
            "Se detienen por completo",
            "Se transforman en hielo",
            "Pierden toda su energía cinética"
        ],
        "correct": 0,
        "explanation": "Al aumentar la temperatura, las moléculas adquieren mayor energía cinética y chocan con más fuerza.",
        "id": "q_g6_naturales_31"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué aparato nos permite generar corriente eléctrica aprovechando el movimiento rotatorio de un imán y una bobina?",
        "options": [
            "El generador o dinamo",
            "La batería química",
            "El condensador",
            "El fusible"
        ],
        "correct": 0,
        "explanation": "Por inducción electromagnética descubierta por Faraday, mover una bobina cerca de un imán genera electricidad.",
        "id": "q_g6_naturales_32"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama la capa de gas que rodea a la Tierra protegiéndola del vacío espacial y moderando el clima?",
        "options": [
            "La atmósfera",
            "La hidrosfera",
            "La biosfera",
            "La geosfera"
        ],
        "correct": 0,
        "explanation": "La atmósfera es la envoltura gaseosa que contiene el aire y retiene el calor vital.",
        "id": "q_g6_naturales_33"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué nombre recibe el proceso celular de división que da origen a dos células hijas idénticas?",
        "options": [
            "Mitosis",
            "Meiosis",
            "Fecundación",
            "Metamorfosis"
        ],
        "correct": 0,
        "explanation": "La mitosis es la división celular somática que permite el crecimiento de tejidos y la cicatrización.",
        "id": "q_g6_naturales_34"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de lente óptica es más gruesa en el centro que en los bordes y hace converger los rayos de luz?",
        "options": [
            "Lente convergente (convexa)",
            "Lente divergente (cóncava)",
            "Espejo plano",
            "Prisma plano"
        ],
        "correct": 0,
        "explanation": "Las lentes biconvexas concentran los rayos luminosos en un foco; se usan en lupas y microscopios.",
        "id": "q_g6_naturales_35"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué fenómeno geológico es originado por la liberación repentina de energía en las fallas tectónicas?",
        "options": [
            "Un terremoto o sismo",
            "Un huracán",
            "Una erupción solar",
            "Una marea viva"
        ],
        "correct": 0,
        "explanation": "La fricción y choque entre placas tectónicas acumula tensión que al liberarse produce ondas sísmicas.",
        "id": "q_g6_naturales_36"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la principal función de la capa de grasa subcutánea en animales polares como focas y osos?",
        "options": [
            "Aislante térmico contra el frío extremo",
            "Permitirles volar",
            "Respirar bajo el agua",
            "Producir sal"
        ],
        "correct": 0,
        "explanation": "El tejido adiposo denso impide que el calor corporal interno se disipe hacia las aguas heladas.",
        "id": "q_g6_naturales_37"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué compuesto químico indispensable para la vida está formado por 2 átomos de hidrógeno y 1 de oxígeno?",
        "options": [
            "Agua (H2O)",
            "Dióxido de carbono (CO2)",
            "Metano (CH4)",
            "Glucosa"
        ],
        "correct": 0,
        "explanation": "El agua (H2O) es la molécula polar más abundante en los organismos vivos.",
        "id": "q_g6_naturales_38"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de energía posee un cuerpo en movimiento (como un tren o una pelota en el aire)?",
        "options": [
            "Energía cinética",
            "Energía potencial elástica",
            "Energía nuclear",
            "Energía electrostática"
        ],
        "correct": 0,
        "explanation": "La energía cinética es la energía asociada al movimiento de una masa (1/2 m·v²).",
        "id": "q_g6_naturales_39"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué vitamina sintetiza la piel humana gracias a la exposición responsable a la luz solar?",
        "options": [
            "Vitamina D",
            "Vitamina C",
            "Vitamina B12",
            "Vitamina A"
        ],
        "correct": 0,
        "explanation": "Los rayos UV activan la síntesis de vitamina D en la epidermis, clave para la absorción de calcio.",
        "id": "q_g6_naturales_40"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿A qué sector de la economía corresponden actividades como el turismo, el transporte y la educación?",
        "options": [
            "Sector primario",
            "Sector secundario (industrial)",
            "Sector terciario (servicios)",
            "Sector minero"
        ],
        "correct": 2,
        "explanation": "El sector terciario engloba todas las actividades de prestación de servicios y comercio.",
        "id": "q_g6_sociales_1"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál fue la gran oleada inmigratoria que transformó la sociedad argentina entre 1880 y 1914?",
        "options": [
            "Inmigración europea (principalmente italianos y españoles)",
            "Inmigración asiática de pescadores",
            "Inmigración colonial africana",
            "Inmigración norteamericana de granjeros"
        ],
        "correct": 0,
        "explanation": "Millones de inmigrantes europeos llegaron por el puerto de Buenos Aires atraídos por las oportunidades laborales del modelo agroexportador.",
        "id": "q_g6_sociales_2"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama la línea imaginaria que divide a la Tierra en hemisferio Norte y hemisferio Sur?",
        "options": [
            "Meridiano de Greenwich",
            "Trópico de Cáncer",
            "Línea del Ecuador",
            "Círculo Polar Ártico"
        ],
        "correct": 2,
        "explanation": "La línea del Ecuador (paralelo 0°) divide al planeta exactamente en los dos hemisferios: Norte y Sur.",
        "id": "q_g6_sociales_3"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué fenómeno ambiental global es provocado por el exceso de gases de efecto invernadero en la atmósfera?",
        "options": [
            "Tectónica de placas",
            "Calentamiento global",
            "Deriva continental",
            "Eras glaciares naturales"
        ],
        "correct": 1,
        "explanation": "El aumento de gases como el dióxido de carbono retiene calor excesivo provocando el calentamiento global y cambio climático.",
        "id": "q_g6_sociales_4"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denominó el modelo económico de Argentina entre 1880 y 1930 basado en la exportación de granos y carnes?",
        "options": [
            "Modelo agroexportador",
            "Modelo de sustitución de importaciones",
            "Modelo minero colonial",
            "Modelo manufacturero pesado"
        ],
        "correct": 0,
        "explanation": "Argentina exportaba trigo, maíz y carne vacuna a Europa (principalmente a Gran Bretaña), comprando manufacturas.",
        "id": "q_g6_sociales_5"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué ley histórica sancionada en 1912 estableció el voto secreto, obligatorio y universal masculino en Argentina?",
        "options": [
            "Ley Sáenz Peña",
            "Ley de Residencia",
            "Ley 1420 de Educación Común",
            "Ley Avellaneda"
        ],
        "correct": 0,
        "explanation": "La Ley Sáenz Peña (N° 8871) democratizó el sufragio garantizando el padrón militar y el cuarto oscuro.",
        "id": "q_g6_sociales_6"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál fue el primer presidente argentino electo democráticamente bajo la Ley Sáenz Peña en 1916?",
        "options": [
            "Hipólito Yrigoyen",
            "Julio Argentino Roca",
            "Bartolomé Mitre",
            "Marcelo T. de Alvear"
        ],
        "correct": 0,
        "explanation": "Hipólito Yrigoyen, líder de la Unión Cívica Radical, asumió la presidencia en 1916.",
        "id": "q_g6_sociales_7"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué meridiano imaginario se toma como referencia mundial para medir la longitud geográfica (0°)?",
        "options": [
            "Meridiano de Greenwich",
            "Línea del Ecuador",
            "Trópico de Capricornio",
            "Antimeridiano"
        ],
        "correct": 0,
        "explanation": "El meridiano de Greenwich (Londres) divide la Tierra en hemisferio Oriental y Occidental.",
        "id": "q_g6_sociales_8"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Mendoza, famosa por la fiesta de la Vendimia y la vitivinicultura?",
        "options": [
            "Mendoza",
            "San Rafael",
            "Godoy Cruz",
            "Malargüe"
        ],
        "correct": 0,
        "explanation": "La ciudad de Mendoza es la capital de la provincia cuyana a los pies de la cordillera.",
        "id": "q_g6_sociales_9"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué río de gran caudal divide a la República Argentina de la República de Chile en el extremo sur fueguino?",
        "options": [
            "El Canal Beagle",
            "El Río Negro",
            "El Río Santa Cruz",
            "El Río Limay"
        ],
        "correct": 0,
        "explanation": "El Canal Beagle es el paso marítimo natural que bordea Tierra del Fuego.",
        "id": "q_g6_sociales_10"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denomina al sector de la economía que extrae materias primas de la naturaleza (agricultura, pesca, minería)?",
        "options": [
            "Sector primario",
            "Sector secundario",
            "Sector terciario",
            "Sector cuaternario"
        ],
        "correct": 0,
        "explanation": "El sector primario engloba la obtención directa de recursos naturales sin procesar.",
        "id": "q_g6_sociales_11"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué hito arquitectónico y ferroviario conectó las provincias del interior con el puerto de Buenos Aires a fines del siglo XIX?",
        "options": [
            "El ferrocarril",
            "La autopista Panamericana",
            "Los barcos a vapor fluviales",
            "El tranvía aéreo"
        ],
        "correct": 0,
        "explanation": "El tendido de vías férreas permitió trasladar las cosechas del interior hacia los buques ultramarinos.",
        "id": "q_g6_sociales_12"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué documento legal es el conjunto de leyes fundamentales de una provincia que no puede contradecir a la Constitución Nacional?",
        "options": [
            "La Constitución Provincial",
            "El Código de Faltas",
            "El Reglamento Escolar",
            "La Ordenanza Municipal"
        ],
        "correct": 0,
        "explanation": "Cada provincia argentina tiene su propia Constitución según el sistema federal de gobierno.",
        "id": "q_g6_sociales_13"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama el paralelo imaginario ubicado a los 23° 27' al sur del Ecuador que cruza el norte argentino?",
        "options": [
            "Trópico de Capricornio",
            "Trópico de Cáncer",
            "Círculo Polar Antártico",
            "Paralelo 42"
        ],
        "correct": 0,
        "explanation": "El Trópico de Capricornio atraviesa las provincias de Jujuy, Salta y Formosa.",
        "id": "q_g6_sociales_14"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué gran conflicto armado europeo ocurrió entre 1939 y 1945 con impacto en el comercio internacional?",
        "options": [
            "La Segunda Guerra Mundial",
            "La Guerra de Secesión",
            "La Guerra de Corea",
            "La Guerra de Vietnam"
        ],
        "correct": 0,
        "explanation": "La Segunda Guerra Mundial enfrentó a los Aliados contra las Potencias del Eje modificando la economía global.",
        "id": "q_g6_sociales_15"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la principal cuenca hidrográfica que drena las aguas del Litoral argentino y desemboca en el Río de la Plata?",
        "options": [
            "La Cuenca del Plata",
            "La Cuenca del Colorado",
            "La Cuenca del Amazonas",
            "La Cuenca del Desaguadero"
        ],
        "correct": 0,
        "explanation": "La Cuenca del Plata abarca los ríos Paraná, Uruguay, Paraguay e Iguazú, siendo la 2ª más extensa de Sudamérica.",
        "id": "q_g6_sociales_16"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué presidente impulsó la Ley 1420 en 1884 consagrando la educación primaria gratuita, obligatoria y laica en Argentina?",
        "options": [
            "Julio Argentino Roca",
            "Domingo F. Sarmiento",
            "Nicolás Avellaneda",
            "Carlos Pellegrini"
        ],
        "correct": 0,
        "explanation": "Sancionada durante la primera presidencia de Roca, la Ley 1420 garantizó la escuela común y gratuita.",
        "id": "q_g6_sociales_17"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué país limita al norte con Argentina junto con Bolivia?",
        "options": [
            "Paraguay",
            "Brasil",
            "Uruguay",
            "Chile"
        ],
        "correct": 0,
        "explanation": "Argentina limita al norte con el Estado Plurinacional de Bolivia y con la República del Paraguay.",
        "id": "q_g6_sociales_18"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama el proceso de crecimiento y expansión demográfica de las ciudades frente al campo?",
        "options": [
            "Urbanización",
            "Reforestación",
            "Sedentarismo",
            "Industrialización textil"
        ],
        "correct": 0,
        "explanation": "La urbanización es la migración de población rural a centros urbanos en busca de trabajo y servicios.",
        "id": "q_g6_sociales_19"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el principal combustible fósil hidrocarburo extraído en la cuenca neuquina en Vaca Muerta?",
        "options": [
            "Petróleo y gas no convencional",
            "Carbón vegetal",
            "Uranio enriquecido",
            "Litio"
        ],
        "correct": 0,
        "explanation": "La formación geológica Vaca Muerta contiene una de las mayores reservas de gas y petróleo de esquisto del mundo.",
        "id": "q_g6_sociales_20"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué organismo deliberativo sanciona las ordenanzas municipales en cada ciudad o partido?",
        "options": [
            "El Concejo Deliberante",
            "La Cámara de Senadores",
            "La Corte de Apelaciones",
            "El Ministerio de Salud"
        ],
        "correct": 0,
        "explanation": "El Concejo Deliberante es el poder legislativo local integrado por concejales elegidos por los vecinos.",
        "id": "q_g6_sociales_21"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué fenómeno demográfico implica la salida de personas de su país de origen para radicarse en otro?",
        "options": [
            "Emigración",
            "Inmigración",
            "Turismo",
            "Trashumancia"
        ],
        "correct": 0,
        "explanation": "Emigrar es partir del país propio; inmigrar es el ingreso de extranjeros a un nuevo país.",
        "id": "q_g6_sociales_22"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿En qué provincia argentina se encuentran las ruinas jesuíticas de San Ignacio Miní declaradas Patrimonio Mundial?",
        "options": [
            "Misiones",
            "Corrientes",
            "Entre Ríos",
            "Formosa"
        ],
        "correct": 0,
        "explanation": "San Ignacio Miní fue una misión jesuítica con el pueblo guaraní en el siglo XVII en Misiones.",
        "id": "q_g6_sociales_23"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denomina al derecho de los ciudadanos a elegir a sus representantes a través de elecciones periódicas?",
        "options": [
            "Soberanía popular",
            "Monarquía hereditaria",
            "Dictadura",
            "Aristocracia"
        ],
        "correct": 0,
        "explanation": "En una democracia, el poder reside en el pueblo (soberanía popular) expresado por el voto.",
        "id": "q_g6_sociales_24"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la llanura boscosa y cálida del norte argentino que abarca Chaco, Formosa y Santiago del Estero?",
        "options": [
            "La Región Chaqueña",
            "La Puna de Atacama",
            "Los Valles Calchaquíes",
            "La Meseta Misionera"
        ],
        "correct": 0,
        "explanation": "El Gran Chaco es una planicie con clima cálido y bosques de quebracho y algarrobo.",
        "id": "q_g6_sociales_25"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué nombre recibe el comercio internacional cuando un país le compra bienes o servicios a otra nación?",
        "options": [
            "Importación",
            "Exportación",
            "Balanza de pagos",
            "Monopolio"
        ],
        "correct": 0,
        "explanation": "Importar es comprar productos del exterior; exportar es vender productos nacionales al mundo.",
        "id": "q_g6_sociales_26"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué ciudad portuaria es la capital de la provincia de Buenos Aires?",
        "options": [
            "La Plata",
            "Mar del Plata",
            "Bahía Blanca",
            "Tandil"
        ],
        "correct": 0,
        "explanation": "La ciudad planificada de La Plata fue fundada por Dardo Rocha en 1882 como capital bonaerense.",
        "id": "q_g6_sociales_27"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el mineral liviano utilizado para fabricar baterías de celulares y autos eléctricos abundante en el norte argentino?",
        "options": [
            "El litio (en salares)",
            "El plomo",
            "El hierro",
            "El zinc"
        ],
        "correct": 0,
        "explanation": "Argentina, Bolivia y Chile forman el 'Triángulo del Litio' en los salares de la Puna.",
        "id": "q_g6_sociales_28"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué institución comunitaria fundada en los barrios por inmigrantes fomentaba el deporte y la vida social?",
        "options": [
            "Los clubes de barrio y bibliotecas populares",
            "Los ministerios",
            "Las embajadas",
            "Las aduanas"
        ],
        "correct": 0,
        "explanation": "Los clubes sociales y deportivos integraron a generaciones de familias inmigrantes y criollas.",
        "id": "q_g6_sociales_29"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué famoso pacto internacional de 1969 consagra la Convención Americana sobre Derechos Humanos?",
        "options": [
            "Pacto de San José de Costa Rica",
            "Tratado de Versalles",
            "Acuerdo de París",
            "Pacto de Varsovia"
        ],
        "correct": 0,
        "explanation": "El Pacto de San José tiene jerarquía constitucional en Argentina desde la reforma de 1994.",
        "id": "q_g6_sociales_30"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué canal interoceánico artificial construido en América Central une los océanos Atlántico y Pacífico?",
        "options": [
            "El Canal de Panamá",
            "El Canal de Suez",
            "El Canal de Corinto",
            "El Canal de Kiel"
        ],
        "correct": 0,
        "explanation": "Inaugurado en 1914 en Panamá, el canal evita rodear todo el continente por el Cabo de Hornos.",
        "id": "q_g6_sociales_31"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la principal causa de la deforestación de bosques nativos en el mundo?",
        "options": [
            "La expansión indiscriminada de la frontera agropecuaria y la tala ilegal",
            "La lluvia ácida exclusivamente",
            "La falta de abejas",
            "Las heladas invernales"
        ],
        "correct": 0,
        "explanation": "El desmonte para monocultivos y ganadería intensiva destruye millones de hectáreas de bosque cada año.",
        "id": "q_g6_sociales_32"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿En qué año se produjo la Reforma Universitaria en Córdoba que democratizó la educación superior?",
        "options": [
            "1918",
            "1810",
            "1945",
            "1983"
        ],
        "correct": 0,
        "explanation": "El Manifiesto Liminar de 1918 logró la autonomía universitaria, concursos docentes y cogobierno estudiantil.",
        "id": "q_g6_sociales_33"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué bioma acuático de gran biodiversidad se ubica en los Esteros del Iberá en Corrientes?",
        "options": [
            "Humedal de agua dulce",
            "Arrecife de coral",
            "Manglar salobre",
            "Fiordo glacial"
        ],
        "correct": 0,
        "explanation": "Los Esteros del Iberá son el segundo mayor humedal de agua dulce del planeta, refugio de carpinchos y yacarés.",
        "id": "q_g6_sociales_34"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué nombre reciben los censos nacionales realizados periódicamente en un país?",
        "options": [
            "Censo Nacional de Población, Hogares y Viviendas",
            "Padrón electoral",
            "Registro civil",
            "Boletín oficial"
        ],
        "correct": 0,
        "explanation": "Los censos permiten conocer cuántos somos, cómo vivimos y diseñar políticas públicas.",
        "id": "q_g6_sociales_35"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la capital del vecino país de la República Oriental del Uruguay?",
        "options": [
            "Montevideo",
            "Punta del Este",
            "Colonia del Sacramento",
            "Salto"
        ],
        "correct": 0,
        "explanation": "Montevideo es la capital y principal centro urbano de Uruguay a orillas del Río de la Plata.",
        "id": "q_g6_sociales_36"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la moneda común utilizada por la mayoría de los países miembros de la Unión Europea?",
        "options": [
            "El Euro",
            "La Libra Esterlina",
            "El Franco Suizo",
            "El Yen"
        ],
        "correct": 0,
        "explanation": "El Euro circula como moneda oficial en la Eurozona desde el año 2002.",
        "id": "q_g6_sociales_37"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué fecha se conmemora en Argentina el Día del Veterano y de los Caídos en la Guerra de Malvinas?",
        "options": [
            "2 de Abril",
            "25 de Mayo",
            "9 de Julio",
            "24 de Marzo"
        ],
        "correct": 0,
        "explanation": "El 2 de abril se recuerda el desembarco argentino en las Islas Malvinas en 1982 y a sus héroes.",
        "id": "q_g6_sociales_38"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué tipo de energía eléctrica se produce aprovechando las caídas de agua en grandes represas (como Yacyretá)?",
        "options": [
            "Energía hidroeléctrica",
            "Energía eólica",
            "Energía solar térmica",
            "Energía atómica"
        ],
        "correct": 0,
        "explanation": "Las centrales hidroeléctricas transforman la energía cinética del agua en electricidad mediante turbinas.",
        "id": "q_g6_sociales_39"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama el poder estatal unipersonal encabezado por el Gobernador en cada provincia?",
        "options": [
            "Poder Ejecutivo Provincial",
            "Poder Judicial Provincial",
            "Legislatura Unicameral",
            "Intendencia"
        ],
        "correct": 0,
        "explanation": "El Gobernador ejerce la titularidad del Poder Ejecutivo en el territorio provincial.",
        "id": "q_g6_sociales_40"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué famoso telescopio espacial lanzado por la NASA y la ESA revolucionó la astronomía desde 1990?",
        "options": [
            "Galileo",
            "Hubble",
            "Apolo 11",
            "Voyager"
        ],
        "correct": 1,
        "explanation": "El telescopio espacial Hubble ha tomado imágenes icónicas del universo lejano durante más de tres décadas.",
        "id": "q_g6_ingenio_1"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Si 5 máquinas hacen 5 artículos en 5 minutos, ¿cuánto tardarán 100 máquinas en hacer 100 artículos?",
        "options": [
            "100 minutos",
            "50 minutos",
            "5 minutos",
            "1 minuto"
        ],
        "correct": 2,
        "explanation": "¡5 minutos! Cada máquina tarda 5 minutos en fabricar 1 artículo, por lo tanto 100 máquinas trabajando juntas harán 100 en 5 minutos.",
        "id": "q_g6_ingenio_2"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si tengo 3 manzanas y me quitas 2, ¿cuántas manzanas tienes tú?",
        "options": [
            "2 manzanas",
            "1 manzana",
            "3 manzanas",
            "Ninguna"
        ],
        "correct": 0,
        "explanation": "¡Tenés 2 manzanas! Son las que vos me quitaste.",
        "id": "q_g6_ingenio_3"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el lenguaje binario que utilizan internamente los microprocesadores de computadoras?",
        "options": [
            "Ceros y unos (0 y 1)",
            "Letras del alfabeto",
            "Números del 0 al 9",
            "Código Morse"
        ],
        "correct": 0,
        "explanation": "El sistema binario representa información mediante presencia (1) o ausencia (0) de voltaje eléctrico.",
        "id": "q_g6_ingenio_4"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué robot explorador de la NASA aterrizó en Marte en 2021 junto con el helicóptero Ingenuity?",
        "options": [
            "Perseverance",
            "Curiosity",
            "Opportunity",
            "Spirit"
        ],
        "correct": 0,
        "explanation": "El rover Perseverance busca signos de vida antigua en el cráter Jezero de Marte.",
        "id": "q_g6_ingenio_5"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Un caracol sube por una pared de 10 metros. De día sube 3 metros y de noche resbala 2. ¿En cuántos días llega a la cima?",
        "options": [
            "En 8 días",
            "En 10 días",
            "En 7 días",
            "En 9 días"
        ],
        "correct": 0,
        "explanation": "Al final del día 7 sube a 7 m. En el día 8 sube 3 m y llega a los 10 m sin resbalar.",
        "id": "q_g6_ingenio_6"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la velocidad de rotación de la Tierra sobre su eje que origina el día y la noche?",
        "options": [
            "24 horas aproximadamente",
            "365 días",
            "12 horas",
            "28 días"
        ],
        "correct": 0,
        "explanation": "La Tierra completa un giro sobre su propio eje en 23 horas y 56 minutos (1 día sideral).",
        "id": "q_g6_ingenio_7"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Quién pintó la célebre obra del Renacimiento 'La Gioconda' o 'Mona Lisa'?",
        "options": [
            "Leonardo da Vinci",
            "Miguel Ángel",
            "Rafael",
            "Vincent van Gogh"
        ],
        "correct": 0,
        "explanation": "Leonardo da Vinci la pintó a principios del siglo XVI; hoy se exhibe en el Museo del Louvre.",
        "id": "q_g6_ingenio_8"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué pesa más, un kilo de plumas o un kilo de plomo?",
        "options": [
            "Pesan exactamente lo mismo (1 kg)",
            "El plomo",
            "Las plumas",
            "Depende del viento"
        ],
        "correct": 0,
        "explanation": "¡Ambos pesan exactamente un kilo! Solo cambia el volumen que ocupan.",
        "id": "q_g6_ingenio_9"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué científico polaco formuló en 1543 la teoría heliocéntrica demostrando que la Tierra gira alrededor del Sol?",
        "options": [
            "Nicolás Copérnico",
            "Galileo Galilei",
            "Johannes Kepler",
            "Isaac Newton"
        ],
        "correct": 0,
        "explanation": "Copérnico revolucionó la astronomía al proponer que el Sol es el centro del sistema planetario.",
        "id": "q_g6_ingenio_10"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: En una pecera hay 10 peces. 3 se ahogan y 2 se escapan. ¿Cuántos peces quedan en la pecera?",
        "options": [
            "10 peces (¡los peces viven en el agua y no se ahogan ni escapan de la pecera!)",
            "5 peces",
            "7 peces",
            "8 peces"
        ],
        "correct": 0,
        "explanation": "¡Los peces no se ahogan en el agua! Es una trampa clásica de ingenio.",
        "id": "q_g6_ingenio_11"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el desierto no polar más árido del planeta Tierra, ubicado en el norte de Chile?",
        "options": [
            "Desierto de Atacama",
            "Desierto del Sahara",
            "Desierto de Gobi",
            "Desierto de Kalahari"
        ],
        "correct": 0,
        "explanation": "Atacama tiene sectores donde no se han registrado lluvias durante décadas.",
        "id": "q_g6_ingenio_12"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Secuencia lógica: 1, 4, 9, 16, 25... ¿Qué número sigue?",
        "options": [
            "36",
            "30",
            "32",
            "49"
        ],
        "correct": 0,
        "explanation": "Son los cuadrados de los números: 1², 2², 3², 4², 5², y 6² = 36.",
        "id": "q_g6_ingenio_13"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué célebre inventor y físico serbio-estadounidense desarrolló la corriente alterna (AC) y la bobina de alta tensión?",
        "options": [
            "Nikola Tesla",
            "Thomas Edison",
            "Alexander Graham Bell",
            "Guglielmo Marconi"
        ],
        "correct": 0,
        "explanation": "Tesla fue el pionero del sistema de transmisión eléctrica por corriente alterna que usamos hoy.",
        "id": "q_g6_ingenio_14"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué palabra de cinco letras se vuelve más corta si le añades dos letras?",
        "options": [
            "Corta (al agregarle 'mente' queda 'cortamente', pero con 'r' y 'a' se escribe 'corta')",
            "Largo",
            "Breve",
            "Grande"
        ],
        "correct": 0,
        "explanation": "La palabra 'corta' o el juego de palabras 'corto' al sumarle letras.",
        "id": "q_g6_ingenio_15"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿En qué año llegó el ser humano por primera vez a la Luna en la misión Apolo 11 comandada por Neil Armstrong?",
        "options": [
            "1969",
            "1959",
            "1975",
            "1980"
        ],
        "correct": 0,
        "explanation": "El 20 de julio de 1969 Neil Armstrong y Buzz Aldrin caminaron sobre el Mar de la Tranquilidad.",
        "id": "q_g6_ingenio_16"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué corre por las ciudades y pueblos sin moverse jamás de su lugar?",
        "options": [
            "La calle o camino",
            "El río",
            "El viento",
            "El tren"
        ],
        "correct": 0,
        "explanation": "¡Las calles y rutas! Se extienden por kilómetros pero están fijas en el suelo.",
        "id": "q_g6_ingenio_17"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué científico argentino fue galardonado con el Premio Nobel de Química en 1970 por sus descubrimientos sobre nucleótidos de azúcar?",
        "options": [
            "Luis Federico Leloir",
            "Bernardo Houssay",
            "César Milstein",
            "René Favaloro"
        ],
        "correct": 0,
        "explanation": "Luis Leloir descubrió los procesos metabólicos de transformación de carbohidratos ganando el Nobel.",
        "id": "q_g6_ingenio_18"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la montaña más alta del continente americano, con 6.961 metros de altitud?",
        "options": [
            "Cerro Aconcagua (Mendoza)",
            "Monte Everest",
            "Nevado Ojos del Salado",
            "Monte Pissis"
        ],
        "correct": 0,
        "explanation": "El Aconcagua en Mendoza es el punto culminante de la Cordillera de los Andes y del continente.",
        "id": "q_g6_ingenio_19"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué invento humano te permite mirar a través de una pared sólida?",
        "options": [
            "Una ventana",
            "Un microscopio",
            "Un telescopio",
            "Un espejo"
        ],
        "correct": 0,
        "explanation": "¡Una ventana! Es una abertura con vidrio que te deja ver a través del muro.",
        "id": "q_g6_ingenio_20"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué cordillera es la más alta del mundo albergando los 14 'ochomiles' incluyendo el monte Everest?",
        "options": [
            "El Himalaya (Asia)",
            "Los Andes",
            "Los Alpes",
            "Las Montañas Rocosas"
        ],
        "correct": 0,
        "explanation": "El Himalaya en Asia contiene las montañas más elevadas del planeta sobre el nivel del mar.",
        "id": "q_g6_ingenio_21"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué objeto tiene llaves pero no abre ninguna puerta, y tiene notas pero no escribe cartas?",
        "options": [
            "El piano",
            "El candado",
            "El llavero",
            "La cerradura"
        ],
        "correct": 0,
        "explanation": "¡El piano! En inglés las teclas se llaman 'keys' (llaves) y produce notas musicales.",
        "id": "q_g6_ingenio_22"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué país europeo tiene la mayor cantidad de islas marítimas en el mundo?",
        "options": [
            "Suecia",
            "Grecia",
            "Indonesia",
            "Reino Unido"
        ],
        "correct": 0,
        "explanation": "Suecia encabeza el ranking mundial con más de 260.000 islas en sus archipiélagos bálticos.",
        "id": "q_g6_ingenio_23"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Siempre estoy adelante tuyo pero nunca me puedes alcanzar ni ver. ¿Qué soy?",
        "options": [
            "El futuro",
            "El pasado",
            "La sombra",
            "El horizonte"
        ],
        "correct": 0,
        "explanation": "¡El futuro! Siempre está por delante en la línea del tiempo.",
        "id": "q_g6_ingenio_24"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cómo se llama la galaxia espiral barrada a la que pertenece nuestro Sistema Solar?",
        "options": [
            "La Vía Láctea",
            "Andrómeda",
            "El Sombrero",
            "Centauro A"
        ],
        "correct": 0,
        "explanation": "Vivimos en el Brazo de Orión dentro de la galaxia espiral de la Vía Láctea.",
        "id": "q_g6_ingenio_25"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Un hombre sale a caminar bajo una lluvia torrencial sin paraguas ni sombrero, pero no se moja ni un solo pelo. ¿Por qué?",
        "options": [
            "Porque era calvo",
            "Porque llevaba impermeable",
            "Porque corría muy rápido",
            "Porque no llovía de verdad"
        ],
        "correct": 0,
        "explanation": "¡Porque era calvo y no tenía pelo para mojarse!",
        "id": "q_g6_ingenio_26"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué satélite de comunicaciones artificial fue el primero lanzado al espacio por la Unión Soviética en 1957?",
        "options": [
            "Sputnik 1",
            "Explorer 1",
            "Vostok 1",
            "Telstar"
        ],
        "correct": 0,
        "explanation": "El Sputnik 1 inició la era espacial y la carrera cósmica el 4 de octubre de 1957.",
        "id": "q_g6_ingenio_27"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué puedes sostener en tu mano derecha pero NUNCA en tu mano izquierda?",
        "options": [
            "Tu mano izquierda",
            "Una pelota",
            "Un lápiz",
            "Una moneda"
        ],
        "correct": 0,
        "explanation": "¡Tu mano izquierda! No podés agarrar tu mano izquierda con ella misma.",
        "id": "q_g6_ingenio_28"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué elemento de la tabla periódica tiene como símbolo químico 'Fe'?",
        "options": [
            "Hierro (Ferrum)",
            "Flúor",
            "Fósforo",
            "Francio"
        ],
        "correct": 0,
        "explanation": "'Fe' proviene del latín 'Ferrum' que significa hierro.",
        "id": "q_g6_ingenio_29"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Tiene cuello pero no tiene cabeza, y usa falda pero no tiene piernas. ¿Qué es?",
        "options": [
            "Una botella",
            "Una camisa",
            "Una jarra",
            "Una lámpara"
        ],
        "correct": 0,
        "explanation": "¡La botella! Tiene cuello estrecho y cuerpo, pero no cabeza.",
        "id": "q_g6_ingenio_30"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la velocidad del sonido en el aire a temperatura ambiente estándar?",
        "options": [
            "Aproximadamente 340 metros por segundo",
            "1.500 m/s",
            "300.000 km/s",
            "100 km/h"
        ],
        "correct": 0,
        "explanation": "El sonido viaja a unos 343 m/s (unos 1.235 km/h, velocidad Mach 1).",
        "id": "q_g6_ingenio_31"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué va por todo el mundo quedándose en una sola esquina?",
        "options": [
            "Una estampilla postal",
            "Un barco",
            "Una carta",
            "Un avión"
        ],
        "correct": 0,
        "explanation": "¡La estampilla postal! Va pegada en la esquina del sobre y viaja por todo el planeta.",
        "id": "q_g6_ingenio_32"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué famoso telescopio de la NASA reemplazó al Hubble en 2021 operando en el espectro infrarrojo lejano?",
        "options": [
            "James Webb (JWST)",
            "Spitzer",
            "Chandra",
            "Kepler"
        ],
        "correct": 0,
        "explanation": "El telescopio James Webb orbita en el punto de Lagrange L2 observando las primeras galaxias del universo.",
        "id": "q_g6_ingenio_33"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si me tienes, quieres compartirme; si me compartes, ya no me tienes. ¿Qué soy?",
        "options": [
            "Un secreto",
            "El dinero",
            "La felicidad",
            "Una manzana"
        ],
        "correct": 0,
        "explanation": "¡Un secreto! En cuanto se lo contás a alguien deja de ser un secreto.",
        "id": "q_g6_ingenio_34"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué gran estructura biológica marina viva es visible desde el espacio a lo largo de la costa de Australia?",
        "options": [
            "La Gran Barrera de Coral",
            "El Triángulo de las Bermudas",
            "La fosa de las Marianas",
            "El mar de los Sargazos"
        ],
        "correct": 0,
        "explanation": "La Gran Barrera de Coral abarca más de 2.300 km de arrecifes y es el mayor ser vivo colectivo.",
        "id": "q_g6_ingenio_35"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Dos padres y dos hijos van al cine y compran solo 3 entradas, pero todos entran. ¿Cómo es posible?",
        "options": [
            "Eran abuelo, padre e hijo (3 personas)",
            "Uno se coló",
            "El boletero se equivocó",
            "Compraron online"
        ],
        "correct": 0,
        "explanation": "El abuelo es padre del padre, y el padre es padre del hijo: ¡dos padres y dos hijos en 3 personas!",
        "id": "q_g6_ingenio_36"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la floración desértica que ocurre ocasionalmente en el norte chileno tras lluvias inusuales?",
        "options": [
            "Desierto florido",
            "Primavera polar",
            "Oasis verde",
            "Pradera andina"
        ],
        "correct": 0,
        "explanation": "El fenómeno del 'desierto florido' hace brotar millones de semillas latentes en Atacama.",
        "id": "q_g6_ingenio_37"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué ave rapaz nocturna puede girar su cuello hasta 270 grados gracias a sus vértebras especiales?",
        "options": [
            "El búho y la lechuza",
            "El águila real",
            "El halcón peregrino",
            "El cóndor andino"
        ],
        "correct": 0,
        "explanation": "Los búhos poseen 14 vértebras cervicales que les permiten rotar la cabeza casi por completo.",
        "id": "q_g6_ingenio_38"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué instrumento se vuelve más afilado cuanto más lo usas con tu mente?",
        "options": [
            "El ingenio o la inteligencia",
            "Un cuchillo",
            "Un lápiz",
            "Una espada"
        ],
        "correct": 0,
        "explanation": "¡El ingenio y la mente! El aprendizaje y la práctica agudizan el razonamiento.",
        "id": "q_g6_ingenio_39"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué premio literario y científico internacional fue creado por el químico sueco inventor de la dinamita?",
        "options": [
            "Premios Nobel (Alfred Nobel)",
            "Premio Pulitzer",
            "Premio Cervantes",
            "Medalla Fields"
        ],
        "correct": 0,
        "explanation": "Alfred Nobel destinó su fortuna a galardonar a quienes beneficiaran a la humanidad en física, química, medicina, etc.",
        "id": "q_g6_ingenio_40"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Resuelve respetando la jerarquía de operaciones: 8 + 2 × (5 - 3) = ?",
        "options": [
            "20",
            "12",
            "14",
            "18"
        ],
        "correct": 1,
        "explanation": "Primero el paréntesis: (5 - 3) = 2. Luego la multiplicación: 2 × 2 = 4. Finalmente la suma: 8 + 4 = 12.",
        "id": "q_g7_matematica_1"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la operación con números enteros: (-7) + (-5) - (-3)?",
        "options": [
            "-9",
            "-15",
            "-5",
            "5"
        ],
        "correct": 0,
        "explanation": "(-7) + (-5) = -12. Restar un negativo equivale a sumar: -12 + 3 = -9.",
        "id": "q_g7_matematica_2"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En un triángulo rectángulo cuyos catetos miden 3 cm y 4 cm, ¿cuánto mide la hipotenusa (Teorema de Pitágoras)?",
        "options": [
            "5 cm",
            "6 cm",
            "7 cm",
            "8 cm"
        ],
        "correct": 0,
        "explanation": "a² + b² = c² -> 3² + 4² = 9 + 16 = 25. La raíz cuadrada de 25 es 5 cm.",
        "id": "q_g7_matematica_3"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la probabilidad teórica de obtener un número par al lanzar un dado común de 6 caras?",
        "options": [
            "1/6",
            "1/2 (50%)",
            "2/3",
            "1/3"
        ],
        "correct": 1,
        "explanation": "Los pares son 2, 4 y 6 (3 casos favorables de 6 posibles: 3/6 = 1/2 o 50%).",
        "id": "q_g7_matematica_4"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si 3 pintores tardan 6 horas en pintar una casa, ¿cuánto tardarán 6 pintores trabajando al mismo ritmo?",
        "options": [
            "12 horas",
            "3 horas",
            "4 horas",
            "2 horas"
        ],
        "correct": 1,
        "explanation": "Es proporcionalidad inversa: al duplicar la cantidad de pintores (de 3 a 6), el tiempo se reduce a la mitad (3 horas).",
        "id": "q_g7_matematica_5"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Resuelve la operación con números enteros: (-8) × (-5) = ?",
        "options": [
            "40",
            "-40",
            "13",
            "-13"
        ],
        "correct": 0,
        "explanation": "Regla de los signos: el producto de dos números negativos da un resultado positivo: (-8) × (-5) = +40.",
        "id": "q_g7_matematica_6"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de: (-36) ÷ 4?",
        "options": [
            "-9",
            "9",
            "-8",
            "8"
        ],
        "correct": 0,
        "explanation": "Negativo dividido positivo da negativo: -36 ÷ 4 = -9.",
        "id": "q_g7_matematica_7"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Resuelve respetando la jerarquía de operaciones: 10 + 5 × 2³ = ?",
        "options": [
            "50",
            "90",
            "120",
            "30"
        ],
        "correct": 0,
        "explanation": "Primero la potencia: 2³ = 8. Luego la multiplicación: 5 × 8 = 40. Finalmente la suma: 10 + 40 = 50.",
        "id": "q_g7_matematica_8"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor de 'x' en la ecuación de primer grado: 4x - 7 = 21?",
        "options": [
            "7",
            "6",
            "5",
            "8"
        ],
        "correct": 0,
        "explanation": "4x = 21 + 7 = 28. Por lo tanto, x = 28 ÷ 4 = 7.",
        "id": "q_g7_matematica_9"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En un triángulo rectángulo, si los catetos miden 6 cm y 8 cm, ¿cuánto mide la hipotenusa?",
        "options": [
            "10 cm",
            "14 cm",
            "12 cm",
            "48 cm"
        ],
        "correct": 0,
        "explanation": "Teorema de Pitágoras: 6² + 8² = 36 + 64 = 100. √100 = 10 cm.",
        "id": "q_g7_matematica_10"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En un triángulo rectángulo, si la hipotenusa mide 13 cm y un cateto mide 5 cm, ¿cuánto mide el otro cateto?",
        "options": [
            "12 cm",
            "8 cm",
            "10 cm",
            "18 cm"
        ],
        "correct": 0,
        "explanation": "b² = c² - a² = 13² - 5² = 169 - 25 = 144. √144 = 12 cm.",
        "id": "q_g7_matematica_11"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la potencia (-2)³?",
        "options": [
            "-8",
            "8",
            "-6",
            "6"
        ],
        "correct": 0,
        "explanation": "Base negativa con exponente impar da resultado negativo: (-2) × (-2) × (-2) = -8.",
        "id": "q_g7_matematica_12"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la potencia (-3)²?",
        "options": [
            "9",
            "-9",
            "6",
            "-6"
        ],
        "correct": 0,
        "explanation": "Base negativa con exponente par da resultado positivo: (-3) × (-3) = +9.",
        "id": "q_g7_matematica_13"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Qué par ordenado representa el origen de coordenadas en el plano cartesiano?",
        "options": [
            "(0, 0)",
            "(1, 1)",
            "(0, 1)",
            "(1, 0)"
        ],
        "correct": 0,
        "explanation": "El punto donde se cruzan los ejes X (abscisas) e Y (ordenadas) es el origen (0, 0).",
        "id": "q_g7_matematica_14"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el volumen de un prisma rectangular de 5 cm de largo, 4 cm de ancho y 3 cm de alto?",
        "options": [
            "60 cm³",
            "12 cm³",
            "40 cm³",
            "24 cm³"
        ],
        "correct": 0,
        "explanation": "Volumen = Largo × Ancho × Alto: 5 × 4 × 3 = 60 cm³.",
        "id": "q_g7_matematica_15"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la probabilidad de que al lanzar una moneda equilibrada salga 'cara'?",
        "options": [
            "1/2 (50%)",
            "1/4 (25%)",
            "1/3",
            "1 (100%)"
        ],
        "correct": 0,
        "explanation": "Hay 1 caso favorable de 2 casos posibles totales: 1/2 o 50%.",
        "id": "q_g7_matematica_16"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la probabilidad teórica de obtener el número 6 al lanzar un dado común de 6 caras?",
        "options": [
            "1/6 (16,6%)",
            "1/2",
            "6/6",
            "1/3"
        ],
        "correct": 0,
        "explanation": "El 6 es una cara entre 6 caras equiprobables: 1/6.",
        "id": "q_g7_matematica_17"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si 2 albañiles construyen una pared en 6 días, ¿cuántos días tardarán 4 albañiles trabajando al mismo ritmo?",
        "options": [
            "3 días",
            "12 días",
            "4 días",
            "2 días"
        ],
        "correct": 0,
        "explanation": "Proporcionalidad inversa: al doble de trabajadores, la mitad de tiempo (6 ÷ 2 = 3 días).",
        "id": "q_g7_matematica_18"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la moda del siguiente conjunto de datos: 4, 7, 7, 8, 9, 7, 5?",
        "options": [
            "7",
            "8",
            "4",
            "5"
        ],
        "correct": 0,
        "explanation": "La moda es el valor con mayor frecuencia absoluta (el 7 se repite 3 veces).",
        "id": "q_g7_matematica_19"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la mediana de los valores ordenados: 3, 5, 7, 9, 11?",
        "options": [
            "7",
            "5",
            "9",
            "35"
        ],
        "correct": 0,
        "explanation": "La mediana es el elemento central en un conjunto de datos ordenados: el 7.",
        "id": "q_g7_matematica_20"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor de 'y' en la ecuación: 2(y + 3) = 16?",
        "options": [
            "5",
            "8",
            "7",
            "10"
        ],
        "correct": 0,
        "explanation": "2y + 6 = 16 -> 2y = 10 -> y = 5.",
        "id": "q_g7_matematica_21"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la raíz cúbica de 27 (∛27)?",
        "options": [
            "3",
            "9",
            "2",
            "6"
        ],
        "correct": 0,
        "explanation": "3 × 3 × 3 = 27, por lo tanto ∛27 = 3.",
        "id": "q_g7_matematica_22"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la raíz cúbica de -64 (∛-64)?",
        "options": [
            "-4",
            "4",
            "-8",
            "No existe"
        ],
        "correct": 0,
        "explanation": "(-4) × (-4) × (-4) = -64, por lo tanto ∛-64 = -4.",
        "id": "q_g7_matematica_23"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es (-15) + (-20) - (-10)?",
        "options": [
            "-25",
            "-45",
            "-5",
            "25"
        ],
        "correct": 0,
        "explanation": "(-15) + (-20) = -35. Restar -10 es sumar 10: -35 + 10 = -25.",
        "id": "q_g7_matematica_24"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el área de un círculo de radio 10 cm considerando π ≈ 3,14?",
        "options": [
            "314 cm²",
            "62,8 cm²",
            "31,4 cm²",
            "100 cm²"
        ],
        "correct": 0,
        "explanation": "Área = π × r² = 3,14 × 10² = 3,14 × 100 = 314 cm².",
        "id": "q_g7_matematica_25"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la longitud (perímetro) de una circunferencia de diámetro 10 cm con π ≈ 3,14?",
        "options": [
            "31,4 cm",
            "62,8 cm",
            "314 cm",
            "15,7 cm"
        ],
        "correct": 0,
        "explanation": "Longitud = π × Diámetro = 3,14 × 10 = 31,4 cm.",
        "id": "q_g7_matematica_26"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Simplifica la expresión algebraica reduciendo términos semejantes: 5x + 3y - 2x + 4y",
        "options": [
            "3x + 7y",
            "7x + 7y",
            "10xy",
            "3x - y"
        ],
        "correct": 0,
        "explanation": "(5x - 2x) + (3y + 4y) = 3x + 7y.",
        "id": "q_g7_matematica_27"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se escribe en notación científica el número 4.500.000?",
        "options": [
            "4,5 × 10⁶",
            "45 × 10⁵",
            "4,5 × 10⁵",
            "0,45 × 10⁷"
        ],
        "correct": 0,
        "explanation": "La coma se desplaza 6 lugares a la izquierda: 4,5 × 10⁶.",
        "id": "q_g7_matematica_28"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se escribe en notación científica el número 0,0003?",
        "options": [
            "3 × 10⁻⁴",
            "3 × 10⁴",
            "0,3 × 10⁻³",
            "30 × 10⁻⁵"
        ],
        "correct": 0,
        "explanation": "La coma se desplaza 4 lugares a la derecha: 3 × 10⁻⁴.",
        "id": "q_g7_matematica_29"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Resuelve la inecuación: x + 4 < 10",
        "options": [
            "x < 6",
            "x > 6",
            "x < 14",
            "x = 6"
        ],
        "correct": 0,
        "explanation": "Restando 4 a ambos miembros: x < 10 - 4 -> x < 6.",
        "id": "q_g7_matematica_30"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si una inversión de $10.000 produce un interés simple del 10% anual, ¿cuánto interés produce en 2 años?",
        "options": [
            "$2.000",
            "$1.000",
            "$2.500",
            "$3.000"
        ],
        "correct": 0,
        "explanation": "Interés = Capital × Tasa × Tiempo: $10.000 × 0,10 × 2 = $2.000.",
        "id": "q_g7_matematica_31"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la multiplicación de potencias de igual base: 2³ × 2⁴?",
        "options": [
            "2⁷ (128)",
            "2¹²",
            "4⁷",
            "4¹²"
        ],
        "correct": 0,
        "explanation": "En la multiplicación de potencias de igual base se suman los exponentes: 3 + 4 = 7 -> 2⁷ = 128.",
        "id": "q_g7_matematica_32"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la división de potencias de igual base: 5⁶ ÷ 5²?",
        "options": [
            "5⁴ (625)",
            "5³",
            "1⁴",
            "5⁸"
        ],
        "correct": 0,
        "explanation": "En la división de potencias de igual base se restan los exponentes: 6 - 2 = 4 -> 5⁴.",
        "id": "q_g7_matematica_33"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor de cualquier número no nulo elevado a la potencia cero (x⁰)?",
        "options": [
            "1",
            "0",
            "x",
            "Infinito"
        ],
        "correct": 0,
        "explanation": "Por definición de las leyes de exponentes, a⁰ = 1 para todo a ≠ 0.",
        "id": "q_g7_matematica_34"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En un curso de 30 alumnos, el 60% son mujeres. ¿Cuántas mujeres hay en el curso?",
        "options": [
            "18",
            "15",
            "20",
            "12"
        ],
        "correct": 0,
        "explanation": "30 × 0,60 = 18 mujeres.",
        "id": "q_g7_matematica_35"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Qué número es el opuesto simétrico de +18 en la recta numérica?",
        "options": [
            "-18",
            "18",
            "1/18",
            "0"
        ],
        "correct": 0,
        "explanation": "El opuesto de un número entero tiene el mismo valor absoluto pero signo contrario: -18.",
        "id": "q_g7_matematica_36"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la suma de los ángulos interiores de cualquier cuadrilátero convexo?",
        "options": [
            "360°",
            "180°",
            "270°",
            "540°"
        ],
        "correct": 0,
        "explanation": "Cualquier cuadrilátero se puede descomponer en dos triángulos: 2 × 180° = 360°.",
        "id": "q_g7_matematica_37"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la operación: (-2) × 3 × (-4)?",
        "options": [
            "24",
            "-24",
            "12",
            "-12"
        ],
        "correct": 0,
        "explanation": "(-2) × 3 = -6. Luego (-6) × (-4) = +24.",
        "id": "q_g7_matematica_38"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la pendiente de una recta horizontal constante paralela al eje X?",
        "options": [
            "0",
            "1",
            "Infinita",
            "-1"
        ],
        "correct": 0,
        "explanation": "Al no tener inclinación ni variación vertical, la pendiente es cero (m = 0).",
        "id": "q_g7_matematica_39"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el inverso multiplicativo de la fracción 3/4?",
        "options": [
            "4/3",
            "-3/4",
            "-4/3",
            "1/4"
        ],
        "correct": 0,
        "explanation": "El inverso multiplicativo o recíproco invierte numerador y denominador: 4/3.",
        "id": "q_g7_matematica_40"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿En qué género literario se destaca la investigación de un crimen o enigma mediante pistas y deductiva lógica?",
        "options": [
            "Género Policial",
            "Género Fantástico",
            "Género Dramático",
            "Poesía Épica"
        ],
        "correct": 0,
        "explanation": "El relato policial gira en torno a un enigma (robo o crimen) resuelto por un detective o investigador.",
        "id": "q_g7_lengua_1"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la oración 'La profesora entregó los diplomas a los alumnos', ¿cuál es el Objeto Indirecto (O.I.)?",
        "options": [
            "La profesora",
            "Entregó",
            "Los diplomas",
            "A los alumnos"
        ],
        "correct": 3,
        "explanation": "'A los alumnos' es el Objeto Indirecto porque indica los destinatarios de la acción (se puede sustituir por 'les').",
        "id": "q_g7_lengua_2"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué figura retórica consiste en una exageración intencional de la realidad (ej: 'Te llamé un millón de veces')?",
        "options": [
            "Metáfora",
            "Hipérbole",
            "Aliteración",
            "Antítesis"
        ],
        "correct": 1,
        "explanation": "La hipérbole es una exageración que busca aumentar o disminuir excesivamente aquello de lo que se habla.",
        "id": "q_g7_lengua_3"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué conector lógico se usa para expresar una consecuencia o conclusión de lo anterior?",
        "options": [
            "Por lo tanto",
            "Sin embargo",
            "A pesar de",
            "Porque"
        ],
        "correct": 0,
        "explanation": "'Por lo tanto' o 'en consecuencia' son conectores consecutivos que introducen el efecto o conclusión.",
        "id": "q_g7_lengua_4"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En el análisis sintáctico de 'El detective descubrió el misterio', ¿qué función cumple 'el misterio'?",
        "options": [
            "Objeto Directo (O.D.)",
            "Objeto Indirecto",
            "Circunstancial",
            "Sujeto paciente"
        ],
        "correct": 0,
        "explanation": "'El misterio' recibe directamente la acción del verbo descubrir (se reemplaza por 'lo descubrió').",
        "id": "q_g7_lengua_5"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué figura retórica se aprecia en la expresión 'El silencio ensordecedor de la noche'?",
        "options": [
            "Oxímoron o paradoja",
            "Hipérbole",
            "Aliteración",
            "Elipsis"
        ],
        "correct": 0,
        "explanation": "Un oxímoron combina dos términos de significado opuesto ('silencio' y 'ensordecedor').",
        "id": "q_g7_lengua_6"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué subgénero narrativo se caracteriza por plantear un enigma criminal resuelto por la deducción?",
        "options": [
            "Policial clásico o de enigma",
            "Ciencia ficción distópica",
            "Novela histórica",
            "Epopeya"
        ],
        "correct": 0,
        "explanation": "El relato policial clásico (como los de Sherlock Holmes o Auguste Dupin) gira en torno a pistas y deducciones.",
        "id": "q_g7_lengua_7"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la oración 'Llegamos cansados pero felices', el término 'cansados pero felices' funciona como:",
        "options": [
            "Predicativo subjetivo",
            "Objeto Directo",
            "Circunstancial de modo",
            "Término preposicional"
        ],
        "correct": 0,
        "explanation": "Modifica al verbo 'llegamos' y al mismo tiempo al sujeto tácito 'nosotros' (predicativo subjetivo).",
        "id": "q_g7_lengua_8"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de conector es 'a pesar de que' o 'aunque'?",
        "options": [
            "Concesivo",
            "Causal",
            "Consecutivo",
            "Temporal"
        ],
        "correct": 0,
        "explanation": "Los conectores concesivos señalan un obstáculo que no impide la realización de la acción principal.",
        "id": "q_g7_lengua_9"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál de estas palabras lleva tilde diacrítica para diferenciarse de su homónima átona?",
        "options": [
            "Él (pronombre personal) frente a el (artículo)",
            "Casa",
            "Mesa",
            "Luz"
        ],
        "correct": 0,
        "explanation": "La tilde diacrítica distingue palabras con igual forma y distinta función gramatical ('él' pronombre vs 'el' artículo).",
        "id": "q_g7_lengua_10"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué género literario presenta conflictos mediante diálogos destinados a ser representados en un escenario?",
        "options": [
            "Género dramático o teatral",
            "Género lírico",
            "Género ensayístico",
            "Género épico"
        ],
        "correct": 0,
        "explanation": "Las obras teatrales (tragedias, comedias, dramas) se escriben en actos, escenas y acotaciones para actores.",
        "id": "q_g7_lengua_11"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se llama el texto periodístico que manifiesta la opinión institucional oficial de un diario sobre un hecho actual?",
        "options": [
            "Editorial",
            "Crónica policial",
            "Entrevista",
            "Cable de noticias"
        ],
        "correct": 0,
        "explanation": "El editorial expresa la postura y línea ideológica del medio de comunicación.",
        "id": "q_g7_lengua_12"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la frase 'Ella era una fiera defendiendo sus ideas', ¿qué figura literaria predomina?",
        "options": [
            "Metáfora",
            "Hipérbole",
            "Sinécdoque",
            "Onomatopeya"
        ],
        "correct": 0,
        "explanation": "Identifica a la persona con la ferocidad animal metafóricamente.",
        "id": "q_g7_lengua_13"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la función del complemento circunstancial de instrumento en 'Cortó el papel con las tijeras'?",
        "options": [
            "Indicar el objeto o herramienta utilizada",
            "Indicar el lugar",
            "Indicar el tiempo",
            "Indicar la causa"
        ],
        "correct": 0,
        "explanation": "'Con las tijeras' responde a ¿con qué herramienta se ejecutó la acción?",
        "id": "q_g7_lengua_14"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué palabra posee prefijo de origen griego que significa 'vida'?",
        "options": [
            "Biología",
            "Geometría",
            "Cronómetro",
            "Termómetro"
        ],
        "correct": 0,
        "explanation": "'Bio' significa vida (biología = ciencia de la vida).",
        "id": "q_g7_lengua_15"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál de estas oraciones está en voz pasiva analítica?",
        "options": [
            "El tratado fue firmado por los presidentes",
            "Los presidentes firmaron el tratado",
            "Se firmó el tratado rápidamente",
            "Firmando el tratado estuvieron"
        ],
        "correct": 0,
        "explanation": "Presenta el verbo ser ('fue') + participio ('firmado') + complemento agente ('por los presidentes').",
        "id": "q_g7_lengua_16"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué es una anáfora en el análisis de cohesión textual?",
        "options": [
            "La referencia hacia un elemento mencionado previamente en el texto",
            "Un error ortográfico",
            "La repetición de números",
            "Un signo de puntuación"
        ],
        "correct": 0,
        "explanation": "El mecanismo anafórico evita repeticiones sustituyendo términos ya dichos por pronombres o sinónimos.",
        "id": "q_g7_lengua_17"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el antónimo de 'altruista' (persona que ayuda desinteresadamente)?",
        "options": [
            "Egoísta",
            "Solidario",
            "Generoso",
            "Benévolo"
        ],
        "correct": 0,
        "explanation": "Lo opuesto a altruista es egoísta o individualista.",
        "id": "q_g7_lengua_18"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se llama la figura retórica que imita sonidos reales de la naturaleza mediante palabras (ej: 'tic-tac', 'bum')?",
        "options": [
            "Onomatopeya",
            "Paralelismo",
            "Antítesis",
            "Hipérbaton"
        ],
        "correct": 0,
        "explanation": "Las onomatopeyas representan fonéticamente sonidos de la realidad.",
        "id": "q_g7_lengua_19"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la función de la tesis en un texto argumentativo?",
        "options": [
            "Plantear la idea o postura central que el autor va a defender",
            "Contar un chiste inicial",
            "Describir el paisaje",
            "Dar las gracias al lector"
        ],
        "correct": 0,
        "explanation": "La tesis es la hipótesis o proposición principal que se fundamenta con los argumentos.",
        "id": "q_g7_lengua_20"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el pretérito pluscuamperfecto del verbo 'viajar' para 'nosotros'?",
        "options": [
            "Habíamos viajado",
            "Viajamos",
            "Viajaríamos",
            "Hubiéramos viajado"
        ],
        "correct": 0,
        "explanation": "Se conjuga con el pretérito imperfecto del verbo auxiliar haber ('habíamos') + participio ('viajado').",
        "id": "q_g7_lengua_21"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la función sintáctica del pronombre 'se' en 'Los dos amigos se saludaron cordialmente'?",
        "options": [
            "Pronombre recíproco (Objeto Directo)",
            "Signo de pasiva refleja",
            "Voz media",
            "Dativo ético"
        ],
        "correct": 0,
        "explanation": "Expresa una acción mutua o recíproca entre ambos sujetos (el uno al otro).",
        "id": "q_g7_lengua_22"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué género literario sitúa su trama en futuros alternativos explorando el impacto de avances tecnológicos y espaciales?",
        "options": [
            "Ciencia ficción",
            "Policial negro",
            "Costumbrismo",
            "Fábula moral"
        ],
        "correct": 0,
        "explanation": "La ciencia ficción especula sobre el futuro, la cibernética, los viajes espaciales y la inteligencia artificial.",
        "id": "q_g7_lengua_23"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué signo de puntuación encierra incisos explicativos o aclaraciones secundarias?",
        "options": [
            "Los paréntesis o rayas largas (—)",
            "Las comillas dobles",
            "Los signos de exclamación",
            "El asterisco"
        ],
        "correct": 0,
        "explanation": "Los paréntesis ( ) y las rayas aislan información aclaratoria dentro de la oración.",
        "id": "q_g7_lengua_24"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el núcleo del predicado en 'Los investigadores analizaron las muestras de laboratorio'?",
        "options": [
            "Analizaron",
            "Investigadores",
            "Muestras",
            "Laboratorio"
        ],
        "correct": 0,
        "explanation": "'Analizaron' es el verbo conjugado que rige la oración.",
        "id": "q_g7_lengua_25"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el significado de la locución adverbial latina 'de facto'?",
        "options": [
            "De hecho (en la práctica sin respaldo legal)",
            "De derecho",
            "Por casualidad",
            "Para siempre"
        ],
        "correct": 0,
        "explanation": "'De facto' refiere a situaciones que se imponen por los hechos y no por la ley de derecho ('de jure').",
        "id": "q_g7_lengua_26"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la frase 'Su corazón era de piedra', ¿qué recurso poético se emplea?",
        "options": [
            "Metáfora",
            "Símil con 'como'",
            "Paradoja",
            "Anáfora"
        ],
        "correct": 0,
        "explanation": "Transfiere las propiedades de dureza e insensibilidad de la piedra al corazón humano.",
        "id": "q_g7_lengua_27"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de palabra es 'aunque'?",
        "options": [
            "Conjunción concesiva o adversativa",
            "Preposición propia",
            "Adverbio de lugar",
            "Pronombre indefinido"
        ],
        "correct": 0,
        "explanation": "'Aunque' funciona como nexo subordinante concesivo.",
        "id": "q_g7_lengua_28"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el gentilicio formal correspondiente a los habitantes de la provincia de Jujuy?",
        "options": [
            "Jujeño/a",
            "Jujuyense",
            "Jujuino",
            "Jujuyano"
        ],
        "correct": 0,
        "explanation": "El gentilicio oficial de Jujuy es 'jujeño' y 'jujeña'.",
        "id": "q_g7_lengua_29"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué alteración voluntaria del orden sintáctico habitual de las palabras se conoce como 'hipérbaton'?",
        "options": [
            "Cambiar el orden normal de los términos en la oración (ej: 'Del salón en el ángulo oscuro')",
            "Exagerar una idea",
            "Imitar ruidos",
            "Omitir letras"
        ],
        "correct": 0,
        "explanation": "El hipérbaton invierte la sintaxis tradicional (Sujeto + Verbo + Objeto) con fines estilísticos o de rima.",
        "id": "q_g7_lengua_30"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el pretérito imperfecto del modo subjuntivo del verbo 'tener' para 'él'?",
        "options": [
            "Tuviera o tuviese",
            "Tuvo",
            "Tenga",
            "Tendría"
        ],
        "correct": 0,
        "explanation": "Las dos formas válidas del imperfecto de subjuntivo son 'tuviera' y 'tuviese'.",
        "id": "q_g7_lengua_31"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué movimiento literario hispanoamericano de finales del siglo XIX fue liderado por Rubén Darío buscando la belleza formal y musicalidad?",
        "options": [
            "El Modernismo",
            "El Realismo mágico",
            "El Romanticismo",
            "El Vanguardismo"
        ],
        "correct": 0,
        "explanation": "Rubén Darío con su obra 'Azul...' (1888) inauguró el Modernismo poético.",
        "id": "q_g7_lengua_32"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de texto expositivo académico resume un tema para ser presentado oralmente en clase?",
        "options": [
            "Informe de divulgación o monografía",
            "Cuento fantástico",
            "Folleto publicitario",
            "Guion cinematográfico"
        ],
        "correct": 0,
        "explanation": "El informe académico expone conceptos estructurados con introducción, desarrollo y conclusiones.",
        "id": "q_g7_lengua_33"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el significado del prefijo 'crono-' en palabras como 'cronómetro' o 'cronología'?",
        "options": [
            "Tiempo",
            "Color",
            "Espacio",
            "Medida"
        ],
        "correct": 0,
        "explanation": "Del griego 'chronos', significa tiempo.",
        "id": "q_g7_lengua_34"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la oración 'El testigo declaró bajo juramento', ¿qué función cumple 'bajo juramento'?",
        "options": [
            "Circunstancial de modo",
            "Objeto Directo",
            "Sujeto agente",
            "Predicativo"
        ],
        "correct": 0,
        "explanation": "Indica el modo o condición bajo la cual se realiza la declaración testimonial.",
        "id": "q_g7_lengua_35"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué es la elipsis como mecanismo de cohesión textual?",
        "options": [
            "La omisión voluntaria de una palabra que se sobreentiende por el contexto",
            "El uso de mayúsculas",
            "La rima consonante",
            "La repetición de comas"
        ],
        "correct": 0,
        "explanation": "La elipsis evita redundancias suprimiendo elementos ya conocidos (ej: 'Juan fue al cine; Pedro, al teatro').",
        "id": "q_g7_lengua_36"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el antónimo de 'efímero'?",
        "options": [
            "Perdurable o eterno",
            "Breve",
            "Fugitivo",
            "Instantáneo"
        ],
        "correct": 0,
        "explanation": "Efímero es algo de muy corta duración; su antónimo es perdurable o duradero.",
        "id": "q_g7_lengua_37"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el sujeto en la oración 'A los niños les gustaron los libros'?",
        "options": [
            "Los libros",
            "A los niños",
            "Les",
            "Gustaron"
        ],
        "correct": 0,
        "explanation": "El sujeto concuerda en número con el verbo gustaron: 'los libros' (ellos) gustaron a los niños.",
        "id": "q_g7_lengua_38"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué regla rige el uso de la tilde en los adverbios terminados en '-mente'?",
        "options": [
            "Conservan la tilde del adjetivo original si este la llevaba (ej: fácil -> fácilmente)",
            "Nunca llevan tilde",
            "Siempre llevan tilde en la e",
            "Llevan tilde solo si son agudos"
        ],
        "correct": 0,
        "explanation": "Los adverbios en -mente mantienen la acentuación gráfica del adjetivo base (fácil -> fácilmente, rápida -> rápidamente).",
        "id": "q_g7_lengua_39"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el significado de la palabra 'utopía'?",
        "options": [
            "Un plan, proyecto o sociedad ideal que parece inalcanzable en la práctica",
            "Una pesadilla nocturna",
            "Una ley escrita",
            "Una mentira comprobada"
        ],
        "correct": 0,
        "explanation": "Término acuñado por Tomás Moro para describir una sociedad perfecta e idealizada.",
        "id": "q_g7_lengua_40"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué partículas subatómicas poseen carga eléctrica positiva y se ubican en el núcleo del átomo?",
        "options": [
            "Electrones",
            "Protones",
            "Neutrones",
            "Fotones"
        ],
        "correct": 1,
        "explanation": "Los protones tienen carga positiva (+), los neutrones no tienen carga y los electrones tienen carga negativa (-).",
        "id": "q_g7_naturales_1"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué sistema del cuerpo humano coordina las respuestas rápidas mediante impulsos bioeléctricos?",
        "options": [
            "Sistema Nervioso",
            "Sistema Linfático",
            "Sistema Digestivo",
            "Sistema Esquelético"
        ],
        "correct": 0,
        "explanation": "El sistema nervioso (cerebro, médula y nervios) transmite impulsos eléctricos con enorme velocidad.",
        "id": "q_g7_naturales_2"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley de Newton afirma que 'a toda acción le corresponde una reacción igual y en sentido contrario'?",
        "options": [
            "Primera Ley (Inercia)",
            "Segunda Ley (Fuerza y aceleración)",
            "Tercera Ley (Acción y Reacción)",
            "Ley de Gravitación"
        ],
        "correct": 2,
        "explanation": "La 3.ª Ley de Newton postula el principio de interacción o acción y reacción simultánea.",
        "id": "q_g7_naturales_3"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la molécula en forma de doble hélice que contiene el código y la información genética de los seres vivos?",
        "options": [
            "ATP",
            "ADN (Ácido desoxirribonucleico)",
            "Glucosa",
            "Hemoglobina"
        ],
        "correct": 1,
        "explanation": "El ADN contiene las instrucciones genéticas que determinan las características hereditarias.",
        "id": "q_g7_naturales_4"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué partículas subatómicas poseen carga eléctrica negativa y orbitan alrededor del núcleo atómico?",
        "options": [
            "Los electrones",
            "Los protones",
            "Los neutrones",
            "Los quarks"
        ],
        "correct": 0,
        "explanation": "Los electrones tienen carga negativa (-e) y se distribuyen en niveles energéticos orbitales.",
        "id": "q_g7_naturales_5"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué número atómico (Z) define la identidad química de un elemento en la tabla periódica?",
        "options": [
            "La cantidad de protones en el núcleo",
            "La cantidad de neutrones",
            "La masa en gramos",
            "El número de electrones de valencia únicamente"
        ],
        "correct": 0,
        "explanation": "El número atómico Z es el número de protones; el carbono tiene 6, el oxígeno 8, etc.",
        "id": "q_g7_naturales_6"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley de Newton afirma que la aceleración de un cuerpo es directamente proporcional a la fuerza neta aplicada (F = m · a)?",
        "options": [
            "Segunda Ley de Newton",
            "Primera Ley (Inercia)",
            "Tercera Ley (Acción y Reacción)",
            "Ley de Gravitación Universal"
        ],
        "correct": 0,
        "explanation": "La 2ª Ley de la Dinámica postula que Fuerza es igual a masa multiplicada por aceleración.",
        "id": "q_g7_naturales_7"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la unidad del Sistema Internacional para medir la fuerza?",
        "options": [
            "El Newton (N)",
            "El Joule (J)",
            "El Watt (W)",
            "El Pascal (Pa)"
        ],
        "correct": 0,
        "explanation": "1 Newton equivale a la fuerza necesaria para acelerar 1 kg a 1 m/s².",
        "id": "q_g7_naturales_8"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de onda electromagnética tiene mayor frecuencia y energía que la luz visible y puede atravesar tejidos blandos?",
        "options": [
            "Los Rayos X",
            "Las ondas de radio",
            "Las microondas",
            "La radiación infrarroja"
        ],
        "correct": 0,
        "explanation": "Los Rayos X tienen longitudes de onda cortas que atraviesan la piel pero son absorbidas por huesos (radiografías).",
        "id": "q_g7_naturales_9"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué glándula endocrina ubicada en la base del cerebro es considerada la 'glándula maestra' que regula a las demás?",
        "options": [
            "La hipófisis o pituitaria",
            "La tiroides",
            "El timo",
            "El páncreas"
        ],
        "correct": 0,
        "explanation": "La hipófisis secreta hormonas tróficas que controlan a la tiroides, suprarrenales y gónadas.",
        "id": "q_g7_naturales_10"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuáles son las 4 bases nitrogenadas que forman la molécula de ADN?",
        "options": [
            "Adenina, Timina, Citosina y Guanina (A, T, C, G)",
            "Uracilo, Adenina, Glucosa y Lípido",
            "Fósforo, Nitrógeno, Carbono y Oxígeno",
            "Cloro, Sodio, Calcio y Potasio"
        ],
        "correct": 0,
        "explanation": "En el ADN se emparejan siempre Adenina con Timina (A-T) y Citosina con Guanina (C-G).",
        "id": "q_g7_naturales_11"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se llama el proceso de división celular que reduce a la mitad el número de cromosomas para formar gametos (óvulos y espermatozoides)?",
        "options": [
            "Meiosis",
            "Mitosis",
            "Bipartición",
            "Clonación"
        ],
        "correct": 0,
        "explanation": "La meiosis genera 4 células haploides (n = 23 en humanos) a partir de una célula diploide (2n = 46).",
        "id": "q_g7_naturales_12"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué propiedad describe la resistencia de un líquido a fluir (como la miel frente al agua)?",
        "options": [
            "Viscosidad",
            "Tensión superficial",
            "Densidad",
            "Capilaridad"
        ],
        "correct": 0,
        "explanation": "La viscosidad es la fricción interna entre las capas de un fluido en movimiento.",
        "id": "q_g7_naturales_13"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿En qué consiste la Ley de Conservación de la Masa formulada por Antoine Lavoisier?",
        "options": [
            "La materia no se crea ni se destruye, solo se transforma",
            "Los gases siempre se expanden al infinito",
            "El calor se destruye con el frío",
            "La energía se pierde en cada reacción"
        ],
        "correct": 0,
        "explanation": "En una reacción química en sistema cerrado, la masa total de los reactivos es igual a la masa de los productos.",
        "id": "q_g7_naturales_14"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué células del sistema nervioso central transmiten impulsos electroquímicos a través de la sinapsis?",
        "options": [
            "Las neuronas",
            "Las células de la glía",
            "Los adipocitos",
            "Los osteocitos"
        ],
        "correct": 0,
        "explanation": "Las neuronas constan de soma, dendritas y axón para propagar potenciales de acción y neurotransmisores.",
        "id": "q_g7_naturales_15"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué escala logarítmica mide el grado de acidez o alcalinidad de una solución (de 0 a 14)?",
        "options": [
            "Escala de pH",
            "Escala de Richter",
            "Escala de Mohs",
            "Escala Celsius"
        ],
        "correct": 0,
        "explanation": "pH 7 es neutro; menor a 7 es ácido y mayor a 7 es básico o alcalino.",
        "id": "q_g7_naturales_16"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué elemento gaseoso noble e inerte se utiliza en tubos de iluminación fluorescente y carteles luminosos de color rojizo?",
        "options": [
            "Neón (Ne)",
            "Oxígeno",
            "Cloro",
            "Flúor"
        ],
        "correct": 0,
        "explanation": "El gas neón emite un brillo anaranjado rojizo característico al pasar una descarga eléctrica.",
        "id": "q_g7_naturales_17"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la unidad de medida del trabajo y la energía en el Sistema Internacional?",
        "options": [
            "El Joule o Julio (J)",
            "El Newton",
            "El Volt",
            "El Amperio"
        ],
        "correct": 0,
        "explanation": "1 Joule equivale al trabajo realizado por una fuerza de 1 Newton a lo largo de 1 metro.",
        "id": "q_g7_naturales_18"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se llama la teoría geológica que explica el movimiento y desplazamiento de los continentes sobre el manto terrestre?",
        "options": [
            "Tectónica de Placas",
            "Deriva de Kepler",
            "Evolución Darwiniana",
            "Catastrofismo"
        ],
        "correct": 0,
        "explanation": "La litosfera está dividida en placas tectónicas que flotan y se mueven sobre la astenosfera.",
        "id": "q_g7_naturales_19"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de enlace químico se produce cuando dos átomos comparten uno o más pares de electrones?",
        "options": [
            "Enlace covalente",
            "Enlace iónico",
            "Enlace metálico",
            "Puente de hidrógeno"
        ],
        "correct": 0,
        "explanation": "El enlace covalente (como en H2O o CH4) se basa en la compartición mutua de electrones.",
        "id": "q_g7_naturales_20"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de enlace se forma por la transferencia de electrones entre un metal que cede y un no metal que recibe?",
        "options": [
            "Enlace iónico (como en el cloruro de sodio NaCl)",
            "Enlace covalente puro",
            "Enlace peptídico",
            "Fuerza de Van der Waals"
        ],
        "correct": 0,
        "explanation": "La atracción electrostática entre iones positivos (cationes) y negativos (aniones) forma redes iónicas cristalinas.",
        "id": "q_g7_naturales_21"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué capa protectora estratosférica compuesta por moléculas de tres átomos de oxígeno (O3) filtra los rayos ultravioleta?",
        "options": [
            "La capa de ozono",
            "La ionosfera",
            "La magnetosfera",
            "La termosfera"
        ],
        "correct": 0,
        "explanation": "El ozono (O3) absorbe entre el 97% y 99% de la radiación UV-B de alta frecuencia.",
        "id": "q_g7_naturales_22"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el valor aproximado de la aceleración de la gravedad (g) en la superficie de la Tierra?",
        "options": [
            "9,8 m/s²",
            "1,6 m/s²",
            "300 m/s²",
            "98 m/s²"
        ],
        "correct": 0,
        "explanation": "La aceleración gravitatoria terrestre promedia unos 9,8 metros por segundo al cuadrado al nivel del mar.",
        "id": "q_g7_naturales_23"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué hormona es secretada por las glándulas suprarrenales ante situaciones de alarma o peligro preparando para la huida o lucha?",
        "options": [
            "Adrenalina (epinefrina)",
            "Melatonina",
            "Prolactina",
            "Calcitonina"
        ],
        "correct": 0,
        "explanation": "La adrenalina acelera el ritmo cardíaco, dilata las pupilas y aumenta el flujo sanguíneo a los músculos.",
        "id": "q_g7_naturales_24"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué principio biológico formulado por Charles Darwin explica la supervivencia diferencial de los organismos con rasgos adaptativos ventajosos?",
        "options": [
            "Selección natural",
            "Herencia de caracteres adquiridos",
            "Generación espontánea",
            "Fijismo"
        ],
        "correct": 0,
        "explanation": "En 'El origen de las especies' (1859), Darwin demostró que los individuos mejor adaptados dejan más descendencia.",
        "id": "q_g7_naturales_25"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué organela celular degrada y digiere desechos celulares mediante enzimas hidrolíticas?",
        "options": [
            "Los lisosomas",
            "El nucléolo",
            "Los microtúbulos",
            "Los peroxisomas"
        ],
        "correct": 0,
        "explanation": "Los lisosomas funcionan como el aparato digestivo y de reciclaje de la célula.",
        "id": "q_g7_naturales_26"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley de la física establece que la corriente eléctrica es directamente proporcional al voltaje e inversamente a la resistencia (V = I · R)?",
        "options": [
            "Ley de Ohm",
            "Ley de Coulomb",
            "Ley de Ampère",
            "Ley de Faraday"
        ],
        "correct": 0,
        "explanation": "La Ley de Ohm es la relación fundamental en circuitos eléctricos entre Tensión (V), Intensidad (I) y Resistencia (R).",
        "id": "q_g7_naturales_27"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué gas noble e inerte es el segundo elemento más ligero y abundante del universo tras el hidrógeno?",
        "options": [
            "Helio (He)",
            "Kriptón",
            "Radón",
            "Xenón"
        ],
        "correct": 0,
        "explanation": "El helio posee 2 protones y 2 electrones, y se produce por fusión nuclear en el núcleo del Sol.",
        "id": "q_g7_naturales_28"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué estructura celular filamentosa transmite impulsos eléctricos desde el cuerpo neuronal hacia otras células?",
        "options": [
            "El axón",
            "La dendrita",
            "El soma",
            "La vaina sináptica"
        ],
        "correct": 0,
        "explanation": "El axón es la prolongación única y larga recubierta de mielina que transmite señales eferentes.",
        "id": "q_g7_naturales_29"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la velocidad del sonido en el agua líquida comparada con el aire?",
        "options": [
            "Mucho más rápida (unos 1.500 m/s frente a 340 m/s en aire)",
            "Más lenta",
            "Igual que en el aire",
            "Cero"
        ],
        "correct": 0,
        "explanation": "Al ser el agua más densa e incompresible, las ondas sonoras viajan más de 4 veces más rápido que en el aire.",
        "id": "q_g7_naturales_30"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué propiedad periódica mide la tendencia de un átomo a atraer electrones al formar un enlace químico?",
        "options": [
            "Electronegatividad (escala de Pauling)",
            "Radio atómico",
            "Afinidad protónica",
            "Conductividad"
        ],
        "correct": 0,
        "explanation": "El flúor es el elemento con mayor electronegatividad (4,0) de toda la tabla periódica.",
        "id": "q_g7_naturales_31"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de bacterias del suelo son capaces de fijar el nitrógeno atmosférico haciéndolo asimilable para las plantas leguminosas?",
        "options": [
            "Bacterias fijadoras (como Rhizobium)",
            "Bacterias lácticas",
            "Cianobacterias marinas",
            "Estafilococos"
        ],
        "correct": 0,
        "explanation": "Rhizobium vive en simbiosis en los nódulos de las raíces de leguminosas fijando N2 gaseoso.",
        "id": "q_g7_naturales_32"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué mineral de silicato con dureza 7 en la escala de Mohs es el más abundante en la corteza continental terrestre?",
        "options": [
            "El cuarzo (SiO2)",
            "El yeso",
            "El talco",
            "La calcita"
        ],
        "correct": 0,
        "explanation": "El cuarzo cristalino está presente en granitos, arenas y rocas sedimentarias de todo el mundo.",
        "id": "q_g7_naturales_33"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de radiación luminosa tiene longitudes de onda justo por debajo del extremo rojo visible y transporta calor radiante?",
        "options": [
            "Radiación infrarroja",
            "Radiación ultravioleta",
            "Rayos Gamma",
            "Microondas"
        ],
        "correct": 0,
        "explanation": "Los cuerpos calientes emiten radiación infrarroja captada por cámaras térmicas.",
        "id": "q_g7_naturales_34"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se llama la porción del ojo que regula la cantidad de luz que ingresa dilatando o contrayendo la pupila?",
        "options": [
            "El iris",
            "La córnea",
            "El cristalino",
            "El nervio óptico"
        ],
        "correct": 0,
        "explanation": "El iris es el diafragma muscular pigmentado con un orificio central (la pupila).",
        "id": "q_g7_naturales_35"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la causa primaria de los terremotos y volcanes a lo largo del Cinturón de Fuego del Pacífico?",
        "options": [
            "La subducción de placas oceánicas bajo placas continentales",
            "El peso del agua del océano",
            "La gravedad lunar",
            "La rotación terrestre"
        ],
        "correct": 0,
        "explanation": "La placa del Pacífico subduce bajo las placas circundantes fundiendo roca y generando fallas y volcanes.",
        "id": "q_g7_naturales_36"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué elemento metálico líquido y pesado es famoso por su color plateado y densidad extremadamente alta?",
        "options": [
            "Mercurio (Hg)",
            "Plomo (Pb)",
            "Plata (Ag)",
            "Oro (Au)"
        ],
        "correct": 0,
        "explanation": "El mercurio tiene una densidad de 13,6 g/cm³ y es líquido a 20 °C.",
        "id": "q_g7_naturales_37"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué nombre recibe el desprendimiento de energía nuclear mediante la división del núcleo de un átomo pesado como el Uranio-235?",
        "options": [
            "Fisión nuclear",
            "Fusión nuclear",
            "Combustión iónica",
            "Electrólisis"
        ],
        "correct": 0,
        "explanation": "La fisión nuclear divide el núcleo liberando neutrones y gran cantidad de calor en reactores nucleares.",
        "id": "q_g7_naturales_38"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué proceso une núcleos atómicos ligeros (como los isótopos de hidrógeno) liberando la energía que hace brillar a las estrellas?",
        "options": [
            "Fusión nuclear",
            "Fisión nuclear",
            "Oxidación solar",
            "Radiación beta"
        ],
        "correct": 0,
        "explanation": "La fusión termonuclear en el núcleo estelar fusiona hidrógeno en helio a millones de grados.",
        "id": "q_g7_naturales_39"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué término ecológico define a la variedad de especies biológicas, genéticas y de ecosistemas en el planeta?",
        "options": [
            "Biodiversidad",
            "Biomasa neta",
            "Capacidad de carga",
            "Sucesión primaria"
        ],
        "correct": 0,
        "explanation": "La biodiversidad abarca la riqueza de formas de vida y su preservación es crítica para el equilibrio de la biosfera.",
        "id": "q_g7_naturales_40"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué reclamo soberano histórico e imprescriptible sostiene la República Argentina en el Atlántico Sur?",
        "options": [
            "Islas Malvinas, Georgias del Sur y Sandwich del Sur",
            "Canal de Panamá",
            "Península de Yucatán",
            "Estrecho de Bering"
        ],
        "correct": 0,
        "explanation": "La Constitución Argentina ratifica la legítima e imprescriptible soberanía sobre las Islas Malvinas, Georgias y Sandwich del Sur.",
        "id": "q_g7_sociales_1"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué acontecimiento mundial ocurrido entre 1914 y 1918 transformó las fronteras del planeta?",
        "options": [
            "La Segunda Guerra Mundial",
            "La Primera Guerra Mundial",
            "La Guerra Fría",
            "La Revolución Francesa"
        ],
        "correct": 1,
        "explanation": "La Primera Guerra Mundial (1914-1918) derivó en la caída de grandes imperios y el rediseño del mapa de Europa.",
        "id": "q_g7_sociales_2"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el principal acuerdo de integración económica y política fundado por Argentina, Brasil, Paraguay y Uruguay en 1991?",
        "options": [
            "Unión Europea",
            "Mercosur",
            "Tratado de Versalles",
            "OTAN"
        ],
        "correct": 1,
        "explanation": "El Mercado Común del Sur (Mercosur) fue creado mediante el Tratado de Asunción en 1991.",
        "id": "q_g7_sociales_3"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tratado internacional prohíbe las actividades militares y la explotación minera en la Antártida, consagrándola a la paz y la ciencia?",
        "options": [
            "Tratado de Kioto",
            "Tratado Antártico (1959)",
            "Pacto de San José de Costa Rica",
            "Tratado de Tordesillas"
        ],
        "correct": 1,
        "explanation": "El Tratado Antártico firmado en 1959 protege a la Antártida con fines exclusivamente científicos y pacíficos.",
        "id": "q_g7_sociales_4"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tratado internacional de 1991 dio origen formal a la creación del Mercado Común del Sur (Mercosur)?",
        "options": [
            "Tratado de Asunción",
            "Tratado de Tordesillas",
            "Tratado de Versalles",
            "Tratado de Roma"
        ],
        "correct": 0,
        "explanation": "El Tratado de Asunción fue firmado el 26 de marzo de 1991 por Argentina, Brasil, Paraguay y Uruguay.",
        "id": "q_g7_sociales_5"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué acontecimiento mundial ocurrido en 1989 con la caída del Muro de Berlín simbolizó el fin de la Guerra Fría?",
        "options": [
            "La caída de la Unión Soviética y del bloque socialista",
            "El inicio de la 1ª Guerra Mundial",
            "La creación de la ONU",
            "La crisis de los misiles"
        ],
        "correct": 0,
        "explanation": "La caída del Muro de Berlín precedió a la reunificación alemana y a la disolución de la URSS en 1991.",
        "id": "q_g7_sociales_6"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué reforma de la Constitución Nacional Argentina incorporó los tratados internacionales de derechos humanos con jerarquía constitucional?",
        "options": [
            "La Reforma Constitucional de 1994",
            "La Reforma de 1860",
            "La Constitución de 1949",
            "El Estatuto de 1957"
        ],
        "correct": 0,
        "explanation": "La convención constituyente reunida en Santa Fe y Paraná en 1994 otorgó jerarquía constitucional a pactos de DDHH (art. 75 inc. 22).",
        "id": "q_g7_sociales_7"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la capital del Estado Plurinacional de Bolivia reconocida en su Constitución como capital histórica?",
        "options": [
            "Sucre (capital constitucional)",
            "La Paz (sede de gobierno)",
            "Santa Cruz de la Sierra",
            "Cochabamba"
        ],
        "correct": 0,
        "explanation": "Sucre es la capital constitucional e histórica de Bolivia, mientras que La Paz es la sede de los poderes ejecutivo y legislativo.",
        "id": "q_g7_sociales_8"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué organismo de la ONU tiene como función primordial el mantenimiento de la paz y la seguridad internacional?",
        "options": [
            "El Consejo de Seguridad",
            "La UNESCO",
            "La OMS",
            "El Banco Mundial"
        ],
        "correct": 0,
        "explanation": "El Consejo de Seguridad está integrado por 15 miembros (5 permanentes con poder de veto: EE.UU., Rusia, China, Francia y Reino Unido).",
        "id": "q_g7_sociales_9"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué presidente argentino gobernó entre 1946 y 1955 impulsando la industrialización por sustitución y los derechos laborales?",
        "options": [
            "Juan Domingo Perón",
            "Arturo Frondizi",
            "Hipólito Yrigoyen",
            "Agustín P. Justo"
        ],
        "correct": 0,
        "explanation": "Perón fundó el movimiento peronista junto a Eva Perón, promoviendo el sufragio femenino en 1947 y la justicia social.",
        "id": "q_g7_sociales_10"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿En qué año se promulgó en Argentina la Ley 13.010 que consagró el derecho al voto femenino promovida por Evita?",
        "options": [
            "1947",
            "1912",
            "1930",
            "1983"
        ],
        "correct": 0,
        "explanation": "El 23 de septiembre de 1947 se promulgó la ley de derechos políticos de las mujeres argentinas.",
        "id": "q_g7_sociales_11"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito histórico marcó el 10 de diciembre de 1983 en la historia argentina reciente?",
        "options": [
            "La recuperación definitiva de la democracia con la asunción de Raúl Alfonsín",
            "El estallido del 2001",
            "La sanción de la ley de divorcio",
            "La inauguración de la represa de Yacyretá"
        ],
        "correct": 0,
        "explanation": "Raúl Alfonsín asumió la presidencia tras siete años de dictadura militar iniciando el ciclo democrático ininterrumpido.",
        "id": "q_g7_sociales_12"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué canal bioceánico en Centroamérica une el Mar Caribe (Atlántico) con el Océano Pacífico a través de esclusas?",
        "options": [
            "Canal de Panamá",
            "Canal de Suez",
            "Estrecho de Malaca",
            "Canal de Corinto"
        ],
        "correct": 0,
        "explanation": "El Canal de Panamá permite el cruce de más de 14.000 buques cargueros al año ahorrando miles de millas marinas.",
        "id": "q_g7_sociales_13"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la capital de la República de Chile situada en el valle central chileno?",
        "options": [
            "Santiago de Chile",
            "Valparaíso",
            "Concepción",
            "Antofagasta"
        ],
        "correct": 0,
        "explanation": "Santiago es la capital y principal urbe chilena a los pies de la Cordillera de los Andes.",
        "id": "q_g7_sociales_14"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tratado firmado en 1959 reserva al continente blanco para fines pacíficos y científicos prohibiendo la actividad militar y minera?",
        "options": [
            "El Tratado Antártico",
            "El Protocolo de Kioto",
            "El Acuerdo de París",
            "La Carta de Ottawa"
        ],
        "correct": 0,
        "explanation": "El Tratado Antártico consagra a la Antártida como reserva natural consagrada a la paz y a la investigación científica.",
        "id": "q_g7_sociales_15"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el río más caudaloso y con la cuenca hidrográfica más extensa del planeta Tierra?",
        "options": [
            "El Río Amazonas",
            "El Río Nilo",
            "El Río Misisipi",
            "El Río Yangtsé"
        ],
        "correct": 0,
        "explanation": "El Amazonas en Sudamérica vierte al Atlántico más agua que los siguientes 7 ríos combinados.",
        "id": "q_g7_sociales_16"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se llama el proceso de interconexión e interdependencia económica, tecnológica, social y cultural a escala planetaria?",
        "options": [
            "Globalización",
            "Aislamiento económico",
            "Feudalismo",
            "Autarquía"
        ],
        "correct": 0,
        "explanation": "La globalización ha acelerado el flujo de bienes, información y personas a nivel mundial desde fines del siglo XX.",
        "id": "q_g7_sociales_17"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué juicio histórico llevado a cabo en Argentina en 1985 sentó en el banquillo y condenó a las cúpulas de la última dictadura militar?",
        "options": [
            "El Juicio a las Juntas Militares",
            "El Juicio de Núremberg",
            "El Tribunal de La Haya",
            "El Pacto de Olivos"
        ],
        "correct": 0,
        "explanation": "El juicio penal llevado a cabo por la Cámara Federal fue un hito civil pionero en el juzgamiento de crímenes de lesa humanidad.",
        "id": "q_g7_sociales_18"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué bloque regional europeo fundado por el Tratado de Maastricht en 1993 comprende a 27 Estados democráticos?",
        "options": [
            "La Unión Europea (UE)",
            "La OTAN",
            "La Liga Árabe",
            "El G7"
        ],
        "correct": 0,
        "explanation": "La UE integra un mercado común con libre circulación de personas, bienes, servicios y capitales.",
        "id": "q_g7_sociales_19"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el país más poblado de todo el continente americano?",
        "options": [
            "Estados Unidos de América (más de 335 millones)",
            "Brasil",
            "México",
            "Colombia"
        ],
        "correct": 0,
        "explanation": "EE.UU. encabeza la población americana, seguido de Brasil (215M) y México (130M).",
        "id": "q_g7_sociales_20"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué derecho cívico protege a una persona de ser detenida arbitrariamente sin orden judicial ni causa fundada?",
        "options": [
            "Habeas Corpus",
            "Habeas Data",
            "Acción de Amparo",
            "Juicio político"
        ],
        "correct": 0,
        "explanation": "El Habeas Corpus es la garantía constitucional que protege la libertad física contra detenciones ilegales.",
        "id": "q_g7_sociales_21"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué garantía constitucional permite a cualquier persona acceder a registros para conocer datos personales que consten sobre ella y exigir su rectificación?",
        "options": [
            "Habeas Data",
            "Habeas Corpus",
            "Secreto sumarial",
            "Inmunidad parlamentaria"
        ],
        "correct": 0,
        "explanation": "El Habeas Data tutela el derecho a la intimidad y la veracidad de los datos personales en bases informáticas.",
        "id": "q_g7_sociales_22"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué revolución política iniciada en 1789 derrocó a la monarquía absoluta bajo el lema 'Libertad, Igualdad, Fraternidad'?",
        "options": [
            "La Revolución Francesa",
            "La Revolución Rusa",
            "La Revolución Industrial",
            "La Guerra Civil Española"
        ],
        "correct": 0,
        "explanation": "La Revolución Francesa sentó las bases de los derechos ciudadanos y del constitucionalismo moderno.",
        "id": "q_g7_sociales_23"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿En qué año se proclamó en París la Declaración Universal de los Derechos Humanos tras la Segunda Guerra Mundial?",
        "options": [
            "1948",
            "1918",
            "1989",
            "1939"
        ],
        "correct": 0,
        "explanation": "El 10 de diciembre de 1948 la Asamblea General de la ONU aprobó la Declaración Universal.",
        "id": "q_g7_sociales_24"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el estrecho marítimo natural que separa a la provincia argentina de Tierra del Fuego del continente sudamericano?",
        "options": [
            "El Estrecho de Magallanes",
            "El Canal de Panamá",
            "El Estrecho de Bering",
            "El Canal de la Mancha"
        ],
        "correct": 0,
        "explanation": "El Estrecho de Magallanes separa la Isla Grande de Tierra del Fuego del territorio continental de Santa Cruz y Chile.",
        "id": "q_g7_sociales_25"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué ciudad es la capital del Estado de Brasil, inaugurada en 1960 y diseñada por Oscar Niemeyer y Lúcio Costa?",
        "options": [
            "Brasilia",
            "Río de Janeiro",
            "São Paulo",
            "Salvador de Bahía"
        ],
        "correct": 0,
        "explanation": "Brasilia fue construida en el planalto central como capital administrativa moderna de Brasil.",
        "id": "q_g7_sociales_26"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se llama el proceso de calentamiento del agua del Océano Pacífico tropical que altera los regímenes de lluvias mundiales?",
        "options": [
            "El Fenómeno de El Niño (ENSO)",
            "La Niña",
            "Corriente de Humboldt",
            "Ciclón polar"
        ],
        "correct": 0,
        "explanation": "El Niño genera lluvias e inundaciones excepcionales en el Litoral argentino y sequías en otras regiones.",
        "id": "q_g7_sociales_27"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué poder del Estado ejerce el control de constitucionalidad de las leyes en el sistema judicial argentino?",
        "options": [
            "La Corte Suprema de Justicia de la Nación y los jueces federales",
            "El Presidente",
            "El Senado",
            "El Ministerio de Seguridad"
        ],
        "correct": 0,
        "explanation": "El Poder Judicial tiene la atribución difusa de declarar la inconstitucionalidad de leyes contrarias a la Carta Magna.",
        "id": "q_g7_sociales_28"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la región geográfica argentina más densamente poblada que concentra a más de un tercio de los habitantes del país?",
        "options": [
            "El Área Metropolitana de Buenos Aires (AMBA)",
            "El Valle de Uco",
            "La Quebrada de Humahuaca",
            "La Meseta de Somuncurá"
        ],
        "correct": 0,
        "explanation": "El AMBA (CABA y los municipios del conurbano bonaerense) reúne a más de 15 millones de personas.",
        "id": "q_g7_sociales_29"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué organismo de crédito multilateral fue fundado en Bretton Woods en 1944 para otorgar préstamos a países con déficit de reservas?",
        "options": [
            "El Fondo Monetario Internacional (FMI)",
            "La Cruz Roja",
            "Greenpeace",
            "Amnistía Internacional"
        ],
        "correct": 0,
        "explanation": "El FMI y el Banco Mundial nacieron en la posguerra para ordenar el sistema financiero global.",
        "id": "q_g7_sociales_30"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el principio de desarrollo que busca satisfacer las necesidades presentes sin comprometer los recursos de las generaciones futuras?",
        "options": [
            "Desarrollo sustentable o sostenible",
            "Explotación a cielo abierto",
            "Crecimiento desmedido",
            "Consumismo planificado"
        ],
        "correct": 0,
        "explanation": "El informe Brundtland (1987) definió el desarrollo sustentable integrando economía, sociedad y medio ambiente.",
        "id": "q_g7_sociales_31"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué provincia argentina es la mayor productora nacional de peras y manzanas en el Alto Valle?",
        "options": [
            "Río Negro",
            "Neuquén",
            "Chubut",
            "Mendoza"
        ],
        "correct": 0,
        "explanation": "El Alto Valle del Río Negro es el centro frutícola de pepita líder en exportación de manzanas y peras.",
        "id": "q_g7_sociales_32"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué organismo electoral autónomo juzga la validez de los comicios presidenciales y legislativos en Argentina?",
        "options": [
            "La Cámara Nacional Electoral (CNE)",
            "La AFIP",
            "El Congreso",
            "La Policía Federal"
        ],
        "correct": 0,
        "explanation": "La justicia electoral federal garantiza la transparencia, escrutinio definitivo y registro de partidos.",
        "id": "q_g7_sociales_33"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué documento de 1215 firmado en Inglaterra por el rey Juan Sin Tierra es considerado el antecedente remoto del constitucionalismo?",
        "options": [
            "La Carta Magna",
            "El Código Napoleónico",
            "Las Doce Tablas",
            "El Fuero Juzgo"
        ],
        "correct": 0,
        "explanation": "La Carta Magna limitó por primera vez el poder arbitrario de la corona frente a los barones y súbditos.",
        "id": "q_g7_sociales_34"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué país de América del Sur no posee salida directa a ningún océano?",
        "options": [
            "Bolivia y Paraguay (ambos mediterráneos)",
            "Uruguay",
            "Ecuador",
            "Guyana"
        ],
        "correct": 0,
        "explanation": "Paraguay y Bolivia son los dos únicos países sin litoral marítimo propio en el cono sur.",
        "id": "q_g7_sociales_35"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la moneda oficial de Japón, la tercera economía del mundo?",
        "options": [
            "El Yen",
            "El Yuan",
            "El Won",
            "La Rupia"
        ],
        "correct": 0,
        "explanation": "El Yen (¥) es la divisa oficial japonesa emitida por el Banco de Japón.",
        "id": "q_g7_sociales_36"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la capital del país vecino de la República del Paraguay?",
        "options": [
            "Asunción",
            "Ciudad del Este",
            "Encarnación",
            "Luque"
        ],
        "correct": 0,
        "explanation": "Asunción, fundada en 1537, es la capital política y económica del Paraguay.",
        "id": "q_g7_sociales_37"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tratado internacional de 2015 reúne a las naciones para limitar el calentamiento global por debajo de 2 °C?",
        "options": [
            "El Acuerdo de París",
            "El Tratado de Roma",
            "El Protocolo de Montreal",
            "El Pacto de Varsovia"
        ],
        "correct": 0,
        "explanation": "El Acuerdo de París compromete a los Estados a reducir emisiones de gases contaminantes.",
        "id": "q_g7_sociales_38"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué rama del derecho regula las relaciones comerciales, contratos de empresas y títulos de crédito?",
        "options": [
            "Derecho Comercial",
            "Derecho Penal",
            "Derecho Ambiental",
            "Derecho de Familia"
        ],
        "correct": 0,
        "explanation": "El Derecho Comercial rige los actos mercantiles, sociedades y transacciones de mercado.",
        "id": "q_g7_sociales_39"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué prócer y militar tucumano presidió la convención constituyente de 1853 en Santa Fe?",
        "options": [
            "Facundo Zuviría",
            "Justo José de Urquiza",
            "Juan Bautista Alberdi",
            "Esteban Echeverría"
        ],
        "correct": 0,
        "explanation": "El doctor Facundo Zuviría presidió el Congreso General Constituyente sancionador de la Carta Magna.",
        "id": "q_g7_sociales_40"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es el elemento químico más abundante en el Universo observable?",
        "options": [
            "Oxígeno",
            "Carbono",
            "Hidrógeno",
            "Hierro"
        ],
        "correct": 2,
        "explanation": "El hidrógeno constituye aproximadamente el 75% de la materia bariónica de todo el universo.",
        "id": "q_g7_ingenio_1"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué célebre científico formuló la teoría de la Relatividad y la famosa equivalencia E = mc²?",
        "options": [
            "Isaac Newton",
            "Albert Einstein",
            "Nikola Tesla",
            "Stephen Hawking"
        ],
        "correct": 1,
        "explanation": "Albert Einstein publicó la Relatividad Especial en 1905 y la General en 1915.",
        "id": "q_g7_ingenio_2"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Un bate y una pelota cuestan $110 en total. El bate cuesta $100 MÁS que la pelota. ¿Cuánto cuesta la pelota?",
        "options": [
            "$10",
            "$5",
            "$15",
            "$1"
        ],
        "correct": 1,
        "explanation": "¡$5! Si la pelota cuesta $5, el bate cuesta $105 ($100 más). Juntos suman $105 + $5 = $110.",
        "id": "q_g7_ingenio_3"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué célebre físico teórico británico dedicó su vida al estudio de los agujeros negros y la radiación cuántica?",
        "options": [
            "Stephen Hawking",
            "Albert Einstein",
            "Niels Bohr",
            "Erwin Schrödinger"
        ],
        "correct": 0,
        "explanation": "Hawking postuló que los agujeros negros emiten radiación térmica (radiación de Hawking) hasta evaporarse.",
        "id": "q_g7_ingenio_4"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué número multiplicado por cualquier otro número siempre da como resultado ese mismo número original?",
        "options": [
            "El número 1",
            "El número 0",
            "El número 2",
            "El número 10"
        ],
        "correct": 0,
        "explanation": "El 1 es el elemento neutro del producto: a × 1 = a.",
        "id": "q_g7_ingenio_5"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué matemático y lógico británico descifró la máquina Enigma en la Segunda Guerra Mundial sentando las bases de la computación?",
        "options": [
            "Alan Turing",
            "John von Neumann",
            "Ada Lovelace",
            "Charles Babbage"
        ],
        "correct": 0,
        "explanation": "Turing diseñó la máquina 'Bombe' en Bletchley Park y concibió el modelo abstracto de la Máquina de Turing.",
        "id": "q_g7_ingenio_6"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si un avión se estrella exactamente sobre la frontera internacional entre Argentina y Chile, ¿en qué país se entierra a los sobrevivientes?",
        "options": [
            "¡A los sobrevivientes no se los entierra porque están vivos!",
            "En Argentina",
            "En Chile",
            "En el lugar del impacto"
        ],
        "correct": 0,
        "explanation": "¡Los sobrevivientes están vivos! Trampa clásica de lógica y atención.",
        "id": "q_g7_ingenio_7"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué científica polaca-francesa fue la primera persona en ganar dos Premios Nobel en disciplinas científicas distintas (Física y Química)?",
        "options": [
            "Marie Curie",
            "Rosalind Franklin",
            "Lise Meitner",
            "Jocelyn Bell"
        ],
        "correct": 0,
        "explanation": "Marie Curie descubrió el radio y el polonio y estudió la radiactividad ganando el Nobel en 1903 y 1911.",
        "id": "q_g7_ingenio_8"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Un pastor debe cruzar un río en una barca con un lobo, una oveja y una col, pero solo puede llevar uno a la vez. ¿A quién lleva primero para que ninguno sea devorado?",
        "options": [
            "A la oveja primero",
            "Al lobo",
            "A la col",
            "No se puede"
        ],
        "correct": 0,
        "explanation": "Lleva primero a la oveja (el lobo no come col). Luego vuelve, lleva la col, se trae la oveja, lleva el lobo y finalmente vuelve por la oveja.",
        "id": "q_g7_ingenio_9"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la velocidad de escape que necesita un cohete para salir de la atracción gravitatoria de la superficie terrestre?",
        "options": [
            "Aproximadamente 11,2 kilómetros por segundo",
            "1.000 km/h",
            "300.000 km/s",
            "5 km/s"
        ],
        "correct": 0,
        "explanation": "Para escapar de la órbita terrestre hacia el espacio interplanetario se requiere alcanzar unos 40.320 km/h (11,2 km/s).",
        "id": "q_g7_ingenio_10"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué objeto inventado en la antigüedad te permite ver a través de las paredes sólidas?",
        "options": [
            "La ventana con vidrio",
            "El taladro",
            "El periscopio",
            "La radiografía"
        ],
        "correct": 0,
        "explanation": "Una ventana permite la visión directa a través de un muro.",
        "id": "q_g7_ingenio_11"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué bióloga y cristalógrafa británica obtuvo la famosa 'Fotografía 51' clave para deducir la estructura en doble hélice del ADN?",
        "options": [
            "Rosalind Franklin",
            "Ada Lovelace",
            "Jane Goodall",
            "Rachel Carson"
        ],
        "correct": 0,
        "explanation": "La difracción de rayos X obtenida por Franklin permitió a Watson y Crick dilucidar la doble hélice en 1953.",
        "id": "q_g7_ingenio_12"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué letra sigue en la secuencia: U, D, T, C, C, S, S, O, N...?",
        "options": [
            "D (Diez)",
            "U",
            "V",
            "P"
        ],
        "correct": 0,
        "explanation": "Son las iniciales de los números: Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho, Nueve... ¡Diez (D)!",
        "id": "q_g7_ingenio_13"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué matemático griego de Siracusa descubrió el principio de flotabilidad en su bañera y gritó '¡Eureka!'?",
        "options": [
            "Arquímedes",
            "Pitágoras",
            "Euclides",
            "Tales de Mileto"
        ],
        "correct": 0,
        "explanation": "Arquímedes descubrió que todo cuerpo sumergido experimenta un empuje vertical hacia arriba.",
        "id": "q_g7_ingenio_14"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Tengo ciudades pero no casas, montañas pero no árboles, y agua pero no peces. ¿Qué soy?",
        "options": [
            "Un mapa",
            "El desierto",
            "Un cuadro",
            "Un sueño"
        ],
        "correct": 0,
        "explanation": "¡Un mapa o globo terráqueo! Representa toda la geografía sin ser real.",
        "id": "q_g7_ingenio_15"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cómo se llama el punto más profundo de todos los océanos de la Tierra, con cerca de 11.000 metros bajo el mar?",
        "options": [
            "La Fosa de las Marianas (Abismo de Challenger)",
            "La Fosa de Puerto Rico",
            "La Fosa de Java",
            "La Fosa de Tonga"
        ],
        "correct": 0,
        "explanation": "El abismo Challenger en el Pacífico occidental supera la altura del monte Everest si se invirtiera.",
        "id": "q_g7_ingenio_16"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué número tiene el mismo número de letras que su propio valor numérico en idioma español?",
        "options": [
            "El número 5 (C-I-N-C-O tiene 5 letras)",
            "El número 4",
            "El número 1",
            "El número 3"
        ],
        "correct": 0,
        "explanation": "La palabra 'cinco' tiene exactamente 5 letras.",
        "id": "q_g7_ingenio_17"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Quién formuló las 3 Leyes del Movimiento Planetario demostrando que las órbitas son elipses y no círculos perfectos?",
        "options": [
            "Johannes Kepler",
            "Galileo Galilei",
            "Tycho Brahe",
            "René Descartes"
        ],
        "correct": 0,
        "explanation": "Kepler demostró que los planetas barren áreas iguales en tiempos iguales en órbitas elípticas.",
        "id": "q_g7_ingenio_18"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Un tren eléctrico viaja a 120 km/h hacia el sur y el viento sopla a 40 km/h hacia el norte. ¿Hacia dónde se inclina el humo?",
        "options": [
            "¡Los trenes eléctricos no despiden humo!",
            "Hacia el norte",
            "Hacia el sur",
            "Hacia el este"
        ],
        "correct": 0,
        "explanation": "Al ser un tren eléctrico propulsado por catenaria, no produce combustión ni humo.",
        "id": "q_g7_ingenio_19"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué célebre inventor y pintor diseñó bocetos visionarios de helicópteros, paracaídas y submarinos en el siglo XV?",
        "options": [
            "Leonardo da Vinci",
            "Sandro Botticelli",
            "Tiziano",
            "Donatello"
        ],
        "correct": 0,
        "explanation": "Da Vinci plasmó en sus códices diseños mecánicos adelantados siglos a su época.",
        "id": "q_g7_ingenio_20"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué palabra se escribe incorrectamente en todos los diccionarios de la lengua española?",
        "options": [
            "'Incorrectamente'",
            "Ninguna",
            "Paradoja",
            "Error"
        ],
        "correct": 0,
        "explanation": "La palabra 'incorrectamente' se escribe exactamente así: i-n-c-o-r-r-e-c-t-a-m-e-n-t-e.",
        "id": "q_g7_ingenio_21"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué misión espacial de la NASA llevó al primer artefacto humano a salir formalmente de la heliosfera hacia el espacio interestelar?",
        "options": [
            "Voyager 1",
            "Pioneer 10",
            "New Horizons",
            "Cassini"
        ],
        "correct": 0,
        "explanation": "Lanzada en 1977, la sonda Voyager 1 cruzó la heliopausa en 2012 portando el disco de oro.",
        "id": "q_g7_ingenio_22"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si me tumbas soy todo, si me cortas por la mitad no soy nada. ¿Qué número soy?",
        "options": [
            "El número 8 (al tumbarlo es el símbolo de infinito ∞, cortado es dos ceros)",
            "El número 1",
            "El número 9",
            "El número 0"
        ],
        "correct": 0,
        "explanation": "El 8 acostado es el signo de infinito (∞); cortado horizontalmente queda en dos círculos o ceros (0).",
        "id": "q_g7_ingenio_23"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué físico descubrió que la energía se emite en paquetes discretos o 'cuantos' iniciando la Mecánica Cuántica en 1900?",
        "options": [
            "Max Planck",
            "Albert Einstein",
            "Werner Heisenberg",
            "Louis de Broglie"
        ],
        "correct": 0,
        "explanation": "Max Planck introdujo la constante de Planck (h) fundando la física cuántica.",
        "id": "q_g7_ingenio_24"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: El padre de Rosa tiene cinco hijas: Lala, Lele, Lili, Lolo y... ¿cómo se llama la quinta?",
        "options": [
            "Rosa (¡es el padre de Rosa!)",
            "Lulu",
            "Lili",
            "Laura"
        ],
        "correct": 0,
        "explanation": "El acertijo empieza diciendo 'El padre de Rosa tiene 5 hijas', por lo tanto la quinta es Rosa.",
        "id": "q_g7_ingenio_25"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué médico argentino desarrolló la técnica de conservación de sangre anticoagulada con citrato de sodio permitiendo transfusiones indirectas?",
        "options": [
            "Luis Agote",
            "René Favaloro",
            "Salvador Mazza",
            "Esteban Maradona"
        ],
        "correct": 0,
        "explanation": "En 1914 en Buenos Aires, Luis Agote realizó la primera transfusión de sangre conservada de la historia médica.",
        "id": "q_g7_ingenio_26"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué pesa más: un litro de agua líquida o un litro de hielo sólido?",
        "options": [
            "Un litro de agua líquida (el hielo es menos denso y flota)",
            "El hielo",
            "Pesan lo mismo",
            "Depende del recipiente"
        ],
        "correct": 0,
        "explanation": "El hielo se expande al congelarse: 1 litro de hielo tiene menor masa (unos 917 g) que 1 litro de agua (1.000 g).",
        "id": "q_g7_ingenio_27"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la estructura orgánica fósil o viva más grande construida por organismos en el mar?",
        "options": [
            "Los arrecifes coralinos",
            "El sargazo",
            "Los bosques de kelp",
            "Los manglares"
        ],
        "correct": 0,
        "explanation": "Las colonias de pólipos de coral secretan carbonato de calcio formando gigantescas barreras submarinas.",
        "id": "q_g7_ingenio_28"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué objeto puedes romper con solo decir su nombre?",
        "options": [
            "El silencio",
            "Un espejo",
            "Una promesa",
            "Un vaso"
        ],
        "correct": 0,
        "explanation": "En cuanto pronunciás cualquier sonido o palabra, rompés el silencio.",
        "id": "q_g7_ingenio_29"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué elemento químico de número atómico 79 no se oxida ni corroe con el aire y es el metal más maleable?",
        "options": [
            "El oro (Au)",
            "El platino",
            "La plata",
            "El cobre"
        ],
        "correct": 0,
        "explanation": "El oro es un metal noble químicamente inerte que puede laminarse en hojas de millonésimas de metro.",
        "id": "q_g7_ingenio_30"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si un médico te receta 3 pastillas y te dice que tomes una cada media hora, ¿cuánto tiempo duran las pastillas?",
        "options": [
            "1 hora (tomas la 1ª al minuto 0, la 2ª al minuto 30 y la 3ª al minuto 60)",
            "1 hora y media",
            "2 horas",
            "45 minutos"
        ],
        "correct": 0,
        "explanation": "La primera se toma en el instante inicial (t = 0), la segunda a los 30 min y la tercera a los 60 min (1 hora en total).",
        "id": "q_g7_ingenio_31"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué célebre astrónomo italiano apuntó por primera vez un telescopio a la Luna en 1609 descubriendo los cuatro satélites galileanos de Júpiter?",
        "options": [
            "Galileo Galilei",
            "Giordano Bruno",
            "Enrico Fermi",
            "Giovanni Cassini"
        ],
        "correct": 0,
        "explanation": "Galileo descubrió Ío, Europa, Ganimedes y Calisto orbitando Júpiter, refutando el geocentrismo.",
        "id": "q_g7_ingenio_32"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Dos personas juegan cinco partidas de ajedrez y cada una gana tres partidas, sin empates. ¿Cómo es posible?",
        "options": [
            "No jugaban entre sí, jugaban contra otros rivales",
            "El árbitro contó mal",
            "Jugaron partidas simultáneas",
            "Hicieron trampa"
        ],
        "correct": 0,
        "explanation": "Ambas personas jugaban al ajedrez, pero contra diferentes oponentes en el torneo.",
        "id": "q_g7_ingenio_33"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué efecto físico hace que la sirena de una ambulancia suene más aguda cuando se acerca y más grave cuando se aleja?",
        "options": [
            "El Efecto Doppler",
            "El Efecto Fotoeléctrico",
            "La Ley de Snell",
            "La Resonancia"
        ],
        "correct": 0,
        "explanation": "Christian Doppler demostró la variación de frecuencia aparente de una onda por el movimiento relativo entre emisor y receptor.",
        "id": "q_g7_ingenio_34"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Cuántos animales de cada especie metió Moisés en su arca?",
        "options": [
            "Ninguno (¡fue Noé quien construyó el arca, no Moisés!)",
            "Dos de cada especie",
            "Siete",
            "Cuatro"
        ],
        "correct": 0,
        "explanation": "La historia bíblica del arca corresponde a Noé, no a Moisés. Trampa clásica de atención.",
        "id": "q_g7_ingenio_35"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué matemático indio autodidacta del siglo XX asombró al mundo con miles de teoremas sobre series infinitas y particiones?",
        "options": [
            "Srinivasa Ramanujan",
            "Aryabhata",
            "Brahmagupta",
            "Satyendra Nath Bose"
        ],
        "correct": 0,
        "explanation": "Ramanujan colaboró en Cambridge con G. H. Hardy dejando un legado extraordinario en teoría de números.",
        "id": "q_g7_ingenio_36"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué invento humano permite a los astronautas y buzos respirar bajo ambientes sin aire?",
        "options": [
            "El equipo autónomo de respiración o escafandra",
            "El snorkel simple",
            "Las gafas",
            "El reloj sumergible"
        ],
        "correct": 0,
        "explanation": "Los tanques de aire presurizado y los trajes espaciales suministran mezclas respirables con oxígeno.",
        "id": "q_g7_ingenio_37"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué célebre pintor holandés postimpresionista creó obras maestras como 'La noche estrellada' y 'Los girasoles'?",
        "options": [
            "Vincent van Gogh",
            "Rembrandt",
            "Johannes Vermeer",
            "Claude Monet"
        ],
        "correct": 0,
        "explanation": "Van Gogh pintó 'La noche estrellada' en 1889, convirtiéndose en una de las pinturas más reproducidas del mundo.",
        "id": "q_g7_ingenio_38"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Cuál es el día más largo del año en el hemisferio sur?",
        "options": [
            "El solsticio de verano (alrededor del 21 de diciembre)",
            "El equinoccio de marzo",
            "El 21 de junio",
            "El 1 de enero"
        ],
        "correct": 0,
        "explanation": "En el solsticio de verano austral el hemisferio sur recibe la mayor cantidad de horas de luz del año.",
        "id": "q_g7_ingenio_39"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué telescopio espacial lanzado por la ESA en 2013 elaboró el mapa tridimensional más preciso de más de mil millones de estrellas de la Vía Láctea?",
        "options": [
            "Misión Gaia",
            "Rosetta",
            "SOHO",
            "BepiColombo"
        ],
        "correct": 0,
        "explanation": "La misión astrométrica Gaia mide posiciones, distancias y movimientos propios de millones de astros.",
        "id": "q_g7_ingenio_40"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Listen! Someone _______ the guitar in the room next door.",
        "options": [
            "plays",
            "is playing",
            "played",
            "was playing"
        ],
        "correct": 1,
        "explanation": "Usamos Present Continuous ('is playing') para una acción que está ocurriendo en este mismo momento ('Listen!').",
        "id": "q_gg4_mat_1"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My best friend usually _______ to school by bus every morning.",
        "options": [
            "was going",
            "is going",
            "goes",
            "go"
        ],
        "correct": 2,
        "explanation": "Con hábitos y rutinas ('usually', 'every morning') usamos Present Simple en tercera persona ('goes').",
        "id": "q_gg4_mat_2"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I _______ this math exercise at all. Can you explain it to me?",
        "options": [
            "am not understanding",
            "don't understand",
            "am not understand",
            "didn't understood"
        ],
        "correct": 1,
        "explanation": "'Understand' es un verbo de estado (stative verb) y no suele usarse en tiempos continuos. Lo correcto es 'don't understand'.",
        "id": "q_gg4_mat_3"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Where is Peter? - He _______ his room upstairs.",
        "options": [
            "tidy",
            "tidies",
            "tidied",
            "is tidying"
        ],
        "correct": 3,
        "explanation": "Pregunta dónde está ahora mismo, por lo que la acción está en progreso en el presente: 'He is tidying'.",
        "id": "q_gg4_mat_4"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Water _______ at 100 degrees Celsius.",
        "options": [
            "boil",
            "is boiling",
            "boils",
            "boiled"
        ],
        "correct": 2,
        "explanation": "Para hechos científicos y verdades permanentes usamos Present Simple ('boils').",
        "id": "q_gg4_mat_5"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Why _______ your winter jacket today? It is very hot outside!",
        "options": [
            "did you wore",
            "do you wear",
            "you wear",
            "are you wearing"
        ],
        "correct": 3,
        "explanation": "Present Continuous ('are you wearing') para una situación temporal hoy ('today').",
        "id": "q_gg4_mat_6"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Sophie _______ chocolate, but she likes strawberry ice cream.",
        "options": [
            "doesn't like",
            "isn't liking",
            "don't like",
            "not likes"
        ],
        "correct": 0,
        "explanation": "'Like' es un stative verb de preferencia y con 'Sophie' (3ra persona) usamos 'doesn't like'.",
        "id": "q_gg4_mat_7"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Look at the window! It _______ heavily.",
        "options": [
            "was snowed",
            "snowed",
            "snows",
            "is snowing"
        ],
        "correct": 3,
        "explanation": "Con la advertencia 'Look!' la acción está sucediendo en el instante de hablar: 'is snowing'.",
        "id": "q_gg4_mat_8"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "How often _______ your grandparents during the weekend?",
        "options": [
            "are you visiting",
            "did you visited",
            "you visit",
            "do you visit"
        ],
        "correct": 3,
        "explanation": "'How often' pregunta por frecuencia de un hábito, por eso usamos Present Simple: 'do you visit'.",
        "id": "q_gg4_mat_9"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Be quiet, please! The teacher _______ the test rules.",
        "options": [
            "has explain",
            "explained",
            "is explaining",
            "explains"
        ],
        "correct": 2,
        "explanation": "'Be quiet!' señala que el profesor está hablando en este preciso instante: 'is explaining'.",
        "id": "q_gg4_mat_10"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My dad _______ work at 5:00 PM on Fridays.",
        "options": [
            "are finishing",
            "finishes",
            "finish",
            "is finishing"
        ],
        "correct": 1,
        "explanation": "Horarios y rutinas semanales ('on Fridays') llevan Present Simple ('finishes').",
        "id": "q_gg4_mat_11"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What _______ right now? - I am watching a documentary on TV.",
        "options": [
            "are you doing",
            "did you do",
            "were you doing",
            "do you do"
        ],
        "correct": 0,
        "explanation": "La expresión 'right now' exige Present Continuous: 'What are you doing?'.",
        "id": "q_gg4_mat_12"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Do you _______ the answer to question number four?",
        "options": [
            "are knowing",
            "know",
            "knew",
            "knowing"
        ],
        "correct": 1,
        "explanation": "'Know' es un stative verb (saber/conocer) y no se usa en forma continua: 'Do you know?'.",
        "id": "q_gg4_mat_13"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "We _______ Spanish this year because our teacher is in Madrid.",
        "options": [
            "don't learn",
            "not learn",
            "aren't learning",
            "doesn't learn"
        ],
        "correct": 2,
        "explanation": "Para situaciones temporales que abarcan un período limitado ('this year') usamos Present Continuous.",
        "id": "q_gg4_mat_14"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My brother _______ delicious pizza every Saturday night.",
        "options": [
            "make",
            "is making",
            "makes",
            "making"
        ],
        "correct": 2,
        "explanation": "Rutina semanal fija ('every Saturday night') con sujeto singular ('My brother') requiere 'makes'.",
        "id": "q_gg4_mat_15"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Shh! The baby _______ in the cot.",
        "options": [
            "is sleeping",
            "slept",
            "was sleeping",
            "sleeps"
        ],
        "correct": 0,
        "explanation": "'Shh!' indica que el bebé está durmiendo ahora mismo: 'is sleeping'.",
        "id": "q_gg4_mat_16"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I _______ that this film is very boring.",
        "options": [
            "think",
            "thinks",
            "am thinking",
            "was thinking"
        ],
        "correct": 0,
        "explanation": "Cuando 'think' significa 'tener la opinión de que...', es un verbo de estado: 'I think'.",
        "id": "q_gg4_mat_17"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "They _______ to the cinema this evening. They have already bought tickets.",
        "options": [
            "go",
            "are going",
            "goes",
            "went"
        ],
        "correct": 1,
        "explanation": "Present Continuous se usa también para planes y compromisos futuros cerrados ('are going this evening').",
        "id": "q_gg4_mat_18"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Emma never _______ meat because she is a vegetarian.",
        "options": [
            "was eating",
            "eat",
            "is eating",
            "eats"
        ],
        "correct": 3,
        "explanation": "Con el adverbio de frecuencia 'never' expresando una regla de vida se usa Present Simple ('eats').",
        "id": "q_gg4_mat_19"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Why _______? Did somebody tell a funny joke?",
        "options": [
            "are you laughing",
            "were you laugh",
            "do you laugh",
            "you laugh"
        ],
        "correct": 0,
        "explanation": "Acción observable que ocurre ahora: 'Why are you laughing?'.",
        "id": "q_gg4_mat_20"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "This soup _______ amazing! What herbs did you put in it?",
        "options": [
            "tastes",
            "taste",
            "was tasting",
            "is tasting"
        ],
        "correct": 0,
        "explanation": "'Taste' en sentido de 'tener sabor a' es un verbo de percepción sensorial (stative verb): 'tastes'.",
        "id": "q_gg4_mat_21"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My parents _______ in a bank in the city center.",
        "options": [
            "are working",
            "works",
            "is working",
            "work"
        ],
        "correct": 3,
        "explanation": "Situación permanente de empleo habitual: Present Simple con sujeto plural ('My parents work').",
        "id": "q_gg4_mat_22"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Look at Mark! He _______ on the trampoline without shoes.",
        "options": [
            "is jumping",
            "jump",
            "jumped",
            "jumps"
        ],
        "correct": 0,
        "explanation": "'Look at Mark!' indica una acción en pleno desarrollo visual: 'is jumping'.",
        "id": "q_gg4_mat_23"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Do you _______ any pets at home?",
        "options": [
            "are having",
            "having",
            "have",
            "has"
        ],
        "correct": 2,
        "explanation": "'Have' en sentido de posesión no se usa en tiempo continuo: 'Do you have any pets?'.",
        "id": "q_gg4_mat_24"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Today we _______ uniforms because it is the annual Sports Day.",
        "options": [
            "not wearing",
            "didn't wore",
            "don't wear",
            "aren't wearing"
        ],
        "correct": 3,
        "explanation": "Excepción temporal hoy ('Today'): Present Continuous negativo ('aren't wearing').",
        "id": "q_gg4_mat_25"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While I _______ my bicycle in the park, I fell off and hurt my knee.",
        "options": [
            "have ridden",
            "rode",
            "am riding",
            "was riding"
        ],
        "correct": 3,
        "explanation": "Usamos Past Continuous ('was riding') con 'While' para la acción larga que estaba en progreso en el pasado.",
        "id": "q_gg4_mat_26"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "We were having dinner when the telephone suddenly _______.",
        "options": [
            "rang",
            "was ringing",
            "ring",
            "is ringing"
        ],
        "correct": 0,
        "explanation": "La acción puntual que interrumpe a la acción continua va en Past Simple ('rang').",
        "id": "q_gg4_mat_27"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What _______ at 8 o'clock yesterday evening?",
        "options": [
            "you did",
            "were you doing",
            "are you doing",
            "did you do"
        ],
        "correct": 1,
        "explanation": "Para una acción que estaba en desarrollo en una hora específica del pasado usamos Past Continuous: 'were you doing?'.",
        "id": "q_gg4_mat_28"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Yesterday, Lucas _______ his keys on the way home.",
        "options": [
            "was losing",
            "lost",
            "loses",
            "has lost"
        ],
        "correct": 1,
        "explanation": "Acción completada en un momento definido del pasado ('Yesterday'): Past Simple ('lost').",
        "id": "q_gg4_mat_29"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While mum was cooking dinner, my brother _______ his homework.",
        "options": [
            "does",
            "was doing",
            "is doing",
            "did"
        ],
        "correct": 1,
        "explanation": "Dos acciones simultáneas y continuas en el pasado unidas por 'while': ambas van en Past Continuous ('was doing').",
        "id": "q_gg4_mat_30"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "It _______ when we left the cinema last night.",
        "options": [
            "is raining",
            "rains",
            "rained",
            "was raining"
        ],
        "correct": 3,
        "explanation": "La lluvia estaba en progreso cuando salimos del cine: Past Continuous ('was raining').",
        "id": "q_gg4_mat_31"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I _______ an ancient coin while I was digging in the garden.",
        "options": [
            "find",
            "was finding",
            "have found",
            "found"
        ],
        "correct": 3,
        "explanation": "Encontrar la moneda fue un hecho puntual que interrumpió la acción de cavar: Past Simple ('found').",
        "id": "q_gg4_mat_32"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "They _______ football when the storm started.",
        "options": [
            "play",
            "are playing",
            "played",
            "were playing"
        ],
        "correct": 3,
        "explanation": "Estaban jugando (acción en curso) cuando comenzó la tormenta: 'were playing'.",
        "id": "q_gg4_mat_33"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "When you called me, I _______ a shower.",
        "options": [
            "was taking",
            "have taken",
            "took",
            "am taking"
        ],
        "correct": 0,
        "explanation": "Estaba tomando una ducha en el momento en que sonó la llamada: 'was taking'.",
        "id": "q_gg4_mat_34"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Shakespeare _______ many famous plays and poems.",
        "options": [
            "wrote",
            "has written",
            "writes",
            "was writing"
        ],
        "correct": 0,
        "explanation": "Hecho histórico completado en el pasado: Past Simple ('wrote').",
        "id": "q_gg4_mat_35"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While the teacher _______, Leo was looking out of the window.",
        "options": [
            "was talking",
            "talks",
            "talked",
            "is talking"
        ],
        "correct": 0,
        "explanation": "Con 'While' describiendo el trasfondo continuo en el pasado usamos Past Continuous ('was talking').",
        "id": "q_gg4_mat_36"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I was walking down the street when I _______ my favourite actor.",
        "options": [
            "was seeing",
            "saw",
            "have seen",
            "see"
        ],
        "correct": 1,
        "explanation": "'See' es un evento puntual e instantáneo que interrumpe la caminata: Past Simple ('saw').",
        "id": "q_gg4_mat_37"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Where _______ when you broke your arm? - At the skatepark.",
        "options": [
            "you skated",
            "are you skating",
            "were you skating",
            "did you skate"
        ],
        "correct": 2,
        "explanation": "Pregunta por la acción que estaba realizando cuando ocurrió el accidente: 'were you skating?'.",
        "id": "q_gg4_mat_38"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Yesterday morning I woke up, had breakfast and _______ to the train station.",
        "options": [
            "have run",
            "run",
            "was running",
            "ran"
        ],
        "correct": 3,
        "explanation": "Una secuencia de acciones consecutivas y completadas en el pasado lleva Past Simple ('ran').",
        "id": "q_gg4_mat_39"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "The lights went out while we _______ an exciting horror film.",
        "options": [
            "watch",
            "are watching",
            "were watching",
            "watched"
        ],
        "correct": 2,
        "explanation": "Acción que estaba transcurriendo en el momento del corte de luz: Past Continuous ('were watching').",
        "id": "q_gg4_mat_40"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Jack _______ to music with headphones, so he didn't hear the doorbell.",
        "options": [
            "is listening",
            "listened",
            "has listened",
            "was listening"
        ],
        "correct": 3,
        "explanation": "Estaba escuchando música en ese período continuo de tiempo: 'was listening'.",
        "id": "q_gg4_mat_41"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What did you do when the fire alarm _______?",
        "options": [
            "is ringing",
            "was ringing",
            "rung",
            "rang"
        ],
        "correct": 3,
        "explanation": "El disparo de la alarma fue el evento puntual que motivó la reacción: Past Simple ('rang').",
        "id": "q_gg4_mat_42"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My sister _______ her ankle while she was playing volleyball.",
        "options": [
            "twisted",
            "was twisting",
            "twists",
            "is twisting"
        ],
        "correct": 0,
        "explanation": "Torcerse el tobillo fue un accidente puntual durante el partido: Past Simple ('twisted').",
        "id": "q_gg4_mat_43"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "The students _______ very noisy, so the librarian asked them to leave.",
        "options": [
            "were",
            "have been",
            "were being",
            "are"
        ],
        "correct": 0,
        "explanation": "El verbo 'be' en pasado simple es 'were'.",
        "id": "q_gg4_mat_44"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While we _______ for the bus, it began to snow.",
        "options": [
            "were waiting",
            "waited",
            "wait",
            "are waiting"
        ],
        "correct": 0,
        "explanation": "La espera era la acción prolongada que fue interrumpida por la nieve: 'were waiting'.",
        "id": "q_gg4_mat_45"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I didn't hear you because the blender _______ a lot of noise.",
        "options": [
            "is making",
            "made",
            "makes",
            "was making"
        ],
        "correct": 3,
        "explanation": "La licuadora estaba haciendo ruido en ese momento continuo: 'was making'.",
        "id": "q_gg4_mat_46"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Who _______ you the secret yesterday?",
        "options": [
            "was telling",
            "did tell",
            "tell",
            "told"
        ],
        "correct": 3,
        "explanation": "Pregunta de sujeto en pasado simple sobre una acción completada: 'Who told you?'.",
        "id": "q_gg4_mat_47"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Nobody _______ attention when the coach gave the final instructions.",
        "options": [
            "pays",
            "paid",
            "is paying",
            "was paying"
        ],
        "correct": 3,
        "explanation": "Nadie estaba prestando atención en el momento continuo de las instrucciones: 'was paying'.",
        "id": "q_gg4_mat_48"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "He _______ off the horse because he wasn't holding the reins properly.",
        "options": [
            "has fallen",
            "fell",
            "was falling",
            "falls"
        ],
        "correct": 1,
        "explanation": "La caída es una acción puntual completada: Past Simple ('fell').",
        "id": "q_gg4_mat_49"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While the band _______ on stage, thousands of fans were singing along.",
        "options": [
            "was performing",
            "performed",
            "is performing",
            "perform"
        ],
        "correct": 0,
        "explanation": "Acción continua y simultánea en el pasado con 'while': Past Continuous ('was performing').",
        "id": "q_gg4_mat_50"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you _______ flown in a hot-air balloon?",
        "options": [
            "yet",
            "ever",
            "already",
            "never"
        ],
        "correct": 1,
        "explanation": "En preguntas sobre experiencias en cualquier momento de la vida se usa 'ever' (¿Alguna vez has...?).",
        "id": "q_gg4_len_1"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ eaten sushi. I don't like raw fish.",
        "options": [
            "since",
            "yet",
            "never",
            "ever"
        ],
        "correct": 2,
        "explanation": "'Never' se usa en oraciones afirmativas con sentido negativo ('Nunca he comido sushi').",
        "id": "q_gg4_len_2"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has your sister _______ met a famous sports star?",
        "options": [
            "ever",
            "for",
            "never",
            "already"
        ],
        "correct": 0,
        "explanation": "Pregunta de experiencia vital en 3ra persona con Present Perfect: 'Has your sister ever met...?'.",
        "id": "q_gg4_len_3"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "This is the best movie I have _______ seen in my life!",
        "options": [
            "never",
            "ever",
            "yet",
            "just"
        ],
        "correct": 1,
        "explanation": "Con superlativos ('the best movie') usamos 'ever' para resaltar la experiencia máxima de la vida.",
        "id": "q_gg4_len_4"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have _______ been to Australia, but we would love to go one day.",
        "options": [
            "never",
            "ever",
            "since",
            "yet"
        ],
        "correct": 0,
        "explanation": "'We have never been' significa que nunca hemos estado allí.",
        "id": "q_gg4_len_5"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have they ever _______ a live concert in a huge stadium?",
        "options": [
            "seen",
            "saw",
            "see",
            "seeing"
        ],
        "correct": 0,
        "explanation": "El Present Perfect se forma con have/has + past participle. El participio de 'see' es 'seen'.",
        "id": "q_gg4_len_6"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Oliver has _______ broken a bone in his body. He is very lucky!",
        "options": [
            "ever",
            "yet",
            "never",
            "already"
        ],
        "correct": 2,
        "explanation": "Sentido negativo de experiencia en la vida: 'Oliver has never broken a bone'.",
        "id": "q_gg4_len_7"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has anyone _______ told you that you sing beautifully?",
        "options": [
            "never",
            "for",
            "ever",
            "yet"
        ],
        "correct": 2,
        "explanation": "Pregunta de experiencia con pronombre indefinido: 'Has anyone ever told you...?'.",
        "id": "q_gg4_len_8"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "My grandparents have _______ travelled by aeroplane.",
        "options": [
            "never",
            "yet",
            "since",
            "ever"
        ],
        "correct": 0,
        "explanation": "Afirmativa con sentido negativo de experiencia vital: 'have never travelled'.",
        "id": "q_gg4_len_9"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you ever _______ snowboarding down a steep mountain?",
        "options": [
            "tried",
            "trying",
            "tries",
            "try"
        ],
        "correct": 0,
        "explanation": "Participio pasado regular de 'try' con cambio de y a i: 'tried'.",
        "id": "q_gg4_len_10"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Where is dad? - He has _______ to the supermarket to buy milk.",
        "options": [
            "been",
            "went",
            "go",
            "gone"
        ],
        "correct": 3,
        "explanation": "Usamos 'has gone' cuando la persona fue a un lugar y todavía no regresó. 'Has been' indica que ya fue y volvió.",
        "id": "q_gg4_len_11"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ to London twice, and I loved it both times.",
        "options": [
            "gone",
            "went",
            "going",
            "been"
        ],
        "correct": 3,
        "explanation": "Usamos 'have been' para indicar que visitamos un lugar en el pasado y ya hemos regresado.",
        "id": "q_gg4_len_12"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Would you like something to eat? - No, thanks. I have _______ had lunch.",
        "options": [
            "ever",
            "just",
            "yet",
            "since"
        ],
        "correct": 1,
        "explanation": "'Just' expresa una acción que acaba de completarse hace escasos instantes ('I have just had lunch').",
        "id": "q_gg4_len_13"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you packed your suitcase for the school trip _______?",
        "options": [
            "ever",
            "just",
            "already",
            "yet"
        ],
        "correct": 3,
        "explanation": "'Yet' va al final de preguntas para preguntar si algo ya se ha realizado: 'Have you packed... yet?'.",
        "id": "q_gg4_len_14"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Don't wash the dishes! I have _______ washed them.",
        "options": [
            "since",
            "ever",
            "already",
            "yet"
        ],
        "correct": 2,
        "explanation": "'Already' se usa en oraciones afirmativas entre have y el participio para indicar que la acción ya se hizo antes de lo esperado.",
        "id": "q_gg4_len_15"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "The train has _______ left the station! You missed it by one minute.",
        "options": [
            "ever",
            "yet",
            "for",
            "just"
        ],
        "correct": 3,
        "explanation": "Acción inmediata recientísima: 'has just left'.",
        "id": "q_gg4_len_16"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I haven't finished reading the adventure book _______.",
        "options": [
            "ever",
            "already",
            "yet",
            "just"
        ],
        "correct": 2,
        "explanation": "En oraciones negativas, 'yet' va al final para indicar 'todavía no': 'I haven't finished... yet'.",
        "id": "q_gg4_len_17"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Tom has _______ scored three goals, and the match isn't over yet!",
        "options": [
            "yet",
            "ever",
            "since",
            "already"
        ],
        "correct": 3,
        "explanation": "'Already' destaca un logro que ya ocurrió antes del final del partido.",
        "id": "q_gg4_len_18"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has the postman arrived _______ this morning?",
        "options": [
            "never",
            "just",
            "yet",
            "already"
        ],
        "correct": 2,
        "explanation": "Pregunta interrogativa con posición final: 'yet'.",
        "id": "q_gg4_len_19"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Can I speak to Mrs Green? - I'm sorry, she has _______ stepped out of the office.",
        "options": [
            "just",
            "since",
            "yet",
            "ever"
        ],
        "correct": 0,
        "explanation": "Acaba de salir hace unos segundos: 'has just stepped out'.",
        "id": "q_gg4_len_20"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have _______ seen that comedy film three times; let's watch something else.",
        "options": [
            "never",
            "since",
            "yet",
            "already"
        ],
        "correct": 3,
        "explanation": "Ya lo vimos anteriormente: 'already'.",
        "id": "q_gg4_len_21"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has Emily cleaned her bedroom _______? - No, it is still a mess.",
        "options": [
            "yet",
            "just",
            "ever",
            "already"
        ],
        "correct": 0,
        "explanation": "'Yet' al final de la pregunta sobre una tarea pendiente.",
        "id": "q_gg4_len_22"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "The concert has _______ started! Look, the lead singer is walking onto the stage.",
        "options": [
            "yet",
            "for",
            "since",
            "just"
        ],
        "correct": 3,
        "explanation": "El concierto acaba de comenzar en este instante: 'has just started'.",
        "id": "q_gg4_len_23"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "They haven't announced the exam results _______.",
        "options": [
            "yet",
            "just",
            "ever",
            "already"
        ],
        "correct": 0,
        "explanation": "Negativa con 'haven't' al final de la frase exige 'yet' ('aún no').",
        "id": "q_gg4_len_24"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ done my science project, so now I can relax.",
        "options": [
            "already",
            "for",
            "never",
            "yet"
        ],
        "correct": 0,
        "explanation": "'Already' en afirmativa indicando que la tarea ya está concluida con éxito.",
        "id": "q_gg4_len_25"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you heard the news _______? - Yes, Sarah told me five minutes ago.",
        "options": [
            "already",
            "ever",
            "just",
            "yet"
        ],
        "correct": 3,
        "explanation": "'Have you heard... yet?' pregunta si ya te enteraste de la novedad.",
        "id": "q_gg4_len_26"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have lived in this flat _______ five years.",
        "options": [
            "for",
            "since",
            "during",
            "ago"
        ],
        "correct": 0,
        "explanation": "'For' se usa para indicar un período o duración de tiempo ('for five years').",
        "id": "q_gg4_len_27"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Mr Harrison has taught English at our school _______ 2018.",
        "options": [
            "for",
            "ago",
            "since",
            "in"
        ],
        "correct": 2,
        "explanation": "'Since' se usa con un punto de inicio específico en el tiempo ('since 2018').",
        "id": "q_gg4_len_28"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "How long _______ each other? - Since primary school.",
        "options": [
            "do you know",
            "are you knowing",
            "have you known",
            "did you know"
        ],
        "correct": 2,
        "explanation": "Para acciones o estados que empezaron en el pasado y continúan en el presente con 'How long' usamos Present Perfect ('have you known').",
        "id": "q_gg4_len_29"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I haven't seen Julia _______ last Monday.",
        "options": [
            "ago",
            "for",
            "since",
            "until"
        ],
        "correct": 2,
        "explanation": "'Last Monday' es un punto concreto de partida: 'since last Monday'.",
        "id": "q_gg4_len_30"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "They have been best friends _______ a very long time.",
        "options": [
            "since",
            "ago",
            "for",
            "from"
        ],
        "correct": 2,
        "explanation": "'A very long time' es un período de duración, por lo que lleva 'for'.",
        "id": "q_gg4_len_31"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "My phone has been on silent mode _______ 8 o'clock this morning.",
        "options": [
            "in",
            "during",
            "since",
            "for"
        ],
        "correct": 2,
        "explanation": "Hora exacta de inicio ('8 o'clock'): 'since'.",
        "id": "q_gg4_len_32"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Sam has had his pet dog _______ six months.",
        "options": [
            "ago",
            "since",
            "for",
            "by"
        ],
        "correct": 2,
        "explanation": "Cantidad de meses transcurridos: duración que lleva 'for'.",
        "id": "q_gg4_len_33"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She hasn't eaten anything _______ breakfast.",
        "options": [
            "since",
            "for",
            "ago",
            "from"
        ],
        "correct": 0,
        "explanation": "'Breakfast' es el momento temporal de referencia: 'since breakfast'.",
        "id": "q_gg4_len_34"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have waited at this bus stop _______ forty minutes!",
        "options": [
            "ago",
            "in",
            "for",
            "since"
        ],
        "correct": 2,
        "explanation": "Duración de minutos: 'for forty minutes'.",
        "id": "q_gg4_len_35"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "He has played the drums _______ he was seven years old.",
        "options": [
            "since",
            "when",
            "ago",
            "for"
        ],
        "correct": 0,
        "explanation": "Con una cláusula en pasado que marca el punto de inicio ('he was seven years old') usamos 'since'.",
        "id": "q_gg4_len_36"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "It hasn't rained in our village _______ three whole months.",
        "options": [
            "from",
            "for",
            "ago",
            "since"
        ],
        "correct": 1,
        "explanation": "Duración temporal ('three whole months'): 'for'.",
        "id": "q_gg4_len_37"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Ben has loved science fiction stories _______ he read his first comic book.",
        "options": [
            "while",
            "for",
            "ago",
            "since"
        ],
        "correct": 3,
        "explanation": "Evento puntual en el pasado como punto de inicio: 'since'.",
        "id": "q_gg4_len_38"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I _______ to Paris three times in my life.",
        "options": [
            "went",
            "was",
            "have been",
            "go"
        ],
        "correct": 2,
        "explanation": "Experiencia en la vida sin fecha específica: Present Perfect ('have been').",
        "id": "q_gg4_len_39"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I _______ to Paris last summer with my family.",
        "options": [
            "have gone",
            "go",
            "went",
            "have been"
        ],
        "correct": 2,
        "explanation": "Momento definido en el pasado ('last summer'): Past Simple ('went').",
        "id": "q_gg4_len_40"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Did you see Mia yesterday? - No, I _______ her for a week.",
        "options": [
            "don't see",
            "didn't see",
            "wasn't seeing",
            "haven't seen"
        ],
        "correct": 3,
        "explanation": "El período de una semana se extiende hasta el presente: 'haven't seen'.",
        "id": "q_gg4_len_41"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "When _______ your new mobile phone? - Last Friday.",
        "options": [
            "did you buy",
            "have you bought",
            "do you buy",
            "were you buying"
        ],
        "correct": 0,
        "explanation": "Las preguntas con 'When' en pasado preguntan por el momento concreto y llevan Past Simple: 'did you buy?'.",
        "id": "q_gg4_len_42"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Lucas _______ his homework two hours ago.",
        "options": [
            "finished",
            "finishes",
            "has finished",
            "was finishing"
        ],
        "correct": 0,
        "explanation": "La palabra 'ago' siempre va con Past Simple ('finished').",
        "id": "q_gg4_len_43"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "My uncle _______ in Canada since 2015, and he still loves it.",
        "options": [
            "lives",
            "was living",
            "lived",
            "has lived"
        ],
        "correct": 3,
        "explanation": "La acción empezó en 2015 y sigue viva hoy ('and he still loves it'): Present Perfect ('has lived').",
        "id": "q_gg4_len_44"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "In 1969, Neil Armstrong _______ on the Moon.",
        "options": [
            "walked",
            "walks",
            "was walking",
            "has walked"
        ],
        "correct": 0,
        "explanation": "Año histórico cerrado ('In 1969'): Past Simple ('walked').",
        "id": "q_gg4_len_45"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Oh no! I _______ my house keys. I can't open the door!",
        "options": [
            "have lost",
            "was losing",
            "lose",
            "lost"
        ],
        "correct": 0,
        "explanation": "Acción pasada con resultado directo en el presente inmediato (no puedo entrar ahora): Present Perfect ('have lost').",
        "id": "q_gg4_len_46"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "What time _______ home last night?",
        "options": [
            "do you arrive",
            "were you arriving",
            "did you arrive",
            "have you arrived"
        ],
        "correct": 2,
        "explanation": "'What time' y 'last night' exigen Past Simple: 'did you arrive?'.",
        "id": "q_gg4_len_47"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She _______ three mystery novels this month.",
        "options": [
            "was reading",
            "read",
            "reads",
            "has read"
        ],
        "correct": 3,
        "explanation": "El mes en curso aún no terminó ('this month'): Present Perfect ('has read').",
        "id": "q_gg4_len_48"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Last weekend we _______ camping near the lake.",
        "options": [
            "have gone",
            "go",
            "went",
            "were going"
        ],
        "correct": 2,
        "explanation": "'Last weekend' es un tiempo pasado terminado: Past Simple ('went').",
        "id": "q_gg4_len_49"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you done the test? - Yes, I _______ it ten minutes ago.",
        "options": [
            "did",
            "have done",
            "do",
            "was doing"
        ],
        "correct": 0,
        "explanation": "Con 'ten minutes ago' la respuesta debe ir en Past Simple: 'did'.",
        "id": "q_gg4_len_50"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Tomorrow is Sunday, so I _______ wake up early.",
        "options": [
            "don't have to",
            "mustn't",
            "have to",
            "couldn't"
        ],
        "correct": 0,
        "explanation": "'Don't have to' indica ausencia de obligación (no es necesario despertarse temprano porque es domingo).",
        "id": "q_gg4_nat_1"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Every student _______ wear a school badge on their uniform.",
        "options": [
            "could",
            "have to",
            "mustn't",
            "has to"
        ],
        "correct": 3,
        "explanation": "'Every student' es singular (3ra persona), por lo que la regla externa lleva 'has to'.",
        "id": "q_gg4_nat_2"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Do we _______ bring our own dictionaries to the English exam?",
        "options": [
            "must",
            "had to",
            "could",
            "have to"
        ],
        "correct": 3,
        "explanation": "En preguntas con el auxiliar 'Do we...', se utiliza 'have to': 'Do we have to bring...?'.",
        "id": "q_gg4_nat_3"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ pay for the museum tickets; admission is completely free today!",
        "options": [
            "had to",
            "have to",
            "don't have to",
            "mustn't"
        ],
        "correct": 2,
        "explanation": "No es necesario pagar porque es gratis: 'don't have to'.",
        "id": "q_gg4_nat_4"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Mark has an injured ankle, so he _______ rest for two weeks.",
        "options": [
            "mustn't",
            "couldn't",
            "have to",
            "has to"
        ],
        "correct": 3,
        "explanation": "Necesidad médica para 'Mark' (singular): 'has to'.",
        "id": "q_gg4_nat_5"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "She _______ walk to school because her mum drives her every day.",
        "options": [
            "doesn't have to",
            "mustn't",
            "don't have to",
            "has to"
        ],
        "correct": 0,
        "explanation": "Con 'she' la ausencia de obligación se expresa con 'doesn't have to'.",
        "id": "q_gg4_nat_6"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Actors _______ memorize all their lines before the theatrical show.",
        "options": [
            "have to",
            "mustn't",
            "could",
            "has to"
        ],
        "correct": 0,
        "explanation": "Sujeto en plural ('Actors') con obligación profesional: 'have to'.",
        "id": "q_gg4_nat_7"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Does your brother _______ help with the household chores?",
        "options": [
            "must",
            "has to",
            "have to",
            "had to"
        ],
        "correct": 2,
        "explanation": "Después del auxiliar 'Does' el verbo vuelve a su forma base: 'have to'.",
        "id": "q_gg4_nat_8"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ buy a ticket before you get on the train.",
        "options": [
            "couldn't",
            "mustn't",
            "don't have to",
            "have to"
        ],
        "correct": 3,
        "explanation": "Regla oficial de transporte público: 'have to buy a ticket'.",
        "id": "q_gg4_nat_9"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We _______ hurry. The film doesn't start for another hour.",
        "options": [
            "had to",
            "have to",
            "don't have to",
            "mustn't"
        ],
        "correct": 2,
        "explanation": "Falta de necesidad (tenemos mucho tiempo): 'don't have to hurry'.",
        "id": "q_gg4_nat_10"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "A pilot _______ have excellent eyesight and intense training.",
        "options": [
            "has to",
            "could",
            "don't have to",
            "have to"
        ],
        "correct": 0,
        "explanation": "Requisito obligatorio para un piloto (3ra persona singular): 'has to'.",
        "id": "q_gg4_nat_11"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Why _______ stay at home yesterday?",
        "options": [
            "have you to",
            "must you",
            "do you have to",
            "did you have to"
        ],
        "correct": 3,
        "explanation": "Pregunta de obligación en pasado con 'yesterday': 'did you have to'.",
        "id": "q_gg4_nat_12"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "At our school, we _______ bring our own tablets; the school provides them.",
        "options": [
            "couldn't",
            "don't have to",
            "mustn't",
            "has to"
        ],
        "correct": 1,
        "explanation": "No hace falta traer tablets porque la escuela las entrega: 'don't have to'.",
        "id": "q_gg4_nat_13"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Leo _______ take the dog for a walk every afternoon.",
        "options": [
            "could",
            "don't have to",
            "has to",
            "have to"
        ],
        "correct": 2,
        "explanation": "Obligación rutinaria para 'Leo' (singular): 'has to'.",
        "id": "q_gg4_nat_14"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Do athletes _______ follow a strict diet before the Olympics?",
        "options": [
            "has to",
            "have to",
            "had to",
            "must"
        ],
        "correct": 1,
        "explanation": "Sujeto plural con auxiliar 'Do': 'have to'.",
        "id": "q_gg4_nat_15"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ talk loudly during the exam. It is strictly prohibited!",
        "options": [
            "mustn't",
            "have to",
            "could",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "'Mustn't' se usa para prohibiciones terminantes (está prohibido hablar en el examen).",
        "id": "q_gg4_nat_16"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ wear a helmet when riding a motorbike. It is the law.",
        "options": [
            "mustn't",
            "could",
            "must",
            "don't have to"
        ],
        "correct": 2,
        "explanation": "'Must' expresa una regla o ley obligatoria indispensable.",
        "id": "q_gg4_nat_17"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Visitors _______ feed the animals in the zoo. It can make them sick.",
        "options": [
            "don't have to",
            "mustn't",
            "could",
            "must"
        ],
        "correct": 1,
        "explanation": "Prohibición por seguridad de los animales: 'mustn't feed'.",
        "id": "q_gg4_nat_18"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "I _______ remember to call grandma today. It's her 70th birthday!",
        "options": [
            "don't have to",
            "mustn't",
            "couldn't",
            "must"
        ],
        "correct": 3,
        "explanation": "'Must' expresa una fuerte obligación interna moral o personal.",
        "id": "q_gg4_nat_19"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ touch that electrical wire! It is extremely dangerous.",
        "options": [
            "mustn't",
            "don't have to",
            "must",
            "could"
        ],
        "correct": 0,
        "explanation": "Peligro severo y prohibición absoluta: 'mustn't touch'.",
        "id": "q_gg4_nat_20"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Swimmers _______ dive into the shallow end of the pool.",
        "options": [
            "don't have to",
            "mustn't",
            "have to",
            "could"
        ],
        "correct": 1,
        "explanation": "Regla de seguridad estricta para evitar accidentes: 'mustn't dive'.",
        "id": "q_gg4_nat_21"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We _______ protect the environment if we want a clean planet.",
        "options": [
            "mustn't",
            "must",
            "couldn't",
            "don't have to"
        ],
        "correct": 1,
        "explanation": "Deber moral y ecológico primordial: 'must protect'.",
        "id": "q_gg4_nat_22"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ cross the road when the pedestrian light is red.",
        "options": [
            "don't have to",
            "mustn't",
            "must",
            "could"
        ],
        "correct": 1,
        "explanation": "Semáforo en rojo = prohibición de cruzar: 'mustn't cross'.",
        "id": "q_gg4_nat_23"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ tell anyone my secret password! Promise me.",
        "options": [
            "have to",
            "don't have to",
            "could",
            "mustn't"
        ],
        "correct": 3,
        "explanation": "Prohibición categórica de revelar el secreto: 'mustn't tell'.",
        "id": "q_gg4_nat_24"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Passengers _______ fasten their seatbelts during take-off and landing.",
        "options": [
            "mustn't",
            "could",
            "don't have to",
            "must"
        ],
        "correct": 3,
        "explanation": "Obligación legal aeronáutica: 'must fasten'.",
        "id": "q_gg4_nat_25"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ take photos in this art gallery. Look at the sign with the crossed camera.",
        "options": [
            "don't have to",
            "mustn't",
            "could",
            "have to"
        ],
        "correct": 1,
        "explanation": "Cartel de prohibición = 'mustn't take photos'.",
        "id": "q_gg4_nat_26"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Drivers _______ stop when a traffic officer signals them.",
        "options": [
            "must",
            "mustn't",
            "don't have to",
            "couldn't"
        ],
        "correct": 0,
        "explanation": "Obligación ante la autoridad vial: 'must stop'.",
        "id": "q_gg4_nat_27"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Students _______ use mobile phones during classroom lessons.",
        "options": [
            "have to",
            "mustn't",
            "don't have to",
            "could"
        ],
        "correct": 1,
        "explanation": "Regla escolar prohibitiva: 'mustn't use'.",
        "id": "q_gg4_nat_28"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ wash your hands before eating dinner.",
        "options": [
            "couldn't",
            "mustn't",
            "don't have to",
            "must"
        ],
        "correct": 3,
        "explanation": "Regla higiénica fundamental: 'must wash'.",
        "id": "q_gg4_nat_29"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ leave small children alone near a swimming pool.",
        "options": [
            "could",
            "don't have to",
            "have to",
            "mustn't"
        ],
        "correct": 3,
        "explanation": "Peligro grave = prohibición estricta: 'mustn't leave'.",
        "id": "q_gg4_nat_30"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Last night I _______ study until midnight because I had an exam today.",
        "options": [
            "had to",
            "have to",
            "must",
            "could"
        ],
        "correct": 0,
        "explanation": "'Had to' es el pasado de have to y must (obligación en pasado).",
        "id": "q_gg4_nat_31"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Yesterday was a holiday, so we _______ go to school.",
        "options": [
            "couldn't",
            "mustn't",
            "didn't have to",
            "had to"
        ],
        "correct": 2,
        "explanation": "'Didn't have to' indica que no tuvimos que ir a la escuela ayer (ausencia de obligación en pasado).",
        "id": "q_gg4_nat_32"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Because it rained heavily yesterday, the workers _______ cancel the match.",
        "options": [
            "have to",
            "had to",
            "could",
            "must"
        ],
        "correct": 1,
        "explanation": "Obligación o necesidad impuesta en el pasado: 'had to cancel'.",
        "id": "q_gg4_nat_33"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Did you _______ walk home yesterday because you missed the bus?",
        "options": [
            "have to",
            "could",
            "had to",
            "must"
        ],
        "correct": 0,
        "explanation": "Con el auxiliar 'Did' el verbo va en forma base: 'Did you have to walk?'.",
        "id": "q_gg4_nat_34"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We _______ wait forty minutes at the clinic yesterday afternoon.",
        "options": [
            "have to",
            "must",
            "had to",
            "couldn't"
        ],
        "correct": 2,
        "explanation": "Obligación o circunstancia ocurrida en el pasado: 'had to wait'.",
        "id": "q_gg4_nat_35"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Fortunately, I _______ pay for the broken glass because the waiter admitted it was his fault.",
        "options": [
            "didn't have to",
            "hadn't to",
            "had to",
            "mustn't"
        ],
        "correct": 0,
        "explanation": "No tuve que pagar: ausencia de obligación en pasado con 'didn't have to'.",
        "id": "q_gg4_nat_36"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Grandpa _______ walk five kilometres to school when he was a boy.",
        "options": [
            "could",
            "has to",
            "must",
            "had to"
        ],
        "correct": 3,
        "explanation": "Obligación habitual de su época infantil: 'had to walk'.",
        "id": "q_gg4_nat_37"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Why _______ leave the party so early last Saturday?",
        "options": [
            "must you",
            "had you to",
            "did you have to",
            "do you have to"
        ],
        "correct": 2,
        "explanation": "Pregunta en pasado simple con auxiliar: 'did you have to'.",
        "id": "q_gg4_nat_38"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "The computer crashed, so I _______ retype the whole essay.",
        "options": [
            "must",
            "had to",
            "couldn't",
            "have to"
        ],
        "correct": 1,
        "explanation": "Necesidad forzada por el fallo técnico en el pasado: 'had to retype'.",
        "id": "q_gg4_nat_39"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "She _______ cook dinner yesterday because her father ordered pizza.",
        "options": [
            "had to",
            "didn't have to",
            "mustn't",
            "doesn't have to"
        ],
        "correct": 1,
        "explanation": "No hizo falta cocinar en el pasado: 'didn't have to'.",
        "id": "q_gg4_nat_40"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "When Mozart was only five years old, he _______ play the piano brilliantly.",
        "options": [
            "must",
            "could",
            "can",
            "had to"
        ],
        "correct": 1,
        "explanation": "'Could' expresa habilidad o capacidad en el pasado ('podía/sabía tocar').",
        "id": "q_gg4_nat_41"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "I searched everywhere, but I _______ find my car keys.",
        "options": [
            "can't",
            "couldn't",
            "mustn't",
            "didn't have to"
        ],
        "correct": 1,
        "explanation": "'Couldn't' expresa incapacidad o imposibilidad en el pasado ('no pude encontrar').",
        "id": "q_gg4_nat_42"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "_______ you swim when you were four years old?",
        "options": [
            "Could",
            "Were",
            "Did",
            "Can"
        ],
        "correct": 0,
        "explanation": "Pregunta de habilidad en el pasado: 'Could you swim when you were four?'.",
        "id": "q_gg4_nat_43"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "The music was so loud that we _______ hear what the guide was saying.",
        "options": [
            "couldn't",
            "can't",
            "didn't have to",
            "mustn't"
        ],
        "correct": 0,
        "explanation": "Incapacidad auditiva en ese momento pasado: 'couldn't hear'.",
        "id": "q_gg4_nat_44"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "My grandmother _______ speak four languages fluently when she was young.",
        "options": [
            "can",
            "must",
            "has to",
            "could"
        ],
        "correct": 3,
        "explanation": "Habilidad lingüística en el pasado: 'could speak'.",
        "id": "q_gg4_nat_45"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We _______ go sailing yesterday because the wind was too violent.",
        "options": [
            "mustn't",
            "don't have to",
            "can't",
            "couldn't"
        ],
        "correct": 3,
        "explanation": "Imposibilidad de navegar por mal clima: 'couldn't go'.",
        "id": "q_gg4_nat_46"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Could you ride a bicycle when you were six? - Yes, I _______.",
        "options": [
            "did",
            "can",
            "could",
            "was"
        ],
        "correct": 2,
        "explanation": "Respuesta corta afirmativa en pasado: 'Yes, I could'.",
        "id": "q_gg4_nat_47"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "The box was extremely heavy, so the little boy _______ lift it.",
        "options": [
            "mustn't",
            "can't",
            "hadn't",
            "couldn't"
        ],
        "correct": 3,
        "explanation": "Falta de fuerza/capacidad física en pasado: 'couldn't lift it'.",
        "id": "q_gg4_nat_48"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Fifty years ago, people _______ send emails or surf the internet.",
        "options": [
            "don't have to",
            "mustn't",
            "can't",
            "couldn't"
        ],
        "correct": 3,
        "explanation": "La tecnología no existía, por lo que no se podía: 'couldn't send'.",
        "id": "q_gg4_nat_49"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "She _______ run very fast before she broke her leg.",
        "options": [
            "can",
            "could",
            "have to",
            "must"
        ],
        "correct": 1,
        "explanation": "Habilidad atlética que poseía antes de la lesión: 'could run'.",
        "id": "q_gg4_nat_50"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Look at those dark black clouds in the sky! It _______.",
        "options": [
            "is going to rain",
            "will rain",
            "is raining",
            "rains"
        ],
        "correct": 0,
        "explanation": "Usamos 'be going to' para predicciones basadas en evidencia visual presente ('dark clouds').",
        "id": "q_gg4_soc_1"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "The telephone is ringing! - Don't worry, I _______ it.",
        "options": [
            "will answer",
            "answered",
            "am going to answer",
            "answer"
        ],
        "correct": 0,
        "explanation": "Usamos 'will' para decisiones espontáneas tomadas en el momento exacto de hablar.",
        "id": "q_gg4_soc_2"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ visit our grandparents in Cordoba next weekend. We booked the tickets.",
        "options": [
            "will",
            "are go",
            "go to",
            "are going to"
        ],
        "correct": 3,
        "explanation": "Planes e intenciones premeditadas con fecha cerrada llevan 'be going to'.",
        "id": "q_gg4_soc_3"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I'm so thirsty! - I _______ you a glass of cold water.",
        "options": [
            "will get",
            "get",
            "am going to get",
            "got"
        ],
        "correct": 0,
        "explanation": "Ofrecimiento espontáneo: 'I will get you a glass of cold water'.",
        "id": "q_gg4_soc_4"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I think scientists _______ discover a cure for that disease in the future.",
        "options": [
            "is going to",
            "will",
            "shall",
            "are going to"
        ],
        "correct": 1,
        "explanation": "Con 'I think / I believe' expresando una opinión o predicción general sobre el futuro usamos 'will'.",
        "id": "q_gg4_soc_5"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Watch out! You _______ spill your hot chocolate on the keyboard!",
        "options": [
            "are going to",
            "go to",
            "shall",
            "will"
        ],
        "correct": 0,
        "explanation": "Advertencia inmediata con evidencia visible: 'You are going to spill...'.",
        "id": "q_gg4_soc_6"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I promise I _______ tell anyone your secret.",
        "options": [
            "am not going to",
            "not will",
            "don't",
            "won't"
        ],
        "correct": 3,
        "explanation": "Para promesas solemnes ('I promise') usamos 'will / won't'.",
        "id": "q_gg4_soc_7"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "What _______ do after you finish high school? - I plan to study medicine.",
        "options": [
            "did you",
            "are you going to",
            "do you",
            "will you"
        ],
        "correct": 1,
        "explanation": "Pregunta sobre planes e intenciones personales a futuro: 'are you going to do?'.",
        "id": "q_gg4_soc_8"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "It's freezing in this classroom! - I _______ the window.",
        "options": [
            "closed",
            "am going to close",
            "will close",
            "close"
        ],
        "correct": 2,
        "explanation": "Decisión voluntaria e inmediata tomada al sentir el frío: 'will close'.",
        "id": "q_gg4_soc_9"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "He has been practicing all month. He _______ the swimming competition.",
        "options": [
            "will win",
            "won",
            "is going to win",
            "wins"
        ],
        "correct": 2,
        "explanation": "Predicción respaldada por preparación y evidencia: 'is going to win'.",
        "id": "q_gg4_soc_10"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Don't carry all those heavy bags alone. I _______ help you.",
        "options": [
            "helped",
            "will",
            "am help",
            "am going to"
        ],
        "correct": 1,
        "explanation": "Ofrecimiento servicial inmediato: 'I will help you'.",
        "id": "q_gg4_soc_11"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "They have bought the paint because they _______ repaint the kitchen tomorrow.",
        "options": [
            "will",
            "go to",
            "shall",
            "are going to"
        ],
        "correct": 3,
        "explanation": "Plan previo preparado (ya compraron la pintura): 'are going to repaint'.",
        "id": "q_gg4_soc_12"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Maybe one day people _______ live in colonies on Mars.",
        "options": [
            "going to",
            "are going to",
            "are living",
            "will"
        ],
        "correct": 3,
        "explanation": "Especulación y predicción lejana con 'Maybe': 'will live'.",
        "id": "q_gg4_soc_13"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I forgot my wallet! - Don't worry, I _______ for your sandwich.",
        "options": [
            "will pay",
            "am going to pay",
            "pay",
            "paid"
        ],
        "correct": 0,
        "explanation": "Decisión de rescate espontánea: 'I will pay'.",
        "id": "q_gg4_soc_14"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Look at that cyclist! He is looking at his phone and he _______ hit the tree!",
        "options": [
            "will",
            "shall",
            "goes to",
            "is going to"
        ],
        "correct": 3,
        "explanation": "Evidencia visual inminente de choque: 'is going to hit'.",
        "id": "q_gg4_soc_15"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "In my opinion, robots _______ replace human teachers.",
        "options": [
            "don't",
            "won't",
            "not will",
            "aren't going to"
        ],
        "correct": 1,
        "explanation": "Predicción de opinión personal ('In my opinion'): 'won't replace'.",
        "id": "q_gg4_soc_16"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Are you _______ buy that video game today? - Yes, I saved enough pocket money.",
        "options": [
            "will",
            "going to",
            "planning",
            "go to"
        ],
        "correct": 1,
        "explanation": "Estructura de intención: 'Are you going to buy...?.",
        "id": "q_gg4_soc_17"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I hope our team _______ the match this afternoon.",
        "options": [
            "won",
            "wins",
            "will win",
            "is going to win"
        ],
        "correct": 2,
        "explanation": "Con verbos de deseo/esperanza como 'I hope' usamos 'will'.",
        "id": "q_gg4_soc_18"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ have a barbecue on Saturday because we already invited twenty guests.",
        "options": [
            "go to",
            "will",
            "are going to",
            "shall"
        ],
        "correct": 2,
        "explanation": "Evento organizado y planeado de antemano: 'are going to have'.",
        "id": "q_gg4_soc_19"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I'm very tired. I think I _______ to bed early tonight.",
        "options": [
            "went",
            "am going to go",
            "will go",
            "go"
        ],
        "correct": 2,
        "explanation": "Decisión personal tomada en el momento ('I think I will go').",
        "id": "q_gg4_soc_20"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you _______ ice, it melts into liquid water.",
        "options": [
            "heat",
            "are heating",
            "heated",
            "will heat"
        ],
        "correct": 0,
        "explanation": "Zero Conditional para verdades científicas: 'If + Present Simple, Present Simple' ('If you heat ice').",
        "id": "q_gg4_soc_21"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Plants die if they _______ enough sunlight and water.",
        "options": [
            "didn't get",
            "won't get",
            "don't get",
            "aren't getting"
        ],
        "correct": 2,
        "explanation": "Hecho natural absoluto (Zero Conditional): 'if they don't get'.",
        "id": "q_gg4_soc_22"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you mix red and yellow paint, you _______ orange.",
        "options": [
            "get",
            "got",
            "are getting",
            "will get"
        ],
        "correct": 0,
        "explanation": "Regla cromática invariable: resultado en Present Simple ('you get orange').",
        "id": "q_gg4_soc_23"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If baby birds are hungry, they _______ loudly in their nest.",
        "options": [
            "are crying",
            "cry",
            "cried",
            "will cry"
        ],
        "correct": 1,
        "explanation": "Comportamiento animal natural general (Zero Conditional): 'they cry'.",
        "id": "q_gg4_soc_24"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "When water freezes, it _______ into solid ice.",
        "options": [
            "turned",
            "will turn",
            "turns",
            "turn"
        ],
        "correct": 2,
        "explanation": "Hecho físico universal con 'When': Present Simple en 3ra persona ('turns').",
        "id": "q_gg4_soc_25"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If I drink coffee late at night, I _______ fall asleep easily.",
        "options": [
            "couldn't",
            "can't",
            "am not",
            "won't"
        ],
        "correct": 1,
        "explanation": "Efecto corporal constante y recurrente: 'I can't fall asleep'.",
        "id": "q_gg4_soc_26"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Iron _______ if you leave it in damp air and water.",
        "options": [
            "rusts",
            "is rusting",
            "rusted",
            "will rust"
        ],
        "correct": 0,
        "explanation": "Reacción química invariable (oxidación): 'rusts'.",
        "id": "q_gg4_soc_27"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If people _______ exercise regularly, they often become unfit.",
        "options": [
            "not do",
            "don't do",
            "won't do",
            "didn't do"
        ],
        "correct": 1,
        "explanation": "Condición biológica general (Zero Conditional): 'don't do'.",
        "id": "q_gg4_soc_28"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you press this button on the machine, the red light _______ on.",
        "options": [
            "comes",
            "will come",
            "is coming",
            "came"
        ],
        "correct": 0,
        "explanation": "Funcionamiento automático y garantizado de un aparato: 'comes on'.",
        "id": "q_gg4_soc_29"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Snow _______ quickly if the temperature rises above zero.",
        "options": [
            "melted",
            "melts",
            "is melting",
            "will melt"
        ],
        "correct": 1,
        "explanation": "Fenómeno físico constante: 'melts'.",
        "id": "q_gg4_soc_30"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you add oil to water, it _______ to the surface.",
        "options": [
            "will float",
            "float",
            "floated",
            "floats"
        ],
        "correct": 3,
        "explanation": "Principio físico de densidad: 'floats'.",
        "id": "q_gg4_soc_31"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Dogs wag their tails when they _______ happy and excited.",
        "options": [
            "will be",
            "are",
            "were",
            "are being"
        ],
        "correct": 1,
        "explanation": "Verdad habitual del reino animal: 'when they are happy'.",
        "id": "q_gg4_soc_32"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you touch a hot stove, you _______ your hand.",
        "options": [
            "will burn",
            "are burning",
            "burned",
            "burn"
        ],
        "correct": 3,
        "explanation": "Causa y efecto inmediato y seguro: 'you burn your hand'.",
        "id": "q_gg4_soc_33"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If the teacher speaks too fast, the students _______ understand.",
        "options": [
            "didn't",
            "haven't",
            "won't",
            "don't"
        ],
        "correct": 3,
        "explanation": "Consecuencia lógica habitual en clase: 'don't understand'.",
        "id": "q_gg4_soc_34"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "When it rains, the grass _______ wet.",
        "options": [
            "got",
            "is getting",
            "will get",
            "gets"
        ],
        "correct": 3,
        "explanation": "Hecho obvio de la naturaleza: 'gets wet'.",
        "id": "q_gg4_soc_35"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If it _______ sunny tomorrow, we will have a picnic in the park.",
        "options": [
            "is",
            "was",
            "will be",
            "are"
        ],
        "correct": 0,
        "explanation": "First Conditional: la cláusula con 'If' siempre va en Present Simple ('If it is sunny').",
        "id": "q_gg4_soc_36"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you study hard for the English exam, you _______ a high mark.",
        "options": [
            "would get",
            "will get",
            "got",
            "get"
        ],
        "correct": 1,
        "explanation": "First Conditional: la consecuencia futura lleva 'will + infinitivo' ('will get').",
        "id": "q_gg4_soc_37"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ the train if we don't leave the house right now.",
        "options": [
            "would miss",
            "will miss",
            "missed",
            "miss"
        ],
        "correct": 1,
        "explanation": "Resultado futuro probable: 'We will miss the train if we don't leave'.",
        "id": "q_gg4_soc_38"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If she doesn't hurry up, she _______ late for class.",
        "options": [
            "was",
            "is",
            "will be",
            "would be"
        ],
        "correct": 2,
        "explanation": "First Conditional con negación en la condición: 'will be late'.",
        "id": "q_gg4_soc_39"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "What will you do if it _______ all weekend?",
        "options": [
            "rained",
            "is raining",
            "rains",
            "will rain"
        ],
        "correct": 2,
        "explanation": "En la condición con 'if' nunca usamos 'will': 'if it rains'.",
        "id": "q_gg4_soc_40"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If we protect wild forests, many animals _______ safe.",
        "options": [
            "will stay",
            "stayed",
            "stays",
            "would stay"
        ],
        "correct": 0,
        "explanation": "First Conditional sobre ecología (Inglés Nivel 4 Unit 6): 'will stay safe'.",
        "id": "q_gg4_soc_41"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If people recycle plastic bottles, there _______ less pollution.",
        "options": [
            "will be",
            "was",
            "would be",
            "is"
        ],
        "correct": 0,
        "explanation": "Consecuencia ambiental futura: 'there will be less pollution'.",
        "id": "q_gg4_soc_42"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "You won't pass your driving test unless you _______ every day.",
        "options": [
            "practices",
            "will practice",
            "practice",
            "practiced"
        ],
        "correct": 2,
        "explanation": "'Unless' significa 'a menos que' (if not) y va seguido de Present Simple: 'unless you practice'.",
        "id": "q_gg4_soc_43"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If I find your lost notebook, I _______ it to you immediately.",
        "options": [
            "will give",
            "gave",
            "give",
            "giving"
        ],
        "correct": 0,
        "explanation": "Promesa de acción futura condicional: 'I will give it to you'.",
        "id": "q_gg4_soc_44"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If dad _______ the tickets online today, we will save twenty pounds.",
        "options": [
            "bought",
            "will buy",
            "buys",
            "buy"
        ],
        "correct": 2,
        "explanation": "Condición en 3ra persona singular: 'If dad buys'.",
        "id": "q_gg4_soc_45"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If they don't clean the river, fish _______ to survive.",
        "options": [
            "aren't able",
            "wouldn't be able",
            "won't be able",
            "can't be"
        ],
        "correct": 2,
        "explanation": "Negación futura en First Conditional: 'won't be able to survive'.",
        "id": "q_gg4_soc_46"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Will you call me as soon as you _______ at the hotel?",
        "options": [
            "will arrive",
            "are arriving",
            "arrive",
            "arrived"
        ],
        "correct": 2,
        "explanation": "Las oraciones temporales de futuro con 'as soon as' llevan Present Simple ('arrive').",
        "id": "q_gg4_soc_47"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If temperatures continue to rise, polar ice caps _______ faster.",
        "options": [
            "would melt",
            "melts",
            "will melt",
            "melted"
        ],
        "correct": 2,
        "explanation": "First Conditional sobre cambio climático: 'will melt faster'.",
        "id": "q_gg4_soc_48"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If Lucas _______ breakfast, he will feel tired during the match.",
        "options": [
            "skip",
            "skipped",
            "skips",
            "will skip"
        ],
        "correct": 2,
        "explanation": "Condición en Present Simple con sujeto singular ('Lucas skips').",
        "id": "q_gg4_soc_49"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ the dog for a long walk if the storm stops.",
        "options": [
            "take",
            "took",
            "would take",
            "will take"
        ],
        "correct": 3,
        "explanation": "Acción principal en First Conditional: 'will take'.",
        "id": "q_gg4_soc_50"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A lifeguard is a brave person _______ rescues swimmers in danger.",
        "options": [
            "where",
            "which",
            "whose",
            "who"
        ],
        "correct": 3,
        "explanation": "Usamos el pronombre relativo 'who' para referirnos a personas ('a person who rescues...').",
        "id": "q_gg4_ing_1"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A helmet is an essential piece of equipment _______ protects your head.",
        "options": [
            "whose",
            "who",
            "where",
            "which"
        ],
        "correct": 3,
        "explanation": "Usamos 'which' (o 'that') para referirnos a cosas u objetos ('a piece of equipment which...').",
        "id": "q_gg4_ing_2"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A skatepark is an exciting place _______ young people ride skateboards.",
        "options": [
            "who",
            "that",
            "which",
            "where"
        ],
        "correct": 3,
        "explanation": "Usamos el adverbio relativo 'where' para referirnos a lugares ('a place where...').",
        "id": "q_gg4_ing_3"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "That is the talented director _______ won three Academy Awards.",
        "options": [
            "which",
            "who",
            "when",
            "where"
        ],
        "correct": 1,
        "explanation": "'The director' es una persona, por lo que corresponde 'who'.",
        "id": "q_gg4_ing_4"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Can you pass me the dictionary _______ is on the top shelf?",
        "options": [
            "where",
            "who",
            "whose",
            "which"
        ],
        "correct": 3,
        "explanation": "'The dictionary' es un objeto inanimado, por lo que lleva 'which'.",
        "id": "q_gg4_ing_5"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "The hospital is the building _______ doctors and nurses treat sick patients.",
        "options": [
            "that",
            "who",
            "which",
            "where"
        ],
        "correct": 3,
        "explanation": "Lugar donde se desarrolla una actividad: 'the building where doctors treat patients'.",
        "id": "q_gg4_ing_6"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "I met a girl on the campsite _______ could speak four languages.",
        "options": [
            "where",
            "which",
            "whose",
            "who"
        ],
        "correct": 3,
        "explanation": "'A girl' es un ser humano: pronombre 'who'.",
        "id": "q_gg4_ing_7"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "This is the mystery novel _______ kept me awake all night.",
        "options": [
            "which",
            "where",
            "whose",
            "who"
        ],
        "correct": 0,
        "explanation": "'The mystery novel' es un libro (cosa): pronombre 'which'.",
        "id": "q_gg4_ing_8"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "The youth club is a lively center _______ teenagers can meet and play games.",
        "options": [
            "which",
            "where",
            "who",
            "whose"
        ],
        "correct": 1,
        "explanation": "Referencia a lugar de encuentro: 'where teenagers can meet'.",
        "id": "q_gg4_ing_9"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Do you know the boy _______ scored the winning goal in the final?",
        "options": [
            "where",
            "which",
            "who",
            "whose"
        ],
        "correct": 2,
        "explanation": "Persona que ejecutó la acción: 'the boy who scored'.",
        "id": "q_gg4_ing_10"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A wetsuit is special clothing _______ keeps surfers warm in cold ocean water.",
        "options": [
            "which",
            "where",
            "whose",
            "who"
        ],
        "correct": 0,
        "explanation": "Prenda de vestir (objeto): pronombre 'which'.",
        "id": "q_gg4_ing_11"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "That is the cinema _______ we watched the new superhero film.",
        "options": [
            "who",
            "where",
            "whose",
            "which"
        ],
        "correct": 1,
        "explanation": "Lugar donde ocurrió el evento: 'the cinema where we watched'.",
        "id": "q_gg4_ing_12"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A stunt performer is an athlete _______ does dangerous movie scenes.",
        "options": [
            "where",
            "who",
            "which",
            "whose"
        ],
        "correct": 1,
        "explanation": "Profesión/persona de cine (Inglés Nivel 4 Unit 4): 'an athlete who does'.",
        "id": "q_gg4_ing_13"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "I visited an ancient castle _______ many kings lived centuries ago.",
        "options": [
            "who",
            "where",
            "which",
            "whose"
        ],
        "correct": 1,
        "explanation": "Lugar histórico: 'an ancient castle where many kings lived'.",
        "id": "q_gg4_ing_14"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "This is the mobile phone _______ has the highest camera quality.",
        "options": [
            "who",
            "whose",
            "which",
            "where"
        ],
        "correct": 2,
        "explanation": "Dispositivo tecnológico (objeto): 'which has'.",
        "id": "q_gg4_ing_15"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Students _______ always do their homework achieve excellent results.",
        "options": [
            "where",
            "which",
            "whose",
            "who"
        ],
        "correct": 3,
        "explanation": "Referencia a personas plurales ('Students'): 'who'.",
        "id": "q_gg4_ing_16"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A stadium is a venue _______ thousands of fans cheer for their teams.",
        "options": [
            "where",
            "which",
            "whose",
            "who"
        ],
        "correct": 0,
        "explanation": "Instalación deportiva como lugar: 'where thousands cheer'.",
        "id": "q_gg4_ing_17"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "She bought a pair of running shoes _______ were very comfortable.",
        "options": [
            "where",
            "whose",
            "which",
            "who"
        ],
        "correct": 2,
        "explanation": "Calzado (objeto): 'which were very comfortable'.",
        "id": "q_gg4_ing_18"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "The teacher _______ teaches us geography is from Manchester.",
        "options": [
            "which",
            "where",
            "who",
            "whose"
        ],
        "correct": 2,
        "explanation": "Sujeto humano: 'The teacher who teaches us'.",
        "id": "q_gg4_ing_19"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "The laboratory is the room _______ scientists carry out experiments.",
        "options": [
            "who",
            "which",
            "whose",
            "where"
        ],
        "correct": 3,
        "explanation": "Espacio físico de experimentación: 'where scientists carry out experiments'.",
        "id": "q_gg4_ing_20"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Someone who is always happy and smiles a lot is described as _______.",
        "options": [
            "bossy",
            "dishonest",
            "cheerful",
            "selfish"
        ],
        "correct": 2,
        "explanation": "'Cheerful' significa alegre, sonriente y optimista (Inglés Nivel 4 Unit 1: Personality).",
        "id": "q_gg4_ing_21"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A person who hates sharing their things with others is _______.",
        "options": [
            "generous",
            "selfish",
            "reliable",
            "cheerful"
        ],
        "correct": 1,
        "explanation": "'Selfish' significa egoísta (antónimo de generous).",
        "id": "q_gg4_ing_22"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "If you can always trust your friend to keep a promise, they are _______.",
        "options": [
            "reliable",
            "jealous",
            "impolite",
            "impatient"
        ],
        "correct": 0,
        "explanation": "'Reliable' significa confiable o responsable.",
        "id": "q_gg4_ing_23"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "What is the opposite of 'polite' in English?",
        "options": [
            "impolite",
            "unpolite",
            "dispolite",
            "inpolite"
        ],
        "correct": 0,
        "explanation": "El prefijo negativo correcto para 'polite' (educado) es 'im-': 'impolite' (maleducado).",
        "id": "q_gg4_ing_24"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A person who tells lies and cannot be trusted is _______.",
        "options": [
            "dishonest",
            "impatient",
            "unhonest",
            "unfriendly"
        ],
        "correct": 0,
        "explanation": "El opuesto de 'honest' lleva el prefijo 'dis-': 'dishonest' (deshonesto).",
        "id": "q_gg4_ing_25"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "When you have your hair tied at the back of your head, you are wearing a _______.",
        "options": [
            "fringe",
            "beard",
            "ponytail",
            "mustache"
        ],
        "correct": 2,
        "explanation": "'Ponytail' es una colita de caballo (Inglés Nivel 4 Unit 1: Hairstyles).",
        "id": "q_gg4_ing_26"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Hair that cut straight across the forehead is called a _______.",
        "options": [
            "spiky hair",
            "beard",
            "curly hair",
            "fringe"
        ],
        "correct": 3,
        "explanation": "'Fringe' significa flequillo.",
        "id": "q_gg4_ing_27"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "In English, we say: 'Don't worry if you _______ a mistake; everyone does!'",
        "options": [
            "take",
            "have",
            "do",
            "make"
        ],
        "correct": 3,
        "explanation": "La colocación correcta en inglés es 'make a mistake' (no 'do a mistake').",
        "id": "q_gg4_ing_28"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Every afternoon after school, I have to _______ my homework.",
        "options": [
            "make",
            "do",
            "take",
            "get"
        ],
        "correct": 1,
        "explanation": "Con tareas y deberes escolares usamos 'do': 'do homework'.",
        "id": "q_gg4_ing_29"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Please be quiet and don't _______ so much noise!",
        "options": [
            "take",
            "make",
            "do",
            "play"
        ],
        "correct": 1,
        "explanation": "La colocación fija es 'make noise' (hacer ruido).",
        "id": "q_gg4_ing_30"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Students must _______ notes while the teacher is explaining the lesson.",
        "options": [
            "make",
            "do",
            "write",
            "take"
        ],
        "correct": 3,
        "explanation": "'Take notes' es la frase idiomática correcta para tomar apuntes (Inglés Nivel 4 Unit 2).",
        "id": "q_gg4_ing_31"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Are you going to _______ part in the annual sports tournament?",
        "options": [
            "take",
            "do",
            "have",
            "make"
        ],
        "correct": 0,
        "explanation": "'Take part in' significa participar en una actividad o evento.",
        "id": "q_gg4_ing_32"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Tomorrow we have to _______ an important history exam.",
        "options": [
            "give",
            "do",
            "make",
            "take"
        ],
        "correct": 3,
        "explanation": "Rendir o dar un examen se dice 'take an exam' (o 'sit an exam').",
        "id": "q_gg4_ing_33"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A person who likes telling other people what to do all the time is _______.",
        "options": [
            "bossy",
            "sensible",
            "generous",
            "sensitive"
        ],
        "correct": 0,
        "explanation": "'Bossy' describe a alguien mandón o autoritario.",
        "id": "q_gg4_ing_34"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "What is the opposite of 'patient'?",
        "options": [
            "impatient",
            "dispatient",
            "unpatient",
            "inpatient"
        ],
        "correct": 0,
        "explanation": "El prefijo negativo de 'patient' es 'im-': 'impatient' (impaciente).",
        "id": "q_gg4_ing_35"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "When you go swimming underwater, you wear _______ to protect your eyes.",
        "options": [
            "a wetsuit",
            "knee pads",
            "goggles",
            "a helmet"
        ],
        "correct": 2,
        "explanation": "'Goggles' son antiparras para natación o esquí (Inglés Nivel 4 Unit 3: Sports gear).",
        "id": "q_gg4_ing_36"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "When sailing on a river or lake, you must always wear a _______ to stay afloat.",
        "options": [
            "life jacket",
            "helmet",
            "rope",
            "wetsuit"
        ],
        "correct": 0,
        "explanation": "'Life jacket' es el chaleco salvavidas.",
        "id": "q_gg4_ing_37"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A board with four small wheels used for doing tricks is a _______.",
        "options": [
            "paddleboard",
            "snowboard",
            "surfboard",
            "skateboard"
        ],
        "correct": 3,
        "explanation": "'Skateboard' es una patineta.",
        "id": "q_gg4_ing_38"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "In extreme rock climbing, athletes use strong safety _______.",
        "options": [
            "ropes",
            "rackets",
            "goggles",
            "bats"
        ],
        "correct": 0,
        "explanation": "'Ropes' son cuerdas de seguridad esenciales en escalada.",
        "id": "q_gg4_ing_39"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A book that tells the real story of a person's life written by themselves is an _______.",
        "options": [
            "autobiography",
            "historical novel",
            "encyclopaedia",
            "fantasy story"
        ],
        "correct": 0,
        "explanation": "Una 'autobiography' es la historia de vida escrita por la propia persona (Inglés Nivel 4 Unit 4).",
        "id": "q_gg4_ing_40"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A story about spaceships, alien planets and future technology is _______.",
        "options": [
            "biography",
            "science fiction",
            "crime thriller",
            "romance"
        ],
        "correct": 1,
        "explanation": "'Science fiction' es ciencia ficción.",
        "id": "q_gg4_ing_41"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "The person in charge of guiding the actors and filming scenes in a movie is the _______.",
        "options": [
            "publisher",
            "novelist",
            "author",
            "director"
        ],
        "correct": 3,
        "explanation": "'Director' es el director de cine.",
        "id": "q_gg4_ing_42"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "When trees in a vast rainforest are cut down in large quantities, it is called _______.",
        "options": [
            "recycling",
            "deforestation",
            "pollution",
            "climate"
        ],
        "correct": 1,
        "explanation": "'Deforestation' es deforestación (Inglés Nivel 4 Unit 6: Protect the Planet).",
        "id": "q_gg4_ing_43"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Energy generated directly from the sun using special roof panels is _______ energy.",
        "options": [
            "wind",
            "fossil",
            "solar",
            "nuclear"
        ],
        "correct": 2,
        "explanation": "'Solar energy' es energía solar.",
        "id": "q_gg4_ing_44"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Smoke from factories and exhaust fumes from cars cause severe air _______.",
        "options": [
            "pollution",
            "recycling",
            "temperature",
            "species"
        ],
        "correct": 0,
        "explanation": "'Pollution' significa contaminación ambiental.",
        "id": "q_gg4_ing_45"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Glass, paper and metal can be processed and reused through _______.",
        "options": [
            "cutting",
            "recycling",
            "rubbish",
            "throwing"
        ],
        "correct": 1,
        "explanation": "'Recycling' es reciclaje.",
        "id": "q_gg4_ing_46"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "Animals that are in danger of disappearing completely from Earth are called _______ species.",
        "options": [
            "extinct",
            "dangerous",
            "polluted",
            "endangered"
        ],
        "correct": 3,
        "explanation": "'Endangered species' son especies en peligro de extinción.",
        "id": "q_gg4_ing_47"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A massive tropical storm with violently spinning destructive winds is a _______.",
        "options": [
            "earthquake",
            "drought",
            "hurricane",
            "flood"
        ],
        "correct": 2,
        "explanation": "'Hurricane' es huracán.",
        "id": "q_gg4_ing_48"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A very dry, hot area of land covered in sand with almost no rainfall is a _______.",
        "options": [
            "glacier",
            "forest",
            "mountain",
            "desert"
        ],
        "correct": 3,
        "explanation": "'Desert' es desierto (atención al deletreo: dessert con doble s es postre).",
        "id": "q_gg4_ing_49"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "To save electric energy at home, always _______ the lights when you leave a room.",
        "options": [
            "turn on",
            "put on",
            "pick up",
            "turn off"
        ],
        "correct": 3,
        "explanation": "'Turn off' significa apagar (las luces o artefactos).",
        "id": "q_gg4_ing_50"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es el triple de 150?",
        "options": [
            "300",
            "450",
            "600",
            "350"
        ],
        "correct": 1,
        "explanation": "El triple de un número se obtiene multiplicándolo por 3: 150 × 3 = 450.",
        "id": "q_g5_matematica_41"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si una pizza se corta en 8 porciones iguales y comés 3 porciones, ¿qué fracción comiste?",
        "options": [
            "3/8",
            "5/8",
            "3/5",
            "8/3"
        ],
        "correct": 0,
        "explanation": "Comiste 3 porciones del total de 8, lo que representa la fracción 3/8.",
        "id": "q_g5_matematica_42"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el perímetro de un cuadrado cuyos lados miden 6 cm cada uno?",
        "options": [
            "12 cm",
            "18 cm",
            "24 cm",
            "36 cm"
        ],
        "correct": 2,
        "explanation": "El perímetro de un cuadrado es la suma de sus 4 lados iguales: 6 cm + 6 cm + 6 cm + 6 cm = 24 cm.",
        "id": "q_g5_matematica_43"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos gramos equivalen a 1 kilogramo?",
        "options": [
            "100 gramos",
            "500 gramos",
            "1.000 gramos",
            "10.000 gramos"
        ],
        "correct": 2,
        "explanation": "El prefijo 'kilo' significa mil; por lo tanto, 1 kilogramo tiene exactamente 1.000 gramos.",
        "id": "q_g5_matematica_44"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué número resulta de sumar 3,5 + 2,3?",
        "options": [
            "5,8",
            "5,2",
            "6,0",
            "5,5"
        ],
        "correct": 0,
        "explanation": "Sumando los décimos y los enteros: 3,5 + 2,3 = 5,8.",
        "id": "q_g5_matematica_45"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cómo se llama un polígono que tiene exactamente 5 lados?",
        "options": [
            "Hexágono",
            "Pentágono",
            "Heptágono",
            "Cuadrilátero"
        ],
        "correct": 1,
        "explanation": "Un pentágono es la figura geométrica plana delimitada por 5 lados.",
        "id": "q_g5_matematica_46"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si repartís 48 caramelos en partes iguales entre 6 amigos, ¿cuántos le tocan a cada uno?",
        "options": [
            "6",
            "7",
            "8",
            "9"
        ],
        "correct": 2,
        "explanation": "Dividimos 48 entre 6: 48 ÷ 6 = 8 caramelos para cada amigo.",
        "id": "q_g5_matematica_47"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de estos números es múltiplo de 5?",
        "options": [
            "23",
            "34",
            "45",
            "52"
        ],
        "correct": 2,
        "explanation": "Los múltiplos de 5 siempre terminan en 0 o en 5; 45 termina en 5.",
        "id": "q_g5_matematica_48"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos minutos hay en 2 horas y media?",
        "options": [
            "120 minutos",
            "130 minutos",
            "150 minutos",
            "180 minutos"
        ],
        "correct": 2,
        "explanation": "Cada hora tiene 60 minutos: 2 horas son 120 minutos, más media hora (30 minutos) da 150 minutos.",
        "id": "q_g5_matematica_49"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el valor del dígito 7 en el número 3.750?",
        "options": [
            "7 unidades",
            "70 unidades",
            "700 unidades",
            "7.000 unidades"
        ],
        "correct": 2,
        "explanation": "El 7 ocupa el lugar de las centenas, por lo que su valor posicional es 700.",
        "id": "q_g5_matematica_50"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es la mitad de 500?",
        "options": [
            "200",
            "250",
            "300",
            "150"
        ],
        "correct": 1,
        "explanation": "Dividir por 2 da la mitad: 500 ÷ 2 = 250.",
        "id": "q_g5_matematica_51"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Un ángulo que mide MENOS de 90 grados se denomina:",
        "options": [
            "Ángulo recto",
            "Ángulo agudo",
            "Ángulo obtuso",
            "Ángulo llano"
        ],
        "correct": 1,
        "explanation": "Los ángulos agudos son aquellos cuya amplitud es mayor a 0° y menor a 90°.",
        "id": "q_g5_matematica_52"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué fracción es mayor: 3/4 o 1/4?",
        "options": [
            "Son iguales",
            "1/4",
            "3/4",
            "No se puede saber"
        ],
        "correct": 2,
        "explanation": "Al tener igual denominador, es mayor la que tiene mayor numerador: 3/4 > 1/4.",
        "id": "q_g5_matematica_53"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si comprás 4 cuadernos a $250 cada uno, ¿cuánto pagás en total?",
        "options": [
            "$750",
            "$1.000",
            "$1.250",
            "$800"
        ],
        "correct": 1,
        "explanation": "Multiplicamos cantidad por precio unitario: 4 × $250 = $1.000.",
        "id": "q_g5_matematica_54"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos centímetros hay en 1 metro y medio?",
        "options": [
            "100 cm",
            "125 cm",
            "150 cm",
            "200 cm"
        ],
        "correct": 2,
        "explanation": "1 metro tiene 100 cm y medio metro tiene 50 cm; sumados dan 150 cm.",
        "id": "q_g5_matematica_55"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué número es el doble de 36?",
        "options": [
            "72",
            "68",
            "74",
            "82"
        ],
        "correct": 0,
        "explanation": "El doble se calcula multiplicando por 2: 36 × 2 = 72.",
        "id": "q_g5_matematica_56"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cómo se llama un triángulo que tiene sus tres lados de igual longitud?",
        "options": [
            "Escaleno",
            "Isósceles",
            "Equilátero",
            "Rectángulo"
        ],
        "correct": 2,
        "explanation": "El triángulo equilátero tiene sus tres lados y sus tres ángulos congruentes.",
        "id": "q_g5_matematica_57"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 100 - 37?",
        "options": [
            "73",
            "63",
            "67",
            "53"
        ],
        "correct": 1,
        "explanation": "Restamos: 100 - 37 = 63.",
        "id": "q_g5_matematica_58"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos mililitros hay en 1 litro?",
        "options": [
            "10 ml",
            "100 ml",
            "1.000 ml",
            "10.000 ml"
        ],
        "correct": 2,
        "explanation": "Un litro contiene exactamente 1.000 mililitros.",
        "id": "q_g5_matematica_59"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si un paquete de galletitas trae 12 unidades, ¿cuántas galletitas hay en 5 paquetes iguales?",
        "options": [
            "50",
            "60",
            "70",
            "72"
        ],
        "correct": 1,
        "explanation": "Multiplicamos: 12 × 5 = 60 galletitas.",
        "id": "q_g5_matematica_60"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el siguiente número en la serie: 10, 20, 30, 40, ...?",
        "options": [
            "45",
            "50",
            "60",
            "55"
        ],
        "correct": 1,
        "explanation": "La serie avanza de 10 en 10, por lo que el siguiente es 50.",
        "id": "q_g5_matematica_61"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Un ángulo que mide exactamente 180 grados se llama:",
        "options": [
            "Ángulo llano",
            "Ángulo recto",
            "Ángulo agudo",
            "Ángulo cóncavo"
        ],
        "correct": 0,
        "explanation": "El ángulo llano equivale a dos ángulos rectos alineados y mide 180°.",
        "id": "q_g5_matematica_62"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 45 × 10?",
        "options": [
            "450",
            "405",
            "4.500",
            "550"
        ],
        "correct": 0,
        "explanation": "Para multiplicar un número entero por 10 se le agrega un cero a la derecha: 450.",
        "id": "q_g5_matematica_63"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si una hora tiene 60 minutos, ¿cuántos minutos son tres cuartos de hora (3/4 de hora)?",
        "options": [
            "30 minutos",
            "40 minutos",
            "45 minutos",
            "50 minutos"
        ],
        "correct": 2,
        "explanation": "Un cuarto de hora son 15 minutos; tres cuartos son 15 × 3 = 45 minutos.",
        "id": "q_g5_matematica_64"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué figura geométrica tiene 4 lados de igual longitud pero sus ángulos no son rectos?",
        "options": [
            "Cuadrado",
            "Rombo",
            "Trapecio",
            "Rectángulo"
        ],
        "correct": 1,
        "explanation": "El rombo tiene cuatro lados congruentes y ángulos opuestos iguales dos a dos.",
        "id": "q_g5_matematica_65"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resto al dividir 25 entre 4?",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correct": 1,
        "explanation": "25 = 4 × 6 + 1; por lo tanto, el cociente es 6 y el resto es 1.",
        "id": "q_g5_matematica_66"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos días hay en un año común (no bisiesto)?",
        "options": [
            "360",
            "365",
            "366",
            "364"
        ],
        "correct": 1,
        "explanation": "Un año común tiene 365 días; solo los años bisiestos tienen 366.",
        "id": "q_g5_matematica_67"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 1/2 + 1/2?",
        "options": [
            "2/4",
            "1 entero",
            "1/4",
            "2 enteros"
        ],
        "correct": 1,
        "explanation": "Sumar dos mitades (1/2 + 1/2 = 2/2) forma una unidad completa (1 entero).",
        "id": "q_g5_matematica_68"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el área de un rectángulo cuya base mide 5 cm y su altura 4 cm?",
        "options": [
            "9 cm²",
            "18 cm²",
            "20 cm²",
            "25 cm²"
        ],
        "correct": 2,
        "explanation": "El área del rectángulo es base por altura: 5 cm × 4 cm = 20 cm².",
        "id": "q_g5_matematica_69"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de los siguientes números es par?",
        "options": [
            "17",
            "29",
            "44",
            "63"
        ],
        "correct": 2,
        "explanation": "Los números pares son aquellos que terminan en 0, 2, 4, 6 u 8; 44 termina en 4.",
        "id": "q_g5_matematica_70"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos lados tiene un hexágono regular?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correct": 1,
        "explanation": "El prefijo 'hexa' proviene del griego y significa seis.",
        "id": "q_g5_matematica_71"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si tengo $500 y gasto $180, ¿cuánto dinero me queda?",
        "options": [
            "$320",
            "$340",
            "$380",
            "$220"
        ],
        "correct": 0,
        "explanation": "Restamos: $500 - $180 = $320.",
        "id": "q_g5_matematica_72"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué número decimal representa tres décimos?",
        "options": [
            "0,03",
            "0,3",
            "3,0",
            "0,003"
        ],
        "correct": 1,
        "explanation": "Tres décimos se escribe 3/10 y en notación decimal es 0,3.",
        "id": "q_g5_matematica_73"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 7 × 8?",
        "options": [
            "54",
            "56",
            "58",
            "64"
        ],
        "correct": 1,
        "explanation": "Según las tablas de multiplicar: 7 × 8 = 56.",
        "id": "q_g5_matematica_74"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Un cuerpo geométrico que no tiene caras planas y rueda en cualquier dirección es:",
        "options": [
            "El cubo",
            "El cilindro",
            "La esfera",
            "El cono"
        ],
        "correct": 2,
        "explanation": "La esfera es una superficie curva cerrada sin aristas ni vértices.",
        "id": "q_g5_matematica_75"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si un paquete de figuritas trae 5 figuritas, ¿cuántos paquetes necesito para tener 40 figuritas?",
        "options": [
            "6",
            "7",
            "8",
            "9"
        ],
        "correct": 2,
        "explanation": "Dividimos el total entre la cantidad por paquete: 40 ÷ 5 = 8 paquetes.",
        "id": "q_g5_matematica_76"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 250 + 750?",
        "options": [
            "900",
            "1.000",
            "1.100",
            "950"
        ],
        "correct": 1,
        "explanation": "Sumando ambos términos: 250 + 750 = 1.000.",
        "id": "q_g5_matematica_77"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué instrumento se utiliza para medir la amplitud de los ángulos?",
        "options": [
            "Regla graduada",
            "Compás",
            "Transportador",
            "Escuadra"
        ],
        "correct": 2,
        "explanation": "El transportador semicircular o circular es el instrumento para medir ángulos en grados.",
        "id": "q_g5_matematica_78"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es la cuarta parte de 100?",
        "options": [
            "20",
            "25",
            "30",
            "50"
        ],
        "correct": 1,
        "explanation": "La cuarta parte se obtiene dividiendo entre 4: 100 ÷ 4 = 25.",
        "id": "q_g5_matematica_79"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué número se forma con 4 centenas, 3 decenas y 5 unidades?",
        "options": [
            "4.305",
            "435",
            "4.035",
            "453"
        ],
        "correct": 1,
        "explanation": "4 centenas (400) + 3 decenas (30) + 5 unidades (5) = 435.",
        "id": "q_g5_matematica_80"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos vértices tiene un cubo?",
        "options": [
            "6",
            "8",
            "12",
            "4"
        ],
        "correct": 1,
        "explanation": "Un cubo tiene 6 caras cuadradas, 12 aristas y 8 esquinas o vértices.",
        "id": "q_g5_matematica_81"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si corrés 1.500 metros a la mañana y 500 metros a la tarde, ¿cuántos kilómetros corriste en total?",
        "options": [
            "1 km",
            "1,5 km",
            "2 km",
            "2,5 km"
        ],
        "correct": 2,
        "explanation": "En total son 2.000 metros; como 1.000 metros equivalen a 1 km, 2.000 m = 2 km.",
        "id": "q_g5_matematica_82"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál de las siguientes fracciones es propia (menor que 1 entero)?",
        "options": [
            "5/3",
            "4/4",
            "2/5",
            "7/2"
        ],
        "correct": 2,
        "explanation": "Una fracción es propia cuando su numerador es menor que su denominador: 2 < 5.",
        "id": "q_g5_matematica_83"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 9 × 9?",
        "options": [
            "72",
            "81",
            "89",
            "90"
        ],
        "correct": 1,
        "explanation": "Por tabla de multiplicar: 9 × 9 = 81.",
        "id": "q_g5_matematica_84"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos lados tiene un octógono?",
        "options": [
            "6",
            "7",
            "8",
            "9"
        ],
        "correct": 2,
        "explanation": "El octógono es un polígono de 8 lados.",
        "id": "q_g5_matematica_85"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si compras un juguete de $640 y pagas con un billete de $1.000, ¿cuánto te dan de vuelto?",
        "options": [
            "$340",
            "$360",
            "$460",
            "$260"
        ],
        "correct": 1,
        "explanation": "Restamos: $1.000 - $640 = $360.",
        "id": "q_g5_matematica_86"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué tipo de ángulo mide más de 90° pero menos de 180°?",
        "options": [
            "Agudo",
            "Recto",
            "Obtuso",
            "Llano"
        ],
        "correct": 2,
        "explanation": "El ángulo obtuso tiene una abertura mayor que un ángulo recto y menor que uno llano.",
        "id": "q_g5_matematica_87"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué fracción representa la mitad de una mitad?",
        "options": [
            "1/2",
            "1/4",
            "1/8",
            "2/4"
        ],
        "correct": 1,
        "explanation": "La mitad de 1/2 se obtiene multiplicando 1/2 × 1/2 = 1/4.",
        "id": "q_g5_matematica_88"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el doble de 125?",
        "options": [
            "225",
            "250",
            "275",
            "300"
        ],
        "correct": 1,
        "explanation": "Multiplicando por 2: 125 × 2 = 250.",
        "id": "q_g5_matematica_89"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántas caras tiene una pirámide de base cuadrada en total (base incluida)?",
        "options": [
            "4",
            "5",
            "6",
            "8"
        ],
        "correct": 1,
        "explanation": "Tiene 1 cara basal cuadrada y 4 caras laterales triangulares, sumando 5 caras en total.",
        "id": "q_g5_matematica_90"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 320 ÷ 10?",
        "options": [
            "32",
            "30",
            "3,2",
            "3200"
        ],
        "correct": 0,
        "explanation": "Dividir por 10 a un número terminado en cero equivale a quitarle ese cero: 32.",
        "id": "q_g5_matematica_91"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué número es divisible por 2 y por 3 a la vez?",
        "options": [
            "10",
            "15",
            "18",
            "25"
        ],
        "correct": 2,
        "explanation": "18 es par (divisible por 2) y la suma de sus cifras 1+8=9 es múltiplo de 3 (divisible por 3).",
        "id": "q_g5_matematica_92"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si un lado de un triángulo equilátero mide 7 cm, ¿cuánto mide su perímetro?",
        "options": [
            "14 cm",
            "21 cm",
            "28 cm",
            "35 cm"
        ],
        "correct": 1,
        "explanation": "Sus 3 lados son iguales: 7 × 3 = 21 cm.",
        "id": "q_g5_matematica_93"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 0,5 + 0,5?",
        "options": [
            "0,10",
            "1",
            "1,5",
            "0,25"
        ],
        "correct": 1,
        "explanation": "Cinco décimos más cinco décimos son diez décimos, equivalentes a 1 entero.",
        "id": "q_g5_matematica_94"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Qué número romano representa al 50?",
        "options": [
            "V",
            "X",
            "L",
            "C"
        ],
        "correct": 2,
        "explanation": "En la numeración romana la letra L representa al número 50.",
        "id": "q_g5_matematica_95"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuántos segundos tiene 1 minuto completo?",
        "options": [
            "30 segundos",
            "60 segundos",
            "100 segundos",
            "120 segundos"
        ],
        "correct": 1,
        "explanation": "Cada minuto está compuesto por exactamente 60 segundos.",
        "id": "q_g5_matematica_96"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuál es el producto de 6 × 7?",
        "options": [
            "42",
            "48",
            "36",
            "49"
        ],
        "correct": 0,
        "explanation": "De acuerdo a las tablas de multiplicar: 6 × 7 = 42.",
        "id": "q_g5_matematica_97"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "Si un reloj marca las 3:15, ¿cuántos minutos faltan para las 4:00?",
        "options": [
            "30 minutos",
            "40 minutos",
            "45 minutos",
            "50 minutos"
        ],
        "correct": 2,
        "explanation": "De los 60 minutos de la hora, transcurrieron 15: 60 - 15 = 45 minutos.",
        "id": "q_g5_matematica_98"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cómo se llama la línea que une el centro de una circunferencia con cualquier punto de ella?",
        "options": [
            "Cuerda",
            "Diámetro",
            "Radio",
            "Secante"
        ],
        "correct": 2,
        "explanation": "El radio es el segmento que va desde el centro hasta el borde de la circunferencia.",
        "id": "q_g5_matematica_99"
    },
    {
        "grade": 5,
        "category": "matematica",
        "question": "¿Cuánto es 1.000 - 250?",
        "options": [
            "650",
            "750",
            "800",
            "850"
        ],
        "correct": 1,
        "explanation": "Restamos: 1.000 - 250 = 750.",
        "id": "q_g5_matematica_100"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de las siguientes palabras es un sustantivo colectivo que indica conjunto de ovejas?",
        "options": [
            "Rebaño",
            "Jauría",
            "Cardumen",
            "Bandada"
        ],
        "correct": 0,
        "explanation": "'Rebaño' es el sustantivo colectivo que designa un conjunto de ganado ovino.",
        "id": "q_g5_lengua_41"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "Las palabras agudas llevan tilde cuando terminan en:",
        "options": [
            "Cualquier consonante",
            "N, S o vocal",
            "Consonante que no sea N ni S",
            "Siempre"
        ],
        "correct": 1,
        "explanation": "La regla ortográfica establece tilde en agudas que finalizan en 'n', 's' o vocal.",
        "id": "q_g5_lengua_42"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la oración 'La niña pequeña canta alegremente', ¿cuál palabra es el verbo?",
        "options": [
            "niña",
            "pequeña",
            "canta",
            "alegremente"
        ],
        "correct": 2,
        "explanation": "'Canta' es el verbo principal porque expresa la acción que realiza la niña.",
        "id": "q_g5_lengua_43"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué signo de puntuación se utiliza al final de una oración interrogativa?",
        "options": [
            "Punto final",
            "Signo de interrogación",
            "Signo de exclamación",
            "Dos puntos"
        ],
        "correct": 1,
        "explanation": "Las preguntas se delimitan con signos de interrogación (¿ ?).",
        "id": "q_g5_lengua_44"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el antónimo de la palabra 'valiente'?",
        "options": [
            "Fuerte",
            "Cobarde",
            "Heroico",
            "Rápido"
        ],
        "correct": 1,
        "explanation": "'Cobarde' significa lo opuesto a valiente.",
        "id": "q_g5_lengua_45"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cómo se llama la narración breve con animales como personajes que deja una moraleja o enseñanza?",
        "options": [
            "Mito",
            "Fábula",
            "Novela",
            "Crónica"
        ],
        "correct": 1,
        "explanation": "La fábula es el relato tradicional caracterizado por animales humanizados y una moraleja final.",
        "id": "q_g5_lengua_46"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la palabra 'árbol', ¿por qué lleva tilde?",
        "options": [
            "Porque es aguda terminada en L",
            "Porque es grave terminada en consonante que no es N ni S",
            "Porque es esdrújula",
            "Porque es un hiato"
        ],
        "correct": 1,
        "explanation": "'Árbol' es palabra grave con acento en la penúltima sílaba y termina en L.",
        "id": "q_g5_lengua_47"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el plural correcto de la palabra 'lápiz'?",
        "options": [
            "Lápizes",
            "Lápices",
            "Lápises",
            "Lápics"
        ],
        "correct": 1,
        "explanation": "Las palabras terminadas en 'z' forman su plural reemplazando la 'z' por 'c' seguida de 'es'.",
        "id": "q_g5_lengua_48"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué elemento de la comunicación es quien recibe el mensaje?",
        "options": [
            "Emisor",
            "Receptor",
            "Canal",
            "Código"
        ],
        "correct": 1,
        "explanation": "El receptor es la persona o entidad a quien está destinado el mensaje.",
        "id": "q_g5_lengua_49"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de las siguientes palabras contiene un prefijo de negación?",
        "options": [
            "Imposible",
            "Amable",
            "Importante",
            "Iluminar"
        ],
        "correct": 0,
        "explanation": "El prefijo 'im-' en 'imposible' indica oposición o negación (no posible).",
        "id": "q_g5_lengua_50"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de palabra es 'rápidamente'?",
        "options": [
            "Adjetivo",
            "Verbo",
            "Adverbio",
            "Sustantivo"
        ],
        "correct": 2,
        "explanation": "Las palabras terminadas en '-mente' derivadas de adjetivos son adverbios de modo.",
        "id": "q_g5_lengua_51"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la oración 'El perro y el gato juegan', ¿qué clase de sujeto tiene?",
        "options": [
            "Sujeto tácito",
            "Sujeto simple",
            "Sujeto compuesto",
            "Sujeto pasivo"
        ],
        "correct": 2,
        "explanation": "Tiene dos núcleos sustantivos ('perro' y 'gato'), por lo que es un sujeto compuesto.",
        "id": "q_g5_lengua_52"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el sinónimo de 'contento'?",
        "options": [
            "Triste",
            "Enojado",
            "Feliz",
            "Cansado"
        ],
        "correct": 2,
        "explanation": "'Feliz' y 'contento' comparten el mismo significado de alegría.",
        "id": "q_g5_lengua_53"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "Las palabras esdrújulas se acentúan siempre en la:",
        "options": [
            "Última sílaba",
            "Penúltima sílaba",
            "Antepenúltima sílaba",
            "Primera sílaba"
        ],
        "correct": 2,
        "explanation": "Por regla general, todas las palabras con acento tónico en la antepenúltima sílaba llevan tilde.",
        "id": "q_g5_lengua_54"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estos sustantivos es propio?",
        "options": [
            "río",
            "montaña",
            "Argentina",
            "país"
        ],
        "correct": 2,
        "explanation": "'Argentina' es el nombre propio de una nación y se escribe con mayúscula inicial.",
        "id": "q_g5_lengua_55"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tiempo verbal expresa una acción que ya ocurrió en el pasado?",
        "options": [
            "Presente",
            "Pretérito (o Pasado)",
            "Futuro",
            "Condicional"
        ],
        "correct": 1,
        "explanation": "El tiempo pretérito sitúa los hechos en un momento previo al del habla.",
        "id": "q_g5_lengua_56"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cómo se denomina el conjunto de letras ordenadas de un idioma?",
        "options": [
            "Párrafo",
            "Abecedario o Alfabeto",
            "Diccionario",
            "Oración"
        ],
        "correct": 1,
        "explanation": "El abecedario o alfabeto es la serie ordenada de letras que componen una lengua.",
        "id": "q_g5_lengua_57"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En el cuento, ¿cómo se llama al personaje que se opone o enfrenta al protagonista?",
        "options": [
            "Narrador",
            "Antagonista",
            "Autor",
            "Testigo"
        ],
        "correct": 1,
        "explanation": "El antagonista es la figura contraria que genera el conflicto con el héroe o protagonista.",
        "id": "q_g5_lengua_58"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estas palabras es aguda?",
        "options": [
            "Césped",
            "Canción",
            "Música",
            "Mesa"
        ],
        "correct": 1,
        "explanation": "'Canción' tiene su fuerza de voz en la última sílaba ('ción') y lleva tilde por terminar en N.",
        "id": "q_g5_lengua_59"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué indica un adjetivo calificativo?",
        "options": [
            "Una acción realizada",
            "Una cualidad o característica del sustantivo",
            "El tiempo y lugar",
            "Una pregunta"
        ],
        "correct": 1,
        "explanation": "Los adjetivos calificativos atribuyen cualidades, rasgos o estados al sustantivo.",
        "id": "q_g5_lengua_60"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué signo ortográfico se utiliza para separar elementos en una enumeración?",
        "options": [
            "El punto y coma",
            "La coma",
            "Los dos puntos",
            "El guión"
        ],
        "correct": 1,
        "explanation": "La coma separa palabras o frases de una misma serie o lista.",
        "id": "q_g5_lengua_61"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de las siguientes palabras tiene un diptongo?",
        "options": [
            "Cielo",
            "Poeta",
            "País",
            "Raíz"
        ],
        "correct": 0,
        "explanation": "En 'cielo' se unen una vocal cerrada 'i' y una abierta 'e' en una misma sílaba ('cie-lo').",
        "id": "q_g5_lengua_62"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de texto transmite información objetiva sobre un hecho de actualidad?",
        "options": [
            "La noticia periodística",
            "El cuento maravilloso",
            "El poema lírico",
            "La historieta cómica"
        ],
        "correct": 0,
        "explanation": "La noticia relata acontecimientos reales, recientes y de interés social.",
        "id": "q_g5_lengua_63"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En la oración 'Nosotros leemos un libro interesante', ¿cuál es el pronombre personal?",
        "options": [
            "Nosotros",
            "leemos",
            "un",
            "libro"
        ],
        "correct": 0,
        "explanation": "'Nosotros' es el pronombre de primera persona del plural.",
        "id": "q_g5_lengua_64"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el femenino de la palabra 'caballo'?",
        "options": [
            "Caballa",
            "Yegua",
            "Oveja",
            "Potra"
        ],
        "correct": 1,
        "explanation": "El término femenino específico para la especie equina es 'yegua'.",
        "id": "q_g5_lengua_65"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué parte de la noticia va arriba del título principal para contextualizar el tema?",
        "options": [
            "El copete o bajada",
            "La volanta o epígrafe",
            "El cuerpo",
            "La firma"
        ],
        "correct": 1,
        "explanation": "La volanta o antetítulo se ubica antes del título para anticipar datos del hecho.",
        "id": "q_g5_lengua_66"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el aumentativo de 'casa'?",
        "options": [
            "Casita",
            "Casona",
            "Casucha",
            "Caseta"
        ],
        "correct": 1,
        "explanation": "'Casona' es el aumentativo que denota una casa de gran tamaño.",
        "id": "q_g5_lengua_67"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "La persona gramatical 'tú' o 'vos' corresponde a:",
        "options": [
            "Primera persona del singular",
            "Segunda persona del singular",
            "Tercera persona del singular",
            "Primera persona del plural"
        ],
        "correct": 1,
        "explanation": "La segunda persona del singular identifica directamente al interlocutor.",
        "id": "q_g5_lengua_68"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el antónimo de 'construir'?",
        "options": [
            "Edificar",
            "Destruir",
            "Armar",
            "Pintar"
        ],
        "correct": 1,
        "explanation": "'Destruir' expresa la acción contraria a construir.",
        "id": "q_g5_lengua_69"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué función cumplen los dos puntos antes de una cita textual?",
        "options": [
            "Finalizar el párrafo",
            "Anunciar las palabras exactas que dijo alguien",
            "Indicar una duda",
            "Separar oraciones sin conexión"
        ],
        "correct": 1,
        "explanation": "Los dos puntos preceden la transcripción directa de lo dicho por un hablante.",
        "id": "q_g5_lengua_70"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En 'El sol brillaba con intensidad', ¿qué función cumple la frase 'con intensidad'?",
        "options": [
            "Circunstancial de lugar",
            "Circunstancial de modo",
            "Circunstancial de tiempo",
            "Objeto directo"
        ],
        "correct": 1,
        "explanation": "Responde a la pregunta ¿cómo brillaba?, indicando la manera o modo.",
        "id": "q_g5_lengua_71"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de las siguientes palabras es esdrújula?",
        "options": [
            "Camión",
            "Lápiz",
            "Pájaro",
            "Papel"
        ],
        "correct": 2,
        "explanation": "'Pájaro' se acentúa en 'pá' (antepenúltima sílaba) y lleva tilde siempre.",
        "id": "q_g5_lengua_72"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el diminutivo de 'pan'?",
        "options": [
            "Panzote",
            "Panecillo o pancito",
            "Panera",
            "Panadería"
        ],
        "correct": 1,
        "explanation": "'Pancito' o 'panecillo' expresa tamaño reducido o aprecio del sustantivo pan.",
        "id": "q_g5_lengua_73"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cómo se llama la conversación entre dos o más personajes en una obra?",
        "options": [
            "Monólogo",
            "Diálogo",
            "Descripción",
            "Prólogo"
        ],
        "correct": 1,
        "explanation": "El diálogo es el intercambio verbal directo entre interlocutores.",
        "id": "q_g5_lengua_74"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de estos verbos está en infinitivo?",
        "options": [
            "Corrió",
            "Corriendo",
            "Correr",
            "Correrá"
        ],
        "correct": 2,
        "explanation": "Los verbos en infinitivo terminan en -ar, -er o -ir y no están conjugados.",
        "id": "q_g5_lengua_75"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de texto da instrucciones paso a paso para armar un objeto o preparar una comida?",
        "options": [
            "Texto instructivo",
            "Texto argumentativo",
            "Poesía",
            "Mito"
        ],
        "correct": 0,
        "explanation": "Los textos instructivos guían al lector mediante pasos ordenados.",
        "id": "q_g5_lengua_76"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el sujeto tácito o desinencial en la oración 'Fuimos al cine ayer'?",
        "options": [
            "Ellos",
            "Nosotros / Nosotras",
            "Ustedes",
            "Yo"
        ],
        "correct": 1,
        "explanation": "La desinencia verbal '-imos' indica que el sujeto implícito es 'nosotros'.",
        "id": "q_g5_lengua_77"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué palabra está correctamente escrita con 'B'?",
        "options": [
            "Bicicleta",
            "Vicicleta",
            "Bicicreta",
            "Visicleta"
        ],
        "correct": 0,
        "explanation": "Se escribe 'bicicleta' con 'b' inicial y 'c' intermedia.",
        "id": "q_g5_lengua_78"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué recurso literario compara dos cosas usando el nexo 'como' (ej: 'blanco como la nieve')?",
        "options": [
            "Metáfora",
            "Comparación o Símil",
            "Personificación",
            "Hipérbole"
        ],
        "correct": 1,
        "explanation": "La comparación o símil establece semejanza explícita mediante nexos como 'como' o 'cual'.",
        "id": "q_g5_lengua_79"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál de los siguientes sustantivos es abstracto?",
        "options": [
            "Piedra",
            "Justicia",
            "Silla",
            "Árbol"
        ],
        "correct": 1,
        "explanation": "'Justicia' es una idea o valor ético que no se percibe con los sentidos físicos.",
        "id": "q_g5_lengua_80"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el núcleo del predicado en una oración bimembre?",
        "options": [
            "El sustantivo",
            "El adjetivo",
            "El verbo conjugado",
            "El artículo"
        ],
        "correct": 2,
        "explanation": "El verbo conjugado es el elemento central o núcleo del predicado verbal.",
        "id": "q_g5_lengua_81"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cómo se llama la repetición de sonidos al final de los versos en una poesía?",
        "options": [
            "Rima",
            "Estrofa",
            "Métrica",
            "Ritmo"
        ],
        "correct": 0,
        "explanation": "La rima es la igualdad o semejanza fonética al final de dos o más versos.",
        "id": "q_g5_lengua_82"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué letra se escribe siempre antes de la 'P' y de la 'B'?",
        "options": [
            "La N",
            "La M",
            "La R",
            "La S"
        ],
        "correct": 1,
        "explanation": "Por regla ortográfica fija: antes de 'p' y 'b' siempre se escribe 'm' (ej: campo, tambor).",
        "id": "q_g5_lengua_83"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el gentilicio de una persona nacida en la provincia de Córdoba (Argentina)?",
        "options": [
            "Cordobés / Cordobesa",
            "Cordovano",
            "Cordobino",
            "Cordonense"
        ],
        "correct": 0,
        "explanation": "El sufijo '-és' forma el gentilicio oficial 'cordobés'.",
        "id": "q_g5_lengua_84"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué clase de palabra es 'allí'?",
        "options": [
            "Adverbio de lugar",
            "Adverbio de tiempo",
            "Adjetivo calificativo",
            "Pronombre posesivo"
        ],
        "correct": 0,
        "explanation": "'Allí' indica ubicación espacial concreta respecto al hablante.",
        "id": "q_g5_lengua_85"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "En una carta formal, ¿qué fórmula encabeza el mensaje saludando al destinatario?",
        "options": [
            "Posdata",
            "Despedida",
            "Encabezado o Saludo inicial",
            "Firma"
        ],
        "correct": 2,
        "explanation": "El saludo inicial (ej: 'Estimado Director:') presenta formalmente la misiva.",
        "id": "q_g5_lengua_86"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el sinónimo de 'iniciar'?",
        "options": [
            "Terminar",
            "Comenzar",
            "Cerrar",
            "Pausar"
        ],
        "correct": 1,
        "explanation": "'Comenzar' e 'iniciar' son verbos de significado equivalente.",
        "id": "q_g5_lengua_87"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de narrador cuenta los hechos en tercera persona sin participar en la trama?",
        "options": [
            "Narrador protagonista",
            "Narrador testigo",
            "Narrador omnisciente o en 3ª persona",
            "Narrador en segunda persona"
        ],
        "correct": 2,
        "explanation": "El narrador en tercera persona observa desde fuera los sucesos de los personajes.",
        "id": "q_g5_lengua_88"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es la palabra primitiva de la familia: 'florería', 'florero', 'florista'?",
        "options": [
            "Planta",
            "Flor",
            "Florecer",
            "Flotador"
        ],
        "correct": 1,
        "explanation": "'Flor' es la raíz y palabra primitiva de la cual derivan las demás.",
        "id": "q_g5_lengua_89"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué expresan los signos de admiración o exclamación (¡ !)?",
        "options": [
            "Una pregunta o duda",
            "Emociones intensas como sorpresa, alegría o susto",
            "Una enumeración",
            "El fin de un texto"
        ],
        "correct": 1,
        "explanation": "Sirven para dar entonación enfática a estados afectivos y exclamativos.",
        "id": "q_g5_lengua_90"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el adjetivo posesivo en la frase 'Guardé mis cuadernos en la mochila'?",
        "options": [
            "Guardé",
            "mis",
            "cuadernos",
            "mochila"
        ],
        "correct": 1,
        "explanation": "'Mis' indica pertenencia o posesión en primera persona.",
        "id": "q_g5_lengua_91"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué figura retórica otorga cualidades humanas a objetos o animales?",
        "options": [
            "Metáfora",
            "Personificación",
            "Hipérbole",
            "Aliteración"
        ],
        "correct": 1,
        "explanation": "La personificación atribuye acciones propias de humanos a seres inanimados o animales.",
        "id": "q_g5_lengua_92"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cómo se llama la sílaba que se pronuncia con mayor intensidad en una palabra?",
        "options": [
            "Sílaba átona",
            "Sílaba tónica",
            "Sílaba inicial",
            "Sílaba trabada"
        ],
        "correct": 1,
        "explanation": "La sílaba tónica recibe el golpe de voz principal.",
        "id": "q_g5_lengua_93"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el participio del verbo 'escribir'?",
        "options": [
            "Escribiendo",
            "Escribido",
            "Escrito",
            "Escribió"
        ],
        "correct": 2,
        "explanation": "'Escribir' tiene un participio irregular: 'escrito'.",
        "id": "q_g5_lengua_94"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué clase de palabra es 'rápido' en 'El auto rápido ganó la carrera'?",
        "options": [
            "Sustantivo",
            "Adjetivo",
            "Verbo",
            "Preposición"
        ],
        "correct": 1,
        "explanation": "Modifica al sustantivo 'auto' describiendo su cualidad de velocidad.",
        "id": "q_g5_lengua_95"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el femenino de 'actor'?",
        "options": [
            "Actora",
            "Actriz",
            "Actante",
            "Actoresa"
        ],
        "correct": 1,
        "explanation": "El sustantivo femenino irregular correspondiente a actor es 'actriz'.",
        "id": "q_g5_lengua_96"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué indica la palabra 'ayer'?",
        "options": [
            "Adverbio de lugar",
            "Adverbio de tiempo",
            "Adverbio de cantidad",
            "Sustantivo común"
        ],
        "correct": 1,
        "explanation": "'Ayer' sitúa la acción en el día inmediatamente anterior.",
        "id": "q_g5_lengua_97"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Cuál es el prefijo en la palabra 'subterráneo'?",
        "options": [
            "sub-",
            "terra-",
            "-neo",
            "su-"
        ],
        "correct": 0,
        "explanation": "El prefijo latino 'sub-' significa 'debajo de' (debajo de la tierra).",
        "id": "q_g5_lengua_98"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de punto se utiliza para marcar el final de un texto completo?",
        "options": [
            "Punto y seguido",
            "Punto y aparte",
            "Punto final",
            "Puntos suspensivos"
        ],
        "correct": 2,
        "explanation": "El punto final cierra definitivamente la totalidad del escrito.",
        "id": "q_g5_lengua_99"
    },
    {
        "grade": 5,
        "category": "lengua",
        "question": "¿Qué tipo de palabra es 'pero' en la oración 'Quería salir pero llovía'?",
        "options": [
            "Conjunción",
            "Sustantivo",
            "Adjetivo",
            "Verbo"
        ],
        "correct": 0,
        "explanation": "'Pero' es una conjunción adversativa que une dos proposiciones contrapuestas.",
        "id": "q_g5_lengua_100"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el gas que las plantas absorben del aire para realizar la fotosíntesis?",
        "options": [
            "Oxígeno",
            "Dióxido de carbono",
            "Nitrógeno",
            "Helio"
        ],
        "correct": 1,
        "explanation": "Las plantas toman dióxido de carbono (CO₂) a través de los estomas de sus hojas.",
        "id": "q_g5_naturales_41"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿En qué órgano del cuerpo humano se absorben la mayoría de los nutrientes de los alimentos?",
        "options": [
            "Estómago",
            "Intestino delgado",
            "Esófago",
            "Hígado"
        ],
        "correct": 1,
        "explanation": "Las vellosidades del intestino delgado absorben los nutrientes hacia el torrente sanguíneo.",
        "id": "q_g5_naturales_42"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el cambio de estado de sólido a líquido?",
        "options": [
            "Evaporación",
            "Fusión",
            "Condensación",
            "Solidificación"
        ],
        "correct": 1,
        "explanation": "La fusión ocurre cuando un sólido recibe calor y pasa al estado líquido (como el hielo al derretirse).",
        "id": "q_g5_naturales_43"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué instrumento óptico inventado en el siglo XVII permitió observar células por primera vez?",
        "options": [
            "Telescopio",
            "Microscopio",
            "Barómetro",
            "Termómetro"
        ],
        "correct": 1,
        "explanation": "El microscopio amplía imágenes de objetos y microorganismos invisibles al ojo humano.",
        "id": "q_g5_naturales_44"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "Los animales vertebrados se caracterizan por poseer:",
        "options": [
            "Exoesqueleto quitinoso",
            "Columna vertebral y esqueleto interno",
            "Concha calcárea",
            "Tentáculos"
        ],
        "correct": 1,
        "explanation": "Todos los vertebrados poseen una columna vertebral ósea o cartilaginosa articulada.",
        "id": "q_g5_naturales_45"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es la función principal de los glóbulos rojos en la sangre?",
        "options": [
            "Combatir infecciones bacterianas",
            "Transportar oxígeno a las células",
            "Cerrar heridas formando costras",
            "Digerir grasas"
        ],
        "correct": 1,
        "explanation": "Los glóbulos rojos contienen hemoglobina, proteína que transporta oxígeno desde los pulmones.",
        "id": "q_g5_naturales_46"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "El paso de agua en estado líquido a vapor de agua por acción del calor se denomina:",
        "options": [
            "Evaporación",
            "Solidificación",
            "Fusión",
            "Precipitación"
        ],
        "correct": 0,
        "explanation": "La evaporación es la transformación del líquido en vapor por incremento de energía térmica.",
        "id": "q_g5_naturales_47"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de organismo descompone los restos de seres vivos y devuelve nutrientes al suelo?",
        "options": [
            "Productores",
            "Consumidores primarios",
            "Descomponedores (hongos y bacterias)",
            "Depredadores"
        ],
        "correct": 2,
        "explanation": "Los descomponedores degradan la materia orgánica muerta reciclando los elementos minerales.",
        "id": "q_g5_naturales_48"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llama la fuerza invisible con que la Tierra atrae a todos los cuerpos hacia su centro?",
        "options": [
            "Fuerza de rozamiento",
            "Fuerza magnética",
            "Fuerza de gravedad",
            "Fuerza centrífuga"
        ],
        "correct": 2,
        "explanation": "La gravedad es la atracción gravitatoria que ejerce la masa terrestre sobre los objetos.",
        "id": "q_g5_naturales_49"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de los siguientes es un recurso natural no renovable?",
        "options": [
            "La energía solar",
            "El petróleo",
            "El viento",
            "La radiación del sol"
        ],
        "correct": 1,
        "explanation": "El petróleo se formó hace millones de años y sus yacimientos se agotan con su explotación.",
        "id": "q_g5_naturales_50"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué parte de la flor suele ser vistosa y de colores vivos para atraer a los polinizadores?",
        "options": [
            "Los sépalos",
            "Los pétalos (corola)",
            "El cáliz",
            "La raíz"
        ],
        "correct": 1,
        "explanation": "Los pétalos atraen abejas, mariposas y colibríes facilitando el proceso de polinización.",
        "id": "q_g5_naturales_51"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué órgano bombea sangre de manera continua a todo el cuerpo humano?",
        "options": [
            "El pulmón",
            "El corazón",
            "El riñón",
            "El cerebro"
        ],
        "correct": 1,
        "explanation": "El corazón es un órgano muscular hueco que funciona como una bomba impelente y aspirante.",
        "id": "q_g5_naturales_52"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "El agua salada del mar es un ejemplo típico de:",
        "options": [
            "Mezcla heterogénea",
            "Solución o mezcla homogénea",
            "Elemento puro",
            "Compuesto sólido"
        ],
        "correct": 1,
        "explanation": "Es una mezcla homogénea (solución) donde no se pueden distinguir las sales disueltas a simple vista.",
        "id": "q_g5_naturales_53"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de respiración poseen los peces a través de la cual extraen oxígeno disuelto en el agua?",
        "options": [
            "Pulmonar",
            "Branquial",
            "Cutánea",
            "Traqueal"
        ],
        "correct": 1,
        "explanation": "Las branquias captan el oxígeno presente en la corriente de agua que ingresa por su boca.",
        "id": "q_g5_naturales_54"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el planeta más cercano al Sol?",
        "options": [
            "Venus",
            "Mercurio",
            "Marte",
            "Tierra"
        ],
        "correct": 1,
        "explanation": "Mercurio es el primer planeta del Sistema Solar en orden de distancia al Sol.",
        "id": "q_g5_naturales_55"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué líquido amarillento transporta las células sanguíneas y los nutrientes en el sistema circulatorio?",
        "options": [
            "Plaquetas",
            "Plasma sanguíneo",
            "Saliva",
            "Bilis"
        ],
        "correct": 1,
        "explanation": "El plasma es la porción líquida de la sangre constituida mayoritariamente por agua y proteínas.",
        "id": "q_g5_naturales_56"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "Los animales herbívoros se alimentan principalmente de:",
        "options": [
            "Carne de otras presas",
            "Plantas, hojas y hierbas",
            "Peces y moluscos",
            "Insectos únicamente"
        ],
        "correct": 1,
        "explanation": "Los herbívoros poseen adaptaciones digestivas especializadas en el consumo de materia vegetal.",
        "id": "q_g5_naturales_57"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el gas más abundante que respiramos en la atmósfera de la Tierra?",
        "options": [
            "Oxígeno",
            "Nitrógeno",
            "Dióxido de carbono",
            "Vapor de agua"
        ],
        "correct": 1,
        "explanation": "El nitrógeno conforma aproximadamente el 78% de la atmósfera terrestre.",
        "id": "q_g5_naturales_58"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se denomina la unión de dos o más huesos que permite el movimiento del esqueleto?",
        "options": [
            "Músculo",
            "Tendón",
            "Articulación",
            "Cartílago"
        ],
        "correct": 2,
        "explanation": "Las articulaciones (como rodilla, codo u hombro) permiten el movimiento articular entre huesos.",
        "id": "q_g5_naturales_59"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el cambio de estado de gas a líquido (como el vapor en el espejo al bañarse)?",
        "options": [
            "Condensación",
            "Sublimación",
            "Fusión",
            "Solidificación"
        ],
        "correct": 0,
        "explanation": "La condensación ocurre cuando el gas pierde calor y se transforma en gotas líquidas.",
        "id": "q_g5_naturales_60"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué pigmento verde absorbe la energía solar en las hojas de los vegetales?",
        "options": [
            "Caroteno",
            "Clorofila",
            "Melanina",
            "Hemoglobina"
        ],
        "correct": 1,
        "explanation": "La clorofila se encuentra en los cloroplastos y es imprescindible para captar luz solar.",
        "id": "q_g5_naturales_61"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de animales nacen de huevos puestos en el medio ambiente exterior?",
        "options": [
            "Vivíparos",
            "Ovíparos",
            "Mamíferos",
            "Marsupiales"
        ],
        "correct": 1,
        "explanation": "Los ovíparos (aves, la mayoría de los reptiles y peces) se reproducen mediante huevos.",
        "id": "q_g5_naturales_62"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué órganos del sistema excretor filtran los desechos de la sangre para formar la orina?",
        "options": [
            "Los riñones",
            "Los pulmones",
            "El hígado",
            "El páncreas"
        ],
        "correct": 0,
        "explanation": "Los riñones actúan como filtros biológicos eliminando toxinas a través de la orina.",
        "id": "q_g5_naturales_63"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "Un material que permite el paso fácil de la corriente eléctrica (como el cobre) es un:",
        "options": [
            "Aislante",
            "Conductor eléctrico",
            "Semiconductor nulo",
            "Combustible"
        ],
        "correct": 1,
        "explanation": "Los metales como el cobre poseen electrones libres que conducen eficazmente la electricidad.",
        "id": "q_g5_naturales_64"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llama la capa de gas que protege a la Tierra de los rayos ultravioleta dañinos del Sol?",
        "options": [
            "Corteza terrestre",
            "Capa de ozono",
            "Ionosfera baja",
            "Troposfera marina"
        ],
        "correct": 1,
        "explanation": "La capa de ozono (O₃) estratosférica filtra la radiación ultravioleta nociva.",
        "id": "q_g5_naturales_65"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el estado de la materia que tiene forma propia y volumen definido?",
        "options": [
            "Líquido",
            "Sólido",
            "Gaseoso",
            "Plasma"
        ],
        "correct": 1,
        "explanation": "Los sólidos mantienen forma y volumen constante debido a la fuerte cohesión molecular.",
        "id": "q_g5_naturales_66"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "Los mamíferos se caracterizan porque las hembras alimentan a sus crías con:",
        "options": [
            "Semillas trituradas",
            "Leche materna producida en glándulas mamarias",
            "Carne digerida",
            "Miel"
        ],
        "correct": 1,
        "explanation": "Las glándulas mamarias son el rasgo biológico distintivo de los animales mamíferos.",
        "id": "q_g5_naturales_67"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué movimiento de la Tierra sobre su propio eje da origen al día y la noche?",
        "options": [
            "Movimiento de traslación",
            "Movimiento de rotación",
            "Precesión polar",
            "Nutación"
        ],
        "correct": 1,
        "explanation": "La rotación terrestre tarda aproximadamente 24 horas y produce la alternancia día-noche.",
        "id": "q_g5_naturales_68"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué órgano muscular ayuda en la mecánica respiratoria contrayéndose hacia abajo al inhalar?",
        "options": [
            "El diafragma",
            "El bíceps",
            "El trapecio",
            "La laringe"
        ],
        "correct": 0,
        "explanation": "El diafragma desciende al contraerse, expandiendo la cavidad torácica para el ingreso de aire.",
        "id": "q_g5_naturales_69"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos métodos sirve para separar una mezcla de agua y fideos cocidos?",
        "options": [
            "Imantación",
            "Filtración o colado",
            "Evaporación completa",
            "Decantación química"
        ],
        "correct": 1,
        "explanation": "El colador retiene la fase sólida (fideos) dejando escurrir la fase líquida (agua).",
        "id": "q_g5_naturales_70"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de nutrición tienen las plantas al elaborar su propio alimento?",
        "options": [
            "Heterótrofa",
            "Autótrofa",
            "Carnívora",
            "Parásita"
        ],
        "correct": 1,
        "explanation": "Los organismos autótrofos sintetizan materia orgánica a partir de sustancias inorgánicas.",
        "id": "q_g5_naturales_71"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llaman los diminutos vasos sanguíneos donde se produce el intercambio de nutrientes con las células?",
        "options": [
            "Arterias principales",
            "Venas cavas",
            "Capilares",
            "Válvulas"
        ],
        "correct": 2,
        "explanation": "Los capilares poseen paredes microscópicas delgadas que facilitan el intercambio de gases y sustancias.",
        "id": "q_g5_naturales_72"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "El punto de ebullición del agua pura al nivel del mar es de:",
        "options": [
            "0 °C",
            "50 °C",
            "100 °C",
            "200 °C"
        ],
        "correct": 2,
        "explanation": "El agua hierve y pasa vigorosamente a estado gaseoso a 100 grados Celsius.",
        "id": "q_g5_naturales_73"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué elemento del ecosistema incluye a los seres vivos (plantas, animales, bacterias)?",
        "options": [
            "Factores abióticos",
            "Factores bióticos",
            "Factores climáticos",
            "Factores geológicos"
        ],
        "correct": 1,
        "explanation": "Los factores bióticos comprenden la totalidad de formas vivientes del ecosistema.",
        "id": "q_g5_naturales_74"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se llama la transformación de una oruga en mariposa?",
        "options": [
            "Fisión binaria",
            "Metamorfosis",
            "Geminación",
            "Fotosíntesis"
        ],
        "correct": 1,
        "explanation": "La metamorfosis comprende cambios morfológicos y fisiológicos profundos en el ciclo de vida.",
        "id": "q_g5_naturales_75"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de energía obtenemos a partir del aprovechamiento del viento mediante molinos aerogeneradores?",
        "options": [
            "Energía geotérmica",
            "Energía eólica",
            "Energía hidroeléctrica",
            "Energía fósil"
        ],
        "correct": 1,
        "explanation": "La energía eólica transforma la fuerza cinética del viento en electricidad utilizable.",
        "id": "q_g5_naturales_76"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es la función de los dientes molares en la boca humana?",
        "options": [
            "Cortar alimentos",
            "Desgarrar carnes",
            "Triturar y moler los alimentos",
            "Producir saliva"
        ],
        "correct": 2,
        "explanation": "Los molares poseen superficies anchas con cúspides para la masticación y molienda del bolo alimenticio.",
        "id": "q_g5_naturales_77"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué ocurre cuando la luz rebota sobre un espejo y cambia de dirección?",
        "options": [
            "Refracción",
            "Reflexión",
            "Dispersión",
            "Absorción"
        ],
        "correct": 1,
        "explanation": "La reflexión de la luz es el fenómeno por el cual la onda lumínica regresa al medio tras chocar con una superficie.",
        "id": "q_g5_naturales_78"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de los siguientes animales es un anfibio?",
        "options": [
            "La víbora yarará",
            "La rana toro",
            "El lagarto overo",
            "El pingüino de Magallanes"
        ],
        "correct": 1,
        "explanation": "Las ranas son anfibios con piel húmeda y ciclo de vida con metamorfosis.",
        "id": "q_g5_naturales_79"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué sentido humano nos permite percibir los sabores dulce, salado, ácido, amargo y umami?",
        "options": [
            "El olfato",
            "El gusto (papilas gustativas)",
            "El tacto",
            "La audición"
        ],
        "correct": 1,
        "explanation": "Las papilas gustativas de la lengua captan los estímulos químicos gustativos.",
        "id": "q_g5_naturales_80"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se denomina la propiedad de un imán de atraer ciertos metales ferrosos?",
        "options": [
            "Conductividad",
            "Magnetismo",
            "Elasticidad",
            "Viscosidad"
        ],
        "correct": 1,
        "explanation": "El magnetismo es la fuerza física de atracción y repulsión generada por campos magnéticos.",
        "id": "q_g5_naturales_81"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué función tienen las raíces de una planta?",
        "options": [
            "Realizar la polinización",
            "Fijar la planta al suelo y absorber agua y minerales",
            "Producir semillas",
            "Respirar aire atmosférico únicamente"
        ],
        "correct": 1,
        "explanation": "La raíz ancla el vegetal y absorbe agua con sales minerales formando la savia bruta.",
        "id": "q_g5_naturales_82"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el hueso más largo del cuerpo humano, ubicado en el muslo?",
        "options": [
            "La tibia",
            "El fémur",
            "El húmero",
            "El radio"
        ],
        "correct": 1,
        "explanation": "El fémur soporta el peso del tren superior y es el hueso de mayor longitud.",
        "id": "q_g5_naturales_83"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "Una solución de agua con azúcar disuelta presenta:",
        "options": [
            "Dos fases visibles",
            "Una sola fase homogénea",
            "Tres fases separadas",
            "Precipitado inevitable"
        ],
        "correct": 1,
        "explanation": "Al disolverse completamente, el azúcar forma con el agua un sistema de una sola fase homogénea.",
        "id": "q_g5_naturales_84"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el único satélite natural de la Tierra?",
        "options": [
            "El Sol",
            "La Luna",
            "Fobos",
            "Marte"
        ],
        "correct": 1,
        "explanation": "La Luna es el cuerpo astronómico que orbita directamente alrededor de nuestro planeta.",
        "id": "q_g5_naturales_85"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se denomina a los animales que nacen vivos directamente del vientre materno?",
        "options": [
            "Ovíparos",
            "Vivíparos",
            "Ovovivíparos",
            "Invertebrados"
        ],
        "correct": 1,
        "explanation": "Los vivíparos completan su gestación embrionaria en el útero materno.",
        "id": "q_g5_naturales_86"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué tipo de material es el vidrio?",
        "options": [
            "Opaco",
            "Transparente",
            "Completamente conductor",
            "Magnético"
        ],
        "correct": 1,
        "explanation": "Los materiales transparentes permiten el paso de los rayos de luz permitiendo ver a través de ellos.",
        "id": "q_g5_naturales_87"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el cambio de estado de líquido a sólido (como el agua en una cubetera en el freezer)?",
        "options": [
            "Fusión",
            "Solidificación",
            "Vaporización",
            "Condensación"
        ],
        "correct": 1,
        "explanation": "La solidificación ocurre cuando el líquido cede calor y se vuelve sólido.",
        "id": "q_g5_naturales_88"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué sistema del cuerpo humano se encarga de eliminar el dióxido de carbono al exhalar?",
        "options": [
            "Sistema digestivo",
            "Sistema respiratorio",
            "Sistema locomotor",
            "Sistema endocrino"
        ],
        "correct": 1,
        "explanation": "Los pulmones expulsan dióxido de carbono en cada espiración.",
        "id": "q_g5_naturales_89"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos invertebrados pertenece al grupo de los insectos y tiene 6 patas?",
        "options": [
            "La hormiga",
            "La araña de jardín",
            "El ciempiés",
            "El caracol terrestre"
        ],
        "correct": 0,
        "explanation": "Los insectos poseen cuerpo dividido en cabeza, tórax y abdomen, con 3 pares de patas (6 en total).",
        "id": "q_g5_naturales_90"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué capa de la Tierra está compuesta por roca sólida y forma los continentes y fondos oceánicos?",
        "options": [
            "Atmósfera",
            "Hidrosfera",
            "Corteza o litosfera",
            "Núcleo líquido"
        ],
        "correct": 2,
        "explanation": "La litosfera o corteza es la capa superficial rígida de nuestro planeta.",
        "id": "q_g5_naturales_91"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué gas necesitan los animales y seres humanos para vivir en el proceso de respiración celular?",
        "options": [
            "Oxígeno",
            "Helio",
            "Metano",
            "Argón"
        ],
        "correct": 0,
        "explanation": "El oxígeno es indispensable para obtener energía celular a través de la respiración.",
        "id": "q_g5_naturales_92"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "La sal de mesa común químicamente se denomina:",
        "options": [
            "Bicarbonato de sodio",
            "Cloruro de sodio",
            "Carbonato de calcio",
            "Sulfato de magnesio"
        ],
        "correct": 1,
        "explanation": "La sal común es el compuesto iónico formado por sodio y cloro (NaCl).",
        "id": "q_g5_naturales_93"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué fenómeno ocurre cuando la Luna se interpone exactamente entre el Sol y la Tierra?",
        "options": [
            "Eclipse solar",
            "Eclipse lunar",
            "Marea baja extrema",
            "Solsticio de verano"
        ],
        "correct": 0,
        "explanation": "En un eclipse solar, la Luna bloquea la luz del Sol proyectando su sombra en la Tierra.",
        "id": "q_g5_naturales_94"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál es el principal órgano del sentido de la vista?",
        "options": [
            "El tímpano",
            "El ojo (la retina)",
            "El bulbo olfatorio",
            "La cóclea"
        ],
        "correct": 1,
        "explanation": "El ojo contiene receptores luminosos en la retina que transmiten imágenes al cerebro.",
        "id": "q_g5_naturales_95"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se denomina la pérdida de bosques nativos por tala indiscriminada de árboles?",
        "options": [
            "Erosión hídrica",
            "Deforestación",
            "Inundación",
            "Desertificación eólica"
        ],
        "correct": 1,
        "explanation": "La deforestación destruye la masa forestal amenazando la biodiversidad y el clima.",
        "id": "q_g5_naturales_96"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué animal utiliza la ecolocalización emitiendo sonidos de alta frecuencia para orientarse en la oscuridad?",
        "options": [
            "El murciélago",
            "El águila mora",
            "El león marino",
            "La jirafa"
        ],
        "correct": 0,
        "explanation": "Los murciélagos captan el eco de sus chillidos ultrasónicos para 'ver' con el oído.",
        "id": "q_g5_naturales_97"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cuál de estos desechos es biodegradable y puede usarse para compostaje?",
        "options": [
            "Cáscaras de frutas y verduras",
            "Bolsas de polietileno",
            "Pilas usadas",
            "Botellas plásticas"
        ],
        "correct": 0,
        "explanation": "Los restos orgánicos son descompuestos naturalmente por microorganismos.",
        "id": "q_g5_naturales_98"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Qué estructura ósea protege al cerebro humano ante golpes y traumatismos?",
        "options": [
            "La pelvis",
            "El cráneo",
            "La caja torácica",
            "La clavícula"
        ],
        "correct": 1,
        "explanation": "El cráneo está formado por huesos planos fuertemente articulados que cubren el encéfalo.",
        "id": "q_g5_naturales_99"
    },
    {
        "grade": 5,
        "category": "naturales",
        "question": "¿Cómo se denomina el trayecto circular o elíptico que describe un planeta alrededor del Sol?",
        "options": [
            "Órbita",
            "Rotación",
            "Eje polar",
            "Meridiano"
        ],
        "correct": 0,
        "explanation": "La órbita es la trayectoria gravitatoria regular que recorre un cuerpo celeste en el espacio.",
        "id": "q_g5_naturales_100"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién creó la Bandera Argentina y la enarboló por primera vez en Rosario en 1812?",
        "options": [
            "José de San Martín",
            "Manuel Belgrano",
            "Mariano Moreno",
            "Cornelio Saavedra"
        ],
        "correct": 1,
        "explanation": "El General Manuel Belgrano creó la insignia patria a orillas del río Paraná el 27 de febrero de 1812.",
        "id": "q_g5_sociales_41"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué ciudad se declaró la Independencia de las Provincias Unidas el 9 de julio de 1816?",
        "options": [
            "Buenos Aires",
            "San Miguel de Tucumán",
            "Córdoba",
            "Salta"
        ],
        "correct": 1,
        "explanation": "El histórico Congreso se reunió en la casa de doña Francisca Bazán de Laguna en Tucumán.",
        "id": "q_g5_sociales_42"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la provincia más austral de la República Argentina?",
        "options": [
            "Santa Cruz",
            "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
            "Chubut",
            "Río Negro"
        ],
        "correct": 1,
        "explanation": "Tierra del Fuego abarca el extremo sur insular, las islas del Atlántico y el sector antártico.",
        "id": "q_g5_sociales_43"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama la ley suprema que organiza los derechos y el gobierno de Argentina?",
        "options": [
            "Código Civil",
            "Constitución Nacional",
            "Declaración de Mayo",
            "Pacto Federal"
        ],
        "correct": 1,
        "explanation": "La Constitución Nacional sancionada en 1853 es la norma jurídica fundamental del país.",
        "id": "q_g5_sociales_44"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién lideró el Ejército de los Andes para liberar a Chile y Perú?",
        "options": [
            "Manuel Belgrano",
            "José de San Martín",
            "Martín Miguel de Güemes",
            "Juan José Castelli"
        ],
        "correct": 1,
        "explanation": "El General Don José de San Martín organizó el heroico Cruce de la cordillera de los Andes.",
        "id": "q_g5_sociales_45"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Buenos Aires?",
        "options": [
            "Ciudad Autónoma de Buenos Aires",
            "La Plata",
            "Mar del Plata",
            "Bahía Blanca"
        ],
        "correct": 1,
        "explanation": "La Plata fue fundada en 1882 como capital provincial tras la federalización de Buenos Aires.",
        "id": "q_g5_sociales_46"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué pueblo originario habitaba las islas y canales de Tierra del Fuego navegando en canoas?",
        "options": [
            "Los diaguitas",
            "Los yámanas (yaganes)",
            "Los tobas (qom)",
            "Los guaraníes"
        ],
        "correct": 1,
        "explanation": "Los yámanas eran hábiles canoeros nómades que vivían de la pesca y caza de lobos marinos.",
        "id": "q_g5_sociales_47"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué fecha se celebra el Día de la Revolución de Mayo en Argentina?",
        "options": [
            "25 de Mayo de 1810",
            "9 de Julio de 1816",
            "20 de Junio de 1820",
            "2 de Abril de 1982"
        ],
        "correct": 0,
        "explanation": "El 25 de mayo de 1810 se constituyó el primer gobierno patrio en el Cabildo de Buenos Aires.",
        "id": "q_g5_sociales_48"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es el río más ancho del mundo, que baña las costas de Buenos Aires y Uruguay?",
        "options": [
            "Río Paraná",
            "Río de la Plata",
            "Río Uruguay",
            "Río Amazonas"
        ],
        "correct": 1,
        "explanation": "El Río de la Plata es considerado el río más ancho del mundo en su desembocadura estuárica.",
        "id": "q_g5_sociales_49"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué relieve montañoso recorre todo el límite oeste de la Argentina?",
        "options": [
            "Las Sierras Pampeanas",
            "La Cordillera de los Andes",
            "La Meseta Misionera",
            "La Puna"
        ],
        "correct": 1,
        "explanation": "La Cordillera de los Andes actúa como frontera natural con Chile a lo largo del oeste del territorio.",
        "id": "q_g5_sociales_50"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál fue el primer presidente de la Primera Junta de Gobierno en mayo de 1810?",
        "options": [
            "Cornelio Saavedra",
            "Mariano Moreno",
            "Manuel Alberti",
            "Juan José Paso"
        ],
        "correct": 0,
        "explanation": "El jefe del regimiento de Patricios, Cornelio Saavedra, presidió la Primera Junta patrio.",
        "id": "q_g5_sociales_51"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué bioma característico del centro de Argentina se destaca por sus llanuras fértiles y pastizales?",
        "options": [
            "La Pampa húmeda",
            "La Selva Misionera",
            "La Estepa Patagónica",
            "El Monte Chaqueño"
        ],
        "correct": 0,
        "explanation": "La llanura pampeana posee suelos fértiles de alta aptitud agrícola y ganadera.",
        "id": "q_g5_sociales_52"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia argentina es famosa por los Valles Calchaquíes y el cultivo de la vid torrontés?",
        "options": [
            "Misiones",
            "Salta",
            "Corrientes",
            "Formosa"
        ],
        "correct": 1,
        "explanation": "Salta y Cafayate se destacan por sus viñedos de altura y cultura calchaquí.",
        "id": "q_g5_sociales_53"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué caudillo salteño defendió la frontera norte contra las invasiones realistas con sus gauchos?",
        "options": [
            "Martín Miguel de Güemes",
            "Facundo Quiroga",
            "Justo José de Urquiza",
            "Estanislao López"
        ],
        "correct": 0,
        "explanation": "El general Martín Miguel de Güemes lideró la 'Guerra Gaucha' frenando los avances realistas.",
        "id": "q_g5_sociales_54"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuáles son los tres poderes que integran la forma republicana de gobierno?",
        "options": [
            "Ejecutivo, Legislativo y Judicial",
            "Presidente, Gobernador e Intendente",
            "Militar, Religioso y Civil",
            "Policía, Bomberos y Maestros"
        ],
        "correct": 0,
        "explanation": "La división de poderes en Ejecutivo, Legislativo y Judicial garantiza el equilibrio republicano.",
        "id": "q_g5_sociales_55"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué pueblo originario del noroeste argentino construyó fortalezas de piedra llamadas 'pucarás'?",
        "options": [
            "Los diaguitas / calchaquíes",
            "Los tehuelches",
            "Los onas (selk'nam)",
            "Los pehuenches"
        ],
        "correct": 0,
        "explanation": "Los pueblos diaguitas eran agricultores sedentarios y construían pucarás defensivos en los cerros.",
        "id": "q_g5_sociales_56"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la sede del Poder Ejecutivo de la Nación Argentina?",
        "options": [
            "El Congreso Nacional",
            "La Casa Rosada",
            "El Palacio de Tribunales",
            "El Cabildo"
        ],
        "correct": 1,
        "explanation": "La Casa de Gobierno o Casa Rosada es la sede del Presidente de la Nación.",
        "id": "q_g5_sociales_57"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué océano baña las costas del litoral marítimo argentino al este?",
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "correct": 1,
        "explanation": "El Mar Argentino forma parte de la plataforma continental del Océano Atlántico Sur.",
        "id": "q_g5_sociales_58"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama la máxima autoridad de un municipio en Argentina?",
        "options": [
            "Gobernador",
            "Intendente",
            "Senador",
            "Juez de paz"
        ],
        "correct": 1,
        "explanation": "El intendente encabeza el departamento ejecutivo municipal.",
        "id": "q_g5_sociales_59"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué provincia se ubica el imponente glaciar Perito Moreno?",
        "options": [
            "Neuquén",
            "Santa Cruz",
            "Mendoza",
            "Chubut"
        ],
        "correct": 1,
        "explanation": "El Glaciar Perito Moreno se encuentra en el Parque Nacional Los Glaciares en Santa Cruz.",
        "id": "q_g5_sociales_60"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién escribió la letra del Himno Nacional Argentino?",
        "options": [
            "Blas Parera",
            "Vicente López y Planes",
            "José Hernández",
            "Esteban Echeverría"
        ],
        "correct": 1,
        "explanation": "Vicente López y Planes compuso la letra poética aprobada por la Asamblea del Año XIII.",
        "id": "q_g5_sociales_61"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué actividades económicas transforman las materias primas en productos elaborados?",
        "options": [
            "Actividades primarias",
            "Actividades secundarias o industriales",
            "Actividades terciarias",
            "Actividades de pesca"
        ],
        "correct": 1,
        "explanation": "El sector secundario abarca las fábricas e industrias manufactureras.",
        "id": "q_g5_sociales_62"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Córdoba?",
        "options": [
            "Villa Carlos Paz",
            "Córdoba",
            "Río Cuarto",
            "Cosquín"
        ],
        "correct": 1,
        "explanation": "La ciudad de Córdoba es la ciudad cabecera y capital de la provincia homónima.",
        "id": "q_g5_sociales_63"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué comunidad originaria del noreste argentino habitaba las orillas de los ríos Paraná y Uruguay?",
        "options": [
            "Los guaraníes",
            "Los mapuches",
            "Los pampas",
            "Los querandíes"
        ],
        "correct": 0,
        "explanation": "Los guaraníes eran agricultores y canoeros que utilizaban la yerba mate y la mandioca.",
        "id": "q_g5_sociales_64"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama la línea imaginaria de latitud cero que divide al planeta en hemisferio Norte y Sur?",
        "options": [
            "Meridiano de Greenwich",
            "El Ecuador",
            "Trópico de Cáncer",
            "Trópico de Capricornio"
        ],
        "correct": 1,
        "explanation": "El paralelo del Ecuador divide a la esfera terrestre en dos hemisferios simétricos.",
        "id": "q_g5_sociales_65"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién fue la destacada patriota nacida en Chuquisaca que luchó como teniente coronela por la independencia?",
        "options": [
            "Juana Azurduy",
            "Mariquita Sánchez de Thompson",
            "Remedios de Escalada",
            "Macacha Güemes"
        ],
        "correct": 0,
        "explanation": "Juana Azurduy lideró guerrillas libertadoras y fue reconocida con el grado militar patriota.",
        "id": "q_g5_sociales_66"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué tipo de mapa muestra la división de países, provincias, capitales y límites fronterizos?",
        "options": [
            "Mapa físico",
            "Mapa político",
            "Mapa temático",
            "Mapa geológico"
        ],
        "correct": 1,
        "explanation": "El mapa político representa las jurisdicciones territoriales administradas por los Estados.",
        "id": "q_g5_sociales_67"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia argentina tiene la mayor producción de limones y caña de azúcar?",
        "options": [
            "Tucumán",
            "San Juan",
            "La Rioja",
            "Santa Cruz"
        ],
        "correct": 0,
        "explanation": "Tucumán es líder mundial en exportación de limones e histórica productora azucarera.",
        "id": "q_g5_sociales_68"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué documento de identidad oficial acredita la ciudadanía de todos los habitantes argentinos?",
        "options": [
            "Cédula escolar",
            "Documento Nacional de Identidad (DNI)",
            "Partida de defunción",
            "Carnet de conducir"
        ],
        "correct": 1,
        "explanation": "El DNI es el documento público e intransferible de identificación ciudadana.",
        "id": "q_g5_sociales_69"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué fecha se conmemora en Argentina el Día del Veterano y de los Caídos en la Guerra de Malvinas?",
        "options": [
            "24 de Marzo",
            "2 de Abril",
            "1 de Mayo",
            "20 de Noviembre"
        ],
        "correct": 1,
        "explanation": "El 2 de abril recuerda el desembarco argentino en las Islas Malvinas de 1982.",
        "id": "q_g5_sociales_70"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué dos grandes ríos confluyen para formar el Río de la Plata?",
        "options": [
            "El Paraná y el Uruguay",
            "El Bermejo y el Pilcomayo",
            "El Colorado y el Negro",
            "El Limay y el Neuquén"
        ],
        "correct": 0,
        "explanation": "La unión de los caudales de los ríos Paraná y Uruguay da origen al Río de la Plata.",
        "id": "q_g5_sociales_71"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién fue el fraile que pronunció el célebre sermón en defensa del primer gobierno en el Cabildo?",
        "options": [
            "Fray Cayetano Rodríguez",
            "Fray Manuel Alberti",
            "Fray Justo Santa María de Oro",
            "Fray Mamerto Esquiú"
        ],
        "correct": 1,
        "explanation": "Manuel Alberti fue sacerdote vocal de la Primera Junta patriótica de Mayo.",
        "id": "q_g5_sociales_72"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia argentina es célebre por las Cataratas del Iguazú y su tierra colorada?",
        "options": [
            "Corrientes",
            "Misiones",
            "Chaco",
            "Entre Ríos"
        ],
        "correct": 1,
        "explanation": "Misiones alberga el Parque Nacional Iguazú y sus suelos ricos en hierro rojizo.",
        "id": "q_g5_sociales_73"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es el instrumento democrático mediante el cual los ciudadanos eligen a sus gobernantes?",
        "options": [
            "La huelga",
            "El voto o sufragio popular",
            "El censo escolar",
            "El referéndum judicial"
        ],
        "correct": 1,
        "explanation": "El sufragio universal, secreto y obligatorio es el pilar de la democracia representativa.",
        "id": "q_g5_sociales_74"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué cereal ancestral fue la base de la alimentación de los pueblos andinos precolombinos?",
        "options": [
            "El trigo",
            "El maíz",
            "El arroz",
            "La avena"
        ],
        "correct": 1,
        "explanation": "El maíz constituía el cultivo sagrado y primordial de las civilizaciones americanas.",
        "id": "q_g5_sociales_75"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué parque nacional argentino preserva el bosque de coníferas milenarias llamadas alerces?",
        "options": [
            "Parque Nacional Talampaya",
            "Parque Nacional Los Alerces",
            "Parque Nacional El Palmar",
            "Parque Nacional Nahuel Huapi"
        ],
        "correct": 1,
        "explanation": "Los Alerces en Chubut protege ejemplares de alerces de más de dos mil años de antigüedad.",
        "id": "q_g5_sociales_76"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama la casa donde se cantó por primera vez el Himno Nacional Argentino?",
        "options": [
            "La Casa de Tucumán",
            "La casa de Mariquita Sánchez de Thompson",
            "El Cabildo de Mayo",
            "La Quinta de Olivos"
        ],
        "correct": 1,
        "explanation": "En la tertulia de Mariquita Sánchez de Thompson resonaron por primera vez las estrofas del himno.",
        "id": "q_g5_sociales_77"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué punto cardinal señala el norte cuando nos paramos mirando hacia donde sale el Sol a nuestra derecha?",
        "options": [
            "El Sur",
            "El Norte",
            "El Oeste",
            "El Este"
        ],
        "correct": 1,
        "explanation": "Si tu brazo derecho señala el Este (salida del Sol), tu frente apunta directamente al Norte.",
        "id": "q_g5_sociales_78"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Mendoza?",
        "options": [
            "San Rafael",
            "Mendoza",
            "Godoy Cruz",
            "Malargüe"
        ],
        "correct": 1,
        "explanation": "La ciudad de Mendoza es la capital política de la provincia cuyana.",
        "id": "q_g5_sociales_79"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué producto tradicional argentino se elabora a base de las hojas secadas del árbol Ilex paraguariensis?",
        "options": [
            "El café",
            "La yerba mate",
            "El té negro",
            "El chocolate"
        ],
        "correct": 1,
        "explanation": "La yerba mate es la infusión identitaria por excelencia de la cultura rioplatense.",
        "id": "q_g5_sociales_80"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién compuso la música orquestal del Himno Nacional Argentino?",
        "options": [
            "Vicente López",
            "Blas Parera",
            "Carlos Gardel",
            "Atahualpa Yupanqui"
        ],
        "correct": 1,
        "explanation": "El músico de origen catalán Blas Parera armonizó la partitura del himno patrio.",
        "id": "q_g5_sociales_81"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia patagónica argentina tiene costa marítima y su capital es Rawson?",
        "options": [
            "Chubut",
            "Santa Cruz",
            "Neuquén",
            "La Pampa"
        ],
        "correct": 0,
        "explanation": "La provincia del Chubut tiene como capital a Rawson y alberga las costas de Puerto Madryn.",
        "id": "q_g5_sociales_82"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál fue el propósito del histórico Cruce de los Andes liderado por San Martín en 1817?",
        "options": [
            "Buscar oro en el Pacífico",
            "Liberar a Chile de las fuerzas coloniales españolas",
            "Fundar nuevas colonias",
            "Comerciar con Europa"
        ],
        "correct": 1,
        "explanation": "San Martín concibió el plan continental para emancipar Chile y asegurar la independencia americana.",
        "id": "q_g5_sociales_83"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué región geográfica argentina abarca las provincias de Mendoza, San Juan y San Luis?",
        "options": [
            "Región Chaqueña",
            "Región de Cuyo",
            "Mesopotamia",
            "Pampa Seca"
        ],
        "correct": 1,
        "explanation": "Cuyo es la región montañosa y de oasis bajo riego del centro-oeste argentino.",
        "id": "q_g5_sociales_84"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué fecha se conmemora el fallecimiento de Manuel Belgrano y el Día de la Bandera?",
        "options": [
            "25 de Mayo",
            "20 de Junio",
            "9 de Julio",
            "17 de Agosto"
        ],
        "correct": 1,
        "explanation": "El 20 de junio de 1820 falleció Belgrano, fecha consagrada como Día de la Bandera.",
        "id": "q_g5_sociales_85"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué río forma el límite natural entre Argentina y la República Oriental del Uruguay?",
        "options": [
            "Río Bermejo",
            "Río Uruguay",
            "Río Colorado",
            "Río Negro"
        ],
        "correct": 1,
        "explanation": "El río Uruguay nace en Brasil y oficia de frontera fluvial internacional con Uruguay.",
        "id": "q_g5_sociales_86"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué animales criaban los pueblos andinos originarios para transporte de carga y abrigo?",
        "options": [
            "Caballos",
            "Llamas y alpacas",
            "Vacas lecheras",
            "Cerdos"
        ],
        "correct": 1,
        "explanation": "Los camélidos sudamericanos (llamas y alpacas) proveían lana, carne y tiro en la Puna.",
        "id": "q_g5_sociales_87"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es la ciudad más poblada de la República Argentina?",
        "options": [
            "Rosario",
            "Córdoba",
            "Ciudad Autónoma de Buenos Aires (CABA)",
            "Mendoza"
        ],
        "correct": 2,
        "explanation": "La Ciudad Autónoma de Buenos Aires es la urbe con mayor densidad y concentración urbana del país.",
        "id": "q_g5_sociales_88"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se denomina la rosa de navegación que indica los cuatro puntos cardinales en un mapa?",
        "options": [
            "Brújula de mano",
            "Rosa de los vientos",
            "Escala gráfica",
            "Coordenada esférica"
        ],
        "correct": 1,
        "explanation": "La rosa de los vientos marca el Norte, Sur, Este y Oeste en la cartografía.",
        "id": "q_g5_sociales_89"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Quién fue el caudillo federal que derrotó a Rosas en la batalla de Caseros y promovió la Constitución de 1853?",
        "options": [
            "Justo José de Urquiza",
            "Juan Manuel de Rosas",
            "Bartolomé Mitre",
            "Domingo Faustino Sarmiento"
        ],
        "correct": 0,
        "explanation": "El general entrerriano Justo José de Urquiza impulsó el Congreso Constituyente en Santa Fe.",
        "id": "q_g5_sociales_90"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia argentina posee ruinas de misiones jesuíticas reconocidas por la UNESCO?",
        "options": [
            "Misiones",
            "Santiago del Estero",
            "Chaco",
            "Catamarca"
        ],
        "correct": 0,
        "explanation": "San Ignacio Miní en Misiones conserva monumentales vestigios de las reducciones jesuítico-guaraníes.",
        "id": "q_g5_sociales_91"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué sector económico incluye a los servicios de salud, educación, comercio y transporte?",
        "options": [
            "Sector primario",
            "Sector secundario",
            "Sector terciario",
            "Sector agrario"
        ],
        "correct": 2,
        "explanation": "El sector terciario reúne las actividades de prestación de servicios a la comunidad.",
        "id": "q_g5_sociales_92"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué canal interoceánico separa la Isla Grande de Tierra del Fuego de otras islas del sur?",
        "options": [
            "Estrecho de Magallanes",
            "Canal Beagle",
            "Paso de Drake",
            "Canal de Panamá"
        ],
        "correct": 1,
        "explanation": "El Canal Beagle baña la bahía de Ushuaia conectando aguas atlánticas y pacíficas.",
        "id": "q_g5_sociales_93"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿En qué fecha se recuerda el Paso a la Inmortalidad del General José de San Martín?",
        "options": [
            "25 de Mayo",
            "20 de Junio",
            "17 de Agosto",
            "12 de Octubre"
        ],
        "correct": 2,
        "explanation": "San Martín falleció el 17 de agosto de 1850 en Boulogne-sur-Mer, Francia.",
        "id": "q_g5_sociales_94"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué provincia argentina es la más pequeña en superficie territorial?",
        "options": [
            "Tucumán",
            "Jujuy",
            "Tierra del Fuego",
            "Misiones"
        ],
        "correct": 0,
        "explanation": "Tucumán cuenta con aproximadamente 22.524 km², siendo la provincia de menor extensión.",
        "id": "q_g5_sociales_95"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cómo se llama la vivienda tradicional de adobe y paja construida por los gauchos de la llanura?",
        "options": [
            "Iglú",
            "Rancho",
            "Choza selvática",
            "Ruca"
        ],
        "correct": 1,
        "explanation": "El rancho pampeano de paredes de barro y techo de paja albergó históricamente a la familia criolla.",
        "id": "q_g5_sociales_96"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué documento emitido por las autoridades escolares comunica formalmente las calificaciones?",
        "options": [
            "Libreta o boletín de calificaciones",
            "DNI escolar",
            "Pasaporte docente",
            "Ficha médica"
        ],
        "correct": 0,
        "explanation": "El boletín de calificaciones registra el desempeño y asistencia del estudiante por trimestre.",
        "id": "q_g5_sociales_97"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es el pico o montaña más alta de América, situado en la provincia de Mendoza?",
        "options": [
            "Volcán Lanín",
            "Cerro Aconcagua",
            "Monte Fitz Roy",
            "Cerro Chaltén"
        ],
        "correct": 1,
        "explanation": "El Cerro Aconcagua se eleva a 6.961 metros sobre el nivel del mar en la cordillera mendocina.",
        "id": "q_g5_sociales_98"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Qué ave carroñera de gran envergadura vuela sobre las cumbres de la Cordillera de los Andes?",
        "options": [
            "El ñandú",
            "El cóndor andino",
            "El hornero",
            "El tucán toco"
        ],
        "correct": 1,
        "explanation": "El cóndor andino es una de las aves voladoras más grandes del planeta y símbolo de la fauna cordillerana.",
        "id": "q_g5_sociales_99"
    },
    {
        "grade": 5,
        "category": "sociales",
        "question": "¿Cuál es el pájaro nacional de la República Argentina, conocido por construir su nido de barro?",
        "options": [
            "El chimango",
            "El hornero",
            "El benteveo",
            "El zorzal colorado"
        ],
        "correct": 1,
        "explanation": "El hornero fue declarado ave nacional en 1928 por su laboriosidad al moldear su nido de arcilla.",
        "id": "q_g5_sociales_100"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué cosa entra al agua y no se moja?",
        "options": [
            "Un pez",
            "La sombra",
            "Un barco",
            "Una esponja"
        ],
        "correct": 1,
        "explanation": "La sombra se proyecta sobre la superficie del agua pero no es materia física, por lo que no se moja.",
        "id": "q_g5_ingenio_41"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el mamífero terrestre más rápido del mundo en carreras cortas?",
        "options": [
            "El león",
            "El guepardo o chita",
            "La gacela",
            "El caballo"
        ],
        "correct": 1,
        "explanation": "El guepardo puede alcanzar velocidades de hasta 115 km/h en aceleraciones breves.",
        "id": "q_g5_ingenio_42"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo numérico: Tengo 4 patas pero no puedo caminar, tengo respaldo pero no puedo hablar. ¿Qué soy?",
        "options": [
            "Una mesa",
            "Una silla",
            "Un gato",
            "Una cama"
        ],
        "correct": 1,
        "explanation": "La silla tiene patas y respaldo pero es un mueble inanimado.",
        "id": "q_g5_ingenio_43"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso dulce rioplatense se elabora hirviendo leche con azúcar y esencia de vainilla hasta espesar?",
        "options": [
            "Flan casero",
            "Dulce de leche",
            "Arroz con leche",
            "Mermelada"
        ],
        "correct": 1,
        "explanation": "El dulce de leche es un manjar tradicional emblema de la gastronomía rioplatense.",
        "id": "q_g5_ingenio_44"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Si en un árbol hay 7 pájaros y un cazador asusta a 2 que salen volando, ¿cuántos quedan en el árbol si los demás se asustan también?",
        "options": [
            "5 pájaros",
            "Ninguno, todos volaron por el susto",
            "2 pájaros",
            "7 pájaros"
        ],
        "correct": 1,
        "explanation": "Al escuchar el ruido y asustarse, todas las aves restantes abandonan el árbol.",
        "id": "q_g5_ingenio_45"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el océano más grande y profundo de todo el planeta Tierra?",
        "options": [
            "Océano Atlántico",
            "Océano Pacífico",
            "Océano Índico",
            "Océano Glacial Ártico"
        ],
        "correct": 1,
        "explanation": "El Océano Pacífico cubre más de 165 millones de km² y alberga la Fosa de las Marianas.",
        "id": "q_g5_ingenio_46"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué mes del año tiene 28 días?",
        "options": [
            "Solo febrero",
            "Febrero en año no bisiesto",
            "Todos los meses tienen al menos 28 días",
            "Ninguno"
        ],
        "correct": 2,
        "explanation": "Todos los meses del año (enero, febrero, marzo, etc.) tienen al menos 28 días.",
        "id": "q_g5_ingenio_47"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso juego de mesa tradicional se juega con fichas blancas y negras sobre un tablero de 64 casillas?",
        "options": [
            "Damas o Ajedrez",
            "Ludo",
            "Monopoly",
            "Ta-te-ti"
        ],
        "correct": 0,
        "explanation": "Tanto el ajedrez como las damas se disputan sobre el damero reglamentario de 8x8 casillas.",
        "id": "q_g5_ingenio_48"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué instrumento musical de cuerdas frotadas con arco es más pequeño y agudo que el violonchelo?",
        "options": [
            "El contrabajo",
            "El violín",
            "El arpa",
            "La guitarra"
        ],
        "correct": 1,
        "explanation": "El violín es el instrumento más pequeño y de registro más agudo de la familia de cuerdas clásicas.",
        "id": "q_g5_ingenio_49"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué se hace más grande cuanto más le quitas?",
        "options": [
            "Un pozo o agujero",
            "Una montaña",
            "Una deuda",
            "Un globo"
        ],
        "correct": 0,
        "explanation": "Al cavar y sacar tierra de un pozo, su diámetro y profundidad se vuelven mayores.",
        "id": "q_g5_ingenio_50"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso dibujante argentino creó el entrañable personaje de historietas 'Mafalda'?",
        "options": [
            "Caloi",
            "Quino (Joaquín Lavado)",
            "Fontanarrosa",
            "Nik"
        ],
        "correct": 1,
        "explanation": "Quino dio vida a Mafalda y sus amigos en 1964, convirtiéndose en clásico mundial.",
        "id": "q_g5_ingenio_51"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Si tenés una caja con fósforos y entrás a una habitación helada donde hay una vela, una estufa de leña y una lámpara de queroseno, ¿qué encendés primero?",
        "options": [
            "La vela",
            "La estufa",
            "El fósforo",
            "La lámpara"
        ],
        "correct": 2,
        "explanation": "Para poder encender cualquiera de los tres artefactos primero debés prender el fósforo.",
        "id": "q_g5_ingenio_52"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el único mamífero volador con alas membranosas reales?",
        "options": [
            "La ardilla voladora",
            "El murciélago",
            "El colibrí",
            "El pez volador"
        ],
        "correct": 1,
        "explanation": "Los murciélagos (quirópteros) son los únicos mamíferos con capacidad de vuelo activo sustentado.",
        "id": "q_g5_ingenio_53"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Oro parece, plata no es. Quien no lo adivine, bien tonto es. ¿Qué es?",
        "options": [
            "La naranja",
            "El plátano o banana",
            "La manzana",
            "El limón"
        ],
        "correct": 1,
        "explanation": "El juego fonético de 'plata no es' suena idéntico a 'plátano'.",
        "id": "q_g5_ingenio_54"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué invento permite saber la hora observando la sombra proyectada por una varilla al sol?",
        "options": [
            "Reloj de arena",
            "Reloj de sol (gnomon)",
            "Clepsidra de agua",
            "Cronómetro"
        ],
        "correct": 1,
        "explanation": "El reloj solar utiliza el movimiento aparente del Sol y la sombra del gnomon sobre una escala.",
        "id": "q_g5_ingenio_55"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el animal más grande que ha habitado jamás la Tierra, superando incluso a los dinosaurios?",
        "options": [
            "El tiburón blanco",
            "La ballena azul",
            "El elefante africano",
            "El tiranosaurio rex"
        ],
        "correct": 1,
        "explanation": "La ballena azul puede alcanzar hasta 30 metros de largo y pesar cerca de 180 toneladas.",
        "id": "q_g5_ingenio_56"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Blanquita por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?",
        "options": [
            "La manzana",
            "La pera",
            "La sandía",
            "La palta"
        ],
        "correct": 1,
        "explanation": "La frase 'espera' encierra el nombre de la fruta: la pera.",
        "id": "q_g5_ingenio_57"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cómo se llama la emblemática torre de hierro construida en París para la Exposición Universal de 1889?",
        "options": [
            "Torre de Pisa",
            "Torre Eiffel",
            "Big Ben",
            "Torre de Londres"
        ],
        "correct": 1,
        "explanation": "Diseñada por Gustave Eiffel, la Torre Eiffel es el ícono indiscutido de Francia.",
        "id": "q_g5_ingenio_58"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Si un tren eléctrico viaja hacia el norte a 100 km/h y el viento sopla hacia el sur, ¿hacia dónde va el humo?",
        "options": [
            "Hacia el sur",
            "Hacia el norte",
            "Los trenes eléctricos no despiden humo",
            "Hacia arriba"
        ],
        "correct": 2,
        "explanation": "Los trenes eléctricos funcionan con corriente y motores eléctricos; no producen humo.",
        "id": "q_g5_ingenio_59"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué alimento dulce elaboran las abejas a partir del néctar de las flores?",
        "options": [
            "Jalea real",
            "Miel",
            "Polen seco",
            "Melaza"
        ],
        "correct": 1,
        "explanation": "La miel es la sustancia dulce natural que las abejas sintetizan y conservan en panales.",
        "id": "q_g5_ingenio_60"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué tiene orejas pero no puede escuchar?",
        "options": [
            "Una taza",
            "Un conejo sordo",
            "Un zapato",
            "Una mesa"
        ],
        "correct": 0,
        "explanation": "Las asas redondeadas de las tazas de cerámica se llaman popularmente orejas.",
        "id": "q_g5_ingenio_61"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el hueso con forma de caracol que interviene en la audición dentro del oído interno?",
        "options": [
            "Yunque",
            "Cóclea o caracol",
            "Martillo",
            "Estribo"
        ],
        "correct": 1,
        "explanation": "La cóclea transforma las vibraciones acústicas mecánicas en señales nerviosas al cerebro.",
        "id": "q_g5_ingenio_62"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué baile popular argentino con raíces afroamericanas nació en los barrios de Buenos Aires a fines del siglo XIX?",
        "options": [
            "Chacarera",
            "Tango",
            "Zamba",
            "Chamame"
        ],
        "correct": 1,
        "explanation": "El tango se gestó en los arrabales y puertos rioplatenses, siendo patrimonio de la humanidad.",
        "id": "q_g5_ingenio_63"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué tiene cuello pero no tiene cabeza?",
        "options": [
            "Una camisa o una botella",
            "Una jirafa",
            "Una serpiente",
            "Una bufanda"
        ],
        "correct": 0,
        "explanation": "Las botellas y las camisas poseen cuello estructural sin tener cabeza viva.",
        "id": "q_g5_ingenio_64"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué color se obtiene al mezclar cantidades iguales de azul y amarillo?",
        "options": [
            "Violeta",
            "Verde",
            "Naranja",
            "Marrón"
        ],
        "correct": 1,
        "explanation": "El verde es el color secundario resultante de la mezcla de los primarios azul y amarillo.",
        "id": "q_g5_ingenio_65"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el río más largo del planeta Tierra?",
        "options": [
            "Río Nilo",
            "Río Amazonas",
            "Río Misisipi",
            "Río Danubio"
        ],
        "correct": 1,
        "explanation": "Estudios satelitales modernos confirman al Amazonas como el río de mayor longitud y caudal.",
        "id": "q_g5_ingenio_66"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Tiene dientes y no come, tiene cabeza y no es hombre. ¿Qué es?",
        "options": [
            "Un peine",
            "El ajo",
            "Un tenedor",
            "Un serrucho"
        ],
        "correct": 1,
        "explanation": "Una cabeza de ajo está formada por varios 'dientes' de ajo.",
        "id": "q_g5_ingenio_67"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué célebre pintor italiano pintó la enigmática 'Mona Lisa' (La Gioconda)?",
        "options": [
            "Miguel Ángel",
            "Leonardo da Vinci",
            "Rafael",
            "Donatello"
        ],
        "correct": 1,
        "explanation": "Leonardo da Vinci pintó la obra cumbre renacentista que se exhibe en el Museo del Louvre.",
        "id": "q_g5_ingenio_68"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Si tenés 6 manzanas y te comés 2 y media, ¿cuántas manzanas completas te quedan intactas?",
        "options": [
            "4 manzanas",
            "3 manzanas",
            "3 y media",
            "2 manzanas"
        ],
        "correct": 1,
        "explanation": "Comiste 2 enteras y parte de una tercera; por lo tanto, intactas y completas quedan 3 manzanas.",
        "id": "q_g5_ingenio_69"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué gas hace que los globos de fiesta floten en el aire al ser más liviano que la atmósfera?",
        "options": [
            "Oxígeno",
            "Helio",
            "Argón",
            "Nitrógeno"
        ],
        "correct": 1,
        "explanation": "El helio posee menor densidad que el aire, generando una fuerza de empuje hacia arriba.",
        "id": "q_g5_ingenio_70"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué cosa vuela sin alas y llora sin tener ojos?",
        "options": [
            "Un fantasma",
            "La nube",
            "El viento",
            "Un avión de papel"
        ],
        "correct": 1,
        "explanation": "La nube surca el cielo con el viento y al precipitar 'llora' en forma de lluvia.",
        "id": "q_g5_ingenio_71"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el deporte nacional oficial de la República Argentina por ley?",
        "options": [
            "Fútbol",
            "Pato",
            "Polo",
            "Automovilismo"
        ],
        "correct": 1,
        "explanation": "El pato fue declarado deporte nacional argentino en 1953 por su tradición gaucha a caballo.",
        "id": "q_g5_ingenio_72"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuántas cuerdas suele tener una guitarra clásica estándar?",
        "options": [
            "4 cuerdas",
            "6 cuerdas",
            "8 cuerdas",
            "12 cuerdas"
        ],
        "correct": 1,
        "explanation": "La guitarra criolla española estándar posee 6 cuerdas afinadas (Mi, La, Re, Sol, Si, Mi).",
        "id": "q_g5_ingenio_73"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué sube cuando la lluvia cae?",
        "options": [
            "El paraguas",
            "El barro",
            "La temperatura",
            "Las hojas"
        ],
        "correct": 0,
        "explanation": "Abrimos y elevamos el paraguas sobre nosotros cuando empieza a llover.",
        "id": "q_g5_ingenio_74"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué monumento histórico blanco en forma de pirámide trunca se ubica en el centro de la Plaza de Mayo?",
        "options": [
            "El Obelisco",
            "La Pirámide de Mayo",
            "El Monumento a Belgrano",
            "La Fuente de las Nereidas"
        ],
        "correct": 1,
        "explanation": "La Pirámide de Mayo inaugurada en 1811 conmemora el primer aniversario de la Revolución.",
        "id": "q_g5_ingenio_75"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es la montaña rusa natural de hielo más famosa de Santa Cruz que rompe periódicamente?",
        "options": [
            "Glaciar Upsala",
            "Glaciar Perito Moreno",
            "Glaciar Viedma",
            "Glaciar Spegazzini"
        ],
        "correct": 1,
        "explanation": "El Perito Moreno avanza sobre el Brazo Rico del lago Argentino formando un dique que colapsa con gran estruendo.",
        "id": "q_g5_ingenio_76"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué palabra de cuatro letras tiene muchas letras adentro?",
        "options": [
            "Libro",
            "Caja",
            "Sopa",
            "Letra"
        ],
        "correct": 0,
        "explanation": "La palabra 'L-I-B-R-O' tiene 4 letras y contiene miles de letras impresas en sus páginas.",
        "id": "q_g5_ingenio_77"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el felino más grande que habita en el continente americano, protegido en la selva argentina?",
        "options": [
            "El puma",
            "El yaguareté",
            "El ocelote",
            "El gato montés"
        ],
        "correct": 1,
        "explanation": "El yaguareté (Panthera onca) es Monumento Natural Nacional y el mayor félido de América.",
        "id": "q_g5_ingenio_78"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Si un avión cae exactamente en la frontera entre Argentina y Chile, ¿dónde entierran a los sobrevivientes?",
        "options": [
            "En Argentina",
            "En Chile",
            "En ningún lado, a los sobrevivientes no se los entierra",
            "En el país de origen"
        ],
        "correct": 2,
        "explanation": "Los sobrevivientes están vivos; no se los entierra.",
        "id": "q_g5_ingenio_79"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué instrumento tradicional de percusión de cuero de cabra se usa en el folclore argentino?",
        "options": [
            "La pandereta",
            "El bombo legüero",
            "El xilofón",
            "El timbal"
        ],
        "correct": 1,
        "explanation": "El bombo legüero se llama así porque su grave sonido puede oírse a varias leguas de distancia.",
        "id": "q_g5_ingenio_80"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué cosa pasa por delante del sol sin proyectar sombra?",
        "options": [
            "Un avión",
            "El viento",
            "Un pájaro",
            "Una nube densa"
        ],
        "correct": 1,
        "explanation": "El viento es aire en movimiento y totalmente transparente a los rayos solares.",
        "id": "q_g5_ingenio_81"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué invento médico permite ver el interior de los huesos mediante radiación electromagnética?",
        "options": [
            "Ecografía",
            "Rayos X (radiografía)",
            "Termometría",
            "Endoscopía"
        ],
        "correct": 1,
        "explanation": "Wilhelm Röntgen descubrió los Rayos X en 1895, posibilitando ver el esqueleto humano.",
        "id": "q_g5_ingenio_82"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cómo se llama la galaxia espiral en la que se encuentra nuestro Sistema Solar?",
        "options": [
            "Andrómeda",
            "Vía Láctea",
            "Sombrero",
            "Triángulo"
        ],
        "correct": 1,
        "explanation": "La Vía Láctea contiene cientos de miles de millones de estrellas, incluido el Sol.",
        "id": "q_g5_ingenio_83"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué instrumento se toca soplando pero no tiene boquilla ni orificios?",
        "options": [
            "La flauta",
            "El silbato",
            "El pito",
            "El molinillo de viento o las velas de cumpleaños"
        ],
        "correct": 3,
        "explanation": "Las velas de la torta de cumpleaños se apagan de un soplo festivo.",
        "id": "q_g5_ingenio_84"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es la capital del estado de Brasil, famosa por sus edificios con diseño futurista?",
        "options": [
            "Río de Janeiro",
            "Brasilia",
            "San Pablo",
            "Salvador de Bahía"
        ],
        "correct": 1,
        "explanation": "Brasilia fue planificada por Oscar Niemeyer y Lúcio Costa e inaugurada en 1960.",
        "id": "q_g5_ingenio_85"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué juego tradicional de puntería consiste en embocar una bola de madera agujereada en un mango mediante un cordel?",
        "options": [
            "El trompo",
            "El balero",
            "El yo-yo",
            "La rayuela"
        ],
        "correct": 1,
        "explanation": "El balero es un clásico juego criollo de habilidad y coordinación motriz.",
        "id": "q_g5_ingenio_86"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: Aunque tengo cuatro patas, no puedo andar; llevo la comida a cuestas y no puedo masticar. ¿Qué soy?",
        "options": [
            "El caballo",
            "La mesa de comedor",
            "La heladera",
            "El mozo"
        ],
        "correct": 1,
        "explanation": "La mesa tiene patas y sostiene la comida servida sobre su mantel.",
        "id": "q_g5_ingenio_87"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famosa bebida caliente originaria de los aztecas se elabora moliendo semillas de cacao?",
        "options": [
            "Té verde",
            "Chocolate",
            "Café torrado",
            "Mate cocido"
        ],
        "correct": 1,
        "explanation": "El xocolatl mesoamericano era una infusión ceremonial preparada con cacao molido.",
        "id": "q_g5_ingenio_88"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el continente más frío, seco y ventoso del planeta, cubierto casi por completo de hielo?",
        "options": [
            "Oceanía",
            "La Antártida",
            "Europa",
            "Asia"
        ],
        "correct": 1,
        "explanation": "La Antártida contiene el 90% del hielo del mundo y registra las temperaturas más bajas registradas.",
        "id": "q_g5_ingenio_89"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué tiene ojos y no puede ver?",
        "options": [
            "Una papa (o las agujas)",
            "Un pez ciego",
            "Una estatua",
            "Una ventana"
        ],
        "correct": 0,
        "explanation": "Los brotes redondos de las papas o tubérculos se denominan popularmente 'ojos'.",
        "id": "q_g5_ingenio_90"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué famoso superhéroe de historietas fue creado por Bob Kane y Bill Finger y patrulla Ciudad Gótica?",
        "options": [
            "Superman",
            "Batman",
            "Spider-Man",
            "Iron Man"
        ],
        "correct": 1,
        "explanation": "Batman (Bruno Díaz / Bruce Wayne) debutó en Detective Comics en 1939.",
        "id": "q_g5_ingenio_91"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es el árbol nacional de la República Argentina, cuya flor roja es la Flor Nacional?",
        "options": [
            "El jacarandá",
            "El ceibo",
            "El algarrobo",
            "El quebracho"
        ],
        "correct": 1,
        "explanation": "La flor del ceibo fue consagrada como Flor Nacional Argentina en 1942.",
        "id": "q_g5_ingenio_92"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué sube y baja constantemente pero siempre permanece en el mismo lugar?",
        "options": [
            "Un ascensor",
            "La escalera",
            "El avión",
            "La pelota"
        ],
        "correct": 1,
        "explanation": "Las escaleras fijas permiten subir y bajar peldaños manteniéndose en su sitio.",
        "id": "q_g5_ingenio_93"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué tipo de instrumento musical es la batería?",
        "options": [
            "Instrumento de cuerda",
            "Instrumento de viento",
            "Instrumento de percusión",
            "Instrumento electroacústico"
        ],
        "correct": 2,
        "explanation": "La batería es un conjunto de tambores y platillos que se tocan percutiendo con baquetas.",
        "id": "q_g5_ingenio_94"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Cuál es la ciudad italiana construida sobre una laguna con más de 400 puentes y canales en lugar de calles?",
        "options": [
            "Roma",
            "Venecia",
            "Florencia",
            "Milán"
        ],
        "correct": 1,
        "explanation": "Venecia es famosa por sus canales acuáticos donde el transporte se realiza en góndolas y lanchas.",
        "id": "q_g5_ingenio_95"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué pesa más: un kilogramo de plumas o un kilogramo de plomo?",
        "options": [
            "El plomo",
            "Las plumas",
            "Pesan exactamente lo mismo (ambos son 1 kg)",
            "Depende del clima"
        ],
        "correct": 2,
        "explanation": "Al tener ambos la misma masa (un kilogramo), su peso bajo la misma gravedad es idéntico.",
        "id": "q_g5_ingenio_96"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué alimento fermentado de la leche con bacterias saludables consumimos en vasitos con frutas o cereales?",
        "options": [
            "Queso rallado",
            "Yogur",
            "Manteca",
            "Crema de leche"
        ],
        "correct": 1,
        "explanation": "El yogur se obtiene fermentando leche con cultivos de lactobacilos benéficos.",
        "id": "q_g5_ingenio_97"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Qué gran muralla de miles de kilómetros de largo construida con piedra y ladrillo se ubica en Asia?",
        "options": [
            "La Muralla de Berlín",
            "La Gran Muralla China",
            "El Muro de Adriano",
            "La Muralla de Troya"
        ],
        "correct": 1,
        "explanation": "La Gran Muralla China fue erigida a lo largo de siglos para proteger las fronteras del imperio.",
        "id": "q_g5_ingenio_98"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "Acertijo: ¿Cuál es el animal que come con la cola?",
        "options": [
            "El mono",
            "Ninguno, todos los animales comen con la boca (sin sacarse la cola)",
            "El gato",
            "El cocodrilo"
        ],
        "correct": 1,
        "explanation": "Es una clásica adivinanza: ningún animal se saca la cola al momento de comer.",
        "id": "q_g5_ingenio_99"
    },
    {
        "grade": 5,
        "category": "ingenio",
        "question": "¿Quién inventó la bombilla eléctrica incandescente de larga duración y el fonógrafo?",
        "options": [
            "Nikola Tesla",
            "Thomas Alva Edison",
            "Alexander Graham Bell",
            "Isaac Newton"
        ],
        "correct": 1,
        "explanation": "Thomas Edison perfeccionó y patentó en 1879 la lámpara incandescente de uso masivo.",
        "id": "q_g5_ingenio_100"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 10% de 450?",
        "options": [
            "4,5",
            "45",
            "450",
            "90"
        ],
        "correct": 1,
        "explanation": "Calcular el 10% equivale a dividir por 10: 450 ÷ 10 = 45.",
        "id": "q_g6_matematica_41"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es la raíz cuadrada de 81 (√81)?",
        "options": [
            "7",
            "8",
            "9",
            "18"
        ],
        "correct": 2,
        "explanation": "La raíz cuadrada de 81 es 9 porque 9 × 9 = 81.",
        "id": "q_g6_matematica_42"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si multiplicás las fracciones 2/3 × 3/5, ¿qué resultado simplificado obtenés?",
        "options": [
            "5/8",
            "2/5",
            "6/15",
            "1/2"
        ],
        "correct": 1,
        "explanation": "Multiplicando numeradores y denominadores: (2 × 3)/(3 × 5) = 6/15; simplificando por 3 queda 2/5.",
        "id": "q_g6_matematica_43"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto suman los ángulos interiores de cualquier triángulo?",
        "options": [
            "90°",
            "180°",
            "270°",
            "360°"
        ],
        "correct": 1,
        "explanation": "En geometría euclidiana, la suma de los tres ángulos interiores de todo triángulo es exactamente 180°.",
        "id": "q_g6_matematica_44"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el mínimo común múltiplo (m.c.m.) entre 4 y 6?",
        "options": [
            "12",
            "24",
            "2",
            "8"
        ],
        "correct": 0,
        "explanation": "Los múltiplos positivos de 4 son 4, 8, 12... y los de 6 son 6, 12... El menor compartido es 12.",
        "id": "q_g6_matematica_45"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 2 elevado a la cuarta potencia (2⁴)?",
        "options": [
            "8",
            "12",
            "16",
            "32"
        ],
        "correct": 2,
        "explanation": "2⁴ = 2 × 2 × 2 × 2 = 16.",
        "id": "q_g6_matematica_46"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si 3 fotocopias cuestan $60, ¿cuánto costarán 12 fotocopias de la misma tarifa?",
        "options": [
            "$180",
            "$200",
            "$240",
            "$300"
        ],
        "correct": 2,
        "explanation": "Por regla de tres: cada fotocopia cuesta $60 ÷ 3 = $20; 12 fotocopias cuestan 12 × $20 = $240.",
        "id": "q_g6_matematica_47"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué tipo de paralelogramo tiene sus cuatro lados iguales y sus cuatro ángulos rectos (de 90°)?",
        "options": [
            "Rombo",
            "Cuadrado",
            "Rectángulo",
            "Romboide"
        ],
        "correct": 1,
        "explanation": "El cuadrado cumple ambas condiciones: lados congruentes y cuatro ángulos de 90°.",
        "id": "q_g6_matematica_48"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de sumar 1/4 + 1/2?",
        "options": [
            "2/6",
            "3/4",
            "1 entero",
            "2/4"
        ],
        "correct": 1,
        "explanation": "1/2 equivale a 2/4. Sumando con el mismo denominador: 1/4 + 2/4 = 3/4.",
        "id": "q_g6_matematica_49"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 12,5 × 100?",
        "options": [
            "125",
            "1.250",
            "12.500",
            "1,25"
        ],
        "correct": 1,
        "explanation": "Al multiplicar por 100 corremos la coma decimal dos lugares a la derecha: 1.250.",
        "id": "q_g6_matematica_50"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el divisor común mayor (d.c.m.) entre 18 y 24?",
        "options": [
            "2",
            "3",
            "6",
            "9"
        ],
        "correct": 2,
        "explanation": "Los divisores comunes son 1, 2, 3 y 6; el mayor de ellos es 6.",
        "id": "q_g6_matematica_51"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cómo se llaman dos ángulos cuya suma es exactamente 90°?",
        "options": [
            "Suplementarios",
            "Complementarios",
            "Adyacentes llanos",
            "Opuestos por el vértice"
        ],
        "correct": 1,
        "explanation": "Dos ángulos son complementarios cuando su adición totaliza 90°.",
        "id": "q_g6_matematica_52"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 50% de 380?",
        "options": [
            "150",
            "190",
            "200",
            "180"
        ],
        "correct": 1,
        "explanation": "El 50% representa exactamente la mitad: 380 ÷ 2 = 190.",
        "id": "q_g6_matematica_53"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el área de un triángulo cuya base mide 10 cm y su altura mide 6 cm?",
        "options": [
            "60 cm²",
            "30 cm²",
            "16 cm²",
            "20 cm²"
        ],
        "correct": 1,
        "explanation": "Área = (base × altura) ÷ 2 = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².",
        "id": "q_g6_matematica_54"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál de estos números es divisible por 3?",
        "options": [
            "124",
            "235",
            "342",
            "413"
        ],
        "correct": 2,
        "explanation": "Un número es divisible por 3 si la suma de sus cifras es múltiplo de 3: 3 + 4 + 2 = 9 (múltiplo de 3).",
        "id": "q_g6_matematica_55"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el valor posicional del 8 en el número 54,82?",
        "options": [
            "8 centésimos",
            "8 décimos",
            "8 unidades",
            "8 milésimos"
        ],
        "correct": 1,
        "explanation": "El primer dígito a la derecha de la coma corresponde a los décimos: 0,8.",
        "id": "q_g6_matematica_56"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 3³ (3 al cubo)?",
        "options": [
            "9",
            "18",
            "27",
            "81"
        ],
        "correct": 2,
        "explanation": "3 al cubo significa 3 × 3 × 3 = 9 × 3 = 27.",
        "id": "q_g6_matematica_57"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Dos ángulos son suplementarios si la suma de sus amplitudes es igual a:",
        "options": [
            "90°",
            "180°",
            "360°",
            "45°"
        ],
        "correct": 1,
        "explanation": "Los ángulos suplementarios suman entre ambos un ángulo llano de 180°.",
        "id": "q_g6_matematica_58"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si dividís la fracción 3/4 ÷ 2/5, ¿cuál es el resultado?",
        "options": [
            "6/20",
            "15/8",
            "5/8",
            "8/15"
        ],
        "correct": 1,
        "explanation": "Para dividir fracciones se multiplica la primera por la inversa de la segunda: 3/4 × 5/2 = 15/8.",
        "id": "q_g6_matematica_59"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el perímetro de un hexágono regular cuyos lados miden 5 cm cada uno?",
        "options": [
            "25 cm",
            "30 cm",
            "35 cm",
            "36 cm"
        ],
        "correct": 1,
        "explanation": "Tiene 6 lados de igual medida: 6 × 5 cm = 30 cm.",
        "id": "q_g6_matematica_60"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es el 20% de 500?",
        "options": [
            "50",
            "100",
            "150",
            "200"
        ],
        "correct": 1,
        "explanation": "El 20% es la quinta parte: 500 ÷ 5 = 100 (o 500 × 0,20 = 100).",
        "id": "q_g6_matematica_61"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué número decimal resulta de dividir 3 entre 4 (3/4)?",
        "options": [
            "0,34",
            "0,75",
            "0,3",
            "0,25"
        ],
        "correct": 1,
        "explanation": "3 ÷ 4 = 0,75.",
        "id": "q_g6_matematica_62"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es la raíz cúbica de 27 (∛27)?",
        "options": [
            "3",
            "9",
            "6",
            "1"
        ],
        "correct": 0,
        "explanation": "3 × 3 × 3 = 27, por lo tanto ∛27 = 3.",
        "id": "q_g6_matematica_63"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuántos metros cuadrados (m²) tiene una hectárea (ha)?",
        "options": [
            "100 m²",
            "1.000 m²",
            "10.000 m²",
            "100.000 m²"
        ],
        "correct": 2,
        "explanation": "Una hectárea equivale a un cuadrado de 100 metros de lado: 100 × 100 = 10.000 m².",
        "id": "q_g6_matematica_64"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "En una bolsa hay 3 bolitas rojas y 7 azules. ¿Cuál es la probabilidad de sacar una roja al azar?",
        "options": [
            "3/7",
            "3/10",
            "7/10",
            "1/3"
        ],
        "correct": 1,
        "explanation": "Casos favorables = 3; total de casos posibles = 10. La probabilidad es 3/10 (30%).",
        "id": "q_g6_matematica_65"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto suman los cuatro ángulos interiores de cualquier cuadrilátero?",
        "options": [
            "180°",
            "270°",
            "360°",
            "540°"
        ],
        "correct": 2,
        "explanation": "Todo cuadrilátero puede dividirse en dos triángulos: 2 × 180° = 360°.",
        "id": "q_g6_matematica_66"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de 15,6 - 8,25?",
        "options": [
            "7,35",
            "7,45",
            "7,15",
            "8,35"
        ],
        "correct": 0,
        "explanation": "Alineando las comas: 15,60 - 8,25 = 7,35.",
        "id": "q_g6_matematica_67"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el siguiente número primo mayor que 11?",
        "options": [
            "12",
            "13",
            "15",
            "17"
        ],
        "correct": 1,
        "explanation": "13 solo es divisible por 1 y por sí mismo.",
        "id": "q_g6_matematica_68"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el área de un rombo cuya diagonal mayor mide 8 cm y su diagonal menor 6 cm?",
        "options": [
            "48 cm²",
            "24 cm²",
            "14 cm²",
            "28 cm²"
        ],
        "correct": 1,
        "explanation": "Área = (D × d) ÷ 2 = (8 × 6) ÷ 2 = 48 ÷ 2 = 24 cm².",
        "id": "q_g6_matematica_69"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 5! (factorial de 5: 5 × 4 × 3 × 2 × 1)?",
        "options": [
            "60",
            "100",
            "120",
            "150"
        ],
        "correct": 2,
        "explanation": "5 × 4 = 20; 20 × 3 = 60; 60 × 2 = 120; 120 × 1 = 120.",
        "id": "q_g6_matematica_70"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué porcentaje representa la fracción 1/5?",
        "options": [
            "10%",
            "15%",
            "20%",
            "25%"
        ],
        "correct": 2,
        "explanation": "1 ÷ 5 = 0,20 = 20%.",
        "id": "q_g6_matematica_71"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Un automóvil viaja a una velocidad constante de 90 km/h. ¿Qué distancia recorre en 3 horas?",
        "options": [
            "180 km",
            "270 km",
            "300 km",
            "240 km"
        ],
        "correct": 1,
        "explanation": "Distancia = velocidad × tiempo = 90 km/h × 3 h = 270 km.",
        "id": "q_g6_matematica_72"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de restar 5/6 - 1/3?",
        "options": [
            "4/3",
            "1/2",
            "3/6",
            "1/3"
        ],
        "correct": 1,
        "explanation": "1/3 equivale a 2/6. Restamos: 5/6 - 2/6 = 3/6, que simplificado da 1/2.",
        "id": "q_g6_matematica_73"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cómo se denomina la recta que corta a una circunferencia en exactamente dos puntos?",
        "options": [
            "Tangente",
            "Secante",
            "Radio",
            "Cuerda exterior"
        ],
        "correct": 1,
        "explanation": "La recta secante interseca a la curva en dos puntos.",
        "id": "q_g6_matematica_74"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 0,08 × 10?",
        "options": [
            "0,008",
            "0,8",
            "8",
            "80"
        ],
        "correct": 1,
        "explanation": "Corriendo la coma un lugar a la derecha: 0,8.",
        "id": "q_g6_matematica_75"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el volumen de un cubo cuyas aristas miden 3 cm cada una?",
        "options": [
            "9 cm³",
            "18 cm³",
            "27 cm³",
            "54 cm³"
        ],
        "correct": 2,
        "explanation": "Volumen = arista³ = 3 × 3 × 3 = 27 cm³.",
        "id": "q_g6_matematica_76"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el número que sumado con 47 da como resultado 105?",
        "options": [
            "52",
            "58",
            "62",
            "68"
        ],
        "correct": 1,
        "explanation": "105 - 47 = 58.",
        "id": "q_g6_matematica_77"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si un pantalón de $1.200 tiene un descuento del 25%, ¿cuánto dinero se descuenta?",
        "options": [
            "$250",
            "$300",
            "$400",
            "$600"
        ],
        "correct": 1,
        "explanation": "El 25% de 1.200 es la cuarta parte: 1.200 ÷ 4 = $300.",
        "id": "q_g6_matematica_78"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cómo se llama el triángulo que tiene un ángulo obtuso (mayor a 90°)?",
        "options": [
            "Acutángulo",
            "Rectángulo",
            "Obtusángulo",
            "Equilátero"
        ],
        "correct": 2,
        "explanation": "El triángulo obtusángulo posee un ángulo interior obtuso.",
        "id": "q_g6_matematica_79"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la operación combinada: 6 + 4 × 5?",
        "options": [
            "50",
            "26",
            "30",
            "24"
        ],
        "correct": 1,
        "explanation": "Por jerarquía de operaciones, primero se resuelve la multiplicación: 4 × 5 = 20; luego 6 + 20 = 26.",
        "id": "q_g6_matematica_80"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuántos centímetros cúbicos (cm³) equivalen a 1 litro de agua pura?",
        "options": [
            "10 cm³",
            "100 cm³",
            "1.000 cm³",
            "10.000 cm³"
        ],
        "correct": 2,
        "explanation": "1 litro equivale exactamente a 1 decímetro cúbico (1 dm³), que son 1.000 cm³.",
        "id": "q_g6_matematica_81"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál de estos números es primo?",
        "options": [
            "21",
            "27",
            "29",
            "33"
        ],
        "correct": 2,
        "explanation": "29 no tiene otros divisores además de 1 y 29.",
        "id": "q_g6_matematica_82"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si en un mapa a escala 1:100.000 dos ciudades distan 3 cm, ¿cuál es la distancia real en kilómetros?",
        "options": [
            "1 km",
            "3 km",
            "30 km",
            "300 km"
        ],
        "correct": 1,
        "explanation": "3 cm × 100.000 = 300.000 cm = 3.000 m = 3 km.",
        "id": "q_g6_matematica_83"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 10⁴ (diez a la cuarta)?",
        "options": [
            "1.000",
            "10.000",
            "100.000",
            "40"
        ],
        "correct": 1,
        "explanation": "10⁴ es un 1 seguido de cuatro ceros: 10.000.",
        "id": "q_g6_matematica_84"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el promedio aritmético entre las notas 7, 8 y 9?",
        "options": [
            "7,5",
            "8",
            "8,5",
            "9"
        ],
        "correct": 1,
        "explanation": "Suma = 7 + 8 + 9 = 24; dividido entre 3: 24 ÷ 3 = 8.",
        "id": "q_g6_matematica_85"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué polígono regular tiene sus ángulos interiores midiendo 108° cada uno?",
        "options": [
            "Cuadrado",
            "Pentágono regular",
            "Hexágono regular",
            "Octógono regular"
        ],
        "correct": 1,
        "explanation": "En un pentágono regular la suma interior es 540°; dividida entre 5 da 108°.",
        "id": "q_g6_matematica_86"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 4,5 ÷ 0,5?",
        "options": [
            "9",
            "45",
            "0,9",
            "2,25"
        ],
        "correct": 0,
        "explanation": "Dividir entre 0,5 equivale a multiplicar por 2: 4,5 × 2 = 9.",
        "id": "q_g6_matematica_87"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué número representa la cifra romana 'XC'?",
        "options": [
            "40",
            "60",
            "90",
            "110"
        ],
        "correct": 2,
        "explanation": "X (10) antepuesta a C (100) resta diez: 100 - 10 = 90.",
        "id": "q_g6_matematica_88"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es la superficie de un círculo cuyo radio mide 2 cm (usando π ≈ 3,14)?",
        "options": [
            "6,28 cm²",
            "12,56 cm²",
            "18,84 cm²",
            "25,12 cm²"
        ],
        "correct": 1,
        "explanation": "Área = π × r² = 3,14 × (2 cm)² = 3,14 × 4 = 12,56 cm².",
        "id": "q_g6_matematica_89"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el inverso multiplicativo o recíproco de la fracción 4/7?",
        "options": [
            "-4/7",
            "7/4",
            "1/4",
            "7/1"
        ],
        "correct": 1,
        "explanation": "El inverso multiplicativo invierte numerador y denominador: 7/4.",
        "id": "q_g6_matematica_90"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 100 - 4 × 5?",
        "options": [
            "480",
            "80",
            "90",
            "20"
        ],
        "correct": 1,
        "explanation": "Primero se calcula 4 × 5 = 20; luego 100 - 20 = 80.",
        "id": "q_g6_matematica_91"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "Si un dado equilibrado de 6 caras se lanza una vez, ¿cuál es la probabilidad de sacar un número par?",
        "options": [
            "1/6",
            "2/6",
            "3/6 (o 1/2)",
            "4/6"
        ],
        "correct": 2,
        "explanation": "Los pares son 2, 4 y 6 (3 casos favorables de 6 posibles: 3/6 = 1/2).",
        "id": "q_g6_matematica_92"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el valor absoluto de -15?",
        "options": [
            "-15",
            "0",
            "15",
            "1/15"
        ],
        "correct": 2,
        "explanation": "El valor absoluto representa la distancia al cero sin signo: |-15| = 15.",
        "id": "q_g6_matematica_93"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto mide cada ángulo de un triángulo equilátero?",
        "options": [
            "45°",
            "60°",
            "90°",
            "120°"
        ],
        "correct": 1,
        "explanation": "Al ser equilátero, sus tres ángulos son iguales: 180° ÷ 3 = 60°.",
        "id": "q_g6_matematica_94"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué porcentaje representa la mitad de una cuarta parte?",
        "options": [
            "50%",
            "25%",
            "12,5%",
            "6,25%"
        ],
        "correct": 2,
        "explanation": "La cuarta parte es 25%; su mitad es 12,5% (1/8 del total).",
        "id": "q_g6_matematica_95"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es el resultado de (2 + 3)²?",
        "options": [
            "13",
            "25",
            "10",
            "36"
        ],
        "correct": 1,
        "explanation": "Resolvemos primero el paréntesis: 2 + 3 = 5; luego 5² = 25.",
        "id": "q_g6_matematica_96"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cómo se llama la línea recta que toca a la circunferencia en un solo punto sin cruzarla?",
        "options": [
            "Secante",
            "Tangente",
            "Radio",
            "Cuerda"
        ],
        "correct": 1,
        "explanation": "La recta tangente comparte un único punto de contacto con la curva.",
        "id": "q_g6_matematica_97"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuál es la mitad de 1/4?",
        "options": [
            "1/2",
            "1/8",
            "2/4",
            "1/16"
        ],
        "correct": 1,
        "explanation": "Dividimos: 1/4 ÷ 2 = 1/8.",
        "id": "q_g6_matematica_98"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Cuánto es 7 × 8 + 4?",
        "options": [
            "60",
            "84",
            "56",
            "64"
        ],
        "correct": 0,
        "explanation": "7 × 8 = 56; sumando 4: 56 + 4 = 60.",
        "id": "q_g6_matematica_99"
    },
    {
        "grade": 6,
        "category": "matematica",
        "question": "¿Qué poliedro regular tiene 12 caras pentagonales iguales?",
        "options": [
            "Icosaedro",
            "Dodecaedro",
            "Octaedro",
            "Tetraedro"
        ],
        "correct": 1,
        "explanation": "El dodecaedro regular está constituido por 12 pentágonos regulares congruentes.",
        "id": "q_g6_matematica_100"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué función sintáctica cumple el fragmento 'la carta' en 'Martina escribió la carta'?",
        "options": [
            "Sujeto expreso",
            "Objeto Directo (O.D.)",
            "Objeto Indirecto (O.I.)",
            "Circunstancial"
        ],
        "correct": 1,
        "explanation": "Responde a ¿qué escribió Martina? y puede sustituirse por el pronombre 'la': 'Martina la escribió'.",
        "id": "q_g6_lengua_41"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de los siguientes pares de palabras ejemplifica un parónimo?",
        "options": [
            "Afecto / Efecto",
            "Grande / Enorme",
            "Blanco / Negro",
            "Banco / Banco"
        ],
        "correct": 0,
        "explanation": "Los parónimos son palabras con pronunciación y escritura similar pero significados muy distintos.",
        "id": "q_g6_lengua_42"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Por qué lleva tilde la palabra 'té' en la oración 'Tomé una taza de té'?",
        "options": [
            "Por ser aguda",
            "Por tilde diacrítica para diferenciarla del pronombre 'te'",
            "Por hiato",
            "Por ser monosílabo común"
        ],
        "correct": 1,
        "explanation": "La tilde diacrítica distingue el sustantivo 'té' (infusión) del pronombre 'te'.",
        "id": "q_g6_lengua_43"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se llama la figura retórica que atribuye cualidades humanas a objetos inanimados?",
        "options": [
            "Metáfora",
            "Personificación o prosopopeya",
            "Hipérbole",
            "Hipérbaton"
        ],
        "correct": 1,
        "explanation": "La personificación dota a objetos, elementos naturales o animales de rasgos y emociones humanas.",
        "id": "q_g6_lengua_44"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En el relato policial clásico de enigma, ¿cuál es el rol fundamental del detective?",
        "options": [
            "Cometer el crimen",
            "Interpretar indicios y pistas usando el razonamiento lógico deductivo",
            "Huir de la justicia",
            "Contar chistes"
        ],
        "correct": 1,
        "explanation": "El detective resuelve el enigma criminal a través de la observación y deducción metódica.",
        "id": "q_g6_lengua_45"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el pretérito imperfecto del verbo 'cantar' para la primera persona del singular (yo)?",
        "options": [
            "Canté",
            "Cantaba",
            "Cantaré",
            "Había cantado"
        ],
        "correct": 1,
        "explanation": "Las terminaciones en -aba corresponden al pretérito imperfecto de la primera conjugación.",
        "id": "q_g6_lengua_46"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué elemento oracional modifica directamente al núcleo del sujeto sin preposición de por medio?",
        "options": [
            "Modificador Indirecto (M.I.)",
            "Modificador Directo (M.D.)",
            "Aposición",
            "Construcción comparativa"
        ],
        "correct": 1,
        "explanation": "Los artículos y adjetivos funcionan como Modificadores Directos (M.D.) del sustantivo núcleo.",
        "id": "q_g6_lengua_47"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de las siguientes palabras presenta un hiato acentual?",
        "options": [
            "Viento",
            "Causa",
            "Baúl",
            "Peine"
        ],
        "correct": 2,
        "explanation": "En 'ba-úl' la vocal cerrada 'u' lleva tilde tónica, rompiendo el diptongo y formando dos sílabas.",
        "id": "q_g6_lengua_48"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de texto periodístico combina la narración cronológica de los hechos con la mirada valorativa del autor?",
        "options": [
            "La crónica periodística",
            "El aviso clasificado",
            "La receta de cocina",
            "El diccionario"
        ],
        "correct": 0,
        "explanation": "La crónica narra los acontecimientos en orden temporal aportando apreciaciones del cronista.",
        "id": "q_g6_lengua_49"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el pronombre demostrativo que indica cercanía respecto al emisor?",
        "options": [
            "Aquel",
            "Ese",
            "Este",
            "Cualquiera"
        ],
        "correct": 2,
        "explanation": "'Este' señala un objeto próximo al hablante en el espacio o tiempo.",
        "id": "q_g6_lengua_50"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué relación semántica existe entre 'cima' (cumbre) y 'sima' (abismo profundo)?",
        "options": [
            "Son homófonas",
            "Son sinónimas exactas",
            "Son hiperónimos",
            "Son diminutivos"
        ],
        "correct": 0,
        "explanation": "Tienen idéntico sonido al pronunciarse pero diferente grafía y significado.",
        "id": "q_g6_lengua_51"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la oración 'El científico investigó minuciosamente', la palabra 'minuciosamente' es:",
        "options": [
            "Un adjetivo calificativo",
            "Un adverbio de modo",
            "Un verbo conjugado",
            "Una preposición"
        ],
        "correct": 1,
        "explanation": "Modifica al verbo indicando la manera detallada en que se realizó la investigación.",
        "id": "q_g6_lengua_52"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se llama la aclaración entre comas que acompaña al núcleo del sujeto y puede intercambiar lugar con él?",
        "options": [
            "Modificador directo",
            "Aposición",
            "Objeto indirecto",
            "Circunstancial"
        ],
        "correct": 1,
        "explanation": "La aposición explica o amplía al núcleo sustantivo y va delimitada por comas.",
        "id": "q_g6_lengua_53"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el antónimo contextual de 'efímero' (de muy corta duración)?",
        "options": [
            "Pasajero",
            "Duradero o perpetuo",
            "Breve",
            "Fugaz"
        ],
        "correct": 1,
        "explanation": "'Duradero' expresa la permanencia prolongada en contraposición a lo efímero.",
        "id": "q_g6_lengua_54"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué modo verbal se utiliza para expresar órdenes, mandatos, pedidos o prohibiciones?",
        "options": [
            "Modo indicativo",
            "Modo subjuntivo",
            "Modo imperativo",
            "Modo condicional"
        ],
        "correct": 2,
        "explanation": "El imperativo se enfoca en inducir acciones o conductas en el receptor.",
        "id": "q_g6_lengua_55"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el hiperónimo del conjunto formado por 'manzana, pera, uva y banana'?",
        "options": [
            "Verduras",
            "Frutas",
            "Lácteos",
            "Carnes"
        ],
        "correct": 1,
        "explanation": "El hiperónimo es el término de mayor extensión conceptual que abarca a sus hipónimos.",
        "id": "q_g6_lengua_56"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué figura retórica se basa en una exageración desmedida con fines expresivos?",
        "options": [
            "Hipérbole",
            "Metáfora",
            "Elipsis",
            "Antítesis"
        ],
        "correct": 0,
        "explanation": "La hipérbole magnifica o disminuye notablemente un rasgo para impresionar al receptor.",
        "id": "q_g6_lengua_57"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En la oración 'Compré flores para mi madre', ¿qué función cumple 'para mi madre'?",
        "options": [
            "Objeto Directo",
            "Objeto Indirecto (O.I.)",
            "Sujeto tácito",
            "Agente pasivo"
        ],
        "correct": 1,
        "explanation": "Indica el destinatario de la acción verbal precedido por la preposición 'para'.",
        "id": "q_g6_lengua_58"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la conjugación correcta del pretérito pluscuamperfecto de indicativo del verbo 'partir' (él)?",
        "options": [
            "Partió",
            "Había partido",
            "Hubo partido",
            "Partiera"
        ],
        "correct": 1,
        "explanation": "Se forma con el pretérito imperfecto del verbo auxiliar haber ('había') más el participio ('partido').",
        "id": "q_g6_lengua_59"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de narrador sabe absolutamente todo sobre los hechos, pensamientos y emociones de los personajes?",
        "options": [
            "Narrador omnisciente",
            "Narrador protagonista",
            "Narrador testigo",
            "Narrador en segunda persona"
        ],
        "correct": 0,
        "explanation": "El narrador omnisciente posee un conocimiento total de la interioridad de todos los protagonistas.",
        "id": "q_g6_lengua_60"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el sufijo que indica profesión u ocupación en 'periodista'?",
        "options": [
            "-ista",
            "-ismo",
            "-oso",
            "-able"
        ],
        "correct": 0,
        "explanation": "El sufijo '-ista' designa a la persona que ejerce una actividad, profesión o doctrina.",
        "id": "q_g6_lengua_61"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué conector lógico se usa para introducir una relación de causa (conector causal)?",
        "options": [
            "Por lo tanto",
            "Porque (o ya que)",
            "Además",
            "Sin embargo"
        ],
        "correct": 1,
        "explanation": "'Porque' o 'ya que' explican el motivo o fundamento de lo dicho anteriormente.",
        "id": "q_g6_lengua_62"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas palabras debe escribirse con 'H' obligatoriamente?",
        "options": [
            "Umbral",
            "Huella",
            "Orno (de ornar)",
            "Ombligo"
        ],
        "correct": 1,
        "explanation": "Las palabras que comienzan con los diptongos 'ue-', 'ui-', 'ia-', 'ie-' llevan hache inicial fija.",
        "id": "q_g6_lengua_63"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En el género dramático (teatro), ¿cómo se llaman las indicaciones que el autor escribe para los actores y directores?",
        "options": [
            "Diálogos",
            "Acotaciones (o didascalias)",
            "Monólogos",
            "Actos"
        ],
        "correct": 1,
        "explanation": "Las acotaciones van entre paréntesis y describen escenografía, gestos y movimientos de escena.",
        "id": "q_g6_lengua_64"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué función cumple la tilde en 'más' en la frase 'Quiero más jugo'?",
        "options": [
            "Tilde diacrítica de cantidad",
            "Tilde enfática",
            "Tilde por regla de agudas",
            "Tilde por hiato"
        ],
        "correct": 0,
        "explanation": "Distingue el adverbio de cantidad 'más' de la conjunción adversativa 'mas' (sinónimo de pero).",
        "id": "q_g6_lengua_65"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el núcleo del sujeto en 'Los alumnos del colegio ganaron el torneo'?",
        "options": [
            "Los",
            "alumnos",
            "colegio",
            "torneo"
        ],
        "correct": 1,
        "explanation": "'Alumnos' es el sustantivo principal sobre el cual concuerda el verbo 'ganaron'.",
        "id": "q_g6_lengua_66"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué recurso de cohesión textual consiste en omitir palabras sobreentendidas para evitar repeticiones innecesarias?",
        "options": [
            "Elipsis",
            "Metáfora",
            "Pleonasmo",
            "Paráfrasis"
        ],
        "correct": 0,
        "explanation": "La elipsis suprime un término previamente enunciado que el lector puede reponer con claridad.",
        "id": "q_g6_lengua_67"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la forma del condicional simple del verbo 'viajar' para 'nosotros'?",
        "options": [
            "Viajábamos",
            "Viajaremos",
            "Viajaríamos",
            "Viajásemos"
        ],
        "correct": 2,
        "explanation": "El condicional simple añade la terminación '-ríamos' a la raíz del infinitivo.",
        "id": "q_g6_lengua_68"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de texto tiene como propósito principal convencer o persuadir al lector sobre una tesis o postura?",
        "options": [
            "Texto argumentativo",
            "Texto instructivo",
            "Texto lírico",
            "Texto narrativo puro"
        ],
        "correct": 0,
        "explanation": "El texto argumentativo defiende una opinión fundamentada mediante argumentos y evidencias.",
        "id": "q_g6_lengua_69"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la raíz lexemática común de las palabras 'marino', 'marítimo' y 'marea'?",
        "options": [
            "mar-",
            "mari-",
            "mare-",
            "ma-"
        ],
        "correct": 0,
        "explanation": "La raíz invariable que aporta el significado de base relacionado con el mar es 'mar-'.",
        "id": "q_g6_lengua_70"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué clase de palabra es 'hacia' en la oración 'Caminamos hacia la plaza'?",
        "options": [
            "Preposición",
            "Adverbio",
            "Conjunción",
            "Interjección"
        ],
        "correct": 0,
        "explanation": "'Hacia' es una preposición invariable que indica dirección u orientación espacial.",
        "id": "q_g6_lengua_71"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se denomina la narración mitológica que explica el origen del mundo o de los dioses?",
        "options": [
            "Mito",
            "Fábula",
            "Novela de ciencia ficción",
            "Tragicomedia"
        ],
        "correct": 0,
        "explanation": "Los mitos son relatos sagrados de tradición oral que explican fenómenos cósmicos primordiales.",
        "id": "q_g6_lengua_72"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el antónimo morfológico de 'responsable' usando un prefijo?",
        "options": [
            "Desresponsable",
            "Irresponsable",
            "Antirresponsable",
            "No responsable"
        ],
        "correct": 1,
        "explanation": "El prefijo 'i-' ante 'r' (ir-) genera el antónimo 'irresponsable'.",
        "id": "q_g6_lengua_73"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "En una oración en voz pasiva ('El puente fue construido por los ingenieros'), ¿qué función cumple 'por los ingenieros'?",
        "options": [
            "Objeto directo",
            "Complemento agente",
            "Circunstancial de lugar",
            "Sujeto tácito"
        ],
        "correct": 1,
        "explanation": "El complemento agente realiza la acción en la voz pasiva introducido por la preposición 'por'.",
        "id": "q_g6_lengua_74"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas palabras es un sustantivo abstracto?",
        "options": [
            "Solidaridad",
            "Campana",
            "Médico",
            "Escritorio"
        ],
        "correct": 0,
        "explanation": "'Solidaridad' designa un valor moral y cualidad humana intangible.",
        "id": "q_g6_lengua_75"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué signo ortográfico se utiliza para encerrar fechas, aclaraciones accesorias o datos dentro de un texto?",
        "options": [
            "Los corchetes",
            "Los paréntesis",
            "Las comillas",
            "La raya de diálogo"
        ],
        "correct": 1,
        "explanation": "Los paréntesis aíslan información secundaria o explicativa sin cortar el hilo de la frase.",
        "id": "q_g6_lengua_76"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el participio del verbo 'abrir'?",
        "options": [
            "Abrido",
            "Abierto",
            "Abriendo",
            "Abrió"
        ],
        "correct": 1,
        "explanation": "'Abierto' es el participio irregular del verbo abrir.",
        "id": "q_g6_lengua_77"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué figura retórica contrapone dos ideas o palabras de significado opuesto (ej: 'Es tan corto el amor y tan largo el olvido')?",
        "options": [
            "Antítesis",
            "Hipérbole",
            "Metáfora",
            "Pleonasmo"
        ],
        "correct": 0,
        "explanation": "La antítesis enfrenta términos contrarios para resaltar el contraste expresivo.",
        "id": "q_g6_lengua_78"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué pronombre personal de tercera persona del plural funciona como objeto indirecto?",
        "options": [
            "Nos",
            "Les",
            "Los",
            "Me"
        ],
        "correct": 1,
        "explanation": "'Les' es la forma del pronombre de tercera persona para objeto indirecto plural.",
        "id": "q_g6_lengua_79"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de los siguientes términos es una palabra compuesta?",
        "options": [
            "Paraguas",
            "Casona",
            "Submarino",
            "Florero"
        ],
        "correct": 0,
        "explanation": "'Paraguas' se forma por la unión de dos palabras independientes: para + aguas.",
        "id": "q_g6_lengua_80"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de texto expositivo tiene como objetivo divulgar conocimientos científicos al público general?",
        "options": [
            "Artículo de divulgación científica",
            "Cuento fantástico",
            "Epopeya",
            "Poema vanguardista"
        ],
        "correct": 0,
        "explanation": "La divulgación científica explica conceptos rigurosos con lenguaje accesible y didáctico.",
        "id": "q_g6_lengua_81"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la función del conector 'sin embargo'?",
        "options": [
            "Añadir información",
            "Plantear una oposición o contraste (adversativo)",
            "Indicar causa",
            "Ordenar temporalmente"
        ],
        "correct": 1,
        "explanation": "'Sin embargo' matiza o restringe la idea anterior estableciendo un contraste.",
        "id": "q_g6_lengua_82"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de predicado tiene la oración 'El río creció y desbordó las riberas'?",
        "options": [
            "Predicado verbal simple",
            "Predicado verbal compuesto",
            "Predicado no verbal",
            "Predicado nominal"
        ],
        "correct": 1,
        "explanation": "Posee dos núcleos verbales coordinados ('creció' y 'desbordó'), configurando un predicado compuesto.",
        "id": "q_g6_lengua_83"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el superlativo culto de la palabra 'pobre'?",
        "options": [
            "Pobrísimo",
            "Paupérrimo",
            "Pobretón",
            "Menos pobre"
        ],
        "correct": 1,
        "explanation": "La norma culta registra 'paupérrimo' como el grado superlativo absoluto de pobre.",
        "id": "q_g6_lengua_84"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se denomina la variante lingüística regional propia de una zona geográfica particular?",
        "options": [
            "Cronolecto",
            "Dialecto",
            "Sociolecto",
            "Jerga técnica"
        ],
        "correct": 1,
        "explanation": "El dialecto refleja las particularidades léxicas y fonéticas según la región geográfica del hablante.",
        "id": "q_g6_lengua_85"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la primera persona del singular del presente de subjuntivo del verbo 'haber'?",
        "options": [
            "He",
            "Haya",
            "Hubiera",
            "Habré"
        ],
        "correct": 1,
        "explanation": "En el modo subjuntivo presente se conjuga: '(que yo) haya'.",
        "id": "q_g6_lengua_86"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué función de la lengua predomina en un poema o texto lírico?",
        "options": [
            "Función referencial",
            "Función poética o estética",
            "Función apelativa",
            "Función fática"
        ],
        "correct": 1,
        "explanation": "La función poética se centra en el mensaje mismo, su belleza formal, ritmo y sonoridad.",
        "id": "q_g6_lengua_87"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es la correcta acentuación de la palabra 'fácilmente'?",
        "options": [
            "Facilmente",
            "Fácilmente",
            "Fácílmente",
            "Facilménte"
        ],
        "correct": 1,
        "explanation": "Los adverbios en '-mente' conservan la tilde del adjetivo base si este la llevaba: 'fácil' -> 'fácilmente'.",
        "id": "q_g6_lengua_88"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué recurso literario repite un mismo sonido consonántico para evocar sensaciones (ej: 'El susurro del silencio')?",
        "options": [
            "Aliteración",
            "Hipérbole",
            "Anáfora",
            "Oxímoron"
        ],
        "correct": 0,
        "explanation": "La aliteración utiliza la reiteración de fonemas semejantes para generar un efecto sonoro.",
        "id": "q_g6_lengua_89"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué clase de palabra es 'bastante' en 'Llegamos bastante cansados'?",
        "options": [
            "Adverbio de cantidad",
            "Adjetivo calificativo",
            "Pronombre",
            "Sustantivo"
        ],
        "correct": 0,
        "explanation": "Modifica al adjetivo 'cansados' intensificando su grado de cantidad.",
        "id": "q_g6_lengua_90"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el gerundio del verbo 'leer'?",
        "options": [
            "Leído",
            "Leyendo",
            "Leedor",
            "Leyese"
        ],
        "correct": 1,
        "explanation": "El gerundio cambia la 'i' intervocálica por 'y': 'leyendo'.",
        "id": "q_g6_lengua_91"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué elemento paratextual introduce o presenta una obra literaria antes de su lectura principal?",
        "options": [
            "Prólogo",
            "Epílogo",
            "Índice alfabético",
            "Glosario"
        ],
        "correct": 0,
        "explanation": "El prólogo sirve de preámbulo explicativo o comentario preliminar del libro.",
        "id": "q_g6_lengua_92"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el sujeto en la oración 'A los niños les gustó mucho la obra de teatro'?",
        "options": [
            "A los niños",
            "les",
            "la obra de teatro",
            "mucho"
        ],
        "correct": 2,
        "explanation": "El sujeto es aquello que concuerda en número con el verbo 'gustó': 'la obra de teatro' (singular).",
        "id": "q_g6_lengua_93"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cómo se llama la coincidencia de solo vocales a partir de la última vocal acentuada en un poema?",
        "options": [
            "Rima consonante",
            "Rima asonante",
            "Verso libre",
            "Métrica fija"
        ],
        "correct": 1,
        "explanation": "En la rima asonante solo concuerdan las vocales, mientras las consonantes difieren.",
        "id": "q_g6_lengua_94"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de estas oraciones es unimembre (no admite partición en sujeto y predicado)?",
        "options": [
            "El trueno retumbó con fuerza.",
            "Llovió intensamente toda la noche.",
            "Los campesinos observan el cielo.",
            "El cielo está nublado."
        ],
        "correct": 1,
        "explanation": "Los verbos meteorológicos son impersonales y forman oraciones unimembres.",
        "id": "q_g6_lengua_95"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué término designa las palabras que tienen significados opuestos o contrarios?",
        "options": [
            "Sinónimos",
            "Antónimos",
            "Homógrafos",
            "Parónimos"
        ],
        "correct": 1,
        "explanation": "Los antónimos expresan ideas polares o contrastantes.",
        "id": "q_g6_lengua_96"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál es el pretérito perfecto simple de 'andar' para la primera persona (yo)?",
        "options": [
            "Andé",
            "Anduve",
            "Andaba",
            "He andado"
        ],
        "correct": 1,
        "explanation": "'Andar' es verbo irregular con raíz pretérita 'anduv-': 'yo anduve'.",
        "id": "q_g6_lengua_97"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de narrador cuenta su propia historia como protagonista de los acontecimientos?",
        "options": [
            "Narrador en 1ª persona (protagonista)",
            "Narrador omnisciente",
            "Narrador testigo ajeno",
            "Narrador de encargo"
        ],
        "correct": 0,
        "explanation": "El narrador protagonista utiliza el 'yo' para relatar sus vivencias directas.",
        "id": "q_g6_lengua_98"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Cuál de las siguientes palabras está correctamente escrita con 'C'?",
        "options": [
            "Paciencia",
            "Pasiencia",
            "Pasienzia",
            "Pacienzia"
        ],
        "correct": 0,
        "explanation": "Las palabras terminadas en '-ancia' y '-encia' se escriben con 'c' (salvo ansia y hortensia).",
        "id": "q_g6_lengua_99"
    },
    {
        "grade": 6,
        "category": "lengua",
        "question": "¿Qué tipo de conector es 'en primer lugar' en un discurso?",
        "options": [
            "Conector de orden u organizador",
            "Conector de consecuencia",
            "Conector causal",
            "Conector adversativo"
        ],
        "correct": 0,
        "explanation": "Los ordenadores discursivos estructuran la sucesión de ideas en el texto.",
        "id": "q_g6_lengua_100"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué organela celular es conocida como la central energética donde se produce la respiración celular?",
        "options": [
            "El ribosoma",
            "La mitocondria",
            "El aparato de Golgi",
            "El lisosoma"
        ],
        "correct": 1,
        "explanation": "Las mitocondrias sintetizan ATP (energía) mediante la respiración celular.",
        "id": "q_g6_naturales_41"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la función de los alvéolos pulmonares?",
        "options": [
            "Filtrar partículas de polvo",
            "Permitir la hematosis (intercambio gaseoso de O₂ y CO₂ con la sangre)",
            "Impulsar el aire hacia la laringe",
            "Producir moco"
        ],
        "correct": 1,
        "explanation": "Los alvéolos pulmonares están rodeados de capilares y allí se oxigena la sangre liberando CO₂.",
        "id": "q_g6_naturales_42"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es un ejemplo característico de cambio químico (transformación irreversible de la materia)?",
        "options": [
            "Disolver azúcar en agua",
            "La combustión o quemado de un trozo de madera",
            "Derretir cubos de hielo",
            "Romper un vidrio"
        ],
        "correct": 1,
        "explanation": "En la combustión se forman sustancias químicas nuevas (cenizas, dióxido de carbono y vapor de agua).",
        "id": "q_g6_naturales_43"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se denomina la forma de propagación del calor a través del vacío sin contacto material?",
        "options": [
            "Conducción",
            "Convección",
            "Radiación térmica",
            "Difusión iónica"
        ],
        "correct": 2,
        "explanation": "La radiación (como la luz y calor del Sol) viaja por ondas electromagnéticas en el vacío.",
        "id": "q_g6_naturales_44"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué capa de la atmósfera está en contacto con la superficie terrestre y donde ocurren los fenómenos climáticos?",
        "options": [
            "Estratosfera",
            "Troposfera",
            "Termosfera",
            "Mesosfera"
        ],
        "correct": 1,
        "explanation": "La troposfera contiene la mayor parte del aire y el vapor de agua, originando nubes, viento y lluvias.",
        "id": "q_g6_naturales_45"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué estructura celular contiene el material genético (ADN) en las células eucariotas?",
        "options": [
            "La membrana plasmática",
            "El núcleo celular",
            "La vacuola",
            "La pared celular"
        ],
        "correct": 1,
        "explanation": "El núcleo alberga los cromosomas con la información hereditaria de la especie.",
        "id": "q_g6_naturales_46"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la hormona sexual masculina responsable del desarrollo de los caracteres sexuales secundarios?",
        "options": [
            "Estrógeno",
            "Testosterona",
            "Progesterona",
            "Insulina"
        ],
        "correct": 1,
        "explanation": "La testosterona producida en los testículos estimula el crecimiento corporal, vello y cambio de voz.",
        "id": "q_g6_naturales_47"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se denomina la transferencia de calor en líquidos y gases por movimiento de masas calientes hacia arriba?",
        "options": [
            "Convección",
            "Conducción",
            "Radiación",
            "Aislación"
        ],
        "correct": 0,
        "explanation": "La convección genera corrientes ascendentes de fluido caliente y descendentes de fluido frío.",
        "id": "q_g6_naturales_48"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué vaso sanguíneo lleva sangre oxigenada desde el ventrículo izquierdo hacia todo el organismo?",
        "options": [
            "Vena cava superior",
            "Arteria aorta",
            "Arteria pulmonar",
            "Vena porta"
        ],
        "correct": 1,
        "explanation": "La arteria aorta es el vaso de mayor calibre y distribuye sangre arterial a todo el cuerpo.",
        "id": "q_g6_naturales_49"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de reproducción biológica requiere la unión de dos gametos (óvulo y espermatozoide)?",
        "options": [
            "Reproducción asexual",
            "Reproducción sexual",
            "Bipartición",
            "Esporulación"
        ],
        "correct": 1,
        "explanation": "La reproducción sexual combina material genético de dos progenitores generando variabilidad.",
        "id": "q_g6_naturales_50"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la función principal de los glóbulos blancos o leucocitos?",
        "options": [
            "Transportar nutrientes",
            "Defender al organismo combatiendo agentes infecciosos",
            "Cerrar vasos rotos",
            "Mantener la temperatura"
        ],
        "correct": 1,
        "explanation": "Los leucocitos fagocitan microorganismos patógenos y producen anticuerpos inmunológicos.",
        "id": "q_g6_naturales_51"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué compuesto químico liberan en exceso las actividades humanas provocando el calentamiento global?",
        "options": [
            "Oxígeno molecular",
            "Dióxido de carbono (CO₂)",
            "Ozono estratosférico",
            "Nitrógeno gas"
        ],
        "correct": 1,
        "explanation": "El CO₂ procedente de combustibles fósiles retiene radiación infrarroja incrementando el efecto invernadero.",
        "id": "q_g6_naturales_52"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la envoltura semirpermeable que regula la entrada y salida de sustancias en toda célula viva?",
        "options": [
            "Membrana plasmática",
            "Pared celular de celulosa",
            "Cápsula bacteriana",
            "Citoesqueleto"
        ],
        "correct": 0,
        "explanation": "La membrana celular mantiene la homeostasis controlando el transporte celular selectivo.",
        "id": "q_g6_naturales_53"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué glándula endocrina situada en la base del cerebro coordina la producción de hormonas del crecimiento?",
        "options": [
            "El páncreas",
            "La hipófisis o glándula pituitaria",
            "El tiroides",
            "La glándula suprarrenal"
        ],
        "correct": 1,
        "explanation": "La hipófisis es la glándula rectora del sistema endocrino humano.",
        "id": "q_g6_naturales_54"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se propaga el calor en una varilla metálica cuando uno de sus extremos se coloca sobre una llama?",
        "options": [
            "Por conducción térmica",
            "Por convección",
            "Por evaporación",
            "Por condensación"
        ],
        "correct": 0,
        "explanation": "La conducción térmica transfiere energía cinética entre átomos vecinos sin traslación de materia.",
        "id": "q_g6_naturales_55"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿En qué cavidad del corazón ingresa la sangre venosa desoxigenada proveniente de las venas cavas?",
        "options": [
            "Ventrículo izquierdo",
            "Aurícula derecha",
            "Ventrículo derecho",
            "Aurícula izquierda"
        ],
        "correct": 1,
        "explanation": "La aurícula derecha recoge la sangre desoxigenada del circuito mayor del cuerpo.",
        "id": "q_g6_naturales_56"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué fenómeno químico ocurre cuando el hierro se expone a la intemperie reaccionando con oxígeno y humedad?",
        "options": [
            "Fusión",
            "Oxidación (formación de óxido de hierro)",
            "Sublimación",
            "Evaporación"
        ],
        "correct": 1,
        "explanation": "La oxidación es una reacción química que corroe los metales formando óxidos metálicos.",
        "id": "q_g6_naturales_57"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es el órgano femenino donde se implanta y desarrolla el embrión durante el embarazo?",
        "options": [
            "El ovario",
            "El útero (o matriz)",
            "La trompa de Falopio",
            "La vagina"
        ],
        "correct": 1,
        "explanation": "El endometrio del útero aloja al cigoto y proporciona soporte nutricional a la placenta.",
        "id": "q_g6_naturales_58"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de células no poseen núcleo celular definido y tienen su material genético disperso en el citoplasma?",
        "options": [
            "Células eucariotas",
            "Células procariotas (como las bacterias)",
            "Células vegetales",
            "Células animales"
        ],
        "correct": 1,
        "explanation": "Las procariotas son primitivas y carecen de membrana nuclear interna.",
        "id": "q_g6_naturales_59"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se denomina la capacidad de un ecosistema de mantener su equilibrio ante perturbaciones externas?",
        "options": [
            "Homeostasis o resiliencia ecológica",
            "Erosión acelerada",
            "Eutrofización",
            "Monocultivo"
        ],
        "correct": 0,
        "explanation": "La resiliencia ecológica describe la estabilidad y recuperación natural de un ecosistema.",
        "id": "q_g6_naturales_60"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué enzima de la saliva inicia la digestión química de los hidratos de carbono (almidones)?",
        "options": [
            "Pepsina",
            "Ptialina o amilasa salival",
            "Lipasa gástrica",
            "Bilis"
        ],
        "correct": 1,
        "explanation": "La amilasa salival descompone almidones complejos en azúcares más simples desde la boca.",
        "id": "q_g6_naturales_61"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de energía posee un cuerpo en virtud de su movimiento y velocidad?",
        "options": [
            "Energía potencial gravitatoria",
            "Energía cinética",
            "Energía química",
            "Energía nuclear"
        ],
        "correct": 1,
        "explanation": "La energía cinética es directamente proporcional a la masa y al cuadrado de la velocidad.",
        "id": "q_g6_naturales_62"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué proceso celular permite a los organismos pluricelulares crecer y reparar tejidos dañados duplicando células idénticas?",
        "options": [
            "Meiosis",
            "Mitosis",
            "Fecundación",
            "Metamorfosis"
        ],
        "correct": 1,
        "explanation": "La mitosis produce dos células hijas genéticamente idénticas a la célula madre.",
        "id": "q_g6_naturales_63"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la función primordial de las plaquetas en el torrente sanguíneo?",
        "options": [
            "Oxigenación",
            "Coagulación de la sangre para detener hemorragias",
            "Digestión de toxinas",
            "Control de glucosa"
        ],
        "correct": 1,
        "explanation": "Las plaquetas o trombocitos se adhieren y forman coágulos sanguíneos en vasos lastimados.",
        "id": "q_g6_naturales_64"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la unidad estructural y funcional básica de todos los seres vivos?",
        "options": [
            "El tejido",
            "La célula",
            "El órgano",
            "El átomo"
        ],
        "correct": 1,
        "explanation": "La teoría celular postula que todo ser viviente está compuesto por una o más células.",
        "id": "q_g6_naturales_65"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama la fuerza que frena o resiste el desplazamiento de un cuerpo en contacto con una superficie?",
        "options": [
            "Fuerza de rozamiento o fricción",
            "Fuerza centrífuga",
            "Fuerza magnética",
            "Fuerza electromotriz"
        ],
        "correct": 0,
        "explanation": "La fricción se opone al movimiento relativo entre dos superficies en contacto.",
        "id": "q_g6_naturales_66"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿En qué parte del aparato reproductor femenino se produce habitualmente la fecundación del óvulo por el espermatozoide?",
        "options": [
            "En el útero",
            "En las trompas de Falopio",
            "En el cuello uterino",
            "En los ovarios"
        ],
        "correct": 1,
        "explanation": "El encuentro y unión de los gametos ocurre normalmente en el tercio distal de la trompa de Falopio.",
        "id": "q_g6_naturales_67"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de mezcla es la leche, donde pequeñísimas gotas de grasa flotan dispersas en agua?",
        "options": [
            "Solución verdadera",
            "Coloide o emulsión",
            "Mezcla grosera",
            "Sustancia pura elemental"
        ],
        "correct": 1,
        "explanation": "La leche es una emulsión coloidal de lípidos y proteínas dispersos en fase acuosa.",
        "id": "q_g6_naturales_68"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué capa de la atmósfera concentra el ozono que absorbe los rayos solares UV de alta energía?",
        "options": [
            "Troposfera",
            "Estratosfera",
            "Mesosfera",
            "Exosfera"
        ],
        "correct": 1,
        "explanation": "La capa de ozono se ubica en la estratosfera, entre los 15 y 35 km de altura.",
        "id": "q_g6_naturales_69"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la válvula del corazón que comunica la aurícula izquierda con el ventrículo izquierdo?",
        "options": [
            "Válvula tricúspide",
            "Válvula mitral o bicúspide",
            "Válvula sigmoidea pulmonar",
            "Válvula de Eustaquio"
        ],
        "correct": 1,
        "explanation": "La válvula mitral impide el reflujo retrógrado de sangre hacia la aurícula izquierda.",
        "id": "q_g6_naturales_70"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué cambio de estado directo ocurre cuando el yodo sólido pasa a gas sin pasar por el estado líquido?",
        "options": [
            "Fusión",
            "Sublimación",
            "Solidificación",
            "Condensación"
        ],
        "correct": 1,
        "explanation": "La sublimación es la transición directa del estado sólido al gaseoso.",
        "id": "q_g6_naturales_71"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál de los siguientes es un estímulo interno regulado por el sistema nervioso humano?",
        "options": [
            "La luz del sol",
            "La sensación de sed o hambre",
            "El ruido de una campana",
            "La textura de una piedra"
        ],
        "correct": 1,
        "explanation": "La sed es un estímulo originado en el medio interno para mantener el balance hídrico corporal.",
        "id": "q_g6_naturales_72"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué función cumplen los cloroplastos en las células vegetales?",
        "options": [
            "Digestión celular",
            "Realizar la fotosíntesis captando luz solar",
            "Almacenar grasa",
            "Sintetizar proteínas"
        ],
        "correct": 1,
        "explanation": "Los cloroplastos contienen tilacoides con clorofila donde se sintetiza glucosa a partir de luz.",
        "id": "q_g6_naturales_73"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se denomina la temperatura a la cual una sustancia pura pasa de líquido a gas?",
        "options": [
            "Punto de congelación",
            "Punto de ebullición",
            "Punto de fusión",
            "Cero absoluto"
        ],
        "correct": 1,
        "explanation": "En el punto de ebullición la presión de vapor iguala a la presión atmosférica circundante.",
        "id": "q_g6_naturales_74"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué glándula produce la insulina para controlar la concentración de glucosa en sangre?",
        "options": [
            "El páncreas",
            "El hígado",
            "La tiroides",
            "El bazo"
        ],
        "correct": 0,
        "explanation": "Los islotes de Langerhans en el páncreas secretan insulina facilitando la entrada de glucosa a las células.",
        "id": "q_g6_naturales_75"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de energía almacena una roca situada en lo alto de una montaña antes de rodar?",
        "options": [
            "Energía cinética",
            "Energía potencial gravitatoria",
            "Energía nuclear",
            "Energía radiante"
        ],
        "correct": 1,
        "explanation": "La energía potencial depende de la masa y de la altura relativa respecto al suelo.",
        "id": "q_g6_naturales_76"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la función del tejido adiposo en el cuerpo humano?",
        "options": [
            "Transportar oxígeno",
            "Almacenar lípidos como reserva energética y actuar de aislante térmico",
            "Producir movimiento voluntario",
            "Generar impulsos eléctricos"
        ],
        "correct": 1,
        "explanation": "La grasa corporal almacena energía química y amortigua órganos vitales protegiendo del frío.",
        "id": "q_g6_naturales_77"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué gas indispensable liberan las plantas como producto secundario de la fotosíntesis?",
        "options": [
            "Nitrógeno",
            "Oxígeno (O₂)",
            "Metano",
            "Cloro"
        ],
        "correct": 1,
        "explanation": "La fotólisis del agua durante la fotosíntesis libera oxígeno a la atmósfera.",
        "id": "q_g6_naturales_78"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué relación ecológica simbiótica beneficia a ambas especies involucradas (ej: abejas y flores)?",
        "options": [
            "Parasitismo",
            "Mutualismo",
            "Depredación",
            "Competencia interespecífica"
        ],
        "correct": 1,
        "explanation": "En el mutualismo ambas poblaciones obtienen ventajas adaptativas y nutricionales mutuas.",
        "id": "q_g6_naturales_79"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama la pequeña estructura celular donde se sintetizan las proteínas?",
        "options": [
            "El lisosoma",
            "El ribosoma",
            "La vacuola pulsátil",
            "El centrosoma"
        ],
        "correct": 1,
        "explanation": "Los ribosomas traducen el ARN mensajero ensamblando cadenas de aminoácidos en proteínas.",
        "id": "q_g6_naturales_80"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué proceso de fermentación biológica realizan las levaduras para hacer crecer la masa del pan?",
        "options": [
            "Fermentación alcohólica",
            "Fermentación láctica",
            "Fermentación butírica",
            "Combustión rápida"
        ],
        "correct": 0,
        "explanation": "Las levaduras producen etanol y dióxido de carbono que infla y airea la masa harinosa.",
        "id": "q_g6_naturales_81"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es el instrumento utilizado en meteorología para medir la presión atmosférica?",
        "options": [
            "Anemómetro",
            "Barómetro",
            "Higrómetro",
            "Pluviómetro"
        ],
        "correct": 1,
        "explanation": "El barómetro cuantifica la presión ejercida por el peso del aire sobre la superficie.",
        "id": "q_g6_naturales_82"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué órgano del sistema digestivo produce bilis para facilitar la emulsión y digestión de las grasas?",
        "options": [
            "El estómago",
            "El hígado",
            "El bazo",
            "El esófago"
        ],
        "correct": 1,
        "explanation": "El hígado sintetiza bilis, la cual se almacena en la vesícula biliar y se vierte al duodeno.",
        "id": "q_g6_naturales_83"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de lentes corrigen la miopía divergiendo los rayos de luz hacia la retina?",
        "options": [
            "Lentes convergentes",
            "Lentes divergentes o cóncavas",
            "Lentes prismáticas planas",
            "Filtros polarizados"
        ],
        "correct": 1,
        "explanation": "Las lentes divergentes alejan el foco de convergencia corrigiendo el globo ocular miope alargado.",
        "id": "q_g6_naturales_84"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama la parte masculina de la flor que contiene los granos de polen?",
        "options": [
            "El pistilo",
            "El estambre (con la antera)",
            "El ovario",
            "El cáliz"
        ],
        "correct": 1,
        "explanation": "Los estambres forman el androceo y en sus anteras se produce y madura el polen floral.",
        "id": "q_g6_naturales_85"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué propiedad física de los materiales define su resistencia a ser rayados por otros cuerpos?",
        "options": [
            "Tenacidad",
            "Dureza",
            "Elasticidad",
            "Maleabilidad"
        ],
        "correct": 1,
        "explanation": "La dureza (medida en la escala de Mohs) es la oposición que ofrece una sustancia a ser rayada superficialmente.",
        "id": "q_g6_naturales_86"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es el mineral más duro conocido en la naturaleza?",
        "options": [
            "El cuarzo",
            "El diamante",
            "El yeso",
            "El topacio"
        ],
        "correct": 1,
        "explanation": "El diamante se ubica en el grado 10 (máximo) de la escala de dureza de Mohs.",
        "id": "q_g6_naturales_87"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de nutrición presentan los hongos al alimentarse absorbiendo materia orgánica externa descompuesta?",
        "options": [
            "Autótrofa fotosintética",
            "Heterótrofa por absorción (saprófita)",
            "Quimiosintética pura",
            "Carnívora"
        ],
        "correct": 1,
        "explanation": "Los hongos secretan enzimas al sustrato y absorben externamente las moléculas orgánicas resultantes.",
        "id": "q_g6_naturales_88"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se denomina la capa protectora externa y rígida presente en células vegetales pero ausente en células animales?",
        "options": [
            "Pared celular de celulosa",
            "Cápsula proteica",
            "Membrana nuclear",
            "Citoesqueleto interno"
        ],
        "correct": 0,
        "explanation": "La pared celular confiere rigidez, forma poliédrica y protección mecánica a las células vegetales.",
        "id": "q_g6_naturales_89"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué ley física afirma que la energía no se crea ni se destruye, solo se transforma?",
        "options": [
            "Principio de conservación de la energía",
            "Ley de gravitación universal",
            "Principio de Arquímedes",
            "Ley de Ohm"
        ],
        "correct": 0,
        "explanation": "El primer principio de la termodinámica postula la conservación cuantitativa constante de la energía total.",
        "id": "q_g6_naturales_90"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿En qué órgano del aparato urinario se almacena temporalmente la orina antes de la micción?",
        "options": [
            "El uréter",
            "La vejiga urinaria",
            "La uretra",
            "La pelvis renal"
        ],
        "correct": 1,
        "explanation": "La vejiga es un saco muscular elástico que acumula la orina proveniente de los uréteres.",
        "id": "q_g6_naturales_91"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama la sustancia que se disuelve en una solución líquida (ej: la sal en agua con sal)?",
        "options": [
            "Solvente",
            "Soluto",
            "Precipitado",
            "Catalizador"
        ],
        "correct": 1,
        "explanation": "El soluto es el componente disperso en menor proporción disuelto por el solvente.",
        "id": "q_g6_naturales_92"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de animales regulan internamente su temperatura corporal constante independientemente del ambiente (homeotermos)?",
        "options": [
            "Peces y reptiles",
            "Aves y mamíferos",
            "Anfibios e insectos",
            "Crustáceos y caracoles"
        ],
        "correct": 1,
        "explanation": "Aves y mamíferos poseen endotermia y mantienen una temperatura fisiológica estable.",
        "id": "q_g6_naturales_93"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué fenómeno óptico separa la luz blanca del sol en todos los colores del arcoíris al atravesar gotas de lluvia?",
        "options": [
            "Dispersión y refracción de la luz",
            "Absorción total",
            "Polarización magnética",
            "Difracción cuántica"
        ],
        "correct": 0,
        "explanation": "La luz blanca se descompone en distintas longitudes de onda refractadas dentro de las gotas acuosas.",
        "id": "q_g6_naturales_94"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué estructura microscópica del riñón realiza la filtración de la sangre y formación de orina?",
        "options": [
            "El alvéolo",
            "La nefrona",
            "La neurona",
            "La papila"
        ],
        "correct": 1,
        "explanation": "Cada riñón humano posee más de un millón de nefronas filtrantes.",
        "id": "q_g6_naturales_95"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cómo se llama el proceso biológico por el cual las plantas pierden agua en forma de vapor por sus hojas?",
        "options": [
            "Fotosíntesis",
            "Transpiración vegetal",
            "Gutación",
            "Respiración anaeróbica"
        ],
        "correct": 1,
        "explanation": "La transpiración a través de los estomas regula la temperatura de la planta y arrastra la savia ascendente.",
        "id": "q_g6_naturales_96"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es el valor del pH de una sustancia neutra como el agua destilada a 25 °C?",
        "options": [
            "0",
            "7",
            "14",
            "10"
        ],
        "correct": 1,
        "explanation": "En la escala de acidez (0 a 14), el valor 7 corresponde a la neutralidad estricta.",
        "id": "q_g6_naturales_97"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué tipo de esqueleto poseen los artrópodos como escarabajos, langostas y cangrejos?",
        "options": [
            "Endoesqueleto óseo",
            "Exoesqueleto de quitina",
            "Esqueleto hidrostático",
            "Cartilaginoso interno"
        ],
        "correct": 1,
        "explanation": "El exoesqueleto quitinoso recubre y protege exteriormente el cuerpo articulado de los artrópodos.",
        "id": "q_g6_naturales_98"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Cuál es la función del cerebelo en el encéfalo humano?",
        "options": [
            "Pensamiento abstracto",
            "Coordinar el equilibrio y la motricidad fina muscular",
            "Regular la digestión",
            "Secretar lágrimas"
        ],
        "correct": 1,
        "explanation": "El cerebelo afina la precisión de los movimientos voluntarios y mantiene la postura y el equilibrio.",
        "id": "q_g6_naturales_99"
    },
    {
        "grade": 6,
        "category": "naturales",
        "question": "¿Qué fenómeno atmosférico genera el sonido estruendoso del trueno durante una tormenta eléctrica?",
        "options": [
            "El choque de nubes",
            "La rápida expansión y calentamiento del aire al paso del rayo",
            "El viento chocando contra montañas",
            "La lluvia evaporándose"
        ],
        "correct": 1,
        "explanation": "El rayo calienta el canal de aire a más de 20.000 °C provocando una violenta onda de choque sónica.",
        "id": "q_g6_naturales_100"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué modelo económico consolidó a la Argentina como 'el granero del mundo' entre 1880 y 1914?",
        "options": [
            "Modelo de industrialización por sustitución",
            "Modelo agroexportador",
            "Modelo minero colonial",
            "Modelo estatista"
        ],
        "correct": 1,
        "explanation": "Argentina exportaba carnes y cereales a Europa e importaba productos manufacturados industriales.",
        "id": "q_g6_sociales_41"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué ley sancionada en 1912 estableció en Argentina el voto secreto, universal y obligatorio para varones mayores?",
        "options": [
            "Ley de Residencia",
            "Ley Sáenz Peña",
            "Ley de Educación Común 1420",
            "Ley de Aduana"
        ],
        "correct": 1,
        "explanation": "La Ley 8.871 (Sáenz Peña) terminó con el voto cantado y el fraude electoral de la oligarquía conservadora.",
        "id": "q_g6_sociales_42"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál fue la principal nacionalidad de los millones de inmigrantes que llegaron a Argentina entre 1880 y 1930?",
        "options": [
            "Franceses e ingleses",
            "Italianos y españoles",
            "Rusos y polacos únicamente",
            "Alemanes y suizos"
        ],
        "correct": 1,
        "explanation": "Las colectividades italiana y española conformaron la inmensa mayoría del flujo migratorio que pobló el país.",
        "id": "q_g6_sociales_43"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué presidente argentino impulsó la creación de cientos de escuelas primarias y la Ley de Educación Común 1420?",
        "options": [
            "Julio Argentino Roca",
            "Domingo Faustino Sarmiento",
            "Bartolomé Mitre",
            "Nicolás Avellaneda"
        ],
        "correct": 1,
        "explanation": "Sarmiento promovió la educación pública, laica y gratuita como base del progreso civilizatorio.",
        "id": "q_g6_sociales_44"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la provincia argentina que conforma la región del Delta del Paraná junto a Buenos Aires?",
        "options": [
            "Entre Ríos",
            "Mendoza",
            "La Pampa",
            "San Luis"
        ],
        "correct": 0,
        "explanation": "El delta del río Paraná desemboca entre las islas del sur entrerriano y el norte bonaerense.",
        "id": "q_g6_sociales_45"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué medio de transporte terrestre revolucionó la conexión del interior con el puerto de Buenos Aires a fines del siglo XIX?",
        "options": [
            "La diligencia a caballos",
            "El ferrocarril",
            "El automóvil particular",
            "El tranvía a mulas"
        ],
        "correct": 1,
        "explanation": "La red ferroviaria permitió trasladar masivamente granos y ganado vacuno hacia los barcos ultramarinos.",
        "id": "q_g6_sociales_46"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la región geográfica argentina conocida por la producción de hidrocarburos, manzanas y lana ovina?",
        "options": [
            "Región Pampeana",
            "Región Patagónica",
            "Región del Chaco",
            "Región Mesopotámica"
        ],
        "correct": 1,
        "explanation": "La Patagonia se caracteriza por sus cuencas petroleras, valles frutícolas y cría de ganado ovino extensivo.",
        "id": "q_g6_sociales_47"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denomina la línea imaginaria de longitud cero que sirve de referencia para los husos horarios mundiales?",
        "options": [
            "Trópico de Cáncer",
            "Meridiano de Greenwich",
            "El Ecuador",
            "Círculo Polar Antártico"
        ],
        "correct": 1,
        "explanation": "El meridiano de Greenwich pasa por Londres y define el tiempo universal coordinado (UTC).",
        "id": "q_g6_sociales_48"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué viviendas colectivas precarias de habitaciones compartidas habitaron los inmigrantes en Buenos Aires?",
        "options": [
            "Ranchos de barro",
            "Conventillos",
            "Palacios señoriales",
            "Estancias"
        ],
        "correct": 1,
        "explanation": "Los conventillos albergaban a numerosas familias inmigrantes en torno a un patio común en La Boca y San Telmo.",
        "id": "q_g6_sociales_49"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Quién fue el primer presidente argentino elegido democráticamente bajo la Ley Sáenz Peña en 1916?",
        "options": [
            "Marcelo T. de Alvear",
            "Hipólito Yrigoyen",
            "Roque Sáenz Peña",
            "Victorino de la Plaza"
        ],
        "correct": 1,
        "explanation": "Hipólito Yrigoyen, líder de la Unión Cívica Radical, inauguró la presidencia por sufragio popular masivo.",
        "id": "q_g6_sociales_50"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué problema ambiental grave provoca la tala masiva de la selva y el bosque nativo en el norte argentino?",
        "options": [
            "Erosión del suelo y pérdida de biodiversidad",
            "Aumento de glaciares",
            "Tsunamis fluviales",
            "Mayor fertilidad agrícola"
        ],
        "correct": 0,
        "explanation": "El desmonte debilita la capa vegetal fértil, incrementando inundaciones y extinguiendo hábitats de fauna.",
        "id": "q_g6_sociales_51"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Santa Fe?",
        "options": [
            "Rosario",
            "Santa Fe de la Vera Cruz",
            "Rafaela",
            "Venado Tuerto"
        ],
        "correct": 1,
        "explanation": "La ciudad de Santa Fe es la capital institucional de la provincia, sede de la Convención Constituyente de 1853.",
        "id": "q_g6_sociales_52"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué organismo de integración regional sudamericano fue fundado en 1991 por Argentina, Brasil, Paraguay y Uruguay?",
        "options": [
            "OEA",
            "MERCOSUR (Mercado Común del Sur)",
            "UNASUR",
            "Pacto Andino"
        ],
        "correct": 1,
        "explanation": "El Tratado de Asunción de 1991 constituyó el bloque comercial y aduanero del Mercosur.",
        "id": "q_g6_sociales_53"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué provincia argentina produce la mayor cantidad de yerba mate y té del país?",
        "options": [
            "Corrientes",
            "Misiones",
            "Entre Ríos",
            "Chaco"
        ],
        "correct": 1,
        "explanation": "Misiones concentra más del 80% de la producción tealera y yerbatera nacional.",
        "id": "q_g6_sociales_54"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama la medición cartográfica que indica la distancia angular de cualquier punto al Ecuador?",
        "options": [
            "Longitud geográfica",
            "Latitud geográfica",
            "Altitud sobre el nivel del mar",
            "Azimut"
        ],
        "correct": 1,
        "explanation": "La latitud se mide en grados de 0° a 90° hacia el Norte o hacia el Sur respecto a la línea ecuatorial.",
        "id": "q_g6_sociales_55"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué industria permitió conservar la carne vacuna argentina en barcos para llegar fresca a Europa desde 1876?",
        "options": [
            "Los saladeros de tasajo",
            "La industria frigorífica",
            "Las curtiembres artesanales",
            "Los molinos harineros"
        ],
        "correct": 1,
        "explanation": "Los barcos y plantas frigoríficas modernizaron la exportación cárnica enfriada y congelada a gran escala.",
        "id": "q_g6_sociales_56"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la provincia más occidental y cordillerana de la región del NOA cuya capital es San Salvador?",
        "options": [
            "Salta",
            "Jujuy",
            "Catamarca",
            "La Rioja"
        ],
        "correct": 1,
        "explanation": "San Salvador de Jujuy es la capital de Jujuy, puerta de entrada a la Quebrada de Humahuaca.",
        "id": "q_g6_sociales_57"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué sector social aristocrático concentró grandes extensiones de tierra y gobernó durante la Generación del 80?",
        "options": [
            "La oligarquía terrateniente",
            "El proletariado fabril",
            "La clase media profesional",
            "Los pueblos campesinos"
        ],
        "correct": 0,
        "explanation": "La elite oligárquica controlaba los latifundios ganaderos y el aparato político del Partido Autonomista Nacional.",
        "id": "q_g6_sociales_58"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿En qué provincia se ubica el yacimiento de hidrocarburos no convencionales 'Vaca Muerta'?",
        "options": [
            "Santa Cruz",
            "Neuquén",
            "Río Negro",
            "Mendoza"
        ],
        "correct": 1,
        "explanation": "Vaca Muerta en la cuenca neuquina alberga una de las mayores reservas de gas y petróleo de esquisto del mundo.",
        "id": "q_g6_sociales_59"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué cordillera submarina recorre el centro del océano Atlántico separando placas tectónicas?",
        "options": [
            "Dorsal Mesoatlántica",
            "Fosa de Atacama",
            "Fosa de las Marianas",
            "Plataforma continental"
        ],
        "correct": 0,
        "explanation": "La dorsal atlántica es una cordillera volcánica submarina donde nace nueva corteza oceánica.",
        "id": "q_g6_sociales_60"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la autoridad máxima que preside las sesiones de la Cámara de Senadores de la Nación Argentina?",
        "options": [
            "El Presidente de la Nación",
            "El Vicepresidente de la Nación",
            "El Ministro del Interior",
            "El Presidente de la Corte Suprema"
        ],
        "correct": 1,
        "explanation": "Por mandato constitucional, el Vicepresidente de la Nación ejerce la presidencia del Senado.",
        "id": "q_g6_sociales_61"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué actividad económica primaria se basa en la cría y reproducción de ganado para producción de carne y leche?",
        "options": [
            "Agricultura",
            "Ganadería",
            "Silvicultura",
            "Minería a cielo abierto"
        ],
        "correct": 1,
        "explanation": "La ganadería bovina, ovina y porcina es una de las actividades fundacionales del agro argentino.",
        "id": "q_g6_sociales_62"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué puerto fluvial de Santa Fe concentra gran parte de las exportaciones de granos y oleaginosas del país?",
        "options": [
            "Puerto Madryn",
            "Puerto de Rosario y el Gran Rosario",
            "Puerto Deseado",
            "Puerto Iguazú"
        ],
        "correct": 1,
        "explanation": "El polo agroindustrial del Gran Rosario sobre el Paraná es el mayor centro exportador cerealero del país.",
        "id": "q_g6_sociales_63"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué tipo de energía renovable aprovecha el calor interno de las profundidades de la Tierra?",
        "options": [
            "Energía mareomotriz",
            "Energía geotérmica",
            "Energía eólica",
            "Energía biomasa"
        ],
        "correct": 1,
        "explanation": "La energía geotérmica aprovecha vapor y aguas termales subterráneas para generar calor y electricidad.",
        "id": "q_g6_sociales_64"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el segundo río más extenso de América del Sur después del Amazonas?",
        "options": [
            "Río Orinoco",
            "Río Paraná",
            "Río San Francisco",
            "Río Magdalena"
        ],
        "correct": 1,
        "explanation": "El río Paraná recorre más de 4.800 kilómetros a través de Brasil, Paraguay y Argentina.",
        "id": "q_g6_sociales_65"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué hito marcó la sanción de la Ley 1420 en 1884 en Argentina?",
        "options": [
            "Creación del Banco Central",
            "Educación primaria obligatoria, gratuita y gradual para todos los niños",
            "El voto femenino",
            "La abolición de la esclavitud"
        ],
        "correct": 1,
        "explanation": "La Ley 1420 garantizó la escolarización básica laica y universal reduciendo drásticamente el analfabetismo.",
        "id": "q_g6_sociales_66"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué provincia patagónica alberga los valles del Alto Valle dedicados a la producción de peras y manzanas?",
        "options": [
            "Neuquén y Río Negro",
            "Santa Cruz",
            "Tierra del Fuego",
            "Chubut cordillerano"
        ],
        "correct": 0,
        "explanation": "El Alto Valle del Río Negro y Neuquén es el corazón frutícola de pomáceas de Argentina.",
        "id": "q_g6_sociales_67"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el tribunal judicial de mayor jerarquía en el sistema de justicia argentino?",
        "options": [
            "El Juzgado de Primera Instancia",
            "La Corte Suprema de Justicia de la Nación",
            "La Cámara Federal de Apelaciones",
            "El Tribunal Oral"
        ],
        "correct": 1,
        "explanation": "La Corte Suprema es el máximo intérprete y custodio de la Constitución Nacional.",
        "id": "q_g6_sociales_68"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué provincia argentina es famosa por la Quebrada de Humahuaca, declarada Patrimonio de la Humanidad?",
        "options": [
            "Salta",
            "Jujuy",
            "Tucumán",
            "La Rioja"
        ],
        "correct": 1,
        "explanation": "La Quebrada de Humahuaca en Jujuy combina paisajes multicolores y tradiciones milenarias andinas.",
        "id": "q_g6_sociales_69"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denomina el conjunto de personas nacidas en un país que residen fuera de sus fronteras patrias?",
        "options": [
            "Inmigrantes locales",
            "Emigrantes o diáspora",
            "Nómades",
            "Refugiados políticos"
        ],
        "correct": 1,
        "explanation": "Quienes emigran y viven en el extranjero forman la comunidad emigrante o diáspora.",
        "id": "q_g6_sociales_70"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué importante conflicto armado enfrentó a Argentina, Brasil y Uruguay contra Paraguay entre 1865 y 1870?",
        "options": [
            "Guerra del Pacífico",
            "Guerra de la Triple Alianza",
            "Guerra del Chaco",
            "Guerra de Secesión"
        ],
        "correct": 1,
        "explanation": "La Guerra de la Triple Alianza diezmó demográficamente a la República del Paraguay.",
        "id": "q_g6_sociales_71"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el área metropolitana que reúne a la Capital Federal y a más de 30 partidos bonaerenses?",
        "options": [
            "Cuyo",
            "El Gran Buenos Aires (AMBA)",
            "El Valle de Uco",
            "La Pampa Alta"
        ],
        "correct": 1,
        "explanation": "El Área Metropolitana de Buenos Aires concentra cerca del 37% de la población nacional.",
        "id": "q_g6_sociales_72"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué recurso mineral no metálico abunda en los salares de la Puna argentina (Jujuy, Salta y Catamarca)?",
        "options": [
            "El carbón",
            "El litio",
            "El yeso",
            "El granito"
        ],
        "correct": 1,
        "explanation": "El litio del 'Triángulo del Litio' es estratégico para la fabricación de baterías recargables y vehículos eléctricos.",
        "id": "q_g6_sociales_73"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Quién fue el primer presidente de la República Argentina unificada constitucionalmente en 1862?",
        "options": [
            "Justo José de Urquiza",
            "Bartolomé Mitre",
            "Santiago Derqui",
            "Nicolás Avellaneda"
        ],
        "correct": 1,
        "explanation": "Bartolomé Mitre consolidó la unificación estatal tras la batalla de Pavón.",
        "id": "q_g6_sociales_74"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama la franja de 200 millas náuticas marítimas donde los países costeros tienen derechos de explotación exclusiva?",
        "options": [
            "Mar territorial",
            "Zona Económica Exclusiva (ZEE)",
            "Aguas internacionales",
            "Fosa abisal"
        ],
        "correct": 1,
        "explanation": "La ZEE o mar patrimonial otorga exclusividad sobre la pesca y recursos del lecho marino a la nación costera.",
        "id": "q_g6_sociales_75"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué bioma chaqueño se caracteriza por quebrachos, algarrobos y clima subtropical con estación seca?",
        "options": [
            "El Parque Chaqueño o Monte",
            "La Selva Valdiviana",
            "La Estepa Pampeana",
            "El Tundral Fueguino"
        ],
        "correct": 0,
        "explanation": "El bosque chaqueño alberga maderas duras como el quebracho colorado, rico en taninos para curtir cuero.",
        "id": "q_g6_sociales_76"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el documento internacional fundamental aprobado por la ONU en 1948 que consagra derechos inalienables?",
        "options": [
            "Pacto de San José",
            "Declaración Universal de los Derechos Humanos",
            "Tratado de Versalles",
            "Protocolo de Kioto"
        ],
        "correct": 1,
        "explanation": "La Declaración consagra la libertad, igualdad y dignidad humana para todos los pueblos del mundo.",
        "id": "q_g6_sociales_77"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué acontecimiento mundial ocurrido en 1929 provocó una gran crisis económica y el fin del auge agroexportador?",
        "options": [
            "La Primera Guerra Mundial",
            "La Gran Depresión (caída de la Bolsa de Wall Street)",
            "La Revolución Rusa",
            "La Segunda Guerra Mundial"
        ],
        "correct": 1,
        "explanation": "El crac de 1929 desplomó el comercio internacional y los precios de las materias primas agrícolas.",
        "id": "q_g6_sociales_78"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué relieve predomina en la provincia de Misiones con suelos rojos ricos en óxidos de hierro?",
        "options": [
            "Llanura pampeana",
            "Meseta misionera ondulada con sierras",
            "Alta montaña andina",
            "Depresión salina"
        ],
        "correct": 1,
        "explanation": "Misiones presenta un relieve mesetiforme ondulado erosionado por ríos y arroyos selváticos.",
        "id": "q_g6_sociales_79"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama el proceso de crecimiento y expansión acelerada de las ciudades y la población urbana?",
        "options": [
            "Urbanización",
            "Ruralización",
            "Industrialización básica",
            "Migración estacional"
        ],
        "correct": 0,
        "explanation": "La urbanización concentra servicios, transporte y viviendas en núcleos urbanos.",
        "id": "q_g6_sociales_80"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué provincia cuyana es famosa por el Parque Provincial Ischigualasto o 'Valle de la Luna'?",
        "options": [
            "Mendoza",
            "San Juan",
            "San Luis",
            "La Rioja"
        ],
        "correct": 1,
        "explanation": "Ischigualasto en San Juan conserva fósiles de dinosaurios del período Triásico de valor paleontológico único.",
        "id": "q_g6_sociales_81"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Quién fue el sanjuanino autor de 'Facundo' que ejerció la presidencia argentina entre 1868 y 1874?",
        "options": [
            "Bartolomé Mitre",
            "Domingo Faustino Sarmiento",
            "Nicolás Avellaneda",
            "Carlos Pellegrini"
        ],
        "correct": 1,
        "explanation": "Sarmiento fundó observatorios astronómicos, el telégrafo, academias militares e impulsó la educación popular.",
        "id": "q_g6_sociales_82"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué tipo de migración ocurre cuando los trabajadores se desplazan temporalmente a otra región para la cosecha?",
        "options": [
            "Migración definitiva",
            "Migración golondrina o estacional",
            "Exilio forzoso",
            "Turismo ecológico"
        ],
        "correct": 1,
        "explanation": "Los trabajadores golondrina siguen el calendario estacional de cosechas de vid, frutas o caña.",
        "id": "q_g6_sociales_83"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el principal paso cordillerano internacional que conecta Mendoza con Santiago de Chile?",
        "options": [
            "Paso de Jama",
            "Paso Cristo Redentor / Los Libertadores",
            "Paso Cardenal Samoré",
            "Paso de San Francisco"
        ],
        "correct": 1,
        "explanation": "El túnel internacional Cristo Redentor canaliza el mayor tráfico comercial carretero del Cono Sur.",
        "id": "q_g6_sociales_84"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denomina la forma de gobierno en la que los ciudadanos eligen a sus representantes para legislar y gobernar?",
        "options": [
            "Democracia representativa",
            "Monarquía absoluta",
            "Teocracia",
            "Oligarquía cerrada"
        ],
        "correct": 0,
        "explanation": "El artículo 22 de la Constitución Nacional consagra que 'el pueblo no delibera ni gobierna sino por medio de sus representantes'.",
        "id": "q_g6_sociales_85"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué parque nacional ubicado en La Rioja impresiona por sus paredones rojizos de más de 150 metros?",
        "options": [
            "Parque Nacional Talampaya",
            "Parque Nacional Iguazú",
            "Parque Nacional El Palmar",
            "Parque Nacional Calilegua"
        ],
        "correct": 0,
        "explanation": "Talampaya es Patrimonio de la Humanidad por sus formaciones sedimentarias y restos triásicos.",
        "id": "q_g6_sociales_86"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué producto agropecuario de exportación experimentó un auge exponencial en Argentina desde fines del siglo XX?",
        "options": [
            "El trigo candeal",
            "La soja (soya)",
            "El lino textil",
            "La cebada forrajera"
        ],
        "correct": 1,
        "explanation": "El cultivo de soja transgénica con siembra directa transformó el paisaje productivo pampeano y chaqueño.",
        "id": "q_g6_sociales_87"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la capital de la provincia de Corrientes?",
        "options": [
            "Goya",
            "Corrientes",
            "Paso de los Libres",
            "Mercedes"
        ],
        "correct": 1,
        "explanation": "La ciudad de Corrientes fue fundada en 1588 a orillas del río Paraná como San Juan de Vera de las Siete Corrientes.",
        "id": "q_g6_sociales_88"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué acuerdo entre las provincias permitió redactar la Constitución Nacional en 1853?",
        "options": [
            "Pacto de San José de Flores",
            "Acuerdo de San Nicolás de los Arroyos",
            "Tratado del Pilar",
            "Pacto Federal de 1831"
        ],
        "correct": 1,
        "explanation": "El Acuerdo de San Nicolás firmado en 1852 convocó al Congreso General Constituyente en Santa Fe.",
        "id": "q_g6_sociales_89"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué línea imaginaria del hemisferio sur pasa por el norte de las provincias de Jujuy, Salta y Formosa?",
        "options": [
            "Círculo Polar Antártico",
            "Trópico de Capricornio",
            "Trópico de Cáncer",
            "El Ecuador"
        ],
        "correct": 1,
        "explanation": "El Trópico de Capricornio (latitud 23° 26' S) cruza el norte de la República Argentina.",
        "id": "q_g6_sociales_90"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es el puerto más profundo de aguas marítimas del sur de la provincia de Buenos Aires?",
        "options": [
            "Puerto de Mar del Plata",
            "Puerto de Bahía Blanca (Ingeniero White)",
            "Puerto de Quequén",
            "Puerto Madryn"
        ],
        "correct": 1,
        "explanation": "Ingeniero White en Bahía Blanca es un puerto cerealero, petroquímico y de aguas profundas.",
        "id": "q_g6_sociales_91"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se denomina la relación entre la cantidad de habitantes y la superficie territorial que ocupan (hab/km²)?",
        "options": [
            "Población absoluta",
            "Densidad de población",
            "Tasa de natalidad",
            "Esperanza de vida"
        ],
        "correct": 1,
        "explanation": "La densidad poblacional mide la concentración de habitantes por unidad de superficie geográfica.",
        "id": "q_g6_sociales_92"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué provincia argentina limita exclusivamente con provincias de su mismo país y no tiene fronteras internacionales ni costa?",
        "options": [
            "Córdoba",
            "Mendoza",
            "Jujuy",
            "Santa Cruz"
        ],
        "correct": 0,
        "explanation": "Córdoba es una provincia mediterránea central rodeada por siete provincias argentinas.",
        "id": "q_g6_sociales_93"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál fue la gran obra de infraestructura que conectó las provincias de Santa Fe y Entre Ríos bajo el lecho del río Paraná en 1969?",
        "options": [
            "El Puente Zárate-Brazo Largo",
            "El Túnel Subfluvial Raúl Uranga - Carlos Sylvestre Begnis",
            "El Puente Rosario-Victoria",
            "La represa Yacyretá"
        ],
        "correct": 1,
        "explanation": "El Túnel Subfluvial unió por primera vez a la Mesopotamia con el territorio continental argentino.",
        "id": "q_g6_sociales_94"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué rama del poder del Estado se encarga de debatir, redactar y aprobar las leyes?",
        "options": [
            "Poder Ejecutivo",
            "Poder Legislativo (Congreso)",
            "Poder Judicial",
            "Poder Electoral"
        ],
        "correct": 1,
        "explanation": "El Poder Legislativo compuesto por diputados y senadores ejerce la potestad legislativa.",
        "id": "q_g6_sociales_95"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué provincia patagónica alberga a la ciudad de San Carlos de Bariloche?",
        "options": [
            "Chubut",
            "Río Negro",
            "Neuquén",
            "Santa Cruz"
        ],
        "correct": 1,
        "explanation": "Bariloche se encuentra a orillas del lago Nahuel Huapi en el suroeste rionegrino.",
        "id": "q_g6_sociales_96"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cómo se llama la actividad extractiva que obtiene minerales e hidrocarburos del suelo y subsuelo?",
        "options": [
            "Actividad forestal",
            "Minería",
            "Acuicultura",
            "Piscicultura"
        ],
        "correct": 1,
        "explanation": "La minería extrae recursos metalíferos, no metalíferos y combustibles fósiles.",
        "id": "q_g6_sociales_97"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué censo nacional periódico realiza el INDEC para contar y caracterizar a todos los habitantes del país?",
        "options": [
            "Censo Nacional de Población, Hogares y Viviendas",
            "Padrón electoral barrial",
            "Encuesta de salarios",
            "Censo agropecuario de granos"
        ],
        "correct": 0,
        "explanation": "El Censo de Población se realiza cada diez años para relevar variables demográficas y sociales.",
        "id": "q_g6_sociales_98"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Cuál es la ciudad más austral del planeta, capital de Tierra del Fuego?",
        "options": [
            "Río Grande",
            "Ushuaia",
            "Punta Arenas",
            "Tolhuin"
        ],
        "correct": 1,
        "explanation": "Ushuaia se emplaza en la costa septentrional del Canal Beagle rodeada de montañas nevadas.",
        "id": "q_g6_sociales_99"
    },
    {
        "grade": 6,
        "category": "sociales",
        "question": "¿Qué tratado internacional de 1959 consagró a la Antártida exclusivamente para la paz y la investigación científica?",
        "options": [
            "Tratado de Kioto",
            "Tratado Antártico",
            "Pacto de Roma",
            "Acuerdo de París"
        ],
        "correct": 1,
        "explanation": "El Tratado Antártico congeló reclamos territoriales y prohibió bases militares y ensayos atómicos en el continente blanco.",
        "id": "q_g6_sociales_100"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué científico argentino recibió el Premio Nobel de Medicina en 1970 por sus descubrimientos sobre el metabolismo de los azúcares?",
        "options": [
            "Bernardo Houssay",
            "Luis Federico Leloir",
            "César Milstein",
            "René Favaloro"
        ],
        "correct": 1,
        "explanation": "Luis Federico Leloir descubrió los nucleótidos azúcares y su rol biosintético en hidratos de carbono.",
        "id": "q_g6_ingenio_41"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo de lógica: Un granjero debe cruzar un río en bote con un lobo, una cabra y una coliflor. ¿A quién cruza primero para que nadie se coma a nadie?",
        "options": [
            "Al lobo",
            "A la cabra",
            "A la coliflor",
            "A todos juntos"
        ],
        "correct": 1,
        "explanation": "Cruza primero a la cabra: el lobo no come vegetales (la coliflor queda a salvo) y luego puede avanzar alternando viajes.",
        "id": "q_g6_ingenio_42"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el telescopio espacial lanzado por la NASA y la ESA en 2021 que orbita a 1,5 millones de kilómetros observando en infrarrojo?",
        "options": [
            "Hubble",
            "James Webb Space Telescope (JWST)",
            "Kepler",
            "Spitzer"
        ],
        "correct": 1,
        "explanation": "El James Webb despegó en diciembre de 2021 y capta las primeras galaxias del Universo temprano.",
        "id": "q_g6_ingenio_43"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Si 3 gatos tardan 3 minutos en cazar 3 ratones, ¿cuántos minutos tardarán 100 gatos en cazar 100 ratones?",
        "options": [
            "100 minutos",
            "3 minutos",
            "30 minutos",
            "1 minuto"
        ],
        "correct": 1,
        "explanation": "Cada gato tarda 3 minutos en cazar a su propio ratón en paralelo; por tanto, 100 gatos cazando 100 ratones tardan los mismos 3 minutos.",
        "id": "q_g6_ingenio_44"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué médico argentino revolucionó la cirugía cardiovascular mundial con la técnica del bypass aortocoronario?",
        "options": [
            "César Milstein",
            "René Favaloro",
            "Salvador Mazza",
            "Alberto Houssay"
        ],
        "correct": 1,
        "explanation": "René Favaloro estandarizó en la Cleveland Clinic en 1967 el bypass de vena safena salvando millones de vidas.",
        "id": "q_g6_ingenio_45"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Tengo ciudades pero no casas, tengo montañas pero no árboles, tengo ríos pero no agua. ¿Qué soy?",
        "options": [
            "Un sueño",
            "Un mapa geográfico",
            "Un espejismo",
            "Un desierto"
        ],
        "correct": 1,
        "explanation": "El mapa cartográfico representa todos esos accidentes geográficos en dibujo sin materia física real.",
        "id": "q_g6_ingenio_46"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el instrumento musical andino milenario formado por hileras de cañas de longitudes decrecientes?",
        "options": [
            "El charango",
            "La zampoña o sikus",
            "El bombo",
            "La quena solitaria"
        ],
        "correct": 1,
        "explanation": "El siku o zampoña es una flauta de pan andina típica del altiplano.",
        "id": "q_g6_ingenio_47"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Quién descubrió accidentalmente la penicilina en 1928 al observar moho eliminando bacterias en una placa de Petri?",
        "options": [
            "Louis Pasteur",
            "Alexander Fleming",
            "Robert Koch",
            "Edward Jenner"
        ],
        "correct": 1,
        "explanation": "Sir Alexander Fleming observó cómo el hongo Penicillium notatum inhibía colonias de estafilococos.",
        "id": "q_g6_ingenio_48"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Si un número multiplicado por sí mismo da 144, ¿cuál es ese número?",
        "options": [
            "11",
            "12",
            "14",
            "16"
        ],
        "correct": 1,
        "explanation": "12 × 12 = 144 (la raíz cuadrada de 144 es 12).",
        "id": "q_g6_ingenio_49"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué escritor argentino ciego dirigió la Biblioteca Nacional y escribió obras maestras como 'El Aleph' y 'Ficciones'?",
        "options": [
            "Julio Cortázar",
            "Jorge Luis Borges",
            "Ernesto Sabato",
            "Adolfo Bioy Casares"
        ],
        "correct": 1,
        "explanation": "Borges es una de las figuras cumbres de la literatura universal del siglo XX.",
        "id": "q_g6_ingenio_50"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: El padre de Rosa tiene 5 hijas: Chacha, Cheche, Chichi, Chocho y... ¿cómo se llama la quinta?",
        "options": [
            "Chuchu",
            "Rosa",
            "Rocío",
            "Chancha"
        ],
        "correct": 1,
        "explanation": "El acertijo comienza diciendo claramente: 'El padre de Rosa tiene 5 hijas...'.",
        "id": "q_g6_ingenio_51"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la montaña más alta del mundo si se mide desde el nivel del mar hasta la cima?",
        "options": [
            "K2",
            "Monte Everest",
            "Kangchenjunga",
            "Aconcagua"
        ],
        "correct": 1,
        "explanation": "El Everest en la cordillera del Himalaya alcanza los 8.848 metros sobre el nivel del mar.",
        "id": "q_g6_ingenio_52"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué físico teórico británico formuló la ley de gravitación universal al ver caer una manzana?",
        "options": [
            "Albert Einstein",
            "Isaac Newton",
            "Galileo Galilei",
            "Stephen Hawking"
        ],
        "correct": 1,
        "explanation": "Isaac Newton publicó en 1687 sus célebres 'Philosophiae Naturalis Principia Mathematica'.",
        "id": "q_g6_ingenio_53"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué se rompe en el momento exacto en que alguien pronuncia su nombre?",
        "options": [
            "El cristal",
            "El silencio",
            "El secreto",
            "Una promesa"
        ],
        "correct": 1,
        "explanation": "Al hablar y emitir cualquier sonido, el silencio se rompe instantáneamente.",
        "id": "q_g6_ingenio_54"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué paleontólogo descubrió en Neuquén al Argentinosaurus, uno de los dinosaurios más colosales que pisaron la Tierra?",
        "options": [
            "Florentino Ameghino",
            "Rodolfo Coria y José Bonaparte",
            "Charles Darwin",
            "Carlos Ameghino"
        ],
        "correct": 1,
        "explanation": "El Argentinosaurus huinculensis medía casi 40 metros de longitud y pesaba cerca de 80 toneladas.",
        "id": "q_g6_ingenio_55"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el valor aproximado de la constante matemática Pi (π) con dos decimales?",
        "options": [
            "2,14",
            "3,14",
            "3,41",
            "4,13"
        ],
        "correct": 1,
        "explanation": "Pi es la razón entre la longitud de una circunferencia y su diámetro: 3,14159... ≈ 3,14.",
        "id": "q_g6_ingenio_56"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si me nombras, desaparezco; si me guardas, existo; si me compartes, muero. ¿Qué soy?",
        "options": [
            "La sombra",
            "Un secreto",
            "El aire",
            "El eco"
        ],
        "correct": 1,
        "explanation": "Al contar un secreto deja de ser secreto para convertirse en información pública.",
        "id": "q_g6_ingenio_57"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué célebre compositor alemán compuso la Novena Sinfonía ('Himno a la Alegría') estando completamente sordo?",
        "options": [
            "Wolfgang Amadeus Mozart",
            "Ludwig van Beethoven",
            "Johann Sebastian Bach",
            "Frédéric Chopin"
        ],
        "correct": 1,
        "explanation": "Beethoven completó la monumental Novena Sinfonía en 1824 a pesar de su sordera profunda.",
        "id": "q_g6_ingenio_58"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el país más grande del mundo en extensión territorial?",
        "options": [
            "Canadá",
            "Rusia",
            "China",
            "Estados Unidos"
        ],
        "correct": 1,
        "explanation": "Rusia abarca más de 17 millones de kilómetros cuadrados a lo largo de Europa y Asia.",
        "id": "q_g6_ingenio_59"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué rueda puede girar en un auto sin tocar el asfalto cuando está en movimiento?",
        "options": [
            "La rueda delantera izquierda",
            "La rueda de auxilio (en el baúl)",
            "La rueda trasera derecha",
            "El volante de dirección"
        ],
        "correct": 1,
        "explanation": "La rueda de auxilio va guardada en el baúl sin tocar el suelo.",
        "id": "q_g6_ingenio_60"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué químico y biólogo francés inventó la pasteurización y la vacuna contra la rabia?",
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Antoine Lavoisier",
            "Robert Koch"
        ],
        "correct": 1,
        "explanation": "Pasteur demostró la teoría microbiana de las enfermedades y desarrolló la vacuna antirrábica en 1885.",
        "id": "q_g6_ingenio_61"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuántos ceros tiene el número un millón?",
        "options": [
            "5 ceros",
            "6 ceros",
            "7 ceros",
            "9 ceros"
        ],
        "correct": 1,
        "explanation": "Un millón se escribe 1.000.000 (seis ceros después del uno).",
        "id": "q_g6_ingenio_62"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué mes del año tiene un nombre que se escribe con tres letras?",
        "options": [
            "Junio",
            "Mayo",
            "Julio",
            "Abril"
        ],
        "correct": 1,
        "explanation": "M-A-Y-O tiene 4 letras, pero en la variante de la adivinanza en inglés o español clásico: ¿cuál tiene menos? (Mayo tiene 4; en inglés May tiene 3). En español: ¿cuál es el mes más corto en nombre? Mayo (4 letras).",
        "id": "q_g6_ingenio_63"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué inventor serbocroata desarrolló la corriente alterna (CA) y el motor de inducción eléctrica?",
        "options": [
            "Thomas Edison",
            "Nikola Tesla",
            "Guglielmo Marconi",
            "Michael Faraday"
        ],
        "correct": 1,
        "explanation": "Nikola Tesla patentó el sistema polifásico de corriente alterna que ilumina el mundo actual.",
        "id": "q_g6_ingenio_64"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Dónde puedes encontrar un océano sin agua, una ciudad sin edificios y un bosque sin hojas?",
        "options": [
            "En la Luna",
            "En un mapa",
            "En una película",
            "En un desierto"
        ],
        "correct": 1,
        "explanation": "En un mapa cartográfico todo está graficado simbólicamente sobre el papel.",
        "id": "q_g6_ingenio_65"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué Premio Nobel de la Paz argentino fundó el Servicio Paz y Justicia (SERPAJ) y denunció violaciones a derechos humanos?",
        "options": [
            "Carlos Saavedra Lamas",
            "Adolfo Pérez Esquivel",
            "César Milstein",
            "Ernesto Guevara"
        ],
        "correct": 1,
        "explanation": "Adolfo Pérez Esquivel recibió el Premio Nobel de la Paz en 1980 por su labor pacifista.",
        "id": "q_g6_ingenio_66"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la velocidad aproximada a la que viaja la luz en el vacío?",
        "options": [
            "300.000 kilómetros por hora",
            "300.000 kilómetros por segundo",
            "1.000.000 km/s",
            "30.000 km/s"
        ],
        "correct": 1,
        "explanation": "La velocidad de la luz en el vacío (c) es de aproximadamente 299.792 km/s.",
        "id": "q_g6_ingenio_67"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Cuanto más húmedo seca, más mojado se pone. ¿Qué es?",
        "options": [
            "Una esponja",
            "Una toalla",
            "Un jabón",
            "El sol"
        ],
        "correct": 1,
        "explanation": "La toalla absorbe el agua al secar el cuerpo, mojándose a medida que cumple su función.",
        "id": "q_g6_ingenio_68"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué famosa obra renacentista de Miguel Ángel decora la bóveda de la Capilla Sixtina en el Vaticano?",
        "options": [
            "La última cena",
            "La creación de Adán",
            "La escuela de Atenas",
            "La anunciación"
        ],
        "correct": 1,
        "explanation": "Miguel Ángel Buonarroti pintó los frescos monumentales del Génesis entre 1508 y 1512.",
        "id": "q_g6_ingenio_69"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la cascada más alta del mundo de caída libre ininterrumpida, ubicada en Venezuela?",
        "options": [
            "Cataratas del Niágara",
            "Salto Ángel (Kerepakupai Merú)",
            "Cataratas Victoria",
            "Cataratas del Iguazú"
        ],
        "correct": 1,
        "explanation": "El Salto Ángel en el Parque Nacional Canaima cae desde casi 979 metros de altura.",
        "id": "q_g6_ingenio_70"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo de parentesco: El hermano del hijo de mi padre es mi...",
        "options": [
            "Tío",
            "Hermano",
            "Primo",
            "Sobrino"
        ],
        "correct": 1,
        "explanation": "El hijo de mi padre soy yo (o un hermano); por ende, su hermano es mi propio hermano.",
        "id": "q_g6_ingenio_71"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué científica polaco-francesa fue la primera persona en ganar dos Premios Nobel en distintas disciplinas (Física y Química)?",
        "options": [
            "Rosalind Franklin",
            "Marie Curie",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "correct": 1,
        "explanation": "Marie Curie investigó la radiactividad y descubrió el polonio y el radio.",
        "id": "q_g6_ingenio_72"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la capital del Reino Unido, atravesada por el río Támesis?",
        "options": [
            "Edimburgo",
            "Londres",
            "Dublín",
            "Mánchester"
        ],
        "correct": 1,
        "explanation": "Londres es la capital política y económica británica desde la época romana.",
        "id": "q_g6_ingenio_73"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si un médico te receta 3 pastillas para tomar una cada media hora, ¿en cuántos minutos terminas de tomar todas?",
        "options": [
            "En 90 minutos",
            "En 60 minutos",
            "En 30 minutos",
            "En 120 minutos"
        ],
        "correct": 1,
        "explanation": "Tomas la 1ª en el minuto 0; la 2ª en el minuto 30; y la 3ª en el minuto 60. Pasan exactamente 60 minutos.",
        "id": "q_g6_ingenio_74"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué satélite artificial de comunicaciones argentino fue lanzado en 2014 por la empresa estatal ARSAT?",
        "options": [
            "SAOCOM 1A",
            "ARSAT-1",
            "Pehuensat-1",
            "SAC-D Aquarius"
        ],
        "correct": 1,
        "explanation": "ARSAT-1 fue el primer satélite geoestacionario diseñado y ensamblado íntegramente en Argentina.",
        "id": "q_g6_ingenio_75"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el instrumento de cuerdas pulsadas semejante a una guitarra pequeña tradicional de la música folclórica andina?",
        "options": [
            "El ukelele",
            "El charango",
            "El banjo",
            "El laúd"
        ],
        "correct": 1,
        "explanation": "El charango posee 5 pares de cuerdas dobles y una caja históricamente de caparazón de armadillo o madera.",
        "id": "q_g6_ingenio_76"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si estás en un cuarto oscuro con una cerilla y ves una vela, un candil y una chimenea, ¿qué enciendes primero?",
        "options": [
            "La vela",
            "La cerilla o fósforo",
            "El candil",
            "La chimenea"
        ],
        "correct": 1,
        "explanation": "Necesitas encender la cerilla antes de poder prender cualquiera de las otras fuentes de luz o calor.",
        "id": "q_g6_ingenio_77"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué célebre astrónomo italiano perfeccionó el telescopio y descubrió cuatro lunas principales de Júpiter en 1610?",
        "options": [
            "Nicolás Copérnico",
            "Galileo Galilei",
            "Johannes Kepler",
            "Tycho Brahe"
        ],
        "correct": 1,
        "explanation": "Galileo descubrió a Ío, Europa, Ganimedes y Calisto respaldando la teoría heliocéntrica.",
        "id": "q_g6_ingenio_78"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el estrecho marítimo natural que separa España de Marruecos conectando el Atlántico con el Mediterráneo?",
        "options": [
            "Estrecho de Bering",
            "Estrecho de Gibraltar",
            "Estrecho de Ormuz",
            "Estrecho de Dardanelos"
        ],
        "correct": 1,
        "explanation": "El Estrecho de Gibraltar tiene apenas 14 kilómetros de ancho en su paso más angosto.",
        "id": "q_g6_ingenio_79"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Tengo agujas pero no coso, no tengo pies pero ando sin parar y tengo cara pero no ojos. ¿Qué soy?",
        "options": [
            "Una brújula",
            "Un reloj de pared",
            "Un cactus",
            "Una balanza"
        ],
        "correct": 1,
        "explanation": "El reloj analógico tiene agujas horarias y minuteras sobre su esfera o cuadrante ('cara').",
        "id": "q_g6_ingenio_80"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué biólogo británico publicó en 1859 'El origen de las especies' explicando la evolución por selección natural?",
        "options": [
            "Gregor Mendel",
            "Charles Darwin",
            "Alfred Wallace",
            "Jean-Baptiste Lamarck"
        ],
        "correct": 1,
        "explanation": "Darwin consolidó su teoría tras su histórico viaje alrededor del mundo a bordo del HMS Beagle.",
        "id": "q_g6_ingenio_81"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la ciudadela inca construida en lo alto de la cordillera de los Andes en Perú considerada maravilla del mundo?",
        "options": [
            "Tiahuanaco",
            "Machu Picchu",
            "Chan Chan",
            "Cuzco Viejo"
        ],
        "correct": 1,
        "explanation": "Machu Picchu fue edificada en el siglo XV y redescubierta científicamente en 1911 por Hiram Bingham.",
        "id": "q_g6_ingenio_82"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué palabra tiene cinco sílabas y más de veinte letras?",
        "options": [
            "Electrocardiograma",
            "El abecedario",
            "Inconstitucional",
            "Esternocleidomastoideo"
        ],
        "correct": 1,
        "explanation": "El acertijo juega con el concepto: 'el a-be-ce-da-rio' (5 sílabas) y reúne a las 27 letras del alfabeto.",
        "id": "q_g6_ingenio_83"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué juego de ingenio inventado por el húngaro Ernő Rubik en 1974 consiste en ordenar caras de colores en un cubo 3x3x3?",
        "options": [
            "Tetris",
            "Cubo Mágico o Cubo de Rubik",
            "Tangram",
            "Sokoban"
        ],
        "correct": 1,
        "explanation": "El cubo de Rubik cuenta con más de 43 trillones de combinaciones posibles.",
        "id": "q_g6_ingenio_84"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la capital de la República Francesa, conocida como 'la Ciudad de la Luz'?",
        "options": [
            "Lyon",
            "París",
            "Marsella",
            "Burdeos"
        ],
        "correct": 1,
        "explanation": "París alberga hitos mundiales como la Torre Eiffel, la Catedral de Notre-Dame y el Museo del Louvre.",
        "id": "q_g6_ingenio_85"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Dos padres y dos hijos fueron a pescar; pescaron tres peces y a cada uno le tocó un pez entero. ¿Cómo fue posible?",
        "options": [
            "Compraron otro pez",
            "Eran el abuelo, el padre y el nieto (3 personas en total)",
            "Pescaron peces gigantes",
            "Uno no comió"
        ],
        "correct": 1,
        "explanation": "El abuelo es padre del padre; el padre es hijo del abuelo y padre del nieto: son 3 personas en total.",
        "id": "q_g6_ingenio_86"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Quién inventó el sistema de escritura táctil de puntos en relieve para personas ciegas en 1824?",
        "options": [
            "Louis Braille",
            "Valentin Haüy",
            "Samuel Morse",
            "Alexander Bell"
        ],
        "correct": 1,
        "explanation": "Louis Braille ideó una matriz de seis puntos que revolucionó la alfabetización de personas con discapacidad visual.",
        "id": "q_g6_ingenio_87"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el lago navegable más alto del mundo, compartido entre Bolivia y Perú?",
        "options": [
            "Lago Maracaibo",
            "Lago Titicaca",
            "Lago Nahuel Huapi",
            "Lago Poopó"
        ],
        "correct": 1,
        "explanation": "El Titicaca se eleva a más de 3.812 metros sobre el nivel del mar en el altiplano andino.",
        "id": "q_g6_ingenio_88"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué número multiplicado por cualquier otro número da siempre cero?",
        "options": [
            "El 1",
            "El 0",
            "El infinito",
            "El -1"
        ],
        "correct": 1,
        "explanation": "El cero es el elemento absorbente de la multiplicación: x × 0 = 0.",
        "id": "q_g6_ingenio_89"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué ingeniero y pionero argentino transmitió por primera vez radio en el mundo desde el Teatro Coliseo en 1920?",
        "options": [
            "Enrique Susini y 'Los Locos de la Azotea'",
            "Ladislao Biró",
            "Guillermo Marconi",
            "Juan Vucetich"
        ],
        "correct": 0,
        "explanation": "Los Locos de la Azotea emitieron la ópera Parsifal el 27 de agosto de 1920, hito pionero mundial.",
        "id": "q_g6_ingenio_90"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el metal líquido a temperatura ambiente que se utilizaba tradicionalmente en los termómetros clínicos?",
        "options": [
            "Plata",
            "Mercurio (Hg)",
            "Plomo",
            "Galio"
        ],
        "correct": 1,
        "explanation": "El mercurio se dilata uniformemente con la temperatura corporal pero fue reemplazado por ser tóxico.",
        "id": "q_g6_ingenio_91"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si un pato pone un huevo en la línea fronteriza entre Argentina y Brasil, ¿a qué país pertenece el huevo?",
        "options": [
            "A Argentina",
            "A Brasil",
            "A ninguno, los patos machos no ponen huevos",
            "A ambos por partes iguales"
        ],
        "correct": 2,
        "explanation": "El acertijo habla de 'un pato' (macho); solo las patas hembras ponen huevos.",
        "id": "q_g6_ingenio_92"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué escritor de aventuras de ciencia ficción del siglo XIX escribió 'Viaje al centro de la Tierra' y 'De la Tierra a la Luna'?",
        "options": [
            "H.G. Wells",
            "Julio Verne",
            "Arthur Conan Doyle",
            "Edgar Allan Poe"
        ],
        "correct": 1,
        "explanation": "Julio Verne anticipó con asombrosa precisión submarinos nucleares, viajes espaciales y helicópteros.",
        "id": "q_g6_ingenio_93"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué tipo de instrumento óptico permite ver objetos microscópicos con aumentos de hasta 100.000 veces usando haces de electrones?",
        "options": [
            "Microscopio óptico simple",
            "Microscopio electrónico de transmisión",
            "Telescopio reflector",
            "Cámara estenopeica"
        ],
        "correct": 1,
        "explanation": "El microscopio electrónico utiliza longitudes de onda electrónicas extremadamente cortas para ver virus y moléculas.",
        "id": "q_g6_ingenio_94"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué tiene un solo ojo pero no puede ver nada?",
        "options": [
            "Un cíclope tuerto",
            "Una aguja de coser",
            "Una cerradura",
            "Una tormenta"
        ],
        "correct": 1,
        "explanation": "El orificio por donde se enhebra el hilo en la aguja de coser se llama popularmente 'ojo'.",
        "id": "q_g6_ingenio_95"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es la obra pictórica monumental de Pablo Picasso que denuncia el bombardeo aéreo de una villa vasca en 1937?",
        "options": [
            "Las señoritas de Avignon",
            "Guernica",
            "El viejo guitarrista",
            "Los tres músicos"
        ],
        "correct": 1,
        "explanation": "El 'Guernica' es un símbolo antibélico universal expuesto en el Museo Reina Sofía de Madrid.",
        "id": "q_g6_ingenio_96"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Cuál es el único mamífero cubierto de duras escamas de queratina que se enrolla en una bola acorazada?",
        "options": [
            "El armadillo",
            "El pangolín",
            "El oso hormiguero",
            "El equidna"
        ],
        "correct": 1,
        "explanation": "Los pangolines son mamíferos placentarios cuyas escamas protectoras cubren todo su cuerpo dorsal.",
        "id": "q_g6_ingenio_97"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "Acertijo: Si tienes un fósforo y entras a una cabaña a oscuras con una vela apagada y una lámpara de aceite, ¿qué prendes primero?",
        "options": [
            "La vela",
            "El fósforo",
            "La lámpara",
            "La estufa"
        ],
        "correct": 1,
        "explanation": "Sin prender la cerilla o fósforo no se puede encender ningún artefacto luminiscente.",
        "id": "q_g6_ingenio_98"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Qué cordillera asiática posee 14 cumbres que superan los 8.000 metros sobre el nivel del mar?",
        "options": [
            "Los Andes",
            "El Himalaya y Karakórum",
            "Los Alpes",
            "Las Rocosas"
        ],
        "correct": 1,
        "explanation": "El Himalaya concentra los 'ochomiles' del mundo, coronados por el Everest y el K2.",
        "id": "q_g6_ingenio_99"
    },
    {
        "grade": 6,
        "category": "ingenio",
        "question": "¿Quién inventó la imprenta de tipos móviles metálicos en Europa hacia 1440 facilitando la difusión masiva de libros?",
        "options": [
            "Johannes Gutenberg",
            "Leonardo da Vinci",
            "Galileo Galilei",
            "Marco Polo"
        ],
        "correct": 0,
        "explanation": "Gutenberg imprimió en Maguncia la célebre Biblia de 42 líneas transformando la historia de la cultura humana.",
        "id": "q_g6_ingenio_100"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la operación con enteros: (-8) × (-4)?",
        "options": [
            "-32",
            "32",
            "-12",
            "12"
        ],
        "correct": 1,
        "explanation": "Por la regla de los signos, el producto de dos números negativos da un resultado positivo: (-8) × (-4) = +32.",
        "id": "q_g7_matematica_41"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si 2x + 7 = 19, ¿cuál es el valor de la incógnita 'x'?",
        "options": [
            "5",
            "6",
            "7",
            "12"
        ],
        "correct": 1,
        "explanation": "Restamos 7 a ambos miembros: 2x = 19 - 7 = 12; luego dividimos por 2: x = 12 ÷ 2 = 6.",
        "id": "q_g7_matematica_42"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En un triángulo rectángulo, los catetos miden 6 cm y 8 cm. ¿Cuánto mide la hipotenusa (Teorema de Pitágoras)?",
        "options": [
            "10 cm",
            "12 cm",
            "14 cm",
            "100 cm"
        ],
        "correct": 0,
        "explanation": "h² = 6² + 8² = 36 + 64 = 100; por lo tanto, h = √100 = 10 cm.",
        "id": "q_g7_matematica_43"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la operación combinada: (-15) + 20 ÷ (-4)?",
        "options": [
            "-20",
            "-10",
            "10",
            "-5"
        ],
        "correct": 0,
        "explanation": "Primero se resuelve la división: 20 ÷ (-4) = -5; luego sumamos: (-15) + (-5) = -20.",
        "id": "q_g7_matematica_44"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se expresa el número 450.000 en notación científica?",
        "options": [
            "45 × 10⁴",
            "4,5 × 10⁵",
            "4,5 × 10⁴",
            "0,45 × 10⁶"
        ],
        "correct": 1,
        "explanation": "En notación científica el coeficiente debe estar entre 1 y 10: 4,5 × 10⁵.",
        "id": "q_g7_matematica_45"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si 4 obreros tardan 12 días en construir un muro, ¿cuántos días tardarán 8 obreros trabajando al mismo ritmo (proporcionalidad inversa)?",
        "options": [
            "24 días",
            "6 días",
            "8 días",
            "4 días"
        ],
        "correct": 1,
        "explanation": "Al duplicar la cantidad de obreros se reduce a la mitad el tiempo: (4 × 12) ÷ 8 = 48 ÷ 8 = 6 días.",
        "id": "q_g7_matematica_46"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor de (-3)³?",
        "options": [
            "-9",
            "9",
            "-27",
            "27"
        ],
        "correct": 2,
        "explanation": "Una base negativa elevada a un exponente impar da resultado negativo: (-3) × (-3) × (-3) = -27.",
        "id": "q_g7_matematica_47"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la moda del siguiente conjunto de datos: 4, 7, 7, 8, 9, 7, 10, 4?",
        "options": [
            "4",
            "7",
            "8",
            "9"
        ],
        "correct": 1,
        "explanation": "La moda es el valor que aparece con mayor frecuencia; el 7 se repite 3 veces.",
        "id": "q_g7_matematica_48"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es la raíz cuadrada de (-5)²?",
        "options": [
            "-5",
            "5",
            "25",
            "No tiene solución real"
        ],
        "correct": 1,
        "explanation": "(-5)² = 25; la raíz cuadrada principal de 25 es 5.",
        "id": "q_g7_matematica_49"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En una recta numérica, ¿qué número entero está ubicado a la misma distancia de -4 y de +6?",
        "options": [
            "0",
            "+1",
            "+2",
            "-1"
        ],
        "correct": 1,
        "explanation": "El punto medio es (-4 + 6) ÷ 2 = 2 ÷ 2 = +1.",
        "id": "q_g7_matematica_50"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si el 15% de una cantidad es 45, ¿cuál es esa cantidad total?",
        "options": [
            "300",
            "250",
            "450",
            "600"
        ],
        "correct": 0,
        "explanation": "Planteando la ecuación: 0,15 × X = 45 -> X = 45 ÷ 0,15 = 300.",
        "id": "q_g7_matematica_51"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la mediana del conjunto ordenado: 3, 5, 7, 9, 11, 13, 15?",
        "options": [
            "7",
            "9",
            "8",
            "11"
        ],
        "correct": 1,
        "explanation": "Al ser 7 elementos ordenados, la mediana es el elemento central ubicado en la posición 4: 9.",
        "id": "q_g7_matematica_52"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Dos ángulos alternos internos determinados por dos rectas paralelas cortadas por una secante son:",
        "options": [
            "Suplementarios",
            "Complementarios",
            "Iguales (congruentes)",
            "Adyacentes rectos"
        ],
        "correct": 2,
        "explanation": "Los ángulos alternos internos entre paralelas tienen exactamente la misma amplitud.",
        "id": "q_g7_matematica_53"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el volumen de un cilindro de radio 3 cm y altura 10 cm (usando π ≈ 3,14)?",
        "options": [
            "94,2 cm³",
            "188,4 cm³",
            "282,6 cm³",
            "314 cm³"
        ],
        "correct": 2,
        "explanation": "Volumen = π × r² × h = 3,14 × (3 cm)² × 10 cm = 3,14 × 9 × 10 = 282,6 cm³.",
        "id": "q_g7_matematica_54"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la solución de la ecuación 3x - 5 = x + 7?",
        "options": [
            "4",
            "6",
            "8",
            "12"
        ],
        "correct": 1,
        "explanation": "3x - x = 7 + 5 -> 2x = 12 -> x = 6.",
        "id": "q_g7_matematica_55"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es (-2)⁴?",
        "options": [
            "-16",
            "+16",
            "-8",
            "+8"
        ],
        "correct": 1,
        "explanation": "Una base negativa elevada a una potencia par da siempre signo positivo: (-2)⁴ = +16.",
        "id": "q_g7_matematica_56"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si se arrojan dos monedas equilibradas al aire, ¿cuál es la probabilidad de que ambas caigan cara?",
        "options": [
            "1/2",
            "1/4",
            "3/4",
            "1/8"
        ],
        "correct": 1,
        "explanation": "Los 4 casos posibles equiprobables son (C,C), (C,X), (X,C), (X,X). Cara-cara es 1 de 4 (1/4 = 25%).",
        "id": "q_g7_matematica_57"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Qué nombre recibe una igualdad matemática que contiene una o más incógnitas?",
        "options": [
            "Identidad fija",
            "Ecuación",
            "Inecuación",
            "Polinomio nulo"
        ],
        "correct": 1,
        "explanation": "Una ecuación es una igualdad condicionada que solo se verifica para ciertos valores de la variable.",
        "id": "q_g7_matematica_58"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la pendiente 'm' de la recta dada por la función lineal y = 3x - 2?",
        "options": [
            "-2",
            "3",
            "3/2",
            "-3"
        ],
        "correct": 1,
        "explanation": "En la ecuación explícita y = mx + b, el coeficiente que acompaña a 'x' es la pendiente: m = 3.",
        "id": "q_g7_matematica_59"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es el resultado de 10⁻² (diez a la menos dos)?",
        "options": [
            "-20",
            "-100",
            "0,01",
            "0,1"
        ],
        "correct": 2,
        "explanation": "10⁻² = 1 / 10² = 1 / 100 = 0,01.",
        "id": "q_g7_matematica_60"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el área total de las 6 caras de un cubo de 4 cm de arista?",
        "options": [
            "64 cm²",
            "96 cm²",
            "16 cm²",
            "24 cm²"
        ],
        "correct": 1,
        "explanation": "Cada cara mide 4 × 4 = 16 cm²; las 6 caras suman 16 × 6 = 96 cm².",
        "id": "q_g7_matematica_61"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de restar: (-12) - (-7)?",
        "options": [
            "-19",
            "-5",
            "+5",
            "+19"
        ],
        "correct": 1,
        "explanation": "Restar un negativo equivale a sumar su opuesto: (-12) + 7 = -5.",
        "id": "q_g7_matematica_62"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "En un plano cartesiano, ¿en qué cuadrante se encuentra el punto de coordenadas (-3, +5)?",
        "options": [
            "Primer cuadrante",
            "Segundo cuadrante",
            "Tercer cuadrante",
            "Cuarto cuadrante"
        ],
        "correct": 1,
        "explanation": "El segundo cuadrante tiene abscisas negativas (x < 0) y ordenadas positivas (y > 0).",
        "id": "q_g7_matematica_63"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es la suma de los ángulos exteriores de cualquier polígono convexo?",
        "options": [
            "180°",
            "360°",
            "540°",
            "720°"
        ],
        "correct": 1,
        "explanation": "La suma de los ángulos exteriores de cualquier polígono convexo, sin importar sus lados, es siempre 360°.",
        "id": "q_g7_matematica_64"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si el precio de un artículo con 21% de IVA incluido es de $1.210, ¿cuál era su precio neto antes del IVA?",
        "options": [
            "$1.000",
            "$1.100",
            "$990",
            "$1.050"
        ],
        "correct": 0,
        "explanation": "Precio neto = 1.210 ÷ 1,21 = $1.000.",
        "id": "q_g7_matematica_65"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor numérico de la expresión algebraica 2a² - 3b cuando a = 3 y b = 2?",
        "options": [
            "10",
            "12",
            "14",
            "18"
        ],
        "correct": 1,
        "explanation": "2 × (3)² - 3 × (2) = 2 × 9 - 6 = 18 - 6 = 12.",
        "id": "q_g7_matematica_66"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se denomina la rama de la matemática que recolecta, organiza, analiza e interpreta datos numéricos?",
        "options": [
            "Geometría analítica",
            "Estadística",
            "Topología",
            "Trigonometría"
        ],
        "correct": 1,
        "explanation": "La estadística proporciona métodos para estudiar muestras poblacionales y extraer conclusiones.",
        "id": "q_g7_matematica_67"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es 5⁰ (cinco elevado a la cero)?",
        "options": [
            "0",
            "1",
            "5",
            "Indeterminado"
        ],
        "correct": 1,
        "explanation": "Por propiedad de las potencias, todo número real distinto de cero elevado a la potencia cero es igual a 1.",
        "id": "q_g7_matematica_68"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el perímetro de una circunferencia de diámetro 10 cm (usando π ≈ 3,14)?",
        "options": [
            "15,7 cm",
            "31,4 cm",
            "62,8 cm",
            "78,5 cm"
        ],
        "correct": 1,
        "explanation": "Longitud = π × diámetro = 3,14 × 10 cm = 31,4 cm.",
        "id": "q_g7_matematica_69"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Qué tipo de proporcionalidad existe entre la velocidad de un móvil y el tiempo que tarda en recorrer una distancia fija?",
        "options": [
            "Proporcionalidad directa",
            "Proporcionalidad inversa",
            "No guardan relación",
            "Exponencial pura"
        ],
        "correct": 1,
        "explanation": "A mayor velocidad se requiere menor tiempo para completar el trayecto (proporcionalidad inversa).",
        "id": "q_g7_matematica_70"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la raíz cuadrada de 144?",
        "options": [
            "11",
            "12",
            "13",
            "14"
        ],
        "correct": 1,
        "explanation": "12 × 12 = 144.",
        "id": "q_g7_matematica_71"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Resuelve: (-2) × (+3) × (-4) = ?",
        "options": [
            "-24",
            "+24",
            "-12",
            "+12"
        ],
        "correct": 1,
        "explanation": "(-2) × (+3) = -6; luego (-6) × (-4) = +24.",
        "id": "q_g7_matematica_72"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor de 'y' en la ecuación 5y = 35?",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correct": 2,
        "explanation": "y = 35 ÷ 5 = 7.",
        "id": "q_g7_matematica_73"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se llama el punto de intersección entre las tres alturas de un triángulo?",
        "options": [
            "Baricentro",
            "Ortocentro",
            "Incentro",
            "Circuncentro"
        ],
        "correct": 1,
        "explanation": "El ortocentro es el punto geométrico donde concurren las tres rectas que contienen las alturas.",
        "id": "q_g7_matematica_74"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de simplificar la fracción algebraica (4x) / (2x) con x ≠ 0?",
        "options": [
            "2x",
            "2",
            "4",
            "x"
        ],
        "correct": 1,
        "explanation": "Dividiendo numerador y denominador por 2x se obtiene 2.",
        "id": "q_g7_matematica_75"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es la media aritmética de los números 10, 20, 30, 40 y 50?",
        "options": [
            "25",
            "30",
            "35",
            "40"
        ],
        "correct": 1,
        "explanation": "Suma = 150; dividido entre 5: 150 ÷ 5 = 30.",
        "id": "q_g7_matematica_76"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Qué teorema establece que si tres o más rectas paralelas son cortadas por dos transversales, los segmentos determinados son proporcionales?",
        "options": [
            "Teorema de Pitágoras",
            "Teorema de Thales",
            "Teorema de Fermat",
            "Teorema de Euclides"
        ],
        "correct": 1,
        "explanation": "El Teorema de Thales fundamenta la semejanza de triángulos y proporciones de segmentos.",
        "id": "q_g7_matematica_77"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el opuesto del número (-19)?",
        "options": [
            "-19",
            "+19",
            "0",
            "1/19"
        ],
        "correct": 1,
        "explanation": "El opuesto de un número es aquel que sumado a él da cero: -(-19) = +19.",
        "id": "q_g7_matematica_78"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el área de un trapecio cuyas bases miden 10 cm y 6 cm, y su altura mide 4 cm?",
        "options": [
            "24 cm²",
            "32 cm²",
            "40 cm²",
            "64 cm²"
        ],
        "correct": 1,
        "explanation": "Área = [(B + b) × h] ÷ 2 = [(10 + 6) × 4] ÷ 2 = (16 × 4) ÷ 2 = 64 ÷ 2 = 32 cm².",
        "id": "q_g7_matematica_79"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es (-1)⁹⁹?",
        "options": [
            "+1",
            "-1",
            "-99",
            "0"
        ],
        "correct": 1,
        "explanation": "-1 elevado a cualquier exponente impar conserva el signo negativo: -1.",
        "id": "q_g7_matematica_80"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Qué nombre recibe el conjunto de números que incluye a los naturales, el cero y los negativos enteros?",
        "options": [
            "Números Naturales (N)",
            "Números Enteros (Z)",
            "Números Racionales (Q)",
            "Números Irracionales (I)"
        ],
        "correct": 1,
        "explanation": "El conjunto Z comprende los enteros positivos, el cero y los enteros negativos.",
        "id": "q_g7_matematica_81"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de calcular 2⁵ ÷ 2² aplicando propiedades de potencias de igual base?",
        "options": [
            "2³ (o sea 8)",
            "2⁷ (o sea 128)",
            "2¹⁰",
            "2²"
        ],
        "correct": 0,
        "explanation": "En el cociente de potencias de igual base se restan los exponentes: 2⁵⁻² = 2³ = 8.",
        "id": "q_g7_matematica_82"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si una escala gráfica indica que 1 cm representa 50 km reales, ¿cuántos km representan 4,5 cm?",
        "options": [
            "150 km",
            "200 km",
            "225 km",
            "250 km"
        ],
        "correct": 2,
        "explanation": "4,5 cm × 50 km/cm = 225 km.",
        "id": "q_g7_matematica_83"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el valor de la incógnita en x/4 = 9?",
        "options": [
            "32",
            "36",
            "40",
            "45"
        ],
        "correct": 1,
        "explanation": "Multiplicando ambos lados por 4: x = 9 × 4 = 36.",
        "id": "q_g7_matematica_84"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se llaman dos rectas coplanares que nunca se cortan por más que se prolonguen?",
        "options": [
            "Perpendiculares",
            "Paralelas",
            "Oblicuas",
            "Coincidentes"
        ],
        "correct": 1,
        "explanation": "Las rectas paralelas mantienen una distancia constante y no comparten puntos comunes.",
        "id": "q_g7_matematica_85"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es la probabilidad de obtener el número 5 al lanzar un dado estándar equilibrado de 6 caras?",
        "options": [
            "1/2",
            "1/5",
            "1/6",
            "5/6"
        ],
        "correct": 2,
        "explanation": "Hay un solo caso favorable entre 6 resultados posibles: 1/6.",
        "id": "q_g7_matematica_86"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es (-10) + (-15)?",
        "options": [
            "-25",
            "+25",
            "-5",
            "+5"
        ],
        "correct": 0,
        "explanation": "Sumar dos cantidades negativas acumula el valor negativo: -25.",
        "id": "q_g7_matematica_87"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el área de un romboide de base 12 cm y altura 5 cm?",
        "options": [
            "30 cm²",
            "60 cm²",
            "17 cm²",
            "45 cm²"
        ],
        "correct": 1,
        "explanation": "Área = base × altura = 12 cm × 5 cm = 60 cm².",
        "id": "q_g7_matematica_88"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el número que verifica la ecuación x² = 49 para valores positivos?",
        "options": [
            "6",
            "7",
            "8",
            "9"
        ],
        "correct": 1,
        "explanation": "7 × 7 = 49.",
        "id": "q_g7_matematica_89"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se denomina la recta que pasa por el punto medio de un segmento de forma perpendicular?",
        "options": [
            "Bisectriz",
            "Mediatriz",
            "Mediana",
            "Altura"
        ],
        "correct": 1,
        "explanation": "La mediatriz es el lugar geométrico de los puntos que equidistan de los extremos del segmento.",
        "id": "q_g7_matematica_90"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es 3⁻¹?",
        "options": [
            "-3",
            "1/3",
            "0,3",
            "-1/3"
        ],
        "correct": 1,
        "explanation": "Un exponente -1 invierte la base numérica: 1/3.",
        "id": "q_g7_matematica_91"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de la operación: | -8 | + | +5 |?",
        "options": [
            "-3",
            "3",
            "13",
            "-13"
        ],
        "correct": 2,
        "explanation": "El valor absoluto de -8 es 8 y el de +5 es 5; sumados dan 8 + 5 = 13.",
        "id": "q_g7_matematica_92"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si un triángulo tiene lados de 5 cm, 12 cm y 13 cm, ¿qué tipo de triángulo es según el teorema de Pitágoras?",
        "options": [
            "Acutángulo",
            "Rectángulo",
            "Obtusángulo",
            "Equilátero"
        ],
        "correct": 1,
        "explanation": "5² + 12² = 25 + 144 = 169 = 13²; al cumplirse Pitágoras es un triángulo rectángulo.",
        "id": "q_g7_matematica_93"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuánto es el 75% de 200?",
        "options": [
            "120",
            "140",
            "150",
            "160"
        ],
        "correct": 2,
        "explanation": "El 75% equivale a tres cuartas partes: (200 ÷ 4) × 3 = 50 × 3 = 150.",
        "id": "q_g7_matematica_94"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el punto de intersección entre las tres bisectrices de los ángulos de un triángulo?",
        "options": [
            "Incentro",
            "Circuncentro",
            "Ortocentro",
            "Baricentro"
        ],
        "correct": 0,
        "explanation": "El incentro es el centro de la circunferencia inscripta tangente a los tres lados del triángulo.",
        "id": "q_g7_matematica_95"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de (-4) × 0 × (-7)?",
        "options": [
            "28",
            "0",
            "-28",
            "11"
        ],
        "correct": 1,
        "explanation": "Cualquier producto que contenga al cero como factor es igual a cero.",
        "id": "q_g7_matematica_96"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cómo se llama la rama de la estadística que se encarga de representar datos mediante gráficos de barras o tortas?",
        "options": [
            "Estadística descriptiva",
            "Cálculo infinitesimal",
            "Topología",
            "Álgebra abstracta"
        ],
        "correct": 0,
        "explanation": "La estadística descriptiva resume, clasifica y gráfica conjuntos de observaciones numéricas.",
        "id": "q_g7_matematica_97"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el resultado de (2³)⁴ aplicando potencia de otra potencia?",
        "options": [
            "2⁷",
            "2¹²",
            "2⁶",
            "2¹"
        ],
        "correct": 1,
        "explanation": "En potencia de potencia se multiplican los exponentes: 3 × 4 = 12, es decir 2¹².",
        "id": "q_g7_matematica_98"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "Si en una clase de 30 alumnos el 60% son mujeres, ¿cuántos varones hay en total?",
        "options": [
            "12",
            "18",
            "10",
            "15"
        ],
        "correct": 0,
        "explanation": "El 40% son varones: 30 × 0,40 = 12 varones (o 30 - 18 = 12).",
        "id": "q_g7_matematica_99"
    },
    {
        "grade": 7,
        "category": "matematica",
        "question": "¿Cuál es el volumen de un prisma rectangular recto de base 5 cm por 4 cm y altura 10 cm?",
        "options": [
            "100 cm³",
            "200 cm³",
            "150 cm³",
            "250 cm³"
        ],
        "correct": 1,
        "explanation": "Volumen = ancho × largo × alto = 5 × 4 × 10 = 200 cm³.",
        "id": "q_g7_matematica_100"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué filósofo y teórico literario definió lo fantástico como la vacilación o duda entre una explicación natural y una sobrenatural?",
        "options": [
            "Roland Barthes",
            "Tzvetan Todorov",
            "Umberto Eco",
            "Gérard Genette"
        ],
        "correct": 1,
        "explanation": "Todorov postuló en su 'Introducción a la literatura fantástica' la vacilación del lector ante lo inexplicable.",
        "id": "q_g7_lengua_41"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de coordinación oracional une proposiciones mediante conjunciones como 'o', 'o bien' expresando alternativa?",
        "options": [
            "Coordinación copulativa",
            "Coordinación disyuntiva",
            "Coordinación adversativa",
            "Coordinación consecutiva"
        ],
        "correct": 1,
        "explanation": "Las oraciones coordinadas disyuntivas ofrecen opciones excluyentes o alternativas.",
        "id": "q_g7_lengua_42"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál de las siguientes figuras retóricas reúne en una misma expresión dos términos de significado opuesto que parecen contradecirse (ej: 'un silencio ensordecedor')?",
        "options": [
            "Oxímoron",
            "Metáfora",
            "Pleonasmo",
            "Hipérbole"
        ],
        "correct": 0,
        "explanation": "El oxímoron combina dos conceptos opuestos en una misma unidad de sentido generando un significado poético nuevo.",
        "id": "q_g7_lengua_43"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la oración 'El juez dictó la sentencia con severidad', la construcción 'con severidad' funciona como:",
        "options": [
            "Objeto directo",
            "Circunstancial de modo",
            "Complemento agente",
            "Objeto indirecto"
        ],
        "correct": 1,
        "explanation": "Responde a ¿cómo o de qué modo dictó la sentencia?: circunstancial de modo.",
        "id": "q_g7_lengua_44"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué subgénero policial se caracteriza por escenarios urbanos decadentes, detectives cínicos y crimen organizado (hard-boiled)?",
        "options": [
            "Policial de enigma o cuarto cerrado",
            "Policial negro (hard-boiled)",
            "Novela pastoril",
            "Cuento de hadas"
        ],
        "correct": 1,
        "explanation": "El policial negro nació en EE.UU. en los años 1930 con autores como Dashiell Hammett y Raymond Chandler.",
        "id": "q_g7_lengua_45"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el valor del pretérito pluscuamperfecto de indicativo en la correlación temporal?",
        "options": [
            "Acción futura previa a otra",
            "Acción pasada anterior a otra acción también pasada",
            "Acción simultánea en presente",
            "Orden directa"
        ],
        "correct": 1,
        "explanation": "El pluscuamperfecto ('había llegado') indica una acción ya concluida antes de otro hito pasado.",
        "id": "q_g7_lengua_46"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se denomina el fenómeno semántico por el cual una misma palabra posee múltiples significados relacionados entre sí?",
        "options": [
            "Sinonimia",
            "Polisemia",
            "Antonimia",
            "Homonimia estricta"
        ],
        "correct": 1,
        "explanation": "La polisemia se produce cuando un término adquiere varios sentidos derivados de una misma raíz (ej: banco, copa).",
        "id": "q_g7_lengua_47"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En el análisis de un texto argumentativo, ¿cómo se llama la afirmación central o postura debatible que defiende el emisor?",
        "options": [
            "Contraargumento",
            "Tesis",
            "Conclusión",
            "Premisa menor"
        ],
        "correct": 1,
        "explanation": "La tesis es la idea medular o juicio de valor que el autor sostiene mediante argumentos probatorios.",
        "id": "q_g7_lengua_48"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué figura retórica consiste en atribuir sensaciones de un sentido corporal a otro diferente (ej: 'un sonido amargo', 'un color chillón')?",
        "options": [
            "Sinestesia",
            "Metonimia",
            "Hipérbole",
            "Anáfora"
        ],
        "correct": 0,
        "explanation": "La sinestesia mezcla percepciones sensoriales visuales, gustativas, táctiles, olfativas o auditivas.",
        "id": "q_g7_lengua_49"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de proposición subordinada reemplaza al núcleo de un adjetivo y va introducida por pronombres como 'que', 'quien', 'cuyo'?",
        "options": [
            "Proposición subordinada sustantiva",
            "Proposición subordinada adjetiva (o de relativo)",
            "Proposición subordinada adverbial",
            "Proposición coordinada"
        ],
        "correct": 1,
        "explanation": "Las subordinadas adjetivas modifican a un sustantivo antecedente dentro de la oración compuesta.",
        "id": "q_g7_lengua_50"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el tiempo del verbo 'hubiéramos cantado'?",
        "options": [
            "Pretérito imperfecto de subjuntivo",
            "Pretérito pluscuamperfecto de subjuntivo",
            "Condicional compuesto",
            "Futuro de indicativo"
        ],
        "correct": 1,
        "explanation": "El pluscuamperfecto de subjuntivo se forma con el auxiliar 'hubiera' o 'hubiese' más el participio.",
        "id": "q_g7_lengua_51"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué recurso de persuasión consiste en citar las palabras textuales de un especialista reconocido para validar un argumento?",
        "options": [
            "Pregunta retórica",
            "Cita de autoridad",
            "Ejemplificación",
            "Concesión"
        ],
        "correct": 1,
        "explanation": "La cita de autoridad apoya la tesis respaldándose en el prestigio intelectual del autor citado.",
        "id": "q_g7_lengua_52"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En la métrica poética española, si un verso finaliza en una palabra aguda, para el cómputo silábico:",
        "options": [
            "Se resta una sílaba",
            "Se suma una sílaba métrica (+1)",
            "Permanece inalterada",
            "Se duplican las sílabas"
        ],
        "correct": 1,
        "explanation": "Por ley del acento final, las palabras agudas al final del verso añaden una sílaba métrica al total.",
        "id": "q_g7_lengua_53"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la figura retórica que altera intencionalmente el orden habitual de las palabras en la oración (ej: 'Del salón en el ángulo oscuro')?",
        "options": [
            "Hipérbaton",
            "Oxímoron",
            "Elipsis",
            "Metonimia"
        ],
        "correct": 0,
        "explanation": "El hipérbaton invierte la sintaxis lógica tradicional con propósitos de estilo o ritmo métrico.",
        "id": "q_g7_lengua_54"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué función sintáctica desempeña 'por el jurado' en 'La obra fue premiada por el jurado'?",
        "options": [
            "Objeto directo",
            "Complemento agente",
            "Circunstancial de causa",
            "Objeto indirecto"
        ],
        "correct": 1,
        "explanation": "El complemento agente realiza la acción verbal en las construcciones oracionales de voz pasiva.",
        "id": "q_g7_lengua_55"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se denomina la sustitución metonímica de la parte por el todo (ej: 'Tiene quince primaveras' para referirse a años)?",
        "options": [
            "Sinécdoque",
            "Sinestesia",
            "Hipérbole",
            "Paradoja"
        ],
        "correct": 0,
        "explanation": "La sinécdoque es una especie de metonimia basada en relaciones cuantitativas de parte-todo o género-especie.",
        "id": "q_g7_lengua_56"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el modo verbal que expresa dudas, deseos, probabilidades o hipótesis no confirmadas?",
        "options": [
            "Modo indicativo",
            "Modo subjuntivo",
            "Modo imperativo",
            "Modo infinitivo"
        ],
        "correct": 1,
        "explanation": "El subjuntivo manifiesta la subjetividad, la irrealidad o la virtualidad del enunciado.",
        "id": "q_g7_lengua_57"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En una reseña crítica de cine o literatura, ¿cuál es el apartado donde el autor fundamenta su juicio de valor sobre la obra?",
        "options": [
            "La ficha técnica",
            "El comentario crítico o valoración",
            "La biografía del director",
            "La taquilla comercial"
        ],
        "correct": 1,
        "explanation": "El cuerpo crítico analiza aspectos temáticos, técnicos y estéticos emitiendo una opinión fundamentada.",
        "id": "q_g7_lengua_58"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de conector es 'en consecuencia' en el desarrollo de un texto?",
        "options": [
            "Conector consecutivo",
            "Conector adversativo",
            "Conector de adición",
            "Conector de espacio"
        ],
        "correct": 0,
        "explanation": "Los conectores consecutivos explicitan el efecto, consecuencia o derivación lógica de lo anterior.",
        "id": "q_g7_lengua_59"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el participio irregular del verbo 'morir'?",
        "options": [
            "Morido",
            "Muerto",
            "Muriendo",
            "Mortaja"
        ],
        "correct": 1,
        "explanation": "'Muerto' es el participio irregular consolidado en la lengua española.",
        "id": "q_g7_lengua_60"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se llama la coincidencia total de vocales y consonantes a partir de la última vocal acentuada en dos versos?",
        "options": [
            "Rima asonante",
            "Rima consonante",
            "Verso blanco",
            "Asonancia simple"
        ],
        "correct": 1,
        "explanation": "En la rima consonante (o perfecta) existe identidad fonética absoluta entre todos los fonemas finales.",
        "id": "q_g7_lengua_61"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el núcleo del predicado en la perífrasis verbal 'Los niños deben estudiar para el examen'?",
        "options": [
            "Los niños",
            "deben estudiar (perífrasis modal)",
            "para el examen",
            "estudiar solamente"
        ],
        "correct": 1,
        "explanation": "La perífrasis 'deben estudiar' funciona como un núcleo verbal único conjugado de matiz obligativo.",
        "id": "q_g7_lengua_62"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué figura retórica consiste en la repetición de una o más palabras al comienzo de versos o frases sucesivas?",
        "options": [
            "Anáfora",
            "Asíndeton",
            "Polisíndeton",
            "Retruécano"
        ],
        "correct": 0,
        "explanation": "La anáfora intensifica el ritmo lírico reiterando términos iniciales de modo sistemático.",
        "id": "q_g7_lengua_63"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué registro del habla se utiliza en ensayos académicos, exámenes formales e investigaciones científicas?",
        "options": [
            "Registro informal o coloquial",
            "Registro formal o estándar culto",
            "Registro vulgar",
            "Jerga juvenil"
        ],
        "correct": 1,
        "explanation": "El registro formal emplea léxico preciso, gramática normativa rigurosa y ausencia de modismos.",
        "id": "q_g7_lengua_64"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el antónimo léxico preciso de la palabra 'altruismo'?",
        "options": [
            "Generosidad",
            "Egoísmo",
            "Empatía",
            "Solidaridad"
        ],
        "correct": 1,
        "explanation": "El altruismo procura el bien ajeno desinteresadamente, mientras que el egoísmo antepone el interés propio.",
        "id": "q_g7_lengua_65"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En el ensayo, ¿qué tipo de argumento se basa en datos estadísticos, mediciones o hechos científicamente contrastados?",
        "options": [
            "Argumento de hecho o de datos objetivos",
            "Argumento emotivo",
            "Argumento de tradición",
            "Falacia ad hominem"
        ],
        "correct": 0,
        "explanation": "Los argumentos de hechos aportan pruebas empíricas verificables difícilmente rebatibles.",
        "id": "q_g7_lengua_66"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se clasifica la palabra 'sabelotodo' según su proceso de formación léxica?",
        "options": [
            "Palabra simple",
            "Palabra compuesta",
            "Palabra derivada con sufijo",
            "Sigla"
        ],
        "correct": 1,
        "explanation": "Se compone de la yuxtaposición de formas verbales y pronombres: sabe + lo + todo.",
        "id": "q_g7_lengua_67"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de narrador cuenta la historia alternando entre lo que presencia y lo que le contaron sin ser el eje de la trama?",
        "options": [
            "Narrador testigo",
            "Narrador protagonista",
            "Narrador en segunda persona",
            "Narrador autorial"
        ],
        "correct": 0,
        "explanation": "El testigo narra desde la periferia de los hechos usando la primera y tercera persona.",
        "id": "q_g7_lengua_68"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la función del conector adversativo 'no obstante'?",
        "options": [
            "Sumar elementos",
            "Introducir una objeción o restricción que no impide el hecho",
            "Señalar la causa",
            "Marcar el cierre"
        ],
        "correct": 1,
        "explanation": "'No obstante' actúa como conector adversativo o concesivo matizando la aseveración previa.",
        "id": "q_g7_lengua_69"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué signo de puntuación se utiliza para indicar una cita textual exacta tomada de otro autor?",
        "options": [
            "Las comillas",
            "Los guiones bajos",
            "Los corchetes",
            "Las barras inclinadas"
        ],
        "correct": 0,
        "explanation": "Las comillas encierran las palabras textuales de una fuente bibliográfica o testimonio ajeno.",
        "id": "q_g7_lengua_70"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la función sintáctica de 'a su hermano' en 'Felipe abrazó con afecto a su hermano'?",
        "options": [
            "Objeto Directo",
            "Objeto Indirecto",
            "Complemento agente",
            "Circunstancial"
        ],
        "correct": 0,
        "explanation": "Responde a ¿a quién abrazó? y puede ser reemplazado por 'lo': 'Felipe lo abrazó con afecto'.",
        "id": "q_g7_lengua_71"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué recurso estilístico omite intencionalmente las conjunciones coordinantes entre frases (ej: 'Llegué, vi, vencí')?",
        "options": [
            "Asíndeton",
            "Polisíndeton",
            "Anáfora",
            "Elipsis nominal"
        ],
        "correct": 0,
        "explanation": "El asíndeton prescinde de nexos copulativos agilizando el dinamismo expresivo del enunciado.",
        "id": "q_g7_lengua_72"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el valor del condicional compuesto de indicativo ('habría salido')?",
        "options": [
            "Hecho futuro certero",
            "Acción hipotética que hubiera ocurrido en el pasado pero no sucedió",
            "Mandato inmediato",
            "Presente continuo"
        ],
        "correct": 1,
        "explanation": "Expresa una acción potencial o frustrada en relación con una condición pasada no cumplida.",
        "id": "q_g7_lengua_73"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se denomina la unión métrica de la vocal final de una palabra con la vocal inicial de la siguiente en un verso?",
        "options": [
            "Hiato",
            "Sinalefa",
            "Diéresis",
            "Sinéresis"
        ],
        "correct": 1,
        "explanation": "La sinalefa permite computar como una única sílaba métrica el enlace de vocales contiguas.",
        "id": "q_g7_lengua_74"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué figura retórica consiste en designar una cosa con el nombre de otra en virtud de una relación de causa-efecto o continente-contenido (ej: 'Bebió un vaso entero')?",
        "options": [
            "Metáfora pura",
            "Metonimia",
            "Pleonasmo",
            "Antítesis"
        ],
        "correct": 1,
        "explanation": "La metonimia opera por contigüidad semántica (el continente 'vaso' por el líquido contenido).",
        "id": "q_g7_lengua_75"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el núcleo del sujeto en 'La misteriosa desaparición del cuadro causó conmoción'?",
        "options": [
            "misteriosa",
            "desaparición",
            "cuadro",
            "conmoción"
        ],
        "correct": 1,
        "explanation": "'Desaparición' es el sustantivo principal que gobierna la concordancia del verbo singular 'causó'.",
        "id": "q_g7_lengua_76"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de texto dramático se caracteriza por el desenlace funesto e ineludible de sus protagonistas por causa del destino?",
        "options": [
            "Comedia de enredos",
            "Tragedia",
            "Sainete festivo",
            "Farsa cómica"
        ],
        "correct": 1,
        "explanation": "La tragedia clásica enfrenta a los héroes contra fuerzas superiores y pasiones que culminan en catástrofe.",
        "id": "q_g7_lengua_77"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué clase de palabra es 'según' en 'Actuaron según las normas'?",
        "options": [
            "Preposición",
            "Conjunción",
            "Adverbio",
            "Interjección"
        ],
        "correct": 0,
        "explanation": "'Según' integra la lista canónica de las preposiciones en el idioma español.",
        "id": "q_g7_lengua_78"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el sufijo apreciativo despectivo en la palabra 'pajarraco'?",
        "options": [
            "-aco",
            "-raco",
            "-arro",
            "-azo"
        ],
        "correct": 0,
        "explanation": "El sufijo '-aco' aporta un matiz peyorativo o burlesco al sustantivo pájaro.",
        "id": "q_g7_lengua_79"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué caracteriza a la literatura policial de cuarto cerrado iniciada por Edgar Allan Poe?",
        "options": [
            "El crimen ocurre a la vista de testigos",
            "Un delito aparentemente imposible cometido en una habitación sellada por dentro",
            "Persecuciones a tiros",
            "El asesino se confiesa al inicio"
        ],
        "correct": 1,
        "explanation": "El misterio del cuarto cerrado ('Los crímenes de la calle Morgue') desafía la lógica deductiva pura.",
        "id": "q_g7_lengua_80"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la primera persona del singular del pretérito imperfecto de subjuntivo del verbo 'poner'?",
        "options": [
            "Pusiera o pusiese",
            "Pondría",
            "Puso",
            "Haya puesto"
        ],
        "correct": 0,
        "explanation": "Las dos formas normativas admitidas son 'pusiera' y 'pusiese'.",
        "id": "q_g7_lengua_81"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se llama la reiteración insistente e innecesaria de conjunciones coordinantes (ej: 'Y ríe, y llora, y sueña, y canta')?",
        "options": [
            "Polisíndeton",
            "Asíndeton",
            "Hipérbole",
            "Paradoja"
        ],
        "correct": 0,
        "explanation": "El polisíndeton multiplica los nexos otorgando solemnidad o lentitud solemne al verso.",
        "id": "q_g7_lengua_82"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué relación semántica vincula a 'vegetal' con 'lechuga'?",
        "options": [
            "Lechuga es hiperónimo de vegetal",
            "Vegetal es hiperónimo de lechuga (y lechuga su hipónimo)",
            "Son antónimos",
            "Son parónimos"
        ],
        "correct": 1,
        "explanation": "El término amplio e incluyente 'vegetal' es el hiperónimo de la especie 'lechuga'.",
        "id": "q_g7_lengua_83"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "En una argumentación, ¿qué es un contraargumento?",
        "options": [
            "La conclusión final",
            "Una objeción o razón contraria que se anticipa para refutarla",
            "Un ejemplo personal",
            "Un título atractivo"
        ],
        "correct": 1,
        "explanation": "El autor incorpora objeciones previsibles para desarticularlas y consolidar su postura.",
        "id": "q_g7_lengua_84"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el predicativo subjetivo obligatorio en 'Los estudiantes llegaron exhaustos'?",
        "options": [
            "Los estudiantes",
            "exhaustos",
            "llegaron",
            "a casa"
        ],
        "correct": 1,
        "explanation": "'Exhaustos' califica al sujeto 'estudiantes' a través de un verbo que modifica su predicación.",
        "id": "q_g7_lengua_85"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué obra cumbre de la literatura universal en español escribió Miguel de Cervantes Saavedra en 1605?",
        "options": [
            "La Celestina",
            "Don Quijote de la Mancha",
            "El cantar de mio Cid",
            "La vida es sueño"
        ],
        "correct": 1,
        "explanation": "El Quijote inauguró la novela moderna parodiando los libros de caballerías.",
        "id": "q_g7_lengua_86"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se llama la apelación directa al lector o interlocutor mediante vocativos o imperativos?",
        "options": [
            "Función referencial",
            "Función apelativa o conativa",
            "Función metalingüística",
            "Función poética"
        ],
        "correct": 1,
        "explanation": "La función apelativa busca influir en el comportamiento o provocar una respuesta en el destinatario.",
        "id": "q_g7_lengua_87"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el valor del prefijo de origen griego 'cron-' en palabras como 'cronómetro' o 'sincronía'?",
        "options": [
            "Espacio",
            "Tiempo",
            "Sonido",
            "Luz"
        ],
        "correct": 1,
        "explanation": "'Cronos' en la mitología y etimología griega personifica el paso del tiempo.",
        "id": "q_g7_lengua_88"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué figura retórica encierra una afirmación contradictoria en apariencia que esconde una verdad profunda?",
        "options": [
            "Paradoja",
            "Metáfora",
            "Pleonasmo",
            "Asíndeton"
        ],
        "correct": 0,
        "explanation": "La paradoja desafía la lógica convencional para iluminar un sentido filosófico sutil.",
        "id": "q_g7_lengua_89"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el conector adecuado para cerrar ordenadamente un texto expositivo?",
        "options": [
            "En primer lugar",
            "En conclusión (o en síntesis)",
            "Por consiguiente",
            "Por el contrario"
        ],
        "correct": 1,
        "explanation": "'En conclusión' señala al lector el inicio del remate o recapitulación final del escrito.",
        "id": "q_g7_lengua_90"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se denomina el conjunto de recursos que aseguran la correcta conexión sintáctica y semántica entre oraciones de un texto?",
        "options": [
            "Coherencia y cohesión",
            "Adecuación rítmica",
            "Rima consonante",
            "Prosodia"
        ],
        "correct": 0,
        "explanation": "La cohesión gramatical y la coherencia global hacen que un texto sea interpretable como unidad de sentido.",
        "id": "q_g7_lengua_91"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el sujeto tácito en 'Reconocimos nuestros errores a tiempo'?",
        "options": [
            "Ellos",
            "Nosotros / Nosotras",
            "Ustedes",
            "Yo"
        ],
        "correct": 1,
        "explanation": "La desinencia verbal de primera persona del plural determina 'nosotros' como sujeto desinencial.",
        "id": "q_g7_lengua_92"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué forma verbal no personal funciona como adjetivo en 'puerta cerrada'?",
        "options": [
            "El infinitivo",
            "El gerundio",
            "El participio pasivo",
            "El presente"
        ],
        "correct": 2,
        "explanation": "El participio concuerda en género y número con el sustantivo desempeñando función adjetiva.",
        "id": "q_g7_lengua_93"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cómo se llama la estrofa clásica de cuatro versos de arte mayor con rima consonante ABBA?",
        "options": [
            "Terceto",
            "Cuarteto",
            "Lira",
            "Romance"
        ],
        "correct": 1,
        "explanation": "El cuarteto poético se compone de 4 versos endecasílabos (11 sílabas) con esquema ABBA.",
        "id": "q_g7_lengua_94"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es la raíz de la palabra 'invisible'?",
        "options": [
            "in-",
            "vis- (o vid-, de ver)",
            "-ble",
            "visi-"
        ],
        "correct": 1,
        "explanation": "La raíz léxica es 'vis- (o vid-, de ver)' que proviene del latín y significa ver; 'in-' es el prefijo de negación.",
        "id": "q_g7_lengua_95"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué tipo de texto busca instruir y orientar la conducta ciudadana a través de normas, leyes o reglamentos?",
        "options": [
            "Texto normativo o regulativo",
            "Texto poético lírico",
            "Texto dramático",
            "Cuento fantástico"
        ],
        "correct": 0,
        "explanation": "Los textos normativos establecen prescripciones obligatorias de comportamiento social.",
        "id": "q_g7_lengua_96"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál es el adjetivo correspondiente al sustantivo 'plomo' cuando algo es pesado o aburrido?",
        "options": [
            "Plomero",
            "Plomizo",
            "Plomoso",
            "Aplomado"
        ],
        "correct": 1,
        "explanation": "'Plomizo' califica aquello que tiene el color, peso o densidad del plomo.",
        "id": "q_g7_lengua_97"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué elemento separa la tesis de la fundamentación en la estructura canónica del ensayo argumentativo?",
        "options": [
            "El cuerpo argumentativo",
            "El glosario",
            "La bibliografía técnica",
            "El índice temático"
        ],
        "correct": 0,
        "explanation": "El cuerpo desarrolla las premisas, analogías y datos que sustentan la tesis inicial.",
        "id": "q_g7_lengua_98"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Cuál de estas oraciones presenta un verbo en voz pasiva?",
        "options": [
            "El autor escribió la novela en París.",
            "La novela fue escrita por el autor en París.",
            "El autor escribe con pasión.",
            "La novela se vendió rápido."
        ],
        "correct": 1,
        "explanation": "'Fue escrita' es la forma analítica de la voz pasiva con verbo 'ser' más participio concertado.",
        "id": "q_g7_lengua_99"
    },
    {
        "grade": 7,
        "category": "lengua",
        "question": "¿Qué recurso retórico consiste en interrogar sin esperar respuesta para inducir a la reflexión en el auditorio?",
        "options": [
            "Pregunta retórica",
            "Metáfora directa",
            "Exclamación lírica",
            "Apostrofe narrativo"
        ],
        "correct": 0,
        "explanation": "La pregunta retórica no busca recabar información sino enfatizar una idea compartida con el público.",
        "id": "q_g7_lengua_100"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué partículas con carga negativa orbitan en niveles de energía alrededor del núcleo atómico?",
        "options": [
            "Protones",
            "Neutrones",
            "Electrones",
            "Quarks"
        ],
        "correct": 2,
        "explanation": "Los electrones poseen carga elemental negativa (-1) y conforman la corteza electrónica.",
        "id": "q_g7_naturales_41"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley de Newton establece que la fuerza neta aplicada a un cuerpo es igual al producto de su masa por su aceleración (F = m · a)?",
        "options": [
            "Primera ley (Ley de inercia)",
            "Segunda ley (Principio fundamental de la dinámica)",
            "Tercera ley (Acción y reacción)",
            "Ley de gravitación universal"
        ],
        "correct": 1,
        "explanation": "La segunda ley de Newton cuantifica la relación directa entre fuerza impulsora y aceleración resultante.",
        "id": "q_g7_naturales_42"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de enlace químico se produce cuando dos átomos comparten uno o más pares de electrones?",
        "options": [
            "Enlace iónico",
            "Enlace covalente",
            "Enlace metálico",
            "Puente de hidrógeno"
        ],
        "correct": 1,
        "explanation": "El enlace covalente une no metales que comparten electrones para alcanzar el octeto estable.",
        "id": "q_g7_naturales_43"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la función del axón en una neurona motora?",
        "options": [
            "Recibir neurotransmisores en las dendritas",
            "Conducir el impulso nervioso eléctrico lejos del cuerpo celular",
            "Almacenar glucógeno",
            "Filtrar iones de sodio"
        ],
        "correct": 1,
        "explanation": "El axón es la prolongación alargada que transmite potenciales de acción hacia otra neurona o efector muscular.",
        "id": "q_g7_naturales_44"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué organela celular contiene enzimas digestivas ácidas capaces de degradar desechos y organelas dañadas?",
        "options": [
            "El lisosoma",
            "El ribosoma",
            "El retículo endoplasmático",
            "El peroxisoma"
        ],
        "correct": 0,
        "explanation": "Los lisosomas actúan como el sistema digestivo y de reciclaje catabólico intracelular.",
        "id": "q_g7_naturales_45"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el número atómico (Z) de un átomo neutro que posee 6 protones y 6 electrones en su estructura?",
        "options": [
            "12",
            "6",
            "3",
            "18"
        ],
        "correct": 1,
        "explanation": "El número atómico Z es estrictamente igual al número de protones presentes en el núcleo atómico: Z = 6 (Carbono).",
        "id": "q_g7_naturales_46"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué principio de la física explica por qué un barco de acero flota en el agua a pesar de su gran peso?",
        "options": [
            "Principio de Pascal",
            "Principio de Arquímedes",
            "Principio de Bernoulli",
            "Ley de Hooke"
        ],
        "correct": 1,
        "explanation": "Arquímedes demostró que todo cuerpo sumergido recibe un empuje ascendente igual al peso del fluido desalojado.",
        "id": "q_g7_naturales_47"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué molécula en forma de doble hélice contiene las instrucciones hereditarias codificadas en bases A, T, C, G?",
        "options": [
            "ARN mensajero",
            "Ácido Desoxirribonucleico (ADN)",
            "Glucógeno hepático",
            "ATP sintasa"
        ],
        "correct": 1,
        "explanation": "El ADN contiene el genoma con las secuencias nucleotídicas que determinan los rasgos de los seres vivos.",
        "id": "q_g7_naturales_48"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se denomina la sinapsis donde la señal se transmite mediante la liberación de neurotransmisores químicos?",
        "options": [
            "Sinapsis eléctrica directa",
            "Sinapsis química",
            "Transducción mecánica",
            "Atracción electrostática"
        ],
        "correct": 1,
        "explanation": "En la sinapsis química, vesículas sinápticas vierten neurotransmisores a la hendidura sináptica estimulando receptores.",
        "id": "q_g7_naturales_49"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de unión química se forma por la transferencia completa de electrones entre un metal y un no metal (ej: Na y Cl)?",
        "options": [
            "Enlace covalente apolar",
            "Enlace iónico o electrovalente",
            "Enlace metálico puro",
            "Enlace coordinado"
        ],
        "correct": 1,
        "explanation": "El metal cede electrones formando un catión y el no metal los acepta formando un anión con atracción electrostática.",
        "id": "q_g7_naturales_50"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la aceleración de la gravedad estándar en la superficie terrestre?",
        "options": [
            "1,6 m/s²",
            "9,8 m/s²",
            "19,6 m/s²",
            "32 m/s²"
        ],
        "correct": 1,
        "explanation": "La aceleración debida a la atracción gravitatoria en la Tierra es de aproximadamente 9,8 metros por segundo al cuadrado.",
        "id": "q_g7_naturales_51"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se llama la división celular reduccional que da origen a los gametos (óvulos y espermatozoides) con la mitad de cromosomas?",
        "options": [
            "Mitosis somática",
            "Meiosis",
            "Bipartición asexual",
            "Gemación celular"
        ],
        "correct": 1,
        "explanation": "La meiosis reduce el número diploide (2n) a haploide (n) asegurando la constancia cromosómica en la fecundación.",
        "id": "q_g7_naturales_52"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué gas noble inerte se utiliza en lámparas de descarga luminosa de tonalidad anaranjada y avisos publicitarios?",
        "options": [
            "Argón",
            "Neón (Ne)",
            "Helio",
            "Kriptón"
        ],
        "correct": 1,
        "explanation": "El gas neón emite un brillo rojo-anaranjado característico al ser excitado por corriente eléctrica.",
        "id": "q_g7_naturales_53"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué sección del encéfalo conecta el cerebro con la médula espinal y regula funciones vitales autónomas como el ritmo cardíaco y la respiración?",
        "options": [
            "El tálamo",
            "El bulbo raquídeo (o tronco encefálico)",
            "El cuerpo calloso",
            "El lóbulo frontal"
        ],
        "correct": 1,
        "explanation": "El bulbo raquídeo controla centros vegetativos cardiorrespiratorios involuntarios indispensables para la vida.",
        "id": "q_g7_naturales_54"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué elemento químico de la tabla periódica tiene como símbolo la letra 'K'?",
        "options": [
            "Kriptón",
            "Potasio",
            "Calcio",
            "Fósforo"
        ],
        "correct": 1,
        "explanation": "El símbolo 'K' proviene de 'Kalium', nombre latino-árabe del elemento potasio.",
        "id": "q_g7_naturales_55"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué afirmación describe la Primera Ley de Newton (Ley de Inercia)?",
        "options": [
            "A toda acción le corresponde una reacción opuesta",
            "Todo cuerpo persevera en su estado de reposo o movimiento rectilíneo uniforme a menos que actúe una fuerza neta sobre él",
            "La fuerza es igual a masa por gravedad",
            "La energía se destruye con la fricción"
        ],
        "correct": 1,
        "explanation": "La inercia es la resistencia intrínseca de los cuerpos a modificar su estado de movimiento sin intervención externa.",
        "id": "q_g7_naturales_56"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se denomina la manifestación física y observable de los genes de un individuo (ej: color de ojos, altura)?",
        "options": [
            "Genotipo",
            "Fenotipo",
            "Cariotipo",
            "Genoma"
        ],
        "correct": 1,
        "explanation": "El fenotipo es la expresión visible o medible del genotipo en interacción con las variables del ambiente.",
        "id": "q_g7_naturales_57"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley química afirma que en toda reacción ordinaria la masa total de los reactivos es idéntica a la de los productos?",
        "options": [
            "Ley de Lavoisier (conservación de la masa)",
            "Ley de Proust",
            "Ley de Dalton",
            "Principio de Le Chatelier"
        ],
        "correct": 0,
        "explanation": "Antoine Lavoisier sentó las bases de la química moderna demostrando que la materia ni se crea ni se destruye.",
        "id": "q_g7_naturales_58"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la glándula endocrina en forma de mariposa situada en el cuello que regula el metabolismo general mediante las hormonas T3 y T4?",
        "options": [
            "El timo",
            "La glándula tiroides",
            "La hipófisis",
            "La glándula pineal"
        ],
        "correct": 1,
        "explanation": "La tiroides capta yodo y produce tiroxina, regulando la velocidad de consumo de oxígeno y energía corporal.",
        "id": "q_g7_naturales_59"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué magnitud física vectorial se define como el cambio de velocidad por unidad de tiempo (Δv / Δt)?",
        "options": [
            "Rapidez escalar",
            "Aceleración",
            "Momento cinético",
            "Trabajo mecánico"
        ],
        "correct": 1,
        "explanation": "La aceleración describe la variación de la velocidad en módulo o dirección en un intervalo temporal.",
        "id": "q_g7_naturales_60"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué componente del citoesqueleto permite la separación de los cromosomas durante la anafase mitótica?",
        "options": [
            "El huso acromático o mitótico (microtúbulos)",
            "Los microfilamentos de actina",
            "Los filamentos intermedios",
            "La pared celular"
        ],
        "correct": 0,
        "explanation": "Las fibras de tubulina del huso mitótico traccionan a las cromátidas hermanas hacia los polos celulares opuestos.",
        "id": "q_g7_naturales_61"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el valor del número másico (A) de un átomo que contiene 8 protones y 9 neutrones?",
        "options": [
            "8",
            "9",
            "17",
            "72"
        ],
        "correct": 2,
        "explanation": "El número másico A es la suma total de nucleones: A = protones + neutrones = 8 + 9 = 17.",
        "id": "q_g7_naturales_62"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué científico austríaco descubrió las leyes básicas de la herencia genética experimentando con plantas de arvejas?",
        "options": [
            "Gregor Mendel",
            "Charles Darwin",
            "Thomas Morgan",
            "Louis Pasteur"
        ],
        "correct": 0,
        "explanation": "Mendel descubrió la segregación y distribución independiente de los alelos hereditarios en el siglo XIX.",
        "id": "q_g7_naturales_63"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué fenómeno hidrostático afirma que la presión ejercida en un líquido incompresible se transmite con igual intensidad en todas las direcciones?",
        "options": [
            "Principio de Arquímedes",
            "Principio de Pascal",
            "Efecto Venturi",
            "Ley de Poiseuille"
        ],
        "correct": 1,
        "explanation": "El Principio de Pascal sustenta el funcionamiento de las prensas hidráulicas, elevadores y frenos de autos.",
        "id": "q_g7_naturales_64"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la sustancia neurotransmisora que transmite el impulso en la unión neuromuscular provocando la contracción muscular?",
        "options": [
            "Dopamina",
            "Acetilcolina",
            "Melatonina",
            "Adrenalina pura"
        ],
        "correct": 1,
        "explanation": "La acetilcolina liberada por la motoneurona despolariza la membrana de la fibra muscular estriada.",
        "id": "q_g7_naturales_65"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué grupo de elementos químicos de la columna 18 de la tabla periódica presentan su última capa de electrones completa y casi no reaccionan?",
        "options": [
            "Halógenos",
            "Gases nobles o inertes",
            "Metales alcalinos",
            "Metales de transición"
        ],
        "correct": 1,
        "explanation": "Helio, neón, argón, kriptón, xenón y radón poseen gran estabilidad química por su octeto cerrado.",
        "id": "q_g7_naturales_66"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el trabajo mecánico realizado al empujar una caja con una fuerza de 50 Newtons a lo largo de 4 metros en la misma dirección (W = F · d)?",
        "options": [
            "12,5 Joules",
            "200 Joules",
            "200 Watts",
            "54 Joules"
        ],
        "correct": 1,
        "explanation": "Trabajo = Fuerza × distancia = 50 N × 4 m = 200 Joules (J).",
        "id": "q_g7_naturales_67"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de mutación genética ocurre por la alteración de una sola base nucleotídica en la secuencia del ADN?",
        "options": [
            "Mutación puntual o génica",
            "Mutación cromosómica estructural",
            "Poliploidía genómica",
            "Translocación masiva"
        ],
        "correct": 0,
        "explanation": "Las mutaciones puntuales sustituyen, insertan o delecionan un único par de bases nitrogenadas.",
        "id": "q_g7_naturales_68"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué hormona producida por las glándulas suprarrenales prepara al cuerpo para la reacción de lucha o huida ante una amenaza inminente?",
        "options": [
            "Insulina",
            "Adrenalina (epinefrina)",
            "Calcitonina",
            "Oxitocina"
        ],
        "correct": 1,
        "explanation": "La adrenalina eleva la frecuencia cardíaca, dilata bronquios y redistribuye flujo sanguíneo hacia los músculos esqueléticos.",
        "id": "q_g7_naturales_69"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la diferencia química entre un elemento y un compuesto?",
        "options": [
            "El compuesto tiene átomos iguales y el elemento no",
            "El elemento está formado por una sola clase de átomos y el compuesto por dos o más elementos combinados químicamente",
            "Los elementos son siempre líquidos",
            "No existe diferencia"
        ],
        "correct": 1,
        "explanation": "Los elementos no pueden descomponerse en sustancias más simples; los compuestos sí, mediante reacciones químicas.",
        "id": "q_g7_naturales_70"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley física demuestra la Tercera Ley de Newton cuando un cohete espacial expulsa gases incandescentes a gran velocidad hacia abajo?",
        "options": [
            "Aceleración proporcional",
            "Principio de acción y reacción: el cohete recibe un empuje igual y en sentido opuesto hacia arriba",
            "Ley de la inercia gravitatoria",
            "Principio de conservación de la carga"
        ],
        "correct": 1,
        "explanation": "La fuerza con que el motor eyecta la masa gaseosa genera una fuerza de reacción idéntica hacia adelante.",
        "id": "q_g7_naturales_71"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el ciclo biogeoquímico donde interviene la combustión de hidrocarburos, la fotosíntesis y la respiración celular?",
        "options": [
            "Ciclo del fósforo",
            "Ciclo del carbono",
            "Ciclo del azufre",
            "Ciclo del silicio"
        ],
        "correct": 1,
        "explanation": "El carbono circula continuamente entre la biosfera, atmósfera, hidrosfera y litosfera terrestre.",
        "id": "q_g7_naturales_72"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué estructura química acelera la velocidad de las reacciones bioquímicas celulares sin consumirse en el proceso?",
        "options": [
            "Una enzima (catalizador biológico)",
            "Un lípido neutro",
            "Un fosfolípido de membrana",
            "Una molécula de agua"
        ],
        "correct": 0,
        "explanation": "Las enzimas disminuyen la energía de activación permitiendo que los procesos vitales ocurran a temperatura corporal.",
        "id": "q_g7_naturales_73"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué capa de mielina recubre a los axones de muchas neuronas permitiendo la conducción saltatoria veloz del impulso?",
        "options": [
            "Vaina de mielina",
            "Célula glial única",
            "Soma nuclear",
            "Dendrita apical"
        ],
        "correct": 0,
        "explanation": "La mielina es una sustancia lipídica aislante que multiplica por 100 la velocidad de transmisión nerviosa.",
        "id": "q_g7_naturales_74"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la unidad del Sistema Internacional (SI) utilizada para medir la fuerza?",
        "options": [
            "Joule (J)",
            "Newton (N)",
            "Pascal (Pa)",
            "Watt (W)"
        ],
        "correct": 1,
        "explanation": "Un Newton equivale a la fuerza necesaria para comunicar una aceleración de 1 m/s² a una masa de 1 kilogramo.",
        "id": "q_g7_naturales_75"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué orgánulo membranoso se encarga de empaquetar, madurar y distribuir proteínas sintetizadas en vesículas secretoras?",
        "options": [
            "Aparato de Golgi",
            "Retículo rugoso",
            "Centríolo",
            "Vacuola"
        ],
        "correct": 0,
        "explanation": "El complejo de Golgi procesa y glicosila proteínas provenientes del retículo endoplásmico rugoso.",
        "id": "q_g7_naturales_76"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se denomina la tabla que ordena a los elementos químicos según su número atómico creciente y configuraciones electrónicas?",
        "options": [
            "Tabla Periódica de los Elementos",
            "Escala de Mohs",
            "Diagrama de Hertzsprung-Russell",
            "Cuadro de Punnett"
        ],
        "correct": 0,
        "explanation": "Dmitri Mendeléyev creó la primera versión periódica que anticipó propiedades de elementos aún no descubiertos.",
        "id": "q_g7_naturales_77"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de respuesta nerviosa rápida, involuntaria y protectora se procesa directamente a nivel de la médula espinal sin intervención consciente del cerebro?",
        "options": [
            "Arco reflejo",
            "Movimiento voluntario corticomotor",
            "Pensamiento cognitivo",
            "Memoria declarativa"
        ],
        "correct": 0,
        "explanation": "El arco reflejo (ej: retirar la mano al pincharse) actúa de inmediato evitando lesiones graves.",
        "id": "q_g7_naturales_78"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la energía mecánica total de un sistema conservativo aislado?",
        "options": [
            "Solo su energía cinética",
            "Solo su energía potencial",
            "La suma constante de su energía cinética más su energía potencial (Em = Ec + Ep)",
            "El calor liberado"
        ],
        "correct": 2,
        "explanation": "En ausencia de fuerzas no conservativas de fricción, la energía mecánica total permanece constante.",
        "id": "q_g7_naturales_79"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué instrumento de laboratorio mide la intensidad de corriente eléctrica que circula por una rama de un circuito?",
        "options": [
            "Voltímetro",
            "Amperímetro",
            "Ohmímetro",
            "Galvanómetro balístico"
        ],
        "correct": 1,
        "explanation": "El amperímetro se conecta en serie para cuantificar la corriente en Amperes (A).",
        "id": "q_g7_naturales_80"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el gas que compone aproximadamente el 21% de la atmósfera y permite la respiración celular aeróbica?",
        "options": [
            "Nitrógeno",
            "Oxígeno (O₂)",
            "Argón",
            "Monóxido de carbono"
        ],
        "correct": 1,
        "explanation": "El oxígeno molecular es el aceptor final de electrones en la fosforilación oxidativa mitocondrial.",
        "id": "q_g7_naturales_81"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué proceso de transporte celular pasivo describe el paso de agua a través de una membrana semipermeable a favor del gradiente hídrico?",
        "options": [
            "Endocitosis",
            "Ósmosis",
            "Fagocitosis",
            "Transporte activo primario"
        ],
        "correct": 1,
        "explanation": "La ósmosis equilibra concentraciones de solutos desplazando solvente sin gasto de energía celular.",
        "id": "q_g7_naturales_82"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de radiación electromagnética posee menor frecuencia y mayor longitud de onda en el espectro?",
        "options": [
            "Rayos Gamma",
            "Ondas de radio",
            "Rayos X",
            "Luz ultravioleta"
        ],
        "correct": 1,
        "explanation": "Las ondas de radio se ubican en el extremo de menor energía y mayores longitudes de onda del espectro.",
        "id": "q_g7_naturales_83"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el metal más liviano y de menor densidad de la tabla periódica, utilizado en baterías recargables modernas?",
        "options": [
            "Sodio",
            "Litio (Li)",
            "Magnesio",
            "Aluminio"
        ],
        "correct": 1,
        "explanation": "El litio tiene número atómico Z = 3 y flota sobre el agua con una densidad de apenas 0,53 g/cm³.",
        "id": "q_g7_naturales_84"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se denomina a dos alelos idénticos para un mismo carácter genético en un individuo diploide (ej: AA o aa)?",
        "options": [
            "Heterocigota",
            "Homocigota",
            "Hemicigota",
            "Mutante híbrido"
        ],
        "correct": 1,
        "explanation": "Un organismo homocigoto porta variantes alélicas iguales en ambos cromosomas homólogos.",
        "id": "q_g7_naturales_85"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué fuerza gravitacional ejerce la Luna y el Sol sobre las masas de agua oceánicas produciendo ascensos y descensos diarios?",
        "options": [
            "Las mareas",
            "Las corrientes de turbidez",
            "El viento alisio",
            "La termoclina"
        ],
        "correct": 0,
        "explanation": "El gradiente gravitatorio diferencial lunar atrae el agua originando mareas altas (pleamar) y bajas (bajamar).",
        "id": "q_g7_naturales_86"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la función del cerebelo en la regulación motora?",
        "options": [
            "Pensamiento lógico y lenguaje",
            "Coordinación de movimientos voluntarios finos y mantenimiento del equilibrio postural",
            "Sentido del olfato primario",
            "Control del apetito"
        ],
        "correct": 1,
        "explanation": "El cerebelo compara la orden motora de la corteza con la posición real corporal corrigiendo la trayectoria.",
        "id": "q_g7_naturales_87"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué sustancia producida por la combustión incompleta de gas o leña es un gas sumamente tóxico e inodoro conocido como 'el asesino silencioso'?",
        "options": [
            "Dióxido de carbono",
            "Monóxido de carbono (CO)",
            "Metano",
            "Óxido nitroso"
        ],
        "correct": 1,
        "explanation": "El monóxido de carbono se une fuertemente a la hemoglobina impidiendo el transporte de oxígeno a los tejidos.",
        "id": "q_g7_naturales_88"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la unidad de resistencia eléctrica en el Sistema Internacional?",
        "options": [
            "Voltio",
            "Ohmio (Ω)",
            "Ampere",
            "Faradio"
        ],
        "correct": 1,
        "explanation": "La Ley de Ohm vincula voltaje, corriente y resistencia: R = V / I.",
        "id": "q_g7_naturales_89"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿En qué fase de la mitosis se alinean todos los cromosomas condensados en la placa ecuatorial del centro de la célula?",
        "options": [
            "Profase",
            "Metafase",
            "Anafase",
            "Telofase"
        ],
        "correct": 1,
        "explanation": "Durante la metafase el cinetocoro fija a cada cromosoma en el plano ecuatorial celular.",
        "id": "q_g7_naturales_90"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es la fórmula química del gas metano, principal componente del gas natural domiciliario?",
        "options": [
            "CO₂",
            "CH₄",
            "C₂H₆",
            "NH₃"
        ],
        "correct": 1,
        "explanation": "El metano está formado por un átomo de carbono enlazado a cuatro átomos de hidrógeno (CH₄).",
        "id": "q_g7_naturales_91"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se llama la propiedad de los seres vivos de mantener estables sus condiciones biológicas internas (pH, glucosa, temperatura)?",
        "options": [
            "Metabolismo",
            "Homeostasis",
            "Evolución",
            "Irritabilidad"
        ],
        "correct": 1,
        "explanation": "La homeostasis conserva el equilibrio dinámico frente a las fluctuaciones del ambiente externo.",
        "id": "q_g7_naturales_92"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué fenómeno físico acústico se percibe como un cambio en el tono de una sirena de ambulancia cuando se acerca y luego se aleja?",
        "options": [
            "Efecto Doppler",
            "Efecto Fotoeléctrico",
            "Efecto Joule",
            "Efecto Tyndall"
        ],
        "correct": 0,
        "explanation": "El movimiento relativo entre emisor y receptor comprime o alarga las ondas sonoras percibidas.",
        "id": "q_g7_naturales_93"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de célula sanguínea no posee núcleo en los mamíferos adultos para optimizar el transporte de hemoglobina?",
        "options": [
            "Glóbulo blanco monocito",
            "Eritrocito o glóbulo rojo",
            "Linfocito T",
            "Neutrófilo"
        ],
        "correct": 1,
        "explanation": "Los glóbulos rojos mamíferos expulsan su núcleo durante su maduración en la médula ósea.",
        "id": "q_g7_naturales_94"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de energía se libera en el núcleo de las estrellas para producir luz y calor mediante la unión de núcleos livianos de hidrógeno?",
        "options": [
            "Fisión nuclear",
            "Fusión nuclear",
            "Combustión fósil",
            "Reacción ácido-base"
        ],
        "correct": 1,
        "explanation": "En el núcleo solar cuatro protones de hidrógeno se fusionan formando un núcleo de helio con inmensa emisión de energía.",
        "id": "q_g7_naturales_95"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué ley biológica de Mendel postula que en un cruce monohíbrido los alelos se separan equitativamente en la formación de gametos?",
        "options": [
            "Ley de la segregación independiente de los factores",
            "Ley de la dominancia incompleta",
            "Ley del ligamiento genético",
            "Teoría cromosómica"
        ],
        "correct": 0,
        "explanation": "La primera ley mendeliana establece que cada gameto recibe solo una de las dos copias del gen progenitor.",
        "id": "q_g7_naturales_96"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el valor de la presión atmosférica normal a nivel del mar en hectopascales (hPa)?",
        "options": [
            "760 hPa",
            "1.013,25 hPa",
            "100 hPa",
            "500 hPa"
        ],
        "correct": 1,
        "explanation": "1.013,25 hPa equivale a 1 atmósfera estándar o a 760 milímetros de mercurio (mmHg).",
        "id": "q_g7_naturales_97"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cómo se denomina la pérdida de la función celular normal con proliferación descontrolada de células anómalas e invasivas?",
        "options": [
            "Neoplasia o cáncer",
            "Apoptosis regulada",
            "Fagocitosis fisiológica",
            "Cicatrización queloide"
        ],
        "correct": 0,
        "explanation": "El cáncer se produce por mutaciones oncogénicas que anulan los mecanismos celulares de control mitótico.",
        "id": "q_g7_naturales_98"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Qué tipo de espejo curvo refleja los rayos haciéndolos converger en un punto focal real, usado en telescopios reflectores y faros?",
        "options": [
            "Espejo plano",
            "Espejo cóncavo (convergente)",
            "Espejo convexo",
            "Prisma dispersor"
        ],
        "correct": 1,
        "explanation": "Los espejos cóncavos concentran la luz en su foco para ampliar imágenes o proyectar haces paralelos potentes.",
        "id": "q_g7_naturales_99"
    },
    {
        "grade": 7,
        "category": "naturales",
        "question": "¿Cuál es el elemento químico no metal indispensable que forma el esqueleto molecular de todos los compuestos orgánicos?",
        "options": [
            "Hierro",
            "Carbono (C)",
            "Silicio",
            "Calcio"
        ],
        "correct": 1,
        "explanation": "La tetravalencia del átomo de carbono le permite formar cadenas estables lineales, ramificadas y cíclicas en biomoléculas.",
        "id": "q_g7_naturales_100"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué acontecimiento desencadenó el inicio de la Primera Guerra Mundial en junio de 1914?",
        "options": [
            "La invasión a Polonia",
            "El asesinato del archiduque Francisco Fernando de Austria en Sarajevo",
            "La Revolución Rusa",
            "El hundimiento del Lusitania"
        ],
        "correct": 1,
        "explanation": "Gavrilo Princip asesinó al heredero del Imperio Austrohúngaro en Sarajevo activando el sistema de alianzas militares europeas.",
        "id": "q_g7_sociales_41"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito político y social de octubre de 1917 derrocó al régimen zarista instaurando el primer Estado socialista del mundo en Rusia?",
        "options": [
            "La Comuna de París",
            "La Revolución Bolchevique (liderada por Lenin)",
            "La caída del Muro de Berlín",
            "La Primavera de Praga"
        ],
        "correct": 1,
        "explanation": "Vladimir Lenin y los sóviets bolcheviques tomaron el poder estableciendo el gobierno comunista.",
        "id": "q_g7_sociales_42"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tratado firmado en 1919 puso fin formal a la Primera Guerra Mundial imponiendo duras sanciones a Alemania?",
        "options": [
            "Tratado de Utrecht",
            "Tratado de Versalles",
            "Pacto de Varsovia",
            "Tratado de Roma"
        ],
        "correct": 1,
        "explanation": "El Tratado de Versalles exigió reparaciones de guerra económicas y desarme al Estado alemán.",
        "id": "q_g7_sociales_43"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito popular del 17 de octubre de 1945 en la Plaza de Mayo marcó el nacimiento del movimiento peronista en Argentina?",
        "options": [
            "La huelga de inquilinos",
            "La movilización obrera masiva que exigió la liberación del coronel Juan Domingo Perón",
            "La sanción del voto femenino",
            "El regreso de la democracia"
        ],
        "correct": 1,
        "explanation": "Miles de trabajadores marcharon desde el conurbano a Plaza de Mayo logrando la libertad de Perón.",
        "id": "q_g7_sociales_44"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué ley sancionada en 1947 bajo el impulso de Eva Perón consagró los derechos cívicos y el voto femenino en Argentina?",
        "options": [
            "Ley Sáenz Peña",
            "Ley 13.010 de Sufragio Femenino",
            "Ley 1420",
            "Ley de Contrato de Trabajo"
        ],
        "correct": 1,
        "explanation": "La Ley 13.010 permitió a las mujeres argentinas votar y ser electas para cargos públicos por primera vez en 1951.",
        "id": "q_g7_sociales_45"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué conflicto bélico mundial transcurrió entre 1939 y 1945 enfrentando a los Aliados contra las potencias del Eje?",
        "options": [
            "Guerra Fría",
            "Segunda Guerra Mundial",
            "Guerra de Corea",
            "Guerra de Vietnam"
        ],
        "correct": 1,
        "explanation": "La invasión nazi a Polonia inició la guerra más devastadora de la historia que involucró a más de 70 naciones.",
        "id": "q_g7_sociales_46"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se llamó el período de tensión geopolítica e ideológica entre Estados Unidos (capitalista) y la Unión Soviética (comunista)?",
        "options": [
            "La Guerra Fría",
            "La Paz Armada",
            "La Gran Depresión",
            "La Coexistencia Armada"
        ],
        "correct": 0,
        "explanation": "La Guerra Fría se caracterizó por la carrera armamentista, espacial y guerras indirectas sin choque militar frontal directo.",
        "id": "q_g7_sociales_47"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué trágico acontecimiento del 24 de marzo de 1976 inició la última dictadura cívico-militar en Argentina?",
        "options": [
            "El bombardeo a Plaza de Mayo",
            "El golpe de Estado que derrocó al gobierno constitucional y aplicó terrorismo de Estado",
            "La renuncia de Frondizi",
            "La Noche de los Bastones Largos"
        ],
        "correct": 1,
        "explanation": "La Junta Militar instauró el autodenominado 'Proceso de Reorganización Nacional' cometiendo crímenes de lesa humanidad.",
        "id": "q_g7_sociales_48"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué presidente radical asumió el 10 de diciembre de 1983 restaurando el orden constitucional democrático en Argentina?",
        "options": [
            "Arturo Illia",
            "Raúl Alfonsín",
            "Carlos Menem",
            "Fernando de la Rúa"
        ],
        "correct": 1,
        "explanation": "Raúl Alfonsín impulsó el histórico Juicio a las Juntas Militares y la Comisión Nacional sobre la Desaparición de Personas (CONADEP).",
        "id": "q_g7_sociales_49"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el reclamo soberano imprescriptible consagrado en la Cláusula Transitoria Primera de la Constitución Nacional Argentina?",
        "options": [
            "La soberanía sobre el Estrecho de Magallanes",
            "La legítima e imprescriptible soberanía sobre las Islas Malvinas, Georgias del Sur y Sandwich del Sur y los espacios marítimos e insulares correspondientes",
            "La libre navegación fluvial",
            "La anexión de la Antártida entera"
        ],
        "correct": 1,
        "explanation": "La reforma constitucional de 1994 ratificó la soberanía irrenunciable sobre los archipiélagos del Atlántico Sur.",
        "id": "q_g7_sociales_50"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué organización internacional de 193 países miembros fue fundada en 1945 tras la Segunda Guerra Mundial para preservar la paz mundial?",
        "options": [
            "La Sociedad de las Naciones",
            "La Organización de las Naciones Unidas (ONU)",
            "La OTAN",
            "La Unión Europea"
        ],
        "correct": 1,
        "explanation": "La Carta de San Francisco creó la ONU con su Consejo de Seguridad y Asamblea General.",
        "id": "q_g7_sociales_51"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué bloque comercial y monetario de integración económica reúne a la mayoría de los países de Europa Occidental con sede en Bruselas?",
        "options": [
            "El Mercosur",
            "La Unión Europea (UE)",
            "La Mancomunidad Británica",
            "El Foro de Cooperación APEC"
        ],
        "correct": 1,
        "explanation": "La Unión Europea consolidó el mercado común europeo y el euro como moneda única compartida.",
        "id": "q_g7_sociales_52"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito simbólico de noviembre de 1989 marcó el principio del fin de la Guerra Fría y la posterior reunificación de Alemania?",
        "options": [
            "La caída del Muro de Berlín",
            "El Tratado de Maastricht",
            "La Cumbre de Yalta",
            "La invasión de Bahía de Cochinos"
        ],
        "correct": 0,
        "explanation": "La apertura pacífica del Muro de Berlín derribó la división de la 'Cortina de Hierro' en Europa.",
        "id": "q_g7_sociales_53"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál fue el informe elaborado por la CONADEP en 1984 que documentó las desapariciones forzadas en la dictadura militar argentina?",
        "options": [
            "Informe Bignone",
            "Informe 'Nunca Más'",
            "Libro Blanco de Defensa",
            "Pacto de San José"
        ],
        "correct": 1,
        "explanation": "El libro 'Nunca Más' presidido por Ernesto Sabato documentó minuciosamente los centros clandestinos de detención.",
        "id": "q_g7_sociales_54"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué organismo de integración regional de América Latina y el Caribe fundado en 1948 tiene su sede en Washington?",
        "options": [
            "La OEA (Organización de los Estados Americanos)",
            "El Banco Mundial",
            "El BID",
            "La CEPAL"
        ],
        "correct": 0,
        "explanation": "La OEA reúne a los Estados del hemisferio americano para promover la democracia y los derechos humanos.",
        "id": "q_g7_sociales_55"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué modelo económico impulsó el Estado argentino entre 1930 y 1975 para sustituir importaciones industriales extranjeras?",
        "options": [
            "Modelo agroexportador puro",
            "Industrialización por Sustitución de Importaciones (ISI)",
            "Economía de libre mercado total",
            "Minería extractivista"
        ],
        "correct": 1,
        "explanation": "El modelo ISI fomentó la industria nacional textil, metalúrgica y manufacturera tras la crisis mundial del 30.",
        "id": "q_g7_sociales_56"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué conflicto armado libraron la República Argentina y el Reino Unido entre abril y junio de 1982?",
        "options": [
            "La Guerra del Pacífico",
            "La Guerra de las Malvinas",
            "La Guerra de Suez",
            "La Guerra de los Seis Días"
        ],
        "correct": 1,
        "explanation": "La guerra por la recuperación de las islas Malvinas culminó el 14 de junio de 1982 tras 74 días de combates.",
        "id": "q_g7_sociales_57"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el tratado constitutivo que creó el Mercado Común del Sur (MERCOSUR) suscrito el 26 de marzo de 1991?",
        "options": [
            "Tratado de Asunción",
            "Protocolo de Ouro Preto",
            "Tratado de Montevideo",
            "Acuerdo de Cartagena"
        ],
        "correct": 0,
        "explanation": "Los presidentes de Argentina, Brasil, Paraguay y Uruguay firmaron el Tratado de Asunción fijando aranceles comunes.",
        "id": "q_g7_sociales_58"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Quién fue la primera presidenta mujer de la historia argentina y del continente americano al asumir en 1974 tras la muerte de su esposo?",
        "options": [
            "Eva Duarte de Perón",
            "María Estela Martínez de Perón (Isabelita)",
            "Cristina Fernández de Kirchner",
            "Alicia Moreau de Justo"
        ],
        "correct": 1,
        "explanation": "Isabel Perón asumió la presidencia de la Nación tras el fallecimiento del General Juan Domingo Perón el 1 de julio de 1974.",
        "id": "q_g7_sociales_59"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué régimen totalitario instaurado por Adolf Hitler en Alemania entre 1933 y 1945 cometió el genocidio del Holocausto?",
        "options": [
            "El Fascismo italiano",
            "El Nacionalsocialismo (Nazismo)",
            "El Franquismo",
            "El Estalinismo"
        ],
        "correct": 1,
        "explanation": "El régimen nazi persiguió y exterminó a seis millones de judíos y minorías en campos de concentración.",
        "id": "q_g7_sociales_60"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué reforma constitucional argentina incorporó con jerarquía superior los Tratados Internacionales de Derechos Humanos?",
        "options": [
            "La reforma de 1949",
            "La reforma constitucional de 1994",
            "La reforma de 1860",
            "La convención de 1957"
        ],
        "correct": 1,
        "explanation": "La convención de Santa Fe y Paraná de 1994 otorgó rango constitucional a los tratados de DD.HH. (Art. 75 inc. 22).",
        "id": "q_g7_sociales_61"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué alianza militar intergubernamental de defensa colectiva fue fundada en 1949 por EE.UU., Canadá y países de Europa Occidental?",
        "options": [
            "El Pacto de Varsovia",
            "La OTAN (Organización del Tratado del Atlántico Norte)",
            "El TIAR",
            "La Liga Árabe"
        ],
        "correct": 1,
        "explanation": "La OTAN consagró el principio de defensa mutua frente a una eventual agresión soviética.",
        "id": "q_g7_sociales_62"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se denomina la interdependencia económica, tecnológica, social y cultural a escala planetaria potenciada por internet y el comercio libre?",
        "options": [
            "Aislamiento internacional",
            "Globalización",
            "Feudalismo moderno",
            "Proteccionismo estricto"
        ],
        "correct": 1,
        "explanation": "La globalización interconecta mercados financieros, medios de comunicación y cadenas de suministro globales.",
        "id": "q_g7_sociales_63"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito de resistencia cívica encabezado por madres de detenidos-desaparecidos comenzó a marchar en círculos en Plaza de Mayo en 1977?",
        "options": [
            "La Marcha del Silencio",
            "Las Madres y Abuelas de Plaza de Mayo",
            "El Cordobazo",
            "La CGT de los Argentinos"
        ],
        "correct": 1,
        "explanation": "Con sus pañuelos blancos exigieron la aparición con vida de sus hijos y la restitución de niños apropiados.",
        "id": "q_g7_sociales_64"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué presidente estadounidense proclamó el 'New Deal' para rescatar la economía norteamericana tras el crac de 1929?",
        "options": [
            "Herbert Hoover",
            "Franklin Delano Roosevelt",
            "Harry S. Truman",
            "Theodore Roosevelt"
        ],
        "correct": 1,
        "explanation": "El New Deal implementó obras públicas masivas, subsidios agrícolas y regulación bancaria estatal.",
        "id": "q_g7_sociales_65"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿En qué provincia argentina se produjo la rebelión obrero-estudiantil conocida como el 'Cordobazo' en mayo de 1969?",
        "options": [
            "Santa Fe",
            "Córdoba",
            "Buenos Aires",
            "Tucumán"
        ],
        "correct": 1,
        "explanation": "El Cordobazo desafió a la dictadura militar de Onganía marcando la confluencia de sindicatos y universitarios.",
        "id": "q_g7_sociales_66"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué proceso de independencia política de las colonias europeas en África y Asia se aceleró tras la Segunda Guerra Mundial?",
        "options": [
            "Colonización imperial",
            "Descolonización",
            "Apartheid sudafricano",
            "Feudalización"
        ],
        "correct": 1,
        "explanation": "Naciones como India, Argelia, Congo y Vietnam conquistaron su soberanía nacional frente a las metrópolis coloniales.",
        "id": "q_g7_sociales_67"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué dirigente pacifista indio lideró la independencia de su país de Gran Bretaña mediante la no violencia activa (Ahimsa)?",
        "options": [
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Nelson Mandela",
            "Subhas Chandra Bose"
        ],
        "correct": 1,
        "explanation": "Gandhi organizó históricas campañas pacíficas como la Marcha de la Sal desafiando el monopolio colonial británico.",
        "id": "q_g7_sociales_68"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tipo de derechos consagró el célebre Artículo 14 bis de la Constitución Argentina incorporado en 1957?",
        "options": [
            "Derechos de propiedad privada de tierras",
            "Derechos del trabajador, gremiales y de la seguridad social",
            "Derechos bélicos",
            "Derechos aduaneros"
        ],
        "correct": 1,
        "explanation": "El Art. 14 bis asegura condiciones dignas de labor, jornada limitada, descanso y jubilaciones móviles.",
        "id": "q_g7_sociales_69"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué líder sudafricano luchó contra el régimen racista del Apartheid, estuvo 27 años en prisión y fue presidente democrático en 1994?",
        "options": [
            "Desmond Tutu",
            "Nelson Mandela",
            "Kofi Annan",
            "Robert Mugabe"
        ],
        "correct": 1,
        "explanation": "Mandela promovió la reconciliación racial y recibió el Premio Nobel de la Paz en 1993.",
        "id": "q_g7_sociales_70"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué crisis bélica de octubre de 1962 puso al mundo al borde de una catástrofe nuclear entre EE.UU. y la URSS?",
        "options": [
            "La crisis de Berlín",
            "La Crisis de los Misiles en Cuba",
            "La invasión de Praga",
            "El incidente del Golfo de Tonkín"
        ],
        "correct": 1,
        "explanation": "El descubrimiento de silos nucleares soviéticos en Cuba desató un tenso bloqueo naval por parte del presidente Kennedy.",
        "id": "q_g7_sociales_71"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se denomina la línea de demarcación ideológica y física que dividió a Europa en dos bloques antagónicos durante la Guerra Fría?",
        "options": [
            "La Línea Maginot",
            "La Cortina de Hierro (o Telón de Acero)",
            "El Paralelo 38",
            "El Muro de Adriano"
        ],
        "correct": 1,
        "explanation": "Winston Churchill popularizó la expresión para describir la frontera política entre democracias y el bloque soviético.",
        "id": "q_g7_sociales_72"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué organismo de las Naciones Unidas con sede en Ginebra vela por los derechos y protección de los refugiados en el mundo?",
        "options": [
            "UNICEF",
            "ACNUR (Alto Comisionado de las Naciones Unidas para los Refugiados)",
            "UNESCO",
            "FAO"
        ],
        "correct": 1,
        "explanation": "El ACNUR brinda auxilio humanitario, asilo y reintegración a personas desplazadas por guerras y persecuciones.",
        "id": "q_g7_sociales_73"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué científico británico descifró la máquina nazi Enigma en Bletchley Park sentando las bases teóricas de la computación moderna?",
        "options": [
            "Alan Turing",
            "Charles Babbage",
            "John von Neumann",
            "Tim Berners-Lee"
        ],
        "correct": 0,
        "explanation": "Alan Turing diseñó la máquina electromecánica Bombe para quebrar las comunicaciones navales alemanas.",
        "id": "q_g7_sociales_74"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál fue el histórico juicio realizado en 1985 en Argentina que condenó a los comandantes de las tres primeras juntas militares?",
        "options": [
            "Juicio de Nuremberg",
            "Juicio a las Juntas Militares (Causa 13/84)",
            "Juicio de Tokio",
            "Juicio de la Verdad"
        ],
        "correct": 1,
        "explanation": "La Cámara Federal sentenció a Videla, Massera, Viola y otros jerarcas por crímenes de lesa humanidad sistemáticos.",
        "id": "q_g7_sociales_75"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué acuerdo internacional de 2015 busca limitar el aumento de la temperatura global por debajo de 2 °C respecto a niveles preindustriales?",
        "options": [
            "Protocolo de Montreal",
            "Acuerdo de París sobre Cambio Climático",
            "Convención de Ginebra",
            "Tratado de Kioto original"
        ],
        "correct": 1,
        "explanation": "El Acuerdo de París compromete a las naciones a reducir sus emisiones de gases de efecto invernadero.",
        "id": "q_g7_sociales_76"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué régimen político persigue la concentración de todo el poder estatal en un líder o partido único anulando libertades individuales?",
        "options": [
            "Monarquía constitucional",
            "Totalitarismo",
            "República federal",
            "Democracia participativa"
        ],
        "correct": 1,
        "explanation": "El totalitarismo subordina la sociedad civil, la economía y la prensa al control ideológico del Estado.",
        "id": "q_g7_sociales_77"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito marcó la caída del gobierno de Fernando de la Rúa en medio de una profunda crisis socioeconómica en diciembre de 2001 en Argentina?",
        "options": [
            "El Cordobazo",
            "La crisis de diciembre de 2001 con el estallido social y la renuncia presidencial",
            "La hiperinflación del 89",
            "El Rodrigazo"
        ],
        "correct": 1,
        "explanation": "La restricción bancaria del 'corralito' y el estado de sitio detonaron masivas protestas populares con cacerolazos.",
        "id": "q_g7_sociales_78"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el principal organismo judicial supranacional de la OEA encargado de juzgar violaciones a los derechos humanos en el continente?",
        "options": [
            "La Corte Internacional de Justicia de La Haya",
            "La Corte Interamericana de Derechos Humanos (Corte IDH)",
            "El Tribunal Penal Internacional",
            "La Audiencia Nacional"
        ],
        "correct": 1,
        "explanation": "La Corte IDH con sede en San José de Costa Rica dicta sentencias vinculantes para los Estados firmantes del Pacto.",
        "id": "q_g7_sociales_79"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué superpotencia asiática experimentó un colosal crecimiento industrial y comercial convirtiéndose en la segunda economía mundial desde fines del siglo XX?",
        "options": [
            "Japón",
            "China",
            "India",
            "Corea del Sur"
        ],
        "correct": 1,
        "explanation": "Las reformas económicas de apertura de Deng Xiaoping impulsaron a la República Popular China como potencia global.",
        "id": "q_g7_sociales_80"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se denomina la forma de democracia semidirecta en la que el electorado vota directamente a favor o en contra de un proyecto de ley?",
        "options": [
            "Consulta popular o referéndum",
            "Elección de convencionales",
            "Cónclave legislativo",
            "Moción de censura"
        ],
        "correct": 0,
        "explanation": "El Art. 40 de la Constitución Nacional contempla la iniciativa legislativa y la consulta popular vinculante o no vinculante.",
        "id": "q_g7_sociales_81"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué hito de la Carrera Espacial en julio de 1969 permitió al ser humano pisar la superficie de la Luna por primera vez?",
        "options": [
            "La misión Sputnik 1",
            "La misión Apolo 11 (con Neil Armstrong y Buzz Aldrin)",
            "El vuelo de Yuri Gagarin",
            "El lanzamiento del Hubble"
        ],
        "correct": 1,
        "explanation": "Neil Armstrong descendió del módulo lunar Eagle proclamando: 'Es un pequeño paso para el hombre, pero un gran salto para la humanidad'.",
        "id": "q_g7_sociales_82"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el tribunal internacional permanente con sede en La Haya competente para juzgar crímenes de genocidio, de lesa humanidad y de guerra?",
        "options": [
            "La Corte Penal Internacional (Estatuto de Roma)",
            "El Tribunal Europeo de Derechos Humanos",
            "La Comisión Trilateral",
            "El Consejo de Seguridad"
        ],
        "correct": 0,
        "explanation": "El Estatuto de Roma de 1998 creó la CPI como instancia penal universal independiente.",
        "id": "q_g7_sociales_83"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué nombre recibió la política de reestructuración económica y transparencia política impulsada por Mijaíl Gorbachov en la URSS en la década de 1980?",
        "options": [
            "Perestroika y Glásnost",
            "Planes Quinquenales",
            "Colectivización agraria",
            "Doctrina Brezhnev"
        ],
        "correct": 0,
        "explanation": "La Perestroika (reforma económica) y la Glásnost (apertura informativa) aceleraron el fin del régimen comunista soviético.",
        "id": "q_g7_sociales_84"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué institución nacional argentina se encarga de preservar la memoria histórica y la identidad de personas nacidas en cautiverio durante la dictadura?",
        "options": [
            "El Archivo General de la Nación",
            "La Comisión Nacional por el Derecho a la Identidad (CONADI) junto a Abuelas de Plaza de Mayo",
            "El Museo Histórico Nacional",
            "El Instituto Sanmartiniano"
        ],
        "correct": 1,
        "explanation": "La CONADI y el Banco Nacional de Datos Genéticos posibilitan la restitución de identidades biológicas de nietos apropiados.",
        "id": "q_g7_sociales_85"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué muro dividió la ciudad alemana de Berlín entre su sector oriental y occidental entre 1961 y 1989?",
        "options": [
            "El Muro de Varsovia",
            "El Muro de Berlín",
            "El Muro Atlántico",
            "La Línea Sigfrido"
        ],
        "correct": 1,
        "explanation": "Erigido por la República Democrática Alemana (RDA), el Muro de Berlín fue el símbolo supremo de la división Este-Oeste.",
        "id": "q_g7_sociales_86"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cómo se denomina la capacidad de un país de ejercer su potestad de gobierno y legislar sin interferencias de potencias extranjeras?",
        "options": [
            "Soberanía nacional",
            "Dependencia colonial",
            "Protectorado",
            "Intervención armada"
        ],
        "correct": 0,
        "explanation": "La soberanía es el principio jurídico y político de autodeterminación territorial y de gobierno propio.",
        "id": "q_g7_sociales_87"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué gran alianza militar integraban los países del bloque comunista liderados por la URSS durante la Guerra Fría?",
        "options": [
            "La Santa Alianza",
            "El Pacto de Varsovia",
            "La Liga Balcánica",
            "La Triple Entente"
        ],
        "correct": 1,
        "explanation": "El Pacto de Varsovia de 1955 agrupaba a la Unión Soviética y a sus Estados satélites de Europa del Este.",
        "id": "q_g7_sociales_88"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la sede permanente de la Asamblea General y la Secretaría General de las Naciones Unidas?",
        "options": [
            "Ginebra, Suiza",
            "Nueva York, Estados Unidos",
            "París, Francia",
            "Viena, Austria"
        ],
        "correct": 1,
        "explanation": "El complejo de la sede central de la ONU se emplaza a orillas del East River en Manhattan, Nueva York.",
        "id": "q_g7_sociales_89"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué doctrina económica impulsó privatizaciones de empresas públicas, desregulación de mercados y libre comercio en Argentina en los años 90?",
        "options": [
            "Neoliberalismo (Consenso de Washington)",
            "Socialismo planificado",
            "Mercantilismo colonial",
            "Estatismo keynesiano"
        ],
        "correct": 0,
        "explanation": "Las políticas de los 90 implementaron la convertibilidad cambiaria y la privatización de YPF, gas, teléfonos y trenes.",
        "id": "q_g7_sociales_90"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué científico cosmonauta soviético fue el primer ser humano en viajar al espacio exterior orbitando la Tierra en la nave Vostok 1 en 1961?",
        "options": [
            "Yuri Gagarin",
            "Valentina Tereshkova",
            "Alexei Leonov",
            "Serguéi Koroliov"
        ],
        "correct": 0,
        "explanation": "Gagarin completó una órbita terrestre de 108 minutos el 12 de abril de 1961 inaugurando los vuelos espaciales tripulados.",
        "id": "q_g7_sociales_91"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es el instrumento de defensa de la Constitución que permite a cualquier ciudadano solicitar el cese de una detención arbitraria o ilegal?",
        "options": [
            "Recurso de Casación",
            "Habeas Corpus",
            "Juicio político",
            "Habeas Data"
        ],
        "correct": 1,
        "explanation": "El Habeas Corpus protege la libertad ambulatoria corporal frente a arrestos sin orden judicial legítima.",
        "id": "q_g7_sociales_92"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué conflicto bélico entre el Norte comunista y el Sur apoyado por EE.UU. dividió a un país asiático por el paralelo 38 desde 1950?",
        "options": [
            "Guerra de Vietnam",
            "Guerra de Corea",
            "Guerra del Golfo",
            "Guerra Ruso-Japonesa"
        ],
        "correct": 1,
        "explanation": "El armisticio de Panmunjom de 1953 congeló el conflicto manteniendo la península de Corea dividida hasta la actualidad.",
        "id": "q_g7_sociales_93"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué garantía constitucional faculta a una persona a conocer qué datos personales existen sobre ella en registros públicos o privados?",
        "options": [
            "Habeas Corpus",
            "Habeas Data",
            "Acción de amparo",
            "Indulto presidencial"
        ],
        "correct": 1,
        "explanation": "El Habeas Data salvaguarda el honor, la intimidad y la exactitud de los registros crediticios y bancarios.",
        "id": "q_g7_sociales_94"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué importante crisis geopolítica del petróleo en 1973 multiplicó el valor del crudo tras la guerra del Yom Kipur?",
        "options": [
            "El boicot de la OPEP",
            "La Revolución Islámica",
            "La Guerra de Malvinas",
            "La invasión de Kuwait"
        ],
        "correct": 0,
        "explanation": "Los países árabes miembros de la OPEP embargaron las ventas de crudo a Occidente cuadruplicando los precios de la energía.",
        "id": "q_g7_sociales_95"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Cuál es la máxima autoridad civil elegida democráticamente para conducir la defensa nacional como Comandante en Jefe de las Fuerzas Armadas?",
        "options": [
            "El Ministro de Defensa",
            "El Presidente de la Nación",
            "El Jefe del Estado Mayor Conjunto",
            "El Presidente del Senado"
        ],
        "correct": 1,
        "explanation": "La Constitución Nacional establece en su artículo 99 que el Presidente ejerce la comandancia en jefe militar.",
        "id": "q_g7_sociales_96"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tratado comercial de América del Norte entró en vigencia en 1994 uniendo a México, Estados Unidos y Canadá?",
        "options": [
            "MERCOSUR",
            "TLCAN / NAFTA (actual T-MEC)",
            "Pacto Andino",
            "ALCA"
        ],
        "correct": 1,
        "explanation": "El Tratado de Libre Comercio de América del Norte eliminó aranceles entre los tres países norteamericanos.",
        "id": "q_g7_sociales_97"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué tipo de proceso penal juzgó en la ciudad alemana de Nuremberg a los principales criminales de guerra del nazismo en 1945-1946?",
        "options": [
            "Los Juicios de Nuremberg",
            "El Tribunal de Versalles",
            "El Consejo de Roma",
            "La Corte de Ginebra"
        ],
        "correct": 0,
        "explanation": "Nuremberg definió los tipos penales de crímenes contra la paz, crímenes de guerra y crímenes contra la humanidad.",
        "id": "q_g7_sociales_98"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué provincia argentina sancionó en 1994 en su capital, junto con Paraná, la reforma constitucional vigente?",
        "options": [
            "Córdoba",
            "Santa Fe",
            "Tucumán",
            "Mendoza"
        ],
        "correct": 1,
        "explanation": "La Convención Constituyente de 1994 sesionó en las ciudades de Santa Fe y Paraná, consagrando el nuevo texto constitucional.",
        "id": "q_g7_sociales_99"
    },
    {
        "grade": 7,
        "category": "sociales",
        "question": "¿Qué declaración de 1789 surgida de la Revolución Francesa proclamó que los hombres nacen y permanecen libres e iguales en derechos?",
        "options": [
            "Carta Magna inglesa",
            "Declaración de los Derechos del Hombre y del Ciudadano",
            "Declaración de Filadelfia",
            "Código Napoleónico"
        ],
        "correct": 1,
        "explanation": "La Declaración de 1789 abolió los privilegios estamentales del Antiguo Régimen e inspiró las democracias modernas.",
        "id": "q_g7_sociales_100"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué físico y matemático alemán formuló en 1915 la Teoría de la Relatividad General redefiniendo la gravedad como curvatura del espacio-tiempo?",
        "options": [
            "Max Planck",
            "Albert Einstein",
            "Niels Bohr",
            "Werner Heisenberg"
        ],
        "correct": 1,
        "explanation": "Einstein revolucionó la cosmología demostrando que las masas deforman el tejido geométrico del espacio y del tiempo.",
        "id": "q_g7_ingenio_41"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo clásico: Un rey condena a un reo y le dice: 'Si dices una verdad, morirás ahorcado; si dices una mentira, morirás ahogado'. ¿Qué dice el reo para salvar su vida?",
        "options": [
            "Moriré ahorcado",
            "Moriré ahogado",
            "Soy inocente",
            "El rey es sabio"
        ],
        "correct": 0,
        "explanation": "Si dice 'Moriré ahorcado': si el rey lo ahorca, habrá dicho una verdad (debería ser ahogado); y si lo ahoga, habrá dicho una mentira (debería ser ahorcado). La paradoja lo salva.",
        "id": "q_g7_ingenio_42"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es el objeto astronómico tan denso y masivo que ni siquiera la luz puede escapar de su atracción gravitatoria más allá del horizonte de sucesos?",
        "options": [
            "Púlsar",
            "Agujero negro",
            "Enana blanca",
            "Nebulosa planetaria"
        ],
        "correct": 1,
        "explanation": "En un agujero negro la velocidad de escape supera a la velocidad de la luz en el vacío.",
        "id": "q_g7_ingenio_43"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Si una máquina tarda 10 horas en completar un proceso y otra máquina más moderna tarda 5 horas en el mismo proceso, ¿cuánto tardarán ambas trabajando juntas?",
        "options": [
            "7,5 horas",
            "3 horas y 20 minutos (3,33 horas)",
            "4 horas",
            "2,5 horas"
        ],
        "correct": 1,
        "explanation": "En 1 hora hacen 1/10 + 1/5 = 3/10 del trabajo; el total se completa en 10/3 = 3,33 horas = 3 horas y 20 minutos.",
        "id": "q_g7_ingenio_44"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué científico británico propuso en 1950 el 'Test de Turing' para determinar si una máquina puede exhibir inteligencia indistinguible de la humana?",
        "options": [
            "Charles Babbage",
            "Alan Turing",
            "Ada Lovelace",
            "John McCarthy"
        ],
        "correct": 1,
        "explanation": "El test evalúa si un juez ciego puede discernir si su interlocutor en un diálogo textual es humano o una computadora.",
        "id": "q_g7_ingenio_45"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo de lógica: En una mesa hay 3 sombreros blancos y 2 negros. Tres sabios con los ojos vendados eligen uno cada uno y se ponen en fila india. ¿Cómo deduce el primero el color de su sombrero?",
        "options": [
            "Por adivinanza",
            "Por el silencio de los que están detrás de él deduciendo las combinaciones descartadas",
            "Mirando un reflejo",
            "Pidiendo una pista"
        ],
        "correct": 1,
        "explanation": "Al no poder asegurar los de atrás sus colores, el de adelante deduce que las opciones incompatibles quedan eliminadas.",
        "id": "q_g7_ingenio_46"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué astrónoma estadounidense descubrió en 1912 la relación período-luminosidad de las estrellas variables Cefeidas permitiendo medir las distancias del Universo?",
        "options": [
            "Vera Rubin",
            "Henrietta Swan Leavitt",
            "Cecilia Payne",
            "Jocelyn Bell"
        ],
        "correct": 1,
        "explanation": "El trabajo de Henrietta Leavitt permitió a Edwin Hubble calcular que Andrómeda era otra galaxia fuera de la Vía Láctea.",
        "id": "q_g7_ingenio_47"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es el número áureo o proporción divina (Phi: Φ), considerado símbolo de armonía estética desde la antigüedad griega?",
        "options": [
            "1,4142...",
            "1,6180...",
            "2,7182...",
            "3,1415..."
        ],
        "correct": 1,
        "explanation": "La proporción áurea Φ = (1 + √5) / 2 ≈ 1,618 se manifiesta en caracoles nautilus, flores y en la arquitectura clásica.",
        "id": "q_g7_ingenio_48"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Un caracol sube por un pozo de 10 metros. De día sube 3 metros y de noche resbala 2 metros. ¿En cuántos días sale del pozo?",
        "options": [
            "10 días",
            "8 días",
            "7 días",
            "9 días"
        ],
        "correct": 1,
        "explanation": "Avanza 1 metro neto por día: al final del día 7 está a 7 metros. En el día 8 sube 3 metros, alcanzando los 10 metros y sale sin llegar a resbalar.",
        "id": "q_g7_ingenio_49"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué matemática y escritora británica del siglo XIX es considerada la primera programadora de computadoras de la historia por sus notas sobre la Máquina Analítica?",
        "options": [
            "Marie Curie",
            "Ada Lovelace (Byron)",
            "Rosalind Franklin",
            "Grace Hopper"
        ],
        "correct": 1,
        "explanation": "Ada Lovelace concibió en 1843 el primer algoritmo destinado a ser procesado por una máquina de cálculo mecánica.",
        "id": "q_g7_ingenio_50"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la obra cumbre de la literatura universal renacentista escrita por el dramaturgo William Shakespeare protagonizada por el príncipe de Dinamarca?",
        "options": [
            "Macbeth",
            "Hamlet",
            "Otelo",
            "El rey Lear"
        ],
        "correct": 1,
        "explanation": "Hamlet profundiza en la venganza, la traición y la célebre disyuntiva existencial 'Ser o no ser'.",
        "id": "q_g7_ingenio_51"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si lanzas un dado normal de seis caras tres veces seguidas y las tres veces sale el número 6, ¿cuál es la probabilidad exacta de que en el cuarto tiro vuelva a salir un 6?",
        "options": [
            "1/1296",
            "1/6",
            "1/216",
            "Casi imposible"
        ],
        "correct": 1,
        "explanation": "Cada tirada de un dado equilibrado es un suceso estadístico independiente: la probabilidad en cada tiro sigue siendo exactamente 1/6.",
        "id": "q_g7_ingenio_52"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué astrofísico británico que padecía ELA investigó la radiación térmica emitida por los agujeros negros (Radiación de Hawking)?",
        "options": [
            "Carl Sagan",
            "Stephen Hawking",
            "Roger Penrose",
            "Neil deGrasse Tyson"
        ],
        "correct": 1,
        "explanation": "Stephen Hawking demostró en 1974 que los agujeros negros no son totalmente negros sino que emiten radiación cuántica.",
        "id": "q_g7_ingenio_53"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué famoso tratado poético épico medieval italiano relata el viaje del protagonista por el Infierno, el Purgatorio y el Paraíso guiado por Virgilio?",
        "options": [
            "La Ilíada",
            "La Divina Comedia (de Dante Alighieri)",
            "El Decamerón",
            "Cantar de Roldán"
        ],
        "correct": 1,
        "explanation": "Dante compuso la Divina Comedia en tercetos encadenados en lengua toscana fijando los cánones de la lengua italiana.",
        "id": "q_g7_ingenio_54"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué número de tres dígitos cumple que su segundo dígito es cuatro veces el tercero, y el primero es tres unidades menor que el segundo?",
        "options": [
            "141",
            "582",
            "282",
            "441"
        ],
        "correct": 1,
        "explanation": "Tercer dígito = 2; segundo dígito = 4 × 2 = 8; primer dígito = 8 - 3 = 5: el número es 582.",
        "id": "q_g7_ingenio_55"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué telescopio detector de ondas gravitacionales confirmó en 2015 por primera vez la colisión de dos agujeros negros predicha por Einstein?",
        "options": [
            "Hubble",
            "LIGO (Laser Interferometer Gravitational-Wave Observatory)",
            "Keck",
            "ALMA"
        ],
        "correct": 1,
        "explanation": "LIGO midió ondulaciones microscópicas del espacio-tiempo producidas a más de mil millones de años luz.",
        "id": "q_g7_ingenio_56"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la obra pictórica surrealista de Salvador Dalí famosa por sus relojes blandos derritiéndose en un paisaje costero?",
        "options": [
            "El hijo del hombre",
            "La persistencia de la memoria",
            "Guernica",
            "El grito"
        ],
        "correct": 1,
        "explanation": "Pintada en 1931, 'La persistencia de la memoria' simboliza la relatividad del tiempo y el mundo inconsciente del sueño.",
        "id": "q_g7_ingenio_57"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: En una habitación cerrada hay tres interruptores numerados 1, 2 y 3. Afuera no se ve el interior, donde hay una única bombilla incandescente. Solo puedes entrar una vez. ¿Cómo sabes qué interruptor la enciende?",
        "options": [
            "Enciendes uno al azar",
            "Prendes el 1 por diez minutos, lo apagas, prendes el 2 y entras: si está encendida es el 2, si está apagada pero tibia es el 1, y si está fría es el 3",
            "Prendes el 1 y el 2 juntos",
            "Miras por la cerradura"
        ],
        "correct": 1,
        "explanation": "El calor residual de la bombilla incandescente permite distinguir el interruptor que estuvo encendido previamente.",
        "id": "q_g7_ingenio_58"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué biofísica británica obtuvo la 'Fotografía 51' mediante difracción de rayos X, clave para revelar la estructura helicoidal del ADN?",
        "options": [
            "Barbara McClintock",
            "Rosalind Franklin",
            "Jane Goodall",
            "Chien-Shiung Wu"
        ],
        "correct": 1,
        "explanation": "La imagen obtenida por Rosalind Franklin en el King's College evidenció la doble hélice de Watson y Crick en 1953.",
        "id": "q_g7_ingenio_59"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la constante matemática 'e' (base de los logaritmos naturales o neperianos), aproximadamente igual a 2,71828...?",
        "options": [
            "Número Pi",
            "Número de Euler (o constante de Napier)",
            "Número Áureo",
            "Constante de Planck"
        ],
        "correct": 1,
        "explanation": "El número e surge de límites del interés compuesto continuo y modela crecimientos biológicos exponenciales.",
        "id": "q_g7_ingenio_60"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo de conjuntos: En una sala hay 20 personas. Todas se saludan entre sí con un apretón de manos una sola vez. ¿Cuántos apretones de manos se dan en total?",
        "options": [
            "400",
            "190",
            "200",
            "100"
        ],
        "correct": 1,
        "explanation": "Es una combinación de 20 elementos tomados de a 2: (20 × 19) ÷ 2 = 380 ÷ 2 = 190 apretones.",
        "id": "q_g7_ingenio_61"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué famoso filósofo griego fue maestro de Platón y condenado a muerte bebiendo cicuta por cuestionar los dogmas de Atenas?",
        "options": [
            "Aristóteles",
            "Sócrates",
            "Pitágoras",
            "Heráclito"
        ],
        "correct": 1,
        "explanation": "Sócrates aplicaba el método mayéutico del diálogo crítico y afirmaba con humildad: 'Solo sé que no sé nada'.",
        "id": "q_g7_ingenio_62"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es el instrumento astronómico inaugurado en Chile en el desierto de Atacama formado por 66 antenas de alta precisión de radiofrecuencia?",
        "options": [
            "Observatorio Palomar",
            "ALMA (Atacama Large Millimeter/submillimeter Array)",
            "Very Large Telescope",
            "Gemini Sur"
        ],
        "correct": 1,
        "explanation": "ALMA es el mayor radiotelescopio astronómico terrestre para escudriñar polvo interestelar y formación estelar.",
        "id": "q_g7_ingenio_63"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo de lógica: Un prisionero tiene delante dos puertas: una conduce a la libertad y otra a la muerte. Cada puerta está custodiada por un guardia; uno siempre dice la verdad y el otro siempre miente. Solo puede hacer una pregunta a uno de ellos. ¿Qué pregunta hace?",
        "options": [
            "¿Cuál es la puerta de la libertad?",
            "¿Si le pregunto al otro guardia cuál es la puerta de la muerte, qué me dirá?",
            "¿Tú eres el que miente?",
            "¿El rey es justo?"
        ],
        "correct": 1,
        "explanation": "Al formular esa pregunta indirecta combinada, ambos guardias señalarán invariablemente la puerta de la libertad (o la inversa), permitiendo elegir seguro.",
        "id": "q_g7_ingenio_64"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué científico inglés publicó en 1665 'Micrographia', acuñando por primera vez la palabra 'célula' al observar láminas de corcho?",
        "options": [
            "Robert Hooke",
            "Antonie van Leeuwenhoek",
            "Marcello Malpighi",
            "Robert Brown"
        ],
        "correct": 0,
        "explanation": "Hooke observó cavidades poliédricas vacías semejantes a las celdas de los monjes y las denominó 'cells' (células).",
        "id": "q_g7_ingenio_65"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la obra dramática cumbre de Pedro Calderón de la Barca sobre el príncipe Segismundo y el libre albedrío humano?",
        "options": [
            "El burlador de Sevilla",
            "La vida es sueño",
            "Fuenteovejuna",
            "El caballero de Olmedo"
        ],
        "correct": 1,
        "explanation": "Calderón reflexiona sobre la realidad de la existencia con los célebres versos: '¿Qué es la vida? Un frenesí. ¿Qué es la vida? Una ilusión...'.",
        "id": "q_g7_ingenio_66"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si un tren sale de A hacia B a 80 km/h y otro sale al mismo tiempo de B hacia A a 120 km/h por la misma vía recta de 400 km de longitud, ¿en cuántas horas se cruzan?",
        "options": [
            "4 horas",
            "2 horas",
            "3 horas",
            "2,5 horas"
        ],
        "correct": 1,
        "explanation": "La velocidad relativa de aproximación es 80 + 120 = 200 km/h; tiempo de encuentro = 400 km ÷ 200 km/h = 2 horas.",
        "id": "q_g7_ingenio_67"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué matemático francés formuló el 'Último Teorema de Fermat', resuelto recién en 1995 por Andrew Wiles tras más de 350 años?",
        "options": [
            "René Descartes",
            "Pierre de Fermat",
            "Blaise Pascal",
            "Henri Poincaré"
        ],
        "correct": 1,
        "explanation": "Fermat afirmó que no existen soluciones enteras positivas para an + bn = cn cuando n es mayor que 2.",
        "id": "q_g7_ingenio_68"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es el monumento megalítico prehistórico circular de piedra erigido en la llanura de Salisbury, Inglaterra?",
        "options": [
            "Karnak",
            "Stonehenge",
            "Los Menhires de Carnac",
            "Newgrange"
        ],
        "correct": 1,
        "explanation": "Stonehenge data del Neolítico y la Edad del Bronce alineado astronómicamente con los solsticios solares.",
        "id": "q_g7_ingenio_69"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Tienes dos jarras sin graduar: una de 5 litros y otra de 3 litros. Tienes agua ilimitada. ¿Cómo mides exactamente 4 litros?",
        "options": [
            "Llenas la de 5 a ojo",
            "Llenas la de 5 L, viertes en la de 3 L (quedan 2 L en la de 5); vacías la de 3 L, pasas los 2 L a la de 3 L; llenas la de 5 L y completas la de 3 L (pasas 1 L): quedan 4 L en la de 5 L",
            "Pones mitad en cada una",
            "Llenas la de 3 L dos veces"
        ],
        "correct": 1,
        "explanation": "Es el clásico problema diofántico de jarras: (5 - 3 = 2) -> (3 - 2 = 1 de capacidad libre) -> 5 - 1 = 4 litros exactos.",
        "id": "q_g7_ingenio_70"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué premio se considera equivalente al 'Premio Nobel de la Informática' entregado anualmente por la ACM?",
        "options": [
            "Medalla Fields",
            "Premio Turing",
            "Premio Abel",
            "Premio Kyoto"
        ],
        "correct": 1,
        "explanation": "El A.M. Turing Award reconoce contribuciones de impacto duradero y trascendente en ciencias de la computación.",
        "id": "q_g7_ingenio_71"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la ópera prima de la literatura en lengua castellana que narra las hazañas del caballero Rodrigo Díaz de Vivar?",
        "options": [
            "El cantar de mio Cid",
            "La Celestina",
            "Libro de buen amor",
            "Coplas a la muerte de su padre"
        ],
        "correct": 0,
        "explanation": "El poema épico de Mio Cid compuesto en el siglo XII relata el destierro y recuperación de honra del héroe castellano.",
        "id": "q_g7_ingenio_72"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo de balanza: Tienes 9 monedas de oro y una es falsa (más liviana). Con una balanza de dos platos y sin pesas, ¿cuál es el mínimo de pesadas necesarias para identificar la moneda falsa con certeza?",
        "options": [
            "3 pesadas",
            "2 pesadas",
            "4 pesadas",
            "1 pesada"
        ],
        "correct": 1,
        "explanation": "Divides en 3 grupos de 3: pesas grupo 1 vs grupo 2. Si pesan igual, la falsa está en el grupo 3. En la segunda pesada comparas dos monedas de ese grupo y hallas la falsa en solo 2 pesadas.",
        "id": "q_g7_ingenio_73"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué médico y botánico sueco estableció en el siglo XVIII el sistema binomial de nomenclatura científica para clasificar a los seres vivos (Género y especie)?",
        "options": [
            "Carlos Linneo (Carl von Linné)",
            "Georges Cuvier",
            "Jean-Baptiste Lamarck",
            "Ernst Haeckel"
        ],
        "correct": 0,
        "explanation": "Linneo introdujo nombres latinos normalizados como 'Homo sapiens' o 'Canis lupus' unificando la taxonomía mundial.",
        "id": "q_g7_ingenio_74"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué escultor renacentista esculpió la monumental estatua de mármol blanco de 'David' y 'La Piedad'?",
        "options": [
            "Donatello",
            "Miguel Ángel Buonarroti",
            "Bernini",
            "Ghiberti"
        ],
        "correct": 1,
        "explanation": "El David de Miguel Ángel tallado entre 1501 y 1504 representa al rey bíblico antes de enfrentar a Goliat.",
        "id": "q_g7_ingenio_75"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Qué palabra del idioma castellano contiene las cinco vocales (a, e, i, o, u) sin repetir ninguna?",
        "options": [
            "Murciélago (o aceituno, arquitecto)",
            "Abecedario",
            "Hipopótamo",
            "Electrodoméstico"
        ],
        "correct": 0,
        "explanation": "'M-u-r-c-i-é-l-a-g-o' contiene las cinco vocales del alfabeto exactamente una vez cada una (palabra pentavocalica).",
        "id": "q_g7_ingenio_76"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué satélite de Júpiter cubierto por una gruesa capa de hielo alberga un océano subterráneo líquido con potencial astrobiológico?",
        "options": [
            "Ío",
            "Europa",
            "Titán",
            "Ganimedes"
        ],
        "correct": 1,
        "explanation": "La luna Europa posee géiseres acuosos y mareas gravitatorias que mantienen su océano interno líquido.",
        "id": "q_g7_ingenio_77"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la novela cumbre del realismo mágico escrita por Gabriel García Márquez en 1967 ambientada en el pueblo de Macondo?",
        "options": [
            "Rayuela",
            "Cien años de soledad",
            "El amor en los tiempos del cólera",
            "Pedro Páramo"
        ],
        "correct": 1,
        "explanation": "Narra la saga épica de siete generaciones de la familia Buendía en el caribe colombiano.",
        "id": "q_g7_ingenio_78"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: En una carrera de 100 metros llanos, el corredor A le gana al corredor B por 10 metros. Si corren de nuevo pero el corredor A larga 10 metros detrás de la línea de largada, ¿quién gana si mantienen la misma velocidad?",
        "options": [
            "Llegan exactamente empatados",
            "Gana el corredor A",
            "Gana el corredor B",
            "Ninguno llega"
        ],
        "correct": 1,
        "explanation": "A recorre 100 m mientras B recorre 90 m (se igualan en el metro 100 de A). En los últimos 10 metros A es más rápido y cruza la meta primero.",
        "id": "q_g7_ingenio_79"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué inventor y matemático griego del siglo III a.C. calculó la flotabilidad, diseñó la catapulta y gritó ¡Eureka!?",
        "options": [
            "Euclides",
            "Arquímedes de Siracusa",
            "Eratóstenes",
            "Pitágoras"
        ],
        "correct": 1,
        "explanation": "Arquímedes determinó el volumen de la corona de Hierón sumergiéndola en agua en la tina.",
        "id": "q_g7_ingenio_80"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la famosa paradoja de la mecánica cuántica formulada en 1935 con un animal en una caja que está vivo y muerto a la vez hasta que se lo observa?",
        "options": [
            "Paradoja de Fermi",
            "El gato de Schrödinger",
            "Paradoja de los gemelos",
            "Paradoja de Olbers"
        ],
        "correct": 1,
        "explanation": "Erwin Schrödinger planteó el experimento mental para ilustrar la superposición de estados cuánticos.",
        "id": "q_g7_ingenio_81"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué compositor polaco del período romántico compuso casi exclusivamente para piano obras como polonesas, nocturnos y mazurcas?",
        "options": [
            "Franz Liszt",
            "Frédéric Chopin",
            "Robert Schumann",
            "Johannes Brahms"
        ],
        "correct": 1,
        "explanation": "Chopin llevó la expresividad lírica y virtuosismo pianístico a su cúspide romántica en París.",
        "id": "q_g7_ingenio_82"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: ¿Cuántas veces se cruzan exactamente las manecillas de un reloj analógico (horario y minutero) en un período completo de 12 horas?",
        "options": [
            "12 veces",
            "11 veces",
            "10 veces",
            "24 veces"
        ],
        "correct": 1,
        "explanation": "Debido a que el horario avanza mientras el minutero gira, la superposición ocurre 11 veces en 12 horas (cada 1 hora, 5 minutos y 27 segundos).",
        "id": "q_g7_ingenio_83"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Quién calculó por primera vez la circunferencia de la Tierra en el siglo III a.C. en Alejandría midiendo la sombra de varillas al mediodía?",
        "options": [
            "Ptolomeo",
            "Eratóstenes de Cirene",
            "Aristarco de Samos",
            "Hiparco de Nicea"
        ],
        "correct": 1,
        "explanation": "Eratóstenes obtuvo una estimación de aproximadamente 40.000 km con asombrosa precisión matemática.",
        "id": "q_g7_ingenio_84"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué famoso tratado de estrategia militar y filosofía escrito en la antigua China por Sun Tzu se estudia aún hoy?",
        "options": [
            "El Príncipe",
            "El arte de la guerra",
            "El libro del Tao",
            "Los cuatro libros"
        ],
        "correct": 1,
        "explanation": "Sun Tzu enfatiza vencer sin combatir mediante el conocimiento del rival y la adaptabilidad.",
        "id": "q_g7_ingenio_85"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Tienes una fila de 6 vasos: los primeros 3 están llenos de jugo y los últimos 3 están vacíos. ¿Cómo logras que queden alternados (lleno, vacío, lleno, vacío...) tocando o moviendo un solo vaso?",
        "options": [
            "Mueves el primer vaso al final",
            "Tomas el segundo vaso lleno, viertes su contenido en el quinto vaso vacío y vuelves a dejarlo en su lugar",
            "Corres todos los vasos",
            "Pones un vaso sobre otro"
        ],
        "correct": 1,
        "explanation": "Vaciando el vaso 2 dentro del vaso 5 logras la alternancia exacta habiendo manipulado un solo vaso.",
        "id": "q_g7_ingenio_86"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué científica informática estadounidense lideró el equipo del MIT que desarrolló el software de navegación a bordo para las misiones lunares Apolo?",
        "options": [
            "Grace Hopper",
            "Margaret Hamilton",
            "Katherine Johnson",
            "Dorothy Vaughan"
        ],
        "correct": 1,
        "explanation": "Margaret Hamilton acuñó el término 'ingeniería de software' y programó el sistema tolerante a fallos del aterrizaje lunar.",
        "id": "q_g7_ingenio_87"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la ciudadela monumental de Atenas erigida en el siglo V a.C. coronada por el templo del Partenón?",
        "options": [
            "El Coliseo",
            "La Acrópolis",
            "Delfos",
            "Olimpia"
        ],
        "correct": 1,
        "explanation": "Bajo el gobierno de Pericles, Fidias dirigió las obras maestras arquitectónicas de la Acrópolis ateniense.",
        "id": "q_g7_ingenio_88"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo de lógica: Un hombre mira un retrato y dice: 'Ni hermanos ni hermanas tengo, pero el padre de este hombre es el hijo de mi padre'. ¿De quién es el retrato?",
        "options": [
            "De su padre",
            "De su hijo",
            "De él mismo",
            "De su sobrino"
        ],
        "correct": 1,
        "explanation": "El 'hijo de mi padre' (no teniendo hermanos) soy yo mismo. Por lo tanto: 'el padre de este hombre soy yo': es el retrato de su hijo.",
        "id": "q_g7_ingenio_89"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué célebre pintor barroco holandés pintó la obra maestra 'La ronda de noche' y es maestro del claroscuro?",
        "options": [
            "Johannes Vermeer",
            "Rembrandt van Rijn",
            "Frans Hals",
            "Jan Steen"
        ],
        "correct": 1,
        "explanation": "Rembrandt revolucionó la pintura grupal con dinamismo escénico y maestría en el manejo de luces y sombras.",
        "id": "q_g7_ingenio_90"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la velocidad de escape que necesita un cohete para abandonar la superficie de la Tierra y salir al espacio interplanetario?",
        "options": [
            "7,9 km/s",
            "11,2 km/s",
            "29,8 km/s",
            "42 km/s"
        ],
        "correct": 1,
        "explanation": "La velocidad de escape parabólica desde la superficie terrestre es de aproximadamente 11,2 kilómetros por segundo.",
        "id": "q_g7_ingenio_91"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si un tren de 1 kilómetro de largo viaja a 60 km/h y entra en un túnel de 1 kilómetro de largo, ¿cuánto tiempo tarda en salir del túnel completamente?",
        "options": [
            "1 minuto",
            "2 minutos",
            "3 minutos",
            "30 segundos"
        ],
        "correct": 1,
        "explanation": "Para salir por completo debe recorrer su propia longitud más la del túnel: 1 km + 1 km = 2 km. A 60 km/h (1 km por minuto), tarda 2 minutos.",
        "id": "q_g7_ingenio_92"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué matemático y filósofo francés formuló el plano de coordenadas ortogonales y la célebre frase 'Pienso, luego existo'?",
        "options": [
            "Blaise Pascal",
            "René Descartes",
            "Pierre Simon Laplace",
            "Gottfried Leibniz"
        ],
        "correct": 1,
        "explanation": "Descartes fusionó el álgebra con la geometría en el sistema cartesiano y fundó el racionalismo filosófico.",
        "id": "q_g7_ingenio_93"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es el río más caudaloso de Europa que desemboca en el mar Caspio tras recorrer más de 3.500 km en Rusia?",
        "options": [
            "Río Danubio",
            "Río Volga",
            "Río Rin",
            "Río Sena"
        ],
        "correct": 1,
        "explanation": "El Volga es el río más largo y caudaloso del continente europeo.",
        "id": "q_g7_ingenio_94"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: En una habitación cuadrada hay un gato en cada esquina. Delante de cada gato hay 3 gatos, y sobre la cola de cada gato está sentado un gato. ¿Cuántos gatos hay en la habitación como mínimo?",
        "options": [
            "12 gatos",
            "4 gatos",
            "16 gatos",
            "8 gatos"
        ],
        "correct": 1,
        "explanation": "Bastan 4 gatos en las 4 esquinas: cada uno mira a los otros tres y cada uno está sentado sobre su propia cola.",
        "id": "q_g7_ingenio_95"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué explorador portugués al servicio de España lideró la primera expedición que dio la vuelta al mundo (1519-1522), completada por Juan Sebastián Elcano?",
        "options": [
            "Vasco da Gama",
            "Fernando de Magallanes",
            "Pedro Álvares Cabral",
            "Bartolomé Díaz"
        ],
        "correct": 1,
        "explanation": "Magallanes descubrió el estrecho que une el Atlántico con el Pacífico y Elcano culminó la primera circunnavegación.",
        "id": "q_g7_ingenio_96"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Cuál es la galaxia más cercana a la Vía Láctea entre las grandes galaxias espirales, ubicada a 2,5 millones de años luz?",
        "options": [
            "Galaxia del Triángulo",
            "Galaxia de Andrómeda (M31)",
            "Nube de Magallanes",
            "Centaurus A"
        ],
        "correct": 1,
        "explanation": "Andrómeda se aproxima a la Vía Láctea a unos 110 km/s y colisionará con ella en unos 4.500 millones de años.",
        "id": "q_g7_ingenio_97"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "Acertijo: Si un reloj da 3 campanadas en 3 segundos, ¿cuántos segundos tardará en dar 6 campanadas?",
        "options": [
            "6 segundos",
            "7,5 segundos",
            "9 segundos",
            "5 segundos"
        ],
        "correct": 1,
        "explanation": "Entre 3 campanadas hay 2 intervalos de tiempo: cada intervalo dura 3 ÷ 2 = 1,5 segundos. Para dar 6 campanadas hay 5 intervalos: 5 × 1,5 = 7,5 segundos.",
        "id": "q_g7_ingenio_98"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Quién inventó la World Wide Web (WWW) y el protocolo HTTP en el CERN en 1989 para compartir documentos en red?",
        "options": [
            "Bill Gates",
            "Tim Berners-Lee",
            "Steve Jobs",
            "Vint Cerf"
        ],
        "correct": 1,
        "explanation": "Sir Tim Berners-Lee diseñó el lenguaje HTML, las URL y el protocolo HTTP creando la web moderna.",
        "id": "q_g7_ingenio_99"
    },
    {
        "grade": 7,
        "category": "ingenio",
        "question": "¿Qué premio de la Academia de Cine de Hollywood se entrega anualmente desde 1929 con la estatuilla dorada de un caballero con espada?",
        "options": [
            "Premio Globo de Oro",
            "Premio Oscar",
            "Palma de Oro",
            "León de Oro"
        ],
        "correct": 1,
        "explanation": "El Oscar (Academy Award) es el máximo galardón cinematográfico de la industria global.",
        "id": "q_g7_ingenio_100"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While we _______ our homework, the lights suddenly went out.",
        "options": [
            "did",
            "were doing",
            "are doing",
            "have done"
        ],
        "correct": 1,
        "explanation": "Usamos Past Continuous ('were doing') para una acción prolongada en progreso en el pasado cuando ocurrió otra acción puntual ('the lights went out').",
        "id": "q_gg4_mat_51"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I usually get up at 7:00, but today I _______ in bed until 8:30.",
        "options": [
            "stayed",
            "stay",
            "am staying",
            "have stayed"
        ],
        "correct": 0,
        "explanation": "Se refiere a un hecho puntual ocurrido hoy en el pasado ('stayed').",
        "id": "q_gg4_mat_52"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What _______ when I called you yesterday afternoon?",
        "options": [
            "did you do",
            "were you doing",
            "are you doing",
            "do you do"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('were you doing') para preguntar qué estabas haciendo en el momento exacto en que te llamé.",
        "id": "q_gg4_mat_53"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Sam _______ his glasses, so he couldn't read the board.",
        "options": [
            "forgot",
            "was forgetting",
            "forgets",
            "is forgetting"
        ],
        "correct": 0,
        "explanation": "Past Simple ('forgot') para una acción completada en el pasado que causó una consecuencia.",
        "id": "q_gg4_mat_54"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Look! The cat _______ up the tall tree in the garden.",
        "options": [
            "climbs",
            "is climbing",
            "climbed",
            "was climbing"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('is climbing') se usa para acciones que suceden ahora mismo ('Look!').",
        "id": "q_gg4_mat_55"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My uncle _______ a new car two weeks ago.",
        "options": [
            "buys",
            "bought",
            "was buying",
            "is buying"
        ],
        "correct": 1,
        "explanation": "Con la expresión de tiempo 'two weeks ago' corresponde el Past Simple ('bought').",
        "id": "q_gg4_mat_56"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Water _______ at 100 degrees Celsius.",
        "options": [
            "boils",
            "is boiling",
            "boiled",
            "was boiling"
        ],
        "correct": 0,
        "explanation": "Present Simple ('boils') para hechos científicos y verdades universales.",
        "id": "q_gg4_mat_57"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "We _______ tennis when it started to rain heavily.",
        "options": [
            "played",
            "were playing",
            "are playing",
            "play"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('were playing') expresa la acción en curso interrumpida por la lluvia ('started').",
        "id": "q_gg4_mat_58"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Do you _______ this word? It is not in my dictionary.",
        "options": [
            "knowing",
            "know",
            "knew",
            "knows"
        ],
        "correct": 1,
        "explanation": "'Know' es un verbo de estado (stative verb) y con el auxiliar 'Do' va en infinitivo ('know').",
        "id": "q_gg4_mat_59"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Yesterday at 6 PM, Emma _______ for her math test.",
        "options": [
            "studied",
            "was studying",
            "is studying",
            "studies"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('was studying') para una acción que estaba en desarrollo en una hora específica del pasado.",
        "id": "q_gg4_mat_60"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Why _______ you crying? What happened?",
        "options": [
            "are",
            "do",
            "were",
            "did"
        ],
        "correct": 0,
        "explanation": "Present Continuous ('are you crying') para preguntar sobre el estado o acción en el presente.",
        "id": "q_gg4_mat_61"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "They _______ dinner when the doorbell rang.",
        "options": [
            "had",
            "were having",
            "have",
            "are having"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('were having') para la acción que estaba transcurriendo al sonar el timbre.",
        "id": "q_gg4_mat_62"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Listen! The birds _______ in the garden.",
        "options": [
            "sing",
            "are singing",
            "sang",
            "were singing"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('are singing') para una acción que transcurre en este instante.",
        "id": "q_gg4_mat_63"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "He _______ his keys yesterday, but he found them this morning.",
        "options": [
            "lost",
            "was losing",
            "loses",
            "is losing"
        ],
        "correct": 0,
        "explanation": "Past Simple ('lost') describe el hecho concreto ocurrido ayer.",
        "id": "q_gg4_mat_64"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Where _______ you live before moving to this city?",
        "options": [
            "did",
            "were",
            "do",
            "are"
        ],
        "correct": 0,
        "explanation": "Para preguntas sobre el pasado en Past Simple usamos el auxiliar 'did' ('Where did you live...?').",
        "id": "q_gg4_mat_65"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My father rarely _______ coffee in the evening.",
        "options": [
            "drinks",
            "is drinking",
            "drank",
            "was drinking"
        ],
        "correct": 0,
        "explanation": "Con adverbios de frecuencia como 'rarely' usamos Present Simple ('drinks').",
        "id": "q_gg4_mat_66"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While Mom was cooking dinner, Dad _______ the living room.",
        "options": [
            "vacuumed",
            "was vacuuming",
            "is vacuuming",
            "vacuums"
        ],
        "correct": 1,
        "explanation": "Dos acciones continuas en paralelo en el pasado usan Past Continuous ('was vacuuming').",
        "id": "q_gg4_mat_67"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I _______ to the cinema last night with my cousins.",
        "options": [
            "go",
            "went",
            "was going",
            "am going"
        ],
        "correct": 1,
        "explanation": "Past Simple ('went') para una acción terminada en un tiempo específico pasado ('last night').",
        "id": "q_gg4_mat_68"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "She _______ understand the rule, so she asked the teacher.",
        "options": [
            "didn't",
            "wasn't",
            "doesn't",
            "isn't"
        ],
        "correct": 0,
        "explanation": "En pasado simple con verbos principales como understand usamos el auxiliar negativo 'didn't'.",
        "id": "q_gg4_mat_69"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Be quiet! The baby _______ in the bedroom.",
        "options": [
            "sleeps",
            "is sleeping",
            "slept",
            "was sleeping"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('is sleeping') para algo ocurriendo ahora mismo ('Be quiet!').",
        "id": "q_gg4_mat_70"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What _______ you think about this painting?",
        "options": [
            "are",
            "do",
            "did",
            "were"
        ],
        "correct": 1,
        "explanation": "El verbo 'think' cuando expresa opinión es un stative verb y usa Present Simple ('do you think').",
        "id": "q_gg4_mat_71"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "When the teacher walked into the classroom, the students _______ loudly.",
        "options": [
            "talked",
            "were talking",
            "are talking",
            "talk"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('were talking') para la acción en progreso cuando entró el profesor.",
        "id": "q_gg4_mat_72"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Lucas _______ soccer every Tuesday afternoon.",
        "options": [
            "plays",
            "is playing",
            "played",
            "was playing"
        ],
        "correct": 0,
        "explanation": "Present Simple ('plays') para una rutina o hábito semanal recurrente.",
        "id": "q_gg4_mat_73"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "At midnight, everyone in the house _______ peacefully.",
        "options": [
            "slept",
            "was sleeping",
            "sleeps",
            "is sleeping"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('was sleeping') para describir una acción en desarrollo a una hora puntual del pasado.",
        "id": "q_gg4_mat_74"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "We _______ an exciting documentary on TV yesterday evening.",
        "options": [
            "watched",
            "were watching",
            "watch",
            "are watching"
        ],
        "correct": 0,
        "explanation": "Past Simple ('watched') para una acción completada ayer a la noche.",
        "id": "q_gg4_mat_75"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Look at John! He _______ his bike without holding the handlebars.",
        "options": [
            "rides",
            "is riding",
            "rode",
            "was riding"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('is riding') para la acción visual en vivo en el momento del habla.",
        "id": "q_gg4_mat_76"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "How often _______ you brush your teeth?",
        "options": [
            "are",
            "do",
            "did",
            "were"
        ],
        "correct": 1,
        "explanation": "Para preguntar por frecuencia de hábitos se usa 'How often do you...' en Present Simple.",
        "id": "q_gg4_mat_77"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While she _______ across the road, she dropped her phone.",
        "options": [
            "walked",
            "was walking",
            "is walking",
            "walks"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('was walking') tras 'While' para la acción prolongada durante la cual ocurrió la caída.",
        "id": "q_gg4_mat_78"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I _______ hungry right now. Let's make a sandwich.",
        "options": [
            "am feeling",
            "feel",
            "was feeling",
            "felt"
        ],
        "correct": 1,
        "explanation": "El verbo 'feel' para sensaciones inmediatas se suele usar en Present Simple ('feel').",
        "id": "q_gg4_mat_79"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "They _______ their grandparents in Spain every summer.",
        "options": [
            "visit",
            "are visiting",
            "visited",
            "were visiting"
        ],
        "correct": 0,
        "explanation": "Present Simple ('visit') para una costumbre que ocurre todos los veranos ('every summer').",
        "id": "q_gg4_mat_80"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What was Tom doing when you saw him? - He _______ for his dog.",
        "options": [
            "searched",
            "was searching",
            "is searching",
            "searches"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('was searching') para responder a la acción en progreso en ese instante.",
        "id": "q_gg4_mat_81"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "The train _______ at 8:15 every morning from platform 3.",
        "options": [
            "leaves",
            "is leaving",
            "left",
            "was leaving"
        ],
        "correct": 0,
        "explanation": "Present Simple ('leaves') para horarios fijos de transporte público (timetables).",
        "id": "q_gg4_mat_82"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Who _______ that window? It is completely broken!",
        "options": [
            "broke",
            "was breaking",
            "breaks",
            "is breaking"
        ],
        "correct": 0,
        "explanation": "Past Simple ('broke') para preguntar quién realizó la acción que provocó la ventana rota.",
        "id": "q_gg4_mat_83"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "She _______ usually drink soda; she prefers water.",
        "options": [
            "isn't",
            "doesn't",
            "wasn't",
            "didn't"
        ],
        "correct": 1,
        "explanation": "Auxiliar 'doesn't' para la tercera persona singular en Present Simple.",
        "id": "q_gg4_mat_84"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While I was taking a shower, someone _______ at the front door.",
        "options": [
            "knocked",
            "was knocking",
            "knocks",
            "is knocking"
        ],
        "correct": 0,
        "explanation": "Past Simple ('knocked') para el suceso puntual que interrumpe la ducha.",
        "id": "q_gg4_mat_85"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Look, the sun _______! Let's go outside.",
        "options": [
            "shines",
            "is shining",
            "shone",
            "was shining"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('is shining') para lo que ocurre en este momento exacto.",
        "id": "q_gg4_mat_86"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Where _______ you spend your summer vacation last year?",
        "options": [
            "did",
            "were",
            "do",
            "are"
        ],
        "correct": 0,
        "explanation": "Past Simple con auxiliar 'did' para consultar por un periodo pasado cerrado ('last year').",
        "id": "q_gg4_mat_87"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "My sister _______ like horror films; they scare her too much.",
        "options": [
            "doesn't",
            "don't",
            "isn't",
            "wasn't"
        ],
        "correct": 0,
        "explanation": "Negación en Present Simple para 'she': 'doesn't like'.",
        "id": "q_gg4_mat_88"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "We _______ our bags when the taxi arrived.",
        "options": [
            "packed",
            "were packing",
            "are packing",
            "pack"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('were packing') para la acción en desarrollo cuando llegó el taxi.",
        "id": "q_gg4_mat_89"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Listen! The teacher _______ an important announcement.",
        "options": [
            "makes",
            "is making",
            "made",
            "was making"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('is making') debido al llamado de atención 'Listen!'.",
        "id": "q_gg4_mat_90"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Shakespeare _______ many famous plays including Romeo and Juliet.",
        "options": [
            "wrote",
            "was writing",
            "writes",
            "is writing"
        ],
        "correct": 0,
        "explanation": "Past Simple ('wrote') para un hecho histórico biográfico ya concluido.",
        "id": "q_gg4_mat_91"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I can't talk right now because I _______ my room.",
        "options": [
            "tidy",
            "am tidying",
            "tidied",
            "was tidying"
        ],
        "correct": 1,
        "explanation": "Present Continuous ('am tidying') para justificar por qué no puedo hablar en este instante.",
        "id": "q_gg4_mat_92"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Did you _______ the museum during your trip to London?",
        "options": [
            "visit",
            "visited",
            "visiting",
            "visits"
        ],
        "correct": 0,
        "explanation": "Después del auxiliar 'Did', el verbo principal siempre va en infinitivo sin 'to' ('visit').",
        "id": "q_gg4_mat_93"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "The Earth _______ around the Sun.",
        "options": [
            "revolves",
            "is revolving",
            "revolved",
            "was revolving"
        ],
        "correct": 0,
        "explanation": "Present Simple ('revolves') para una verdad científica permanente.",
        "id": "q_gg4_mat_94"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "While the chef was preparing the soup, the waiter _______ the tables.",
        "options": [
            "set",
            "was setting",
            "sets",
            "is setting"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('was setting') para acciones simultáneas en el pasado unidas por 'while'.",
        "id": "q_gg4_mat_95"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "He _______ to school yesterday because he had a high fever.",
        "options": [
            "didn't go",
            "wasn't going",
            "doesn't go",
            "isn't going"
        ],
        "correct": 0,
        "explanation": "Past Simple negativo ('didn't go') con la expresión temporal 'yesterday'.",
        "id": "q_gg4_mat_96"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "What kind of music _______ you like listening to?",
        "options": [
            "are",
            "do",
            "did",
            "were"
        ],
        "correct": 1,
        "explanation": "Present Simple con auxiliar 'do' para preferencias personales permanentes.",
        "id": "q_gg4_mat_97"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "I saw an owl while I _______ through the forest at night.",
        "options": [
            "walked",
            "was walking",
            "am walking",
            "walk"
        ],
        "correct": 1,
        "explanation": "Past Continuous ('was walking') tras 'while' para la acción prolongada de caminar.",
        "id": "q_gg4_mat_98"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "Why _______ everyone laughing when I entered the classroom?",
        "options": [
            "was",
            "were",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "El sujeto 'everyone' es gramaticalmente singular en inglés, por lo que lleva 'was laughing'.",
        "id": "q_gg4_mat_99"
    },
    {
        "grade": "gogetter4",
        "category": "matematica",
        "question": "They always _______ their teeth before going to sleep.",
        "options": [
            "brush",
            "are brushing",
            "brushed",
            "were brushing"
        ],
        "correct": 0,
        "explanation": "Present Simple ('brush') para hábitos diarios marcados por 'always'.",
        "id": "q_gg4_mat_100"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I haven't finished my homework _______; I need ten more minutes.",
        "options": [
            "already",
            "yet",
            "just",
            "since"
        ],
        "correct": 1,
        "explanation": "Usamos 'yet' al final de oraciones negativas en Present Perfect para indicar que algo aún no ocurrió.",
        "id": "q_gg4_len_51"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you _______ seen a shooting star at night?",
        "options": [
            "never",
            "ever",
            "yet",
            "already"
        ],
        "correct": 1,
        "explanation": "Usamos 'ever' en preguntas de Present Perfect para indagar sobre experiencias de vida ('alguna vez').",
        "id": "q_gg4_len_52"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She has lived in Buenos Aires _______ 2018.",
        "options": [
            "for",
            "since",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "Usamos 'since' para indicar el punto de partida en el tiempo (un año, fecha o momento específico).",
        "id": "q_gg4_len_53"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "They have known each other _______ five years.",
        "options": [
            "since",
            "for",
            "during",
            "ago"
        ],
        "correct": 1,
        "explanation": "Usamos 'for' para expresar un período o duración de tiempo ('five years').",
        "id": "q_gg4_len_54"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Look, he has _______ won the gold medal! Everyone is cheering.",
        "options": [
            "just",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "Usamos 'just' para indicar que una acción acaba de suceder hace un instante muy breve.",
        "id": "q_gg4_len_55"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Where is Peter? - He has _______ to the supermarket; he will be back in an hour.",
        "options": [
            "been",
            "gone",
            "went",
            "go"
        ],
        "correct": 1,
        "explanation": "Usamos 'has gone' cuando la persona fue a un lugar y todavía no regresó.",
        "id": "q_gg4_len_56"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have _______ visited that science museum three times.",
        "options": [
            "already",
            "yet",
            "ever",
            "never"
        ],
        "correct": 0,
        "explanation": "Usamos 'already' para enfatizar que una acción ya ha sido realizada antes de lo esperado.",
        "id": "q_gg4_len_57"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you ever _______ a bone while doing sports?",
        "options": [
            "break",
            "broke",
            "broken",
            "breaking"
        ],
        "correct": 2,
        "explanation": "En Present Perfect usamos el participio pasado del verbo ('broken').",
        "id": "q_gg4_len_58"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "My grandparents have been married _______ forty years.",
        "options": [
            "since",
            "for",
            "from",
            "in"
        ],
        "correct": 1,
        "explanation": "Usamos 'for' con periodos de tiempo que indican duración ('forty years').",
        "id": "q_gg4_len_59"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has your father _______ worked as an architect?",
        "options": [
            "never",
            "ever",
            "yet",
            "already"
        ],
        "correct": 1,
        "explanation": "Usamos 'ever' en oraciones interrogativas para preguntar por experiencias de vida.",
        "id": "q_gg4_len_60"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ tried windsurfing; it looks far too dangerous!",
        "options": [
            "ever",
            "never",
            "already",
            "yet"
        ],
        "correct": 1,
        "explanation": "Usamos 'never' en oraciones afirmativas para expresar una experiencia que nunca hemos tenido.",
        "id": "q_gg4_len_61"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "The train has _______ arrived at the station; the passengers are getting off.",
        "options": [
            "just",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "Usamos 'just' para acciones que acaban de ocurrir de forma inmediata.",
        "id": "q_gg4_len_62"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have they eaten lunch _______? - No, not yet.",
        "options": [
            "already",
            "yet",
            "just",
            "since"
        ],
        "correct": 1,
        "explanation": "Usamos 'yet' al final de las preguntas para consultar si algo ya se completó.",
        "id": "q_gg4_len_63"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She has _______ to Rome twice, so she knows the city well.",
        "options": [
            "gone",
            "been",
            "went",
            "going"
        ],
        "correct": 1,
        "explanation": "Usamos 'has been' cuando la persona fue y ya regresó (experiencia de viaje).",
        "id": "q_gg4_len_64"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "How long _______ you had that smartphone?",
        "options": [
            "have",
            "has",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "La estructura 'How long have you...?' se utiliza con Present Perfect para preguntar por duración.",
        "id": "q_gg4_len_65"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Tom has _______ his keys, so he cannot enter his apartment.",
        "options": [
            "lose",
            "lost",
            "losing",
            "losed"
        ],
        "correct": 1,
        "explanation": "El participio pasado irregular de 'lose' es 'lost'.",
        "id": "q_gg4_len_66"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We haven't seen our cousins _______ last Christmas.",
        "options": [
            "for",
            "since",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "Usamos 'since' para un punto de inicio específico en el tiempo ('last Christmas').",
        "id": "q_gg4_len_67"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has she _______ her English project? - Yes, she has.",
        "options": [
            "finished",
            "finish",
            "finishing",
            "finishes"
        ],
        "correct": 0,
        "explanation": "El participio pasado regular de 'finish' es 'finished'.",
        "id": "q_gg4_len_68"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ read that book, so you can borrow it now.",
        "options": [
            "already",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "Usamos 'already' para indicar que la acción ya fue completada.",
        "id": "q_gg4_len_69"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "They _______ haven't replied to my email.",
        "options": [
            "already",
            "still",
            "yet",
            "just"
        ],
        "correct": 1,
        "explanation": "Usamos 'still' antes del auxiliar negativo ('still haven't') para enfatizar que la situación continúa sin cambiar.",
        "id": "q_gg4_len_70"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you ever _______ an elephant in real life?",
        "options": [
            "see",
            "saw",
            "seen",
            "seeing"
        ],
        "correct": 2,
        "explanation": "El participio pasado de 'see' es 'seen'.",
        "id": "q_gg4_len_71"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Lucas has studied English _______ he was seven years old.",
        "options": [
            "for",
            "since",
            "ago",
            "during"
        ],
        "correct": 1,
        "explanation": "Usamos 'since' con oraciones temporales que marcan el punto de partida ('since he was seven').",
        "id": "q_gg4_len_72"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She has _______ drunk a cup of hot chocolate, so she isn't cold anymore.",
        "options": [
            "just",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Just' se ubica entre el auxiliar 'has' y el participio para indicar que acaba de ocurrir.",
        "id": "q_gg4_len_73"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "My uncle has _______ climbed Mount Aconcagua.",
        "options": [
            "never",
            "ever",
            "yet",
            "since"
        ],
        "correct": 0,
        "explanation": "'Never' otorga sentido negativo a la oración manteniendo la estructura afirmativa.",
        "id": "q_gg4_len_74"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you _______ written a poem for your mom?",
        "options": [
            "never",
            "ever",
            "yet",
            "since"
        ],
        "correct": 1,
        "explanation": "Usamos 'ever' en preguntas sobre vivencias personales.",
        "id": "q_gg4_len_75"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "They have lived in that house _______ ten months.",
        "options": [
            "since",
            "for",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "Usamos 'for' para duraciones de tiempo ('ten months').",
        "id": "q_gg4_len_76"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "The bell hasn't rung _______, so please stay in your seats.",
        "options": [
            "already",
            "yet",
            "just",
            "ever"
        ],
        "correct": 1,
        "explanation": "'Yet' se coloca al final de cláusulas negativas en Present Perfect.",
        "id": "q_gg4_len_77"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Where has Maria _______? - She has gone to the library.",
        "options": [
            "been",
            "gone",
            "went",
            "go"
        ],
        "correct": 1,
        "explanation": "Se pregunta por el destino al que fue y donde se encuentra actualmente ('gone').",
        "id": "q_gg4_len_78"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have known our teacher _______ March.",
        "options": [
            "for",
            "since",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "'March' es un punto específico del calendario, por lo que lleva 'since'.",
        "id": "q_gg4_len_79"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you _______ tasted Mexican tacos?",
        "options": [
            "never",
            "ever",
            "yet",
            "already"
        ],
        "correct": 1,
        "explanation": "'Have you ever tasted...?' es la fórmula estándar para indagar experiencias gastronómicas.",
        "id": "q_gg4_len_80"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ made my bed, so my room is neat and tidy.",
        "options": [
            "already",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Already' señala que la tarea ya fue realizada con anterioridad.",
        "id": "q_gg4_len_81"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "He has _______ spoken to a famous celebrity.",
        "options": [
            "never",
            "ever",
            "yet",
            "since"
        ],
        "correct": 0,
        "explanation": "'Never' expresa que la experiencia no ha sucedido en toda su vida.",
        "id": "q_gg4_len_82"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "How many messages have you _______ today?",
        "options": [
            "receive",
            "receives",
            "received",
            "receiving"
        ],
        "correct": 2,
        "explanation": "El participio pasado regular de 'receive' es 'received'.",
        "id": "q_gg4_len_83"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She has been awake _______ 6 o'clock this morning.",
        "options": [
            "for",
            "since",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "Usamos 'since' con horas específicas que marcan el inicio del estado.",
        "id": "q_gg4_len_84"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you found your missing backpack _______?",
        "options": [
            "already",
            "yet",
            "just",
            "ever"
        ],
        "correct": 1,
        "explanation": "'Yet' al final de la pregunta indaga si la búsqueda ya tuvo éxito.",
        "id": "q_gg4_len_85"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "The plane has _______ landed safely on the runway.",
        "options": [
            "just",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Just' denota que el aterrizaje se produjo escasos momentos atrás.",
        "id": "q_gg4_len_86"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has Oliver ever _______ a horse before?",
        "options": [
            "ride",
            "rode",
            "ridden",
            "riding"
        ],
        "correct": 2,
        "explanation": "El participio pasado irregular de 'ride' es 'ridden'.",
        "id": "q_gg4_len_87"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We haven't eaten anything _______ breakfast.",
        "options": [
            "for",
            "since",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "'Breakfast' marca el momento temporal desde el cual no comieron nada ('since').",
        "id": "q_gg4_len_88"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I have _______ had a pet dog, but I would love to have one.",
        "options": [
            "ever",
            "never",
            "already",
            "yet"
        ],
        "correct": 1,
        "explanation": "'Never' indica que nunca ha tenido una mascota perro.",
        "id": "q_gg4_len_89"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "They have _______ bought the tickets for the concert next week.",
        "options": [
            "already",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Already' confirma que la compra de las entradas ya está concretada.",
        "id": "q_gg4_len_90"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has your brother ever _______ in a helicopter?",
        "options": [
            "fly",
            "flew",
            "flown",
            "flying"
        ],
        "correct": 2,
        "explanation": "El participio pasado irregular de 'fly' es 'flown'.",
        "id": "q_gg4_len_91"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "She hasn't spoken to me _______ yesterday.",
        "options": [
            "for",
            "since",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "'Yesterday' como punto de referencia temporal requiere 'since'.",
        "id": "q_gg4_len_92"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Don't touch that plate! Mom has _______ taken it out of the oven.",
        "options": [
            "just",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Just' resalta que acaba de ser sacado del horno y aún quema.",
        "id": "q_gg4_len_93"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Have you ever _______ your ankle playing football?",
        "options": [
            "sprain",
            "sprained",
            "spraining",
            "sprains"
        ],
        "correct": 1,
        "explanation": "Participio regular de 'sprain' es 'sprained'.",
        "id": "q_gg4_len_94"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "My sister has worked at this hospital _______ three years.",
        "options": [
            "since",
            "for",
            "from",
            "ago"
        ],
        "correct": 1,
        "explanation": "'Three years' es una duración de tiempo, por lo que lleva 'for'.",
        "id": "q_gg4_len_95"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "I haven't listened to that new song _______; is it good?",
        "options": [
            "already",
            "yet",
            "just",
            "ever"
        ],
        "correct": 1,
        "explanation": "'Yet' en posición final para algo que aún está pendiente de escuchar.",
        "id": "q_gg4_len_96"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "We have _______ seen such a gigantic waterfall before!",
        "options": [
            "never",
            "ever",
            "yet",
            "since"
        ],
        "correct": 0,
        "explanation": "'Never' transmite sorpresa ante algo que jamás se había visto.",
        "id": "q_gg4_len_97"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "Has the postman _______ delivered the letters?",
        "options": [
            "already",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Already' en preguntas se usa para mostrar sorpresa de que algo ya haya sucedido tan pronto.",
        "id": "q_gg4_len_98"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "How long has your teacher _______ at this school?",
        "options": [
            "teach",
            "taught",
            "teaching",
            "teaches"
        ],
        "correct": 1,
        "explanation": "El participio pasado irregular de 'teach' es 'taught'.",
        "id": "q_gg4_len_99"
    },
    {
        "grade": "gogetter4",
        "category": "lengua",
        "question": "He has _______ fallen asleep on the sofa; don't wake him up.",
        "options": [
            "just",
            "yet",
            "ever",
            "since"
        ],
        "correct": 0,
        "explanation": "'Just' indica que la persona acaba de dormirse hace instantes.",
        "id": "q_gg4_len_100"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ wear a seatbelt when driving in a car. It is the law.",
        "options": [
            "must",
            "mustn't",
            "shouldn't",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "Usamos 'must' para expresar una obligación legal ineludible ('It is the law').",
        "id": "q_gg4_nat_51"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ feed the animals in the zoo. It can make them sick.",
        "options": [
            "must",
            "mustn't",
            "have to",
            "should"
        ],
        "correct": 1,
        "explanation": "Usamos 'mustn't' para indicar una prohibición estricta.",
        "id": "q_gg4_nat_52"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Tomorrow is a public holiday, so we _______ go to school.",
        "options": [
            "mustn't",
            "don't have to",
            "shouldn't",
            "can't"
        ],
        "correct": 1,
        "explanation": "Usamos 'don't have to' para indicar ausencia de necesidad (no es obligatorio).",
        "id": "q_gg4_nat_53"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ eat so many sweets; it is bad for your teeth.",
        "options": [
            "should",
            "shouldn't",
            "must",
            "have to"
        ],
        "correct": 1,
        "explanation": "Usamos 'shouldn't' para dar un consejo o advertencia sobre algo no recomendable.",
        "id": "q_gg4_nat_54"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "_______ I borrow your pencil for a moment, please?",
        "options": [
            "Must",
            "May",
            "Should",
            "Have to"
        ],
        "correct": 1,
        "explanation": "Usamos 'May' o 'Can' de manera educada para pedir permiso.",
        "id": "q_gg4_nat_55"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "In a library, visitors _______ talk loudly.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "must"
        ],
        "correct": 0,
        "explanation": "'Mustn't' expresa la prohibición de hacer ruido en la biblioteca.",
        "id": "q_gg4_nat_56"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "It is raining heavily. You _______ take an umbrella with you.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "can't"
        ],
        "correct": 0,
        "explanation": "'Should' se usa para dar un consejo prudente y útil.",
        "id": "q_gg4_nat_57"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "When I was five years old, I _______ swim, but now I can.",
        "options": [
            "can't",
            "couldn't",
            "mustn't",
            "shouldn't"
        ],
        "correct": 1,
        "explanation": "'Couldn't' es la forma pasada de 'can't' para expresar falta de habilidad en el pasado.",
        "id": "q_gg4_nat_58"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Do you _______ wear a school uniform at your school?",
        "options": [
            "must",
            "have to",
            "should",
            "ought"
        ],
        "correct": 1,
        "explanation": "En preguntas con el auxiliar 'Do', la obligación se formula con 'have to' ('Do you have to...?').",
        "id": "q_gg4_nat_59"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Pedestrians _______ look both ways before crossing the street.",
        "options": [
            "shouldn't",
            "must",
            "mustn't",
            "don't have to"
        ],
        "correct": 1,
        "explanation": "'Must' expresa una norma fundamental de seguridad vial.",
        "id": "q_gg4_nat_60"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ pay to enter this museum; admission is completely free.",
        "options": [
            "mustn't",
            "don't have to",
            "can't",
            "shouldn't"
        ],
        "correct": 1,
        "explanation": "'Don't have to' significa que no es necesario pagar porque es gratis.",
        "id": "q_gg4_nat_61"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "She _______ practice the piano every day if she wants to pass the exam.",
        "options": [
            "has to",
            "have to",
            "mustn't",
            "shouldn't"
        ],
        "correct": 0,
        "explanation": "Para 'she' usamos 'has to' para expresar necesidad o deber.",
        "id": "q_gg4_nat_62"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ touch that electric wire! It is extremely dangerous.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't' prohíbe una acción que pondría en riesgo la vida.",
        "id": "q_gg4_nat_63"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "If you have a sore throat, you _______ drink warm tea with honey.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "have to not"
        ],
        "correct": 0,
        "explanation": "'Should' para aconsejar un remedio casero adecuado.",
        "id": "q_gg4_nat_64"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Passengers _______ smoke on airplanes; it is strictly prohibited.",
        "options": [
            "don't have to",
            "mustn't",
            "should",
            "can"
        ],
        "correct": 1,
        "explanation": "'Mustn't' para prohibiciones formales y estrictas.",
        "id": "q_gg4_nat_65"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We have plenty of time. We _______ run.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "must"
        ],
        "correct": 1,
        "explanation": "'Don't have to' indica que no hace falta apurarse porque sobra tiempo.",
        "id": "q_gg4_nat_66"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "_______ you speak French when you were living in Paris?",
        "options": [
            "Could",
            "Can",
            "Must",
            "Should"
        ],
        "correct": 0,
        "explanation": "'Could' es la forma pasada de 'can' para habilidades pasadas.",
        "id": "q_gg4_nat_67"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ share your passwords with strangers online.",
        "options": [
            "should",
            "mustn't",
            "have to",
            "can"
        ],
        "correct": 1,
        "explanation": "'Mustn't' prohíbe compartir contraseñas por seguridad digital.",
        "id": "q_gg4_nat_68"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Drivers _______ stop when the traffic light turns red.",
        "options": [
            "must",
            "don't have to",
            "shouldn't",
            "might"
        ],
        "correct": 0,
        "explanation": "'Must' es obligatorio para las leyes de tránsito.",
        "id": "q_gg4_nat_69"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "He _______ wear glasses for reading because his vision is blurred.",
        "options": [
            "has to",
            "have to",
            "mustn't",
            "shouldn't"
        ],
        "correct": 0,
        "explanation": "'Has to' expresa una necesidad médica concreta para tercera persona singular.",
        "id": "q_gg4_nat_70"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ stay up so late playing video games on school nights.",
        "options": [
            "should",
            "shouldn't",
            "must",
            "have to"
        ],
        "correct": 1,
        "explanation": "'Shouldn't' para aconsejar contra un mal hábito de sueño.",
        "id": "q_gg4_nat_71"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Can I go to the cinema tonight? - Yes, you _______, but finish your chores first.",
        "options": [
            "can",
            "mustn't",
            "shouldn't",
            "have to"
        ],
        "correct": 0,
        "explanation": "Se responde 'Yes, you can' para conceder permiso.",
        "id": "q_gg4_nat_72"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ wash your hands before eating meals.",
        "options": [
            "mustn't",
            "should",
            "don't have to",
            "can't"
        ],
        "correct": 1,
        "explanation": "'Should' para recomendar una regla de higiene básica.",
        "id": "q_gg4_nat_73"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Cyclists _______ wear a helmet to protect their heads.",
        "options": [
            "should",
            "mustn't",
            "don't have to",
            "can't"
        ],
        "correct": 0,
        "explanation": "'Should' recomienda una medida preventiva de seguridad.",
        "id": "q_gg4_nat_74"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ take photos in this gallery; flashes damage the paintings.",
        "options": [
            "don't have to",
            "mustn't",
            "should",
            "can"
        ],
        "correct": 1,
        "explanation": "'Mustn't' señala la prohibición expresa del museo.",
        "id": "q_gg4_nat_75"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "My brother _______ get up early on Sundays because he has no classes.",
        "options": [
            "doesn't have to",
            "mustn't",
            "shouldn't",
            "can't"
        ],
        "correct": 0,
        "explanation": "'Doesn't have to' para 'he' cuando no existe obligación.",
        "id": "q_gg4_nat_76"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ apologize to your sister for breaking her toy.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "'Should' para aconsejar una conducta moralmente correcta.",
        "id": "q_gg4_nat_77"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Students _______ bring mobile phones into the exam hall.",
        "options": [
            "can",
            "mustn't",
            "don't have to",
            "should"
        ],
        "correct": 1,
        "explanation": "'Mustn't' para prohibición durante evaluaciones académicas.",
        "id": "q_gg4_nat_78"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "_______ I leave the classroom to drink water, please?",
        "options": [
            "May",
            "Must",
            "Should",
            "Have to"
        ],
        "correct": 0,
        "explanation": "'May I...?' es la fórmula formal y cortés para pedir permiso al docente.",
        "id": "q_gg4_nat_79"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ water the plants today; it rained all morning.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "must"
        ],
        "correct": 1,
        "explanation": "'Don't have to' porque ya llovió y la tierra está húmeda (no es necesario).",
        "id": "q_gg4_nat_80"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ shout in the hospital corridors.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't' prohíbe gritar en ámbitos hospitalarios de reposo.",
        "id": "q_gg4_nat_81"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "When Mozart was only four, he _______ play the keyboard brilliantly.",
        "options": [
            "can",
            "could",
            "must",
            "should"
        ],
        "correct": 1,
        "explanation": "'Could' indica capacidad o talento demostrado en el pasado.",
        "id": "q_gg4_nat_82"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "If you feel dizzy, you _______ sit down and rest.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "'Should' ofrece la recomendación médica adecuada ante mareos.",
        "id": "q_gg4_nat_83"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ turn off your phone during the movie at the cinema.",
        "options": [
            "must",
            "mustn't",
            "don't have to",
            "can't"
        ],
        "correct": 0,
        "explanation": "'Must' para respetar las normas de convivencia en la sala de cine.",
        "id": "q_gg4_nat_84"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We _______ buy bread today; we still have three fresh loaves.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "have to"
        ],
        "correct": 1,
        "explanation": "'Don't have to' resalta que no es necesario realizar la compra.",
        "id": "q_gg4_nat_85"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Children _______ play with matches or lighters.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't' por el peligro inminente de fuego y quemaduras.",
        "id": "q_gg4_nat_86"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Does he _______ submit the essay before Friday?",
        "options": [
            "have to",
            "has to",
            "must",
            "should"
        ],
        "correct": 0,
        "explanation": "Con el auxiliar 'Does' el verbo vuelve a su forma base: 'have to'.",
        "id": "q_gg4_nat_87"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ wear sunscreen when going to the beach in summer.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "'Should' para aconsejar protección solar contra rayos UV.",
        "id": "q_gg4_nat_88"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Visitors _______ litter in the national park; keep nature clean.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't' prohíbe arrojar basura en reservas naturales.",
        "id": "q_gg4_nat_89"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "She _______ speak three languages fluently: English, Spanish, and Italian.",
        "options": [
            "can",
            "mustn't",
            "shouldn't",
            "have to"
        ],
        "correct": 0,
        "explanation": "'Can' para expresar habilidad lingüística presente.",
        "id": "q_gg4_nat_90"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ forget to lock the door when you leave the house.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't forget' es la advertencia típica de no olvidar cerrar con llave.",
        "id": "q_gg4_nat_91"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ bring a gift to the party, but it is nice if you do.",
        "options": [
            "mustn't",
            "don't have to",
            "can't",
            "shouldn't"
        ],
        "correct": 1,
        "explanation": "'Don't have to' aclara que no es obligatorio llevar regalo.",
        "id": "q_gg4_nat_92"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "I have a terrible toothache. - You _______ go to the dentist.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "'Should' aconseja la visita odontológica correspondiente.",
        "id": "q_gg4_nat_93"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Swimming is not allowed here. You _______ swim in this river.",
        "options": [
            "don't have to",
            "mustn't",
            "should",
            "can"
        ],
        "correct": 1,
        "explanation": "'Mustn't' para obedecer el cartel de 'Swimming not allowed'.",
        "id": "q_gg4_nat_94"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "_______ you run 10 kilometers when you were younger?",
        "options": [
            "Could",
            "Can",
            "Must",
            "Should"
        ],
        "correct": 0,
        "explanation": "'Could' para preguntar sobre resistencia física en una etapa pasada.",
        "id": "q_gg4_nat_95"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ cheat during examinations; it is against school rules.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't' prohíbe copiar o hacer trampa en exámenes.",
        "id": "q_gg4_nat_96"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ drink at least two liters of water every day.",
        "options": [
            "should",
            "shouldn't",
            "mustn't",
            "can't"
        ],
        "correct": 0,
        "explanation": "'Should' recomienda una buena pauta de hidratación corporal.",
        "id": "q_gg4_nat_97"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "We _______ buy any milk; mom has already bought two cartons.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "must"
        ],
        "correct": 1,
        "explanation": "'Don't have to' porque la necesidad ya fue satisfecha.",
        "id": "q_gg4_nat_98"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "Drivers _______ use mobile phones while driving unless hands-free.",
        "options": [
            "mustn't",
            "don't have to",
            "should",
            "can"
        ],
        "correct": 0,
        "explanation": "'Mustn't' prohíbe manipular el teléfono al volante.",
        "id": "q_gg4_nat_99"
    },
    {
        "grade": "gogetter4",
        "category": "naturales",
        "question": "You _______ be polite and say 'please' and 'thank you'.",
        "options": [
            "should",
            "mustn't",
            "shouldn't",
            "don't have to"
        ],
        "correct": 0,
        "explanation": "'Should' para aconsejar normas de cortesía y buenos modales.",
        "id": "q_gg4_nat_100"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If it rains tomorrow, we _______ the football match.",
        "options": [
            "cancel",
            "will cancel",
            "cancelled",
            "cancelling"
        ],
        "correct": 1,
        "explanation": "First Conditional: If + Present Simple, will + verbo base en la cláusula principal.",
        "id": "q_gg4_soc_51"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Look at that boy on the skateboard! He is going too fast, he _______ fall!",
        "options": [
            "will",
            "is going to",
            "falls",
            "fell"
        ],
        "correct": 1,
        "explanation": "Usamos 'be going to' para predicciones basadas en evidencia visual evidente presente.",
        "id": "q_gg4_soc_52"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Don't worry about the dishes. I _______ them for you.",
        "options": [
            "will wash",
            "am washing",
            "washed",
            "wash"
        ],
        "correct": 0,
        "explanation": "Usamos 'will' para ofrecimientos y decisiones espontáneas tomadas en el momento.",
        "id": "q_gg4_soc_53"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "What _______ you do if you miss the morning bus?",
        "options": [
            "will",
            "do",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "En First Conditional preguntamos: 'What will you do if...?'.",
        "id": "q_gg4_soc_54"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I think robot teachers _______ replace human teachers in the future.",
        "options": [
            "won't",
            "aren't",
            "don't",
            "haven't"
        ],
        "correct": 0,
        "explanation": "Usamos 'won't' (will not) para predicciones de futuro basadas en opiniones ('I think...').",
        "id": "q_gg4_soc_55"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you heat ice, it _______ into water.",
        "options": [
            "melts",
            "will melt",
            "melted",
            "is melting"
        ],
        "correct": 0,
        "explanation": "Zero Conditional: If + Present Simple, Present Simple para hechos científicos y leyes naturales.",
        "id": "q_gg4_soc_56"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ to the cinema on Saturday evening; we have already bought our tickets.",
        "options": [
            "go",
            "are going",
            "will go",
            "went"
        ],
        "correct": 1,
        "explanation": "Usamos Present Continuous ('are going') para planes y acuerdos futuros ya organizados (arrangements).",
        "id": "q_gg4_soc_57"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If she _______ hard for the test, she will pass with an excellent grade.",
        "options": [
            "study",
            "studies",
            "will study",
            "studied"
        ],
        "correct": 1,
        "explanation": "En la condición 'if' de First Conditional usamos Present Simple ('she studies').",
        "id": "q_gg4_soc_58"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "The phone is ringing! - I _______ answer it.",
        "options": [
            "will",
            "am going to",
            "am answering",
            "answer"
        ],
        "correct": 0,
        "explanation": "'I will answer it' es una decisión espontánea inmediata.",
        "id": "q_gg4_soc_59"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Are you _______ travel to Bariloche this winter?",
        "options": [
            "going to",
            "will",
            "go to",
            "going"
        ],
        "correct": 0,
        "explanation": "Estructura 'Are you going to travel...?' para indagar sobre intenciones y planes futuros.",
        "id": "q_gg4_soc_60"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you don't wear a warm coat, you _______ catch a cold.",
        "options": [
            "will",
            "would",
            "do",
            "are"
        ],
        "correct": 0,
        "explanation": "First Conditional: consecuencia probable en el futuro con 'will'.",
        "id": "q_gg4_soc_61"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I promise I _______ tell your secret to anyone.",
        "options": [
            "won't",
            "don't",
            "am not",
            "haven't"
        ],
        "correct": 0,
        "explanation": "Usamos 'won't' para hacer promesas solemnes ('I promise I won't...').",
        "id": "q_gg4_soc_62"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Look at those dark grey clouds! It _______ snow tonight.",
        "options": [
            "is going to",
            "will",
            "snows",
            "snowed"
        ],
        "correct": 0,
        "explanation": "'is going to' para predicción con evidencia visual en el cielo.",
        "id": "q_gg4_soc_63"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If plants don't get enough sunlight and water, they _______.",
        "options": [
            "die",
            "will die",
            "died",
            "dying"
        ],
        "correct": 0,
        "explanation": "Zero Conditional para una consecuencia biológica invariable ('they die').",
        "id": "q_gg4_soc_64"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Next year, my family _______ move into a newly built house.",
        "options": [
            "is going to",
            "will to",
            "moves",
            "moved"
        ],
        "correct": 0,
        "explanation": "'is going to' para planes ya decididos e intenciones de futuro.",
        "id": "q_gg4_soc_65"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If I find your missing keys, I _______ call you immediately.",
        "options": [
            "will",
            "would",
            "did",
            "am"
        ],
        "correct": 0,
        "explanation": "First Conditional: 'I will call you immediately'.",
        "id": "q_gg4_soc_66"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Scientists believe electric cars _______ be cheaper in ten years.",
        "options": [
            "will",
            "are going",
            "are",
            "do"
        ],
        "correct": 0,
        "explanation": "Predicción general a futuro tras verbos de opinión/creencia ('believe').",
        "id": "q_gg4_soc_67"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "What are your plans for tonight? - I _______ watch a comedy with my sister.",
        "options": [
            "am going to",
            "will",
            "watch",
            "watched"
        ],
        "correct": 0,
        "explanation": "Para expresar una intención previamente pensada usamos 'am going to'.",
        "id": "q_gg4_soc_68"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If he _______ on time, the teacher will not let him enter the exam.",
        "options": [
            "doesn't arrive",
            "won't arrive",
            "didn't arrive",
            "isn't arriving"
        ],
        "correct": 0,
        "explanation": "En la cláusula con 'if' de First Conditional se usa Present Simple negativo ('doesn't arrive').",
        "id": "q_gg4_soc_69"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I'm really thirsty! - Wait a second, I _______ you a glass of water.",
        "options": [
            "will bring",
            "am bringing",
            "brought",
            "bring"
        ],
        "correct": 0,
        "explanation": "Ofrecimiento espontáneo con 'will' ('I will bring').",
        "id": "q_gg4_soc_70"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If water reaches 0 degrees Celsius, it _______.",
        "options": [
            "freezes",
            "will freeze",
            "froze",
            "freezing"
        ],
        "correct": 0,
        "explanation": "Zero Conditional: hecho físico universal con Present Simple ('freezes').",
        "id": "q_gg4_soc_71"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Maybe humans _______ build cities on Mars by the year 2100.",
        "options": [
            "will",
            "are going to",
            "do",
            "did"
        ],
        "correct": 0,
        "explanation": "Con palabras de duda/posibilidad como 'maybe' o 'perhaps' usamos 'will'.",
        "id": "q_gg4_soc_72"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Careful! You _______ spill your hot tea on the keyboard!",
        "options": [
            "are going to",
            "will",
            "spill",
            "spilled"
        ],
        "correct": 0,
        "explanation": "Advertencia basada en lo que está a punto de suceder por evidencia inmediata ('are going to').",
        "id": "q_gg4_soc_73"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you mix red and yellow paint, you _______ orange.",
        "options": [
            "get",
            "will get",
            "got",
            "getting"
        ],
        "correct": 0,
        "explanation": "Zero Conditional: resultado científico constante ('you get').",
        "id": "q_gg4_soc_74"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ have a barbecue on Sunday if the weather is sunny.",
        "options": [
            "will",
            "would",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "Cláusula principal de First Conditional con 'will'.",
        "id": "q_gg4_soc_75"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I don't think Argentina _______ lose the next match.",
        "options": [
            "will",
            "is going",
            "does",
            "did"
        ],
        "correct": 0,
        "explanation": "Predicción subjetiva con 'I don't think ... will'.",
        "id": "q_gg4_soc_76"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you press this power button, the computer _______ on.",
        "options": [
            "turns",
            "will turn",
            "turned",
            "turning"
        ],
        "correct": 0,
        "explanation": "Zero Conditional: funcionamiento técnico predecible ('turns on').",
        "id": "q_gg4_soc_77"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Emma _______ to a concert this evening; she showed me the pass.",
        "options": [
            "is going",
            "goes",
            "will go",
            "went"
        ],
        "correct": 0,
        "explanation": "Present Continuous para un plan formalmente cerrado con pase en mano.",
        "id": "q_gg4_soc_78"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If we hurry up, we _______ catch the earlier train.",
        "options": [
            "will",
            "would",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "First conditional con posibilidad real en el futuro ('will').",
        "id": "q_gg4_soc_79"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Look out! That ladder is shaking! It _______ collapse!",
        "options": [
            "is going to",
            "will",
            "collapses",
            "collapsed"
        ],
        "correct": 0,
        "explanation": "Evidencia física observable ('ladder is shaking') -> 'is going to collapse'.",
        "id": "q_gg4_soc_80"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If nobody helps clean the kitchen, Mom _______ angry.",
        "options": [
            "will be",
            "is",
            "was",
            "being"
        ],
        "correct": 0,
        "explanation": "First conditional con consecuencia futura probable ('will be').",
        "id": "q_gg4_soc_81"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I hope the weather _______ warm and sunny this weekend.",
        "options": [
            "will be",
            "is going to be",
            "was",
            "being"
        ],
        "correct": 0,
        "explanation": "Con expresiones de deseo futuro como 'I hope' usamos 'will be'.",
        "id": "q_gg4_soc_82"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you touch a flame, you _______ burned.",
        "options": [
            "get",
            "will get",
            "got",
            "getting"
        ],
        "correct": 0,
        "explanation": "Zero conditional para causa y efecto inmediato ('you get').",
        "id": "q_gg4_soc_83"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "What time _______ your flight departing tomorrow morning?",
        "options": [
            "is",
            "will",
            "does",
            "are"
        ],
        "correct": 0,
        "explanation": "Present Continuous para horarios de viaje concertados ('is your flight departing').",
        "id": "q_gg4_soc_84"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If they invite us to the birthday party, we _______ definitely attend.",
        "options": [
            "will",
            "would",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "First conditional ('we will definitely attend').",
        "id": "q_gg4_soc_85"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Don't drop that glass vase, or it _______ shatter into pieces!",
        "options": [
            "will",
            "is going to",
            "shatters",
            "shattered"
        ],
        "correct": 0,
        "explanation": "Advertencia condicional rápida con 'or it will...'.",
        "id": "q_gg4_soc_86"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "They _______ visit the Iguazú Falls next October; hotel is reserved.",
        "options": [
            "are going to",
            "will",
            "visit",
            "visited"
        ],
        "correct": 0,
        "explanation": "Intención y plan vacacional confirmado ('are going to').",
        "id": "q_gg4_soc_87"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you leave chocolate out in the hot sun, it _______.",
        "options": [
            "melts",
            "will melt",
            "melted",
            "melting"
        ],
        "correct": 0,
        "explanation": "Zero conditional para una reacción física natural ('it melts').",
        "id": "q_gg4_soc_88"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I am sure you _______ do exceptionally well in the competition.",
        "options": [
            "will",
            "are going to",
            "did",
            "do"
        ],
        "correct": 0,
        "explanation": "Predicción afirmativa de aliento con 'I am sure you will...'.",
        "id": "q_gg4_soc_89"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If he _______ enough money, he will buy the new gaming console.",
        "options": [
            "saves",
            "will save",
            "saved",
            "saving"
        ],
        "correct": 0,
        "explanation": "Present Simple tras 'if' en First Conditional ('he saves').",
        "id": "q_gg4_soc_90"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Someone is knocking at the gate. - I _______ go and check who it is.",
        "options": [
            "will",
            "am going to",
            "am going",
            "go"
        ],
        "correct": 0,
        "explanation": "Decisión instantánea tomada en el momento ('I will go').",
        "id": "q_gg4_soc_91"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If you don't sleep at least eight hours, you _______ tired in class.",
        "options": [
            "will feel",
            "feel",
            "felt",
            "are feeling"
        ],
        "correct": 0,
        "explanation": "First conditional: consecuencia futura esperada ('will feel').",
        "id": "q_gg4_soc_92"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Watch out! That cup of coffee _______ fall off the desk!",
        "options": [
            "is going to",
            "will",
            "falls",
            "fell"
        ],
        "correct": 0,
        "explanation": "Predicción inminente respaldada por la vista directa ('is going to').",
        "id": "q_gg4_soc_93"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If iron is exposed to moisture and oxygen, it _______.",
        "options": [
            "rusts",
            "will rust",
            "rusted",
            "rusting"
        ],
        "correct": 0,
        "explanation": "Zero conditional: principio químico de oxidación ('it rusts').",
        "id": "q_gg4_soc_94"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "Where _______ you travel if you win the contest?",
        "options": [
            "will",
            "do",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "First conditional en pregunta ('Where will you travel if...?').",
        "id": "q_gg4_soc_95"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I think it _______ rain later this afternoon, so take a raincoat.",
        "options": [
            "will",
            "is going to",
            "rains",
            "rained"
        ],
        "correct": 0,
        "explanation": "Predicción meteorológica basada en conjetura personal ('I think it will...').",
        "id": "q_gg4_soc_96"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If babies are hungry, they _______.",
        "options": [
            "cry",
            "will cry",
            "cried",
            "crying"
        ],
        "correct": 0,
        "explanation": "Zero conditional: conducta biológica y universal ('they cry').",
        "id": "q_gg4_soc_97"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "We _______ have dinner with our grandparents on Friday evening.",
        "options": [
            "are having",
            "will have",
            "have",
            "had"
        ],
        "correct": 0,
        "explanation": "Present Continuous para una cita social confirmada en agenda.",
        "id": "q_gg4_soc_98"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "If the library is closed, where _______ you study?",
        "options": [
            "will",
            "do",
            "did",
            "are"
        ],
        "correct": 0,
        "explanation": "First conditional interrogativo ('where will you study?').",
        "id": "q_gg4_soc_99"
    },
    {
        "grade": "gogetter4",
        "category": "sociales",
        "question": "I promise I _______ be late for the meeting tomorrow.",
        "options": [
            "won't",
            "am not",
            "don't",
            "haven't"
        ],
        "correct": 0,
        "explanation": "Promesa formal en negativo ('I promise I won't be late').",
        "id": "q_gg4_soc_100"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A veterinarian is a doctor _______ treats sick and injured animals.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "Usamos el pronombre relativo 'who' para referirnos a personas.",
        "id": "q_gg4_ing_51"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A thermometer is an instrument _______ measures temperature.",
        "options": [
            "who",
            "which",
            "where",
            "when"
        ],
        "correct": 1,
        "explanation": "Usamos el pronombre relativo 'which' (o 'that') para referirnos a cosas u objetos.",
        "id": "q_gg4_ing_52"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A bakery is a shop _______ you can buy fresh bread and pastries.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "Usamos el pronombre relativo 'where' para referirnos a lugares.",
        "id": "q_gg4_ing_53"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A person _______ designs bridges and buildings is an engineer.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "Usamos 'who' como pronombre relativo para personas.",
        "id": "q_gg4_ing_54"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A submarine is a watercraft _______ can travel underwater.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "Usamos 'which' para cosas, vehículos e inventos.",
        "id": "q_gg4_ing_55"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A gym is a sports facility _______ people go to exercise and train.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "Usamos 'where' para hacer referencia a un lugar.",
        "id": "q_gg4_ing_56"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "An astronaut is someone _______ travels into outer space.",
        "options": [
            "who",
            "which",
            "where",
            "when"
        ],
        "correct": 0,
        "explanation": "'Who' para personas.",
        "id": "q_gg4_ing_57"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A smartphone is a handheld gadget _______ allows you to surf the web.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para artefactos tecnológicos.",
        "id": "q_gg4_ing_58"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A library is a quiet building _______ students read and borrow books.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para espacios físicos y lugares.",
        "id": "q_gg4_ing_59"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A chef is a professional cook _______ prepares delicious meals in restaurants.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para oficios y profesiones.",
        "id": "q_gg4_ing_60"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A telescope is a device _______ makes distant planets and stars look closer.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para instrumentos científicos.",
        "id": "q_gg4_ing_61"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "An airport is an expansive terminal _______ airplanes land and take off.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para terminales y ubicaciones.",
        "id": "q_gg4_ing_62"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A journalist is a reporter _______ writes news articles for newspapers or websites.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para profesionales de prensa.",
        "id": "q_gg4_ing_63"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A dictionary is a reference book _______ explains the meaning of words.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para libros y objetos.",
        "id": "q_gg4_ing_64"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A campsite is an outdoor area _______ travelers set up tents.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para locaciones de campamento.",
        "id": "q_gg4_ing_65"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A firefighter is a brave emergency worker _______ puts out fires.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para personas.",
        "id": "q_gg4_ing_66"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A microscope is an optical tool _______ magnifies tiny cells and bacteria.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para instrumentos ópticos.",
        "id": "q_gg4_ing_67"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A pharmacy is a store _______ customers purchase medicine and health supplies.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para establecimientos comerciales.",
        "id": "q_gg4_ing_68"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "An architect is a professional _______ drafts blueprints for houses.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para describir a una persona por su profesión.",
        "id": "q_gg4_ing_69"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A parachute is a large fabric canopy _______ slows down a skydiver's fall.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para aparatos y objetos mecánicos.",
        "id": "q_gg4_ing_70"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A museum is a cultural venue _______ valuable historical artifacts are exhibited.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para instituciones y lugares.",
        "id": "q_gg4_ing_71"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A detective is an investigator _______ gathers clues to solve criminal mysteries.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para personas dedicadas a la investigación.",
        "id": "q_gg4_ing_72"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A drone is an unmanned flying vehicle _______ is controlled by a remote device.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para vehículos aéreos y máquinas.",
        "id": "q_gg4_ing_73"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A stadium is a massive arena _______ thousands of fans watch sports matches.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para canchas y arenas deportivas.",
        "id": "q_gg4_ing_74"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A pilot is an aviator _______ operates an aircraft through the skies.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para pilotos y personas.",
        "id": "q_gg4_ing_75"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A compass is a navigational instrument _______ shows the magnetic north.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para instrumentos de orientación.",
        "id": "q_gg4_ing_76"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A laboratory is a secure room _______ scientific experiments are conducted.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para salas de investigación.",
        "id": "q_gg4_ing_77"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A lifeguard is a trained swimmer _______ watches over beach visitors.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para rescatistas.",
        "id": "q_gg4_ing_78"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A lifejacket is a buoyant vest _______ prevents a person from drowning in water.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para indumentaria de rescate y objetos.",
        "id": "q_gg4_ing_79"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A garage is a designated building _______ vehicles are parked or repaired.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para talleres y cocheras.",
        "id": "q_gg4_ing_80"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A dentist is an oral specialist _______ cleans and fixes your teeth.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para profesionales de la salud bucal.",
        "id": "q_gg4_ing_81"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A calculator is an electronic apparatus _______ performs arithmetic calculations.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para aparatos electrónicos.",
        "id": "q_gg4_ing_82"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A cinema is an entertainment hall _______ audiences watch the latest movies.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para salas de proyección cinematográfica.",
        "id": "q_gg4_ing_83"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A tour guide is an expert _______ shows tourists around famous landmarks.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para guías de turismo.",
        "id": "q_gg4_ing_84"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A battery is an energy storage cell _______ powers portable devices.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para componentes y pilas.",
        "id": "q_gg4_ing_85"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A greenhouse is a glass structure _______ plants are grown under controlled heat.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para invernáculos y espacios de cultivo.",
        "id": "q_gg4_ing_86"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "An electrician is a technician _______ installs and repairs wiring systems.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para técnicos y oficios.",
        "id": "q_gg4_ing_87"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A speedometer is an instrument _______ indicates how fast a car is moving.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para instrumentos de medición de velocidad.",
        "id": "q_gg4_ing_88"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A harbor is a coastal area _______ ships and boats drop anchor safely.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para puertos y muelles.",
        "id": "q_gg4_ing_89"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A mechanic is a specialist _______ repairs car engines and transmissions.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para mecánicos.",
        "id": "q_gg4_ing_90"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A flashlight is a portable light source _______ operates on batteries.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para linternas y herramientas manuales.",
        "id": "q_gg4_ing_91"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "An observatory is a research building _______ astronomers study the cosmos.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para observatorios astronómicos.",
        "id": "q_gg4_ing_92"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A novelist is a creative author _______ writes fictional narrative books.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para escritores y autores.",
        "id": "q_gg4_ing_93"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A satellite is an orbital apparatus _______ sends television and internet signals.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para satélites y artefactos aeroespaciales.",
        "id": "q_gg4_ing_94"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A zoo is an animal park _______ visitors observe species from across the globe.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para parques zoológicos.",
        "id": "q_gg4_ing_95"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A surgeon is a specialized medical doctor _______ performs surgical operations.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para cirujanos.",
        "id": "q_gg4_ing_96"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A barcode is a printed pattern of parallel lines _______ identifies products.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para códigos y patrones gráficos.",
        "id": "q_gg4_ing_97"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A studio is a dedicated workspace _______ artists paint or record songs.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Where' para estudios artísticos y de grabación.",
        "id": "q_gg4_ing_98"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A meteorologist is a scientist _______ studies weather conditions and climate.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 0,
        "explanation": "'Who' para meteorólogos.",
        "id": "q_gg4_ing_99"
    },
    {
        "grade": "gogetter4",
        "category": "ingenio",
        "question": "A passport is an official government document _______ certifies international identity.",
        "options": [
            "who",
            "which",
            "where",
            "whose"
        ],
        "correct": 1,
        "explanation": "'Which' para pasaportes y documentos legales.",
        "id": "q_gg4_ing_100"
    }
];

// Soporte para exportación en entornos Node/CommonJS si fuera necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CATEGORIES, QUESTIONS_DATA };
}

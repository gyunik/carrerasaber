// ==========================================================================
// BANCO DE PREGUNTAS POR GRADO ESCOLAR (5.°, 6.° y 7.° Grado)
// Total preguntas: 600 (200 por grado / 40 por materia)
// Diseñado para primaria alta argentina / latinoamericana
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
    }
    ,
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
        "explanation": "First Conditional sobre ecología (Go Getter 4 Unit 6): 'will stay safe'.",
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
        "explanation": "Profesión/persona de cine (Go Getter 4 Unit 4): 'an athlete who does'.",
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
        "explanation": "'Cheerful' significa alegre, sonriente y optimista (Go Getter 4 Unit 1: Personality).",
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
        "explanation": "'Ponytail' es una colita de caballo (Go Getter 4 Unit 1: Hairstyles).",
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
        "explanation": "'Take notes' es la frase idiomática correcta para tomar apuntes (Go Getter 4 Unit 2).",
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
        "explanation": "'Goggles' son antiparras para natación o esquí (Go Getter 4 Unit 3: Sports gear).",
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
        "explanation": "Una 'autobiography' es la historia de vida escrita por la propia persona (Go Getter 4 Unit 4).",
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
        "explanation": "'Deforestation' es deforestación (Go Getter 4 Unit 6: Protect the Planet).",
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
    }
];

// Soporte para exportación en entornos Node/CommonJS si fuera necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CATEGORIES, QUESTIONS_DATA };
}

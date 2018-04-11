var questions = [
    {
        letter: 'a',
        answer: ['abducir', 'arma', 'abridor'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.',
            'COL LA A. Instrumento o máquina que sirve para atacar o defenderse.',
            'CON LA A. Instrumento usado para levantar las tapas de ciertas botellas.'
        ]
    },
    {
        letter: 'b',
        answer: ['bingo', 'bañarse', 'broca'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA B. Juego que ha sacado de quicio a todos los "Skylabers" en las sesiones de precurso.',
            'CON LA B. Entrar en el agua para lavarse, para nadar o jugar.',
        ]
    },
    {
        letter: 'c',
        answer: ['churumbel', 'cazadora', 'cantar'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA C. Niño, crío, bebé',
            'CON LA C. Ropa de abrigo que cubre desde los hombros a la cintura.',
            'CON LA C. Emitir con la voz sonidos melodiosos.'
        ]
    },
    {
        letter: 'd',
        answer: ['diarrea', 'debil', 'dialogo'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.',
            'CON LA D. Que tiene poca fuerza, poco vigor o poca resistencia.',
            'CON LA D. Conversación entre dos o más personas.'
        ]
    },
    {
        letter: 'e',
        answer: ['ectoplasma', 'edificio','elegir'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
            'CON LA E. Lugar que se usa para viviendas, oficinas, colegios, etc.',
            'CON LA E. Escoger algo o a alguien.' 
        ]
    },
    {
        letter: 'f',
        answer: ['fácil', 'futuro'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.',
            'CON LA F. Tiempo que viene después.',
        ]
    },
    {
        letter: 'g',
        answer: ['galaxia', 'grua'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.',
            'CON LA G. Máquina para levantar objetos pesados y moverlos de un lugar a otro.',
        ]
    },
    {
        letter: 'h',
        answer: ['harakiri', 'hundirse'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA H. Suicidio ritual japonés por desentrañamiento.',
            'CON LA H. Ir abajo dentro del agua.',
        ]
    },
    {
        letter: 'i',
        answer: ['iglesia', 'isla'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA I. Templo cristiano.',
            'CON LA I. Territorio que está rodeado de agua por todas partes.'
        ]
    },
    {
        letter: 'j',
        answer: ['jabalí', 'juguete'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA J. Variedad salvaje del cerdo que sale en la película "El Rey León", de nombre Pumba.',
            'CON LA J. Objeto que sirve para que jueguen los niños.'
        ]
    },
    {
        letter: 'k',
        answer: ['kamikaze', 'kilo'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA K. Persona que se juega la vida realizando una acción temeraria',
            'CON LA K. Medida para pesar (equivale a mil gramos).'
        ]
    },
    {
        letter: 'l',
        answer: ['licántropo', 'lata'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA L. Hombre lobo.',
            'CON LA L. Envase de metal.'
        ]
    },
    {
        letter: 'm',
        answer: ['misántropo', 'manzana'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
            'CON LA M. Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura.'
        ]
    },
    {
        letter: 'n',
        answer: ['necedad', 'nunca'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA N. Demostración de poca inteligencia',
            'CON LA N. Ningún día o en ningún tiempo.'
        ]
    },
    {
        letter: 'ñ',
        answer: ['señal', 'sueño'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
            'CONTIENE LA Ñ. Proceso que aparece algunas veces cuando descansamos'
        ]
    },
    {
        letter: 'o',
        answer: ['orco', 'oveja'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
            'CON LA O. Animal doméstico que tiene el cuerpo cubierto de lana.'
        ]
    },
    {
        letter: 'p',
        answer: ['protoss', 'pasear'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
            'CON LA P. Andar por placer o para hacer ejercicio.'
        ]
    },
    {
        letter: 'q',
        answer: ['queso', 'quilla'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
            'CON LA Q. Parte que soporta la estructura de un barco'
        ]
    },
    {
        letter: 'r',
        answer: ['ratón', 'resumen'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA R. Roedor',
            'CON LA R. Pocas palabras que cuentan una historia más larga.'
        ]
    },
    {
        letter: 's',
        answer: ['stackoverflow', 'sandalia'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA S. Comunidad salvadora de todo desarrollador informático',
            'CON LA S. Calzado que no tapa todo el pie.'
        ]
    },
    {
        letter: 't',
        answer: ['Terminator', 'techo'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
            'CON LA T. Parte de una habitación que está arriba.'
        ]
    },
    {
        letter: 'u',
        answer: ['unamuno', 'urgente'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA U. Escritor y filósofo español de la generación del 98 autor del libro "Niebla" en 1914',
            'CON LA U. Que no puede esperar.'
        ]
    },
    {
        letter: 'v',
        answer: ['vikingos', 'veloz'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
            'CON LA V. Que es muy rápido.'
        ]
    },
    {
        letter: 'w',
        answer: ['sándwich', 'whisky'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
            'CON LA W. Tipo de bebida que contiene Alcohol'
        ]
    },
    {
        letter: 'x',
        answer: ['botox', 'saxo'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
            'CONTIENE LA X. Instrumennto de viento utilizado mucho en la música Jazz.'
        ]
    },
    {
        letter: 'y',
        answer: ['peyote', 'yegua'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
            'CONTIENE LA Y. Hembra del caballo.'
        ]
    },
    {
        letter: 'z',
        answer: ['zen', 'zarpar'],
        status: 0,
        prequestion:("Con la "),
        question: [
            'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
            'CON LA Z. Empezar a navegar'
        ]
    }
];

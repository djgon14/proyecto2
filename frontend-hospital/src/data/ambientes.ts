export type Ambiente={id:string;name:string;type:string;capacity:number;image:string;description:string};
export const ambientes:Ambiente[]=[
  {
    "id": "cancha-secundaria",
    "name": "Cancha de Secundaria",
    "type": "Deportivo",
    "capacity": 80,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/cancha1.jpeg",
    "description": "Cancha para actividades deportivas de secundaria."
  },
  {
    "id": "cancha-primaria-1",
    "name": "Cancha de Primaria 1",
    "type": "Deportivo",
    "capacity": 60,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/cancha1.jpeg",
    "description": "Primera cancha para actividades de primaria."
  },
  {
    "id": "cancha-primaria-2",
    "name": "Cancha de Primaria 2",
    "type": "Deportivo",
    "capacity": 60,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/cancha2.jpeg",
    "description": "Segunda cancha para actividades de primaria."
  },
  {
    "id": "coliseo",
    "name": "Coliseo",
    "type": "Deportivo / Eventos",
    "capacity": 500,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/coliseo.jpeg",
    "description": "Espacio para eventos y actividades institucionales."
  },
  {
    "id": "templo",
    "name": "Templo",
    "type": "Institucional",
    "capacity": 450,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/templo.jpeg",
    "description": "Espacio para celebraciones institucionales."
  },
  {
    "id": "computacion-1",
    "name": "Laboratorio de Computación 1",
    "type": "Académico",
    "capacity": 50,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/curso1.jpeg",
    "description": "Aula de computación y tecnología."
  },
  {
    "id": "computacion-2",
    "name": "Laboratorio de Computación 2",
    "type": "Académico",
    "capacity": 50,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/curso2.jpeg",
    "description": "Segunda aula de computación."
  },
  {
    "id": "teatro",
    "name": "Teatro",
    "type": "Cultural / Eventos",
    "capacity": 250,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/teatro.jpeg",
    "description": "Espacio para obras y presentaciones."
  },
  {
    "id": "laboratorio-ciencias",
    "name": "Laboratorio de Ciencias",
    "type": "Académico",
    "capacity": 40,
    "image": "https://raw.githubusercontent.com/djgon14/proyecto3/main/laboratorio.jpeg",
    "description": "Laboratorio para prácticas de ciencias."
  }
];
export const horarios=Array.from({length:25},(_,i)=>{const m=420+i*30;return String(Math.floor(m/60)).padStart(2,"0")+":"+String(m%60).padStart(2,"0")});

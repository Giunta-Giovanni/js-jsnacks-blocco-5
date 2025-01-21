const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// metodo semplice
const classeMarco = students.find((student) => {
  return student.name === 'Marco Lanci'
});

// metodo compatto
// const classeMarco = students.find(student => student.name === 'Marco Lanci');
console.log(classeMarco.class);


// metodo alternativo
const classeMarco1 = students.find((student) => student.name === 'Marco Lanci')?.class;

console.log(classeMarco1);
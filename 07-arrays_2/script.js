const pessoas = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comentarios = [
  { text: 'Amo isso!', id: 523423 },
  { text: 'Muito bom!', id: 823423 },
  { text: 'Você é a melhor', id: 2039842 },
  { text: 'Lamen é minha comida favorita', id: 123523 },
  { text: 'Demais!', id: 542328 }
];

console.log('Exercício 1');
const adulto = pessoas.some(pessoa => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - pessoa.year >= 19;
});
console.log(adulto);

console.log('Exercício 2');
const maiores19 = pessoas.every((pessoa) => {
  return pessoa;
})
console.log(maiores19);

console.log('Exercício 3')
comentarioId1 = comentarios.find((comentario) => comentario.id === 823423);
console.log(comentarioId1);

console.log('Exercício 4')
const index = comentarios.findIndex( comentario => comentario.id === 823423);

comentarios.splice(index, 1)
console.table(comentarios);

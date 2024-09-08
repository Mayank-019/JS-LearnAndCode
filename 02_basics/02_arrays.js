const marvelHeroes = ["thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes)     // array k andar array aajyega [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes =  marvelHeroes.concat(dcHeroes)    // combines/concat two elements of two arrays and return new array
// console.log(allHeroes);

// spread => ab har ek element individual hogaya h
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes);  // [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));      // array k andar convert kardiya
console.log(Array.isArray({name: "hitesh"}));   // empty array  => interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

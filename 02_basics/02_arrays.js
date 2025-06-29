const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flush", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);
// console.log(typeof all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array.sort());

// console.log(Array.isArray('Rachit'));
// console.log(Array.from('Rachit'));
// console.log(Array.from({name: "Rachit"})); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3));

const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(numbers);
// console.log(sum);
console.log(numbers);

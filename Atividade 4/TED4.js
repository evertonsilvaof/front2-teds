
let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];


console.log("NOVO NOME:", nomes[2]);


nomes.push("Everton");


nomes.unshift("Fernando");


nomes.pop();


console.log("Array atualizado:", nomes);

let n1 = [2, 4, 6, 8];
let novo = n1.map(valor => valor * 2);
console.log("Valores dobrados:", novo);

let n2 = [1, 3, 5, 7, 9];
let maior5 = n2.filter(valor => valor > 5);
console.log("Maiores que 5:", maior5);

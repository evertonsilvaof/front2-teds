
let numeros = [10, 5, 20, 8, 15];

let menor = numeros[0];
let maior = numeros[0];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];

    if (numeros[i] < menor) {
        menor = numeros[i];
    }

    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);

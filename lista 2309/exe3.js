
let salario = 1000;
let taxa = 0.05;
let anos = 10;

console.log("Salário inicial: R$ " + salario);

for (let i = 1; i <= anos; i++) {
    salario += salario * taxa;
    console.log("Ano " + i + ": R$ " + salario);
}


function calcularInvestimento(capital, taxa, meses) {
    let i = taxa / 100; 
    let montante = capital * Math.pow(1 + i, meses);
    return montante;
}


let capitalInicial = (prompt("Digite o capital inicial:"));
let taxaMensal = (prompt("Digite a taxa de juros mensal:"));
let tempoMeses = (prompt("Digite o tempo do investimento:"));


let resultado = calcularInvestimento(capitalInicial, taxaMensal, tempoMeses);


alert("final do investimento é: R$ " + resultado);

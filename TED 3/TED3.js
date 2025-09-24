
function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}


function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; 
        return valorTotal; 
    }
}


function exibirResumo(valorTotal, valorComDesconto) {
    console.log("Resumo da compra:");
    console.log("Valor total do desconto: R$ " + valorTotal);
    console.log("Valor final com desconto: R$ " + valorComDesconto);
}

let precoUnitario = prompt("Digite o preço unitário do produto:");
let quantidade = prompt("Digite a quantidade comprada:");

let valorTotal = calcularTotal(precoUnitario, quantidade);


let valorFinal = aplicarDesconto(valorTotal);


exibirResumo(valorTotal, valorFinal);

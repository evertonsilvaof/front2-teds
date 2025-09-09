

function lerInteiro(mensagem, min, max) {
    let valor;
    while (true) {
        valor = parseInt(prompt(mensagem));
        if (!isNaN(valor) && valor >= min && valor <= max) {
            break;
        } else {
            alert("Valor inválido. Digite novamente!");
        }
    }
    return valor;
}

function lerFloat(mensagem, min, max) {
    let valor;
    while (true) {
        valor = parseFloat(prompt(mensagem).replace(",", "."));
        if (!isNaN(valor) && valor >= min && valor <= max) {
            break;
        } else {
            alert("Valor inválido. Digite novamente!");
        }
    }
    return valor;
}


let numAulas = lerInteiro("Número de aulas do semestre:", 1, 200);
let faltas = lerInteiro("Número de faltas do aluno:", 0, numAulas);
let p1 = lerFloat("Primeira nota (P1):", 0, 10);
let p2 = lerFloat("Segunda nota (P2):", 0, 10);


let percentualPresenca = ((numAulas - faltas) / numAulas) * 100;


let notaRec = "N/A";
let situacao = "";


if (percentualPresenca < 75) {
    situacao = "REPROVADO POR FALTA";
} else {
    let media = (p1 + p2) / 2;

    if (media >= 7.0) {
        situacao = "APROVADO";
    } else if (media >= 5.0) {
        
        notaRec = lerFloat("Nota complementar (recuperação):", 0, 10);
        let novaMedia = (media + notaRec) / 2;

        if (novaMedia >= 5.0) {
            situacao = "APROVADO NA RECUPERAÇÃO";
        } else {
            situacao = "REPROVADO NA RECUPERAÇÃO";
        }
    } else {
        situacao = "REPROVADO POR NOTA";
    }
}


let relatorio = " RELATÓRIO FINAL \n";
relatorio += "Número de aulas do semestre: " + numAulas + "\n";
relatorio += "Número de faltas do aluno: " + faltas + "\n";
relatorio += "Percentual de presença do aluno: " + percentualPresenca.toFixed(2) + "%\n";
relatorio += "A primeira nota: " + p1 + "\n";
relatorio += "Segunda nota: " + p2 + "\n";
relatorio += "Nota complementar (recuperação): " + notaRec + "\n";
relatorio += "Situação final do aluno: " + situacao;

alert(relatorio);  // Mostra em popup
console.log(relatorio);  // Mostra no console

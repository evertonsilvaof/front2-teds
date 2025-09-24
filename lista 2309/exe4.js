
function calcularCirculo(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log("Raio: " + raio);
    console.log("Área: " + area.toFixed(2));
    console.log("Perímetro: " + perimetro.toFixed(2));
}


let raio = parseFloat(prompt("Digite o raio do círculo:"));


calcularCirculo(raio);

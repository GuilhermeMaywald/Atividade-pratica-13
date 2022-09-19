/*
É hora de começarmos a trabalhar com problemas do mundo real. Vamos criar um algoritmo com uma calculadora de desconto mensal de IR (Imposto de renda) retido na fonte, onde o usuário digitará seu salário e você devolverá o desconto correspondente que ele terá de IR com base na tabela abaixo.

Fonte: https://economia.uol.com.br/imposto-de-renda/noticias/redacao/2022/05/11/tabela-do-imposto-de-renda-2022.htm

Requisitos:
● Você deverá utilizar Arrow Function e Callback na sua solução.
● Fique atento nas regras do IR para atender os cenários propostos.
● A organização do seu código e a nomenclatura das variáveis/funções será avaliada.
● Leiam e compreendam a regra de negócio para desconto de imposto de renda retido na fonte. 
*/

let recebeSalario = Number(prompt("Digite o valor do seu salário mensal: "));

let resultadoDesconto = (resultado) => {
    alert(resultado)
};

let calculoDesconto = (exibeResultado) => {
    let msg = "";
    let resultado = 0;
    if (recebeSalario <= 1903.98) {
        msg = 'Isento de desconto';
    } else if (recebeSalario > 1903.98 && recebeSalario <= 2826.55) {
        resultado = recebeSalario * 0.075 - 142.8;
        msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
    } else if (recebeSalario > 2826.65 && recebeSalario <= 3751.05) {
        resultado = recebeSalario * 0.15 - 354.8;
        msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
    } else if (recebeSalario > 3751.05 && recebeSalario <= 4664.68) {
        resultado = recebeSalario * 0.225 - 636.13;
        msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
    } else {
        resultado = recebeSalario * 0.275 - 869.36;
        msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
    }
    return exibeResultado(msg);
};

calculoDesconto(resultadoDesconto);
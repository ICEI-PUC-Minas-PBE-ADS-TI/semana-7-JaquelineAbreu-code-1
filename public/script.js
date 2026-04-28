// Nome
let nome = prompt("Digite seu nome:");

// Renda
let renda = Number(prompt("Digite sua renda:"));
while (isNaN(renda)) {
    renda = Number(prompt("Digite um número válido para a renda:"));
}

// Quantidade de despesas
let qtd = Number(prompt("Quantas despesas? (1 a 5)"));
while (isNaN(qtd)) {
    qtd = Number(prompt("Digite um número válido:"));
}

// Limitar entre 1 e 5
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;

// Soma das despesas
let total = 0;

for (let i = 1; i <= qtd; i++) {
    let valor = Number(prompt("Despesa " + i + ":"));

    while (isNaN(valor)) {
        valor = Number(prompt("Digite um número válido:"));
    }

    total = total + valor;
}

// Cálculo
let sobra = renda - total;

// Mensagem
let msg;

if (total > renda) {
    msg = "⚠️ Gastou mais do que ganhou.";
} else if (sobra >= renda * 0.3) {
    msg = "✅ Boa sobra.";
} else {
    msg = "🙂 Pode melhorar.";
}

// Resultado
let texto =
"Nome: " + nome + "\n" +
"Renda: " + renda.toFixed(2) + "\n" +
"Despesas: " + total.toFixed(2) + "\n" +
"Sobra: " + sobra.toFixed(2) + "\n" +
msg;

// Saída
alert(texto);
console.log(texto);
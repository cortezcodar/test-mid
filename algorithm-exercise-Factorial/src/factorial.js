function calcularFatorial(numero) {
  if (numero < 0) {
    return "Erro: O número deve ser positivo.";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
}

// Exemplo de uso
const numeroExemplo = 0;
const fatorialDoExemplo = calcularFatorial(numeroExemplo);
console.log(`O fatorial de ${numeroExemplo} é ${fatorialDoExemplo}.`);

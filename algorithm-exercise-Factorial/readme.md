###  Cálculo do Fatorial

## Cálculo do Fatorial

Esta é uma função em JavaScript que calcula o fatorial de um número inteiro positivo fornecido como entrada.

### ✨ Tecnologias Utilziadas

- JAVASCRIPT


### Função `factorial`

```javascript
/**
 * Função para cálculo do fatorial de um número inteiro positivo.
 *
 * @param {number} n - O número inteiro positivo para o qual deseja-se calcular o fatorial.
 * @returns {number} - O fatorial do número fornecido.
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
} 
``` 
### Exemplo 

```javascript
const result1 = factorial(5);
console.log(result1); // Saída: 120

const result2 = factorial(0);
console.log(result2); // Saída: 1

const result3 = factorial(1);
console.log(result3); // Saída: 1
``` 








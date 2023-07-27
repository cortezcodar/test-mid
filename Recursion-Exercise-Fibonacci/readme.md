# Fibonacci - Exemplo de Recursão em JavaScript

Este é um programa simples em JavaScript que implementa a sequência de Fibonacci usando recursão. A sequência de Fibonacci é formada somando os dois números anteriores para obter o próximo número, começando com 0 e 1 (ou 1 e 1, dependendo da ordem inicial).
### Código do Arquivo fibonacci.js
Aqui está o código que você deve copiar para o arquivo fibonacci.js
// fibonacci.js

```javascript
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = fibonacci;
```

### Exemplo de Uso

Após executar o programa, você verá os primeiros números da sequência de Fibonacci exibidos no console:
 
 ```bash
 $ node fibonacci.js
0
1
1
2
3
5
8
13
...
 ```
### Personalização
Você pode ajustar o valor de n dentro do arquivo fibonacci.js para calcular o número de Fibonacci correspondente ao índice desejado. Por exemplo, se você definir n como 10, a função calculará o décimo número na sequência de Fibonacci.

### Observações

A sequência de Fibonacci cresce rapidamente, então, ao calcular números maiores, pode levar algum tempo para a função terminar a execução.

A implementação usando recursão pode não ser a mais eficiente para valores muito grandes de n. Para casos mais complexos, outras abordagens, como a utilização de memória para armazenar valores previamente calculados, podem ser mais adequadas.



# Palindrome 

Este é um pequeno projeto JavaScript para verificar se uma palavra é um palíndromo.

## Função `isPalindrome`

Esta função verifica se uma palavra é um palíndromo. Um palíndromo é uma palavra que é lida da mesma forma de trás para frente, ignorando espaços e diferenciando entre letras maiúsculas e minúsculas.

### Parâmetros

- `word` (string): A palavra a ser verificada.

### Retorno

- `true` (boolean): Retorna `true` se a palavra é um palíndromo.
- `false` (boolean): Retorna `false` se a palavra não é um palíndromo.

## Exemplos de uso

```javascript
console.log(isPalindrome("radar")); // true (é um palíndromo)
console.log(isPalindrome("hello")); // false (não é um palíndromo)
console.log(isPalindrome("level")); // true (é um palíndromo)
console.log(isPalindrome("deified")); // true (é um palíndromo)

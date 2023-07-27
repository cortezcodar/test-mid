# Exercício de estrutura de dados de Pilha em JavaScript

Esta é uma implementação simples de uma estrutura de dados de pilha em JavaScript. A classe `Pilha` permite que você crie e manipule uma pilha.

### ✨ Tecnologias Utilziadas

- JAVASCRIPT


### Pré-requisitos

- Certifique-se de ter o Git instalado em seu computador. Se você ainda não tem o Git, pode baixá-lo e instalá-lo a partir do site oficial do Git: [git-scm.com](https://git-scm.com/).

### Passo a Passo

1. Abra o terminal ou prompt de comando no seu computador.

2. Clone este repositório para o seu sistema local usando o seguinte comando do Git:

git clone https://github.com/cortezcodar/data-structure-exercise-Stack.git

## Instância da Pilha

Para criar uma nova instância da pilha, basta usar o seguinte código:

```javascript
const minhaPilha = new Pilha();
```
### Métodos da Pilha

A classe Pilha possui os seguintes métodos:

```javascript 
1. push(element)
```
O método push permite adicionar um elemento no topo da pilha.
```javascript 
minhaPilha.push(element); 
```
element: O elemento que você deseja adicionar à pilha.

``` 2. pop() ```
O método pop remove e retorna o elemento no topo da pilha.
```javascript
const elementoDesempilhado = minhaPilha.pop();
```

Retorna: O elemento desempilhado. Se a pilha estiver vazia, retornará a mensagem "A pilha está vazia, não é possível realizar o pop.

``` 3. isEmpty() ```
O método isEmpty verifica se a pilha está vazia.

```javascript
const estaVazia = minhaPilha.isEmpty();

```
Retorna: true se a pilha estiver vazia, caso contrário, retorna false.

### Exemplo de Uso

Aqui está um exemplo básico de como utilizar a pilha:


```javascript
// Criar uma nova pilha
const minhaPilha = new Pilha();

// Verificar se a pilha está vazia (deve retornar true)
console.log(minhaPilha.isEmpty());

// Adicionar elementos à pilha
minhaPilha.push(10);
minhaPilha.push(20);
minhaPilha.push(30);

// Verificar se a pilha está vazia novamente (deve retornar false)
console.log(minhaPilha.isEmpty());

// Desempilhar elementos e exibir os resultados
console.log(minhaPilha.pop()); // 30
console.log(minhaPilha.pop()); // 20
console.log(minhaPilha.pop()); // 10
console.log(minhaPilha.pop()); // "A pilha está vazia, não é possível realizar o pop."

// Verificar se a pilha está vazia após desempilhar tudo (deve retornar true)
console.log(minhaPilha.isEmpty());


```

Você pode utilizar essa implementação para lidar com uma pilha de elementos de forma simples e eficiente em JavaScript.


### Obrigado por visitar meu repositório!❤️

# Contagem de Palavras em um Arquivo de Texto

Este é um programa simples em JavaScript que conta o número de palavras em um arquivo de texto fornecido como entrada. O programa desconsidera espaços em branco e a ocorrência da palavra "avaliação" ao realizar a contagem.

## Pré-requisitos

Antes de executar o programa, certifique-se de ter o Node.js instalado em seu sistema. Caso ainda não tenha, você pode baixá-lo e instalá-lo a partir do site oficial do Node.js: https://nodejs.org/

## Como Executar o Programa

Siga os passos abaixo para executar o programa:

1. Clone este repositório para o seu ambiente local ou faça o download do arquivo `contagemPalavras.js`.

2. Abra o terminal ou prompt de comando.

3. Navegue até a pasta "src" do seu projeto, onde o arquivo `contagemPalavras.js` e o arquivo `arquivo.txt` estão localizados. Para isso, utilize o comando:


4. Execute o seguinte comando para rodar o programa:


## Arquivo de Texto

Certifique-se de que o arquivo `arquivo.txt` esteja presente na pasta "src" e preenchido com o texto que você deseja contar as palavras. O programa lerá este arquivo para realizar a contagem.

## Resultado Esperado

O programa lerá o arquivo `arquivo.txt`, removerá todas as ocorrências da palavra "avaliação", dividirá o conteúdo em palavras, contará o número de palavras desconsiderando os espaços em branco e a palavra "avaliação", e exibirá o resultado no console.

Caso ocorra algum erro durante a leitura do arquivo, uma mensagem de erro será exibida no console.

Lembre-se de ajustar o caminho do projeto, caso o arquivo `contagemPalavras.js` e o arquivo `arquivo.txt` estejam em um diretório diferente da pasta "src".

## Exemplo de Uso

```bash
$ node contagemPalavras.js
O arquivo "./src/arquivo.txt" contém 23 palavra(s) (desconsiderando "avaliação" e espaços em branco).
